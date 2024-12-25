import{ComputeBudgetProgram as A,Keypair as P,PublicKey as b,Transaction as p,TransactionMessage as x,VersionedTransaction as C}from"@solana/web3.js";import{get as L,set as R}from"lodash";var d=class{constructor(e){this.logLevel=e.logLevel!==void 0?e.logLevel:0,this.name=e.name}set level(e){this.logLevel=e}get time(){return Date.now().toString()}get moduleName(){return this.name}isLogLevel(e){return e<=this.logLevel}error(...e){return this.isLogLevel(0)?(console.error(this.time,this.name,"sdk logger error",...e),this):this}logWithError(...e){let r=e.map(o=>typeof o=="object"?JSON.stringify(o):o).join(", ");throw new Error(r)}warning(...e){return this.isLogLevel(1)?(console.warn(this.time,this.name,"sdk logger warning",...e),this):this}info(...e){return this.isLogLevel(2)?(console.info(this.time,this.name,"sdk logger info",...e),this):this}debug(...e){return this.isLogLevel(3)?(console.debug(this.time,this.name,"sdk logger debug",...e),this):this}},y={},k={};function V(t){let e=L(y,t);if(!e){let r=L(k,t);e=new d({name:t,logLevel:r}),R(y,t,e)}return e}var h={CreateAccount:"CreateAccount",InitAccount:"InitAccount",CreateATA:"CreateATA",CloseAccount:"CloseAccount",TransferAmount:"TransferAmount",InitMint:"InitMint",MintTo:"MintTo",InitMarket:"InitMarket",Util1216OwnerClaim:"Util1216OwnerClaim",SetComputeUnitPrice:"SetComputeUnitPrice",SetComputeUnitLimit:"SetComputeUnitLimit",ClmmCreatePool:"ClmmCreatePool",ClmmOpenPosition:"ClmmOpenPosition",ClmmIncreasePosition:"ClmmIncreasePosition",ClmmDecreasePosition:"ClmmDecreasePosition",ClmmClosePosition:"ClmmClosePosition",ClmmSwapBaseIn:"ClmmSwapBaseIn",ClmmSwapBaseOut:"ClmmSwapBaseOut",ClmmInitReward:"ClmmInitReward",ClmmSetReward:"ClmmSetReward",ClmmCollectReward:"ClmmCollectReward",ClmmLockPosition:"ClmmLockPosition",ClmmHarvestLockPosition:"ClmmHarvestLockPosition",AmmV4Swap:"AmmV4Swap",AmmV4AddLiquidity:"AmmV4AddLiquidity",AmmV4RemoveLiquidity:"AmmV4RemoveLiquidity",AmmV4SimulatePoolInfo:"AmmV4SimulatePoolInfo",AmmV4SwapBaseIn:"AmmV4SwapBaseIn",AmmV4SwapBaseOut:"AmmV4SwapBaseOut",AmmV4CreatePool:"AmmV4CreatePool",AmmV4InitPool:"AmmV4InitPool",AmmV5AddLiquidity:"AmmV5AddLiquidity",AmmV5RemoveLiquidity:"AmmV5RemoveLiquidity",AmmV5SimulatePoolInfo:"AmmV5SimulatePoolInfo",AmmV5SwapBaseIn:"AmmV5SwapBaseIn",AmmV5SwapBaseOut:"AmmV5SwapBaseOut",RouteSwap:"RouteSwap",RouteSwap1:"RouteSwap1",RouteSwap2:"RouteSwap2",FarmV3Deposit:"FarmV3Deposit",FarmV3Withdraw:"FarmV3Withdraw",FarmV3CreateLedger:"FarmV3CreateLedger",FarmV4Withdraw:"FarmV4Withdraw",FarmV5Deposit:"FarmV5Deposit",FarmV5Withdraw:"FarmV5Withdraw",FarmV5CreateLedger:"FarmV5CreateLedger",FarmV6Deposit:"FarmV6Deposit",FarmV6Withdraw:"FarmV6Withdraw",FarmV6Create:"FarmV6Create",FarmV6Restart:"FarmV6Restart",FarmV6CreatorAddReward:"FarmV6CreatorAddReward",FarmV6CreatorWithdraw:"FarmV6CreatorWithdraw",CpmmCreatePool:"CpmmCreatePool",CpmmAddLiquidity:"CpmmAddLiquidity",CpmmWithdrawLiquidity:"CpmmWithdrawLiquidity",CpmmSwapBaseIn:"CpmmSwapBaseIn",CpmmSwapBaseOut:"CpmmSwapBaseOut",CpmmLockLp:"CpmmLockLp",CpmmCollectLockFee:"CpmmCollectLockFee"};import{TOKEN_PROGRAM_ID as E}from"@solana/spl-token";var m=V("Raydium_txUtil"),B=1644;function J(t){let e=[],r=[];return t.microLamports&&(e.push(A.setComputeUnitPrice({microLamports:t.microLamports})),r.push(h.SetComputeUnitPrice)),t.units&&(e.push(A.setComputeUnitLimit({units:t.units})),r.push(h.SetComputeUnitLimit)),{instructions:e,instructionTypes:r}}async function X(t,e){var o,n;let r=e!=null?e:"confirmed";return(n=await((o=t.getLatestBlockhash)==null?void 0:o.call(t,{commitment:r})))==null?void 0:n.blockhash}async function Y(t,e){return t.getSignatureStatuses([e]),new Promise((r,o)=>{let n=setTimeout(o,6e4);t.onSignature(e,s=>{if(clearTimeout(n),!s.err){r("");return}o(s.err)},"confirmed")})}function T(t,e){t.length<1&&m.logWithError(`no instructions provided: ${t.toString()}`),e.length<1&&m.logWithError(`no signers provided:, ${e.toString()}`);let r=new p;r.recentBlockhash="11111111111111111111111111111111",r.feePayer=e[0],r.add(...t);try{return Buffer.from(r.serialize({verifySignatures:!1})).toString("base64").length<B}catch{return!1}}async function Z(t,e,r,o=!0){let n=new b("RaydiumSimuLateTransaction11111111111111111"),s=[],a=new p;a.feePayer=n;for(let i of e)T([...a.instructions,i],[n])||(s.push(a),a=new p,a.feePayer=n),a.add(i);a.instructions.length>0&&s.push(a);let u=[];try{if(u=await F(t,s,o),u.find(i=>i.err!==null))throw Error("rpc simulateTransaction error")}catch(i){i instanceof Error&&m.logWithError("failed to simulate for instructions","RPC_ERROR",{message:i.message})}let l=[];for(let i of u)if(m.debug("simulate result:",i),i.logs){let c=i.logs.filter(g=>g&&g.includes(r));m.debug("filteredLog:",l),c.length||m.logWithError("simulate log not match keyword","keyword",r),l.push(...c)}return l}function Q(t,e){let r=t.match(/{["\w:,]+}/g);return!r||r.length!==1?m.logWithError(`simulate log fail to match json, keyword: ${e}`):r[0]}function ee(t,e){let o=new RegExp(`"${e}":(\\d+)`,"g").exec(t);return!o||o.length!==2?m.logWithError(`simulate log fail to match key", key: ${e}`):o[1]}function te(t,e){let[r,o]=b.findProgramAddressSync(t,e);return{publicKey:r,nonce:o}}async function F(t,e,r){let o=[];if(r){let n=await t.getLatestBlockhash(),s=[];for(let i of e){i.recentBlockhash=n.blockhash,i.lastValidBlockHeight=n.lastValidBlockHeight;let g=i._compile().serialize(),v=i._serialize(g).toString("base64");s.push(v)}let a=s.map(i=>{let c=t._buildArgs([i],void 0,"base64");return{methodName:"simulateTransaction",args:c}}),u=[],l=20;for(let i=0;i<Math.ceil(a.length/l);i++)u.push(a.slice(i*l,(i+1)*l));o=await(await Promise.all(u.map(async i=>(await t._rpcBatchRequest(i)).map(c=>c.result.value)))).flat()}else try{o=await Promise.all(e.map(async n=>await(await t.simulateTransaction(n)).value))}catch(n){n instanceof Error&&m.logWithError("failed to get info for multiple accounts","RPC_ERROR",{message:n.message})}return o}function re({instructions:t,payer:e,signers:r}){return T(t,[e,...r])}function ie({instructions:t,payer:e,lookupTableAddressAccount:r,recentBlockhash:o=P.generate().publicKey.toString()}){let s=new x({payerKey:e,recentBlockhash:o,instructions:t}).compileToV0Message(Object.values(r!=null?r:{}));try{return Buffer.from(new C(s).serialize()).toString("base64").length<B}catch{return!1}}var f={time:0,data:void 0};async function oe(t){if(!f.data||(Date.now()-f.time)/1e3>30){let e=await t.getEpochInfo();return f={time:Date.now(),data:e},e}else return f.data}var I=t=>Buffer.isBuffer(t)?t:t instanceof Uint8Array?Buffer.from(t.buffer,t.byteOffset,t.byteLength):Buffer.from(t),W=t=>{let e=t.serialize({requireAllSignatures:!1,verifySignatures:!1});t instanceof C&&(e=I(e));try{return e instanceof Buffer?e.toString("base64"):Buffer.from(e).toString("base64")}catch{return e.toString("base64")}};function ne(t){let e=[];return t.forEach(r=>{r instanceof p&&(r.recentBlockhash||(r.recentBlockhash=E.toBase58()),r.feePayer||(r.feePayer=P.generate().publicKey)),e.push(W(r))}),console.log("simulate tx string:",e),e}function ae(t){let e=t.serialize({requireAllSignatures:!1,verifySignatures:!1});return t instanceof C&&(e=I(e)),e.toString("base64")}export{B as MAX_BASE64_SIZE,J as addComputeBudget,re as checkLegacyTxSize,ie as checkV0TxSize,Y as confirmTransaction,te as findProgramAddress,T as forecastTransactionSize,oe as getEpochInfo,X as getRecentBlockHash,Q as parseSimulateLogToJson,ee as parseSimulateValue,ne as printSimulate,Z as simulateMultipleInstruction,F as simulateTransaction,I as toBuffer,ae as transformTxToBase64,W as txToBase64};
//# sourceMappingURL=txUtils.mjs.map