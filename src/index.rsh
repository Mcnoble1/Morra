'reach 0.1';

const [ isHand, ZERO, ONE, TWO, THREE, FOUR, FIVE ] = makeEnum(6);
const [ isGuess, ZEROG, ONEG, TWOG, THREEG, FOURG, FIVEG, SIXG, SEVENG, EIGHTG, NINEG, TENG ] = makeEnum(11);
const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);

// game logic
const winner = (handA, handB, guessA, guessB) => { 
    if ( guessA == guessB ) 
     {
      const myoutcome = DRAW; //tie
      return myoutcome;
  } else {
    if ( ((handA + handB) == guessA ) ) {
      const myoutcome = A_WINS;
      return myoutcome;// player A wins
    } 
      else {
        if (  ((handA + handB) == guessB)) {
          const myoutcome = B_WINS;
          return myoutcome;// player B wins
      } 
        else {
          const myoutcome = DRAW; // tie
          return myoutcome;
        }
      
      }
    }
  };
  
  
  assert(winner(ZERO,TWO,ZEROG,TWOG)== B_WINS);
  assert(winner(TWO,ZERO,TWOG,ZEROG)== A_WINS);
  assert(winner(ZERO,ONE,ZEROG,TWOG)== DRAW);
  assert(winner(ONE,ONE,ONEG,ONEG)== DRAW);
  
  // asserts for all combinations
  forall(UInt, handA =>
    forall(UInt, handB =>
      forall(UInt, guessA =>
        forall(UInt, guessB =>
      assert(isOutcome(winner(handA, handB, guessA, guessB)))))));
  
  //  asserts for a draw - each guesses the same
  forall(UInt, (handA) =>
    forall(UInt, (handB) =>       
      forall(UInt, (guess) =>
        assert(winner(handA, handB, guess, guess) == DRAW))));   

// Participant Interact interface
const Player = {
    ...hasRandom,
    getHand: Fun([], UInt),
    getGuess: Fun([UInt], UInt),
    seeOutcome: Fun([UInt], Null),
    informTimeout: Fun([], Null),
    seeWinning: Fun([UInt], Null)
};

//  App initialization: definition of Players
export const main = Reach.App(() => {
    const Alice = Participant('Alice', {
        // interact interface here
        ...Player,
        wager: UInt,
        deadline: UInt, // time delta (blocks/rounds)
    })

    const Bob = Participant('Bob', {
        // interact interface here
        ...Player,
        acceptWager: Fun([UInt], Null),
    });

    const informTimeout = () => {
        each([Alice, Bob], () => {
            interact.informTimeout()
        })
    }

    init();

    // Write the logic

    Alice.only(() => {
        const wager = declassify(interact.wager);
        const deadline = declassify(interact.deadline);
    });

    Alice.publish(wager, deadline)
        .pay(wager);
    commit();

    Bob.only(() => {
        interact.acceptWager(wager);
    });

    Bob.pay(wager)
    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout))
   
    var outcome = DRAW;
    invariant(balance() == 2 * wager && isOutcome(outcome));

    while( outcome == DRAW ) {
        commit()

        Alice.only(() => {
            const _handAlice = interact.getHand()
            const [ _commitAlice, _saltAlice ] = makeCommitment(interact, _handAlice);
            const commitAlice = declassify(_commitAlice);
            const _guessAlice = interact.getGuess(_handAlice);
            const [ _commitGuessAlice, _saltGuessAlice ] = makeCommitment(interact, _guessAlice);
            const commitGuessAlice = declassify(_commitGuessAlice);

        })

        Alice.publish(commitAlice)
        .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout))
        commit()

        Alice.publish(commitGuessAlice)
        .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
        commit();

        unknowable(Bob, Alice(_handAlice, _saltAlice));
        // unknowable(Bob, Alice(_guessAlice, _saltGuessAlice));

        Bob.only(() => {
        const _handBob = interact.getHand();
        const handBob = declassify(_handBob);
        const _guessBob = interact.getGuess(_handBob);
        const guessBob = declassify(_guessBob);
        })

        Bob.publish(handBob)
        .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
        commit()

        Bob.publish(guessBob)
        .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
        commit()

        Alice.only(() => {
            const [saltAlice, handAlice] = declassify([_saltAlice, _handAlice]);
            const [saltGuessAlice, guessAlice] = declassify([_saltGuessAlice, _guessAlice]);
        })
    
        Alice.publish(saltAlice, handAlice)
        .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout))
        checkCommitment(commitAlice, saltAlice, handAlice);
        commit()

        Alice.publish(saltGuessAlice, guessAlice)
        .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout))
        checkCommitment(commitGuessAlice, saltGuessAlice, guessAlice);
        commit()

        Alice.only(() => {        
          const WinningNumber = handAlice + handBob;
          interact.seeWinning(WinningNumber);
        });
     
        Alice.publish(WinningNumber)
        .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

        // Outcome of the game
        outcome = winner(handAlice, handBob, guessAlice, guessBob);

        continue
    }

    assert( outcome == A_WINS || outcome == B_WINS );

    transfer(2 * wager).to(outcome == A_WINS ? Alice : Bob);

    commit()

    each([Alice, Bob], () => {
        interact.seeOutcome(outcome);
    })
})


