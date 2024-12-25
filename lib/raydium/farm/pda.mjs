import{ComputeBudgetProgram as L,Keypair as S,PublicKey as g,Transaction as A,TransactionMessage as T,VersionedTransaction as K}from"@solana/web3.js";import{get as m,set as l}from"lodash";var n=class{constructor(e){this.logLevel=e.logLevel!==void 0?e.logLevel:0,this.name=e.name}set level(e){this.logLevel=e}get time(){return Date.now().toString()}get moduleName(){return this.name}isLogLevel(e){return e<=this.logLevel}error(...e){return this.isLogLevel(0)?(console.error(this.time,this.name,"sdk logger error",...e),this):this}logWithError(...e){let r=e.map(i=>typeof i=="object"?JSON.stringify(i):i).join(", ");throw new Error(r)}warning(...e){return this.isLogLevel(1)?(console.warn(this.time,this.name,"sdk logger warning",...e),this):this}info(...e){return this.isLogLevel(2)?(console.info(this.time,this.name,"sdk logger info",...e),this):this}debug(...e){return this.isLogLevel(3)?(console.debug(this.time,this.name,"sdk logger debug",...e),this):this}},u={},f={};function c(t){let e=m(u,t);if(!e){let r=m(f,t);e=new n({name:t,logLevel:r}),l(u,t,e)}return e}import{TOKEN_PROGRAM_ID as x}from"@solana/spl-token";var k=c("Raydium_txUtil");function o(t,e){let[r,i]=g.findProgramAddressSync(t,e);return{publicKey:r,nonce:i}}function W(t,e,r){return o([e.toBuffer(),Buffer.from("registrar","utf8"),r.toBuffer()],t)}function O(t,e){return o([e.toBuffer(),Buffer.from("voting_mint_seed","utf8")],t)}function M(t,e){return o([e.toBuffer()],t)}function q(t,e,r){return o([e.toBuffer(),Buffer.from("voter","utf8"),r.toBuffer()],t)}function D(t,e,r){return o([e.toBuffer(),Buffer.from("voter-weight-record","utf8"),r.toBuffer()],t)}function U(t,e,r,i){return o([Buffer.from("governance","utf8"),e.toBuffer(),r.toBuffer(),i.toBuffer()],t)}export{W as getRegistrarAddress,U as getTokenOwnerRecordAddress,q as getVoterAddress,D as getVoterWeightRecordAddress,M as getVotingMintAuthority,O as getVotingTokenMint};
//# sourceMappingURL=pda.mjs.map