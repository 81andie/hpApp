import{a as z,g as M,h as j,i as S,j as _,l as T}from"./chunk-XLHHQOKQ.js";import{$a as o,$b as x,Aa as D,Ea as l,Fa as g,S as k,T as C,Va as h,X as F,Xa as m,_a as i,ab as s,ba as p,ca as P,dc as H,jb as d,pb as a,qb as v,rb as y,ub as w,za as E}from"./chunk-TAOOK52B.js";var b=(()=>{let e=class e{constructor(r){this.http=r,this.apiUrl="https://hp-api.onrender.com/api/characters",this.apiUrlEstudiantes="https://hp-api.onrender.com/api/characters/students",this.apiUrlTeachers="https://hp-api.onrender.com/api/characters/staff",this.apiUrlSpells="https://hp-api.onrender.com/api/spells"}getCharacters(){return this.http.get(this.apiUrl)}getStudents(){return this.http.get(this.apiUrlEstudiantes)}getStaff(){return this.http.get(this.apiUrlTeachers)}getSpells(){return this.http.get(this.apiUrlSpells)}};e.\u0275fac=function(n){return new(n||e)(F(z))},e.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function G(t,e){if(t&1&&(i(0,"div",9)(1,"p-card",10)(2,"div",11)(3,"div",12),s(4,"img",13)(5,"img",14),o(),i(6,"div",15)(7,"p",16),a(8),o()()()()()),t&2){let c=e.$implicit;l(),d("header",c.name),d("subheader",c.actor),l(3),m("src",c.image,E),l(4),v(c.house)}}var U=(()=>{let e=class e{constructor(r){this.harryPotterServicios=r,this.magias=[]}ngOnInit(){this.harryPotterServicios.getCharacters().subscribe(r=>{this.magias=r.slice(0,16),console.log(this.magias)})}};e.\u0275fac=function(n){return new(n||e)(g(b))},e.\u0275cmp=p({type:e,selectors:[["app-magos-page"]],decls:12,vars:1,consts:[[1,"container_map"],["src","https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/harry-potter-the-marauders-map-vintage-on-canvas-triptych-1-left-design-turnpike.jpg",1,"map"],[1,"name_container"],["src","https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/scroll.svg",1,"merodeador"],[1,"title"],[1,"name_container1"],[1,"title1"],[1,"grid","mt-3","p-4","container"],["class","col-12 md:col-6 lg:col-4 flex mt-3",4,"ngFor","ngForOf"],[1,"col-12","md:col-6","lg:col-4","flex","mt-3"],[1,"w-full","h-full",3,"header","subheader"],[1,"flex","flex-row","align-items-center"],[1,"flex","align-items-center"],["alt","Card",1,"w-4rem","h-6rem",3,"src"],["src","https://i.pinimg.com/originals/9a/a1/58/9aa15882779404d92ff9166d06022388.jpg",1,"h-4rem","w-4rem","p-2"],[1,"mt-2"],[1,"ml-2","text-2xl"]],template:function(n,f){n&1&&(i(0,"div",0),s(1,"img",1),i(2,"div",2),s(3,"img",3),i(4,"h1",4),a(5,"Harry Potter"),o()(),i(6,"div",5),s(7,"img",3),i(8,"h1",6),a(9,"Hermione Granger"),o()()(),i(10,"div",7),h(11,G,9,4,"div",8),o()),n&2&&(l(11),m("ngForOf",f.magias))},dependencies:[x,S],styles:[".img[_ngcontent-%COMP%]{filter:grayscale(66%)}.container[_ngcontent-%COMP%]{margin-top:15rem}.map[_ngcontent-%COMP%]{position:absolute;top:5;width:100vw;height:55vh;object-fit:cover}.name_container[_ngcontent-%COMP%]{position:relative;display:inline-block;overflow:hidden;top:90px;left:490px;transform:translateZ(-60%,-60%);animation:_ngcontent-%COMP%_slideStep 4s steps(10,end) infinite}.name_container1[_ngcontent-%COMP%]{position:relative;display:inline-block;overflow:hidden;left:50px;transform:translateZ(50%,50%);animation:_ngcontent-%COMP%_slideStep1 8s steps(10,end) infinite}.title[_ngcontent-%COMP%], .title1[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#0c0b0b;font-size:1rem;line-height:13px;text-shadow:2px 2px 4px rgba(0,0,0,.5);text-align:center;font-family:almendra;white-space:no-wrap}@keyframes _ngcontent-%COMP%_slideStep{0%{transform:translate(0);opacity:3}10%{transform:translate(-10%)}to{transform:translate(-50%);opacity:0}}@keyframes _ngcontent-%COMP%_slideStep1{0%{transform:translate(0);opacity:3}10%{transform:translate(10%)}to{transform:translate(100%)}}"]});let t=e;return t})();function W(t,e){if(t&1&&(i(0,"div",4)(1,"div",5)(2,"p",6),a(3),o()(),i(4,"div",7),s(5,"img",8)(6,"br"),i(7,"p",9),a(8),o()(),i(9,"div",10)(10,"p",11),a(11),s(12,"br"),a(13),o()()()),t&2){let c=e.$implicit;l(3),v(c.house),l(2),d("src",c.image,E),l(3),v(c.name),l(3),y("",c.ancestry||"not information",","),l(2),y(" ",c.dateOfBirth||"not found","")}}var N=(()=>{let e=class e{constructor(r){this.harryPotterService=r,this.estudents=[]}ngOnInit(){this.harryPotterService.getStudents().subscribe(r=>{this.estudents=r.slice(0,10),console.log(this.estudents)})}};e.\u0275fac=function(n){return new(n||e)(g(b))},e.\u0275cmp=p({type:e,selectors:[["app-estudiantes-hogwarts-page"]],decls:4,vars:1,consts:[[1,"w-full","mt-2","opacity-90"],["src","https://ey49netbj7p.exactdn.com/wp-content/2020/09/harry-potter-hogwarts-legacy-salao-principal-redes-sociais.jpg",1,"w-full","h-60","object-cover","img"],[1,"flex","flex-row","flex-wrap","justify-center","justify-items-center","gap-3","rounded-lg","mt-8"],["class","background w-72 h-72 rounded-t-lg",4,"ngFor","ngForOf"],[1,"background","w-72","h-72","rounded-t-lg"],[1,"flex","flex-colum","w-full","justify-center","mt-16"],[1,"opacity-100","text-1xl","text-violet-300"],[1,"flex","flex-colum","w-full","justify-center","mt-1"],[1,"w-12","h-22","object-cover","rounded-full",3,"src"],[1,"opacity-100","text-sm","text-yellow-400","text-wrap"],[1,"flex","flex-colum","w-full","justify-center"],[1,"text-xl"]],template:function(n,f){n&1&&(i(0,"div",0),s(1,"img",1),o(),i(2,"div",2),h(3,W,14,5,"div",3),o()),n&2&&(l(3),m("ngForOf",f.estudents))},dependencies:[x],styles:[".background[_ngcontent-%COMP%]{font-family:almendra;background-repeat:no-repeat;background-size:cover;object-fit:contain;opacity:.1;transition-duration:1.5s}.background[_ngcontent-%COMP%]:hover{opacity:1}"]});let t=e;return t})();function K(t,e){if(t&1&&(i(0,"div",7)(1,"p-card",9)(2,"div",7)(3,"div",7)(4,"div",7)(5,"p-chip"),s(6,"img",10),a(7),o(),i(8,"p-chip"),s(9,"img",11),a(10),o(),i(11,"p-chip"),s(12,"img",12),a(13),o(),i(14,"p-chip"),s(15,"img",13),a(16),o()(),i(17,"p",14),s(18,"p-chip",15),o()()()()()),t&2){let c=e.$implicit;l(),d("subheader",c.name),l(6),v(c.house),l(3),v(c.ancestry||"not information"),l(3),y("",c.yearOfBirth||"not found"," "),l(3),y("",c.wand.wood||"not found"," "),l(2),d("label",c.actor),d("image",c.image),d("alt",c.name)}}var A=(()=>{let e=class e{constructor(r){this.harryPotterService=r,this.staff=[]}ngOnInit(){this.harryPotterService.getStaff().subscribe(r=>{this.staff=r.slice(0,10),console.log(this.staff)})}};e.\u0275fac=function(n){return new(n||e)(g(b))},e.\u0275cmp=p({type:e,selectors:[["app-hogwarts-profes-page"]],decls:12,vars:1,consts:[[1,"container_map"],["src","https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/harry-potter-the-marauders-map-vintage-on-canvas-triptych-1-left-design-turnpike.jpg",1,"map"],[1,"name_container"],["src","https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/scroll.svg",1,"merodeador"],[1,"title"],[1,"name_container1"],[1,"title1"],[1,""],["class","",4,"ngFor","ngForOf"],["header","Hogwarts Staff",1,"letters",3,"subheader"],["src","https://cdn4.iconfinder.com/data/icons/harry-potter/100/final_collection-17-1024.png",1,""],["src","https://cdn4.iconfinder.com/data/icons/medical-and-health-33/100/sangue3-1024.png",1,""],["src","https://cdn0.iconfinder.com/data/icons/ie_yummy/128/cake_13.png",1,""],["src","https://cdn2.iconfinder.com/data/icons/harry-potter-colour-collection/60/19_-_Harry_Potter_-_Colour_-_Harrys_Wand-1024.png",1,""],["card","","content","Actor",1,""],[3,"label","image","alt"]],template:function(n,f){n&1&&(i(0,"div",0),s(1,"img",1),i(2,"div",2),s(3,"img",3),i(4,"h1",4),a(5," Albus Dumbledore"),o()(),i(6,"div",5),s(7,"img",3),i(8,"h1",6),a(9,"Harry Potter"),o()()(),i(10,"div",7),h(11,K,19,8,"div",8),o()),n&2&&(l(11),m("ngForOf",f.staff))},dependencies:[x,S,_],styles:[".img[_ngcontent-%COMP%]{filter:grayscale(66%)}.container[_ngcontent-%COMP%]{margin-top:15rem}.map[_ngcontent-%COMP%]{position:absolute;top:5;width:100vw;height:55vh;object-fit:cover}.name_container[_ngcontent-%COMP%]{position:relative;display:inline-block;overflow:hidden;top:90px;left:490px;transform:translateZ(-60%,-60%);animation:_ngcontent-%COMP%_slideStep 4s steps(10,end) infinite}.name_container1[_ngcontent-%COMP%]{position:relative;display:inline-block;overflow:hidden;left:50px;transform:translateZ(50%,50%);animation:_ngcontent-%COMP%_slideStep1 8s steps(10,end) infinite}.title[_ngcontent-%COMP%], .title1[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#0c0b0b;font-size:1rem;line-height:13px;text-shadow:2px 2px 4px rgba(0,0,0,.5);text-align:center;font-family:almendra;white-space:no-wrap}@keyframes _ngcontent-%COMP%_slideStep{0%{transform:translate(0);opacity:3}10%{transform:translate(-10%)}to{transform:translate(-50%);opacity:0}}@keyframes _ngcontent-%COMP%_slideStep1{0%{transform:translate(0);opacity:3}10%{transform:translate(10%)}to{transform:translate(100%)}}"]});let t=e;return t})();function Q(t,e){if(t&1&&(i(0,"div",1)(1,"p-card",3)(2,"p-chip"),s(3,"img",4),a(4),o()()()),t&2){let c=e.$implicit;l(),d("header",c.name),l(3),y(" ",c.description," ")}}var q=(()=>{let e=class e{constructor(r){this.harryPotterService=r,this.spells=[]}ngOnInit(){this.harryPotterService.getSpells().subscribe(r=>{this.spells=r,console.log(this.spells)})}};e.\u0275fac=function(n){return new(n||e)(g(b))},e.\u0275cmp=p({type:e,selectors:[["app-hechizos-page"]],decls:5,vars:1,consts:[[1,"w-full","h-full","img"],[1,""],["class","",4,"ngFor","ngForOf"],[1,"",3,"header"],["src","https://cdn2.iconfinder.com/data/icons/harrypotter/trash-full.png",1,""]],template:function(n,f){n&1&&(i(0,"div",0)(1,"p"),a(2," hello"),o()(),i(3,"div",1),h(4,Q,5,2,"div",2),o()),n&2&&(l(4),m("ngForOf",f.spells))},dependencies:[x,S,_],styles:[".img[_ngcontent-%COMP%]{background:url(/hpApp/assets/spell.jpg);background-size:cover;background-repeat:no-repeat;background-position:top;object-fit:contain}"]});let t=e;return t})();var X=()=>["/estudiantes"],Y=()=>["/hechizos"],ee=()=>["/maestros"],Z=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["ini-section1"]],decls:19,vars:6,consts:[[1,"w-full","bg-fuchsia-50","text-center","p-2"],[1,"text-black","tituloSection1","text-2xl"],[1,"flex","flex-column","md:flex-row","flex-wrap","justify-evenly"],[1,"relative","w-32","h-32","bg-fuchsia-100","rounded-md","border-dotted","border-2","border-fuchsia-400","mx-auto","cursor-pointer","animate-fade-in-up",3,"routerLink"],["src","assets/images/harry.jpg",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md"],[1,"absolute","bottom-0","left-0","w-full","h-7","bg-fuchsia-50","bg-opacity-75","py-1"],[1,"text-fuchsia-600","text-lg"],["src","assets/images/olomora.jpg",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md"],[1,"absolute","bottom-0","h-7","left-0","w-full","bg-fuchsia-50","bg-opacity-75","py-1"],["src","assets/images/maestros.jpg",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md"]],template:function(n,f){n&1&&(i(0,"div",0)(1,"p",1),a(2,"Encuentra lo que quieras sobre el mundo m\xE1gico de Harry Potter"),o(),i(3,"div",2)(4,"div",3),s(5,"img",4),i(6,"div",5)(7,"p",6),a(8,"Estudiantes"),o()()(),i(9,"div",3),s(10,"img",7),i(11,"div",8)(12,"p",6),a(13,"Hechizos"),o()()(),i(14,"div",3),s(15,"img",9),i(16,"div",5)(17,"p",6),a(18,"Maestros"),o()()()()()),n&2&&(l(4),m("routerLink",w(3,X)),l(5),m("routerLink",w(4,Y)),l(5),m("routerLink",w(5,ee)))},dependencies:[M],styles:[".tituloSection1[_ngcontent-%COMP%], .estu-titulo[_ngcontent-%COMP%]{font-family:Dancing Script,cursive}"]});let t=e;return t})();var $=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["section-ini2"]],decls:5,vars:0,consts:[[1,"w-full","bg-zinc-900","mt-12"],[1,"text-center","text-3xl","title-sec"],[1,"bg-zinc-900","flex","justify-center","justify-items-center","ml-4"],["src",D`assets/images/peli2025.mp4`,"width","650","height","350"]],template:function(n,f){n&1&&(i(0,"div",0)(1,"p",1),a(2,"Esperamos con much\xEDsima ilusi\xF3n la nueva pelicula"),o()(),i(3,"div",2),s(4,"iframe",3),o())},styles:[".title-sec[_ngcontent-%COMP%]{font-family:Dancing Script,cursive}"]});let t=e;return t})();var ne=()=>["/magos"],B=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=p({type:e,selectors:[["app-inicio"]],decls:19,vars:2,consts:[[1,"flex","flex-col","justify-center","items-center","w-full","bg-fuchsia-200","text-sm","text-center","text-black","font-bold"],[1,"text-xl","titulo1"],[1,"w-full","intro-titulo","grid","grid-cols-1","md:grid-cols-2","mb-2","slide-in-left"],["src","assets/images/hodwarts.png",1,"animate-slide-in-left"],[1,"text-sm","mt-7","ml-3","mr-3"],[1,"text-4xl","text-center","titulo1"],[1,"text-md","text-justify","p-3"],["src","assets/images/ordendelfenix.png",1,"w-full","h-20","object-contain","orden"],[1,"flex","justify-center","justify-items-center","mt-2"],[1,"btn-entrar","w-24","mb-3","bg-fuchsia-300","p-2","rounded-full","mt-4",3,"routerLink"]],template:function(n,f){n&1&&(i(0,"div",0)(1,"p",1),a(2,"Encuentra todas las novedades en nuestra p\xE1gina"),o()(),i(3,"div",2),s(4,"img",3),i(5,"article",4)(6,"p",5),a(7,"\u2728\xA1Bienvenido a tu portal m\xE1gico!\u2728"),o(),i(8,"p",6),a(9,"Explora el fascinante mundo de Harry Potter, donde los hechizos cobran vida, los magos m\xE1s poderosos dejan su huella, y los secretos de Hogwarts te esperan. "),s(10,"br")(11,"br"),a(12,"\u{1F4DC} Descubre todo sobre: Los maestros y magos que marcaron la historia del mundo m\xE1gico. Los hechizos m\xE1s ic\xF3nicos y sus usos en el d\xEDa a d\xEDa de los magos. Las \xFAltimas novedades de las pel\xEDculas, libros y contenido especial. Prep\xE1rate para sumergirte en una aventura m\xE1gica, \xA1y recuerda que en esta web, la magia nunca termina! \u{1FA84}\u2728"),o(),s(13,"img",7),i(14,"div",8)(15,"button",9),a(16,"Entrar"),o()()()(),s(17,"ini-section1")(18,"section-ini2")),n&2&&(l(15),m("routerLink",w(1,ne)))},dependencies:[M,Z,$],styles:[".titulo1[_ngcontent-%COMP%]{font-family:Dancing Script,cursive}.potion[_ngcontent-%COMP%], .orden[_ngcontent-%COMP%]{filter:drop-shadow(0 0 .75rem rgb(223,181,249))}"]});let t=e;return t})();var oe=[{path:"",component:B},{path:"magos",component:U},{path:"estudiantes",component:N},{path:"profesores",component:A},{path:"hechizos",component:q}],R=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=P({type:e}),e.\u0275inj=C({imports:[j.forChild(oe),j]});let t=e;return t})();var ze=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=P({type:e}),e.\u0275inj=C({imports:[H,R,T]});let t=e;return t})();export{ze as PotterModule};