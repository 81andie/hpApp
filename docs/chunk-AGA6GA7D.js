import{a as A,g as C,h as M,i as E,j as T,l as R}from"./chunk-ZI45ZP5Q.js";import{$a as n,$b as x,Aa as z,Ea as m,Fa as f,S as D,T as j,Va as h,X as H,Xa as p,_a as t,a as I,ab as o,b as k,ba as c,ca as S,dc as L,jb as v,pb as a,qb as g,r as F,rb as O,ub as w,za as y}from"./chunk-FHY3TY3X.js";var b=(()=>{let e=class e{constructor(r){this.http=r,this.apiUrl="https://hp-api.onrender.com/api/characters",this.apiUrlEstudiantes="https://hp-api.onrender.com/api/characters/students",this.apiUrlTeachers="https://hp-api.onrender.com/api/characters/staff",this.apiUrlSpells="https://hp-api.onrender.com/api/spells"}getCharacters(){return this.http.get(this.apiUrl)}getStudents(){return this.http.get(this.apiUrlEstudiantes)}getStaff(){return this.http.get(this.apiUrlTeachers)}getSpells(){return this.http.get(this.apiUrlSpells).pipe(F(r=>r.map(s=>k(I({},s),{image:this.getSpellImage(s.name)}))))}getSpellImage(r){return r?{Aberto:"assets/images/imgOpt/aberto.jpg",Accio:"assets/images/imgOpt/accio.jpg",Aguamenti:"assets/images/imgOpt/aguamenti.jpg",Alohomora:"assets/images/imgOpt/alohomora.jpg",Anapneo:"assets/images/imgOpt/anapneo.jpg",Aparecium:"assets/images/imgOpt/aparecium.jpg",Apparate:"assets/images/imgOpt/apparate.jpg",Ascendio:"assets/images/imgOpt/ascendio.jpg","Avada Kedavra":"assets/images/imgOpt/avadaKedavra.jpg",Avis:"assets/images/imgOpt/avis.jpg",Bat:"assets/images/imgOpt/bat.jpg",Bombardo:"assets/images/imgOpt/bombar.jpeg","Brackium Emendo":"assets/images/imgOpt/brackiumEmendo.jpg","Capacious Extremis":"assets/images/imgOpt/capaciusExtremis.jpg",Confundo:"assets/images/imgOpt/confundo.jpg","Conjunctivitis Curse":"assets/images/imgOpt/conjuctivitisCurse.jpg","Crinus Muto":"assets/images/imgOpt/crinusmuto.jpg",Crucio:"assets/images/imgOpt/crucio.jpg",Diffindo:"assets/images/imgOpt/diffindo.jpg",Disapparate:"assets/images/imgOpt/disaparrate.webp",Engorgio:"assets/images/imgOpt/engorgio.jpg",Episkey:"assets/images/imgOpt/episkey.jpg","Expecto patronum":"assets/images/imgOpt/expectopatronum.jpg",Erecto:"assets/images/imgOpt/erecto.webp",Evanesco:"assets/images/imgOpt/evanesco.jpg",Expelliarmus:"assets/images/imgOpt/expelliarmus.jpg",Ferula:"assets/images/imgOpt/ferula.jpg","Fidelius Charm":"assets/images/imgOpt/fideliusCharm.jpg","Fiendfyre Curse":"assets/images/imgOpt/fiendfire.jpg","Finite Incantatem":"assets/images/imgOpt/finiteincantatem.jpg","Furnunculus Curse":"assets/images/imgOpt/furnunculos.jpg",Geminio:"assets/images/imgOpt/geminio.jpg",Glisseo:"assets/images/imgOpt/glisseo.jpg","Homenum Revelio":"assets/images/imgOpt/homenumrevelio.jpg","Homonculus Charm":"assets/images/imgOpt/homonculuscharm.jpg",Immobulus:"assets/images/imgOpt/immobulus.jpg",Impedimenta:"assets/images/imgOpt/impedimenta.jpg",Imperio:"assets/images/imgOpt/imperio.jpg",Impervius:"assets/images/imgOpt/impervius.jpg",Incarcerous:"assets/images/imgOpt/incarcerous.jpg",Incendio:"assets/images/imgOpt/incendio.jpg",Langlock:"assets/images/imgOpt/langlock.jpg",Legilimens:"assets/images/imgOpt/legiliments.jpg",Levicorpus:"assets/images/imgOpt/levicorpus.jpg","Locomotor Mortis":"assets/images/imgOpt/locomotormortis.webp",Lumos:"assets/images/imgOpt/lumos.jpg",Morsmordre:"assets/images/imgOpt/morsmordre.jpg","Mucus Ad Nauseam":"assets/images/imgOpt/mucusandnauseam.png",Muffliato:"assets/images/imgOpt/Muffliato.jpg",Nox:"assets/images/imgOpt/nox.gif",Obliviate:"assets/images/imgOpt/obliviate.jpg","Oculus Reparo":"assets/images/imgOpt/occulusreparo.jpg",Oppugno:"assets/images/imgOpt/oppugno.jpg",Periculum:"assets/images/imgOpt/periculum.jpg","Petrificus Totalus":"assets/images/imgOpt/petrificustotalus.jpg","Piertotum Locomotor":"assets/images/imgOpt/piertotumlocomotor.jpg","Protean Charm":"assets/images/imgOpt/proteancharm.webp",Protego:"assets/images/imgOpt/protego.jpg",Reducio:"assets/images/imgOpt/reducto.jpg",Renneverate:"assets/images/imgOpt/rennervate.jpg",Reparifors:"assets/images/imgOpt/reparifors.webp",Reparo:"assets/images/imgOpt/reparo.jpg",Rictusempra:"assets/images/imgOpt/rictussempra.jpg",Riddikulus:"assets/images/imgOpt/riddiculus.jpg",Scourgify:"assets/images/imgOpt/scourgify.webp",Sectumsempra:"assets/images/imgOpt/sectumsempra.jpg",Serpensortia:"assets/images/imgOpt/serpersortia.jpg",Silencio:"assets/images/imgOpt/silencio.jpg",Sonorus:"assets/images/imgOpt/sonorus.webp",Spongify:"assets/images/imgOpt/sponfigy.webp",Stupefy:"assets/images/imgOpt/stupefy.jpg",Tarantallegra:"assets/images/imgOpt/tarantallegra.jpg","Ubreakable Vow":"assets/images/imgOpt/ubreakablevow.webp","Wingardium Leviosa":"/assets/images/imgOpt/wingardiumleviosa.jpg"}[r]||"assets/images/imgOpt/spells.png":"assets/images/spells.png"}};e.\u0275fac=function(s){return new(s||e)(H(A))},e.\u0275prov=D({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function Y(i,e){if(i&1&&(t(0,"div",9)(1,"p-card",10)(2,"div",11)(3,"div",12),o(4,"img",13)(5,"img",14),n(),t(6,"div",15)(7,"p",16),a(8),n()()()()()),i&2){let l=e.$implicit;m(),v("header",l.name),v("subheader",l.actor),m(3),p("src",l.image,y),m(4),g(l.house)}}var U=(()=>{let e=class e{constructor(r){this.harryPotterServicios=r,this.magias=[]}ngOnInit(){this.harryPotterServicios.getCharacters().subscribe(r=>{this.magias=r.slice(0,16),console.log(this.magias)})}};e.\u0275fac=function(s){return new(s||e)(f(b))},e.\u0275cmp=c({type:e,selectors:[["app-magos-page"]],decls:12,vars:1,consts:[[1,"container_map"],["src","https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/harry-potter-the-marauders-map-vintage-on-canvas-triptych-1-left-design-turnpike.jpg",1,"map"],[1,"name_container"],["src","https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/scroll.svg",1,"merodeador"],[1,"title"],[1,"name_container1"],[1,"title1"],[1,"grid","mt-3","p-4","container"],["class","col-12 md:col-6 lg:col-4 flex mt-3",4,"ngFor","ngForOf"],[1,"col-12","md:col-6","lg:col-4","flex","mt-3"],[1,"w-full","h-full",3,"header","subheader"],[1,"flex","flex-row","align-items-center"],[1,"flex","align-items-center"],["alt","Card",1,"w-4rem","h-6rem",3,"src"],["src","https://i.pinimg.com/originals/9a/a1/58/9aa15882779404d92ff9166d06022388.jpg",1,"h-4rem","w-4rem","p-2"],[1,"mt-2"],[1,"ml-2","text-2xl"]],template:function(s,d){s&1&&(t(0,"div",0),o(1,"img",1),t(2,"div",2),o(3,"img",3),t(4,"h1",4),a(5,"Harry Potter"),n()(),t(6,"div",5),o(7,"img",3),t(8,"h1",6),a(9,"Hermione Granger"),n()()(),t(10,"div",7),h(11,Y,9,4,"div",8),n()),s&2&&(m(11),p("ngForOf",d.magias))},dependencies:[x,E],styles:[".img[_ngcontent-%COMP%]{filter:grayscale(66%)}.container[_ngcontent-%COMP%]{margin-top:15rem}.map[_ngcontent-%COMP%]{position:absolute;top:5;width:100vw;height:55vh;object-fit:cover}.name_container[_ngcontent-%COMP%]{position:relative;display:inline-block;overflow:hidden;top:90px;left:490px;transform:translateZ(-60%,-60%);animation:_ngcontent-%COMP%_slideStep 4s steps(10,end) infinite}.name_container1[_ngcontent-%COMP%]{position:relative;display:inline-block;overflow:hidden;left:50px;transform:translateZ(50%,50%);animation:_ngcontent-%COMP%_slideStep1 8s steps(10,end) infinite}.title[_ngcontent-%COMP%], .title1[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#0c0b0b;font-size:1rem;line-height:13px;text-shadow:2px 2px 4px rgba(0,0,0,.5);text-align:center;font-family:almendra;white-space:no-wrap}@keyframes _ngcontent-%COMP%_slideStep{0%{transform:translate(0);opacity:3}10%{transform:translate(-10%)}to{transform:translate(-50%);opacity:0}}@keyframes _ngcontent-%COMP%_slideStep1{0%{transform:translate(0);opacity:3}10%{transform:translate(10%)}to{transform:translate(100%)}}"]});let i=e;return i})();function Q(i,e){if(i&1&&(t(0,"div",4),o(1,"img",5),t(2,"div",6)(3,"div",7)(4,"p",8),a(5),n(),t(6,"p",9),a(7),o(8,"br"),a(9),n()()()()),i&2){let l=e.$implicit;m(),p("src",l.image,y),m(4),g(l.name),m(2),O("",l.ancestry||"not information"," "),m(2),O(" ",l.dateOfBirth||"not information","")}}var N=(()=>{let e=class e{constructor(r){this.harryPotterService=r,this.estudents=[]}ngOnInit(){this.harryPotterService.getStudents().subscribe(r=>{this.estudents=r.slice(0,10),console.log(this.estudents)})}};e.\u0275fac=function(s){return new(s||e)(f(b))},e.\u0275cmp=c({type:e,selectors:[["app-estudiantes-hogwarts-page"]],decls:4,vars:1,consts:[[1,"w-full","mt-2","opacity-90"],["src","https://ey49netbj7p.exactdn.com/wp-content/2020/09/harry-potter-hogwarts-legacy-salao-principal-redes-sociais.jpg",1,"w-full","h-60","object-cover","img"],[1,"mt-8","flex","flex-column","md:flex-row","flex-wrap","justify-evenly","gap-5","card","w-5/6","md:ml-20","ml-9"],["class","relative w-44 h-72 bg-fuchsia-100 rounded-md border-dotted border-2 border-fuchsia-400 mx-auto cursor-pointer animate-fade-in-up shadow-md",4,"ngFor","ngForOf"],[1,"relative","w-44","h-72","bg-fuchsia-100","rounded-md","border-dotted","border-2","border-fuchsia-400","mx-auto","cursor-pointer","animate-fade-in-up","shadow-md"],[1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md",3,"src"],[1,"absolute","bottom-0","left-0","w-full","h-18","bg-fuchsia-50","bg-opacity-75","py-0"],[1,"text-fuchsia-500","text-center"],[1,"text-xl","text-black","font-bold","spell"],[1,"description","p-1","font-bold","items-center"]],template:function(s,d){s&1&&(t(0,"div",0),o(1,"img",1),n(),t(2,"div",2),h(3,Q,10,4,"div",3),n()),s&2&&(m(3),p("ngForOf",d.estudents))},dependencies:[x],styles:[".background[_ngcontent-%COMP%]{font-family:almendra;background-repeat:no-repeat;background-size:cover;object-fit:contain;opacity:.1;transition-duration:1.5s}.background[_ngcontent-%COMP%]:hover{opacity:1}"]});let i=e;return i})();function V(i,e){if(i&1&&(t(0,"div",7)(1,"p-card",9)(2,"div",7)(3,"div",7)(4,"div",7)(5,"p-chip"),o(6,"img",10),a(7),n(),t(8,"p-chip"),o(9,"img",11),a(10),n(),t(11,"p-chip"),o(12,"img",12),a(13),n(),t(14,"p-chip"),o(15,"img",13),a(16),n()(),t(17,"p",14),o(18,"p-chip",15),n()()()()()),i&2){let l=e.$implicit;m(),v("subheader",l.name),m(6),g(l.house),m(3),g(l.ancestry||"not information"),m(3),O("",l.yearOfBirth||"not found"," "),m(3),O("",l.wand.wood||"not found"," "),m(2),v("label",l.actor),v("image",l.image),v("alt",l.name)}}var q=(()=>{let e=class e{constructor(r){this.harryPotterService=r,this.staff=[]}ngOnInit(){this.harryPotterService.getStaff().subscribe(r=>{this.staff=r.slice(0,10),console.log(this.staff)})}};e.\u0275fac=function(s){return new(s||e)(f(b))},e.\u0275cmp=c({type:e,selectors:[["app-hogwarts-profes-page"]],decls:12,vars:1,consts:[[1,"container_map"],["src","https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/harry-potter-the-marauders-map-vintage-on-canvas-triptych-1-left-design-turnpike.jpg",1,"map"],[1,"name_container"],["src","https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/scroll.svg",1,"merodeador"],[1,"title"],[1,"name_container1"],[1,"title1"],[1,""],["class","",4,"ngFor","ngForOf"],["header","Hogwarts Staff",1,"letters",3,"subheader"],["src","https://cdn4.iconfinder.com/data/icons/harry-potter/100/final_collection-17-1024.png",1,""],["src","https://cdn4.iconfinder.com/data/icons/medical-and-health-33/100/sangue3-1024.png",1,""],["src","https://cdn0.iconfinder.com/data/icons/ie_yummy/128/cake_13.png",1,""],["src","https://cdn2.iconfinder.com/data/icons/harry-potter-colour-collection/60/19_-_Harry_Potter_-_Colour_-_Harrys_Wand-1024.png",1,""],["card","","content","Actor",1,""],[3,"label","image","alt"]],template:function(s,d){s&1&&(t(0,"div",0),o(1,"img",1),t(2,"div",2),o(3,"img",3),t(4,"h1",4),a(5," Albus Dumbledore"),n()(),t(6,"div",5),o(7,"img",3),t(8,"h1",6),a(9,"Harry Potter"),n()()(),t(10,"div",7),h(11,V,19,8,"div",8),n()),s&2&&(m(11),p("ngForOf",d.staff))},dependencies:[x,E,T],styles:[".img[_ngcontent-%COMP%]{filter:grayscale(66%)}.container[_ngcontent-%COMP%]{margin-top:15rem}.map[_ngcontent-%COMP%]{position:absolute;top:5;width:100vw;height:55vh;object-fit:cover}.name_container[_ngcontent-%COMP%]{position:relative;display:inline-block;overflow:hidden;top:90px;left:490px;transform:translateZ(-60%,-60%);animation:_ngcontent-%COMP%_slideStep 4s steps(10,end) infinite}.name_container1[_ngcontent-%COMP%]{position:relative;display:inline-block;overflow:hidden;left:50px;transform:translateZ(50%,50%);animation:_ngcontent-%COMP%_slideStep1 8s steps(10,end) infinite}.title[_ngcontent-%COMP%], .title1[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#0c0b0b;font-size:1rem;line-height:13px;text-shadow:2px 2px 4px rgba(0,0,0,.5);text-align:center;font-family:almendra;white-space:no-wrap}@keyframes _ngcontent-%COMP%_slideStep{0%{transform:translate(0);opacity:3}10%{transform:translate(-10%)}to{transform:translate(-50%);opacity:0}}@keyframes _ngcontent-%COMP%_slideStep1{0%{transform:translate(0);opacity:3}10%{transform:translate(10%)}to{transform:translate(100%)}}"]});let i=e;return i})();function X(i,e){if(i&1&&(t(0,"div",5),o(1,"img",6),t(2,"div",7)(3,"div",8)(4,"p",9),a(5),n(),t(6,"p",10),a(7),n()()()()),i&2){let l=e.$implicit;m(),p("src",l.image,y),m(4),g(l.name),m(2),g(l.description)}}var B=(()=>{let e=class e{constructor(r){this.harryPotterService=r,this.spells=[]}ngOnInit(){this.getSpell()}getSpell(){this.harryPotterService.getSpells().subscribe(r=>{this.spells=r,console.log(this.spells)})}};e.\u0275fac=function(s){return new(s||e)(f(b))},e.\u0275cmp=c({type:e,selectors:[["app-hechizos-page"]],decls:6,vars:1,consts:[[1,"flex","justify-center","items-center"],[1,"text-6xl","text-center","titleSection","subtle-bounce"],["src","assets/images/leviosa1.png",1,"spell","w-56","subtle-bounce"],[1,"flex","flex-column","md:flex-row","flex-wrap","justify-evenly","gap-5","card","w-5/6","md:ml-20","ml-9"],["class","relative w-44 h-72 bg-fuchsia-100 rounded-md border-dotted border-2 border-fuchsia-400 mx-auto cursor-pointer animate-fade-in-up shadow-md",4,"ngFor","ngForOf"],[1,"relative","w-44","h-72","bg-fuchsia-100","rounded-md","border-dotted","border-2","border-fuchsia-400","mx-auto","cursor-pointer","animate-fade-in-up","shadow-md"],[1,"absolute","inset-0","w-full","h-48","object-cover","rounded-md",3,"src"],[1,"absolute","bottom-0","left-0","w-full","bg-fuchsia-50","bg-opacity-75","py-0"],[1,"text-fuchsia-500","text-center"],[1,"text-xl","text-black","font-bold","spell"],[1,"description","p-1","font-bold","items-center"]],template:function(s,d){s&1&&(t(0,"div",0)(1,"h1",1),a(2,"Spells"),n(),o(3,"img",2),n(),t(4,"div",3),h(5,X,8,3,"div",4),n()),s&2&&(m(5),p("ngForOf",d.spells))},dependencies:[x],styles:[".spell[_ngcontent-%COMP%]{filter:drop-shadow(0 0 .75rem rgb(191,97,249))}@keyframes _ngcontent-%COMP%_subtle-bounce{0%,to{transform:translateY(0)}50%{transform:translateY(-5px)}}.subtle-bounce[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_subtle-bounce 2s ease-in-out infinite}.spell[_ngcontent-%COMP%], .titleSection[_ngcontent-%COMP%]{filter:drop-shadow(0 0 .75rem rgb(186,81,251));font-family:Dancing Script,cursive}.description[_ngcontent-%COMP%]{font-size:.7rem;line-height:9px}"]});let i=e;return i})();var te=()=>["/estudiantes"],ie=()=>["/hechizos"],ae=()=>["/maestros"],W=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=c({type:e,selectors:[["ini-section1"]],decls:19,vars:6,consts:[[1,"w-full","bg-fuchsia-50","text-center","p-2"],[1,"text-black","tituloSection1","text-2xl"],[1,"flex","flex-column","md:flex-row","flex-wrap","justify-evenly","gap-5","card"],[1,"relative","w-32","h-32","bg-fuchsia-100","rounded-md","border-dotted","border-2","border-fuchsia-400","mx-auto","cursor-pointer","animate-fade-in-up","shadow-md",3,"routerLink"],["src","assets/images/harry.jpg",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md"],[1,"absolute","bottom-0","left-0","w-full","h-7","bg-fuchsia-50","bg-opacity-75","py-1"],[1,"text-fuchsia-600","text-lg"],[1,"relative","w-32","h-32","bg-fuchsia-100","rounded-md","border-dotted","border-2","border-fuchsia-400","mx-auto","cursor-pointer","animate-fade-in-up",3,"routerLink"],["src","assets/images/olomora.jpg",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md"],[1,"absolute","bottom-0","h-7","left-0","w-full","bg-fuchsia-50","bg-opacity-75","py-1"],["src","assets/images/maestros.jpg",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md"]],template:function(s,d){s&1&&(t(0,"div",0)(1,"p",1),a(2,"Encuentra lo que quieras sobre el mundo m\xE1gico de Harry Potter"),n(),t(3,"div",2)(4,"div",3),o(5,"img",4),t(6,"div",5)(7,"p",6),a(8,"Estudiantes"),n()()(),t(9,"div",7),o(10,"img",8),t(11,"div",9)(12,"p",6),a(13,"Hechizos"),n()()(),t(14,"div",7),o(15,"img",10),t(16,"div",5)(17,"p",6),a(18,"Maestros"),n()()()()()),s&2&&(m(4),p("routerLink",w(3,te)),m(5),p("routerLink",w(4,ie)),m(5),p("routerLink",w(5,ae)))},dependencies:[C],styles:[".tituloSection1[_ngcontent-%COMP%], .estu-titulo[_ngcontent-%COMP%]{font-family:Dancing Script,cursive}.card[_ngcontent-%COMP%]{filter:drop-shadow(0 0 .75rem rgb(214,158,250))}"]});let i=e;return i})();var G=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=c({type:e,selectors:[["section-ini2"]],decls:19,vars:0,consts:[[1,"mb-8"],[1,"mt-12","ml-2","mr-2"],[1,"text-center","text-3xl","title-sec"],[1,"flex","justify-center","justify-items-center","ml-2","mr-2"],["src",z`assets/images/peli2025.mp4`,"width","650","height","350"],[1,"information-film","flex","flex-col","justify-evenly","lg:flex-row","md:flex-row","mt-5","ml-2","animate-fade-in-up"],["src","assets/images/hedwig.png",1,"w-56","hedwig","relative","z-0","rounded-lg","transition-all","duration-300","hover:scale-110","items-center","ml-20","md:ml-2","lg:ml-2"],[1,"flex","flex-col","mt-3","ml-2"],[1,"text-4xl","text-transparent","bg-clip-text","bg-gradient-to-r","to-fuchsia-200","from-fuchsia-500","font-extrabold"],[1,"text-2xl"],[1,"mr-3","text-md","text-justify","w-96"]],template:function(s,d){s&1&&(t(0,"div",0)(1,"div",1)(2,"p",2),a(3,"Esperamos con much\xEDsima ilusi\xF3n "),o(4,"br"),a(5,"la nueva pelicula"),n()(),t(6,"div",3),o(7,"iframe",4),n(),t(8,"div",5),o(9,"img",6),t(10,"div",7)(11,"p",8),a(12,"Harry Potter "),o(13,"br"),a(14,"y el Legado Maldito"),n(),t(15,"p",9),a(16,"Sinopsis"),n(),t(17,"span",10),a(18," Harry Potter y el legado maldito es una obra de teatro de J.K. Rowling, Jack Thorne y John Tiffany que ha sido un gran \xE9xito en Broadway y en el escenario del West End. La obra contin\xFAa con la hostoria de Harry Potter y las Reliquias de la Muerte y sigue la relaci\xF3n entre el hijo de Harry y el hijo de Draco: Albus Potter y Scorpius Malfoy, respectivamente. El rumor dice que Warner Bros adaptar\xE1 la obra en una pel\xEDcula y traer\xE1 de vuelta a Emma Watson, Rupert Grint y Daniel Radcliffe para retratar a sus personajes originales e ic\xF3nicos."),n()()()())},styles:[".title-sec[_ngcontent-%COMP%]{font-family:Dancing Script}.hedwig[_ngcontent-%COMP%]{filter:blur(1px)}.hedwig[_ngcontent-%COMP%]:hover{filter:blur(0px);filter:drop-shadow(0 0 .75rem rgb(191,97,249))}"]});let i=e;return i})();var K=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=c({type:e,selectors:[["section3-ini"]],decls:46,vars:0,consts:[[1,"flex","flex-wrap","justify-center","bg-fuchsia-200","text-black","p-3"],[1,"text-2xl","mt-5","text-center","title3","mb-8"],[1,"flex","flex-column","md:flex-row","flex-wrap","gap-5","card"],[1,"relative","w-36","h-40","bg-fuchsia-100","rounded-md","border-dotted","border-2","border-fuchsia-400","mx-auto","cursor-pointer","animate-fade-in-up","shadow-md"],["src","assets/images/libro4.jpg",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md","filter","grayscale"],[1,"absolute","bottom-0","left-0","w-full","h-9","bg-fuchsia-50","bg-opacity-75","py-0"],[1,"text-fuchsia-600","text-center"],["href","https://amzn.eu/d/ebQT6AL",1,"enlace","text-xs","p-1","font-bold"],[1,"flex","flex-column","md:flex-row","flex-wrap","justify-evenly","gap-5","card"],["src","assets/images/libro2.jpg",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md"],["href","https://amzn.eu/d/fqOibWN",1,"enlace","text-xs","p-1","font-bold"],["src","assets/images/libro3.jpg",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md"],["href","https://amzn.eu/d/6Nd5gkA",1,"enlace","text-xs","p-1","font-bold"],["src","assets/images/libro.jpg",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md"],["src","assets/images/libro1.jpg",1,"absolute","inset-0","w-full","h-full","object-cover","rounded-md"],["href","https://amzn.eu/d/chiK0O7",1,"enlace","text-xs","p-1","font-bold"]],template:function(s,d){s&1&&(t(0,"div",0)(1,"span",1),a(2,"Si todavia no has ningun libro de la trilogia, no te preocupes!!"),o(3,"br"),a(4," Aqui tienes por d\xF3nde empezar!!"),n(),t(5,"div")(6,"div",2)(7,"div",3),a(8," > "),o(9,"img",4),t(10,"div",5)(11,"p",6)(12,"a",7),a(13,"Harry Potter y la Piedra filosofal"),n()()()(),t(14,"div",8)(15,"div",3),a(16," > "),o(17,"img",9),t(18,"div",5)(19,"p",6)(20,"a",10),a(21,"Harry Potter y la C\xE1mara Secreta"),n()()()(),t(22,"div",8)(23,"div",3),a(24," > "),o(25,"img",11),t(26,"div",5)(27,"p",6)(28,"a",12),a(29,"Harry Potter y el prisionero de Azkaban"),n()()()(),t(30,"div",8)(31,"div",3),a(32," > "),o(33,"img",13),t(34,"div",5)(35,"p",6)(36,"a",12),a(37,"Harry Potter y el C\xE1liz de Fuego"),n()()()(),t(38,"div",8)(39,"div",3),a(40," > "),o(41,"img",14),t(42,"div",5)(43,"p",6)(44,"a",15),a(45,"Harry Potter y La Orden del F\xE9nix"),n()()()()()()()()()()())},styles:[".title3[_ngcontent-%COMP%]{font-family:Dancing Script,cursive}"]});let i=e;return i})();var re=()=>["/magos"],Z=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=c({type:e,selectors:[["app-inicio"]],decls:20,vars:2,consts:[[1,"flex","flex-col","justify-center","items-center","w-full","bg-fuchsia-200","text-sm","text-center","text-black","font-bold"],[1,"text-xl","titulo1"],[1,"w-full","intro-titulo","grid","grid-cols-1","md:grid-cols-2","mb-2","slide-in-left"],["src","assets/images/hodwarts.png",1,"hodwarts","animate-slide-in-left"],[1,"text-sm","mt-7","ml-2","mr-2"],[1,"text-4xl","text-center","titulo1"],[1,"text-md","text-justify","p-3"],["src","assets/images/ordendelfenix.png",1,"w-full","h-20","object-contain","orden"],[1,"flex","justify-center","justify-items-center","mt-2"],[1,"btn-entrar","w-24","mb-3","py-2.5","px-6","text-sm","rounded-full","bg-gradient-to-r","from-fuchsia-600","via-fuchsia-500","to-fuchsia-400","shadow-lg","shadow-fuchsia-500/50","text-white","cursor-pointer","font-semibold","text-center","shadow-xs","transition-all","duration-500","hover:bg-gradient-to-l","p-2","mt-4",3,"routerLink"]],template:function(s,d){s&1&&(t(0,"div",0)(1,"p",1),a(2,"Encuentra todas las novedades en nuestra p\xE1gina"),n()(),t(3,"div",2),o(4,"img",3),t(5,"article",4)(6,"p",5),a(7,"\u2728\xA1Bienvenido a tu portal m\xE1gico!\u2728"),n(),t(8,"p",6),a(9,"Explora el fascinante mundo de Harry Potter, donde los hechizos cobran vida, los magos m\xE1s poderosos dejan su huella, y los secretos de Hogwarts te esperan. "),o(10,"br")(11,"br"),a(12,"\u{1F4DC} Descubre todo sobre: Los maestros y magos que marcaron la historia del mundo m\xE1gico. Los hechizos m\xE1s ic\xF3nicos y sus usos en el d\xEDa a d\xEDa de los magos. Las \xFAltimas novedades de las pel\xEDculas, libros y contenido especial. Prep\xE1rate para sumergirte en una aventura m\xE1gica, \xA1y recuerda que en esta web, la magia nunca termina! \u{1FA84}\u2728"),n(),o(13,"img",7),t(14,"div",8)(15,"button",9),a(16,"Entrar"),n()()()(),o(17,"ini-section1")(18,"section-ini2")(19,"section3-ini")),s&2&&(m(15),p("routerLink",w(1,re)))},dependencies:[C,W,G,K],styles:[".titulo1[_ngcontent-%COMP%]{font-family:Dancing Script,cursive}.potion[_ngcontent-%COMP%], .orden[_ngcontent-%COMP%], .hodwarts[_ngcontent-%COMP%]{filter:drop-shadow(0 0 .75rem rgb(223,181,249))}"]});let i=e;return i})();var me=[{path:"",component:Z},{path:"magos",component:U},{path:"estudiantes",component:N},{path:"profesores",component:q},{path:"hechizos",component:B}],$=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=S({type:e}),e.\u0275inj=j({imports:[M.forChild(me),M]});let i=e;return i})();var We=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=S({type:e}),e.\u0275inj=j({imports:[L,$,R]});let i=e;return i})();export{We as PotterModule};