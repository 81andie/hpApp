import{b as z,c as b,d as B,e as D,f as V,g as H,h as O,k as U,l as W}from"./chunk-T2W5BAF7.js";import{f as Y,g as p,h as C,m as Z,n as R,p as $,u as X}from"./chunk-IRX6G5RT.js";import{$a as I,$b as L,Fa as j,Ha as y,Ia as v,Ka as w,La as M,Q as P,S as u,Sb as N,T as a,Ua as F,Wa as A,X as f,Y as h,Za as k,_a as T,ba as g,ca as l,cc as _,ea as S,fb as x,wa as d}from"./chunk-QSJJF4FR.js";var ne=[{path:"",loadChildren:()=>import("./chunk-XNWRMA4X.js").then(t=>t.PotterModule)}],q=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=l({type:e}),e.\u0275inj=a({imports:[O.forRoot(ne),O]});let t=e;return t})();function ae(t,e){if(t&1&&I(0,"a",3),t&2){let i=x().$implicit;A("routerLink",i.routerLink)}}function le(t,e){if(t&1&&F(0,ae,1,1,"a",2),t&2){let i=e.$implicit;A("ngIf",i.routerLink)}}var G=(()=>{let e=class e{constructor(){this.menuItems=[]}ngOnInit(){this.menuItems=[{label:"Harry Potter App",icon:"pi pi-bolt",items:[{label:"Inicio",icon:"pi pi-star-fill",routerLink:"/"},{label:"Magos",icon:"pi pi-star-fill",routerLink:"magos"},{label:"Estudiantes",icon:"pi pi-users",routerLink:"estudiantes"},{label:"Hogwarts Profesores",icon:"pi pi-book",routerLink:"profesores"},{label:" Todos los Hechizos",icon:"pi pi-tags",routerLink:"hechizos"}]}]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=g({type:e,selectors:[["shared-menu"]],decls:2,vars:1,consts:[[1,"p-2",3,"model"],["Template","start"],["class","p-menuitem-link",3,"routerLink",4,"ngIf"],[1,"p-menuitem-link",3,"routerLink"]],template:function(r,n){r&1&&(k(0,"p-menubar",0),F(1,le,1,1,"ng-template",1),T()),r&2&&A("model",n.menuItems)},dependencies:[L,U,H],styles:[".menu[_ngcontent-%COMP%]{width:90vw;z-index:200}"]});let t=e;return t})();var J=(()=>{let e=class e{constructor(){this.title="hpApp"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=g({type:e,selectors:[["app-root"]],decls:2,vars:0,template:function(r,n){r&1&&I(0,"shared-menu")(1,"router-outlet")},dependencies:[V,G]});let t=e;return t})();var K=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=l({type:e}),e.\u0275inj=a({imports:[_,W]});let t=e;return t})();var de="@",pe=(()=>{let e=class e{constructor(o,r,n,s,c){this.doc=o,this.delegate=r,this.zone=n,this.animationType=s,this.moduleImpl=c,this._rendererFactoryPromise=null,this.scheduler=h(y,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-Y3EBC7J4.js")).catch(r=>{throw new P(5300,!1)}).then(({\u0275createEngine:r,\u0275AnimationRendererFactory:n})=>{this._engine=r(this.animationType,this.doc,this.scheduler);let s=new n(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(o,r){let n=this.delegate.createRenderer(o,r);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let s=new E(n);return r?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(c=>{let oe=c.createRenderer(o,r);s.use(oe)}).catch(c=>{s.use(n)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(r){j()},e.\u0275prov=u({token:e,factory:e.\u0275fac});let t=e;return t})(),E=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let i of this.replay)i(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,i){return this.delegate.createElement(e,i)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,i){this.delegate.appendChild(e,i)}insertBefore(e,i,o,r){this.delegate.insertBefore(e,i,o,r)}removeChild(e,i,o){this.delegate.removeChild(e,i,o)}selectRootElement(e,i){return this.delegate.selectRootElement(e,i)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,i,o,r){this.delegate.setAttribute(e,i,o,r)}removeAttribute(e,i,o){this.delegate.removeAttribute(e,i,o)}addClass(e,i){this.delegate.addClass(e,i)}removeClass(e,i){this.delegate.removeClass(e,i)}setStyle(e,i,o,r){this.delegate.setStyle(e,i,o,r)}removeStyle(e,i,o){this.delegate.removeStyle(e,i,o)}setProperty(e,i,o){this.shouldReplay(i)&&this.replay.push(r=>r.setProperty(e,i,o)),this.delegate.setProperty(e,i,o)}setValue(e,i){this.delegate.setValue(e,i)}listen(e,i,o){return this.shouldReplay(i)&&this.replay.push(r=>r.listen(e,i,o)),this.delegate.listen(e,i,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(de)}};function Q(t="animations"){return w("NgAsyncAnimations"),S([{provide:v,useFactory:(e,i,o)=>new pe(e,i,o,t),deps:[N,b,M]},{provide:d,useValue:t==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ce=(()=>{let e=class e extends R{constructor(o,r,n){super(o,r,n,h(y,{optional:!0}))}ngOnDestroy(){this.flush()}};e.\u0275fac=function(r){return new(r||e)(f(N),f(p),f(C))},e.\u0275prov=u({token:e,factory:e.\u0275fac});let t=e;return t})();function ue(){return new Z}function fe(t,e,i){return new X(t,e,i)}var te=[{provide:C,useFactory:ue},{provide:R,useClass:ce},{provide:v,useFactory:fe,deps:[b,R,M]}],ee=[{provide:p,useFactory:()=>new $},{provide:d,useValue:"BrowserAnimations"},...te],he=[{provide:p,useClass:Y},{provide:d,useValue:"NoopAnimations"},...te],ie=(()=>{let e=class e{static withConfig(o){return{ngModule:e,providers:o.disableAnimations?he:ee}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=l({type:e}),e.\u0275inj=a({providers:ee,imports:[D]});let t=e;return t})();var re=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=l({type:e,bootstrap:[J]}),e.\u0275inj=a({providers:[Q()],imports:[D,q,K,z,ie]});let t=e;return t})();B().bootstrapModule(re).catch(t=>console.error(t));