import{a as U,g as M,h as D,j as x,k as N,v as R}from"./chunk-N7XI5RJI.js";import{$ as A,Cb as s,Db as r,Ea as v,Fa as E,Ja as i,Ka as y,W as z,X as I,_a as O,a as F,ab as u,b as _,d as H,db as t,eb as o,fa as f,fb as l,ga as P,hc as w,lc as L,r as T,tb as a,ub as d,vb as c,yb as C}from"./chunk-T2FJJKDJ.js";var S=(()=>{let e=class e{constructor(m){this.http=m,this.apiUrl="https://hp-api.onrender.com/api/characters",this.apiUrlEstudiantes="https://hp-api.onrender.com/api/characters/students",this.apiUrlTeachers="https://hp-api.onrender.com/api/characters/staff",this.apiUrlSpells="https://hp-api.onrender.com/api/spells"}getCharacters(){return this.http.get(this.apiUrl)}getStudents(){return this.http.get(this.apiUrlEstudiantes)}getStaff(){return this.http.get(this.apiUrlTeachers)}getSpells(){return this.http.get(this.apiUrlSpells).pipe(T(m=>m.map(p=>_(F({},p),{image:this.getSpellImage(p.name)}))))}getSpellImage(m){return m?{Aberto:"assets/images/imgOpt/aberto.jpg",Accio:"assets/images/imgOpt/accio.jpg",Aguamenti:"assets/images/imgOpt/aguamenti.jpg",Alohomora:"assets/images/imgOpt/alohomora.jpg",Anapneo:"assets/images/imgOpt/anapneo.jpg",Aparecium:"assets/images/imgOpt/aparecium.jpg",Apparate:"assets/images/imgOpt/apparate.jpg",Ascendio:"assets/images/imgOpt/ascendio.jpg","Avada Kedavra":"assets/images/imgOpt/avadaKedavra.jpg",Avis:"assets/images/imgOpt/avis.jpg",Bat:"assets/images/imgOpt/bat.jpg",Bombardo:"assets/images/imgOpt/bombar.jpeg","Brackium Emendo":"assets/images/imgOpt/brackiumEmendo.jpg","Capacious Extremis":"assets/images/imgOpt/capaciusExtremis.jpg",Confundo:"assets/images/imgOpt/confundo.jpg","Conjunctivitis Curse":"assets/images/imgOpt/conjuctivitisCurse.jpg","Crinus Muto":"assets/images/imgOpt/crinusmuto.jpg",Crucio:"assets/images/imgOpt/crucio.jpg",Diffindo:"assets/images/imgOpt/diffindo.jpg",Disapparate:"assets/images/imgOpt/disaparrate.webp",Engorgio:"assets/images/imgOpt/engorgio.jpg",Episkey:"assets/images/imgOpt/episkey.jpg","Expecto patronum":"assets/images/imgOpt/expectopatronum.jpg",Erecto:"assets/images/imgOpt/erecto.webp",Evanesco:"assets/images/imgOpt/evanesco.jpg",Expelliarmus:"assets/images/imgOpt/expelliarmus.jpg",Ferula:"assets/images/imgOpt/ferula.jpg","Fidelius Charm":"assets/images/imgOpt/fideliusCharm.jpg","Fiendfyre Curse":"assets/images/imgOpt/fiendfire.jpg","Finite Incantatem":"assets/images/imgOpt/finiteincantatem.jpg","Furnunculus Curse":"assets/images/imgOpt/furnunculos.jpg",Geminio:"assets/images/imgOpt/geminio.jpg",Glisseo:"assets/images/imgOpt/glisseo.jpg","Homenum Revelio":"assets/images/imgOpt/homenumrevelio.jpg","Homonculus Charm":"assets/images/imgOpt/homonculuscharm.jpg",Immobulus:"assets/images/imgOpt/immobulus.jpg",Impedimenta:"assets/images/imgOpt/impedimenta.jpg",Imperio:"assets/images/imgOpt/imperio.jpg",Impervius:"assets/images/imgOpt/impervius.jpg",Incarcerous:"assets/images/imgOpt/incarcerous.jpg",Incendio:"assets/images/imgOpt/incendio.jpg",Langlock:"assets/images/imgOpt/langlock.jpg",Legilimens:"assets/images/imgOpt/legiliments.jpg",Levicorpus:"assets/images/imgOpt/levicorpus.jpg","Locomotor Mortis":"assets/images/imgOpt/locomotormortis.webp",Lumos:"assets/images/imgOpt/lumos.jpg",Morsmordre:"assets/images/imgOpt/morsmordre.jpg","Mucus Ad Nauseam":"assets/images/imgOpt/mucusandnauseam.png",Muffliato:"assets/images/imgOpt/Muffliato.jpg",Nox:"assets/images/imgOpt/nox.gif",Obliviate:"assets/images/imgOpt/obliviate.jpg","Oculus Reparo":"assets/images/imgOpt/occulusreparo.jpg",Oppugno:"assets/images/imgOpt/oppugno.jpg",Periculum:"assets/images/imgOpt/periculum.jpg","Petrificus Totalus":"assets/images/imgOpt/petrificustotalus.jpg","Piertotum Locomotor":"assets/images/imgOpt/piertotumlocomotor.jpg","Protean Charm":"assets/images/imgOpt/proteancharm.webp",Protego:"assets/images/imgOpt/protego.jpg",Reducio:"assets/images/imgOpt/reducto.jpg",Renneverate:"assets/images/imgOpt/rennervate.jpg",Reparifors:"assets/images/imgOpt/reparifors.webp",Reparo:"assets/images/imgOpt/reparo.jpg",Rictusempra:"assets/images/imgOpt/rictussempra.jpg",Riddikulus:"assets/images/imgOpt/riddiculus.jpg",Scourgify:"assets/images/imgOpt/scourgify.webp",Sectumsempra:"assets/images/imgOpt/sectumsempra.jpg",Serpensortia:"assets/images/imgOpt/serpersortia.jpg",Silencio:"assets/images/imgOpt/silencio.jpg",Sonorus:"assets/images/imgOpt/sonorus.webp",Spongify:"assets/images/imgOpt/sponfigy.webp",Stupefy:"assets/images/imgOpt/stupefy.jpg",Tarantallegra:"assets/images/imgOpt/tarantallegra.jpg","Ubreakable Vow":"assets/images/imgOpt/ubreakablevow.webp","Wingardium Leviosa":"/assets/images/imgOpt/wingardiumleviosa.jpg"}[m]||"assets/images/imgOpt/spells.png":"assets/images/spells.png"}};e.\u0275fac=function(p){return new(p||e)(A(U))},e.\u0275prov=z({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function V(n,e){if(n&1&&(t(0,"div",9),l(1,"img",10),t(2,"div",11)(3,"div",12)(4,"p",13),a(5),o(),t(6,"p",14),a(7),s(8,"transloco"),l(9,"br"),a(10),o()()()()),n&2){let g=e.$implicit;i(),u("src",g.image,v),i(4),c("\u2728",g.name,"\u2728"),i(2),c("",r(8,4,"estudent.ancestry."+(g.ancestry||"notKnown"))," "),i(3),c(" ",g.dateOfBirth||"not information","")}}var W=(()=>{let e=class e{constructor(m){this.harryPotterServicios=m,this.magias=[]}ngOnInit(){return H(this,null,function*(){this.harryPotterServicios.getCharacters().subscribe(m=>{this.magias=m.slice(0,16),console.log(this.magias)}),AOS.init({duration:1500,easing:"ease",once:!0})})}};e.\u0275fac=function(p){return new(p||e)(y(S))},e.\u0275cmp=f({type:e,selectors:[["app-magos-page"]],decls:22,vars:16,consts:[[1,"flex","flex-col","justify-center","items-center","bg-fuchsia-200","text-sm","text-center","text-black","font-bold"],[1,"text-xs","titulo1"],[1,"intro-titulo","grid","grid-cols-1","md:grid-cols-2","mb-2"],["src","assets/images/reliquias.jpg","data-aos","fade-right","data-aos-offset","300","data-aos-easing","ease-in-sine",1,"h-96","ml-2"],["data-aos","fade-left","data-aos-offset","300","data-aos-easing","ease-in-sine",1,"text-sm","mt-7","ml-2","mr-2"],[1,"text-4xl","text-center","text-transparent","bg-clip-text","bg-gradient-to-r","to-fuchsia-200","from-fuchsia-500","font-extrabold"],[1,"text-md","text-justify","p-3"],[1,"mt-10","flex","flex-column","md:flex-row","flex-wrap","justify-evenly","gap-5","w-5/6","md:ml-20","ml-12"],["class","relative w-44 h-72 bg-fuchsia-100 rounded-md border-dotted border-2 border-fuchsia-400 mx-auto cursor-pointer  shadow-md shadow-fuchsia-400","data-aos","flip-left","data-aos-easing","ease-out-cubic","data-aos-duration","1900",4,"ngFor","ngForOf"],["data-aos","flip-left","data-aos-easing","ease-out-cubic","data-aos-duration","1900",1,"relative","w-44","h-72","bg-fuchsia-100","rounded-md","border-dotted","border-2","border-fuchsia-400","mx-auto","cursor-pointer","shadow-md","shadow-fuchsia-400"],[1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md",3,"src"],[1,"absolute","bottom-0","left-0","w-full","h-18","bg-fuchsia-50","bg-opacity-75","py-0"],[1,"text-fuchsia-500","text-center"],[1,"text-sm","text-black","font-bold","name"],[1,"description","p-1","font-bold","items-center"]],template:function(p,h){p&1&&(t(0,"div",0)(1,"p",1),a(2),s(3,"transloco"),o()(),t(4,"div",2),l(5,"img",3),t(6,"article",4)(7,"p",5),a(8),s(9,"transloco"),o(),t(10,"p",6),a(11),s(12,"transloco"),l(13,"br")(14,"br"),a(15),s(16,"transloco"),o()()(),t(17,"p",5),a(18),s(19,"transloco"),o(),t(20,"div",7),O(21,V,11,6,"div",8),o()),p&2&&(i(2),d(r(3,6,"getWizards")),i(6),c(" \u2728",r(9,8,"leadingMagicians"),"\u2728"),i(3),c("",r(12,10,"getWizardsParag")," "),i(4),c("\u{1F4DC} ",r(16,12,"getWizardsPara1"),"\u{1FA84}\u2728 "),i(3),c(" ",r(19,14,"WizardsOfHogwarts"),`
`),i(3),u("ngForOf",h.magias))},dependencies:[w,x],styles:[`.bg-pattern[_ngcontent-%COMP%]{background-image:url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 120 120"><g fill="none" stroke="%23ffd700" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M60 10 L110 100 H10 Z"/><circle cx="60" cy="60" r="30"/><line x1="60" y1="10" x2="60" y2="100"/></g></svg>');background-repeat:repeat;background-size:15px 15px;background-color:#000}.content[_ngcontent-%COMP%]{position:relative;z-index:1;background:#070606cc}`]});let n=e;return n})();function X(n,e){if(n&1&&(t(0,"div",9),l(1,"img",10),t(2,"div",11)(3,"div",12)(4,"p",13),a(5),o(),t(6,"p",14),a(7),s(8,"transloco"),l(9,"br"),a(10),o()()()()),n&2){let g=e.$implicit;i(),u("src",g.image,v),i(4),c("\u2728",g.name,"\u2728"),i(2),c("",r(8,4,"estudent.ancestry."+(g.ancestry||"notKnown"))," "),i(3),c(" ",g.dateOfBirth||"not information","")}}var K=(()=>{let e=class e{constructor(m){this.harryPotterService=m,this.estudents=[]}ngOnInit(){this.harryPotterService.getStudents().subscribe(m=>{this.estudents=m.slice(0,10),console.log(this.estudents)}),AOS.init({duration:3e3,easing:"ease",once:!0})}};e.\u0275fac=function(p){return new(p||e)(y(S))},e.\u0275cmp=f({type:e,selectors:[["app-estudiantes-hogwarts-page"]],decls:22,vars:16,consts:[[1,"flex","flex-col","justify-center","items-center","bg-fuchsia-200","text-sm","text-center","text-black","font-bold","mb-6"],[1,"text-xs","titulo1"],[1,"intro-titulo","grid","grid-cols-1","md:grid-cols-2","mb-2"],["data-aos","fade-right","data-aos-anchor","#example-anchor","data-aos-offset","500","data-aos-duration","500",1,"text-sm","mt-7","ml-2","mr-2"],[1,"text-4xl","text-center","text-transparent","bg-clip-text","bg-gradient-to-r","to-fuchsia-200","from-fuchsia-500","font-extrabold"],[1,"text-md","text-justify","p-3"],["src",E`assets/images/Hogwartsismyhome.mp4`,"width","350","height","275",1,"md:mt-28","mt-5","p-1"],[1,"mt-10","flex","flex-column","md:flex-row","flex-wrap","justify-evenly","gap-5","card","w-5/6","md:ml-20","ml-8"],["class","relative w-44 h-72 bg-fuchsia-100 rounded-md border-dotted border-2 border-fuchsia-400 mx-auto cursor-pointer  shadow-md shadow-fuchsia-400","data-aos","flip-left","data-aos-easing","ease-out-cubic","data-aos-duration","3000",4,"ngFor","ngForOf"],["data-aos","flip-left","data-aos-easing","ease-out-cubic","data-aos-duration","3000",1,"relative","w-44","h-72","bg-fuchsia-100","rounded-md","border-dotted","border-2","border-fuchsia-400","mx-auto","cursor-pointer","shadow-md","shadow-fuchsia-400"],[1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md",3,"src"],[1,"absolute","bottom-0","left-0","w-full","h-18","bg-fuchsia-50","bg-opacity-75","py-0"],[1,"text-fuchsia-500","text-center"],[1,"text-sm","text-black","font-bold","name"],[1,"description","p-1","font-bold","items-center"]],template:function(p,h){p&1&&(t(0,"div",0)(1,"p",1),a(2),s(3,"transloco"),o()(),t(4,"div",2)(5,"article",3)(6,"p",4),a(7),s(8,"transloco"),o(),t(9,"p",5),a(10),s(11,"transloco"),l(12,"br")(13,"br"),a(14),s(15,"transloco"),o()(),l(16,"iframe",6),o(),t(17,"p",4),a(18),s(19,"transloco"),o(),t(20,"div",7),O(21,X,11,6,"div",8),o()),p&2&&(i(2),d(r(3,6,"HereIntro")),i(5),c(" ",r(8,8,"WhatIsHogwarts?"),""),i(3),c("",r(11,10,"ParagraphSchool")," "),i(4),c("\u{1F4DC} ",r(15,12,"ArticleSchool")," "),i(4),c(`
`,r(19,14,"Students"),""),i(3),u("ngForOf",h.estudents))},dependencies:[w,x],styles:[".title-section[_ngcontent-%COMP%], .name[_ngcontent-%COMP%]{font-family:Dancing Script,cursive}.title-section[_ngcontent-%COMP%]{text-shadow:#f15bfb 1px 0 10px}.img[_ngcontent-%COMP%]{filter:drop-shadow(0 0 .75rem rgb(191,97,249))}"]});let n=e;return n})();function ee(n,e){if(n&1&&(t(0,"div",10),l(1,"img",11),t(2,"div",12)(3,"div",13)(4,"p",14),a(5),o(),t(6,"p",15),a(7),l(8,"br"),a(9),s(10,"transloco"),o()()()()),n&2){let g=e.$implicit;i(),u("src",g.image?g.image:"https://th.bing.com/th/id/OIP.UW63Qyl9ZW9x7AY3Iu2AJQHaHa?w=202&h=202&c=7&r=0&o=5&dpr=1.7&pid=1.7",v),i(4),d(g.name),i(2),d(g.house),i(2),c(" ",r(10,4,"estudent.ancestry."+(g.ancestry||"notKnown")),"")}}var Y=(()=>{let e=class e{constructor(m){this.harryPotterService=m,this.staff=[]}ngOnInit(){this.harryPotterService.getStaff().subscribe(m=>{this.staff=m.slice(0,9),console.log(this.staff)}),AOS.init({duration:1e3,easing:"ease",once:!0})}};e.\u0275fac=function(p){return new(p||e)(y(S))},e.\u0275cmp=f({type:e,selectors:[["app-hogwarts-profes-page"]],decls:22,vars:16,consts:[[1,"flex","flex-col","justify-center","items-center","w-full","bg-fuchsia-200","text-sm","text-center","text-black","font-bold","mb-6"],[1,"text-xs","titulo1"],[1,"intro-titulo","grid","grid-cols-1","md:grid-cols-2","mb-2"],["src","https://i.pinimg.com/originals/cd/94/14/cd9414ce56c1616c229a6a30c3a31049.gif","data-aos","fade-right","data-aos-offset","300","data-aos-easing","ease-in-sine",1,"hodwarts"],["data-aos","fade-left","data-aos-offset","300","data-aos-easing","ease-in-sine",1,"text-sm","mt-7","ml-2","mr-2"],[1,"text-3xl","text-center","titulo1"],[1,"text-md","text-justify","p-3"],[1,"flex","flex-column","md:flex-row","flex-wrap","justify-evenly","gap-5","card","w-5/6","md:ml-20","ml-9"],[1,"text-4xl","text-center","text-transparent","bg-clip-text","bg-gradient-to-r","to-fuchsia-200","from-fuchsia-500","font-bold"],["class","relative w-44 h-72 bg-fuchsia-100 rounded-md border-dotted border-2 border-fuchsia-400 mx-auto cursor-pointer  shadow-md","data-aos","flip-left","data-aos-easing","ease-out-cubic","data-aos-duration","1000",4,"ngFor","ngForOf"],["data-aos","flip-left","data-aos-easing","ease-out-cubic","data-aos-duration","1000",1,"relative","w-44","h-72","bg-fuchsia-100","rounded-md","border-dotted","border-2","border-fuchsia-400","mx-auto","cursor-pointer","shadow-md"],["loading","lazy",1,"absolute","inset-0","w-full","h-48","object-cover","rounded-md",3,"src"],[1,"absolute","bottom-0","left-0","w-full","bg-fuchsia-50","bg-opacity-75","py-0"],[1,"text-fuchsia-500","text-center"],[1,"text-xl","text-black","font-bold","spell"],[1,"description","p-1","font-bold","items-center"]],template:function(p,h){p&1&&(t(0,"div",0)(1,"p",1),a(2),s(3,"transloco"),o()(),t(4,"div",2),l(5,"img",3),t(6,"article",4)(7,"p",5),a(8),s(9,"transloco"),o(),t(10,"p",6),a(11),s(12,"transloco"),l(13,"br")(14,"br"),a(15),s(16,"transloco"),o()()(),t(17,"div",7)(18,"h1",8),a(19),s(20,"transloco"),o(),O(21,ee,11,6,"div",9),o()),p&2&&(i(2),d(r(3,6,"introtitle1")),i(6),c("\u2728",r(9,8,"getTeachers"),"\u2728"),i(3),c("",r(12,10,"getTeachersParag1")," "),i(4),c("\u{1F4DC}",r(16,12,"getTeachersParag2"),"\u{1FA84}\u2728"),i(4),d(r(20,14,"teachers")),i(2),u("ngForOf",h.staff))},dependencies:[w,x],styles:[".img[_ngcontent-%COMP%]{filter:grayscale(66%)}.container[_ngcontent-%COMP%]{margin-top:15rem}.map[_ngcontent-%COMP%]{position:absolute;top:5;width:100vw;height:55vh;object-fit:cover}.name_container[_ngcontent-%COMP%]{position:relative;display:inline-block;overflow:hidden;top:90px;left:490px;transform:translateZ(-60%,-60%);animation:_ngcontent-%COMP%_slideStep 4s steps(10,end) infinite}.name_container1[_ngcontent-%COMP%]{position:relative;display:inline-block;overflow:hidden;left:50px;transform:translateZ(50%,50%);animation:_ngcontent-%COMP%_slideStep1 8s steps(10,end) infinite}.title[_ngcontent-%COMP%], .title1[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#0c0b0b;font-size:1rem;line-height:13px;text-shadow:2px 2px 4px rgba(0,0,0,.5);text-align:center;font-family:almendra;white-space:no-wrap}@keyframes _ngcontent-%COMP%_slideStep{0%{transform:translate(0);opacity:3}10%{transform:translate(-10%)}to{transform:translate(-50%);opacity:0}}@keyframes _ngcontent-%COMP%_slideStep1{0%{transform:translate(0);opacity:3}10%{transform:translate(10%)}to{transform:translate(100%)}}"]});let n=e;return n})();function te(n,e){if(n&1&&(t(0,"div",10),l(1,"img",11),t(2,"div",12)(3,"div",13)(4,"p",14),a(5),o(),t(6,"p",15),a(7),s(8,"transloco"),o()()()()),n&2){let g=e.$implicit;i(),u("src",g.image,v),i(4),d(g.name),i(2),d(r(8,3,"Spell.description."+g.name))}}var Z=(()=>{let e=class e{constructor(m){this.harryPotterService=m,this.spells=[]}ngOnInit(){this.getSpell(),AOS.init({duration:1e3,easing:"ease",once:!0,threshold:.5})}getSpell(){this.harryPotterService.getSpells().subscribe(m=>{this.spells=m,console.log(this.spells)})}};e.\u0275fac=function(p){return new(p||e)(y(S))},e.\u0275cmp=f({type:e,selectors:[["app-hechizos-page"]],decls:20,vars:13,consts:[[1,"intro-titulo","grid","grid-cols-1","md:grid-cols-2","mb-2"],["src","assets/images/biblioteca.jpg","loading","lazy","data-aos","fade-right","data-aos-offset","300","data-aos-easing","ease-in-sine",1,"hodwarts"],["data-aos","fade-left","data-aos-offset","300","data-aos-easing","ease-in-sine",1,"text-sm","mt-7","ml-2","mr-2"],[1,"text-3xl","text-center","titulo1"],[1,"text-md","text-justify","p-3"],[1,"flex","justify-center","items-center"],[1,"text-6xl","text-center","titleSection","subtle-bounce"],["src","assets/images/leviosa1.png","loading","lazy",1,"spell","w-56","subtle-bounce"],[1,"flex","flex-column","md:flex-row","flex-wrap","justify-evenly","gap-5","card","w-5/6","md:ml-20","ml-9"],["class","relative w-44 h-72 bg-fuchsia-100 rounded-md border-dotted border-2 border-fuchsia-400 mx-auto cursor-pointer shadow-md","data-aos","flip-left","data-aos-easing","ease-out-cubic","data-aos-duration","800",4,"ngFor","ngForOf"],["data-aos","flip-left","data-aos-easing","ease-out-cubic","data-aos-duration","800",1,"relative","w-44","h-72","bg-fuchsia-100","rounded-md","border-dotted","border-2","border-fuchsia-400","mx-auto","cursor-pointer","shadow-md"],["loading","lazy",1,"absolute","inset-0","w-full","h-48","object-cover","rounded-md",3,"src"],[1,"absolute","bottom-0","left-0","w-full","bg-fuchsia-50","bg-opacity-75","py-0"],[1,"text-fuchsia-500","text-center"],[1,"text-xl","text-black","font-bold","spell"],[1,"description","p-1","font-bold","items-center"]],template:function(p,h){p&1&&(t(0,"div",0),l(1,"img",1),t(2,"article",2)(3,"p",3),a(4),s(5,"transloco"),o(),t(6,"p",4),a(7),s(8,"transloco"),l(9,"br")(10,"br"),a(11),s(12,"transloco"),o()()(),t(13,"div",5)(14,"h1",6),a(15),s(16,"transloco"),o(),l(17,"img",7),o(),t(18,"div",8),O(19,te,9,5,"div",9),o()),p&2&&(i(4),c("\u2728",r(5,5,"getAllSpells"),"\u2728"),i(3),c("",r(8,7,"paragraphSpell")," "),i(4),c("\u{1F4DC} ",r(12,9,"paragraphSpell1")," \u{1FA84}\u2728"),i(4),d(r(16,11,"Spells")),i(4),u("ngForOf",h.spells))},dependencies:[w,x],styles:[".spell[_ngcontent-%COMP%]{filter:drop-shadow(0 0 .75rem rgb(191,97,249))}@keyframes _ngcontent-%COMP%_subtle-bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-5px)}}.subtle-bounce[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_subtle-bounce 2s ease-in-out infinite}.spell[_ngcontent-%COMP%], .titleSection[_ngcontent-%COMP%]{filter:drop-shadow(0 0 .75rem rgb(186,81,251));font-family:Dancing Script,cursive}.description[_ngcontent-%COMP%]{font-size:.7rem;line-height:9px}"]});let n=e;return n})();var ae=()=>["/estudiantes"],oe=()=>["/hechizos"],ne=()=>["/profesores"],$=(()=>{let e=class e{ngOnInit(){AOS.init({duration:3e3,easing:"ease-out-cubic",offset:100,once:!0})}};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=f({type:e,selectors:[["ini-section1"]],decls:22,vars:15,consts:[["data-aos","fade-up","data-aos-anchor-placement","bottom-bottom",1,"bg-fuchsia-50","text-center","p-2"],[1,"text-black","tituloSection1","text-2xl"],[1,"flex","flex-column","md:flex-row","flex-wrap","justify-evenly","gap-5","card"],["data-aos","flip-left","data-aos-easing","ease-out-cubic","data-aos-duration","1800",1,"relative","w-32","h-32","bg-fuchsia-100","rounded-md","border-dotted","border-2","border-fuchsia-400","mx-auto","cursor-pointer","shadow-md",3,"routerLink"],["src","assets/images/harry.jpg",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md"],[1,"absolute","bottom-0","left-0","w-full","h-7","bg-fuchsia-50","bg-opacity-75","py-1"],[1,"text-fuchsia-600","text-lg"],["data-aos","flip-left","data-aos-easing","ease-out-cubic","data-aos-duration","1800",1,"relative","w-32","h-32","bg-fuchsia-100","rounded-md","border-dotted","border-2","border-fuchsia-400","mx-auto","cursor-pointer",3,"routerLink"],["src","assets/images/olomora.jpg",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md"],[1,"absolute","bottom-0","h-7","left-0","w-full","bg-fuchsia-50","bg-opacity-75","py-1"],["src","assets/images/maestros.jpg",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md"],[1,"absolute","bottom-0","left-0","w-full","h-9","bg-fuchsia-50","bg-opacity-75","py-1"],[1,"text-fuchsia-600","text-xs"]],template:function(p,h){p&1&&(t(0,"div",0)(1,"p",1),a(2),s(3,"transloco"),o(),t(4,"div",2)(5,"div",3),l(6,"img",4),t(7,"div",5)(8,"p",6),a(9,"Estudiantes"),o()()(),t(10,"div",7),l(11,"img",8),t(12,"div",9)(13,"p",6),a(14),s(15,"transloco"),o()()(),t(16,"div",7),l(17,"img",10),t(18,"div",11)(19,"p",12),a(20),s(21,"transloco"),o()()()()()),p&2&&(i(2),d(r(3,6,"introIniSection1")),i(3),u("routerLink",C(12,ae)),i(5),u("routerLink",C(13,oe)),i(4),d(r(15,8,"Spells")),i(2),u("routerLink",C(14,ne)),i(4),d(r(21,10,"teachers")))},dependencies:[M,x],styles:[".tituloSection1[_ngcontent-%COMP%], .estu-titulo[_ngcontent-%COMP%]{font-family:Dancing Script,cursive}.card[_ngcontent-%COMP%]{filter:drop-shadow(0 0 .75rem rgb(214,158,250))}[data-aos=flip-left][_ngcontent-%COMP%]{opacity:0;transform:rotateY(-180deg)}[data-aos=flip-left].aos-animate[_ngcontent-%COMP%]{opacity:1;transform:rotateY(0)}"]});let n=e;return n})();var Q=(()=>{let e=class e{ngOnInit(){AOS.init({duration:1e3,easing:"ease",once:!0})}};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=f({type:e,selectors:[["section-ini2"]],decls:24,vars:15,consts:[["data-aos","fade-down","data-aos-easing","linear","data-aos-duration","1200",1,"mb-8"],[1,"mt-12","ml-2","mr-2"],[1,"text-center","text-3xl","title-sec"],[1,"flex","justify-center","justify-items-center","ml-2","mr-2"],["src",E`assets/images/peli2025.mp4`,"width","650","height","350"],[1,"information-film","flex","flex-col","justify-center","lg:flex-row","md:flex-row","mt-5","ml-2"],["src","assets/images/hedwig.png",1,"w-56","hedwig","relative","z-0","rounded-lg","transition-all","duration-300","hover:scale-110","items-center","ml-20","md:ml-2","lg:ml-2"],[1,"flex","flex-col","mt-3","ml-2"],[1,"text-4xl","text-transparent","bg-clip-text","bg-gradient-to-r","to-fuchsia-200","from-fuchsia-500","font-extrabold"],[1,"text-2xl"],[1,"mr-3","text-md","text-justify","w-86"]],template:function(p,h){p&1&&(t(0,"div",0)(1,"div",1)(2,"p",2),a(3),s(4,"transloco"),l(5,"br"),a(6),s(7,"transloco"),o()(),t(8,"div",3),l(9,"iframe",4),o(),t(10,"div",5),l(11,"img",6),t(12,"div",7)(13,"p",8),a(14," Harry Potter "),l(15,"br"),a(16),s(17,"transloco"),o(),t(18,"p",9),a(19),s(20,"transloco"),o(),t(21,"span",10),a(22),s(23,"transloco"),o()()()()),p&2&&(i(3),d(r(4,5,"title-sec")),i(3),d(r(7,7,"title-sec1")),i(10),d(r(17,9,"title-film")),i(3),d(r(20,11,"sinopsis")),i(3),c(" ",r(23,13,"descrip"),""))},dependencies:[x],styles:[".title-sec[_ngcontent-%COMP%]{font-family:Dancing Script}.hedwig[_ngcontent-%COMP%]{filter:blur(1px)}.hedwig[_ngcontent-%COMP%]:hover{filter:blur(0px);filter:drop-shadow(0 0 .75rem rgb(191,97,249))}"]});let n=e;return n})();var q=(()=>{let e=class e{ngOnInit(){AOS.init({duration:3e3,easing:"ease",once:!0})}};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=f({type:e,selectors:[["section3-ini"]],decls:57,vars:27,consts:[["data-aos","fade-up","data-aos-anchor-placement","bottom-bottom",1,"flex","flex-col","justify-center","bg-fuchsia-200","text-black","p-3"],[1,"text-2xl","mt-5","text-center","title3","mb-8"],[1,"flex","flex-wrap","justify-center","gap-4"],["data-aos","flip-left","data-aos-easing","ease-out-cubic","data-aos-duration","3000",1,"relative","w-36","h-40","bg-fuchsia-100","rounded-md","border-dotted","border-2","border-fuchsia-400","mx-auto","cursor-pointer","shadow-md"],["src","assets/images/libro4.jpg",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md","filter","grayscale"],[1,"absolute","bottom-0","left-0","w-full","h-9","bg-fuchsia-50","bg-opacity-75","py-0"],[1,"text-fuchsia-600","text-center"],["href","https://amzn.eu/d/ebQT6AL",1,"enlace","text-xs","p-1","font-bold"],["data-aos","flip-left","data-aos-easing","ease-out-cubic","data-aos-duration","3000",1,"relative","w-36","h-40","bg-fuchsia-100","rounded-md","border-dotted","border-2","border-fuchsia-400","mx-auto","cursor-pointer","shadow-md","animate-fade-in-up"],["src","assets/images/libro2.jpg",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md"],["href","https://amzn.eu/d/fqOibWN",1,"enlace","text-xs","p-1","font-bold"],["src","assets/images/libro3.jpg",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md"],["href","https://amzn.eu/d/6Nd5gkA",1,"enlace","text-xs","p-1","font-bold"],["src","assets/images/libro.jpg",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md"],["src","assets/images/libro1.jpg",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md"],["href","https://amzn.eu/d/chiK0O7",1,"enlace","text-xs","p-1","font-bold"],["src","assets/images/book6.jpg",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md"],["src","assets/images/book7.jpg",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md"]],template:function(p,h){p&1&&(t(0,"div",0)(1,"span",1),a(2),s(3,"transloco"),l(4,"br"),a(5),s(6,"transloco"),o(),t(7,"div",2)(8,"div",3),l(9,"img",4),t(10,"div",5)(11,"p",6)(12,"a",7),a(13),s(14,"transloco"),o()()()(),t(15,"div",8),l(16,"img",9),t(17,"div",5)(18,"p",6)(19,"a",10),a(20),s(21,"transloco"),o()()()(),t(22,"div",8),l(23,"img",11),t(24,"div",5)(25,"p",6)(26,"a",12),a(27),s(28,"transloco"),o()()()(),t(29,"div",8),l(30,"img",13),t(31,"div",5)(32,"p",6)(33,"a",12),a(34),s(35,"transloco"),o()()()(),t(36,"div",8),l(37,"img",14),t(38,"div",5)(39,"p",6)(40,"a",15),a(41),s(42,"transloco"),o()()()(),t(43,"div",8),l(44,"img",16),t(45,"div",5)(46,"p",6)(47,"a",15),a(48),s(49,"transloco"),o()()()(),t(50,"div",8),l(51,"img",17),t(52,"div",5)(53,"p",6)(54,"a",15),a(55),s(56,"transloco"),o()()()()()()),p&2&&(i(2),d(r(3,9,"titleSection3")),i(3),d(r(6,11,"titleSectionSpan")),i(8),c("Harry Potter",r(14,13,"book1"),""),i(7),c("Harry Potter",r(21,15,"book2"),""),i(7),c("Harry Potter",r(28,17,"book3"),""),i(7),c("Harry Potter",r(35,19,"book4"),""),i(7),c("Harry Potter",r(42,21,"book5"),""),i(7),c("Harry Potter",r(49,23,"book6"),""),i(7),c("Harry Potter",r(56,25,"book7"),""))},dependencies:[x],styles:[".title3[_ngcontent-%COMP%]{font-family:Dancing Script,cursive}"]});let n=e;return n})();var le=()=>["/magos"],G=(()=>{let e=class e{ngOnInit(){AOS.init({duration:1e3,easing:"ease",once:!0})}};e.\u0275fac=function(p){return new(p||e)},e.\u0275cmp=f({type:e,selectors:[["app-inicio"]],decls:24,vars:14,consts:[[1,"flex","flex-col","justify-center","items-center","bg-fuchsia-200","text-sm","text-center","text-black","font-bold"],[1,"text-xl","titulo1"],[1,"intro-titulo","grid","grid-cols-1","md:grid-cols-2","mb-2"],["src","assets/images/hodwarts.png","data-aos","fade-right","data-aos-offset","300","data-aos-easing","ease-in-sine",1,"hodwarts"],["data-aos","fade-left","data-aos-anchor","#example-anchor","data-aos-offset","500","data-aos-duration","500",1,"text-sm","mt-7","ml-2","mr-2"],[1,"text-3xl","text-center","text-transparent","bg-clip-text","bg-gradient-to-r","to-fuchsia-200","from-fuchsia-500","font-extrabold"],[1,"text-md","text-justify","p-3"],["src","assets/images/ordendelfenix.png",1,"w-full","h-20","object-contain","orden"],[1,"flex","justify-center","justify-items-center","mt-2"],[1,"btn-entrar","w-24","mb-3","py-2.5","px-6","text-sm","rounded-full","bg-gradient-to-r","from-fuchsia-600","via-fuchsia-500","to-fuchsia-400","shadow-lg","shadow-fuchsia-500/50","text-white","cursor-pointer","font-semibold","text-center","shadow-xs","transition-all","duration-500","hover:bg-gradient-to-l","p-2","mt-4",3,"routerLink"]],template:function(p,h){p&1&&(t(0,"div",0)(1,"p",1),a(2),s(3,"transloco"),o()(),t(4,"div",2),l(5,"img",3),t(6,"article",4)(7,"p",5),a(8),s(9,"transloco"),o(),t(10,"p",6),a(11),s(12,"transloco"),l(13,"br")(14,"br"),a(15),s(16,"transloco"),o(),l(17,"img",7),t(18,"div",8)(19,"button",9),a(20,"Entrar"),o()()()(),l(21,"ini-section1")(22,"section-ini2")(23,"section3-ini")),p&2&&(i(2),d(r(3,5,"introIniSection1")),i(6),c(" \u2728",r(9,7,"welcome"),"\u2728"),i(3),c("",r(12,9,"getExplore")," "),i(4),c("\u{1F4DC} ",r(16,11,"getExploreParag1"),"\u{1FA84}\u2728 "),i(4),u("routerLink",C(13,le)))},dependencies:[M,$,Q,q,x],styles:[".titulo1[_ngcontent-%COMP%]{font-family:Dancing Script,cursive}.potion[_ngcontent-%COMP%], .orden[_ngcontent-%COMP%], .hodwarts[_ngcontent-%COMP%]{filter:drop-shadow(0 0 .75rem rgb(223,181,249))}"]});let n=e;return n})();var me=[{path:"",component:G},{path:"magos",component:W},{path:"estudiantes",component:K},{path:"profesores",component:Y},{path:"hechizos",component:Z}],J=(()=>{let e=class e{};e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=P({type:e}),e.\u0275inj=I({imports:[D.forChild(me),D]});let n=e;return n})();var $e=(()=>{let e=class e{};e.\u0275fac=function(p){return new(p||e)},e.\u0275mod=P({type:e}),e.\u0275inj=I({imports:[L,J,R,N]});let n=e;return n})();export{$e as PotterModule};