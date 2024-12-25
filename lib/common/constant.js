var c=Object.create;var s=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var b=Object.getOwnPropertyNames;var N=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var v=(r,e)=>{for(var t in e)s(r,t,{get:e[t],enumerable:!0})},l=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of b(e))!w.call(r,n)&&n!==t&&s(r,n,{get:()=>e[n],enumerable:!(i=p(e,n))||i.enumerable});return r};var a=(r,e,t)=>(t=r!=null?c(N(r)):{},l(e||!r||!r.__esModule?s(t,"default",{value:r,enumerable:!0}):t,r)),d=r=>l(s({},"__esModule",{value:!0}),r);var x={};v(x,{Rounding:()=>u,parseBigNumberish:()=>E});module.exports=d(x);var o=a(require("bn.js"));var g=require("lodash");var f=class{constructor(e){this.logLevel=e.logLevel!==void 0?e.logLevel:0,this.name=e.name}set level(e){this.logLevel=e}get time(){return Date.now().toString()}get moduleName(){return this.name}isLogLevel(e){return e<=this.logLevel}error(...e){return this.isLogLevel(0)?(console.error(this.time,this.name,"sdk logger error",...e),this):this}logWithError(...e){let t=e.map(i=>typeof i=="object"?JSON.stringify(i):i).join(", ");throw new Error(t)}warning(...e){return this.isLogLevel(1)?(console.warn(this.time,this.name,"sdk logger warning",...e),this):this}info(...e){return this.isLogLevel(2)?(console.info(this.time,this.name,"sdk logger info",...e),this):this}debug(...e){return this.isLogLevel(3)?(console.debug(this.time,this.name,"sdk logger debug",...e),this):this}},h={},y={};function m(r){let e=(0,g.get)(h,r);if(!e){let t=(0,g.get)(y,r);e=new f({name:r,logLevel:t}),(0,g.set)(h,r,e)}return e}var u=(i=>(i[i.ROUND_DOWN=0]="ROUND_DOWN",i[i.ROUND_HALF_UP=1]="ROUND_HALF_UP",i[i.ROUND_UP=2]="ROUND_UP",i))(u||{}),L=9007199254740991;function E(r){let e=m("Raydium_parseBigNumberish");if(r instanceof o.default)return r;if(typeof r=="string"){if(r.match(/^-?[0-9]+$/))return new o.default(r);e.logWithError(`invalid BigNumberish string: ${r}`)}return typeof r=="number"?(r%1&&e.logWithError(`BigNumberish number underflow: ${r}`),(r>=L||r<=-L)&&e.logWithError(`BigNumberish number overflow: ${r}`),new o.default(String(r))):typeof r=="bigint"?new o.default(r.toString()):(e.error(`invalid BigNumberish value: ${r}`),new o.default(0))}0&&(module.exports={Rounding,parseBigNumberish});
//# sourceMappingURL=constant.js.map