var dt=Object.defineProperty,yt=Object.defineProperties;var bt=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var qe=Object.prototype.hasOwnProperty,Ae=Object.prototype.propertyIsEnumerable;var Be=(e,t,n)=>t in e?dt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))qe.call(t,n)&&Be(e,n,t[n]);if(j)for(var n of j(t))Ae.call(t,n)&&Be(e,n,t[n]);return e},G=(e,t)=>yt(e,bt(t));var Ne=(e,t)=>{var n={};for(var r in e)qe.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&j)for(var r of j(e))t.indexOf(r)<0&&Ae.call(e,r)&&(n[r]=e[r]);return n};import{PublicKey as _e}from"@solana/web3.js";import De from"bn.js";var Oe=(m=>(m[m.Uninitialized=0]="Uninitialized",m[m.Initialized=1]="Initialized",m[m.Disabled=2]="Disabled",m[m.RemoveLiquidityOnly=3]="RemoveLiquidityOnly",m[m.LiquidityOnly=4]="LiquidityOnly",m[m.OrderBook=5]="OrderBook",m[m.Swap=6]="Swap",m[m.WaitingForStart=7]="WaitingForStart",m))(Oe||{}),gn=new De(25),Pn=new De(1e4),Ee="675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8",ft=new _e(Ee),We="5quBtoiQqxF9Jv6KYKctB59NT3gtJD2Y65kdnB1Uev3h",gt=new _e(We),xn={[Ee]:4,[We]:5},Re={4:ft,5:gt},Me={4:3,5:3};import{PublicKey as St}from"@solana/web3.js";import{PublicKey as Tt}from"@solana/web3.js";import Ue,{isBN as Fe}from"bn.js";import{bits as Ln,BitStructure as Tn,blob as Pt,Blob as Sn,cstr as wn,f32 as In,f32be as Bn,f64 as qn,f64be as An,greedy as Nn,Layout as xt,ns64 as _n,ns64be as Dn,nu64 as On,nu64be as En,offset as Wn,s16 as Rn,s16be as Mn,s24 as Kn,s24be as Vn,s32 as vn,s32be as Un,s40 as Fn,s40be as Cn,s48 as Qn,s48be as Yn,s8 as jn,seq as ht,struct as Gn,Structure as kt,u16 as zn,u16be as Hn,u24 as Jn,u24be as Xn,u32 as $n,u32be as Zn,u40 as er,u40be as tr,u48 as nr,u48be as rr,u8 as or,UInt as Lt,union as ir,Union as sr,unionLayoutDiscriminator as ar,utf8 as ur}from"@solana/buffer-layout";var re=xt,Ke=kt;var Ve=Lt;var ve=ht;var oe=Pt;var z=class extends re{constructor(n,r,o){super(n,o);this.blob=oe(n),this.signed=r}decode(n,r=0){let o=new Ue(this.blob.decode(n,r),10,"le");return this.signed?o.fromTwos(this.span*8).clone():o}encode(n,r,o=0){return typeof n=="number"&&(n=new Ue(n)),this.signed&&(n=n.toTwos(this.span*8)),this.blob.encode(n.toArrayLike(Buffer,"le",this.span),r,o)}};function B(e){return new Ve(1,e)}function c(e){return new z(8,!1,e)}function q(e){return new z(16,!1,e)}var ie=class extends re{constructor(n,r,o,a){super(n.span,a);this.layout=n,this.decoder=r,this.encoder=o}decode(n,r){return this.decoder(this.layout.decode(n,r))}encode(n,r,o){return this.layout.encode(this.encoder(n),r,o)}getSpan(n,r){return this.layout.getSpan(n,r)}};function b(e){return new ie(oe(32),t=>new Tt(t),t=>t.toBuffer(),e)}var se=class extends Ke{decode(t,n){return super.decode(t,n)}};function S(e,t,n){return new se(e,t,n)}function U(e,t,n){let r,o=typeof t=="number"?t:Fe(t)?t.toNumber():new Proxy(t,{get(a,i){if(!r){let u=Reflect.get(a,"count");r=Fe(u)?u.toNumber():u,Reflect.set(a,"count",r)}return Reflect.get(a,i)},set(a,i,u){return i==="count"&&(r=u),Reflect.set(a,i,u)}});return ve(e,o,n)}var K=new St("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo"),W=5e4,wt=S([c("x"),c("y"),c("price")]),It=S([c("accountType"),c("status"),c("multiplier"),c("validDataCount"),U(wt,W,"DataElement")]);function Bt(e,t){return[0,W-2]}function qt(e){return[0,W-2]}function At(e){return[0,W-2]}function Nt(e,t,n){let[r,o]=Bt(t,n),a=r,i=o,u=0,m=t*e.multiplier/n;for(;a<=i;){if(u=Math.floor((i+a)/2),u===0||u>=W-2)return[u,u,!1];let p=e.DataElement[u].x*e.multiplier/e.DataElement[u].y,l=e.DataElement[u-1].x*e.multiplier/e.DataElement[u-1].y,d=e.DataElement[u+1].x*e.multiplier/e.DataElement[u+1].y;if(m===p)return[u,u,!0];if(m===l)return[u-1,u-1,!0];if(m===d)return[u+1,u+1,!0];if(m<l)i=u-1;else{if(m>l&&m<p)return[u-1,u,!0];if(m>p&&m<d)return[u,u+1,!0];a=u+1}}return[u,u,!1]}function ae(e,t,n){let[r,o,a]=Nt(e,t,n);if(!a)return 0;if(r===o){let i=e.DataElement[r].x;return t*e.multiplier/i}else{let i=e.DataElement[r].x,u=e.DataElement[r].y,m=e.DataElement[o].x,p=e.DataElement[o].y,l=n*(m*u-i*p),d=i*l,g=(m-i)*(t*u-i*n)*p,y=d+g;return t*e.multiplier*l/y}}function E(e,t,n){return t*e.multiplier/n}function Qe(e,t,n){return t*n/e.multiplier}function _t(e,t){let[n,r]=qt(t),o=n,a=r,i=0,u=t;for(;o<a;){if(i=Math.floor((a+o)/2),i<=0||i>W-2)return[i,i,!1];let m=e.DataElement[i].x,p=e.DataElement[i-1].x,l=e.DataElement[i+1].x;if(u===m)return[i,i,!0];if(u===p)return[i-1,i-1,!0];if(u===l)return[i+1,i+1,!0];if(u<p)a=i-1;else{if(u>p&&u<m)return[i-1,i,!0];if(u>m&&u<l)return[i,i+1,!0];o=i+1}}return[i,i,!1]}function Dt(e,t){let[n,r]=At(t),o=n,a=r,i=0,u=t;for(;o<=a;){if(i=Math.floor((a+o)/2),i<=0||i>=W-2)return[i,i,!1];let m=e.DataElement[i].y,p=e.DataElement[i-1].y,l=e.DataElement[i+1].y;if(u===m)return[i,i,!0];if(u===p)return[i-1,i-1,!0];if(u===l)return[i+1,i+1,!0];if(u<l)o=i+1;else{if(u<p&&u>m)return[i-1,i,!0];if(u<m&&u>l)return[i,i+1,!0];a=i-1}}return[i,i,!1]}function Ye(e,t,n,r){let o=r?t+n:t-n,[a,i,u]=_t(e,o);if(!u)return[0,0,!1,u];if(a===i)return[e.DataElement[i].price,e.DataElement[i].y,!1,u];{let m=e.DataElement[a].x,p=e.DataElement[i].x,l=e.DataElement[a].price,d=e.DataElement[i].price,g=e.DataElement[a].y,y=e.DataElement[i].y;if(t>=m&&t<=p)return r?[d,y,!0,u]:[l,g,!0,u];{let L,I;return r?(L=l+(d-l)*(t-m)/(p-m),I=g-(o-m)*e.multiplier/d):(L=l+(d-l)*(t-m)/(p-m),I=y+(p-o)*e.multiplier/l),[L,I,!1,u]}}}function Ot(e,t,n,r){let o=r?t-n:t+n,[a,i,u]=Dt(e,o);if(!u)return[0,0,!1,u];if(a===i)return[e.DataElement[i].price,e.DataElement[i].x,!1,u];{let m=e.DataElement[a].x,p=e.DataElement[i].x,l=e.DataElement[a].price,d=e.DataElement[i].price,g=e.DataElement[a].y,y=e.DataElement[i].y;if(t>=y&&t<=g)return r?[d,p,!0,u]:[l,m,!0,u];{let L,I;return r?(L=l+(d-l)*(g-t)/(g-y),I=m+d*(g-o)/e.multiplier):(L=l+(d-l)*(g-t)/(g-y),I=p-l*(o-y)/e.multiplier),[L,I,!1,u]}}}function Et(e,t){let n=Ye(e,t,0,!1);return n[3]?n[0]:0}function wr(e,t,n,r){let o=ae(e,t,n),a=E(e,t,o),i=E(e,n,o),u=E(e,r,o),m=!0,[p,l,d,g]=Ye(e,a,u,m);if(!g)return 0;if(d)return r*e.multiplier/p;{let y=i-l;return Qe(e,y,o)}}function Ir(e,t,n,r){let o=ae(e,t,n),a=E(e,t,o),i=E(e,n,o),u=E(e,r,o),m=!1,[p,l,d,g]=Ot(e,i,u,m);if(!g)return 0;if(d)return r*p/e.multiplier;{let y=a-l;return Qe(e,y,o)}}function Wt(e){let t=It.decode(e);return{accountType:t.accountType.toNumber(),status:t.status.toNumber(),multiplier:t.multiplier.toNumber(),validDataCount:t.validDataCount.toNumber(),DataElement:t.DataElement.map(n=>({x:n.x.toNumber(),y:n.y.toNumber(),price:n.price.toNumber()}))}}function Br(e,t,n,r){let o=Et(e,E(e,t,ae(e,t,n)))/e.multiplier;return r?o:1/o}var Ce=class{constructor({connection:t}){this._layoutData={accountType:0,status:0,multiplier:0,validDataCount:0,DataElement:[]};this.connection=t}get stableModelData(){return this._layoutData}async initStableModelLayout(){if(this._layoutData.validDataCount===0&&this.connection){let t=await this.connection.getAccountInfo(K);t&&(this._layoutData=Wt(t==null?void 0:t.data))}}};import{OpenOrders as mn}from"@project-serum/serum";import Y from"bn.js";import{get as je,set as Rt}from"lodash";import Mt from"pino";import Kt from"pino-pretty";var Ge={},Vt={},vt=Kt({colorize:!0,levelFirst:!0,translateTime:"SYS:yyyymmdd HH:MM:ss.l"}),Ut=Mt({base:null,level:"silent"},vt);function k(e){let t=je(Ge,e);if(!t){let n=je(Vt,e);t=Ut.child({name:e},{level:n}),Rt(Ge,e,t)}return t.logWithError=(...n)=>{let r=n.map(o=>typeof o=="object"?JSON.stringify(o):o).join(", ");throw new Error(r)},t}import{TOKEN_PROGRAM_ID as Ft}from"@solana/spl-token";import{PublicKey as T,SystemProgram as Ct,SYSVAR_RENT_PUBKEY as Qt}from"@solana/web3.js";function s({pubkey:e,isSigner:t=!1,isWritable:n=!0}){return{pubkey:e,isWritable:n,isSigner:t}}var ue=[s({pubkey:Ft,isWritable:!1}),s({pubkey:Ct.programId,isWritable:!1}),s({pubkey:Qt,isWritable:!1})];function V({publicKey:e,transformSol:t}){if(e instanceof T)return t&&e.equals(F)?ze:e;if(t&&e===F.toBase58())return ze;if(typeof e=="string")try{return new T(e)}catch{throw new Error("invalid public key")}throw new Error("invalid public key")}var Kr=new T("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),Vr=new T("Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS"),vr=new T("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt"),Ur=new T("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),Fr=new T("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"),Cr=new T("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"),Qr=new T("7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj"),Yr=new T("USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX"),jr=new T("NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa"),Gr=new T("ANAxByE6G2WjFp7A4NqtWYXb3mgruyzZYg3spfxe6Lbo"),zr=new T("7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs"),ze=new T("So11111111111111111111111111111111111111112"),F=T.default;import{PACKET_DATA_SIZE as Yt,PublicKey as He,sendAndConfirmTransaction as Zr,Transaction as ce}from"@solana/web3.js";var _=k("Raydium_txTool");function jt(e,t){e.length<1&&_.logWithError(`no instructions provided: ${e.toString()}`),t.length<1&&_.logWithError(`no signers provided:, ${t.toString()}`);let n=new ce;n.recentBlockhash="11111111111111111111111111111111",n.feePayer=t[0],n.add(...e);let r=n.compileMessage().serialize();return t.length+t.length*64+r.length}async function Je(e,t,n){let r=new He("RaydiumSimuLateTransaction11111111111111111"),o=[],a=new ce;a.feePayer=r;for(let m of t)jt([...a.instructions,m],[r])>Yt&&(o.push(a),a=new ce,a.feePayer=r),a.add(m);a.instructions.length>0&&o.push(a);let i=[];try{i=await Promise.all(o.map(m=>e.simulateTransaction(m)))}catch(m){m instanceof Error&&_.logWithError(`failed to simulate for instructions, RPC_ERROR, ${m.message}`)}let u=[];for(let m of i){let{value:p}=m;if(_.debug(`simulate result: ${JSON.stringify(m)}`),p.logs){let l=p.logs.filter(d=>d&&d.includes(n));_.debug(`filteredLog: ${JSON.stringify(u)}`),l.length||_.logWithError(` "simulate log not match keyword, keyword: ${n}`),u.push(...l)}}return u}function Xe(e,t){let n=e.match(/{["\w:,]+}/g);return!n||n.length!==1?_.logWithError(`simulate log fail to match json, keyword: ${t}`):n[0]}function A(e,t){let r=new RegExp(`"${t}":(\\d+)`,"g").exec(e);return!r||r.length!==2?_.logWithError(`simulate log fail to match key", key: ${t}`):r[1]}async function me(e,t){let[n,r]=await He.findProgramAddress(e,t);return{publicKey:n,nonce:r}}import Zt from"big.js";import $ from"bn.js";import w from"bn.js";var H=k("Raydium_bignumber");var uo=new w(0),Ze=new w(1),co=new w(2),mo=new w(3),lo=new w(5),et=new w(10),tt=new w(100),po=new w(1e3),yo=new w(1e4),$e=9007199254740991;function h(e){if(e instanceof w)return e;if(typeof e=="string"){if(e.match(/^-?[0-9]+$/))return new w(e);H.logWithError(`invalid BigNumberish string: ${e}`)}return typeof e=="number"?(e%1&&H.logWithError(`BigNumberish number underflow: ${e}`),(e>=$e||e<=-$e)&&H.logWithError(`BigNumberish number overflow: ${e}`),new w(String(e))):typeof e=="bigint"?new w(e.toString()):(H.logWithError(`invalid BigNumberish value: ${e}`),new w(0))}import Gt from"toformat";var zt=Gt,C=zt;import X from"big.js";import Jt from"decimal.js-light";var J=k("module/fraction"),le=C(X),Q=C(Jt),Xt={[0]:Q.ROUND_DOWN,[1]:Q.ROUND_HALF_UP,[2]:Q.ROUND_UP},$t={[0]:X.roundDown,[1]:X.roundHalfUp,[2]:X.roundUp},f=class{constructor(t,n=Ze){this.numerator=h(t),this.denominator=h(n)}get quotient(){return this.numerator.div(this.denominator)}invert(){return new f(this.denominator,this.numerator)}add(t){let n=t instanceof f?t:new f(h(t));return this.denominator.eq(n.denominator)?new f(this.numerator.add(n.numerator),this.denominator):new f(this.numerator.mul(n.denominator).add(n.numerator.mul(this.denominator)),this.denominator.mul(n.denominator))}sub(t){let n=t instanceof f?t:new f(h(t));return this.denominator.eq(n.denominator)?new f(this.numerator.sub(n.numerator),this.denominator):new f(this.numerator.mul(n.denominator).sub(n.numerator.mul(this.denominator)),this.denominator.mul(n.denominator))}mul(t){let n=t instanceof f?t:new f(h(t));return new f(this.numerator.mul(n.numerator),this.denominator.mul(n.denominator))}div(t){let n=t instanceof f?t:new f(h(t));return new f(this.numerator.mul(n.denominator),this.denominator.mul(n.numerator))}toSignificant(t,n={groupSeparator:""},r=1){Number.isInteger(t)||J.logWithError(`${t} is not an integer.`),t<=0&&J.logWithError(`${t} is not positive.`),Q.set({precision:t+1,rounding:Xt[r]});let o=new Q(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(t);return o.toFormat(o.decimalPlaces(),n)}toFixed(t,n={groupSeparator:""},r=1){return Number.isInteger(t)||J.logWithError(`${t} is not an integer.`),t<0&&J.logWithError(`${t} is negative.`),le.DP=t,le.RM=$t[r]||1,new le(this.numerator.toString()).div(this.denominator.toString()).toFormat(t,n)}isZero(){return this.numerator.isZero()}};var en=k("Raydium_amount"),nt=C(Zt);function tn(e,t){let n="0",r="0";if(e.includes(".")){let o=e.split(".");o.length===2?([n,r]=o,r=r.padEnd(t,"0")):en.logWithError(`invalid number string, num: ${e}`)}else n=e;return[n,r.slice(0,t)||r]}var D=class extends f{constructor(n,r,o=!0,a){let i=new $(0),u=et.pow(new $(n.decimals));if(o)i=h(r);else{let m=new $(0),p=new $(0);if(typeof r=="string"||typeof r=="number"||typeof r=="bigint"){let[l,d]=tn(r.toString(),n.decimals);m=h(l),p=h(d)}m=m.mul(u),i=m.add(p)}super(i,u);this.logger=k(a||"Amount"),this.token=n}get raw(){return this.numerator}isZero(){return this.raw.isZero()}gt(n){return this.token.equals(n.token)||this.logger.logWithError("gt token not equals"),this.raw.gt(n.raw)}lt(n){return this.token.equals(n.token)||this.logger.logWithError("lt token not equals"),this.raw.lt(n.raw)}add(n){return this.token.equals(n.token)||this.logger.logWithError("add token not equals"),new D(this.token,this.raw.add(n.raw))}subtract(n){return this.token.equals(n.token)||this.logger.logWithError("sub token not equals"),new D(this.token,this.raw.sub(n.raw))}toSignificant(n=this.token.decimals,r,o=0){return super.toSignificant(n,r,o)}toFixed(n=this.token.decimals,r,o=0){return n>this.token.decimals&&this.logger.logWithError("decimals overflow"),super.toFixed(n,r,o)}toExact(n={groupSeparator:""}){return nt.DP=this.token.decimals,new nt(this.numerator.toString()).div(this.denominator.toString()).toFormat(n)}};import{PublicKey as nn}from"@solana/web3.js";var rt={symbol:"SOL",name:"Solana",decimals:9},M={symbol:"WSOL",name:"Wrapped SOL",mint:"So11111111111111111111111111111111111111112",decimals:9,extensions:{coingeckoId:"solana"}},Vo={isQuantumSOL:!0,isLp:!1,official:!0,mint:new nn(M.mint),decimals:9,symbol:"SOL",id:"sol",name:"solana",icon:"https://img.raydium.io/icon/So11111111111111111111111111111111111111112.png",extensions:{coingeckoId:"solana"}};import{PublicKey as pe}from"@solana/web3.js";var de=class{constructor({mint:t,decimals:n,symbol:r="UNKNOWN",name:o="UNKNOWN",skipMint:a=!1}){if(t===F.toBase58()||t instanceof pe&&F.equals(t)){this.decimals=M.decimals,this.symbol=M.symbol,this.name=M.name,this.mint=new pe(M.mint);return}this.decimals=n,this.symbol=r,this.name=o,this.mint=a?pe.default:V({publicKey:t})}equals(t){return this===t?!0:this.mint.equals(t.mint)}},R=de;R.WSOL=new de(M);var be=class{constructor({decimals:t,symbol:n="UNKNOWN",name:r="UNKNOWN"}){this.decimals=t,this.symbol=n,this.name=r}equals(t){return this===t}},ye=be;ye.SOL=new be(rt);var $o=new f(tt);var si=k("Raydium_price");import{TOKEN_PROGRAM_ID as Te}from"@solana/spl-token";import{SystemProgram as on,TransactionInstruction as N}from"@solana/web3.js";var fe=S([B("instruction"),c("amountIn"),c("minAmountOut")]),ge=S([B("instruction"),c("maxAmountIn"),c("amountOut")]),Pe=S([B("instruction"),B("nonce")]),xe=S([B("instruction"),B("nonce"),c("startTime")]),he=S([c("status"),c("nonce"),c("maxOrder"),c("depth"),c("baseDecimal"),c("quoteDecimal"),c("state"),c("resetFlag"),c("minSize"),c("volMaxCutRatio"),c("amountWaveRatio"),c("baseLotSize"),c("quoteLotSize"),c("minPriceMultiplier"),c("maxPriceMultiplier"),c("systemDecimalValue"),c("minSeparateNumerator"),c("minSeparateDenominator"),c("tradeFeeNumerator"),c("tradeFeeDenominator"),c("pnlNumerator"),c("pnlDenominator"),c("swapFeeNumerator"),c("swapFeeDenominator"),c("baseNeedTakePnl"),c("quoteNeedTakePnl"),c("quoteTotalPnl"),c("baseTotalPnl"),q("quoteTotalDeposited"),q("baseTotalDeposited"),q("swapBaseInAmount"),q("swapQuoteOutAmount"),c("swapBase2QuoteFee"),q("swapQuoteInAmount"),q("swapBaseOutAmount"),c("swapQuote2BaseFee"),b("baseVault"),b("quoteVault"),b("baseMint"),b("quoteMint"),b("lpMint"),b("openOrders"),b("marketId"),b("marketProgramId"),b("targetOrders"),b("withdrawQueue"),b("lpVault"),b("owner"),c("lpReserve"),U(c(),3,"padding")]),rn=S([c("accountType"),c("status"),c("nonce"),c("maxOrder"),c("depth"),c("baseDecimal"),c("quoteDecimal"),c("state"),c("resetFlag"),c("minSize"),c("volMaxCutRatio"),c("amountWaveRatio"),c("baseLotSize"),c("quoteLotSize"),c("minPriceMultiplier"),c("maxPriceMultiplier"),c("systemDecimalsValue"),c("abortTradeFactor"),c("priceTickMultiplier"),c("priceTick"),c("minSeparateNumerator"),c("minSeparateDenominator"),c("tradeFeeNumerator"),c("tradeFeeDenominator"),c("pnlNumerator"),c("pnlDenominator"),c("swapFeeNumerator"),c("swapFeeDenominator"),c("baseNeedTakePnl"),c("quoteNeedTakePnl"),c("quoteTotalPnl"),c("baseTotalPnl"),c("poolOpenTime"),c("punishPcAmount"),c("punishCoinAmount"),c("orderbookToInitTime"),q("swapBaseInAmount"),q("swapQuoteOutAmount"),q("swapQuoteInAmount"),q("swapBaseOutAmount"),c("swapQuote2BaseFee"),c("swapBase2QuoteFee"),b("baseVault"),b("quoteVault"),b("baseMint"),b("quoteMint"),b("lpMint"),b("modelDataAccount"),b("openOrders"),b("marketId"),b("marketProgramId"),b("targetOrders"),b("owner"),U(c(),64,"padding")]),ke=S([B("instruction"),c("baseAmountIn"),c("quoteAmountIn"),c("fixedSide")]),Le=S([B("instruction"),c("amountIn")]),ot={4:he,5:rn};var Z=k("Raydium_liquidity_instruction");function qi(e){let{poolKeys:t,userKeys:n,amountIn:r,amountOut:o,fixedSide:a}=e,{version:i}=t;if(i===4||i===5){let u={poolKeys:t,userKeys:n};if(a==="in")return sn(G(v({},u),{amountIn:r,minAmountOut:o}),i);if(a==="out")return an(G(v({},u),{maxAmountIn:r,amountOut:o}),i);Z.logWithError("invalid params","params",e)}throw Z.logWithError("invalid version","poolKeys.version",i),new Error("invalid version")}function it(e){let t=S([B("instruction"),B("simulateType")]),n=Buffer.alloc(t.span);t.encode({instruction:12,simulateType:0},n);let r=[s({pubkey:e.id,isWritable:!1}),s({pubkey:e.authority,isWritable:!1}),s({pubkey:e.openOrders,isWritable:!1}),s({pubkey:e.baseVault,isWritable:!1}),s({pubkey:e.quoteVault,isWritable:!1}),s({pubkey:e.lpMint,isWritable:!1}),s({pubkey:e.marketId,isWritable:!1})];return new N({programId:e.programId,keys:r,data:n})}function sn({poolKeys:e,userKeys:t,amountIn:n,minAmountOut:r},o){let a=Buffer.alloc(fe.span);fe.encode({instruction:9,amountIn:h(n),minAmountOut:h(r)},a);let i=[s({pubkey:Te,isWritable:!1}),s({pubkey:e.id}),s({pubkey:e.authority,isWritable:!1}),s({pubkey:e.openOrders})];return o===4&&i.push(s({pubkey:e.targetOrders})),i.push(s({pubkey:e.baseVault}),s({pubkey:e.quoteVault})),o===5&&i.push(s({pubkey:K})),i.push(s({pubkey:e.marketProgramId,isWritable:!1}),s({pubkey:e.marketId}),s({pubkey:e.marketBids}),s({pubkey:e.marketAsks}),s({pubkey:e.marketEventQueue}),s({pubkey:e.marketBaseVault}),s({pubkey:e.marketQuoteVault}),s({pubkey:e.marketAuthority,isWritable:!1}),s({pubkey:t.tokenAccountIn}),s({pubkey:t.tokenAccountOut}),s({pubkey:t.owner,isWritable:!1})),new N({programId:e.programId,keys:i,data:a})}function an({poolKeys:e,userKeys:t,maxAmountIn:n,amountOut:r},o){let a=Buffer.alloc(ge.span);ge.encode({instruction:11,maxAmountIn:h(n),amountOut:h(r)},a);let i=[s({pubkey:on.programId,isWritable:!1}),s({pubkey:e.id}),s({pubkey:e.authority,isWritable:!1}),s({pubkey:e.openOrders}),s({pubkey:e.targetOrders}),s({pubkey:e.baseVault}),s({pubkey:e.quoteVault})];return o===5&&i.push(s({pubkey:K})),i.push(s({pubkey:e.marketProgramId,isWritable:!1}),s({pubkey:e.marketId}),s({pubkey:e.marketBids}),s({pubkey:e.marketAsks}),s({pubkey:e.marketEventQueue}),s({pubkey:e.marketBaseVault}),s({pubkey:e.marketQuoteVault}),s({pubkey:e.marketAuthority,isWritable:!1}),s({pubkey:t.tokenAccountIn}),s({pubkey:t.tokenAccountOut}),s({pubkey:t.owner,isWritable:!1,isSigner:!0})),new N({programId:e.programId,keys:i,data:a})}function Ai(e){let a=e,{owner:t}=a,n=Ne(a,["owner"]),r=Buffer.alloc(Pe.span);Pe.encode({instruction:10,nonce:n.nonce},r);let o=[...ue,s({pubkey:n.targetOrders}),s({pubkey:n.withdrawQueue}),s({pubkey:n.authority,isWritable:!1}),s({pubkey:n.lpMint}),s({pubkey:n.baseMint,isWritable:!1}),s({pubkey:n.quoteMint,isWritable:!1}),s({pubkey:n.baseVault}),s({pubkey:n.quoteVault}),s({pubkey:n.lpVault}),s({pubkey:n.marketId,isWritable:!1}),s({pubkey:t,isSigner:!0})];return new N({programId:n.programId,keys:o,data:r})}function Ni(e){let{poolKeys:t,userKeys:n,startTime:r}=e,o=Buffer.alloc(xe.span);xe.encode({instruction:0,nonce:t.nonce,startTime:h(r)},o);let a=[...ue,s({pubkey:t.id}),s({pubkey:t.authority,isWritable:!1}),s({pubkey:t.openOrders}),s({pubkey:t.lpMint}),s({pubkey:t.baseMint,isWritable:!1}),s({pubkey:t.quoteMint,isWritable:!1}),s({pubkey:t.baseVault,isWritable:!1}),s({pubkey:t.quoteVault,isWritable:!1}),s({pubkey:t.withdrawQueue}),s({pubkey:t.targetOrders}),s({pubkey:n.lpTokenAccount}),s({pubkey:t.lpVault,isWritable:!1}),s({pubkey:t.marketProgramId,isWritable:!1}),s({pubkey:t.marketId,isWritable:!1}),s({pubkey:n.payer,isSigner:!0})];return new N({programId:t.programId,keys:a,data:o})}function _i(e){let{poolKeys:t,userKeys:n,baseAmountIn:r,quoteAmountIn:o,fixedSide:a}=e,{version:i}=t;if(i===4||i===5){let u=Buffer.alloc(ke.span);ke.encode({instruction:3,baseAmountIn:h(r),quoteAmountIn:h(o),fixedSide:h(a==="base"?0:1)},u);let m=[s({pubkey:Te,isWritable:!1}),s({pubkey:t.id}),s({pubkey:t.authority,isWritable:!1}),s({pubkey:t.openOrders,isWritable:!1}),s({pubkey:t.targetOrders}),s({pubkey:t.lpMint}),s({pubkey:t.baseVault}),s({pubkey:t.quoteVault})];return i===5&&m.push(s({pubkey:K})),m.push(s({pubkey:t.marketId,isWritable:!1}),s({pubkey:n.baseTokenAccount}),s({pubkey:n.quoteTokenAccount}),s({pubkey:n.lpTokenAccount}),s({pubkey:n.owner,isWritable:!1,isSigner:!0})),new N({programId:t.programId,keys:m,data:u})}return Z.logWithError("invalid version","poolKeys.version",i),new N({programId:t.programId,keys:[]})}function Di(e){let{poolKeys:t,userKeys:n,amountIn:r}=e,{version:o}=t;if(o===4||o===5){let a=Buffer.alloc(Le.span);Le.encode({instruction:4,amountIn:h(r)},a);let i=[s({pubkey:Te,isWritable:!1}),s({pubkey:t.id}),s({pubkey:t.authority,isWritable:!1}),s({pubkey:t.openOrders}),s({pubkey:t.targetOrders}),s({pubkey:t.lpMint}),s({pubkey:t.baseVault}),s({pubkey:t.quoteVault})];return o===5?i.push(s({pubkey:K})):i.push(s({pubkey:t.withdrawQueue}),s({pubkey:t.lpVault})),i.push(s({pubkey:t.marketProgramId,isWritable:!1}),s({pubkey:t.marketId}),s({pubkey:t.marketBaseVault}),s({pubkey:t.marketQuoteVault}),s({pubkey:t.marketAuthority,isWritable:!1}),s({pubkey:n.lpTokenAccount}),s({pubkey:n.baseTokenAccount}),s({pubkey:n.quoteTokenAccount}),s({pubkey:n.owner,isWritable:!1,isSigner:!0}),s({pubkey:t.marketEventQueue}),s({pubkey:t.marketBids}),s({pubkey:t.marketAsks})),new N({programId:t.programId,keys:i,data:a})}return Z.logWithError("invalid version","poolKeys.version",o),new N({programId:t.programId,keys:[]})}import{PublicKey as st}from"@solana/web3.js";var Se=k("Raydium_liquidity_serum"),at="9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin",un=new st(at),Mi={[at]:3},cn={3:un};function ut(e){let t=Me[e];return t||Se.logWithError("invalid version","version",e),t}function ct(e){let t=cn[e];return t||Se.logWithError("invalid version","version",e),t}async function mt({programId:e,marketId:t}){let n=[t.toBuffer()],r=0,o;for(;r<100;){try{let a=n.concat(Buffer.from([r]),Buffer.alloc(7));o=await st.createProgramAddress(a,e)}catch(a){if(a instanceof TypeError)throw a;r++;continue}return{publicKey:o,nonce:r}}throw Se.logWithError("unable to find a viable program address nonce","params",{programId:e,marketId:t}),new Error("unable to find a viable program address nonce")}var ee=k("Raydium_liquidity_util");function Xi(e,t){let n=e instanceof D?e.token:R.WSOL,{baseMint:r,quoteMint:o}=t;if(n.mint.equals(r))return"base";if(n.mint.equals(o))return"quote";let a=`liquidity getTokenSide - token not match with pool, params: ${JSON.stringify({token:n.mint,baseMint:r,quoteMint:o})}`;throw console.error(a),new Error(a)}function $i(e,t){let{baseMint:n,quoteMint:r}=t;return e.mint.equals(n)||e.mint.equals(r)}function Zi(e){let{status:t,startTime:n}=e,r=t.toNumber();return{[0]:{swap:!1,addLiquidity:!1,removeLiquidity:!1},[1]:{swap:!0,addLiquidity:!0,removeLiquidity:!0},[2]:{swap:!1,addLiquidity:!1,removeLiquidity:!1},[3]:{swap:!1,addLiquidity:!1,removeLiquidity:!0},[4]:{swap:!1,addLiquidity:!0,removeLiquidity:!0},[5]:{swap:!1,addLiquidity:!0,removeLiquidity:!0},[6]:{swap:!0,addLiquidity:!0,removeLiquidity:!0},[7]:{swap:Date.now()/1e3>=n.toNumber(),addLiquidity:!0,removeLiquidity:!0}}[r]||{swap:!1,addLiquidity:!1,removeLiquidity:!1}}function es(e){let t=ot[e];return t||ee.logWithError("invalid version","version",e),t}function ln(e){let t=Re[e];return t||ee.logWithError("invalid version","version",e),t}async function O({name:e,programId:t,marketId:n}){let{publicKey:r}=await me([t.toBuffer(),n.toBuffer(),Buffer.from(e,"utf-8")],t);return r}async function pn({programId:e}){return me([Buffer.from([97,109,109,32,97,117,116,104,111,114,105,116,121])],e)}async function ts({version:e,marketId:t,baseMint:n,quoteMint:r}){let o=ln(e),[a,i,u]=[V({publicKey:t}),V({publicKey:n,transformSol:!0}),V({publicKey:r,transformSol:!0})],m=await O({name:"amm_associated_seed",programId:o,marketId:a}),p=await O({name:"lp_mint_associated_seed",programId:o,marketId:a}),{publicKey:l,nonce:d}=await pn({programId:o}),g=await O({name:"coin_vault_associated_seed",programId:o,marketId:a}),y=await O({name:"pc_vault_associated_seed",programId:o,marketId:a}),L=await O({name:"temp_lp_token_associated_seed",programId:o,marketId:a}),I=await O({name:"open_order_associated_seed",programId:o,marketId:a}),te=await O({name:"target_associated_seed",programId:o,marketId:a}),ne=await O({name:"withdraw_associated_seed",programId:o,marketId:a}),we=ut(e),Ie=ct(we),{publicKey:pt}=await mt({programId:Ie,marketId:a});return{id:m,baseMint:i,quoteMint:u,lpMint:p,version:e,programId:o,authority:l,nonce:d,baseVault:g,quoteVault:y,lpVault:L,openOrders:I,targetOrders:te,withdrawQueue:ne,marketVersion:we,marketProgramId:Ie,marketId:a,marketAuthority:pt}}async function ns({connection:e,pools:t}){let n=t.map(o=>it(o));return(await Je(e,n,"GetPoolData")).map(o=>{let a=Xe(o,"GetPoolData"),i=new Y(A(a,"status")),u=Number(A(a,"coin_decimals")),m=Number(A(a,"pc_decimals")),p=Number(A(a,"lp_decimals")),l=new Y(A(a,"pool_coin_amount")),d=new Y(A(a,"pool_pc_amount")),g=new Y(A(a,"pool_lp_supply")),y="0";try{y=A(a,"pool_open_time")}catch{y="0"}return{status:i,baseDecimals:u,quoteDecimals:m,lpDecimals:p,baseReserve:l,quoteReserve:d,lpSupply:g,startTime:new Y(y)}})}function rs(e,t,n){return dn(e.token,t.token,n)}function dn(e,t,n){let{baseMint:r,quoteMint:o}=n,a=lt(e,n),i=lt(t,n);return a===i&&ee.logWithError("tokens not match with pool","params",{tokenA:e.mint,tokenB:t.mint,baseMint:r,quoteMint:o}),[a,i]}function lt(e,t){let{baseMint:n,quoteMint:r}=t;return e.mint.equals(n)?"base":e.mint.equals(r)?"quote":(ee.logWithError("token not match with pool","params",{token:e.mint,baseMint:n,quoteMint:r}),"base")}var os=e=>e==="a"||e==="b";async function is(e,t,n){let r=await e.getAccountInfo(t);if(r===null)return null;let o=he.decode(r.data),a=await e.getTokenAccountBalance(o.baseVault),i=await e.getTokenAccountBalance(o.quoteVault),u=await mn.load(e,o.openOrders,n),m=10**o.baseDecimal.toNumber(),p=10**o.quoteDecimal.toNumber(),l=u.baseTokenTotal.toNumber()/m,d=u.quoteTokenTotal.toNumber()/p,g=o.baseNeedTakePnl.toNumber()/m,y=o.quoteNeedTakePnl.toNumber()/p,L=a.value.uiAmount+l-g,I=i.value.uiAmount+d-y,te=parseFloat(o.lpReserve.toString()),ne=L/I;return{baseAmount:L,quoteAmount:I,lpSupply:te,baseVaultKey:o.baseVault,quoteVaultKey:o.quoteVault,baseVaultBalance:a.value.uiAmount,quoteVaultBalance:i.value.uiAmount,openOrdersKey:o.openOrders,openOrdersTotalBase:l,openOrdersTotalQuote:d,basePnl:g,quotePnl:y,priceInQuote:ne}}export{wt as DataElement,Pn as LIQUIDITY_FEES_DENOMINATOR,gn as LIQUIDITY_FEES_NUMERATOR,xn as LIQUIDITY_PROGRAMID_TO_VERSION,ft as LIQUIDITY_PROGRAM_ID_V4,gt as LIQUIDITY_PROGRAM_ID_V5,Re as LIQUIDITY_VERSION_TO_PROGRAM_ID,Me as LIQUIDITY_VERSION_TO_SERUM_VERSION,ot as LIQUIDITY_VERSION_TO_STATE_LAYOUT,Oe as LiquidityPoolStatus,K as MODEL_DATA_PUBKEY,Mi as SERUM_PROGRAMID_TO_VERSION,un as SERUM_PROGRAM_ID_V3,cn as SERUM_VERSION_TO_PROGRAM_ID,Ce as StableLayout,Ee as _LIQUIDITY_PROGRAM_ID_V4,We as _LIQUIDITY_PROGRAM_ID_V5,at as _SERUM_PROGRAM_ID_V3,ke as addLiquidityLayout,Pe as createPoolV4Layout,fe as fixedSwapInLayout,ge as fixedSwapOutLayout,Wt as formatLayout,Xi as getAmountSide,rs as getAmountsSide,ts as getAssociatedPoolKeys,Ir as getDxByDyBaseIn,wr as getDyByDxBaseIn,pn as getLiquidityAssociatedAuthority,O as getLiquidityAssociatedId,is as getLiquidityInfo,ln as getLiquidityProgramId,es as getLiquidityStateLayout,Zi as getPoolEnabledFeatures,mt as getSerumAssociatedAuthority,ct as getSerumProgramId,ut as getSerumVersion,Br as getStablePrice,lt as getTokenSide,dn as getTokensSide,$i as includesToken,xe as initPoolLayout,os as isValidFixedSide,he as liquidityStateV4Layout,rn as liquidityStateV5Layout,qi as makeAMMSwapInstruction,_i as makeAddLiquidityInstruction,Ai as makeCreatePoolInstruction,Ni as makeInitPoolInstruction,Di as makeRemoveLiquidityInstruction,it as makeSimulatePoolInfoInstruction,ns as makeSimulationPoolInfo,sn as makeSwapFixedInInstruction,an as makeSwapFixedOutInstruction,It as modelDataInfoLayout,Le as removeLiquidityLayout};
//# sourceMappingURL=index.mjs.map