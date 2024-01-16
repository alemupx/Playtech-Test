import{$ as Ve,Aa as D,Ba as Fe,Ca as Oe,Da as Ie,Ea as c,Fa as l,G as Ce,Ga as b,Ha as xe,Ia as p,Ja as _,K as J,Ka as Q,L as De,La as h,M as B,Ma as Pe,Na as G,O as k,Oa as $,P as M,Ra as I,S as w,U as E,W as A,X as S,Y as v,Ya as Te,Z as W,Za as ee,_ as be,a as g,b as V,db as Ne,ea as Me,hb as ke,j as pe,jb as je,k as ge,la as we,ma as F,o as N,oa as L,q as me,qa as u,ra as d,sa as Ee,t as _e,ta as m,u as ye,ua as Ae,v as ve,va as O,wa as C,xa as Se,za as j}from"./chunk-HDZS4B4C.js";var Ge=(()=>{let e=class e{constructor(){this.BASE_URL="https://rickandmortyapi.com/api",this.httpClient=E(ke)}getCharacters(n=`${this.BASE_URL}/character`){return this.httpClient.get(n).pipe(Ce())}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function pt(t,e,i,n){let r=window&&!!window.document&&window.document.documentElement,o=r&&e?window:i;if(t&&(o=t&&r&&typeof t=="string"?gt(t,i.nativeElement,n):t,!o))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return o}function gt(t,e,i){return(i?window.document:e).querySelector(t)}function te(t){return t&&!t.firstChange}function mt(){return typeof window<"u"}var _t={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},yt={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"},ne=class{constructor(e=!0){this.vertical=e,this.propsMap=e?_t:yt}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}};function vt(t,e,i){return!!(t&&e||!i&&e)}function Ct({windowElement:t,axis:e}){return Dt({axis:e,isWindow:bt(t)},t)}function Dt(t,e){let i=t.isWindow||e&&!e.nativeElement?e:e.nativeElement;return V(g({},t),{container:i})}function bt(t){return["Window","global"].some(i=>Object.prototype.toString.call(t).includes(i))}function oe(t,e){return t?e.document.documentElement:null}function He(t,e){let i=wt(e);return e.isWindow?Vt(i,t,e):Mt(i,t,e)}function Vt(t,e,i){let{axis:n,container:r,isWindow:o}=i,{offsetHeightKey:s,clientHeightKey:a}=Ue(n),y=t+Be(oe(o,r),n,o),f=Re(e.nativeElement,o,s,a),T=Et(e.nativeElement,n,o)+f;return{height:t,scrolled:y,totalToScroll:T,isWindow:o}}function Mt(t,e,i){let{axis:n,container:r}=i,o=r[n.scrollTopKey()],s=r[n.scrollHeightKey()];return{height:t,scrolled:o,totalToScroll:s,isWindow:!1}}function Ue(t){return{offsetHeightKey:t.offsetHeightKey(),clientHeightKey:t.clientHeightKey()}}function wt({container:t,isWindow:e,axis:i}){let{offsetHeightKey:n,clientHeightKey:r}=Ue(i);return Re(t,e,n,r)}function Re(t,e,i,n){if(isNaN(t[i])){let r=oe(e,t);return r?r[n]:0}else return t[i]}function Et(t,e,i){let n=e.topKey();if(t.getBoundingClientRect)return t.getBoundingClientRect()[n]+Be(t,e,i)}function Be(t,e,i){let n=e.pageYOffsetKey(),r=e.scrollTopKey(),o=e.offsetTopKey();return isNaN(window.pageYOffset)?oe(i,t)[r]:t.ownerDocument?t.ownerDocument.defaultView[n]:t[o]}function At(t,e={down:0,up:0},i){let n,r;if(t.totalToScroll<=0)return!1;let o=t.isWindow?t.scrolled:t.height+t.scrolled;if(i)n=(t.totalToScroll-o)/t.totalToScroll,r=(e?.down?e.down:0)/10;else{let a=t.scrolled+(t.totalToScroll-o);n=t.scrolled/a,r=(e?.up?e.up:0)/10}return n<=r}function St(t,e){return t<e.scrolled}function Ft(t,e,i){let n=St(t,e);return{fire:At(e,i,n),scrollDown:n}}var ie=class{constructor(e){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},Object.assign(this,e)}updateScrollPosition(e){return this.lastScrollPosition=e}updateTotalToScroll(e){this.lastTotalToScroll!==e&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=e)}updateScroll(e,i){this.updateScrollPosition(e),this.updateTotalToScroll(i)}updateTriggeredFlag(e,i){i?this.triggered.down=e:this.triggered.up=e}isTriggeredScroll(e,i){return i?this.triggered.down===e:this.triggered.up===e}};function Ot(t){let{scrollContainer:e,scrollWindow:i,element:n,fromRoot:r}=t,o=Ct({axis:new ne(!t.horizontal),windowElement:pt(e,i,n,r)}),s=new ie({totalToScroll:He(n,o).totalToScroll}),a={container:o.container,throttle:t.throttle},y={up:t.upDistance,down:t.downDistance};return It(a).pipe(me(()=>ge(He(n,o))),N(f=>xt(s.lastScrollPosition,f,y)),J(({stats:f})=>s.updateScroll(f.scrolled,f.totalToScroll)),ve(({fire:f,scrollDown:T,stats:{totalToScroll:ft}})=>vt(t.alwaysCallback,f,s.isTriggeredScroll(ft,T))),J(({scrollDown:f,stats:{totalToScroll:T}})=>{s.updateTriggeredFlag(T,f)}),N(Pt))}function It(t){let e=ye(t.container,"scroll");return t.throttle&&(e=e.pipe(De(t.throttle,void 0,{leading:!0,trailing:!0}))),e}function xt(t,e,i){let{scrollDown:n,fire:r}=Ft(t,e,i);return{scrollDown:n,fire:r,stats:e}}var re={DOWN:"[NGX_ISE] DOWN",UP:"[NGX_ISE] UP"};function Pt(t){let{scrollDown:e,stats:{scrolled:i}}=t;return{type:e?re.DOWN:re.UP,payload:{currentScrollPosition:i}}}var We=(()=>{let e=class e{constructor(n,r){this.element=n,this.zone=r,this.scrolled=new m,this.scrolledUp=new m,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:n,infiniteScrollDisabled:r,infiniteScrollDistance:o}){let s=te(n),a=te(r),y=te(o),f=!a&&!this.infiniteScrollDisabled||a&&!r.currentValue||y;(s||a||y)&&(this.destroyScroller(),f&&this.setup())}setup(){mt()&&this.zone.runOutsideAngular(()=>{this.disposeScroller=Ot({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(n=>this.handleOnScroll(n))})}handleOnScroll({type:n,payload:r}){let o=n===re.DOWN?this.scrolled:this.scrolledUp;Tt(o)&&this.zone.run(()=>o.emit(r))}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)(d(F),d(Ae))},e.\u0275dir=v({type:e,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[W]});let t=e;return t})();function Tt(t){return t.observed??t.observers.length>0}var Le=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=S({type:e}),e.\u0275inj=M({});let t=e;return t})();function kt(t,e){if(t&1&&(c(0,"p")(1,"b"),h(2," Gender:"),l(),h(3),l()),t&2){let i=_();u(3),G(" ",i.character.gender,"")}}function jt(t,e){if(t&1&&(c(0,"p")(1,"b"),h(2,"Species:"),l(),h(3),l()),t&2){let i=_();u(3),G(" ",i.character.species,"")}}function Gt(t,e){if(t&1&&(c(0,"p")(1,"b"),h(2,"Type:"),l(),h(3),l()),t&2){let i=_();u(3),G(" ",i.character.type,"")}}function Ht(t,e){if(t&1&&(c(0,"p")(1,"b"),h(2,"Location:"),l(),h(3),l()),t&2){let i=_();u(3),G(" ",i.character.location.name,"")}}var $e=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=A({type:e,selectors:[["app-card"]],inputs:{character:"character"},standalone:!0,features:[I],decls:12,vars:7,consts:[[1,"card","no_selectable"],[1,"card__inner"],[1,"card__inner__front"],[1,"card__inner__img",3,"src","alt"],[1,"card__inner__front__title__container"],[1,"card__inner__title"],[1,"card__inner__back"]],template:function(r,o){r&1&&(c(0,"div",0)(1,"div",1)(2,"div",2),b(3,"img",3),c(4,"div",4)(5,"p",5),h(6),l()()(),c(7,"div",6),j(8,kt,4,1,"p")(9,jt,4,1,"p")(10,Gt,4,1,"p")(11,Ht,4,1,"p"),l()()()),r&2&&(u(3),Q("src",o.character.image,we),Q("alt",o.character.name),u(3),Pe(o.character.name),u(2),D(8,o.character.gender!="unknown"?8:-1),u(),D(9,o.character.species!="unknown"?9:-1),u(),D(10,o.character.type?10:-1),u(),D(11,o.character.location.name!="unknown"?11:-1))},styles:['.card[_ngcontent-%COMP%]{width:350px;height:500px;perspective:1000px;display:flex;justify-content:center}.card__inner[_ngcontent-%COMP%]{position:relative;width:100%;height:100%;text-align:center;transition:transform .8s;transform-style:preserve-3d}.card__inner__title[_ngcontent-%COMP%]{font-size:2em;font-weight:900;text-align:center;margin:0}.card__inner__front__title__container[_ngcontent-%COMP%]{background:rgba(255,255,255,.251);box-shadow:0 8px 32px #1f26875e;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);position:absolute;top:80%;left:50%;transform:translate(-50%,-50%);font-size:16px;padding:10px}.card__inner__img[_ngcontent-%COMP%]{height:100%;border-radius:15px}.card[_ngcontent-%COMP%]:hover   .card__inner[_ngcontent-%COMP%]{transform:rotateY(180deg)}.card__inner__front[_ngcontent-%COMP%]{position:relative;text-align:center}.card__inner__back[_ngcontent-%COMP%]{justify-content:center;gap:1em;color:#fff;background-image:url("./media/portal-BQHEFXRH.png");background-repeat:round;background-color:#34464d;font-size:25px;transform:rotateY(180deg)}.card__inner__front[_ngcontent-%COMP%], .card__inner__back[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;box-shadow:0 8px 14px #0003;border:5px solid #ffffff;border-radius:20px;width:100%;height:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;cursor:pointer}.no_selectable[_ngcontent-%COMP%]{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}']});let t=e;return t})();var Qe=(()=>{let e=class e{constructor(n,r){this._renderer=n,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(n,r){this._renderer.setProperty(this._elementRef.nativeElement,n,r)}registerOnTouched(n){this.onTouched=n}registerOnChange(n){this.onChange=n}setDisabledState(n){this.setProperty("disabled",n)}};e.\u0275fac=function(r){return new(r||e)(d(L),d(F))},e.\u0275dir=v({type:e});let t=e;return t})(),et=(()=>{let e=class e extends Qe{};e.\u0275fac=(()=>{let n;return function(o){return(n||(n=Ve(e)))(o||e)}})(),e.\u0275dir=v({type:e,features:[O]});let t=e;return t})(),ue=new w("NgValueAccessor");var Ut={provide:ue,useExisting:B(()=>Y),multi:!0};function Rt(){let t=ee()?ee().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Bt=new w("CompositionEventMode"),Y=(()=>{let e=class e extends Qe{constructor(n,r,o){super(n,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Rt())}writeValue(n){let r=n??"";this.setProperty("value",r)}_handleInput(n){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(n)}_compositionStart(){this._composing=!0}_compositionEnd(n){this._composing=!1,this._compositionMode&&this.onChange(n)}};e.\u0275fac=function(r){return new(r||e)(d(L),d(F),d(Bt,8))},e.\u0275dir=v({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&p("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[$([Ut]),O]});let t=e;return t})();var Wt=new w("NgValidators"),Lt=new w("NgAsyncValidators");function tt(t){return t!=null}function nt(t){return xe(t)?pe(t):t}function it(t){let e={};return t.forEach(i=>{e=i!=null?g(g({},e),i):e}),Object.keys(e).length===0?null:e}function rt(t,e){return e.map(i=>i(t))}function $t(t){return!t.validate}function ot(t){return t.map(e=>$t(e)?e:i=>e.validate(i))}function zt(t){if(!t)return null;let e=t.filter(tt);return e.length==0?null:function(i){return it(rt(i,e))}}function st(t){return t!=null?zt(ot(t)):null}function qt(t){if(!t)return null;let e=t.filter(tt);return e.length==0?null:function(i){let n=rt(i,e).map(nt);return _e(n).pipe(N(it))}}function at(t){return t!=null?qt(ot(t)):null}function ze(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function Kt(t){return t._rawValidators}function Yt(t){return t._rawAsyncValidators}function se(t){return t?Array.isArray(t)?t:[t]:[]}function q(t,e){return Array.isArray(t)?t.includes(e):t===e}function qe(t,e){let i=se(e);return se(t).forEach(r=>{q(i,r)||i.push(r)}),i}function Ke(t,e){return se(e).filter(i=>!q(t,i))}var K=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=st(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=at(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,i){return this.control?this.control.hasError(e,i):!1}getError(e,i){return this.control?this.control.getError(e,i):null}},ae=class extends K{get formDirective(){return null}get path(){return null}},P=class extends K{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},le=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Xt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ni=V(g({},Xt),{"[class.ng-submitted]":"isSubmitted"}),lt=(()=>{let e=class e extends le{constructor(n){super(n)}};e.\u0275fac=function(r){return new(r||e)(d(P,2))},e.\u0275dir=v({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&Se("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[O]});let t=e;return t})();var U="VALID",z="INVALID",x="PENDING",R="DISABLED";function Zt(t){return(X(t)?t.validators:t)||null}function Jt(t){return Array.isArray(t)?st(t):t||null}function Qt(t,e){return(X(e)?e.asyncValidators:t)||null}function en(t){return Array.isArray(t)?at(t):t||null}function X(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var ce=class{constructor(e,i){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(i)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===U}get invalid(){return this.status===z}get pending(){return this.status==x}get disabled(){return this.status===R}get enabled(){return this.status!==R}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(qe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(qe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Ke(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Ke(e,this._rawAsyncValidators))}hasValidator(e){return q(this._rawValidators,e)}hasAsyncValidator(e){return q(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(i=>{i.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=x,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=R,this.errors=null,this._forEachChild(n=>{n.disable(V(g({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(V(g({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!0))}enable(e={}){let i=this._parentMarkedDirty(e.onlySelf);this.status=U,this._forEachChild(n=>{n.enable(V(g({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(V(g({},e),{skipPristineCheck:i})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===U||this.status===x)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(i=>i._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?R:U}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=x,this._hasOwnPendingAsyncValidator=!0;let i=nt(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,i={}){this.errors=e,this._updateControlsErrors(i.emitEvent!==!1)}get(e){let i=e;return i==null||(Array.isArray(i)||(i=i.split(".")),i.length===0)?null:i.reduce((n,r)=>n&&n._find(r),this)}getError(e,i){let n=i?this.get(i):this;return n&&n.errors?n.errors[e]:null}hasError(e,i){return!!this.getError(e,i)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new m,this.statusChanges=new m}_calculateStatus(){return this._allControlsDisabled()?R:this.errors?z:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(x)?x:this._anyControlsHaveStatus(z)?z:U}_anyControlsHaveStatus(e){return this._anyControls(i=>i.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){X(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let i=this._parent&&this._parent.dirty;return!e&&!!i&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Jt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=en(this._rawAsyncValidators)}};var de=new w("CallSetDisabledState",{providedIn:"root",factory:()=>Z}),Z="always";function tn(t,e){return[...e.path,t]}function nn(t,e,i=Z){on(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||i==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),sn(t,e),ln(t,e),an(t,e),rn(t,e)}function Ye(t,e){t.forEach(i=>{i.registerOnValidatorChange&&i.registerOnValidatorChange(e)})}function rn(t,e){if(e.valueAccessor.setDisabledState){let i=n=>{e.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(i),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(i)})}}function on(t,e){let i=Kt(t);e.validator!==null?t.setValidators(ze(i,e.validator)):typeof i=="function"&&t.setValidators([i]);let n=Yt(t);e.asyncValidator!==null?t.setAsyncValidators(ze(n,e.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let r=()=>t.updateValueAndValidity();Ye(e._rawValidators,r),Ye(e._rawAsyncValidators,r)}function sn(t,e){e.valueAccessor.registerOnChange(i=>{t._pendingValue=i,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&ct(t,e)})}function an(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&ct(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function ct(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function ln(t,e){let i=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};t.registerOnChange(i),e._registerOnDestroy(()=>{t._unregisterOnChange(i)})}function cn(t,e){if(!t.hasOwnProperty("model"))return!1;let i=t.model;return i.isFirstChange()?!0:!Object.is(e,i.currentValue)}function un(t){return Object.getPrototypeOf(t.constructor)===et}function dn(t,e){if(!e)return null;Array.isArray(e);let i,n,r;return e.forEach(o=>{o.constructor===Y?i=o:un(o)?n=o:r=o}),r||n||i||null}function Xe(t,e){let i=t.indexOf(e);i>-1&&t.splice(i,1)}function Ze(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var hn=class extends ce{constructor(e=null,i,n){super(Zt(i),Qt(n,i)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(i),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),X(i)&&(i.nonNullable||i.initialValueIsDefault)&&(Ze(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,i={}){this.value=this._pendingValue=e,this._onChange.length&&i.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,i.emitViewToModelChange!==!1)),this.updateValueAndValidity(i)}patchValue(e,i={}){this.setValue(e,i)}reset(e=this.defaultValue,i={}){this._applyFormState(e),this.markAsPristine(i),this.markAsUntouched(i),this.setValue(this.value,i),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Xe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Xe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ze(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var fn={provide:P,useExisting:B(()=>he)},Je=(()=>Promise.resolve())(),he=(()=>{let e=class e extends P{constructor(n,r,o,s,a,y){super(),this._changeDetectorRef=a,this.callSetDisabledState=y,this.control=new hn,this._registered=!1,this.name="",this.update=new m,this._parent=n,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=dn(this,s)}ngOnChanges(n){if(this._checkForErrors(),!this._registered||"name"in n){if(this._registered&&(this._checkName(),this.formDirective)){let r=n.name.previousValue;this.formDirective.removeControl({name:r,path:this._getPath(r)})}this._setUpControl()}"isDisabled"in n&&this._updateDisabled(n),cn(n,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(n){this.viewModel=n,this.update.emit(n)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){nn(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(n){Je.then(()=>{this.control.setValue(n,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(n){let r=n.isDisabled.currentValue,o=r!==0&&Te(r);Je.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(n){return this._parent?tn(n,this._parent):[n]}};e.\u0275fac=function(r){return new(r||e)(d(ae,9),d(Wt,10),d(Lt,10),d(ue,10),d(Ee,8),d(de,8))},e.\u0275dir=v({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:["disabled","isDisabled"],model:["ngModel","model"],options:["ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[$([fn]),O,W]});let t=e;return t})();var pn={provide:ue,useExisting:B(()=>fe),multi:!0};var ut=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=S({type:e}),e.\u0275inj=M({});let t=e;return t})(),gn=(()=>{let e=class e{constructor(){this._accessors=[]}add(n,r){this._accessors.push([n,r])}remove(n){for(let r=this._accessors.length-1;r>=0;--r)if(this._accessors[r][1]===n){this._accessors.splice(r,1);return}}select(n){this._accessors.forEach(r=>{this._isSameGroup(r,n)&&r[1]!==n&&r[1].fireUncheck(n.value)})}_isSameGroup(n,r){return n[0].control?n[0]._parent===r._control._parent&&n[1].name===r.name:!1}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=k({token:e,factory:e.\u0275fac,providedIn:ut});let t=e;return t})(),fe=(()=>{let e=class e extends et{constructor(n,r,o,s){super(n,r),this._registry=o,this._injector=s,this.setDisabledStateFired=!1,this.onChange=()=>{},this.callSetDisabledState=E(de,{optional:!0})??Z}ngOnInit(){this._control=this._injector.get(P),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(n){this._state=n===this.value,this.setProperty("checked",this._state)}registerOnChange(n){this._fn=n,this.onChange=()=>{n(this.value),this._registry.select(this)}}setDisabledState(n){(this.setDisabledStateFired||n||this.callSetDisabledState==="whenDisabledForLegacyCode")&&this.setProperty("disabled",n),this.setDisabledStateFired=!0}fireUncheck(n){this.writeValue(n)}_checkName(){this.name&&this.formControlName&&(this.name,this.formControlName),!this.name&&this.formControlName&&(this.name=this.formControlName)}};e.\u0275fac=function(r){return new(r||e)(d(L),d(F),d(gn),d(Me))},e.\u0275dir=v({type:e,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(r,o){r&1&&p("change",function(){return o.onChange()})("blur",function(){return o.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[$([pn]),O]});let t=e;return t})();var mn=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=S({type:e}),e.\u0275inj=M({imports:[ut]});let t=e;return t})();var dt=(()=>{let e=class e{static withConfig(n){return{ngModule:e,providers:[{provide:de,useValue:n.callSetDisabledState??Z}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=S({type:e}),e.\u0275inj=M({imports:[mn]});let t=e;return t})();var ht=(()=>{let e=class e{constructor(){this.keyword="",this.selectedGender="all",this.emitter=new m,this.emitter2=new m}sendData(){this.emitter.emit(this.keyword)}filter(n){this.emitter2.emit(n)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=A({type:e,selectors:[["app-navbar"]],outputs:{emitter:"emitter",emitter2:"emitter2"},standalone:!0,features:[I],decls:20,vars:4,consts:[[1,"navbar"],[1,"navbar__item"],[1,"switch-container"],["type","radio","id","hombre","name","gender","value","Male",3,"ngModel","ngModelChange","change"],["for","hombre"],["type","radio","id","todos","name","gender","value","all","checked","",3,"ngModel","ngModelChange","change"],["for","todos"],["type","radio","id","mujer","name","gender","value","Female",3,"ngModel","ngModelChange","change"],["for","mujer"],["src","../../../../assets/img/logo.png","alt","Logo",1,"navbar__logo"],[1,"search__container"],["type","text","placeholder","Search...",1,"search__input",3,"ngModel","ngModelChange","keyup"],["viewBox","0 0 20 20",1,"icon"],["d","M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"]],template:function(r,o){r&1&&(c(0,"nav")(1,"div",0)(2,"div",1)(3,"div",2)(4,"input",3),p("ngModelChange",function(a){return o.selectedGender=a})("change",function(){return o.filter("Male")}),l(),c(5,"label",4),h(6,"Male"),l(),c(7,"input",5),p("ngModelChange",function(a){return o.selectedGender=a})("change",function(){return o.filter("all")}),l(),c(8,"label",6),h(9,"All"),l(),c(10,"input",7),p("ngModelChange",function(a){return o.selectedGender=a})("change",function(){return o.filter("Female")}),l(),c(11,"label",8),h(12,"Female"),l()()(),c(13,"div",1),b(14,"img",9),l(),c(15,"div",1)(16,"div",10)(17,"input",11),p("ngModelChange",function(a){return o.keyword=a})("keyup",function(){return o.sendData()}),l(),be(),c(18,"svg",12),b(19,"path",13),l()()()()()),r&2&&(u(4),C("ngModel",o.selectedGender),u(3),C("ngModel",o.selectedGender),u(3),C("ngModel",o.selectedGender),u(7),C("ngModel",o.keyword))},dependencies:[dt,Y,fe,lt,he],styles:["*[_ngcontent-%COMP%]{margin:0;padding:0}.navbar[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1em;padding-top:1em}.navbar__item[_ngcontent-%COMP%]{display:flex;justify-content:center}.navbar__logo[_ngcontent-%COMP%]{width:45%;padding:1em}.search__container[_ngcontent-%COMP%]{display:flex;padding:1.5em;gap:1em;align-items:center}.search__input[_ngcontent-%COMP%]{background-color:transparent;border:transparent;outline-color:transparent;outline-offset:.5em;font-size:18px;padding:.5em;border:1px solid #999;border-radius:.5em;width:300px}.search__input[_ngcontent-%COMP%]:hover + .icon[_ngcontent-%COMP%]{stroke:RGB(2,177,200)}.search__input[_ngcontent-%COMP%]::-webkit-input-placeholder{font-family:sans-serif}.icon[_ngcontent-%COMP%]{height:2em}.icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]   polygon[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]   rect[_ngcontent-%COMP%]{fill:#000}.icon[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]{stroke:#000;stroke-width:1}.switch-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:1em}.switch-container[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]{display:none}.switch-container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{padding:.5em 1em;border:1px solid #999;border-radius:.5em;cursor:pointer}.switch-container[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked + label[_ngcontent-%COMP%]{background-color:RGB(2,177,200);color:#fff}@media (max-width: 1200px){.navbar[_ngcontent-%COMP%]{grid-template-columns:1fr}.navbar__logo[_ngcontent-%COMP%]{width:25%}}"]});let t=e;return t})();function yn(t,e){if(t&1&&b(0,"app-card",5),t&2){let i=_().$implicit;C("character",i)}}function vn(t,e){if(t&1&&b(0,"app-card",5),t&2){let i=_().$implicit;C("character",i)}}function Cn(t,e){if(t&1&&j(0,yn,1,1,"app-card",5)(1,vn,1,1,"app-card",5),t&2){let i=e.$implicit,n=_(2);D(0,n.genderToShow===i.gender?0:-1),u(),D(1,n.genderToShow==="all"?1:-1)}}function Dn(t,e){if(t&1&&(c(0,"div",4),Oe(1,Cn,2,2,null,null,Fe),l()),t&2){let i=_();u(),Ie(i.searchedResults)}}function bn(t,e){t&1&&(c(0,"section",6)(1,"h1",7),h(2," Nothing found... "),l(),b(3,"img",8),l())}var yi=(()=>{let e=class e{constructor(){this.characters=[],this.searchedResults=[],this.nextUrl="",this.gatherData=!0,this.genderToShow="all",this.characterService=E(Ge)}ngAfterViewInit(){this.characterService.getCharacters().subscribe({next:n=>{this.characters=n.results,this.searchedResults=this.characters,this.nextUrl=n.info.next}})}goTop(){window.scrollTo({top:0,behavior:"smooth"})}getDataToSearch(n){this.search(n)}changeGender(n="all"){this.genderToShow=n}search(n){n.trim()===""?(this.gatherData=!0,this.searchedResults=[...this.characters]):(this.gatherData=!1,this.searchedResults=this.characters.filter(r=>r.name.toLowerCase().includes(n.toLowerCase())))}onScroll(){this.gatherData&&this.nextUrl&&this.characterService.getCharacters(this.nextUrl).subscribe({next:n=>{this.nextUrl=n.info.next,this.characters=[...this.characters,...n.results],this.searchedResults=this.characters}})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=A({type:e,selectors:[["app-home"]],standalone:!0,features:[I],decls:6,vars:3,consts:[[3,"emitter","emitter2"],["infiniteScroll","",1,"background",3,"infiniteScrollDistance","infiniteScrollThrottle","scrolled"],["id","button",3,"click"],["class","container"],[1,"container"],[3,"character"],[1,"notfound__container"],["data-aos","flip-down",1,"notfound__container__text"],["src","../../../assets/img/notfound.png",1,"notfound__container__img"]],template:function(r,o){r&1&&(c(0,"app-navbar",0),p("emitter",function(a){return o.getDataToSearch(a)})("emitter2",function(a){return o.changeGender(a)}),l(),c(1,"section",1),p("scrolled",function(){return o.onScroll()}),c(2,"button",2),p("click",function(){return o.goTop()}),h(3,"\u{1F53C}"),l(),j(4,Dn,3,0,"div",3)(5,bn,4,0),l()),r&2&&(u(),C("infiniteScrollDistance",2)("infiniteScrollThrottle",1),u(3),D(4,o.searchedResults.length>0?4:5))},dependencies:[Ne,je,Le,We,$e,ht],styles:['p[_ngcontent-%COMP%]{margin:0}#button[_ngcontent-%COMP%]{position:fixed;z-index:1;top:5em;right:20px;padding:10px 15px;font-size:30px;background-color:transparent;cursor:pointer;border:none}.background[_ngcontent-%COMP%]{background-image:url("./media/background-4NO2SWHX.jpg");background-repeat:round}.container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:4em;justify-items:center;padding:2em}.notfound__container[_ngcontent-%COMP%]{position:relative;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center}.notfound__container__text[_ngcontent-%COMP%]{margin:0;padding:0;text-align:center;position:absolute;top:50%;transform:translateY(-50%);color:#fff;width:100%}.notfound__container__img[_ngcontent-%COMP%]{width:20%;position:absolute;bottom:10px;width:25%}@media (max-width: 1200px){.container[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}.notfound__container__img[_ngcontent-%COMP%]{width:30%}}@media (max-width: 768px){.container[_ngcontent-%COMP%]{grid-template-columns:1fr}.notfound__container__img[_ngcontent-%COMP%]{width:50%}}']});let t=e;return t})();export{yi as default};