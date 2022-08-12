import { loadStdlib } from '@reach-sh/stdlib';
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

            
    const HAND = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five'];
    const GUESS = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
    const OUTCOME = ['Bob Wins', 'Draw', 'Alice wins'];

    const Player = (Who) => ({
        ...stdlib.hasRandom,
        getHand: () => {
              const hand = Math.floor(Math.random() * 6)
              console.log(`${Who} played ${HAND[hand]}`);
              return hand;
          },
        getGuess: () => {
            const guess = Math.floor(Math.random() * 11);
            console.log(`${Who} guessed ${GUESS[guess]}`);
            return guess;
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




// import { loadStdlib } from '@reach-sh/stdlib';
// import * as backend from './build/index.main.mjs';
// import { ALGO_WalletConnect as WalletConnect } from '@reach-sh/stdlib';
// const stdlib = loadStdlib(process.env);
// // stdlib.setWalletFallback(stdlib.walletFallback({providerEnv: 'TestNet', WalletConnect }));
// // const alicePassphrase = "price clap dilemma swim genius fame lucky crack torch hunt maid palace ladder unlock symptom rubber scale load acoustic drop oval cabbage review abstract embark";
// // 7DCJZKC4JDUKM25W7TDJ5XRTWGUTH6DOG5WARVA47DOCXQOTB4GMLNVW7I

// const bobPassphrase = "unlock garage rack news treat bonus census describe stuff habit harvest imitate cheap lemon cost favorite seven tomato viable same exercise letter dune able add";
// // LXLRKA2GSHBGL4F4YCKQDBK6M7OVRDKM5YSQTIZG7G7HKPN6I7OJL24AG4

// (async () => {

// //   const accAlice = await stdlib.getDefaultAccount();
//   // const accBob = stdlib.getDefaultAccount("LXLRKA2GSHBGL4F4YCKQDBK6M7OVRDKM5YSQTIZG7G7HKPN6I7OJL24AG4"); 
//   // const accAlice = await stdlib.connectAccount("7DCJZKC4JDUKM25W7TDJ5XRTWGUTH6DOG5WARVA47DOCXQOTB4GMLNVW7I");
//   // const accBob = stdlib.connectAccount("LXLRKA2GSHBGL4F4YCKQDBK6M7OVRDKM5YSQTIZG7G7HKPN6I7OJL24AG4");


//   const startingBalance = stdlib.parseCurrency(10);
//   // const accAlice = await stdlib.newAccountFromMnemonic(alicePassphrase);
//   // const accBob = await stdlib.getDefaultAccount('LXLRKA2GSHBGL4F4YCKQDBK6M7OVRDKM5YSQTIZG7G7HKPN6I7OJL24AG4');
// //   const accBob = await stdlib.getDefaultAccount();
// //   const accBob = await stdlib.newAccountFromMnemonic(bobPassphrase); 
//   // const howManyRounds = stdlib.connector === 'ALGO' ? 3 : 10;
//   // console.log(howManyRounds); 
//   const accAlice = await stdlib.newTestAccount(startingBalance);  
//   const accBob = await stdlib.newTestAccount(startingBalance);

//   const fmt = (x) => stdlib.formatCurrency(x, 4);
//   const getBalance = async (who) => fmt(await stdlib.balanceOf(who));
//   const beforeAlice = await getBalance(accAlice);
//   const beforeBob = await getBalance(accBob);

//   const ctcAlice = accAlice.contract(backend);
//   const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

//   const FINGERS = [0, 1, 2, 3, 4, 5];
//   const GUESS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];  
//   const OUTCOME = ['Bob wins', 'Draw', 'Alice wins'];

//   const Player = (Who) => ({
//     ...stdlib.hasRandom,
//     getFingers: async () => {
//      // const fingers = Math.floor(Math.random() * 3);
//       const fingers = Math.floor(Math.random() * 6);         
//       console.log(`${Who} shoots ${FINGERS[fingers]} fingers`);
//      // build in occasional timeout
//       // if ( Math.random() <= 0.01 ) {
//       //   for ( let i = 0; i < 10; i++ ) {
//       //     console.log(`  ${Who} takes their sweet time sending it back...`);
//       //     await stdlib.wait(1);
//       //   }
//       // }     
//       return fingers;
//     },
//     getGuess:  async (fingers) => {
//      // guess should be greater than or equal to number of fingers thrown
//      // const guess= Math.floor(Math.random() * 3);
//       const guess= Math.floor(Math.random() * 6) + FINGERS[fingers];
//      // occassional timeout
//       if ( Math.random() <= 0.01 ) {
//         for ( let i = 0; i < 10; i++ ) {
//           console.log(`  ${Who} takes their sweet time sending it back...`);
//           await stdlib.wait(1);
//         }
//       }
//       console.log(`${Who} guessed total of ${guess}`);   
//       return guess;
//     },
//     seeWinning: (winningNumber) => {    
//       console.log(`Actual total fingers thrown: ${winningNumber}`);
//       console.log(`----------------------------`);  
//     },

//     seeOutcome: (outcome) => {
//       console.log(`${Who} saw outcome ${OUTCOME[outcome]}`);
//     },
//     informTimeout: () => {
//       console.log(`${Who} observed a timeout`);
//     },
//   });

//   await Promise.all([
//     backend.Alice(ctcAlice, {
//       ...Player('Alice'),
//       wager: stdlib.parseCurrency(2),    
//       ...stdlib.hasConsoleLogger,
//     }),
//     backend.Bob(ctcBob, {
//       ...Player('Bob'),
//       acceptWager: (amt) => {      
//         console.log(`Bob accepts the wager of ${fmt(amt)}.`);
//       },
//       ...stdlib.hasConsoleLogger,      
//     }),
//   ]);
//   const afterAlice = await getBalance(accAlice);
//   const afterBob = await getBalance(accBob);

//   console.log(`Alice went from ${beforeAlice} to ${afterAlice}.`);
//   console.log(`Bob went from ${beforeBob} to ${afterBob}.`);


// })();