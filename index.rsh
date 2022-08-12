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
  
  
  // assertion that when 
  // Alice throws a 0, AND Bob throws a 2, 
  // and Alice guesses 0 and Bob guesses 2
  // then Bob wins as the total thrown is 2
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
        // commit()

        // Alice.only(() => {        
        //   const WinningNumber = handAlice + handBob;
        //   // interact.seeWinning(WinningNumber);
        // });
     
        // Alice.publish(WinningNumber)
        // .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

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





// 'reach 0.1';

// const [ isFingers, ZERO, ONE, TWO, THREE, FOUR, FIVE ] = makeEnum(6);
// const [ isGuess, ZEROG, ONEG, TWOG, THREEG, FOURG, FIVEG, SIXG, SEVENG, EIGHTG, NINEG, TENG ] = makeEnum(11);
// const [ isOutcome, B_WINS, DRAW, A_WINS ] = makeEnum(3);

// // game logic
// const winner = (fingersA, fingersB, guessA, guessB) => { 
//   if ( guessA == guessB ) 
//    {
//     const myoutcome = DRAW; //tie
//     return myoutcome;
// } else {
//   if ( ((fingersA + fingersB) == guessA ) ) {
//     const myoutcome = A_WINS;
//     return myoutcome;// player A wins
//   } 
//     else {
//       if (  ((fingersA + fingersB) == guessB)) {
//         const myoutcome = B_WINS;
//         return myoutcome;// player B wins
//     } 
//       else {
//         const myoutcome = DRAW; // tie
//         return myoutcome;
//       }
    
//     }
//   }
// };


// // assertion that when 
// // Alice throws a 0, AND Bob throws a 2, 
// // and Alice guesses 0 and Bob guesses 2
// // then Bob wins as the total thrown is 2
// assert(winner(ZERO,TWO,ZEROG,TWOG)== B_WINS);
// assert(winner(TWO,ZERO,TWOG,ZEROG)== A_WINS);
// assert(winner(ZERO,ONE,ZEROG,TWOG)== DRAW);
// assert(winner(ONE,ONE,ONEG,ONEG)== DRAW);

// // assets for all combinations
// forall(UInt, fingersA =>
//   forall(UInt, fingersB =>
//     forall(UInt, guessA =>
//       forall(UInt, guessB =>
//     assert(isOutcome(winner(fingersA, fingersB, guessA, guessB)))))));

// //  asserts for a draw - each guesses the same
// forall(UInt, (fingerA) =>
//   forall(UInt, (fingerB) =>       
//     forall(UInt, (guess) =>
//       assert(winner(fingerA, fingerB, guess, guess) == DRAW))));    

// // added a timeout function
// const Player =
//       { ...hasRandom,
//         getFingers: Fun([], UInt),
//         getGuess: Fun([UInt], UInt),
//         seeWinning: Fun([UInt], Null),
//         seeOutcome: Fun([UInt], Null) ,
//         informTimeout: Fun([], Null)
//        };
// // added a wager function for Alice       
// const Alice =
//         { ...Player,
//           wager: UInt, 
//           ...hasConsoleLogger
//         };
// // added a acceptWager function for Bob
// const Bob =
//         { ...Player,
//           acceptWager: Fun([UInt], Null),
//           ...hasConsoleLogger           
//         };
// const DEADLINE = 30; 

// export const main =
//   Reach.App(
//     {},
//     [Participant('Alice', Alice), Participant('Bob', Bob)],
//     (A, B) => {
//         const informTimeout = () => {
//           each([A, B], () => {
//             interact.informTimeout(); }); };
//       A.only(() => {
//         const wager = declassify(interact.wager); });
//       A.publish(wager)
//         .pay(wager);
//       commit();   

//       B.only(() => {
//         interact.acceptWager(wager); });
//       B.pay(wager)
//         .timeout(relativeTime(DEADLINE), () => closeTo(A, informTimeout));

//       var outcome = DRAW;      
//       invariant(balance() == 2 * wager && isOutcome(outcome) );
//       // loop until we have a winner
//       while ( outcome == DRAW ) {
//         commit();
//         A.only(() => {    
//           const _fingersA = interact.getFingers();
//           const _guessA = interact.getGuess(_fingersA);  
//           // log fingersA to frontend       
//           interact.log(_fingersA);  
//           // interact.log(_guessA);  
//           // We need Alice to be able to publish her fingers and guess, 
//           // but also keep it secret.  makeCommitment does this.    
                      
//           const [_commitA, _saltA] = makeCommitment(interact, _fingersA);
//           const commitA = declassify(_commitA);        
//           const [_guessCommitA, _guessSaltA] = makeCommitment(interact, _guessA);
//           const guessCommitA = declassify(_guessCommitA);   
//       });
     
//         A.publish(commitA)
//           .timeout(relativeTime(DEADLINE), () => closeTo(B, informTimeout));
//         commit();    

//         A.publish(guessCommitA)
//           .timeout(relativeTime(DEADLINE), () => closeTo(B, informTimeout));
//           ;
//         commit();
//         // Bob does not know the values for Alice, but Alice does know the values 
//         unknowable(B, A(_fingersA, _saltA));
//         unknowable(B, A(_guessA, _guessSaltA));

//         B.only(() => {

//           const _fingersB = interact.getFingers();
//       //    interact.log(_fingersB);
//           const _guessB = interact.getGuess(_fingersB);
//       //    interact.log(_guessB);
//           const fingersB = declassify(_fingersB); 
//           const guessB = declassify(_guessB);  

//           });

//         B.publish(fingersB)
//           .timeout(relativeTime(DEADLINE), () => closeTo(A, informTimeout));
//         commit();
//         B.publish(guessB)
//           .timeout(relativeTime(DEADLINE), () => closeTo(A, informTimeout));
  
//         commit();
//         // Alice will declassify the secret information
//         A.only(() => {
//           const [saltA, fingersA] = declassify([_saltA, _fingersA]); 
//           const [guessSaltA, guessA] = declassify([_guessSaltA, _guessA]); 

//         });
//         A.publish(saltA, fingersA)
//           .timeout(relativeTime(DEADLINE), () => closeTo(B, informTimeout));
//         // check that the published values match the original values.
//         checkCommitment(commitA, saltA, fingersA);
//         commit();

//         A.publish(guessSaltA, guessA)
//         .timeout(relativeTime(DEADLINE), () => closeTo(B, informTimeout));
//         checkCommitment(guessCommitA, guessSaltA, guessA);

//         commit();
      
//         A.only(() => {        
//           const WinningNumber = fingersA + fingersB;
//           interact.seeWinning(WinningNumber);
//         });
     
//         A.publish(WinningNumber)
//         .timeout(relativeTime(DEADLINE), () => closeTo(A, informTimeout));

//         outcome = winner(fingersA, fingersB, guessA, guessB);
//         continue; 
       
//       }

//       assert(outcome == A_WINS || outcome == B_WINS);
//       // send winnings to winner 
//       transfer(2 * wager).to(outcome == A_WINS ? A : B);
//       commit();
 
//       each([A, B], () => {
//         interact.seeOutcome(outcome); })
//       exit(); });


