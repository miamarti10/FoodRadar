!function(){function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function t(n,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{oAw3:function(o,i,c){"use strict";c.r(i),c.d(i,"ScannerPageModule",(function(){return k}));var e=c("ofXK"),a=c("3Pt+"),r=c("TEn/"),b=c("tyNb"),s=c("fXoL"),u=c("Z2Br"),l=c("WdVq");function f(n,t){if(1&n){var o=s.Mb();s.Lb(0,"ion-button",9),s.Tb("click",(function(){return s.ec(o),s.Vb().reset()})),s.Jb(1,"ion-icon",20),s.ic(2," \xa0Reset\n"),s.Kb()}}function d(n,t){if(1&n){var o=s.Mb();s.Lb(0,"ion-button",9),s.Tb("click",(function(){return s.ec(o),s.Vb().stopScan()})),s.Jb(1,"ion-icon",21),s.ic(2," \xa0Stop Me!\n"),s.Kb()}}function h(n,t){if(1&n&&(s.Lb(0,"ion-card"),s.Lb(1,"ion-card-header"),s.Lb(2,"ion-card-title"),s.ic(3," QR Code"),s.Kb(),s.Kb(),s.Lb(4,"ion-card-content"),s.ic(5),s.Kb(),s.Kb()),2&n){var o=s.Vb();s.yb(5),s.kc("\n",o.scanResult,"\n")}}var g,p,v,y=function(){return["/user-tabs/profile"]},L=[{path:"",component:(g=function(){function o(t,i,c,e){n(this,o),this.fs=t,this.toastCtrl=i,this.loadingCtrl=c,this.barcodeScanner=e,this.scanActive=!1,this.scanResult=null}var i,c,e;return i=o,(c=[{key:"ngOnInit",value:function(){}},{key:"scan",value:function(){var n=this;this.data=null,this.barcodeScanner.scan().then((function(t){console.log("Barcode data",t),n.data=t})).catch((function(n){console.log("Error",n)}))}},{key:"onLogout",value:function(){this.fs.logout()}},{key:"reset",value:function(){this.scanResult=null}},{key:"stopScan",value:function(){this.scanActive=!1}}])&&t(i.prototype,c),e&&t(i,e),o}(),g.\u0275fac=function(n){return new(n||g)(s.Ib(u.a),s.Ib(r.J),s.Ib(r.E),s.Ib(l.a))},g.\u0275cmp=s.Cb({type:g,selectors:[["app-scanner"]],decls:26,vars:7,consts:[[1,"fondo"],["no-padding","","no-margin","",2,"float","left"],["src","assets/icon/avatar.png",1,"avatar",3,"routerLink"],[1,"ion-text-center"],["slot","end"],["routerLink","/home",3,"click"],["name","log-out-outline","slot","icon-only"],[3,"fullscreen"],["src","assets/icon/codigo.jpg",2,"width","350px"],["color","warning",3,"click"],["name","barcode-outline"],["color","warning",3,"click",4,"ngIf"],["routerLink","/recipes","color","warning"],["name","receipt-outline"],[1,"scanner"],["width","100%",3,"hidden"],["video",""],["hidden",""],["canvas",""],[4,"ngIf"],["name","refresh-outline"],["name","stop-circle-outline"]],template:function(n,t){1&n&&(s.Lb(0,"ion-header"),s.Lb(1,"ion-toolbar",0),s.Lb(2,"div",1),s.Jb(3,"img",2),s.Kb(),s.Lb(4,"ion-title",3),s.ic(5,"Scanner"),s.Kb(),s.Lb(6,"ion-buttons",4),s.Lb(7,"ion-button",5),s.Tb("click",(function(){return t.onLogout()})),s.Jb(8,"ion-icon",6),s.Kb(),s.Kb(),s.Kb(),s.Kb(),s.Lb(9,"ion-content",7),s.Lb(10,"ion-card"),s.Jb(11,"ion-img",8),s.Lb(12,"ion-button",9),s.Tb("click",(function(){return t.scan()})),s.Jb(13,"ion-icon",10),s.ic(14," \xa0Scan Me! "),s.Kb(),s.hc(15,f,3,0,"ion-button",11),s.Lb(16,"ion-button",12),s.Jb(17,"ion-icon",13),s.ic(18," \xa0Recipes\n"),s.Kb(),s.hc(19,d,3,0,"ion-button",11),s.Lb(20,"div",14),s.Jb(21,"video",15,16),s.Jb(23,"canvas",17,18),s.Kb(),s.Kb(),s.hc(25,h,6,1,"ion-card",19),s.Kb()),2&n&&(s.yb(3),s.ac("routerLink",s.cc(6,y)),s.yb(6),s.ac("fullscreen",!0),s.yb(6),s.ac("ngIf",t.scanResult),s.yb(4),s.ac("ngIf",t.scanActive),s.yb(2),s.ac("hidden",!t.scanActive),s.yb(4),s.ac("ngIf",t.scanResult))},directives:[r.n,r.B,r.H,b.h,r.A,r.e,r.d,r.o,r.l,r.f,r.p,e.i,r.h,r.j,r.g],styles:[".fondo[_ngcontent-%COMP%]{--background:#37784e;--color:#fff}.fondo[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{margin-left:2vh;width:32px;cursor:pointer}ion-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding-bottom:3vh}ion-card[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:30vh}ion-card[_ngcontent-%COMP%]   .scanner[_ngcontent-%COMP%]{width:40vh}"]}),g)}],m=((v=function t(){n(this,t)}).\u0275mod=s.Gb({type:v}),v.\u0275inj=s.Fb({factory:function(n){return new(n||v)},imports:[[b.i.forChild(L)],b.i]}),v),k=((p=function t(){n(this,t)}).\u0275mod=s.Gb({type:p}),p.\u0275inj=s.Fb({factory:function(n){return new(n||p)},imports:[[e.b,a.f,r.C,m]]}),p)}}])}();