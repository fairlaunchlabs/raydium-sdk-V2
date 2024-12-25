var ee=Object.create;var w=Object.defineProperty,te=Object.defineProperties,re=Object.getOwnPropertyDescriptor,oe=Object.getOwnPropertyDescriptors,ne=Object.getOwnPropertyNames,E=Object.getOwnPropertySymbols,ae=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var C=(r,e,o)=>e in r?w(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o,x=(r,e)=>{for(var o in e||(e={}))v.call(e,o)&&C(r,o,e[o]);if(E)for(var o of E(e))se.call(e,o)&&C(r,o,e[o]);return r},_=(r,e)=>te(r,oe(e));var ue=(r,e)=>{for(var o in e)w(r,o,{get:e[o],enumerable:!0})},U=(r,e,o,u)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of ne(e))!v.call(r,s)&&s!==o&&w(r,s,{get:()=>e[s],enumerable:!(u=re(e,s))||u.enumerable});return r};var ie=(r,e,o)=>(o=r!=null?ee(ae(r)):{},U(e||!r||!r.__esModule?w(o,"default",{value:r,enumerable:!0}):o,r)),de=r=>U(w({},"__esModule",{value:!0}),r);var Ce={};ue(Ce,{FARM_LOCK_MINT:()=>Re,FARM_LOCK_VAULT:()=>Ve,FARM_PROGRAM_TO_VERSION:()=>Ee,FARM_VERSION_TO_LEDGER_LAYOUT:()=>Ae,FARM_VERSION_TO_STATE_LAYOUT:()=>Me,isValidFarmVersion:()=>Be,poolTypeV6:()=>B,validateFarmRewards:()=>Fe});module.exports=de(Ce);var F=require("@solana/web3.js");var b=require("lodash");var R=class{constructor(e){this.logLevel=e.logLevel!==void 0?e.logLevel:0,this.name=e.name}set level(e){this.logLevel=e}get time(){return Date.now().toString()}get moduleName(){return this.name}isLogLevel(e){return e<=this.logLevel}error(...e){return this.isLogLevel(0)?(console.error(this.time,this.name,"sdk logger error",...e),this):this}logWithError(...e){let o=e.map(u=>typeof u=="object"?JSON.stringify(u):u).join(", ");throw new Error(o)}warning(...e){return this.isLogLevel(1)?(console.warn(this.time,this.name,"sdk logger warning",...e),this):this}info(...e){return this.isLogLevel(2)?(console.info(this.time,this.name,"sdk logger info",...e),this):this}debug(...e){return this.isLogLevel(3)?(console.debug(this.time,this.name,"sdk logger debug",...e),this):this}},O={},ce={};function D(r){let e=(0,b.get)(O,r);if(!e){let o=(0,b.get)(ce,r);e=new R({name:r,logLevel:o}),(0,b.set)(O,r,e)}return e}var a=require("@solana/web3.js"),k=new a.PublicKey("EhhTKczWMGQt46ynNeRX1WfeagwwJd7ufHvCDjRxjo5Q"),G=new a.PublicKey("CBuCnLe26faBpcBP2fktp4rp8abpcAnTWft6ZrP5Q4T"),I=new a.PublicKey("9KEPoZmtHUrBbhWN1v1KWLMkkvwY6WLtAVUCPRtRjP4z"),N=new a.PublicKey("FarmqiPv5eAj3j1GMdMCMUGXqPUvmquZtMy86QH6rzhG"),Oe=new a.PublicKey("CLaimxFqjHzgTJtAGHU47NPhg6qrc5sCnpC4tBLyABQS"),De=new a.PublicKey("srmqPvymJeFKQ4zGQed1GFppgkRHL9kaELCbyksJtPX"),ke=new a.PublicKey("9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin"),Ge=new a.PublicKey("675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8"),Ie=new a.PublicKey("5quBtoiQqxF9Jv6KYKctB59NT3gtJD2Y65kdnB1Uev3h"),Ne=new a.PublicKey("CDSr3ssLcRB6XYPJwAfFt18MZvEZp4LjHcvzBVZ45duo"),Ke=new a.PublicKey("CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK"),He=new a.PublicKey("LockrWmn6K5twhz3y9w1dQERbmgSaRkfnTeTKbpofwE"),qe=new a.PublicKey("kN1kEznaF5Xbd8LYuqtEFcxzWSBk5Fv6ygX6SqEGJVy"),je=new a.PublicKey("routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS"),We=new a.PublicKey("7YttLkHDoNj9wyDur5pM1ejNaAvT9X4eqaYcHQqtj2G5"),ze=new a.PublicKey("6FJon3QE27qgPVggARueB22hLvoh22VzJpXv4rBEoSLF"),Qe=new a.PublicKey("CC12se5To1CdEuw7fDS27B7Geo5jJyL7t5UK2B44NgiH"),Xe=new a.PublicKey("9HzJyW1qZsEiSfMUf6L2jo3CcTKAyBmSyKdwQeYisHrC"),Je=new a.PublicKey("DropEU8AvevN3UrXWXTMuz3rqnMczQVNjq3kcSdW2SQi"),Ze=new a.PublicKey("CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C"),Ye=new a.PublicKey("GpMZbSM2GgvTKHJirzeGfMFoaZ8UR2X7F4v8vHTvxFbL"),$e=new a.PublicKey("DNXgeM9EiiaAbaWvwjHj9fQQLAX5ZsfHyvmYUNRAdNC8"),pe=new a.PublicKey("CPMDWBwJDtYax9qW7AyRuVC19Cc4L4Vcy4n2BHAbHkCW"),ye=new a.PublicKey("7rQ1QFNosMkUCuh7Z7fPbTHvh73b68sQYdirycEzJVuw"),me=new a.PublicKey("G11FKBRaAkHAKuLCgLM6K6NUc9rTjPAznRCjZifrTQe2"),et=new a.PublicKey("LockrWmn6K5twhz3y9w1dQERbmgSaRkfnTeTKbpofwE"),Le=new a.PublicKey("DLockwT7X7sxtLmGH9g5kmfcjaBtncdbUmi738m5bvQC"),tt=new a.PublicKey("3f7GcQFG397GAaEnv51zR6tsTVihYRydnydDD1cXekxH"),Pe=new a.PublicKey("7AFUeLVRjBfzqK3tTGw8hN48KLQWSk6DTE8xprWdPqix");var rt={SERUM_MARKET:a.PublicKey.default,OPENBOOK_MARKET:new a.PublicKey("EoTcMgcDRTJVZDMZWBoU6rhYHZfkNTVEAfz3uUJRcYGj"),UTIL1216:a.PublicKey.default,FarmV3:new a.PublicKey("85BFyr98MbCUU9MVTEgzx1nbhWACbJqLzho6zd6DZcWL"),FarmV5:new a.PublicKey("EcLzTrNg9V7qhcdyXDe2qjtPkiGzDM2UbdRaeaadU5r2"),FarmV6:new a.PublicKey("Farm2hJLcqPtPg8M4rR6DMrsRNc5TPm5Cs4bVQrMe2T7"),AmmV4:new a.PublicKey("HWy1jotHpo6UqeQxx49dpYYdQB8wj9Qk9MdxwjLvDHB8"),AmmStable:new a.PublicKey("DDg4VmQaJV9ogWce7LpcjBA9bv22wRp5uaTPa5pGjijF"),CLMM:new a.PublicKey("devi51mZmdwUJGU9hjN27vEz64Gps7uUefqxg27EAtH"),CLMM_LOCK_PROGRAM_ID:new a.PublicKey("DLockwT7X7sxtLmGH9g5kmfcjaBtncdbUmi738m5bvQC"),CLMM_LOCK_AUTH_ID:new a.PublicKey("8qmHNvu2Kr2C7U8mJL4Vz1vTDxMhVuXKREwU7TNoaVEo"),Router:new a.PublicKey("BVChZ3XFEwTMUk1o9i3HAf91H6mFxSwa5X2wFAWhYPhU"),CREATE_CPMM_POOL_PROGRAM:pe,CREATE_CPMM_POOL_AUTH:ye,CREATE_CPMM_POOL_FEE_ACC:me,FEE_DESTINATION_ID:new a.PublicKey("3XMrhbv989VxAMi3DErLV9eJht1pHppW5LbKxe9fkEFR"),LOCK_CPMM_PROGRAM:Le,LCOK_CPMM_AUTH:Pe};var W=require("@solana/web3.js"),f=ie(require("bn.js"));var n=require("@solana/buffer-layout"),V=n.Layout,K=n.Structure;var H=n.UInt;var q=n.u8;var j=n.seq;var g=n.blob;var l=class extends V{constructor(o,u,s){super(o,s);this.blob=g(o),this.signed=u}decode(o,u=0){let s=new f.default(this.blob.decode(o,u),10,"le");return this.signed?s.fromTwos(this.span*8).clone():s}encode(o,u,s=0){return typeof o=="number"&&(o=new f.default(o)),this.signed&&(o=o.toTwos(this.span*8)),this.blob.encode(o.toArrayLike(Buffer,"le",this.span),u,s)}};function p(r){return new H(1,r)}function t(r){return new l(8,!1,r)}function L(r){return new l(16,!1,r)}function z(r){return new l(1,!0,r)}function h(r){return new l(8,!0,r)}var T=class extends V{constructor(o,u,s,y){super(o.span,y);this.layout=o,this.decoder=u,this.encoder=s}decode(o,u){return this.decoder(this.layout.decode(o,u))}encode(o,u,s){return this.layout.encode(this.encoder(o),u,s)}getSpan(o,u){return this.layout.getSpan(o,u)}};function i(r){return new T(g(32),e=>new W.PublicKey(e),e=>e.toBuffer(),r)}function A(r){return new T(q(),ge,xe,r)}function ge(r){if(r===0)return!1;if(r===1)return!0;throw new Error("Invalid bool: "+r)}function xe(r){return r?1:0}var M=class extends K{decode(e,o){return super.decode(e,o)}};function c(r,e,o){return new M(r,e,o)}function d(r,e,o){let u,s=typeof e=="number"?e:(0,f.isBN)(e)?e.toNumber():new Proxy(e,{get(y,m){if(!u){let P=Reflect.get(y,"count");u=(0,f.isBN)(P)?P.toNumber():P,Reflect.set(y,"count",u)}return Reflect.get(y,m)},set(y,m,P){return m==="count"&&(u=P),Reflect.set(y,m,P)}});return j(r,s,o)}var lt=c([p("instruction")]),wt=c([p("instruction")]),fe=c([t("rewardState"),t("rewardOpenTime"),t("rewardEndTime"),t("rewardLastUpdateTime"),t("totalReward"),t("totalRewardEmissioned"),t("rewardClaimed"),t("rewardPerSecond"),L("accRewardPerShare"),i("rewardVault"),i("rewardMint"),i("rewardSender"),t("rewardType"),d(t(),15,"padding")]),le=c([t("state"),t("nonce"),i("lpVault"),i("rewardVault"),i(),i(),t(),t(),t("totalReward"),L("perShareReward"),t("lastSlot"),t("perSlotReward")]),we=c([t("state"),t("nonce"),i("lpVault"),i("rewardVaultA"),t("totalRewardA"),L("perShareRewardA"),t("perSlotRewardA"),p("option"),i("rewardVaultB"),g(7),t("totalRewardB"),L("perShareRewardB"),t("perSlotRewardB"),t("lastSlot"),i()]),_e=c([t(),t("state"),t("nonce"),t("validRewardTokenNum"),L("rewardMultiplier"),t("rewardPeriodMax"),t("rewardPeriodMin"),t("rewardPeriodExtend"),i("lpMint"),i("lpVault"),d(fe,5,"rewardInfos"),i("creator"),i(),d(t(),32,"padding")]),Q=new Proxy(le,{get(r,e,o){return e==="decode"?(...u)=>{let s=r.decode(...u);return _(x({},s),{version:3,rewardInfos:[{rewardVault:s.rewardVault,totalReward:s.totalReward,perSlotReward:s.perSlotReward,perShareReward:s.perShareReward}]})}:Reflect.get(r,e,o)}}),X=new Proxy(we,{get(r,e,o){return e==="decode"?(...u)=>{let s=r.decode(...u);return _(x({},s),{version:5,rewardInfos:[{rewardVault:s.rewardVaultA,totalReward:s.totalRewardA,perSlotReward:s.perSlotRewardA,perShareReward:s.perShareRewardA},{rewardVault:s.rewardVaultB,totalReward:s.totalRewardB,perSlotReward:s.perSlotRewardB,perShareReward:s.perShareRewardB}]})}:Reflect.get(r,e,o)}}),J=new Proxy(_e,{get(r,e,o){return e==="decode"?(...u)=>{let s=r.decode(...u);return _(x({},s),{version:6,rewardInfos:s.rewardInfos.map(y=>{var m;return _(x({},y),{rewardType:((m=Object.entries(B).find(P=>String(P[1])===y.rewardType.toString()))!=null?m:["Standard SPL"])[0]})})})}:Reflect.get(r,e,o)}}),be=c([t("isSet"),t("rewardPerSecond"),t("rewardOpenTime"),t("rewardEndTime"),t("rewardType")]),_t=c([p("instruction"),t("nonce"),d(be,5,"rewardTimeInfo")]),bt=c([p("instruction"),t("rewardReopenTime"),t("rewardEndTime"),t("rewardPerSecond")]),St=c([p("instruction"),t("isSet"),t("rewardPerSecond"),t("rewardOpenTime"),t("rewardEndTime"),t("rewardType")]),Tt=c([t("state"),i("id"),i("owner"),t("deposited"),d(t(),1,"rewardDebts")]),Z=c([t("state"),i("id"),i("owner"),t("deposited"),d(L(),1,"rewardDebts"),t(""),t("voteLockedBalance"),d(t(),15)]),ht=c([t("state"),i("id"),i("owner"),t("deposited"),d(t(),2,"rewardDebts")]),Y=c([t("state"),i("id"),i("owner"),t("deposited"),d(L(),2,"rewardDebts"),d(t(),17)]),$=c([t(),t("state"),i("id"),i("owner"),t("deposited"),d(L(),5,"rewardDebts"),d(t(),16)]),Rt=c([p("instruction"),t("amount")]),Se=c([i("mint"),i("grantAuthority"),t("baselineVoteWeightScaledFactor"),t("maxExtraLockupVoteWeightScaledFactor"),t("lockupSaturationSecs"),z("digitShift"),d(p(),7,"reserved1"),d(t(),7,"reserved2")]),Vt=c([g(8),i("governanceProgramId"),i("realm"),i("realmGoverningTokenMint"),i("realmAuthority"),d(p(),32,"reserved1"),d(Se,4,"votingMints"),h("timeOffset"),p("bump"),d(p(),7,"reserved2"),d(t(),11,"reserved3")]),Te=c([h("startTime"),h("endTime"),p("kind"),d(p(),15,"reserved")]),he=c([d(Te,1,"lockup"),t("amountDeposited_native"),t("amountInitiallyLockedNative"),A("isUsed"),A("allowClawback"),p("votingMintConfigIdx"),d(p(),29,"reserved")]),Mt=c([g(8),i("voterAuthority"),i("registrar"),d(he,32,"deposits"),p("voterBump"),p("voterWweightRecordBump"),d(p(),94,"reserved")]);var Ut=D("Raydium_farm_config"),Re=new F.PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),Ve=new F.PublicKey("FrspKwj8i3pNmKwXreTveC4fu7KL5ZbGeXdZBe2XViu1"),Me={3:Q,5:X,6:J},Ae={3:Z,5:Y,6:$},Be=r=>[3,4,5,6].indexOf(r)!==-1,Fe=r=>{var m;let{version:e,rewardInfos:o,rewardTokenAccountsPublicKeys:u}=r,s=`rewardInfo:${JSON.stringify(o)}, rewardAccount:${JSON.stringify(u)}`,y={3:()=>{if(o.length!==1||u.length!==1)return`rewardInfos or rewardTokenAccounts lengths not equal 1: ${s}`},5:()=>{if(o.length!==u.length)return`rewardInfos and rewardTokenAccounts lengths not equal: ${s}`},6:()=>{if(!u.length||o.length!==u.length)return`no rewardTokenAccounts or rewardInfos and rewardTokenAccounts lengths not equal: ${s}`}};return(m=y[e])==null?void 0:m.call(y)},B={"Standard SPL":0,"Option tokens":1},Ee={[k.toString()]:3,[G.toString()]:4,[I.toString()]:5,[N.toString()]:6};0&&(module.exports={FARM_LOCK_MINT,FARM_LOCK_VAULT,FARM_PROGRAM_TO_VERSION,FARM_VERSION_TO_LEDGER_LAYOUT,FARM_VERSION_TO_STATE_LAYOUT,isValidFarmVersion,poolTypeV6,validateFarmRewards});
//# sourceMappingURL=config.js.map