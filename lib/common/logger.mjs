import{get as n,set as l}from"lodash";var u=(t=>(t[t.Error=0]="Error",t[t.Warning=1]="Warning",t[t.Info=2]="Info",t[t.Debug=3]="Debug",t))(u||{}),g=class{constructor(e){this.logLevel=e.logLevel!==void 0?e.logLevel:0,this.name=e.name}set level(e){this.logLevel=e}get time(){return Date.now().toString()}get moduleName(){return this.name}isLogLevel(e){return e<=this.logLevel}error(...e){return this.isLogLevel(0)?(console.error(this.time,this.name,"sdk logger error",...e),this):this}logWithError(...e){let o=e.map(i=>typeof i=="object"?JSON.stringify(i):i).join(", ");throw new Error(o)}warning(...e){return this.isLogLevel(1)?(console.warn(this.time,this.name,"sdk logger warning",...e),this):this}info(...e){return this.isLogLevel(2)?(console.info(this.time,this.name,"sdk logger info",...e),this):this}debug(...e){return this.isLogLevel(3)?(console.debug(this.time,this.name,"sdk logger debug",...e),this):this}},s={},L={};function m(r){let e=n(s,r);if(!e){let o=n(L,r);e=new g({name:r,logLevel:o}),l(s,r,e)}return e}function a(r,e){l(L,r,e);let o=n(s,r);o&&(o.level=e)}export{u as LogLevel,g as Logger,m as createLogger,a as setLoggerLevel};
//# sourceMappingURL=logger.mjs.map