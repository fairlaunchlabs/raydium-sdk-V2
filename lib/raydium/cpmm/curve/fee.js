var l=Object.create;var e=Object.defineProperty;var a=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var E=Object.getPrototypeOf,_=Object.prototype.hasOwnProperty;var f=(N,t)=>{for(var r in t)e(N,r,{get:t[r],enumerable:!0})},s=(N,t,r,c)=>{if(t&&typeof t=="object"||typeof t=="function")for(let B of p(t))!_.call(N,B)&&B!==r&&e(N,B,{get:()=>t[B],enumerable:!(c=a(t,B))||c.enumerable});return N};var v=(N,t,r)=>(r=N!=null?l(E(N)):{},s(t||!N||!N.__esModule?e(r,"default",{value:N,enumerable:!0}):r,N)),x=N=>s(e({},"__esModule",{value:!0}),N);var A={};f(A,{CpmmFee:()=>i,FEE_RATE_DENOMINATOR_VALUE:()=>n,ceilDiv:()=>d,floorDiv:()=>o});module.exports=x(A);var u=v(require("bn.js")),n=new u.default(1e6);function d(N,t,r){return N.mul(t).add(r).sub(new u.default(1)).div(r)}function o(N,t,r){return N.mul(t).div(r)}var i=class{static tradingFee(t,r){return d(t,r,n)}static protocolFee(t,r){return o(t,r,n)}static fundFee(t,r){return o(t,r,n)}};0&&(module.exports={CpmmFee,FEE_RATE_DENOMINATOR_VALUE,ceilDiv,floorDiv});
//# sourceMappingURL=fee.js.map