"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var __chunk85590140_js=require("./chunk-85590140.js"),__chunk0cbc65c5_js=require("./chunk-0cbc65c5.js"),__chunk4159785c_js=require("./chunk-4159785c.js"),RxJsBuffering=function(){function n(){this.numbers=[1,2,3,4,5],this.sum=new __chunk85590140_js.Subject,this.calculation={},this.showSum=!1}return n.prototype.add=function(n){this.sum.next(n)},n.prototype.ngOnInit=function(){var n=this;this.series=this.sum.asObservable().do(function(e){return n.showSum=!1}).bufferCount(3).subscribe(function(e){n.calculation={sum:e.reduce(function(n,e){return n+e})},n.showSum=!0})},n.decorators=[{type:__chunk85590140_js.Component,args:[{template:'\n    <h3>Click three numbers to add</h3>\n    <div (click)="add(number)" class="box" *ngFor="let number of numbers">{{number}}</div>\n    <div class="sum" *ngIf="showSum">SUM: {{calculation.sum}}</div>\n  '}]}],n.ctorParameters=function(){return[]},n}(),RxJsBufferingModule=function(){function n(){}return n.decorators=[{type:__chunk85590140_js.NgModule,args:[{declarations:[RxJsBuffering],imports:[__chunk85590140_js.CommonModule,__chunk85590140_js.RouterModule.forChild([{path:"",component:RxJsBuffering}])]}]}],n.ctorParameters=function(){return[]},n}(),styles_RxJsBuffering=[],RenderType_RxJsBuffering=__chunk85590140_js.createRendererType2({encapsulation:2,styles:styles_RxJsBuffering,data:{}});function View_RxJsBuffering_1(n){return __chunk85590140_js.viewDef(0,[(n()(),__chunk85590140_js.elementDef(0,0,null,null,1,"div",[["class","box"]],null,[[null,"click"]],function(n,e,u){var _=!0,l=n.component;if("click"===e){_=!1!==l.add(n.context.$implicit)&&_}return _},null,null)),(n()(),__chunk85590140_js.textDef(1,null,["",""]))],null,function(n,e){n(e,1,0,e.context.$implicit)})}function View_RxJsBuffering_2(n){return __chunk85590140_js.viewDef(0,[(n()(),__chunk85590140_js.elementDef(0,0,null,null,1,"div",[["class","sum"]],null,null,null,null,null)),(n()(),__chunk85590140_js.textDef(1,null,["SUM: ",""]))],null,function(n,e){n(e,1,0,e.component.calculation.sum)})}function View_RxJsBuffering_0(n){return __chunk85590140_js.viewDef(0,[(n()(),__chunk85590140_js.elementDef(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),__chunk85590140_js.textDef(-1,null,["Click three numbers to add"])),(n()(),__chunk85590140_js.anchorDef(16777216,null,null,1,null,View_RxJsBuffering_1)),__chunk85590140_js.directiveDef(3,802816,null,0,__chunk85590140_js.NgForOf,[__chunk85590140_js.ViewContainerRef,__chunk85590140_js.TemplateRef,__chunk85590140_js.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),__chunk85590140_js.anchorDef(16777216,null,null,1,null,View_RxJsBuffering_2)),__chunk85590140_js.directiveDef(5,16384,null,0,__chunk85590140_js.NgIf,[__chunk85590140_js.ViewContainerRef,__chunk85590140_js.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,e){var u=e.component;n(e,3,0,u.numbers);n(e,5,0,u.showSum)},null)}function View_RxJsBuffering_Host_0(n){return __chunk85590140_js.viewDef(0,[(n()(),__chunk85590140_js.elementDef(0,0,null,null,1,"ng-component",[],null,null,null,View_RxJsBuffering_0,RenderType_RxJsBuffering)),__chunk85590140_js.directiveDef(1,114688,null,0,RxJsBuffering,[],null,null)],function(n,e){n(e,1,0)},null)}var RxJsBufferingNgFactory=__chunk85590140_js.createComponentFactory("ng-component",RxJsBuffering,View_RxJsBuffering_Host_0,{},{},[]),RxJsBufferingModuleNgFactory=__chunk85590140_js.createNgModuleFactory(RxJsBufferingModule,[],function(n){return __chunk85590140_js.moduleDef([__chunk85590140_js.moduleProvideDef(512,__chunk85590140_js.ComponentFactoryResolver,__chunk85590140_js.CodegenComponentFactoryResolver,[[8,[RxJsBufferingNgFactory]],[3,__chunk85590140_js.ComponentFactoryResolver],__chunk85590140_js.NgModuleRef]),__chunk85590140_js.moduleProvideDef(4608,__chunk85590140_js.NgLocalization,__chunk85590140_js.NgLocaleLocalization,[__chunk85590140_js.LOCALE_ID,[2,__chunk85590140_js.DEPRECATED_PLURAL_FN]]),__chunk85590140_js.moduleProvideDef(512,__chunk85590140_js.CommonModule,__chunk85590140_js.CommonModule,[]),__chunk85590140_js.moduleProvideDef(512,__chunk85590140_js.RouterModule,__chunk85590140_js.RouterModule,[[2,__chunk85590140_js.ROUTER_FORROOT_GUARD],[2,__chunk85590140_js.Router]]),__chunk85590140_js.moduleProvideDef(512,RxJsBufferingModule,RxJsBufferingModule,[]),__chunk85590140_js.moduleProvideDef(1024,__chunk85590140_js.ROUTES,function(){return[[{path:"",component:RxJsBuffering}]]},[])])});exports.RxJsBufferingModuleNgFactory=RxJsBufferingModuleNgFactory;
