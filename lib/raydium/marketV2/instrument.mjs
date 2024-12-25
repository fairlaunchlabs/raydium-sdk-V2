var k=Object.defineProperty;var U=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var F=(n,t,e)=>t in n?k(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,P=(n,t)=>{for(var e in t||(t={}))O.call(t,e)&&F(n,e,t[e]);if(U)for(var e of U(t))z.call(t,e)&&F(n,e,t[e]);return n};import{SystemProgram as i,SYSVAR_RENT_PUBKEY as ee,Transaction as W,TransactionInstruction as te}from"@solana/web3.js";import{createInitializeAccountInstruction as E,TOKEN_PROGRAM_ID as Q}from"@solana/spl-token";var u={CreateAccount:"CreateAccount",InitAccount:"InitAccount",CreateATA:"CreateATA",CloseAccount:"CloseAccount",TransferAmount:"TransferAmount",InitMint:"InitMint",MintTo:"MintTo",InitMarket:"InitMarket",Util1216OwnerClaim:"Util1216OwnerClaim",SetComputeUnitPrice:"SetComputeUnitPrice",SetComputeUnitLimit:"SetComputeUnitLimit",ClmmCreatePool:"ClmmCreatePool",ClmmOpenPosition:"ClmmOpenPosition",ClmmIncreasePosition:"ClmmIncreasePosition",ClmmDecreasePosition:"ClmmDecreasePosition",ClmmClosePosition:"ClmmClosePosition",ClmmSwapBaseIn:"ClmmSwapBaseIn",ClmmSwapBaseOut:"ClmmSwapBaseOut",ClmmInitReward:"ClmmInitReward",ClmmSetReward:"ClmmSetReward",ClmmCollectReward:"ClmmCollectReward",ClmmLockPosition:"ClmmLockPosition",ClmmHarvestLockPosition:"ClmmHarvestLockPosition",AmmV4Swap:"AmmV4Swap",AmmV4AddLiquidity:"AmmV4AddLiquidity",AmmV4RemoveLiquidity:"AmmV4RemoveLiquidity",AmmV4SimulatePoolInfo:"AmmV4SimulatePoolInfo",AmmV4SwapBaseIn:"AmmV4SwapBaseIn",AmmV4SwapBaseOut:"AmmV4SwapBaseOut",AmmV4CreatePool:"AmmV4CreatePool",AmmV4InitPool:"AmmV4InitPool",AmmV5AddLiquidity:"AmmV5AddLiquidity",AmmV5RemoveLiquidity:"AmmV5RemoveLiquidity",AmmV5SimulatePoolInfo:"AmmV5SimulatePoolInfo",AmmV5SwapBaseIn:"AmmV5SwapBaseIn",AmmV5SwapBaseOut:"AmmV5SwapBaseOut",RouteSwap:"RouteSwap",RouteSwap1:"RouteSwap1",RouteSwap2:"RouteSwap2",FarmV3Deposit:"FarmV3Deposit",FarmV3Withdraw:"FarmV3Withdraw",FarmV3CreateLedger:"FarmV3CreateLedger",FarmV4Withdraw:"FarmV4Withdraw",FarmV5Deposit:"FarmV5Deposit",FarmV5Withdraw:"FarmV5Withdraw",FarmV5CreateLedger:"FarmV5CreateLedger",FarmV6Deposit:"FarmV6Deposit",FarmV6Withdraw:"FarmV6Withdraw",FarmV6Create:"FarmV6Create",FarmV6Restart:"FarmV6Restart",FarmV6CreatorAddReward:"FarmV6CreatorAddReward",FarmV6CreatorWithdraw:"FarmV6CreatorWithdraw",CpmmCreatePool:"CpmmCreatePool",CpmmAddLiquidity:"CpmmAddLiquidity",CpmmWithdrawLiquidity:"CpmmWithdrawLiquidity",CpmmSwapBaseIn:"CpmmSwapBaseIn",CpmmSwapBaseOut:"CpmmSwapBaseOut",CpmmLockLp:"CpmmLockLp",CpmmCollectLockFee:"CpmmCollectLockFee"};import{PublicKey as $}from"@solana/web3.js";import v,{isBN as et}from"bn.js";import{bits as G,BitStructure as ue,blob as Y,Blob as ae,cstr as ie,f32 as ce,f32be as pe,f64 as ye,f64be as de,greedy as le,Layout as j,ns64 as be,ns64be as me,nu64 as Pe,nu64be as xe,offset as ge,s16 as Le,s16be as Se,s24 as fe,s24be as he,s32 as we,s32be as Te,s40 as Be,s40be as Ae,s48 as Ce,s48be as Ve,s8 as _e,seq as qe,struct as Ke,Structure as H,u16 as J,u16be as Ue,u24 as Fe,u24be as Re,u32 as X,u32be as Me,u40 as ve,u40be as Ne,u48 as De,u48be as We,u8 as Ee,UInt as Z,union as Qe,Union as ke,unionLayoutDiscriminator as Oe,utf8 as ze}from"@solana/buffer-layout";var l=j,R=H;var x=Z;var M=J;var g=X;var p=Y;var L=G;var S=class extends l{constructor(e,r,o){super(e,o);this.blob=p(e),this.signed=r}decode(e,r=0){let o=new v(this.blob.decode(e,r),10,"le");return this.signed?o.fromTwos(this.span*8).clone():o}encode(e,r,o=0){return typeof e=="number"&&(e=new v(e)),this.signed&&(e=e.toTwos(this.span*8)),this.blob.encode(e.toArrayLike(Buffer,"le",this.span),r,o)}},b=class extends l{constructor(e){super(8,e);this._lower=L(g(),!1),this._upper=L(g(),!1)}addBoolean(e){this._lower.fields.length<32?this._lower.addBoolean(e):this._upper.addBoolean(e)}decode(e,r=0){let o=this._lower.decode(e,r),c=this._upper.decode(e,r+this._lower.span);return P(P({},o),c)}encode(e,r,o=0){return this._lower.encode(e,r,o)+this._upper.encode(e,r,o+this._lower.span)}};function N(n){return new x(1,n)}function D(n){return new x(4,n)}function s(n){return new S(8,!1,n)}var f=class extends l{constructor(e,r,o,c){super(e.span,c);this.layout=e,this.decoder=r,this.encoder=o}decode(e,r){return this.decoder(this.layout.decode(e,r))}encode(e,r,o){return this.layout.encode(this.encoder(e),r,o)}getSpan(e,r){return this.layout.getSpan(e,r)}};function a(n){return new f(p(32),t=>new $(t),t=>t.toBuffer(),n)}var h=class extends R{decode(t,e){return super.decode(t,e)}};function m(n,t,e){return new h(n,t,e)}function I(n="accountFlags"){let t=new b(n);return t.addBoolean("initialized"),t.addBoolean("market"),t.addBoolean("openOrders"),t.addBoolean("requestQueue"),t.addBoolean("eventQueue"),t.addBoolean("bids"),t.addBoolean("asks"),t}var w=m([p(5),I("accountFlags"),a("ownAddress"),s("vaultSignerNonce"),a("baseMint"),a("quoteMint"),a("baseVault"),s("baseDepositsTotal"),s("baseFeesAccrued"),a("quoteVault"),s("quoteDepositsTotal"),s("quoteFeesAccrued"),s("quoteDustThreshold"),a("requestQueue"),a("eventQueue"),a("bids"),a("asks"),s("baseLotSize"),s("quoteLotSize"),s("feeRateBps"),s("referrerRebatesAccrued"),p(7)]);function ne({programId:n,marketInfo:t}){let e=m([N("version"),D("instruction"),s("baseLotSize"),s("quoteLotSize"),M("feeRateBps"),s("vaultSignerNonce"),s("quoteDustThreshold")]),r=[{pubkey:t.id,isSigner:!1,isWritable:!0},{pubkey:t.requestQueue,isSigner:!1,isWritable:!0},{pubkey:t.eventQueue,isSigner:!1,isWritable:!0},{pubkey:t.bids,isSigner:!1,isWritable:!0},{pubkey:t.asks,isSigner:!1,isWritable:!0},{pubkey:t.baseVault,isSigner:!1,isWritable:!0},{pubkey:t.quoteVault,isSigner:!1,isWritable:!0},{pubkey:t.baseMint,isSigner:!1,isWritable:!1},{pubkey:t.quoteMint,isSigner:!1,isWritable:!1},{pubkey:t.authority?t.quoteMint:ee,isSigner:!1,isWritable:!1}].concat(t.authority?{pubkey:t.authority,isSigner:!1,isWritable:!1}:[]).concat(t.authority&&t.pruneAuthority?{pubkey:t.pruneAuthority,isSigner:!1,isWritable:!1}:[]),o=Buffer.alloc(e.span);return e.encode({version:0,instruction:0,baseLotSize:t.baseLotSize,quoteLotSize:t.quoteLotSize,feeRateBps:t.feeRateBps,vaultSignerNonce:t.vaultSignerNonce,quoteDustThreshold:t.quoteDustThreshold},o),new te({keys:r,programId:n,data:o})}async function bt({connection:n,wallet:t,marketInfo:e}){var T,B,A,C,V,_,q,K;let r=new W,o=await n.getMinimumBalanceForRentExemption(165);r.add(i.createAccountWithSeed({fromPubkey:t,basePubkey:t,seed:e.baseVault.seed,newAccountPubkey:e.baseVault.publicKey,lamports:o,space:165,programId:Q}),i.createAccountWithSeed({fromPubkey:t,basePubkey:t,seed:e.quoteVault.seed,newAccountPubkey:e.quoteVault.publicKey,lamports:o,space:165,programId:Q}),E(e.baseVault.publicKey,e.baseMint,e.vaultOwner),E(e.quoteVault.publicKey,e.quoteMint,e.vaultOwner),i.createAccountWithSeed({fromPubkey:t,basePubkey:t,seed:e.id.seed,newAccountPubkey:e.id.publicKey,lamports:await n.getMinimumBalanceForRentExemption(w.span),space:w.span,programId:e.programId}));let c=new W;return c.add(i.createAccountWithSeed({fromPubkey:t,basePubkey:t,seed:e.requestQueue.seed,newAccountPubkey:e.requestQueue.publicKey,lamports:e.lowestFeeMarket?6208320:await n.getMinimumBalanceForRentExemption((T=e.requestQueueSpace)!=null?T:5120+12),space:e.lowestFeeMarket?764:(B=e.requestQueueSpace)!=null?B:5120+12,programId:e.programId}),i.createAccountWithSeed({fromPubkey:t,basePubkey:t,seed:e.eventQueue.seed,newAccountPubkey:e.eventQueue.publicKey,lamports:e.lowestFeeMarket?79594560:await n.getMinimumBalanceForRentExemption((A=e.eventQueueSpace)!=null?A:262144+12),space:e.lowestFeeMarket?11308:(C=e.eventQueueSpace)!=null?C:262144+12,programId:e.programId}),i.createAccountWithSeed({fromPubkey:t,basePubkey:t,seed:e.bids.seed,newAccountPubkey:e.bids.publicKey,lamports:e.lowestFeeMarket?101977920:await n.getMinimumBalanceForRentExemption((V=e.orderbookQueueSpace)!=null?V:65536+12),space:e.lowestFeeMarket?14524:(_=e.orderbookQueueSpace)!=null?_:65536+12,programId:e.programId}),i.createAccountWithSeed({fromPubkey:t,basePubkey:t,seed:e.asks.seed,newAccountPubkey:e.asks.publicKey,lamports:e.lowestFeeMarket?101977920:await n.getMinimumBalanceForRentExemption((q=e.orderbookQueueSpace)!=null?q:65536+12),space:e.lowestFeeMarket?14524:(K=e.orderbookQueueSpace)!=null?K:65536+12,programId:e.programId}),ne({programId:e.programId,marketInfo:{id:e.id.publicKey,requestQueue:e.requestQueue.publicKey,eventQueue:e.eventQueue.publicKey,bids:e.bids.publicKey,asks:e.asks.publicKey,baseVault:e.baseVault.publicKey,quoteVault:e.quoteVault.publicKey,baseMint:e.baseMint,quoteMint:e.quoteMint,baseLotSize:e.baseLotSize,quoteLotSize:e.quoteLotSize,feeRateBps:e.feeRateBps,vaultSignerNonce:e.vaultSignerNonce,quoteDustThreshold:e.quoteDustThreshold}})),[{transaction:r,signer:[],instructionTypes:[u.CreateAccount,u.CreateAccount,u.InitAccount,u.InitAccount]},{transaction:c,signer:[],instructionTypes:[u.CreateAccount,u.CreateAccount,u.CreateAccount,u.CreateAccount,u.CreateAccount,u.InitMarket]}]}export{ne as initializeMarket,bt as makeCreateMarketInstruction};
//# sourceMappingURL=instrument.mjs.map