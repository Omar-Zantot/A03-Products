"use strict";(self.webpackChunkTask=self.webpackChunkTask||[]).push([[486],{2486:(P,i,c)=>{c.r(i),c.d(i,{ProductDetailsModule:()=>D});var l=c(6208),a=c(7472),p=c(4664),t=c(4946),m=c(9862);let g=(()=>{var o;class n{constructor(e){this.http=e}getProductDetails$(e){return this.http.get(`https://dummyjson.com/products/${e}`)}}return(o=n).\u0275fac=function(e){return new(e||o)(t.LFG(m.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),n})();var u=c(6814);function h(o,n){if(1&o&&(t.ynx(0,1),t.TgZ(1,"p",2),t._uU(2),t.qZA(),t._UZ(3,"img",3),t.TgZ(4,"p",4),t._uU(5),t.qZA(),t.TgZ(6,"p",2),t._uU(7),t.qZA(),t.TgZ(8,"p",2),t._uU(9),t.qZA(),t.BQk()),2&o){const r=n.ngIf;t.xp6(2),t.Oqu(r.title),t.xp6(1),t.Q6J("src",r.thumbnail,t.LSH),t.xp6(2),t.hij("Brand: ",r.brand,""),t.xp6(2),t.hij("Category: ",r.category,""),t.xp6(2),t.hij("Avilibale Stoke: ",r.stock,"")}}let d=(()=>{var o;class n{constructor(e,s){this.activatedRoute=e,this.productDetailsService=s}ngOnInit(){this.product$=this.activatedRoute.params.pipe((0,p.w)(e=>this.productDetailsService.getProductDetails$(e?.id)))}}return(o=n).\u0275fac=function(e){return new(e||o)(t.Y36(a.gz),t.Y36(g))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-details"]],decls:2,vars:3,consts:[["style","margin-top: 5rem",4,"ngIf"],[2,"margin-top","5rem"],[2,"padding-bottom","0.6rem"],["alt","product-image",2,"width","80%","margin","auto","border-radius","14px",3,"src"],[2,"padding-bottom","9.6px"]],template:function(e,s){1&e&&(t.YNc(0,h,10,5,"ng-container",0),t.ALo(1,"async")),2&e&&t.Q6J("ngIf",t.lcZ(1,1,s.product$))},dependencies:[u.O5,u.Ov]}),n})();const v=[{path:"",component:d}];let f=(()=>{var o;class n{}return(o=n).components=[d],o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[a.Bz.forChild(v),a.Bz]}),n})(),D=(()=>{var o;class n{}return(o=n).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.m,f]}),n})()}}]);