// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      11: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1],
      13: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1],
      15: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc1, ctc1, ctc1, ctc1],
      17: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1, ctc1, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v503 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v504 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v504, v503],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:91:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v504, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v508, v509], secs: v511, time: v510, didSend: v73, from: v507 } = txn1;
      
      sim_r.txns.push({
        amt: v508,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v520 = stdlib.safeAdd(v510, v509);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v508, v509], secs: v511, time: v510, didSend: v73, from: v507 } = txn1;
  ;
  const v520 = stdlib.safeAdd(v510, v509);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v520],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v507, v508, v509, v520],
      evt_cnt: 0,
      funcNum: 2,
      lct: v510,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v812, time: v811, didSend: v446, from: v810 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v507,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v812, time: v811, didSend: v446, from: v810 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:78:35:application',
      fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:100:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v526, time: v525, didSend: v82, from: v524 } = txn2;
    const v528 = stdlib.safeAdd(v508, v508);
    ;
    let v529 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v530 = v525;
    let v537 = v528;
    
    while (await (async () => {
      const v545 = stdlib.eq(v529, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v545;})()) {
      const v552 = stdlib.safeAdd(v530, v509);
      const v556 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:109:48:application',
        fs: ['at ./index.rsh:108:19:application call to [unknown function] (defined at: ./index.rsh:108:23:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v557 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:110:64:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:108:19:application call to [unknown function] (defined at: ./index.rsh:108:23:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v558 = stdlib.digest(ctc1, [v557, v556]);
      const v560 = stdlib.protect(ctc0, await interact.getGuess(v556), {
        at: './index.rsh:112:50:application',
        fs: ['at ./index.rsh:108:19:application call to [unknown function] (defined at: ./index.rsh:108:23:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      const v561 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:113:74:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:108:19:application call to [unknown function] (defined at: ./index.rsh:108:23:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v562 = stdlib.digest(ctc1, [v561, v560]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v507, v508, v509, v524, v537, v552, v558],
        evt_cnt: 1,
        funcNum: 4,
        lct: v530,
        onlyIf: true,
        out_tys: [ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:118:15:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v565], secs: v567, time: v566, didSend: v113, from: v564 } = txn3;
          
          ;
          const v575 = stdlib.safeAdd(v566, v509);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v552],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v507, v508, v509, v524, v537, v552],
          evt_cnt: 0,
          funcNum: 5,
          lct: v530,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v778, time: v777, didSend: v399, from: v776 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v524,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v778, time: v777, didSend: v399, from: v776 } = txn4;
        ;
        const v779 = stdlib.addressEq(v507, v776);
        const v780 = stdlib.addressEq(v524, v776);
        const v781 = v779 ? true : v780;
        stdlib.assert(v781, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:119:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:78:35:application',
          fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:119:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v565], secs: v567, time: v566, didSend: v113, from: v564 } = txn3;
        ;
        const v568 = stdlib.addressEq(v507, v564);
        stdlib.assert(v568, {
          at: './index.rsh:118:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v575 = stdlib.safeAdd(v566, v509);
        const txn4 = await (ctc.sendrecv({
          args: [v507, v508, v509, v524, v537, v565, v575, v562],
          evt_cnt: 1,
          funcNum: 6,
          lct: v566,
          onlyIf: true,
          out_tys: [ctc2],
          pay: [stdlib.checkedBigNumberify('./index.rsh:122:15:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v578], secs: v580, time: v579, didSend: v119, from: v577 } = txn4;
            
            ;
            const v588 = stdlib.safeAdd(v579, v509);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v575],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc2],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v507, v508, v509, v524, v537, v565, v575],
            evt_cnt: 0,
            funcNum: 7,
            lct: v566,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v760, time: v759, didSend: v365, from: v758 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v524,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v760, time: v759, didSend: v365, from: v758 } = txn5;
          ;
          const v761 = stdlib.addressEq(v507, v758);
          const v762 = stdlib.addressEq(v524, v758);
          const v763 = v761 ? true : v762;
          stdlib.assert(v763, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:123:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:78:35:application',
            fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:123:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v578], secs: v580, time: v579, didSend: v119, from: v577 } = txn4;
          ;
          const v581 = stdlib.addressEq(v507, v577);
          stdlib.assert(v581, {
            at: './index.rsh:122:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v588 = stdlib.safeAdd(v579, v509);
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 1,
            funcNum: 8,
            out_tys: [ctc0],
            timeoutAt: ['time', v588],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v507, v508, v509, v524, v537, v565, v578, v588],
              evt_cnt: 0,
              funcNum: 9,
              lct: v579,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v742, time: v741, didSend: v331, from: v740 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v507,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v742, time: v741, didSend: v331, from: v740 } = txn6;
            ;
            const v743 = stdlib.addressEq(v507, v740);
            const v744 = stdlib.addressEq(v524, v740);
            const v745 = v743 ? true : v744;
            stdlib.assert(v745, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:137:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:78:35:application',
              fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:137:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v595], secs: v597, time: v596, didSend: v130, from: v594 } = txn5;
            ;
            const v598 = stdlib.addressEq(v524, v594);
            stdlib.assert(v598, {
              at: './index.rsh:136:13:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v605 = stdlib.safeAdd(v596, v509);
            const txn6 = await (ctc.recv({
              didSend: false,
              evt_cnt: 1,
              funcNum: 10,
              out_tys: [ctc0],
              timeoutAt: ['time', v605],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv({
                args: [v507, v508, v509, v524, v537, v565, v578, v595, v605],
                evt_cnt: 0,
                funcNum: 11,
                lct: v596,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v724, time: v723, didSend: v297, from: v722 } = txn7;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v507,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v724, time: v723, didSend: v297, from: v722 } = txn7;
              ;
              const v725 = stdlib.addressEq(v507, v722);
              const v726 = stdlib.addressEq(v524, v722);
              const v727 = v725 ? true : v726;
              stdlib.assert(v727, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:141:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Alice'
                });
              ;
              stdlib.protect(ctc3, await interact.informTimeout(), {
                at: './index.rsh:78:35:application',
                fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:141:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Alice'
                });
              
              return;
              
              }
            else {
              const {data: [v608], secs: v610, time: v609, didSend: v136, from: v607 } = txn6;
              ;
              const v611 = stdlib.addressEq(v524, v607);
              stdlib.assert(v611, {
                at: './index.rsh:140:13:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Alice'
                });
              const v618 = stdlib.safeAdd(v609, v509);
              const txn7 = await (ctc.sendrecv({
                args: [v507, v508, v509, v524, v537, v565, v578, v595, v608, v618, v557, v556],
                evt_cnt: 2,
                funcNum: 12,
                lct: v609,
                onlyIf: true,
                out_tys: [ctc0, ctc0],
                pay: [stdlib.checkedBigNumberify('./index.rsh:149:15:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [v623, v624], secs: v626, time: v625, didSend: v146, from: v622 } = txn7;
                  
                  ;
                  const v636 = stdlib.safeAdd(v625, v509);
                  sim_r.isHalt = false;
                  
                  return sim_r;
                  }),
                soloSend: true,
                timeoutAt: ['time', v618],
                tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              if (txn7.didTimeout) {
                const txn8 = await (ctc.sendrecv({
                  args: [v507, v508, v509, v524, v537, v565, v578, v595, v608, v618],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v609,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn8) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v706, time: v705, didSend: v263, from: v704 } = txn8;
                    
                    ;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v524,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: false,
                  timeoutAt: undefined /* mto */,
                  tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v706, time: v705, didSend: v263, from: v704 } = txn8;
                ;
                const v707 = stdlib.addressEq(v507, v704);
                const v708 = stdlib.addressEq(v524, v704);
                const v709 = v707 ? true : v708;
                stdlib.assert(v709, {
                  at: 'reach standard library:197:11:dot',
                  fs: ['at ./index.rsh:150:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                ;
                stdlib.protect(ctc3, await interact.informTimeout(), {
                  at: './index.rsh:78:35:application',
                  fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:150:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Alice'
                  });
                
                return;
                
                }
              else {
                const {data: [v623, v624], secs: v626, time: v625, didSend: v146, from: v622 } = txn7;
                ;
                const v627 = stdlib.addressEq(v507, v622);
                stdlib.assert(v627, {
                  at: './index.rsh:149:15:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Alice'
                  });
                const v628 = stdlib.digest(ctc1, [v623, v624]);
                const v629 = stdlib.digestEq(v565, v628);
                stdlib.assert(v629, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:151:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Alice'
                  });
                const v636 = stdlib.safeAdd(v625, v509);
                const txn8 = await (ctc.sendrecv({
                  args: [v507, v508, v509, v524, v537, v578, v595, v608, v624, v636, v561, v560],
                  evt_cnt: 2,
                  funcNum: 14,
                  lct: v625,
                  onlyIf: true,
                  out_tys: [ctc0, ctc0],
                  pay: [stdlib.checkedBigNumberify('./index.rsh:154:15:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn8) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [v639, v640], secs: v642, time: v641, didSend: v156, from: v638 } = txn8;
                    
                    ;
                    const v652 = stdlib.safeAdd(v641, v509);
                    sim_r.isHalt = false;
                    
                    return sim_r;
                    }),
                  soloSend: true,
                  timeoutAt: ['time', v636],
                  tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                if (txn8.didTimeout) {
                  const txn9 = await (ctc.sendrecv({
                    args: [v507, v508, v509, v524, v537, v578, v595, v608, v624, v636],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v625,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn9) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v688, time: v687, didSend: v229, from: v686 } = txn9;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v524,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: false,
                    timeoutAt: undefined /* mto */,
                    tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v688, time: v687, didSend: v229, from: v686 } = txn9;
                  ;
                  const v689 = stdlib.addressEq(v507, v686);
                  const v690 = stdlib.addressEq(v524, v686);
                  const v691 = v689 ? true : v690;
                  stdlib.assert(v691, {
                    at: 'reach standard library:197:11:dot',
                    fs: ['at ./index.rsh:155:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  ;
                  stdlib.protect(ctc3, await interact.informTimeout(), {
                    at: './index.rsh:78:35:application',
                    fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:155:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Alice'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v639, v640], secs: v642, time: v641, didSend: v156, from: v638 } = txn8;
                  ;
                  const v643 = stdlib.addressEq(v507, v638);
                  stdlib.assert(v643, {
                    at: './index.rsh:154:15:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Alice'
                    });
                  const v644 = stdlib.digest(ctc1, [v639, v640]);
                  const v645 = stdlib.digestEq(v578, v644);
                  stdlib.assert(v645, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:156:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Alice'
                    });
                  const v652 = stdlib.safeAdd(v641, v509);
                  const v656 = stdlib.safeAdd(v624, v595);
                  stdlib.protect(ctc3, await interact.seeWinning(v656), {
                    at: './index.rsh:161:30:application',
                    fs: ['at ./index.rsh:159:19:application call to [unknown function] (defined at: ./index.rsh:159:23:function exp)'],
                    msg: 'seeWinning',
                    who: 'Alice'
                    });
                  
                  const txn9 = await (ctc.sendrecv({
                    args: [v507, v508, v509, v524, v537, v595, v608, v624, v640, v652, v656],
                    evt_cnt: 1,
                    funcNum: 16,
                    lct: v641,
                    onlyIf: true,
                    out_tys: [ctc0],
                    pay: [stdlib.checkedBigNumberify('./index.rsh:164:15:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn9) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [v658], secs: v660, time: v659, didSend: v169, from: v657 } = txn9;
                      
                      ;
                      let v662;
                      const v663 = stdlib.eq(v640, v608);
                      if (v663) {
                        v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                        }
                      else {
                        const v664 = stdlib.safeAdd(v624, v595);
                        const v665 = stdlib.eq(v664, v640);
                        if (v665) {
                          v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                          }
                        else {
                          const v667 = stdlib.eq(v664, v608);
                          if (v667) {
                            v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                            }
                          else {
                            v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                            }
                          }
                        }
                      const cv529 = v662;
                      const cv530 = v659;
                      const cv537 = v537;
                      
                      await (async () => {
                        const v529 = cv529;
                        const v530 = cv530;
                        const v537 = cv537;
                        
                        if (await (async () => {
                          const v545 = stdlib.eq(v529, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
                          
                          return v545;})()) {
                          const v552 = stdlib.safeAdd(v530, v509);
                          sim_r.isHalt = false;
                          }
                        else {
                          const v794 = stdlib.eq(v529, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
                          const v797 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:175:14:decimal', stdlib.UInt_max, '2'), v508);
                          const v799 = v794 ? v507 : v524;
                          sim_r.txns.push({
                            kind: 'from',
                            to: v799,
                            tok: undefined /* Nothing */
                            });
                          sim_r.txns.push({
                            kind: 'halt',
                            tok: undefined /* Nothing */
                            })
                          sim_r.isHalt = true;
                          }})();
                      return sim_r;
                      }),
                    soloSend: true,
                    timeoutAt: ['time', v652],
                    tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  if (txn9.didTimeout) {
                    const txn10 = await (ctc.sendrecv({
                      args: [v507, v508, v509, v524, v537, v595, v608, v624, v640, v652],
                      evt_cnt: 0,
                      funcNum: 17,
                      lct: v641,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn10) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v670, time: v669, didSend: v195, from: v668 } = txn10;
                        
                        ;
                        sim_r.txns.push({
                          kind: 'from',
                          to: v507,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        
                        return sim_r;
                        }),
                      soloSend: false,
                      timeoutAt: undefined /* mto */,
                      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v670, time: v669, didSend: v195, from: v668 } = txn10;
                    ;
                    const v671 = stdlib.addressEq(v507, v668);
                    const v672 = stdlib.addressEq(v524, v668);
                    const v673 = v671 ? true : v672;
                    stdlib.assert(v673, {
                      at: 'reach standard library:197:11:dot',
                      fs: ['at ./index.rsh:165:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Alice'
                      });
                    ;
                    stdlib.protect(ctc3, await interact.informTimeout(), {
                      at: './index.rsh:78:35:application',
                      fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:165:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Alice'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v658], secs: v660, time: v659, didSend: v169, from: v657 } = txn9;
                    ;
                    const v661 = stdlib.addressEq(v507, v657);
                    stdlib.assert(v661, {
                      at: './index.rsh:164:15:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Alice'
                      });
                    let v662;
                    const v663 = stdlib.eq(v640, v608);
                    if (v663) {
                      v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      }
                    else {
                      const v664 = stdlib.safeAdd(v624, v595);
                      const v665 = stdlib.eq(v664, v640);
                      if (v665) {
                        v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                        }
                      else {
                        const v667 = stdlib.eq(v664, v608);
                        if (v667) {
                          v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                          }
                        else {
                          v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                          }
                        }
                      }
                    const cv529 = v662;
                    const cv530 = v659;
                    const cv537 = v537;
                    
                    v529 = cv529;
                    v530 = cv530;
                    v537 = cv537;
                    
                    continue;}
                  
                  }
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v794 = stdlib.eq(v529, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v797 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:175:14:decimal', stdlib.UInt_max, '2'), v508);
    const v799 = v794 ? v507 : v524;
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v529), {
      at: './index.rsh:180:28:application',
      fs: ['at ./index.rsh:179:9:application call to [unknown function] (defined at: ./index.rsh:179:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v508, v509], secs: v511, time: v510, didSend: v73, from: v507 } = txn1;
  ;
  const v520 = stdlib.safeAdd(v510, v509);
  stdlib.protect(ctc1, await interact.acceptWager(v508), {
    at: './index.rsh:96:29:application',
    fs: ['at ./index.rsh:95:13:application call to [unknown function] (defined at: ./index.rsh:95:17:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v507, v508, v509, v520],
    evt_cnt: 0,
    funcNum: 1,
    lct: v510,
    onlyIf: true,
    out_tys: [],
    pay: [v508, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v526, time: v525, didSend: v82, from: v524 } = txn2;
      
      const v528 = stdlib.safeAdd(v508, v508);
      sim_r.txns.push({
        amt: v508,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v529 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
      const v530 = v525;
      const v537 = v528;
      
      if (await (async () => {
        const v545 = stdlib.eq(v529, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
        
        return v545;})()) {
        const v552 = stdlib.safeAdd(v530, v509);
        sim_r.isHalt = false;
        }
      else {
        const v794 = stdlib.eq(v529, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v797 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:175:14:decimal', stdlib.UInt_max, '2'), v508);
        const v799 = v794 ? v507 : v524;
        sim_r.txns.push({
          kind: 'from',
          to: v799,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v520],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v507, v508, v509, v520],
      evt_cnt: 0,
      funcNum: 2,
      lct: v510,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v812, time: v811, didSend: v446, from: v810 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v507,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v812, time: v811, didSend: v446, from: v810 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:78:35:application',
      fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:100:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v526, time: v525, didSend: v82, from: v524 } = txn2;
    const v528 = stdlib.safeAdd(v508, v508);
    ;
    let v529 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
    let v530 = v525;
    let v537 = v528;
    
    while (await (async () => {
      const v545 = stdlib.eq(v529, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1'));
      
      return v545;})()) {
      const v552 = stdlib.safeAdd(v530, v509);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc2],
        timeoutAt: ['time', v552],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v507, v508, v509, v524, v537, v552],
          evt_cnt: 0,
          funcNum: 5,
          lct: v530,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v778, time: v777, didSend: v399, from: v776 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v524,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v778, time: v777, didSend: v399, from: v776 } = txn4;
        ;
        const v779 = stdlib.addressEq(v507, v776);
        const v780 = stdlib.addressEq(v524, v776);
        const v781 = v779 ? true : v780;
        stdlib.assert(v781, {
          at: 'reach standard library:197:11:dot',
          fs: ['at ./index.rsh:119:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:78:35:application',
          fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:119:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v565], secs: v567, time: v566, didSend: v113, from: v564 } = txn3;
        ;
        const v568 = stdlib.addressEq(v507, v564);
        stdlib.assert(v568, {
          at: './index.rsh:118:15:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v575 = stdlib.safeAdd(v566, v509);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc2],
          timeoutAt: ['time', v575],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v507, v508, v509, v524, v537, v565, v575],
            evt_cnt: 0,
            funcNum: 7,
            lct: v566,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v760, time: v759, didSend: v365, from: v758 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v524,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v760, time: v759, didSend: v365, from: v758 } = txn5;
          ;
          const v761 = stdlib.addressEq(v507, v758);
          const v762 = stdlib.addressEq(v524, v758);
          const v763 = v761 ? true : v762;
          stdlib.assert(v763, {
            at: 'reach standard library:197:11:dot',
            fs: ['at ./index.rsh:123:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:78:35:application',
            fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:123:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v578], secs: v580, time: v579, didSend: v119, from: v577 } = txn4;
          ;
          const v581 = stdlib.addressEq(v507, v577);
          stdlib.assert(v581, {
            at: './index.rsh:122:15:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v588 = stdlib.safeAdd(v579, v509);
          const v592 = stdlib.protect(ctc0, await interact.getHand(), {
            at: './index.rsh:130:42:application',
            fs: ['at ./index.rsh:129:17:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
            msg: 'getHand',
            who: 'Bob'
            });
          const v593 = stdlib.protect(ctc0, await interact.getGuess(v592), {
            at: './index.rsh:132:44:application',
            fs: ['at ./index.rsh:129:17:application call to [unknown function] (defined at: ./index.rsh:129:21:function exp)'],
            msg: 'getGuess',
            who: 'Bob'
            });
          
          const txn5 = await (ctc.sendrecv({
            args: [v507, v508, v509, v524, v537, v565, v578, v588, v592],
            evt_cnt: 1,
            funcNum: 8,
            lct: v579,
            onlyIf: true,
            out_tys: [ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:136:13:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v595], secs: v597, time: v596, didSend: v130, from: v594 } = txn5;
              
              ;
              const v605 = stdlib.safeAdd(v596, v509);
              sim_r.isHalt = false;
              
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v588],
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v507, v508, v509, v524, v537, v565, v578, v588],
              evt_cnt: 0,
              funcNum: 9,
              lct: v579,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v742, time: v741, didSend: v331, from: v740 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v507,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v742, time: v741, didSend: v331, from: v740 } = txn6;
            ;
            const v743 = stdlib.addressEq(v507, v740);
            const v744 = stdlib.addressEq(v524, v740);
            const v745 = v743 ? true : v744;
            stdlib.assert(v745, {
              at: 'reach standard library:197:11:dot',
              fs: ['at ./index.rsh:137:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:78:35:application',
              fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:137:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v595], secs: v597, time: v596, didSend: v130, from: v594 } = txn5;
            ;
            const v598 = stdlib.addressEq(v524, v594);
            stdlib.assert(v598, {
              at: './index.rsh:136:13:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v605 = stdlib.safeAdd(v596, v509);
            const txn6 = await (ctc.sendrecv({
              args: [v507, v508, v509, v524, v537, v565, v578, v595, v605, v593],
              evt_cnt: 1,
              funcNum: 10,
              lct: v596,
              onlyIf: true,
              out_tys: [ctc0],
              pay: [stdlib.checkedBigNumberify('./index.rsh:140:13:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [v608], secs: v610, time: v609, didSend: v136, from: v607 } = txn6;
                
                ;
                const v618 = stdlib.safeAdd(v609, v509);
                sim_r.isHalt = false;
                
                return sim_r;
                }),
              soloSend: true,
              timeoutAt: ['time', v605],
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            if (txn6.didTimeout) {
              const txn7 = await (ctc.sendrecv({
                args: [v507, v508, v509, v524, v537, v565, v578, v595, v605],
                evt_cnt: 0,
                funcNum: 11,
                lct: v596,
                onlyIf: true,
                out_tys: [],
                pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                sim_p: (async (txn7) => {
                  const sim_r = { txns: [], mapRefs: [], maps: [] };
                  let sim_txn_ctr = stdlib.UInt_max;
                  const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                  
                  
                  const {data: [], secs: v724, time: v723, didSend: v297, from: v722 } = txn7;
                  
                  ;
                  sim_r.txns.push({
                    kind: 'from',
                    to: v507,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  
                  return sim_r;
                  }),
                soloSend: false,
                timeoutAt: undefined /* mto */,
                tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0],
                waitIfNotPresent: false
                }));
              const {data: [], secs: v724, time: v723, didSend: v297, from: v722 } = txn7;
              ;
              const v725 = stdlib.addressEq(v507, v722);
              const v726 = stdlib.addressEq(v524, v722);
              const v727 = v725 ? true : v726;
              stdlib.assert(v727, {
                at: 'reach standard library:197:11:dot',
                fs: ['at ./index.rsh:141:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'sender correct',
                who: 'Bob'
                });
              ;
              stdlib.protect(ctc1, await interact.informTimeout(), {
                at: './index.rsh:78:35:application',
                fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:141:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                msg: 'informTimeout',
                who: 'Bob'
                });
              
              return;
              
              }
            else {
              const {data: [v608], secs: v610, time: v609, didSend: v136, from: v607 } = txn6;
              ;
              const v611 = stdlib.addressEq(v524, v607);
              stdlib.assert(v611, {
                at: './index.rsh:140:13:dot',
                fs: [],
                msg: 'sender correct',
                who: 'Bob'
                });
              const v618 = stdlib.safeAdd(v609, v509);
              const txn7 = await (ctc.recv({
                didSend: false,
                evt_cnt: 2,
                funcNum: 12,
                out_tys: [ctc0, ctc0],
                timeoutAt: ['time', v618],
                waitIfNotPresent: false
                }));
              if (txn7.didTimeout) {
                const txn8 = await (ctc.sendrecv({
                  args: [v507, v508, v509, v524, v537, v565, v578, v595, v608, v618],
                  evt_cnt: 0,
                  funcNum: 13,
                  lct: v609,
                  onlyIf: true,
                  out_tys: [],
                  pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                  sim_p: (async (txn8) => {
                    const sim_r = { txns: [], mapRefs: [], maps: [] };
                    let sim_txn_ctr = stdlib.UInt_max;
                    const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                    
                    
                    const {data: [], secs: v706, time: v705, didSend: v263, from: v704 } = txn8;
                    
                    ;
                    sim_r.txns.push({
                      kind: 'from',
                      to: v524,
                      tok: undefined /* Nothing */
                      });
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    
                    return sim_r;
                    }),
                  soloSend: false,
                  timeoutAt: undefined /* mto */,
                  tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
                  waitIfNotPresent: false
                  }));
                const {data: [], secs: v706, time: v705, didSend: v263, from: v704 } = txn8;
                ;
                const v707 = stdlib.addressEq(v507, v704);
                const v708 = stdlib.addressEq(v524, v704);
                const v709 = v707 ? true : v708;
                stdlib.assert(v709, {
                  at: 'reach standard library:197:11:dot',
                  fs: ['at ./index.rsh:150:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                ;
                stdlib.protect(ctc1, await interact.informTimeout(), {
                  at: './index.rsh:78:35:application',
                  fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:150:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                  msg: 'informTimeout',
                  who: 'Bob'
                  });
                
                return;
                
                }
              else {
                const {data: [v623, v624], secs: v626, time: v625, didSend: v146, from: v622 } = txn7;
                ;
                const v627 = stdlib.addressEq(v507, v622);
                stdlib.assert(v627, {
                  at: './index.rsh:149:15:dot',
                  fs: [],
                  msg: 'sender correct',
                  who: 'Bob'
                  });
                const v628 = stdlib.digest(ctc3, [v623, v624]);
                const v629 = stdlib.digestEq(v565, v628);
                stdlib.assert(v629, {
                  at: 'reach standard library:69:17:application',
                  fs: ['at ./index.rsh:151:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                  msg: null,
                  who: 'Bob'
                  });
                const v636 = stdlib.safeAdd(v625, v509);
                const txn8 = await (ctc.recv({
                  didSend: false,
                  evt_cnt: 2,
                  funcNum: 14,
                  out_tys: [ctc0, ctc0],
                  timeoutAt: ['time', v636],
                  waitIfNotPresent: false
                  }));
                if (txn8.didTimeout) {
                  const txn9 = await (ctc.sendrecv({
                    args: [v507, v508, v509, v524, v537, v578, v595, v608, v624, v636],
                    evt_cnt: 0,
                    funcNum: 15,
                    lct: v625,
                    onlyIf: true,
                    out_tys: [],
                    pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                    sim_p: (async (txn9) => {
                      const sim_r = { txns: [], mapRefs: [], maps: [] };
                      let sim_txn_ctr = stdlib.UInt_max;
                      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                      
                      
                      const {data: [], secs: v688, time: v687, didSend: v229, from: v686 } = txn9;
                      
                      ;
                      sim_r.txns.push({
                        kind: 'from',
                        to: v524,
                        tok: undefined /* Nothing */
                        });
                      sim_r.txns.push({
                        kind: 'halt',
                        tok: undefined /* Nothing */
                        })
                      sim_r.isHalt = true;
                      
                      return sim_r;
                      }),
                    soloSend: false,
                    timeoutAt: undefined /* mto */,
                    tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
                    waitIfNotPresent: false
                    }));
                  const {data: [], secs: v688, time: v687, didSend: v229, from: v686 } = txn9;
                  ;
                  const v689 = stdlib.addressEq(v507, v686);
                  const v690 = stdlib.addressEq(v524, v686);
                  const v691 = v689 ? true : v690;
                  stdlib.assert(v691, {
                    at: 'reach standard library:197:11:dot',
                    fs: ['at ./index.rsh:155:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  ;
                  stdlib.protect(ctc1, await interact.informTimeout(), {
                    at: './index.rsh:78:35:application',
                    fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:155:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                    msg: 'informTimeout',
                    who: 'Bob'
                    });
                  
                  return;
                  
                  }
                else {
                  const {data: [v639, v640], secs: v642, time: v641, didSend: v156, from: v638 } = txn8;
                  ;
                  const v643 = stdlib.addressEq(v507, v638);
                  stdlib.assert(v643, {
                    at: './index.rsh:154:15:dot',
                    fs: [],
                    msg: 'sender correct',
                    who: 'Bob'
                    });
                  const v644 = stdlib.digest(ctc3, [v639, v640]);
                  const v645 = stdlib.digestEq(v578, v644);
                  stdlib.assert(v645, {
                    at: 'reach standard library:69:17:application',
                    fs: ['at ./index.rsh:156:24:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
                    msg: null,
                    who: 'Bob'
                    });
                  const v652 = stdlib.safeAdd(v641, v509);
                  const txn9 = await (ctc.recv({
                    didSend: false,
                    evt_cnt: 1,
                    funcNum: 16,
                    out_tys: [ctc0],
                    timeoutAt: ['time', v652],
                    waitIfNotPresent: false
                    }));
                  if (txn9.didTimeout) {
                    const txn10 = await (ctc.sendrecv({
                      args: [v507, v508, v509, v524, v537, v595, v608, v624, v640, v652],
                      evt_cnt: 0,
                      funcNum: 17,
                      lct: v641,
                      onlyIf: true,
                      out_tys: [],
                      pay: [stdlib.checkedBigNumberify('reach standard library:197:11:decimal', stdlib.UInt_max, '0'), []],
                      sim_p: (async (txn10) => {
                        const sim_r = { txns: [], mapRefs: [], maps: [] };
                        let sim_txn_ctr = stdlib.UInt_max;
                        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                        
                        
                        const {data: [], secs: v670, time: v669, didSend: v195, from: v668 } = txn10;
                        
                        ;
                        sim_r.txns.push({
                          kind: 'from',
                          to: v507,
                          tok: undefined /* Nothing */
                          });
                        sim_r.txns.push({
                          kind: 'halt',
                          tok: undefined /* Nothing */
                          })
                        sim_r.isHalt = true;
                        
                        return sim_r;
                        }),
                      soloSend: false,
                      timeoutAt: undefined /* mto */,
                      tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
                      waitIfNotPresent: false
                      }));
                    const {data: [], secs: v670, time: v669, didSend: v195, from: v668 } = txn10;
                    ;
                    const v671 = stdlib.addressEq(v507, v668);
                    const v672 = stdlib.addressEq(v524, v668);
                    const v673 = v671 ? true : v672;
                    stdlib.assert(v673, {
                      at: 'reach standard library:197:11:dot',
                      fs: ['at ./index.rsh:165:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'sender correct',
                      who: 'Bob'
                      });
                    ;
                    stdlib.protect(ctc1, await interact.informTimeout(), {
                      at: './index.rsh:78:35:application',
                      fs: ['at ./index.rsh:77:13:application call to [unknown function] (defined at: ./index.rsh:77:31:function exp)', 'at reach standard library:200:8:application call to "after" (defined at: ./index.rsh:76:30:function exp)', 'at ./index.rsh:165:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
                      msg: 'informTimeout',
                      who: 'Bob'
                      });
                    
                    return;
                    
                    }
                  else {
                    const {data: [v658], secs: v660, time: v659, didSend: v169, from: v657 } = txn9;
                    ;
                    const v661 = stdlib.addressEq(v507, v657);
                    stdlib.assert(v661, {
                      at: './index.rsh:164:15:dot',
                      fs: [],
                      msg: 'sender correct',
                      who: 'Bob'
                      });
                    let v662;
                    const v663 = stdlib.eq(v640, v608);
                    if (v663) {
                      v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                      }
                    else {
                      const v664 = stdlib.safeAdd(v624, v595);
                      const v665 = stdlib.eq(v664, v640);
                      if (v665) {
                        v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
                        }
                      else {
                        const v667 = stdlib.eq(v664, v608);
                        if (v667) {
                          v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
                          }
                        else {
                          v662 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '1');
                          }
                        }
                      }
                    const cv529 = v662;
                    const cv530 = v659;
                    const cv537 = v537;
                    
                    v529 = cv529;
                    v530 = cv530;
                    v537 = cv537;
                    
                    continue;}
                  
                  }
                
                }
              
              }
            
            }
          
          }
        
        }
      
      }
    const v794 = stdlib.eq(v529, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v797 = stdlib.safeMul(stdlib.checkedBigNumberify('./index.rsh:175:14:decimal', stdlib.UInt_max, '2'), v508);
    const v799 = v794 ? v507 : v524;
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v529), {
      at: './index.rsh:180:28:application',
      fs: ['at ./index.rsh:179:9:application call to [unknown function] (defined at: ./index.rsh:179:27:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAVAAFQICgIEXgCBQkNDwuYAQdYoAGQAagBMCYDAQABAQAiNQAxGEEJACpkSSJbNQEhBVs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIQoMQASrSSELDEACfkkhDAxAAVdJgRAMQAD9SSEGDEAAViEGEkQhBjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVwAgNf+ABACB0o6wMgY0AyEHWw9ENP8xABI0A1cwIDEAEhFEsSKyATQDJFuyCCOyEDT/sgezQggPSCEGNAESRDQESSISTDQCEhFEKGQpZFBJNQNJSVcAIDX/gWBbNf6BcFs1/Uk1BRc1/IAEfoUQcTT8FlCwMgY0AyEHWwxENP8xABJENP00/hJBAAYjNftCACw0A4FoWzQDIRBbCEk1+jT9EkEAByEINftCABE0+jT+EkEABiI1+0IAAyM1+zT/NAMlWzQDIQRbNANXMCA0+zIGNAMkW0IHDUghDDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABEZHjF6wMgY0AyESWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgccSYEODEAAxkghDDQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSlcAIDX/JVs1/iEEWzX9VzAgNfwkWzX7IQdbNfqBgAFbNfmBiAFbNfhJNQVJIls19yEFWzX2gAS9rufVNPcWUDT2FlCwMgY0AyESWwxENP8xABJENANXWCA09xY09hZQARJEMgY0/Qg19TT/NP4WUDT9FlA0/FA0+xZQNPoWUDT5FlA0+BZQNPYWUDT1FlAoSwFXAH9nKUsBV38BZ0ghBjUBMgY1AkIGa0ghCzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABCKflwOwMgY0AyETWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgX8SSENDEABHUmBDAxAAMNIIQs0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpXACA1/yVbNf4hBFs1/VcwIDX8JFs1+1d4IDX6IQ5bNfkhEVs1+Ek1BUkiWzX3IQVbNfaABMOqkME09xZQNPYWULAyBjQDIRNbDEQ0/zEAEkQ0A1dYIDT3FjT2FlABEkQyBjT9CDX1NP80/hZQNP0WUDT8UDT7FlA0+lA0+RZQNPgWUDT2FlA09RZQKEsBVwB/ZylLAVd/GWdIIQw1ATIGNQJCBUdIIQ00ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATj2TY1sDIGNAMhEVsPRDT/MQASNANXMCAxABIRRLEisgE0AyRbsggjshA0/7IHs0IE2EmBCgxAAKhIIQ00ARJENARJIhJMNAISEUQoZClkUEk1A0lKSkpXACA1/yVbNf4hBFs1/VcwIDX8JFs1+1dYIDX6V3ggNfkhDls1+Ek1BRc194AEp4vCCzT3FlCwMgY0AyERWwxENPwxABJEMgY0/Qg19jT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUDT3FlA09hZQKEsBVwB/ZylLAVd/MWdIIQs1ATIGNQJCBEVIIQo0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gASiBWaOsDIGNAMhDlsPRDT/MQASNANXMCAxABIRRLEisgE0AyRbsggjshA0/7IHs0ID1kkhCQxAAepJIQ8MQAD5SSEFDEAAn0ghCjQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKSVcAIDX/JVs1/iEEWzX9VzAgNfwkWzX7V1ggNfpXeCA1+Uk1BRc1+IAEL9rpHTT4FlCwMgY0AyEOWwxENPwxABJEMgY0/Qg19zT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUDT3FlAoSwFXAH9nKUsBV38pZ0ghDTUBMgY1AkIDPkghDzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABOIbs6mwMgY0AyEHWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgLPSYEGDEAAk0ghDzQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDSUpKVwAgNf8lWzX+IQRbNf1XMCA1/CRbNftXWCA1+kk1BTX5gARp7js+NPlQsDIGNAMhB1sMRDT/MQASRDIGNP0INfg0/zT+FlA0/RZQNPxQNPsWUDT6UDT5UDT4FlAoSwFXAH9nKUsBV38hZ0ghCjUBMgY1AkICUUghCTQBEkQ0BEkiEkw0AhIRRChkSTUDVzAgNf+ABMyZklywMgY0AyEQWw9ENANXACAxABI0/zEAEhFEsSKyATQDJFuyCCOyEDT/sgezQgHlSSEIDEAAz0mBBAxAAIhIIQk0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/JVs1/iEEWzX9VzAgNfwkWzX7STUFNfqABDiwIy00+lCwMgY0AyEQWwxENP8xABJEMgY0/Qg1+TT/NP4WUDT9FlA0/FA0+xZQNPpQNPkWUChLAVcAf2cpSwFXfwFnSCEPNQEyBjUCQgFrIQgSRCM0ARJENARJIhJMNAISEUQoZDUDgARBsUBNsDIGNAMhFFsPRLEisgE0AyVbsggjshA0A1cAILIHs0IBD0kjDEAAR0gjNAESRDQESSISTDQCEhFEKGRJNQMlWzX/gASai5F0sDIGNAMhFFsMRDT/iAFINANXACA0/zQDIQRbMQAjMgY0/0kIQgBgSIGgjQaIASgiNAESRDQESSISTDQCEhFESTUFSSJbNf8hBVs1/oAErNEfwzT/FlA0/hZQsDT/iAD3MgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgB+Nf81/jX9Nfw1+zX6Nfk0/SMSQQAvNP40+wg1+DT5NPoWUDT7FlA0/FA0/xZQNPgWUChLAVcAYGdIIQk1ATIGNQJCADqxIrIBIQg0+guyCCOyEDT8NPk0/SEIEk2yB7NCAAAxGSEJEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQqNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v508",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v509",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v508",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v509",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v608",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e10",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e11",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v623",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v624",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e12",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e13",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v639",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v640",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e14",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e15",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v658",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e16",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e17",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v565",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v578",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v595",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v608",
                "type": "uint256"
              }
            ],
            "internalType": "struct T19",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T20",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m10",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m11",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v623",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v624",
                "type": "uint256"
              }
            ],
            "internalType": "struct T22",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T23",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m12",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m13",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v639",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v640",
                "type": "uint256"
              }
            ],
            "internalType": "struct T25",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T26",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m14",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m15",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v658",
                "type": "uint256"
              }
            ],
            "internalType": "struct T27",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T28",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m16",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m17",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v565",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v578",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v595",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002f1b38038062002f1b8339810160408190526200002691620002a9565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f90341460076200014a565b620000b9438360200151602001516200017560201b60201c565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a090910190935280519192620001409260029290910190620001cc565b505050506200036d565b81620001715760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008262000184838262000309565b9150811015620001c65760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640162000168565b92915050565b828054620001da9062000330565b90600052602060002090601f016020900481019282620001fe576000855562000249565b82601f106200021957805160ff191683800117855562000249565b8280016001018555821562000249579182015b82811115620002495782518255916020019190600101906200022c565b50620002579291506200025b565b5090565b5b808211156200025757600081556001016200025c565b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b60405290565b60008183036060811215620002bd57600080fd5b620002c762000272565b835181526040601f1983011215620002de57600080fd5b620002e862000272565b60208581015182526040909501518582015293810193909352509092915050565b600082198211156200032b57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200034557607f821691505b602082108114156200036757634e487b7160e01b600052602260045260246000fd5b50919050565b612b9e806200037d6000396000f3fe60806040526004361061010c5760003560e01c80638b9fadc81161009a578063ab53f2c611610061578063ab53f2c614610232578063b608682e14610255578063bf2c5b2414610268578063de7369981461027b578063f37e1b9b1461028e57005b80638b9fadc8146101d35780638e314769146101e6578063980b6eac146101f95780639f2518101461020c578063a209ad4e1461021f57005b80633a3e43b0116100de5780633a3e43b0146101725780635471c5a81461018557806379b8ead7146101985780637eea518c146101ab57806383230757146101be57005b80631e93b0f11461011557806329bdceb9146101395780632c10a1591461014c5780633a31ddbd1461015f57005b3661011357005b005b34801561012157600080fd5b506003545b6040519081526020015b60405180910390f35b6101136101473660046124e1565b6102a1565b61011361015a3660046124e1565b61055c565b61011361016d3660046124e1565b6106f3565b610113610180366004612516565b6108aa565b6101136101933660046124e1565b610b35565b6101136101a6366004612516565b610c90565b6101136101b93660046124e1565b610f1b565b3480156101ca57600080fd5b50600154610126565b6101136101e13660046124e1565b61107e565b6101136101f43660046124e1565b611216565b6101136102073660046124e1565b611370565b61011361021a3660046124e1565b6115e2565b61011361022d3660046124e1565b61173d565b34801561023e57600080fd5b50610247611980565b604051610130929190612532565b6101136102633660046124e1565b611a1d565b6101136102763660046124e1565b611c59565b6101136102893660046124e1565b611db3565b61011361029c3660046124e1565b611f0d565b6102b1600960005414602661213b565b6102cb813515806102c457506001548235145b602761213b565b6000808055600280546102dd9061258f565b80601f01602080910402602001604051908101604052809291908181526020018280546103099061258f565b80156103565780601f1061032b57610100808354040283529160200191610356565b820191906000526020600020905b81548152906001019060200180831161033957829003601f168201915b505050505080602001905181019061036e919061264a565b90506103866040518060200160405280600081525090565b6103978260e001514310602861213b565b7f976e76238b62fa1fe413b3051329828ffdf33cbe50b9b9a6e353e59f26de896833846040516103c89291906126f6565b60405180910390a16103dc3415602461213b565b60608201516103f7906001600160a01b03163314602561213b565b610405438360400151612161565b81526040805161012081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e0810182905261010081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e08401528351610100840152600b6000554360015590516105319183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080808301519082015260a0828101519082015260c0808301519082015260e0808301519082015261010091820151918101919091526101200190565b6040516020818303038152906040526002908051906020019061055592919061239a565b5050505050565b61056c600160005414600961213b565b6105868135158061057f57506001548235145b600a61213b565b6000808055600280546105989061258f565b80601f01602080910402602001604051908101604052809291908181526020018280546105c49061258f565b80156106115780601f106105e657610100808354040283529160200191610611565b820191906000526020600020905b8154815290600101906020018083116105f457829003601f168201915b5050505050806020019051810190610629919061271d565b905061063c81606001514310600b61213b565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161066d929190612796565b60405180910390a161068681602001513414600861213b565b61068e61241e565b815181516001600160a01b0390911690526020808301805183518301526040808501518451909101528251336060909101528183018051600190525143920191909152516106dc9080612161565b6020820151604001526106ee816121b4565b505050565b610703600f60005414604b61213b565b61071d8135158061071657506001548235145b604c61213b565b60008080556002805461072f9061258f565b80601f016020809104026020016040519081016040528092919081815260200182805461075b9061258f565b80156107a85780601f1061077d576101008083540402835291602001916107a8565b820191906000526020600020905b81548152906001019060200180831161078b57829003601f168201915b50505050508060200190518101906107c09190612866565b90506107d5816101200151431015604d61213b565b7f25e51d2f848b9d4b7b439abc02e736d9b5c0f74cf1c0a0a6cddab55c2ab0626b3383604051610806929190612796565b60405180910390a161081a3415604961213b565b805161084e906001600160a01b031633146108445760608201516001600160a01b03163314610847565b60015b604a61213b565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f1935050505015801561088f573d6000803e3d6000fd5b50600080805560018190556108a690600290612477565b5050565b6108ba600f60005414604661213b565b6108d4813515806108cd57506001548235145b604761213b565b6000808055600280546108e69061258f565b80601f01602080910402602001604051908101604052809291908181526020018280546109129061258f565b801561095f5780601f106109345761010080835404028352916020019161095f565b820191906000526020600020905b81548152906001019060200180831161094257829003601f168201915b50505050508060200190518101906109779190612866565b905061098f6040518060200160405280600081525090565b6109a18261012001514310604861213b565b7fd1dd1b4b9285adf2c5ce90518e14323d4af41c7bfad5f681c09261f64252d99733846040516109d2929190612883565b60405180910390a16109e63415604361213b565b81516109fe906001600160a01b03163314604461213b565b60408051610a4a91610a2491602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114604561213b565b610a58438360400151612161565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260c08086015160a085015260e0808701519185019190915261010080870151918501919091528683013590840152835161012084015260116000554360015590516105319183910161292f565b610b45600d60005414604061213b565b610b5f81351580610b5857506001548235145b604161213b565b600080805560028054610b719061258f565b80601f0160208091040260200160405190810160405280929190818152602001828054610b9d9061258f565b8015610bea5780601f10610bbf57610100808354040283529160200191610bea565b820191906000526020600020905b815481529060010190602001808311610bcd57829003601f168201915b5050505050806020019051810190610c029190612866565b9050610c17816101200151431015604261213b565b7f5c210ac1145c4e16faf75d6fa61460a7b8f80dc41bba4f6bdf744f79007642983383604051610c48929190612796565b60405180910390a1610c5c3415603e61213b565b805161084e906001600160a01b03163314610c865760608201516001600160a01b03163314610c89565b60015b603f61213b565b610ca0600d60005414603b61213b565b610cba81351580610cb357506001548235145b603c61213b565b600080805560028054610ccc9061258f565b80601f0160208091040260200160405190810160405280929190818152602001828054610cf89061258f565b8015610d455780601f10610d1a57610100808354040283529160200191610d45565b820191906000526020600020905b815481529060010190602001808311610d2857829003601f168201915b5050505050806020019051810190610d5d9190612866565b9050610d756040518060200160405280600081525090565b610d878261012001514310603d61213b565b7f67f1c804af90d1a1d51d795a9796fb7e0cd7fdc00118103dfd79581713b75e4d3384604051610db8929190612883565b60405180910390a1610dcc3415603861213b565b8151610de4906001600160a01b03163314603961213b565b60408051610e3091610e0a91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114603a61213b565b610e3e438360400151612161565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260c08086015160a085015260e08087015191850191909152610100808701519185019190915286830135908401528351610120840152600f6000554360015590516105319183910161292f565b610f2b600160005414600d61213b565b610f4581351580610f3e57506001548235145b600e61213b565b600080805560028054610f579061258f565b80601f0160208091040260200160405190810160405280929190818152602001828054610f839061258f565b8015610fd05780601f10610fa557610100808354040283529160200191610fd0565b820191906000526020600020905b815481529060010190602001808311610fb357829003601f168201915b5050505050806020019051810190610fe8919061271d565b9050610ffc8160600151431015600f61213b565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d950338360405161102d929190612796565b60405180910390a16110413415600c61213b565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561088f573d6000803e3d6000fd5b61108e600b60005414603561213b565b6110a8813515806110a157506001548235145b603661213b565b6000808055600280546110ba9061258f565b80601f01602080910402602001604051908101604052809291908181526020018280546110e69061258f565b80156111335780601f1061110857610100808354040283529160200191611133565b820191906000526020600020905b81548152906001019060200180831161111657829003601f168201915b505050505080602001905181019061114b919061293e565b9050611160816101000151431015603761213b565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a5503383604051611191929190612796565b60405180910390a16111a53415603361213b565b80516111d9906001600160a01b031633146111cf5760608201516001600160a01b031633146111d2565b60015b603461213b565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505015801561088f573d6000803e3d6000fd5b611226600560005414601761213b565b6112408135158061123957506001548235145b601861213b565b6000808055600280546112529061258f565b80601f016020809104026020016040519081016040528092919081815260200182805461127e9061258f565b80156112cb5780601f106112a0576101008083540402835291602001916112cb565b820191906000526020600020905b8154815290600101906020018083116112ae57829003601f168201915b50505050508060200190518101906112e391906129c7565b90506112f78160a00151431015601961213b565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3383604051611328929190612796565b60405180910390a161133c3415601561213b565b805161084e906001600160a01b031633146113665760608201516001600160a01b03163314611369565b60015b601661213b565b611380600760005414601c61213b565b61139a8135158061139357506001548235145b601d61213b565b6000808055600280546113ac9061258f565b80601f01602080910402602001604051908101604052809291908181526020018280546113d89061258f565b80156114255780601f106113fa57610100808354040283529160200191611425565b820191906000526020600020905b81548152906001019060200180831161140857829003601f168201915b505050505080602001905181019061143d9190612a5b565b90506114556040518060200160405280600081525090565b6114668260c001514310601e61213b565b7fa2ddd0bc62239facbd79cdab1df75ee0cb72af9166d4371e62852a98cb4ca19c33846040516114979291906126f6565b60405180910390a16114ab3415601a61213b565b81516114c3906001600160a01b03163314601b61213b565b6114d1438360400151612161565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a080860151908401528581013560c0840152835160e084015260096000554360015590516105319183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b6115f2601160005414605561213b565b61160c8135158061160557506001548235145b605661213b565b60008080556002805461161e9061258f565b80601f016020809104026020016040519081016040528092919081815260200182805461164a9061258f565b80156116975780601f1061166c57610100808354040283529160200191611697565b820191906000526020600020905b81548152906001019060200180831161167a57829003601f168201915b50505050508060200190518101906116af9190612866565b90506116c4816101200151431015605761213b565b7f64113158b98ebf731808bbb342c34e04d362d554ea35de57d908ad65e9eed23533836040516116f5929190612796565b60405180910390a16117093415605361213b565b80516111d9906001600160a01b031633146117335760608201516001600160a01b03163314611736565b60015b605461213b565b61174d600560005414601261213b565b6117678135158061176057506001548235145b601361213b565b6000808055600280546117799061258f565b80601f01602080910402602001604051908101604052809291908181526020018280546117a59061258f565b80156117f25780601f106117c7576101008083540402835291602001916117f2565b820191906000526020600020905b8154815290600101906020018083116117d557829003601f168201915b505050505080602001905181019061180a91906129c7565b90506118226040518060200160405280600081525090565b6118338260a001514310601461213b565b7f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc033846040516118649291906126f6565b60405180910390a16118783415601061213b565b8151611890906001600160a01b03163314601161213b565b61189e438360400151612161565b81526040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915282516001600160a01b039081168083526020808601518185019081526040808801518187019081526060808a015187168189019081526080808c0151818b019081528d88013560a0808d019182528d5160c0808f0191825260076000554360015589519b8c019c909c529851978a0197909752945193880193909352905190971696850196909652945190830152925191810191909152905160e082015261010001610531565b6000606060005460028080546119959061258f565b80601f01602080910402602001604051908101604052809291908181526020018280546119c19061258f565b8015611a0e5780601f106119e357610100808354040283529160200191611a0e565b820191906000526020600020905b8154815290600101906020018083116119f157829003601f168201915b50505050509050915091509091565b611a2d600b60005414603061213b565b611a4781351580611a4057506001548235145b603161213b565b600080805560028054611a599061258f565b80601f0160208091040260200160405190810160405280929190818152602001828054611a859061258f565b8015611ad25780601f10611aa757610100808354040283529160200191611ad2565b820191906000526020600020905b815481529060010190602001808311611ab557829003601f168201915b5050505050806020019051810190611aea919061293e565b9050611b026040518060200160405280600081525090565b611b148261010001514310603261213b565b7fe4891dc1b339486b9840f8d0c004ee6b9adfc0e7f704831a66f664617244ab1f3384604051611b459291906126f6565b60405180910390a1611b593415602e61213b565b6060820151611b74906001600160a01b03163314602f61213b565b611b82438360400151612161565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c0808601519084015260e08086015190840152858101356101008401528351610120840152600d6000554360015590516105319183910161292f565b611c69600760005414602161213b565b611c8381351580611c7c57506001548235145b602261213b565b600080805560028054611c959061258f565b80601f0160208091040260200160405190810160405280929190818152602001828054611cc19061258f565b8015611d0e5780601f10611ce357610100808354040283529160200191611d0e565b820191906000526020600020905b815481529060010190602001808311611cf157829003601f168201915b5050505050806020019051810190611d269190612a5b565b9050611d3a8160c00151431015602361213b565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051611d6b929190612796565b60405180910390a1611d7f3415601f61213b565b805161084e906001600160a01b03163314611da95760608201516001600160a01b03163314611dac565b60015b602061213b565b611dc3600960005414602b61213b565b611ddd81351580611dd657506001548235145b602c61213b565b600080805560028054611def9061258f565b80601f0160208091040260200160405190810160405280929190818152602001828054611e1b9061258f565b8015611e685780601f10611e3d57610100808354040283529160200191611e68565b820191906000526020600020905b815481529060010190602001808311611e4b57829003601f168201915b5050505050806020019051810190611e80919061264a565b9050611e948160e00151431015602d61213b565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051611ec5929190612796565b60405180910390a1611ed93415602961213b565b80516111d9906001600160a01b03163314611f035760608201516001600160a01b03163314611f06565b60015b602a61213b565b611f1d601160005414605061213b565b611f3781351580611f3057506001548235145b605161213b565b600080805560028054611f499061258f565b80601f0160208091040260200160405190810160405280929190818152602001828054611f759061258f565b8015611fc25780601f10611f9757610100808354040283529160200191611fc2565b820191906000526020600020905b815481529060010190602001808311611fa557829003601f168201915b5050505050806020019051810190611fda9190612866565b9050611ff9604051806040016040528060008152602001600081525090565b61200b8261012001514310605261213b565b7f766f2c6dd42a0af16e854477c4e7575763994a6ce78f7dd208ae78a809469ee4338460405161203c9291906126f6565b60405180910390a16120503415604e61213b565b8151612068906001600160a01b03163314604f61213b565b8160c00151826101000151141561208257600181526120ce565b6120948260e001518360a00151612161565b6020820181905261010083015114156120b057600281526120ce565b8160c00151816020015114156120c957600081526120ce565b600181525b6120d661241e565b825181516001600160a01b039182169052602080850151835182015260408086015184518201526060808701518551941693019290925283518184018051919091528051439201919091526080850151905190910152612135816121b4565b50505050565b816108a65760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b60008261216e8382612b0f565b91508110156121ae5760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b6044820152606401612158565b92915050565b604080516020810190915260008152602082015151600114156122d8576121eb826020015160200151836000015160400151612161565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e0016040516020818303038152906040526002908051906020019061213592919061239a565b6020820151516002146122f0578151606001516122f4565b8151515b6001600160a01b03166108fc612313600285600001516020015161233b565b6040518115909202916000818181858888f1935050505015801561088f573d6000803e3d6000fd5b600081158061235f575082826123518183612b27565b925061235d9083612b46565b145b6121ae5760405162461bcd60e51b815260206004820152600c60248201526b6d756c206f766572666c6f7760a01b6044820152606401612158565b8280546123a69061258f565b90600052602060002090601f0160209004810192826123c8576000855561240e565b82601f106123e157805160ff191683800117855561240e565b8280016001018555821561240e579182015b8281111561240e5782518255916020019190600101906123f3565b5061241a9291506124b4565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161247260405180606001604052806000815260200160008152602001600081525090565b905290565b5080546124839061258f565b6000825580601f10612493575050565b601f0160209004906000526020600020908101906124b191906124b4565b50565b5b8082111561241a57600081556001016124b5565b6000604082840312156124db57600080fd5b50919050565b6000604082840312156124f357600080fd5b6124fd83836124c9565b9392505050565b6000606082840312156124db57600080fd5b60006060828403121561252857600080fd5b6124fd8383612504565b82815260006020604081840152835180604085015260005b818110156125665785810183015185820160600152820161254a565b81811115612578576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806125a357607f821691505b602082108114156124db57634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff811182821017156125f657634e487b7160e01b600052604160045260246000fd5b60405290565b604051610120810167ffffffffffffffff811182821017156125f657634e487b7160e01b600052604160045260246000fd5b80516001600160a01b038116811461264557600080fd5b919050565b600061010080838503121561265e57600080fd5b6040519081019067ffffffffffffffff8211818310171561268f57634e487b7160e01b600052604160045260246000fd5b8160405261269c8461262e565b815260208401516020820152604084015160408201526126be6060850161262e565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b0383168152606081016124fd602083018480358252602090810135910152565b60006080828403121561272f57600080fd5b6040516080810181811067ffffffffffffffff8211171561276057634e487b7160e01b600052604160045260246000fd5b60405261276c8361262e565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146127c457600080fd5b80604085015250509392505050565b600061014082840312156127e657600080fd5b6127ee6125c4565b90506127f98261262e565b8152602082015160208201526040820151604082015261281b6060830161262e565b60608201526080820151608082015260a082015160a082015260c082015160c082015260e082015160e082015261010080830151818301525061012080830151818301525092915050565b6000610140828403121561287957600080fd5b6124fd83836127d3565b6001600160a01b0383168152608081016124fd60208301848035825260208082013590830152604090810135910152565b80516001600160a01b03168252602081015160208301526040810151604083015260608101516128ef60608401826001600160a01b03169052565b506080818101519083015260a0808201519083015260c0808201519083015260e08082015190830152610100808201519083015261012090810151910152565b61014081016121ae82846128b4565b6000610120828403121561295157600080fd5b6129596125fc565b6129628361262e565b815260208301516020820152604083015160408201526129846060840161262e565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152508091505092915050565b600060c082840312156129d957600080fd5b60405160c0810181811067ffffffffffffffff82111715612a0a57634e487b7160e01b600052604160045260246000fd5b604052612a168361262e565b81526020830151602082015260408301516040820152612a386060840161262e565b60608201526080830151608082015260a083015160a08201528091505092915050565b600060e08284031215612a6d57600080fd5b60405160e0810181811067ffffffffffffffff82111715612a9e57634e487b7160e01b600052604160045260246000fd5b604052612aaa8361262e565b81526020830151602082015260408301516040820152612acc6060840161262e565b60608201526080830151608082015260a083015160a082015260c083015160c08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115612b2257612b22612af9565b500190565b6000816000190483118215151615612b4157612b41612af9565b500290565b600082612b6357634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212204c1867a3049d554980adec56713d78a622e8ec1c8203c4769c591bbdf29d6a4864736f6c634300080c0033`,
  BytecodeLen: 12059,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:93:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:100:51:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:177:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:106:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:119:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:120:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:123:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:124:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:137:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './index.rsh:138:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  12: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:141:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './index.rsh:142:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:150:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './index.rsh:152:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  16: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:155:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  17: {
    at: './index.rsh:157:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  18: {
    at: 'reach standard library:199:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:165:55:application call to "closeTo" (defined at: reach standard library:195:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
