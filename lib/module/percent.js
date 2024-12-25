var O=Object.create;var c=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var x=Object.getOwnPropertyNames;var R=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var E=(i,r)=>{for(var e in r)c(i,e,{get:r[e],enumerable:!0})},N=(i,r,e,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of x(r))!C.call(i,n)&&n!==e&&c(i,n,{get:()=>r[n],enumerable:!(t=v(r,n))||t.enumerable});return i};var a=(i,r,e)=>(e=i!=null?O(R(i)):{},N(r||!i||!i.__esModule?c(e,"default",{value:i,enumerable:!0}):e,i)),P=i=>N(c({},"__esModule",{value:!0}),i);var T={};E(T,{Percent:()=>B,_100_PERCENT:()=>D});module.exports=P(T);var U=a(require("bn.js"));var u=a(require("big.js")),y=a(require("bn.js")),F=a(require("decimal.js-light"));var s=require("lodash");var b=class{constructor(r){this.logLevel=r.logLevel!==void 0?r.logLevel:0,this.name=r.name}set level(r){this.logLevel=r}get time(){return Date.now().toString()}get moduleName(){return this.name}isLogLevel(r){return r<=this.logLevel}error(...r){return this.isLogLevel(0)?(console.error(this.time,this.name,"sdk logger error",...r),this):this}logWithError(...r){let e=r.map(t=>typeof t=="object"?JSON.stringify(t):t).join(", ");throw new Error(e)}warning(...r){return this.isLogLevel(1)?(console.warn(this.time,this.name,"sdk logger warning",...r),this):this}info(...r){return this.isLogLevel(2)?(console.info(this.time,this.name,"sdk logger info",...r),this):this}debug(...r){return this.isLogLevel(3)?(console.debug(this.time,this.name,"sdk logger debug",...r),this):this}},L={},k={};function l(i){let r=(0,s.get)(L,i);if(!r){let e=(0,s.get)(k,i);r=new b({name:i,logLevel:e}),(0,s.set)(L,i,r)}return r}var p=a(require("bn.js"));var w=9007199254740991;function m(i){let r=l("Raydium_parseBigNumberish");if(i instanceof p.default)return i;if(typeof i=="string"){if(i.match(/^-?[0-9]+$/))return new p.default(i);r.logWithError(`invalid BigNumberish string: ${i}`)}return typeof i=="number"?(i%1&&r.logWithError(`BigNumberish number underflow: ${i}`),(i>=w||i<=-w)&&r.logWithError(`BigNumberish number overflow: ${i}`),new p.default(String(i))):typeof i=="bigint"?new p.default(i.toString()):(r.error(`invalid BigNumberish value: ${i}`),new p.default(0))}var S=a(require("toformat")),_=S.default,h=_;var f=l("module/fraction"),W=h(u.default),g=h(F.default),A={[0]:g.ROUND_DOWN,[1]:g.ROUND_HALF_UP,[2]:g.ROUND_UP},$={[0]:u.default.roundDown,[1]:u.default.roundHalfUp,[2]:u.default.roundUp},o=class{constructor(r,e=new y.default(1)){this.numerator=m(r),this.denominator=m(e)}get quotient(){return this.numerator.div(this.denominator)}invert(){return new o(this.denominator,this.numerator)}add(r){let e=r instanceof o?r:new o(m(r));return this.denominator.eq(e.denominator)?new o(this.numerator.add(e.numerator),this.denominator):new o(this.numerator.mul(e.denominator).add(e.numerator.mul(this.denominator)),this.denominator.mul(e.denominator))}sub(r){let e=r instanceof o?r:new o(m(r));return this.denominator.eq(e.denominator)?new o(this.numerator.sub(e.numerator),this.denominator):new o(this.numerator.mul(e.denominator).sub(e.numerator.mul(this.denominator)),this.denominator.mul(e.denominator))}mul(r){let e=r instanceof o?r:new o(m(r));return new o(this.numerator.mul(e.numerator),this.denominator.mul(e.denominator))}div(r){let e=r instanceof o?r:new o(m(r));return new o(this.numerator.mul(e.denominator),this.denominator.mul(e.numerator))}toSignificant(r,e={groupSeparator:""},t=1){Number.isInteger(r)||f.logWithError(`${r} is not an integer.`),r<=0&&f.logWithError(`${r} is not positive.`),g.set({precision:r+1,rounding:A[t]});let n=new g(this.numerator.toString()).div(this.denominator.toString()).toSignificantDigits(r);return n.toFormat(n.decimalPlaces(),e)}toFixed(r,e={groupSeparator:""},t=1){return Number.isInteger(r)||f.logWithError(`${r} is not an integer.`),r<0&&f.logWithError(`${r} is negative.`),W.DP=r,W.RM=$[t]||1,new W(this.numerator.toString()).div(this.denominator.toString()).toFormat(r,e)}isZero(){return this.numerator.isZero()}};var D=new o(new U.default(100)),B=class extends o{toSignificant(r=5,e,t){return this.mul(D).toSignificant(r,e,t)}toFixed(r=2,e,t){return this.mul(D).toFixed(r,e,t)}};0&&(module.exports={Percent,_100_PERCENT});
//# sourceMappingURL=percent.js.map