import { loadStdlib, ask } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib();

(async () => {

    const startingBalance = stdlib.parseCurrency(10);
    const accAlice = await stdlib.newTestAccount(startingBalance);
    const accBob = await stdlib.newTestAccount(startingBalance);

    const fmt = (x) => stdlib.formatCurrency(x, 4);
    // get balance of both accounts
    const getBalance = async (who) => fmt( await stdlib.balanceOf(who));

    const beforeAlice = await getBalance(accAlice);
    const beforeBob = await getBalance(accBob);

    const ctcAlice = accAlice.contract(backend);
    const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

            
    const HAND = [0, 1, 2, 3, 4, 5];
    const GUESS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const OUTCOME = ['Bob Wins', 'Draw', 'Alice wins'];

    console.log(`Welcome to the Morra Game`)

    const Player = (Who) => ({
        ...stdlib.hasRandom,
        getHand: () => {
              const hand = Math.floor(Math.random() * 6)
              console.log(`${Who} played ${HAND[hand]} fingers`);
              return hand;
          },
        getGuess: () => {
            const guess = Math.floor(Math.random() * 11);
            console.log(`${Who} guessed ${GUESS[guess]} as total fingers`);
            return guess;
        },
            seeWinning: (winningNumber) => {    
                console.log(`correct total fingers thrown: ${winningNumber}`);
                console.log(`----------------------------`);  
            },
        seeOutcome: (outcome) => {
            console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
        },
        informTimeout: () => {
            console.log(`${Who} observed a timeout`);
        }
    });

    await Promise.all([
        backend.Alice(ctcAlice, {
        // Implement Alice Interact interface here
        ...Player('Alice'),
        wager: stdlib.parseCurrency(5),
        deadline: 10,
        }),
        backend.Bob(ctcBob, {
        // Implement Bob Interact interface here    
        ...Player('Bob'),
        acceptWager: async (amt) => {
            if (Math.random() <= 0.1 ) {
                // timeout Bob
                for (let i = 0; i < 10; i++) {
                    console.log('Bob is thinking...');
                    await stdlib.wait(1);
                }
            } else {
                console.log(`Bob accepted wager of ${fmt(amt)}`);
            }
        }
        })
    ]); 

    const afterAlice = await getBalance(accAlice);
    const afterBob = await getBalance(accBob);

    console.log(`Alice went from ${beforeAlice} to ${afterAlice}`);
    console.log(`Bob went from ${beforeBob} to ${afterBob}`);

})();