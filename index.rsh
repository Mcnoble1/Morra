'reach 0.1'

// Participant Interact interface
const Player = {
    getHand: Fun([], UInt),
    seeOutcome: Fun([UInt], Null),
};

//  App initialization: definition of Players
export const main = Reach.App(() => {
    const Player1 = Participant('Player1', {
        // interact interface here
        ...Player,
    })

    const Player2 = Participant('Player2', {
        // interact interface here
        ...Player,
    });

    Player1.only(() => {
        const handPlayer1 = declassify(interact.getHand());
    });
    Player1.publish(handPlayer1)
    commit();

    Player2.only(() => {
        const handPlayer2 = declassify(interact.getHand());
    });
    Player2.publish(handPlayer2)
    commit();

});
