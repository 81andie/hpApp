import{a as z,g as H,h as O,i as w,j as S,l as D}from"./chunk-T2W5BAF7.js";import{$a as s,Da as a,Ea as g,S as j,T as C,Ua as h,Wa as l,X as I,Za as i,_a as r,_b as y,ba as d,ca as _,cc as F,ib as m,ob as c,pb as u,qb as v,tb as E,za as P}from"./chunk-QSJJF4FR.js";var x=(()=>{let t=class t{constructor(n){this.http=n,this.apiUrl="https://hp-api.onrender.com/api/characters",this.apiUrlEstudiantes="https://hp-api.onrender.com/api/characters/students",this.apiUrlTeachers="https://hp-api.onrender.com/api/characters/staff",this.apiUrlSpells="https://hp-api.onrender.com/api/spells"}getCharacters(){return this.http.get(this.apiUrl)}getStudents(){return this.http.get(this.apiUrlEstudiantes)}getStaff(){return this.http.get(this.apiUrlTeachers)}getSpells(){return this.http.get(this.apiUrlSpells)}};t.\u0275fac=function(o){return new(o||t)(I(z))},t.\u0275prov=j({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function A(e,t){if(e&1&&(i(0,"div",9)(1,"p-card",10)(2,"div",11)(3,"div",12),s(4,"img",13)(5,"img",14),r(),i(6,"div",15)(7,"p",16),c(8),r()()()()()),e&2){let p=t.$implicit;a(),m("header",p.name),m("subheader",p.actor),a(3),l("src",p.image,P),a(4),u(p.house)}}var U=(()=>{let t=class t{constructor(n){this.harryPotterServicios=n,this.magias=[]}ngOnInit(){this.harryPotterServicios.getCharacters().subscribe(n=>{this.magias=n.slice(0,16),console.log(this.magias)})}};t.\u0275fac=function(o){return new(o||t)(g(x))},t.\u0275cmp=d({type:t,selectors:[["app-magos-page"]],decls:12,vars:1,consts:[[1,"container_map"],["src","https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/harry-potter-the-marauders-map-vintage-on-canvas-triptych-1-left-design-turnpike.jpg",1,"map"],[1,"name_container"],["src","https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/scroll.svg",1,"merodeador"],[1,"title"],[1,"name_container1"],[1,"title1"],[1,"grid","mt-3","p-4","container"],["class","col-12 md:col-6 lg:col-4 flex mt-3",4,"ngFor","ngForOf"],[1,"col-12","md:col-6","lg:col-4","flex","mt-3"],[1,"w-full","h-full",3,"header","subheader"],[1,"flex","flex-row","align-items-center"],[1,"flex","align-items-center"],["alt","Card",1,"w-4rem","h-6rem",3,"src"],["src","https://i.pinimg.com/originals/9a/a1/58/9aa15882779404d92ff9166d06022388.jpg",1,"h-4rem","w-4rem","p-2"],[1,"mt-2"],[1,"ml-2","text-2xl"]],template:function(o,f){o&1&&(i(0,"div",0),s(1,"img",1),i(2,"div",2),s(3,"img",3),i(4,"h1",4),c(5,"Harry Potter"),r()(),i(6,"div",5),s(7,"img",3),i(8,"h1",6),c(9,"Hermione Granger"),r()()(),i(10,"div",7),h(11,A,9,4,"div",8),r()),o&2&&(a(11),l("ngForOf",f.magias))},dependencies:[y,w],styles:[".img[_ngcontent-%COMP%]{filter:grayscale(66%)}.container[_ngcontent-%COMP%]{margin-top:15rem}.map[_ngcontent-%COMP%]{position:absolute;top:5;width:100vw;height:55vh;object-fit:cover}.name_container[_ngcontent-%COMP%]{position:relative;display:inline-block;overflow:hidden;top:90px;left:490px;transform:translateZ(-60%,-60%);animation:_ngcontent-%COMP%_slideStep 4s steps(10,end) infinite}.name_container1[_ngcontent-%COMP%]{position:relative;display:inline-block;overflow:hidden;left:50px;transform:translateZ(50%,50%);animation:_ngcontent-%COMP%_slideStep1 8s steps(10,end) infinite}.title[_ngcontent-%COMP%], .title1[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#0c0b0b;font-size:1rem;line-height:13px;text-shadow:2px 2px 4px rgba(0,0,0,.5);text-align:center;font-family:almendra;white-space:no-wrap}@keyframes _ngcontent-%COMP%_slideStep{0%{transform:translate(0);opacity:3}10%{transform:translate(-10%)}to{transform:translate(-50%);opacity:0}}@keyframes _ngcontent-%COMP%_slideStep1{0%{transform:translate(0);opacity:3}10%{transform:translate(10%)}to{transform:translate(100%)}}"]});let e=t;return e})();function B(e,t){if(e&1&&(i(0,"div",4)(1,"div",5)(2,"p",6),c(3),r()(),i(4,"div",7),s(5,"img",8),i(6,"p",9),c(7),r()(),i(8,"div",7)(9,"p",10),c(10),s(11,"br"),c(12),r()()()),e&2){let p=t.$implicit;a(3),u(p.house),a(2),m("src",p.image,P),a(2),u(p.name),a(3),v("",p.ancestry||"not information",","),a(2),v(" ",p.dateOfBirth||"not found","")}}var N=(()=>{let t=class t{constructor(n){this.harryPotterService=n,this.estudents=[]}ngOnInit(){this.harryPotterService.getStudents().subscribe(n=>{this.estudents=n.slice(0,10),console.log(this.estudents)})}};t.\u0275fac=function(o){return new(o||t)(g(x))},t.\u0275cmp=d({type:t,selectors:[["app-estudiantes-hogwarts-page"]],decls:4,vars:1,consts:[[1,"w-full","mt-2","opacity-90"],["src","https://ey49netbj7p.exactdn.com/wp-content/2020/09/harry-potter-hogwarts-legacy-salao-principal-redes-sociais.jpg",1,"w-full","h-60","object-cover","img"],[1,"flex","flex-row","flex-wrap","justify-center","justify-items-center","gap-3","rounded-lg","mt-5"],["class","background w-72 h-72 rounded-t-lg",4,"ngFor","ngForOf"],[1,"background","w-72","h-72","rounded-t-lg"],[1,"flex","flex-colum","w-full","justify-center","mt-12"],[1,"opacity-100","text-2xl","text-violet-300"],[1,"flex","flex-colum","w-full","justify-center","mt-1"],[1,"w-12","h-22","object-cover","rounded-full",3,"src"],[1,"opacity-100","text-2xl","text-yellow-400","text-wrap"],[1,"text-xl"]],template:function(o,f){o&1&&(i(0,"div",0),s(1,"img",1),r(),i(2,"div",2),h(3,B,13,5,"div",3),r()),o&2&&(a(3),l("ngForOf",f.estudents))},dependencies:[y],styles:[".background[_ngcontent-%COMP%]{border:1px solid goldenrod;font-family:almendra;background-image:url(https://img.freepik.com/vector-gratis/fondo-decorativo-elegante-borde-dorado_1048-12810.jpg?t=st=1731769703~exp=1731773303~hmac=3593416d3b651a4223e04687c86f476b81cf469f79a0cd5b1203a2124d3666a7&w=360);background-repeat:no-repeat;background-size:cover;object-fit:contain;opacity:.1;transition-duration:1.5s}.background[_ngcontent-%COMP%]:hover{opacity:1;background-image:url(https://img.freepik.com/vector-gratis/plantilla-marco-lujo-dorado-degradado_23-2149051693.jpg?t=st=1731770187~exp=1731773787~hmac=c9a81ab38814bfe7f7e366463b73de9bd984349f754f2de3e2c578fa74d0576f&w=740)}"]});let e=t;return e})();function J(e,t){if(e&1&&(i(0,"div",7)(1,"p-card",9)(2,"div",7)(3,"div",7)(4,"div",7)(5,"p-chip"),s(6,"img",10),c(7),r(),i(8,"p-chip"),s(9,"img",11),c(10),r(),i(11,"p-chip"),s(12,"img",12),c(13),r(),i(14,"p-chip"),s(15,"img",13),c(16),r()(),i(17,"p",14),s(18,"p-chip",15),r()()()()()),e&2){let p=t.$implicit;a(),m("subheader",p.name),a(6),u(p.house),a(3),u(p.ancestry||"not information"),a(3),v("",p.yearOfBirth||"not found"," "),a(3),v("",p.wand.wood||"not found"," "),a(2),m("label",p.actor),m("image",p.image),m("alt",p.name)}}var Z=(()=>{let t=class t{constructor(n){this.harryPotterService=n,this.staff=[]}ngOnInit(){this.harryPotterService.getStaff().subscribe(n=>{this.staff=n.slice(0,10),console.log(this.staff)})}};t.\u0275fac=function(o){return new(o||t)(g(x))},t.\u0275cmp=d({type:t,selectors:[["app-hogwarts-profes-page"]],decls:12,vars:1,consts:[[1,"container_map"],["src","https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/harry-potter-the-marauders-map-vintage-on-canvas-triptych-1-left-design-turnpike.jpg",1,"map"],[1,"name_container"],["src","https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/scroll.svg",1,"merodeador"],[1,"title"],[1,"name_container1"],[1,"title1"],[1,""],["class","",4,"ngFor","ngForOf"],["header","Hogwarts Staff",1,"letters",3,"subheader"],["src","https://cdn4.iconfinder.com/data/icons/harry-potter/100/final_collection-17-1024.png",1,""],["src","https://cdn4.iconfinder.com/data/icons/medical-and-health-33/100/sangue3-1024.png",1,""],["src","https://cdn0.iconfinder.com/data/icons/ie_yummy/128/cake_13.png",1,""],["src","https://cdn2.iconfinder.com/data/icons/harry-potter-colour-collection/60/19_-_Harry_Potter_-_Colour_-_Harrys_Wand-1024.png",1,""],["card","","content","Actor",1,""],[3,"label","image","alt"]],template:function(o,f){o&1&&(i(0,"div",0),s(1,"img",1),i(2,"div",2),s(3,"img",3),i(4,"h1",4),c(5," Albus Dumbledore"),r()(),i(6,"div",5),s(7,"img",3),i(8,"h1",6),c(9,"Harry Potter"),r()()(),i(10,"div",7),h(11,J,19,8,"div",8),r()),o&2&&(a(11),l("ngForOf",f.staff))},dependencies:[y,w,S],styles:[".img[_ngcontent-%COMP%]{filter:grayscale(66%)}.container[_ngcontent-%COMP%]{margin-top:15rem}.map[_ngcontent-%COMP%]{position:absolute;top:5;width:100vw;height:55vh;object-fit:cover}.name_container[_ngcontent-%COMP%]{position:relative;display:inline-block;overflow:hidden;top:90px;left:490px;transform:translateZ(-60%,-60%);animation:_ngcontent-%COMP%_slideStep 4s steps(10,end) infinite}.name_container1[_ngcontent-%COMP%]{position:relative;display:inline-block;overflow:hidden;left:50px;transform:translateZ(50%,50%);animation:_ngcontent-%COMP%_slideStep1 8s steps(10,end) infinite}.title[_ngcontent-%COMP%], .title1[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#0c0b0b;font-size:1rem;line-height:13px;text-shadow:2px 2px 4px rgba(0,0,0,.5);text-align:center;font-family:almendra;white-space:no-wrap}@keyframes _ngcontent-%COMP%_slideStep{0%{transform:translate(0);opacity:3}10%{transform:translate(-10%)}to{transform:translate(-50%);opacity:0}}@keyframes _ngcontent-%COMP%_slideStep1{0%{transform:translate(0);opacity:3}10%{transform:translate(10%)}to{transform:translate(100%)}}"]});let e=t;return e})();function V(e,t){if(e&1&&(i(0,"div",1)(1,"p-card",3)(2,"p-chip"),s(3,"img",4),c(4),r()()()),e&2){let p=t.$implicit;a(),m("header",p.name),a(3),v(" ",p.description," ")}}var $=(()=>{let t=class t{constructor(n){this.harryPotterService=n,this.spells=[]}ngOnInit(){this.harryPotterService.getSpells().subscribe(n=>{this.spells=n,console.log(this.spells)})}};t.\u0275fac=function(o){return new(o||t)(g(x))},t.\u0275cmp=d({type:t,selectors:[["app-hechizos-page"]],decls:3,vars:1,consts:[[1,"w-full","img"],[1,""],["class","",4,"ngFor","ngForOf"],[1,"",3,"header"],["src","https://cdn2.iconfinder.com/data/icons/harrypotter/trash-full.png",1,""]],template:function(o,f){o&1&&(s(0,"div",0),i(1,"div",1),h(2,V,5,2,"div",2),r()),o&2&&(a(2),l("ngForOf",f.spells))},dependencies:[y,w,S],styles:[".img[_ngcontent-%COMP%]{background-image:url(https://static.demilked.com/wp-content/uploads/2016/01/colorful-spell-harry-potter-magic-books-gabriel-picolo-kun-12.jpg);background-size:cover;background-repeat:no-repeat;background-position:top;object-fit:contain}"]});let e=t;return e})();var Q=()=>["/magos"],q=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["app-inicio"]],decls:10,vars:2,consts:[[1,"flex","justify-center","justify-items-center","mt-2"],[1,"btn-entrar","mb-3",3,"routerLink"],[1,"fog"],[1,"absolute-bg"],[1,"container-logo","flex","justify-center","items-center"],["src","https://i.ibb.co/7QJSPjF/logo-potter-2.png",1,"logo","mt-40"],[1,"fog-container"],[1,"fog-img","fog-img-first"],[1,"fog-img","fog-img-second"]],template:function(o,f){o&1&&(i(0,"div",0)(1,"button",1),c(2,"Entrar"),r()(),i(3,"section",2)(4,"div",3)(5,"div",4),s(6,"img",5),r()(),i(7,"div",6),s(8,"div",7)(9,"div",8),r()()),o&2&&(a(),l("routerLink",E(1,Q)))},dependencies:[H],styles:[".absolute-bg[_ngcontent-%COMP%]{position:absolute;height:100%;width:100%;z-index:0;background:url(https://wallpapercave.com/wp/wp3776017.jpg);overflow:hidden;background-repeat:no-repeat;background-size:cover}@keyframes _ngcontent-%COMP%_animateImage{0%{opacity:0%;filter:drop-shadow(0px 0px 0px transparent)}20%{opacity:40%;filter:drop-shadow(0px 0px 0px transparent)}30%{opacity:50%;filter:drop-shadow(0px 0px 0px transparent)}50%{opacity:55%;filter:drop-shadow(0px 10px 0px transparent)}90%{opacity:70%;filter:drop-shadow(30px 20px 4px #e2cc4f)}90%{opacity:80%;filter:drop-shadow(30px 20px 4px #060606)}to{opacity:90%;filter:drop-shadow(20px 10px 4px transparent)}}.logo[_ngcontent-%COMP%]{width:30%;animation:_ngcontent-%COMP%_animateImage 8s ease forwards}.fog[_ngcontent-%COMP%]{position:relative;height:100vh;width:100%;background:#fff}.fog-container[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;overflow:hidden;z-index:1}.fog-img[_ngcontent-%COMP%]{position:absolute;height:100vh;width:300vw;z-index:2}.fog-img-first[_ngcontent-%COMP%]{background:url(https://i.ibb.co/SV6zbPG/fog-1.png);background-repeat:repeat-x;background-size:contain;background-position:center;animation:_ngcontent-%COMP%_marquee 60s linear forwards}.fog-img-second[_ngcontent-%COMP%]{background:url(https://i.ibb.co/gVDXDJM/fog-2.png);background-repeat:repeat-x;background-size:contain;background-position:center;animation:_ngcontent-%COMP%_marquee 20s linear forwards}@keyframes _ngcontent-%COMP%_marquee{0%{transform:translateZ(0);opacity:90%}to{transform:translate3d(-300vw,0,0);opacity:0}}.btn-entrar[_ngcontent-%COMP%]{width:100px;height:30px;background-color:#67eaea88;font-weight:bolder;border-radius:15px;color:#000}.button[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:30px}"]});let e=t;return e})();var R=[{path:"",component:q},{path:"magos",component:U},{path:"estudiantes",component:N},{path:"profesores",component:Z},{path:"hechizos",component:$}],L=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=_({type:t}),t.\u0275inj=C({imports:[O.forChild(R),O]});let e=t;return e})();var _t=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=_({type:t}),t.\u0275inj=C({imports:[F,L,D]});let e=t;return e})();export{_t as PotterModule};
