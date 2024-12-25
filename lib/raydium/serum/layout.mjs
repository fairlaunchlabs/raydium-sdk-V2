import{PublicKey as T}from"@solana/web3.js";import b,{isBN as Ue}from"bn.js";import{bits as w,BitStructure as B,blob as l,Blob as U,cstr as k,f32 as A,f32be as E,f64 as V,f64be as D,greedy as N,Layout as g,ns64 as I,ns64be as C,nu64 as M,nu64be as q,offset as R,s16 as v,s16be as K,s24 as O,s24be as F,s32 as G,s32be as z,s40 as Y,s40be as j,s48 as Q,s48be as H,s8 as J,seq as X,struct as Z,Structure as L,u16 as $,u16be as W,u24 as ee,u24be as te,u32 as ne,u32be as re,u40 as oe,u40be as se,u48 as ue,u48be as ae,u8 as ie,UInt as ye,union as ce,Union as pe,unionLayoutDiscriminator as de,utf8 as Pe}from"@solana/buffer-layout";var i=g,x=L;var a=l;var y=class extends i{constructor(e,t,r){super(e,r);this.blob=a(e),this.signed=t}decode(e,t=0){let r=new b(this.blob.decode(e,t),10,"le");return this.signed?r.fromTwos(this.span*8).clone():r}encode(e,t,r=0){return typeof e=="number"&&(e=new b(e)),this.signed&&(e=e.toTwos(this.span*8)),this.blob.encode(e.toArrayLike(Buffer,"le",this.span),t,r)}};function n(u){return new y(8,!1,u)}var c=class extends i{constructor(e,t,r,m){super(e.span,m);this.layout=e,this.decoder=t,this.encoder=r}decode(e,t){return this.decoder(this.layout.decode(e,t))}encode(e,t,r){return this.layout.encode(this.encoder(e),t,r)}getSpan(e,t){return this.layout.getSpan(e,t)}};function o(u){return new c(a(32),s=>new T(s),s=>s.toBuffer(),u)}var p=class extends x{decode(s,e){return super.decode(s,e)}};function f(u,s,e){return new p(u,s,e)}var h=f([a(5),a(8),o("ownAddress"),n("vaultSignerNonce"),o("baseMint"),o("quoteMint"),o("baseVault"),n("baseDepositsTotal"),n("baseFeesAccrued"),o("quoteVault"),n("quoteDepositsTotal"),n("quoteFeesAccrued"),n("quoteDustThreshold"),o("requestQueue"),o("eventQueue"),o("bids"),o("asks"),n("baseLotSize"),n("quoteLotSize"),n("feeRateBps"),n("referrerRebatesAccrued"),a(7)]),Ne={3:h};export{h as MARKET_STATE_LAYOUT_V3,Ne as MARKET_VERSION_TO_STATE_LAYOUT};
//# sourceMappingURL=layout.mjs.map