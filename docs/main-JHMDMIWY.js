import{a as Z,b as K,c as w,d as X,e as j,f as _,g as q,h as k,i as v,k as J,l as Q,m as ee,n as te,o as ie,p as oe,q as re,r as ne,s as se,t as ae,u as le,v as ce}from"./chunk-N7XI5RJI.js";import{f as me,g as C,h as E,m as pe,n as R,p as de,u as ue}from"./chunk-F3ELQO5B.js";import{$ as g,$b as D,Ba as b,Ja as x,Ka as M,La as B,Na as N,Oa as S,Qa as O,Qb as G,Ra as A,T as P,W as d,X as a,_a as L,aa as y,ab as f,db as m,eb as p,fa as u,fb as h,ga as l,gb as V,hb as H,ic as $,ja as z,kb as U,lb as W,lc as Y,tb as F}from"./chunk-T2FJJKDJ.js";var we=[{path:"",loadChildren:()=>import("./chunk-EPPA2U7S.js").then(i=>i.PotterModule)}],fe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=l({type:e}),e.\u0275inj=a({imports:[k.forRoot(we),k]});let i=e;return i})();var he=(()=>{let e=class e{constructor(t){this.translocoService=t}setLanguage(t){this.translocoService.setActiveLang(t)}};e.\u0275fac=function(o){return new(o||e)(g(v))},e.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var ge=(()=>{let e=class e{constructor(t,o){this.fb=t,this.languageService=o,this.options=[{language:"English",value:"en"},{language:"Spanish",value:"es"},{language:"Catal\xE1n",value:"ca"}],this.myForm=this.fb.group({language:["ca"]})}ngOnInit(){}onLanguageChange(){let t=this.myForm.get("language")?.value;this.languageService.setLanguage(t),console.log(t)}};e.\u0275fac=function(o){return new(o||e)(M(se),M(he))},e.\u0275cmp=u({type:e,selectors:[["selector-language"]],decls:2,vars:3,consts:[["id","language",1,"flex","flex-row","justify-end","text-xs",3,"formGroup"],["formControlName","language","optionLabel","language","optionValue","value",1,"rounded-sm",3,"onChange","options","multiple"]],template:function(o,n){o&1&&(m(0,"form",0)(1,"p-selectButton",1),U("onChange",function(){return n.onLanguageChange()}),p()()),o&2&&(f("formGroup",n.myForm),x(),f("options",n.options)("multiple",!1))},dependencies:[le,oe,te,ie,re,ne]});let i=e;return i})();function Le(i,e){if(i&1&&(V(0),h(1,"a",3),H()),i&2){let r=W().$implicit;x(),f("routerLink",r.routerLink)}}function ke(i,e){if(i&1&&L(0,Le,2,1,"ng-container",2),i&2){let r=e.$implicit;f("ngIf",r.label)}}var ye=(()=>{let e=class e{constructor(t){this.translocoService=t,this.menuItems=[]}ngOnInit(){this.translocoService.selectTranslateObject("menu").subscribe(t=>{this.menuItems=[{label:t.inicio,icon:"pi pi-home",routerLink:["/"]},{label:t.magos,icon:"pi pi-star",routerLink:["magos"]},{label:t.estudiantes,icon:"pi pi-users",routerLink:["estudiantes"]},{label:t.hogwartsProfesores,icon:"pi pi-book",routerLink:["profesores"]},{label:t.todosHechizos,icon:"pi pi-tags",routerLink:["hechizos"]}]}),this.translocoService.langChanges$.subscribe(()=>{this.updateMenuItems()})}updateMenuItems(){let t=this.translocoService.translateObject("menu");this.menuItems=[{label:t.inicio,icon:"pi pi-home",routerLink:["/"]},{label:t.magos,icon:"pi pi-star",routerLink:["magos"]},{label:t.estudiantes,icon:"pi pi-users",routerLink:["estudiantes"]},{label:t.hogwartsProfesores,icon:"pi pi-book",routerLink:["profesores"]},{label:t.todosHechizos,icon:"pi pi-tags",routerLink:["hechizos"]}]}};e.\u0275fac=function(o){return new(o||e)(M(v))},e.\u0275cmp=u({type:e,selectors:[["shared-menu"]],decls:3,vars:1,consts:[[3,"model"],["Template","start"],[4,"ngIf"],[1,"p-menuitem-link",3,"routerLink"]],template:function(o,n){o&1&&(m(0,"p-menubar",0),L(1,ke,1,1,"ng-template",1),h(2,"selector-language"),p()),o&2&&f("model",n.menuItems)},dependencies:[$,ee,q,ge],styles:[".menu[_ngcontent-%COMP%]{width:90vw;z-index:200}"]});let i=e;return i})();var ve=(()=>{let e=class e{ngOnInit(){AOS.init({duration:2e3,easing:"ease",once:!0})}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["app-footer"]],decls:13,vars:0,consts:[["data-aos","fade-up","data-aos-anchor-placement","bottom-bottom","data-aos-delay","1500",1,"mt-20"],[1,"flex","flex-col","justify-center"],[1,"text-3xl","text-center","text-transparent","bg-clip-text","bg-gradient-to-r","to-fuchsia-200","from-fuchsia-500","font-extrabold"],[1,"flex","flex-row","justify-center","gap-3","mb-10"],[1,"pi","pi-instagram","text-fuchsia-500","text-xl"],[1,"pi","pi-facebook","text-fuchsia-500","text-xl"],[1,"pi","pi-youtube","text-fuchsia-500","text-xl"],[1,"pi","pi-github","text-fuchsia-500","text-xl"],[1,"text-center"]],template:function(o,n){o&1&&(m(0,"footer",0)(1,"div",1)(2,"p",2),F(3,"Harry Potter App"),p(),m(4,"div",3),h(5,"i",4)(6,"i",5)(7,"i",6)(8,"i",7),p()(),m(9,"p",8),F(10,"Todos los derechos reservados"),p(),m(11,"p",8),F(12,"Est\xE1 p\xE1gina ha sido desarrollada y dise\xF1ada por Andrea Hern\xE1ndez"),p()())}});let i=e;return i})();var be=(()=>{let e=class e{constructor(){this.title="hpApp"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=u({type:e,selectors:[["app-root"]],decls:3,vars:0,template:function(o,n){o&1&&h(0,"shared-menu")(1,"router-outlet")(2,"app-footer")},dependencies:[_,ye,ve]});let i=e;return i})();var Me=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=l({type:e}),e.\u0275inj=a({imports:[Y,ce,ae]});let i=e;return i})();var ze="@",Be=(()=>{let e=class e{constructor(t,o,n,c,I){this.doc=t,this.delegate=o,this.zone=n,this.animationType=c,this.moduleImpl=I,this._rendererFactoryPromise=null,this.scheduler=y(N,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-CRQARK5Y.js")).catch(o=>{throw new P(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:n})=>{this._engine=o(this.animationType,this.doc,this.scheduler);let c=new n(this.delegate,this._engine,this.zone);return this.delegate=c,c})}createRenderer(t,o){let n=this.delegate.createRenderer(t,o);if(n.\u0275type===0)return n;typeof n.throwOnSyntheticProps=="boolean"&&(n.throwOnSyntheticProps=!1);let c=new T(n);return o?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(I=>{let De=I.createRenderer(t,o);c.use(De)}).catch(I=>{c.use(n)}),c}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(o){B()},e.\u0275prov=d({token:e,factory:e.\u0275fac});let i=e;return i})(),T=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let r of this.replay)r(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,r){return this.delegate.createElement(e,r)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,r){this.delegate.appendChild(e,r)}insertBefore(e,r,t,o){this.delegate.insertBefore(e,r,t,o)}removeChild(e,r,t){this.delegate.removeChild(e,r,t)}selectRootElement(e,r){return this.delegate.selectRootElement(e,r)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,r,t,o){this.delegate.setAttribute(e,r,t,o)}removeAttribute(e,r,t){this.delegate.removeAttribute(e,r,t)}addClass(e,r){this.delegate.addClass(e,r)}removeClass(e,r){this.delegate.removeClass(e,r)}setStyle(e,r,t,o){this.delegate.setStyle(e,r,t,o)}removeStyle(e,r,t){this.delegate.removeStyle(e,r,t)}setProperty(e,r,t){this.shouldReplay(r)&&this.replay.push(o=>o.setProperty(e,r,t)),this.delegate.setProperty(e,r,t)}setValue(e,r){this.delegate.setValue(e,r)}listen(e,r,t){return this.shouldReplay(r)&&this.replay.push(o=>o.listen(e,r,t)),this.delegate.listen(e,r,t)}shouldReplay(e){return this.replay!==null&&e.startsWith(ze)}};function Ce(i="animations"){return O("NgAsyncAnimations"),z([{provide:S,useFactory:(e,r,t)=>new Be(e,r,t,i),deps:[D,w,A]},{provide:b,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Ve=(()=>{let e=class e extends R{constructor(t,o,n){super(t,o,n,y(N,{optional:!0}))}ngOnDestroy(){this.flush()}};e.\u0275fac=function(o){return new(o||e)(g(D),g(C),g(E))},e.\u0275prov=d({token:e,factory:e.\u0275fac});let i=e;return i})();function He(){return new pe}function Ue(i,e,r){return new ue(i,e,r)}var xe=[{provide:E,useFactory:He},{provide:R,useClass:Ve},{provide:S,useFactory:Ue,deps:[w,R,A]}],Ie=[{provide:C,useFactory:()=>new de},{provide:b,useValue:"BrowserAnimations"},...xe],We=[{provide:C,useClass:me},{provide:b,useValue:"NoopAnimations"},...xe],Ne=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:t.disableAnimations?We:Ie}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=l({type:e}),e.\u0275inj=a({providers:Ie,imports:[j]});let i=e;return i})();var Se=(()=>{let e=class e{constructor(){this.http=y(Z)}getTranslation(t){return this.http.get(`/assets/i18n/${t}.json`)}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=d({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Ae=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=l({type:e}),e.\u0275inj=a({providers:[Q({config:{availableLangs:["es","en","ca"],defaultLang:"ca",reRenderOnLangChange:!0,prodMode:!G(),missingHandler:{logMissingKey:!0}},loader:Se})],imports:[J]});let i=e;return i})();var Fe=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=l({type:e,bootstrap:[be]}),e.\u0275inj=a({providers:[Ce(),v],imports:[j,fe,Me,K,Ne,Ae]});let i=e;return i})();X().bootstrapModule(Fe).catch(i=>console.error(i));
