var me=Object.create;var O=Object.defineProperty;var ce=Object.getOwnPropertyDescriptor;var pe=Object.getOwnPropertyNames;var le=Object.getPrototypeOf,de=Object.prototype.hasOwnProperty;var fe=(e,r)=>{for(var n in r)O(e,n,{get:r[n],enumerable:!0})},I=(e,r,n,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of pe(r))!de.call(e,i)&&i!==n&&O(e,i,{get:()=>r[i],enumerable:!(t=ce(r,i))||t.enumerable});return e};var f=(e,r,n)=>(n=e!=null?me(le(e)):{},I(r||!e||!e.__esModule?O(n,"default",{value:e,enumerable:!0}):n,e)),ge=e=>I(O({},"__esModule",{value:!0}),e);var Re={};fe(Re,{default:()=>a,div:()=>Pe,eq:()=>se,getMax:()=>Ue,gt:()=>ie,gte:()=>Oe,isMeaningfulNumber:()=>Ee,lt:()=>Te,lte:()=>Fe,sub:()=>Le,toFractionWithDecimals:()=>De});module.exports=ge(Re);var V=f(require("big.js")),D=f(require("bn.js"));var u=f(require("bn.js"));var y=require("lodash"),Y=f(require("pino")),v=f(require("pino-pretty")),H={},be={},he=(0,v.default)({colorize:!0,levelFirst:!0,translateTime:"SYS:yyyymmdd HH:MM:ss.l"}),Ne=(0,Y.default)({base:null,level:"silent"},he);function p(e){let r=(0,y.get)(H,e);if(!r){let n=(0,y.get)(be,e);r=Ne.child({name:e},{level:n}),(0,y.set)(H,e,r)}return r.logWithError=(...n)=>{let t=n.map(i=>typeof i=="object"?JSON.stringify(i):i).join(", ");throw new Error(t)},r}var P=p("Raydium_bignumber");var h=new u.default(0),X=new u.default(1),He=new u.default(2),Ye=new u.default(3),ve=new u.default(5),U=new u.default(10),Z=new u.default(100),ze=new u.default(1e3),Xe=new u.default(1e4),z=9007199254740991;function c(e){if(e instanceof u.default)return e;if(typeof e=="string"){if(e.match(/^-?[0-9]+$/))return new u.default(e);P.logWithError(`invalid BigNumberish string: ${e}`)}return typeof e=="number"?(e%1&&P.logWithError(`BigNumberish number underflow: ${e}`),(e>=z||e<=-z)&&P.logWithError(`BigNumberish number overflow: ${e}`),new u.default(String(e))):typeof e=="bigint"?new u.default(e.toString()):(P.logWithError(`invalid BigNumberish value: ${e}`),new u.default(0))}function R(e){return U.pow(c(e))}function M(e){var x;if(e===void 0)return{denominator:"1",numerator:"0"};if(e instanceof u.default)return{numerator:e.toString(),denominator:"1"};if(e instanceof o)return{denominator:e.denominator.toString(),numerator:e.numerator.toString()};let r=String(e),[,n="",t="",i=""]=(x=r.replace(",","").match(/(-?)(\d*)\.?(\d*)/))!=null?x:[],g="1"+"0".repeat(i.length),b=n+(t==="0"?"":t)+i||"0";return{denominator:g,numerator:b,sign:n,int:t,dec:i}}var $=f(require("toformat")),we=$.default,k=we;var B=f(require("big.js")),J=f(require("decimal.js-light"));var L=p("module/fraction"),q=k(B.default),S=k(J.default),ye={[0]:S.ROUND_DOWN,[1]:S.ROUND_HALF_UP,[2]:S.ROUND_UP},We={[0]:B.default.roundDown,[1]:B.default.roundHalfUp,[2]:B.default.roundUp},o=class{constructor(r,n=X){this.numerator=c(r),this.denominator=c(n)}get quotient(){return this.numerator.div(this.denominator)}invert(){return new o(this.denominator,this.numerator)}add(r){let n=r instanceof o?r:new o(c(r));return this.denominator.eq(n.denominator)?new o(this.numerator.add(n.numerator),this.denominator):new o(this.numerator.mul(n.denominator).add(n.numerator.mul(this.denominator)),this.denominator.mul(n.denominator))}sub(r){let n=r instanceof o?r:new o(c(r));return this.denominator.eq(n.denominator)?new o(this.numerator.sub(n.numerator),this.denominator):new o(this.numerator.mul(n.denominator).sub(n.numerator.mul(this.denominator)),this.denominator.mul(n.denominator))}mul(r){let n=r instanceof o?r:new o(c(r));return new o(this.numerator.mul(n.numerator),this.denominator.mul(n.denominator))}div(r){let n=r instanceof o?r:new o(c(r));return new o(this.numerator.mul(n.denominator),this.denominator.mul(n.numerator))}toSignificant(r,n={groupSeparator:""},t=1){Number.isInteger(r)||L.logWithError(`${r} is not an integer.`),r<=0&&L.logWithError(`${r} is not positive.`),S.set({precision:r+1,rounding:ye[t]});let i=new S(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(r);return i.toFormat(i.decimalPlaces(),n)}toFixed(r,n={groupSeparator:""},t=1){return Number.isInteger(r)||L.logWithError(`${r} is not an integer.`),r<0&&L.logWithError(`${r} is negative.`),q.DP=r,q.RM=We[t]||1,new q(this.numerator.toString()).div(this.denominator.toString()).toFormat(r,n)}isZero(){return this.numerator.isZero()}};var ke=p("Raydium_amount"),G=k(V.default);function Be(e,r){let n="0",t="0";if(e.includes(".")){let i=e.split(".");i.length===2?([n,t]=i,t=t.padEnd(r,"0")):ke.logWithError(`invalid number string, num: ${e}`)}else n=e;return[n,t.slice(0,r)||t]}var l=class extends o{constructor(n,t,i=!0,g){let b=new D.default(0),x=U.pow(new D.default(n.decimals));if(i)b=c(t);else{let F=new D.default(0),K=new D.default(0);if(typeof t=="string"||typeof t=="number"||typeof t=="bigint"){let[ae,ue]=Be(t.toString(),n.decimals);F=c(ae),K=c(ue)}F=F.mul(x),b=F.add(K)}super(b,x);this.logger=p(g||"Amount"),this.token=n}get raw(){return this.numerator}isZero(){return this.raw.isZero()}gt(n){return this.token.equals(n.token)||this.logger.logWithError("gt token not equals"),this.raw.gt(n.raw)}lt(n){return this.token.equals(n.token)||this.logger.logWithError("lt token not equals"),this.raw.lt(n.raw)}add(n){return this.token.equals(n.token)||this.logger.logWithError("add token not equals"),new l(this.token,this.raw.add(n.raw))}subtract(n){return this.token.equals(n.token)||this.logger.logWithError("sub token not equals"),new l(this.token,this.raw.sub(n.raw))}toSignificant(n=this.token.decimals,t,i=0){return super.toSignificant(n,t,i)}toFixed(n=this.token.decimals,t,i=0){return n>this.token.decimals&&this.logger.logWithError("decimals overflow"),super.toFixed(n,t,i)}toExact(n={groupSeparator:""}){return G.DP=this.token.decimals,new G(this.numerator.toString()).div(this.denominator.toString()).toFormat(n)}};var Q=require("@solana/web3.js"),ee={symbol:"SOL",name:"Solana",decimals:9},N={symbol:"WSOL",name:"Wrapped SOL",mint:"So11111111111111111111111111111111111111112",decimals:9,extensions:{coingeckoId:"solana"}},pn={isQuantumSOL:!0,isLp:!1,official:!0,mint:new Q.PublicKey(N.mint),decimals:9,symbol:"SOL",id:"sol",name:"solana",icon:"https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png",extensions:{coingeckoId:"solana"}};var E=require("@solana/web3.js");var re=require("@solana/spl-token"),s=require("@solana/web3.js");function A({pubkey:e,isSigner:r=!1,isWritable:n=!0}){return{pubkey:e,isWritable:n,isSigner:r}}var fn=[A({pubkey:re.TOKEN_PROGRAM_ID,isWritable:!1}),A({pubkey:s.SystemProgram.programId,isWritable:!1}),A({pubkey:s.SYSVAR_RENT_PUBKEY,isWritable:!1})];function te({publicKey:e,transformSol:r}){if(e instanceof s.PublicKey)return r&&e.equals(T)?ne:e;if(r&&e===T.toBase58())return ne;if(typeof e=="string")try{return new s.PublicKey(e)}catch{throw new Error("invalid public key")}throw new Error("invalid public key")}var gn=new s.PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),bn=new s.PublicKey("Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS"),hn=new s.PublicKey("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt"),Nn=new s.PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),wn=new s.PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"),xn=new s.PublicKey("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"),yn=new s.PublicKey("7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj"),Wn=new s.PublicKey("USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX"),kn=new s.PublicKey("NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa"),Bn=new s.PublicKey("ANAxByE6G2WjFp7A4NqtWYXb3mgruyzZYg3spfxe6Lbo"),Sn=new s.PublicKey("7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs"),ne=new s.PublicKey("So11111111111111111111111111111111111111112"),T=s.PublicKey.default;var C=class{constructor({mint:r,decimals:n,symbol:t="UNKNOWN",name:i="UNKNOWN",skipMint:g=!1}){if(r===T.toBase58()||r instanceof E.PublicKey&&T.equals(r)){this.decimals=N.decimals,this.symbol=N.symbol,this.name=N.name,this.mint=new E.PublicKey(N.mint);return}this.decimals=n,this.symbol=t,this.name=i,this.mint=g?E.PublicKey.default:te({publicKey:r})}equals(r){return this===r?!0:this.mint.equals(r.mint)}},W=C;W.WSOL=new C(N);var j=class{constructor({decimals:r,symbol:n="UNKNOWN",name:t="UNKNOWN"}){this.decimals=r,this.symbol=n,this.name=t}equals(r){return this===r}},_=j;_.SOL=new j(ee);var oe=new o(Z),w=class extends o{toSignificant(r=5,n,t){return this.mul(oe).toSignificant(r,n,t)}toFixed(r=2,n,t){return this.mul(oe).toFixed(r,n,t)}};var Se=p("Raydium_price"),d=class extends o{constructor(n){let{baseToken:t,quoteToken:i,numerator:g,denominator:b}=n;super(g,b);this.baseToken=t,this.quoteToken=i,this.scalar=new o(R(t.decimals),R(i.decimals))}get raw(){return new o(this.numerator,this.denominator)}get adjusted(){return super.mul(this.scalar)}invert(){return new d({baseToken:this.quoteToken,quoteToken:this.baseToken,denominator:this.numerator,numerator:this.denominator})}mul(n){this.quoteToken!==n.baseToken&&Se.logWithError("mul token not equals");let t=super.mul(n);return new d({baseToken:this.baseToken,quoteToken:n.quoteToken,denominator:t.denominator,numerator:t.numerator})}toSignificant(n=this.quoteToken.decimals,t,i){return this.adjusted.toSignificant(n,t,i)}toFixed(n=this.quoteToken.decimals,t,i){return this.adjusted.toFixed(n,t,i)}};function a(e){if(e instanceof w)return new o(e.numerator,e.denominator);if(e instanceof d)return e.adjusted;if(e instanceof l)try{return a(e.toExact())}catch{return new o(h)}if(e instanceof o)return e;let r=String(e),n=M(r);return new o(n.numerator,n.denominator)}function De(e){var t;if(e instanceof w)return{fr:new o(e.numerator,e.denominator)};if(e instanceof d)return{fr:e.adjusted};if(e instanceof l)return{fr:a(e.toExact()),decimals:e.token.decimals};if(e instanceof o)return{fr:e};let r=String(e),n=M(r);return{fr:new o(n.numerator,n.denominator),decimals:(t=n.dec)==null?void 0:t.length}}function Te(e,r){if(e==null||r==null)return!1;let n=a(e),t=a(r);return n.sub(t).numerator,n.sub(t).numerator.lt(h)}function ie(e,r){if(e==null||r==null)return!1;let n=a(e),t=a(r);return n.sub(t).numerator.gt(h)}function Fe(e,r){if(e==null||r==null)return!1;let n=a(e),t=a(r);return n.sub(t).numerator.lte(h)}function Oe(e,r){if(e==null||r==null)return!1;let n=a(e),t=a(r);return n.sub(t).numerator.gte(h)}function se(e,r){if(e==null||r==null)return!1;let n=a(e),t=a(r);return n.sub(t).numerator.eq(h)}function Pe(e,r){if(e==null||r==null)return;let n=a(e),t=a(r);try{return n.div(t)}catch{return n}}function Le(e,r){if(e==null||r==null)return;let n=a(e),t=a(r);return n.sub(t)}function Ee(e){return e==null?!1:!se(e,0)}function Ue(e,r){return ie(r,e)?r:e}0&&(module.exports={div,eq,getMax,gt,gte,isMeaningfulNumber,lt,lte,sub,toFractionWithDecimals});
//# sourceMappingURL=fractionUtil.js.map