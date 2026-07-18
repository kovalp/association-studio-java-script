var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(e){throw n=[e],e}},s=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),c=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},l=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},u=(n,r,a)=>(a=n==null?{}:e(i(n)),l(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var d,f,p=o((()=>{d=2*Math.PI,f=Math.PI/2})),m,h=o((()=>{p(),m=class{constructor(e){this.half_screen_x=240,this.half_screen_y=160,this.xy_yaw_lw=new Float32Array(e),this.transform_scale=20,this.moon_radius=.5,this.edge_width=.35,this.min_size=.4,this.transform=new DOMMatrix,this.half_sxy=new Float32Array([e[3]/2,e[4]/2]),this.offset_xy=new DOMPoint(0,0),this.data_xy=new DOMPoint(0,0),this.change_state_callback=e=>{},this._upd_transform()}_upd_transform(){this.transform.setMatrixValue(``),this.transform.translateSelf(this.half_screen_x,this.half_screen_y),this.transform.scaleSelf(this.transform_scale,this.transform_scale),this.transform.translateSelf(this.xy_yaw_lw[0],this.xy_yaw_lw[1]),this.transform.rotateSelf(180*this.xy_yaw_lw[2]/Math.PI),this.inv_transform=this.transform.inverse(),this.change_state_callback(this.xy_yaw_lw)}scale(e){return e/this.transform_scale}translate(e,t){this.xy_yaw_lw[0]+=e,this.xy_yaw_lw[1]+=t,this._upd_transform()}wrap_yaw(){this.xy_yaw_lw[2]=(this.xy_yaw_lw[2]%d+d)%d}rotate(e){this.xy_yaw_lw[2]+=e,this.wrap_yaw(),this._upd_transform()}scale_width(e){this.xy_yaw_lw[4]+=e,this.xy_yaw_lw[4]=Math.max(this.min_size,this.xy_yaw_lw[4]),this.half_sxy[1]=this.xy_yaw_lw[4]/2,this.change_state_callback(this.xy_yaw_lw)}scale_len(e){this.xy_yaw_lw[3]+=e,this.xy_yaw_lw[3]=Math.max(this.min_size,this.xy_yaw_lw[3]),this.half_sxy[0]=this.xy_yaw_lw[3]/2,this.change_state_callback(this.xy_yaw_lw)}set_screen_offset(e,t){Object.assign(this.offset_xy,{x:e,y:t}),this.data_xy=this.inv_transform.transformPoint(this.offset_xy)}is_in_h(){return Math.abs(this.data_xy.x)<this.half_sxy[0]}is_in_v(){return Math.abs(this.data_xy.y)<this.half_sxy[1]}is_in_box(){return this.is_in_h()&&this.is_in_v()}is_in_moon(){let e=this.data_xy.x-this.half_sxy[0];return Math.sqrt(e**2+this.data_xy.y**2)<this.moon_radius&&e>0}is_in_edge_x(){return this.is_in_h()&&Math.abs(this.data_xy.y+this.half_sxy[1])<this.edge_width}is_in_edge_y(){return Math.abs(this.data_xy.x+this.half_sxy[0])<this.edge_width&&this.is_in_v()}set_state(e){this.xy_yaw_lw.set(e),this._upd_transform(),this.half_sxy[0]=this.xy_yaw_lw[3]/2,this.half_sxy[1]=this.xy_yaw_lw[4]/2}set_x(e){this.xy_yaw_lw[0]=e,this._upd_transform()}set_y(e){this.xy_yaw_lw[1]=e,this._upd_transform()}set_yaw(e){this.xy_yaw_lw[2]=e,this.wrap_yaw(),this._upd_transform()}set_len(e){this.xy_yaw_lw[3]=Math.max(this.min_size,e),this.half_sxy[0]=this.xy_yaw_lw[3]/2}set_wdt(e){this.xy_yaw_lw[4]=Math.max(this.min_size,e),this.half_sxy[1]=this.xy_yaw_lw[4]/2}}})),g,_=o((()=>{p(),g=class{constructor(e){this.box_style=e,this.moon_style=`#0f0a`,this.moon_radius=.25,this.moon_line_width=.5,this.edge_style=`gray`,this.edge_width=.1}draw(e,t){e.setTransform(t.transform);let{xy_yaw_lw:[,,,n,r],half_sxy:[i,a]}=t,o=this.edge_width;e.fillStyle=this.box_style,e.fillRect(-i,-a,n,r),e.fillStyle=this.edge_style,e.fillRect(-i+o,-a-o,n-2*o,o),e.fillRect(-i-o,-a+o,o,r-2*o),e.beginPath(),e.strokeStyle=this.moon_style,e.lineWidth=this.moon_line_width;let s=this.moon_radius;e.ellipse(i,0,s,s,0,f,d-f,!0),e.stroke()}}})),v,y=o((()=>{v=class{constructor(e,t){this.canvas=e,this.ctx=t}clear(){this.ctx.setTransform(1,0,0,1,0,0),this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}}}));function b(e,t,n){return e?`pointer`:t?x:n?`all-scroll`:``}var x,S=o((()=>{x=`url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'><path d='M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67'/></svg>") 12 12, auto`}));function C(e,t){return Math.atan2(e.x*t.y-e.y*t.x,e.x*t.x+e.y*t.y)}var w=o((()=>{})),ee,te=o((()=>{h(),_(),y(),S(),w(),ee=class{constructor(e,t,n){this.canvas=document.getElementById(e),this.ctx=this.canvas.getContext(`2d`),this.screen=new v(this.canvas,this.ctx),this.box_plt=new g(t),this.box=new m(n),this.box_plt.draw(this.ctx,this.box),this.is_dragging=!1,this.is_in_box=!1,this.is_in_moon=!1,this.is_in_edge_x=!1,this.is_in_edge_y=!1,this.start_event=new MouseEvent(``,void 0),this.start_data_xy=new DOMPoint(0,0),this.canvas.addEventListener(`mousedown`,this.mouse_down_callback.bind(this)),this.canvas.addEventListener(`mousemove`,this.mouse_move_callback.bind(this)),this.canvas.addEventListener(`mouseup`,this.mouse_up_callback.bind(this))}change(e,t){if(this.is_in_box){let n=this.box.scale(t.offsetX-this.start_event.offsetX),r=this.box.scale(t.offsetY-this.start_event.offsetY);e.translate(n,r);return}e.set_screen_offset(t.offsetX,t.offsetY),this.is_in_moon?e.rotate(C(this.start_data_xy,e.data_xy)):this.is_in_edge_x?e.scale_width(2*(this.start_data_xy.y-e.data_xy.y)):this.is_in_edge_y&&e.scale_len(2*(this.start_data_xy.x-e.data_xy.x))}change_and_draw(e,t){this.change(e,t),this.draw(e)}draw(e){this.screen.clear(),this.box_plt.draw(this.ctx,e||this.box)}mouse_down_callback(e){this._upd_in_flags(e),(this.is_in_box||this.is_in_moon||this.is_in_edge_x||this.is_in_edge_y)&&(this.is_dragging=!0,this.start_event=e,this.start_data_xy=new DOMPoint(this.box.data_xy.x,this.box.data_xy.y))}mouse_move_callback(e){if(this.is_dragging)this.change_and_draw(new m(this.box.xy_yaw_lw),e);else{this._upd_in_flags(e);let t=this.is_in_edge_x||this.is_in_edge_y;e.target.style.cursor=b(this.is_in_box,this.is_in_moon,t)}}mouse_up_callback(e){this.is_dragging&&(this.is_dragging=!1,this.change_and_draw(this.box,e))}_upd_in_flags(e){this.box.set_screen_offset(e.offsetX,e.offsetY),this.is_in_box=this.box.is_in_box(),this.is_in_moon=this.box.is_in_moon(),this.is_in_edge_x=this.box.is_in_edge_x(),this.is_in_edge_y=this.box.is_in_edge_y()}set_state(e){this.box.set_state(e),this.draw()}set_change_state_callback(e){this.box.change_state_callback=e}change_yaw(e){this.box.set_yaw(Math.PI*Number(e.target.value)/180),this.draw()}change_x(e){this.update(()=>this.box.set_x(Number(e.target.value)))}change_y(e){this.update(()=>this.box.set_y(Number(e.target.value)))}change_len(e){this.update(()=>this.box.set_len(Number(e.target.value)))}change_wdt(e){this.update(()=>this.box.set_wdt(Number(e.target.value)))}update(e){e(),this.draw()}}})),T,ne=o((()=>{T=class{constructor(){this.reset_btn=document.getElementById(`reset-btn`),this.inp_x=document.getElementById(`inp-x`),this.inp_y=document.getElementById(`inp-y`),this.inp_yaw=document.getElementById(`inp-yaw`),this.inp_len=document.getElementById(`inp-len`),this.inp_wdt=document.getElementById(`inp-wdt`)}set_state(e){this.inp_x.value=e[0].toFixed(2),this.inp_y.value=e[1].toFixed(2),this.inp_yaw.value=(e[2]*180/Math.PI).toFixed(0),this.inp_len.value=e[3].toFixed(2),this.inp_wdt.value=e[4].toFixed(2)}}}));function re(e){throw Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}var ie,ae,oe,se,ce=o((()=>{ie=1e-7,ae=1e-4,oe=class{constructor(e,t){this.backend=e,this.dataMover=t,this.data=new WeakMap,this.dataIdsCount=0}get(e){return this.data.has(e)||this.dataMover.moveData(this.backend,e),this.data.get(e)}set(e,t){this.dataIdsCount++,this.data.set(e,t)}has(e){return this.data.has(e)}delete(e){return this.dataIdsCount--,this.data.delete(e)}numDataIds(){return this.dataIdsCount}},se=class{refCount(e){return re(`refCount`)}incRef(e){return re(`incRef`)}timerAvailable(){return!0}time(e){return re(`time`)}read(e){return re(`read`)}readSync(e){return re(`readSync`)}readToGPU(e,t){return re(`readToGPU`)}numDataIds(){return re(`numDataIds`)}disposeData(e,t){return re(`disposeData`)}write(e,t,n){return re(`write`)}move(e,t,n,r,i){return re(`move`)}createTensorFromGPUData(e,t,n){return re(`createTensorFromGPUData`)}memory(){return re(`memory`)}floatPrecision(){return re(`floatPrecision`)}epsilon(){return this.floatPrecision()===32?ie:ae}dispose(){return re(`dispose`)}}}));function le(e){let t=e.length,n=0;for(;t>0;)n=Math.random()*t|0,t--,fe(e,t,n)}function ue(e,t,n){return Math.max(e,Math.min(t,n))}function de(e){return e%2==0?e:e+1}function fe(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}function pe(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function E(e,t){if(!e)throw Error(typeof t==`string`?t:t())}function me(e,t,n=``){E(ge(e,t),()=>n+` Shapes ${e} and ${t} must match`)}function he(e){E(e!=null,()=>`The input to the tensor constructor must be a non-null value.`)}function D(e){if(e.length===0)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function ge(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function _e(e){return e%1==0}function ve(e){let t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function ye(e,t){return t<=e.length?e:e+` `.repeat(t-e.length)}function be(e,t=e=>0,n,r){return new Promise((i,a)=>{let o=0,s=()=>{if(e()){i();return}o++;let c=t(o);if(n!=null&&o>=n){a();return}r==null?setTimeout(s,c):r(s,c)};s()})}function xe(e,t){let n=1,r=-1;for(let t=0;t<e.length;++t)if(e[t]>=0)n*=e[t];else if(e[t]===-1){if(r!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${t}`);r=t}else if(e[t]<0)throw Error(`Shapes can not be < 0. Found ${e[t]} at dim ${t}`);if(r===-1){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(n===0)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);let i=e.slice();return i[r]=t/n,i}function Se(e,t){let n=t.length;return e=e==null?t.map((e,t)=>t):[].concat(e),E(e.every(e=>e>=-n&&e<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),E(e.every(e=>_e(e)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(e=>e<0?n+e:e)}function Ce(e,t){let n=[],r=[],i=t!=null&&Array.isArray(t)&&t.length===0,a=t==null||i?null:Se(t,e).sort(),o=0;for(let t=0;t<e.length;++t){if(a!=null){if(a[o]===t&&e[t]!==1)throw Error(`Can't squeeze axis ${t} since its dim '${e[t]}' is not 1`);(a[o]==null||a[o]>t)&&e[t]===1&&(n.push(e[t]),r.push(t)),a[o]<=t&&o++}e[t]!==1&&(n.push(e[t]),r.push(t))}return{newShape:n,keptDims:r}}function we(e,t){return Te(e,t)}function Te(e,t){let n=null;if(e==null||e===`float32`)n=new Float32Array(t);else if(e===`int32`)n=new Int32Array(t);else if(e===`bool`)n=new Uint8Array(t);else if(e===`string`)n=Array(t);else throw Error(`Unknown data type ${e}`);return n}function eee(e,t){for(let n=0;n<e.length;n++){let r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function Ee(e){return e===`bool`||e===`complex64`||e===`float32`||e===`int32`||e===`string`}function De(e,t){return!(t===`complex64`||t===`float32`&&e!==`complex64`||t===`int32`&&e!==`float32`&&e!==`complex64`||t===`bool`&&e===`bool`)}function Oe(e){if(e===`float32`||e===`int32`)return 4;if(e===`complex64`)return 8;if(e===`bool`)return 1;throw Error(`Unknown dtype ${e}`)}function tee(e){if(e==null)return 0;let t=0;return e.forEach(e=>t+=e.length),t}function ke(e){return typeof e==`string`||e instanceof String}function Ae(e){return typeof e==`boolean`}function je(e){return typeof e==`number`}function Me(e){return Array.isArray(e)?Me(e[0]):e instanceof Float32Array?`float32`:e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?`int32`:je(e)?`float32`:ke(e)?`string`:Ae(e)?`bool`:`float32`}function Ne(e){return!!(e&&e.constructor&&e.call&&e.apply)}function Pe(e,t){for(let n=t;n<e;++n)if(e%n===0)return n;return e}function O(e){let t=e.length;if(t<2)return[];let n=Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function Fe(e,t,n,r=!1){let i=[];if(t.length===1){let a=t[0]*(r?2:1);for(let t=0;t<a;t++)i[t]=n[e+t]}else{let a=t[0],o=t.slice(1),s=o.reduce((e,t)=>e*t)*(r?2:1);for(let t=0;t<a;t++)i[t]=Fe(e+t*s,o,n,r)}return i}function Ie(e,t,n=!1){if(e.length===0)return t[0];let r=e.reduce((e,t)=>e*t)*(n?2:1);if(r===0)return[];if(r!==t.length)throw Error(`[${e}] does not match the input size ${t.length}${n?` for a complex tensor`:``}.`);return Fe(0,e,t,n)}function Le(e,t){if(Array.isArray(e))return e;if(t===`float32`)return e instanceof Float32Array?e:new Float32Array(e);if(t===`int32`)return e instanceof Int32Array?e:new Int32Array(e);if(t===`bool`||t===`string`)return Uint8Array.from(new Int32Array(e));throw Error(`Unknown dtype ${t}`)}function Re(e,t){let n=ze(e,t);for(let e=0;e<n.length;e++)n[e]=1;return n}function ze(e,t){if(t==null||t===`float32`||t===`complex64`)return new Float32Array(e);if(t===`int32`)return new Int32Array(e);if(t===`bool`)return new Uint8Array(e);throw Error(`Unknown data type ${t}`)}function Be(e,t){let n=e.reduce((e,t)=>e*t,1);if(t==null||t===`float32`)return Ie(e,new Float32Array(n));if(t===`int32`)return Ie(e,new Int32Array(n));if(t===`bool`)return Ie(e,new Uint8Array(n));throw Error(`Unknown data type ${t}`)}function Ve(e){e.forEach(t=>{E(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function He(e,t,n){if(t===0)return 0;if(t===1)return e[0];let r=e[e.length-1];for(let t=0;t<e.length-1;++t)r+=n[t]*e[t];return r}function Ue(e,t,n){if(t===0)return[];if(t===1)return[e];let r=Array(t);for(let t=0;t<r.length-1;++t)r[t]=Math.floor(e/n[t]),e-=r[t]*n[t];return r[r.length-1]=e,r}function We(e){return e&&e.then&&typeof e.then==`function`}var Ge=o((()=>{}));function Ke(e){let t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...n)=>(qe(t,n[0],n[1]),n.join(`=`))),t}function qe(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||``)}function nee(e,t){let n=t.toLowerCase();return n===`true`||n===`false`?n===`true`:`${+n}`===n?+n:t}function k(){return Xe}function ree(e){Xe=e}var Je,Ye,Xe,Ze=o((()=>{Ge(),Je=`tfjsflags`,Ye=class{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=Ke,this.populateURLFlags()}setPlatform(e,t){this.platform!=null&&(k().getBool(`IS_TEST`)||k().getBool(`PROD`)||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`)),this.platformName=e,this.platform=t}registerFlag(e,t,n){if(this.flagRegistry[e]={evaluationFn:t,setHook:n},this.urlFlags[e]!=null){let t=this.urlFlags[e];k().getBool(`IS_TEST`)||k().getBool(`PROD`)||console.warn(`Setting feature override from URL ${e}: ${t}.`),this.set(e,t)}}async getAsync(e){return e in this.flags||(this.flags[e]=await this.evaluateFlag(e)),this.flags[e]}get(e){if(e in this.flags)return this.flags[e];let t=this.evaluateFlag(e);if(We(t))throw Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(this.flagRegistry[e]==null)throw Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,this.flagRegistry[e].setHook!=null&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(this.flagRegistry[e]==null)throw Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(this.global===void 0||this.global.location===void 0||this.global.location.search===void 0)return;let e=this.getQueryParams(this.global.location.search);Je in e&&e[Je].split(`,`).forEach(e=>{let[t,n]=e.split(`:`);this.urlFlags[t]=nee(t,n)})}},Xe=null}));function Qe(){if(tt==null){let e;if(typeof window<`u`)e=window;else if(typeof global<`u`)e=global;else if(typeof process<`u`)e=process;else if(typeof self<`u`)e=self;else throw Error(`Could not find a global object`);tt=e}return tt}function $e(){let e=Qe();return e._tfGlobals??=new Map,e._tfGlobals}function et(e,t){let n=$e();if(n.has(e))return n.get(e);{let r=t();return n.set(e,r),n.get(e)}}var tt,nt=o((()=>{})),rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn,Fn,In,Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr,Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Ir,Lr,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr,Kr,qr,Jr,Yr,Xr,A=o((()=>{rt=`Acos`,it=`Acosh`,at=`AddN`,ot=`ArgMax`,st=`ArgMin`,ct=`Asin`,lt=`Asinh`,ut=`Atan`,dt=`Atanh`,ft=`Atan2`,pt=`AvgPool`,mt=`AvgPoolGrad`,ht=`AvgPool3D`,gt=`AvgPool3DGrad`,_t=`BatchMatMul`,vt=`BatchToSpaceND`,yt=`Bincount`,bt=`BitwiseAnd`,xt=`BroadcastTo`,St=`BroadcastArgs`,Ct=`Cast`,wt=`Ceil`,Tt=`ClipByValue`,Et=`Complex`,Dt=`ComplexAbs`,Ot=`Concat`,kt=`Conv2D`,At=`Conv2DBackpropFilter`,jt=`Conv2DBackpropInput`,Mt=`Conv3D`,Nt=`Conv3DBackpropFilterV2`,Pt=`Conv3DBackpropInputV2`,Ft=`Cosh`,It=`Cumprod`,Lt=`Cumsum`,Rt=`CropAndResize`,zt=`DenseBincount`,Bt=`DepthToSpace`,Vt=`DepthwiseConv2dNative`,Ht=`DepthwiseConv2dNativeBackpropFilter`,Ut=`DepthwiseConv2dNativeBackpropInput`,Wt=`Diag`,Gt=`Dilation2D`,Kt=`Dilation2DBackpropInput`,qt=`Dilation2DBackpropFilter`,Jt=`Draw`,Yt=`RealDiv`,Xt=`Einsum`,Zt=`EluGrad`,Qt=`Equal`,$t=`ExpandDims`,en=`Expm1`,tn=`Fill`,nn=`FlipLeftRight`,rn=`Floor`,an=`FloorDiv`,on=`FusedBatchNorm`,sn=`GatherV2`,cn=`GatherNd`,ln=`Greater`,un=`GreaterEqual`,dn=`Identity`,fn=`IFFT`,pn=`Imag`,mn=`IsFinite`,hn=`IsInf`,gn=`IsNan`,_n=`LeakyRelu`,vn=`Less`,yn=`LessEqual`,bn=`LinSpace`,xn=`Log1p`,Sn=`LogicalAnd`,Cn=`LogicalNot`,wn=`LogicalOr`,Tn=`LogSoftmax`,En=`LRNGrad`,Dn=`Maximum`,On=`MaxPool`,kn=`MaxPoolGrad`,An=`MaxPool3D`,jn=`MaxPool3DGrad`,Mn=`MaxPoolWithArgmax`,Nn=`Mean`,Pn=`Minimum`,Fn=`MirrorPad`,In=`Multinomial`,Ln=`Multiply`,Rn=`NotEqual`,zn=`NonMaxSuppressionV3`,Bn=`NonMaxSuppressionV4`,Vn=`NonMaxSuppressionV5`,Hn=`OnesLike`,Un=`OneHot`,Wn=`Pack`,Gn=`PadV2`,Kn=`Prelu`,qn=`Prod`,Jn=`RaggedGather`,Yn=`RaggedRange`,Xn=`RaggedTensorToTensor`,Zn=`Range`,Qn=`Real`,$n=`Reciprocal`,er=`Relu`,tr=`Reshape`,nr=`ResizeNearestNeighbor`,rr=`ResizeNearestNeighborGrad`,ir=`ResizeBilinear`,ar=`ResizeBilinearGrad`,or=`Relu6`,sr=`Reverse`,cr=`Round`,lr=`Rsqrt`,ur=`ScatterNd`,dr=`TensorScatterUpdate`,fr=`SearchSorted`,pr=`Select`,mr=`Selu`,hr=`Slice`,gr=`Sinh`,_r=`Sign`,vr=`Sigmoid`,yr=`Softplus`,br=`Sqrt`,xr=`SpaceToBatchND`,Sr=`SplitV`,Cr=`Softmax`,wr=`SparseFillEmptyRows`,Tr=`SparseReshape`,Er=`SparseSegmentMean`,Dr=`SparseSegmentSum`,Or=`SparseToDense`,kr=`SquaredDifference`,Ar=`Square`,jr=`StaticRegexReplace`,Mr=`StridedSlice`,Nr=`StringNGrams`,Pr=`StringSplit`,Fr=`StringToHashBucketFast`,Ir=`Tanh`,Lr=`Tile`,Rr=`TopK`,zr=`Transform`,Br=`Transpose`,Vr=`Unique`,Hr=`Unpack`,Ur=`UnsortedSegmentSum`,Wr=`ZerosLike`,Gr=`Step`,Kr=`FromPixels`,qr=`RotateWithOffset`,Jr=`_FusedMatMul`,Yr=`FusedConv2D`,Xr=`FusedDepthwiseConv2D`}));function Zr(...e){k().getBool(`IS_TEST`)||k().getBool(`PROD`)||console.warn(...e)}function Qr(...e){k().getBool(`IS_TEST`)||k().getBool(`PROD`)||console.log(...e)}var $r=o((()=>{Ze()}));function ei(e,t){let n=ai(e,t);return oi.get(n)}function ti(e){return si.get(e)}function ni(e){let t=oi.entries(),n=[];for(;;){let{done:r,value:i}=t.next();if(r)break;let[a,o]=i,[s]=a.split(`_`);s===e&&n.push(o)}return n}function ri(e){let{kernelName:t,backendName:n}=e,r=ai(t,n);oi.has(r)&&Zr(`The kernel '${t}' for backend '${n}' is already registered`),oi.set(r,e)}function ii(e){let{kernelName:t}=e;si.has(t)&&k().getBool(`DEBUG`)&&Zr(`Overriding the gradient for '${t}'`),si.set(t,e)}function ai(e,t){return`${t}_${e}`}var oi,si,ci=o((()=>{Ze(),nt(),$r(),oi=et(`kernelRegistry`,()=>new Map),si=et(`gradRegistry`,()=>new Map)}));function li(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}var ui=o((()=>{})),iee=s(((e,t)=>{t.exports=r;var n=null;try{n=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function r(e,t,n){this.low=e|0,this.high=t|0,this.unsigned=!!n}r.prototype.__isLong__,Object.defineProperty(r.prototype,"__isLong__",{value:!0});function i(e){return(e&&e.__isLong__)===!0}r.isLong=i;var a={},o={};function s(e,t){var n,r,i;return t?(e>>>=0,(i=0<=e&&e<256)&&(r=o[e],r)?r:(n=l(e,(e|0)<0?-1:0,!0),i&&(o[e]=n),n)):(e|=0,(i=-128<=e&&e<128)&&(r=a[e],r)?r:(n=l(e,e<0?-1:0,!1),i&&(a[e]=n),n))}r.fromInt=s;function c(e,t){if(isNaN(e))return t?b:y;if(t){if(e<0)return b;if(e>=g)return ee}else{if(e<=-_)return te;if(e+1>=_)return w}return e<0?c(-e,t).neg():l(e%h|0,e/h|0,t)}r.fromNumber=c;function l(e,t,n){return new r(e,t,n)}r.fromBits=l;var u=Math.pow;function d(e,t,n){if(e.length===0)throw Error(`empty string`);if(e===`NaN`||e===`Infinity`||e===`+Infinity`||e===`-Infinity`)return y;if(typeof t==`number`?(n=t,t=!1):t=!!t,n||=10,n<2||36<n)throw RangeError(`radix`);var r;if((r=e.indexOf(`-`))>0)throw Error(`interior hyphen`);if(r===0)return d(e.substring(1),t,n).neg();for(var i=c(u(n,8)),a=y,o=0;o<e.length;o+=8){var s=Math.min(8,e.length-o),l=parseInt(e.substring(o,o+s),n);if(s<8){var f=c(u(n,s));a=a.mul(f).add(c(l))}else a=a.mul(i),a=a.add(c(l))}return a.unsigned=t,a}r.fromString=d;function f(e,t){return typeof e==`number`?c(e,t):typeof e==`string`?d(e,t):l(e.low,e.high,typeof t==`boolean`?t:e.unsigned)}r.fromValue=f;var p=65536,m=1<<24,h=p*p,g=h*h,_=g/2,v=s(m),y=s(0);r.ZERO=y;var b=s(0,!0);r.UZERO=b;var x=s(1);r.ONE=x;var S=s(1,!0);r.UONE=S;var C=s(-1);r.NEG_ONE=C;var w=l(-1,2147483647,!1);r.MAX_VALUE=w;var ee=l(-1,-1,!0);r.MAX_UNSIGNED_VALUE=ee;var te=l(0,-2147483648,!1);r.MIN_VALUE=te;var T=r.prototype;T.toInt=function(){return this.unsigned?this.low>>>0:this.low},T.toNumber=function(){return this.unsigned?(this.high>>>0)*h+(this.low>>>0):this.high*h+(this.low>>>0)},T.toString=function(e){if(e||=10,e<2||36<e)throw RangeError(`radix`);if(this.isZero())return`0`;if(this.isNegative())if(this.eq(te)){var t=c(e),n=this.div(t),r=n.mul(t).sub(this);return n.toString(e)+r.toInt().toString(e)}else return`-`+this.neg().toString(e);for(var i=c(u(e,6),this.unsigned),a=this,o=``;;){var s=a.div(i),l=(a.sub(s.mul(i)).toInt()>>>0).toString(e);if(a=s,a.isZero())return l+o;for(;l.length<6;)l=`0`+l;o=``+l+o}},T.getHighBits=function(){return this.high},T.getHighBitsUnsigned=function(){return this.high>>>0},T.getLowBits=function(){return this.low},T.getLowBitsUnsigned=function(){return this.low>>>0},T.getNumBitsAbs=function(){if(this.isNegative())return this.eq(te)?64:this.neg().getNumBitsAbs();for(var e=this.high==0?this.low:this.high,t=31;t>0&&!(e&1<<t);t--);return this.high==0?t+1:t+33},T.isZero=function(){return this.high===0&&this.low===0},T.eqz=T.isZero,T.isNegative=function(){return!this.unsigned&&this.high<0},T.isPositive=function(){return this.unsigned||this.high>=0},T.isOdd=function(){return(this.low&1)==1},T.isEven=function(){return(this.low&1)==0},T.equals=function(e){return i(e)||(e=f(e)),this.unsigned!==e.unsigned&&this.high>>>31==1&&e.high>>>31==1?!1:this.high===e.high&&this.low===e.low},T.eq=T.equals,T.notEquals=function(e){return!this.eq(e)},T.neq=T.notEquals,T.ne=T.notEquals,T.lessThan=function(e){return this.comp(e)<0},T.lt=T.lessThan,T.lessThanOrEqual=function(e){return this.comp(e)<=0},T.lte=T.lessThanOrEqual,T.le=T.lessThanOrEqual,T.greaterThan=function(e){return this.comp(e)>0},T.gt=T.greaterThan,T.greaterThanOrEqual=function(e){return this.comp(e)>=0},T.gte=T.greaterThanOrEqual,T.ge=T.greaterThanOrEqual,T.compare=function(e){if(i(e)||(e=f(e)),this.eq(e))return 0;var t=this.isNegative(),n=e.isNegative();return t&&!n?-1:!t&&n?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},T.comp=T.compare,T.negate=function(){return!this.unsigned&&this.eq(te)?te:this.not().add(x)},T.neg=T.negate,T.add=function(e){i(e)||(e=f(e));var t=this.high>>>16,n=this.high&65535,r=this.low>>>16,a=this.low&65535,o=e.high>>>16,s=e.high&65535,c=e.low>>>16,u=e.low&65535,d=0,p=0,m=0,h=0;return h+=a+u,m+=h>>>16,h&=65535,m+=r+c,p+=m>>>16,m&=65535,p+=n+s,d+=p>>>16,p&=65535,d+=t+o,d&=65535,l(m<<16|h,d<<16|p,this.unsigned)},T.subtract=function(e){return i(e)||(e=f(e)),this.add(e.neg())},T.sub=T.subtract,T.multiply=function(e){if(this.isZero())return y;if(i(e)||(e=f(e)),n)return l(n.mul(this.low,this.high,e.low,e.high),n.get_high(),this.unsigned);if(e.isZero())return y;if(this.eq(te))return e.isOdd()?te:y;if(e.eq(te))return this.isOdd()?te:y;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(v)&&e.lt(v))return c(this.toNumber()*e.toNumber(),this.unsigned);var t=this.high>>>16,r=this.high&65535,a=this.low>>>16,o=this.low&65535,s=e.high>>>16,u=e.high&65535,d=e.low>>>16,p=e.low&65535,m=0,h=0,g=0,_=0;return _+=o*p,g+=_>>>16,_&=65535,g+=a*p,h+=g>>>16,g&=65535,g+=o*d,h+=g>>>16,g&=65535,h+=r*p,m+=h>>>16,h&=65535,h+=a*d,m+=h>>>16,h&=65535,h+=o*u,m+=h>>>16,h&=65535,m+=t*p+r*d+a*u+o*s,m&=65535,l(g<<16|_,m<<16|h,this.unsigned)},T.mul=T.multiply,T.divide=function(e){if(i(e)||(e=f(e)),e.isZero())throw Error(`division by zero`);if(n)return!this.unsigned&&this.high===-2147483648&&e.low===-1&&e.high===-1?this:l((this.unsigned?n.div_u:n.div_s)(this.low,this.high,e.low,e.high),n.get_high(),this.unsigned);if(this.isZero())return this.unsigned?b:y;var t,r,a;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return b;if(e.gt(this.shru(1)))return S;a=b}else{if(this.eq(te))return e.eq(x)||e.eq(C)?te:e.eq(te)?x:(t=this.shr(1).div(e).shl(1),t.eq(y)?e.isNegative()?x:C:(r=this.sub(e.mul(t)),a=t.add(r.div(e)),a));if(e.eq(te))return this.unsigned?b:y;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();a=y}for(r=this;r.gte(e);){t=Math.max(1,Math.floor(r.toNumber()/e.toNumber()));for(var o=Math.ceil(Math.log(t)/Math.LN2),s=o<=48?1:u(2,o-48),d=c(t),p=d.mul(e);p.isNegative()||p.gt(r);)t-=s,d=c(t,this.unsigned),p=d.mul(e);d.isZero()&&(d=x),a=a.add(d),r=r.sub(p)}return a},T.div=T.divide,T.modulo=function(e){return i(e)||(e=f(e)),n?l((this.unsigned?n.rem_u:n.rem_s)(this.low,this.high,e.low,e.high),n.get_high(),this.unsigned):this.sub(this.div(e).mul(e))},T.mod=T.modulo,T.rem=T.modulo,T.not=function(){return l(~this.low,~this.high,this.unsigned)},T.and=function(e){return i(e)||(e=f(e)),l(this.low&e.low,this.high&e.high,this.unsigned)},T.or=function(e){return i(e)||(e=f(e)),l(this.low|e.low,this.high|e.high,this.unsigned)},T.xor=function(e){return i(e)||(e=f(e)),l(this.low^e.low,this.high^e.high,this.unsigned)},T.shiftLeft=function(e){return i(e)&&(e=e.toInt()),(e&=63)==0?this:e<32?l(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):l(0,this.low<<e-32,this.unsigned)},T.shl=T.shiftLeft,T.shiftRight=function(e){return i(e)&&(e=e.toInt()),(e&=63)==0?this:e<32?l(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):l(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},T.shr=T.shiftRight,T.shiftRightUnsigned=function(e){if(i(e)&&(e=e.toInt()),e&=63,e===0)return this;var t=this.high;if(e<32){var n=this.low;return l(n>>>e|t<<32-e,t>>>e,this.unsigned)}else if(e===32)return l(t,0,this.unsigned);else return l(t>>>e-32,0,this.unsigned)},T.shru=T.shiftRightUnsigned,T.shr_u=T.shiftRightUnsigned,T.toSigned=function(){return this.unsigned?l(this.low,this.high,!1):this},T.toUnsigned=function(){return this.unsigned?this:l(this.low,this.high,!0)},T.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},T.toBytesLE=function(){var e=this.high,t=this.low;return[t&255,t>>>8&255,t>>>16&255,t>>>24,e&255,e>>>8&255,e>>>16&255,e>>>24]},T.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,e&255,t>>>24,t>>>16&255,t>>>8&255,t&255]},r.fromBytes=function(e,t,n){return n?r.fromBytesLE(e,t):r.fromBytesBE(e,t)},r.fromBytesLE=function(e,t){return new r(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)},r.fromBytesBE=function(e,t){return new r(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)}}));function di(e){return Ti.fromString(e,!0,16)}function fi(e){return e.xor(e.shru(47))}function pi(e,t,n){let r=e.slice(t,t+n);return Ti.fromBytes(Array.from(r),!0,!0)}function mi(e,t){return pi(e,t,8)}function hi(e,t){return pi(e,t,4)}function gi(e,t){return t===0?e:e.shru(t).or(e.shl(64-t))}function _i(e,t,n=di(`9ddfea08eb382d69`)){let r=e.xor(t).mul(n);r=r.xor(r.shru(47));let i=t.xor(r).mul(n);return i=i.xor(i.shru(47)),i=i.mul(n),i}function vi(e,t,n,r,i,a){i=i.add(e),a=gi(a.add(i).add(r),21);let o=i;return i=i.add(t),i=i.add(n),a=a.add(gi(i,44)),[i.add(r),a.add(o)]}function yi(e,t,n,r){return vi(mi(e,t),mi(e,t+8),mi(e,t+16),mi(e,t+24),n,r)}function bi(e,t=e.length){if(t>=8){let n=Oi.add(t*2),r=mi(e,0).add(Oi),i=mi(e,t-8);return _i(gi(i,37).mul(n).add(r),gi(r,25).add(i).mul(n),n)}if(t>=4){let n=Oi.add(t*2);return _i(hi(e,0).shl(3).add(t),hi(e,t-4),n)}if(t>0){let n=e[0],r=e[t>>1],i=e[t-1],a=n+(r<<8),o=t+(i<<2);return fi(Oi.mul(a).xor(Ei.mul(o))).mul(Oi)}return Oi}function xi(e,t=e.length){let n=Oi.add(t*2),r=mi(e,0).mul(Di),i=mi(e,8),a=mi(e,t-8).mul(n),o=mi(e,t-16).mul(Oi);return _i(gi(r.add(i),43).add(gi(a,30)).add(o),r.add(gi(i.add(Oi),18)).add(a),n)}function Si(e,t=e.length){let n=Oi.add(t*2),r=mi(e,0).mul(Oi),i=mi(e,8),a=mi(e,t-8).mul(n),o=mi(e,t-16).mul(Oi),s=gi(r.add(i),43).add(gi(a,30)).add(o),c=_i(s,r.add(gi(i.add(Oi),18)).add(a),n),l=mi(e,16).mul(n),u=mi(e,24),d=s.add(mi(e,t-32)).mul(n),f=c.add(mi(e,t-24)).mul(n);return _i(gi(l.add(u),43).add(gi(d,30)).add(f),l.add(gi(u.add(r),18)).add(d),n)}function Ci(e,t=e.length){let n=Ti.fromNumber(81,!0);if(t<=32)return t<=16?bi(e,t):xi(e,t);if(t<=64)return Si(e,t);let r=n,i=n.mul(Di).add(113),a=fi(i.mul(Oi).add(113)).mul(Oi),o=[Ti.UZERO,Ti.UZERO],s=[Ti.UZERO,Ti.UZERO];r=r.mul(Oi).add(mi(e,0));let c=0,l=(t-1>>6)*64,u=l+(t-1&63)-63;do r=gi(r.add(i).add(o[0]).add(mi(e,c+8)),37).mul(Di),i=gi(i.add(o[1]).add(mi(e,c+48)),42).mul(Di),r=r.xor(s[1]),i=i.add(o[0]).add(mi(e,c+40)),a=gi(a.add(s[0]),33).mul(Di),o=yi(e,c,o[1].mul(Di),r.add(s[0])),s=yi(e,c+32,a.add(s[1]),i.add(mi(e,c+16))),[a,r]=[r,a],c+=64;while(c!==l);let d=Di.add(a.and(255).shl(1));return c=u,s[0]=s[0].add(t-1&63),o[0]=o[0].add(s[0]),s[0]=s[0].add(o[0]),r=gi(r.add(i).add(o[0]).add(mi(e,c+8)),37).mul(d),i=gi(i.add(o[1]).add(mi(e,c+48)),42).mul(d),r=r.xor(s[1].mul(9)),i=i.add(o[0].mul(9).add(mi(e,c+40))),a=gi(a.add(s[0]),33).mul(d),o=yi(e,c,o[1].mul(d),r.add(s[0])),s=yi(e,c+32,a.add(s[1]),i.add(mi(e,c+16))),[a,r]=[r,a],_i(_i(o[0],s[0],d).add(fi(i).mul(Ei)).add(a),_i(o[1],s[1],d).add(r),d)}var wi,Ti,Ei,Di,Oi,ki=o((()=>{wi=u(iee()),Ti=wi.default||wi,Ei=di(`c3a5c85c97cb3127`),Di=di(`b492b66fbe98f273`),Oi=di(`9ae16a3b2f90404f`)}));function Ai(e,t){return t===`string`?Pi(e):Mi([e],t)}function ji(e,t){return e instanceof Float32Array&&t===`float32`||e instanceof Int32Array&&t===`int32`||e instanceof Uint8Array&&t===`bool`}function Mi(e,t){if(t===`string`)throw Error(`Cannot convert a string[] to a TypedArray`);if(Array.isArray(e)&&(e=Li(e)),k().getBool(`DEBUG`)&&eee(e,t),ji(e,t))return e;if(t==null||t===`float32`||t===`complex64`)return new Float32Array(e);if(t===`int32`)return new Int32Array(e);if(t===`bool`){let t=new Uint8Array(e.length);for(let n=0;n<t.length;++n)Math.round(e[n])!==0&&(t[n]=1);return t}else throw Error(`Unknown data type ${t}`)}function Ni(){return k().platform.now()}function Pi(e,t=`utf-8`){return t||=`utf-8`,k().platform.encode(e,t)}function Fi(e,t=`utf-8`){return t||=`utf-8`,k().platform.decode(e,t)}function Ii(e){return k().platform.isTypedArray==null?li(e):k().platform.isTypedArray(e)}function Li(e,t=[],n=!1){if(t??=[],typeof e==`boolean`||typeof e==`number`||typeof e==`string`||We(e)||e==null||Ii(e)&&n)t.push(e);else if(Array.isArray(e)||Ii(e))for(let r=0;r<e.length;++r)Li(e[r],t,n);else{let r=-1;for(let t of Object.keys(e))/^([1-9]+[0-9]*|0)$/.test(t)&&(r=Math.max(r,Number(t)));for(let i=0;i<=r;i++)Li(e[i],t,n)}return t}var j=o((()=>{Ze(),ui(),Ge(),Ge(),ki()}));function aee(e,t,n){if(t!==`float32`)return!1;for(let t=0;t<e.length;t++){let r=e[t];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${n}'`),!0}return!1}var Ri,zi,Bi=o((()=>{Ze(),j(),Ri=class{constructor(e,t){this.backendTimer=e,this.logger=t,t??(this.logger=new zi)}profileKernel(e,t,n){let r,i=()=>{r=n()},a,o=Ni();if(this.backendTimer.timerAvailable())a=this.backendTimer.time(i);else{i();for(let e of r)e.dataSync();a=Promise.resolve({kernelMs:Ni()-o})}if(k().getBool(`CHECK_COMPUTATION_FOR_ERRORS`))for(let t=0;t<r.length;t++){let n=r[t];n.data().then(t=>{aee(t,n.dtype,e)})}return{kernelName:e,outputs:r,inputs:t,timeMs:a.then(e=>e.kernelMs),extraInfo:a.then(e=>e.getExtraProfileInfo==null?``:e.getExtraProfileInfo())}}logKernelProfile(e){let{kernelName:t,outputs:n,timeMs:r,inputs:i,extraInfo:a}=e;n.forEach(e=>{Promise.all([e.data(),r,a]).then(n=>{this.logger.logKernelProfile(t,e,n[0],n[1],i,n[2])})})}},zi=class{logKernelProfile(e,t,n,r,i,a){let o=typeof r==`number`?ye(`${r}ms`,9):r.error,s=ye(e,25),c=t.rank,l=t.size,u=ye(t.shape.toString(),14),d=``;for(let e in i){let n=i[e];if(n!=null){let r=n.shape||t.shape,i=r.length;d+=`${e}: ${i}D ${i>0?r:``} `}}console.log(`%c${s}\t%c${o}\t%c${c}D ${u}\t%c${l}\t%c${d}\t%c${a}`,`font-weight:bold`,`color:red`,`color:blue`,`color: orange`,`color: green`,`color: steelblue`)}}}));function Vi(e,t,n){let r={},i={};for(let e=0;e<t.length;e++)r[t[e].id]=!0;for(let n=0;n<e.length;n++){let a=e[n],o=a.inputs;for(let e in o){let n=o[e],s=!1;for(let e=0;e<t.length;e++)if(r[n.id]){a.outputs.forEach(e=>r[e.id]=!0),s=!0,i[a.id]=!0;break}if(s)break}}let a={};a[n.id]=!0;let o={};for(let t=e.length-1;t>=0;t--){let n=e[t],r=n.inputs;for(let e=0;e<n.outputs.length;e++)if(a[n.outputs[e].id]){for(let e in r)a[r[e].id]=!0,o[n.id]=!0;break}}let s=[];for(let t=0;t<e.length;t++){let n=e[t];if(i[n.id]&&o[n.id]){let e={};for(let t in n.inputs){let i=n.inputs[t];r[i.id]&&(e[t]=i)}let t=Object.assign({},n);t.inputs=e,t.outputs=n.outputs,s.push(t)}}return s}function Hi(e,t,n,r){for(let i=t.length-1;i>=0;i--){let a=t[i],o=[];if(a.outputs.forEach(t=>{let n=e[t.id];n==null?o.push(null):o.push(n)}),a.gradient==null)throw Error(`Cannot compute gradient: gradient function not found for ${a.kernelName}.`);let s=a.gradient(o);for(let t in a.inputs){if(!(t in s))throw Error(`Cannot backprop through input ${t}. Available gradients found: ${Object.keys(s)}.`);let i=n(()=>s[t]());if(i.dtype!==`float32`)throw Error(`Error in gradient for op ${a.kernelName}. The gradient of input ${t} must have 'float32' dtype, but has '${i.dtype}'`);let o=a.inputs[t];if(!ge(i.shape,o.shape))throw Error(`Error in gradient for op ${a.kernelName}. The gradient of input '${t}' has shape '${i.shape}', which does not match the shape of the input '${o.shape}'`);if(e[o.id]==null)e[o.id]=i;else{let t=e[o.id];e[o.id]=r(t,i),t.dispose()}}}}var Ui=o((()=>{j()}));function oee(e,t,n,r){let i=O(t),a=Wi(e,t,n,i),o=t.length,s=qi(e,t,n,i,a),c=[`Tensor`];return r&&(c.push(`  dtype: ${n}`),c.push(`  rank: ${o}`),c.push(`  shape: [${t}]`),c.push(`  values:`)),c.push(s.map(e=>`    `+e).join(`
`)),c.join(`
`)}function Wi(e,t,n,r){let i=D(t),a=r[r.length-1],o=Array(a).fill(0),s=t.length,c=n===`complex64`?Ji(e):e;if(s>1)for(let e=0;e<i/a;e++){let t=e*a;for(let e=0;e<a;e++)o[e]=Math.max(o[e],Gi(c[t+e],0,n).length)}return o}function Gi(e,t,n){let r;return r=Array.isArray(e)?`${parseFloat(e[0].toFixed(Zi))} + ${parseFloat(e[1].toFixed(Zi))}j`:ke(e)?`'${e}'`:n===`bool`?Ki(e):parseFloat(e.toFixed(Zi)).toString(),ye(r,t)}function Ki(e){return e===0?`false`:`true`}function qi(e,t,n,r,i,a=!0){let o=n===`complex64`?2:1,s=t[0],c=t.length;if(c===0)return n===`complex64`?[Gi(Ji(e)[0],0,n)]:n===`bool`?[Ki(e[0])]:[e[0].toString()];if(c===1){if(s>Yi){let t=Xi*o,r=Array.from(e.slice(0,t)),a=Array.from(e.slice((s-Xi)*o,s*o));return n===`complex64`&&(r=Ji(r),a=Ji(a)),[`[`+r.map((e,t)=>Gi(e,i[t],n)).join(`, `)+`, ..., `+a.map((e,t)=>Gi(e,i[s-Xi+t],n)).join(`, `)+`]`]}return[`[`+(n===`complex64`?Ji(e):Array.from(e)).map((e,t)=>Gi(e,i[t],n)).join(`, `)+`]`]}let l=t.slice(1),u=r.slice(1),d=r[0]*o,f=[];if(s>Yi){for(let t=0;t<Xi;t++){let r=t*d,a=r+d;f.push(...qi(e.slice(r,a),l,n,u,i,!1))}f.push(`...`);for(let t=s-Xi;t<s;t++){let r=t*d,a=r+d;f.push(...qi(e.slice(r,a),l,n,u,i,t===s-1))}}else for(let t=0;t<s;t++){let r=t*d,a=r+d;f.push(...qi(e.slice(r,a),l,n,u,i,t===s-1))}let p=c===2?`,`:``;f[0]=`[`+(s>0?f[0]+p:``);for(let e=1;e<f.length-1;e++)f[e]=` `+f[e]+p;let m=`,
`;for(let e=2;e<c;e++)m+=`
`;return f[f.length-1]=` `+f[f.length-1]+`]`+(a?``:m),f}function Ji(e){let t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}var Yi,Xi,Zi,see=o((()=>{j(),Yi=20,Xi=3,Zi=7}));function cee(e){$i=e}function lee(e){ea=e}function M(){return et(`Tensor`,()=>ta)}var Qi,$i,ea,ta,na,N=o((()=>{nt(),see(),j(),Qi=class{constructor(e,t,n){if(this.dtype=t,this.shape=e.slice(),this.size=D(e),n!=null){let e=n.length;E(e===this.size,()=>`Length of values '${e}' does not match the size inferred by the shape '${this.size}'.`)}if(t===`complex64`)throw Error(`complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).`);this.values=n||Te(t,this.size),this.strides=O(e)}set(e,...t){t.length===0&&(t=[0]),E(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);let n=this.locToIndex(t);this.values[n]=e}get(...e){e.length===0&&(e=[0]);let t=0;for(let n of e){if(n<0||n>=this.shape[t]){let t=`Requested out of range element at ${e}.   Buffer shape=${this.shape}`;throw Error(t)}t++}let n=e[e.length-1];for(let t=0;t<e.length-1;++t)n+=this.strides[t]*e[t];return this.values[n]}locToIndex(e){if(this.rank===0)return 0;if(this.rank===1)return e[0];let t=e[e.length-1];for(let n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t}indexToLoc(e){if(this.rank===0)return[];if(this.rank===1)return[e];let t=Array(this.shape.length);for(let n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return $i().makeTensor(this.values,this.shape,this.dtype)}},$i=null,ea=null,ta=class{constructor(e,t,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||`float32`,this.size=D(e),this.strides=O(e),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():`higher`}get rank(){return this.shape.length}async buffer(){let e=await this.data();return ea.buffer(this.shape,this.dtype,e)}bufferSync(){return ea.buffer(this.shape,this.dtype,this.dataSync())}async array(){let e=await this.data();return Ie(this.shape,e,this.dtype===`complex64`)}arraySync(){return Ie(this.shape,this.dataSync(),this.dtype===`complex64`)}async data(){this.throwIfDisposed();let e=$i().read(this.dataId);if(this.dtype===`string`){let t=await e;try{return t.map(e=>Fi(e))}catch{throw Error(`Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().`)}}return e}dataToGPU(e){return this.throwIfDisposed(),$i().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();let e=$i().readSync(this.dataId);if(this.dtype===`string`)try{return e.map(e=>Fi(e))}catch{throw Error(`Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().`)}return e}async bytes(){this.throwIfDisposed();let e=await $i().read(this.dataId);return this.dtype===`string`?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),$i().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw Error(`Tensor is disposed.`)}print(e=!1){return ea.print(this,e)}clone(){return this.throwIfDisposed(),ea.clone(this)}toString(e=!1){return oee(this.dataSync(),this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),ea.cast(this,e)}variable(e=!0,t,n){return this.throwIfDisposed(),$i().makeVariable(this,e,t,n)}},Object.defineProperty(ta,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null}),M(),na=class extends ta{constructor(e,t,n,r){super(e.shape,e.dtype,e.dataId,r),this.trainable=t,this.name=n}assign(e){if(e.dtype!==this.dtype)throw Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!ge(e.shape,this.shape))throw Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);$i().disposeTensor(this),this.dataId=e.dataId,$i().incRef(this,null)}dispose(){$i().disposeVariable(this),this.isDisposedInternal=!0}},Object.defineProperty(na,Symbol.hasInstance,{value:e=>e instanceof ta&&e.assign!=null&&e.assign instanceof Function})}));function ra(e,t){if(e===`string`||t===`string`){if(e===`string`&&t===`string`)return`string`;throw Error(`Can not upcast ${e} with ${t}`)}return da[e][t]}function ia(e){return ra(e,`int32`)}function aa(e){return typeof e==`object`&&!!e&&`texture`in e&&e.texture instanceof WebGLTexture}function oa(e){return typeof GPUBuffer<`u`&&typeof e==`object`&&!!e&&`buffer`in e&&e.buffer instanceof GPUBuffer}var uee,sa,ca,la,ua,da,fa=o((()=>{(function(e){e.R0=`R0`,e.R1=`R1`,e.R2=`R2`,e.R3=`R3`,e.R4=`R4`,e.R5=`R5`,e.R6=`R6`})(uee||={}),(function(e){e.float32=`float32`,e.int32=`int32`,e.bool=`int32`,e.complex64=`complex64`})(sa||={}),(function(e){e.float32=`float32`,e.int32=`int32`,e.bool=`bool`,e.complex64=`complex64`})(ca||={}),(function(e){e.float32=`float32`,e.int32=`float32`,e.bool=`float32`,e.complex64=`complex64`})(la||={}),(function(e){e.float32=`complex64`,e.int32=`complex64`,e.bool=`complex64`,e.complex64=`complex64`})(ua||={}),da={float32:la,int32:sa,bool:ca,complex64:ua}}));function pa(e,t){if(e.dtype===t.dtype)return[e,t];let n=ra(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function ma(e,t){return t.some(t=>t.id===e.id)}function ha(e){let t=[];return ga(e,t,new Set),t}function ga(e,t,n){if(e==null)return;if(e instanceof ta){t.push(e);return}if(!_a(e))return;let r=e;for(let e in r){let i=r[e];n.has(i)||(n.add(i),ga(i,t,n))}}function _a(e){return Array.isArray(e)||typeof e==`object`}var va=o((()=>{N(),fa()}));function ya(e){return e.kernelName!=null}function ba(e){let t=Re(D(e),`float32`);return P.makeTensor(t,e,`float32`)}function xa(){let e=Qe();if(e._tfengine==null){let t=new Ye(e);e._tfengine=new wa(t)}return ree(e._tfengine.ENV),cee(()=>e._tfengine),e._tfengine}function Sa(e,t){let n={a:e,b:t};return P.runKernel(`Add`,n)}var Ca,wa,P,F=o((()=>{ce(),Ze(),nt(),A(),ci(),$r(),Bi(),Ui(),N(),va(),j(),Ca=class{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(let e in this.registeredVariables)this.registeredVariables[e].dispose()}},wa=class e{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Ca}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let n=e[t];if(await this.initializeBackend(n).success){await this.setBackend(n);return}}throw Error(`Could not initialize any backends, all backend initializations failed.`)}get backend(){if(this.pendingBackendInit!=null)throw Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){let{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry))if(e in this.registryFactory){let{asyncInit:t}=this.initializeBackend(e);if(t)return null}else return null;return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,n=1){return e in this.registryFactory?(Zr(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:n},!0)}async setBackend(e){if(this.registryFactory[e]==null)throw Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,this.registry[e]==null){this.backendInstance=null;let{success:t,asyncInit:n}=this.initializeBackend(e);if(!(n?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new Ri(this.backendInstance),!0}setupRegisteredKernels(){ni(this.backendName).forEach(e=>{e.setupFunc!=null&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){ni(e).forEach(t=>{t.disposeFunc!=null&&t.disposeFunc(this.registry[e])})}initializeBackend(e){let t=this.registryFactory[e];if(t==null)throw Error(`Cannot initialize backend ${e}, no registration found.`);try{let n=t.factory();if(n&&!(n instanceof se)&&typeof n.then==`function`){let t=++this.pendingBackendInitId,r=n.then(n=>t<this.pendingBackendInitId?!1:(this.registry[e]=n,this.pendingBackendInit=null,!0)).catch(n=>t<this.pendingBackendInitId?!1:(this.pendingBackendInit=null,Zr(`Initialization of backend ${e} failed`),Zr(n.stack||n.message),!1));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}else return this.registry[e]=n,{success:!0,asyncInit:!1}}catch(t){return Zr(`Initialization of backend ${e} failed`),Zr(t.stack||t.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw Error(`${e} backend not found in registry`);this.backendName===e&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw Error(`No backend found in registry.`);return Object.keys(this.registryFactory).sort((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let n=e[t],{success:r,asyncInit:i}=this.initializeBackend(n);if(i||r)return{name:n,asyncInit:i}}throw Error(`Could not initialize any backends, all backend initializations failed.`)}moveData(e,t){let n=this.state.tensorInfo.get(t),r=n.backend,i=this.readSync(t),a=r.refCount(t);r.disposeData(t,!0),n.backend=e,e.move(t,i,n.shape,n.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let n=null;if(t==null){if(typeof e!=`function`)throw Error(`Please provide a function to tidy()`);t=e}else{if(typeof e!=`string`&&!(e instanceof String))throw Error(`When calling with two arguments, the first argument to tidy() must be a string`);if(typeof t!=`function`)throw Error(`When calling with two arguments, the 2nd argument to tidy() must be a function`);n=e}let r;return this.scopedRun(()=>this.startScope(n),()=>this.endScope(r),()=>(r=t(),r instanceof Promise&&console.error(`Cannot return a Promise inside of tidy.`),r))}scopedRun(e,t,n){e();try{let e=n();return t(),e}catch(e){throw t(),e}}nextTensorId(){return e.nextTensorId++}nextVariableId(){return e.nextVariableId++}clone(e){let t=P.runKernel(dn,{x:e}),n={x:e};return this.addTapeNode(this.state.activeScope.name,n,[t],e=>({x:()=>{let t={x:e};return P.runKernel(Ct,t,{dtype:`float32`})}}),[],{}),t}runKernel(e,t,n){if(this.backendName??this.backend,ei(e,this.backendName)==null)throw Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:n})}shouldCheckForMemLeaks(){return this.ENV.getBool(`IS_TEST`)}checkKernelForMemLeak(e,t,n){let r=this.backend.numDataIds(),i=0;n.forEach(e=>{i+=e.dtype===`complex64`?3:1});let a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],o=r-t-i-a;if(o>0)throw Error(`Backend '${this.backendName}' has an internal memory leak (${o} data ids) after running '${e}'`)}runKernelFunc(e){let t,n=[],r=this.isTapeOn(),i=this.state.numBytes,a=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let o;this.backendName??this.backend;let s,c=ya(e)?e.kernelName:this.state.activeScope==null?``:this.state.activeScope.name;if(ya(e)){let{kernelName:t,inputs:i,attrs:a}=e;this.backendName??this.backend;let c=ei(t,this.backendName);E(c!=null,()=>`Cannot find registered kernel '${t}' for backend '${this.backendName}'`),o=()=>{let e=this.backend.numDataIds();s=c.kernelFunc({inputs:i,attrs:a,backend:this.backend});let o=Array.isArray(s)?s:[s];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(t,e,o);let l=o.map(e=>e.rank==null?this.makeTensorFromTensorInfo(e):e);if(r){let e=this.getTensorsForGradient(t,i,l);n=this.saveTensorsForBackwardMode(e)}return l}}else{let{forwardFunc:t}=e,i=e=>{r&&(n=e.map(e=>this.keep(this.clone(e))))};o=()=>{let e=this.backend.numDataIds();s=this.tidy(()=>t(this.backend,i));let n=Array.isArray(s)?s:[s];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(c,e,n),n}}let{inputs:l,attrs:u}=e,d=ya(e)?null:e.backwardsFunc,f;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool(`DEBUG`)&&!this.state.profiling?t=o():(f=this.profiler.profileKernel(c,l,()=>o()),this.ENV.getBool(`DEBUG`)&&this.profiler.logKernelProfile(f),t=f.outputs)}),r&&this.addTapeNode(c,l,t,d,n,u),this.state.profiling&&this.state.activeProfile.kernels.push({name:c,bytesAdded:this.state.numBytes-i,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(l).map(e=>l[e]==null?null:l[e].shape),outputShapes:t.map(e=>e.shape),kernelTimeMs:f.timeMs,extraInfo:f.extraInfo}),Array.isArray(s)?t:t[0]}saveTensorsForBackwardMode(e){return e.map(e=>this.keep(this.clone(e)))}getTensorsForGradient(e,t,n){let r=ti(e);if(r!=null){let e=r.inputsToSave||[],i=r.outputsToSave||[],a;r.saveAllInputs?(E(Array.isArray(t),()=>`saveAllInputs is true, expected inputs to be an array.`),a=Object.keys(t).map(e=>t[e])):a=e.map(e=>t[e]);let o=n.filter((e,t)=>i[t]);return a.concat(o)}return[]}makeTensor(e,t,n,r){if(e==null)throw Error(`Values passed to engine.makeTensor() are null`);n||=`float32`,r||=this.backend;let i=e;n===`string`&&ke(e[0])&&(i=e.map(e=>Pi(e)));let a=r.write(i,t,n),o=new ta(t,n,a,this.nextTensorId());if(this.trackTensor(o,r),n===`string`){let e=this.state.tensorInfo.get(a),t=tee(i);this.state.numBytes+=t-e.bytes,e.bytes=t}return o}makeTensorFromDataId(e,t,n,r){n||=`float32`;let i={dataId:e,shape:t,dtype:n};return this.makeTensorFromTensorInfo(i,r)}makeTensorFromTensorInfo(e,t){let{dataId:n,shape:r,dtype:i}=e,a=new ta(r,i,n,this.nextTensorId());return this.trackTensor(a,t),a}makeVariable(e,t=!0,n,r){n||=this.nextVariableId().toString(),r!=null&&r!==e.dtype&&(e=e.cast(r));let i=new na(e,t,n,this.nextTensorId());if(this.state.registeredVariables[i.name]!=null)throw Error(`Variable with name ${i.name} was already registered`);return this.state.registeredVariables[i.name]=i,this.incRef(i,this.backend),i}trackTensor(e,t){this.state.numTensors++,e.dtype===`string`&&this.state.numStringTensors++;let n=0;e.dtype!==`complex64`&&e.dtype!==`string`&&(n=e.size*Oe(e.dtype)),this.state.numBytes+=n,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:n})),e instanceof na||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;let t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,e.dtype===`string`&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),e.dtype!==`complex64`&&e.dtype!==`string`){let t=e.size*Oe(e.dtype);this.state.numBytes-=t}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(let e in this.state.registeredVariables){let t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),this.state.registeredVariables[e.name]!=null&&delete this.state.registeredVariables[e.name]}memory(){let e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,e.reasons??=[],e.reasons.push(`Memory usage by string tensors is approximate (2 bytes per character)`)),e}async profile(e){this.state.profiling=!0;let t=this.state.numBytes,n=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(e=>e.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-n;for(let e of this.state.activeProfile.kernels)e.kernelTimeMs=await e.kernelTimeMs,e.extraInfo=await e.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(e,t,n,r,i,a){let o={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:n,saved:i},s=ti(e);s!=null&&(r=s.gradFunc),r!=null&&(o.gradient=e=>(e=e.map((e,t)=>{if(e==null){let e=n[t],r=ze(e.size,e.dtype);return this.makeTensor(r,e.shape,e.dtype)}return e}),r(e.length>1?e:e[0],i,a))),this.state.activeTape.push(o)}keep(e){return e.kept=!0,e}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){let t={track:[],name:`unnamed scope`,id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){let t=ha(e),n=new Set(t.map(e=>e.id));for(let e=0;e<this.state.activeScope.track.length;e++){let t=this.state.activeScope.track[e];!t.kept&&!n.has(t.id)&&t.dispose()}let r=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(e=>{!e.kept&&e.scopeId===r.id&&this.track(e)})}gradients(e,t,n,r=!1){if(E(t.length>0,()=>`gradients() received an empty list of xs.`),n!=null&&n.dtype!==`float32`)throw Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);let i=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy(`forward`,e));E(i instanceof ta,()=>`The result y returned by f() must be a tensor.`);let a=Vi(this.state.activeTape,t,i);if(!r&&a.length===0&&t.length>0)throw Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.`);return this.tidy(`backward`,()=>{let e={};e[i.id]=n??ba(i.shape),Hi(e,a,e=>this.tidy(e),Sa);let r=t.map(t=>e[t.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(e=>{for(let t of e.saved)t.dispose()}),this.state.activeTape=null),{value:i,grads:r}})}customGrad(e){return E(Ne(e),()=>`The f passed in customGrad(f) must be a function.`),(...t)=>{E(t.every(e=>e instanceof ta),()=>`The args passed in customGrad(f)(x1, x2,...) must all be tensors`);let n,r={};return t.forEach((e,t)=>{r[t]=e}),this.runKernelFunc({forwardFunc:(r,i)=>(n=e(...t,i),E(n.value instanceof ta,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),E(Ne(n.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),n.value),backwardsFunc:(e,r)=>{let i=n.gradFunc(e,r),a=Array.isArray(i)?i:[i];E(a.length===t.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),E(a.every(e=>e instanceof ta),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let o={};return a.forEach((e,t)=>{o[t]=()=>e}),o},inputs:r})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}async time(e){let t=Ni(),n=await this.backend.time(e);return n.wallMs=Ni()-t,n}track(e){return this.state.activeScope!=null&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Ca;for(let e in this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}},wa.nextTensorId=0,wa.nextVariableId=0,P=xa()}));function Ta(){return typeof navigator<`u`&&navigator!=null}function Ea(e){if(Oa!==void 0)return Oa;if(e||Ta()){if(e||=navigator,e.product===`ReactNative`)return!0;let t=e.userAgent||e.vendor||(typeof window<`u`?window.opera:``);if(!t){let t=e;return t.userAgentData&&t.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function Da(){return typeof window<`u`&&window.document!=null||typeof WorkerGlobalScope<`u`}var Oa,ka=o((()=>{})),Aa,ja=o((()=>{F(),ka(),Ze(),Aa=k(),Aa.registerFlag(`DEBUG`,()=>!1,e=>{e&&console.warn(`Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.`)}),Aa.registerFlag(`IS_BROWSER`,()=>Da()),Aa.registerFlag(`IS_NODE`,()=>typeof process<`u`&&process.versions!==void 0&&process.versions.node!==void 0),Aa.registerFlag(`IS_CHROME`,()=>typeof navigator<`u`&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),Aa.registerFlag(`IS_SAFARI`,()=>typeof navigator<`u`&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor)),Aa.registerFlag(`PROD`,()=>!1),Aa.registerFlag(`TENSORLIKE_CHECK_SHAPE_CONSISTENCY`,()=>Aa.getBool(`DEBUG`)),Aa.registerFlag(`DEPRECATION_WARNINGS_ENABLED`,()=>!0),Aa.registerFlag(`IS_TEST`,()=>!1),Aa.registerFlag(`CHECK_COMPUTATION_FOR_ERRORS`,()=>Aa.getBool(`DEBUG`)),Aa.registerFlag(`WRAP_TO_IMAGEBITMAP`,()=>!1),Aa.registerFlag(`CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU`,()=>!1),Aa.registerFlag(`USE_SETTIMEOUTCUSTOM`,()=>!1)}));function Ma(e,t){let n=e;if(Ii(e))return t===`string`?[]:[e.length];if(aa(e)){let t=e.channels||`RGBA`;return[e.height,e.width*t.length]}else if(oa(e))return[e.buffer.size/(t==null?4:Oe(t))];if(!Array.isArray(e))return[];let r=[];for(;Array.isArray(n)||Ii(n)&&t!==`string`;)r.push(n.length),n=n[0];return Array.isArray(e)&&k().getBool(`TENSORLIKE_CHECK_SHAPE_CONSISTENCY`)&&Na(e,r,[]),r}function Na(e,t,n){if(n||=[],!Array.isArray(e)&&!Ii(e)){E(t.length===0,()=>`Element arr[${n.join(`][`)}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}E(t.length>0,()=>`Element arr[${n.join(`][`)}] should be a primitive, but is an array of ${e.length} elements`),E(e.length===t[0],()=>`Element arr[${n.join(`][`)}] should have ${t[0]} elements, but has ${e.length} elements`);let r=t.slice(1);for(let t=0;t<e.length;++t)Na(e[t],r,n.concat(t))}function Pa(e,t,n,r){if(e!==`string_or_numeric`){if(e==null)throw Error(`Expected dtype cannot be null.`);if(e!==`numeric`&&e!==t||e===`numeric`&&t===`string`)throw Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function I(e,t,n,r=`numeric`){if(e instanceof M())return Pa(r,e.dtype,t,n),e;let i=Me(e);if(i!==`string`&&[`bool`,`int32`,`float32`].indexOf(r)>=0&&(i=r),Pa(r,i,t,n),e==null||!Ii(e)&&!Array.isArray(e)&&typeof e!=`number`&&typeof e!=`boolean`&&typeof e!=`string`){let r=e==null?`null`:e.constructor.name;throw Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${r}'`)}let a=Ma(e,i);!Ii(e)&&!Array.isArray(e)&&(e=[e]);let o=i===`string`?Li(e,[],!0):Mi(e,i);return P.makeTensor(o,a,i)}function Fa(e,t,n,r=`numeric`){if(!Array.isArray(e))throw Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((e,i)=>I(e,`${t}[${i}]`,n,r))}var L=o((()=>{F(),Ze(),N(),fa(),j(),Ge()}));function R(e){let t=Object.keys(e);if(t.length!==1)throw Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0],r=e[n];n.endsWith(`_`)&&(n=n.substring(0,n.length-1)),n+=Ia;let i=(...e)=>{P.startScope(n);try{let t=r(...e);return We(t)&&console.error(`Cannot return a Promise inside of tidy.`),P.endScope(t),t}catch(e){throw P.endScope(null),e}};return Object.defineProperty(i,"name",{value:n,configurable:!0}),i}var Ia,z=o((()=>{F(),j(),Ia=`__op`}));function La(e,t){let n=I(e,`real`,`complex`),r=I(t,`imag`,`complex`);me(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`);let i={real:n,imag:r};return P.runKernel(Et,i)}var Ra,za=o((()=>{F(),A(),L(),j(),z(),Ra=R({complex_:La})}));function Ba(e,t,n,r){if(r==null)r=Me(e);else if(r===`complex64`)throw Error(`Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).`);if(oa(e)||aa(e)){if(r!==`float32`&&r!==`int32`)throw Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${r}.`);return P.backend.createTensorFromGPUData(e,t||n,r)}if(!Ii(e)&&!Array.isArray(e)&&typeof e!=`number`&&typeof e!=`boolean`&&typeof e!=`string`)throw Error(`values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray`);if(t!=null){Ve(t);let e=D(t),r=D(n);E(e===r,()=>`Based on the provided shape, [${t}], the tensor should have ${e} values but has ${r}`);for(let e=0;e<n.length;++e){let r=n[e],i=e!==n.length-1||r!==D(t.slice(e));E(n[e]===t[e]||!i,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return!Ii(e)&&!Array.isArray(e)&&(e=[e]),t||=n,e=r===`string`?Li(e,[],!0):Mi(e,r),P.makeTensor(e,t,r)}var Va=o((()=>{F(),fa(),j()}));function Ha(e,t,n){return Ba(e,t,Ma(e,n),n)}var Ua=o((()=>{L(),Va()}));function Wa(e,t){let n=0,r=e.length;for(;n<=r;){let i=Math.floor((r-n)/2)+n,a=t(e[i]);if(a===0)return i;a<0?r=i:n=i+1}return-1}var Ga,Ka=o((()=>{j(),Ga=class e{static join(t){return new e(t).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,e==null||(e instanceof Array||(e=[e]),e=e.map(e=>Ii(e)?e.buffer:e),e.length===0))return;this.bufferUniformSize=e[0].byteLength;let t=0;for(let n=0;n<e.length;n++){let r=e[n];n!==e.length-1&&r.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);let i=t+r.byteLength;this.shards.push({buffer:r,start:t,end:i}),t=i}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,t=this.byteLength){if(this.shards.length===0||(e=isNaN(Number(e))?0:e,t=isNaN(Number(t))?0:t,e=Math.max(0,e),t=Math.min(this.byteLength,t),t<=e))return new ArrayBuffer(0);let n=this.findShardForByte(e);if(n===-1)throw Error(`Could not find start shard for byte ${e}`);let r=t-e,i=new ArrayBuffer(r),a=new Uint8Array(i),o=0;for(let r=n;r<this.shards.length;r++){let n=this.shards[r],i=e+o-n.start,s=o,c=Math.min(t,n.end)-n.start,l=new Uint8Array(n.buffer,i,c-i);if(a.set(l,s),o+=l.length,t<n.end)break}return i}findShardForByte(e){if(this.shards.length===0||e<0||e>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function t(t){return e<t.start?-1:+(e>=t.end)}if(t(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;let n=Wa(this.shards,t);return n===-1?-1:(this.previousShardIndex=n,this.previousShardIndex)}}}));function qa(){return P}function Ja(){return P.memory()}function B(e,t){return P.tidy(e,t)}function Ya(e){ha(e).forEach(e=>e.dispose())}function Xa(e){return P.keep(e)}function Za(e,t,n=1){return P.registerBackend(e,t,n)}function Qa(){return P.backend}var $a=o((()=>{F(),N(),va()}));async function eo(e,t){let n=[],r=[],i=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);for(let a=0;a<i.length;++a){let o=i[a],s=Array.isArray(e)?e[a].tensor:e[o];if(s.dtype!==`float32`&&s.dtype!==`int32`&&s.dtype!==`bool`&&s.dtype!==`string`&&s.dtype!==`complex64`)throw Error(`Unsupported dtype in weight '${o}': ${s.dtype}`);let c={name:o,shape:s.shape,dtype:s.dtype};if(s.dtype===`string`){let e=new Promise(async e=>{let t=await s.bytes(),n=t.reduce((e,t)=>e+t.length,0)+co*t.length,r=new Uint8Array(n),i=0;for(let e=0;e<t.length;e++){let n=t[e],a=new Uint8Array(new Uint32Array([n.length]).buffer);r.set(a,i),i+=co,r.set(n,i),i+=n.length}e(r)});r.push(e)}else r.push(s.data());t!=null&&(c.group=t),n.push(c)}return{data:to(await Promise.all(r)),specs:n}}function to(e){if(e===null)throw Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0,n=[];e.forEach(e=>{if(t+=e.byteLength,n.push(e.byteLength===e.buffer.byteLength?e:new e.constructor(e)),!(e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array))throw Error(`Unsupported TypedArray subtype: ${e.constructor.name}`)});let r=new Uint8Array(t),i=0;return n.forEach(e=>{r.set(new Uint8Array(e.buffer),i),i+=e.byteLength}),r.buffer}function no(e){return lo?Buffer.byteLength(e,`utf8`):new Blob([e]).size}function ro(e){if(lo)return Buffer.from(e).toString(`base64`);let t=new Uint8Array(e),n=``;for(let e=0,r=t.length;e<r;e++)n+=String.fromCharCode(t[e]);return btoa(n)}function io(e){if(lo){let t=Buffer.from(e,`base64`);return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;++e)n.set([t.charCodeAt(e)],e);return n.buffer}function dee(e){return Ga.join(e)}function ao(e,t){let n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return e.signature!=null&&(n.signature=e.signature),e.userDefinedMetadata!=null&&(n.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(n.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(n.initializerSignature=e.initializerSignature),e.trainingConfig!=null&&(n.trainingConfig=e.trainingConfig),n}function fee(e,t,n){let r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(e.trainingConfig!=null&&(r.trainingConfig=e.trainingConfig),e.weightsManifest!=null){if(!t)throw Error(`modelJSON has weightsManifest but weightSpecs is null`);if(!n)throw Error(`modelJSON has weightsManifest but weightData is null`);r.weightSpecs=t,r.weightData=n}return e.signature!=null&&(r.signature=e.signature),e.userDefinedMetadata!=null&&(r.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(r.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(r.initializerSignature=e.initializerSignature),r}async function pee(e,t){let n,r;return e.weightsManifest!=null&&([n,r]=await t(e.weightsManifest)),fee(e,n,r)}function oo(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`Expected JSON model topology, received ArrayBuffer.`);return{dateSaved:new Date,modelTopologyType:`JSON`,modelTopologyBytes:e.modelTopology==null?0:no(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:no(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:new Ga(e.weightData).byteLength}}function so(e){let t=[];for(let n of e)t.push(...n.weights);return t}var co,lo,uo=o((()=>{Ka(),co=4,lo=typeof Buffer<`u`&&(typeof Blob>`u`||typeof atob>`u`||typeof btoa>`u`)})),fo,po,mo=o((()=>{fo=class e{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return e.instance??=new e,e.instance}static registerSaveRouter(t){e.getInstance().saveRouters.push(t)}static registerLoadRouter(t){e.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return e.getHandlers(t,`save`)}static getLoadHandlers(t,n){return e.getHandlers(t,`load`,n)}static getHandlers(t,n,r){let i=[];return(n===`load`?e.getInstance().loadRouters:e.getInstance().saveRouters).forEach(e=>{let n=e(t,r);n!==null&&i.push(n)}),i}},po=e=>fo.getSaveHandlers(e)}));function ho(){if(!k().getBool(`IS_BROWSER`))throw Error(`Failed to obtain IndexedDB factory because the current environmentis not a web browser.`);let e=typeof window>`u`?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw Error(`The current browser does not appear to support IndexedDB.`);return t}function go(e){let t=e.result;t.createObjectStore(xo,{keyPath:`modelPath`}),t.createObjectStore(So,{keyPath:`modelPath`})}function _o(e){return new Co(e)}function vo(e){return e.startsWith(Co.URL_SCHEME)?e.slice(Co.URL_SCHEME.length):e}var yo,bo,xo,So,Co,wo,To,Eo=o((()=>{ja(),Ze(),uo(),mo(),Ka(),yo=`tensorflowjs`,bo=1,xo=`models_store`,So=`model_info_store`,Co=class{constructor(e){if(this.indexedDB=ho(),e==null||!e)throw Error(`For IndexedDB, modelPath must not be null, undefined or empty.`);this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserLocalStorage.save() does not support saving model topology in binary formats yet.`);return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise((e,n)=>{let r=this.indexedDB.open(yo,bo);r.onupgradeneeded=()=>go(r),r.onsuccess=()=>{let i=r.result;if(t==null){let t=i.transaction(xo,`readonly`),r=t.objectStore(xo).get(this.modelPath);r.onsuccess=()=>{if(r.result==null)return i.close(),n(Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));e(r.result.modelArtifacts)},r.onerror=e=>(i.close(),n(r.error)),t.oncomplete=()=>i.close()}else{t.weightData=Ga.join(t.weightData);let r=oo(t),a=i.transaction(So,`readwrite`),o=a.objectStore(So),s;try{s=o.put({modelPath:this.modelPath,modelArtifactsInfo:r})}catch(e){return n(e)}let c;s.onsuccess=()=>{c=i.transaction(xo,`readwrite`);let s=c.objectStore(xo),l;try{l=s.put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:r})}catch(e){return n(e)}l.onsuccess=()=>e({modelArtifactsInfo:r}),l.onerror=e=>{o=a.objectStore(So);let t=o.delete(this.modelPath);t.onsuccess=()=>(i.close(),n(l.error)),t.onerror=e=>(i.close(),n(l.error))}},s.onerror=e=>(i.close(),n(s.error)),a.oncomplete=()=>{c==null?i.close():c.oncomplete=()=>i.close()}}},r.onerror=e=>n(r.error)})}},Co.URL_SCHEME=`indexeddb://`,wo=e=>k().getBool(`IS_BROWSER`)&&!Array.isArray(e)&&e.startsWith(Co.URL_SCHEME)?_o(e.slice(Co.URL_SCHEME.length)):null,fo.registerSaveRouter(wo),fo.registerLoadRouter(wo),To=class{constructor(){this.indexedDB=ho()}async listModels(){return new Promise((e,t)=>{let n=this.indexedDB.open(yo,bo);n.onupgradeneeded=()=>go(n),n.onsuccess=()=>{let r=n.result,i=r.transaction(So,`readonly`),a=i.objectStore(So).getAll();a.onsuccess=()=>{let t={};for(let e of a.result)t[e.modelPath]=e.modelArtifactsInfo;e(t)},a.onerror=e=>(r.close(),t(a.error)),i.oncomplete=()=>r.close()},n.onerror=e=>t(n.error)})}async removeModel(e){return e=vo(e),new Promise((t,n)=>{let r=this.indexedDB.open(yo,bo);r.onupgradeneeded=()=>go(r),r.onsuccess=()=>{let i=r.result,a=i.transaction(So,`readwrite`),o=a.objectStore(So),s=o.get(e),c;s.onsuccess=()=>{if(s.result==null)return i.close(),n(Error(`Cannot find model with path '${e}' in IndexedDB.`));{let r=o.delete(e),a=()=>{c=i.transaction(xo,`readwrite`);let r=c.objectStore(xo).delete(e);r.onsuccess=()=>t(s.result.modelArtifactsInfo),r.onerror=e=>n(s.error)};r.onsuccess=a,r.onerror=e=>(a(),i.close(),n(s.error))}},s.onerror=e=>(i.close(),n(s.error)),a.oncomplete=()=>{c==null?i.close():c.oncomplete=()=>i.close()}},r.onerror=e=>n(r.error)})}}}));function Do(e){return{info:[Ao,e,jo].join(ko),topology:[Ao,e,Mo].join(ko),weightSpecs:[Ao,e,No].join(ko),weightData:[Ao,e,Po].join(ko),modelMetadata:[Ao,e,Fo].join(ko)}}function Oo(e){for(let t of Object.values(e))window.localStorage.removeItem(t)}function mee(e){let t=e.split(ko);if(t.length<3)throw Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(ko)}function hee(e){return e.startsWith(Io.URL_SCHEME)?e.slice(Io.URL_SCHEME.length):e}function gee(e){return new Io(e)}var ko,Ao,jo,Mo,No,Po,Fo,Io,Lo,Ro,zo=o((()=>{ja(),Ze(),j(),uo(),Ka(),mo(),ko=`/`,Ao=`tensorflowjs_models`,jo=`info`,Mo=`model_topology`,No=`weight_specs`,Po=`weight_data`,Fo=`model_metadata`,Io=class{constructor(e){if(!k().getBool(`IS_BROWSER`)||typeof window>`u`||window.localStorage===void 0)throw Error(`The current environment does not support local storage.`);if(this.LS=window.localStorage,e==null||!e)throw Error(`For local storage, modelPath must not be null, undefined or empty.`);this.modelPath=e,this.keys=Do(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserLocalStorage.save() does not support saving model topology in binary formats yet.`);{let t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),r=oo(e),i=Ga.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,ro(i));let a={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:e.signature==null?void 0:e.signature,userDefinedMetadata:e.userDefinedMetadata==null?void 0:e.userDefinedMetadata,modelInitializer:e.modelInitializer==null?void 0:e.modelInitializer,initializerSignature:e.initializerSignature==null?void 0:e.initializerSignature,trainingConfig:e.trainingConfig==null?void 0:e.trainingConfig};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:r}}catch{throw Oo(this.keys),Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){let e=JSON.parse(this.LS.getItem(this.keys.info));if(e==null)throw Error(`In local storage, there is no model with name '${this.modelPath}'`);if(e.modelTopologyType!==`JSON`)throw Error(`BrowserLocalStorage does not support loading non-JSON model topology yet.`);let t={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(n==null)throw Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=n;let r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(r==null)throw Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=r;let i=this.LS.getItem(this.keys.modelMetadata);if(i!=null){let e=JSON.parse(i);t.format=e.format,t.generatedBy=e.generatedBy,t.convertedBy=e.convertedBy,e.signature!=null&&(t.signature=e.signature),e.userDefinedMetadata!=null&&(t.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(t.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(t.initializerSignature=e.initializerSignature),e.trainingConfig!=null&&(t.trainingConfig=e.trainingConfig)}let a=this.LS.getItem(this.keys.weightData);if(a==null)throw Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=io(a),t}},Io.URL_SCHEME=`localstorage://`,Lo=e=>k().getBool(`IS_BROWSER`)&&!Array.isArray(e)&&e.startsWith(Io.URL_SCHEME)?gee(e.slice(Io.URL_SCHEME.length)):null,fo.registerSaveRouter(Lo),fo.registerLoadRouter(Lo),Ro=class{constructor(){E(k().getBool(`IS_BROWSER`),()=>`Current environment is not a web browser`),E(typeof window>`u`||window.localStorage!==void 0,()=>`Current browser does not appear to support localStorage`),this.LS=window.localStorage}async listModels(){let e={};for(let t=0;t<this.LS.length;++t){let n=this.LS.key(t);if(n.startsWith(`tensorflowjs_models/`)&&n.endsWith(`/info`)){let t=mee(n);e[t]=JSON.parse(this.LS.getItem(n))}}return e}async removeModel(e){e=hee(e);let t=Do(e);if(this.LS.getItem(t.info)==null)throw Error(`Cannot find model at path '${e}'`);let n=JSON.parse(this.LS.getItem(t.info));return Oo(t),n}}})),Bo,Vo,Ho=o((()=>{j(),Bo=`://`,Vo=class e{constructor(){this.managers={}}static getInstance(){return e.instance??=new e,e.instance}static registerManager(t,n){E(t!=null,()=>`scheme must not be undefined or null.`),t.endsWith(Bo)&&(t=t.slice(0,t.indexOf(Bo))),E(t.length>0,()=>`scheme must not be an empty string.`);let r=e.getInstance();E(r.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),r.managers[t]=n}static getManager(t){let n=e.getInstance().managers[t];if(n==null)throw Error(`Cannot find model manager for scheme '${t}'`);return n}static getSchemes(){return Object.keys(e.getInstance().managers)}}})),Uo,_ee=o((()=>{if(ja(),Ze(),Eo(),zo(),Ho(),ui(),Uo=class{constructor(){this.messageName=`setTimeoutCustom`,this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if(t!==`utf-8`&&t!==`utf8`)throw Error(`Browser's encoder only supports utf-8, but got ${t}`);return this.textEncoder??=new TextEncoder,this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){if(typeof window>`u`||!k().getBool(`USE_SETTIMEOUTCUSTOM`)){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},`*`)},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener(`message`,e=>{if(e.source===window&&e.data.name===this.messageName){e.stopPropagation();let t=this.functionRefs[e.data.index];t(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(e){return li(e)}},k().get(`IS_BROWSER`)){k().setPlatform(`browser`,new Uo);try{Vo.registerManager(Io.URL_SCHEME,new Ro)}catch{}try{Vo.registerManager(Co.URL_SCHEME,new To)}catch{}}})),Wo=s(((e,t)=>{t.exports={}})),Go,Ko,qo,vee=o((()=>{Ze(),Go={importFetch:()=>Wo()},qo=class{constructor(){this.util=Wo(),this.textEncoder=new this.util.TextEncoder}fetch(e,t){return k().global.fetch==null?(Ko??=Go.importFetch(),Ko(e,t)):k().global.fetch(e,t)}now(){let e=process.hrtime();return e[0]*1e3+e[1]/1e6}encode(e,t){if(t!==`utf-8`&&t!==`utf8`)throw Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return e.length===0?``:new this.util.TextDecoder(t).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}},k().get(`IS_NODE`)&&!k().get(`IS_BROWSER`)&&k().setPlatform(`node`,new qo)}));function Jo(e,t=`float32`,n){return t||=`float32`,Ve(e),new Qi(e,t,n)}var Yo=o((()=>{N(),j()}));function yee(e,t){let n=I(e,`x`,`cast`);if(!Ee(t))throw Error(`Failed to cast to unknown dtype ${t}`);if(t===`string`&&n.dtype!==`string`||t!==`string`&&n.dtype===`string`)throw Error(`Only strings can be casted to strings`);let r={x:n},i={dtype:t};return P.runKernel(Ct,r,i)}var V,Xo=o((()=>{F(),A(),L(),j(),z(),V=R({cast_:yee})}));function bee(e){let t={x:I(e,`x`,`clone`,`string_or_numeric`)};return P.runKernel(dn,t)}var Zo,Qo=o((()=>{F(),A(),L(),z(),Zo=R({clone_:bee})}));function xee(e,t=!1){console.log(e.toString(t))}var See=o((()=>{})),Cee=o((()=>{F(),ja(),_ee(),vee(),Yo(),Xo(),Qo(),See(),N(),xa(),lee({buffer:Jo,cast:V,clone:Zo,print:xee})}));function wee(e,t){let n=I(e,`a`,`add`),r=I(t,`b`,`add`);[n,r]=pa(n,r);let i={a:n,b:r};return P.runKernel(`Add`,i)}var H,$o=o((()=>{F(),A(),va(),L(),z(),H=R({add_:wee})}));function Tee(e,t){let n=I(e,`a`,`floorDiv`),r=I(t,`b`,`floorDiv`);[n,r]=pa(n,r);let i={a:n,b:r};return P.runKernel(an,i)}var es,ts=o((()=>{F(),A(),va(),L(),z(),es=R({floorDiv_:Tee})}));function ns(e,t){let n=I(e,`a`,`div`),r=I(t,`b`,`div`);if([n,r]=pa(n,r),n.dtype===`int32`&&r.dtype===`int32`)return es(n,r);let i={a:n,b:r};return P.runKernel(Yt,i,{})}var rs,is=o((()=>{F(),A(),va(),L(),ts(),z(),rs=R({div_:ns})}));function as(e,t){let n=I(e,`a`,`mul`),r=I(t,`b`,`mul`);[n,r]=pa(n,r);let i={a:n,b:r};return P.runKernel(Ln,i)}var U,os=o((()=>{F(),A(),va(),L(),z(),U=R({mul_:as})}));function ss(e){let t=I(e,`x`,`abs`);if(t.dtype===`complex64`){let e={x:t};return P.runKernel(Dt,e)}else{let e={x:t};return P.runKernel(`Abs`,e)}}var cs,ls=o((()=>{F(),A(),L(),z(),cs=R({abs_:ss})}));function us(e){let t={x:I(e,`x`,`acos`)};return P.runKernel(rt,t)}var ds,fs=o((()=>{F(),A(),L(),z(),ds=R({acos_:us})}));function ps(e){let t={x:I(e,`x`,`acosh`)};return P.runKernel(it,t)}var ms,hs=o((()=>{F(),A(),L(),z(),ms=R({acosh_:ps})}));function gs(e,t=null,n=!1){let r={x:I(e,`x`,`all`,`bool`)},i={axis:t,keepDims:n};return P.runKernel(`All`,r,i)}var _s,vs=o((()=>{F(),A(),L(),z(),_s=R({all_:gs})}));function ys(e,t=null,n=!1){let r={x:I(e,`x`,`any`,`bool`)},i={axis:t,keepDims:n};return P.runKernel(`Any`,r,i)}var bs,xs=o((()=>{F(),A(),L(),z(),bs=R({any_:ys})}));function Ss(e,t=0){let n={x:I(e,`x`,`argMax`)},r={axis:t};return P.runKernel(ot,n,r)}var Cs,ws=o((()=>{F(),A(),L(),z(),Cs=R({argMax_:Ss})}));function Ts(e,t=0){let n={x:I(e,`x`,`argMin`)},r={axis:t};return P.runKernel(st,n,r)}var Es,Ds=o((()=>{F(),A(),L(),z(),Es=R({argMin_:Ts})}));function Os(e){let t={x:I(e,`x`,`asin`)};return P.runKernel(ct,t)}var ks,As=o((()=>{F(),A(),L(),z(),ks=R({asin_:Os})}));function js(e){let t={x:I(e,`x`,`asinh`)};return P.runKernel(lt,t)}var Ms,Ns=o((()=>{F(),A(),L(),z(),Ms=R({asinh_:js})}));function Ps(e){let t={x:I(e,`x`,`atan`)};return P.runKernel(ut,t)}var Fs,Is=o((()=>{F(),A(),L(),z(),Fs=R({atan_:Ps})}));function Ls(e,t){let n=I(e,`a`,`atan2`),r=I(t,`b`,`atan2`);[n,r]=pa(n,r);let i={a:n,b:r};return P.runKernel(ft,i)}var Rs,zs=o((()=>{F(),A(),va(),L(),z(),Rs=R({atan2_:Ls})}));function Bs(e){let t={x:I(e,`x`,`atanh`)};return P.runKernel(dt,t)}var Vs,Hs=o((()=>{F(),A(),L(),z(),Vs=R({atanh_:Bs})}));function Us(e,t,n,r,i=`NHWC`,a){let o=e[3];return Ks(e,[...t,o],n,a,r,null,null,oc(i))}function Ws(e,t,n,r,i,a,o=`channelsLast`){let[s,c]=Zs(t),l;if(o===`channelsLast`)l=[s,c,e[3],e[3]];else if(o===`channelsFirst`)l=[s,c,e[1],e[1]];else throw Error(`Unknown dataFormat ${o}`);return Ks(e,l,n,r,i,a,!1,o)}function Gs(e,t,n,r,i,a,o=`NDHWC`){let[s,c,l]=Qs(t),u,d;if(o===`NDHWC`)d=`channelsLast`,u=[s,c,l,e[4],e[4]];else if(o===`NCDHW`)d=`channelsFirst`,u=[s,c,l,e[1],e[1]];else throw Error(`Unknown dataFormat ${o}`);return qs(e,u,n,r,i,!1,d,a)}function Ks(e,t,n,r,i,a,o=!1,s=`channelsLast`){let[c,l,u,d]=[-1,-1,-1,-1];if(s===`channelsLast`)[c,l,u,d]=e;else if(s===`channelsFirst`)[c,d,l,u]=e;else throw Error(`Unknown dataFormat ${s}`);let[f,p,,m]=t,[h,g]=Zs(n),[_,v]=Zs(r),y=$s(f,_),b=$s(p,v),{padInfo:x,outHeight:S,outWidth:C}=ec(i,l,u,h,g,y,b,a,s),w=o?m*d:m,ee;return s===`channelsFirst`?ee=[c,w,S,C]:s===`channelsLast`&&(ee=[c,S,C,w]),{batchSize:c,dataFormat:s,inHeight:l,inWidth:u,inChannels:d,outHeight:S,outWidth:C,outChannels:w,padInfo:x,strideHeight:h,strideWidth:g,filterHeight:f,filterWidth:p,effectiveFilterHeight:y,effectiveFilterWidth:b,dilationHeight:_,dilationWidth:v,inShape:e,outShape:ee,filterShape:t}}function qs(e,t,n,r,i,a=!1,o=`channelsLast`,s){let[c,l,u,d,f]=[-1,-1,-1,-1,-1];if(o===`channelsLast`)[c,l,u,d,f]=e;else if(o===`channelsFirst`)[c,f,l,u,d]=e;else throw Error(`Unknown dataFormat ${o}`);let[p,m,h,,g]=t,[_,v,y]=Qs(n),[b,x,S]=Qs(r),C=$s(p,b),w=$s(m,x),ee=$s(h,S),{padInfo:te,outDepth:T,outHeight:ne,outWidth:re}=tc(i,l,u,d,_,v,y,C,w,ee,s),ie=a?g*f:g,ae;return o===`channelsFirst`?ae=[c,ie,T,ne,re]:o===`channelsLast`&&(ae=[c,T,ne,re,ie]),{batchSize:c,dataFormat:o,inDepth:l,inHeight:u,inWidth:d,inChannels:f,outDepth:T,outHeight:ne,outWidth:re,outChannels:ie,padInfo:te,strideDepth:_,strideHeight:v,strideWidth:y,filterDepth:p,filterHeight:m,filterWidth:h,effectiveFilterDepth:C,effectiveFilterHeight:w,effectiveFilterWidth:ee,dilationDepth:b,dilationHeight:x,dilationWidth:S,inShape:e,outShape:ae,filterShape:t}}function Js(e,t,n,r,i){r??=Xs(e,t,n);let a=e[0],o=e[1];return[nc((a-t+2*r)/n+1,i),nc((o-t+2*r)/n+1,i)]}function Ys(e,t,n,r,i,a){i??=Xs(e,t[0],r[0]);let o=[0,0,0,n];for(let n=0;n<3;n++)e[n]+2*i>=t[n]&&(o[n]=nc((e[n]-t[n]+2*i)/r[n]+1,a));return o}function Xs(e,t,n,r=1){let i=$s(t,r);return Math.floor((e[0]*(n-1)-n+i)/2)}function Zs(e){return typeof e==`number`?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function Qs(e){return typeof e==`number`?[e,e,e]:e}function $s(e,t){return t<=1?e:e+(e-1)*(t-1)}function ec(e,t,n,r,i,a,o,s,c){let l,u,d;if(typeof e==`number`){l={top:e,bottom:e,left:e,right:e,type:e===0?`VALID`:`NUMBER`};let i=Js([t,n],a,r,e,s);u=i[0],d=i[1]}else if(e===`same`){u=Math.ceil(t/r),d=Math.ceil(n/i);let e=Math.max(0,(u-1)*r+a-t),s=Math.max(0,(d-1)*i+o-n),c=Math.floor(e/2),f=e-c,p=Math.floor(s/2);l={top:c,bottom:f,left:p,right:s-p,type:`SAME`}}else if(e===`valid`)l={top:0,bottom:0,left:0,right:0,type:`VALID`},u=Math.ceil((t-a+1)/r),d=Math.ceil((n-o+1)/i);else if(typeof e==`object`){let f=c===`channelsLast`?e[1][0]:e[2][0],p=c===`channelsLast`?e[1][1]:e[2][1],m=c===`channelsLast`?e[2][0]:e[3][0],h=c===`channelsLast`?e[2][1]:e[3][1];l={top:f,bottom:p,left:m,right:h,type:f===0&&p===0&&m===0&&h===0?`VALID`:`EXPLICIT`},u=nc((t-a+f+p)/r+1,s),d=nc((n-o+m+h)/i+1,s)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:l,outHeight:u,outWidth:d}}function tc(e,t,n,r,i,a,o,s,c,l,u){let d,f,p,m;if(e===`valid`&&(e=0),typeof e==`number`){d={top:e,bottom:e,left:e,right:e,front:e,back:e,type:e===0?`VALID`:`NUMBER`};let h=Ys([t,n,r,1],[s,c,l],1,[i,a,o],e,u);f=h[0],p=h[1],m=h[2]}else if(e===`same`){f=Math.ceil(t/i),p=Math.ceil(n/a),m=Math.ceil(r/o);let e=(f-1)*i+s-t,u=(p-1)*a+c-n,h=(m-1)*o+l-r,g=Math.floor(e/2),_=e-g,v=Math.floor(u/2),y=u-v,b=Math.floor(h/2);d={top:v,bottom:y,left:b,right:h-b,front:g,back:_,type:`SAME`}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:d,outDepth:f,outHeight:p,outWidth:m}}function nc(e,t){if(!t)return Math.trunc(e);switch(t){case`round`:return Math.round(e);case`ceil`:return Math.ceil(e);case`floor`:return Math.floor(e);default:throw Error(`Unknown roundingMode ${t}`)}}function rc(e){let[t,n,r]=Zs(e);return t===1&&n===1&&r===1}function ic(e,t){return rc(e)||rc(t)}function ac(e){return Zs(e).every(e=>e>0)}function oc(e){if(e===`NHWC`)return`channelsLast`;if(e===`NCHW`)return`channelsFirst`;throw Error(`Unknown dataFormat ${e}`)}function sc(e,t,n){if(n!=null){if(typeof t==`string`)throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if(typeof t==`number`)E(_e(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if(typeof t==`object`)t.forEach(t=>{t.forEach(t=>{E(_e(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}var cc=o((()=>{j()}));function lc(e,t){let n={x:I(e,`x`,`reshape`,`string_or_numeric`)},r={shape:t};return P.runKernel(tr,n,r)}var W,G=o((()=>{F(),A(),L(),z(),W=R({reshape_:lc})}));function uc(e,t,n,r,i){let a=I(e,`x`,`avgPool`,`float32`);E(ic(n,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`);let o=a,s=!1;a.rank===3&&(s=!0,o=W(a,[1,a.shape[0],a.shape[1],a.shape[2]])),E(o.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${o.rank}.`),sc(`avgPool`,r,i);let c={x:o},l={filterSize:t,strides:n,pad:r,dimRoundingMode:i},u=P.runKernel(pt,c,l);return u=V(u,a.dtype),s?W(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var dc,fc=o((()=>{F(),A(),L(),j(),Xo(),cc(),z(),G(),dc=R({avgPool_:uc})}));function pc(e,t,n,r,i,a=`NDHWC`){let o=I(e,`x`,`avgPool3d`,`float32`),s=o,c=!1;o.rank===4&&(c=!0,s=W(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),E(s.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${s.rank}.`),E(a===`NDHWC`,()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),E(typeof n==`number`&&n>0||Array.isArray(n)&&n[0]>0&&n[1]>0&&n[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${n}'`),sc(`avgPool3d`,r,i);let l={x:s},u={filterSize:t,strides:n,pad:r,dimRoundingMode:i,dataFormat:a},d=P.runKernel(ht,l,u);return d=V(d,s.dtype),c?W(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}var mc,hc=o((()=>{F(),A(),L(),j(),Xo(),cc(),z(),G(),mc=R({avgPool3d_:pc})}));function gc(e,t=0){E(e.length>=1,()=>`Pass at least one tensor to concat`);let n=Fa(e,`tensors`,`concat`,`string_or_numeric`);if(n[0].dtype===`complex64`&&n.forEach(e=>{if(e.dtype!==`complex64`)throw Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${e.dtype}. `)}),n.length===1)return Zo(n[0]);let r=n,i={axis:t};return P.runKernel(Ot,r,i)}var _c,vc=o((()=>{F(),A(),L(),j(),Qo(),z(),_c=R({concat_:gc})}));function yc(e,t,n=!1,r=!1){let i=I(e,`a`,`matMul`),a=I(t,`b`,`matMul`);[i,a]=pa(i,a);let o={a:i,b:a},s={transposeA:n,transposeB:r};return P.runKernel(_t,o,s)}var bc,xc=o((()=>{F(),A(),va(),L(),z(),bc=R({matMul_:yc})}));function Sc(e){let t={x:I(e,`x`,`sigmoid`,`float32`)};return P.runKernel(vr,t)}var Cc,wc=o((()=>{F(),A(),L(),z(),Cc=R({sigmoid_:Sc})}));function Tc(e,t,n){let r=I(e,`x`,`slice`,`string_or_numeric`);if(r.rank===0)throw Error(`Slicing scalar is not possible`);let i={x:r},a={begin:t,size:n};return P.runKernel(hr,i,a)}var Ec,Dc=o((()=>{F(),A(),L(),z(),Ec=R({slice_:Tc})}));function Oc(e){let t={x:I(e,`x`,`tanh`,`float32`)};return P.runKernel(Ir,t)}var kc,Ac=o((()=>{F(),A(),L(),z(),kc=R({tanh_:Oc})}));function Eee(e,t,n){let r=I(e,`x`,`batchToSpaceND`),i=t.reduce((e,t)=>e*t);E(r.rank>=1+t.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`),E(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),E(r.shape[0]%i===0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(` * `)} === ${i}`);let a={x:r},o={blockShape:t,crops:n};return P.runKernel(vt,a,o)}var jc,Mc=o((()=>{F(),A(),L(),j(),z(),jc=R({batchToSpaceND_:Eee})}));function Dee(e){let t;return t=e.rank===0||e.rank===1?W(e,[1,1,1,e.size]):e.rank===2?W(e,[1,1,e.shape[0],e.shape[1]]):e.rank===3?W(e,[1,e.shape[0],e.shape[1],e.shape[2]]):e,t}var Oee=o((()=>{G()}));function kee(e,t,n,r,i,a){a??=.001;let o=I(e,`x`,`batchNorm`),s=I(t,`mean`,`batchNorm`),c=I(n,`variance`,`batchNorm`),l;i!=null&&(l=I(i,`scale`,`batchNorm`));let u;r!=null&&(u=I(r,`offset`,`batchNorm`)),E(s.rank===c.rank,()=>`Batch normalization gradient requires mean and variance to have equal ranks.`),E(u==null||s.rank===u.rank,()=>`Batch normalization gradient requires mean and offset to have equal ranks.`),E(l==null||s.rank===l.rank,()=>`Batch normalization gradient requires mean and scale to have equal ranks.`);let d={x:Dee(o),scale:l,offset:u,mean:s,variance:c},f={varianceEpsilon:a};return W(P.runKernel(on,d,f),o.shape)}var Nc,Pc=o((()=>{F(),A(),L(),j(),Oee(),z(),G(),Nc=R({batchNorm_:kee})}));function Aee(e,t,n,r,i,a){let o=I(e,`x`,`batchNorm`),s=I(t,`mean`,`batchNorm`),c=I(n,`variance`,`batchNorm`),l;i!=null&&(l=I(i,`scale`,`batchNorm`));let u;return r!=null&&(u=I(r,`offset`,`batchNorm`)),E(o.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${o.rank}.`),E(s.rank===2||s.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${s.rank}.`),E(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${c.rank}.`),l!=null&&E(l.rank===2||l.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${l.rank}.`),u!=null&&E(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${u.rank}.`),Nc(o,s,c,u,l,a)}var Fc,jee=o((()=>{L(),j(),Pc(),z(),Fc=R({batchNorm2d_:Aee})}));function Mee(e,t,n,r,i,a){let o=I(e,`x`,`batchNorm`),s=I(t,`mean`,`batchNorm`),c=I(n,`variance`,`batchNorm`),l;i!=null&&(l=I(i,`scale`,`batchNorm`));let u;return r!=null&&(u=I(r,`offset`,`batchNorm`)),E(o.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${o.rank}.`),E(s.rank===3||s.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${s.rank}.`),E(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${c.rank}.`),l!=null&&E(l.rank===3||l.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${l.rank}.`),u!=null&&E(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${u.rank}.`),Nc(o,s,c,u,l,a)}var Ic,Lc=o((()=>{L(),j(),Pc(),z(),Ic=R({batchNorm3d_:Mee})}));function Rc(e,t,n,r,i,a){let o=I(e,`x`,`batchNorm`),s=I(t,`mean`,`batchNorm`),c=I(n,`variance`,`batchNorm`),l;i!=null&&(l=I(i,`scale`,`batchNorm`));let u;return r!=null&&(u=I(r,`offset`,`batchNorm`)),E(o.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${o.rank}.`),E(s.rank===4||s.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${s.rank}.`),E(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${c.rank}.`),l!=null&&E(l.rank===4||l.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${l.rank}.`),u!=null&&E(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${u.rank}.`),Nc(o,s,c,u,l,a)}var zc,Bc=o((()=>{L(),j(),Pc(),z(),zc=R({batchNorm4d_:Rc})}));function Vc(e,t,n){let r=I(e,`x`,`bincount`),i=I(t,`weights`,`bincount`);E(r.dtype===`int32`,()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),E(n>=0,()=>`size must be non-negative, but got ${n}.`),E(i.size===r.size||i.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${i.shape}.`);let a={x:r,weights:i},o={size:n};return P.runKernel(yt,a,o)}var Hc,Uc=o((()=>{F(),A(),L(),j(),z(),Hc=R({bincount_:Vc})}));function Wc(e,t){let n=I(e,`broadcastTo`,`x`),r=n.shape;if(Ve(t),t.length<n.rank)throw Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){let e=n.shape.slice();for(;e.length<t.length;)e.unshift(1);n=W(n,e)}let i=n.shape,a=Array.from(t);for(let e=t.length-1;e>=0;e--)if(i[e]===t[e])a[e]=1;else if(n.shape[e]!==1)throw Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(a.map((e,t)=>e>1?t:-1).filter(e=>e>=0).length===0)return Zo(n);let o={x:n},s={reps:a};return P.runKernel(Lr,o,s)}var Gc,Kc=o((()=>{F(),A(),L(),Ge(),Qo(),z(),G(),Gc=R({broadcastTo_:Wc})}));function qc(e){let t={x:I(e,`x`,`ceil`,`float32`)};return P.runKernel(wt,t)}var Jc,Yc=o((()=>{F(),A(),L(),z(),Jc=R({ceil_:qc})}));function Xc(e,t,n){Ve(e),n||=Me(t);let r={shape:e,value:t,dtype:n};return P.runKernel(tn,{},r)}var Zc=o((()=>{F(),A(),j(),Ge()}));function Qc(e,t,n){let r=I(e,`x`,`clipByValue`);if(E(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),t===n)return Xc(r.shape,t,r.dtype);let i={x:r},a={clipValueMin:t,clipValueMax:n};return P.runKernel(Tt,i,a)}var $c,el=o((()=>{F(),A(),L(),j(),Zc(),z(),$c=R({clipByValue_:Qc})}));function tl(e){return _c(e,0)}var nl,rl=o((()=>{vc(),z(),nl=R({concat1d_:tl})}));function il(e,t){return _c(e,t)}var al,ol=o((()=>{vc(),z(),al=R({concat2d_:il})}));function sl(e,t){return _c(e,t)}var cl,ll=o((()=>{vc(),z(),cl=R({concat3d_:sl})}));function ul(e,t){return _c(e,t)}var dl,fl=o((()=>{vc(),z(),dl=R({concat4d_:ul})}));function pl(e,t,n,r,i=`NHWC`,a=[1,1],o){let s=I(e,`x`,`conv2d`,`float32`),c=I(t,`filter`,`conv2d`,`float32`),l=s,u=!1;s.rank===3&&(u=!0,l=W(s,[1,s.shape[0],s.shape[1],s.shape[2]])),E(l.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${l.rank}.`),E(c.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${c.rank}.`),sc(`conv2d`,r,o);let d=i===`NHWC`?l.shape[3]:l.shape[1];E(d===c.shape[2],()=>`Error in conv2d: depth of input (${d}) must match input depth for filter ${c.shape[2]}.`),E(ic(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),E(ac(a),()=>`Error in conv2D: Dilated rates should be larger than 0.`),E(ac(n),()=>`Error in conv2D: Strides should be larger than 0.`);let f={x:l,filter:c},p={strides:n,pad:r,dataFormat:i,dilations:a,dimRoundingMode:o},m=P.runKernel(kt,f,p);return u?W(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var ml,hl=o((()=>{F(),A(),L(),j(),cc(),z(),G(),ml=R({conv2d_:pl})}));function gl(e,t,n,r,i=`NWC`,a=1,o){let s=I(e,`x`,`conv1d`),c=I(t,`filter`,`conv1d`),l=s,u=!1;s.rank===2&&(u=!0,l=W(s,[1,s.shape[0],s.shape[1]])),E(l.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${l.rank}.`),E(c.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${c.rank}.`),sc(`conv1d`,r,o),E(l.shape[2]===c.shape[1],()=>`Error in conv1d: depth of input (${l.shape[2]}) must match input depth for filter ${c.shape[1]}.`),E(ic(n,a),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${a}'`),E(ac(a),()=>`Error in conv1D: Dilated rates should be larger than 0.`),E(ac(n),()=>`Error in conv1D: Stride should be larger than 0.`),E(i===`NWC`,()=>`Error in conv1d: got dataFormat of ${i} but only NWC is currently supported.`);let d=W(c,[1,c.shape[0],c.shape[1],c.shape[2]]),f=ml(W(l,[l.shape[0],1,l.shape[1],l.shape[2]]),d,[1,n],r,`NHWC`,[1,a],o);return u?W(f,[f.shape[2],f.shape[3]]):W(f,[f.shape[0],f.shape[2],f.shape[3]])}var _l,vl=o((()=>{L(),j(),hl(),cc(),z(),G(),_l=R({conv1d_:gl})}));function yl(e,t,n,r,i,a=`NHWC`,o){E(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let s=e,c=t,l=!1;t.rank===3&&(l=!0,c=W(t,[1,t.shape[0],t.shape[1],t.shape[2]]),s=[1,e[0],e[1],e[2]]),E(s.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${s.length}.`),E(c.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${c.rank}`),E(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);let u=a===`NHWC`?s[3]:s[1],d=a===`NHWC`?c.shape[3]:c.shape[1];E(u===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${u}) must match input depth for filter ${n.shape[2]}.`),E(d===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${d}) must match output depth for filter ${n.shape[3]}.`),sc(`conv2dDerInput`,i,o);let f={dy:c,filter:n},p={strides:r,pad:i,dataFormat:a,dimRoundingMode:o,inputShape:s},m=P.runKernel(jt,f,p);return l?W(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var bl,xl=o((()=>{F(),A(),j(),cc(),z(),G(),bl=R({conv2DBackpropInput_:yl})}));function Sl(e,t,n,r,i,a){return bl(n,I(e,`x`,`conv2dTranspose`),I(t,`filter`,`conv2dTranspose`),r,i,`NHWC`,a)}var Cl,wl=o((()=>{L(),xl(),z(),Cl=R({conv2dTranspose_:Sl})}));function Tl(e,t,n,r,i=`NDHWC`,a=[1,1,1]){let o=I(e,`x`,`conv3d`),s=I(t,`filter`,`conv3d`),c=o,l=!1;o.rank===4&&(l=!0,c=W(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),E(c.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${c.rank}.`),E(s.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${s.rank}.`),E(c.shape[4]===s.shape[3],()=>`Error in conv3d: depth of input (${c.shape[4]}) must match input depth for filter ${s.shape[3]}.`),E(ic(n,a),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),E(i===`NDHWC`,()=>`Error in conv3d: got dataFormat of ${i} but only NDHWC is currently supported.`),E(ac(a),()=>`Error in conv3D: Dilated rates should be larger than 0.`),E(ac(n),()=>`Error in conv3D: Strides should be larger than 0.`);let u={x:c,filter:s},d={strides:n,pad:r,dataFormat:i,dilations:a},f=P.runKernel(Mt,u,d);return l?W(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}var El,Dl=o((()=>{F(),A(),L(),j(),cc(),z(),G(),El=R({conv3d_:Tl})}));function Nee(e,t,n,r,i){E(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let a=e,o=t,s=!1;t.rank===4&&(s=!0,o=W(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),a=[1,e[0],e[1],e[2],e[3]]);let c=a[4],l=o.shape[4];E(a.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${a.length}.`),E(o.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${o.rank}`),E(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),E(c===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[3]}.`),E(l===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${l}) must match output depth for filter ${n.shape[4]}.`);let u={dy:o,filter:n},d={pad:i,strides:r,inputShape:a},f=P.runKernel(Pt,u,d);return s?W(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}var Ol,kl=o((()=>{F(),A(),j(),z(),G(),Ol=R({conv3DBackpropInput_:Nee})}));function Al(e,t,n,r,i){return Ol(n,I(e,`x`,`conv3dTranspose`),I(t,`filter`,`conv3dTranspose`),r,i)}var jl,Pee=o((()=>{L(),kl(),z(),jl=R({conv3dTranspose_:Al})}));function Ml(e){let t={x:I(e,`x`,`cos`,`float32`)};return P.runKernel(`Cos`,t)}var Nl,Pl=o((()=>{F(),A(),L(),z(),Nl=R({cos_:Ml})}));function Fee(e){let t={x:I(e,`x`,`cosh`,`float32`)};return P.runKernel(Ft,t)}var Fl,Il=o((()=>{F(),A(),L(),z(),Fl=R({cosh_:Fee})}));function Iee(e,t=0,n=!1,r=!1){let i={x:I(e,`x`,`cumprod`)},a={axis:t,exclusive:n,reverse:r};return P.runKernel(It,i,a)}var Ll,Rl=o((()=>{F(),A(),L(),z(),Ll=R({cumprod_:Iee})}));function zl(e,t=0,n=!1,r=!1){let i={x:I(e,`x`,`cumsum`)},a={axis:t,exclusive:n,reverse:r};return P.runKernel(Lt,i,a)}var Bl,Vl=o((()=>{F(),A(),L(),z(),Bl=R({cumsum_:zl})}));function Lee(e,t,n,r=!1){let i=I(e,`x`,`denseBincount`),a=I(t,`weights`,`denseBincount`);E(i.dtype===`int32`,()=>`Error in denseBincount: input dtype must be int32, but got ${i.dtype}`),E(i.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${i.rank}.`),E(n>=0,()=>`size must be non-negative, but got ${n}.`),E(a.size===i.size||a.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${i.shape}, weights shape: ${a.shape}.`);let o={x:i,weights:a},s={size:n,binaryOutput:r};return P.runKernel(zt,o,s)}var Hl,Ree=o((()=>{F(),A(),L(),j(),z(),Hl=R({denseBincount_:Lee})}));function zee(e,t,n=`NHWC`){let r=I(e,`x`,`depthToSpace`,`float32`),i=n===`NHWC`?r.shape[1]:r.shape[2],a=n===`NHWC`?r.shape[2]:r.shape[3],o=n===`NHWC`?r.shape[3]:r.shape[1];E(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),E(i*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${i} and ${t}  for depthToSpace with input shape
    ${r.shape}`),E(a*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${a} and ${t} for depthToSpace with input shape
        ${r.shape}`),E(o%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${o} for depthToSpace with input shape ${r.shape}`);let s={x:r},c={blockSize:t,dataFormat:n};return P.runKernel(Bt,s,c)}var Ul,Wl=o((()=>{F(),A(),L(),j(),z(),Ul=R({depthToSpace_:zee})}));function Gl(e,t,n,r,i=`NHWC`,a=[1,1],o){let s=I(e,`x`,`depthwiseConv2d`,`float32`),c=I(t,`filter`,`depthwiseConv2d`,`float32`),l=s,u=!1;s.rank===3&&(u=!0,l=W(s,[1,s.shape[0],s.shape[1],s.shape[2]])),E(l.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${l.rank}.`),E(c.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${c.rank}.`);let d=i===`NHWC`?l.shape[3]:l.shape[1];E(d===c.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${d}) must match the inChannels dimension in filter ${c.shape[2]}.`),sc(`depthwiseConv2d`,r,o);let f={x:l,filter:c},p={strides:n,pad:r,dataFormat:i,dilations:a,dimRoundingMode:o},m=P.runKernel(Vt,f,p);return u?W(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var Kl,ql=o((()=>{F(),A(),L(),j(),cc(),z(),G(),Kl=R({depthwiseConv2d_:Gl})}));function Jl(e,t,n,r,i=[1,1],a=`NHWC`){let o=I(e,`x`,`dilation2d`),s=I(t,`filter`,`dilation2d`);E(o.rank===3||o.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${o.rank}.`),E(s.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${s.rank}.`),E(a===`NHWC`,()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${a}`);let c=o,l=!1;o.rank===3&&(c=W(o,[1,o.shape[0],o.shape[1],o.shape[2]]),l=!0),E(c.shape[3]===s.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${c.shape[3]} vs ${s.shape[2]}`);let u={x:c,filter:s},d={strides:n,pad:r,dilations:i},f=P.runKernel(Gt,u,d);return l?W(f,[f.shape[1],f.shape[2],f.shape[3]]):f}var Yl,Xl=o((()=>{F(),A(),L(),j(),z(),G(),Yl=R({dilation2d_:Jl})}));function Zl(e,t){let n=e.length,r=[];for(let i=0;i<n;i++){let a=n-1-i,o=e[a]||1;(t[t.length-1-i]||1)>1&&o===1&&r.unshift(a)}return r}function Ql(e,t){let n=[];for(let r=0;r<t.length;r++){let i=e[e.length-r-1],a=t.length-r-1,o=t[a];(i==null||i===1&&o>1)&&n.unshift(a)}return n}function $l(e,t){let n=Math.max(e.length,t.length),r=Array(n);for(let i=0;i<n;i++){let a=e[e.length-i-1];a??=1;let o=t[t.length-i-1];if(o??=1,a===1)r[n-i-1]=o;else if(o===1)r[n-i-1]=a;else if(a!==o){let n=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(n)}else r[n-i-1]=a}return r}var eu=o((()=>{}));function Bee(e,t){let n=I(e,`a`,`equal`,`string_or_numeric`),r=I(t,`b`,`equal`,`string_or_numeric`);[n,r]=pa(n,r),$l(n.shape,r.shape);let i={a:n,b:r};return P.runKernel(Qt,i)}var tu,nu=o((()=>{F(),A(),va(),L(),eu(),z(),tu=R({equal_:Bee})}));function ru(e,t,n){let r=I(t,`a`,`where`),i=I(n,`b`,`where`),a=I(e,`condition`,`where`,`bool`),o=$l($l(a.shape,r.shape),i.shape),s={condition:Gc(a,o),t:Gc(r,o),e:Gc(i,o)};return P.runKernel(pr,s)}var iu,au=o((()=>{F(),A(),L(),Kc(),eu(),z(),iu=R({where_:ru})}));function Vee(e){let t={x:I(e,`x`,`zerosLike`)};return P.runKernel(Wr,t)}var ou,su=o((()=>{F(),A(),L(),z(),ou=R({zerosLike_:Vee})}));function Hee(e,t){let n=I(e,`a`,`div`),r=I(t,`b`,`div`);[n,r]=pa(n,r);let i=rs(n,r),a=ou(i);return iu(tu(r,a),a,i)}var cu,lu=o((()=>{va(),L(),is(),nu(),z(),au(),su(),cu=R({divNoNan_:Hee})}));function Uee(e,t){let n=I(e,`t1`,`dot`),r=I(t,`t2`,`dot`);E((n.rank===1||n.rank===2)&&(r.rank===1||r.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`);let i=n.rank===1?n.size:n.shape[1],a=r.rank===1?r.size:r.shape[0];if(E(i===a,()=>`Error in dot: inner dimensions of inputs must match, but got ${i} and ${a}.`),n.rank===1&&r.rank===1)return W(bc(W(n,[1,-1]),W(r,[-1,1])),[]);if(n.rank===1&&r.rank===2){let e=bc(W(n,[1,-1]),W(r,[r.shape[0],r.shape[1]]));return W(e,[e.size])}else if(n.rank===2&&r.rank===1){let e=bc(n,W(r,[-1,1]));return W(e,[e.size])}else return bc(n,W(r,[r.shape[0],r.shape[1]]))}var uu,du=o((()=>{L(),j(),xc(),z(),G(),uu=R({dot_:Uee})}));function Wee(e,...t){let n=t.map((e,t)=>I(e,`tensors${t}`,`einsum`)),r={equation:e};return P.runKernel(Xt,n,r)}var fu,pu=o((()=>{F(),A(),L(),z(),fu=R({einsum_:Wee})}));function Gee(e){let t={x:I(e,`x`,`elu`,`float32`)};return P.runKernel(`Elu`,t)}var mu,hu=o((()=>{F(),A(),L(),z(),mu=R({elu_:Gee})}));function Kee(e){let t=I(e,`x`,`erf`);E(t.dtype===`int32`||t.dtype===`float32`,()=>"Input dtype must be `int32` or `float32`."),t.dtype===`int32`&&(t=V(t,`float32`));let n={x:t};return P.runKernel(`Erf`,n)}var gu,qee=o((()=>{F(),A(),L(),j(),Xo(),z(),gu=R({erf_:Kee})}));function _u(e,t){for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function vu(e,t,n){let r=e.length+t.length,i=[],a=0,o=0;for(let s=0;s<r;s++)n.indexOf(s)===-1?i.push(e[a++]):i.push(t[o++]);return i}function yu(e,t){let n=[],r=e.length;for(let i=0;i<r;i++)t.indexOf(i)===-1&&n.push(e[i]);return[n,t.map(t=>e[t])]}function bu(e,t){return vu(e,t.map(e=>1),t)}function xu(e,t,n){E(_u(t,n),()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${n} input.`)}function Su(e,t){if(_u(e,t))return null;let n=[];for(let r=0;r<t;++r)e.indexOf(r)===-1&&n.push(r);return e.forEach(e=>n.push(e)),n}function Cu(e){return e.map((e,t)=>[t,e]).sort((e,t)=>e[1]-t[1]).map(e=>e[0])}function wu(e,t){let n=[];for(let r=t-e;r<t;++r)n.push(r);return n}var Tu=o((()=>{j()}));function Jee(e,t=null,n=!1){let r={x:I(e,`x`,`max`)},i={reductionIndices:t,keepDims:n};return P.runKernel(`Max`,r,i)}var Eu,Du=o((()=>{F(),A(),L(),z(),Eu=R({max_:Jee})}));function Yee(e,t=null,n=!1){let r={x:I(e,`x`,`min`)},i={axis:t,keepDims:n};return P.runKernel(`Min`,r,i)}var Ou,ku=o((()=>{F(),A(),L(),z(),Ou=R({min_:Yee})}));function Xee(e,t){let n=I(e,`base`,`pow`),r=I(t,`exp`,`pow`);[n,r]=pa(n,r);let i={a:n,b:r};return P.runKernel(`Pow`,i)}var Au,ju=o((()=>{F(),A(),va(),L(),z(),Au=R({pow_:Xee})}));function Mu(e,t){if((Ii(e)&&t!==`string`||Array.isArray(e))&&t!==`complex64`)throw Error(`Error creating a new Scalar: value must be a primitive (number|boolean|string)`);if(t===`string`&&Ii(e)&&!(e instanceof Uint8Array))throw Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Ba(e,[],[],t)}var Nu=o((()=>{j(),Va()}));function Zee(e){let t={x:I(e,`x`,`sqrt`,`float32`)};return P.runKernel(br,t)}var Pu,Fu=o((()=>{F(),A(),L(),z(),Pu=R({sqrt_:Zee})}));function Qee(e){let t=I(e,`x`,`square`);return P.runKernel(`Square`,{x:t},{})}var Iu,Lu=o((()=>{F(),L(),z(),Iu=R({square_:Qee})}));function $ee(e,t=null,n=!1){let r=I(e,`x`,`sum`);r.dtype===`bool`&&(r=V(r,`int32`));let i={x:r},a={axis:t,keepDims:n};return P.runKernel(`Sum`,i,a)}var Ru,zu=o((()=>{F(),A(),L(),Xo(),z(),Ru=R({sum_:$ee})}));function ete(e,t=`euclidean`,n=null,r=!1){e=I(e,`x`,`norm`);let i=Bu(e,t,n),a=i.shape;if(r){let t=Se(n,e.shape);a=bu(i.shape,t)}return W(i,a)}function Bu(e,t,n=null){if(e.rank===0)return cs(e);if(e.rank!==1&&n===null)return Bu(W(e,[-1]),t,n);if(e.rank===1||typeof n==`number`||Array.isArray(n)&&n.length===1){if(t===1)return Ru(cs(e),n);if(t===1/0)return Eu(cs(e),n);if(t===-1/0)return Ou(cs(e),n);if(t===`euclidean`||t===2)return Pu(Ru(Au(cs(e),Mu(2,`int32`)),n));throw Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&n.length===2){if(t===1)return Eu(Ru(cs(e),n[0]),n[1]-1);if(t===1/0)return Eu(Ru(cs(e),n[1]),n[0]);if(t===-1/0)return Ou(Ru(cs(e),n[1]),n[0]);if(t===`fro`||t===`euclidean`)return Pu(Ru(Iu(e),n));throw Error(`Error in norm: invalid ord value: ${t}`)}throw Error(`Error in norm: invalid axis: ${n}`)}var Vu,Hu=o((()=>{L(),j(),ls(),Tu(),Du(),ku(),z(),ju(),G(),Nu(),Fu(),Lu(),zu(),Vu=R({norm_:ete})}));function tte(e,t=null,n=!1){return Vu(e,`euclidean`,t,n)}var Uu,Wu=o((()=>{Hu(),z(),Uu=R({euclideanNorm_:tte})}));function nte(e){let t={x:I(e,`x`,`exp`)};return P.runKernel(`Exp`,t)}var Gu,Ku=o((()=>{F(),A(),L(),z(),Gu=R({exp_:nte})}));function rte(e,t=0){let n=I(e,`x`,`expandDims`,`string_or_numeric`);E(t<=n.rank,()=>`Axis must be <= rank of the tensor`);let r={input:n},i={dim:t};return P.runKernel($t,r,i)}var qu,Ju=o((()=>{F(),A(),L(),j(),z(),qu=R({expandDims_:rte})}));function ite(e){let t={x:I(e,`x`,`expm1`)};return P.runKernel(en,t)}var Yu,ate=o((()=>{F(),A(),L(),z(),Yu=R({expm1_:ite})}));function ote(e,t){let n=I(e,`x`,`tile`,`string_or_numeric`);E(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`);let r={x:n},i={reps:t};return P.runKernel(Lr,r,i)}var Xu,Zu=o((()=>{F(),A(),L(),j(),z(),Xu=R({tile_:ote})}));function ste(e,t,n,r=`float32`){t??=e;let i=Jo([e,t],r),a=e<=t?e:t;for(let e=0;e<a;++e)i.set(1,e,e);let o=W(i.toTensor(),[e,t]);if(n==null)return o;if(n.length===1)return Xu(qu(o,0),[n[0],1,1]);if(n.length===2)return Xu(qu(qu(o,0),0),[n[0],n[1],1,1]);if(n.length===3)return Xu(qu(qu(qu(o,0),0),0),[n[0],n[1],n[2],1,1]);throw Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}var Qu,$u=o((()=>{Yo(),Ju(),z(),G(),Zu(),Qu=R({eye_:ste})}));function cte(e){let t={x:I(e,`x`,`floor`,`float32`)};return P.runKernel(rn,t)}var ed,td=o((()=>{F(),A(),L(),z(),ed=R({floor_:cte})}));function lte(e,t,n=0,r=0){let i={x:I(e,`x`,`gather`),indices:I(t,`indices`,`gather`,`int32`)},a={axis:n,batchDims:r};return P.runKernel(sn,i,a)}var nd,rd=o((()=>{F(),A(),L(),z(),nd=R({gather_:lte})}));function ute(e,t){let n=I(e,`a`,`greater`,`string_or_numeric`),r=I(t,`b`,`greater`,`string_or_numeric`);[n,r]=pa(n,r),$l(n.shape,r.shape);let i={a:n,b:r};return P.runKernel(ln,i)}var id,ad=o((()=>{F(),A(),va(),L(),eu(),z(),id=R({greater_:ute})}));function dte(e,t){let n=I(e,`a`,`greaterEqual`,`string_or_numeric`),r=I(t,`b`,`greaterEqual`,`string_or_numeric`);[n,r]=pa(n,r),$l(n.shape,r.shape);let i={a:n,b:r};return P.runKernel(un,i)}var od,sd=o((()=>{F(),A(),va(),L(),eu(),z(),od=R({greaterEqual_:dte})}));function fte(e){let t={input:I(e,`input`,`imag`)};return P.runKernel(pn,t)}var cd,ld=o((()=>{F(),A(),L(),z(),cd=R({imag_:fte})}));function ud(e){let t={x:I(e,`x`,`isFinite`)};return P.runKernel(mn,t)}var dd,fd=o((()=>{F(),A(),L(),z(),dd=R({isFinite_:ud})}));function pd(e){let t={x:I(e,`x`,`isInf`)};return P.runKernel(hn,t)}var md,hd=o((()=>{F(),A(),L(),z(),md=R({isInf_:pd})}));function gd(e){let t={x:I(e,`x`,`isNaN`)};return P.runKernel(gn,t)}var _d,vd=o((()=>{F(),A(),L(),z(),_d=R({isNaN_:gd})}));function yd(e,t=.2){let n={x:I(e,`x`,`leakyRelu`)},r={alpha:t};return P.runKernel(_n,n,r)}var bd,xd=o((()=>{F(),A(),L(),z(),bd=R({leakyRelu_:yd})}));function Sd(e,t){let n=I(e,`a`,`less`,`string_or_numeric`),r=I(t,`b`,`less`,`string_or_numeric`);[n,r]=pa(n,r),$l(n.shape,r.shape);let i={a:n,b:r};return P.runKernel(vn,i)}var Cd,wd=o((()=>{F(),A(),va(),L(),eu(),z(),Cd=R({less_:Sd})}));function Td(e,t){let n=I(e,`a`,`lessEqual`,`string_or_numeric`),r=I(t,`b`,`lessEqual`,`string_or_numeric`);[n,r]=pa(n,r),$l(n.shape,r.shape);let i={a:n,b:r};return P.runKernel(yn,i)}var Ed,Dd=o((()=>{F(),A(),va(),L(),eu(),z(),Ed=R({lessEqual_:Td})}));function Od(e,t=5,n=1,r=1,i=.5){let a=I(e,`x`,`localResponseNormalization`);E(a.rank===4||a.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${a.rank}.`),E(_e(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let o=a,s=!1;a.rank===3&&(s=!0,o=W(a,[1,a.shape[0],a.shape[1],a.shape[2]]));let c={x:o},l={depthRadius:t,bias:n,alpha:r,beta:i},u=P.runKernel(`LRN`,c,l);return s?W(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var kd,Ad=o((()=>{F(),A(),L(),j(),z(),G(),kd=R({localResponseNormalization_:Od})}));function jd(e){let t={x:I(e,`x`,`log`,`float32`)};return P.runKernel(`Log`,t)}var Md,Nd=o((()=>{F(),A(),L(),z(),Md=R({log_:jd})}));function Pd(e){let t={x:I(e,`x`,`log1p`)};return P.runKernel(xn,t)}var Fd,Id=o((()=>{F(),A(),L(),z(),Fd=R({log1p_:Pd})}));function Ld(e,t){E(Ne(e),()=>`The f passed in variableGrads(f) must be a function`),E(t==null||Array.isArray(t)&&t.every(e=>e instanceof na),()=>`The varList passed in variableGrads(f, varList) must be an array of variables`);let n=t!=null;if(!n){t=[];for(let e in P.registeredVariables)t.push(P.registeredVariables[e])}let r=n?t.filter(e=>!e.trainable):null,i=t.length;t=t.filter(e=>e.trainable),E(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${i} variables is trainable.`);let{value:a,grads:o}=P.gradients(e,t,null,!0);E(o.some(e=>e!=null),()=>`Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize().`),E(a.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${a.rank} tensor`);let s={};return t.forEach((e,t)=>{o[t]!=null&&(s[e.name]=o[t])}),r?.forEach(e=>s[e.name]=null),{value:a,grads:s}}function Rd(e){return P.customGrad(e)}var zd=o((()=>{F(),N(),j()}));function Bd(e){let t={x:I(e,`x`,`neg`)};return P.runKernel(`Neg`,t)}var Vd,Hd=o((()=>{F(),A(),L(),z(),Vd=R({neg_:Bd})}));function Ud(e){let t={x:I(e,`x`,`softplus`)};return P.runKernel(yr,t)}var Wd,Gd=o((()=>{F(),A(),L(),z(),Wd=R({softplus_:Ud})}));function Kd(e){let t=I(e,`x`,`logSigmoid`);return Rd(e=>({value:Vd(Wd(Vd(e))),gradFunc:t=>U(t,Cc(Vd(e)))}))(t)}var qd,Jd=o((()=>{zd(),L(),os(),Hd(),z(),wc(),Gd(),qd=R({logSigmoid_:Kd})}));function Yd(e,t){let n=I(e,`a`,`sub`),r=I(t,`b`,`sub`);[n,r]=pa(n,r);let i={a:n,b:r};return P.runKernel(`Sub`,i)}var Xd,Zd=o((()=>{F(),A(),va(),L(),z(),Xd=R({sub_:Yd})}));function Qd(e,t=-1){let n=I(e,`logits`,`logSoftmax`);if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return Rd((e,n)=>{let r=Xd(e,Eu(e,t,!0)),i=Xd(V(r,`float32`),Md(Ru(Gu(r),t,!0)));return n([i]),{value:i,gradFunc:(e,n)=>{let[r]=n,i=Gu(r);return Xd(e,U(Ru(e,t,!0),i))}}})(n)}var $d,ef=o((()=>{zd(),L(),Xo(),Ku(),Nd(),Du(),os(),z(),Zd(),zu(),$d=R({logSoftmax_:Qd})}));function tf(e,t=null,n=!1){let r=I(e,`x`,`logSumExp`),i=Se(t,r.shape),a=Eu(r,i,!0),o=Md(Ru(Gu(Xd(r,a)),i)),s=H(W(a,o.shape),o);return n?W(s,bu(s.shape,i)):s}var nf,rf=o((()=>{L(),j(),$o(),Tu(),Ku(),Nd(),Du(),z(),G(),Zd(),zu(),nf=R({logSumExp_:tf})}));function af(e,t){let n=I(e,`a`,`logicalAnd`,`bool`),r=I(t,`b`,`logicalAnd`,`bool`);$l(n.shape,r.shape);let i={a:n,b:r};return P.runKernel(Sn,i)}var of,sf=o((()=>{F(),A(),L(),eu(),z(),of=R({logicalAnd_:af})}));function cf(e){let t={x:I(e,`x`,`logicalNot`,`bool`)};return P.runKernel(Cn,t)}var lf,uf=o((()=>{F(),A(),L(),z(),lf=R({logicalNot_:cf})}));function df(e,t){let n=I(e,`a`,`logicalOr`,`bool`),r=I(t,`b`,`logicalOr`,`bool`);$l(n.shape,r.shape);let i={a:n,b:r};return P.runKernel(wn,i)}var ff,pf=o((()=>{F(),A(),L(),eu(),z(),ff=R({logicalOr_:df})}));function mf(e,t){let n=I(e,`a`,`logicalXor`,`bool`),r=I(t,`b`,`logicalXor`,`bool`);return $l(n.shape,r.shape),of(ff(e,t),lf(of(e,t)))}var hf,gf=o((()=>{L(),eu(),sf(),uf(),pf(),z(),hf=R({logicalXor_:mf})})),_f=o((()=>{F()}));function vf(e,t,n,r,i){let a=I(e,`x`,`maxPool`),o=a,s=!1;a.rank===3&&(s=!0,o=W(a,[1,a.shape[0],a.shape[1],a.shape[2]])),E(o.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${o.rank}.`),E(ic(n,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`),sc(`maxPool`,r,i);let c={x:o},l={filterSize:t,strides:n,pad:r,dimRoundingMode:i},u=P.runKernel(On,c,l);return s?W(u,[u.shape[1],u.shape[2],u.shape[3]]):u}var yf,bf=o((()=>{F(),A(),L(),j(),cc(),z(),G(),yf=R({maxPool_:vf})}));function xf(e,t=[1,1,1],n,r,i,a=`NDHWC`){let o=I(e,`x`,`maxPool3d`),s=o,c=!1;o.rank===4&&(c=!0,s=W(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]])),E(s.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${s.rank}.`),E(a===`NDHWC`,()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${a}`),sc(`maxPool3d`,r,i);let l={x:s},u={filterSize:t,strides:n,pad:r,dimRoundingMode:i,dataFormat:a},d=P.runKernel(An,l,u);return c?W(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}var Sf,Cf=o((()=>{F(),A(),L(),j(),cc(),z(),G(),Sf=R({maxPool3d_:xf})}));function wf(e,t){let n=I(e,`a`,`maximum`),r=I(t,`b`,`maximum`);[n,r]=pa(n,r),n.dtype===`bool`&&(n=V(n,`int32`),r=V(r,`int32`)),$l(n.shape,r.shape);let i={a:n,b:r};return P.runKernel(Dn,i)}var Tf,Ef=o((()=>{F(),A(),va(),L(),eu(),Xo(),z(),Tf=R({maximum_:wf})}));function Df(e,t=null,n=!1){let r={x:I(e,`x`,`mean`)},i={axis:t,keepDims:n};return P.runKernel(Nn,r,i)}var Of,kf=o((()=>{F(),A(),L(),z(),Of=R({mean_:Df})}));function Af(e,t=`float32`){if(Ve(e),t===`complex64`)return Ra(Af(e,`float32`),Af(e,`float32`));let n=ze(D(e),t);return P.makeTensor(n,e,t)}var jf=o((()=>{F(),j(),za()}));function Mf(e,t=`float32`){if(Ve(e),t===`complex64`)return Ra(Mf(e,`float32`),Af(e,`float32`));let n=Re(D(e),t);return P.makeTensor(n,e,t)}var Nf=o((()=>{F(),j(),Ge(),za(),jf()}));function Pf(e,t){let n=I(e,`a`,`minimum`),r=I(t,`b`,`minimum`);[n,r]=pa(n,r),n.dtype===`bool`&&(n=V(n,`int32`),r=V(r,`int32`)),$l(n.shape,r.shape);let i={a:n,b:r};return P.runKernel(Pn,i)}var Ff,If=o((()=>{F(),A(),va(),L(),eu(),Xo(),z(),Ff=R({minimum_:Pf})}));function Lf(e,t,n){E(n===`reflect`||n===`symmetric`,()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);let r=I(e,`x`,`mirrorPad`);if(r.rank===0)throw Error(`mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad`);E(t.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`);let i=+(n===`reflect`);for(let e=0;e<r.rank;e++)E(t[e].length===2,()=>`Invalid number of paddings. Must be length of 2 each.`),E(t[e][0]>=0&&t[e][0]<=r.shape[e]-i&&t[e][1]>=0&&t[e][1]<=r.shape[e]-i,()=>`Padding in dimension ${e} cannot be greater than or equal to ${r.shape[e]-i} or less than 0 for input of shape ${r.shape}`);let a={paddings:t,mode:n},o={x:r};return P.runKernel(Fn,o,a)}var Rf,zf=o((()=>{F(),A(),L(),j(),z(),Rf=R({mirrorPad_:Lf})}));function Bf(e,t){let n=I(e,`a`,`mod`),r=I(t,`b`,`mod`);[n,r]=pa(n,r);let i={a:n,b:r};return P.runKernel(`Mod`,i)}var Vf,Hf=o((()=>{F(),A(),va(),L(),z(),Vf=R({mod_:Bf})}));function Uf(e,t=null,n=!1){e=I(e,`x`,`moments`);let r=Se(t,e.shape),i=Of(e,r,n),a=i.shape;return n||(a=bu(i.shape,r)),{mean:i,variance:Of(Iu(Xd(V(e,`float32`),W(i,a))),r,n)}}var Wf,Gf=o((()=>{L(),j(),Tu(),Xo(),kf(),z(),G(),Lu(),Zd(),Wf=R({moments_:Uf})}));function Kf(e,t){let n=I(e,`a`,`notEqual`,`string_or_numeric`),r=I(t,`b`,`notEqual`,`string_or_numeric`);[n,r]=pa(n,r),$l(n.shape,r.shape);let i={a:n,b:r};return P.runKernel(Rn,i)}var qf,Jf=o((()=>{F(),A(),va(),L(),eu(),z(),qf=R({notEqual_:Kf})}));function Yf(e,t,n=1,r=0,i=`int32`){if(t<2)throw Error(`Error in oneHot: depth must be >=2, but it is ${t}`);let a={indices:I(e,`indices`,`oneHot`,`int32`)},o={dtype:i,depth:t,onValue:n,offValue:r};return P.runKernel(Un,a,o)}var Xf,Zf=o((()=>{F(),A(),L(),z(),Xf=R({oneHot_:Yf})}));function Qf(e){let t={x:I(e,`x`,`onesLike`)};return P.runKernel(Hn,t)}var $f,ep=o((()=>{F(),A(),L(),z(),$f=R({onesLike_:Qf})}));function tp(e,t,n=0){let r=I(e,`x`,`pad`);if(r.rank===0)throw Error(`pad(scalar) is not defined. Pass non-scalar to pad`);let i={paddings:t,constantValue:n},a={x:r};return P.runKernel(Gn,a,i)}var np,rp=o((()=>{F(),A(),L(),z(),np=R({pad_:tp})}));function ip(e,t,n){let r=I(e,`x`,`spaceToBatchND`);E(r.rank>=1+t.length,()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`),E(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),E(r.shape.reduce((e,r,i)=>i>0&&i<=t.length?e&&(r+n[i-1][0]+n[i-1][1])%t[i-1]===0:e,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`);let i={x:r},a={blockShape:t,paddings:n};return P.runKernel(xr,i,a)}var ap,op=o((()=>{F(),A(),L(),j(),z(),ap=R({spaceToBatchND_:ip})}));function sp(e,t,n,r,i,a,o){i??=[1,1],a??=1,r===0&&(r=`valid`);let s=I(e,`x`,`maxPool`),c=s,l=!1;s.rank===3&&(l=!0,c=W(s,[1,s.shape[0],s.shape[1],s.shape[2]])),E(ic(a,i),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${a} and dilations '${i}'`);let u=Ws(c.shape,t,a,i,r),d=[u.dilationHeight,u.dilationWidth],f;f=r===`same`?lp([u.filterHeight,u.filterWidth],d):[[0,0],[0,0]];let p=d[0]===1&&d[1]===1,[m,h]=cp([u.inHeight,u.inWidth],d,f),g=p?r:`valid`,_=p?c:ap(c,d,m),v=(n===`avg`?()=>dc(_,t,a,g,o):()=>yf(_,t,a,g,o))(),y=p?v:jc(v,d,h);return l?W(y,[y.shape[1],y.shape[2],y.shape[3]]):y}function cp(e,t,n){let r=n.map(e=>e[0]),i=n.map(e=>e[1]),a=e.concat(r,i),o=t.map((e,t)=>(e-a[t]%e)%e),s=i.map((e,t)=>e+o[t]);return[t.map((e,t)=>[r[t],s[t]]),t.map((e,t)=>[0,o[t]])]}function lp(e,t){let n=e.map((e,n)=>e+(e-1)*(t[n]-1)).map(e=>e-1),r=n.map(e=>Math.floor(e/2)),i=n.map((e,t)=>e-r[t]);return n.map((e,t)=>[r[t],i[t]])}var up,dp=o((()=>{L(),j(),fc(),Mc(),cc(),bf(),z(),G(),op(),up=R({pool_:sp})}));function fp(e,t){let n={x:I(e,`x`,`prelu`),alpha:I(t,`alpha`,`prelu`)};return P.runKernel(Kn,n)}var pp,mp=o((()=>{F(),A(),L(),z(),pp=R({prelu_:fp})}));function hp(e,t=null,n=!1){let r=I(e,`x`,`prod`);r.dtype===`bool`&&(r=V(r,`int32`));let i={x:r},a={axis:t,keepDims:n};return P.runKernel(qn,i,a)}var gp,_p=o((()=>{F(),A(),L(),Xo(),z(),gp=R({prod_:hp})})),vp=s(((e,t)=>{(function(e,t,n){function r(e){var t=this,n=o();t.next=function(){var e=2091639*t.s0+t.c*23283064365386963e-26;return t.s0=t.s1,t.s1=t.s2,t.s2=e-(t.c=e|0)},t.c=1,t.s0=n(` `),t.s1=n(` `),t.s2=n(` `),t.s0-=n(e),t.s0<0&&(t.s0+=1),t.s1-=n(e),t.s1<0&&(t.s1+=1),t.s2-=n(e),t.s2<0&&(t.s2+=1),n=null}function i(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function a(e,t){var n=new r(e),a=t&&t.state,o=n.next;return o.int32=function(){return n.next()*4294967296|0},o.double=function(){return o()+(o()*2097152|0)*11102230246251565e-32},o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}function o(){var e=4022871197;return function(t){t=String(t);for(var n=0;n<t.length;n++){e+=t.charCodeAt(n);var r=.02519603282416938*e;e=r>>>0,r-=e,r*=e,e=r>>>0,r-=e,e+=r*4294967296}return(e>>>0)*23283064365386963e-26}}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.alea=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),yp=s(((e,t)=>{(function(e,t,n){function r(e){var t=this,n=``;t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(e|0)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=n.charCodeAt(r)|0,t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xor128=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),bp=s(((e,t)=>{(function(e,t,n){function r(e){var t=this,n=``;t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^(e^e<<1))|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(e|0)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=n.charCodeAt(r)|0,r==n.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function i(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xorwow=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),xp=s(((e,t)=>{(function(e,t,n){function r(e){var t=this;t.next=function(){var e=t.x,n=t.i,r=e[n],i;return r^=r>>>7,i=r^r<<24,r=e[n+1&7],i^=r^r>>>10,r=e[n+3&7],i^=r^r>>>3,r=e[n+4&7],i^=r^r<<7,r=e[n+7&7],r^=r<<13,i^=r^r<<9,e[n]=i,t.i=n+1&7,i};function n(e,t){var n,r=[];if(t===(t|0))r[0]=t;else for(t=``+t,n=0;n<t.length;++n)r[n&7]=r[n&7]<<15^t.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&r[n]===0;++n);for(n==8?r[7]=-1:r[n],e.x=r,e.i=0,n=256;n>0;--n)e.next()}n(t,e)}function i(e,t){return t.x=e.x.slice(),t.i=e.i,t}function a(e,t){e??=+new Date;var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(a.x&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xorshift7=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),Sp=s(((e,t)=>{(function(e,t,n){function r(e){var t=this;t.next=function(){var e=t.w,n=t.X,r=t.i,i,a;return t.w=e=e+1640531527|0,a=n[r+34&127],i=n[r=r+1&127],a^=a<<13,i^=i<<17,a^=a>>>15,i^=i>>>12,a=n[r]=a^i,t.i=r,a+(e^e>>>16)|0};function n(e,t){var n,r,i,a,o,s=[],c=128;for(t===(t|0)?(r=t,t=null):(t+=`\0`,r=0,c=Math.max(c,t.length)),i=0,a=-32;a<c;++a)t&&(r^=t.charCodeAt((a+32)%t.length)),a===0&&(o=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,a>=0&&(o=o+1640531527|0,n=s[a&127]^=r+o,i=n==0?i+1:0);for(i>=128&&(s[(t&&t.length||0)&127]=-1),i=127,a=512;a>0;--a)r=s[i+34&127],n=s[i=i+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,s[i]=r^n;e.w=o,e.X=s,e.i=i}n(t,e)}function i(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function a(e,t){e??=+new Date;var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(a.X&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.xor4096=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),Cp=s(((e,t)=>{(function(e,t,n){function r(e){var t=this,n=``;t.next=function(){var e=t.b,n=t.c,r=t.d,i=t.a;return e=e<<25^e>>>7^n,n=n-r|0,r=r<<24^r>>>8^i,i=i-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-r|0,t.d=r<<16^n>>>16^i,t.a=i-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=e|0):n+=e;for(var r=0;r<n.length+20;r++)t.b^=n.charCodeAt(r)|0,t.next()}function i(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function a(e,t){var n=new r(e),a=t&&t.state,o=function(){return(n.next()>>>0)/4294967296};return o.double=function(){do var e=((n.next()>>>11)+(n.next()>>>0)/4294967296)/(1<<21);while(e===0);return e},o.int32=n.next,o.quick=o,a&&(typeof a==`object`&&i(a,n),o.state=function(){return i(n,{})}),o}t&&t.exports?t.exports=a:n&&n.amd?n(function(){return a}):this.tychei=a})(e,typeof t==`object`&&t,typeof define==`function`&&define)})),wp=s(((e,t)=>{(function(e,n,r){var i=256,a=6,o=52,s=`random`,c=r.pow(i,a),l=r.pow(2,o),u=l*2,d=i-1,f;function p(e,t,o){var d=[];t=t==1?{entropy:!0}:t||{};var f=_(g(t.entropy?[e,y(n)]:e??v(),3),d),p=new m(d),b=function(){for(var e=p.g(a),t=c,n=0;e<l;)e=(e+n)*i,t*=i,n=p.g(1);for(;e>=u;)e/=2,t/=2,n>>>=1;return(e+n)/t};return b.int32=function(){return p.g(4)|0},b.quick=function(){return p.g(4)/4294967296},b.double=b,_(y(p.S),n),(t.pass||o||function(e,t,n,i){return i&&(i.S&&h(i,p),e.state=function(){return h(p,{})}),n?(r[s]=e,t):e})(b,f,`global`in t?t.global:this==r,t.state)}function m(e){var t,n=e.length,r=this,a=0,o=r.i=r.j=0,s=r.S=[];for(n||(e=[n++]);a<i;)s[a]=a++;for(a=0;a<i;a++)s[a]=s[o=d&o+e[a%n]+(t=s[a])],s[o]=t;(r.g=function(e){for(var t,n=0,a=r.i,o=r.j,s=r.S;e--;)t=s[a=d&a+1],n=n*i+s[d&(s[a]=s[o=d&o+t])+(s[o]=t)];return r.i=a,r.j=o,n})(i)}function h(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function g(e,t){var n=[],r=typeof e,i;if(t&&r==`object`)for(i in e)try{n.push(g(e[i],t-1))}catch{}return n.length?n:r==`string`?e:e+`\0`}function _(e,t){for(var n=e+``,r,i=0;i<n.length;)t[d&i]=d&(r^=t[d&i]*19)+n.charCodeAt(i++);return y(t)}function v(){try{var t;return f&&(t=f.randomBytes)?t=t(i):(t=new Uint8Array(i),(e.crypto||e.msCrypto).getRandomValues(t)),y(t)}catch{var r=e.navigator,a=r&&r.plugins;return[+new Date,e,a,e.screen,y(n)]}}function y(e){return String.fromCharCode.apply(0,e)}if(_(r.random(),n),typeof t==`object`&&t.exports){t.exports=p;try{f=Wo()}catch{}}else typeof define==`function`&&define.amd?define(function(){return p}):r[`seed`+s]=p})(typeof self<`u`?self:e,[],Math)})),Tp=s(((e,t)=>{var n=vp(),r=yp(),i=bp(),a=xp(),o=Sp(),s=Cp(),c=wp();c.alea=n,c.xor128=r,c.xorwow=i,c.xorshift7=a,c.xor4096=o,c.tychei=s,t.exports=c})),Ep,Dp,Op,kp=o((()=>{Ep=u(Tp()),Dp=class{constructor(e,t,n,r,i){this.mean=e,this.stdDev=t,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);let a=i||Math.random();this.random=Ep.alea(a.toString())}nextValue(){if(!isNaN(this.nextVal)){let e=this.nextVal;return this.nextVal=NaN,e}let e,t,n=!1;for(;!n;){let r,i,a;do r=2*this.random()-1,i=2*this.random()-1,a=r*r+i*i;while(a>=1||a===0);let o=Math.sqrt(-2*Math.log(a)/a);e=this.mean+this.stdDev*r*o,t=this.mean+this.stdDev*i*o,(!this.truncated||this.isValidTruncated(e))&&(n=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return this.dtype==null||this.dtype===`float32`?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}},Op=class{constructor(e=0,t=1,n,r){if(this.canReturnFloat=()=>this.dtype==null||this.dtype===`float32`,this.min=e,this.range=t-e,this.dtype=n,r??=Math.random(),typeof r==`number`&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=Ep.alea(r)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}}));function Ap(e,t=0,n=1,r,i){if(Ve(e),r!=null&&r===`bool`)throw Error(`Unsupported data type ${r}`);let a=new Dp(t,n,r,!1,i),o=Jo(e,r);for(let e=0;e<o.values.length;e++)o.values[e]=a.nextValue();return o.toTensor()}var jp,Mp=o((()=>{Ge(),Yo(),z(),kp(),jp=R({randomNormal_:Ap})}));function Np(e,t=0,n=1,r=`float32`,i){Ve(e);let a=Jo(e,r),o=new Op(t,n,null,i);for(let e=0;e<a.values.length;e++)a.values[e]=o.nextValue();return a.toTensor()}var Pp,Fp=o((()=>{Ge(),Yo(),z(),kp(),Pp=R({randomUniform_:Np})}));function Ip(e,t,n=1,r=`float32`){if(n===0)throw Error(`Cannot have a step of zero`);let i={start:e,stop:t,step:n,dtype:r};return P.runKernel(Zn,{},i)}var Lp=o((()=>{F(),A()}));function Rp(e){let t={input:I(e,`input`,`real`)};return P.runKernel(Qn,t)}var zp,Bp=o((()=>{F(),A(),L(),z(),zp=R({real_:Rp})}));function Vp(e){let t={x:I(e,`x`,`reciprocal`)};return P.runKernel($n,t)}var Hp,Up=o((()=>{F(),A(),L(),z(),Hp=R({reciprocal_:Vp})}));function Wp(e){let t={x:I(e,`x`,`relu`)};return P.runKernel(er,t)}var Gp,Kp=o((()=>{F(),A(),L(),z(),Gp=R({relu_:Wp})}));function qp(e){let t={x:I(e,`x`,`relu6`)};return P.runKernel(or,t)}var Jp,Yp=o((()=>{F(),A(),L(),z(),Jp=R({relu6_:qp})}));function Xp(e,t){let n={x:I(e,`x`,`reverse`)},r={dims:t};return P.runKernel(sr,n,r)}var Zp,Qp=o((()=>{F(),A(),L(),z(),Zp=R({reverse_:Xp})}));function $p(e){let t={x:I(e,`x`,`round`)};return P.runKernel(cr,t)}var em,tm=o((()=>{F(),A(),L(),z(),em=R({round_:$p})}));function nm(e){let t={x:I(e,`x`,`rsqrt`,`float32`)};return P.runKernel(lr,t)}var rm,im=o((()=>{F(),A(),L(),z(),rm=R({rsqrt_:nm})}));function am(e){let t={x:I(e,`x`,`selu`)};return P.runKernel(mr,t)}var om,sm=o((()=>{F(),A(),L(),z(),om=R({selu_:am})}));function cm(e,t,n,r,i,a=[1,1],o=`NHWC`){let s=I(e,`x`,`separableConv2d`),c=I(t,`depthwiseFilter`,`separableConv2d`),l=I(n,`pointwiseFilter`,`separableConv2d`),u=s,d=!1;if(s.rank===3&&(d=!0,u=W(s,[1,s.shape[0],s.shape[1],s.shape[2]])),o===`NCHW`)throw Error(`separableConv2d currently does not support dataFormat NCHW; only NHWC is supported`);E(u.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${u.rank}.`),E(c.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${c.rank}.`),E(l.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${c.rank}.`),E(l.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${l.shape[0]}.`),E(l.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${l.shape[1]}.`);let f=c.shape[2],p=c.shape[3];E(l.shape[2]===f*p,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${f*p}, but got ${l.shape[2]}.`);let m=ml(Kl(u,c,r,i,o,a),l,1,`valid`,o);return d?W(m,[m.shape[1],m.shape[2],m.shape[3]]):m}var lm,um=o((()=>{L(),j(),hl(),ql(),z(),G(),lm=R({separableConv2d_:cm})}));function dm(e){let t={x:I(e,`x`,`sign`)};return P.runKernel(_r,t)}var fm,pm=o((()=>{F(),A(),L(),z(),fm=R({sign_:dm})}));function mm(e){let t={x:I(e,`x`,`sin`,`float32`)};return P.runKernel(`Sin`,t)}var hm,gm=o((()=>{F(),A(),L(),z(),hm=R({sin_:mm})}));function _m(e){let t={x:I(e,`x`,`sinh`)};return P.runKernel(gr,t)}var vm,ym=o((()=>{F(),A(),L(),z(),vm=R({sinh_:_m})}));function bm(e,t,n){let r=I(e,`x`,`slice1d`);return E(r.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),Ec(r,[t],[n])}var xm,Sm=o((()=>{L(),j(),z(),Dc(),xm=R({slice1d_:bm})}));function Cm(e,t,n){let r=I(e,`x`,`slice2d`);return E(r.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),Ec(r,t,n)}var wm,Tm=o((()=>{L(),j(),z(),Dc(),wm=R({slice2d_:Cm})}));function Em(e,t,n){let r=I(e,`x`,`slice3d`);return E(r.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),Ec(r,t,n)}var Dm,Om=o((()=>{L(),j(),z(),Dc(),Dm=R({slice3d_:Em})}));function km(e,t,n){let r=I(e,`x`,`slice4d`);return E(r.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),Ec(r,t,n)}var Am,jm=o((()=>{L(),j(),z(),Dc(),Am=R({slice4d_:km})}));function Mm(e,t=-1){let n=I(e,`logits`,`softmax`,`float32`);if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);let r={logits:n},i={dim:t};return P.runKernel(Cr,r,i)}var Nm,Pm=o((()=>{F(),A(),L(),z(),Nm=R({softmax_:Mm})}));function Fm(e){E(e.dtype===`complex64`,()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`);let t={input:e};return P.runKernel(`FFT`,t)}var Im,Lm=o((()=>{F(),A(),j(),z(),Im=R({fft_:Fm})}));function Rm(e){E(e.dtype===`complex64`,()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`);let t={input:e};return P.runKernel(fn,t)}var zm,Bm=o((()=>{F(),A(),j(),z(),zm=R({ifft_:Rm})}));function Vm(e){let t=e.shape[e.shape.length-1],n=e.size/t,r;if(t<=2)r=zm(W(e,[n,t]));else{let i=[n,2*(t-1)],a=W(zp(e),[n,t]),o=W(cd(e),[n,t]),s=Zp(Ec(a,[0,1],[n,t-2]),1),c=U(Zp(Ec(o,[0,1],[n,t-2]),1),Mu(-1));r=zm(W(Ra(_c([a,s],1),_c([o,c],1)),[i[0],i[1]]))}if(r=zp(r),e.rank===3&&e.shape[0]!==0){let t=r,n=e.shape[0];r=W(r,[n,r.shape[0]/n,r.shape[1]]),t.dispose()}return r}var Hm,Um=o((()=>{za(),vc(),ld(),os(),z(),Bp(),G(),Qp(),Nu(),Dc(),Bm(),Hm=R({irfft_:Vm})}));function Wm(e,t,n=0){let r={x:I(e,`x`,`split`)},i={numOrSizeSplits:t,axis:n};return P.runKernel(Sr,r,i)}var Gm,Km=o((()=>{F(),A(),L(),z(),Gm=R({split_:Wm})}));function qm(e,t){E(e.dtype===`float32`,()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let n=e.shape[e.shape.length-1],r=e.size/n,i;if(t!=null&&t<n){let r=e.shape.map(e=>0),a=e.shape.map(e=>e);a[e.shape.length-1]=t,i=Ec(e,r,a),n=t}else if(t!=null&&t>n){let r=e.shape.map(e=>e);r[e.shape.length-1]=t-n,i=_c([e,Af(r)],e.shape.length-1),n=t}else i=e;let a=ou(i),o=Im(W(Ra(i,a),[r,n])),s=Math.floor(n/2)+1,c=zp(o),l=cd(o),u=Gm(c,[s,n-s],c.shape.length-1),d=Gm(l,[s,n-s],l.shape.length-1),f=i.shape.slice();return f[i.shape.length-1]=s,W(Ra(u[0],d[0]),f)}var Jm,Ym=o((()=>{j(),za(),vc(),ld(),z(),Bp(),G(),Dc(),Km(),jf(),su(),Lm(),Jm=R({rfft_:qm})}));function Xm(e,t){let n=I(e,`a`,`squaredDifference`),r=I(t,`b`,`squaredDifference`);[n,r]=pa(n,r),$l(n.shape,r.shape);let i={a:n,b:r};return P.runKernel(kr,i,{})}var Zm,Qm=o((()=>{F(),A(),va(),L(),eu(),z(),Zm=R({squaredDifference_:Xm})}));function $m(e,t){let n=I(e,`x`,`squeeze`,`string_or_numeric`);return W(n,Ce(n.shape,t).newShape)}var eh,th=o((()=>{L(),j(),z(),G(),eh=R({squeeze_:$m})}));function nh(e,t=0){let n=Fa(e,`tensors`,`stack`,`string_or_numeric`);E(n.length>=1,()=>`Pass at least one tensor to tf.stack`),n.length>0&&E(t<=n[0].rank,()=>`Axis must be <= rank of the tensor`);let r=n,i={axis:t};return P.runKernel(Wn,r,i)}var rh,ih=o((()=>{F(),A(),L(),j(),z(),rh=R({stack_:nh})}));function ah(e,t=0){let n={x:I(e,`x`,`step`)},r={alpha:t};return P.runKernel(Gr,n,r)}var oh,sh=o((()=>{F(),A(),L(),z(),oh=R({step_:ah})}));function ch(e,t,n,r,i=0,a=0,o=0,s=0,c=0){let l={x:I(e,`x`,`stridedSlice`,`string_or_numeric`)},u={begin:t,end:n,strides:r,beginMask:i,endMask:a,ellipsisMask:o,newAxisMask:s,shrinkAxisMask:c};return P.runKernel(Mr,l,u)}var lh,uh=o((()=>{F(),A(),L(),z(),lh=R({stridedSlice_:ch})}));function dh(e){let t={x:I(e,`x`,`tan`,`float32`)};return P.runKernel(`Tan`,t)}var fh,ph=o((()=>{F(),A(),L(),z(),fh=R({tan_:dh})}));function mh(e,t){he(e);let n=Ma(e,t);if(n.length!==1)throw Error(`tensor1d() requires values to be a flat/TypedArray`);return Ba(e,null,n,t)}var hh=o((()=>{L(),j(),Va()}));function gh(e,t,n){if(he(e),t!=null&&t.length!==2)throw Error(`tensor2d() requires shape to have two numbers`);let r=Ma(e,n);if(r.length!==2&&r.length!==1)throw Error(`tensor2d() requires values to be number[][] or flat/TypedArray`);if(r.length===1&&t==null)throw Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Ba(e,t,r,n)}var _h=o((()=>{L(),j(),Va()}));function vh(e,t,n){let r=t.rank>1?t.shape[t.rank-1]:1,i=t.rank>1?t.rank-1:1,a=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${i}.`;if(n.rank<i)throw Error(a+` update.rank < ${i}. `);if(e.length<r+(n.rank-i))throw Error(a+` Output shape length < ${r+(n.rank-i)}`);if(n.rank!==i+e.length-r)throw Error(a+` update.rank != ${i+e.length-r}`);for(let e=0;e<i;++e)if(n.shape[e]!==t.shape[e])throw Error(a+` updates.shape[${e}] (${n.shape[e]}) != indices.shape[${e}] (${t.shape[e]}).`);for(let t=0;t<n.rank-i;++t)if(n.shape[t+i]!==e[t+r])throw Error(a+` updates.shape[${t+i}] (${n.shape[t+i]}) != shape[${t+i}] (${e[t+i]})`)}function yh(e,t,n){if(t.rank<1)throw Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!==`int32`)throw Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(t.size===0)throw Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw Error(`Updates specified for empty output. updates shape: ${e.shape}`)}vh(n,t,e)}function bh(e,t,n){let r=t.shape.length,i=r>1?t.shape[r-1]:1,a=n.length,o=1;for(let e=i;e<a;++e)o*=n[e];let s=i<1?1:i,c=D(t.shape)/s,l=[...O(n.slice(0,i)),1],u=D(n);return{sliceRank:i,numUpdates:c,sliceSize:o,strides:l,outputSize:u}}var xh=o((()=>{j()}));function Sh(e,t=1,n=!0){let r=I(e,`x`,`topk`);if(r.rank===0)throw Error(`topk() expects the input to be of rank 1 or higher`);let i=r.shape[r.shape.length-1];if(t<0)throw Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>i)throw Error(`'k' passed to topk() must be <= the last dimension (${i}) but got ${t}`);let a={x:r},o={k:t,sorted:n},[s,c]=P.runKernel(Rr,a,o);return{values:s,indices:c}}var Ch,wh=o((()=>{F(),A(),L(),z(),Ch=R({topk_:Sh})}));function Th(e,t=0,n=1,r,i){if(Ve(e),r!=null&&r===`bool`)throw Error(`Unsupported data type $ { dtype }`);let a=new Dp(t,n,r,!0,i),o=Jo(e,r);for(let e=0;e<o.values.length;e++)o.values[e]=a.nextValue();return o.toTensor()}var Eh,Dh=o((()=>{Ge(),Yo(),z(),kp(),Eh=R({truncatedNormal_:Th})}));function Oh(e,t=0){let n=I(e,`x`,`unique`,`string_or_numeric`);E(n.rank>0,()=>`The input tensor must be at least 1D`);let r={x:n},i={axis:t},[a,o]=P.runKernel(Vr,r,i);return{values:a,indices:o}}var kh,Ah=o((()=>{F(),A(),L(),j(),z(),kh=R({unique_:Oh})}));function pte(e,t,n){let r=I(e,`x`,`unsortedSegmentSum`),i=I(t,`segmentIds`,`unsortedSegmentSum`,`int32`);E(_e(n),()=>`numSegments must be of dtype int`);let a={x:r,segmentIds:i},o={numSegments:n};return P.runKernel(Ur,a,o)}var jh,Mh=o((()=>{F(),A(),L(),j(),z(),jh=R({unsortedSegmentSum_:pte})}));function mte(e,t=0){let n=I(e,`x`,`unstack`,`string_or_numeric`);E(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`);let r={value:n},i={axis:t};return P.runKernel(Hr,r,i)}var Nh,Ph=o((()=>{F(),A(),L(),j(),z(),Nh=R({unstack_:mte})}));function hte(e,t=!0,n,r){return P.makeVariable(e,t,n,r)}var gte=o((()=>{F()}));function Fh(e,t){let n=[];for(let e=0;e<t.length;e++)t[e]&&n.push(e);let r=Jo(e,`int32`),i=Jo([n.length,e.length],`int32`);for(let t=0;t<n.length;t++){let a=r.indexToLoc(n[t]),o=t*e.length;i.values.set(a,o)}return i.toTensor()}var Ih=o((()=>{Yo()})),_te=o((()=>{}));function vte(e,t,n){let r=I(e,`x`,`transpose`);if(t??=r.shape.map((e,t)=>t).reverse(),E(r.rank===t.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${t}.`),t.forEach(e=>{E(e>=0&&e<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${t}`)}),r.rank<=1)return r.clone();let i={x:r},a={perm:t};return r.dtype===`complex64`?B(()=>{let e=zp(r),t=cd(r);return e=P.runKernel(Br,{x:e},a),t=P.runKernel(Br,{x:t},a),n&&(t=Vd(t)),Ra(e,t)}):P.runKernel(Br,i,a)}var Lh,Rh=o((()=>{F(),$a(),A(),L(),j(),za(),ld(),Hd(),z(),Bp(),Lh=R({transpose_:vte})})),yte=o((()=>{})),bte=o((()=>{F()})),xte=o((()=>{F()})),Ste=o((()=>{F()}));function Cte(e,t){if(t==null)return e.shape.slice();if(ge(e.shape,t))return t;if(e.shape.length===t.length){let n=[];for(let r=0;r<e.shape.length;r++)t[r]==null&&e.shape[r]!=null?n.push(e.shape[r]):n.push(t[r]);return n}return t}var wte=o((()=>{j()}));function Tte(e,t,n,r){let i=I(e,`x`,`dropout`);if(E(i.dtype===`float32`,()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${i.dtype} tensor instead.`),E(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return e instanceof ta?i.clone():i;let a=Cte(i,n),o=1-t;return U(i,rs(ed(H(Pp(a,0,1,`float32`,r),o)),o))}var zh,Ete=o((()=>{N(),L(),j(),$o(),is(),wte(),td(),os(),z(),Fp(),zh=R({dropout_:Tte})})),Dte=o((()=>{})),Ote=o((()=>{}));function kte(e,t,n,r,i,a=`NHWC`,o){let s=e;e.rank===3&&(s=W(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=W(t,[1,t.shape[0],t.shape[1],t.shape[2]])),E(s.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${s.shape}.`),E(c.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${c.shape}.`),E(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);let l=a===`NHWC`?s.shape[3]:s.shape[1],u=a===`NHWC`?c.shape[3]:c.shape[1];E(l===n[2],()=>`Error in conv2dDerFilter: depth of input ${l}) must match input depth in filter (${n[2]}.`),E(u===n[3],()=>`Error in conv2dDerFilter: depth of dy (${u}) must match output depth for filter (${n[3]}).`),sc(`conv2dDerFilter`,i,o);let d={x:s,dy:c},f={strides:r,pad:i,dataFormat:a,dimRoundingMode:o,filterShape:n};return P.runKernel(At,d,f)}var Bh,Vh=o((()=>{F(),A(),j(),cc(),z(),G(),Bh=R({conv2DBackpropFilter_:kte})}));function Hh(e,t,n){if(n==null||n===`linear`)return e;if(n===`relu`)return U(e,oh(t));throw Error(`Cannot compute gradient for fused activation ${n}.`)}function Uh(e,t){let n=t,r=Ql(e.shape,t.shape);return r.length>0&&(n=Ru(n,r)),W(n,e.shape)}function Wh(e,t,n,r){if(t===`linear`)return e;if(t===`relu`)return Gp(e);if(t===`elu`)return mu(e);if(t===`relu6`)return Jp(e);if(t===`prelu`)return pp(e,n);if(t===`leakyrelu`)return bd(e,r);if(t===`sigmoid`)return Cc(e);throw Error(`Unknown fused activation ${t}.`)}var Gh,Kh=o((()=>{eu(),hu(),xd(),os(),mp(),Kp(),Yp(),G(),wc(),sh(),zu(),Gh=(e,t)=>!(e>0)||t===`linear`}));function Ate({x:e,filter:t,strides:n,pad:r,dataFormat:i=`NHWC`,dilations:a=[1,1],dimRoundingMode:o,bias:s,activation:c=`linear`,preluActivationWeights:l,leakyreluAlpha:u}){if(c||=`linear`,Gh(P.state.gradientDepth,c)===!1){E(i===`NHWC`,()=>`Error in fused conv2d: got dataFormat of ${i} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let d=ml(e,t,n,r,i,a,o);return s!=null&&(d=H(d,s)),Wh(d,c,l,u)}let d=I(e,`x`,`conv2d`,`float32`),f=I(t,`filter`,`conv2d`,`float32`),p=d,m=!1;d.rank===3&&(m=!0,p=W(d,[1,d.shape[0],d.shape[1],d.shape[2]])),E(p.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${p.rank}.`),E(f.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${f.rank}.`),sc(`fused conv2d`,r,o);let h=i===`NHWC`?p.shape[3]:p.shape[1];E(f.shape[2]===h,()=>`Error in conv2d: depth of input (${h}) must match input depth for filter ${f.shape[2]}.`),E(ic(n,a),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`);let g=Ks(p.shape,f.shape,n,a,r,o),_;s!=null&&(_=I(s,`bias`,`fused conv2d`),[_]=pa(_,d),i===`NHWC`?$l(g.outShape,_.shape):(E(_.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${_.shape.length}.`),E(_.shape.length===0||_.shape[0]===g.outChannels||_.shape[0]===1,()=>`Error in fused conv2d: bias shape (${_.shape}) is not compatible with the number of output channels (${g.outChannels})`)));let v;if(l!=null){let e=l.shape;if(E(e.length<=1||e.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${e.length}.`),e.length===1)E(e[0]===1||e[0]===g.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the number of output channels (${g.outChannels}).`);else if(e.length===3)try{$l(e,g.outShape)}catch{let t=`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the output shape of the conv2d (${g.outShape}).`;throw Error(t)}v=I(l,`prelu weights`,`fused conv2d`)}let y=(e,t)=>{E(i===`NHWC`,()=>`Error in gradient of fused conv2D: got dataFormat of ${i} but only NHWC is currently supported.`);let[o,s,l,u]=t,d=Hh(e,l,c);E(rc(a),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`);let f=[bl(s.shape,d,o,n,r),Bh(s,d,o.shape,n,r)];if(u!=null){let e=Uh(u,d);f.push(e)}return f},b={x:p,filter:f,bias:_,preluActivationWeights:v},x={strides:n,pad:r,dataFormat:i,dilations:a,dimRoundingMode:o,activation:c,leakyreluAlpha:u};return s==null?Rd((e,t,n)=>{let r=P.runKernel(Yr,b,x);return n([t,e,r]),m&&(r=W(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:y}})(p,f):Rd((e,t,n,r)=>{let i=P.runKernel(Yr,b,x);return r([t,e,i,n]),m&&(i=W(i,[i.shape[1],i.shape[2],i.shape[3]])),{value:i,gradFunc:y}})(p,f,_)}var qh,jte=o((()=>{F(),zd(),A(),va(),L(),j(),$o(),eu(),hl(),Vh(),xl(),cc(),Kh(),z(),G(),qh=R({fusedConv2d_:Ate})}));function Mte(e,t,n,r,i,a=[1,1],o){let s=e;e.rank===3&&(s=W(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=W(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l={x:s,dy:c},u={strides:r,pad:i,dimRoundingMode:o,dilations:a,filterShape:n};return P.runKernel(Ht,l,u)}var Jh,Nte=o((()=>{F(),A(),z(),G(),Jh=R({depthwiseConv2dNativeBackpropFilter_:Mte})}));function Yh(e,t,n,r,i,a=[1,1],o){let s=t,c=!1;t.rank===3&&(c=!0,s=W(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let l={dy:s,filter:n},u={strides:r,pad:i,dimRoundingMode:o,dilations:a,inputShape:e},d=P.runKernel(Ut,l,u);return c?W(d,[d.shape[1],d.shape[2],d.shape[3]]):d}var Xh,Zh=o((()=>{F(),A(),z(),G(),Xh=R({depthwiseConv2dNativeBackpropInput_:Yh})}));function Qh({a:e,b:t,transposeA:n=!1,transposeB:r=!1,bias:i,activation:a=`linear`,preluActivationWeights:o,leakyreluAlpha:s=.2}){if(Gh(P.state.gradientDepth,a)===!1){let c=bc(e,t,n,r);return i!=null&&(c=H(c,i)),Wh(c,a,o,s)}let c=I(e,`a`,`fused matMul`),l=I(t,`b`,`fused matMul`);[c,l]=pa(c,l);let u=n?c.shape[c.rank-2]:c.shape[c.rank-1],d=r?l.shape[l.rank-1]:l.shape[l.rank-2],f=n?c.shape[c.rank-1]:c.shape[c.rank-2],p=r?l.shape[l.rank-2]:l.shape[l.rank-1],m=c.shape.slice(0,-2),h=l.shape.slice(0,-2),g=D(m),_=D(h);E(u===d,()=>`Error in fused matMul: inner shapes (${u}) and (${d}) of Tensors with shapes ${c.shape} and ${l.shape} and transposeA=${n} and transposeB=${r} must match.`);let v=$l(c.shape.slice(0,-2),l.shape.slice(0,-2)).concat([f,p]),y=n?W(c,[g,u,f]):W(c,[g,f,u]),b=r?W(l,[_,p,d]):W(l,[_,d,p]),x;i!=null&&(x=I(i,`bias`,`fused matMul`),[x]=pa(x,c),$l(v,x.shape));let S;o!=null&&(S=I(o,`prelu weights`,`fused matMul`));let C=(e,t)=>{let[o,s,c,l]=t,u=Hh(W(e,c.shape),c,a),d,f;if(!n&&!r?(d=bc(u,s,!1,!0),f=bc(o,u,!0,!1)):!n&&r?(d=bc(u,s,!1,!1),f=bc(u,o,!0,!1)):n&&!r?(d=bc(s,u,!1,!0),f=bc(o,u,!1,!1)):(d=bc(s,u,!0,!0),f=bc(u,o,!0,!0)),i!=null){let e=Uh(l,u);return[d,f,e]}else return[d,f]},w={a:y,b,bias:x,preluActivationWeights:S},ee={transposeA:n,transposeB:r,activation:a,leakyreluAlpha:s};return i==null?Rd((e,t,n)=>{let r=P.runKernel(Jr,w,ee);return n([e,t,r]),{value:W(r,v),gradFunc:C}})(y,b):Rd((e,t,n,r)=>{let i=P.runKernel(Jr,w,ee);return r([e,t,i,n]),{value:W(i,v),gradFunc:C}})(y,b,x)}var $h,eg=o((()=>{F(),zd(),A(),va(),L(),j(),$o(),eu(),Kh(),xc(),z(),G(),$h=R({fusedMatMul_:Qh})})),tg=o((()=>{jte(),eg()}));function ng(e,t,n,r,i=`bilinear`,a=0){let o=I(e,`image`,`cropAndResize`),s=I(t,`boxes`,`cropAndResize`,`float32`),c=I(n,`boxInd`,`cropAndResize`,`int32`),l=s.shape[0];E(o.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${o.rank}.`),E(s.rank===2&&s.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${l},4] but had shape ${s.shape}.`),E(c.rank===1&&c.shape[0]===l,()=>`Error in cropAndResize: boxInd must be have size [${l}] but had shape ${s.shape}.`),E(r.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),E(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),E(i===`bilinear`||i===`nearest`,()=>`method must be bilinear or nearest, but was ${i}`);let u={image:o,boxes:s,boxInd:c},d={method:i,extrapolationValue:a,cropSize:r};return P.runKernel(Rt,u,d)}var rg,ig=o((()=>{F(),A(),L(),j(),z(),rg=R({cropAndResize_:ng})}));function ag(e){let t=I(e,`image`,`flipLeftRight`,`float32`);E(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);let n={image:t};return P.runKernel(nn,n,{})}var og,sg=o((()=>{F(),A(),L(),j(),z(),og=R({flipLeftRight_:ag})}));function cg(e){let t=I(e,`image`,`grayscaleToRGB`),n=t.rank-1,r=t.shape[n];E(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),E(r===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);let i=Array(t.rank);return i.fill(1,0,n),i[n]=3,Xu(t,i)}var lg,ug=o((()=>{L(),j(),z(),Zu(),lg=R({grayscaleToRGB_:cg})}));function dg(e){let t=I(e,`image`,`RGBToGrayscale`),n=t.rank-1,r=t.shape[n];E(t.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`),E(r===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${r}.`);let i=t.dtype,a=V(t,`float32`),o=mh([.2989,.587,.114]),s;switch(t.rank){case 2:s=fu(`ij,j->i`,a,o);break;case 3:s=fu(`ijk,k->ij`,a,o);break;case 4:s=fu(`ijkl,l->ijk`,a,o);break;case 5:s=fu(`ijklm,m->ijkl`,a,o);break;case 6:s=fu(`ijklmn,n->ijklm`,a,o);break;default:throw Error(`Not a valid tensor rank.`)}return s=qu(s,-1),V(s,i)}var fg,pg=o((()=>{L(),j(),Xo(),pu(),Ju(),z(),hh(),fg=R({rgbToGrayscale_:dg})}));function mg(e,t,n=0,r=.5){let i=I(e,`image`,`rotateWithOffset`,`float32`);E(i.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${i.rank}.`);let a={image:i},o={radians:t,fillValue:n,center:r};return P.runKernel(qr,a,o)}var hg,gg=o((()=>{F(),A(),L(),j(),z(),hg=R({rotateWithOffset_:mg})}));function _g(e,t,n,r,i,a){r??=.5,i??=-1/0,a??=0;let o=e.shape[0];return n=Math.min(n,o),E(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),E(e.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),E(e.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),E(t.rank===1,()=>`scores must be a 1D tensor`),E(t.shape[0]===o,()=>`scores has incompatible shape with boxes. Expected ${o}, but was ${t.shape[0]}`),E(0<=a&&a<=1,()=>`softNmsSigma must be in [0, 1], but was '${a}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:i,softNmsSigma:a}}var vg=o((()=>{j()}));function yg(e,t,n,r=.5,i=-1/0){let a=I(e,`boxes`,`nonMaxSuppression`,`float32`),o=I(t,`scores`,`nonMaxSuppression`,`float32`),s=_g(a,o,n,r,i);n=s.maxOutputSize,r=s.iouThreshold,i=s.scoreThreshold;let c={maxOutputSize:n,iouThreshold:r,scoreThreshold:i};return P.runKernel(zn,{boxes:a,scores:o},c)}var bg,xg=o((()=>{F(),A(),L(),vg(),z(),bg=R({nonMaxSuppression_:yg})}));function Sg(e,t,n){let r=Cg(e,t,n),i=r<0?-(r+1):r;e.splice(i,0,t)}function Cg(e,t,n){return Tg(e,t,n||wg)}function wg(e,t){return e>t?1:e<t?-1:0}function Tg(e,t,n){let r=0,i=e.length,a=0,o=!1;for(;r<i;){a=r+(i-r>>>1);let s=n(t,e[a]);s>0?r=a+1:(i=a,o=!s)}return o?r:-r-1}var Eg=o((()=>{}));function Dg(e,t,n,r,i){return Ag(e,t,n,r,i,0)}function Og(e,t,n,r,i,a){return Ag(e,t,n,r,i,0,!1,a,!0)}function kg(e,t,n,r,i,a){return Ag(e,t,n,r,i,a,!0)}function Ag(e,t,n,r,i,a,o=!1,s=!1,c=!1){let l=[];for(let e=0;e<t.length;e++)t[e]>i&&l.push({score:t[e],boxIndex:e,suppressBeginIndex:0});l.sort(Ng);let u=a>0?-.5/a:0,d=[],f=[];for(;d.length<n&&l.length>0;){let t=l.pop(),{score:n,boxIndex:a,suppressBeginIndex:o}=t;if(n<i)break;let s=!1;for(let n=d.length-1;n>=o;--n){let o=jg(e,a,d[n]);if(o>=r){s=!0;break}if(t.score*=Mg(r,u,o),t.score<=i)break}t.suppressBeginIndex=d.length,s||(t.score===n?(d.push(a),f.push(t.score)):t.score>i&&Sg(l,t,Ng))}let p=d.length,m=n-p;s&&m>0&&(d.push(...Array(m).fill(0)),f.push(...Array(m).fill(0)));let h={selectedIndices:d};return o&&(h.selectedScores=f),c&&(h.validOutputs=p),h}function jg(e,t,n){let r=e.subarray(t*4,t*4+4),i=e.subarray(n*4,n*4+4),a=Math.min(r[0],r[2]),o=Math.min(r[1],r[3]),s=Math.max(r[0],r[2]),c=Math.max(r[1],r[3]),l=Math.min(i[0],i[2]),u=Math.min(i[1],i[3]),d=Math.max(i[0],i[2]),f=Math.max(i[1],i[3]),p=(s-a)*(c-o),m=(d-l)*(f-u);if(p<=0||m<=0)return 0;let h=Math.max(a,l),g=Math.max(o,u),_=Math.min(s,d),v=Math.min(c,f),y=Math.max(_-h,0)*Math.max(v-g,0);return y/(p+m-y)}function Mg(e,t,n){let r=Math.exp(t*n*n);return n<=e?r:0}function Ng(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}var Pg=o((()=>{Eg()}));async function Fg(e,t,n,r=.5,i=-1/0){let a=I(e,`boxes`,`nonMaxSuppressionAsync`),o=I(t,`scores`,`nonMaxSuppressionAsync`),s=_g(a,o,n,r,i);n=s.maxOutputSize,r=s.iouThreshold,i=s.scoreThreshold;let c=await Promise.all([a.data(),o.data()]),l=c[0],u=c[1],{selectedIndices:d}=Dg(l,u,n,r,i);return a!==e&&a.dispose(),o!==t&&o.dispose(),mh(d,`int32`)}var Ig,Lg=o((()=>{Pg(),L(),vg(),hh(),Ig=Fg}));function Rg(e,t,n,r=.5,i=-1/0,a=0){let o=I(e,`boxes`,`nonMaxSuppression`),s=I(t,`scores`,`nonMaxSuppression`),c=_g(o,s,n,r,i,a);n=c.maxOutputSize,r=c.iouThreshold,i=c.scoreThreshold,a=c.softNmsSigma;let l={boxes:o,scores:s},u={maxOutputSize:n,iouThreshold:r,scoreThreshold:i,softNmsSigma:a},d=P.runKernel(Vn,l,u);return{selectedIndices:d[0],selectedScores:d[1]}}var zg,Bg=o((()=>{F(),A(),L(),vg(),z(),zg=R({nonMaxSuppressionWithScore_:Rg})}));async function Vg(e,t,n,r=.5,i=-1/0,a=0){let o=I(e,`boxes`,`nonMaxSuppressionAsync`),s=I(t,`scores`,`nonMaxSuppressionAsync`),c=_g(o,s,n,r,i,a);n=c.maxOutputSize,r=c.iouThreshold,i=c.scoreThreshold,a=c.softNmsSigma;let l=await Promise.all([o.data(),s.data()]),u=l[0],d=l[1],{selectedIndices:f,selectedScores:p}=kg(u,d,n,r,i,a);return o!==e&&o.dispose(),s!==t&&s.dispose(),{selectedIndices:mh(f,`int32`),selectedScores:mh(p)}}var Hg,Ug=o((()=>{Pg(),L(),vg(),hh(),Hg=Vg}));function Wg(e,t,n,r=.5,i=-1/0,a=!1){let o=I(e,`boxes`,`nonMaxSuppression`),s=I(t,`scores`,`nonMaxSuppression`),c=_g(o,s,n,r,i,null),l=c.maxOutputSize,u=c.iouThreshold,d=c.scoreThreshold,f={boxes:o,scores:s},p={maxOutputSize:l,iouThreshold:u,scoreThreshold:d,padToMaxOutputSize:a},m=P.runKernel(Bn,f,p);return{selectedIndices:m[0],validOutputs:m[1]}}var Gg,Kg=o((()=>{F(),A(),L(),vg(),z(),Gg=R({nonMaxSuppressionPadded_:Wg})}));async function qg(e,t,n,r=.5,i=-1/0,a=!1){let o=I(e,`boxes`,`nonMaxSuppressionAsync`),s=I(t,`scores`,`nonMaxSuppressionAsync`),c=_g(o,s,n,r,i,null),l=c.maxOutputSize,u=c.iouThreshold,d=c.scoreThreshold,[f,p]=await Promise.all([o.data(),s.data()]),{selectedIndices:m,validOutputs:h}=Og(f,p,l,u,d,a);return o!==e&&o.dispose(),s!==t&&s.dispose(),{selectedIndices:mh(m,`int32`),validOutputs:Mu(h,`int32`)}}var Jg,Yg=o((()=>{Pg(),L(),vg(),Nu(),hh(),Jg=qg}));function Xg(e,t,n=!1,r=!1){let i=I(e,`images`,`resizeBilinear`);E(i.rank===3||i.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${i.rank}.`),E(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),E(r===!1||n===!1,()=>`Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.`);let a=i,o=!1;i.rank===3&&(o=!0,a=W(i,[1,i.shape[0],i.shape[1],i.shape[2]]));let[]=t,s={images:a},c={alignCorners:n,halfPixelCenters:r,size:t},l=P.runKernel(ir,s,c);return o?W(l,[l.shape[1],l.shape[2],l.shape[3]]):l}var Zg,Qg=o((()=>{F(),A(),L(),j(),z(),G(),Zg=R({resizeBilinear_:Xg})}));function $g(e,t,n=!1,r=!1){let i=I(e,`images`,`resizeNearestNeighbor`);E(i.rank===3||i.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${i.rank}.`),E(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),E(i.dtype===`float32`||i.dtype===`int32`,()=>"`images` must have `int32` or `float32` as dtype"),E(r===!1||n===!1,()=>`Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.`);let a=i,o=!1;i.rank===3&&(o=!0,a=W(i,[1,i.shape[0],i.shape[1],i.shape[2]]));let[]=t,s={images:a},c={alignCorners:n,halfPixelCenters:r,size:t},l=P.runKernel(nr,s,c);return o?W(l,[l.shape[1],l.shape[2],l.shape[3]]):l}var e_,t_=o((()=>{F(),A(),L(),j(),z(),G(),e_=R({resizeNearestNeighbor_:$g})}));function n_(e,t=`binary`,n=!1,r=.5){let i=I(e,`image`,`threshold`),a=i.shape[0]*i.shape[1],o=U(mh([r]),255),s,c,l,u;if(E(i.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${i.rank}.`),E(i.shape[2]===3||i.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${i.shape[2]}.`),E(i.dtype===`int32`||i.dtype===`float32`,()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${i.dtype}.`),E(t===`otsu`||t===`binary`,()=>`Method must be binary or otsu, but was ${t}`),i.shape[2]===3){[s,c,l]=Gm(i,[1,1,1],-1);let e=U(s,.2989),t=U(c,.587),n=U(l,.114);u=H(H(e,t),n)}else u=e;return t===`otsu`&&(o=r_(Hc(V(em(u),`int32`),Ha([]),256),a)),V(U(n?Ed(u,o):id(u,o),255),`int32`)}function r_(e,t){let n=mh([-1]),r=mh([0]),i=mh([0]),a,o,s,c,l,u;for(let d=0;d<e.size-1;d++){a=Ec(e,0,d+1),o=Ec(e,d+1),l=rs(Ru(a),t),u=rs(Ru(o),t),s=rs(Ru(U(a,Ip(0,a.size))),Ru(a));let f=Xc(o.shape,a.size),p=H(Ip(0,o.size),f);c=rs(Ru(U(o,p)),Ru(o));let m=Xd(s,c),h=Xd(s,c);i=U(U(U(l,u),m),h);let g=id(i,r);r=iu(g,i,r),n=iu(g,mh([d]),n)}return n}var i_,a_=o((()=>{hh(),z(),Xo(),Km(),Uc(),Dd(),ad(),zu(),$o(),os(),is(),Zd(),tm(),au(),Zc(),Dc(),Lp(),Ua(),j(),L(),i_=R({threshold_:n_})}));function o_(e,t,n=`nearest`,r=`constant`,i=0,a){let o=I(e,`image`,`transform`,`float32`),s=I(t,`transforms`,`transform`,`float32`);E(o.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${o.rank}.`),E(s.rank===2&&(s.shape[0]===o.shape[0]||s.shape[0]===1)&&s.shape[1]===8,()=>`Error in transform: Input transform should be batch x 8 or 1 x 8`),E(a==null||a.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${a}.`);let c={image:o,transforms:s},l={interpolation:n,fillMode:r,fillValue:i,outputShape:a};return P.runKernel(zr,c,l)}var s_,c_=o((()=>{F(),A(),L(),j(),z(),s_=R({transform_:o_})}));function l_(e,t,n){let r=I(e,`a`,`bandPart`);E(r.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${r.rank}.`);let i=r.shape,[a,o]=r.shape.slice(-2),s,c;typeof t==`number`?(E(t%1==0,()=>`bandPart(): numLower must be an integer, got ${t}.`),E(t<=a,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${a}).`),s=I(t<0?a:t,`numLower`,`bandPart`)):(E(t.dtype===`int32`,()=>`bandPart(): numLower's dtype must be an int32.`),s=iu(Cd(t,0),a,Ff(t,a))),typeof n==`number`?(E(n%1==0,()=>`bandPart(): numUpper must be an integer, got ${n}.`),E(n<=o,()=>`bandPart(): numUpper (${n}) must not be greater than the number of columns (${o}).`),c=I(n<0?o:n,`numUpper`,`bandPart`)):(E(n.dtype===`int32`,()=>`bandPart(): numUpper's dtype must be an int32.`),c=iu(Cd(n,0),o,Ff(n,o)));let l=Xd(W(Ip(0,a,1,`int32`),[-1,1]),Ip(0,o,1,`int32`)),u=of(Ed(l,s),od(l,Vd(c))),d=Af([a,o],r.dtype);return W(rh(Nh(W(r,[-1,a,o])).map(e=>iu(u,e,d))),i)}var u_,d_=o((()=>{L(),j(),sd(),wd(),Dd(),sf(),If(),Hd(),z(),Lp(),G(),ih(),Zd(),Ph(),au(),jf(),u_=R({bandPart_:l_})}));function f_(e){let t;if(Array.isArray(e)){t=!1,E(e!=null&&e.length>0,()=>`Gram-Schmidt process: input must not be null, undefined, or empty`);let n=e[0].shape[0];for(let t=1;t<e.length;++t)E(e[t].shape[0]===n,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[t].shape[0]} vs. ${n})`)}else t=!0,e=Gm(e,e.shape[0],0).map(e=>eh(e,[0]));E(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);let n=[],r=e;for(let t=0;t<e.length;++t)n.push(P.tidy(()=>{let e=r[t];if(t>0)for(let r=0;r<t;++r){let t=U(Ru(U(n[r],e)),n[r]);e=Xd(e,t)}return rs(e,Vu(e,`euclidean`))}));return t?rh(n,0):n}var p_,m_=o((()=>{F(),j(),is(),os(),Hu(),z(),Km(),th(),ih(),Zd(),zu(),p_=R({gramSchmidt_:f_})}));function h_(e,t=!1){if(E(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),e.rank===2)return g_(e,t);{let n=Nh(W(e,[e.shape.slice(0,e.shape.length-2).reduce((e,t)=>e*t),e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),r=[],i=[];return n.forEach(e=>{let[n,a]=g_(e,t);r.push(n),i.push(a)}),[W(rh(r,0),e.shape),W(rh(i,0),e.shape)]}}function g_(e,t=!1){return P.tidy(()=>{E(e.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);let n=e.shape[0],r=e.shape[1],i=Qu(n),a=Zo(e),o=gh([[1]],[1,1]),s=Zo(o),c=n>=r?r:n;for(let e=0;e<c;++e){let t=a,c=s,l=i;[s,a,i]=P.tidy(()=>{let t=Ec(a,[e,e],[n-e,1]),c=Vu(t),l=Ec(a,[e,e],[1,1]),u=iu(id(l,0),gh([[-1]]),gh([[1]])),d=Xd(l,U(u,c)),f=rs(t,d);s=f.shape[0]===1?Zo(o):_c([o,Ec(f,[1,0],[f.shape[0]-1,f.shape[1]])],0);let p=Vd(rs(bc(u,d),c)),m=Ec(a,[e,0],[n-e,r]),h=U(p,s),g=Lh(s);if(e===0)a=Xd(m,bc(h,bc(g,m)));else{let t=Xd(m,bc(h,bc(g,m)));a=_c([Ec(a,[0,0],[e,r]),t],0)}let _=Lh(h),v=Ec(i,[0,e],[n,i.shape[1]-e]);if(e===0)i=Xd(v,bc(bc(v,s),_));else{let t=Xd(v,bc(bc(v,s),_));i=_c([Ec(i,[0,0],[n,e]),t],1)}return[s,a,i]}),Ya([t,c,l])}return!t&&n>r&&(i=Ec(i,[0,0],[n,r]),a=Ec(a,[0,0],[r,r])),[i,a]})}var __,v_=o((()=>{F(),$a(),j(),Qo(),vc(),is(),$u(),ad(),xc(),os(),Hd(),Hu(),z(),G(),Dc(),ih(),Zd(),_h(),Rh(),Ph(),au(),__=R({qr_:h_})})),y_,b_,x_=o((()=>{ls(),fs(),hs(),$o(),F(),A(),L(),j(),z(),vs(),xs(),ws(),Ds(),As(),Ns(),Is(),zs(),Hs(),fc(),hc(),vc(),xc(),os(),wc(),Dc(),Ac(),Mc(),Pc(),jee(),Lc(),Bc(),Uc(),Kc(),Yo(),Xo(),Yc(),el(),Qo(),za(),rl(),ol(),ll(),fl(),vl(),hl(),wl(),Dl(),Pee(),Pl(),Il(),Rl(),Vl(),Ree(),Wl(),ql(),Xl(),is(),lu(),du(),pu(),hu(),nu(),qee(),Wu(),Ku(),Ju(),ate(),$u(),Zc(),td(),ts(),rd(),ad(),sd(),ld(),fd(),hd(),vd(),xd(),wd(),Dd(),Ad(),Nd(),Id(),Jd(),ef(),rf(),sf(),uf(),pf(),gf(),_f(),Du(),bf(),Cf(),Ef(),kf(),Nf(),G(),N(),ku(),If(),zf(),Hf(),Gf(),Hd(),Jf(),Zf(),ep(),rp(),dp(),ju(),mp(),_p(),kp(),Mp(),Fp(),Lp(),Bp(),Up(),Kp(),Yp(),Qp(),tm(),im(),Nu(),sm(),um(),pm(),gm(),ym(),Sm(),Tm(),Om(),jm(),Pm(),Gd(),op(),Lm(),Bm(),Um(),Ym(),Km(),Fu(),Lu(),Qm(),th(),ih(),sh(),uh(),Zd(),zu(),ph(),Ua(),hh(),_h(),Va(),xh(),Zu(),wh(),Dh(),Ah(),Mh(),Ph(),gte(),au(),Ih(),jf(),su(),_te(),Rh(),Hu(),yte(),bte(),_f(),xte(),Ste(),Ete(),Dte(),Ote(),tg(),ig(),sg(),ug(),pg(),gg(),xg(),Lg(),Bg(),Ug(),Kg(),Yg(),Qg(),t_(),a_(),c_(),d_(),m_(),v_(),y_={flipLeftRight:og,grayscaleToRGB:lg,resizeNearestNeighbor:e_,resizeBilinear:Zg,rgbToGrayscale:fg,rotateWithOffset:hg,cropAndResize:rg,nonMaxSuppression:bg,nonMaxSuppressionAsync:Ig,nonMaxSuppressionWithScore:zg,nonMaxSuppressionWithScoreAsync:Hg,nonMaxSuppressionPadded:Gg,nonMaxSuppressionPaddedAsync:Jg,threshold:i_,transform:s_},b_={bandPart:u_,gramSchmidt:p_,qr:__}}));function K(e,t,n){E(e.className!=null,()=>`Class being registered does not have the static className property defined.`),E(typeof e.className==`string`,()=>`className is required to be a string, but got type `+typeof e.className),E(e.className.length>0,()=>`Class being registered has an empty-string as its className, which is disallowed.`),t===void 0&&(t=`Custom`),n===void 0&&(n=e.className);let r=n,i=t+`>`+r;return T_.register(e),S_.set(i,e),C_.set(e,i),e}var S_,C_,w_,T_,E_=o((()=>{j(),S_=new Map,C_=new Map,w_=class{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}},T_=class e{constructor(){this.classNameMap={}}static getMap(){return e.instance??=new e,e.instance}static register(t){e.getMap().classNameMap[t.className]=[t,t.fromConfig]}}})),D_,O_=o((()=>{$a(),zd(),x_(),E_(),D_=class extends w_{minimize(e,t=!1,n){let{value:r,grads:i}=this.computeGradients(e,n);if(n!=null){let e=n.map(e=>({name:e.name,tensor:i[e.name]}));this.applyGradients(e)}else this.applyGradients(i);return Ya(i),t?r:(r.dispose(),null)}get iterations(){return this.iterations_??=0,this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return Ld(e,t)}dispose(){this.iterations_!=null&&Ya(this.iterations_)}async saveIterations(){return this.iterations_??=0,{name:`iter`,tensor:Mu(this.iterations_,`int32`)}}async getWeights(){throw Error(`getWeights() is not implemented for this optimizer yet.`)}async setWeights(e){throw Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}},Object.defineProperty(D_,Symbol.hasInstance,{value:e=>e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null})})),k_,A_=o((()=>{F(),$a(),$o(),is(),os(),x_(),Lu(),su(),O_(),k_=class extends D_{static get className(){return`Adadelta`}constructor(e,t,n=null){super(),this.learningRate=e,this.rho=t,this.epsilon=n,this.accumulatedGrads=[],this.accumulatedUpdates=[],n??(this.epsilon=P.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=P.registeredVariables[t];this.accumulatedGrads[n]??(this.accumulatedGrads[n]={originalName:`${t}/accum_grad`,variable:B(()=>ou(r).variable(!1))}),this.accumulatedUpdates[n]??(this.accumulatedUpdates[n]={originalName:`${t}/accum_var`,variable:B(()=>ou(r).variable(!1))});let i=Array.isArray(e)?e[n].tensor:e[t];if(i==null)return;let a=this.accumulatedGrads[n].variable,o=this.accumulatedUpdates[n].variable;B(()=>{let e=H(U(a,this.rho),U(Iu(i),1-this.rho)),t=U(rs(Pu(H(o,this.epsilon)),Pu(H(a,this.epsilon))),i),n=H(U(o,this.rho),U(Iu(t),1-this.rho));a.assign(e),o.assign(n);let s=H(U(t,-this.learningRate),r);r.assign(s)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(Ya(this.accumulatedGrads.map(e=>e.variable)),Ya(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){let e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);let t=e.length/2;this.accumulatedGrads=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedUpdates=e.slice(t,t*2).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}}})),j_,M_=o((()=>{F(),$a(),$o(),is(),Zc(),os(),Fu(),Lu(),O_(),j_=class extends D_{static get className(){return`Adagrad`}constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=P.registeredVariables[t];this.accumulatedGrads[n]??(this.accumulatedGrads[n]={originalName:`${t}/accumulator`,variable:B(()=>Xc(r.shape,this.initialAccumulatorValue).variable(!1))});let i=Array.isArray(e)?e[n].tensor:e[t];if(i==null)return;let a=this.accumulatedGrads[n].variable;B(()=>{let e=H(a,Iu(i));a.assign(e);let t=H(U(rs(i,Pu(H(e,P.backend.epsilon()))),-this.learningRate),r);r.assign(t)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&Ya(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),this.accumulatedGrads=e.map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}}})),N_,P_=o((()=>{F(),$a(),$o(),is(),os(),ju(),Nu(),Fu(),Lu(),Zd(),su(),O_(),N_=class extends D_{static get className(){return`Adam`}constructor(e,t,n,r=null){super(),this.learningRate=e,this.beta1=t,this.beta2=n,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],B(()=>{this.accBeta1=Mu(t).variable(),this.accBeta2=Mu(n).variable()}),r??(this.epsilon=P.backend.epsilon())}applyGradients(e){let t=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);B(()=>{let n=Xd(1,this.accBeta1),r=Xd(1,this.accBeta2);t.forEach((t,i)=>{let a=P.registeredVariables[t];this.accumulatedFirstMoment[i]??(this.accumulatedFirstMoment[i]={originalName:`${t}/m`,variable:B(()=>ou(a).variable(!1))}),this.accumulatedSecondMoment[i]??(this.accumulatedSecondMoment[i]={originalName:`${t}/v`,variable:B(()=>ou(a).variable(!1))});let o=Array.isArray(e)?e[i].tensor:e[t];if(o==null)return;let s=this.accumulatedFirstMoment[i].variable,c=this.accumulatedSecondMoment[i].variable,l=H(U(s,this.beta1),U(o,1-this.beta1)),u=H(U(c,this.beta2),U(Iu(o),1-this.beta2)),d=rs(l,n),f=rs(u,r);s.assign(l),c.assign(u);let p=H(U(rs(d,H(Pu(f),this.epsilon)),-this.learningRate),a);a.assign(p)}),this.accBeta1.assign(U(this.accBeta1,this.beta1)),this.accBeta2.assign(U(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&Ya(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedSecondMoment!=null&&Ya(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){let e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),B(()=>{this.accBeta1.assign(Au(this.beta1,this.iterations_+1)),this.accBeta2.assign(Au(this.beta2,this.iterations_+1))});let t=e.length/2;this.accumulatedFirstMoment=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedSecondMoment=e.slice(t,t*2).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}}})),F_,I_=o((()=>{F(),$a(),ls(),$o(),is(),Ef(),os(),Nu(),Zd(),su(),O_(),F_=class extends D_{static get className(){return`Adamax`}constructor(e,t,n,r=null,i=0){super(),this.learningRate=e,this.beta1=t,this.beta2=n,this.epsilon=r,this.decay=i,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],B(()=>{this.iteration=Mu(0).variable(),this.accBeta1=Mu(t).variable()}),r??(this.epsilon=P.backend.epsilon())}applyGradients(e){let t=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);B(()=>{let n=Xd(1,this.accBeta1),r=rs(-this.learningRate,H(U(this.iteration,this.decay),1));t.forEach((t,i)=>{let a=P.registeredVariables[t];this.accumulatedFirstMoment[i]??(this.accumulatedFirstMoment[i]={originalName:`${t}/m`,variable:ou(a).variable(!1)}),this.accumulatedWeightedInfNorm[i]??(this.accumulatedWeightedInfNorm[i]={originalName:`${t}/v`,variable:ou(a).variable(!1)});let o=Array.isArray(e)?e[i].tensor:e[t];if(o==null)return;let s=this.accumulatedFirstMoment[i].variable,c=this.accumulatedWeightedInfNorm[i].variable,l=H(U(s,this.beta1),U(o,1-this.beta1)),u=Tf(U(c,this.beta2),cs(o));s.assign(l),c.assign(u);let d=H(U(rs(r,n),rs(l,H(u,this.epsilon))),a);a.assign(d)}),this.iteration.assign(H(this.iteration,1)),this.accBeta1.assign(U(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&Ya(this.accumulatedFirstMoment.map(e=>e.variable)),this.accumulatedWeightedInfNorm!=null&&Ya(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw Error(`getWeights() is not implemented for Adamax yet.`)}async setWeights(e){throw Error(`setWeights() is not implemented for Adamax yet.`)}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}}})),L_,R_=o((()=>{F(),$a(),$o(),os(),Nu(),O_(),L_=class extends D_{static get className(){return`SGD`}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=Array.isArray(e)?e[n].tensor:e[t];if(r==null)return;let i=P.registeredVariables[t];B(()=>{let e=H(U(this.c,r),i);i.assign(e)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,this.c!=null&&this.c.dispose(),this.c=Xa(Mu(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(e=await this.extractIterations(e),e.length!==0)throw Error(`SGD optimizer does not have settable weights.`)}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}}})),z_,B_=o((()=>{F(),$a(),$o(),os(),Nu(),su(),R_(),z_=class extends L_{static get className(){return`Momentum`}constructor(e,t,n=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=n,this.accumulations=[],this.m=Mu(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=P.registeredVariables[t];this.accumulations[n]??(this.accumulations[n]={originalName:`${t}/momentum`,variable:B(()=>ou(r).variable(!1))});let i=this.accumulations[n].variable,a=Array.isArray(e)?e[n].tensor:e[t];a!=null&&B(()=>{let e,t=H(U(this.m,i),a);e=this.useNesterov?H(U(this.c,H(a,U(t,this.m))),r):H(U(this.c,t),r),i.assign(t),r.assign(e)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&Ya(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),this.accumulations=e.map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}}})),V_,H_=o((()=>{F(),$a(),$o(),is(),os(),Fu(),Lu(),Zd(),su(),O_(),V_=class extends D_{static get className(){return`RMSProp`}constructor(e,t=.9,n=0,r=null,i=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=n,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=i,r??(this.epsilon=P.backend.epsilon()),e==null)throw Error(`learningRate for RMSPropOptimizer must be defined.`)}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=P.registeredVariables[t];this.accumulatedMeanSquares[n]??(this.accumulatedMeanSquares[n]={originalName:`${t}/rms`,variable:B(()=>ou(r).variable(!1))}),this.accumulatedMoments[n]??(this.accumulatedMoments[n]={originalName:`${t}/momentum`,variable:B(()=>ou(r).variable(!1))}),this.accumulatedMeanGrads[n]==null&&this.centered&&(this.accumulatedMeanGrads[n]={originalName:`${t}/mg`,variable:B(()=>ou(r).variable(!1))});let i=Array.isArray(e)?e[n].tensor:e[t];if(i==null)return;let a=this.accumulatedMeanSquares[n].variable,o=this.accumulatedMoments[n].variable;B(()=>{let e=H(U(a,this.decay),U(Iu(i),1-this.decay));if(this.centered){let t=this.accumulatedMeanGrads[n].variable,s=H(U(t,this.decay),U(i,1-this.decay)),c=rs(U(i,this.learningRate),Pu(Xd(e,H(Iu(s),this.epsilon)))),l=H(U(o,this.momentum),c);a.assign(e),t.assign(s),o.assign(l);let u=Xd(r,l);r.assign(u)}else{let e=H(U(a,this.decay),U(Iu(i),1-this.decay)),t=H(U(o,this.momentum),rs(U(i,this.learningRate),Pu(H(e,this.epsilon))));a.assign(e),o.assign(t);let n=Xd(r,t);r.assign(n)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&Ya(this.accumulatedMeanSquares.map(e=>e.variable)),this.accumulatedMeanGrads!=null&&this.centered&&Ya(this.accumulatedMeanGrads.map(e=>e.variable)),this.accumulatedMoments!=null&&Ya(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){let e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);let t=this.centered?e.length/3:e.length/2;this.accumulatedMeanSquares=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedMoments=e.slice(t,t*2).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.centered&&(this.accumulatedMeanGrads=e.slice(t*2,t*3).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}}}));function U_(){for(let e of W_)K(e)}var W_,G_=o((()=>{A_(),M_(),P_(),I_(),B_(),H_(),R_(),E_(),W_=[k_,j_,N_,F_,z_,V_,L_]}));function K_(e){return new Promise(e=>setTimeout(e)).then(e)}function q_(e=`model`){return new Z_(e)}var J_,Y_,X_,Z_,Q_,$_=o((()=>{ja(),Ze(),uo(),mo(),Ka(),J_=`model`,Y_=`.json`,X_=`.weights.bin`,Z_=class e{constructor(t){if(!k().getBool(`IS_BROWSER`))throw Error(`browserDownloads() cannot proceed because the current environment is not a browser.`);t.startsWith(e.URL_SCHEME)&&(t=t.slice(e.URL_SCHEME.length)),(t==null||t.length===0)&&(t=J_),this.modelJsonFileName=t+Y_,this.weightDataFileName=t+X_}async save(e){if(typeof document>`u`)throw Error("Browser downloads are not supported in this environment since `document` is not present");let t=Ga.join(e.weightData),n=window.URL.createObjectURL(new Blob([t],{type:`application/octet-stream`}));if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserDownloads.save() does not support saving model topology in binary formats yet.`);{let t=ao(e,[{paths:[`./`+this.weightDataFileName],weights:e.weightSpecs}]),r=window.URL.createObjectURL(new Blob([JSON.stringify(t)],{type:`application/json`})),i=this.modelJsonAnchor==null?document.createElement(`a`):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=r,await K_(()=>i.dispatchEvent(new MouseEvent(`click`))),e.weightData!=null){let e=this.weightDataAnchor==null?document.createElement(`a`):this.weightDataAnchor;e.download=this.weightDataFileName,e.href=n,await K_(()=>e.dispatchEvent(new MouseEvent(`click`)))}return{modelArtifactsInfo:oo(e)}}}},Z_.URL_SCHEME=`downloads://`,Q_=e=>k().getBool(`IS_BROWSER`)&&!Array.isArray(e)&&e.startsWith(Z_.URL_SCHEME)?q_(e.slice(Z_.URL_SCHEME.length)):null,fo.registerSaveRouter(Q_)}));function ev(e,t,n,r){o(e),n??=0,r??=1,s(n,r);let i=0,a=a=>(a.then(a=>(t(n+ ++i/e.length*(r-n)),a)),a);function o(e){E(e!=null&&Array.isArray(e)&&e.length>0,()=>`promises must be a none empty array`)}function s(e,t){E(e>=0&&e<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${e}`),E(t>=0&&t<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${t}`),E(t>=e,()=>`startFraction must be no more than endFraction, but got startFraction ${e} and endFraction ${t}`)}return Promise.all(e.map(a))}var tv=o((()=>{j()}));async function nv(e,t){t??={};let n=t.fetchFunc==null?k().platform.fetch:t.fetchFunc,r=e.map(e=>n(e,t.requestInit,{isBinary:!0})),i=(t.onProgress==null?await Promise.all(r):await ev(r,t.onProgress,0,.5)).map(e=>e.arrayBuffer());return t.onProgress==null?await Promise.all(i):await ev(i,t.onProgress,.5,1)}function rv(e,t){var n;let r=t.fetchFunc==null?k().platform.fetch:t.fetchFunc,i=0,a;return(n=t.onProgress)==null||n.call(t,0),new ReadableStream({pull:async n=>{for(var o;i<e.length;){a||=(await r(e[i],t.requestInit,{isBinary:!0})).body.getReader();let{done:s,value:c}=await a.read();if(s){i++,a=void 0,(o=t.onProgress)==null||o.call(t,i/e.length);continue}n.enqueue(c);return}n.close()}})}var iv=o((()=>{Ze(),tv()}));function av(e){let t=e.lastIndexOf(`/`),n=e.lastIndexOf(`?`),r=e.substring(0,t),i=n>t?e.substring(n):``;return[r+`/`,i]}function ov(e){return e.match(uv.URL_SCHEME_REGEX)!=null}function sv(e,t){return new uv(e,t)}var cv,lv,uv,dv,fv=o((()=>{Ze(),j(),uo(),Ka(),mo(),iv(),cv=`application/octet-stream`,lv=`application/json`,uv=class{constructor(e,t){if(this.DEFAULT_METHOD=`POST`,t??={},this.weightPathPrefix=t.weightPathPrefix,this.weightUrlConverter=t.weightUrlConverter,t.fetchFunc==null?this.fetch=k().platform.fetch:(E(typeof t.fetchFunc==`function`,()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=t.fetchFunc),E(e!=null&&e.length>0,()=>`URL path for http must not be null, undefined or empty.`),Array.isArray(e)&&E(e.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,t.requestInit!=null&&t.requestInit.body!=null)throw Error(`requestInit is expected to have no pre-existing body, but has one.`);this.requestInit=t.requestInit||{},this.loadOptions=t}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error(`BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.`);let t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;let n=ao(e,[{paths:[`./model.weights.bin`],weights:e.weightSpecs}]);if(t.body.append(`model.json`,new Blob([JSON.stringify(n)],{type:lv}),`model.json`),e.weightData!=null){let n=Ga.join(e.weightData);t.body.append(`model.weights.bin`,new Blob([n],{type:cv}),`model.weights.bin`)}let r=await this.fetch(this.path,t);if(r.ok)return{modelArtifactsInfo:oo(e),responses:[r]};throw Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${r.status}.`)}async loadModelJSON(){let e=await this.fetch(this.path,this.requestInit);if(!e.ok)throw Error(`Request to ${this.path} failed with status code ${e.status}. Please verify this URL points to the model JSON of the model to load.`);let t;try{t=await e.json()}catch{let e=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(`.pb`)?e+=` Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.`:e+=` Please make sure the server is serving valid JSON for this request.`,Error(e)}let n=t.modelTopology,r=t.weightsManifest;if(n==null&&r==null)throw Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return t}async load(){return this.loadOptions.streamWeights?this.loadStream():pee(await this.loadModelJSON(),e=>this.loadWeights(e))}async loadStream(){let e=await this.loadModelJSON(),t=await this.getWeightUrls(e.weightsManifest),n=so(e.weightsManifest);return Object.assign(Object.assign({},e),{weightSpecs:n,getWeightStream:()=>rv(t,this.loadOptions)})}async getWeightUrls(e){let[t,n]=av(Array.isArray(this.path)?this.path[1]:this.path),r=this.weightPathPrefix||t,i=[],a=[];for(let t of e)for(let e of t.paths)this.weightUrlConverter==null?i.push(r+e+n):a.push(this.weightUrlConverter(e));return this.weightUrlConverter&&i.push(...await Promise.all(a)),i}async loadWeights(e){let t=await this.getWeightUrls(e);return[so(e),await nv(t,this.loadOptions)]}},uv.URL_SCHEME_REGEX=/^https?:\/\//,dv=(e,t)=>{if(typeof fetch>`u`&&(t==null||t.fetchFunc==null))return null;{let n=!0;if(n=Array.isArray(e)?e.every(e=>ov(e)):ov(e),n)return sv(e,t)}return null},fo.registerSaveRouter(dv),fo.registerLoadRouter(dv)})),pv=o((()=>{Eo(),zo(),$_(),fv(),uo(),mo(),Ho()}));function mv(e,t){let n=e.shape.length,r=t.shape.length;if(n<1)throw Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(r<1)throw Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${r}.`);if(t.dtype!==`int32`)throw Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[r-1]>n)throw Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[r-1]} vs. ${n}`);if(D(e.shape)===0)throw Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);let i=t.shape,a=i[i.length-1],o=1;for(let e=0;e<i.length-1;++e)o*=i[e];let s=e.shape,c=i.slice();c.pop();let l=1;for(let e=a;e<n;++e)l*=s[e],c.push(s[e]);let u=[...O(e.shape).map(e=>e/l),1].slice(0,a);return[c,o,l,u]}var hv=o((()=>{j()})),gv=c({assertParamsValid:()=>_v,computeFlatOffset:()=>Av,computeOutShape:()=>yv,getNormalizedAxes:()=>Cv,isSliceContinous:()=>kv,maskToAxes:()=>vv,parseSliceParams:()=>jv,sliceInfo:()=>Mv,startForAxis:()=>Dv,startIndicesWithElidedDims:()=>wv,stopForAxis:()=>Ov,stopIndicesWithElidedDims:()=>Tv,stridesForAxis:()=>Ev,stridesWithElidedDims:()=>bv});function _v(e,t,n){let r=e.shape.length;E(r===t.length,()=>`Error in slice${r}D: Length of begin ${t} must match the rank of the array (${r}).`),E(r===n.length,()=>`Error in slice${r}D: Length of size ${n} must match the rank of the array (${r}).`);for(let i=0;i<r;++i)E(t[i]+n[i]<=e.shape[i],()=>`Error in slice${r}D: begin[${i}] + size[${i}] (${t[i]+n[i]}) would overflow input.shape[${i}] (${e.shape[i]})`)}function vv(e){let t=[],n=0;for(;e>0;)e&1&&t.push(n),e/=2,n++;return t}function yv(e,t,n){let r=[];for(let i=0;i<e.length;i++)r[i]=Math.ceil((t[i]-e[i])/n[i]);return r}function bv(e,t,n,r){let i=[...e];for(let e=i.length;e<r.length;e++)i.push(1);for(let e=0;e<n;e++)e===0?i[t]=1:(i.splice(t,0,1),i.pop());return i}function xv(e,t,n){return n<=e?n:n-(t-1)}function Sv(e,t){let n=[];for(let r=0;r<e;r++)n.push(t+r);return n}function Cv(e,t,n,r,i,a,o,s,c){let l=e.length,u=Array(l),d=Array(l),f=Array(l);if(t.length&&n>0){let c=t[0],l=n+1;u=wv(o,c,l,r,e),d=Tv(s,c,l,i,e),f=bv(a,c,l,e)}else for(let t=0;t<l;t++)u[t]=Dv(o,r,a,e,t,c),d[t]=Ov(s,i,a,e,t,c),f[t]=Ev(a,t,c);return{begin:u,end:d,strides:f}}function wv(e,t,n,r,i){let a=[...i],o=Sv(n,t);for(let i=0;i<a.length;i++)if(o.indexOf(i)>-1)a[i]=0;else{let o=xv(t,n,i),s=r[o];e&1<<o&&(s=0),a[i]=s}return a}function Tv(e,t,n,r,i){let a=[...i],o=Sv(n,t);for(let i=0;i<a.length;i++)if(o.indexOf(i)>-1)a[i]=2**53-1;else{let o=xv(t,n,i),s=r[o];e&1<<o&&(s=2**53-1),a[i]=s}for(let e=0;e<a.length;e++){let t=i[e];a[e]<0&&(a[e]+=t),a[e]=ue(0,a[e],i[e])}return a}function Ev(e,t,n){let r=e[t];return(n&1<<t||r==null)&&(r=1),r}function Dv(e,t,n,r,i,a){let o=t[i],s=n[i]||1;(e&1<<i||a&1<<i||o==null)&&(o=s>0?-(2**53-1):2**53-1);let c=r[i];return o<0&&(o+=c),o=ue(0,o,c-1),o}function Ov(e,t,n,r,i,a){let o=t[i],s=n[i]||1;(e&1<<i||a&1<<i||o==null)&&(o=s>0?2**53-1:-(2**53-1));let c=r[i];return o<0&&(o+=c),o=s>0?ue(0,o,c):ue(-1,o,c-1),o}function kv(e,t,n){let r=n.length;for(let e=0;e<n.length;e++)if(n[e]>1){r=e;break}for(let i=r+1;i<n.length;i++)if(t[i]>0||n[i]!==e[i])return!1;return!0}function Av(e,t){let n=e.length>0?e[e.length-1]:1;for(let r=0;r<e.length-1;r++)n+=e[r]*t[r];return n}function jv(e,t,n){let r,i=e.shape.length;r=typeof t==`number`?[t,...Array(i-1).fill(0)]:t.length<i?t.concat(Array(i-t.length).fill(0)):t.slice(),r.forEach(e=>{E(e!==-1,()=>`slice() does not support negative begin indexing.`)});let a;return a=n==null?Array(i).fill(-1):typeof n==`number`?[n,...Array(i-1).fill(-1)]:n.length<i?n.concat(Array(i-n.length).fill(-1)):n,a=a.map((t,n)=>t>=0?t:(E(t===-1,()=>`Negative size values should be exactly -1 but got ${t} for the slice() size at index ${n}.`),e.shape[n]-r[n])),[r,a]}function Mv(e,t,n,r,i,a,o,s,c){let l;if(r==null?(l=Array(t.length),l.fill(1)):l=r,o!=null&&o&o-1)throw Error(`Multiple ellipses in slice is not allowed.`);let u=!1,d={dims:l.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:n.slice(),strides:l.slice(),beginMask:i,endMask:a,ellipsisMask:o,newAxisMask:s,shrinkAxisMask:c};for(let e=0;e<d.dims;e++)u&&1<<e&s&&d.numAddAxisAfterEllipsis++,1<<e&o&&(u=!0);u||(d.ellipsisMask|=1<<d.dims,d.dims++);let f={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};Nv(d,f);let p=!0,m=!0,h=!0,g=[],_=[];for(let t=0;t<e.length;++t){if(f.strides[t]===0)throw Error(`strides[${t}] must be non-zero`);let n=!!(f.shrinkAxisMask&1<<t),r=e[t];if(r===-1){g.push(n?1:-1);continue}let i=[f.beginMask&1<<t,f.endMask&1<<t],a=[f.strides[t]>0?0:-1,f.strides[t]>0?r:r-1];if(n&&f.strides[t]<=0)throw Error(`only stride 1 allowed on non-range indexing.`);h&&=f.strides[t]===1;let o=!!(f.beginMask&1<<t&&f.endMask&1<<t);if(f.beginValid&&f.endValid){if(n){let e=f.begin[t]<0?r+f.begin[t]:f.begin[t];if(f.begin[t]=e,f.end[t]=f.begin[t]+1,e<0||e>=r)throw Error(`slice index ${f.begin[t]} of dimension ${t} out of bounds.`)}else f.begin[t]=Pv(f.begin[t],0,f.strides[t],r,i,a),f.end[t]=Pv(f.end[t],1,f.strides[t],r,i,a);let e=f.strides[t]===1&&f.begin[t]===0&&f.end[t]===r;p&&=e,m&&=t===0&&f.strides[t]===1||e}else p=p&&f.strides[t]===1&&o,m&&=t===0&&f.strides[t]===1||o;let s,c=!1;if(f.beginValid&&f.endValid?(s=f.end[t]-f.begin[t],c=!0):n?(s=1,c=!0):o&&r>=0&&(s=f.strides[t]<0?-r:r,c=!0),c){let e;e=s===0||s<0!=f.strides[t]<0?0:Math.trunc(s/f.strides[t])+(s%f.strides[t]===0?0:1),g.push(e)}else g.push(-1)}for(let e=0;e<f.finalShapeGatherIndices.length;++e){let t=f.finalShapeGatherIndices[e];t>=0?_.push(g[t]):t===Fv&&_.push(1)}return{finalShapeSparse:_.filter((e,t)=>f.finalShapeGatherIndices[t]!==Fv),finalShape:_,isIdentity:p,sliceDim0:m,isSimpleSlice:h,begin:f.begin,end:f.end,strides:f.strides}}function Nv(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let n=0;t.beginValid=e.begin!=null,t.endValid=e.end!=null,t.begin=Array(t.dims),t.end=Array(t.dims),t.strides=Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=Array(t.dims);for(let r=0;r<e.dims;r++)if(1<<r&e.ellipsisMask){let i=Math.min(t.dims-(e.dims-r)+1+e.numAddAxisAfterEllipsis,t.dims);for(;n<i;n++)t.begin[n]=0,t.end[n]=0,t.strides[n]=1,t.beginMask|=1<<n,t.endMask|=1<<n,t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[n]=r}else if(1<<r&e.newAxisMask)t.finalShapeGatherIndices.push(Fv),t.finalShapeGatherIndicesSparse.push(-1);else{if(n===t.begin.length)throw Error(`Index out of range using input dim ${n}; input has only ${t.dims} dims, ${t.begin.length}.`);e.begin!=null&&(t.begin[n]=e.begin[r]),e.end!=null&&(t.end[n]=e.end[r]),t.strides[n]=e.strides[r],e.beginMask&1<<r&&(t.beginMask|=1<<n),e.endMask&1<<r&&(t.endMask|=1<<n),e.shrinkAxisMask&1<<r?(t.finalShapeGatherIndices.push(Iv),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<n):(t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(r)),t.inputShapeGatherIndicesSparse[n]=r,n++}}function Pv(e,t,n,r,i,a){if(i[t])return n>0?a[t]:a[t+1&1];{let t=e<0?r+e:e;return t<a[0]?a[0]:t>a[1]?a[1]:t}}var Fv,Iv,Lv=o((()=>{j(),Fv=-2,Iv=-1})),Rv,zv=o((()=>{Rv=`4.22.0`})),Bv,Vv=o((()=>{A_(),M_(),P_(),I_(),B_(),H_(),R_(),Bv=class{static sgd(e){return new L_(e)}static momentum(e,t,n=!1){return new z_(e,t,n)}static rmsprop(e,t=.9,n=0,r=null,i=!1){return new V_(e,t,n,r,i)}static adam(e=.001,t=.9,n=.999,r=null){return new N_(e,t,n,r)}static adadelta(e=.001,t=.95,n=null){return new k_(e,t,n)}static adamax(e=.002,t=.9,n=.999,r=null,i=0){return new F_(e,t,n,r,i)}static adagrad(e,t=.1){return new j_(e,t)}}})),Hv,Uv=o((()=>{Vv(),Hv=Bv}));function Wv(){return new Promise(e=>Gv(()=>e()))}var Gv,Pte=o((()=>{Gv=typeof requestAnimationFrame<`u`?requestAnimationFrame:typeof setImmediate<`u`?setImmediate:e=>e()}));function Kv(e,t){let n=e[0].length;e.forEach((e,t)=>{E(e.length===n,()=>`Error in concat${n}D: rank of tensors[${t}] must be the same as the rank of the rest (${n})`)}),E(t>=0&&t<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);let r=e[0];e.forEach((e,i)=>{for(let a=0;a<n;a++)E(a===t||e[a]===r[a],()=>`Error in concat${n}D: Shape of tensors[${i}] (${e}) does not match the shape of the rest (${r}) along the non-concatenated axis ${i}.`)})}function qv(e,t){let n=e[0].slice();for(let r=1;r<e.length;r++)n[t]+=e[r][t];return n}var Fte=o((()=>{j()})),Ite=o((()=>{}));function Jv(e,t,n){let r=[];if(n==null&&t==null)return r;if(t==null)for(;r.length<e+n.length;)r.push(-1);else r=t.slice();if(n==null)return r;if(e+n.length!==r.length)throw Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${e+n.length}, but shape.rank = ${r.length}`);for(let i=1;i<n.length;++i){let a=n[i],o=r[r.length-n.length+i],s=r[o];if(a>=0)if(s>=0){if(s!==a)throw Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${i+e}] = ${a} but shape[${i+e}] = ${s}`)}else r[o]=a}return r}function Yv(e){let t={FIRST_DIM_SIZE:Qv.FIRST_DIM_SIZE,VALUE_ROWIDS:Qv.VALUE_ROWIDS,ROW_LENGTHS:Qv.ROW_LENGTHS,ROW_SPLITS:Qv.ROW_SPLITS,ROW_LIMITS:Qv.ROW_LIMITS,ROW_STARTS:Qv.ROW_STARTS},n=[];for(let r of e)if(r in t)n.push(t[r]);else break;return n}function Xv(e){return e.length===0?0:e[0]===Qv.FIRST_DIM_SIZE?e.length-1:e.length}function Zv(e,t){if(e==null||t==null)return;let n=e.length,r=t.length;if(n>=r)throw Error(`defaultValue.shape=${e} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${n} must be less than ragged tensor input flatValues.rank = ${r})`);for(let i=0;i<Math.min(n,r-1);++i){let n=e[i],r=t[i+1];if(n>=0&&r>=0&&n!==1&&n!==r)throw Error(`defaultValue.shape=${e}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${i-e.length}] = ${n} but ragged tensor input.flatValues.shape[${i-e.length}] = ${r}`)}}var Qv,$v=o((()=>{(function(e){e[e.FIRST_DIM_SIZE=0]=`FIRST_DIM_SIZE`,e[e.VALUE_ROWIDS=1]=`VALUE_ROWIDS`,e[e.ROW_LENGTHS=2]=`ROW_LENGTHS`,e[e.ROW_SPLITS=3]=`ROW_SPLITS`,e[e.ROW_LIMITS=4]=`ROW_LIMITS`,e[e.ROW_STARTS=5]=`ROW_STARTS`})(Qv||={})}));function ey(e){return e<=30?e:Pe(e,Math.floor(Math.sqrt(e)))}var ty=o((()=>{j()}));function ny(e,t,n){return[n*(typeof e==`number`?e:e[0]),t*(typeof e==`number`?e:e[1])]}var Lte=o((()=>{}));function ry(e,t,n,r=!0){let i=[];if(r)i=i.concat(t.slice(0)),i.push(e[0]/n),i=i.concat(e.slice(1));else{i=i.concat(e[0]);let n=t.length;for(let r=0;r<n;++r)i=i.concat([e[r+1]/t[r],t[r]]);i=i.concat(e.slice(n+1))}return i}function iy(e,t,n=!0){let r=[];if(n){r.push(t);for(let n=t+1;n<e;++n)n<=2*t?(r.push(n),r.push(n-(t+1))):r.push(n)}else{let n=[],i=[];for(let r=1;r<e;++r)r>=t*2+1||r%2==1?i.push(r):n.push(r);r.push(...n),r.push(0),r.push(...i)}return r}function ay(e,t,n,r=!0){let i=[];r?i.push(e[0]/n):i.push(e[0]*n);for(let n=1;n<e.length;++n)n<=t.length?r?i.push(t[n-1]*e[n]):i.push(e[n]/t[n-1]):i.push(e[n]);return i}function oy(e,t){let n=[0];for(let r=0;r<t;++r)n.push(e[r][0]);return n}function sy(e,t,n){let r=e.slice(0,1);for(let i=0;i<n;++i)r.push(e[i+1]-t[i][0]-t[i][1]);return r}var Rte=o((()=>{})),cy,ly,uy=o((()=>{cy=1.7580993408473768,ly=1.0507009873554805})),dy,fy,py,my,hy,gy,_y=o((()=>{dy=.3275911,fy=.254829592,py=-.284496736,my=1.421413741,hy=-1.453152027,gy=1.061405429}));function vy(e,t){if(e.length!==t.length)throw Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);let n=new Float32Array(e.length*2);for(let r=0;r<n.length;r+=2)n[r]=e[r/2],n[r+1]=t[r/2];return n}function yy(e){let t=new Float32Array(e.length/2),n=new Float32Array(e.length/2);for(let r=0;r<e.length;r+=2)t[r/2]=e[r],n[r/2]=e[r+1];return{real:t,imag:n}}function by(e){let t=Math.ceil(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let t=0;t<e.length;t+=4)n[Math.floor(t/4)]=e[t],r[Math.floor(t/4)]=e[t+1];return{real:n,imag:r}}function xy(e){let t=Math.floor(e.length/4),n=new Float32Array(t),r=new Float32Array(t);for(let t=2;t<e.length;t+=4)n[Math.floor(t/4)]=e[t],r[Math.floor(t/4)]=e[t+1];return{real:n,imag:r}}function Sy(e,t){return{real:e[t*2],imag:e[t*2+1]}}function Cy(e,t,n,r){e[r*2]=t,e[r*2+1]=n}function wy(e,t){let n=new Float32Array(e/2),r=new Float32Array(e/2);for(let i=0;i<Math.ceil(e/2);i++){let a=(t?2:-2)*Math.PI*(i/e);n[i]=Math.cos(a),r[i]=Math.sin(a)}return{real:n,imag:r}}function Ty(e,t,n){let r=(n?2:-2)*Math.PI*(e/t);return{real:Math.cos(r),imag:Math.sin(r)}}var zte=o((()=>{}));function Ey(e,t){e=e.replace(/\s/g,``);let n=(e.length-e.replace(Ny,``).length)/2;if(n<1)throw Error(`Equations without an arrow are not supported.`);if(n>1)throw Error(`Equation must contain exactly one arrow ("${My}").`);let[r,i]=e.split(My);E(r.indexOf(Fy)===-1,()=>`The ellipsis notation ("${Fy}") is not supported yet.`);let a=r.split(Py),o=a.length;if(t!==o)throw Error(`Expected ${o} input tensors, received ${t}`);if(o>2)throw Error(`Support for more than 2 input tensors is not implemented yet.`);let s=[];for(let e=0;e<i.length;++e){let t=i[e];if(!a.some(e=>e.indexOf(t)!==-1))throw Error(`Output subscripts contain the label ${t} not present in the input subscripts.`);s.indexOf(t)===-1&&s.push(t)}for(let e=0;e<r.length;++e){let t=r[e];s.indexOf(t)===-1&&t!==Py&&s.push(t)}let c=Array(a.length);for(let e=0;e<o;++e){if(new Set(a[e].split(``)).size!==a[e].length)throw Error(`Found duplicate axes in input component ${a[e]}. Support for duplicate axes in input is not implemented yet.`);c[e]=[];for(let t=0;t<a[e].length;++t)c[e].push(s.indexOf(a[e][t]))}let l=s.length,u=i.length,d=[];for(let e=u;e<l;++e)d.push(e);return{allDims:s,summedDims:d,idDims:c}}function Dy(e,t){let n=Array(e);n.fill(-1);for(let e=0;e<t.length;++e)n[t[e]]=e;let r=[];for(let t=0;t<e;++t)n[t]===-1&&r.push(t);return n=n.filter(e=>e!==-1),{permutationIndices:n,expandDims:r}}function Oy(e,t,n){let r=Array(e);for(let e=0;e<n.length;++e){let i=n[e].shape;for(let n=0;n<t[e].length;++n)r[t[e][n]]===void 0?r[t[e][n]]=i[n]:E(r[t[e][n]]===i[n],()=>`Expected dimension ${r[t[e][n]]} at axis ${n} of input shaped ${JSON.stringify(i)}, but got dimension ${i[n]}`)}}function ky(e,t){let n=e,r=[],i=0;e.length===0&&n.push(-1),i=e.length+1;for(let e=0;e<i;++e)r.push([]);let a=[];for(let e=0;e<n.length;++e){let i=n[e],o=jy(t,i);for(let t of o)a.indexOf(t)===-1&&(r[e].push(t),a.push(t))}return{path:n,steps:r}}function Ay(e){return e.every((e,t)=>e===t)}function jy(e,t){let n=[];for(let r=0;r<e.length;++r)(e[r].length===0||e[r].indexOf(t)!==-1||t===-1)&&n.push(r);return n}var My,Ny,Py,Fy,Iy=o((()=>{Ge(),My=`->`,Ny=/->/g,Py=`,`,Fy=`...`}));function Ly(e,t,n=0){let r=[];if(typeof t==`number`)E(e.shape[n]%t===0,()=>`Number of splits must evenly divide the axis.`),r=Array(t).fill(e.shape[n]/t);else{E(t.reduce((e,t)=>(t===-1&&(e+=1),e),0)<=1,()=>`There should be only one negative value in split array.`);let i=t.indexOf(-1);if(i!==-1){let r=t.reduce((e,t)=>t>0?e+t:e);t[i]=e.shape[n]-r}E(e.shape[n]===t.reduce((e,t)=>e+t),()=>`The sum of sizes must match the size of the axis dimension.`),r=t}return r}var Ry=o((()=>{j()}));function zy(e){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${e}`}function By(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function Vy(e,t,n){return`indices(${e}, 0) is invalid: ${t} >= ${n}`}var Bte=o((()=>{}));function Hy(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function Uy(e,t){return`size ${e} must be non-negative, not ${t}`}function Wy(){return`reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero`}function Gy(e,t){return`Input to reshape is a SparseTensor with ${D(e)}
  dense values, but the requested shape requires a multiple of ${D(t)}. inputShape=${e} outputShape= ${t}`}function Ky(e,t){return`Input to reshape is a tensor with ${D(e)} dense values, but the requested shape has ${D(t)}. inputShape=${e} outputShape=${t}`}var Vte=o((()=>{j()}));function qy(){return`segment ids must be >= 0`}function Jy(){return`segment ids are not increasing`}function Yy(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function Xy(e,t,n){return`Bad: indices[${e}] == ${t} out of range [0, ${n})`}var Hte=o((()=>{})),Zy=c({collectGatherOpShapeInfo:()=>eb,computeOutShape:()=>$y,segOpComputeOptimalWindowSize:()=>Qy});function Qy(e,t){let n=!1,r;for(e<=30?(r=e,n=!0):r=Pe(e,Math.floor(Math.sqrt(e)));!n;)r>t||r===e?n=!0:r=Pe(e,r+1);return r}function $y(e,t,n){let r=[],i=e.length;for(let a=0;a<i;a++)a===t?r.push(n):r.push(e[a]);return r}function eb(e,t,n,r){let i=t.shape.length,a=e.shape.length;if(r!==0&&(r<-i||r>i))throw Error(`Expect batchDims in the range of [-${i}, ${i}], but got ${r}`);if(r<0&&(r+=i),r>a)throw Error(`batchDims (${r}) must be less than rank(x) (
    ${a}).`);if(n<r)throw Error(`batchDims (${r}) must be less than or equal to axis (${n}).`);for(let n=0;n<r;++n)if(e.shape[n]!==t.shape[n])throw Error(`x.shape[${n}]: ${e.shape[n]} should be equal to indices.shape[${n}]: ${t.shape[n]}.`);let o=e.shape[n],s=[],c=1,l=1,u=1;for(let t=0;t<r;++t)s.push(e.shape[t]),c*=e.shape[t];for(let t=r;t<n;t++)s.push(e.shape[t]),l*=e.shape[t];for(let e=r;e<i;e++)s.push(t.shape[e]);for(let t=n+1;t<a;t++)s.push(e.shape[t]),u*=e.shape[t];return{batchSize:c,sliceSize:u,outerSize:l,dimSize:o,outputShape:s}}var tb=o((()=>{j(),ty()})),nb=c({ERF_A1:()=>fy,ERF_A2:()=>py,ERF_A3:()=>my,ERF_A4:()=>hy,ERF_A5:()=>gy,ERF_P:()=>dy,PARALLELIZE_THRESHOLD:()=>30,RowPartitionType:()=>Qv,SELU_SCALE:()=>ly,SELU_SCALEALPHA:()=>cy,applyActivation:()=>Wh,assertAndGetBroadcastShape:()=>$l,assertAxesAreInnerMostDims:()=>xu,assertParamsConsistent:()=>Kv,assignToTypedArray:()=>Cy,axesAreInnerMostDims:()=>_u,calculateShapes:()=>bh,checkEinsumDimSizes:()=>Oy,checkPadOnDimRoundingMode:()=>sc,combineLocations:()=>vu,combineRaggedTensorToTensorShapes:()=>Jv,complexWithEvenIndex:()=>by,complexWithOddIndex:()=>xy,computeConv2DInfo:()=>Ks,computeConv3DInfo:()=>qs,computeDefaultPad:()=>Xs,computeDilation2DInfo:()=>Us,computeOptimalWindowSize:()=>ey,computeOutAndReduceShapes:()=>yu,computeOutShape:()=>qv,computePool2DInfo:()=>Ws,computePool3DInfo:()=>Gs,convertConv2DDataFormat:()=>oc,decodeEinsumEquation:()=>Ey,eitherStridesOrDilationsAreOne:()=>ic,expandShapeToKeepDim:()=>bu,exponent:()=>Ty,exponents:()=>wy,fromStringArrayToUint8:()=>ib,fromUint8ToStringArray:()=>rb,getAxesPermutation:()=>Su,getBroadcastDims:()=>Zl,getComplexWithIndex:()=>Sy,getEinsumComputePath:()=>ky,getEinsumPermutation:()=>Dy,getFusedBiasGradient:()=>Uh,getFusedDyActivation:()=>Hh,getImageCenter:()=>ny,getInnerMostAxes:()=>wu,getPermuted:()=>iy,getRaggedRank:()=>Xv,getReductionAxes:()=>Ql,getReshaped:()=>ry,getReshapedPermuted:()=>ay,getRowPartitionTypesHelper:()=>Yv,getSliceBeginCoords:()=>oy,getSliceSize:()=>sy,getSparseFillEmptyRowsIndicesDenseShapeMismatch:()=>zy,getSparseFillEmptyRowsNegativeIndexErrorMessage:()=>By,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:()=>Vy,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:()=>Wy,getSparseReshapeInputOutputMismatchErrorMessage:()=>Ky,getSparseReshapeInputOutputMultipleErrorMessage:()=>Gy,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:()=>Hy,getSparseReshapeNegativeOutputDimErrorMessage:()=>Uy,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:()=>Xy,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:()=>qy,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:()=>Jy,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:()=>Yy,getUndoAxesPermutation:()=>Cu,isIdentityPermutation:()=>Ay,log:()=>Qr,mergeRealAndImagArrays:()=>vy,prepareAndValidate:()=>mv,prepareSplitSize:()=>Ly,segment_util:()=>Zy,shouldFuse:()=>Gh,slice_util:()=>gv,splitRealAndImagArrays:()=>yy,stridesOrDilationsArePositive:()=>ac,tupleValuesAreOne:()=>rc,upcastType:()=>ra,validateDefaultValueShape:()=>Zv,validateInput:()=>yh,validateUpdateShape:()=>vh,warn:()=>Zr});function rb(e){try{return e.map(e=>Fi(e))}catch(e){throw Error(`Failed to decode encoded string bytes into utf-8, error: ${e}`)}}function ib(e){return e.map(e=>Pi(e))}var ab=o((()=>{j(),Tu(),eu(),Fte(),cc(),Kh(),Ite(),$v(),ty(),Lv(),fa(),Lte(),Rte(),hv(),xh(),uy(),Kh(),_y(),$r(),zte(),Iy(),Ry(),Bte(),Vte(),Hte(),tb()})),ob=o((()=>{Pg(),Ih()})),sb=o((()=>{pv(),eu(),Lv(),E_(),va(),j(),zv(),A_(),M_(),P_(),I_(),B_(),O_(),Vv(),H_(),R_(),N(),fa(),x_(),Uv(),$a(),ci(),zd(),Ze(),Pte(),ab(),ka(),ob(),ce(),A()})),q=o((()=>{Cee(),G_(),sb(),U_()})),cb,lb=o((()=>{A(),Xo(),os(),sh(),cb={kernelName:`Abs`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(e,oh(V(n,`float32`),-1))}}}})),ub,db=o((()=>{A(),Xo(),is(),Hd(),Nu(),Fu(),Lu(),Zd(),ub={kernelName:rt,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>{let t=Iu(V(n,`float32`));return Vd(rs(e,Pu(Xd(Mu(1),t))))}}}}})),fb,pb=o((()=>{A(),Xo(),is(),Fu(),Lu(),Zd(),fb={kernelName:it,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>rs(e,Pu(Xd(Iu(V(n,`float32`)),1)))}}}})),mb,Ute=o((()=>{A(),eu(),G(),zu(),mb={kernelName:`Add`,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=$l(n.shape,r.shape);return{a:()=>{let t=e,r=Ql(n.shape,i);return r.length>0&&(t=Ru(t,r)),W(t,n.shape)},b:()=>{let t=e,n=Ql(r.shape,i);return n.length>0&&(t=Ru(t,n)),W(t,r.shape)}}}}})),hb,Wte=o((()=>{A(),hb={kernelName:at,saveAllInputs:!0,gradFunc:(e,t)=>{let n={};return t.forEach((t,r)=>{n[r]=()=>e.clone()}),n}}})),gb,Gte=o((()=>{A(),su(),gb={kernelName:ot,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>ou(n)}}}})),_b,Kte=o((()=>{A(),su(),_b={kernelName:st,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>ou(n)}}}})),vb,qte=o((()=>{A(),Xo(),is(),Nu(),Fu(),Lu(),Zd(),vb={kernelName:ct,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>rs(e,Pu(Xd(Mu(1),Iu(V(n,`float32`)))))}}}})),yb,Jte=o((()=>{A(),$o(),Xo(),is(),Nu(),Fu(),Lu(),yb={kernelName:lt,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>rs(e,Pu(H(Mu(1),Iu(V(n,`float32`)))))}}}})),bb,Yte=o((()=>{A(),$o(),eu(),is(),os(),Hd(),G(),Lu(),zu(),bb={kernelName:ft,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=$l(n.shape,r.shape);return{a:()=>{let t=H(Iu(n),Iu(r)),a=U(e,rs(r,t)),o=Ql(n.shape,i);return o.length>0&&(a=Ru(a,o)),W(a,n.shape)},b:()=>{let t=H(Iu(n),Iu(r)),a=Vd(U(e,rs(n,t))),o=Ql(r.shape,i);return o.length>0&&(a=Ru(a,o)),W(a,r.shape)}}}}})),xb,Xte=o((()=>{A(),$o(),Xo(),is(),Lu(),xb={kernelName:ut,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>rs(e,H(Iu(V(n,`float32`)),1))}}}})),Sb,Zte=o((()=>{A(),Xo(),is(),Lu(),Zd(),Nu(),Sb={kernelName:dt,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>rs(e,Xd(Mu(1),Iu(V(n,`float32`))))}}}}));function Qte(e,t,n,r,i,a){let o=I(e,`dy`,`avgPool3dGrad`),s=I(t,`input`,`avgPool3dGrad`),c=o,l=s,u=!1;s.rank===4&&(u=!0,c=W(o,[1,o.shape[0],o.shape[1],o.shape[2],o.shape[3]]),l=W(s,[1,s.shape[0],s.shape[1],s.shape[2],s.shape[3]])),E(c.rank===5,()=>`Error in avgPool3dGrad: dy must be rank 5 but got rank ${c.rank}.`),E(l.rank===5,()=>`Error in avgPool3dGrad: input must be rank 5 but got rank ${l.rank}.`),sc(`avgPool3dGrad`,i,a);let d={dy:c,input:l},f={filterSize:n,strides:r,pad:i,dimRoundingMode:a},p=P.runKernel(gt,d,f);return u?W(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}var Cb,$te=o((()=>{F(),A(),L(),j(),cc(),z(),G(),Cb=R({avgPool3dGrad_:Qte})})),wb,ene=o((()=>{A(),$te(),wb={kernelName:ht,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{filterSize:i,strides:a,pad:o,dimRoundingMode:s}=n;return{x:()=>Cb(e,r,i,a,o,s)}}}}));function tne(e,t,n,r,i){let a=I(e,`dy`,`avgPoolGrad`),o=I(t,`input`,`avgPoolGrad`);E(o.rank===a.rank,()=>`Rank of input (${o.rank}) does not match rank of dy (${a.rank})`);let s=o,c=a,l=!1;o.rank===3&&(l=!0,s=W(o,[1,o.shape[0],o.shape[1],o.shape[2]]),c=W(a,[1,a.shape[0],a.shape[1],a.shape[2]])),E(c.rank===4,()=>`Error in avgPoolGrad: dy must be rank 4 but got rank ${c.rank}.`),E(s.rank===4,()=>`Error in avgPoolGrad: input must be rank 4 but got rank ${s.rank}.`);let u={dy:c,input:s},d={filterSize:n,strides:r,pad:i},f=P.runKernel(mt,u,d);return l?W(f,[f.shape[1],f.shape[2],f.shape[3]]):f}var Tb,nne=o((()=>{F(),A(),L(),j(),z(),G(),Tb=R({avgPoolGrad_:tne})})),Eb,rne=o((()=>{A(),nne(),Eb={kernelName:pt,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{filterSize:i,strides:a,pad:o}=n;return{x:()=>Tb(e,r,i,a,o)}}}})),Db,ine=o((()=>{A(),xc(),Db={kernelName:_t,inputsToSave:[`a`,`b`],gradFunc:(e,t,n)=>{let[r,i]=t,{transposeA:a,transposeB:o}=n;return!a&&!o?{a:()=>bc(e,i,!1,!0),b:()=>bc(r,e,!0,!1)}:!a&&o?{a:()=>bc(e,i,!1,!1),b:()=>bc(e,r,!0,!1)}:a&&!o?{a:()=>bc(i,e,!1,!0),b:()=>bc(r,e,!1,!1)}:{a:()=>bc(i,e,!0,!0),b:()=>bc(e,r,!0,!0)}}}})),Ob,ane=o((()=>{A(),op(),Ob={kernelName:vt,gradFunc:(e,t,n)=>{let{blockShape:r,crops:i}=n;return{x:()=>ap(e,r,i)}}}})),kb,one=o((()=>{A(),zu(),kb={kernelName:xt,gradFunc:(e,t,n)=>{let r=n,i=r.inputShape,a=r.shape,o=Array.from(a);for(let e=i.length-1;e>=0;e--)if(i[e]===a[e])o[e]=1;else if(i[e]!==1)throw Error(`broadcastTo(): [${i}] cannot be broadcast to [${a}].`);let s=[];for(let e=0;e<o.length;e++)o[e]>1&&s.push(e);return{x:()=>Ru(e,s,!0)}}}})),Ab,jb=o((()=>{A(),Ab={kernelName:Ct,gradFunc:e=>({x:()=>e.clone()})}})),Mb,Nb=o((()=>{A(),su(),Mb={kernelName:wt,gradFunc:e=>({x:()=>ou(e)})}})),Pb,Fb=o((()=>{A(),sd(),Dd(),sf(),au(),su(),Pb={kernelName:Tt,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{clipValueMin:i,clipValueMax:a}=n;return{x:()=>iu(of(od(r,i),Ed(r,a)),e,ou(e))}}}})),Ib,Lb=o((()=>{A(),lb(),Ib={kernelName:Dt,inputsToSave:[`x`],gradFunc:cb.gradFunc}})),Rb,zb=o((()=>{A(),Km(),j(),Rb={kernelName:Ot,saveAllInputs:!0,gradFunc:(e,t,n)=>{let r=t.map(e=>e.shape),{axis:i}=n,a=Se(i,t[0].shape)[0];return Gm(e,r.map(e=>e[a]),a).map(e=>()=>e)}}})),Bb,Vb=o((()=>{A(),Vh(),xl(),cc(),j(),Bb={kernelName:kt,inputsToSave:[`x`,`filter`],gradFunc:(e,t,n)=>{let[r,i]=t,{dilations:a,strides:o,pad:s,dataFormat:c}=n;return E(rc(a),()=>`Error in gradient of conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${a}'`),{x:()=>bl(r.shape,e,i,o,s,c),filter:()=>Bh(r,e,i.shape,o,s,c)}}}})),Hb,Ub=o((()=>{A(),hl(),Vh(),Hb={kernelName:jt,inputsToSave:[`dy`,`filter`],gradFunc:(e,t,n)=>{let[r,i]=t,{strides:a,pad:o,dataFormat:s,dimRoundingMode:c}=n;return{dy:()=>ml(e,i,a,o,s,1,c),filter:()=>Bh(e,r,i.shape,a,o,s,c)}}}}));function Wb(e,t,n,r,i){let a=e;e.rank===4&&(a=W(e,[1,e.shape[0],e.shape[1],e.shape[2],e.shape[3]]));let o=t;o.rank===4&&(o=W(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]])),E(a.rank===5,()=>`Error in conv3dDerFilter: input must be rank 5, but got shape ${a.shape}.`),E(o.rank===5,()=>`Error in conv3dDerFilter: dy must be rank 5, but got shape ${o.shape}.`),E(n.length===5,()=>`Error in conv3dDerFilter: filterShape must be length 5, but got ${n}.`),E(a.shape[4]===n[3],()=>`Error in conv3dDerFilter: depth of input ${a.shape[4]}) must match input depth in filter (${n[3]}.`),E(o.shape[4]===n[4],()=>`Error in conv3dDerFilter: depth of dy (${o.shape[4]}) must match output depth for filter (${n[4]}).`);let s={x:a,dy:o},c={strides:r,pad:i,filterShape:n};return P.runKernel(Nt,s,c)}var Gb,Kb=o((()=>{F(),A(),j(),z(),G(),Gb=R({conv3DBackpropFilter_:Wb})})),qb,Jb=o((()=>{A(),Kb(),kl(),cc(),j(),qb={kernelName:Mt,inputsToSave:[`x`,`filter`],gradFunc:(e,t,n)=>{let{dilations:r,strides:i,pad:a}=n;E(rc(r),()=>`Error in gradient of conv3D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${r}'`);let[o,s]=t;return{x:()=>Ol(o.shape,e,s,i,a),filter:()=>Gb(o,e,s.shape,i,a)}}}})),Yb,Xb=o((()=>{A(),Xo(),os(),Hd(),gm(),Yb={kernelName:`Cos`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(Vd(hm(V(n,`float32`))),e)}}}})),Zb,Qb=o((()=>{A(),Xo(),os(),ym(),Zb={kernelName:Ft,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(vm(V(n,`float32`)),e)}}}})),$b,ex=o((()=>{A(),Tu(),Vl(),Rh(),$b={kernelName:Lt,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{axis:i,exclusive:a,reverse:o}=n;return{x:()=>{let t=Su([i],r.rank),n=Bl(e,i,a,!o);return t!=null&&(n=Lh(n,t)),n}}}}})),tx,nx=o((()=>{A(),cc(),Nte(),Zh(),j(),tx={kernelName:Vt,inputsToSave:[`x`,`filter`],gradFunc:(e,t,n)=>{let{dilations:r,strides:i,pad:a,dimRoundingMode:o}=n,s=r??[1,1];E(rc(s),()=>`Error in gradient of depthwiseConv2dNative: dilation rates greater than 1 are not yet supported. Got dilations '${s}'`);let[c,l]=t;return E(c.rank===4,()=>`Error in gradient of depthwiseConv2dNative: input must be rank 4, but got rank ${c.rank}.`),E(l.rank===4,()=>`Error in gradient of depthwiseConv2dNative: filter must be rank 4, but got rank ${l.rank}.`),E(c.shape[3]===l.shape[2],()=>`Error in gradient of depthwiseConv2d: number of input channels (${c.shape[3]}) must match the inChannels dimension in filter ${l.shape[2]}.`),E(ic(i,s),()=>`Error in gradient of depthwiseConv2d: Either strides or dilations must be  1. Got strides ${i} and dilations '${s}'.`),sc(`depthwiseConv2d`,a,o),{x:()=>Xh(c.shape,e,l,i,a,s,o),filter:()=>Jh(c,e,l.shape,i,a,s,o)}}}})),rx,ix=o((()=>{F(),A(),rx={kernelName:Gt,inputsToSave:[`x`,`filter`],gradFunc:(e,t,n)=>{let[r,i]=t,a={x:r,filter:i,dy:e},o={x:r,filter:i,dy:e};return{x:()=>P.runKernel(Kt,a,n),filter:()=>P.runKernel(qt,o,n)}}}})),ax,ox=o((()=>{F(),A(),ax={kernelName:`Elu`,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t,r={dy:e,y:n};return{x:()=>P.runKernel(Zt,r)}}}})),sx,cx=o((()=>{A(),Ku(),os(),Hd(),Lu(),sx={kernelName:`Erf`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t,r=U(Gu(Vd(Iu(n))),2/Math.sqrt(Math.PI));return{x:()=>U(e,r)}}}})),lx,ux=o((()=>{A(),os(),lx={kernelName:`Exp`,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(e,n)}}}})),dx,fx=o((()=>{A(),G(),dx={kernelName:$t,inputsToSave:[`input`],gradFunc:(e,t)=>{let[n]=t;return{input:()=>W(e,n.shape)}}}})),px,sne=o((()=>{A(),Ku(),os(),px={kernelName:en,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(e,Gu(n))}}}})),mx,cne=o((()=>{A(),su(),mx={kernelName:rn,gradFunc:e=>({x:()=>ou(e)})}})),hx,lne=o((()=>{A(),eu(),Xo(),is(),os(),Hd(),G(),Lu(),zu(),hx={kernelName:an,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=$l(n.shape,r.shape);return{a:()=>{let t=rs(e,V(r,`float32`)),a=Ql(n.shape,i);return a.length>0?W(Ru(t,a),n.shape):t},b:()=>{let t=U(e,V(n,`float32`)),a=Ql(r.shape,i);a.length>0&&(t=W(Ru(t,a),r.shape));let o=Iu(r);return Vd(rs(t,V(o,`float32`)))}}}}})),gx,une=o((()=>{A(),$o(),eu(),os(),G(),im(),Nu(),Zd(),zu(),Zu(),gx={kernelName:on,inputsToSave:[`x`,`mean`,`variance`,`scale`],gradFunc:(e,t,n)=>{let{varianceEpsilon:r}=n,[i,a,o,s]=t,c=s??Mu(1),l=Ql(a.shape,i.shape),u=[];if(a.rank===1){for(let e=0;e<i.shape.length-1;++e)u.push(i.shape[e]);u.push(1)}let d=Xd(i,a),f=U(e,c),p=rm(H(o,Mu(r))),m=U(U(U(p,p),p),Mu(-.5));return{x:()=>a.rank===1?W(U(U(e,Xu(W(p,[1,1,1,a.shape[0]]),u)),c),i.shape):W(U(U(e,p),c),i.shape),mean:()=>{let e=U(U(p,Mu(-1)),f);return a.rank===1&&(e=Ru(e,l)),W(e,a.shape)},variance:()=>{let e=U(U(m,d),f);return a.rank===1&&(e=Ru(e,l)),W(e,a.shape)},scale:()=>{let t=U(e,U(d,p));return a.rank===1&&(t=Ru(t,l)),W(t,a.shape)},offset:()=>{let t=e;return a.rank===1&&(t=Ru(t,l)),W(t,a.shape)}}}}}));function _x(e,t){let n=[];for(let r=e;r<t;++r)n.push(r);return n}function vx(e){let t=[];for(let n=0;n<e.length;++n)for(let r=0;r<e[n].length;++r)t.push(e[n][r]);return t}var yx,dne=o((()=>{A(),Tu(),G(),ih(),Rh(),Mh(),j(),yx={kernelName:sn,inputsToSave:[`x`,`indices`],gradFunc:(e,t,n)=>{let[r,i]=t,{axis:a,batchDims:o}=n,s=Se(a,r.shape)[0],c=(e,t,n)=>()=>{let r=e.shape,i=t.size,o=r.slice(0,s),c=o.length,l=r.slice(a,r.length).slice(1),u=l.length,d=_x(0,c),f=_x(c+1,c+1+u),p=W(n,vx([o,[i],l])),m=W(t,[i]),h=vx([[c],d,f]),g=jh(Lh(p,h),m,e.shape[s]),_=Cu(h);return g=Lh(g,_),g};if(o===1){let t=r.shape[0],n=r.split(t,0);return{x:()=>rh(n.map((t,n)=>c(t,i.slice(n,1),e.slice(n,1))())).reshape(r.shape),indices:()=>i}}else return{x:c(r,i,e),indices:()=>i}}}})),bx,fne=o((()=>{A(),su(),bx={kernelName:un,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t;return{a:()=>ou(n),b:()=>ou(r)}}}})),xx,pne=o((()=>{A(),Xo(),xx={kernelName:dn,gradFunc:e=>({x:()=>V(e,`float32`)})}})),Sx,mne=o((()=>{A(),su(),Sx={kernelName:mn,gradFunc:e=>({x:()=>ou(e)})}})),Cx,hne=o((()=>{A(),su(),Cx={kernelName:hn,gradFunc:e=>({x:()=>ou(e)})}})),wx,gne=o((()=>{A(),su(),wx={kernelName:gn,gradFunc:e=>({x:()=>ou(e)})}})),Tx,_ne=o((()=>{A(),ad(),os(),au(),Tx={kernelName:_n,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{alpha:i}=n,a=id(r,0);return{x:()=>iu(a,e,U(e,i))}}}})),Ex,vne=o((()=>{A(),$o(),is(),Ex={kernelName:xn,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>rs(e,H(n,1))}}}})),Dx,yne=o((()=>{A(),Xo(),is(),Dx={kernelName:`Log`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>rs(e,V(n,`float32`))}}}})),Ox,bne=o((()=>{A(),Ku(),os(),Zd(),zu(),Ox={kernelName:Tn,inputsToSave:[],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r]=t,{axis:i}=n;return{logits:()=>{let t=Gu(r);return Xd(e,U(Ru(e,i,!0),t))}}}}}));function xne(e,t,n,r=5,i=1,a=1,o=.5){let s={x:e,y:t,dy:n},c={depthRadius:r,bias:i,alpha:a,beta:o};return P.runKernel(En,s,c)}var kx,Sne=o((()=>{F(),A(),z(),kx=R({localResponseNormalizationBackprop_:xne})})),Ax,Cne=o((()=>{A(),Sne(),Ax={kernelName:`LRN`,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r,i]=t,{depthRadius:a,bias:o,alpha:s,beta:c}=n;return{x:()=>kx(r,i,e,a,o,s,c)}}}}));function jx(e,t,n,r){return t.rank<n.rank&&(t=W(t,bu(t.shape,r))),e.rank<n.rank&&(e=W(e,bu(e.shape,r))),{x:()=>U(e,V(tu(n,t),e.dtype))}}var Mx=o((()=>{Tu(),Xo(),nu(),os(),G()})),Nx,wne=o((()=>{A(),j(),Mx(),Nx={kernelName:`Max`,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let{reductionIndices:r}=n,i=t[0],a=t[1],o=jx(e,a,i,Se(r,i.shape));return{x:()=>o.x()}}}})),Px,Tne=o((()=>{A(),Xo(),sd(),wd(),os(),Px={kernelName:Dn,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t;return{a:()=>U(e,V(od(n,r),`float32`)),b:()=>U(e,V(Cd(n,r),`float32`))}}}}));function Ene(e,t,n,r,i,a,o){let s=I(e,`dy`,`maxPool3dGrad`),c=I(t,`input`,`maxPool3dGrad`),l=I(n,`output`,`maxPool3dGrad`),u=s,d=c,f=l,p=!1;c.rank===4&&(p=!0,u=W(s,[1,s.shape[0],s.shape[1],s.shape[2],s.shape[3]]),d=W(c,[1,c.shape[0],c.shape[1],c.shape[2],c.shape[3]]),f=W(l,[1,l.shape[0],l.shape[1],l.shape[2],l.shape[3]])),E(u.rank===5,()=>`Error in maxPool3dGrad: dy must be rank 5 but got rank ${u.rank}.`),E(d.rank===5,()=>`Error in maxPool3dGrad: input must be rank 5 but got rank ${d.rank}.`),E(f.rank===5,()=>`Error in maxPool3dGrad: output must be rank 5 but got rank ${f.rank}.`),sc(`maxPool3dGrad`,a,o);let m={dy:u,input:d,output:f},h={filterSize:r,strides:i,pad:a,dimRoundingMode:o},g=P.runKernel(jn,m,h);return p?W(g,[g.shape[1],g.shape[2],g.shape[3],g.shape[4]]):g}var Fx,Dne=o((()=>{F(),A(),L(),j(),cc(),z(),G(),Fx=R({maxPool3dGrad_:Ene})})),Ix,One=o((()=>{A(),Dne(),Ix={kernelName:An,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r,i]=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=n;return{x:()=>Fx(e,r,i,a,o,s,c)}}}}));function kne(e,t,n,r,i,a,o){let s=I(e,`dy`,`maxPoolGrad`),c=I(t,`input`,`maxPoolGrad`),l=I(n,`output`,`maxPoolGrad`);E(c.rank===s.rank,()=>`Rank of input (${c.rank}) does not match rank of dy (${s.rank})`),E(s.rank===4,()=>`Error in maxPoolGrad: dy must be rank 4 but got rank ${s.rank}.`),E(c.rank===4,()=>`Error in maxPoolGrad: input must be rank 4 but got rank ${c.rank}.`),sc(`maxPoolGrad`,a,o);let u={dy:s,input:c,output:l},d={filterSize:r,strides:i,pad:a,dimRoundingMode:o};return P.runKernel(kn,u,d)}var Lx,Ane=o((()=>{F(),A(),L(),j(),cc(),z(),Lx=R({maxPoolGrad_:kne})})),Rx,jne=o((()=>{A(),Ane(),Rx={kernelName:On,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r,i]=t,{filterSize:a,strides:o,pad:s}=n;return{x:()=>Lx(e,r,i,a,o,s)}}}})),zx,Mne=o((()=>{A(),Tu(),is(),os(),Nf(),G(),j(),zx={kernelName:Nn,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{axis:i}=n,a=Se(i,r.shape),o=yu(r.shape,a)[1],s=D(o);return{x:()=>{let t=r.shape.slice();return a.forEach(e=>{t[e]=1}),rs(U(W(e,t),Mf(r.shape,`float32`)),s)}}}}})),Bx,Nne=o((()=>{A(),j(),Mx(),Bx={kernelName:`Min`,inputsToSave:[`x`],outputsToSave:[!0],gradFunc:(e,t,n)=>{let{axis:r}=n,[i,a]=t,o=jx(e,a,i,Se(r,i.shape));return{x:()=>o.x()}}}})),Vx,Pne=o((()=>{A(),Xo(),ad(),Dd(),os(),Vx={kernelName:Pn,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t;return{a:()=>U(e,V(Ed(n,r),`float32`)),b:()=>U(e,V(id(n,r),`float32`))}}}})),Hx,Fne=o((()=>{A(),Dc(),Hx={kernelName:Fn,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let r=t[0],{paddings:i}=n,a=i.map(e=>e[0]);return{x:()=>Ec(e,a,r.shape)}}}})),Ux,Ine=o((()=>{A(),eu(),is(),td(),os(),Hd(),G(),zu(),Ux={kernelName:`Mod`,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=$l(n.shape,r.shape);return{a:()=>{let t=Ql(n.shape,i);return t.length>0?W(Ru(e,t),n.shape):e},b:()=>{let t=U(e,Vd(ed(rs(n,r)))),a=Ql(r.shape,i);return a.length>0?W(Ru(t,a),r.shape):t}}}}})),Wx,Lne=o((()=>{A(),eu(),Xo(),os(),G(),zu(),Wx={kernelName:Ln,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=$l(n.shape,r.shape);return{a:()=>{let t=U(e,V(r,`float32`)),a=Ql(n.shape,i);return a.length>0?W(Ru(t,a),n.shape):t},b:()=>{let t=U(e,V(n,`float32`)),a=Ql(r.shape,i);return a.length>0?W(Ru(t,a),r.shape):t}}}}})),Gx,Rne=o((()=>{A(),Hd(),Gx={kernelName:`Neg`,gradFunc:e=>({x:()=>Vd(e)})}})),Kx,zne=o((()=>{A(),jf(),Kx={kernelName:Un,inputsToSave:[`indices`],gradFunc:(e,t)=>{let n=t[0];return{indices:()=>Af(n.shape,`float32`)}}}})),qx,Jx=o((()=>{A(),su(),qx={kernelName:Hn,gradFunc:e=>({x:()=>ou(e)})}})),Yx,Xx=o((()=>{A(),Ph(),Yx={kernelName:Wn,saveAllInputs:!0,gradFunc:(e,t,n)=>{let{axis:r}=n;return Nh(e,r).map(e=>()=>e)}}})),Zx,Qx=o((()=>{A(),Dc(),Zx={kernelName:Gn,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let r=t[0],{paddings:i}=n,a=i.map(e=>e[0]);return{x:()=>Ec(e,a,r.shape)}}}})),$x,eS=o((()=>{A(),eu(),Xo(),ad(),Nd(),os(),ju(),G(),Nu(),Zd(),zu(),au(),su(),$x={kernelName:`Pow`,inputsToSave:[`a`,`b`],outputsToSave:[!0],gradFunc:(e,t)=>{let[n,r,i]=t,a=n,o=r,s=$l(a.shape,o.shape);return{a:()=>{let t=V(o,`float32`),n=U(e,U(t,Au(a,Xd(t,Mu(1))))),r=Ql(a.shape,s);return r.length>0&&(n=Ru(n,r)),W(n,a.shape)},b:()=>{let t=iu(id(a,0),Md(a),ou(a)),n=U(e,U(i,t)),r=Ql(o.shape,s);return r.length>0&&(n=Ru(n,r)),W(n,o.shape)}}}}})),tS,nS=o((()=>{A(),eu(),ad(),os(),G(),zu(),au(),su(),tS={kernelName:Kn,inputsToSave:[`x`,`alpha`],gradFunc:(e,t)=>{let[n,r]=t,i=id(n,0);return{x:()=>iu(i,e,U(e,r)),alpha:()=>{let t=iu(i,ou(e),U(e,n)),a=Ql(r.shape,e.shape);return a.length>0&&(t=Ru(t,a)),W(t,r.shape)}}}}}));function rS(e,t,n){let r=e.shape.slice();return r[n]=1,U(W(t,r),U(Ll(e,n,!0,!1),Ll(e,n,!0,!0)))}function iS(e,t,n){let r=e.shape.length,i=r-n.length,a=Su(n,r),o=e;a!=null&&(o=Lh(e,a));let s=o.shape.slice(),c=s.splice(r-n.length,n.length).reduce((e,t)=>e*t,1);s.push(c);let l=rS(o.reshape(s),t,i);if(l=l.reshape(o.shape),a!=null){let e=Cu(a);l=Lh(l,e)}return l}var aS,oS=o((()=>{sb(),A(),Rl(),os(),G(),Rh(),aS={kernelName:qn,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{axis:i}=n,a=[];return a=i==null?r.shape.map((e,t)=>t):typeof i==`number`?[i]:i,{x:()=>iS(r,e,a)}}}})),sS,cS=o((()=>{A(),eu(),Xo(),is(),os(),Hd(),G(),Lu(),zu(),sS={kernelName:Yt,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=$l(n.shape,r.shape);return{a:()=>{let t=rs(e,V(r,`float32`)),a=Ql(n.shape,i);return a.length>0?W(Ru(t,a),n.shape):t},b:()=>{let t=U(e,V(n,`float32`)),a=Ql(r.shape,i);a.length>0&&(t=W(Ru(t,a),r.shape));let o=Iu(r);return Vd(rs(t,V(o,`float32`)))}}}}})),lS,uS=o((()=>{A(),is(),Hd(),Lu(),lS={kernelName:$n,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>rs(e,Vd(Iu(n)))}}}})),dS,fS=o((()=>{A(),Xo(),Dd(),os(),sh(),dS={kernelName:or,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t,r=U(Ed(n,6),oh(n));return{x:()=>U(e,V(r,`float32`))}}}})),pS,mS=o((()=>{A(),Xo(),os(),sh(),pS={kernelName:er,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(e,V(oh(n),`float32`))}}}})),hS,gS=o((()=>{A(),G(),hS={kernelName:tr,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>W(e,n.shape)}}}})),_S,vS=o((()=>{F(),A(),_S={kernelName:ir,inputsToSave:[`images`],gradFunc:(e,t,n)=>{let[r]=t,i={dy:e,images:r};return{images:()=>P.runKernel(ar,i,n)}}}})),yS,bS=o((()=>{F(),A(),yS={kernelName:nr,inputsToSave:[`images`],gradFunc:(e,t,n)=>{let[r]=t,i={dy:e,images:r};return{images:()=>P.runKernel(rr,i,n)}}}})),xS,SS=o((()=>{A(),Qp(),j(),xS={kernelName:sr,gradFunc:(e,t,n)=>{let{dims:r}=n,i=Se(r,e.shape);return{x:()=>Zp(e,i)}}}})),CS,wS=o((()=>{A(),su(),CS={kernelName:cr,gradFunc:e=>({x:()=>ou(e)})}})),TS,ES=o((()=>{A(),is(),os(),Hd(),ju(),TS={kernelName:lr,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>Vd(rs(e,U(Au(n,1.5),2)))}}}})),DS,OS=o((()=>{A(),Xo(),uf(),os(),su(),DS={kernelName:pr,inputsToSave:[`condition`],gradFunc:(e,t)=>{let[n]=t;return{condition:()=>V(ou(n),`float32`),t:()=>U(e,V(n,e.dtype)),e:()=>U(e,V(lf(n),e.dtype))}}}})),kS,AS=o((()=>{A(),Xo(),Ku(),ad(),os(),Nu(),uy(),au(),kS={kernelName:mr,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>{let t=id(n,Mu(0)),r=Mu(cy);return iu(t,U(e,Mu(ly)),U(U(e,r),Gu(V(n,`float32`))))}}}}})),jS,MS=o((()=>{A(),os(),Nu(),Zd(),jS={kernelName:vr,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(e,U(n,Xd(Mu(1),n)))}}}})),NS,PS=o((()=>{A(),su(),NS={kernelName:_r,gradFunc:e=>({x:()=>ou(e)})}})),FS,IS=o((()=>{A(),Xo(),Pl(),os(),FS={kernelName:`Sin`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(Nl(V(n,`float32`)),e)}}}})),LS,RS=o((()=>{A(),Xo(),Il(),os(),LS={kernelName:gr,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(Fl(V(n,`float32`)),e)}}}})),zS,BS=o((()=>{A(),rp(),Lv(),zS={kernelName:hr,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{begin:i,size:a}=n,o=r.shape,[s,c]=jv(r,i,a),l=[];for(let t=0;t<e.rank;t++)l.push([s[t],o[t]-s[t]-c[t]]);return{x:()=>np(e,l)}}}})),VS,HS=o((()=>{A(),os(),Zd(),zu(),VS={kernelName:Cr,outputsToSave:[!0],gradFunc:(e,t,n)=>{let[r]=t,{dim:i}=n,a=U(e,r);return{logits:()=>Xd(a,U(Ru(a,[i],!0),r))}}}})),US,WS=o((()=>{A(),os(),wc(),US={kernelName:yr,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(e,Cc(n))}}}})),GS,KS=o((()=>{A(),Mc(),GS={kernelName:xr,gradFunc:(e,t,n)=>{let{blockShape:r,paddings:i}=n;return{x:()=>jc(e,r,i)}}}})),qS,JS=o((()=>{A(),vc(),qS={kernelName:Sr,gradFunc:(e,t,n)=>{let{axis:r}=n;return{x:()=>_c(e,r)}}}})),YS,XS=o((()=>{A(),Xo(),is(),os(),Fu(),YS={kernelName:br,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>rs(e,U(Pu(V(n,`float32`)),2))}}}})),ZS,QS=o((()=>{A(),Xo(),os(),ZS={kernelName:Ar,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(e,U(V(n,`float32`),2))}}}})),$S,eC=o((()=>{A(),os(),Nu(),Zd(),$S={kernelName:kr,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=Mu(2);return{a:()=>U(e,U(i,Xd(n,r))),b:()=>U(e,U(i,Xd(r,n)))}}}})),tC,nC=o((()=>{A(),su(),tC={kernelName:Gr,gradFunc:e=>({x:()=>ou(e)})}})),rC,iC=o((()=>{A(),eu(),Hd(),G(),zu(),rC={kernelName:`Sub`,inputsToSave:[`a`,`b`],gradFunc:(e,t)=>{let[n,r]=t,i=$l(n.shape,r.shape);return{a:()=>{let t=e,r=Ql(n.shape,i);return r.length>0&&(t=Ru(t,r)),W(t,n.shape)},b:()=>{let t=e,n=Ql(r.shape,i);return n.length>0&&(t=Ru(t,n)),W(Vd(t),r.shape)}}}}})),aC,oC=o((()=>{A(),os(),Nf(),G(),j(),aC={kernelName:`Sum`,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,i=r.shape.slice(),{axis:a}=n;Se(a,r.shape).forEach(e=>{i[e]=1});let o=U(W(e,i),Mf(r.shape,`float32`));return{x:()=>o}}}})),sC,cC=o((()=>{A(),Pl(),is(),Lu(),sC={kernelName:`Tan`,inputsToSave:[`x`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>rs(e,Iu(Nl(n)))}}}})),lC,uC=o((()=>{A(),os(),Nu(),Lu(),Zd(),lC={kernelName:Ir,outputsToSave:[!0],gradFunc:(e,t)=>{let[n]=t;return{x:()=>U(Xd(Mu(1),Iu(n)),e)}}}})),dC,fC=o((()=>{A(),$o(),Dc(),su(),dC={kernelName:Lr,inputsToSave:[`x`],gradFunc:(e,t,n)=>{let[r]=t,{reps:i}=n;return{x:()=>{let t=ou(r);if(r.rank===1)for(let n=0;n<i[0];++n)t=H(t,Ec(e,[n*r.shape[0]],[r.shape[0]]));else if(r.rank===2)for(let n=0;n<i[0];++n)for(let a=0;a<i[1];++a)t=H(t,Ec(e,[n*r.shape[0],a*r.shape[1]],[r.shape[0],r.shape[1]]));else if(r.rank===3)for(let n=0;n<i[0];++n)for(let a=0;a<i[1];++a)for(let o=0;o<i[2];++o)t=H(t,Ec(e,[n*r.shape[0],a*r.shape[1],o*r.shape[2]],[r.shape[0],r.shape[1],r.shape[2]]));else if(r.rank===4)for(let n=0;n<i[0];++n)for(let a=0;a<i[1];++a)for(let o=0;o<i[2];++o)for(let s=0;s<i[3];++s)t=H(t,Ec(e,[n*r.shape[0],a*r.shape[1],o*r.shape[2],s*r.shape[3]],[r.shape[0],r.shape[1],r.shape[2],r.shape[3]]));else throw Error(`Gradient for tile operation is not implemented for rank-${r.rank} tensors yet.`);return t}}}}})),pC,mC=o((()=>{A(),Tu(),Rh(),pC={kernelName:Br,gradFunc:(e,t,n)=>{let{perm:r}=n,i=Cu(r);return{x:()=>Lh(e,i)}}}})),hC,gC=o((()=>{A(),ih(),hC={kernelName:Hr,gradFunc:(e,t,n)=>{let{axis:r}=n;return{value:()=>rh(e,r)}}}}));function _C(e,t){let n=nd(e,Tf(t,ou(t))),r=od(t,Mu(0,`int32`)),i=n.rank-r.rank;for(let e=0;e<i;++e)r=qu(r,e+1);r=of(r,Mf(n.shape,`bool`));let a=ou(n);return iu(r,n,a)}var vC,yC=o((()=>{A(),Ju(),rd(),sd(),sf(),Ef(),Nf(),Nu(),au(),su(),vC={kernelName:Ur,inputsToSave:[`segmentIds`],gradFunc:(e,t)=>{let[n]=t;return{x:()=>_C(e,n)}}}})),bC,xC=o((()=>{A(),su(),bC={kernelName:Wr,gradFunc:e=>({x:()=>ou(e)})}})),SC,CC=o((()=>{lb(),db(),pb(),Ute(),Wte(),Gte(),Kte(),qte(),Jte(),Yte(),Xte(),Zte(),ene(),rne(),ine(),ane(),one(),jb(),Nb(),Fb(),Lb(),zb(),Vb(),Ub(),Jb(),Xb(),Qb(),ex(),nx(),ix(),ox(),cx(),ux(),fx(),sne(),cne(),lne(),une(),dne(),fne(),pne(),mne(),hne(),gne(),_ne(),vne(),yne(),bne(),Cne(),wne(),Tne(),One(),jne(),Mne(),Nne(),Pne(),Fne(),Ine(),Lne(),Rne(),zne(),Jx(),Xx(),Qx(),eS(),nS(),oS(),cS(),uS(),fS(),mS(),gS(),vS(),bS(),SS(),wS(),ES(),OS(),AS(),MS(),PS(),IS(),RS(),BS(),HS(),WS(),KS(),JS(),XS(),QS(),eC(),nC(),iC(),oC(),cC(),uC(),fC(),mC(),gC(),yC(),xC(),ci(),SC=[cb,ub,fb,mb,hb,gb,_b,vb,yb,bb,xb,Sb,wb,Eb,Db,Ob,kb,Ab,Mb,Pb,Ib,Rb,Hb,Bb,qb,Yb,Zb,$b,tx,rx,sS,ax,sx,lx,dx,px,hx,mx,gx,yx,bx,xx,Sx,Cx,wx,Tx,Ex,Dx,Ox,Ax,Nx,Nx,Px,Ix,Rx,zx,Bx,Vx,Hx,Ux,Wx,Gx,Kx,qx,Yx,Zx,Zx,$x,tS,aS,lS,dS,pS,hS,_S,yS,xS,CS,TS,DS,kS,jS,NS,FS,LS,zS,VS,US,GS,GS,qS,qS,YS,$S,ZS,tC,rC,aC,sC,lC,dC,pC,hC,vC,bC];for(let e of SC)ii(e)})),wC=o((()=>{x_(),N(),M().prototype.abs=function(){return this.throwIfDisposed(),cs(this)}})),TC=o((()=>{x_(),N(),M().prototype.acos=function(){return this.throwIfDisposed(),ds(this)}})),EC=o((()=>{x_(),N(),M().prototype.acosh=function(){return this.throwIfDisposed(),ms(this)}})),DC=o((()=>{$o(),N(),M().prototype.add=function(e){return this.throwIfDisposed(),H(this,e)}})),OC=o((()=>{vs(),N(),M().prototype.all=function(e,t){return this.throwIfDisposed(),_s(this,e,t)}})),kC=o((()=>{xs(),N(),M().prototype.any=function(e,t){return this.throwIfDisposed(),bs(this,e,t)}})),AC=o((()=>{ws(),N(),M().prototype.argMax=function(e){return this.throwIfDisposed(),Cs(this,e)}})),jC=o((()=>{Ds(),N(),M().prototype.argMin=function(e){return this.throwIfDisposed(),Es(this,e)}})),MC=o((()=>{G(),N(),j(),M().prototype.asScalar=function(){return this.throwIfDisposed(),E(this.size===1,()=>`The array must have only 1 element.`),W(this,[])}})),NC=o((()=>{x_(),N(),M().prototype.asType=function(e){return this.throwIfDisposed(),V(this,e)}})),PC=o((()=>{G(),N(),M().prototype.as1D=function(){return this.throwIfDisposed(),W(this,[this.size])}})),FC=o((()=>{G(),N(),M().prototype.as2D=function(e,t){return this.throwIfDisposed(),W(this,[e,t])}})),IC=o((()=>{G(),N(),M().prototype.as3D=function(e,t,n){return this.throwIfDisposed(),W(this,[e,t,n])}})),LC=o((()=>{G(),N(),M().prototype.as4D=function(e,t,n,r){return this.throwIfDisposed(),W(this,[e,t,n,r])}})),RC=o((()=>{G(),N(),M().prototype.as5D=function(e,t,n,r,i){return this.throwIfDisposed(),W(this,[e,t,n,r,i])}})),zC=o((()=>{x_(),N(),M().prototype.asin=function(){return this.throwIfDisposed(),ks(this)}})),BC=o((()=>{x_(),N(),M().prototype.asinh=function(){return this.throwIfDisposed(),Ms(this)}})),VC=o((()=>{x_(),N(),M().prototype.atan=function(){return this.throwIfDisposed(),Fs(this)}})),HC=o((()=>{zs(),N(),M().prototype.atan2=function(e){return this.throwIfDisposed(),Rs(this,e)}})),UC=o((()=>{x_(),N(),M().prototype.atanh=function(){return this.throwIfDisposed(),Vs(this)}})),WC=o((()=>{fc(),N(),M().prototype.avgPool=function(e,t,n,r){return this.throwIfDisposed(),dc(this,e,t,n,r)}})),GC=o((()=>{Mc(),N(),M().prototype.batchToSpaceND=function(e,t){return this.throwIfDisposed(),jc(this,e,t)}})),KC=o((()=>{Pc(),N(),M().prototype.batchNorm=function(e,t,n,r,i){return this.throwIfDisposed(),Nc(this,e,t,n,r,i)}})),qC=o((()=>{Kc(),N(),M().prototype.broadcastTo=function(e){return this.throwIfDisposed(),Gc(this,e)}})),JC=o((()=>{x_(),N(),M().prototype.cast=function(e){return this.throwIfDisposed(),V(this,e)}})),YC=o((()=>{x_(),N(),M().prototype.ceil=function(){return this.throwIfDisposed(),Jc(this)}})),XC=o((()=>{x_(),N(),M().prototype.clipByValue=function(e,t){return this.throwIfDisposed(),$c(this,e,t)}})),ZC=o((()=>{vc(),N(),M().prototype.concat=function(e,t){return this.throwIfDisposed(),e instanceof ta&&(e=[e]),_c([this,...e],t)}})),QC=o((()=>{vl(),N(),M().prototype.conv1d=function(e,t,n,r,i,a){return this.throwIfDisposed(),_l(this,e,t,n,r,i,a)}})),$C=o((()=>{wl(),N(),M().prototype.conv2dTranspose=function(e,t,n,r,i){return this.throwIfDisposed(),Cl(this,e,t,n,r,i)}})),ew=o((()=>{hl(),N(),M().prototype.conv2d=function(e,t,n,r,i,a){return this.throwIfDisposed(),ml(this,e,t,n,r,i,a)}})),tw=o((()=>{x_(),N(),M().prototype.cos=function(){return this.throwIfDisposed(),Nl(this)}})),nw=o((()=>{x_(),N(),M().prototype.cosh=function(){return this.throwIfDisposed(),Fl(this)}})),rw=o((()=>{Rl(),N(),M().prototype.cumprod=function(e,t,n){return this.throwIfDisposed(),Ll(this,e,t,n)}})),iw=o((()=>{Vl(),N(),M().prototype.cumsum=function(e,t,n){return this.throwIfDisposed(),Bl(this,e,t,n)}})),aw=o((()=>{Wl(),N(),M().prototype.depthToSpace=function(e,t){return this.throwIfDisposed(),Ul(this,e,t)}})),ow=o((()=>{ql(),N(),M().prototype.depthwiseConv2d=function(e,t,n,r,i,a){return this.throwIfDisposed(),Kl(this,e,t,n,r,i,a)}})),sw=o((()=>{Xl(),N(),M().prototype.dilation2d=function(e,t,n,r,i){return this.throwIfDisposed(),Yl(this,e,t,n,r,i)}})),cw=o((()=>{lu(),N(),M().prototype.divNoNan=function(e){return this.throwIfDisposed(),cu(this,e)}})),lw=o((()=>{is(),N(),M().prototype.div=function(e){return this.throwIfDisposed(),rs(this,e)}})),uw=o((()=>{du(),N(),M().prototype.dot=function(e){return this.throwIfDisposed(),uu(this,e)}})),dw=o((()=>{hu(),N(),M().prototype.elu=function(){return this.throwIfDisposed(),mu(this)}})),fw=o((()=>{nu(),N(),M().prototype.equal=function(e){return this.throwIfDisposed(),tu(this,e)}})),pw=o((()=>{x_(),N(),M().prototype.erf=function(){return this.throwIfDisposed(),gu(this)}})),mw=o((()=>{Wu(),N(),M().prototype.euclideanNorm=function(e,t){return this.throwIfDisposed(),Uu(this,e,t)}})),hw=o((()=>{x_(),N(),M().prototype.exp=function(){return this.throwIfDisposed(),Gu(this)}})),gw=o((()=>{Ju(),N(),M().prototype.expandDims=function(e){return this.throwIfDisposed(),qu(this,e)}})),_w=o((()=>{x_(),N(),M().prototype.expm1=function(){return this.throwIfDisposed(),Yu(this)}})),vw=o((()=>{x_(),N(),M().prototype.fft=function(){return this.throwIfDisposed(),Im(this)}})),yw=o((()=>{G(),N(),M().prototype.flatten=function(){return this.throwIfDisposed(),W(this,[this.size])}})),bw=o((()=>{x_(),N(),M().prototype.floor=function(){return this.throwIfDisposed(),ed(this)}})),xw=o((()=>{ts(),N(),M().prototype.floorDiv=function(e){return this.throwIfDisposed(),es(this,e)}})),Sw=o((()=>{rd(),N(),M().prototype.gather=function(e,t,n){return this.throwIfDisposed(),nd(this,e,t,n)}})),Cw=o((()=>{sd(),N(),M().prototype.greaterEqual=function(e){return this.throwIfDisposed(),od(this,e)}})),ww=o((()=>{ad(),N(),M().prototype.greater=function(e){return this.throwIfDisposed(),id(this,e)}})),Tw=o((()=>{x_(),N(),M().prototype.ifft=function(){return this.throwIfDisposed(),zm(this)}})),Ew=o((()=>{x_(),N(),M().prototype.irfft=function(){return this.throwIfDisposed(),Hm(this)}})),Dw=o((()=>{x_(),N(),M().prototype.isFinite=function(){return this.throwIfDisposed(),dd(this)}})),Ow=o((()=>{x_(),N(),M().prototype.isInf=function(){return this.throwIfDisposed(),md(this)}})),kw=o((()=>{x_(),N(),M().prototype.isNaN=function(){return this.throwIfDisposed(),_d(this)}})),Aw=o((()=>{xd(),N(),M().prototype.leakyRelu=function(e){return this.throwIfDisposed(),bd(this,e)}})),jw=o((()=>{Dd(),N(),M().prototype.lessEqual=function(e){return this.throwIfDisposed(),Ed(this,e)}})),Mw=o((()=>{wd(),N(),M().prototype.less=function(e){return this.throwIfDisposed(),Cd(this,e)}})),Nw=o((()=>{Ad(),N(),M().prototype.localResponseNormalization=function(e,t,n,r){return this.throwIfDisposed(),kd(this,e,t,n,r)}})),Pw=o((()=>{x_(),N(),M().prototype.logSigmoid=function(){return this.throwIfDisposed(),qd(this)}})),Fw=o((()=>{x_(),N(),M().prototype.logSoftmax=function(e){return this.throwIfDisposed(),$d(this,e)}})),Iw=o((()=>{rf(),N(),M().prototype.logSumExp=function(e,t){return this.throwIfDisposed(),nf(this,e,t)}})),Lw=o((()=>{x_(),N(),M().prototype.log=function(){return this.throwIfDisposed(),Md(this)}})),Rw=o((()=>{x_(),N(),M().prototype.log1p=function(){return this.throwIfDisposed(),Fd(this)}})),zw=o((()=>{sf(),N(),M().prototype.logicalAnd=function(e){return this.throwIfDisposed(),of(this,e)}})),Bw=o((()=>{uf(),N(),M().prototype.logicalNot=function(){return this.throwIfDisposed(),lf(this)}})),Vw=o((()=>{pf(),N(),M().prototype.logicalOr=function(e){return this.throwIfDisposed(),ff(this,e)}})),Hw=o((()=>{gf(),N(),M().prototype.logicalXor=function(e){return this.throwIfDisposed(),hf(this,e)}})),Uw=o((()=>{xc(),N(),M().prototype.matMul=function(e,t,n){return this.throwIfDisposed(),bc(this,e,t,n)}})),Ww=o((()=>{bf(),N(),M().prototype.maxPool=function(e,t,n,r){return this.throwIfDisposed(),yf(this,e,t,n,r)}})),Gw=o((()=>{Du(),N(),M().prototype.max=function(e,t){return this.throwIfDisposed(),Eu(this,e,t)}})),Kw=o((()=>{Ef(),N(),M().prototype.maximum=function(e){return this.throwIfDisposed(),Tf(this,e)}})),qw=o((()=>{kf(),N(),M().prototype.mean=function(e,t){return this.throwIfDisposed(),Of(this,e,t)}})),Jw=o((()=>{ku(),N(),M().prototype.min=function(e,t){return this.throwIfDisposed(),Ou(this,e,t)}})),Yw=o((()=>{If(),N(),M().prototype.minimum=function(e){return this.throwIfDisposed(),Ff(this,e)}})),Xw=o((()=>{zf(),N(),M().prototype.mirrorPad=function(e,t){return this.throwIfDisposed(),Rf(this,e,t)}})),Zw=o((()=>{Hf(),N(),M().prototype.mod=function(e){return this.throwIfDisposed(),Vf(this,e)}})),Qw=o((()=>{os(),N(),M().prototype.mul=function(e){return this.throwIfDisposed(),U(this,e)}})),$w=o((()=>{x_(),N(),M().prototype.neg=function(){return this.throwIfDisposed(),Vd(this)}})),eT=o((()=>{x_(),N(),M().prototype.norm=function(e,t,n){return this.throwIfDisposed(),Vu(this,e,t,n)}})),tT=o((()=>{Jf(),N(),M().prototype.notEqual=function(e){return this.throwIfDisposed(),qf(this,e)}})),nT=o((()=>{Zf(),N(),M().prototype.oneHot=function(e,t=1,n=0){return this.throwIfDisposed(),Xf(this,e,t,n)}})),rT=o((()=>{x_(),N(),M().prototype.onesLike=function(){return this.throwIfDisposed(),$f(this)}})),iT=o((()=>{rp(),N(),M().prototype.pad=function(e,t){return this.throwIfDisposed(),np(this,e,t)}})),aT=o((()=>{dp(),N(),M().prototype.pool=function(e,t,n,r,i,a){return this.throwIfDisposed(),up(this,e,t,n,r,i,a)}})),oT=o((()=>{ju(),N(),M().prototype.pow=function(e){return this.throwIfDisposed(),Au(this,e)}})),sT=o((()=>{mp(),N(),M().prototype.prelu=function(e){return this.throwIfDisposed(),pp(this,e)}})),cT=o((()=>{_p(),N(),M().prototype.prod=function(e,t){return this.throwIfDisposed(),gp(this,e,t)}})),lT=o((()=>{x_(),N(),M().prototype.reciprocal=function(){return this.throwIfDisposed(),Hp(this)}})),uT=o((()=>{Kp(),N(),M().prototype.relu=function(){return this.throwIfDisposed(),Gp(this)}})),dT=o((()=>{Yp(),N(),M().prototype.relu6=function(){return this.throwIfDisposed(),Jp(this)}})),fT=o((()=>{G(),N(),M().prototype.reshapeAs=function(e){return this.throwIfDisposed(),W(this,e.shape)}})),pT=o((()=>{G(),N(),M().prototype.reshape=function(e){return this.throwIfDisposed(),W(this,e)}})),mT=o((()=>{Qg(),N(),M().prototype.resizeBilinear=function(e,t,n){return this.throwIfDisposed(),Zg(this,e,t,n)}})),hT=o((()=>{t_(),N(),M().prototype.resizeNearestNeighbor=function(e,t,n){return this.throwIfDisposed(),e_(this,e,t,n)}})),gT=o((()=>{Qp(),N(),M().prototype.reverse=function(e){return this.throwIfDisposed(),Zp(this,e)}})),_T=o((()=>{x_(),N(),M().prototype.rfft=function(){return this.throwIfDisposed(),Jm(this)}})),vT=o((()=>{x_(),N(),M().prototype.round=function(){return this.throwIfDisposed(),em(this)}})),yT=o((()=>{x_(),N(),M().prototype.rsqrt=function(){return this.throwIfDisposed(),rm(this)}})),bT=o((()=>{sm(),N(),M().prototype.selu=function(){return this.throwIfDisposed(),om(this)}})),xT=o((()=>{um(),N(),M().prototype.separableConv2d=function(e,t,n,r,i,a){return this.throwIfDisposed(),lm(this,e,t,n,r,i,a)}})),ST=o((()=>{x_(),N(),M().prototype.sigmoid=function(){return this.throwIfDisposed(),Cc(this)}})),CT=o((()=>{x_(),N(),M().prototype.sign=function(){return this.throwIfDisposed(),fm(this)}})),wT=o((()=>{x_(),N(),M().prototype.sin=function(){return this.throwIfDisposed(),hm(this)}})),TT=o((()=>{x_(),N(),M().prototype.sinh=function(){return this.throwIfDisposed(),vm(this)}})),ET=o((()=>{x_(),N(),M().prototype.slice=function(e,t){return this.throwIfDisposed(),Ec(this,e,t)}})),DT=o((()=>{x_(),N(),M().prototype.softmax=function(e){return this.throwIfDisposed(),Nm(this,e)}})),OT=o((()=>{x_(),N(),M().prototype.softplus=function(){return this.throwIfDisposed(),Wd(this)}})),kT=o((()=>{op(),N(),M().prototype.spaceToBatchND=function(e,t){return this.throwIfDisposed(),ap(this,e,t)}})),AT=o((()=>{Km(),N(),M().prototype.split=function(e,t){return this.throwIfDisposed(),Gm(this,e,t)}})),jT=o((()=>{x_(),N(),M().prototype.sqrt=function(){return this.throwIfDisposed(),Pu(this)}})),MT=o((()=>{x_(),N(),M().prototype.square=function(){return this.throwIfDisposed(),Iu(this)}})),NT=o((()=>{Qm(),N(),M().prototype.squaredDifference=function(e){return this.throwIfDisposed(),Zm(this,e)}})),PT=o((()=>{th(),N(),M().prototype.squeeze=function(e){return this.throwIfDisposed(),eh(this,e)}})),FT=o((()=>{ih(),N(),M().prototype.stack=function(e,t){return this.throwIfDisposed(),rh(e instanceof ta?[this,e]:[this,...e],t)}})),IT=o((()=>{x_(),N(),M().prototype.step=function(e){return this.throwIfDisposed(),oh(this,e)}})),LT=o((()=>{x_(),N(),M().prototype.stridedSlice=function(e,t,n,r,i,a,o,s){return this.throwIfDisposed(),lh(this,e,t,n,r,i,a,o,s)}})),RT=o((()=>{Zd(),N(),M().prototype.sub=function(e){return this.throwIfDisposed(),Xd(this,e)}})),zT=o((()=>{zu(),N(),M().prototype.sum=function(e,t){return this.throwIfDisposed(),Ru(this,e,t)}})),BT=o((()=>{x_(),N(),M().prototype.tan=function(){return this.throwIfDisposed(),fh(this)}})),VT=o((()=>{x_(),N(),M().prototype.tanh=function(){return this.throwIfDisposed(),kc(this)}})),HT=o((()=>{Zu(),N(),M().prototype.tile=function(e){return this.throwIfDisposed(),Xu(this,e)}})),UT=o((()=>{x_(),N(),M().prototype.toBool=function(){return this.throwIfDisposed(),V(this,`bool`)}})),WT=o((()=>{x_(),N(),M().prototype.toFloat=function(){return this.throwIfDisposed(),V(this,`float32`)}})),GT=o((()=>{x_(),N(),M().prototype.toInt=function(){return this.throwIfDisposed(),V(this,`int32`)}})),KT=o((()=>{wh(),N(),M().prototype.topk=function(e,t){return this.throwIfDisposed(),Ch(this,e,t)}})),qT=o((()=>{Rh(),N(),M().prototype.transpose=function(e){return this.throwIfDisposed(),Lh(this,e)}})),JT=o((()=>{Ah(),N(),M().prototype.unique=function(e){return this.throwIfDisposed(),kh(this,e)}})),YT=o((()=>{Mh(),N(),M().prototype.unsortedSegmentSum=function(e,t){return this.throwIfDisposed(),jh(this,e,t)}})),XT=o((()=>{Ph(),N(),M().prototype.unstack=function(e){return this.throwIfDisposed(),Nh(this,e)}})),ZT=o((()=>{au(),N(),M().prototype.where=function(e,t){return this.throwIfDisposed(),iu(e,this,t)}})),QT=o((()=>{x_(),N(),M().prototype.zerosLike=function(){return this.throwIfDisposed(),ou(this)}})),Bne=o((()=>{wC(),TC(),EC(),DC(),OC(),kC(),AC(),jC(),MC(),NC(),PC(),FC(),IC(),LC(),RC(),zC(),BC(),VC(),HC(),UC(),WC(),GC(),KC(),qC(),JC(),YC(),XC(),ZC(),QC(),$C(),ew(),tw(),nw(),rw(),iw(),aw(),ow(),sw(),cw(),lw(),uw(),dw(),fw(),pw(),mw(),hw(),gw(),_w(),vw(),yw(),bw(),xw(),Sw(),Cw(),ww(),Tw(),Ew(),Dw(),Ow(),kw(),Aw(),jw(),Mw(),Nw(),Pw(),Fw(),Iw(),Lw(),Rw(),zw(),Bw(),Vw(),Hw(),Uw(),Ww(),Gw(),Kw(),qw(),Jw(),Yw(),Xw(),Zw(),Qw(),$w(),eT(),tT(),nT(),rT(),iT(),aT(),oT(),sT(),cT(),lT(),uT(),dT(),fT(),pT(),mT(),hT(),gT(),_T(),vT(),yT(),bT(),xT(),ST(),CT(),wT(),TT(),ET(),DT(),OT(),kT(),AT(),jT(),MT(),NT(),PT(),FT(),IT(),LT(),RT(),zT(),BT(),VT(),HT(),UT(),WT(),GT(),KT(),qT(),JT(),YT(),XT(),ZT(),QT()})),$T,eE,J,tE,nE,rE=o((()=>{$T=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},eE=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},J=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},tE=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},nE=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}}})),iE,Vne=o((()=>{iE=class{constructor(e){this.maxEntries=e||100,this.cache=new Map}get(e){let t;return this.cache.has(e)&&(t=this.cache.get(e),this.cache.delete(e),this.cache.set(e,t)),t}put(e,t){if(this.cache.has(e))this.cache.delete(e);else if(this.cache.size>=this.maxEntries){let e=this.cache.keys().next().value;this.cache.delete(e)}this.cache.set(e,t)}getMaxEntries(){return this.maxEntries}setMaxEntries(e){if(e<0)throw Error(`The maxEntries of LRU caches must be at least 0, but got ${e}.`);if(this.maxEntries>e)for(let t=0;t<this.maxEntries-e;t++){let e=this.cache.keys().next().value;this.cache.delete(e)}this.maxEntries=e}}}));function aE(e,t){if(Array.isArray(e)){let n=[];for(let r=0;r<t;r++)n=n.concat(e);return n}else{let n=Array(t);return n.fill(e),n}}function oE(e,t){if(!e)throw new nE(t)}function sE(e,t){let n=0;for(let r of e)r===t&&n++;return n}function cE(e){return e.length===1?e[0]:e}function lE(e){return Array.isArray(e)?e:[e]}function uE(e){let t=e.replace(/(.)([A-Z][a-z0-9]+)/g,`$1_$2`).replace(/([a-z])([A-Z])/g,`$1_$2`).toLowerCase();return t[0]===`_`?`private`+t:t}function dE(e){return e.length<=1||e.indexOf(`_`)===-1?e:e.replace(/[_]+(\w|$)/g,(e,t)=>t.toUpperCase())}function fE(e){if(e==null)return null;let t={};return t.className=e.getClassName(),t.config=e.getConfig(),t}function pE(e){if(!(typeof e!=`object`||!e))if(Array.isArray(e))e.forEach(e=>pE(e));else{let t=Object.keys(e);for(let n of t){let t=e[n];typeof t==`object`&&t&&(!Array.isArray(t)&&t.type===`ndarray`&&typeof t.value==`number`?e[n]=t.value:pE(t))}}}function mE(e,t={},n={},r=`object`,i=!1){if(typeof e==`string`){let i=e,a;if(i in n)a=n[i];else if(i in SE)a=SE[i];else if(a=t[i],a==null)throw new J(`Unknown ${r}: ${e}. This may be due to one of the following reasons:\n1. The ${r} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.\n2. The custom ${r} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);return a}else{let a=e;if(a.className==null||a.config==null)throw new J(`${r}: Improper config format: ${JSON.stringify(a)}.\n'className' and 'config' must set.`);let o=a.className,s,c;if(o in n?[s,c]=n[o]:o in SE?[s,c]=SE.className:o in t&&([s,c]=t[o]),s==null)throw new J(`Unknown ${r}: ${o}. This may be due to one of the following reasons:\n1. The ${r} is defined in Python, in which case it needs to be ported to TensorFlow.js or your JavaScript code.\n2. The custom ${r} is defined in JavaScript, but is not registered properly with tf.serialization.registerClass().`);if(c!=null){let e={};for(let t of Object.keys(SE))e[t]=SE[t];for(let t of Object.keys(n))e[t]=n[t];let t=a.config;t.customObjects=e;let r=Object.assign({},SE);for(let e of Object.keys(n))SE[e]=n[e];pE(a.config);let o=c(s,a.config,n,i);return SE=Object.assign({},r),o}else{let e=Object.assign({},SE);for(let e of Object.keys(n))SE[e]=n[e];let t=new s(a.config);return SE=Object.assign({},e),t}}}function Hne(e,t){return e<t?-1:+(e>t)}function hE(e,t){return-1*Hne(e,t)}function gE(e){if(e==null)return e;let t=[];for(let n of e)t.indexOf(n)===-1&&t.push(n);return t}function Une(e){if(e==null)throw new J(`Invalid value in obj: ${JSON.stringify(e)}`);for(let t in e)if(e.hasOwnProperty(t))return!1;return!0}function _E(e,t,n){if(n!=null&&e.indexOf(n)<0)throw new J(`${n} is not a valid ${t}.  Valid values are ${e} or null/undefined.`)}function vE(e,t,n=0,r=1/0){return oE(n>=0),oE(r>=n),Array.isArray(e)&&e.length>=n&&e.length<=r&&e.every(e=>typeof e===t)}function yE(e,t){Array.isArray(e)?(E(e.length>0,()=>`${t} is unexpectedly an empty array.`),e.forEach((e,n)=>yE(e,`element ${n+1} of ${t}`))):E(Number.isInteger(e)&&e>0,()=>`Expected ${t} to be a positive integer, but got ${bE(e)}.`)}function bE(e){return e===null?`null`:Array.isArray(e)?`[`+e.map(e=>bE(e)).join(`,`)+`]`:typeof e==`string`?`"${e}"`:`${e}`}function Wne(e,t,n){let r=n==null?Ni():n(),i;return(...a)=>{let o=n==null?Ni():n();return o-r<t?i:(r=o,i=e(...a),i)}}function xE(e){return e===`relu`?`relu`:e===`linear`?`linear`:e===`elu`?`elu`:null}var SE,CE=o((()=>{q(),rE(),SE={}}));function wE(){return EE++}function TE(e=``){return e in DE||(DE[e]=0),DE[e]+=1,e+DE[e].toString()}var EE,DE,OE=o((()=>{EE=0,DE={}})),kE,AE,jE,ME,NE,PE=o((()=>{kE=[`channelsFirst`,`channelsLast`],AE=[`nearest`,`bilinear`],jE=[`valid`,`same`,`causal`],ME=[`max`,`avg`],NE=[`sum`,`mul`,`concat`,`ave`]}));function FE(e){_E(kE,`DataFormat`,e)}function Gne(e){_E(AE,`InterpolationFormat`,e)}function IE(e){_E(jE,`PaddingMode`,e)}function LE(e){_E(ME,`PoolMode`,e)}function RE(e,t){UE.push(e);try{let e=t();return UE.pop(),e}catch(e){throw UE.pop(),e}}function Kne(){return UE.length===0?``:UE.join(WE)+WE}function zE(e){if(!VE(e))throw Error(`Not a valid tensor name: '`+e+`'`);return Kne()+e}function BE(e){if(!VE(e))throw Error(`Not a valid tensor name: '`+e+`'`);HE.has(e)||HE.set(e,0);let t=HE.get(e);if(HE.set(e,HE.get(e)+1),t>0){let n=`${e}_${t}`;return HE.set(n,1),n}else return e}function VE(e){return!!e.match(GE)}var HE,UE,WE,GE,KE=o((()=>{PE(),CE(),HE=new Map,UE=[],WE=`/`,GE=new RegExp(/^[A-Za-z0-9][-A-Za-z0-9\._\/]*$/)}));function qne(e){return e===parseInt(e.toString(),10)}function qE(e,t,n){t??=0,n??=e.length;let r=1;for(let i=t;i<n;++i)r*=e[i];return r}function JE(e){if(e.length===0)return NaN;let t=1/0;for(let n=0;n<e.length;n++){let r=e[n];r<t&&(t=r)}return t}function YE(e){if(e.length===0)return NaN;let t=-1/0;for(let n=0;n<e.length;n++){let r=e[n];r>t&&(t=r)}return t}function XE(e,t){if(t<e)throw new J(`end (${t}) < begin (${e}) is forbidden.`);let n=[];for(let r=e;r<t;++r)n.push(r);return n}var ZE=o((()=>{rE()}));function QE(){return eD??=Qa().epsilon(),eD}function $E(){return`channelsLast`}var eD,tD=o((()=>{q()}));function nD(e,t){return V(e,t)}function rD(e,t=-1){let n=e.shape.slice();return t<0&&(t=n.length+t+1),n.splice(t,0,1),W(e,n)}function Jne(e,t){return B(()=>{if(e.shape.length!==2)throw new J(`repeat() expects a rank-2 tensor, but received a rank-${e.shape.length} tensor.`);return lD(rD(e,1),[1,t,1])})}function Yne(e){let t=[qE(e.shape)];return W(e,t)}function Xne(e){if(e.rank<=1)throw new J(`batchFlatten requires a minimum rank of 2. Got rank: ${e.rank}.`);let t=[e.shape[0],qE(e.shape,1)];return W(e,t)}function iD(e,t,n){return B(()=>{switch(e.rank){case 1:return xm(e,t,n);case 2:return wm(e,[t,0],[n,e.shape[1]]);case 3:return Dm(e,[t,0,0],[n,e.shape[1],e.shape[2]]);case 4:return Am(e,[t,0,0,0],[n,e.shape[1],e.shape[2],e.shape[3]]);case 5:return Ec(e,[t,0,0,0,0],[n,e.shape[1],e.shape[2],e.shape[3],e.shape[4]]);case 6:return Ec(e,[t,0,0,0,0,0],[n,e.shape[1],e.shape[2],e.shape[3],e.shape[4],e.shape[5]]);default:throw new J(`sliceAlongFirstAxis() received an unsupported tensor rank: ${e.rank}`)}})}function aD(e,t,n){return B(()=>{switch(e.rank){case 1:return xm(e,t,n);case 2:return wm(e,[0,t],[e.shape[0],n]);case 3:return Dm(e,[0,0,t],[e.shape[0],e.shape[1],n]);case 4:return Am(e,[0,0,0,t],[e.shape[0],e.shape[1],e.shape[2],n]);default:throw new J(`sliceAlongLastAxis() received an unsupported tensor rank: ${e.rank}`)}})}function oD(e,t,n,r){return B(()=>{switch(e.rank){case 1:return xm(e,t,n);case 2:switch(r){case 1:return iD(e,t,n);case 2:return aD(e,t,n);default:throw new J(`The axis is not within the rank of the tensor ${r}`)}case 3:switch(r){case 1:return iD(e,t,n);case 2:return Dm(e,[0,t,0],[e.shape[0],n,e.shape[2]]);case 3:return aD(e,t,n);default:throw new J(`The axis is not within the rank of the tensor ${r}`)}case 4:switch(r){case 1:return iD(e,t,n);case 2:return Am(e,[0,t,0,0],[e.shape[0],n,e.shape[2],e.shape[3]]);case 3:return Am(e,[0,0,t,0],[e.shape[0],e.shape[1],n,e.shape[3]]);case 4:return aD(e,t,n);default:throw new J(`The axis is not within the rank of the tensor ${r}`)}default:throw new J(`sliceAlongLastAxis() received an unsupported tensor rank: ${e.rank}`)}})}function sD(e,t=-1){let n;return t<0&&(n=e[0].rank,t=n===0?0:n),t===e[0].rank&&(t=-1),_c(e,t)}function cD(e,t){switch(e.rank){case 1:return nl([e,t]);case 2:return al([e,t],0);case 3:return cl([e,t],0);case 4:return dl([e,t],0);default:throw new J(`concatAlongFirstAxis() received an unsupported tensor rank: ${e.rank}`)}}function lD(e,t){if(Array.isArray(t)||(t=[t]),e.rank!==t.length)throw new J(`The length of input n (${t.length}) does not match the number of dimensions in input x (${e.rank})`);return Xu(e,t)}function uD(e,t=0,n=1,r,i){return jp(e,t,n,r,i)}function dD(e,t,n,r){if(e.rank<2||t.rank<2)throw new tE(`dot requires both inputs to be rank >= 2 but got x shape = ${e.shape} and y shape = ${t.shape}`);if(t.rank>=3&&e.shape.slice(-1)[0]!==t.shape.slice(-2)[0])throw new tE(`If rank y >= 3, then the second last dim of y must equal the last dim of x but got x shape = ${e.shape} and  y shape = ${t.shape}`);if(e.rank===2&&t.rank===2)return $h({a:e,b:t,transposeA:!1,transposeB:!1,bias:r?mD(e.rank,r,$E()):null,activation:n});{let i=e.shape.slice(),a=i.pop();e=W(e,[-1,a]);let o=t.shape.slice(),s=o.pop(),c=o.pop(),l=[...o,s],u=Array.from({length:t.rank},(e,n)=>n===0?t.rank-2:n<=t.rank-2?n-1:n);t=W(Lh(t,u),[c,-1]);let d=[...i,...l];return W($h({a:e,b:t,transposeA:!1,transposeB:!1,bias:r?mD(e.rank,r,$E()):null,activation:n}),d)}}function fD(e,t,n){return B(()=>(t=Array.isArray(t)?mh(t,`int32`):V(t,`int32`),nd(e,t,n)))}function pD(e){return U(e,e)}function mD(e,t,n){let r=t.shape;if(t.rank!==1&&t.rank!==e)throw new J(`Unexpected bias dimensions: ${t.rank}; expected it to be 1 or ${e}`);if(e===5){if(n===`channelsFirst`)return r.length===1?W(t,[1,r[0],1,1,1]):W(t,[1,r[3],r[0],r[1],r[2]]);if(n===`channelsLast`)return r.length===1?W(t,[1,1,1,1,r[0]]):W(t,[1].concat(r))}else if(e===4){if(n===`channelsFirst`)return r.length===1?W(t,[1,r[0],1,1]):W(t,[1,r[2],r[0],r[1]]);if(n===`channelsLast`)return r.length===1?W(t,[1,1,1,r[0]]):W(t,[1].concat(r))}else if(e===3){if(n===`channelsFirst`)return r.length===1?W(t,[1,r[0],1]):W(t,[1,r[1],r[0]]);if(n===`channelsLast`)return r.length===1?W(t,[1,1,r[0]]):W(t,[1].concat(r))}else if(e<3)return t;throw new J(`Unsupported input rank by biasAdd: ${t.rank}`)}function hD(e,t,n){return B(()=>(n??=$E(),FE(n),H(e,mD(e.rank,t,n))))}function Zne(e,t=1){if(t!==1)throw new tE(`Support for alpha values other than 1 (${t}) is not implemented yet.`);return mu(e)}function Qne(e){return B(()=>rs(e,H(cs(e),1)))}function gD(e,t,n,r){return B(()=>zh(e,t,n,r))}function $ne(e){return B(()=>{let t=H(.5,U(.2,e));return $c(t,0,1)})}function _D(e,t,n=!1){return n?e():t()}var vD=o((()=>{q(),KE(),rE(),ZE(),tD()})),yD,bD,ere=o((()=>{yD=[`fanIn`,`fanOut`,`fanAvg`],bD=[`normal`,`uniform`,`truncatedNormal`]}));function tre(e){_E(yD,`FanMode`,e)}function nre(e){_E(bD,`Distribution`,e)}function rre(e,t=`channelsLast`){let n,r;if(FE(t),e.length===2)n=e[0],r=e[1];else if([3,4,5].indexOf(e.length)!==-1){if(t===`channelsFirst`){let t=qE(e,2);n=e[1]*t,r=e[0]*t}else if(t===`channelsLast`){let t=qE(e,0,e.length-2);n=e[e.length-2]*t,r=e[e.length-1]*t}}else{let t=qE(e);n=Math.sqrt(t),r=Math.sqrt(t)}return[n,r]}function xD(e,t={}){return mE(e,T_.getMap().classNameMap,t,`initializer`)}function SD(e){return fE(e)}function CD(e){if(typeof e==`string`){let t=e in BD?BD[e]:e;if(t===`GlorotNormal`)return new PD;if(t===`GlorotUniform`)return new ND;if(t===`HeNormal`)return new FD;if(t===`HeUniform`)return new ID;if(t===`LeCunNormal`)return new LD;if(t===`LeCunUniform`)return new RD;{let e={};return e.className=t,e.config={},xD(e)}}else if(e instanceof wD)return e;else return xD(e)}var wD,TD,ED,DD,OD,kD,AD,jD,MD,ND,PD,FD,ID,LD,RD,zD,BD,VD=o((()=>{q(),vD(),KE(),rE(),ere(),CE(),ZE(),wD=class extends w_{fromConfigUsesCustomObjects(){return!1}getConfig(){return{}}},TD=class extends wD{apply(e,t){return Af(e,t)}},TD.className=`Zeros`,K(TD),ED=class extends wD{apply(e,t){return Mf(e,t)}},ED.className=`Ones`,K(ED),DD=class extends wD{constructor(e){if(super(),typeof e!=`object`)throw new J(`Expected argument of type ConstantConfig but got ${e}`);if(e.value===void 0)throw new J(`config must have value set but got ${e}`);this.value=e.value}apply(e,t){return B(()=>U(Mu(this.value),Mf(e,t)))}getConfig(){return{value:this.value}}},DD.className=`Constant`,K(DD),OD=class extends wD{constructor(e){super(),this.DEFAULT_MINVAL=-.05,this.DEFAULT_MAXVAL=.05,this.minval=e.minval||this.DEFAULT_MINVAL,this.maxval=e.maxval||this.DEFAULT_MAXVAL,this.seed=e.seed}apply(e,t){return Pp(e,this.minval,this.maxval,t,this.seed)}getConfig(){return{minval:this.minval,maxval:this.maxval,seed:this.seed}}},OD.className=`RandomUniform`,K(OD),kD=class extends wD{constructor(e){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=e.mean||this.DEFAULT_MEAN,this.stddev=e.stddev||this.DEFAULT_STDDEV,this.seed=e.seed}apply(e,t){if(t||=`float32`,t!==`float32`&&t!==`int32`)throw new tE(`randomNormal does not support dType ${t}.`);return uD(e,this.mean,this.stddev,t,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}},kD.className=`RandomNormal`,K(kD),AD=class extends wD{constructor(e){super(),this.DEFAULT_MEAN=0,this.DEFAULT_STDDEV=.05,this.mean=e.mean||this.DEFAULT_MEAN,this.stddev=e.stddev||this.DEFAULT_STDDEV,this.seed=e.seed}apply(e,t){if(t||=`float32`,t!==`float32`&&t!==`int32`)throw new tE(`truncatedNormal does not support dType ${t}.`);return Eh(e,this.mean,this.stddev,t,this.seed)}getConfig(){return{mean:this.mean,stddev:this.stddev,seed:this.seed}}},AD.className=`TruncatedNormal`,K(AD),jD=class extends wD{constructor(e){super(),this.gain=e.gain==null?1:e.gain}apply(e,t){return B(()=>{if(e.length!==2||e[0]!==e[1])throw new J(`Identity matrix initializer can only be used for 2D square matrices.`);return U(this.gain,Qu(e[0]))})}getConfig(){return{gain:this.gain}}},jD.className=`Identity`,K(jD),MD=class extends wD{constructor(e){if(super(),e.scale<0)throw new J(`scale must be a positive float. Got: ${e.scale}`);this.scale=e.scale==null?1:e.scale,this.mode=e.mode==null?`fanIn`:e.mode,tre(this.mode),this.distribution=e.distribution==null?`normal`:e.distribution,nre(this.distribution),this.seed=e.seed}apply(e,t){let n=rre(e),r=n[0],i=n[1],a=this.scale;if(this.mode===`fanIn`?a/=Math.max(1,r):this.mode===`fanOut`?a/=Math.max(1,i):a/=Math.max(1,(r+i)/2),this.distribution===`normal`){let n=Math.sqrt(a);if(t||=`float32`,t!==`float32`&&t!==`int32`)throw new tE(`${this.getClassName()} does not support dType ${t}.`);return Eh(e,0,n,t,this.seed)}else{let n=Math.sqrt(3*a);return Pp(e,-n,n,t,this.seed)}}getConfig(){return{scale:this.scale,mode:this.mode,distribution:this.distribution,seed:this.seed}}},MD.className=`VarianceScaling`,K(MD),ND=class extends MD{constructor(e){super({scale:1,mode:`fanAvg`,distribution:`uniform`,seed:e==null?null:e.seed})}getClassName(){return MD.className}},ND.className=`GlorotUniform`,K(ND),PD=class extends MD{constructor(e){super({scale:1,mode:`fanAvg`,distribution:`normal`,seed:e==null?null:e.seed})}getClassName(){return MD.className}},PD.className=`GlorotNormal`,K(PD),FD=class extends MD{constructor(e){super({scale:2,mode:`fanIn`,distribution:`normal`,seed:e==null?null:e.seed})}getClassName(){return MD.className}},FD.className=`HeNormal`,K(FD),ID=class extends MD{constructor(e){super({scale:2,mode:`fanIn`,distribution:`uniform`,seed:e==null?null:e.seed})}getClassName(){return MD.className}},ID.className=`HeUniform`,K(ID),LD=class extends MD{constructor(e){super({scale:1,mode:`fanIn`,distribution:`normal`,seed:e==null?null:e.seed})}getClassName(){return MD.className}},LD.className=`LeCunNormal`,K(LD),RD=class extends MD{constructor(e){super({scale:1,mode:`fanIn`,distribution:`uniform`,seed:e==null?null:e.seed})}getClassName(){return MD.className}},RD.className=`LeCunUniform`,K(RD),zD=class extends wD{constructor(e){super(),this.DEFAULT_GAIN=1,this.ELEMENTS_WARN_SLOW=2e3,this.gain=e.gain==null?this.DEFAULT_GAIN:e.gain,this.seed=e.seed}apply(e,t){return B(()=>{if(e.length<2)throw new tE(`Shape must be at least 2D.`);if(t!==`int32`&&t!==`float32`&&t!==void 0)throw TypeError(`Unsupported data type ${t}.`);t=t;let n=D(e.slice(0,-1)),r=e[e.length-1],i=n*r;i>this.ELEMENTS_WARN_SLOW&&console.warn(`Orthogonal initializer is being called on a matrix with more than ${this.ELEMENTS_WARN_SLOW} (${i}) elements: Slowness may result.`);let a=uD([Math.max(r,n),Math.min(r,n)],0,1,t,this.seed),o=b_.qr(a,!1),s=o[0],c=o[1].flatten().stridedSlice([0],[Math.min(r,n)*Math.min(r,n)],[Math.min(r,n)+1]);return s=U(s,c.sign()),n<r&&(s=s.transpose()),U(Mu(this.gain),s.reshape(e))})}getConfig(){return{gain:this.gain,seed:this.seed}}},zD.className=`Orthogonal`,K(zD),BD={constant:`Constant`,glorotNormal:`GlorotNormal`,glorotUniform:`GlorotUniform`,heNormal:`HeNormal`,heUniform:`HeUniform`,identity:`Identity`,leCunNormal:`LeCunNormal`,leCunUniform:`LeCunUniform`,ones:`Ones`,orthogonal:`Orthogonal`,randomNormal:`RandomNormal`,randomUniform:`RandomUniform`,truncatedNormal:`TruncatedNormal`,varianceScaling:`VarianceScaling`,zeros:`Zeros`}}));function HD(e){return Array.isArray(e)&&Array.isArray(e[0])}function UD(e){return e.length===0?[]:Array.isArray(e[0])?e:[e]}function WD(e){let t;if(Array.isArray(e)){if(e.length!==1)throw new J(`Expected Tensor length to be 1; got ${e.length}`);t=e[0]}else t=e;return t}function GD(e){if(Array.isArray(e)&&Array.isArray(e[0])){if(e.length===1)return e=e,e[0];throw new J(`Expected exactly 1 Shape; got ${e.length}`)}else return e}var KD=o((()=>{rE()}));function qD(e){let t=0;for(let n of e)n.shape.length===0?t+=1:t+=n.shape.reduce((e,t)=>e*t);return t}var JD=o((()=>{}));function ire(e,t){if(e.shape.toString()!==t.shape.toString())throw Error(`Shape mismatch: `+JSON.stringify(e.shape)+` vs. `+JSON.stringify(t.shape))}function YD(e){return e.map(e=>e.read())}function XD(e){e.forEach(e=>{e[0].write(e[1])})}var ZD,QD,$D=o((()=>{q(),OE(),KE(),ZD=`Variable`,QD=class{constructor(e,t=`float32`,n=ZD,r=!0,i=null){this.dtype=t??`float32`,this.shape=e.shape,this.id=wE(),n??=ZD,this.originalName=zE(n),this.name=BE(this.originalName),this.trainable_=r,this.constraint=i,this.val=hte(e,this.trainable_,this.name,this.dtype)}read(){return this.assertNotDisposed(),this.val}write(e){return this.assertNotDisposed(),ire(this.val,e),this.val.id!==e.id&&(this.val.assign(e),this.constraint!=null&&this.val.assign(this.constraint.apply(this.val))),this}dispose(){this.assertNotDisposed(),this.val.dispose()}assertNotDisposed(){if(this.val.isDisposed)throw Error(`LayersVariable ${this.name} is already disposed.`)}get trainable(){return this.trainable_}set trainable(e){this.trainable_=e,this.val.trainable=e}}}));function are(e){e=lE(e);let t=[];for(let n of e)t.push(n.shape);return cE(t)}function ore(e){return`float32`}function eO(e,t,n){if((t==null||n!=null&&n>0)&&(t=e.sourceLayer,n=e.nodeIndex),t.inboundNodes.length===0)return[e];{let e=t.inboundNodes[n];if(e.inboundLayers.length===0)return e.inputTensors;{let t=[];for(let n=0;n<e.inboundLayers.length;n++){let r=e.inputTensors[n],i=e.inboundLayers[n],a=e.nodeIndices[n],o=eO(r,i,a);for(let e of o)t.indexOf(e)===-1&&t.push(e)}return t}}}function sre(e){let t=!0;for(let n of lE(e))if(!(n instanceof nO)){t=!1;break}return t}function cre(e){let t=!0;for(let n of lE(e))if(n instanceof nO){t=!1;break}return t}var tO,nO,rO,iO,aO,oO,sO=o((()=>{q(),OE(),KE(),rE(),VD(),CE(),KD(),JD(),$D(),tO=class{constructor(e){this.dtype=e.dtype,this.shape=e.shape,e.shape==null?this.ndim=e.ndim:this.ndim=e.shape.length,this.maxNDim=e.maxNDim,this.minNDim=e.minNDim,this.axes=e.axes||{}}},nO=class{constructor(e,t,n,r,i,a,o){this.dtype=e,this.shape=t,this.sourceLayer=n,this.inputs=r,this.callArgs=i,this.outputTensorIndex=o,this.id=wE(),a!=null&&(this.originalName=zE(a),this.name=BE(this.originalName)),this.rank=t.length}},rO=0,iO=class{constructor(e,t){this.callArgs=t,this.id=rO++,this.outboundLayer=e.outboundLayer,this.inboundLayers=e.inboundLayers,this.nodeIndices=e.nodeIndices,this.tensorIndices=e.tensorIndices,this.inputTensors=e.inputTensors,this.outputTensors=e.outputTensors,this.inputMasks=e.inputMasks,this.outputMasks=e.outputMasks,this.inputShapes=e.inputShapes,this.outputShapes=e.outputShapes;for(let t of e.inboundLayers)t?.outboundNodes.push(this);e.outboundLayer.inboundNodes.push(this)}getConfig(){let e=[];for(let t of this.inboundLayers)t==null?e.push(null):e.push(t.name);return{outboundLayer:this.outboundLayer?this.outboundLayer.name:null,inboundLayers:e,nodeIndices:this.nodeIndices,tensorIndices:this.tensorIndices}}},aO=0,oO=class extends w_{constructor(e={}){super(),this._callHook=null,this._addedWeightNames=[],this._stateful=!1,this.id=aO++,this.activityRegularizer=null,this.inputSpec=null,this.supportsMasking=!1,this._trainableWeights=[],this._nonTrainableWeights=[],this._losses=[],this._updates=[],this._built=!1,this.inboundNodes=[],this.outboundNodes=[];let t=e.name;if(!t){let e=this.getClassName();t=uE(e)+`_`+TE(e)}if(this.name=t,this.trainable_=e.trainable==null||e.trainable,e.inputShape!=null||e.batchInputShape!=null){let t;if(e.batchInputShape!=null)t=e.batchInputShape;else if(e.inputShape!=null){let n=null;e.batchSize!=null&&(n=e.batchSize),t=[n].concat(e.inputShape)}this.batchInputShape=t;let n=e.dtype;n??=e.inputDType,n??=`float32`,this.dtype=n}e.weights==null?this.initialWeights=null:this.initialWeights=e.weights,this._refCount=null,this.fastWeightInitDuringBuild=!1}static nodeKey(e,t){return e.name+`_ib-`+t.toString()}getNodeAtIndex(e,t){if(this.inboundNodes.length===0)throw new eE(`The layer has never been called and thus has no defined ${t}.`);if(this.inboundNodes.length<=e)throw new J(`Asked to get ${t} at node ${e}, but the layer has only ${this.inboundNodes.length} inbound nodes.`);return this.inboundNodes[e]}getInputAt(e){return cE(this.getNodeAtIndex(e,`input`).inputTensors)}getOutputAt(e){return cE(this.getNodeAtIndex(e,`output`).outputTensors)}get input(){if(this.inboundNodes.length>1)throw new $T(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer input" is ill-defined. Use \`getInputAt(nodeIndex)\` instead.`);if(this.inboundNodes.length===0)throw new $T(`Layer ${this.name} is not connected, no input to return.`);return cE(this.getNodeAtIndex(0,`input`).inputTensors)}get output(){if(this.inboundNodes.length===0)throw new $T(`Layer ${this.name} has no inbound nodes.`);if(this.inboundNodes.length>1)throw new $T(`Layer ${this.name} has multiple inbound nodes, hence the notion of "layer output" is ill-defined. Use \`getOutputAt(nodeIndex)\` instead.`);return cE(this.getNodeAtIndex(0,`output`).outputTensors)}get losses(){return this._losses}calculateLosses(){return this.losses.map(e=>e())}get updates(){return this._updates}get built(){return this._built}set built(e){this._built=e}get trainable(){return this.trainable_}set trainable(e){this._trainableWeights.forEach(t=>t.trainable=e),this.trainable_=e}get trainableWeights(){return this.trainable_?this._trainableWeights.filter(e=>e.trainable):[]}set trainableWeights(e){this._trainableWeights=e}get nonTrainableWeights(){return this.trainable?this._trainableWeights.filter(e=>!e.trainable).concat(this._nonTrainableWeights):this._trainableWeights.concat(this._nonTrainableWeights)}set nonTrainableWeights(e){this._nonTrainableWeights=e}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}get stateful(){return this._stateful}resetStates(){if(!this.stateful)throw Error(`Cannot call the resetStates() method of a non-stateful Layer object.`)}assertInputCompatibility(e){let t=lE(e);if(this.inputSpec==null||this.inputSpec.length===0)return;let n=lE(this.inputSpec);if(t.length!==n.length)throw new J(`Layer ${this.name} expects ${n.length} inputs, but it received ${t.length} input tensors. Input received: ${e}`);for(let e=0;e<t.length;e++){let r=t[e],i=n[e];if(i==null)continue;let a=r.rank;if(i.ndim!=null&&a!==i.ndim)throw new J(`Input ${e} is incompatible with layer ${this.name}: expected ndim=${i.ndim}, found ndim=${a}`);if(i.maxNDim!=null&&a>i.maxNDim)throw new J(`Input ${e} is incompatible with layer ${this.name}: expected max_ndim=${i.maxNDim}, found ndim=${a}`);if(i.minNDim!=null&&a<i.minNDim)throw new J(`Input ${e} is incompatible with layer ${this.name}: expected min_ndim=${i.minNDim}, found ndim=${a}.`);if(i.dtype!=null&&r.dtype!==i.dtype)throw new J(`Input ${e} is incompatible with layer ${this.name} : expected dtype=${i.dtype}, found dtype=${r.dtype}.`);if(i.axes){let t=r.shape;for(let n in i.axes){let r=Number(n),a=i.axes[n],o=r>=0?t[r]:t[t.length+r];if(a!=null&&[a,null].indexOf(o)===-1)throw new J(`Input ${e} is incompatible with layer ${this.name}: expected axis ${r} of input shape to have value ${a} but got shape ${t}.`)}}if(i.shape!=null)for(let t=0;t<i.shape.length;++t){let n=i.shape[t],a=r.shape[t];if(n!=null&&a!=null&&n!==a)throw new J(`Input ${e} is incompatible with layer ${this.name}: expected shape=${i.shape}, found shape=${r.shape}.`)}}}call(e,t){return e}invokeCallHook(e,t){this._callHook!=null&&this._callHook(e,t)}setCallHook(e){this._callHook=e}clearCallHook(){this._callHook=null}apply(e,t){t||={},this.assertNotDisposed();let n=lE(e),r=sre(e),i=cre(e);if(r===i)throw new J(`Arguments to apply() must be all SymbolicTensors or all Tensors`);return RE(this.name,()=>{if(!this.built){this.assertInputCompatibility(e);let t=[];for(let n of lE(e))t.push(n.shape);this.build(cE(t)),this.built=!0,this.initialWeights&&this.setWeights(this.initialWeights),this._refCount===null&&i&&(this._refCount=1)}if(this.assertInputCompatibility(e),i){let r=this.call(e,t);this.supportsMasking&&this.setMaskMetadata(e,r);let i=lE(r),a=[];for(let e of i)n.indexOf(e)!==-1&&(e=e.clone()),a.push(e);if(r=cE(a),this.activityRegularizer!=null)throw new tE(`Layer invocation in the presence of activity regularizer(s) is not supported yet.`);return r}else{let n=are(e),r=this.computeOutputShape(n),i,a=ore(e);if(this.warnOnIncompatibleInputShape(Array.isArray(e)?n[0]:n),i=r!=null&&r.length>0&&Array.isArray(r[0])?r.map((n,r)=>new nO(a,n,this,lE(e),t,this.name,r)):new nO(a,r,this,lE(e),t,this.name),this.addInboundNode(e,i,null,null,n,r,t),this._refCount++,this.activityRegularizer!=null)throw new tE(`Layer invocation in the presence of activity regularizer(s) is not supported yet.`);return i}})}warnOnIncompatibleInputShape(e){if(this.batchInputShape!=null)if(e.length!==this.batchInputShape.length)console.warn(`The rank of the input tensor provided (shape: ${JSON.stringify(e)}) does not match that of the batchInputShape (${JSON.stringify(this.batchInputShape)}) of the layer ${this.name}`);else{let t=!1;this.batchInputShape.forEach((n,r)=>{n!=null&&e[r]!=null&&e[r]!==n&&(t=!0)}),t&&console.warn(`The shape of the input tensor (${JSON.stringify(e)}) does not match the expectation of layer ${this.name}: ${JSON.stringify(this.batchInputShape)}`)}}get outputShape(){if(this.inboundNodes==null||this.inboundNodes.length===0)throw new $T(`The layer ${this.name} has never been called and thus has no defined output shape.`);let e=[];for(let t of this.inboundNodes){let n=JSON.stringify(t.outputShapes);e.indexOf(n)===-1&&e.push(n)}if(e.length===1){let e=this.inboundNodes[0].outputShapes;return Array.isArray(e)&&Array.isArray(e[0])&&e.length===1?e[0]:e}else throw new $T(`The layer ${this.name} has multiple inbound nodes with different output shapes. Hence the notion of "output shape" is ill-defined for the layer.`)}countParams(){if(!this.built)throw new eE(`You tried to call countParams() on ${this.name}, but the layer is not built yet. Build it first by calling build(batchInputShape).`);return qD(this.weights)}build(e){this.built=!0}getWeights(e=!1){return YD(e?this.trainableWeights:this.weights)}setWeights(e){B(()=>{let t=this.weights;if(t.length!==e.length)throw new J(`You called setWeights(weights) on layer "${this.name}" with a weight list of length ${e.length}, but the layer was expecting ${t.length} weights. Provided weights: ${e}...`);if(t.length===0)return;let n=[],r=YD(t);for(let i=0;i<r.length;++i){let a=r[i],o=t[i],s=e[i];if(!ge(a.shape,s.shape))throw new J(`Layer weight shape ${a.shape} not compatible with provided weight shape ${s.shape}`);n.push([o,s])}XD(n)})}addWeight(e,t,n,r,i,a,o,s){if(this._addedWeightNames.indexOf(e)!==-1)throw new J(`Duplicate weight name ${e} for layer ${this.name}`);this._addedWeightNames.push(e),n??=`float32`,this.fastWeightInitDuringBuild&&(r=s==null?CD(`zeros`):s());let c=r.apply(t,n),l=new QD(c,n,e,a,o);return c.dispose(),i!=null&&this.addLoss(()=>i.apply(l.read())),a??=!0,a?this._trainableWeights.push(l):this._nonTrainableWeights.push(l),l}setFastWeightInitDuringBuild(e){this.fastWeightInitDuringBuild=e}addLoss(e){e==null||Array.isArray(e)&&e.length===0||(e=lE(e),this._losses!==void 0&&this._losses!==null&&this.losses.push(...e))}computeOutputShape(e){return e}computeMask(e,t){if(!this.supportsMasking){if(t!=null)if(Array.isArray(t))t.forEach(e=>{if(e!=null)throw TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`)});else throw TypeError(`Layer ${this.name} does not support masking, but was passed an inputMask.`);return null}return t}setMaskMetadata(e,t,n){if(!this.supportsMasking)return;let r=this.computeMask(e,n),i=lE(t),a=lE(r);if(i.length!==a.length)throw Error(`${this.name} outputs ${i.length} tensors but ${i.length} masks for those tensors`);for(let e=0;e<i.length;e++)i[e].kerasMask=a[e]}addInboundNode(e,t,n,r,i,a,o=null){let s=lE(e);t=lE(t),n=lE(n),r=lE(r),i=UD(i),a=UD(a);let c=[],l=[],u=[];for(let e of s)c.push(e.sourceLayer),l.push(e.nodeIndex),u.push(e.tensorIndex);new iO({outboundLayer:this,inboundLayers:c,nodeIndices:l,tensorIndices:u,inputTensors:s,outputTensors:t,inputMasks:n,outputMasks:r,inputShapes:i,outputShapes:a},o);for(let e=0;e<t.length;e++)t[e].sourceLayer=this,t[e].nodeIndex=this.inboundNodes.length-1,t[e].tensorIndex=e}getConfig(){let e={name:this.name,trainable:this.trainable};return this.batchInputShape!=null&&(e.batchInputShape=this.batchInputShape),this.dtype!=null&&(e.dtype=this.dtype),e}disposeWeights(){return this.weights.forEach(e=>e.dispose()),this.weights.length}assertNotDisposed(){if(this._refCount===0)throw Error(`Layer '${this.name}' is already disposed.`)}dispose(){if(!this.built)throw Error(`Cannot dispose Layer ${this.name} because it has not been built yet.`);if(this._refCount===null)throw Error(`Cannot dispose Layer ${this.name} because it has not been used yet.`);this.assertNotDisposed();let e=0;return--this._refCount===0&&(e=this.disposeWeights()),{refCountAfterDispose:this._refCount,numDisposedVariables:e}}}}));function cO(e){if(e.batchShape==null&&e.shape==null)throw Error("Please provide to Input either a `shape` or a `batchShape` argument. Note that `shape` does not include the batch dimension.");if(e.batchShape!=null&&e.shape!=null)throw new J("Please provide either a `shape` or `batchShape` argument to Input, but not both.");let t=e.batchShape;e.shape!=null&&t==null&&(t=[null].concat(e.shape));let n=e.dtype;return n??=`float32`,new lO({batchInputShape:t,name:e.name,dtype:n,sparse:e.sparse}).inboundNodes[0].outputTensors[0]}var lO,uO=o((()=>{q(),OE(),rE(),sO(),lO=class extends oO{constructor(e){if(super({dtype:e.dtype,name:e.name==null?TE(`input`).toString():e.name}),e.batchSize??=null,e.sparse??=!1,this.trainable=!1,this.built=!0,this.sparse=e.sparse,e.inputShape!=null&&e.batchInputShape!=null)throw new J(`Only provide the inputShape OR batchInputShape argument to inputLayer, not both at the same time.`);let t=e.batchInputShape;if(t==null){if(e.inputShape==null)throw new J("An InputLayer should be passed either a `batchInputShape` or an `inputShape`.");t=[e.batchSize].concat(e.inputShape)}else if(e.batchSize!=null)throw new J(`Cannot specify batchSize if batchInputShape is specified when creating an InputLayer.`);let n=e.dtype||`float32`;this.batchInputShape=t,this.dtype=n,this.inputSpec=[{shape:t}];let r=new nO(this.dtype,this.batchInputShape,this,[],{},this.name);r.nodeIndex=0,r.tensorIndex=0,new iO({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:[r],outputTensors:[r],inputMasks:[null],outputMasks:[null],inputShapes:[t],outputShapes:[t]})}apply(e,t){throw new J(`Cannot pass any input to an InputLayer's apply() method. InputLayer name: ${this.name}`)}dispose(){return{refCountAfterDispose:this._refCount,numDisposedVariables:0}}getConfig(){return{batchInputShape:this.batchInputShape,dtype:this.dtype,sparse:this.sparse,name:this.name}}},lO.className=`InputLayer`,K(lO)}));function dO(e,t){if(e.dtype==null||e.dtype===t.dtype)return t;try{return V(t,e.dtype)}catch{throw new J(`The dtype of the feed (${t.dtype}) can not be cast to the dtype of the key '${e.name}' (${e.dtype}).`)}}function fO(e){yO?.setMaxEntries(e),bO?.setMaxEntries(e)}function pO(e,t,n,r){let i=n!=null&&n.training,a=Array.isArray(e),o=a?e:[e],s=o.map(e=>e.name),c=[],l=t.names();for(let e of s)l.indexOf(e)===-1?c.push(null):c.push(t.getValue(e));r!=null&&(r.maxNumTensors=-1/0,r.minNumTensors=1/0);let u=s.join(`,`)+`|`+t.names().sort().join(`,`),d=yO.get(u),f;if(d==null){let e=mO(o,t);d=e.sorted,f=e.recipientCounts,yO.put(u,d),bO.put(u,f)}f={},i||Object.assign(f,bO.get(u));let p=new vO(t);for(let e=0;e<d.length;++e){if(r!=null){let e=Ja().numTensors;e>r.maxNumTensors&&(r.maxNumTensors=e),e<r.minNumTensors&&(r.minNumTensors=e)}let a=d[e],o=a.sourceLayer;if(o instanceof lO)continue;let l=[],u=[],m=[],h=!1;for(let e of a.inputs){let n=p.getValue(e),r=p.getMask(e);l.push(n),u.push(r),r!=null&&(h=!0),i||(f[e.name]--,f[e.name]===0&&!t.hasKey(e)&&s.indexOf(e.name)===-1&&!n.isDisposed&&e.sourceLayer.stateful!==!0&&m.push(n))}h&&(n||={},n.mask=u[0]);let g=lE(o.apply(l,n)),_=null;o.supportsMasking&&(_=o.computeMask(l,u));let v=_O(a),y=Array.isArray(v)?v:[v];for(let e=0;e<y.length;++e){p.hasKey(y[e])||p.add(y[e],g[e],Array.isArray(_)?_[0]:_);let t=s.indexOf(y[e].name);t!==-1&&(c[t]=g[e])}i||Ya(m)}return p.disposeMasks(),a?c:c[0]}function mO(e,t){E(e!=null&&e.length>0,()=>`Expected at least one fetch, got none`);let n=[],r={};if(e.length===1){let i=gO(e[0],t);n=i.sorted,r=i.recipientMap}else{let i=new Set;for(let a of e){let{sorted:e,recipientMap:o}=gO(a,t);for(let t of e)i.has(t.name)||(n.push(t),i.add(t.name));for(let e in o)r[e]??(r[e]=new Set),o[e].forEach(t=>r[e].add(t))}}return{sorted:n,recipientCounts:hO(r)}}function hO(e){let t={};for(let n in e)t[n]=e[n].size;return t}function gO(e,t){let n=new Set,r=[],i={};for(let e of t.names())n.add(e);let a=[],o=[];for(a.push(e);a.length>0;){let e=a[a.length-1];if(n.has(e.name)){a.pop();continue}let t=o[o.length-1]===a.length-1;if(e.inputs.length===0||t)a.pop(),r.push(e),n.add(e.name),t&&o.pop();else{o.push(a.length-1);for(let t of e.inputs)i[t.name]??(i[t.name]=new Set),i[t.name].add(e.name),!n.has(t.name)&&a.push(t)}}return{sorted:r,recipientMap:i}}function _O(e){let t;if(e.sourceLayer.inboundNodes.length===1)t=e.sourceLayer.output;else{let n=null;for(let t=0;t<e.sourceLayer.inboundNodes.length;++t)for(let r of e.sourceLayer.inboundNodes[t].outputTensors)if(r.id===e.id){n=t;break}t=e.sourceLayer.getOutputAt(n)}return t}var vO,yO,bO,xO=o((()=>{q(),rE(),Vne(),CE(),uO(),sO(),vO=class e{constructor(t){if(this.id2Value={},this.id2Mask={},this.name2Id={},t instanceof e)for(let e in t.id2Value)this.id2Value[e]=t.id2Value[e],e in t.id2Mask&&(this.id2Mask[e]=t.id2Mask[e]);else{if(t==null)return;for(let e of t)this.add(e.key,e.value)}}add(e,t,n){if(this.id2Value[e.id]==null)this.id2Value[e.id]=dO(e,t),this.name2Id[e.name]=e.id,n!=null&&(this.id2Mask[e.id]=n);else throw new J(`Duplicate key: name=${e.name}, id=${e.id}`);return this}addFeed(e){this.add(e.key,e.value)}hasKey(e){return this.id2Value[e.id]!=null}names(){return Object.keys(this.name2Id)}getValue(e){if(e instanceof nO){if(this.id2Value[e.id]==null)throw new J(`Nonexistent key: ${e.name}`);return this.id2Value[e.id]}else{let t=this.name2Id[e];if(t==null)throw new J(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Value[t]}}getMask(e){if(e instanceof nO){if(this.id2Value[e.id]==null)throw new J(`Nonexistent key: ${e.name}`);return this.id2Mask[e.id]}else{let t=this.name2Id[e];if(t==null)throw new J(`Feed dict has no SymbolicTensor name: ${e}`);return this.id2Mask[t]}}disposeMasks(){this.id2Mask!=null&&Ya(this.id2Mask)}},yO=new iE,bO=new iE})),SO,CO=o((()=>{q(),xO(),SO=k(),SO.registerFlag(`TOPOLOGICAL_SORT_CACHE_MAX_ENTRIES`,()=>100,fO)}));function wO(e,t){return B(()=>Pu(Ru(U(e,e),t,!0)))}function TO(e){return fE(e)}function EO(e,t={}){return mE(e,T_.getMap().classNameMap,t,`constraint`)}function DO(e){return e==null?null:typeof e==`string`?EO({className:e in NO?NO[e]:e,config:{}}):e instanceof OO?e:EO(e)}var OO,kO,AO,jO,MO,NO,PO=o((()=>{q(),tD(),CE(),OO=class extends w_{getConfig(){return{}}},kO=class extends OO{constructor(e){super(),this.defaultMaxValue=2,this.defaultAxis=0,this.maxValue=e.maxValue==null?this.defaultMaxValue:e.maxValue,this.axis=e.axis==null?this.defaultAxis:e.axis}apply(e){return B(()=>{let t=wO(e,this.axis),n=$c(t,0,this.maxValue);return U(e,rs(n,H(QE(),t)))})}getConfig(){return{maxValue:this.maxValue,axis:this.axis}}},kO.className=`MaxNorm`,K(kO),AO=class extends OO{constructor(e){super(),this.defaultAxis=0,this.axis=e.axis==null?this.defaultAxis:e.axis}apply(e){return B(()=>rs(e,H(QE(),wO(e,this.axis))))}getConfig(){return{axis:this.axis}}},AO.className=`UnitNorm`,K(AO),jO=class extends OO{apply(e){return Gp(e)}},jO.className=`NonNeg`,K(jO),MO=class extends OO{constructor(e){super(),this.defaultMinValue=0,this.defaultMaxValue=1,this.defaultRate=1,this.defaultAxis=0,this.minValue=e.minValue==null?this.defaultMinValue:e.minValue,this.maxValue=e.maxValue==null?this.defaultMaxValue:e.maxValue,this.rate=e.rate==null?this.defaultRate:e.rate,this.axis=e.axis==null?this.defaultAxis:e.axis}apply(e){return B(()=>{let t=wO(e,this.axis),n=H(U(this.rate,$c(t,this.minValue,this.maxValue)),U(1-this.rate,t));return U(e,rs(n,H(QE(),t)))})}getConfig(){return{minValue:this.minValue,maxValue:this.maxValue,rate:this.rate,axis:this.axis}}},MO.className=`MinMaxNorm`,K(MO),NO={maxNorm:`MaxNorm`,minMaxNorm:`MinMaxNorm`,nonNeg:`NonNeg`,unitNorm:`UnitNorm`}})),FO=o((()=>{PO()})),IO=o((()=>{VD()}));async function LO(e){if(e==null)return;let t=[],n=[],r=[];for(let i in e){let a=e[i];if(typeof a!=`number`){let e=a;t.push(e.data()),n.push(i),r.push(e)}}if(t.length>0){let i=await Promise.all(t);for(let t=0;t<i.length;++t)e[n[t]]=i[t][0];Ya(r)}}function RO(e){if(e!=null)for(let t in e){let n=e[t];typeof n!=`number`&&n.dispose()}}var zO=o((()=>{q()}));function BO(e,t){return e??={},e instanceof UO?[e]:Array.isArray(e)&&e[0]instanceof UO?e:lE(e).map(e=>new qO(e,t))}function VO(e,t,n,r,i,a,o,s,c){let l=new KO,u=[new GO,...JO.createCallbacks(t)];e!=null&&u.push(...e),u.push(l);let d=new WO(u);return d.setParams({epochs:n,initialEpoch:r,samples:i,steps:a,batchSize:o,verbose:t,doValidation:s,metrics:c}),{callbackList:d,history:l}}var HO,UO,WO,GO,KO,qO,JO,YO=o((()=>{q(),rE(),zO(),CE(),(function(e){e[e.SILENT=0]=`SILENT`,e[e.VERBOSE=1]=`VERBOSE`})(HO||={}),UO=class{constructor(){this.validationData=null}setParams(e){this.params=e}async onEpochBegin(e,t){}async onEpochEnd(e,t){}async onBatchBegin(e,t){}async onBatchEnd(e,t){}async onTrainBegin(e){}async onTrainEnd(e){}setModel(e){}},WO=class{constructor(e,t=10){e??=[],this.callbacks=e,this.queueLength=t}append(e){this.callbacks.push(e)}setParams(e){for(let t of this.callbacks)t.setParams(e)}setModel(e){for(let t of this.callbacks)t.setModel(e)}async onEpochBegin(e,t){t??={};for(let n of this.callbacks)await n.onEpochBegin(e,t)}async onEpochEnd(e,t){t??={};for(let n of this.callbacks)await n.onEpochEnd(e,t)}async onBatchBegin(e,t){t??={};for(let n of this.callbacks)await n.onBatchBegin(e,t)}async onBatchEnd(e,t){t??={};for(let n of this.callbacks)await n.onBatchEnd(e,t)}async onTrainBegin(e){e??={};for(let t of this.callbacks)await t.onTrainBegin(e)}async onTrainEnd(e){e??={};for(let t of this.callbacks)await t.onTrainEnd(e)}},GO=class extends UO{constructor(){super()}async onEpochBegin(e){this.seen=0,this.totals={}}async onBatchEnd(e,t){t??={};let n=t.size==null?0:t.size;this.seen+=n;for(let e in t){let r=t[e];if(typeof r==`number`)this.totals.hasOwnProperty(e)||(this.totals[e]=0),this.totals[e]=this.totals[e]+r*n;else{let t;e in this.totals?t=this.totals[e]:this.totals[e]=0;let i=B(()=>H(this.totals[e],U(r,n)));this.totals[e]=i,t?.dispose()}}}async onEpochEnd(e,t){if(t!=null)for(let e of this.params.metrics)this.totals[e]!=null&&(typeof this.totals[e]==`number`?t[e]=this.totals[e]/this.seen:B(()=>{t[e]=U(rs(1,this.seen),this.totals[e]),this.totals[e].dispose(),Xa(t[e])}))}},KO=class extends UO{async onTrainBegin(e){this.epoch=[],this.history={}}async onEpochEnd(e,t){t??={},this.epoch.push(e);for(let e in t)this.history[e]??(this.history[e]=[]),this.history[e].push(t[e])}async syncData(){let e=[],t=[],n=[];for(let r in this.history){let i=this.history[r];for(let a=0;a<i.length;++a)if(typeof i[a]!=`number`){let o=i[a];e.push(o.data()),t.push(r),n.push(a)}}let r=await Promise.all(e);for(let e=0;e<r.length;++e)this.history[t[e]][n[e]].dispose(),this.history[t[e]][n[e]]=r[e][0]}},qO=class extends UO{constructor(e,t){if(super(),this.currentEpoch=0,this.nowFunc=e.nowFunc,this.nextFrameFunc=e.nextFrameFunc||Wv,this.yieldEvery=t||`auto`,this.yieldEvery===`auto`&&(this.yieldEvery=125),this.yieldEvery===`never`&&e.onYield!=null)throw Error("yieldEvery is `never` but you provided an `onYield` callback. Either change `yieldEvery` or remove the callback");je(this.yieldEvery)&&(this.maybeWait=Wne(this.maybeWait.bind(this),this.yieldEvery,this.nowFunc)),this.trainBegin=e.onTrainBegin,this.trainEnd=e.onTrainEnd,this.epochBegin=e.onEpochBegin,this.epochEnd=e.onEpochEnd,this.batchBegin=e.onBatchBegin,this.batchEnd=e.onBatchEnd,this.yield=e.onYield}async maybeWait(e,t,n){let r=[];this.yield!=null&&(await LO(n),r.push(this.yield(e,t,n))),r.push(this.nextFrameFunc()),await Promise.all(r)}async onEpochBegin(e,t){this.currentEpoch=e,this.epochBegin!=null&&(await LO(t),await this.epochBegin(e,t))}async onEpochEnd(e,t){let n=[];this.epochEnd!=null&&(await LO(t),n.push(this.epochEnd(e,t))),this.yieldEvery===`epoch`&&n.push(this.nextFrameFunc()),await Promise.all(n)}async onBatchBegin(e,t){this.batchBegin!=null&&(await LO(t),await this.batchBegin(e,t))}async onBatchEnd(e,t){let n=[];this.batchEnd!=null&&(await LO(t),n.push(this.batchEnd(e,t))),this.yieldEvery===`batch`?n.push(this.nextFrameFunc()):je(this.yieldEvery)&&n.push(this.maybeWait(this.currentEpoch,e,t)),await Promise.all(n)}async onTrainBegin(e){this.trainBegin!=null&&(await LO(e),await this.trainBegin(e))}async onTrainEnd(e){this.trainEnd!=null&&(await LO(e),await this.trainEnd(e))}},JO=class e{constructor(){}static registerCallbackConstructor(t,n){E(t>=0&&Number.isInteger(t),()=>`Verbosity level is expected to be an integer >= 0, but got ${t}`),e.checkForDuplicate(n),e.constructors[t]??(e.constructors[t]=[]),e.constructors[t].push(n)}static checkForDuplicate(t){for(let n in e.constructors)e.constructors[+n].forEach(e=>{if(e===t)throw new J(`Duplicate callback constructor.`)})}static clear(){e.constructors={}}static createCallbacks(t){let n=[];for(let r in e.constructors){let i=+r;t>=i&&n.push(...e.constructors[i])}return n.map(e=>new e)}},JO.constructors={}}));function XO(e,t={},n=!1){return mE(e,T_.getMap().classNameMap,t,`layer`,n)}var ZO=o((()=>{q(),CE()}));function QO(e,t){return B(()=>{e.dtype!==`float32`&&(e=V(e,`float32`));let n=Ru(pD(e),t,!0),r=Xc(n.shape,QE()),i=Pu(Tf(n,r));return rs(e,i)})}function $O(e,t){return B(()=>Of(pD(Xd(t,e)),-1))}function ek(e,t){return B(()=>Of(cs(Xd(t,e)),-1))}function tk(e,t){return B(()=>{let n=Xd(e,t),r=$c(cs(e),QE(),Number.MAX_VALUE),i=cs(rs(n,r));return U(100,Of(i,-1))})}function nk(e,t){return B(()=>{let n=$c(t,QE(),Number.MAX_VALUE),r=Md(H(1,n)),i=$c(e,QE(),Number.MAX_VALUE),a=Md(H(1,i));return Of(pD(Xd(r,a)),-1)})}function rk(e,t){return B(()=>{let n=Tf(0,Xd(1,U(e,t)));return Of(pD(n),-1)})}function ik(e,t){return B(()=>{let n=Tf(0,Xd(1,U(e,t)));return Of(n,-1)})}function ak(e,t){return B(()=>{let n=Ru(U(e,t),-1),r=Eu(U(Xd(1,e),t),-1);return Tf(0,H(1,Xd(r,n)))})}function ok(e,t){return B(()=>{let n=Math.log(2),r=Xd(t,e),i=Xd(H(r,Wd(U(-2,r))),n);return Of(i,-1)})}function sk(e,t,n=!1){return B(()=>{if(n)t=Nm(t);else{let e=Ru(t,t.shape.length-1,!0);t=rs(t,e)}return t=$c(t,QE(),1-QE()),Vd(Ru(U(V(e,`float32`),Md(t)),t.shape.length-1))})}function ck(e,t,n=!1){return B(()=>{let r=V(ed(Yne(e)),`int32`);t=$c(t,QE(),1-QE());let i=t.shape;return sk(W(Xf(r,i[i.length-1]),i),t,n)})}function lk(e,t){if(!ge(e.shape,t.shape))throw new J(`logits and labels must have the same shape, but got shapes ${JSON.stringify(e.shape)} and ${JSON.stringify(t.shape)}`);return B(()=>{let n=Gp(t),r=Vd(cs(t));return H(Xd(n,U(t,e)),Fd(Gu(r)))})}function uk(e,t){return B(()=>{let n;return n=$c(t,QE(),1-QE()),n=Md(rs(n,Xd(1,n))),Of(lk(e,n),-1)})}function dk(e,t){return B(()=>{let n=$c(e,QE(),1),r=$c(t,QE(),1);return Ru(U(e,Md(rs(n,r))),-1)})}function fk(e,t){return B(()=>{let n=Md(H(QE(),t));return Of(Xd(t,U(e,n)),-1)})}function pk(e,t){return B(()=>{let n=QO(e,-1),r=QO(t,-1),i=U(n,r);return Vd(Ru(i,-1))})}function mk(e){if(typeof e==`string`){if(e in hk)return hk[e];let t=`Unknown loss ${e}`;throw e.toLowerCase().includes(`softmaxcrossentropy`)&&(t=`Unknown loss ${e}. Use "categoricalCrossentropy" as the string name for tf.losses.softmaxCrossEntropy`),new J(t)}else return e}var hk,gk=o((()=>{q(),tD(),vD(),rE(),hk={meanSquaredError:$O,meanAbsoluteError:ek,meanAbsolutePercentageError:tk,meanSquaredLogarithmicError:nk,squaredHinge:rk,hinge:ik,categoricalHinge:ak,logcosh:ok,categoricalCrossentropy:sk,sparseCategoricalCrossentropy:ck,binaryCrossentropy:uk,kullbackLeiblerDivergence:dk,poisson:fk,cosineProximity:pk}}));function _k(e,t){return B(()=>{let n=U(.5,$f(t)),r=nD(id(t,n),e.dtype);return Of(tu(e,r),-1)})}function vk(e,t){return B(()=>nD(tu(Cs(e,-1),Cs(t,-1)),`float32`))}function yk(e,t){return B(()=>V(Ru(of(tu(e,1),tu(t,1))),`float32`))}function bk(e,t){return B(()=>V(Ru(of(tu(e,0),tu(t,1))),`float32`))}function xk(e,t){return B(()=>{let n=yk(e,t),r=bk(e,t),i=H(n,r);return V(iu(id(i,0),rs(n,i),0),`float32`)})}function Sk(e,t){return uk(e,t)}function Ck(e,t){return e.rank===t.rank&&(e=eh(e,[e.rank-1])),t=Cs(t,-1),t.dtype!==e.dtype&&(t=V(t,e.dtype)),V(tu(e,t),`float32`)}function wk(e){if(typeof e==`string`&&e in Fk)return Fk[e];if(typeof e!=`string`&&e!=null)return e;throw new J(`Unknown metric ${e}`)}function Tk(e){if(oE(e!==null,`Unknown LossOrMetricFn ${e}`),typeof e==`string`)return e;{let t;for(let n of Object.keys(hk))if(hk[n]===e){t=n;break}if(t!==void 0)return t;for(let n of Object.keys(Fk))if(Fk[n]===e){t=n;break}return t===void 0?e.name:t}}var Ek,Dk,Ok,kk,Ak,jk,Mk,Nk,Pk,Fk,Ik=o((()=>{q(),vD(),rE(),gk(),CE(),Ek=$O,Dk=$O,Ok=ek,kk=ek,Ak=tk,jk=tk,Mk=sk,Nk=pk,Pk=ck,Fk={binaryAccuracy:_k,categoricalAccuracy:vk,precision:xk,categoricalCrossentropy:Mk,sparseCategoricalCrossentropy:Pk,mse:Ek,MSE:Dk,mae:Ok,MAE:kk,mape:Ak,MAPE:jk,cosine:Nk}}));function Lk(e){let t={Adagrad:()=>Hv.adagrad(.01),Adadelta:()=>Hv.adadelta(1,.95,QE()),Adam:()=>Hv.adam(.001,.9,.999,QE()),Adamax:()=>Hv.adamax(.002,.9,.999,QE(),0),RMSProp:()=>Hv.rmsprop(.001,.9,0,QE()),SGD:()=>Hv.sgd(.01)};if(t.adagrad=t.Adagrad,t.adadelta=t.Adadelta,t.adam=t.Adam,t.adamax=t.Adamax,t.rmsprop=t.RMSProp,t.sgd=t.SGD,e in t)return t[e]();throw new J(`Unknown Optimizer ${e}`)}var Rk=o((()=>{q(),tD(),rE()}));function zk(e,t,n=!1){if(typeof e!=`object`||!e||Object.getPrototypeOf(e)!==Object.prototype||!Bk(e))throw Error(`User-defined metadata is expected to be a JSON object, but is not.`);if(n){let n=JSON.stringify(e);n.length>1048576&&console.warn(`User-defined metadata of model "${t}" is too large in size (length=${n.length} when serialized). It is not recommended to store such large objects in user-defined metadata. Please make sure its serialized length is <= ${Vk}.`)}}function Bk(e){if(e===null)return!0;if(typeof e==`object`)if(Object.getPrototypeOf(e)===Object.prototype){let t=Object.keys(e);for(let n of t)if(typeof n!=`string`||!Bk(e[n]))return!1;return!0}else if(Array.isArray(e)){for(let t of e)if(!Bk(t))return!1;return!0}else return!1;else{let t=typeof e;return t===`string`||t===`number`||t===`boolean`}}var Vk,Hk=o((()=>{Vk=1*1024*1024}));function Uk(e,t,n,r=console.log){let i=Gk(e),a=[`Layer (type)`,`Input Shape`,`Output shape`,`Param #`];i?(t||=90,n||=[.32,.61,.89,1]):(t||=115,n||=[.24,.48,.7,.8,1]),n[n.length-1]<=1&&(n=n.map(e=>Math.floor(t*e)));let o;if(!i){a.push(`Receives inputs`),o=[];for(let t in e.nodesByDepth)o.push(...e.nodesByDepth[t])}r(`_`.repeat(t)),Kk(a,n,r),r(`=`.repeat(t));let s=e.layers;for(let e=0;e<s.length;++e)i?qk(s[e],n,r):Jk(s[e],n,o,r),r((e===s.length-1?`=`:`_`).repeat(t));e.checkTrainableWeightsConsistency();let c=Wk(e),l=qD(e.nonTrainableWeights);r(`Total params: ${c+l}`),r(`Trainable params: ${c}`),r(`Non-trainable params: ${l}`),r(`_`.repeat(t))}function Wk(e){let t;return t=e.collectedTrainableWeights==null?qD(e.trainableWeights):qD(e.collectedTrainableWeights),t}function Gk(e){let t=!0,n=[],r=[];for(let t in e.nodesByDepth)n.push(e.nodesByDepth[t]);for(let e of n){if(e.length>1||e.length===1&&e[0].inboundLayers.length>1){t=!1;break}r.push(...e)}if(t)for(let n of e.layers){let e=!1;for(let i of n.inboundNodes)if(r.indexOf(i)!==-1)if(e){t=!1;break}else e=!0;if(!t)break}return t}function Kk(e,t,n=console.log){let r=``;for(let n=0;n<e.length;++n)n>0&&(r=r.slice(0,r.length-1)+` `),r+=e[n],r=r.slice(0,t[n]),r+=` `.repeat(t[n]-r.length);n(r)}function qk(e,t,n){let r,i;try{i=e.inboundNodes.map(e=>JSON.stringify(e.inputShapes)).join(`,`)}catch{i=`multiple`}try{r=JSON.stringify(e.outputShape)}catch{r=`multiple`}Kk([`${e.name} (${e.getClassName()})`,i,r,e.countParams().toString()],t,n)}function Jk(e,t,n,r){let i,a;try{a=e.inboundNodes.map(e=>JSON.stringify(e.inputShapes)).join(`,`)}catch{a=`multiple`}try{i=JSON.stringify(e.outputShape)}catch{i=`multiple`}let o=[];for(let t of e.inboundNodes)if(!(n!=null&&n.length>0&&n.indexOf(t)===-1))for(let e=0;e<t.inboundLayers.length;++e){let n=t.inboundLayers[e].name,r=t.nodeIndices[e],i=t.tensorIndices[e];o.push(`${n}[${r}][${i}]`)}let s=e.name,c=e.getClassName(),l=o.length===0?``:o[0];Kk([`${s} (${c})`,a,i,e.countParams().toString(),l],t,r);for(let e=1;e<o.length;++e)Kk([``,``,``,``,o[e]],t,r)}var Yk=o((()=>{JD()}));function Xk(e,t,n){return(e===`inboundNodes`||e===`outputLayers`||e===`inputLayers`)&&t===0&&typeof n==`string`}function Zk(e,t){if(e===null)return null;if(typeof e==`string`)return dE(e);if(typeof e==`number`||typeof e==`boolean`)return e;if(e instanceof Array){let n=[],r=e.length;for(let i=0;i<r;++i){let r=e[i];Xk(t,i,r)?n.push(r):n.push(Zk(r,t))}return n}else{let t={};for(let n of Object.keys(e)){let r=e[n];if(n===`name`&&typeof r==`string`)t[n]=r;else{let e=dE(n);t[e]=Zk(r,e)}}return t}}function Qk(e,t){if(e==null)return null;if(typeof e==`string`)return uE(e);if(typeof e==`number`||typeof e==`boolean`)return e;if(e instanceof Array){let n=[],r=e.length;for(let i=0;i<r;++i){let r=e[i];Xk(t,i,r)?n.push(r):n.push(Qk(r,t))}return n}else{let t={};for(let n of Object.keys(e)){let r=e[n],i=uE(n);(n===`name`||n===`className`)&&typeof r==`string`?t[i]=r:t[i]=Qk(r,n)}return t}}var $k=o((()=>{CE()})),eA,tA=o((()=>{eA=`4.22.0`})),nA,rA,iA=o((()=>{q(),OE(),rE(),ZO(),CE(),$k(),KD(),$D(),tA(),xO(),uO(),sO(),nA=e=>{let t=Object.keys(e);if(t.length===0)return!1;let n=t[0].split(`/`);return!isNaN(parseInt(n[n.length-1],10))},rA=class e extends oO{constructor(t){if(super({}),this.containerNodes=new Set,this.name=t.name,this.name==null){let e=this.getClassName().toLowerCase();this.name=TE(e)}if(this.supportsMasking=!1,this.trainable_=!0,Array.isArray(t.inputs)?this.inputs=t.inputs.slice():this.inputs=[t.inputs],Array.isArray(t.outputs)?this.outputs=t.outputs.slice():this.outputs=[t.outputs],gE(this.inputs).length!==this.inputs.length)throw new J(`The list of inputs passed to the model is redundant. All inputs should only appear once. Found: ${this.inputs.map(e=>e.name)}`);gE(this.outputs).length!==this.outputs.length&&console.warn(`The list of outputs passed to the model is redundant. All outputs should only appear once. Found: ${this.outputs.map(e=>e.name)}`),this.inputLayers=[],this.inputLayersNodeIndices=[],this.inputLayersTensorIndices=[],this.outputLayers=[],this.outputLayersNodeIndices=[],this.outputLayersTensorIndices=[],this.layers=[],this.internalContainerRefs=[];for(let e of this.outputs){let t=e.sourceLayer,n=e.nodeIndex,r=e.tensorIndex;this.outputLayers.push(t),this.outputLayersNodeIndices.push(n),this.outputLayersTensorIndices.push(r)}for(let e of this.inputs){let t=e.sourceLayer,n=e.nodeIndex,r=e.tensorIndex;oE(n===0,`input layer has >1 nodes`),oE(r===0,`input layer has >1 tensors`),this.inputLayers.push(t),this.inputLayersNodeIndices.push(n),this.inputLayersTensorIndices.push(r)}this.inputNames=[],this.outputNames=[],this.feedInputShapes=[],this.feedInputNames=[],this.feedOutputNames=[];for(let e=0;e<this.inputLayers.length;e++){let n=this.inputLayers[e];if(!(n instanceof lO))throw TypeError(`Input layers to a LayersModel must be InputLayer objects. Received inputs: ${t.inputs}. Input ${e} (0-based) originates from layer type ${n.getClassName()}.`);this.inputNames.push(n.name),this.feedInputShapes.push(n.batchInputShape),this.feedInputNames.push(n.name)}for(let e of this.outputLayers)this.outputNames.push(e.name);this.internalInputShapes=this.inputs.map(e=>e.shape),this.internalOutputShapes=this.outputs.map(e=>e.shape);let n={},r={},i={},a={},o={},s=[],c=(t,n,r,i,a,l)=>{(i==null||a==null||l==null)&&(i=t.sourceLayer,a=t.nodeIndex,l=t.tensorIndex);let u=i.inboundNodes[a];if(r.indexOf(u)!==-1)throw new eE(`The tensor ${t.name} at layer "${i.name}" is part of a cycle.`);if(n.indexOf(u)!==-1)return;this.containerNodes.add(e.nodeKey(i,a)),i.id in o||(o[i.id]=Object.keys(o).length),r.indexOf(u)===-1&&r.push(u);let d=u.inboundLayers.length;for(let e=0;e<d;e++){let t=u.inputTensors[e],i=u.inboundLayers[e],a=u.nodeIndices[e],o=u.tensorIndices[e];c(t,n,r,i,a,o)}for(n.push(u);r.indexOf(u)>=0;)r.splice(r.indexOf(u),1);s.push(u)},l=[],u=[];for(let e of this.outputs)c(e,l,u);let d=s.slice().reverse();for(let e of d){r[e.id]=e,e.id in n||(n[e.id]=0);let t=n[e.id],o=i[e.outboundLayer.id]==null?0:i[e.outboundLayer.id];t=Math.max(t,o),i[e.outboundLayer.id]=t,a[e.outboundLayer.id]=e.outboundLayer,n[e.id]=t;for(let i=0;i<e.inboundLayers.length;i++){let a=e.inboundLayers[i],o=e.nodeIndices[i],s=a.inboundNodes[o],c=n[s.id]==null?0:n[s.id];n[s.id]=Math.max(t+1,c),r[s.id]=s}}let f={};for(let e in n){let t=n[e];t in f||(f[t]=[]),f[t].push(r[e])}let p={};for(let e in i){let t=i[e];t in p||(p[t]=[]),p[t].push(a[e])}let m=Object.keys(p).map(e=>parseInt(e,10)).sort(hE);this.layers=[];for(let t of m){let n=p[t];n.sort((e,t)=>{let n=o[e.id],r=o[t.id];return n<r?-1:+(n>r)});for(let t of n)t instanceof e&&this.internalContainerRefs.push(t),this.layers.push(t)}this.layersByDepth=p,m=Object.keys(f).map(e=>parseInt(e,10)).sort(hE);let h=this.inputs.slice(),g=[];for(let e of m)for(let t of f[e]){let e=t.outboundLayer;if(e!=null){for(let n of t.inputTensors)if(h.indexOf(n)===-1)throw new eE(`Graph disconnected: cannot obtain value for tensor ${n} at layer "${e.name}". The following previous layers were accessed without issue: ${g}`);for(let e of t.outputTensors)h.push(e);g.push(e.name)}}this.nodesByDepth=f;let _=this.layers.map(e=>e.name);for(let e of _){let t=_.filter(t=>t===e).length;if(t!==1)throw new eE(`The name "${e}" is used ${t} times in the model. All layer names should be unique. Layer names: `+JSON.stringify(_))}this.outboundNodes=[],this.inboundNodes=[],new iO({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:this.inputs.map(e=>null),outputMasks:this.outputs.map(e=>null),inputShapes:this.inputs.map(e=>e.shape),outputShapes:this.outputs.map(e=>e.shape)}),this.built=!0,this._refCount=1}assertNotDisposed(){if(this._refCount===0)throw Error(`Container '${this.name}' is already disposed.`)}dispose(){this.assertNotDisposed();let e={refCountAfterDispose:null,numDisposedVariables:0};if(--this._refCount===0){for(let t of this.layers)e.numDisposedVariables+=t.dispose().numDisposedVariables;for(let t of this.internalContainerRefs)e.numDisposedVariables+=t.dispose().numDisposedVariables}return e.refCountAfterDispose=this._refCount,e}get trainable(){return this.trainable_}set trainable(e){this.layers.forEach(t=>{t._trainableWeights.forEach(t=>t.trainable=e)}),this.trainable_=e}get trainableWeights(){if(this._trainableWeights.length>0)throw new J(`Container instance unexpectedly contains _trainableWeights.The trainable weights of a Container are a union of the trainable weights of its consituent Layers. Its own _trainableWeights must remain an empty Array.`);if(!this.trainable)return[];let e=[];for(let t of this.layers)e=e.concat(t.trainableWeights);return e}get nonTrainableWeights(){let e=[];for(let t of this.layers)e.push(...t.nonTrainableWeights);if(!this.trainable){let t=[];for(let e of this.layers)t.push(...e.trainableWeights);return t.concat(e)}return e}get weights(){return this.trainableWeights.concat(this.nonTrainableWeights)}loadWeights(e,t=!0){let n={},r=0,i=nA(e);i&&this.parseWeights(e);for(let e of this.layers)for(let[t,a]of e.weights.entries()){let e=i?`${a.name.split(`/`).slice(0,-1).join(`/`)+`/`}${t}`:a.originalName;if(n[e]!=null)throw new J(`Duplicate weight name: ${e}`);n[e]=a,r++}let a=[];for(let r in e){let i=r;if(n[r]==null){let e=r.split(`/`);i=e.slice(0,-2).concat([e[e.length-1]]).join(`/`)}if(n[i]!=null)a.push([n[i],e[r]]);else if(t)throw new J(`Provided weight data has no target variable: ${r}`);delete n[i]}if(t){let e=[];for(let t in n)e.push(t);if(e.length>0)throw new J(`${e.length} of ${r} weights are not set: ${e}`)}XD(a)}parseWeights(e){for(let t in Object.keys(e)){let n=t.split(`/`),r=[`vars`,`layer_checkpoint_dependencies`],i=n.map(e=>e.startsWith(`_`)?e.slice(1):e).filter(e=>!r.includes(e)).join(`/`);i!==t&&(e[i]=e[t],delete e[t])}}updatedConfig(){let e=this.getConfig(),t={};return t.className=this.getClassName(),t.config=e,t.kerasVersion=`tfjs-layers ${eA}`,t.backend=`TensorFlow.js`,t}toJSON(e,t=!0){let n=Qk(this.updatedConfig());return t?JSON.stringify(n):n}call(e,t){return B(()=>{e=lE(e);let n=new vO;for(let t=0;t<this.inputs.length;++t)n.add(this.inputs[t],e[t]);return pO(this.outputs,n,t)})}computeMask(e,t){return B(()=>{e=lE(e);let n;return n=t==null?aE(null,e.length):lE(t),this.runInternalGraph(e,n)[1]})}computeOutputShape(e){let t=UD(e);if(t.length!==this.inputLayers.length)throw new J(`Invalid inputShape argument ${e}: model has ${this.inputLayers.length} tensor inputs.`);let n={};for(let e=0;e<t.length;e++){let r=this.inputLayers[e],i=t[e],a=r.name+`_0_0`;n[a]=i}let r=Object.keys(this.nodesByDepth).map(e=>parseInt(e,10)).sort(hE);if(r.length>1)for(let e of r){let t=this.nodesByDepth[e];for(let e of t){let t=e.outboundLayer;if(this.inputLayers.map(e=>e.id).indexOf(t.id)!==-1)continue;let r=[];for(let t=0;t<e.inboundLayers.length;t++){let i=e.inboundLayers[t],a=e.nodeIndices[t],o=e.tensorIndices[t],s=n[`${i.name}_${a}_${o}`];r.push(s)}let i=UD(t.computeOutputShape(cE(r))),a=t.inboundNodes.indexOf(e);for(let e=0;e<i.length;e++){let r=`${t.name}_${a}_${e}`;n[r]=i[e]}}}let i=[],a=[];for(let e=0;e<this.outputLayers.length;e++){let t=this.outputLayers[e],n=this.outputLayersNodeIndices[e],r=this.outputLayersTensorIndices[e],i=`${t.name}_${n}_${r}`;a.push(i)}for(let e=0;e<a.length;e++){let t=a[e];oE(t in n),i.push(n[t])}return cE(i)}runInternalGraph(e,t){t??=aE(null,e.length);let n={};for(let r=0;r<this.inputs.length;++r){let i=this.inputs[r],a=e[r],o=t[r];n[i.id]=[a,o]}let r=Object.keys(this.nodesByDepth).map(e=>parseInt(e,10)).sort(hE);for(let e of r){let t=this.nodesByDepth[e];for(let e of t){let t=e.outboundLayer,r=e.inputTensors,i=e.outputTensors,a=[];for(let e of r)e.id in n&&a.push(n[e.id]);if(a.length===r.length){let r={},o,s,c,l;if(e.callArgs!=null&&(r=e.callArgs),a.length===1){let[e,n]=a[0];r.mask??=n,c=lE(t.call(e,r)),l=lE(t.computeMask(e,n)),o=[e],s=[n]}else o=a.map(e=>e[0]),s=a.map(e=>e[1]),r.mask??=s,c=lE(t.call(o,r)),l=lE(t.computeMask(o,s));if(t.activityRegularizer)throw new tE(`LayersModel invocation with concrete Tensor value(s) in the presence of activity regularizer(s) is not supported yet.`);for(let e=0;e<i.length;++e){let t=i[e],r=c[e],a=l[e];n[t.id]=[r,a]}}}}let i=[],a=[],o=[];for(let e of this.outputs){oE(e.id in n,`Could not compute output ${e.name} : ${e.id}`);let[t,r]=n[e.id];o.push(t.shape),i.push(t),a.push(r)}return[i,a,o]}buildNodeConversionMap(t){let n={},r;for(let t of this.layers){r=+(t instanceof e);for(let i=0;i<t.inboundNodes.length;i++){let a=e.nodeKey(t,i);this.containerNodes.has(a)&&(n[a]=r,r+=1)}}return n}getLayer(e,t){if(t!=null)return this.findLayer(t);if(e==null)throw new J(`Provide either a layer name or layer index`);if(typeof e==`number`)return this.findLayer(e);for(let t of this.layers)if(t.name===e)return t;throw new J(`No such layer: ${e}`)}findLayer(e){if(this.layers.length<=e)throw new J(`Was asked to retrieve layer at index ${e}, but model only has ${this.layers.length} layer(s).`);return this.layers[e]}calculateLosses(){return B(()=>{let t=[];for(let n of this.layers)for(let r=0;r<n.inboundNodes.length;++r){let i=e.nodeKey(n,r);this.containerNodes.has(i)&&t.push(...n.calculateLosses())}return t})}getConfig(){let t={name:this.name},n=this.buildNodeConversionMap(this.layers),r=[];for(let t of this.layers){let i=t.getClassName(),a=t.getConfig(),o=[];for(let r=0;r<t.inboundNodes.length;r++){let i=t.inboundNodes[r],a=e.nodeKey(t,r),s={};if(this.containerNodes.has(a)){if(i.callArgs)try{JSON.stringify(i.callArgs),s=i.callArgs}catch{console.warn(`Layer ${t.name} was passed non-serializable keyword arguments: ${i.callArgs}. They will not be included in the serialized model (and thus will be missing at deserialization time).`),s={}}if(i.inboundLayers.length>0){let t=[];for(let r=0;r<i.inboundLayers.length;r++){let a=i.inboundLayers[r],o=i.nodeIndices[r],c=i.tensorIndices[r],l=n[e.nodeKey(a,o)];l??=0,t.push([a.name,l,c,s])}o.push(t)}}}let s={};s.name=t.name,s.className=i,s.config=a,s.inboundNodes=o,r.push(s)}t.layers=r;let i=[];for(let t=0;t<this.inputLayers.length;t++){let r=this.inputLayers[t],a=this.inputLayersNodeIndices[t],o=e.nodeKey(r,a);if(!this.containerNodes.has(o))continue;let s=n[o];s??=0;let c=this.inputLayersTensorIndices[t];i.push([r.name,s,c])}t.inputLayers=i;let a=[];for(let t=0;t<this.outputLayers.length;t++){let r=this.outputLayers[t],i=this.outputLayersNodeIndices[t],o=e.nodeKey(r,i);if(!this.containerNodes.has(o))continue;let s=n[o];s??=0;let c=this.outputLayersTensorIndices[t];a.push([r.name,s,c])}return t.outputLayers=a,t}static fromConfig(e,t,n={},r=!1){let i={},a={};function o(e,t){e.name in a?a[e.name].push(t):a[e.name]=[t]}function s(e,t){let n=[],r;for(let a of t){let s=a[0],c=a[1],l=a[2];if(r=a[3]==null?{}:a[3],!(s in i)){o(e,t);return}let u=i[s];if(u.inboundNodes.length<=c){o(e,t);return}let d=u.inboundNodes[c];n.push(d.outputTensors[l])}n.length>0&&e.apply(cE(n),r)}function c(e){let n=e.name,a=XO(e,t.customObjects==null?{}:t.customObjects);a.setFastWeightInitDuringBuild(r),i[n]=a,e.inboundNodes.forEach(e=>{if(!(e instanceof Array))throw new J(`Corrupted configuration, expected array for nodeData: ${e}`);o(a,e)})}let l=t.name,u=t.layers;for(let e of u)c(e);for(;!Une(a);)for(let e of u){let t=i[e.name];if(t.name in a){let e=a[t.name];delete a[t.name];for(let n of e)s(t,n)}}let d=[],f=[],p=t.inputLayers;for(let e of p){let t=e[0],n=e[1],r=e[2];oE(t in i);let a=i[t].inboundNodes[n].outputTensors;d.push(a[r])}let m=t.outputLayers;for(let e of m){let t=e[0],n=e[1],r=e[2];oE(t in i);let a=i[t].inboundNodes[n].outputTensors;f.push(a[r])}return new e({inputs:d,outputs:f,name:l})}get stateful(){if(this._stateful)throw new J(`Container instance unexpectedly has _stateful = true. The statefulness of a Container is determined by the Layers it contains. Its _stateful property must remain the default false.`);for(let e of this.layers)if(e.stateful)return!0;return!1}resetStates(){B(()=>{this.layers.forEach(e=>{e.stateful&&e.resetStates()})})}}}));function aA(e,t,n){let r=t.length;if(e==null||Array.isArray(e)&&e.length===0)return t.map(e=>null);if(r===1)return Array.isArray(e)&&e.length===1?e:typeof e==`object`&&t[0]in e?[e[t[0]]]:[e];if(Array.isArray(e)){if(e.length!==r)throw Error(`Provided ${n} is an array of ${e.length} element(s), but the model has ${r} outputs. Make sure a set of weights is provided for each model output.`);return e}else if(typeof e==`object`&&Object.keys(e).length>0&&typeof e[Object.keys(e)[0]]==`object`){let n=[];return t.forEach(t=>{t in e?n.push(e[t]):n.push(null)}),n}else throw Error(`The model has multiple (${r}) outputs, so ${n} must be either an array with ${r} elements or an object with ${t} keys. Provided ${n} not understood: ${JSON.stringify(e)}`)}function oA(e,t){return aA(e,t,`classWeight`)}async function sA(e,t,n,r){if(t!=null||r!=null)throw Error(`Support sampleWeight is not implemented yet`);if(n!=null){let t=B(()=>{if(e.shape.length===1)return Zo(e);if(e.shape.length===2){if(e.shape[1]>1)return Cs(e,1);if(e.shape[1]===1)return W(e,[e.shape[0]]);throw Error(`Encountered unexpected last-dimension size (${e.shape[1]}) during handling of class weights. The size is expected to be >= 1.`)}else throw Error(`Unexpected rank of target (y) tensor (${e.rank}) during handling of class weights. The rank is expected to be 1 or 2.`)}),r=Array.from(await t.data());Ya(t);let i=[];return r.forEach(e=>{if(n[e]==null)throw Error(`classWeight must contain all classes in the training data. The class ${e} exists in the data but not in classWeight`);i.push(n[e])}),mh(i,`float32`)}else return null}function cA(e,t){return U(e,t)}var lA=o((()=>{q()}));function uA(e,t){let n,r,i=t;n=i.xs,r=i.ys,E(n!=null&&r!=null,()=>`A Dataset iterator for fitDataset() is expected to generate objects of the form \`{xs: xVal, ys: yVal}\`, where the two values may be \`tf.Tensor\`, an array of Tensors, or a map of string to Tensor.  The provided Dataset instead generates ${t}`);let a=dA(`input`,e.inputNames,n),o=dA(`output`,e.outputNames,r),s=a[0].shape[0];E(a.length===e.inputs.length,()=>`LayersModel has ${e.inputs.length} inputs, but the dataset provides ${a.length} inputs.  (Expected input keys: ${JSON.stringify(e.inputNames)})`),E(o.length===e.outputs.length,()=>`LayersModel has ${e.outputs.length} outputs, but the dataset provides ${o.length} outputs.  (Expected output keys: ${JSON.stringify(e.outputNames)})`);for(let t=0;t<a.length;t++)E(a[t].shape[0]===s,()=>`Batch size mismatch: input ${e.inputNames[t]} has ${a[t].shape[0]}; expected  ${s} based on input ${e.inputNames[0]}.`);for(let t=0;t<o.length;t++)E(o[t].shape[0]===s,()=>`Batch size mismatch: output ${e.outputNames[t]} has ${o[t].shape[0]}; expected  ${s} based on input ${e.inputNames[0]}.`);return{xs:a,ys:o}}function dA(e,t,n){if(n instanceof ta)return[n];if(Array.isArray(n))return E(n.length===t.length,()=>`Received an array of ${n.length} Tensors, but expected ${t.length} to match the ${e} keys ${t}.`),n;{let r=[];for(let i of t){if(n[i]==null)throw new J(`The feature data generated by the dataset lacks the required ${e} key '${i}'.`);r.push(n[i])}return r}}function fA(e){if(e.length===3)throw new tE(`Validation with sample weights is not implemented yet.`);return{xs:e[0],ys:e[1]}}async function pA(e,t,n){let r=n.batchesPerEpoch!=null;if(E(e.optimizer!=null,()=>`You must compile a model before training/testing. Use LayersModel.compile(modelCompileConfig).`),E(n!=null,()=>`For fitDataset(), the 2nd argument (config) is required, but it is not provided in this call.`),E(n.epochs!=null&&n.epochs>0&&Number.isInteger(n.epochs),()=>`For fitDataset(), config.epochs is expected to be a positive integer, but got ${n.epochs}`),E(!r||n.batchesPerEpoch>0&&Number.isInteger(n.batchesPerEpoch),()=>`For fitDataset(), config.batchesPerEpoch is expected to be a positive integer if specified, but got ${n.batchesPerEpoch}`),E(n.validationSplit==null,()=>"`validationSplit` is not supported by `fitDataset()`. Use validationData instead."),e.isTraining)throw Error(`Cannot start training because another fit() call is ongoing.`);e.isTraining=!0;try{let i=n.validationData!=null,a,o;if(i)if(hA(n.validationData))E(n.validationBatches==null||n.validationBatches>0&&Number.isInteger(n.validationBatches),()=>`For fitDataset() with dataset-based validation, config.validationBatches is expected not to be provided, or to be a positive integer, but got ${n.validationBatches}`);else{let e=fA(n.validationData);a=e.xs,o=e.ys}let s=e.makeTrainFunction(),c=e.getDedupedMetricsNames(),l;l=i?c.slice().concat(c.map(e=>`val_`+e)):c.slice();let{callbackList:u,history:d}=VO(BO(n.callbacks,n.yieldEvery),n.verbose==null?1:n.verbose,n.epochs,null,null,mA(t,n),null,i,l);u.setModel(e),e.history=d,await u.onTrainBegin(),e.stopTraining_=!1;let f=n.initialEpoch==null?0:n.initialEpoch,p=await t.iterator();for(;f<n.epochs;){let l={};await u.onEpochBegin(f);let d=0,m=0;for(r||(p=await t.iterator());!r||d<n.batchesPerEpoch;){let t=await p.next();if(r&&t.done){console.warn(`You provided \`batchesPerEpoch\` as ${n.batchesPerEpoch}, but your dataset iterator ran out of data after ${d} batches; interrupting training. Make sure that your dataset can generate at least \`batchesPerEpoch * epochs\` batches (in this case, ${n.batchesPerEpoch*n.epochs} batches). You may need to use the repeat() function when building your dataset.`);break}if(t.value!=null){let{xs:r,ys:i}=uA(e,t.value),a={};a.batch=m,a.size=r[0].shape[0],await u.onBatchBegin(m,a);let o=[];if(n.classWeight!=null){let t=oA(n.classWeight,e.outputNames);for(let e=0;e<t.length;++e)o.push(await sA(i[e],null,t[e]))}let l=r.concat(i).concat(o),f=s(l);Ya(l);for(let e=0;e<c.length;++e){let t=c[e],n=f[e];a[t]=n,Xa(n)}await u.onBatchEnd(m,a),RO(a),m++,d++}if(r?d>=n.batchesPerEpoch:t.done){if(i){let t;t=hA(n.validationData)?lE(await e.evaluateDataset(n.validationData,{batches:n.validationBatches})):lE(e.evaluate(a,o,{batchSize:n.validationBatchSize==null?vA:n.validationBatchSize,verbose:0}));for(let n=0;n<e.metricsNames.length;++n)l[`val_${e.metricsNames[n]}`]=t[n]}break}if(e.stopTraining_)break}if(await u.onEpochEnd(f,l),f++,e.stopTraining_)break}return await u.onTrainEnd(),await e.history.syncData(),e.history}finally{e.isTraining=!1}}function mA(e,t){let n=null;return t.batchesPerEpoch==null?Number.isFinite(e.size)&&(n=e.size):n=t.batchesPerEpoch,n}function hA(e){return typeof e.iterator==`function`}function gA(e){return typeof e.next==`function`}async function _A(e,t,n){n||={};let r=n.batches!=null,i=e.testFunction,a=[];if(n.verbose>0)throw new tE(`Verbose mode is not implemented yet.`);E(!r||n.batches>0&&Number.isInteger(n.batches),()=>`Test loop expects \`batches\` to be a positive integer, but received ${JSON.stringify(n.batches)}`);let o=gA(t)?t:await t.iterator(),s=0,c=0;for(;!r||c<n.batches;){let t=await o.next();if(a=B(()=>{if(t.value){let{xs:n,ys:r}=uA(e,t.value),o=n.concat(r),l=B(()=>i(o));if(Ya(o),c===0)for(let e=0;e<l.length;++e)a.push(Mu(0));let u=o[0].shape[0];for(let e=0;e<l.length;++e){let t=l[e],n=a[e];a[e]=B(()=>H(a[e],U(u,t))),c>0&&Ya(n)}Ya(l),s+=u,++c}return a}),t.done){r&&console.warn(`Your dataset iterator ran out of data during evaluateDataset(). Interrupting evalution. Make sure that your dataset can generate at least \`batches\` batches (in this case, ${n.batches} batches). You may need to use the repeat() function when building your dataset.`);break}}for(let e=0;e<a.length;++e){let t=a[e];a[e]=rs(a[e],s),Ya(t)}return cE(a)}var vA,yA=o((()=>{q(),YO(),rE(),zO(),CE(),lA(),vA=32}));function bA(e){E(e>0&&Number.isInteger(e),()=>`batchSize is required to be a positive integer, but got ${e}`)}function xA(e,t,n){return e==null?[null]:Array.isArray(e)?e.map(e=>iD(e,t,n-t)):iD(e,t,n-t)}function SA(e,t){return B(()=>e==null?null:Array.isArray(e)?e.map(e=>SA(e,t)):fD(e,t.dtype===`int32`?t:V(t,`int32`)))}function CA(e,t){let n=[],r=0,i=null;for(;r<e;)i=r+t,i>=e&&(i=e),n.push([r,i]),r=i;return n}function wA(e){let t=[];e instanceof ta&&(e=[e]);for(let n=0;n<e.length;++n){let r=e[n];if(r.rank===1)t.push(rD(r,1));else if(r.rank===0)throw Error(`Expected tensor to be at least 1D, but received a 0D tensor (scalar).`);else t.push(r)}return t}function TA(e,t){if(e==null)return;let n=[];if(t instanceof ta)n.push(t.id);else if(Array.isArray(t))t.forEach(e=>n.push(e.id));else if(t!=null)for(let e in t){let r=t[e];n.push(r.id)}let r=[];if(e instanceof ta)n.indexOf(e.id)===-1&&r.push(e);else if(Array.isArray(e))e.forEach(e=>{n.indexOf(e.id)===-1&&r.push(e)});else if(e!=null)for(let t in e){let i=e[t];n.indexOf(i.id)===-1&&r.push(i)}r.forEach(e=>{e.isDisposed||e.dispose()})}var EA=o((()=>{q(),vD()}));function DA(e){return e instanceof ta}function OA(e){return Array.isArray(e)}function kA(e){return!DA(e)&&!OA(e)}function AA(e,t,n,r=!0,i=``){if(t==null||t.length===0){if(e!=null){let t=!1;if(OA(e)&&e.length>0)t=!0;else if(kA(e)){for(let n in e)if(e.hasOwnProperty(n)){t=!0;break}}else t=!0;if(t)throw new J(`Error when checking model ${i} expected no data, but got ${e}`)}return[]}if(e==null)return t.map(e=>null);let a;if(kA(e)){e=e,a=[];for(let n of t){if(e[n]==null)throw new J(`No data provided for "${n}". Need data for each key in: ${t}`);a.push(e[n])}}else if(OA(e)){if(e=e,e.length!==t.length)throw new J(`Error when checking model ${i}: the Array of Tensors that you are passing to your model is not the size the model expected. Expected to see ${t.length} Tensor(s), but instead got the following list of Tensor(s): ${e}`);a=e}else{if(e=e,t.length>1)throw new J(`The model ${i} expects ${t.length} Tensor(s), but only received one Tensor. Found: Tensor with shape ${e.shape}`);a=[e]}if(a=wA(a),n!=null)for(let e=0;e<t.length;++e){if(n[e]==null)continue;let o=a[e];if(o.shape.length!==n[e].length)throw new J(`Error when checking ${i}: expected ${t[e]} to have ${n[e].length} dimension(s). but got array with shape ${o.shape}`);for(let t=0;t<n[e].length;++t){if(t===0&&!r)continue;let a=o.shape[t],s=n[e][t];if(s!=null&&s>=0&&a!==s)throw new J(`${i} expected a batch of elements where each example has shape [${n[e].slice(1,n[e].length)}] (i.e.,tensor shape [*,${n[e].slice(1,n[e].length)}]) but the ${i} received an input with ${o.shape[0]} examples, each with shape [${o.shape.slice(1,o.shape.length)}] (tensor shape [${o.shape}])`)}}return a}function jA(e,t,n){let r=gE(e.map(e=>e.shape[0]));r.sort();let i=gE(t.map(e=>e.shape[0]));if(i.sort(),r.length>1)throw new J(`All input Tensors (x) should have the same number of samples. Got array shapes: ${JSON.stringify(e.map(e=>e.shape))}`);if(i.length>1)throw new J(`All target Tensors (y) should have the same number of samples. Got array shapes: ${JSON.stringify(t.map(e=>e.shape))}`);if(r.length>0&&i.length>0&&!ge(r,i))throw new J(`Input Tensors should have the same number of samples as target Tensors. Found ${r[0]} input sample(s) and ${i[0]} target sample(s).`)}function MA(e,t,n){let r=[$O,uk,sk];for(let i=0;i<e.length;++i){let a=e[i],o=t[i],s=n[i];if(o!=null){if(o===sk&&a.shape[a.shape.length-1]===1)throw new J(`You are passing a target array of shape ${a.shape} while using a loss 'categorical_crossentropy'. 'categorical_crossentropy'expects targets to be binary matrices (1s and 0s) of shape [samples, classes].`);if(r.indexOf(o)!==-1){let e=a.shape.slice(1),t=s.slice(1);for(let n=0;n<e.length;++n){let r=e[n],i=t[n];if(i!=null&&r!==i)throw new J(`A target Tensor with shape ${a.shape} was passed for an output of shape ${s}, while using a loss function that expects targets to have the same shape as the output.`)}}}}}function NA(e,t,n,r=!0,i=``){let a;if(Array.isArray(e)){if(e.length!==t.length)throw new J(`Error when checking model ${i}: the Array of Tensors that you are passing to your model is not the size the the model expected. Expected to see ${t.length} Tensor(s), but instead got ${e.length} Tensors(s).`);a=e}else{if(t.length>1)throw new J(`The model expects ${t.length} ${i} Tensors, but only received one Tensor. Found: array with shape ${JSON.stringify(e.shape)}.`);a=[e]}if(n!=null)for(let e=0;e<t.length;++e){if(n[e]==null)continue;let o=a[e];if(o.shape.length!==n[e].length)throw new J(`Error when checking ${i}: expected ${t[e]} to have ${n[e].length} dimension(s), but got array with shape ${JSON.stringify(o.shape)}`);for(let a=0;a<n[e].length;++a){if(a===0&&!r)continue;let s=o.shape[a],c=n[e][a];if(c!=null&&c!==s)throw new J(`Error when checking ${i}: expected ${t[e]} to have shape ${JSON.stringify(n[e])} but got array with shape ${JSON.stringify(o.shape)}.`)}}}function PA(e,t){if(e==null||Array.isArray(e)&&e.length===0)return t.map(e=>[]);let n;if(typeof e==`string`||typeof e==`function`)n=[e];else if(Array.isArray(e)||typeof e==`object`)n=e;else throw TypeError(`Type of metrics argument not understood. Expected an string,function, Array, or Object, found: ${e}`);if(Array.isArray(n))return t.map(e=>n);{let e=[];for(let r of t){let t=n.hasOwnProperty(r)?n[r]:[];Array.isArray(t)||(t=[t]),e.push(t)}return e}}var FA,IA,LA,RA=o((()=>{q(),vD(),YO(),KE(),rE(),ZO(),zO(),gk(),Ik(),Rk(),Hk(),CE(),Yk(),ZE(),$k(),tA(),iA(),xO(),yA(),EA(),lA(),FA=`layers-model`,IA=class extends rA{constructor(e){super(e),this.isTraining=!1}summary(e,t,n=console.log){if(!this.built)throw new J(`This model has never been called, thus its weights have not been created yet. So no summary can be displayed. Build the model first (e.g., by calling it on some test data).`);Uk(this,e,t,n)}compile(e){if(e.loss??=[],this.loss=e.loss,typeof e.optimizer==`string`)this.optimizer_=Lk(e.optimizer),this.isOptimizerOwned=!0;else{if(!(e.optimizer instanceof D_))throw new J(`User-defined optimizer must be an instance of tf.Optimizer.`);this.optimizer_=e.optimizer,this.isOptimizerOwned=!1}let t=[];if(!Array.isArray(e.loss)&&typeof e.loss!=`string`&&typeof e.loss!=`function`){e.loss=e.loss;for(let t in e.loss)if(this.outputNames.indexOf(t)===-1)throw new J(`Unknown entry in loss dictionary: "${t}". Only expected the following keys: ${this.outputNames}`);for(let n of this.outputNames)e.loss[n]??console.warn(`Output "${n}" is missing from loss dictionary. We assume this was done on purpose, and we will not be expecting data to be passed to ${n} during training`),t.push(mk(e.loss[n]))}else if(Array.isArray(e.loss)){if(e.loss.length!==this.outputs.length)throw new J(`When passing an Array as loss, it should have one entry per model output. The model has ${this.outputs.length} output(s), but you passed loss=${e.loss}.`);t=e.loss.map(e=>mk(e))}else{let n=mk(e.loss);this.outputs.forEach(e=>{t.push(n)})}this.lossFunctions=t,this.feedOutputNames=[],this.feedOutputShapes=[],this.feedLossFns=[];for(let e=0;e<this.outputs.length;++e){let t=this.internalOutputShapes[e],n=this.outputNames[e];this.feedOutputNames.push(n),this.feedOutputShapes.push(t),this.feedLossFns.push(this.lossFunctions[e])}let n=[];this.metrics=e.metrics,this.metricsNames=[`loss`],this.metricsTensors=[],RE(`loss`,()=>{for(let e=0;e<this.outputs.length;++e){if(n.indexOf(e)!==-1)continue;let t=this.lossFunctions[e];this.outputs.length>1&&(this.metricsTensors.push([t,e]),this.metricsNames.push(this.outputNames[e]+`_loss`))}});let r=PA(e.metrics,this.outputNames),i=(e,t,n)=>{this.outputNames.length>1&&(t=this.outputNames[e]+`_`+t),this.metricsNames.push(t),this.metricsTensors.push([n,e])};RE(`metric`,()=>{for(let e=0;e<this.outputs.length;++e)n.indexOf(e)===-1&&(t=>{let n,r,a;for(let o of t){if(typeof o==`string`&&[`accuracy`,`acc`,`crossentropy`,`ce`].indexOf(o)!==-1){let t=this.internalOutputShapes[e];t[t.length-1]===1||this.lossFunctions[e]===uk?[`accuracy`,`acc`].indexOf(o)===-1?[`crossentropy`,`ce`].indexOf(o)!==-1&&(r=Sk):r=_k:this.lossFunctions[e]===ck?[`accuracy`,`acc`].indexOf(o)===-1?[`crossentropy`,`ce`].indexOf(o)!==-1&&(r=Pk):r=Ck:[`accuracy`,`acc`].indexOf(o)===-1?[`crossentropy`,`ce`].indexOf(o)!==-1&&(r=Mk):r=vk;let i;[`accuracy`,`acc`].indexOf(o)===-1?[`crossentropy`,`ce`].indexOf(o)!==-1&&(i=`ce`):i=`acc`,a=r,n=``+i}else a=wk(o),n=``+Tk(o);let t;RE(n,()=>{t=a}),i(e,n,t)}})(r[e])}),this.collectedTrainableWeights=this.trainableWeights}checkTrainableWeightsConsistency(){this.collectedTrainableWeights!=null&&this.trainableWeights.length!==this.collectedTrainableWeights.length&&console.warn("Discrepancy between trainableweights and collected trainable weights. Did you set `model.trainable` without calling `model.compile()` afterwards?")}evaluate(e,t,n={}){let r=n.batchSize==null?32:n.batchSize;bA(r);let i=this.standardizeUserDataXY(e,t,!0,r);try{let e=i[0].concat(i[1]);this.makeTestFunction();let t=this.testFunction;return cE(this.testLoop(t,e,r,n.verbose,n.steps))}finally{TA(i[0],e),TA(i[1],t)}}async evaluateDataset(e,t){return this.makeTestFunction(),_A(this,e,t)}checkNumSamples(e,t,n,r=`steps`){let i;if(n!=null){if(i=null,t!=null)throw new J(`If ${r} is set, batchSize must be null or undefined.Got batchSize = ${t}`)}else if(e!=null)i=Array.isArray(e)?e[0].shape[0]:e.shape[0];else throw new J(`Either the input data should have a defined shape, or ${r} shoud be specified.`);return i}execute(e,t){if(Array.isArray(t)&&t.length===0)throw new J("`outputs` is an empty Array, which is not allowed.");let n=Array.isArray(t),r=n?t:[t],i=this.retrieveSymbolicTensors(r),a=new vO;if(e instanceof ta&&(e=[e]),Array.isArray(e)){if(e.length!==this.inputs.length)throw new J(`The number of inputs provided (${e.length}) does not match the number of inputs of this model (${this.inputs.length}).`);for(let t=0;t<this.inputs.length;++t)a.add(this.inputs[t],e[t])}else for(let t of this.inputs){let n=e[t.name];if(n==null)throw new J(`No value is provided for the model's input ${t.name}`);a.add(t,n)}let o=pO(i,a);return n?o:o[0]}retrieveSymbolicTensors(e){let t=aE(null,e.length),n=e.length;for(let r of this.layers){let i=Array.isArray(r.output)?r.output:[r.output],a=i.map(e=>e.name);for(let r=0;r<e.length;++r){let o=a.indexOf(e[r]);if(o!==-1&&(t[r]=i[o],n--),n===0)break}if(n===0)break}if(n>0){let n=[];throw t.forEach((t,r)=>{t??n.push(e[r])}),new J(`Cannot find SymbolicTensors for output name(s): ${JSON.stringify(n)}`)}return t}predictLoop(e,t=32,n=!1){return B(()=>{let r=this.checkNumSamples(e);if(n)throw new tE(`Verbose predictLoop() is not implemented yet.`);let i=CA(r,t),a=this.outputs.map(e=>[]);for(let t=0;t<i.length;++t)B(()=>{let n=i[t][0],r=i[t][1],a=xA(e,n,r),o=[];if(Array.isArray(a))for(let e=0;e<a.length;++e)o.push({key:this.inputs[e],value:a[e]});else o.push({key:this.inputs[0],value:a});let s=new vO(o);return pO(this.outputs,s)}).forEach((e,t)=>a[t].push(e));return cE(a.map(e=>_c(e,0)))})}predict(e,t={}){let n=wA(e);NA(n,this.inputNames,this.feedInputShapes,!1);try{let e=t.batchSize==null?32:t.batchSize;return bA(e),this.predictLoop(n,e)}finally{TA(n,e)}}predictOnBatch(e){NA(e,this.inputNames,this.feedInputShapes,!0);let t=(Array.isArray(e)?e[0]:e).shape[0];return this.predictLoop(e,t)}standardizeUserDataXY(e,t,n=!0,r){if(this.optimizer_==null)throw new eE(`You must compile a model before training/testing. Use LayersModel.compile(modelCompileArgs).`);let i=[];for(let e=0;e<this.feedOutputShapes.length;++e){let t=this.feedOutputShapes[e];this.feedLossFns[e]===ck?i.push(t.slice(0,t.length-1).concat([1])):i.push(t)}if(e=AA(e,this.feedInputNames,this.feedInputShapes,!1,`input`),t=AA(t,this.feedOutputNames,i,!1,`target`),jA(e,t,null),MA(t,this.feedLossFns,this.feedOutputShapes),this.stateful&&r!=null&&r>0&&e[0].shape[0]%r!==0)throw new J(`In a stateful network, you should only pass inputs with a number of samples that is divisible by the batch size ${r}. Found: ${e[0].shape[0]} sample(s).`);return[e,t]}async standardizeUserData(e,t,n,r,i=!0,a){let[o,s]=this.standardizeUserDataXY(e,t,i,a);if(n!=null)throw Error(`sample weight is not supported yet.`);let c=null;if(r!=null){let e=oA(r,this.outputNames);c=[];for(let t=0;t<e.length;++t)c.push(await sA(s[t],null,e[t]))}return[o,s,c]}testLoop(e,t,n,r=0,i){return B(()=>{let a=this.checkNumSamples(t,n,i,`steps`),o=[];if(r>0)throw new tE(`Verbose mode is not implemented yet.`);if(i!=null)throw new tE(`steps mode in testLoop() is not implemented yet`);{let r=CA(a,n),i=mh(XE(0,a));for(let n=0;n<r.length;++n){let a=r[n][0],s=r[n][1],c=e(SA(t,iD(i,a,s-a)));if(n===0)for(let e=0;e<c.length;++e)o.push(Mu(0));for(let e=0;e<c.length;++e){let t=c[e];o[e]=H(o[e],U(s-a,t))}}for(let e=0;e<o.length;++e)o[e]=rs(o[e],a)}return o})}getDedupedMetricsNames(){let e=this.metricsNames,t=[];for(let n=0;n<e.length;++n){let r=e[n],i=r;if(sE(e,r)>1){let t=sE(e.slice(0,n),r);i+=`_${t}`}t.push(i)}return t}makeTrainFunction(){return e=>{let t=[],n=e.slice(0,this.inputs.length),r=e.slice(this.inputs.length,this.inputs.length+this.outputs.length),i=e.slice(this.inputs.length+this.outputs.length,this.inputs.length+this.outputs.length*2),a=[],o=()=>{let e=[];for(let t=0;t<this.inputs.length;++t)e.push({key:this.inputs[t],value:n[t]});let o=new vO(e),s=pO(this.outputs,o,{training:!0}),c;for(let e=0;e<this.lossFunctions.length;++e){let n=this.lossFunctions[e],a=n(r[e],s[e]);i[e]!=null&&(a=cA(a,i[e]));let o=Of(a);t.push(o),c=e===0?a:H(c,a)}for(let e=0;e<this.metricsTensors.length;++e){let n;if(this.outputs.length>1&&e<this.outputs.length)n=t[e];else{let t=this.metricsTensors[e][0],i=this.metricsTensors[e][1];n=Of(t(r[i],s[i]))}Xa(n),a.push(n)}return c=Of(c),this.calculateLosses().forEach(e=>{c=H(c,e)}),c},s=this.collectedTrainableWeights.map(e=>e.read());return[this.optimizer_.minimize(o,!0,s)].concat(a)}}makeTestFunction(){this.testFunction=e=>B(()=>{let t=[],n,r=e.slice(0,this.inputs.length),i=e.slice(this.inputs.length,this.inputs.length+this.outputs.length),a=[];for(let e=0;e<this.inputs.length;++e)a.push({key:this.inputs[e],value:r[e]});let o=new vO(a),s=pO(this.outputs,o);for(let e=0;e<this.lossFunctions.length;++e){let r=this.lossFunctions[e],a=Of(r(i[e],s[e]));n=e===0?a:H(n,a),t.push(n)}for(let e=0;e<this.metricsTensors.length;++e){let n=this.metricsTensors[e][0],r=this.metricsTensors[e][1],a=Of(n(i[r],s[r]));t.push(a)}return t})}async fit(e,t,n={}){if(this.isTraining)throw Error(`Cannot start training because another fit() call is ongoing.`);this.isTraining=!0;let r,i,a,o,s,c,l,u,d;try{let f=n.batchSize==null?32:n.batchSize;bA(f);let p=await this.standardizeUserData(e,t,n.sampleWeight,n.classWeight,!1,f);r=p[0],i=p[1],d=p[2];let m=!1,h;if(n.validationData!=null&&n.validationData.length>0){if(m=!0,n.validationData.length===2)s=n.validationData[0],c=n.validationData[1];else if(n.validationData.length===3)throw new tE(`validationData including sample weights is not supported yet.`);else throw new J(`When passing validation data, it must contain 2 (valX, valY) or 3 (valX, valY, valSampleWeight) items; ${n.validationData} is invalid.`);let e=await this.standardizeUserData(s,c,null,null,!0,f);l=e[0],u=e[1],h=l.concat(u)}else if(n.validationSplit!=null&&n.validationSplit>0&&n.validationSplit<1){m=!0;let e=Math.floor(r[0].shape[0]*(1-n.validationSplit)),t=r[0].shape[0];l=xA(r,e,t),a=r,r=xA(r,0,e),u=xA(i,e,t),o=i,i=xA(i,0,e),h=l.concat(u)}else n.validationSteps!=null&&(m=!0);let g=r.concat(i).concat(d);this.checkTrainableWeightsConsistency();let _=this.makeTrainFunction(),v=this.getDedupedMetricsNames(),y,b;m?(this.makeTestFunction(),y=this.testFunction,b=v.slice().concat(v.map(e=>`val_`+e))):(y=null,h=[],b=v.slice());let x=BO(n.callbacks,n.yieldEvery);return await this.fitLoop(_,g,v,f,n.epochs,n.verbose,x,y,h,n.shuffle,b,n.initialEpoch,null,null)}finally{this.isTraining=!1,TA(r,e),TA(i,t),TA(a,e),TA(o,t),TA(l,s),TA(u,c),d!=null&&Ya(d)}}async fitLoop(e,t,n,r,i,a,o,s,c,l,u,d,f,p){r??=32,i??=1,l??=!0,d??=0;let m=!1;if(s!=null&&c!=null&&(m=!0),p!=null&&(m=!0,f==null))throw new J("Can only use `validationSteps` when doing step-wise training, i.e., `stepsPerEpoch` must be set.");let h=this.checkNumSamples(t,r,f,`steps_per_epoch`),g;h!=null&&(g=XE(0,h)),a??=1;let{callbackList:_,history:v}=VO(o,a,i,d,h,f,r,m,u);_.setModel(this),this.history=v,await _.onTrainBegin(),this.stopTraining_=!1;for(let a=d;a<i;++a){await _.onEpochBegin(a);let i={};if(f!=null)throw new tE(`stepsPerEpoch mode is not implemented yet.`);{if(l===`batch`)throw new tE(`batch shuffling is not implemneted yet`);l&&le(g);let a=mh(g),o=CA(h,r);for(let l=0;l<o.length;++l){let u={};if(await _.onBatchBegin(l,u),B(()=>{let d=o[l][0],f=o[l][1],p=iD(a,d,f-d);u.batch=l,u.size=f-d;let h=e(SA(t,p));for(let e=0;e<n.length;++e){let t=n[e],r=h[e];u[t]=r,Xa(r)}if(l===o.length-1&&m){let e=this.testLoop(s,c,r);for(let t=0;t<n.length;++t){let r=n[t],a=e[t];Xa(a),i[`val_`+r]=a}}}),await _.onBatchEnd(l,u),RO(u),this.stopTraining_)break}a.dispose()}if(await _.onEpochEnd(a,i),this.stopTraining_)break}return await _.onTrainEnd(),await this.history.syncData(),this.history}async fitDataset(e,t){return pA(this,e,t)}async trainOnBatch(e,t){let n=await this.standardizeUserData(e,t),r=n[0],i=n[1],a=this.makeTrainFunction()(r.concat(i)),o=[];for(let e of a){let t=await e.data();o.push(t[0])}return Ya(a),TA(n[0],e),TA(n[1],t),cE(o)}getNamedWeights(e){let t=[],n=e!=null&&e.trainableOnly,r=n?this.trainableWeights:this.weights,i=this.getWeights(n);for(let e=0;e<r.length;++e)n&&!r[e].trainable||t.push({name:r[e].originalName,tensor:i[e]});return t}set stopTraining(e){this.stopTraining_=e}get stopTraining(){return this.stopTraining_}get optimizer(){return this.optimizer_}set optimizer(e){this.optimizer_!==e&&(this.optimizer_=e,this.isOptimizerOwned=!1)}dispose(){let e=super.dispose();if(e.refCountAfterDispose===0&&this.optimizer!=null&&this.isOptimizerOwned){let t=Ja().numTensors;this.optimizer_.dispose(),e.numDisposedVariables+=t-Ja().numTensors}return e}getLossIdentifiers(){let e;if(typeof this.loss==`string`)e=uE(this.loss);else if(Array.isArray(this.loss)){for(let e of this.loss)if(typeof e!=`string`)throw Error(`Serialization of non-string loss is not supported.`);e=this.loss.map(e=>uE(e))}else{let t=Object.keys(this.loss);e={};let n=this.loss;for(let r of t)if(typeof n[r]==`string`)e[r]=uE(n[r]);else throw Error(`Serialization of non-string loss is not supported.`)}return e}getMetricIdentifiers(){if(typeof this.metrics==`string`||typeof this.metrics==`function`)return[uE(Tk(this.metrics))];if(Array.isArray(this.metrics))return this.metrics.map(e=>uE(Tk(e)));{let e={};for(let t in this.metrics)e[t]=uE(Tk(this.metrics[t]));return e}}getTrainingConfig(){return{loss:this.getLossIdentifiers(),metrics:this.getMetricIdentifiers(),optimizer_config:{class_name:this.optimizer.getClassName(),config:this.optimizer.getConfig()}}}loadTrainingConfig(e){if(e.weighted_metrics!=null)throw Error(`Loading weight_metrics is not supported yet.`);if(e.loss_weights!=null)throw Error(`Loading loss_weights is not supported yet.`);if(e.sample_weight_mode!=null)throw Error(`Loading sample_weight_mode is not supported yet.`);let t=XO(Zk(e.optimizer_config)),n;if(typeof e.loss==`string`)n=dE(e.loss);else if(Array.isArray(e.loss))n=e.loss.map(e=>dE(e));else if(e.loss!=null){n={};for(let t in e.loss)n[t]=dE(e.loss[t])}let r;if(Array.isArray(e.metrics))r=e.metrics.map(e=>dE(e));else if(e.metrics!=null){r={};for(let t in e.metrics)r[t]=dE(e.metrics[t])}this.compile({loss:n,metrics:r,optimizer:t})}async save(e,t){if(typeof e==`string`){let t=po(e);if(t.length===0)throw new J(`Cannot find any save handlers for URL '${e}'`);if(t.length>1)throw new J(`Found more than one (${t.length}) save handlers for URL '${e}'`);e=t[0]}if(e.save==null)throw new J("LayersModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");let n=await eo(this.getNamedWeights(t)),r={modelTopology:this.toJSON(null,!1),format:FA,generatedBy:`TensorFlow.js tfjs-layers v${eA}`,convertedBy:null};if(t!=null&&t.includeOptimizer&&this.optimizer!=null){r.trainingConfig=this.getTrainingConfig();let{data:e,specs:t}=await eo(await this.optimizer.getWeights(),`optimizer`);n.specs.push(...t),n.data=dee([n.data,e])}return this.userDefinedMetadata!=null&&(zk(this.userDefinedMetadata,this.name,!0),r.userDefinedMetadata=this.userDefinedMetadata),r.weightData=n.data,r.weightSpecs=n.specs,e.save(r)}setUserDefinedMetadata(e){zk(e,this.name),this.userDefinedMetadata=e}getUserDefinedMetadata(){return this.userDefinedMetadata}},IA.className=`Model`,K(IA),LA=class extends IA{},LA.className=`Functional`,K(LA)})),zA,BA=o((()=>{q(),OE(),uO(),sO(),RA(),rE(),ZO(),CE(),$k(),KD(),zA=class e extends IA{constructor(e){if(super({inputs:[],outputs:[]}),e||={},this.trainable=!0,this.built=!1,this.name=e.name==null?TE(`sequential_`):e.name,e.layers!=null)for(let t of e.layers)this.add(t)}checkShape(e){if(e.inboundNodes[0].outputTensors[0].shape.some(e=>e<0))throw new J(`Negative dimension size caused by adding layer ${e.name} with input shape [${e.inboundNodes[0].inputTensors[0].shape}]`)}add(t){let n=t instanceof e||t instanceof IA,r;if(n){if(r=t,r.outputs.length!==1)throw new J(`All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.`);if(r.inputs.length!==1)throw new J(`All layers in a Sequential model should have a single input tensor. For multi-input layers, use the functional API.`)}if(this.outputs.length===0){if(t.inboundNodes.length===0){if(t.batchInputShape==null)throw new J("The first layer in a Sequential model must get an `inputShape` or `batchInputShape` argument.");let e=cO({batchShape:t.batchInputShape,dtype:t.dtype,name:t.name+`_input`});t.apply(e)}if(n)this.outputs=r.outputs,this.inputs=r.inputs;else{if(t.inboundNodes.length!==1)throw new J(`A layer added to a Sequential model must not already be connected somewhere else. LayersModel received layer ${t.name} which has ${t.inboundNodes.length} pre-existing inbound connections.`);if(t.inboundNodes[0].outputTensors.length!==1)throw new J(`All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.`);this.checkShape(t),this.outputs=[t.inboundNodes[0].outputTensors[0]],this.inputs=eO(this.outputs[0])}this.inboundNodes=[],new iO({outboundLayer:this,inboundLayers:[],nodeIndices:[],tensorIndices:[],inputTensors:this.inputs,outputTensors:this.outputs,inputMasks:aE(null,this.inputs.length),outputMasks:[null],inputShapes:this.inputs.map(e=>e.shape),outputShapes:this.outputs[0].shape})}else{let e=t.apply(this.outputs[0]);if(Array.isArray(e))throw TypeError(`All layers in a Sequential model should have a single output tensor. For multi-output layers, use the functional API.`);this.checkShape(t),this.outputs=[e],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}this.layers.push(t),this.built=!1}pop(){if(this.layers.length===0)throw TypeError(`There are no layers in the model.`);if(this.layers.pop(),this.layers.length===0)this.outputs=[],this.inboundNodes=[],this.outboundNodes=[];else{let e=this.layers.length-1;this.layers[e].outboundNodes=[],this.outputs=[this.layers[e].output],this.inboundNodes[0].outputTensors=this.outputs,this.inboundNodes[0].outputShapes=[this.outputs[0].shape]}}call(e,t){return this.model??this.build(),this.model.call(e,t)}build(e){if(GD(e),this.inputs.length===0||this.outputs.length===0)throw TypeError(`Sequential model cannot be built: model is empty. Add some layers first.`);this.model=new IA({inputs:this.inputs,outputs:this.outputs[0],name:this.name+`_model`}),this.model.trainable=this.trainable,this.supportsMasking=this.model.supportsMasking,this.inputLayers=this.model.inputLayers,this.inputLayersNodeIndices=this.model.inputLayersNodeIndices,this.inputLayersTensorIndices=this.model.inputLayersTensorIndices,this.outputLayers=this.model.outputLayers,this.outputLayersNodeIndices=this.model.outputLayersNodeIndices,this.outputLayersTensorIndices=this.model.outputLayersTensorIndices,this.nodesByDepth=this.model.nodesByDepth,this.containerNodes=this.model.containerNodes,this.outputNames=this.model.outputNames,this.inputNames=this.model.inputNames,this.built=!0}countParams(){return this.built||this.build(),super.countParams()}summary(e,t,n=console.log){this.built||this.build(),super.summary(e,t,n)}setWeights(e){this.model??this.build(),this.model.setWeights(e)}evaluate(e,t,n={}){if(!this.built)throw new eE(`The model needs to be compiled before being used.`);return this.model.evaluate(e,t,n)}async evaluateDataset(e,t){if(!this.built)throw new eE(`The model needs to be compiled before being used.`);return this.model.evaluateDataset(e,t)}predict(e,t={}){return this.model??this.build(),this.model.predict(e,t)}predictOnBatch(e){return this.model??this.build(),this.model.predictOnBatch(e)}compile(e){this.build(),this.model.compile(e),this.optimizer_=this.model.optimizer,this.isOptimizerOwned=this.model.isOptimizerOwned,this.loss=this.model.loss,this.metrics=this.model.metrics,this.metricsTensors=this.model.metricsTensors,this.metricsNames=this.model.metricsNames}get optimizer(){return this.model==null?void 0:this.model.optimizer}set optimizer(e){this.model.optimizer=e}async fit(e,t,n={}){if(!this.built)throw new eE(`The model needs to be compiled before being used.`);return this.model.fit(e,t,n)}async fitDataset(e,t){if(!this.built)throw new eE(`The model needs to be compiled before being used.`);return this.model.fitDataset(e,t)}async trainOnBatch(e,t){return this.model.trainOnBatch(e,t)}static fromConfig(t,n,r={},i=!1){let a,o={};if(n instanceof Array){if(n[0].className==null||n[0].className===`Merge`)throw new J(`Legacy serialization format not supported yet.`);a=n}else E(n.layers!=null,()=>`When the config data for a Sequential model is not an Array, it must be an Object that contains the 'layers' field.`),a=n.layers,delete n.layers,o=n;let s=new t(o);if(!(s instanceof e))throw new tE(`Sequential.fromConfig called on non-Sequential input: ${s}`);for(let e of a){let t=XO(e,void 0,i);i&&t.setFastWeightInitDuringBuild(!0),s.add(t)}return s}set stopTraining(e){if(this.model==null)throw new J(`Cannot set the stopTraining property of a sequential model before it is compiled.`);this.model.stopTraining=e}get stopTraining(){if(this.model==null)throw new J(`Cannot get the stopTraining property of a sequential model before it is compiled.`);return this.model.stopTraining}getConfig(){let e=[];for(let t of this.layers){let n={};n.className=t.getClassName(),n.config=t.getConfig(),e.push(n)}return{name:this.name,layers:e}}},zA.className=`Sequential`,K(zA)})),VA=o((()=>{YO(),uO(),RA(),BA()}));function HA(e){return e.getClassName()}function UA(e,t={}){return mE(e,T_.getMap().classNameMap,t,`activation`)}function WA(e){if(e==null){let e={};return e.className=`linear`,e.config={},UA(e)}if(typeof e==`string`){let t={};return t.className=e,t.config={},UA(t)}else if(e instanceof GA)return e;else return UA(e)}var GA,KA,qA,JA,YA,XA,ZA,QA,$A,ej,tj,nj,rj,ij,aj,oj,sj,cj=o((()=>{q(),vD(),CE(),GA=class extends w_{getConfig(){return{}}},KA=class extends GA{apply(e,t=1){return Zne(e,t)}},KA.className=`elu`,K(KA),qA=class extends GA{apply(e){return om(e)}},qA.className=`selu`,K(qA),JA=class extends GA{apply(e){return Gp(e)}},JA.className=`relu`,K(JA),YA=class extends GA{apply(e){return B(()=>Ff(6,Gp(e)))}},YA.className=`relu6`,K(YA),XA=class extends GA{apply(e){return e}},XA.className=`linear`,K(XA),ZA=class extends GA{apply(e){return Cc(e)}},ZA.className=`sigmoid`,K(ZA),QA=class extends GA{apply(e){return $ne(e)}},QA.className=`hardSigmoid`,K(QA),$A=class extends GA{apply(e){return Wd(e)}},$A.className=`softplus`,K($A),ej=class extends GA{apply(e){return Qne(e)}},ej.className=`softsign`,K(ej),tj=class extends GA{apply(e){return kc(e)}},tj.className=`tanh`,K(tj),nj=class extends GA{apply(e,t=-1){return Nm(e,t)}},nj.className=`softmax`,K(nj),rj=class extends GA{apply(e,t=-1){return $d(e,t)}},rj.className=`logSoftmax`,K(rj),ij=class extends GA{apply(e){return B(()=>B(()=>{let t=U(.5,H(1,gu(rs(e,Math.sqrt(2)))));return U(e,t)}))}},ij.className=`gelu`,K(ij),aj=class extends GA{apply(e){return B(()=>U(.5,U(e,H(1,kc(U(Pu(rs(2,Math.PI)),H(e,U(.044715,Au(e,3)))))))))}},aj.className=`gelu_new`,K(aj),oj=class extends GA{apply(e){return B(()=>U(e,kc(Wd(e))))}},oj.className=`mish`,K(oj),sj=class extends GA{apply(e,t=1){return B(()=>U(Cc(U(e,t)),e))}},sj.className=`swish`,K(sj)}));function lj(e){if(e!=null&&typeof e!=`object`)throw Error(`Argument to L1L2 regularizer's constructor is expected to be an object, but received: ${e}`)}function uj(e){return fE(e)}function dj(e,t={}){return mE(e,T_.getMap().classNameMap,t,`regularizer`)}function fj(e){return e==null?null:typeof e==`string`?dj({className:e in hj?hj[e]:e,config:{}}):e instanceof pj?e:dj(e)}var pj,mj,hj,gj=o((()=>{q(),vD(),CE(),pj=class extends w_{},mj=class extends pj{constructor(e){super(),lj(e),this.l1=e==null||e.l1==null?.01:e.l1,this.l2=e==null||e.l2==null?.01:e.l2,this.hasL1=this.l1!==0,this.hasL2=this.l2!==0}apply(e){return B(()=>{let t=Af([1]);return this.hasL1&&(t=H(t,Ru(U(this.l1,cs(e))))),this.hasL2&&(t=H(t,Ru(U(this.l2,pD(e))))),W(t,[])})}getConfig(){return{l1:this.l1,l2:this.l2}}static fromConfig(e,t){return new e({l1:t.l1,l2:t.l2})}},mj.className=`L1L2`,K(mj),hj={l1l2:`L1L2`}})),_j,vj,yj,bj,xj,Sj,Cj=o((()=>{q(),cj(),PO(),sO(),rE(),VD(),gj(),KD(),_j=class extends oO{constructor(e){super(e??{}),this.supportsMasking=!0,e!=null&&(this.maxValue=e.maxValue)}call(e,t){e=WD(e);let n=Gp(e);return this.maxValue!=null&&(n=$c(n,0,this.maxValue)),n}computeOutputShape(e){return e}getConfig(){let e={maxValue:this.maxValue},t=super.getConfig();return Object.assign(e,t),e}},_j.className=`ReLU`,K(_j),vj=class extends oO{constructor(e){super(e??{}),this.DEFAULT_ALPHA=.3,e??={},this.alpha=e.alpha==null?this.DEFAULT_ALPHA:e.alpha}call(e,t){return bd(WD(e),this.alpha)}computeOutputShape(e){return e}getConfig(){let e={alpha:this.alpha},t=super.getConfig();return Object.assign(e,t),e}},vj.className=`LeakyReLU`,K(vj),yj=class extends oO{constructor(e){if(super(e??{}),this.DEFAULT_ALPHA_INITIALIZER=`zeros`,e??={},this.supportsMasking=!0,this.alphaInitializer=CD(e.alphaInitializer||this.DEFAULT_ALPHA_INITIALIZER),this.alphaRegularizer=fj(e.alphaRegularizer),this.alphaConstraint=DO(e.alphaConstraint),e.sharedAxes==null)this.sharedAxes=null;else if(Array.isArray(e.sharedAxes))this.sharedAxes=e.sharedAxes;else if(typeof e.sharedAxes==`number`)this.sharedAxes=[e.sharedAxes];else throw new J(`Expected sharedAxes to be a number or an array of numbers, but got ${e.sharedAxes}`)}build(e){e=GD(e);let t=e.slice(1);if(this.sharedAxes!=null)for(let e of this.sharedAxes)t[e-1]=1;this.alpha=this.addWeight(`alpha`,t,`float32`,this.alphaInitializer,this.alphaRegularizer,!0,this.alphaConstraint);let n={};if(this.sharedAxes!=null)for(let t=1;t<e.length;++t)n[t]=e[t];this.inputSpec=[new tO({ndim:e.length,axes:n})],this.built=!0}call(e,t){return e=WD(e),pp(e,this.alpha.read())}getConfig(){let e={alphaInitializer:SD(this.alphaInitializer),alphaRegularizer:uj(this.alphaRegularizer),alphaConstraint:TO(this.alphaConstraint),sharedAxes:this.sharedAxes},t=super.getConfig();return Object.assign(e,t),e}},yj.className=`PReLU`,K(yj),bj=class extends oO{constructor(e){if(super(e??{}),this.DEFAULT_ALPHA=1,e??={},e.alpha!=null&&e.alpha!==this.DEFAULT_ALPHA)throw new tE(`Non-default alpha value (${e.alpha}) is not supported by the ELU layer yet.`);this.alpha=e.alpha==null?this.DEFAULT_ALPHA:e.alpha}call(e,t){return mu(WD(e))}computeOutputShape(e){return e}getConfig(){let e={alpha:this.alpha},t=super.getConfig();return Object.assign(e,t),e}},bj.className=`ELU`,K(bj),xj=class extends oO{constructor(e){super(e??{}),this.DEFAULT_THETA=1,e??={},this.theta=e.theta==null?this.DEFAULT_THETA:e.theta}call(e,t){let n=WD(e);return U(n,V(id(n,this.theta),`float32`))}computeOutputShape(e){return e}getConfig(){let e={theta:this.theta},t=super.getConfig();return Object.assign(e,t),e}},xj.className=`ThresholdedReLU`,K(xj),Sj=class extends oO{constructor(e){super(e??{}),this.DEFAULT_AXIS=1,e??={},this.softmax=new nj().apply,this.axis=e.axis==null?this.DEFAULT_AXIS:e.axis}call(e,t){return B(()=>{let n=WD(e),r=t.mask;if(r!=null){let e=U(Xd(Mf(n.shape),V(r,n.dtype)),Mu(-1e9));n=H(n,e)}return this.axis instanceof Array?this.axis.length>1?Gu(Xd(n,nf(n,this.axis,!0))):this.softmax(n,this.axis[0]):this.softmax(n,this.axis)})}computeOutputShape(e){return e}getConfig(){let e={axis:this.axis},t=super.getConfig();return Object.assign(e,t),e}},Sj.className=`Softmax`,K(Sj)}));function wj(e,t,n){if(typeof e==`number`)return aE(e,t);if(e.length!==t)throw new J(`The ${n} argument must be an integer or tuple of ${t} integers. Received: ${e.length} elements.`);for(let r=0;r<t;++r){let i=e[r];if(!qne(i))throw new J(`The ${n} argument must be an integer or tuple of ${t} integers. Received: ${JSON.stringify(e)} including a non-integer number ${i}`)}return e}function Tj(e,t,n,r,i=1){if(e==null)return e;let a=t+(t-1)*(i-1),o;return o=n===`same`?e:e-a+1,Math.floor((o+r-1)/r)}function Ej(e,t,n,r){if(e==null)return null;if(r===`valid`)e=e*t+YE([n-t,0]);else if(r===`same`)e*=t;else throw new J(`Unsupport padding mode: ${r}.`);return e}var Dj=o((()=>{rE(),CE(),ZE()}));function Oj(e,t){return B(()=>(FE(t),t===`channelsFirst`?Lh(e,[0,2,3,1]):e))}function kj(e,t){return B(()=>(FE(t),t===`channelsFirst`?Lh(e,[0,2,3,4,1]):e))}function Aj(e,t,n,r=1,i=`valid`,a,o=1){return B(()=>{if(a??=$E(),FE(a),e.shape.length!==3)throw new J(`The input of a conv1dWithBias operation should be 3, but is ${e.shape.length} instead.`);if(t.shape.length!==3)throw new J(`The kernel for a conv1dWithBias operation should be 3, but is ${t.shape.length} instead`);if(n!=null&&n.shape.length!==1)throw new J(`The bias for a conv1dWithBias operation should be 1, but is ${n.shape.length} instead`);if(a===`channelsFirst`&&(e=Lh(e,[0,2,1])),i===`causal`)throw new tE(`The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.`);let s=_l(e,t,r,i===`same`?`same`:`valid`,`NWC`,o);return n!=null&&(s=hD(s,n)),s})}function jj(e,t,n,r=[1,1],i=`valid`,a,o,s=null){return B(()=>{if(a??=$E(),FE(a),e.rank!==3&&e.rank!==4)throw new J(`conv2dWithBiasActivation expects input to be of rank 3 or 4, but received ${e.rank}.`);if(t.rank!==3&&t.rank!==4)throw new J(`conv2dWithBiasActivation expects kernel to be of rank 3 or 4, but received ${e.rank}.`);let c=Oj(e,a);if(i===`causal`)throw new tE(`The support for CAUSAL padding mode in conv1dWithBias is not implemented yet.`);return c=qh({x:c,filter:t,strides:r,pad:i===`same`?`same`:`valid`,dilations:o,dataFormat:`NHWC`,bias:n,activation:s}),a===`channelsFirst`&&(c=Lh(c,[0,3,1,2])),c})}function Mj(e,t,n,r=[1,1,1],i=`valid`,a,o){return B(()=>{if(a??=$E(),FE(a),e.rank!==4&&e.rank!==5)throw new J(`conv3dWithBias expects input to be of rank 4 or 5, but received ${e.rank}.`);if(t.rank!==4&&t.rank!==5)throw new J(`conv3dWithBias expects kernel to be of rank 4 or 5, but received ${e.rank}.`);let s=kj(e,a);if(i===`causal`)throw new tE(`The support for CAUSAL padding mode in conv3dWithBias is not implemented yet.`);return s=El(s,t,r,i===`same`?`same`:`valid`,`NDHWC`,o),n!=null&&(s=hD(s,n)),a===`channelsFirst`&&(s=Lh(s,[0,4,1,2,3])),s})}var Nj,Pj,Fj,Ij,Lj,Rj,zj,Bj,Vj,Hj,Uj,Wj=o((()=>{q(),cj(),tD(),vD(),KE(),PO(),sO(),rE(),VD(),gj(),Dj(),CE(),KD(),Nj=class e extends oO{constructor(t,n){if(super(n),this.bias=null,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,e.verifyArgs(n),this.rank=t,yE(this.rank,`rank`),this.rank!==1&&this.rank!==2&&this.rank!==3)throw new tE(`Convolution layer for rank other than 1, 2, or 3 (${this.rank}) is not implemented yet.`);if(this.kernelSize=wj(n.kernelSize,t,`kernelSize`),this.strides=wj(n.strides==null?1:n.strides,t,`strides`),this.padding=n.padding==null?`valid`:n.padding,IE(this.padding),this.dataFormat=n.dataFormat==null?`channelsLast`:n.dataFormat,FE(this.dataFormat),this.activation=WA(n.activation),this.useBias=n.useBias==null||n.useBias,this.biasInitializer=CD(n.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.biasConstraint=DO(n.biasConstraint),this.biasRegularizer=fj(n.biasRegularizer),this.activityRegularizer=fj(n.activityRegularizer),this.dilationRate=wj(n.dilationRate==null?1:n.dilationRate,t,`dilationRate`),this.rank===1&&Array.isArray(this.dilationRate)&&this.dilationRate.length!==1)throw new J(`dilationRate must be a number or an array of a single number for 1D convolution, but received ${JSON.stringify(this.dilationRate)}`);if(this.rank===2){if(typeof this.dilationRate==`number`)this.dilationRate=[this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==2)throw new J(`dilationRate must be a number or array of two numbers for 2D convolution, but received ${JSON.stringify(this.dilationRate)}`)}else if(this.rank===3){if(typeof this.dilationRate==`number`)this.dilationRate=[this.dilationRate,this.dilationRate,this.dilationRate];else if(this.dilationRate.length!==3)throw new J(`dilationRate must be a number or array of three numbers for 3D convolution, but received ${JSON.stringify(this.dilationRate)}`)}}static verifyArgs(e){if(oE(`kernelSize`in e,`required key 'kernelSize' not in config`),typeof e.kernelSize!=`number`&&!vE(e.kernelSize,`number`,1,3))throw new J(`BaseConv expects config.kernelSize to be number or number[] with length 1, 2, or 3, but received ${JSON.stringify(e.kernelSize)}.`)}getConfig(){let e={kernelSize:this.kernelSize,strides:this.strides,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,activation:HA(this.activation),useBias:this.useBias,biasInitializer:SD(this.biasInitializer),biasRegularizer:uj(this.biasRegularizer),activityRegularizer:uj(this.activityRegularizer),biasConstraint:TO(this.biasConstraint)},t=super.getConfig();return Object.assign(e,t),e}},Pj=class e extends Nj{constructor(t,n){super(t,n),this.kernel=null,e.verifyArgs(n),this.filters=n.filters,yE(this.filters,`filters`),this.kernelInitializer=CD(n.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.kernelConstraint=DO(n.kernelConstraint),this.kernelRegularizer=fj(n.kernelRegularizer)}build(e){e=GD(e);let t=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[t]==null)throw new J(`The channel dimension of the input should be defined. Found ${e[t]}`);let n=e[t],r=this.kernelSize.concat([n,this.filters]);this.kernel=this.addWeight(`kernel`,r,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight(`bias`,[this.filters],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[{ndim:this.rank+2,axes:{[t]:n}}],this.built=!0}call(e,t){return B(()=>{e=WD(e);let t,n=this.bias==null?null:this.bias.read(),r=xE(this.activation.getClassName());if(r!=null&&this.rank===2)t=jj(e,this.kernel.read(),n,this.strides,this.padding,this.dataFormat,this.dilationRate,r);else{if(this.rank===1)t=Aj(e,this.kernel.read(),n,this.strides[0],this.padding,this.dataFormat,this.dilationRate[0]);else if(this.rank===2)t=jj(e,this.kernel.read(),n,this.strides,this.padding,this.dataFormat,this.dilationRate);else if(this.rank===3)t=Mj(e,this.kernel.read(),n,this.strides,this.padding,this.dataFormat,this.dilationRate);else throw new tE(`convolutions greater than 3D are not implemented yet.`);this.activation!=null&&(t=this.activation.apply(t))}return t})}computeOutputShape(e){e=GD(e);let t=[],n=this.dataFormat===`channelsLast`?e.slice(1,e.length-1):e.slice(2);for(let e=0;e<n.length;++e){let r=Tj(n[e],this.kernelSize[e],this.padding,this.strides[e],typeof this.dilationRate==`number`?this.dilationRate:this.dilationRate[e]);t.push(r)}let r=[e[0]];return this.dataFormat===`channelsLast`?(r=r.concat(t),r.push(this.filters)):(r.push(this.filters),r=r.concat(t)),r}getConfig(){let e={filters:this.filters,kernelInitializer:SD(this.kernelInitializer),kernelRegularizer:uj(this.kernelRegularizer),kernelConstraint:TO(this.kernelConstraint)},t=super.getConfig();return Object.assign(e,t),e}static verifyArgs(e){if(!(`filters`in e)||typeof e.filters!=`number`||e.filters<1)throw new J(`Convolution layer expected config.filters to be a 'number' > 0 but got ${JSON.stringify(e.filters)}`)}},Fj=class e extends Pj{constructor(t){super(2,t),e.verifyArgs(t)}getConfig(){let e=super.getConfig();return delete e.rank,e}static verifyArgs(e){if(typeof e.kernelSize!=`number`&&!vE(e.kernelSize,`number`,1,2))throw new J(`Conv2D expects config.kernelSize to be number or number[] with length 1 or 2, but received ${JSON.stringify(e.kernelSize)}.`)}},Fj.className=`Conv2D`,K(Fj),Ij=class e extends Pj{constructor(t){super(3,t),e.verifyArgs(t)}getConfig(){let e=super.getConfig();return delete e.rank,e}static verifyArgs(e){if(typeof e.kernelSize!=`number`&&!(Array.isArray(e.kernelSize)&&(e.kernelSize.length===1||e.kernelSize.length===3)))throw new J(`Conv3D expects config.kernelSize to be number or [number, number, number], but received ${JSON.stringify(e.kernelSize)}.`)}},Ij.className=`Conv3D`,K(Ij),Lj=class extends Fj{constructor(e){if(super(e),this.inputSpec=[new tO({ndim:4})],this.padding!==`same`&&this.padding!==`valid`)throw new J(`Conv2DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(e){if(e=GD(e),e.length!==4)throw new J(`Input should have rank 4; Received input shape: `+JSON.stringify(e));let t=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[t]==null)throw new J("The channel dimension of the inputs should be defined. Found `None`.");let n=e[t],r=this.kernelSize.concat([this.filters,n]);this.kernel=this.addWeight(`kernel`,r,`float32`,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight(`bias`,[this.filters],`float32`,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new tO({ndim:4,axes:{[t]:n}})],this.built=!0}call(e,t){return B(()=>{let t=WD(e);if(t.shape.length!==4)throw new J(`Conv2DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${t.shape.length}`);let n=t.shape,r=n[0],i,a;this.dataFormat===`channelsFirst`?(i=2,a=3):(i=1,a=2);let o=n[i],s=n[a],c=this.kernelSize[0],l=this.kernelSize[1],u=this.strides[0],d=this.strides[1],f=[r,Ej(o,u,c,this.padding),Ej(s,d,l,this.padding),this.filters];this.dataFormat!==`channelsLast`&&(t=Lh(t,[0,2,3,1]));let p=Cl(t,this.kernel.read(),f,this.strides,this.padding);return this.dataFormat!==`channelsLast`&&(p=Lh(p,[0,3,1,2])),this.bias!=null&&(p=hD(p,this.bias.read(),this.dataFormat)),this.activation!=null&&(p=this.activation.apply(p)),p})}computeOutputShape(e){e=GD(e);let t=e.slice(),n,r,i;this.dataFormat===`channelsFirst`?(n=1,r=2,i=3):(n=3,r=1,i=2);let a=this.kernelSize[0],o=this.kernelSize[1],s=this.strides[0],c=this.strides[1];return t[n]=this.filters,t[r]=Ej(t[r],s,a,this.padding),t[i]=Ej(t[i],c,o,this.padding),t}getConfig(){let e=super.getConfig();return delete e.dilationRate,e}},Lj.className=`Conv2DTranspose`,K(Lj),Rj=class extends Ij{constructor(e){if(super(e),this.inputSpec=[new tO({ndim:5})],this.padding!==`same`&&this.padding!==`valid`)throw new J(`Conv3DTranspose currently supports only padding modes 'same' and 'valid', but received padding mode ${this.padding}`)}build(e){if(e=GD(e),e.length!==5)throw new J(`Input should have rank 5; Received input shape: `+JSON.stringify(e));let t=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[t]==null)throw new J("The channel dimension of the inputs should be defined. Found `None`.");let n=e[t],r=this.kernelSize.concat([this.filters,n]);this.kernel=this.addWeight(`kernel`,r,`float32`,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight(`bias`,[this.filters],`float32`,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint)),this.inputSpec=[new tO({ndim:5,axes:{[t]:n}})],this.built=!0}call(e,t){return B(()=>{let t=WD(e);if(t.shape.length!==5)throw new J(`Conv3DTranspose.call() expects input tensor to be rank-4, but received a tensor of rank-${t.shape.length}`);let n=t.shape,r=n[0],i,a,o;this.dataFormat===`channelsFirst`?(o=2,i=3,a=4):(o=1,i=2,a=3);let s=n[o],c=n[i],l=n[a],u=this.kernelSize[0],d=this.kernelSize[1],f=this.kernelSize[2],p=this.strides[0],m=this.strides[1],h=this.strides[2],g=[r,Ej(s,p,u,this.padding),Ej(c,m,d,this.padding),Ej(l,h,f,this.padding),this.filters];this.dataFormat!==`channelsLast`&&(t=Lh(t,[0,2,3,4,1]));let _=jl(t,this.kernel.read(),g,this.strides,this.padding);return this.dataFormat!==`channelsLast`&&(_=Lh(_,[0,4,1,2,3])),this.bias!==null&&(_=hD(_,this.bias.read(),this.dataFormat)),this.activation!==null&&(_=this.activation.apply(_)),_})}computeOutputShape(e){e=GD(e);let t=e.slice(),n,r,i,a;this.dataFormat===`channelsFirst`?(n=1,r=2,i=3,a=4):(n=4,r=1,i=2,a=3);let o=this.kernelSize[0],s=this.kernelSize[1],c=this.kernelSize[2],l=this.strides[0],u=this.strides[1],d=this.strides[2];return t[n]=this.filters,t[r]=Ej(t[r],l,o,this.padding),t[i]=Ej(t[i],u,s,this.padding),t[a]=Ej(t[a],d,c,this.padding),t}getConfig(){let e=super.getConfig();return delete e.dilationRate,e}},Rj.className=`Conv3DTranspose`,K(Rj),zj=class extends Pj{constructor(e,t){if(super(e,t),this.DEFAULT_DEPTHWISE_INITIALIZER=`glorotUniform`,this.DEFAULT_POINTWISE_INITIALIZER=`glorotUniform`,this.depthwiseKernel=null,this.pointwiseKernel=null,t.filters==null)throw new J("The `filters` configuration field is required by SeparableConv, but is unspecified.");if(t.kernelInitializer!=null||t.kernelRegularizer!=null||t.kernelConstraint!=null)throw new J(`Fields kernelInitializer, kernelRegularizer and kernelConstraint are invalid for SeparableConv2D. Use depthwiseInitializer, depthwiseRegularizer, depthwiseConstraint, pointwiseInitializer, pointwiseRegularizer and pointwiseConstraint instead.`);if(t.padding!=null&&t.padding!==`same`&&t.padding!==`valid`)throw new J(`SeparableConv${this.rank}D supports only padding modes: 'same' and 'valid', but received ${JSON.stringify(t.padding)}`);this.depthMultiplier=t.depthMultiplier==null?1:t.depthMultiplier,this.depthwiseInitializer=CD(t.depthwiseInitializer||this.DEFAULT_DEPTHWISE_INITIALIZER),this.depthwiseRegularizer=fj(t.depthwiseRegularizer),this.depthwiseConstraint=DO(t.depthwiseConstraint),this.pointwiseInitializer=CD(t.depthwiseInitializer||this.DEFAULT_POINTWISE_INITIALIZER),this.pointwiseRegularizer=fj(t.pointwiseRegularizer),this.pointwiseConstraint=DO(t.pointwiseConstraint)}build(e){if(e=GD(e),e.length<this.rank+2)throw new J(`Inputs to SeparableConv${this.rank}D should have rank ${this.rank+2}, but received input shape: ${JSON.stringify(e)}`);let t=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[t]==null||e[t]<0)throw new J(`The channel dimension of the inputs should be defined, but found ${JSON.stringify(e[t])}`);let n=e[t],r=this.kernelSize.concat([n,this.depthMultiplier]),i=[];for(let e=0;e<this.rank;++e)i.push(1);i.push(n*this.depthMultiplier,this.filters),this.depthwiseKernel=this.addWeight(`depthwise_kernel`,r,`float32`,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.pointwiseKernel=this.addWeight(`pointwise_kernel`,i,`float32`,this.pointwiseInitializer,this.pointwiseRegularizer,!0,this.pointwiseConstraint),this.useBias?this.bias=this.addWeight(`bias`,[this.filters],`float32`,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.inputSpec=[new tO({ndim:this.rank+2,axes:{[t]:n}})],this.built=!0}call(e,t){return B(()=>{e=WD(e);let t;if(this.rank===1)throw new tE(`1D separable convolution is not implemented yet.`);return this.rank===2&&(this.dataFormat===`channelsFirst`&&(e=Lh(e,[0,2,3,1])),t=lm(e,this.depthwiseKernel.read(),this.pointwiseKernel.read(),this.strides,this.padding,this.dilationRate,`NHWC`)),this.useBias&&(t=hD(t,this.bias.read(),this.dataFormat)),this.activation!=null&&(t=this.activation.apply(t)),this.dataFormat===`channelsFirst`&&(t=Lh(t,[0,3,1,2])),t})}getConfig(){let e=super.getConfig();return delete e.rank,delete e.kernelInitializer,delete e.kernelRegularizer,delete e.kernelConstraint,e.depthwiseInitializer=SD(this.depthwiseInitializer),e.pointwiseInitializer=SD(this.pointwiseInitializer),e.depthwiseRegularizer=uj(this.depthwiseRegularizer),e.pointwiseRegularizer=uj(this.pointwiseRegularizer),e.depthwiseConstraint=TO(this.depthwiseConstraint),e.pointwiseConstraint=TO(this.pointwiseConstraint),e}},zj.className=`SeparableConv`,Bj=class extends zj{constructor(e){super(2,e)}},Bj.className=`SeparableConv2D`,K(Bj),Vj=class e extends Pj{constructor(t){super(1,t),e.verifyArgs(t),this.inputSpec=[{ndim:3}]}getConfig(){let e=super.getConfig();return delete e.rank,delete e.dataFormat,e}static verifyArgs(e){if(typeof e.kernelSize!=`number`&&!vE(e.kernelSize,`number`,1,1))throw new J(`Conv1D expects config.kernelSize to be number or number[] with length 1, but received ${JSON.stringify(e.kernelSize)}.`)}},Vj.className=`Conv1D`,K(Vj),Hj=class extends oO{constructor(e){super(e),typeof e.cropping==`number`?this.cropping=[[e.cropping,e.cropping],[e.cropping,e.cropping]]:typeof e.cropping[0]==`number`?this.cropping=[[e.cropping[0],e.cropping[0]],[e.cropping[1],e.cropping[1]]]:this.cropping=e.cropping,this.dataFormat=e.dataFormat===void 0?`channelsLast`:e.dataFormat,this.inputSpec=[{ndim:4}]}computeOutputShape(e){return this.dataFormat===`channelsFirst`?[e[0],e[1],e[2]-this.cropping[0][0]-this.cropping[0][1],e[3]-this.cropping[1][0]-this.cropping[1][1]]:[e[0],e[1]-this.cropping[0][0]-this.cropping[0][1],e[2]-this.cropping[1][0]-this.cropping[1][1],e[3]]}call(e,t){return B(()=>(e=WD(e),this.dataFormat===`channelsLast`?oD(oD(e,this.cropping[0][0],e.shape[1]-this.cropping[0][0]-this.cropping[0][1],2),this.cropping[1][0],e.shape[2]-this.cropping[1][1]-this.cropping[1][0],3):oD(oD(e,this.cropping[0][0],e.shape[2]-this.cropping[0][0]-this.cropping[0][1],3),this.cropping[1][0],e.shape[3]-this.cropping[1][1]-this.cropping[1][0],4)))}getConfig(){let e={cropping:this.cropping,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},Hj.className=`Cropping2D`,K(Hj),Uj=class extends oO{constructor(e){super(e),this.DEFAULT_SIZE=[2,2],this.inputSpec=[{ndim:4}],this.size=e.size==null?this.DEFAULT_SIZE:e.size,this.dataFormat=e.dataFormat==null?`channelsLast`:e.dataFormat,FE(this.dataFormat),this.interpolation=e.interpolation==null?`nearest`:e.interpolation,Gne(this.interpolation)}computeOutputShape(e){if(this.dataFormat===`channelsFirst`){let t=e[2]==null?null:this.size[0]*e[2],n=e[3]==null?null:this.size[1]*e[3];return[e[0],e[1],t,n]}else{let t=e[1]==null?null:this.size[0]*e[1],n=e[2]==null?null:this.size[1]*e[2];return[e[0],t,n,e[3]]}}call(e,t){return B(()=>{let t=WD(e),n=t.shape;if(this.dataFormat===`channelsFirst`){t=Lh(t,[0,2,3,1]);let e=this.size[0]*n[2],r=this.size[1]*n[3],i=this.interpolation===`nearest`?y_.resizeNearestNeighbor(t,[e,r]):y_.resizeBilinear(t,[e,r]);return Lh(i,[0,3,1,2])}else{let e=this.size[0]*n[1],r=this.size[1]*n[2];return this.interpolation===`nearest`?y_.resizeNearestNeighbor(t,[e,r]):y_.resizeBilinear(t,[e,r])}})}getConfig(){let e={size:this.size,dataFormat:this.dataFormat,interpolation:this.interpolation},t=super.getConfig();return Object.assign(e,t),e}},Uj.className=`UpSampling2D`,K(Uj)}));function Gj(e,t,n=[1,1],r=`valid`,i,a){return B(()=>{i??=$E(),FE(i);let o=Oj(e,i);if(e.rank!==4)throw new J(`Input for depthwiseConv2d is required to be 4-D, but is instead ${e.rank}-D`);if(t.rank!==4)throw new J(`depthwiseKernel is required to be 4-D, but is instead ${t.rank}-D`);return o=Kl(o,t,n,r===`same`?`same`:`valid`,`NHWC`,a),i===`channelsFirst`&&(o=Lh(o,[0,3,1,2])),o})}var Kj,qj=o((()=>{q(),tD(),vD(),KE(),PO(),rE(),VD(),gj(),Dj(),KD(),Wj(),Kj=class extends Nj{constructor(e){super(2,e),this.depthwiseKernel=null,this.depthMultiplier=e.depthMultiplier==null?1:e.depthMultiplier,this.depthwiseInitializer=CD(e.depthwiseInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.depthwiseConstraint=DO(e.depthwiseConstraint),this.depthwiseRegularizer=fj(e.depthwiseRegularizer)}build(e){if(e=GD(e),e.length<4)throw new J(`Inputs to DepthwiseConv2D should have rank 4. Received input shape: ${JSON.stringify(e)}.`);let t=this.dataFormat===`channelsFirst`?1:3;if(e[t]==null||e[t]<0)throw new J(`The channel dimension of the inputs to DepthwiseConv2D should be defined, but is not (${e[t]}).`);let n=e[t],r=[this.kernelSize[0],this.kernelSize[1],n,this.depthMultiplier];this.depthwiseKernel=this.addWeight(`depthwise_kernel`,r,null,this.depthwiseInitializer,this.depthwiseRegularizer,!0,this.depthwiseConstraint),this.useBias?this.bias=this.addWeight(`bias`,[n*this.depthMultiplier],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(e,t){return B(()=>{e=WD(e);let t=Gj(e,this.depthwiseKernel.read(),this.strides,this.padding,this.dataFormat,null);return this.useBias&&(t=hD(t,this.bias.read(),this.dataFormat)),this.activation!=null&&(t=this.activation.apply(t)),t})}computeOutputShape(e){e=GD(e);let t=this.dataFormat===`channelsFirst`?e[2]:e[1],n=this.dataFormat===`channelsFirst`?e[3]:e[2],r=this.dataFormat===`channelsFirst`?e[1]*this.depthMultiplier:e[3]*this.depthMultiplier,i=Tj(t,this.kernelSize[0],this.padding,this.strides[0]),a=Tj(n,this.kernelSize[1],this.padding,this.strides[1]);return this.dataFormat===`channelsFirst`?[e[0],r,i,a]:[e[0],i,a,r]}getConfig(){let e=super.getConfig();return e.depthMultiplier=this.depthMultiplier,e.depthwiseInitializer=SD(this.depthwiseInitializer),e.depthwiseRegularizer=uj(this.depthwiseRegularizer),e.depthwiseConstraint=TO(this.depthwiseRegularizer),e}},Kj.className=`DepthwiseConv2D`,K(Kj)}));function Jj(e,t,n,r){if(Array.isArray(e)){if(t!=null||n!=null)throw new J(`When inputs is an array, neither initialState or constants should be provided`);r!=null&&(n=e.slice(e.length-r,e.length),e=e.slice(0,e.length-r)),e.length>1&&(t=e.slice(1,e.length)),e=e[0]}function i(e){return e==null||Array.isArray(e)?e:[e]}return t=i(t),n=i(n),{inputs:e,initialState:t,constants:n}}function Yj(e,t,n,r=!1,i,a,o=!1,s=!1){return B(()=>{let c=t.shape.length;if(c<3)throw new J(`Input should be at least 3D, but is ${c}D.`);let l=[1,0].concat(XE(2,c));if(t=Lh(t,l),a!=null)throw new tE(`The rnn() functoin of the deeplearn.js backend does not support constants yet.`);o&&console.warn(`Backend rnn(): the unroll = true option is not applicable to the imperative deeplearn.js backend.`),i!=null&&(i=V(V(i,`bool`),`float32`),i.rank===c-1&&(i=qu(i,-1)),i=Lh(i,l)),r&&(t=Zp(t,0),i!=null&&(i=Zp(i,0)));let u=[],d,f=n,p=t.shape[0],m=Nh(t),h;i!=null&&(h=Nh(i));for(let t=0;t<p;++t){let n=m[t],r=B(()=>e(n,f));if(i==null)d=r[0],f=r[1];else{let e=B(()=>{let e=h[t],n=Xd($f(e),e);return{output:H(U(r[0],e),U(f[0],n)),newStates:f.map((t,i)=>H(U(r[1][i],e),U(t,n)))}});d=e.output,f=e.newStates}s&&u.push(d)}let g;return s&&(g=rh(u,1)),[d,g,f]})}function Xj(e){let{ones:t,rate:n,training:r=!1,count:i=1,dropoutFunc:a}=e,o=()=>a==null?gD(t(),n):a(t(),n),s=()=>_D(o,t,r);return!i||i<=1?Xa(s().clone()):Array(i).fill(void 0).map(s).map(e=>Xa(e.clone()))}var Zj,Qj,$j,eM,tM,nM,rM,iM,aM,oM=o((()=>{q(),cj(),vD(),KE(),PO(),sO(),rE(),VD(),gj(),CE(),ZE(),KD(),$D(),ZO(),Zj=class e extends oO{constructor(e){super(e);let t;if(e.cell==null)throw new J(`cell property is missing for the constructor of RNN.`);if(t=Array.isArray(e.cell)?new aM({cells:e.cell}):e.cell,t.stateSize==null)throw new J("The RNN cell should have an attribute `stateSize` (tuple of integers, one integer per RNN state).");this.cell=t,this.returnSequences=e.returnSequences!=null&&e.returnSequences,this.returnState=e.returnState!=null&&e.returnState,this.goBackwards=e.goBackwards!=null&&e.goBackwards,this._stateful=e.stateful!=null&&e.stateful,this.unroll=e.unroll!=null&&e.unroll,this.supportsMasking=!0,this.inputSpec=[new tO({ndim:3})],this.stateSpec=null,this.states_=null,this.numConstants=null,this.keptStates=[]}getStates(){return this.states_==null?XE(0,Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1).map(e=>null):this.states_}setStates(e){this.states_=e}computeOutputShape(e){HD(e)&&(e=e[0]),e=e;let t=this.cell.stateSize;Array.isArray(t)||(t=[t]);let n=t[0],r;if(r=this.returnSequences?[e[0],e[1],n]:[e[0],n],this.returnState){let n=[];for(let r of t)n.push([e[0],r]);return[r].concat(n)}else return r}computeMask(e,t){return B(()=>{Array.isArray(t)&&(t=t[0]);let e=this.returnSequences?t:null;if(this.returnState){let t=this.states.map(e=>null);return[e].concat(t)}else return e})}get states(){if(this.states_==null){let e=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1,t=[];for(let n=0;n<e;++n)t.push(null);return t}else return this.states_}set states(e){this.states_=e}build(e){if(this.numConstants!=null)throw new tE(`Constants support is not implemented in RNN yet.`);HD(e)&&(e=e[0]),e=e;let t=this.stateful?e[0]:null,n=e.slice(2);this.inputSpec[0]=new tO({shape:[t,null,...n]});let r=[e[0]].concat(e.slice(2));this.cell.build(r);let i;if(i=Array.isArray(this.cell.stateSize)?this.cell.stateSize:[this.cell.stateSize],this.stateSpec!=null){if(!ge(this.stateSpec.map(e=>e.shape[e.shape.length-1]),i))throw new J(`An initialState was passed that is not compatible with cell.stateSize. Received stateSpec=${this.stateSpec}; However cell.stateSize is ${this.cell.stateSize}`)}else this.stateSpec=i.map(e=>new tO({shape:[null,e]}));this.stateful&&this.resetStates()}resetStates(e,t=!1){B(()=>{if(!this.stateful)throw new $T(`Cannot call resetStates() on an RNN Layer that is not stateful.`);let n=this.inputSpec[0].shape[0];if(n==null)throw new J("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.states_==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(e=>Af([n,e])):this.states_=[Af([n,this.cell.stateSize])];else if(e==null)Ya(this.states_),this.keptStates!=null&&(Ya(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(e=>Af([n,e])):this.states_[0]=Af([n,this.cell.stateSize]);else{if(Array.isArray(e)||(e=[e]),e.length!==this.states_.length)throw new J(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${e.length} state value(s). Input received: ${e}`);t===!0?this.keptStates.push(this.states_.slice()):Ya(this.states_);for(let t=0;t<this.states_.length;++t){let r=e[t],i=[n,Array.isArray(this.cell.stateSize)?this.cell.stateSize[t]:this.cell.stateSize];if(!ge(r.shape,i))throw new J(`State ${t} is incompatible with layer ${this.name}: expected shape=${i}, received shape=${r.shape}`);this.states_[t]=r}}this.states_=this.states_.map(e=>Xa(e.clone()))})}apply(e,t){let n=t==null?null:t.initialState,r=t==null?null:t.constants;t??={};let i=Jj(e,n,r,this.numConstants);e=i.inputs,n=i.initialState,r=i.constants;let a=[],o=[];if(n!=null){t.initialState=n,a=a.concat(n),this.stateSpec=[];for(let e of n)this.stateSpec.push(new tO({shape:e.shape}));o=o.concat(this.stateSpec)}if(r!=null&&(t.constants=r,a=a.concat(r),this.numConstants=r.length),a[0]instanceof nO){let n=[e].concat(a),r=this.inputSpec.concat(o),i=this.inputSpec;this.inputSpec=r;let s=super.apply(n,t);return this.inputSpec=i,s}else return super.apply(e,t)}call(e,t){return B(()=>{let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;e=WD(e),i??=this.stateful?this.states_:this.getInitialState(e);let a=Array.isArray(this.cell.stateSize)?this.cell.stateSize.length:1;if(i.length!==a)throw new J(`RNN Layer has ${a} state(s) but was passed ${i.length} initial state(s).`);this.unroll&&console.warn(`Ignoring unroll = true for RNN layer, due to imperative backend.`);let o={training:r},s=Yj((e,t)=>{let n=this.cell.call([e].concat(t),o);return[n[0],n.slice(1)]},e,i,this.goBackwards,n,null,this.unroll,this.returnSequences),c=s[0],l=s[1],u=s[2];this.stateful&&this.resetStates(u,r);let d=this.returnSequences?l:c;return this.returnState?[d].concat(u):d})}getInitialState(e){return B(()=>{let t=Af(e.shape);return t=Ru(t,[1,2]),t=rD(t),Array.isArray(this.cell.stateSize)?this.cell.stateSize.map(e=>e>1?lD(t,[1,e]):t):this.cell.stateSize>1?[lD(t,[1,this.cell.stateSize])]:[t]})}get trainableWeights(){return this.trainable?this.cell.trainableWeights:[]}get nonTrainableWeights(){return this.trainable?this.cell.nonTrainableWeights:this.cell.weights}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.cell!=null&&this.cell.setFastWeightInitDuringBuild(e)}getConfig(){let t=super.getConfig(),n={returnSequences:this.returnSequences,returnState:this.returnState,goBackwards:this.goBackwards,stateful:this.stateful,unroll:this.unroll};this.numConstants!=null&&(n.numConstants=this.numConstants);let r=this.cell.getConfig();return this.getClassName()===e.className&&(n.cell={className:this.cell.getClassName(),config:r}),Object.assign(Object.assign(Object.assign({},r),t),n)}static fromConfig(e,t,n={}){let r=t.cell,i=XO(r,n);return new e(Object.assign(t,{cell:i}))}},Zj.className=`RNN`,K(Zj),Qj=class extends oO{},$j=class extends Qj{constructor(e){super(e),this.DEFAULT_ACTIVATION=`tanh`,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_RECURRENT_INITIALIZER=`orthogonal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,this.units=e.units,yE(this.units,`units`),this.activation=WA(e.activation==null?this.DEFAULT_ACTIVATION:e.activation),this.useBias=e.useBias==null||e.useBias,this.kernelInitializer=CD(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=CD(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=CD(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=fj(e.kernelRegularizer),this.recurrentRegularizer=fj(e.recurrentRegularizer),this.biasRegularizer=fj(e.biasRegularizer),this.kernelConstraint=DO(e.kernelConstraint),this.recurrentConstraint=DO(e.recurrentConstraint),this.biasConstraint=DO(e.biasConstraint),this.dropout=JE([1,YE([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=JE([1,YE([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){e=GD(e),this.kernel=this.addWeight(`kernel`,[e[e.length-1],this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight(`recurrent_kernel`,[this.units,this.units],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight(`bias`,[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(e,t){return B(()=>{if(e=e,e.length!==2)throw new J(`SimpleRNNCell expects 2 input Tensors, got ${e.length}.`);let n=e[1];e=e[0];let r=t.training!=null&&t.training;0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Xj({ones:()=>$f(e),rate:this.dropout,training:r,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Xj({ones:()=>$f(n),rate:this.recurrentDropout,training:r,dropoutFunc:this.dropoutFunc}));let i,a=this.dropoutMask,o=this.recurrentDropoutMask;i=dD(a==null?e:U(e,a),this.kernel.read()),this.bias!=null&&(i=hD(i,this.bias.read())),o!=null&&(n=U(n,o));let s=H(i,dD(n,this.recurrentKernel.read()));return this.activation!=null&&(s=this.activation.apply(s)),[s,s]})}getConfig(){let e=super.getConfig(),t={units:this.units,activation:HA(this.activation),useBias:this.useBias,kernelInitializer:SD(this.kernelInitializer),recurrentInitializer:SD(this.recurrentInitializer),biasInitializer:SD(this.biasInitializer),kernelRegularizer:uj(this.kernelRegularizer),recurrentRegularizer:uj(this.recurrentRegularizer),biasRegularizer:uj(this.biasRegularizer),activityRegularizer:uj(this.activityRegularizer),kernelConstraint:TO(this.kernelConstraint),recurrentConstraint:TO(this.recurrentConstraint),biasConstraint:TO(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout};return Object.assign(Object.assign({},e),t)}},$j.className=`SimpleRNNCell`,K($j),eM=class extends Zj{constructor(e){e.cell=new $j(e),super(e)}call(e,t){return B(()=>{this.cell.dropoutMask!=null&&(Ya(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Ya(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;return super.call(e,{mask:n,training:r,initialState:i})})}static fromConfig(e,t){return new e(t)}},eM.className=`SimpleRNN`,K(eM),tM=class extends Qj{constructor(e){if(super(e),this.DEFAULT_ACTIVATION=`tanh`,this.DEFAULT_RECURRENT_ACTIVATION=`hardSigmoid`,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_RECURRENT_INITIALIZER=`orthogonal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,e.resetAfter)throw new J(`GRUCell does not support reset_after parameter set to true.`);this.units=e.units,yE(this.units,`units`),this.activation=WA(e.activation===void 0?this.DEFAULT_ACTIVATION:e.activation),this.recurrentActivation=WA(e.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:e.recurrentActivation),this.useBias=e.useBias==null||e.useBias,this.kernelInitializer=CD(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=CD(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=CD(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelRegularizer=fj(e.kernelRegularizer),this.recurrentRegularizer=fj(e.recurrentRegularizer),this.biasRegularizer=fj(e.biasRegularizer),this.kernelConstraint=DO(e.kernelConstraint),this.recurrentConstraint=DO(e.recurrentConstraint),this.biasConstraint=DO(e.biasConstraint),this.dropout=JE([1,YE([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=JE([1,YE([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.implementation=e.implementation,this.stateSize=this.units,this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){e=GD(e);let t=e[e.length-1];this.kernel=this.addWeight(`kernel`,[t,this.units*3],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight(`recurrent_kernel`,[this.units,this.units*3],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias?this.bias=this.addWeight(`bias`,[this.units*3],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint):this.bias=null,this.built=!0}call(e,t){return B(()=>{if(e=e,e.length!==2)throw new J(`GRUCell expects 2 input Tensors (inputs, h, c), got ${e.length}.`);let n=t.training!=null&&t.training,r=e[1];e=e[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Xj({ones:()=>$f(e),rate:this.dropout,training:n,count:3,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Xj({ones:()=>$f(r),rate:this.recurrentDropout,training:n,count:3,dropoutFunc:this.dropoutFunc}));let i=this.dropoutMask,a=this.recurrentDropoutMask,o,s,c;0<this.dropout&&this.dropout<1&&(e=U(e,i[0]));let l=dD(e,this.kernel.read());this.useBias&&(l=hD(l,this.bias.read())),0<this.recurrentDropout&&this.recurrentDropout<1&&(r=U(r,a[0]));let u=this.recurrentKernel.read(),[d,f]=Gm(u,[2*this.units,this.units],u.rank-1),p=dD(r,d),[m,h,g]=Gm(l,3,l.rank-1),[_,v]=Gm(p,2,p.rank-1);o=this.recurrentActivation.apply(H(m,_)),s=this.recurrentActivation.apply(H(h,v));let y=dD(U(s,r),f);c=this.activation.apply(H(g,y));let b=H(U(o,r),U(H(1,Vd(o)),c));return[b,b]})}getConfig(){let e=super.getConfig(),t={units:this.units,activation:HA(this.activation),recurrentActivation:HA(this.recurrentActivation),useBias:this.useBias,kernelInitializer:SD(this.kernelInitializer),recurrentInitializer:SD(this.recurrentInitializer),biasInitializer:SD(this.biasInitializer),kernelRegularizer:uj(this.kernelRegularizer),recurrentRegularizer:uj(this.recurrentRegularizer),biasRegularizer:uj(this.biasRegularizer),activityRegularizer:uj(this.activityRegularizer),kernelConstraint:TO(this.kernelConstraint),recurrentConstraint:TO(this.recurrentConstraint),biasConstraint:TO(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation,resetAfter:!1};return Object.assign(Object.assign({},e),t)}},tM.className=`GRUCell`,K(tM),nM=class extends Zj{constructor(e){e.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),e.cell=new tM(e),super(e)}call(e,t){return B(()=>{this.cell.dropoutMask!=null&&(Ya(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Ya(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;return super.call(e,{mask:n,training:r,initialState:i})})}static fromConfig(e,t){return t.implmentation===0&&(t.implementation=1),new e(t)}},nM.className=`GRU`,K(nM),rM=class extends Qj{constructor(e){super(e),this.DEFAULT_ACTIVATION=`tanh`,this.DEFAULT_RECURRENT_ACTIVATION=`hardSigmoid`,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_RECURRENT_INITIALIZER=`orthogonal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,this.units=e.units,yE(this.units,`units`),this.activation=WA(e.activation===void 0?this.DEFAULT_ACTIVATION:e.activation),this.recurrentActivation=WA(e.recurrentActivation===void 0?this.DEFAULT_RECURRENT_ACTIVATION:e.recurrentActivation),this.useBias=e.useBias==null||e.useBias,this.kernelInitializer=CD(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.recurrentInitializer=CD(e.recurrentInitializer||this.DEFAULT_RECURRENT_INITIALIZER),this.biasInitializer=CD(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.unitForgetBias=e.unitForgetBias,this.kernelRegularizer=fj(e.kernelRegularizer),this.recurrentRegularizer=fj(e.recurrentRegularizer),this.biasRegularizer=fj(e.biasRegularizer),this.kernelConstraint=DO(e.kernelConstraint),this.recurrentConstraint=DO(e.recurrentConstraint),this.biasConstraint=DO(e.biasConstraint),this.dropout=JE([1,YE([0,e.dropout==null?0:e.dropout])]),this.recurrentDropout=JE([1,YE([0,e.recurrentDropout==null?0:e.recurrentDropout])]),this.dropoutFunc=e.dropoutFunc,this.implementation=e.implementation,this.stateSize=[this.units,this.units],this.dropoutMask=null,this.recurrentDropoutMask=null}build(e){var t;e=GD(e);let n=e[e.length-1];this.kernel=this.addWeight(`kernel`,[n,this.units*4],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.recurrentKernel=this.addWeight(`recurrent_kernel`,[this.units,this.units*4],null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint);let r;if(this.useBias){if(this.unitForgetBias){let e=this.biasInitializer,n=this.units;r=new(t=class extends wD{apply(t,r){let i=e.apply([n]),a=new ED().apply([n]),o=e.apply([n*2]);return cD(cD(i,a),o)}},t.className=`CustomInit`,t)}else r=this.biasInitializer;this.bias=this.addWeight(`bias`,[this.units*4],null,r,this.biasRegularizer,!0,this.biasConstraint)}else this.bias=null;this.built=!0}call(e,t){return B(()=>{let n=t.training!=null&&t.training;if(e=e,e.length!==3)throw new J(`LSTMCell expects 3 input Tensors (inputs, h, c), got ${e.length}.`);let r=e[1],i=e[2];e=e[0],0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Xj({ones:()=>$f(e),rate:this.dropout,training:n,count:4,dropoutFunc:this.dropoutFunc})),0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Xj({ones:()=>$f(r),rate:this.recurrentDropout,training:n,count:4,dropoutFunc:this.dropoutFunc}));let a=this.dropoutMask,o=this.recurrentDropoutMask,s,c,l,u;0<this.dropout&&this.dropout<1&&(e=U(e,a[0]));let d=dD(e,this.kernel.read());0<this.recurrentDropout&&this.recurrentDropout<1&&(r=U(r,o[0])),d=H(d,dD(r,this.recurrentKernel.read())),this.useBias&&(d=hD(d,this.bias.read()));let[f,p,m,h]=Gm(d,4,d.rank-1);s=this.recurrentActivation.apply(f),c=this.recurrentActivation.apply(p),l=H(U(c,i),U(s,this.activation.apply(m))),u=this.recurrentActivation.apply(h);let g=U(u,this.activation.apply(l));return[g,g,l]})}getConfig(){let e=super.getConfig(),t={units:this.units,activation:HA(this.activation),recurrentActivation:HA(this.recurrentActivation),useBias:this.useBias,kernelInitializer:SD(this.kernelInitializer),recurrentInitializer:SD(this.recurrentInitializer),biasInitializer:SD(this.biasInitializer),unitForgetBias:this.unitForgetBias,kernelRegularizer:uj(this.kernelRegularizer),recurrentRegularizer:uj(this.recurrentRegularizer),biasRegularizer:uj(this.biasRegularizer),activityRegularizer:uj(this.activityRegularizer),kernelConstraint:TO(this.kernelConstraint),recurrentConstraint:TO(this.recurrentConstraint),biasConstraint:TO(this.biasConstraint),dropout:this.dropout,recurrentDropout:this.recurrentDropout,implementation:this.implementation};return Object.assign(Object.assign({},e),t)}},rM.className=`LSTMCell`,K(rM),iM=class extends Zj{constructor(e){e.implementation===0&&console.warn("`implementation=0` has been deprecated, and now defaults to `implementation=1`. Please update your layer call."),e.cell=new rM(e),super(e)}call(e,t){return B(()=>{this.cell.dropoutMask!=null&&(Ya(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Ya(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null);let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;return super.call(e,{mask:n,training:r,initialState:i})})}static fromConfig(e,t){return t.implmentation===0&&(t.implementation=1),new e(t)}},iM.className=`LSTM`,K(iM),aM=class extends Qj{constructor(e){super(e),this.cells=e.cells}get stateSize(){let e=[];for(let t of this.cells.slice().reverse())Array.isArray(t.stateSize)?e.push(...t.stateSize):e.push(t.stateSize);return e}call(e,t){return B(()=>{e=e;let n=e.slice(1),r=[];for(let e of this.cells.slice().reverse())Array.isArray(e.stateSize)?r.push(n.splice(0,e.stateSize.length)):r.push(n.splice(0,1));r.reverse();let i=[],a;for(let o=0;o<this.cells.length;++o){let s=this.cells[o];n=r[o],a=o===0?[e[0]].concat(n):[a[0]].concat(n),a=s.call(a,t),i.push(a.slice(1))}n=[];for(let e of i.slice().reverse())n.push(...e);return[a[0]].concat(n)})}build(e){HD(e)&&(e=e[0]),e=e;let t;this.cells.forEach((n,r)=>{RE(`RNNCell_${r}`,()=>{n.build(e),t=Array.isArray(n.stateSize)?n.stateSize[0]:n.stateSize,e=[e[0],t]})}),this.built=!0}getConfig(){let e=super.getConfig(),t={cells:this.cells.map(e=>({className:e.getClassName(),config:e.getConfig()}))};return Object.assign(Object.assign({},e),t)}static fromConfig(e,t,n={}){let r=[];for(let e of t.cells)r.push(XO(e,n));return new e({cells:r})}get trainableWeights(){if(!this.trainable)return[];let e=[];for(let t of this.cells)e.push(...t.trainableWeights);return e}get nonTrainableWeights(){let e=[];for(let t of this.cells)e.push(...t.nonTrainableWeights);if(!this.trainable){let t=[];for(let e of this.cells)t.push(...e.trainableWeights);return t.concat(e)}return e}getWeights(){let e=[];for(let t of this.cells)e.push(...t.weights);return YD(e)}setWeights(e){let t=[];for(let n of this.cells){let r=n.weights.length,i=e.splice(r);for(let e=0;e<n.weights.length;++e)t.push([n.weights[e],i[e]])}XD(t)}},aM.className=`StackedRNNCells`,K(aM)})),sM,cM,lM,uM,dM=o((()=>{q(),vD(),KE(),sO(),rE(),VD(),Dj(),CE(),KD(),oM(),sM=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==`function`)for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n},cM=class extends Zj{constructor(e){if(e.unroll)throw new tE(`Unrolling is not possible with convolutional RNNs.`);if(Array.isArray(e.cell))throw new tE(`It is not possible at the moment to stack convolutional cells.`);super(e),this.inputSpec=[new tO({ndim:5})]}call(e,t){return B(()=>{if(this.cell.dropoutMask!=null&&(Ya(this.cell.dropoutMask),this.cell.dropoutMask=null),this.cell.recurrentDropoutMask!=null&&(Ya(this.cell.recurrentDropoutMask),this.cell.recurrentDropoutMask=null),t&&t.constants)throw new J(`ConvRNN2D cell does not support constants`);let n=t==null?null:t.mask,r=t==null?null:t.training,i=t==null?null:t.initialState;return super.call(e,{mask:n,training:r,initialState:i})})}computeOutputShape(e){let t=this.computeSingleOutputShape(e);return this.returnSequences||(t=[t[0],...t.slice(2)]),this.returnState&&(t=[t,...[,,].fill([e[0],...t.slice(-3)])]),t}getInitialState(e){return B(()=>{let{stateSize:t}=this.cell,n=e.shape,r=this.computeSingleOutputShape(n),i=Af([r[0],...r.slice(2)]);return Array.isArray(t)?Array(t.length).fill(i):[i]})}resetStates(e,t=!1){B(()=>{if(!this.stateful)throw new $T(`Cannot call resetStates() on an RNN Layer that is not stateful.`);let n=this.inputSpec[0].shape,r=this.computeSingleOutputShape(n),i=[r[0],...r.slice(2)];if(n[0]==null)throw new J("If an RNN is stateful, it needs to know its batch size. Specify the batch size of your input tensors: \n- If using a Sequential model, specify the batch size by passing a `batchInputShape` option to your first layer.\n- If using the functional API, specify the batch size by passing a `batchShape` option to your Input layer.");if(this.getStates()==null)Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>Af(i)):this.states_=[Af(i)];else if(e==null)Ya(this.states_),this.keptStates!=null&&(Ya(this.keptStates),this.keptStates=[]),Array.isArray(this.cell.stateSize)?this.states_=this.cell.stateSize.map(()=>Af(i)):this.states_[0]=Af(i);else{if(Array.isArray(e)||(e=[e]),e.length!==this.states_.length)throw new J(`Layer ${this.name} expects ${this.states_.length} state(s), but it received ${e.length} state value(s). Input received: ${e}`);t?this.keptStates.push(this.states_.slice()):Ya(this.states_);for(let t=0;t<this.states_.length;++t){let n=e[t],r=i;if(!ge(n.shape,r))throw new J(`State ${t} is incompatible with layer ${this.name}: expected shape=${r}, received shape=${n.shape}`);this.states_[t]=n}}this.states_=this.states_.map(e=>Xa(e.clone()))})}computeSingleOutputShape(e){let{dataFormat:t,filters:n,kernelSize:r,padding:i,strides:a,dilationRate:o}=this.cell,s=t===`channelsFirst`,c=e[s?3:2],l=e[s?4:3],u=Tj(c,r[0],i,a[0],o[0]),d=Tj(l,r[1],i,a[1],o[1]);return[...e.slice(0,2),...s?[n,u,d]:[u,d,n]]}},cM.className=`ConvRNN2D`,lM=class extends rM{constructor(e){let{filters:t,kernelSize:n,strides:r,padding:i,dataFormat:a,dilationRate:o}=e;super(Object.assign(Object.assign({},e),{units:t})),this.filters=t,yE(this.filters,`filters`),this.kernelSize=wj(n,2,`kernelSize`),this.kernelSize.forEach(e=>yE(e,`kernelSize`)),this.strides=wj(r||1,2,`strides`),this.strides.forEach(e=>yE(e,`strides`)),this.padding=i||`valid`,IE(this.padding),this.dataFormat=a||`channelsLast`,FE(this.dataFormat),this.dilationRate=wj(o||1,2,`dilationRate`),this.dilationRate.forEach(e=>yE(e,`dilationRate`))}build(e){var t;e=GD(e);let n=this.dataFormat===`channelsFirst`?1:e.length-1;if(e[n]==null)throw new J(`The channel dimension of the input should be defined. Found ${e[n]}`);let r=e[n],i=this.kernelSize.concat([r,this.filters*4]);this.kernel=this.addWeight(`kernel`,i,null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint);let a=this.kernelSize.concat([this.filters,this.filters*4]);if(this.recurrentKernel=this.addWeight(`recurrent_kernel`,a,null,this.recurrentInitializer,this.recurrentRegularizer,!0,this.recurrentConstraint),this.useBias){let e;if(this.unitForgetBias){let n=this.biasInitializer,r=this.filters;e=new(t=class extends wD{apply(e,t){return sD([n.apply([r]),Mf([r]),n.apply([r*2])])}},t.className=`CustomInit`,t)}else e=this.biasInitializer;this.bias=this.addWeight(`bias`,[this.filters*4],null,e,this.biasRegularizer,!0,this.biasConstraint)}this.built=!0}call(e,t){return B(()=>{if(e.length!==3)throw new J(`ConvLSTM2DCell expects 3 input Tensors (inputs, h, c), got ${e.length}.`);let n=t.training||!1,r=e[0],i=e[1],a=e[2];0<this.dropout&&this.dropout<1&&this.dropoutMask==null&&(this.dropoutMask=Xj({ones:()=>$f(r),rate:this.dropout,training:n,count:4,dropoutFunc:this.dropoutFunc}));let o=this.dropoutMask,s=(e,t,n)=>!t||!t[n]?e:U(t[n],e),c=s(r,o,0),l=s(r,o,1),u=s(r,o,2),d=s(r,o,3);0<this.recurrentDropout&&this.recurrentDropout<1&&this.recurrentDropoutMask==null&&(this.recurrentDropoutMask=Xj({ones:()=>$f(i),rate:this.recurrentDropout,training:n,count:4,dropoutFunc:this.dropoutFunc}));let f=this.recurrentDropoutMask,p=s(i,f,0),m=s(i,f,1),h=s(i,f,2),g=s(i,f,3),[_,v,y,b]=Gm(this.kernel.read(),4,3),[x,S,C,w]=this.useBias?Gm(this.bias.read(),4):[null,null,null,null];c=this.inputConv(c,_,x,this.padding),l=this.inputConv(l,v,S,this.padding),u=this.inputConv(u,y,C,this.padding),d=this.inputConv(d,b,w,this.padding);let[ee,te,T,ne]=Gm(this.recurrentKernel.read(),4,3);p=this.recurrentConv(p,ee),m=this.recurrentConv(m,te),h=this.recurrentConv(h,T),g=this.recurrentConv(g,ne);let re=this.recurrentActivation.apply(H(c,p)),ie=this.recurrentActivation.apply(H(l,m)),ae=H(U(ie,a),U(re,this.activation.apply(H(u,h)))),oe=U(this.recurrentActivation.apply(H(d,g)),this.activation.apply(ae));return[oe,oe,ae]})}getConfig(){let e=super.getConfig(),{units:t}=e,n=sM(e,[`units`]),r={filters:this.filters,kernelSize:this.kernelSize,padding:this.padding,dataFormat:this.dataFormat,dilationRate:this.dilationRate,strides:this.strides};return Object.assign(Object.assign({},n),r)}inputConv(e,t,n,r){let i=ml(e,t,this.strides,r||`valid`,this.dataFormat===`channelsFirst`?`NCHW`:`NHWC`,this.dilationRate);return n?hD(i,n,this.dataFormat):i}recurrentConv(e,t){return ml(e,t,1,`same`,this.dataFormat===`channelsFirst`?`NCHW`:`NHWC`)}},lM.className=`ConvLSTM2DCell`,K(lM),uM=class extends cM{constructor(e){let t=new lM(e);super(Object.assign(Object.assign({},e),{cell:t}))}static fromConfig(e,t){return new e(t)}},uM.className=`ConvLSTM2D`,K(uM)})),fM,pM,mM,hM,gM,_M,vM,yM,bM,xM=o((()=>{q(),cj(),vD(),PO(),sO(),rE(),VD(),gj(),CE(),ZE(),KD(),fM=class extends oO{constructor(e){super(e),this.rate=Math.max(Math.min(e.rate,1),0),this.noiseShape=e.noiseShape,this.seed=e.seed,this.supportsMasking=!0}getNoiseShape(e){if(this.noiseShape==null)return this.noiseShape;let t=e.shape,n=[];for(let e=0;e<this.noiseShape.length;++e)n.push(this.noiseShape[e]==null?t[e]:this.noiseShape[e]);return n}call(e,t){return B(()=>{this.invokeCallHook(e,t);let n=WD(e);if(0<this.rate&&this.rate<1){let e=t.training!=null&&t.training,r=this.getNoiseShape(n);return _D(()=>gD(n,this.rate,r,this.seed),()=>n,e)}return e})}getConfig(){let e={rate:this.rate,noiseShape:this.noiseShape,seed:this.seed},t=super.getConfig();return Object.assign(e,t),e}dispose(){return super.dispose()}},fM.className=`Dropout`,K(fM),pM=class extends fM{constructor(e){super(e),this.inputSpec=[{ndim:3}]}getNoiseShape(e){let t=e.shape;return[t[0],1,t[2]]}},pM.className=`SpatialDropout1D`,K(pM),mM=class extends oO{constructor(e){if(super(e),this.activation=null,this.useBias=!0,this.kernel=null,this.bias=null,this.DEFAULT_KERNEL_INITIALIZER=`glorotNormal`,this.DEFAULT_BIAS_INITIALIZER=`zeros`,e.batchInputShape==null&&e.inputShape==null&&e.inputDim!=null){let t=null;e.batchSize!=null&&(t=e.batchSize),this.batchInputShape=[t,e.inputDim]}this.units=e.units,yE(this.units,`units`),this.activation=WA(e.activation),e.useBias!=null&&(this.useBias=e.useBias),this.kernelInitializer=CD(e.kernelInitializer||this.DEFAULT_KERNEL_INITIALIZER),this.biasInitializer=CD(e.biasInitializer||this.DEFAULT_BIAS_INITIALIZER),this.kernelConstraint=DO(e.kernelConstraint),this.biasConstraint=DO(e.biasConstraint),this.kernelRegularizer=fj(e.kernelRegularizer),this.biasRegularizer=fj(e.biasRegularizer),this.activityRegularizer=fj(e.activityRegularizer),this.supportsMasking=!0,this.inputSpec=[{minNDim:2}]}build(e){e=GD(e);let t=e[e.length-1];this.kernel??(this.kernel=this.addWeight(`kernel`,[t,this.units],null,this.kernelInitializer,this.kernelRegularizer,!0,this.kernelConstraint),this.useBias&&(this.bias=this.addWeight(`bias`,[this.units],null,this.biasInitializer,this.biasRegularizer,!0,this.biasConstraint))),this.inputSpec=[{minNDim:2,axes:{[-1]:t}}],this.built=!0}computeOutputShape(e){e=GD(e);let t=e.slice();return t[t.length-1]=this.units,t}call(e,t){return B(()=>{this.invokeCallHook(e,t);let n=WD(e),r=xE(this.activation.getClassName()),i;return r==null?(i=dD(n,this.kernel.read()),this.bias!=null&&(i=hD(i,this.bias.read())),this.activation!=null&&(i=this.activation.apply(i))):i=dD(n,this.kernel.read(),r,this.bias?this.bias.read():null),i})}getConfig(){let e={units:this.units,activation:HA(this.activation),useBias:this.useBias,kernelInitializer:SD(this.kernelInitializer),biasInitializer:SD(this.biasInitializer),kernelRegularizer:uj(this.kernelRegularizer),biasRegularizer:uj(this.biasRegularizer),activityRegularizer:uj(this.activityRegularizer),kernelConstraint:TO(this.kernelConstraint),biasConstraint:TO(this.biasConstraint)},t=super.getConfig();return Object.assign(e,t),e}},mM.className=`Dense`,K(mM),hM=class extends oO{constructor(e){e||={},super(e),this.inputSpec=[{minNDim:3}],this.dataFormat=e.dataFormat}computeOutputShape(e){e=GD(e);for(let t of e.slice(1))if(t==null)throw new J(`The shape of the input to "Flatten" is not fully defined (got ${e.slice(1)}). Make sure to pass a complete "input_shape" or "batch_input_shape" argument to the first layer in your model.`);return[e[0],qE(e,1)]}call(e,t){return B(()=>{this.invokeCallHook(e,t);let n=WD(e);if(this.dataFormat===`channelsFirst`&&n.rank>1){let e=[0];for(let t=2;t<n.rank;++t)e.push(t);e.push(1),n=Lh(n,e)}return Xne(n)})}getConfig(){let e={};this.dataFormat!=null&&(e.dataFormat=this.dataFormat);let t=super.getConfig();return Object.assign(e,t),e}},hM.className=`Flatten`,K(hM),gM=class extends oO{constructor(e){super(e),this.supportsMasking=!0,this.activation=WA(e.activation)}call(e,t){return B(()=>{this.invokeCallHook(e,t);let n=WD(e);return this.activation.apply(n)})}getConfig(){let e={activation:HA(this.activation)},t=super.getConfig();return Object.assign(e,t),e}},gM.className=`Activation`,K(gM),_M=class extends oO{constructor(e){super(e),this.n=e.n,this.inputSpec=[{ndim:2}]}computeOutputShape(e){return[e[0],this.n,e[1]]}call(e,t){return B(()=>(e=WD(e),Jne(e,this.n)))}getConfig(){let e={n:this.n},t=super.getConfig();return Object.assign(e,t),e}},_M.className=`RepeatVector`,K(_M),vM=class extends oO{constructor(e){super(e),this.targetShape=e.targetShape;for(let e=0;e<this.targetShape.length;++e)this.isUnknown(this.targetShape[e])&&(this.targetShape[e]=null)}isUnknown(e){return e<0||e==null}fixUnknownDimension(e,t){let n=`Total size of new array must be unchanged.`,r=t.slice(),i=1,a=null;for(let e=0;e<r.length;++e){let t=r[e];if(this.isUnknown(t))if(a===null)a=e;else throw new J(`Can only specifiy one unknown dimension.`);else i*=t}let o=qE(e);if(a!==null){if(i===0||o%i!==0)throw new J(n);r[a]=o/i}else if(o!==i)throw new J(n);return r}computeOutputShape(e){let t=!1;for(let n=0;n<e.length;++n)if(this.isUnknown(e[n])){t=!0;break}return t?e.slice(0,1).concat(this.targetShape):e.slice(0,1).concat(this.fixUnknownDimension(e.slice(1),this.targetShape))}call(e,t){return B(()=>{this.invokeCallHook(e,t);let n=WD(e),r=n.shape;return W(n,r.slice(0,1).concat(this.fixUnknownDimension(r.slice(1),this.targetShape)))})}getConfig(){let e={targetShape:this.targetShape},t=super.getConfig();return Object.assign(e,t),e}},vM.className=`Reshape`,K(vM),yM=class extends oO{constructor(e){if(super(e),e.dims==null)throw Error("Required configuration field `dims` is missing during Permute constructor call.");if(!Array.isArray(e.dims))throw Error(`Permute constructor requires \`dims\` to be an Array, but received ${e.dims} instead.`);let t=XE(1,e.dims.length+1);if(!ge(e.dims.slice().sort(),t))throw Error("Invalid permutation `dims`: "+JSON.stringify(e.dims)+" `dims` must contain consecutive integers starting from 1.");this.dims=e.dims,this.dimsIncludingBatch=[0].concat(this.dims),this.inputSpec=[new tO({ndim:this.dims.length+1})]}computeOutputShape(e){e=GD(e);let t=e.slice();return this.dims.forEach((n,r)=>{t[r+1]=e[n]}),t}call(e,t){return Lh(WD(e),this.dimsIncludingBatch)}getConfig(){let e={dims:this.dims},t=super.getConfig();return Object.assign(e,t),e}},yM.className=`Permute`,K(yM),bM=class extends oO{constructor(e){super(e??{}),this.supportsMasking=!0,e==null?this.maskValue=0:this.maskValue=e.maskValue==null?0:e.maskValue}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={maskValue:this.maskValue};return Object.assign(t,e),t}computeMask(e,t){return bs(qf(WD(e),this.maskValue),-1)}call(e,t){return B(()=>{this.invokeCallHook(e,t);let n=WD(e);return U(n,V(bs(qf(n,this.maskValue),-1,!0),n.dtype))})}},bM.className=`Masking`,K(bM)})),SM,CM=o((()=>{q(),vD(),PO(),sO(),rE(),VD(),gj(),CE(),KD(),SM=class extends oO{constructor(e){if(super(e),this.embeddings=null,this.DEFAULT_EMBEDDINGS_INITIALIZER=`randomUniform`,e.batchInputShape==null&&e.inputShape==null){let t=null;e.batchSize!=null&&(t=e.batchSize),e.inputLength==null?this.batchInputShape=[t,null]:this.batchInputShape=[t].concat(lE(e.inputLength))}this.inputDim=e.inputDim,yE(this.inputDim,`inputDim`),this.outputDim=e.outputDim,yE(this.outputDim,`outputDim`),this.embeddingsInitializer=CD(e.embeddingsInitializer||this.DEFAULT_EMBEDDINGS_INITIALIZER),this.embeddingsRegularizer=fj(e.embeddingsRegularizer),this.activityRegularizer=fj(e.activityRegularizer),this.embeddingsConstraint=DO(e.embeddingsConstraint),this.maskZero=e.maskZero,this.supportsMasking=e.maskZero,this.inputLength=e.inputLength}build(e){this.embeddings=this.addWeight(`embeddings`,[this.inputDim,this.outputDim],this.dtype,this.embeddingsInitializer,this.embeddingsRegularizer,!0,this.embeddingsConstraint),this.built=!0}warnOnIncompatibleInputShape(e){}computeMask(e,t){return B(()=>this.maskZero?(e=WD(e),qf(e,ou(e))):null)}computeOutputShape(e){if(e=GD(e),this.inputLength==null)return[...e,this.outputDim];let t=lE(this.inputLength);if(t.length!==e.length-1)throw new J(`"inputLength" is ${this.inputLength}, but received input shape has shape ${e}`);{let n=0;for(let r=0;r<t.length;++r){let i=t[r],a=e[r+1];if(i!=null&&a!=null&&i!==a)throw new J(`"inputLength" is ${this.inputLength}, but received input shape has shape ${e}`);i??(t[n]=a),n++}}return[e[0],...t,this.outputDim]}call(e,t){return B(()=>{this.invokeCallHook(e,t);let n=WD(e);return n.dtype!==`int32`&&(n=nD(n,`int32`)),W(fD(this.embeddings.read(),W(n,[n.size])),GD(this.computeOutputShape(n.shape)))})}getConfig(){let e={inputDim:this.inputDim,outputDim:this.outputDim,embeddingsInitializer:SD(this.embeddingsInitializer),embeddingsRegularizer:uj(this.embeddingsRegularizer),activityRegularizer:uj(this.activityRegularizer),embeddingsConstraint:TO(this.embeddingsConstraint),maskZero:this.maskZero,inputLength:this.inputLength},t=super.getConfig();return Object.assign(e,t),e}},SM.className=`Embedding`,K(SM)}));function wM(e,t){for(;e<0;)e+=t;return e}function TM(e,t,n){if(e.shape.length>3||t.shape.length>3)throw new tE(`batchDot is not implemented for tensors of 4D or higher rank yet`);if(E(e.shape.length>=2,()=>`batchDot requires the rank of x to be >= 2, but got ${e.shape.length}`),E(e.shape.length>=2,()=>`batchDot requires the rank of y to be >= 2, but got ${t.shape.length}`),typeof n==`number`&&(n=[n,n]),e.dtype===`complex64`||t.dtype===`complex64`)throw new tE(`batchDot is not implemented for complex64-type Tensors yet.`);let r=e.shape.length,i=t.shape.length;n??=[r-1,i-2];let a=n;return B(()=>{let n;if(r>i){n=r-i;let e=[];for(let t=0;t<n;++t)e.push(1);t=W(t,t.shape.concat(e))}else if(i>r){n=i-r;let t=[];for(let e=0;e<n;++e)t.push(1);e=W(e,e.shape.concat(t))}else n=0;let o;if(e.shape.length===2&&t.shape.length===2)o=a[0]===a[1]?Ru(U(e,t),a[0]):Ru(U(Lh(e,[1,0]),t),a[1]);else{let n=a[0]!==e.shape.length-1,r=a[1]===t.shape.length-1;o=bc(e,t,n,r)}if(n>0){let e;e=r>i?r+i-3:r-1;let t=[];for(let r=e;r<e+n;++r)t.push(r);o=eh(o,t)}return o.shape.length===1&&(o=qu(o,1)),o})}var EM,DM,OM,kM,AM,jM,MM,NM,PM=o((()=>{q(),vD(),sO(),rE(),gk(),CE(),ZE(),KD(),EM=class extends oO{constructor(e){super(e||{}),this.supportsMasking=!0}mergeFunction(e){throw new tE}computeElementwiseOpOutputShape(e,t){if(e==null||t==null)return null;if(e.length<t.length)return this.computeElementwiseOpOutputShape(t,e);if(t.length===0)return e;let n=e.slice(0,e.length-t.length);for(let r=0;r<t.length;++r){let i=e[e.length-t.length+r],a=t[r];if(i==null||a==null||i<0||a<0)n.push(null);else if(i===1)n.push(a);else if(a===1)n.push(i);else{if(i!==a)throw new J(`Operands could not be broadcast together with shapes `+JSON.stringify(e)+` `+JSON.stringify(t));n.push(i)}}return n}build(e){if(Array.isArray(e)&&!Array.isArray(e[0])&&(e=[GD(e)]),e=e,e.length<2)throw new J(`A merge layer should be called on an Array of at least 2 inputs. Got ${e.length} input(s).`);let t=[];for(let n of e)n!=null&&n[0]!==null&&t.push(n[0]);if(t=gE(t),t.length>1)throw new J(`Can not merge tensors with different batch sizes. Got tensors with shapes: ${JSON.stringify(e)}.`);let n=e[0]==null?null:e[0].slice(1);for(let t=1;t<e.length;++t){let r=e[t]==null?null:e[t].slice(1);n=this.computeElementwiseOpOutputShape(n,r)}let r=e.map(e=>e.length);e.indexOf(null)===-1&&gE(r).length===1?this.reshapeRequired=!1:this.reshapeRequired=!0}call(e,t){return B(()=>{if(e=e,this.reshapeRequired){let t=[],n=e.map(e=>e.rank);if(n.indexOf(null)===-1){let r=YE(n);for(let n of e){let e=n.rank;for(let t=0;t<r-e;++t)n=rD(n,1);t.push(n)}return this.mergeFunction(t)}else{let n=!1;for(let r of e){let e=r.rank;if(e==null){let e=r.shape,i=e[0],a=e.slice(1).concat([i]),o=W(r,[i].concat(qE(e.slice(1))));o=Lh(o,[1,0]),o=W(o,a),t.push(o),n=!0}else if(e>1){let i=XE(1,e).concat([0]);t.push(Lh(r,i)),n=!0}else t.push(r)}let r=this.mergeFunction(t),i=r.rank;if(n){if(i==null){let e=r.shape,t=e[e.length-1],n=[t].concat(e.slice(0,e.length-1));r=W(Lh(W(r,[-1,t]),[1,0]),n)}else if(i>1){let e=[i-1].concat(XE(0,i-1));r=Lh(r,e)}}return r}}else return this.mergeFunction(e)})}computeOutputShape(e){e=e;let t;t=e[0]==null?null:e[0].slice(1);for(let n=1;n<e.length;++n){let r=e[n]==null?null:e[n].slice(1);t=this.computeElementwiseOpOutputShape(t,r)}let n=[];for(let t of e)t!=null&&t[0]!==null&&n.push(t[0]);return n=gE(n),t=n.length===1?n.concat(t):[null].concat(t),t}computeMask(e,t){return B(()=>{if(t==null)return null;if(!Array.isArray(t))throw new J("`mask` should be an Array");if(!Array.isArray(e))throw new J("`inputs` should be an Array");if(t.length!==e.length)throw new J(`The Array 'inputs' and 'mask' are expected to have the same length, but have different lengths (${e.length} vs ${t.length})`);if(t.every(e=>e==null))return null;t=t.map(e=>e==null?e:qu(e,0));let n=t[0];for(let e=1;e<t.length-1;++e)n=of(n,t[e]);return n})}},DM=class extends EM{constructor(e){super(e)}mergeFunction(e){return B(()=>{let t=e[0].clone();for(let n=1;n<e.length;++n)t=H(t,e[n]);return t})}},DM.className=`Add`,K(DM),OM=class extends EM{constructor(e){super(e)}mergeFunction(e){return B(()=>{let t=e[0].clone();for(let n=1;n<e.length;++n)t=U(t,e[n]);return t})}},OM.className=`Multiply`,K(OM),kM=class extends EM{constructor(e){super(e)}mergeFunction(e){return B(()=>{let t=e[0].clone();for(let n=1;n<e.length;++n)t=H(t,e[n]);return U(1/e.length,t)})}},kM.className=`Average`,K(kM),AM=class extends EM{constructor(e){super(e)}mergeFunction(e){return B(()=>{let t=e[0];for(let n=1;n<e.length;++n)t=Tf(t,e[n]);return t})}},AM.className=`Maximum`,K(AM),jM=class extends EM{constructor(e){super(e)}mergeFunction(e){return B(()=>{let t=e[0];for(let n=1;n<e.length;++n)t=Ff(t,e[n]);return t})}},jM.className=`Minimum`,K(jM),MM=class extends EM{constructor(e){super(e),this.DEFAULT_AXIS=-1,e??={},this.axis=e.axis==null?this.DEFAULT_AXIS:e.axis,this.supportsMasking=!0,this.reshapeRequired=!1}build(e){if(!(Array.isArray(e)&&Array.isArray(e[0]))||e.length===1)throw new J("A `Concatenate` layer should be called on a list of at least 2 inputs");e=e;let t=!0;for(let n of e)if(n!=null){t=!1;break}if(t)return;let n=[];for(let t=0;t<e.length;++t){let r=e[t].slice();r.splice(this.axis,1);let i=!1;for(let e of n)if(ge(e,r)){i=!0;break}i||n.push(r)}if(n.length>1)throw new J("A `Concatenate` layer requires inputs with matching shapes except for the concat axis. Got input shapes: "+JSON.stringify(e))}mergeFunction(e){return B(()=>sD(e,this.axis))}computeOutputShape(e){if(!(Array.isArray(e)&&Array.isArray(e[0])))throw new J("A `Concatenate` layer should be called on a list of inputs.");let t=e,n=t[0].slice(),r=this.axis<0?n.length+this.axis:this.axis;for(let e of t.slice(1)){if(n[r]==null||e[r]==null){n[r]=null;break}n[r]+=e[r]}return n}computeMask(e,t){if(t==null)return null;if(!Array.isArray(t))throw new J("`mask` should be an array for Concatenate");if(!Array.isArray(e))throw new J("`inputs` should be an array for Concatenate");if(t.length!==e.length)throw new J(`Mismatch in the length of mask (${t.length}) and the legnth of inputs (${e.length})`);return B(()=>{let n=!0;if(t.forEach(e=>{if(e!=null){n=!1;return}}),n)return null;let r=[];for(let n=0;n<e.length;++n)t[n]==null?r.push(V($f(e[n]),`bool`)):t[n].rank<e[n].rank?r.push(qu(t[n],-1)):r.push(t[n]);let i=_c(r,this.axis);return _s(i,-1,!1)})}getConfig(){let e={axis:this.axis},t=super.getConfig();return Object.assign(e,t),e}},MM.className=`Concatenate`,K(MM),NM=class extends EM{constructor(e){super(e),this.axes=e.axes,this.normalize=e.normalize!=null&&e.normalize,this.supportsMasking=!0,this.reshapeRequired=!1}build(e){E(Array.isArray(e)&&e.length===2&&Array.isArray(e[0])&&Array.isArray(e[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");let t=e[0],n=e[1];if(t.length>3||n.length>3)throw new tE(`Dot layer does not support tensors of 4D or higher rank yet.`);let r=this.interpretAxes(t,n);if(t[r[0]]!==n[r[1]])throw new J(`Dimension incompatibility: ${t[r[0]]} !== ${n[r[1]]}`)}mergeFunction(e){if(e.length!==2)throw new J(`A \`Dot\` layer must be called on exactly 2 inputs, but received ${e.length} input(s).`);let t=e[0],n=e[1],r;return r=Array.isArray(this.axes)?this.axes.map((t,n)=>wM(t,e[n].shape.length)):[wM(this.axes,t.shape.length),wM(this.axes,n.shape.length)],this.normalize&&(t=QO(t,r[0]),n=QO(n,r[1])),TM(t,n,r)}interpretAxes(e,t){let n;return n=Array.isArray(this.axes)?this.axes:[wM(this.axes,e.length),wM(this.axes,t.length)],n}computeOutputShape(e){E(Array.isArray(e)&&e.length===2&&Array.isArray(e[0])&&Array.isArray(e[1]),()=>"A `Dot` layer should be called on a list of exactly 2 inputs.");let t=e[0].slice(),n=e[1].slice();if(t.length>3||n.length>3)throw new tE(`Dot layer does not support tensors of 4D or higher rank yet.`);let r=this.interpretAxes(t,n);t.splice(r[0],1),n.splice(r[1],1),n.splice(0,1);let i=t.concat(n);return i.length===1&&i.push(1),i}computeMask(e,t){return null}getConfig(){let e={axes:this.axes,normalize:this.normalize},t=super.getConfig();return Object.assign(e,t),e}},NM.className=`Dot`,K(NM)})),FM,IM,LM,RM=o((()=>{q(),vD(),sO(),KD(),FM=class extends oO{constructor(e){super(e),this.supportsMasking=!0,this.stddev=e.stddev}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={stddev:this.stddev};return Object.assign(t,e),t}call(e,t){return B(()=>{this.invokeCallHook(e,t);let n=WD(e);return _D(()=>H(uD(n.shape,0,this.stddev),n),()=>n,t.training||!1)})}},FM.className=`GaussianNoise`,K(FM),IM=class extends oO{constructor(e){super(e),this.supportsMasking=!0,this.rate=e.rate}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={rate:this.rate};return Object.assign(t,e),t}call(e,t){return B(()=>{this.invokeCallHook(e,t);let n=WD(e);return this.rate>0&&this.rate<1?_D(()=>{let e=Math.sqrt(this.rate/(1-this.rate));return U(n,uD(n.shape,1,e))},()=>n,t.training||!1):n})}},IM.className=`GaussianDropout`,K(IM),LM=class extends oO{constructor(e){super(e),this.supportsMasking=!0,this.rate=e.rate,this.noiseShape=e.noiseShape}_getNoiseShape(e){return this.noiseShape||WD(e).shape}computeOutputShape(e){return e}getConfig(){let e=super.getConfig(),t={rate:this.rate};return Object.assign(t,e),t}call(e,t){return B(()=>{if(this.rate<1&&this.rate>0){let n=this._getNoiseShape(e);return _D(()=>{let t=WD(e),r=-1.6732632423543772*1.0507009873554805,i=od(Pp(n),this.rate);i=nD(i,`float32`);let a=((1-this.rate)*(1+this.rate*r**2))**-.5,o=-a*r*this.rate;return H(U(H(U(t,i),U(H(i,-1),r)),a),o)},()=>WD(e),t.training||!1)}return e})}},LM.className=`AlphaDropout`,K(LM)}));function zM(e,t,n,r,i,a=.001){let o;if(e.rank===2)o=Fc(e,t,n,r,i,a);else if(e.rank===3)o=Ic(e,t,n,r,i,a);else if(e.rank===4)o=zc(e,t,n,r,i,a);else throw new tE(`batchNormalization is not implemented for array of rank ${e.rank} yet`);return o}function BM(e,t,n,r,i=.001){return B(()=>{let a=Wf(e,r),o=a.mean,s=a.variance;return[zM(e,o,s,n,t,i),o,s]})}function VM(e,t,n,r,i=.001){return B(()=>{let a=Wf(e,r),o=a.mean,s=a.variance,c=[];for(let t of XE(0,e.rank))r.indexOf(t)===-1?c.push(e.shape[t]):c.push(1);let l=W(o,c),u=W(s,c),d=t==null?null:W(t,c);return[zM(e,l,u,n==null?null:W(n,c),d,i),o,s]})}function HM(e,t,n,r,i=.001){return ge(r.slice().sort(),XE(0,e.rank-1))?BM(e,t,n,r,i):VM(e,t,n,r,i)}var UM,WM,GM=o((()=>{q(),PO(),sO(),rE(),VD(),gj(),CE(),ZE(),KD(),UM=class extends oO{constructor(e){e??={},super(e),this.supportsMasking=!0,this.axis=e.axis==null?-1:e.axis,this.momentum=e.momentum==null?.99:e.momentum,this.epsilon=e.epsilon==null?.001:e.epsilon,this.center=e.center==null||e.center,this.scale=e.scale==null||e.scale,this.betaInitializer=CD(e.betaInitializer||`zeros`),this.gammaInitializer=CD(e.gammaInitializer||`ones`),this.movingMeanInitializer=CD(e.movingMeanInitializer||`zeros`),this.movingVarianceInitializer=CD(e.movingVarianceInitializer||`ones`),this.betaConstraint=DO(e.betaConstraint),this.gammaConstraint=DO(e.gammaConstraint),this.betaRegularizer=fj(e.betaRegularizer),this.gammaRegularizer=fj(e.gammaRegularizer)}build(e){e=GD(e);let t=this.axis>=0?this.axis:this.axis+e.length,n=e[t];if(n==null)throw new J(`Axis ${t} of input tensor should have a defined dimension but the layer received an input with shape ${JSON.stringify(e)}.`);this.inputSpec=[new tO({ndim:e.length,axes:{[t]:n}})];let r=[n];this.scale&&(this.gamma=this.addWeight(`gamma`,r,null,this.gammaInitializer,this.gammaRegularizer,!0,this.gammaConstraint)),this.center&&(this.beta=this.addWeight(`beta`,r,null,this.betaInitializer,this.betaRegularizer,!0,this.betaConstraint)),this.movingMean=this.addWeight(`moving_mean`,r,null,this.movingMeanInitializer,null,!1),this.movingVariance=this.addWeight(`moving_variance`,r,null,this.movingVarianceInitializer,null,!1),this.built=!0}call(e,t){return B(()=>{let n=t.training!=null&&t.training,r=WD(e),i=r.shape,a=i.length,o=XE(0,a),s=this.axis>=0?this.axis:this.axis+a;o.splice(s,1);let c=aE(1,a);c[s]=i[s];let l=o.slice();l.sort();let u=!ge(l,XE(0,a).slice(0,a-1)),d=()=>{if(u){let e=W(this.movingMean.read(),c),t=W(this.movingVariance.read(),c),n=this.center?W(this.beta.read(),c):null,i=this.scale?W(this.gamma.read(),c):null;return zM(r,e,t,n,i,this.epsilon)}else return zM(r,this.movingMean.read(),this.movingVariance.read(),this.beta==null?null:this.beta.read(),this.gamma==null?null:this.gamma.read(),this.epsilon)};if(!n)return d();let[f,p,m]=HM(r,this.gamma.read(),this.beta.read(),o,this.epsilon),h=(e,t,n)=>{B(()=>{let r=1-n,i=e.read(),a=U(Xd(i,t),r);e.write(Xd(i,a))})};return h(this.movingMean,p,this.momentum),h(this.movingVariance,m,this.momentum),f})}getConfig(){let e={axis:this.axis,momentum:this.momentum,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:SD(this.betaInitializer),gammaInitializer:SD(this.gammaInitializer),movingMeanInitializer:SD(this.movingMeanInitializer),movingVarianceInitializer:SD(this.movingVarianceInitializer),betaRegularizer:uj(this.betaRegularizer),gammaRegularizer:uj(this.gammaRegularizer),betaConstraint:TO(this.betaConstraint),gammaConstraint:TO(this.gammaConstraint)},t=super.getConfig();return Object.assign(e,t),e}},UM.className=`BatchNormalization`,K(UM),WM=class extends oO{constructor(e){if(e??={},super(e),this.axis=e.axis==null?-1:e.axis,typeof this.axis==`number`){if(!Number.isInteger(this.axis))throw Error(`Expected axis to be an integer, but received ${this.axis}`)}else if(Array.isArray(this.axis)){for(let e of this.axis)if(!Number.isInteger(e))throw Error(`Expected axis to be an array of integers, but received ${JSON.stringify(this.axis)}`)}else throw Error(`Expected axis to be an integer or an array of integers, but received ${JSON.stringify(this.axis)}`);this.epsilon=e.epsilon==null?.001:e.epsilon,this.center=e.center==null||e.center,this.scale=e.scale==null||e.scale,this.betaInitializer=CD(e.betaInitializer||`zeros`),this.gammaInitializer=CD(e.gammaInitializer||`ones`),this.betaRegularizer=fj(e.betaRegularizer),this.gammaRegularizer=fj(e.gammaRegularizer),this.supportsMasking=!0}build(e){e=GD(e);let t=e.length;typeof this.axis==`number`&&(this.axis=[this.axis]);for(let e=0;e<this.axis.length;++e)this.axis[e]<0&&(this.axis[e]+=t);for(let e of this.axis)if(e<0||e>=t)throw Error(`Invalid axis: ${e}`);if(this.axis.length!==gE(this.axis).length)throw Error(`Found duplicate axes in: ${this.axis}`);let n=this.axis.map(t=>e[t]);this.scale?this.gamma=this.addWeight(`gamma`,n,`float32`,this.gammaInitializer,this.gammaRegularizer,!0):this.gamma=null,this.center?this.beta=this.addWeight(`beta`,n,`float32`,this.betaInitializer,this.betaRegularizer,!0):this.beta=null,this.built=!0}call(e,t){let n=WD(e),r=n.shape,i=r.length;return B(()=>{let{mean:e,variance:t}=Wf(n,this.axis,!0),a=aE(1,i);for(let e of this.axis)a[e]=r[e];let o=e=>e!=null&&e.shape.length!==i?W(e,a):e,s=this.scale?o(this.gamma.read()):null,c=this.center?o(this.beta.read()):null,l=[],u=[];for(let e=0;e<i;++e)this.axis.indexOf(e)===-1?(l.push(1),u.push(r[e])):(l.push(r[e]),u.push(1));return e=Xu(e,l),t=Xu(t,l),s!=null&&(s=Xu(s,u)),c!=null&&(c=Xu(c,u)),zM(n,e,t,c,s,this.epsilon)})}getConfig(){let e={axis:this.axis,epsilon:this.epsilon,center:this.center,scale:this.scale,betaInitializer:SD(this.betaInitializer),gammaInitializer:SD(this.gammaInitializer),betaRegularizer:uj(this.betaRegularizer),gammaRegularizer:uj(this.gammaRegularizer)},t=super.getConfig();return Object.assign(e,t),e}},WM.className=`LayerNormalization`,K(WM)}));function KM(e,t,n){return B(()=>{if(e.rank!==4)throw new J(`temporalPadding expects input tensor to be 4-D, but received a ${e.rank}-D tensor.`);if(t??=[[1,1],[1,1]],t.length!==2||t[0].length!==2||t[1].length!==2)throw new J("spatial2dPadding expects `padding` to be an Array of two Arrays, each of which is an Array of two integers.");if(n??=$E(),n!==`channelsLast`&&n!==`channelsFirst`)throw new J(`Unknown data format: ${n}. Supported data formats are 'channelsLast' and 'channelsFirst.`);let r;return r=n===`channelsFirst`?[[0,0],[0,0],t[0],t[1]]:[[0,0],t[0],t[1],[0,0]],np(e,r)})}var qM,JM=o((()=>{q(),tD(),sO(),rE(),KD(),qM=class extends oO{constructor(e){if(e??={},super(e),this.dataFormat=e.dataFormat==null?$E():e.dataFormat,e.padding==null)this.padding=[[1,1],[1,1]];else if(typeof e.padding==`number`)this.padding=[[e.padding,e.padding],[e.padding,e.padding]];else{if(e.padding=e.padding,e.padding.length!==2)throw new J(`ZeroPadding2D expects padding to be a length-2 array, but received a length-${e.padding.length} array.`);let t,n;if(typeof e.padding[0]==`number`)t=[e.padding[0],e.padding[0]],n=[e.padding[1],e.padding[1]];else{if(e.padding=e.padding,e.padding[0].length!==2)throw new J(`ZeroPadding2D expects height padding to be a length-2 array, but received a length-${e.padding[0].length} array.`);if(t=e.padding[0],e.padding[1].length!==2)throw new J(`ZeroPadding2D expects width padding to be a length-2 array, but received a length-${e.padding[1].length} array.`);n=e.padding[1]}this.padding=[t,n]}this.inputSpec=[new tO({ndim:4})]}computeOutputShape(e){e=GD(e);let t,n;return this.dataFormat===`channelsFirst`?(t=e[2]!=null&&e[2]>=0?e[2]+this.padding[0][0]+this.padding[0][1]:null,n=e[3]!=null&&e[3]>=0?e[3]+this.padding[1][0]+this.padding[1][1]:null,[e[0],e[1],t,n]):(t=e[1]!=null&&e[1]>=0?e[1]+this.padding[0][0]+this.padding[0][1]:null,n=e[2]!=null&&e[2]>=0?e[2]+this.padding[1][0]+this.padding[1][1]:null,[e[0],t,n,e[3]])}call(e,t){return B(()=>KM(WD(e),this.padding,this.dataFormat))}getConfig(){let e={padding:this.padding,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},qM.className=`ZeroPadding2D`,K(qM)}));function YM(e,t,n,r,i,a){return B(()=>{FE(i),LE(a),IE(r),n??=[1,1],r??=`valid`,i??=$E(),a??=`max`,e=Oj(e,i);let o,s=r===`same`?`same`:`valid`;return o=a===`max`?yf(e,t,n,s):dc(e,t,n,s),i===`channelsFirst`&&(o=Lh(o,[0,3,1,2])),o})}function XM(e,t,n,r,i,a){return B(()=>{FE(i),LE(a),IE(r),n??=[1,1,1],r??=`valid`,i??=$E(),a??=`max`,e=kj(e,i);let o,s=r===`same`?`same`:`valid`;return o=a===`max`?Sf(e,t,n,s):mc(e,t,n,s),i===`channelsFirst`&&(o=Lh(o,[0,4,1,2,3])),o})}var ZM,QM,$M,eN,tN,nN,rN,iN,aN,oN,sN,cN,lN,uN,dN,fN=o((()=>{q(),tD(),vD(),KE(),sO(),rE(),Dj(),CE(),KD(),Wj(),ZM=class extends oO{constructor(e){if(e.poolSize??=2,super(e),typeof e.poolSize==`number`)this.poolSize=[e.poolSize];else if(Array.isArray(e.poolSize)&&e.poolSize.length===1&&typeof e.poolSize[0]==`number`)this.poolSize=e.poolSize;else throw new J(`poolSize for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.poolSize)}`);if(yE(this.poolSize,`poolSize`),e.strides==null)this.strides=this.poolSize;else if(typeof e.strides==`number`)this.strides=[e.strides];else if(Array.isArray(e.strides)&&e.strides.length===1&&typeof e.strides[0]==`number`)this.strides=e.strides;else throw new J(`strides for 1D convolutional layer must be a number or an Array of a single number, but received ${JSON.stringify(e.strides)}`);yE(this.strides,`strides`),this.padding=e.padding==null?`valid`:e.padding,IE(this.padding),this.inputSpec=[new tO({ndim:3})]}computeOutputShape(e){e=GD(e);let t=Tj(e[1],this.poolSize[0],this.padding,this.strides[0]);return[e[0],t,e[2]]}call(e,t){return B(()=>{this.invokeCallHook(e,t),e=rD(WD(e),2);let n=this.poolingFunction(WD(e),[this.poolSize[0],1],[this.strides[0],1],this.padding,`channelsLast`);return eh(n,[2])})}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides},t=super.getConfig();return Object.assign(e,t),e}},QM=class extends ZM{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return FE(i),IE(r),YM(e,t,n,r,i,`max`)}},QM.className=`MaxPooling1D`,K(QM),$M=class extends ZM{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return FE(i),IE(r),YM(e,t,n,r,i,`avg`)}},$M.className=`AveragePooling1D`,K($M),eN=class extends oO{constructor(e){if(e.poolSize??=[2,2],super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize],e.strides==null)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(e.strides.length!==2)throw new J(`If the strides property of a 2D pooling layer is an Array, it is expected to have a length of 2, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides];yE(this.poolSize,`poolSize`),yE(this.strides,`strides`),this.padding=e.padding==null?`valid`:e.padding,this.dataFormat=e.dataFormat==null?`channelsLast`:e.dataFormat,FE(this.dataFormat),IE(this.padding),this.inputSpec=[new tO({ndim:4})]}computeOutputShape(e){e=GD(e);let t=this.dataFormat===`channelsFirst`?e[2]:e[1],n=this.dataFormat===`channelsFirst`?e[3]:e[2];return t=Tj(t,this.poolSize[0],this.padding,this.strides[0]),n=Tj(n,this.poolSize[1],this.padding,this.strides[1]),this.dataFormat===`channelsFirst`?[e[0],e[1],t,n]:[e[0],t,n,e[3]]}call(e,t){return B(()=>(this.invokeCallHook(e,t),this.poolingFunction(WD(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},tN=class extends eN{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return FE(i),IE(r),YM(e,t,n,r,i,`max`)}},tN.className=`MaxPooling2D`,K(tN),nN=class extends eN{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return FE(i),IE(r),YM(e,t,n,r,i,`avg`)}},nN.className=`AveragePooling2D`,K(nN),rN=class extends oO{constructor(e){if(e.poolSize??=[2,2,2],super(e),this.poolSize=Array.isArray(e.poolSize)?e.poolSize:[e.poolSize,e.poolSize,e.poolSize],e.strides==null)this.strides=this.poolSize;else if(Array.isArray(e.strides)){if(e.strides.length!==3)throw new J(`If the strides property of a 3D pooling layer is an Array, it is expected to have a length of 3, but received length ${e.strides.length}.`);this.strides=e.strides}else this.strides=[e.strides,e.strides,e.strides];yE(this.poolSize,`poolSize`),yE(this.strides,`strides`),this.padding=e.padding==null?`valid`:e.padding,this.dataFormat=e.dataFormat==null?`channelsLast`:e.dataFormat,FE(this.dataFormat),IE(this.padding),this.inputSpec=[new tO({ndim:5})]}computeOutputShape(e){e=GD(e);let t=this.dataFormat===`channelsFirst`?e[2]:e[1],n=this.dataFormat===`channelsFirst`?e[3]:e[2],r=this.dataFormat===`channelsFirst`?e[4]:e[3];return t=Tj(t,this.poolSize[0],this.padding,this.strides[0]),n=Tj(n,this.poolSize[1],this.padding,this.strides[1]),r=Tj(r,this.poolSize[2],this.padding,this.strides[2]),this.dataFormat===`channelsFirst`?[e[0],e[1],t,n,r]:[e[0],t,n,r,e[4]]}call(e,t){return B(()=>(this.invokeCallHook(e,t),this.poolingFunction(WD(e),this.poolSize,this.strides,this.padding,this.dataFormat)))}getConfig(){let e={poolSize:this.poolSize,padding:this.padding,strides:this.strides,dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},iN=class extends rN{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return FE(i),IE(r),XM(e,t,n,r,i,`max`)}},iN.className=`MaxPooling3D`,K(iN),aN=class extends rN{constructor(e){super(e)}poolingFunction(e,t,n,r,i){return FE(i),IE(r),XM(e,t,n,r,i,`avg`)}},aN.className=`AveragePooling3D`,K(aN),oN=class extends oO{constructor(e){super(e),this.inputSpec=[new tO({ndim:3})]}computeOutputShape(e){return[e[0],e[2]]}call(e,t){throw new tE}},sN=class extends oN{constructor(e){super(e||{})}call(e,t){return B(()=>{let t=WD(e);return Of(t,1)})}},sN.className=`GlobalAveragePooling1D`,K(sN),cN=class extends oN{constructor(e){super(e||{})}call(e,t){return B(()=>{let t=WD(e);return Eu(t,1)})}},cN.className=`GlobalMaxPooling1D`,K(cN),lN=class extends oO{constructor(e){super(e),this.dataFormat=e.dataFormat==null?`channelsLast`:e.dataFormat,FE(this.dataFormat),this.inputSpec=[new tO({ndim:4})]}computeOutputShape(e){return e=e,this.dataFormat===`channelsLast`?[e[0],e[3]]:[e[0],e[1]]}call(e,t){throw new tE}getConfig(){let e={dataFormat:this.dataFormat},t=super.getConfig();return Object.assign(e,t),e}},uN=class extends lN{call(e,t){return B(()=>{let t=WD(e);return this.dataFormat===`channelsLast`?Of(t,[1,2]):Of(t,[2,3])})}},uN.className=`GlobalAveragePooling2D`,K(uN),dN=class extends lN{call(e,t){return B(()=>{let t=WD(e);return this.dataFormat===`channelsLast`?Eu(t,[1,2]):Eu(t,[2,3])})}},dN.className=`GlobalMaxPooling2D`,K(dN)}));function pN(e){_E(NE,`BidirectionalMergeMode`,e)}var mN,hN,gN,_N,vN=o((()=>{q(),vD(),KE(),sO(),rE(),PE(),CE(),KD(),oM(),ZO(),mN=class extends oO{constructor(e){super(e),this.layer=e.layer}build(e){this.built=!0}get trainable(){return this.layer!=null&&this.layer.trainable}set trainable(e){this.layer!=null&&(this.layer.trainable=e)}get trainableWeights(){return this.layer.trainableWeights}get nonTrainableWeights(){return this.layer.nonTrainableWeights}get updates(){return this.layer._updates}get losses(){return this.layer.losses}getWeights(){return this.layer.getWeights()}setWeights(e){this.layer.setWeights(e)}getConfig(){let e={layer:{className:this.layer.getClassName(),config:this.layer.getConfig()}},t=super.getConfig();return Object.assign(e,t),e}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.layer!=null&&this.layer.setFastWeightInitDuringBuild(e)}static fromConfig(e,t,n={}){let r=t.layer,i=XO(r,n);delete t.layer;let a={layer:i};return Object.assign(a,t),new e(a)}},hN=class extends mN{constructor(e){super(e),this.supportsMasking=!0}build(e){if(e=GD(e),e.length<3)throw new J(`TimeDistributed layer expects an input shape >= 3D, but received input shape ${JSON.stringify(e)}`);this.inputSpec=[{shape:e}];let t=[e[0]].concat(e.slice(2));this.layer.built||(this.layer.build(t),this.layer.built=!0),super.build(e)}computeOutputShape(e){e=GD(e);let t=[e[0]].concat(e.slice(2)),n=this.layer.computeOutputShape(t),r=e[1];return[n[0],r].concat(n.slice(1))}call(e,t){return B(()=>(e=WD(e),Yj((e,n)=>[WD(this.layer.call(e,t)),[]],e,[],!1,null,null,!1,!0)[1]))}},hN.className=`TimeDistributed`,K(hN),gN=`concat`,_N=class extends mN{constructor(e){super(e);let t=e.layer.getConfig(),n={};n.className=e.layer.getClassName(),n.config=t,this.forwardLayer=XO(n),t.goBackwards=t.goBackwards!==!0;let r={};if(r.className=e.layer.getClassName(),r.config=t,this.backwardLayer=XO(r),this.forwardLayer.name=`forward_`+this.forwardLayer.name,this.backwardLayer.name=`backward_`+this.backwardLayer.name,this.mergeMode=e.mergeMode===void 0?gN:e.mergeMode,pN(this.mergeMode),e.weights)throw new tE(`weights support is not implemented for Bidirectional layer yet.`);this._stateful=e.layer.stateful,this.returnSequences=e.layer.returnSequences,this.returnState=e.layer.returnState,this.supportsMasking=!0,this._trainable=!0,this.inputSpec=e.layer.inputSpec,this.numConstants=null}get trainable(){return this._trainable}set trainable(e){this._trainable=e,this.forwardLayer!=null&&(this.forwardLayer.trainable=e),this.backwardLayer!=null&&(this.backwardLayer.trainable=e)}getWeights(){return this.forwardLayer.getWeights().concat(this.backwardLayer.getWeights())}setWeights(e){let t=e.length,n=Math.floor(t/2);this.forwardLayer.setWeights(e.slice(0,n)),this.backwardLayer.setWeights(e.slice(n))}computeOutputShape(e){let t=this.forwardLayer.computeOutputShape(e);Array.isArray(t)&&Array.isArray(t[0])||(t=[t]),t=t;let n,r,i;return this.returnState&&(i=t.slice(1)),n=t[0],n=n,this.mergeMode===`concat`?(n[n.length-1]*=2,r=[n]):r=this.mergeMode==null?[n,n.slice()]:[n],this.returnState?this.mergeMode==null?r.concat(i).concat(i.slice()):[n].concat(i,i.slice()):cE(r)}apply(e,t){let n=t==null?null:t.initialState,r=t==null?null:t.constants;t??={};let i=Jj(e,n,r,this.numConstants);if(e=i.inputs,n=i.initialState,r=i.constants,Array.isArray(e)&&(n=e.slice(1),e=e[0]),(n==null||n.length===0)&&r==null)return super.apply(e,t);let a=[],o=[];if(n!=null){let e=n.length;if(e%2>0)throw new J("When passing `initialState` to a Bidrectional RNN, the state should be an Array containing the states of the underlying RNNs.");t.initialState=n,a.push(...n);let r=n.map(e=>new tO({shape:e.shape}));this.forwardLayer.stateSpec=r.slice(0,e/2),this.backwardLayer.stateSpec=r.slice(e/2),o.push(...r)}if(r!=null)throw new tE(`Support for constants in Bidirectional layers is not implemented yet.`);let s=a[0]instanceof nO;for(let e of a)if(e instanceof nO!==s)throw new J(`The initial state of a Bidirectional layer cannot be specified as a mix of symbolic and non-symbolic tensors`);if(s){let n=[e].concat(a),r=this.inputSpec.concat(o),i=this.inputSpec;this.inputSpec=r;let s=super.apply(n,t);return this.inputSpec=i,s}else return super.apply(e,t)}call(e,t){return B(()=>{let n=t.initialState,r,i;if(n==null)r=this.forwardLayer.call(e,t),i=this.backwardLayer.call(e,t);else{let a=n.slice(0,n.length/2),o=n.slice(n.length/2);r=this.forwardLayer.call(e,Object.assign(t,{initialState:a})),i=this.backwardLayer.call(e,Object.assign(t,{initialState:o}))}let a;this.returnState&&(Array.isArray(r)&&(a=r.slice(1).concat(i.slice(1))),r=r[0],i=i[0]),this.returnSequences&&(i=Zp(i,1));let o;return this.mergeMode===`concat`?o=sD([r,i]):this.mergeMode===`sum`?o=H(r,i):this.mergeMode===`ave`?o=U(.5,H(r,i)):this.mergeMode===`mul`?o=U(r,i):this.mergeMode??(o=[r,i]),this.returnState?this.mergeMode==null?o.concat(a):[o].concat(a):o})}resetStates(e){this.forwardLayer.resetStates(),this.backwardLayer.resetStates()}build(e){RE(this.forwardLayer.name,()=>{this.forwardLayer.build(e)}),RE(this.backwardLayer.name,()=>{this.backwardLayer.build(e)}),this.built=!0}computeMask(e,t){Array.isArray(t)&&(t=t[0]);let n;if(n=this.returnSequences?this.mergeMode==null?[t,t]:t:this.mergeMode==null?[null,null]:null,this.returnState){let e=this.forwardLayer.states.map(e=>null);return Array.isArray(n)?n.concat(e).concat(e):[n].concat(e,e)}else return n}get trainableWeights(){return this.forwardLayer.trainableWeights.concat(this.backwardLayer.trainableWeights)}get nonTrainableWeights(){return this.forwardLayer.nonTrainableWeights.concat(this.backwardLayer.nonTrainableWeights)}setFastWeightInitDuringBuild(e){super.setFastWeightInitDuringBuild(e),this.forwardLayer!=null&&this.forwardLayer.setFastWeightInitDuringBuild(e),this.backwardLayer!=null&&this.backwardLayer.setFastWeightInitDuringBuild(e)}getConfig(){let e={mergeMode:this.mergeMode},t=super.getConfig();return Object.assign(e,t),e}static fromConfig(e,t){let n=XO(t.layer);if(delete t.layer,t.numConstants!=null)throw new tE(`Deserialization of a Bidirectional layer with numConstants present is not supported yet.`);let r=t;return r.layer=n,new e(r)}},_N.className=`Bidirectional`,K(_N)})),yN,bN=o((()=>{sO(),q(),KD(),vD(),yN=class extends oO{constructor(e){super(e),this.scale=e.scale,e.offset?this.offset=e.offset:this.offset=0}getConfig(){let e={scale:this.scale,offset:this.offset},t=super.getConfig();return Object.assign(e,t),e}call(e,t){return B(()=>(e=WD(e),e.dtype!==`float32`&&(e=nD(e,`float32`)),H(U(e,this.scale),this.offset)))}},yN.className=`Rescaling`,K(yN)})),xN,SN,CN,wN=o((()=>{q(),KD(),sO(),vD(),{resizeBilinear:xN,cropAndResize:SN}=y_,CN=class extends oO{constructor(e){super(e),this.height=e.height,this.width=e.width}centerCrop(e,t,n,r,i,a,o,s){return B(()=>{let c,l=!1,u=[t/a,n/o,(r+t)/a,(i+n)/o],d=[];e.rank===3?(l=!0,c=rh([e])):c=e;for(let e=0;e<c.shape[0];e++)d.push(u);let f=Ha(d,[d.length,4]),p=Ip(0,d.length,1,`int32`),m=SN(c,f,p,[r,i],`nearest`);return nD(l?WD(Nh(m)):m,s)})}upsize(e,t,n,r){return B(()=>nD(xN(e,[t,n]),r))}call(e,t){return B(()=>{let t=WD(e),n=t.dtype,r=t.shape,i=r[r.length-3],a=r[r.length-2],o=0;i!==this.height&&(o=Math.floor((i-this.height)/2));let s=0;return a!==this.width&&(s=Math.floor((a-this.width)/2),s===0&&(s=1)),o>=0&&s>=0?this.centerCrop(t,o,s,this.height,this.width,i,a,n):this.upsize(e,this.height,this.width,n)})}getConfig(){let e={height:this.height,width:this.width},t=super.getConfig();return Object.assign(e,t),e}computeOutputShape(e){e=GD(e);let t=e.length-3,n=e.length-2;return e[t]=this.height,e[n]=this.width,e}},CN.className=`CenterCrop`,K(CN)}));function TN(e,t,n,r){let i=WD(e);if(i.dtype!==`int32`&&(i=nD(i,`int32`)),t===`int`)return i;let a=i.shape;if(i.rank===0&&(i=qu(i,-1)),t===`oneHot`&&i.shape[i.shape.length-1]!==1&&(i=qu(i,-1)),i.rank>2)throw new J(`When outputMode is not int, maximum output rank is 2 Received outputMode ${t} and input shape ${a} which would result in output rank ${i.rank}.`);let o=[`multiHot`,`oneHot`].includes(t),s=i,c;if(c=r!==void 0&&t===`count`?Hl(s,r,n,o):Hl(s,[],n,o),t!==`tfIdf`)return c;if(r)return U(c,r);throw new J(`When outputMode is 'tfIdf', weights must be provided.`)}var EN=o((()=>{q(),KD(),rE(),vD()})),DN,ON=o((()=>{sO(),q(),KD(),rE(),vD(),EN(),DN=class extends oO{constructor(e){super(e),this.numTokens=e.numTokens,e.outputMode?this.outputMode=e.outputMode:this.outputMode=`multiHot`}getConfig(){let e={numTokens:this.numTokens,outputMode:this.outputMode},t=super.getConfig();return Object.assign(e,t),e}computeOutputShape(e){return e=GD(e),e==null?[this.numTokens]:this.outputMode===`oneHot`&&e[e.length-1]!==1?(e.push(this.numTokens),e):(e[e.length-1]=this.numTokens,e)}call(e,t){return B(()=>{e=WD(e),e.dtype!==`int32`&&(e=nD(e,`int32`));let n;if(t.countWeights!==void 0){if(this.outputMode!==`count`)throw new J(`countWeights is not used when outputMode !== count.
              Received countWeights=${t.countWeights}`);n=WD(t.countWeights)}let r=Eu(e),i=Ou(e),a=id(this.numTokens,r).bufferSync().get(0),o=od(i,0).bufferSync().get(0);if(!(a&&o))throw new J(`Input values must be between 0 < values <= numTokens with numTokens=${this.numTokens}`);return TN(e,this.outputMode,this.numTokens,n)})}},DN.className=`CategoryEncoding`,K(DN)})),kN,AN,jN=o((()=>{q(),sO(),rE(),KD(),kN=new Set([`bilinear`,`nearest`]),AN=class extends oO{constructor(e){if(super(e),this.height=e.height,this.width=e.width,e.interpolation)if(kN.has(e.interpolation))this.interpolation=e.interpolation;else throw new J(`Invalid interpolation parameter: ${e.interpolation} is not implemented`);else this.interpolation=`bilinear`;this.cropToAspectRatio=!!e.cropToAspectRatio}computeOutputShape(e){e=GD(e);let t=e[2];return[this.height,this.width,t]}getConfig(){let e={height:this.height,width:this.width,interpolation:this.interpolation,cropToAspectRatio:this.cropToAspectRatio},t=super.getConfig();return Object.assign(e,t),e}call(e,t){return B(()=>{let t=[this.height,this.width];if(this.interpolation===`bilinear`)return y_.resizeBilinear(e,t,!this.cropToAspectRatio);if(this.interpolation===`nearest`)return y_.resizeNearestNeighbor(e,t,!this.cropToAspectRatio);throw Error(`Interpolation is ${this.interpolation} but only ${[...kN]} are supported`)})}},AN.className=`Resizing`,K(AN)})),MN,NN=o((()=>{MN=class{constructor(e){this.seed=e}next(){if(this.seed!==void 0)return this.seed++}},MN.className=`RandomSeed`})),PN,FN=o((()=>{sO(),NN(),PN=class extends oO{constructor(e){super(e),this.randomGenerator=new MN(e.seed)}getConfig(){let e={seed:this.randomGenerator.seed},t=super.getConfig();return Object.assign(e,t),e}},PN.className=`BaseRandomLayer`})),IN,LN,RN,zN=o((()=>{q(),KD(),rE(),FN(),IN=[`bilinear`,`nearest`],LN=new Set(IN),RN=class extends PN{constructor(e){super(e);let{factor:t,interpolation:n=`bilinear`}=e;if(this.factor=t,Array.isArray(this.factor)&&this.factor.length===2)this.widthLower=this.factor[0],this.widthUpper=this.factor[1];else if(!Array.isArray(this.factor)&&this.factor>0)this.widthLower=-this.factor,this.widthUpper=this.factor;else throw new J(`Invalid factor: ${this.factor}. Must be positive number or tuple of 2 numbers`);if(this.widthLower<-1||this.widthUpper<-1)throw new J(`factor must have values larger than -1. Got: ${this.factor}`);if(this.widthUpper<this.widthLower)throw new J(`factor cannot have upper bound less than lower bound.
        Got upper bound: ${this.widthUpper}.
        Got lower bound: ${this.widthLower}
      `);if(n)if(LN.has(n))this.interpolation=n;else throw new J(`Invalid interpolation parameter: ${n} is not implemented`)}getConfig(){let e={factor:this.factor,interpolation:this.interpolation},t=super.getConfig();return Object.assign(e,t),e}computeOutputShape(e){e=GD(e);let t=e[2];return[this.imgHeight,-1,t]}call(e,t){return B(()=>{let t=WD(e);this.imgHeight=t.shape[t.shape.length-3];let n=t.shape[t.shape.length-2];this.widthFactor=Pp([1],1+this.widthLower,1+this.widthUpper,`float32`,this.randomGenerator.next());let r=this.widthFactor.dataSync()[0]*n;r=Math.round(r);let i=[this.imgHeight,r];switch(this.interpolation){case`bilinear`:return y_.resizeBilinear(e,i);case`nearest`:return y_.resizeNearestNeighbor(e,i);default:throw Error(`Interpolation is ${this.interpolation}
          but only ${[...LN]} are supported`)}})}},RN.className=`RandomWidth`,K(RN)})),BN=o((()=>{uO(),sO(),VA(),Cj(),Wj(),qj(),dM(),xM(),CM(),PM(),RM(),GM(),JM(),fN(),oM(),vN(),bN(),wN(),ON(),jN(),zN()})),VN=o((()=>{gk(),Ik()})),HN=o((()=>{BA()})),UN=o((()=>{gj()})),WN=o((()=>{YO(),RA(),zO()})),GN=o((()=>{CO(),q(),CC(),FO(),IO(),BN(),VN(),HN(),UN(),YO(),WN(),sO(),RA(),VA(),oM(),BA(),$D(),tA()})),KN=o((()=>{q(),k().registerFlag(`KEEP_INTERMEDIATE_TENSORS`,()=>!1,e=>{e&&console.warn(`Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.`)})})),qN,JN,YN=o((()=>{(function(e){e[e.DT_INVALID=0]=`DT_INVALID`,e[e.DT_FLOAT=1]=`DT_FLOAT`,e[e.DT_DOUBLE=2]=`DT_DOUBLE`,e[e.DT_INT32=3]=`DT_INT32`,e[e.DT_UINT8=4]=`DT_UINT8`,e[e.DT_INT16=5]=`DT_INT16`,e[e.DT_INT8=6]=`DT_INT8`,e[e.DT_STRING=7]=`DT_STRING`,e[e.DT_COMPLEX64=8]=`DT_COMPLEX64`,e[e.DT_INT64=9]=`DT_INT64`,e[e.DT_BOOL=10]=`DT_BOOL`,e[e.DT_QINT8=11]=`DT_QINT8`,e[e.DT_QUINT8=12]=`DT_QUINT8`,e[e.DT_QINT32=13]=`DT_QINT32`,e[e.DT_BFLOAT16=14]=`DT_BFLOAT16`,e[e.DT_QINT16=15]=`DT_QINT16`,e[e.DT_QUINT16=16]=`DT_QUINT16`,e[e.DT_UINT16=17]=`DT_UINT16`,e[e.DT_COMPLEX128=18]=`DT_COMPLEX128`,e[e.DT_HALF=19]=`DT_HALF`,e[e.DT_RESOURCE=20]=`DT_RESOURCE`,e[e.DT_VARIANT=21]=`DT_VARIANT`,e[e.DT_UINT32=22]=`DT_UINT32`,e[e.DT_UINT64=23]=`DT_UINT64`,e[e.DT_FLOAT_REF=101]=`DT_FLOAT_REF`,e[e.DT_DOUBLE_REF=102]=`DT_DOUBLE_REF`,e[e.DT_INT32_REF=103]=`DT_INT32_REF`,e[e.DT_UINT8_REF=104]=`DT_UINT8_REF`,e[e.DT_INT16_REF=105]=`DT_INT16_REF`,e[e.DT_INT8_REF=106]=`DT_INT8_REF`,e[e.DT_STRING_REF=107]=`DT_STRING_REF`,e[e.DT_COMPLEX64_REF=108]=`DT_COMPLEX64_REF`,e[e.DT_INT64_REF=109]=`DT_INT64_REF`,e[e.DT_BOOL_REF=110]=`DT_BOOL_REF`,e[e.DT_QINT8_REF=111]=`DT_QINT8_REF`,e[e.DT_QUINT8_REF=112]=`DT_QUINT8_REF`,e[e.DT_QINT32_REF=113]=`DT_QINT32_REF`,e[e.DT_BFLOAT16_REF=114]=`DT_BFLOAT16_REF`,e[e.DT_QINT16_REF=115]=`DT_QINT16_REF`,e[e.DT_QUINT16_REF=116]=`DT_QUINT16_REF`,e[e.DT_UINT16_REF=117]=`DT_UINT16_REF`,e[e.DT_COMPLEX128_REF=118]=`DT_COMPLEX128_REF`,e[e.DT_HALF_REF=119]=`DT_HALF_REF`,e[e.DT_RESOURCE_REF=120]=`DT_RESOURCE_REF`,e[e.DT_VARIANT_REF=121]=`DT_VARIANT_REF`,e[e.DT_UINT32_REF=122]=`DT_UINT32_REF`,e[e.DT_UINT64_REF=123]=`DT_UINT64_REF`})(qN||={}),(function(e){(function(e){e[e.LEGACY=0]=`LEGACY`,e[e.V1=1]=`V1`,e[e.V2=2]=`V2`})(e.CheckpointFormatVersion||={})})(JN||={})})),XN=o((()=>{q()})),ZN=o((()=>{q(),YN(),XN()})),QN=o((()=>{XN(),ZN()})),$N=o((()=>{XN()})),eP=o((()=>{XN()})),tP=o((()=>{q()})),nP=o((()=>{q(),tP()})),rP=o((()=>{q(),tP()})),iP=o((()=>{q(),nP(),rP(),XN()})),aP=o((()=>{XN()})),oP=o((()=>{XN()})),sP=o((()=>{XN()})),cP=o((()=>{XN()})),lP=o((()=>{XN()})),uP=o((()=>{q()})),dP=o((()=>{uP(),XN()})),fP=o((()=>{XN()})),pP=o((()=>{XN()})),mP=o((()=>{XN()})),hP=o((()=>{XN()})),gP=o((()=>{XN()})),_P=o((()=>{XN()})),vP=o((()=>{q(),XN()})),yP=o((()=>{XN()})),bP=o((()=>{XN()})),xP=o((()=>{XN()})),SP=o((()=>{XN()})),CP=o((()=>{q(),QN(),$N(),eP(),iP(),aP(),oP(),sP(),cP(),lP(),dP(),fP(),pP(),mP(),hP(),gP(),_P(),vP(),yP(),bP(),xP(),SP()})),wP=o((()=>{XN()})),TP=o((()=>{q(),XN(),CP(),wP()})),EP=o((()=>{q(),ZN(),TP()})),DP,OP=o((()=>{DP=`4.22.0`})),kP=o((()=>{KN(),EP(),OP()}));function AP(e,t){return jP(e,t)}function jP(e,t,n=new Map,r=new Set){if(e==null)return null;if(typeof Blob==`function`&&e instanceof Blob)return e.slice();if(r.has(e))throw Error(`Circular references are not supported.`);if(n.has(e))return n.get(e);let i=t(e);if(i.recurse&&i.value!==null)throw Error(`A deep map function may not return both a value and recurse=true.`);if(!i.recurse)return n.set(e,i.value),i.value;if(FP(e)){let i=Array.isArray(e)?[]:{};r.add(e);for(let a in e){let o=e[a];i[a]=jP(o,t,n,r)}return r.delete(e),e.__proto__&&(i.__proto__=e.__proto__),i}else throw Error(`Can't recurse into non-iterable type: ${e}`)}function MP(e,t=PP){return NP(e,t)}function NP(e,t,n=new Set){let r=e[0];if(n.has(r))throw Error(`Circular references are not supported.`);let i=t(e);if(i.recurse&&i.value!==null)throw Error(`A deep zip function may not return both a value and recurse=true.`);if(!i.recurse)return i.value;if(FP(r)){let i=Array.isArray(r)?[]:{};n.add(r);for(let a in r)i[a]=NP(e.map(e=>e[a]),t,n);return n.delete(r),i}else throw Error(`Can't recurse into non-iterable type: ${r}`)}function PP(e){return e===null?null:FP(e[0])?{value:null,recurse:!0}:{value:e,recurse:!1}}function FP(e){let t=!1;if(k().get(`IS_BROWSER`))t=e instanceof TextDecoder;else{let{StringDecoder:n}=Wo();t=e instanceof n}return e!=null&&!ArrayBuffer.isView(e)&&(Array.isArray(e)||typeof e==`object`&&!(e instanceof ta)&&!(e instanceof Promise)&&!t)}function IP(e){return e==null||LP(e)||Array.isArray(e)||typeof e==`object`&&e instanceof ta||Ii(e)}function LP(e){return e===null||typeof e!=`object`&&typeof e!=`function`}var RP=o((()=>{q()}));function zP(e){return AP(e,BP)}function BP(e){return e instanceof ta?{value:e.clone(),recurse:!1}:FP(e)?{value:null,recurse:!0}:{value:e,recurse:!1}}var VP=o((()=>{q(),RP()})),HP,UP=o((()=>{HP=class{constructor(e){if(this.capacity=e,this.begin=0,this.end=0,e==null)throw RangeError(`Can't create a ring buffer of unknown capacity.`);if(e<1)throw RangeError(`Can't create ring buffer of capacity < 1.`);this.data=Array(e),this.doubledCapacity=2*e}wrap(e){for(;e<0;)e+=this.doubledCapacity;return e%this.doubledCapacity}get(e){if(e<0)throw RangeError(`Can't get item at a negative index.`);return this.data[e%this.capacity]}set(e,t){if(e<0)throw RangeError(`Can't set item at a negative index.`);this.data[e%this.capacity]=t}length(){let e=this.end-this.begin;return e<0&&(e=this.doubledCapacity+e),e}isFull(){return this.length()===this.capacity}isEmpty(){return this.length()===0}push(e){if(this.isFull())throw RangeError(`Ring buffer is full.`);this.set(this.end,e),this.end=this.wrap(this.end+1)}pushAll(e){for(let t of e)this.push(t)}pop(){if(this.isEmpty())throw RangeError(`Ring buffer is empty.`);this.end=this.wrap(this.end-1);let e=this.get(this.end);return this.set(this.end,void 0),e}unshift(e){if(this.isFull())throw RangeError(`Ring buffer is full.`);this.begin=this.wrap(this.begin-1),this.set(this.begin,e)}shift(){if(this.isEmpty())throw RangeError(`Ring buffer is empty.`);let e=this.get(this.begin);return this.set(this.begin,void 0),this.begin=this.wrap(this.begin+1),e}shuffleExcise(e){if(this.isEmpty())throw RangeError(`Ring buffer is empty.`);let t=this.wrap(this.begin+e),n=this.get(t);return this.set(t,this.pop()),n}}})),WP,GP=o((()=>{UP(),WP=class e extends HP{constructor(){super(e.INITIAL_CAPACITY)}isFull(){return!1}push(e){super.isFull()&&this.expand(),super.push(e)}unshift(e){super.isFull()&&this.expand(),super.unshift(e)}expand(){let e=this.capacity*2,t=Array(e),n=this.length();for(let e=0;e<n;e++)t[e]=this.get(this.wrap(this.begin+e));this.data=t,this.capacity=e,this.doubledCapacity=2*this.capacity,this.begin=0,this.end=n}},WP.INITIAL_CAPACITY=32}));function KP(e){return new ZP(e)}function qP(e){return new QP(e)}function JP(e,t){return new lF(e,t)}var YP,XP,ZP,QP,$P,eF,tF,nF,rF,iF,aF,oF,sF,cF,lF,uF,dF,fF,pF=o((()=>{q(),YP=u(Tp()),VP(),RP(),GP(),UP(),XP=class{async toArray(){let e=[],t=await this.next();for(;!t.done;)e.push(t.value),t=await this.next();return e}async toArrayForTest(){let e=this.prefetch(100),t=[],n=await e.next();for(;!n.done;)t.push(n.value),n=await e.next();return t}async resolveFully(){let e=await this.next();for(;!e.done;)e=await this.next()}async resolveWhile(e){let t=await this.next(),n=e(t.value);for(;!t.done&&n;)t=await this.next(),n=e(t.value)}handleErrors(e){return new aF(this,e)}filter(e){return new rF(this,e)}map(e){return new iF(this,e)}mapAsync(e){return new oF(this,e)}serialMapAsync(e){return new oF(this,e).serial()}flatmap(e){return new cF(this,e)}async forEachAsync(e){return this.map(e).resolveFully()}async serialForEach(e){return this.serialMapAsync(e).resolveWhile(e=>e===!0)}rowMajorBatch(e,t=!0){return new nF(this,e,t)}columnMajorBatch(e,t=!0,n=PP){return this.rowMajorBatch(e,t).map(e=>MP(e,n))}concatenate(e,t){return new lF(KP([this,e]),t)}take(e){return e<0||e==null?this:new tF(this,e)}skip(e){return e<0||e==null?this:new eF(this,e)}prefetch(e){return new dF(this,e)}shuffle(e,t){return new fF(this,e,t)}serial(){return new $P(this)}},ZP=class extends XP{constructor(e){super(),this.items=e,this.trav=0}summary(){return`Array of ${this.items.length} items`}async next(){if(this.trav>=this.items.length)return{value:null,done:!0};let e=this.items[this.trav];return this.trav++,{value:zP(e),done:!1}}},QP=class extends XP{constructor(e){super(),this.nextFn=e}summary(){return`Function call`}async next(){try{return this.nextFn()}catch(e){throw e.message=`Error thrown while iterating through a dataset: ${e.message}`,e}}},$P=class extends XP{constructor(e){super(),this.upstream=e,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Serial`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){return this.upstream.next()}},eF=class extends XP{constructor(e,t){super(),this.upstream=e,this.maxCount=t,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Skip`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;this.count++<this.maxCount;){let e=await this.upstream.next();if(e.done)return e;Ya(e.value)}return this.upstream.next()}},tF=class extends XP{constructor(e,t){super(),this.upstream=e,this.maxCount=t,this.count=0}summary(){return`${this.upstream.summary()} -> Take`}async next(){return this.count++>=this.maxCount?{value:null,done:!0}:this.upstream.next()}},nF=class extends XP{constructor(e,t,n=!0){super(),this.upstream=e,this.batchSize=t,this.enableSmallLastBatch=n,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> RowMajorBatch`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){let e=[];for(;e.length<this.batchSize;){let t=await this.upstream.next();if(t.done)return this.enableSmallLastBatch&&e.length>0?{value:e,done:!1}:{value:null,done:!0};e.push(t.value)}return{value:e,done:!1}}},rF=class extends XP{constructor(e,t){super(),this.upstream=e,this.predicate=t,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> Filter`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;){let e=await this.upstream.next();if(e.done||this.predicate(e.value))return e;Ya(e.value)}}},iF=class extends XP{constructor(e,t){super(),this.upstream=e,this.transform=t}summary(){return`${this.upstream.summary()} -> Map`}async next(){let e=await this.upstream.next();if(e.done)return{value:null,done:!0};let t=ha(e.value),n=this.transform(e.value),r=ha(n);for(let e of t)ma(e,r)||e.dispose();return{value:n,done:!1}}},aF=class extends XP{constructor(e,t){super(),this.upstream=e,this.handler=t,this.count=0,this.lastRead=Promise.resolve({value:null,done:!1})}summary(){return`${this.upstream.summary()} -> handleErrors`}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;;)try{return await this.upstream.next()}catch(e){if(!this.handler(e))return{value:null,done:!0}}}},oF=class extends XP{constructor(e,t){super(),this.upstream=e,this.transform=t}summary(){return`${this.upstream.summary()} -> AsyncMap`}async next(){let e=await this.upstream.next();if(e.done)return{value:null,done:!0};let t=ha(e.value),n=await this.transform(e.value),r=ha(n);for(let e of t)ma(e,r)||e.dispose();return{value:n,done:!1}}},sF=class extends XP{constructor(){super(),this.outputQueue=new WP,this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}async serialNext(){for(;this.outputQueue.length()===0;)if(!await this.pump())return{value:null,done:!0};return{value:this.outputQueue.shift(),done:!1}}},cF=class extends sF{constructor(e,t){super(),this.upstream=e,this.transform=t}summary(){return`${this.upstream.summary()} -> Flatmap`}async pump(){let e=await this.upstream.next();if(e.done)return!1;let t=ha(e.value),n=this.transform(e.value),r=ha(n);this.outputQueue.pushAll(n);for(let e of t)ma(e,r)||e.dispose();return!0}},lF=class extends XP{constructor(e,t){super(),this.baseErrorHandler=t,this.lastRead=null,this.iterator=null,this.moreIterators=e}summary(){return`TODO: fill in upstream of chained summaries -> Chained`}async next(){return this.lastRead=this.readFromChain(this.lastRead),this.lastRead}async readFromChain(e){if(await e,this.iterator==null){let e=await this.moreIterators.next();if(e.done)return{value:null,done:!0};this.iterator=e.value,this.baseErrorHandler!=null&&(this.iterator=this.iterator.handleErrors(this.baseErrorHandler))}let t=await this.iterator.next();return t.done?(this.iterator=null,this.readFromChain(e)):t}},(function(e){e[e.FAIL=0]=`FAIL`,e[e.SHORTEST=1]=`SHORTEST`,e[e.LONGEST=2]=`LONGEST`})(uF||={}),dF=class extends XP{constructor(e,t){super(),this.upstream=e,this.bufferSize=t,this.buffer=new HP(t)}summary(){return`${this.upstream.summary()} -> Prefetch`}refill(){for(;!this.buffer.isFull();){let e=this.upstream.next();this.buffer.push(e)}}next(){return this.refill(),this.buffer.shift()}},fF=class extends dF{constructor(e,t,n){super(e,t),this.upstream=e,this.windowSize=t,this.upstreamExhausted=!1,this.random=YP.alea(n||Ni().toString()),this.lastRead=Promise.resolve({value:null,done:!1})}async next(){return this.lastRead=this.lastRead.then(()=>this.serialNext()),this.lastRead}randomInt(e){return Math.floor(this.random()*e)}chooseIndex(){return this.randomInt(this.buffer.length())}async serialNext(){for(this.upstreamExhausted||this.refill();!this.buffer.isEmpty();){let e=this.chooseIndex(),t=await this.buffer.shuffleExcise(e);if(t.done)this.upstreamExhausted=!0;else return this.refill(),t}return{value:null,done:!0}}}}));function mF(e,t=null){return new class extends vF{constructor(){super(...arguments),this.size=t}async iterator(){return e()}}}function hF(e){if(e===null)return null;let t=e[0];return IP(t)?{value:gF(e),recurse:!1}:{value:null,recurse:!0}}function gF(e){if(e.length===0)throw Error(`Can't make a batch of zero elements.`);return e[0]instanceof ta?rh(e):Ha(e)}var _F,vF,yF=o((()=>{q(),_F=u(Tp()),pF(),RP(),vF=class{constructor(){this.size=null}batch(e,t=!0){let n=this;E(e>0,()=>`batchSize needs to be positive, but it is
      ${e}`);let r;return r=this.size===1/0||this.size==null?this.size:t?Math.ceil(this.size/e):Math.floor(this.size/e),mF(async()=>(await n.iterator()).columnMajorBatch(e,t,hF),r)}concatenate(e){let t=this,n;return n=this.size===1/0||e.size===1/0?1/0:this.size!=null&&e.size!=null?this.size+e.size:null,mF(async()=>(await t.iterator()).concatenate(await e.iterator()),n)}filter(e){let t=this,n;return n=this.size===1/0?1/0:null,mF(async()=>(await t.iterator()).filter(t=>B(()=>e(t))),n)}async forEachAsync(e){return(await this.iterator()).forEachAsync(e)}map(e){let t=this;return mF(async()=>(await t.iterator()).map(t=>B(()=>e(t))),this.size)}mapAsync(e){let t=this;return mF(async()=>(await t.iterator()).mapAsync(e),this.size)}prefetch(e){if(e==null)throw RangeError("`Dataset.prefetch()` requires bufferSize to be specified.");let t=this;return mF(async()=>(await t.iterator()).prefetch(e),this.size)}repeat(e){let t=this,n;return n=this.size!=null&&e>0?this.size*e:e===0?0:this.size!=null&&(e===void 0||e<0)?1/0:null,mF(async()=>JP(qP(async()=>({value:await t.iterator(),done:!1})).take(e)),n)}skip(e){let t=this,n;return n=this.size!=null&&e>=0&&this.size>=e?this.size-e:this.size!=null&&(this.size<e||e===void 0||e<0)?0:null,mF(async()=>(await t.iterator()).skip(e),n)}shuffle(e,t,n=!0){if(e==null||e<0)throw this.size==null?RangeError("`Dataset.shuffle()` requires bufferSize to be specified."):RangeError(`\`Dataset.shuffle()\` requires bufferSize to be specified.  If your data fits in main memory (for regular JS objects), and/or GPU memory (for \`tf.Tensor\`s), consider setting bufferSize to the dataset size (${this.size} elements)`);let r=this,i=_F.alea(t||Ni().toString());return mF(async()=>{let t=i.int32();return n&&(t+=i.int32()),(await r.iterator()).shuffle(e,t.toString())},this.size)}take(e){let t=this,n;return n=this.size!=null&&this.size>e?e:this.size!=null&&this.size<=e?this.size:null,mF(async()=>(await t.iterator()).take(e),n)}async toArray(){if(this.size===1/0)throw Error(`Can not convert infinite data stream to array.`);return(await this.iterator()).toArray()}async toArrayForTest(){if(this.size===1/0)throw Error(`Can not convert infinite data stream to array.`);return(await this.iterator()).toArrayForTest()}},vF.MAX_BUFFER_SIZE=1e4})),bF=o((()=>{yF()})),xF=o((()=>{q(),yF(),bF()})),SF=o((()=>{q(),pF()})),CF=o((()=>{q(),pF()})),wF=o((()=>{pF()})),TF=o((()=>{q(),pF(),wF()})),EF=o((()=>{q(),TF()})),DF=o((()=>{q(),EF()})),OF=o((()=>{q(),EF()})),kF=o((()=>{DF(),OF()})),AF=o((()=>{yF(),xF(),pF(),SF(),CF(),kF()})),jF,MF=o((()=>{jF=`4.22.0`})),NF=o((()=>{yF(),xF(),bF(),AF(),OF(),kF(),MF()}));function Y(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{e!=null&&E(e.dtype!==`complex64`,()=>`${t} does not support complex64 tensors in the CPU backend.`)})}var X=o((()=>{q()})),PF,FF,IF=o((()=>{q(),X(),PF=Fh,FF=class e extends se{nextDataId(){return e.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new oe(this,qa())}write(e,t,n){this.firstUse&&(this.firstUse=!1,k().get(`IS_NODE`)&&Zr(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));let r={id:this.nextDataId()};return this.data.set(r,{values:e,dtype:n,refCount:1}),r}makeTensorInfo(e,t,n){let r;if(t===`string`&&n!=null&&n.length>0&&ke(n[0])){let i=n.map(e=>Pi(e));r=this.write(i,e,t)}else r=this.write(n,e,t);return{dataId:r,shape:e,dtype:t}}refCount(e){return this.data.has(e)?this.data.get(e).refCount:0}incRef(e){let t=this.data.get(e);t.refCount++}decRef(e){if(this.data.has(e)){let t=this.data.get(e);t.refCount--}}move(e,t,n,r,i){this.data.set(e,{values:t,dtype:r,refCount:i})}numDataIds(){return this.data.numDataIds()}async read(e){return this.readSync(e)}readSync(e){let{dtype:t,complexTensorInfos:n}=this.data.get(e);return t===`complex64`?vy(this.readSync(n.real.dataId),this.readSync(n.imag.dataId)):Le(this.data.get(e).values,t)}bufferSync(e){let t=this.readSync(e.dataId);if(e.dtype===`string`)try{let n=t.map(e=>Fi(e));return Jo(e.shape,e.dtype,n)}catch{throw Error(`Failed to decode encoded string bytes into utf-8`)}return Jo(e.shape,e.dtype,t)}makeOutput(e,t,n){return qa().makeTensorFromTensorInfo(this.makeTensorInfo(t,n,e),this)}disposeData(e,t=!1){if(this.data.has(e)){if(this.data.get(e).refCount--,!t&&this.data.get(e).refCount>0)return!1;let{complexTensorInfos:n}=this.data.get(e);n!=null&&(this.disposeData(n.real.dataId,!0),this.disposeData(n.imag.dataId,!0)),this.data.delete(e)}return!0}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}async time(e){let t=Ni();return e(),{kernelMs:Ni()-t}}memory(){return{unreliable:!0,reasons:[`The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less.`]}}where(e){Y([e],`where`);let t=this.readSync(e.dataId);return PF(e.shape,t)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}},FF.nextDataId=0}));function LF(e){let t=new Float32Array(e.length);for(let n=0;n<e.length;++n)t[n]=Math.abs(e[n]);return t}var RF,zF,BF=o((()=>{q(),X(),RF=e=>{let{x:t}=e.inputs,n=e.backend;Y(t,`abs`);let r=new Float32Array(D(t.shape)),i=n.data.get(t.dataId).values;return r=LF(i),n.makeOutput(r,t.shape,t.dtype)},zF={kernelName:`Abs`,backendName:`cpu`,kernelFunc:RF}}));function VF(e){return(t,n,r,i,a)=>{let o=$l(t,n),s=o.length,c=O(o),l=we(a,D(o)),u=t.length,d=n.length,f=O(t),p=O(n),m=Zl(t,o),h=Zl(n,o);if(m.length+h.length===0)for(let t=0;t<l.length;++t)l[t]=e(r[t%r.length],i[t%i.length]);else for(let t=0;t<l.length;++t){let n=Ue(t,s,c),a=n.slice(-u);m.forEach(e=>a[e]=0);let o=He(a,u,f),g=n.slice(-d);h.forEach(e=>g[e]=0);let _=He(g,d,p);l[t]=e(r[o],i[_])}return[l,o]}}var HF=o((()=>{q()}));function UF(e){let{inputs:t,backend:n}=e,{real:r,imag:i}=t,a=n.data.get(r.dataId).values,o=n.data.get(i.dataId).values,s=n.makeTensorInfo(r.shape,`complex64`),c=n.data.get(s.dataId);return c.complexTensorInfos={real:n.makeTensorInfo(r.shape,`float32`,a),imag:n.makeTensorInfo(i.shape,`float32`,o)},s}var WF,GF=o((()=>{q(),WF={kernelName:Et,backendName:`cpu`,kernelFunc:UF}}));function KF(e,t,n=`float32`){if(n===`complex64`)return UF({inputs:{real:KF(e,t,`float32`),imag:KF(e,t,`float32`)},backend:e});let r=ze(D(t),n);return e.makeTensorInfo(t,n,r)}var qF=o((()=>{q(),GF()}));function JF(e){let{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}var YF,XF=o((()=>{q(),YF={kernelName:dn,backendName:`cpu`,kernelFunc:JF}}));function ZF(e){let{inputs:t,backend:n}=e,{input:r}=t,i=n.data.get(r.dataId).complexTensorInfos.real,a=n.data.get(i.dataId).values;return n.makeTensorInfo(i.shape,i.dtype,a)}var QF,$F=o((()=>{q(),QF={kernelName:Qn,backendName:`cpu`,kernelFunc:ZF}}));function eI(e,t,n,r){if(r===`int32`)return[t,`int32`,Int32Array.from(e)];if(r===`bool`){let r=Mi([0],n),[i,a]=VF((e,t)=>e===t?0:1)(t,[],e,r,`bool`);return[a,`bool`,i]}throw Error(`Error in Cast: failed to cast ${n} to ${r}`)}function tI(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dtype:a}=r;if(a===`complex64`){if(i.dtype===`complex64`)return JF({inputs:{x:i},backend:n});let e=KF(n,i.shape,i.dtype),t=tI({inputs:{x:i},backend:n,attrs:{dtype:`float32`}}),r=UF({inputs:{real:t,imag:e},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),r}if(i.dtype===`complex64`){let e=ZF({inputs:{input:i},backend:n}),t=tI({inputs:{x:e},backend:n,attrs:{dtype:a}});return n.disposeIntermediateTensorInfo(e),t}if(!De(i.dtype,a)){let e=JF({inputs:{x:i},backend:n});return{dataId:e.dataId,shape:e.shape,dtype:a}}let o=n.data.get(i.dataId).values,[s,c,l]=eI(o,i.shape,i.dtype,a);return n.makeTensorInfo(s,c,l)}var nI,rI=o((()=>{q(),HF(),qF(),GF(),XF(),$F(),nI={kernelName:Ct,backendName:`cpu`,kernelFunc:tI}}));function iI(e,t,n,r){return n==null?({inputs:n,backend:i})=>{let{a,b:o}=n,s=i;Y([a,o],e);let c=s.data.get(a.dataId).values,l=s.data.get(o.dataId).values,u=a.dtype===`string`?rb(c):c,d=a.dtype===`string`?rb(l):l,f=r||a.dtype,[p,m]=t(a.shape,o.shape,u,d,f);return s.makeTensorInfo(m,f,p)}:({inputs:e,backend:i})=>{let{a,b:o}=e,s=i;if(a.dtype===`complex64`||o.dtype===`complex64`){let e=tI({inputs:{x:a},backend:s,attrs:{dtype:`complex64`}}),t=s.data.get(e.dataId),r=t.complexTensorInfos.real,i=t.complexTensorInfos.imag,c=s.data.get(r.dataId).values,l=s.data.get(i.dataId).values,u=tI({inputs:{x:o},backend:s,attrs:{dtype:`complex64`}}),d=s.data.get(u.dataId),f=d.complexTensorInfos.real,p=d.complexTensorInfos.imag,m=s.data.get(f.dataId).values,h=s.data.get(p.dataId).values,[g,_,v]=n(a.shape,o.shape,c,l,m,h),y=s.makeTensorInfo(v,`float32`,g),b=s.makeTensorInfo(v,`float32`,_),x=UF({inputs:{real:y,imag:b},backend:s});return s.disposeIntermediateTensorInfo(e),s.disposeIntermediateTensorInfo(u),s.disposeIntermediateTensorInfo(y),s.disposeIntermediateTensorInfo(b),x}else{let e=s.data.get(a.dataId).values,n=s.data.get(o.dataId).values,i=r||a.dtype,[c,l]=t(a.shape,o.shape,e,n,i);return s.makeTensorInfo(l,i,c)}}}function aI(e){return(t,n,r,i,a,o)=>{let s=$l(t,n),c=D(s),l=s.length,u=O(s),d=we(`float32`,c),f=we(`float32`,c),p=Zl(t,s),m=Zl(n,s),h=vy(r,i),g=vy(a,o),_=t.length,v=O(t),y=n.length,b=O(n);if(p.length+m.length===0)for(let t=0;t<d.length;t++){let n=t%h.length,r=t%g.length,i=e(h[n*2],h[n*2+1],g[r*2],g[r*2+1]);d[t]=i.real,f[t]=i.imag}else for(let t=0;t<d.length;t++){let n=Ue(t,l,u),r=n.slice(-_);p.forEach(e=>r[e]=0);let i=He(r,_,v),a=n.slice(-y);m.forEach(e=>a[e]=0);let o=He(a,y,b),s=e(h[i*2],h[i*2+1],g[o*2],g[o*2+1]);d[t]=s.real,f[t]=s.imag}return[d,f,s]}}var oI=o((()=>{q(),X(),rI(),GF()})),sI,cI,lI,uI,dI=o((()=>{q(),HF(),oI(),sI=VF(((e,t)=>e+t)),cI=aI(((e,t,n,r)=>({real:e+n,imag:t+r}))),lI=iI(`Add`,sI,cI),uI={kernelName:`Add`,backendName:`cpu`,kernelFunc:lI}}));function fI(e,t,n,r,i){let a=D(r),o=ze(i,n);for(let n=0;n<e.length;n++){let r=e[n];if(r<0)throw Error(`Input x must be non-negative!`);r>=i||(a>0?o[r]+=t[n]:o[r]+=1)}return o}function pI(e,t,n,r=!1){let i=e.shape[0],a=e.shape[1],o=Jo([i,n],t.dtype);for(let s=0;s<i;s++)for(let i=0;i<a;i++){let a=e.get(s,i);if(a<0)throw Error(`Input x must be non-negative!`);a>=n||(r?o.set(1,s,a):t.size>0?o.set(o.get(s,a)+t.get(s,i),s,a):o.set(o.get(s,a)+1,s,a))}return o}var mI=o((()=>{q()})),hI,gI,_I,vI=o((()=>{q(),HF(),oI(),hI=VF(((e,t)=>e&t)),gI=iI(bt,hI),_I={kernelName:bt,backendName:`cpu`,kernelFunc:gI}}));function yI(e){return(t,n,r)=>{let i=Te(n,t.length);for(let n=0;n<t.length;++n)i[n]=e(t[n],r);return i}}var bI=o((()=>{q()}));function xI(e,t,n){return SI(e,yI(t),n)}function SI(e,t,n){return({inputs:r,attrs:i,backend:a})=>{let{x:o}=r;Y(o,e);let s=a,c=s.data.get(o.dataId).values,l;if(o.dtype===`string`){if(!Array.isArray(c))throw Error(`String tensor's value was not an instance of Array`);l=rb(c)}else l=c;let u=n||o.dtype,d=t(l,u,i);return s.makeTensorInfo(o.shape,u,d)}}var CI=o((()=>{q(),X(),bI()})),wI,TI,EI,DI=o((()=>{q(),bI(),CI(),wI=yI(e=>Math.ceil(e)),TI=SI(wt,wI),EI={kernelName:wt,backendName:`cpu`,kernelFunc:TI}}));function OI(e,t,n,r){let i=Te(n,D(t));if(r&&n!==`string`){let t=0;e.forEach(e=>{let n=D(e.shape);i.set(e.vals,t),t+=n})}else{let r=0;e.forEach(e=>{let a=n===`string`?rb(e.vals):e.vals,o=0;for(let n=0;n<e.shape[0];++n){let s=n*t[1]+r;for(let t=0;t<e.shape[1];++t)i[s+t]=a[o++]}r+=e.shape[1]})}return i}var kI=o((()=>{q()})),AI,jI,MI,NI=o((()=>{q(),HF(),oI(),AI=VF((e,t)=>+(e===t)),jI=iI(Qt,AI,null,`bool`),MI={kernelName:Qt,backendName:`cpu`,kernelFunc:jI}})),PI,FI,II,LI=o((()=>{q(),bI(),CI(),PI=yI(e=>Math.exp(e)),FI=SI(`Exp`,PI,`float32`),II={kernelName:`Exp`,backendName:`cpu`,kernelFunc:FI}})),RI,zI,BI,VI=o((()=>{q(),bI(),CI(),RI=yI(e=>Math.expm1(e)),zI=SI(en,RI),BI={kernelName:en,backendName:`cpu`,kernelFunc:zI}})),HI,UI,WI,GI=o((()=>{q(),bI(),CI(),HI=yI(e=>Math.floor(e)),UI=SI(rn,HI),WI={kernelName:rn,backendName:`cpu`,kernelFunc:UI}})),KI,qI,JI,YI=o((()=>{q(),HF(),oI(),KI=VF((e,t)=>Math.floor(e/t)),qI=iI(an,KI,null,`int32`),JI={kernelName:an,backendName:`cpu`,kernelFunc:qI}}));function XI(e,t,n,r,i,a,o,s,c){let l=Jo([r,a],n);for(let n=0;n<r;n++){let r=[],u=0;for(let t=0;t<i;t++){let a=e[n*i+t];u+=a*o[t],r.push(a)}if(u<0||u>=c/a)throw Error(`Invalid indices: ${r} does not index into ${s}`);for(let e=0;e<a;e++)l.values[n*a+e]=t.get(...t.indexToLoc(u*a+e))}return l}var ZI=o((()=>{q()}));function QI(e,t,n){let r=Jo(n,e.dtype);for(let n=0;n<r.size;++n){let i=r.indexToLoc(n).slice(),a=i[0],o=i[2],s=t.locToIndex([a,o]);i[2]=t.values[s];let c=e.locToIndex(i);0<=c&&c<e.values.length&&(r.values[n]=e.values[c])}return r}var $I=o((()=>{q()})),eL,tL,nL,rL=o((()=>{q(),HF(),oI(),eL=VF((e,t)=>+(e>t)),tL=iI(ln,eL,null,`bool`),nL={kernelName:ln,backendName:`cpu`,kernelFunc:tL}})),iL,aL,oL,sL=o((()=>{q(),HF(),oI(),iL=VF((e,t)=>+(e>=t)),aL=iI(un,iL,null,`bool`),oL={kernelName:un,backendName:`cpu`,kernelFunc:aL}})),cL,lL,uL,dL=o((()=>{q(),HF(),oI(),cL=VF((e,t)=>+(e<t)),lL=iI(vn,cL,null,`bool`),uL={kernelName:vn,backendName:`cpu`,kernelFunc:lL}})),fL,pL,mL,hL=o((()=>{q(),HF(),oI(),fL=VF((e,t)=>+(e<=t)),pL=iI(yn,fL,null,`bool`),mL={kernelName:yn,backendName:`cpu`,kernelFunc:pL}}));function gL(e,t,n){let r=(t-e)/(n-1),i=ze(n,`float32`);i[0]=e;for(let e=1;e<i.length;e++)i[e]=i[e-1]+r;return i}var _L=o((()=>{q()})),vL,yL,bL,xL=o((()=>{q(),bI(),CI(),vL=yI(e=>Math.log(e)),yL=SI(`Log`,vL),bL={kernelName:`Log`,backendName:`cpu`,kernelFunc:yL}}));function SL(e,t,n,r){let i=we(r,D(n));for(let n=0;n<i.length;++n){let r=n*t,a=e[r];for(let n=0;n<t;++n){let t=e[r+n];(Number.isNaN(t)||t>a)&&(a=t)}i[n]=a}return i}var CL=o((()=>{q()})),wL,TL,EL,DL=o((()=>{q(),HF(),oI(),wL=VF(((e,t)=>Math.max(e,t))),TL=iI(Dn,wL),EL={kernelName:Dn,backendName:`cpu`,kernelFunc:TL}})),OL,kL,AL,jL=o((()=>{q(),HF(),oI(),OL=VF(((e,t)=>Math.min(e,t))),kL=iI(Pn,OL),AL={kernelName:Pn,backendName:`cpu`,kernelFunc:kL}})),ML,NL,PL,FL,IL=o((()=>{q(),HF(),oI(),ML=VF(((e,t)=>e*t)),NL=aI(((e,t,n,r)=>({real:e*n-t*r,imag:e*r+t*n}))),PL=iI(Ln,ML,NL),FL={kernelName:Ln,backendName:`cpu`,kernelFunc:PL}}));function LL(e,t,n){return ML([],t,Ai(-1,n),e,n)}function lre(e){let{inputs:t,backend:n}=e,{x:r}=t;Y(r,`neg`);let i=n.data.get(r.dataId).values,[a,o]=LL(i,r.shape,r.dtype);return n.makeTensorInfo(o,r.dtype,a)}var RL,zL=o((()=>{q(),X(),IL(),RL={kernelName:`Neg`,backendName:`cpu`,kernelFunc:lre}})),BL,VL,HL,UL=o((()=>{q(),HF(),oI(),BL=VF(((e,t)=>e===t?0:1)),VL=iI(Rn,BL,null,`bool`),HL={kernelName:Rn,backendName:`cpu`,kernelFunc:VL}}));function WL(e,t,n,r,i){let a=t.length,o=D(t),s=O(t),c=O(i),l=we(n,D(i));for(let t=0;t<o;++t){let n=Ue(t,a,s),i=Array(n.length);for(let e=0;e<i.length;e++)i[e]=n[r[e]];let o=He(i,a,c);l[o]=e[t]}return l}var GL=o((()=>{q()}));function KL(e){let{inputs:t,attrs:n,backend:r}=e,{x:i}=t,{perm:a}=n;Y(i,`transpose`);let o=i.shape.length,s=Array(o);for(let e=0;e<s.length;e++)s[e]=i.shape[a[e]];let c=r.data.get(i.dataId).values,l=WL(c,i.shape,i.dtype,a,s);return{dataId:r.write(l,s,i.dtype),shape:s,dtype:i.dtype}}var qL,JL=o((()=>{q(),X(),GL(),qL={kernelName:Br,backendName:`cpu`,kernelFunc:KL}}));function YL(e,t,n,r){let[i,a]=yu(e,r),o=ra(t,`int32`),s=ze(D(i),o),c=D(a);for(let e=0;e<s.length;++e){let t=e*c,r=1;for(let e=0;e<c;++e)r*=n[t+e];s[e]=r}return{outVals:s,outShape:i,outDtype:o}}function ure(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;Y(i,`prod`);let s=i.shape.length,c=Se(a,i.shape),l=Su(c,s),u=c,d=i,f=[];l!=null&&(d=KL({inputs:{x:i},backend:n,attrs:{perm:l}}),f.push(d),u=wu(u.length,s));let p=n.data.get(d.dataId).values,{outVals:m,outShape:h,outDtype:g}=YL(d.shape,d.dtype,p,u),_=h;return o&&(_=bu(h,c)),f.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(_,g,m)}var XL,ZL=o((()=>{q(),X(),JL(),XL={kernelName:qn,backendName:`cpu`,kernelFunc:ure}}));function dre(e,t,n){e.forEach((e,r)=>{if(e<0||e>=n){let i=Ue(r,t.length,O(t)).join(`,`);throw Error(`indices[${i}] = ${e} is not in [0, ${n})`)}})}function fre(e,t){for(let n=0;n<e.length;++n){let r=e[n],i=n===e.length-1?t:e[n+1].length;if(r.length===0)throw Error(`Ragged splits may not be empty`);if(r[0]<0)throw Error(`Ragged splits must be non-negative`);if(r[r.length-1]>i)throw Error(`Ragged splits must not point past values`);for(let e=1;e<r.length;++e)if(r[e-1]>r[e])throw Error(`Ragged splits must be sorted in ascending order`)}}function pre(e,t,n,r){let i=[],a=0,o=t.length-1+n.length,s=Array(o).fill(null).map(()=>[0]);fre(n,r);let c=1;for(let e=0;e<t.length-1;++e){c*=t[e];let n=t[e+1];for(let t=1;t<c+1;++t)s[e].push(t*n)}for(let r=0;r<e.length;++r){let o=e[r],c=e[r]+1;for(let e=0;e<n.length;++e){let r=n[e],i=e+t.length-1;if(i>=0){let e=s[i],t=e[e.length-1]-r[o];for(let e=o;e<c;++e)s[i].push(r[e+1]+t)}o=r[o],c=r[c]}c!==o&&(i.push([o,c]),a+=c-o)}return{outSplits:s,valueSlices:i,numValues:a}}function mre(e){let t=[];for(let n=0;n<e.length;++n){let r=e[n].length,i=Te(`int32`,r);t.push(i),e[n].forEach((e,t)=>i[t]=e)}return t}function QL(e,t){let n=e.slice(0,t);for(;n.length<t;)n.push(1);for(let r=t;r<e.length;r++)n[t-1]*=e[r];return n}function hre(e,t,n,r,i,a){let o=QL(t,2)[1],s=QL(a,2)[1],c=0;for(let t of n)for(let n=t[0];n<t[1];++n){for(let t=0;t<r;++t)i[c*s+t]=e[n*o+t];++c}}function gre(e,t,n,r,i){let a=t.slice();a[0]=i;let o=Te(n,D(a)),s=e.length;return hre(e,t,r,s===0?0:s/t[0],o,a),[o,a]}function $L(e,t,n,r,i,a,o,s){if(e.length===0)throw Error(`paramsNestedSplits must be non empty`);if(t[0].length===0)throw Error(`Split tensors must not be scalars`);if(dre(a,o,t[0][0]-1),r.length===0)throw Error(`params.rank must be nonzero`);let c=r[0],{outSplits:l,valueSlices:u,numValues:d}=pre(a,o,e,c),f=mre(l),p=gre(n,r,i,u,d);return[f,p[0],p[1]]}var eR=o((()=>{q()}));function tR(e,t,n,r,i,a,o){if(t.length>1)throw Error(`starts must be a scalar or vector`);if(i.length>1)throw Error(`limits must be a scalar or vector`);if(o.length>1)throw Error(`deltas must be a scalar or vector`);let s=t.length===0,c=i.length===0,l=o.length===0,u=[];s||u.push(t[0]),c||u.push(i[0]),l||u.push(o[0]);for(let e=1;e<u.length;++e)if(u[e]!==u[e-1])throw Error(`starts, limits, and deltas must have the same shape`);let d=u.length===0?1:u[0],f=Te(`int32`,d+1);f[0]=0;for(let t=0;t<d;++t){let n=s?e[0]:e[t],i=c?r[0]:r[t],o=l?a[0]:a[t];if(o===0)throw Error(`Requires delta != 0`);let u;if(o>0&&i<n||o<0&&i>n)u=0;else if(u=Math.ceil(Math.abs((i-n)/o)),u>nR)throw Error(`Requires ((limit - start) / delta) <= ${nR}`);f[t+1]=f[t]+u}let p=f[d],m=Te(n,p),h=0;for(let t=0;t<d;++t){let n=f[t+1]-f[t],r=s?e[0]:e[t],i=l?a[0]:a[t];for(let e=0;e<n;++e)m[h++]=r,r+=i}return[f,m]}var nR,rR=o((()=>{q(),nR=2147483647}));function iR(e,t,n){for(let r=0;r<n;r++)e[r]=t[r]}function aR(e,t){let n=[];for(let r of e){if(r<0){if(!t)throw Error(`Dimension ${r} must be >= 0`);if(r<-1)throw Error(`Dimension ${r} must be >= -1`);r=-1}n.push(r)}return n}function oR(e,t,n,r,i,a,o,s,c,l){return new cR(e,t,n,r,i,a,o,s,c,l).compute()}var sR,cR,lR=o((()=>{q(),sR=Qv,cR=class e{constructor(e,t,n,r,i,a,o,s,c,l){this.shape=e,this.shapeShape=t,this.values=n,this.valuesShape=r,this.valuesDType=i,this.defaultValue=a,this.defaultValueShape=o,this.rowPartitionValues=s,this.rowPartitionValuesShapes=c,this.rowPartitionTypes=Yv(l),this.raggedRank=Xv(this.rowPartitionTypes)}getRowPartitionTypeByDimension(e){return this.rowPartitionTypes[0]===sR.FIRST_DIM_SIZE?this.rowPartitionTypes[e+1]:this.rowPartitionTypes[e]}getRowPartitionTensor(e){return this.rowPartitionTypes[0]===sR.FIRST_DIM_SIZE?this.rowPartitionValues[e+1]:this.rowPartitionValues[e]}getMaxWidth(t){let n=this.getRowPartitionTensor(t-1);switch(this.getRowPartitionTypeByDimension(t-1)){case sR.VALUE_ROWIDS:return e.getMaxWidthValueRowID(n);case sR.ROW_SPLITS:return e.getMaxWidthRowSplit(n);default:throw Error(`Cannot handle partition type ${sR[this.getRowPartitionTypeByDimension(t-1)]}`)}}static getMaxWidthRowSplit(e){let t=e.length;if(t===0||t===1)return 0;let n=0;for(let r=0;r<t-1;++r){let t=e[r+1]-e[r];t>n&&(n=t)}return n}static getMaxWidthValueRowID(e){let t=e.length;if(t===0)return 0;let n=0,r=e[0],i=0;for(let a=1;a<t;++a){let t=e[a];t!==r&&(r=t,i=Math.max(a-n,i),n=a)}return Math.max(t-n,i)}tensorShapeFromTensor(e,t,n=!0){if(t.length===0){if(e[0]===-1)return[];throw Error(`The only valid scalar shape tensor is the fully unknown shape specified as -1.`)}return aR(e,n)}calculateOutputSize(e){let t=this.valuesShape,n=this.defaultValueShape;Zv(n,t);let r=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=Jv(this.raggedRank,r,t);i[0]<0&&(i[0]=e);for(let e=1;e<=this.raggedRank;++e)i[e]<0&&(i[e]=this.getMaxWidth(e));return i}calculateFirstParentOutputIndex(e,t,n){let r=Math.min(e,n),i=[],a=0;for(let e=0;e<r;++e,a+=t)i.push(a);for(let t=r;t<e;++t)i.push(-1);return E(i.length===e,()=>`Final length of result must be equal to firstDimension.`),i}calculateOutputIndexRowSplit(e,t,n,r){let i=e.length,a=[];for(let o=0;o<i-1;++o){let i=e[o+1]-e[o],s=Math.min(r,i),c=t[o];c===-1&&(s=0);for(let e=0;e<s;++e)a.push(c),c+=n;for(let e=0;e<i-s;++e)a.push(-1)}if(i>0&&a.length!==e[i-1])throw Error(`Invalid row split size.`);return a}calculateOutputIndexValueRowID(e,t,n,r){let i=e.length,a=[];if(i===0)return[];let o=0,s=e[0];if(s>=t.length)throw Error(`Got currentValueRowId=${s}, which is not less than ${t.length}`);let c=t[s];a.push(c);for(let l=1;l<i;++l){let i=e[l];if(i===s)c>=0&&(++o,o<r?c+=n:c=-1);else{if(o=0,s=i,i>=t.length)throw Error(`Got nextValueRowId=${i} which is not less than ${t.length}`);c=t[i]}a.push(c)}if(a.length!==e.length)throw Error(`Invalid row ids.`);return a}calculateOutputIndex(e,t,n,r){let i=this.getRowPartitionTensor(e),a=this.getRowPartitionTypeByDimension(e);switch(a){case sR.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(i,t,n,r);case sR.ROW_SPLITS:if(i.length-1>t.length)throw Error(`Row partition size is greater than output size: ${i.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(i,t,n,r);default:throw Error(`Unsupported partition type: ${sR[a]}`)}}getFirstDimensionSize(){let e=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw Error(`No row_partition_types given.`);let t=this.rowPartitionTypes[0];switch(t){case sR.FIRST_DIM_SIZE:return e[0];case sR.VALUE_ROWIDS:throw Error(`Cannot handle VALUE_ROWIDS in first dimension.`);case sR.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw Error(`Cannot handle type ${sR[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw Error(`Invalid first partition input. Tensor requires at least one element.`);let e=this.getFirstDimensionSize(),t=this.calculateOutputSize(e),n=Array(this.raggedRank+1);n[n.length-1]=1;for(let e=n.length-2;e>=0;--e)n[e]=n[e+1]*t[e+1];let r=aR(t,!1),i=Te(this.valuesDType,D(r));if(n[0]*t[0]>0){let a=this.calculateFirstParentOutputIndex(e,n[0],t[0]);for(let e=1;e<=this.raggedRank;++e)a=this.calculateOutputIndex(e-1,a,n[e],t[e]);this.setOutput(this.raggedRank,a,i,r)}return[r,i]}setOutput(e,t,n,r){if(n.length===0)return;let i=this.values,a=n,o=r.slice();o=o.slice(e+1);let s=D(o),c=t.length,l=this.defaultValue;if(l.length!==s&&l.length!==1){let e=this.defaultValueShape;B(()=>{l=Gc(W(l,e),o).dataSync()})}let u=0,d=0,f=0;for(let e=0;e<=c;++e){let r=e<c?t[e]:-1;if(r===f){++f;continue}if(d<f){let e=i.subarray(u*s);iR(a.subarray(d*s),e,(f-d)*s)}if(e>=c){let e=n.length;r=Math.floor(e/s)}if(r>f)if(this.defaultValue.length===1)a.subarray(f*s,r*s).fill(this.defaultValue[0]),f=r;else for(;r>f;)iR(a.slice(f*s),l,s),++f;r<0?(u=e+1,d=f):(u=e,d=f,f=d+1)}}}}));function uR(e,t,n,r){if(e===t||e<t&&n<0||t<e&&n>1)return ze(0,r);let i=ze(Math.abs(Math.ceil((t-e)/n)),r);t<e&&n===1&&(n=-1),i[0]=e;for(let e=1;e<i.length;e++)i[e]=i[e-1]+n;return i}var dR=o((()=>{q()})),fR,pR,mR,hR=o((()=>{q(),bI(),CI(),fR=yI(e=>1/Math.sqrt(e)),pR=SI(lr,fR),mR={kernelName:lr,backendName:`cpu`,kernelFunc:pR}}));function gR(e,t,n,r,i,a,o,s,c,l){let u=[r/i,i],d=e.values,f=t.values;if(r===0)return Jo(n,t.dtype);let p=c instanceof Qi?c:Jo(u,t.dtype);typeof c==`string`||typeof c==`number`?p.values.fill(c):typeof c==`boolean`&&p.values.fill(+c);for(let e=0;e<a;e++){let a=[],c=0;for(let t=0;t<o;t++){let n=d[e*o+t];a.push(n),c+=n*s[t]}if(c<0||c>=r/i)throw Error(`Invalid indices: ${a} does not index into ${n}`);for(let n=0;n<i;n++)l?p.values[c*i+n]+=f[e*i+n]:p.values[c*i+n]=t.rank===0?f[0]:f[e*i+n]}return p}var _R=o((()=>{q()})),vR,yR,bR,xR=o((()=>{q(),bI(),CI(),vR=yI(e=>1/(1+Math.exp(-e))),yR=xI(vr,e=>1/(1+Math.exp(-e))),bR={kernelName:vr,backendName:`cpu`,kernelFunc:yR}}));function SR(e,t,n,r,i){let a=kv(r,t,n),o=D(n),s=O(r);if(a){let n=Av(t,s);return i===`string`?e.slice(n,n+o):e.subarray(n,n+o)}let c=Jo(r,i,i===`string`?rb(e):e),l=Jo(n,i);for(let e=0;e<l.size;++e){let n=l.indexToLoc(e),r=n.map((e,n)=>e+t[n]);l.set(c.get(...r),...n)}return i===`string`?ib(l.values):l.values}function CR(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,size:o}=r;Y(i,`slice`);let[s,c]=jv(i,a,o);_v(i,s,c);let l=n.data.get(i.dataId).values,u=SR(l,s,c,i.shape,i.dtype);return n.makeTensorInfo(c,i.dtype,u)}var wR,TR=o((()=>{q(),X(),wR={kernelName:hr,backendName:`cpu`,kernelFunc:CR}}));function ER(e,t,n,r,i,a,o){let s=t[0],c=a[0],l=Array(c),u=Array(s),d=t[1];if(c===0){if(s!==0)throw Error(zy(s));let e=Te(n,0),t=Te(i,0);return[e,[0,d],t,l,u]}let f=!0,p=0,m=Array(c).fill(0);for(let t=0;t<s;++t){let n=e[t*d];if(n<0)throw Error(By(t,n));if(n>=c)throw Error(Vy(t,n,c));++m[n],f&&=n>=p,p=n}let h=!0;for(let e=0;e<c;++e){let t=m[e]===0;l[e]=t,h&&=!t,m[e]=Math.max(m[e],1),e>0&&(m[e]+=m[e-1])}if(h&&f){let t=e,n=r;for(let e=0;e<s;++e)u[e]=e;return[t,[s,d],n,l,u]}else{let t=m[c-1],a=Te(n,t*d),f=Te(i,t),p=Array(c).fill(0);for(let t=0;t<s;++t){let n=e[t*d],i=p[n],o=(n===0?0:m[n-1])+i;p[n]++;for(let n=0;n<d;++n)a[o*d+n]=e[t*d+n];f[o]=r[t],u[t]=o}for(let e=0;e<c;++e)if(p[e]===0){let t=e===0?0:m[e-1];a[t*d+0]=e;for(let e=1;e<d;++e)a[t*d+e]=0;f[t]=o}return[a,[t,d],f,l,u]}}var DR=o((()=>{q()}));function OR(e,t,n,r,i){let a=D(r),o=t[0],s=i.length,c=[],l=1,u=-1;for(let e=0;e<s;++e){let t=i[e];if(t===-1){if(u!==-1)throw Error(Hy(u,e));u=e,c.push(1)}else{if(t<0)throw Error(Uy(e,t));l*=t,c.push(t)}}if(u!==-1){if(l<=0)throw Error(Wy());let e=Math.trunc(a/l);if(l*e!==a)throw Error(Gy(r,c));c[u]=e}if(D(c)!==a)throw Error(Ky(r,c));let d=r.length,f=[];if(d>0){f[d-1]=1;for(let e=d-2;e>=0;--e)f[e]=f[e+1]*r[e+1]}let p=[];if(s>0){p[s-1]=1;for(let e=s-2;e>=0;--e)p[e]=p[e+1]*c[e+1]}let m=Te(n,o*s);for(let t=0;t<o;++t){let n=0;for(let r=0;r<d;++r)n+=e[t*d+r]*f[r];for(let e=0;e<s;++e)m[t*s+e]=Math.trunc(n/p[e]),n%=p[e]}return[m,[o,s],c]}var kR=o((()=>{q()}));function AR(e,t,n,r,i,a=!1,o=0){let s=r.length,c=[t[0],e.length/t[0]],l=c[1],u=s>0?i[s-1]+1:0;if(u<0)throw Error(qy());let d=t.slice();d[0]=u;let f=Te(n,d.reduce((e,t)=>e*t,1));if(s===0)return u>0&&f.fill(o),[f,d];if(u<=0)throw Error(qy());let p=0,m=1,h=0,g=i[p];for(;;){let t=0;if(m<s){if(t=i[m],g===t){++m;continue}if(g>=t)throw Error(Jy())}if(g<0||g>=u)throw Error(Yy(g,u));g>h&&f.fill(o,h*l,g*l);for(let t=p;t<m;++t){let n=r[t];if(n<0||n>=c[0])throw Error(Xy(t,r[t],c[0]));for(let t=0;t<l;t++)f[g*l+t]+=e[n*l+t]}if(a)for(let e=0;e<l;e++)f[g*l+e]/=m-p;if(p=m,++m,h=g+1,g=t,m>s)break}return h<u&&f.fill(o,h*l,u*l),[f,d]}var jR=o((()=>{q()})),MR,NR,PR,FR=o((()=>{q(),bI(),CI(),MR=yI(e=>Math.sqrt(e)),NR=xI(br,e=>Math.sqrt(e)),PR={kernelName:br,backendName:`cpu`,kernelFunc:NR}})),IR,LR,RR,zR=o((()=>{q(),HF(),oI(),IR=VF(((e,t)=>{let n=e-t;return n*n})),LR=iI(kr,IR),RR={kernelName:kr,backendName:`cpu`,kernelFunc:LR}})),BR,VR,HR,UR=o((()=>{q(),bI(),CI(),BR=yI((e,t)=>{let{pattern:n,replaceGlobal:r,rewrite:i}=t;return e.replace(new RegExp(n,r?`g`:``),i)}),VR=SI(jr,BR),HR={kernelName:jr,backendName:`cpu`,kernelFunc:VR}}));function WR(e,t,n,r){let i=Jo(e,t.dtype);for(let e=0;e<i.size;e++){let a=i.indexToLoc(e),o=Array(a.length);for(let e=0;e<o.length;e++)o[e]=a[e]*n[e]+r[e];i.set(t.get(...o),...a)}return i}var GR=o((()=>{q()}));function KR(e,t,n,r,i,a,o,s){return new qR(n,r,i,a,o,s).compute(e,t)}var qR,JR=o((()=>{q(),qR=class{constructor(e,t,n,r,i,a){this.separator=Pi(e),this.nGramWidths=t,this.leftPad=Pi(n),this.rightPad=Pi(r),this.padWidth=i,this.preserveShort=a}getPadWidth(e){return Math.min(this.padWidth<0?e-1:this.padWidth,e-1)}getNumNGrams(e,t){let n=this.getPadWidth(t);return Math.max(0,e+2*n-t+1)}createNGrams(e,t,n,r,i,a){for(let o=0;o<i;++o){let s=this.getPadWidth(a),c=Math.max(0,s-o),l=Math.max(0,s-(i-(o+1))),u=a-(c+l),d=t+(c>0?0:o-s),f=0;f+=c*this.leftPad.length;for(let t=0;t<u;++t)f+=e[d+t].length;f+=l*this.rightPad.length;let p=c+l+u-1;f+=p*this.separator.length,n[r+o]=new Uint8Array(f);let m=n[r+o],h=0,g=e=>e.forEach(e=>m[h++]=e);for(let e=0;e<c;++e)g(this.leftPad),g(this.separator);for(let t=0;t<u-1;++t)g(e[d+t]),g(this.separator);if(u>0){g(e[d+u-1]);for(let e=0;e<l;++e)g(this.separator),g(this.rightPad)}else{for(let e=0;e<l-1;++e)g(this.rightPad),g(this.separator);g(this.rightPad)}}}compute(e,t){let n=e.length,r=t.length;if(r>0){let e=t[0];if(e!==0)throw Error(`First split value must be 0, got ${e}`);for(let i=1;i<r;++i){let r=t[i]>=e;if(r&&=t[i]<=n,!r)throw Error(`Invalid split value ${t[i]}, must be in [${e}, ${n}]`);e=t[i]}if(e!==n)throw Error(`Last split value must be data size. Expected ${n}, got ${e}`)}let i=r-1,a=Te(`int32`,r);if(n===0||r===0){let e=Array(n);for(let e=0;e<=i;++e)a[e]=0;return[e,a]}a[0]=0;for(let e=1;e<=i;++e){let n=t[e]-t[e-1],r=0;this.nGramWidths.forEach(e=>{r+=this.getNumNGrams(n,e)}),this.preserveShort&&n>0&&r===0&&(r=1),a[e]=a[e-1]+r}let o=Array(a[i]);for(let n=0;n<i;++n){let r=t[n],i=a[n];if(this.nGramWidths.forEach(a=>{let s=t[n+1]-t[n],c=this.getNumNGrams(s,a);this.createNGrams(e,r,o,i,c,a),i+=c}),this.preserveShort&&i===a[n]){let a=t[n+1]-t[n];if(a===0)continue;let s=a+2*this.padWidth;this.createNGrams(e,r,o,i,1,s)}}return[o,a]}}}));function _re(e,t,n,r){if(!e.length)return;if(t.length===0){for(let t=0;t<e.length;++t)r.push(e.subarray(t,t+1));return}if(t.length===1){let i=t[0],a=e.indexOf(i);for(;a!==-1;){let t=e.subarray(0,a);(!n||t.length!==0)&&r.push(t),e=e.subarray(a+1),a=e.indexOf(i)}(!n||e.length!==0)&&r.push(e);return}let i=0;for(let a=0;a<e.length+1;a++)if(a===e.length||t.indexOf(e[a])!==-1){let t=e.subarray(i,a);(!n||t.length!==0)&&r.push(t),i=a+1}}function YR(e,t,n){let r=e.length,i=[],a=0,o=0,s=Array(r);for(let c=0;c<r;++c){let r=i.length;_re(e[c],t,n,i);let l=i.length-r;s[c]=l,a+=l,o=Math.max(o,l)}let c=Te(`int32`,a*2),l=Array(a),u=[r,o],d=0;for(let e=0;e<r;++e)for(let t=0;t<s[e];++t)c[d*2]=e,c[d*2+1]=t,l[d]=i[d],++d;return[c,l,u]}var XR=o((()=>{q()}));function ZR(e,t){let n=Te(`int32`,e.length);for(let r=0;r<e.length;++r)n[r]=Ci(e[r]).modulo(t).getLowBitsUnsigned();return n}var QR=o((()=>{q()})),$R,ez,tz,nz,rz=o((()=>{q(),HF(),oI(),$R=VF(((e,t)=>e-t)),ez=aI(((e,t,n,r)=>({real:e-n,imag:t-r}))),tz=iI(`Sub`,$R,ez),nz={kernelName:`Sub`,backendName:`cpu`,kernelFunc:tz}}));function iz(e,t){let n=Array(e.rank);for(let r=0;r<n.length;r++)n[r]=e.shape[r]*t[r];let r=Jo(n,e.dtype);for(let t=0;t<r.values.length;++t){let n=r.indexToLoc(t),i=Array(e.rank);for(let t=0;t<i.length;t++)i[t]=n[t]%e.shape[t];let a=e.locToIndex(i);r.values[t]=e.values[a]}return r}var az=o((()=>{q()}));function oz(e,t,n=0,r=e.length-1){for(;r>n;){if(r-n>600){let i=r-n+1,a=t-n+1,o=Math.log(i),s=.5*Math.exp(2*o/3),c=.5*Math.sqrt(o*s*(i-s)/i)*Math.sign(a-i/2);oz(e,t,Math.max(n,Math.floor(t-a*s/i+c)),Math.min(r,Math.floor(t+(i-a)*s/i+c)))}let i=e[t],a=n,o=r;for(fe(e,n,t),cz(e[r],i)>0&&fe(e,n,r);a<o;){for(fe(e,a,o),a++,o--;cz(e[a],i)<0;)a+=1;for(;cz(e[o],i)>0;)--o}cz(e[n],i)===0?fe(e,n,o):(o+=1,fe(e,o,r)),o<=t&&(n=o+1),t<=o&&(r=o-1)}}function sz(e,t,n,r,i){let a=t[t.length-1],[o,s]=[e.length/a,a],c=we(n,o*r),l=we(`int32`,o*r);for(let t=0;t<o;t++){let n=t*s,a=e.subarray(n,n+s),o=Array(a.length);a.forEach((e,t)=>o[t]={value:e,index:t}),r<o.length&&(oz(o,r),o=o.slice(0,r)),i&&o.sort(cz);let u=t*r,d=c.subarray(u,u+r),f=l.subarray(u,u+r);for(let e=0;e<r;e++)d[e]=o[e].value,f[e]=o[e].index}let u=t.slice();return u[u.length-1]=r,[Jo(u,n,c),Jo(u,`int32`,l)]}var cz,lz=o((()=>{q(),cz=(e,t)=>{let n=t.value-e.value;return n===0?e.index-t.index:n}}));function uz(e,t,n,r){let i=Se(t,n)[0],a=[1,n[0],1];for(let e=0;e<i;e++)a[0]*=n[e];a[1]=n[i];for(let e=i+1;e<n.length;e++)a[2]*=n[e];let o=new Map,s=new Int32Array(n[i]),c=new Qi(a,r,e),l=[],u=a[0]===1&&a[2]===1;for(let t=0;t<n[i];t++){let n;if(u)n=e[t].toString();else{let e=[];for(let n=0;n<a[0];n++)for(let r=0;r<a[2];r++)e.push(c.get(n,t,r));n=e.join(`,`)}let r=o.get(n);if(r!=null)s[t]=r;else{let e=o.size;o.set(n,e),s[t]=e,l.push(t)}}let d=a.slice();d[1]=o.size;let f=new Qi(d,r);l.forEach((e,t)=>{for(let n=0;n<a[0];n++)for(let r=0;r<a[2];r++)f.set(c.get(n,e,r),n,t,r)});let p=n.slice();return p[i]=d[1],{outputValues:f.values,outputShape:p,indices:s}}var dz=o((()=>{q()})),vre=c({addImpl:()=>sI,bincountImpl:()=>fI,bincountReduceImpl:()=>pI,bitwiseAndImpl:()=>hI,castImpl:()=>eI,ceilImpl:()=>wI,concatImpl:()=>OI,equalImpl:()=>AI,expImpl:()=>PI,expm1Impl:()=>RI,floorDivImpl:()=>KI,floorImpl:()=>HI,gatherNdImpl:()=>XI,gatherV2Impl:()=>QI,greaterEqualImpl:()=>iL,greaterImpl:()=>eL,lessEqualImpl:()=>fL,lessImpl:()=>cL,linSpaceImpl:()=>gL,logImpl:()=>vL,maxImpl:()=>SL,maximumImpl:()=>wL,minimumImpl:()=>OL,multiplyImpl:()=>ML,negImpl:()=>LL,notEqualImpl:()=>BL,prodImpl:()=>YL,raggedGatherImpl:()=>$L,raggedRangeImpl:()=>tR,raggedTensorToTensorImpl:()=>oR,rangeImpl:()=>uR,rsqrtImpl:()=>fR,scatterImpl:()=>gR,sigmoidImpl:()=>vR,simpleAbsImpl:()=>LF,sliceImpl:()=>SR,sparseFillEmptyRowsImpl:()=>ER,sparseReshapeImpl:()=>OR,sparseSegmentReductionImpl:()=>AR,sqrtImpl:()=>MR,squaredDifferenceImpl:()=>IR,staticRegexReplaceImpl:()=>BR,stridedSliceImpl:()=>WR,stringNGramsImpl:()=>KR,stringSplitImpl:()=>YR,stringToHashBucketFastImpl:()=>ZR,subImpl:()=>$R,tileImpl:()=>iz,topKImpl:()=>sz,transposeImpl:()=>WL,uniqueImpl:()=>uz}),yre=o((()=>{BF(),dI(),mI(),vI(),rI(),DI(),kI(),NI(),LI(),VI(),GI(),YI(),ZI(),$I(),rL(),sL(),dL(),hL(),_L(),xL(),CL(),DL(),jL(),IL(),zL(),UL(),ZL(),eR(),rR(),lR(),dR(),hR(),_R(),xR(),TR(),DR(),kR(),jR(),FR(),zR(),UR(),GR(),JR(),XR(),QR(),rz(),az(),lz(),GL(),dz()})),fz,bre=o((()=>{fz=`4.22.0`})),xre=o((()=>{q(),IF(),bre(),Za(`cpu`,()=>new FF,1)})),pz,mz,hz=o((()=>{q(),CI(),pz=xI(`Elu`,e=>e>=0?e:Math.exp(e)-1),mz={kernelName:`Elu`,backendName:`cpu`,kernelFunc:pz}}));function gz(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{alpha:a}=r;Y([i],`leakyRelu`);let o=D(i.shape),s=n.data.get(i.dataId).values,c=we(`float32`,o);for(let e=0;e<s.length;e++)c[e]=s[e]<0?a*s[e]:s[e];return n.makeTensorInfo(i.shape,`float32`,c)}var _z,vz=o((()=>{q(),X(),_z={kernelName:_n,backendName:`cpu`,kernelFunc:gz}}));function yz(e){let{inputs:t,backend:n}=e,{x:r,alpha:i}=t;Y([r,i],`prelu`);let a=n.data.get(r.dataId).values,o=n.data.get(i.dataId).values,[s,c]=bz(r.shape,i.shape,a,o,`float32`);return n.makeTensorInfo(c,`float32`,s)}var bz,xz,Sz=o((()=>{q(),X(),HF(),bz=VF((e,t)=>e<0?t*e:e),xz={kernelName:Kn,backendName:`cpu`,kernelFunc:yz}})),Cz,wz,Tz=o((()=>{q(),CI(),Cz=xI(er,e=>Math.max(0,e)),wz={kernelName:er,backendName:`cpu`,kernelFunc:Cz}})),Ez,Dz,Oz=o((()=>{q(),CI(),Ez=xI(or,e=>Math.min(Math.max(0,e),6)),Dz={kernelName:or,backendName:`cpu`,kernelFunc:Ez}}));function kz(e,t,n,r,i){if(n===`linear`)return JF({inputs:{x:t},backend:e});if(n===`relu`)return Cz({inputs:{x:t},backend:e});if(n===`elu`)return pz({inputs:{x:t},backend:e});if(n===`relu6`)return Ez({inputs:{x:t},backend:e});if(n===`prelu`)return yz({inputs:{x:t,alpha:r},backend:e});if(n===`leakyrelu`)return gz({inputs:{x:t},backend:e,attrs:{alpha:i}});if(n===`sigmoid`)return yR({inputs:{x:t},backend:e});throw Error(`Activation ${n} has not been implemented for the CPU backend.`)}var Az=o((()=>{hz(),XF(),vz(),Sz(),Tz(),Oz(),xR()}));function jz(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{shape:a}=r,o=D(i.shape),s=xe(a,o),c=D(s);E(o===c,()=>`The new shape (${s}) has ${c} elements and the old shape (${i.shape}) has ${o} elements. The new shape and old shape must have the same number of elements.`),n.incRef(i.dataId);let l=n.data.get(i.dataId);if(l.complexTensorInfos!=null){let e=l.complexTensorInfos.real,t=l.complexTensorInfos.imag;e.shape=s,t.shape=s}return{dataId:i.dataId,shape:s,dtype:i.dtype}}var Mz,Nz=o((()=>{q(),Mz={kernelName:tr,backendName:`cpu`,kernelFunc:jz}}));function Pz(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a}=t,{transposeA:o,transposeB:s}=r;Y([i,a],`matMul`);let c=i.shape.length,l=a.shape.length,u=o?i.shape[c-2]:i.shape[c-1],d=s?a.shape[l-1]:a.shape[l-2],f=o?i.shape[c-1]:i.shape[c-2],p=s?a.shape[l-2]:a.shape[l-1],m=i.shape.slice(0,-2),h=a.shape.slice(0,-2),g=D(m),_=D(h),v=$l(i.shape.slice(0,-2),a.shape.slice(0,-2)).concat([f,p]);E(u===d,()=>`Error in matMul: inner shapes (${u}) and (${d}) of Tensors with shapes ${i.shape} and ${a.shape} and transposeA=${o} and transposeB=${s} must match.`);let y=o?[g,u,f]:[g,f,u],b=s?[_,p,d]:[_,d,p],x=jz({inputs:{x:i},backend:n,attrs:{shape:y}}),S=jz({inputs:{x:a},backend:n,attrs:{shape:b}}),C=o?x.shape[1]:x.shape[2],w=o?x.shape[2]:x.shape[1],ee=s?S.shape[1]:S.shape[2],te=Math.max(g,_),T=n.data.get(x.dataId).values,ne=n.data.get(S.dataId).values,re=O(x.shape),ie=O(S.shape),[ae,oe,se]=o?[re[0],1,re[1]]:[re[0],re[1],1],[ce,le,ue]=s?[1,ie[1],ie[0]]:[ie[1],1,ie[0]],de=w*ee,fe=Jo([te,w,ee],x.dtype),pe=fe.values,me=n.blockSize;for(let e=0;e<te;e++){let t=e%g,n=e%_;for(let r=0;r<w;r+=me){let i=Math.min(r+me,w);for(let a=0;a<ee;a+=me){let o=Math.min(a+me,ee);for(let s=0;s<C;s+=me){let c=Math.min(s+me,C);for(let l=r;l<i;l++)for(let r=a;r<o;r++){let i=0;for(let e=s;e<c;e++){let a=T[t*ae+l*oe+e*se],o=ne[e*ce+r*le+n*ue];i+=a*o}pe[e*de+(l*ee+r)]+=i}}}}}return n.disposeIntermediateTensorInfo(x),n.disposeIntermediateTensorInfo(S),n.makeTensorInfo(v,fe.dtype,fe.values)}var Fz,Iz=o((()=>{q(),X(),Nz(),Fz={kernelName:_t,backendName:`cpu`,kernelFunc:Pz}}));function Sre(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a,bias:o,preluActivationWeights:s}=t,{transposeA:c,transposeB:l,activation:u,leakyreluAlpha:d}=r,f,p,m,h=[];f=Pz({inputs:{a:i,b:a},attrs:{transposeA:c,transposeB:l},backend:n}),o&&(p=lI({inputs:{a:f,b:o},backend:n}),h.push(f),f=p),u&&(m=kz(n,f,u,s,d),h.push(f),f=m);for(let e of h)n.disposeIntermediateTensorInfo(e);return f}var Lz,Cre=o((()=>{q(),Az(),dI(),Iz(),Lz={kernelName:Jr,backendName:`cpu`,kernelFunc:Sre}})),Rz,zz,wre=o((()=>{q(),CI(),Rz=xI(rt,e=>Math.acos(e)),zz={kernelName:rt,backendName:`cpu`,kernelFunc:Rz}})),Bz,Vz,Tre=o((()=>{q(),CI(),Bz=xI(it,e=>Math.acosh(e)),Vz={kernelName:it,backendName:`cpu`,kernelFunc:Bz}}));function Ere(e){let{inputs:t,backend:n}=e,r=t;Y(t,`addN`);let i=r.map(e=>n.data.get(e.dataId).values),a=Jo(r[0].shape,r[0].dtype),o=a.values;for(let e=0;e<r.length;e++){let t=i[e];for(let e=0;e<o.length;e++)o[e]+=t[e]}return n.makeTensorInfo(a.shape,a.dtype,a.values)}var Hz,Dre=o((()=>{q(),X(),Hz={kernelName:at,backendName:`cpu`,kernelFunc:Ere}}));function Ore(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;Y(i,`all`);let s=Se(a,i.shape),c=s,l=Su(c,i.shape.length),u=i;l!=null&&(u=KL({inputs:{x:i},backend:n,attrs:{perm:l}}),c=wu(c.length,i.shape.length)),xu(`all`,c,u.shape.length);let[d,f]=yu(u.shape,c),p=D(f),m=ze(D(d),u.dtype),h=n.data.get(u.dataId).values;for(let e=0;e<m.length;++e){let t=e*p,n=h[t];for(let e=0;e<p;++e){let r=h[t+e];n&&=r}m[e]=n}l!=null&&n.disposeIntermediateTensorInfo(u);let g=n.makeTensorInfo(d,u.dtype,m);if(o){let e=bu(d,s),t=jz({inputs:{x:g},backend:n,attrs:{shape:e}});return n.disposeIntermediateTensorInfo(g),t}return g}var Uz,kre=o((()=>{q(),X(),Nz(),JL(),Uz={kernelName:`All`,backendName:`cpu`,kernelFunc:Ore}}));function Are(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;Y(i,`any`);let s=Se(a,i.shape),c=s,l=Su(c,i.shape.length),u=i;l!=null&&(u=KL({inputs:{x:i},backend:n,attrs:{perm:l}}),c=wu(c.length,i.shape.length)),xu(`any`,c,u.shape.length);let[d,f]=yu(u.shape,c),p=D(f),m=ze(D(d),u.dtype),h=n.data.get(u.dataId).values;for(let e=0;e<m.length;++e){let t=e*p,n=h[t];for(let e=0;e<p;++e){let r=h[t+e];n||=r}m[e]=n}l!=null&&n.disposeIntermediateTensorInfo(u);let g=n.makeTensorInfo(d,u.dtype,m);if(o){let e=bu(d,s),t=jz({inputs:{x:g},backend:n,attrs:{shape:e}});return n.disposeIntermediateTensorInfo(g),t}return g}var Wz,jre=o((()=>{q(),X(),Nz(),JL(),Wz={kernelName:`Any`,backendName:`cpu`,kernelFunc:Are}}));function Mre(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r;Y(i,`argMax`);let o=Se(a,i.shape),s=Su(o,i.shape.length),c=i,l=[];s!=null&&(c=KL({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=wu(o.length,c.shape.length)),o=[o[0]],xu(`argMax`,o,c.shape.length);let[u,d]=yu(c.shape,o),f=ze(D(u),`int32`),p=D(d),m=n.data.get(c.dataId).values;for(let e=0;e<f.length;++e){let t=e*p,n=m[t],r=0;for(let e=0;e<p;++e){let i=m[t+e];i>n&&(n=i,r=e)}f[e]=r}return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(u,`int32`,f)}var Gz,Nre=o((()=>{q(),X(),JL(),Gz={kernelName:ot,backendName:`cpu`,kernelFunc:Mre}}));function Pre(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r;Y(i,`argMin`);let o=Se(a,i.shape),s=Su(o,i.shape.length),c=i,l=[];s!=null&&(c=KL({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=wu(o.length,c.shape.length)),o=[o[0]],xu(`argMin`,o,c.shape.length);let[u,d]=yu(c.shape,o),f=ze(D(u),`int32`),p=D(d),m=n.data.get(c.dataId).values;for(let e=0;e<f.length;++e){let t=e*p,n=m[t],r=0;for(let e=0;e<p;++e){let i=m[t+e];i<n&&(n=i,r=e)}f[e]=r}return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(u,`int32`,f)}var Kz,Fre=o((()=>{q(),X(),JL(),Kz={kernelName:st,backendName:`cpu`,kernelFunc:Pre}})),qz,Jz,Ire=o((()=>{q(),CI(),qz=xI(ct,e=>Math.asin(e)),Jz={kernelName:ct,backendName:`cpu`,kernelFunc:qz}})),Yz,Xz,Lre=o((()=>{q(),CI(),Yz=xI(lt,e=>Math.asinh(e)),Xz={kernelName:lt,backendName:`cpu`,kernelFunc:Yz}})),Zz,Qz,Rre=o((()=>{q(),CI(),Zz=xI(ut,e=>Math.atan(e)),Qz={kernelName:ut,backendName:`cpu`,kernelFunc:Zz}})),$z,eB,tB,zre=o((()=>{q(),HF(),oI(),$z=VF((e,t)=>Math.atan2(e,t)),eB=iI(ft,$z),tB={kernelName:ft,backendName:`cpu`,kernelFunc:eB}})),nB,rB,Bre=o((()=>{q(),CI(),nB=xI(dt,e=>Math.atanh(e)),rB={kernelName:dt,backendName:`cpu`,kernelFunc:nB}}));function iB(e,t,n,r,i,a){let o=i.strideHeight,s=i.strideWidth,c=i.dilationHeight,l=i.dilationWidth,u=i.effectiveFilterHeight,d=i.effectiveFilterWidth,f=i.padInfo.top,p=i.padInfo.left,m=a===`max`?-1/0:1/0,h=Jo(i.outShape,n),g=h.values,_=i.outShape[1]*i.outShape[2]*i.outShape[3],v=i.outShape[2]*i.outShape[3],y=i.outShape[3];for(let t=0;t<i.batchSize;++t){let n=t*_,h=t*r[0];for(let t=0;t<i.inChannels;++t)for(let _=0;_<i.outHeight;++_){let b=_*o-f,x=Math.max(0,b),S=Math.min(i.inHeight,u+b),C=n+_*v;for(let n=0;n<i.outWidth;++n){let o=n*s-p,u=Math.max(0,o),f=Math.min(i.inWidth,d+o),_=m,v=0,b=0;for(let n=x;n<S;n+=c){let i=h+n*r[1];for(let n=u;n<f;n+=l){let o=e[i+n*r[2]+t];a===`max`&&o>_?_=o:a===`avg`&&(v+=o,b++)}if(isNaN(_))break}let w=C+n*y+t;g[w]=a===`avg`?v/b:_}}}return h}function aB(e,t,n,r,i=!1,a=!1){let o=Jo(r.outShape,`int32`),s=r.strideHeight,c=r.strideWidth,l=r.dilationHeight,u=r.dilationWidth,d=r.effectiveFilterHeight,f=r.effectiveFilterWidth,p=r.padInfo.top,m=r.padInfo.left,h=Jo(t,n,e);for(let e=0;e<r.batchSize;++e)for(let t=0;t<r.inChannels;++t)for(let n=0;n<r.outHeight;++n){let g=n*s-p,_=g;for(;_<0;)_+=l;let v=Math.min(r.inHeight,d+g);for(let s=0;s<r.outWidth;++s){let d=s*c-m,p=d;for(;p<0;)p+=u;let y=Math.min(r.inWidth,f+d),b=-1/0,x=-1;for(let n=_;n<v;n+=l){let o=n-g;for(let s=p;s<y;s+=u){let c=s-d,l=h.get(e,n,s,t);l>b&&(b=l,x=i?a?((e*r.inHeight+n)*r.inWidth+s)*r.inChannels+t:(n*r.inWidth+s)*r.inChannels+t:o*f+c)}}o.set(x,e,n,s,t)}}return o}function oB(e,t,n,r,i,a){let o=i.strideDepth,s=i.strideHeight,c=i.strideWidth,l=i.dilationDepth,u=i.dilationHeight,d=i.dilationWidth,f=i.effectiveFilterDepth,p=i.effectiveFilterHeight,m=i.effectiveFilterWidth,h=i.padInfo.front,g=i.padInfo.top,_=i.padInfo.left,v=a===`max`?-1/0:1/0,y=Jo(i.outShape,n),b=y.values,x=i.outShape[1]*i.outShape[2]*i.outShape[3]*i.outShape[4],S=i.outShape[2]*i.outShape[3]*i.outShape[4],C=i.outShape[3]*i.outShape[4],w=i.outShape[4];for(let t=0;t<i.batchSize;++t){let n=t*x,y=t*r[0];for(let t=0;t<i.inChannels;++t)for(let x=0;x<i.outDepth;++x){let ee=x*o-h,te=ee;for(;te<0;)te+=l;let T=Math.min(i.inDepth,f+ee),ne=n+x*S;for(let n=0;n<i.outHeight;++n){let o=n*s-g,f=o;for(;f<0;)f+=u;let h=Math.min(i.inHeight,p+o),x=ne+n*C;for(let n=0;n<i.outWidth;++n){let o=n*c-_,s=o;for(;s<0;)s+=d;let p=Math.min(i.inWidth,m+o),g=x+n*w,S=v,C=0,ee=0;for(let n=te;n<T;n+=l){let i=y+n*r[1];for(let n=f;n<h;n+=u){let o=i+n*r[2];for(let n=s;n<p;n+=d){let i=e[o+n*r[3]+t];if(a===`max`&&i>S?S=i:a===`avg`&&(C+=i,ee++),isNaN(S))break}if(isNaN(S))break}if(isNaN(S))break}let ne=g+t;b[ne]=a===`avg`?C/Math.max(ee,1):S}}}}return y}function Vre(e,t){let n=Jo(t.outShape,`int32`),r=t.strideDepth,i=t.strideHeight,a=t.strideWidth,o=t.dilationDepth,s=t.dilationHeight,c=t.dilationWidth,l=t.effectiveFilterDepth,u=t.effectiveFilterHeight,d=t.effectiveFilterWidth,f=t.padInfo.front,p=t.padInfo.top,m=t.padInfo.left;for(let h=0;h<t.batchSize;++h)for(let g=0;g<t.inChannels;++g)for(let _=0;_<t.outDepth;++_){let v=_*r-f,y=v;for(;y<0;)y+=o;let b=Math.min(t.inDepth,l+v);for(let r=0;r<t.outHeight;++r){let l=r*i-p,f=l;for(;f<0;)f+=s;let x=Math.min(t.inHeight,u+l);for(let i=0;i<t.outWidth;++i){let p=i*a-m,S=p;for(;S<0;)S+=c;let C=Math.min(t.inWidth,d+p),w=-1/0,ee=-1;for(let t=y;t<b;t+=o){let n=t-v;for(let r=f;r<x;r+=s){let i=r-l;for(let a=S;a<C;a+=c){let o=a-p,s=e.get(h,t,r,a,g);s>=w&&(w=s,ee=n*u*d+i*u+o)}}}n.set(ee,h,_,r,i,g)}}}return n}var sB=o((()=>{q()}));function Hre(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;Y(i,`avgPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;E(ic(o,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=Ws(i.shape,a,o,1,s,c),u;if(l.filterWidth===1&&l.filterHeight===1&&ge(l.inShape,l.outShape))u=JF({inputs:{x:i},backend:n});else{let e=n.data.get(i.dataId).values,t=O(i.shape),r=iB(e,i.shape,i.dtype,t,l,`avg`);u=n.makeTensorInfo(l.outShape,i.dtype,r.values)}return u}var cB,Ure=o((()=>{q(),X(),sB(),XF(),cB={kernelName:pt,backendName:`cpu`,kernelFunc:Hre}}));function Wre(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c,dataFormat:l}=r;Y(i,`avgPool3d`);let u=Gs(i.shape,a,o,1,s,c,l),d=n.data.get(i.dataId).values,f=oB(d,i.shape,i.dtype,O(i.shape),u,`avg`);return n.makeTensorInfo(f.shape,`float32`,f.values)}var lB,Gre=o((()=>{q(),X(),sB(),lB={kernelName:ht,backendName:`cpu`,kernelFunc:Wre}}));function Kre(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,{filterSize:o,strides:s,pad:c,dimRoundingMode:l}=r;Y([i,a],`avgPool3DGrad`);let u=Gs(a.shape,o,s,1,c,l),d=u.strideDepth,f=u.strideHeight,p=u.strideWidth,m=u.filterDepth,h=u.filterHeight,g=u.filterWidth,_=u.dilationDepth,v=u.dilationHeight,y=u.dilationWidth,b=u.effectiveFilterDepth,x=u.effectiveFilterHeight,S=u.effectiveFilterWidth,C=b-1-u.padInfo.front,w=S-1-u.padInfo.left,ee=x-1-u.padInfo.top,te=Jo(a.shape,`float32`),T=1/(m*h*g),ne=n.bufferSync(i);for(let e=0;e<u.batchSize;++e)for(let t=0;t<u.inChannels;++t)for(let n=0;n<u.inDepth;++n)for(let r=0;r<u.inHeight;++r)for(let i=0;i<u.inWidth;++i){let a=n-C,o=r-ee,s=i-w,c=0;for(let n=0;n<b;n+=_){let r=(a+n)/d;if(!(r<0||r>=u.outDepth||Math.floor(r)!==r))for(let n=0;n<x;n+=v){let i=(o+n)/f;if(!(i<0||i>=u.outHeight||Math.floor(i)!==i))for(let n=0;n<S;n+=y){let a=(s+n)/p;if(a<0||a>=u.outWidth||Math.floor(a)!==a)continue;let o=ne.get(e,r,i,a,t);c+=o}}}te.set(c*T,e,n,r,i,t)}return n.makeTensorInfo(te.shape,te.dtype,te.values)}var uB,qre=o((()=>{q(),X(),uB={kernelName:gt,backendName:`cpu`,kernelFunc:Kre}}));function Jre(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a;Y([i,a],`avgPoolGrad`);let{filterSize:s,strides:c,pad:l}=r,u=Ws(o.shape,s,c,1,l),d=u.strideHeight,f=u.strideWidth,p=u.filterHeight,m=u.filterWidth,h=u.dilationHeight,g=u.dilationWidth,_=u.effectiveFilterHeight,v=u.effectiveFilterWidth,y=v-1-u.padInfo.left,b=_-1-u.padInfo.top,x=Jo(o.shape,`float32`),S=1/(p*m),C=n.data.get(i.dataId).values,w=Jo(i.shape,`float32`,C);for(let e=0;e<u.batchSize;++e)for(let t=0;t<u.inChannels;++t)for(let n=0;n<u.inHeight;++n)for(let r=0;r<u.inWidth;++r){let i=n-b,a=r-y,o=0;for(let n=0;n<_;n+=h){let r=(i+n)/d;if(!(r<0||r>=u.outHeight||Math.floor(r)!==r))for(let n=0;n<v;n+=g){let i=(a+n)/f;if(i<0||i>=u.outWidth||Math.floor(i)!==i)continue;let s=w.get(e,r,i,t);o+=s}}x.set(o*S,e,n,r,t)}return n.makeTensorInfo(x.shape,x.dtype,x.values)}var dB,Yre=o((()=>{q(),X(),dB={kernelName:mt,backendName:`cpu`,kernelFunc:Jre}}));function Xre(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,scale:a,offset:o,mean:s,variance:c}=t;E(s.shape.length===c.shape.length,()=>`Batch normalization gradient requires mean and variance to have equal ranks.`),E(o==null||s.shape.length===o.shape.length,()=>`Batch normalization gradient requires mean and offset to have equal ranks.`),E(a==null||s.shape.length===a.shape.length,()=>`Batch normalization gradient requires mean and scale to have equal ranks.`),Y([i,s,c,a,o],`batchNorm`);let{varianceEpsilon:l}=r;l??=.001;let u=n.data.get(i.dataId).values,d=n.data.get(s.dataId).values,f=n.data.get(c.dataId).values,p=a?n.data.get(a.dataId).values:new Float32Array([1]),m=o?n.data.get(o.dataId).values:new Float32Array([0]),h=new Float32Array(u.length),g=m.length,_=p.length,v=f.length,y=d.length,b=0,x=0,S=0,C=0;for(let e=0;e<u.length;++e)h[e]=m[b++]+(u[e]-d[x++])*p[S++]/Math.sqrt(f[C++]+l),b>=g&&(b=0),x>=y&&(x=0),S>=_&&(S=0),C>=v&&(C=0);return n.makeTensorInfo(i.shape,i.dtype,h)}var fB,Zre=o((()=>{q(),X(),fB={kernelName:on,backendName:`cpu`,kernelFunc:Xre}}));function Qre(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,crops:o}=r;Y([i],`batchToSpaceND`);let s=a.reduce((e,t)=>e*t),c=ry(i.shape,a,s),l=iy(c.length,a.length),u=ay(i.shape,a,s),d=oy(o,a.length),f=sy(u,o,a.length),p=jz({inputs:{x:i},backend:n,attrs:{shape:c}}),m=KL({inputs:{x:p},backend:n,attrs:{perm:l}}),h=jz({inputs:{x:m},backend:n,attrs:{shape:u}}),g=CR({inputs:{x:h},backend:n,attrs:{begin:d,size:f}});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(h),g}var pB,$re=o((()=>{q(),X(),Nz(),TR(),JL(),pB={kernelName:vt,backendName:`cpu`,kernelFunc:Qre}}));function eie(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o}=r,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,l=fI(s,c,a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,l)}var mB,tie=o((()=>{q(),mI(),mB={kernelName:yt,backendName:`cpu`,kernelFunc:eie}}));function nie(e){let{inputs:t,backend:n}=e,{s0:r,s1:i}=t,a=n.data.get(r.dataId).values,o=n.data.get(i.dataId).values,s=$l(Array.from(a),Array.from(o));return n.makeTensorInfo([s.length],`int32`,Int32Array.from(s))}var hB,rie=o((()=>{q(),hB={kernelName:St,backendName:`cpu`,kernelFunc:nie}})),gB,_B,iie=o((()=>{q(),CI(),gB=xI(Tt,(e,t)=>{let n=t;return e>n.clipValueMax?n.clipValueMax:e<n.clipValueMin?n.clipValueMin:e}),_B={kernelName:Tt,backendName:`cpu`,kernelFunc:gB}})),vB,yB,aie=o((()=>{q(),vB=e=>{let{x:t}=e.inputs,n=e.backend,r=new Float32Array(D(t.shape)),i=n.data.get(t.dataId),a=i.complexTensorInfos.real,o=i.complexTensorInfos.imag,s=n.data.get(a.dataId).values,c=n.data.get(o.dataId).values;for(let e=0;e<s.length;e++){let t=s[e],n=c[e];r[e]=Math.hypot(t,n)}return n.makeOutput(r,t.shape,`float32`)},yB={kernelName:Dt,backendName:`cpu`,kernelFunc:vB}}));function bB(e){let{inputs:t,backend:n}=e,{input:r}=t,i=n.data.get(r.dataId).complexTensorInfos.imag,a=n.data.get(i.dataId).values;return n.makeTensorInfo(i.shape,i.dtype,a)}var xB,SB=o((()=>{q(),xB={kernelName:pn,backendName:`cpu`,kernelFunc:bB}}));function CB(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r,a=Se(i,t[0].shape)[0];Kv(t.map(e=>e.shape),a);let o=qv(t.map(e=>e.shape),a);if(D(o)===0)return n.makeTensorInfo(o,t[0].dtype,[]);let s=t.filter(e=>D(e.shape)>0);if(s.length===1)return JF({inputs:{x:s[0]},backend:n});if(s[0].dtype===`complex64`){let e=s.map(e=>ZF({inputs:{input:e},backend:n})),t=s.map(e=>bB({inputs:{input:e},backend:n})),r=CB({inputs:e,backend:n,attrs:{axis:a}}),i=CB({inputs:t,backend:n,attrs:{axis:a}}),o=UF({inputs:{real:r,imag:i},backend:n});return e.forEach(e=>n.disposeIntermediateTensorInfo(e)),t.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(i),o}let c=s.map(e=>{let t=[-1,D(e.shape.slice(a))];return jz({inputs:{x:e},backend:n,attrs:{shape:t}})}),l=c.map(e=>({vals:n.data.get(e.dataId).values,shape:e.shape}));o=qv(c.map(e=>e.shape),1);let u=c[0].shape[0]===1,d=OI(l,o,t[0].dtype,u),f=qv(s.map(e=>e.shape),a),p=n.makeTensorInfo(f,t[0].dtype,d);return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),p}var wB,TB=o((()=>{q(),GF(),kI(),XF(),SB(),$F(),Nz(),wB={kernelName:Ot,backendName:`cpu`,kernelFunc:CB}}));function EB(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dataFormat:c,dilations:l,dimRoundingMode:u}=r;Y([i,a],`conv2d`);let d=oc(c),f=Ks(i.shape,a.shape,o,l,s,u,!1,d),p=f.filterHeight,m=f.filterWidth,h=f.dilationHeight,g=f.dilationWidth,_=f.padInfo.left,v=f.padInfo.top,y=f.dataFormat===`channelsLast`,b=new Qi(f.outShape,i.dtype),x=O(i.shape),S=O(a.shape),C=x[0],w=y?x[1]:x[2],ee=y?x[2]:1,te=y?1:x[1],T=b.strides[0],ne=y?b.strides[1]:b.strides[2],re=y?b.strides[2]:1,ie=y?1:b.strides[1],ae=n.data.get(i.dataId).values,oe=n.data.get(a.dataId).values,se=b.values;for(let e=0;e<f.batchSize;++e){let t=e*C,n=e*T;for(let e=0;e<f.outHeight;++e){let r=n+e*ne,i=e*f.strideHeight-v;for(let e=0;e<p;++e){let n=i+e*h;if(n<0||n>=f.inHeight)continue;let a=e*S[0],o=t+n*w;for(let e=0;e<f.outWidth;++e){let t=r+e*re,n=e*f.strideWidth-_;for(let e=0;e<m;++e){let r=n+e*g;if(r<0||r>=f.inWidth)continue;let i=a+e*S[1],s=o+r*ee,c=i;for(let e=0;e<f.inChannels;++e){let n=ae[s+e*te];for(let e=0;e<f.outChannels;++e)se[t+e*ie]+=n*oe[c+e];c+=f.outChannels}}}}}}return n.makeTensorInfo(b.shape,b.dtype,se)}var DB,OB=o((()=>{q(),X(),DB={kernelName:kt,backendName:`cpu`,kernelFunc:EB}}));function oie(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,dataFormat:c,dimRoundingMode:l,filterShape:u}=r;Y([i,a],`conv2dBackpropFilter`);let d=oc(c),f=Ks(i.shape,u,o,1,s,l,!1,d),{strideHeight:p,strideWidth:m,filterHeight:h,filterWidth:g}=f,_=f.dataFormat===`channelsLast`,v=new Qi(f.filterShape,`float32`),y=f.padInfo.left,b=f.padInfo.top,x=n.data.get(i.dataId).values,S=n.data.get(a.dataId).values,C=new Qi(i.shape,i.dtype,x),w=new Qi(a.shape,a.dtype,S);for(let e=0;e<h;++e){let t=Math.max(0,Math.ceil((b-e)/p)),n=Math.min(f.outHeight,(f.inHeight+b-e)/p);for(let r=0;r<g;++r){let i=Math.max(0,Math.ceil((y-r)/m)),a=Math.min(f.outWidth,(f.inWidth+y-r)/m);for(let o=0;o<f.inChannels;++o)for(let s=0;s<f.outChannels;++s){let c=0;for(let l=0;l<f.batchSize;++l)for(let u=t;u<n;++u){let t=e+u*p-b;for(let e=i;e<a;++e){let n=r+e*m-y;_?c+=C.get(l,t,n,o)*w.get(l,u,e,s):c+=C.get(l,o,t,n)*w.get(l,s,u,e)}}v.set(c,e,r,o,s)}}}return n.makeTensorInfo(v.shape,v.dtype,v.values)}var kB,sie=o((()=>{q(),X(),kB={kernelName:At,backendName:`cpu`,kernelFunc:oie}}));function cie(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{inputShape:o,strides:s,pad:c,dataFormat:l,dimRoundingMode:u}=r;Y([i,a],`conv2dBackpropInput`);let d=O(a.shape),f=O(i.shape),p=oc(l),m=Ks(o,a.shape,s,1,c,u,!1,p),h=new Qi(m.inShape,`float32`),g=h.values,_=n.data.get(i.dataId).values,v=n.data.get(a.dataId).values,[y,b,x]=d,{batchSize:S,filterHeight:C,filterWidth:w,inChannels:ee,inHeight:te,inWidth:T,outChannels:ne,outHeight:re,outWidth:ie,strideHeight:ae,strideWidth:oe}=m;p=m.dataFormat;let se=C-1-m.padInfo.top,ce=w-1-m.padInfo.left,le=p===`channelsLast`,ue=h.strides[0],de=le?h.strides[1]:h.strides[2],fe=le?h.strides[2]:1,pe=le?1:h.strides[1],E=f[0],me=le?f[1]:f[2],he=le?f[2]:1,D=le?1:f[1];for(let e=0;e<S;++e)for(let t=0;t<ee;++t)for(let n=0;n<te;++n){let r=n-se,i=Math.max(0,Math.ceil(r/ae)),a=Math.min(re,(C+r)/ae);for(let o=0;o<T;++o){let s=o-ce,c=Math.max(0,Math.ceil(s/oe)),l=Math.min(ie,(w+s)/oe),u=0;for(let n=i;n<a;++n){let i=n*ae-r;for(let r=c;r<l;++r){let a=r*oe-s,o=E*e+me*n+he*r,c=y*(C-1-i)+b*(w-1-a)+x*t;for(let e=0;e<ne;++e){let t=_[o+D*e],n=v[c+e];u+=t*n}}}let d=ue*e+de*n+fe*o+pe*t;g[d]=u}}return n.makeTensorInfo(h.shape,h.dtype,h.values)}var AB,lie=o((()=>{q(),X(),AB={kernelName:jt,backendName:`cpu`,kernelFunc:cie}}));function uie(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c}=r;Y([i,a],`conv3d`);let l=qs(i.shape,a.shape,o,c,s),{filterDepth:u,filterHeight:d,filterWidth:f,dilationDepth:p,dilationHeight:m,dilationWidth:h,padInfo:g}=l,_=g.front,v=g.left,y=g.top,b=new Qi(l.outShape,i.dtype),x=n.data.get(i.dataId).values,S=n.data.get(a.dataId).values,C=b.values,w=O(i.shape),ee=O(a.shape);for(let e=0;e<l.batchSize;++e){let t=e*w[0],n=e*b.strides[0];for(let e=0;e<l.outDepth;++e){let r=n+e*b.strides[1],i=e*l.strideDepth-_;for(let e=0;e<u;++e){let n=i+e*p;if(n<0||n>=l.inDepth)continue;let a=e*ee[0],o=t+n*w[1];for(let e=0;e<l.outHeight;++e){let t=r+e*b.strides[2],n=e*l.strideHeight-y;for(let e=0;e<d;++e){let r=n+e*m;if(r<0||r>=l.inHeight)continue;let i=a+e*ee[1],s=o+r*w[2];for(let e=0;e<l.outWidth;++e){let n=t+e*l.outChannels,r=e*l.strideWidth-v;for(let e=0;e<f;++e){let t=r+e*h;if(t<0||t>=l.inWidth)continue;let a=i+e*ee[2],o=s+t*l.inChannels,c=a;for(let e=0;e<l.inChannels;++e){let t=x[o+e];for(let e=0;e<l.outChannels;++e)C[n+e]+=t*S[c+e];c+=l.outChannels}}}}}}}}return n.makeTensorInfo(b.shape,b.dtype,b.values)}var jB,die=o((()=>{q(),X(),jB={kernelName:Mt,backendName:`cpu`,kernelFunc:uie}}));function fie(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,filterShape:c}=r;Y([i,a],`conv3dBackpropFilterV2`);let l=O(i.shape),u=O(a.shape),d=qs(i.shape,c,o,1,s),f=d.strideDepth,p=d.strideHeight,m=d.strideWidth,h=d.filterDepth,g=d.filterHeight,_=d.filterWidth,v=new Qi(d.filterShape,`float32`),y=v.values,[b,x,S,C]=v.strides,w=n.data.get(a.dataId).values,[ee,te,T,ne]=u,re=n.data.get(i.dataId).values,[ie,ae,oe,se]=l,ce=d.padInfo.front,le=d.padInfo.left,ue=d.padInfo.top;for(let e=0;e<h;++e){let t=Math.max(0,Math.ceil((ce-e)/f)),n=Math.min(d.outDepth,(d.inDepth+ce-e)/f),r=e*b;for(let i=0;i<g;++i){let a=Math.max(0,Math.ceil((ue-i)/p)),o=Math.min(d.outHeight,(d.inHeight+ue-i)/p),s=i*x+r;for(let r=0;r<_;++r){let c=Math.max(0,Math.ceil((le-r)/m)),l=Math.min(d.outWidth,(d.inWidth+le-r)/m),u=r*S+s;for(let s=0;s<d.inChannels;++s){let h=s*C+u;for(let u=0;u<d.outChannels;++u){let g=0;for(let h=0;h<d.batchSize;++h){let d=h*ie,_=h*ee;for(let h=t;h<n;++h){let t=(e+h*f-ce)*ae+d,n=h*te+_;for(let e=a;e<o;++e){let a=(i+e*p-ue)*oe+t,o=e*T+n;for(let e=c;e<l;++e){let t=(r+e*m-le)*se+a,n=e*ne+o;g+=re[t+s]*w[n+u]}}}}y[h+u]=g}}}}}return n.makeTensorInfo(v.shape,v.dtype,v.values)}var MB,pie=o((()=>{q(),X(),MB={kernelName:Nt,backendName:`cpu`,kernelFunc:fie}}));function NB(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{pad:o,strides:s,inputShape:c}=r;Y([i],`conv3dBackpropInputV2`);let l=O(i.shape),u=O(a.shape),d=qs(c,a.shape,s,1,o),f=new Qi(d.inShape,`float32`),p=f.values,[m,h,g,_]=f.strides,v=n.data.get(i.dataId).values,[y,b,x,S]=l,C=n.data.get(a.dataId).values,[w,ee,te,T]=u,{batchSize:ne,filterDepth:re,filterHeight:ie,filterWidth:ae,inChannels:oe,inDepth:se,inHeight:ce,inWidth:le,outChannels:ue,outDepth:de,outHeight:fe,outWidth:pe,strideDepth:E,strideHeight:me,strideWidth:he}=d,D=re-1-d.padInfo.front,ge=ie-1-d.padInfo.top,_e=ae-1-d.padInfo.left;for(let e=0;e<ne;++e)for(let t=0;t<oe;++t)for(let n=0;n<se;++n){let r=n-D,i=Math.max(0,Math.ceil(r/E)),a=Math.min(de,(re+r)/E);for(let o=0;o<ce;++o){let s=o-ge,c=Math.max(0,Math.ceil(s/me)),l=Math.min(fe,(ie+s)/me);for(let u=0;u<le;++u){let d=u-_e,f=Math.max(0,Math.ceil(d/he)),ne=Math.min(pe,(ae+d)/he),oe=0;for(let n=i;n<a;++n){let i=n*E-r;for(let r=c;r<l;++r){let a=r*me-s;for(let o=f;o<ne;++o){let s=o*he-d,c=y*e+b*n+x*r+S*o,l=w*(re-1-i)+ee*(ie-1-a)+te*(ae-1-s)+T*t;for(let e=0;e<ue;++e){let t=v[c+e],n=C[l+e];oe+=t*n}}}}p[m*e+h*n+g*o+_*u+t]=oe}}}return n.makeTensorInfo(f.shape,f.dtype,f.values)}var PB,FB=o((()=>{q(),X(),PB={kernelName:Pt,backendName:`cpu`,kernelFunc:NB}})),IB,LB,RB=o((()=>{q(),CI(),IB=xI(`Cos`,e=>Math.cos(e)),LB={kernelName:`Cos`,backendName:`cpu`,kernelFunc:IB}})),zB,BB,VB=o((()=>{q(),CI(),zB=xI(Ft,e=>Math.cosh(e)),BB={kernelName:Ft,backendName:`cpu`,kernelFunc:zB}}));function HB(e){let{inputs:t,backend:n,attrs:r}=e,{image:i,boxes:a,boxInd:o}=t,{cropSize:s,method:c,extrapolationValue:l}=r,[u,d,f,p]=i.shape,m=a.shape[0],[h,g]=s,_=Jo([m,h,g,p],`float32`),v=n.data.get(a.dataId).values,y=n.data.get(o.dataId).values,b=n.data.get(i.dataId).values,x=O(i.shape),S=O(_.shape);for(let e=0;e<m;e++){let t=e*4,n=v[t],r=v[t+1],i=v[t+2],a=v[t+3],o=y[e];if(o>=u)continue;let s=h>1?(i-n)*(d-1)/(h-1):0,m=g>1?(a-r)*(f-1)/(g-1):0;for(let t=0;t<h;t++){let u=h>1?n*(d-1)+t*s:.5*(n+i)*(d-1);if(u<0||u>d-1){for(let n=0;n<g;n++)for(let r=0;r<p;r++){let i=r+n*S[2]+t*S[1]+e*S[0];_.values[i]=l}continue}if(c===`bilinear`){let n=Math.floor(u),i=Math.ceil(u),s=u-n;for(let c=0;c<g;c++){let u=g>1?r*(f-1)+c*m:.5*(r+a)*(f-1);if(u<0||u>f-1){for(let n=0;n<p;n++){let r=n+c*S[2]+t*S[1]+e*S[0];_.values[r]=l}continue}let d=Math.floor(u),h=Math.ceil(u),v=u-d;for(let r=0;r<p;r++){let a=r+d*x[2]+n*x[1]+o*x[0],l=b[a];a=r+h*x[2]+n*x[1]+o*x[0];let u=b[a];a=r+d*x[2]+i*x[1]+o*x[0];let f=b[a];a=r+h*x[2]+i*x[1]+o*x[0];let p=b[a],m=l+(u-l)*v,g=f+(p-f)*v;a=r+c*S[2]+t*S[1]+e*S[0],_.values[a]=m+(g-m)*s}}}else for(let n=0;n<g;++n){let i=g>1?r*(f-1)+n*m:.5*(r+a)*(f-1);if(i<0||i>f-1){for(let r=0;r<p;r++){let i=r+n*S[2]+t*S[1]+e*S[0];_.values[i]=l}continue}let s=Math.round(i),c=Math.round(u);for(let r=0;r<p;r++){let i=r+s*x[2]+c*x[1]+o*x[0],a=r+n*S[2]+t*S[1]+e*S[0];_.values[a]=b[i]}}}}return n.makeTensorInfo(_.shape,_.dtype,_.values)}var UB,WB=o((()=>{q(),UB={kernelName:Rt,backendName:`cpu`,kernelFunc:HB}}));function GB(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;Y(i,`cumprod`);let c=Su([a],i.shape.length),l=i;c!=null&&(l=KL({inputs:{x:i},backend:n,attrs:{perm:c}}));let u=wu(1,i.shape.length)[0];if(u!==l.shape.length-1)throw Error(`backend.cumprod in CPU expects an inner-most axis=${l.shape.length-1} but got axis=${u}`);let d=ra(l.dtype,`int32`),f=Re(D(l.shape),d),p=n.data.get(l.dataId).values,m=l.shape[l.shape.length-1],h=s?(e,t)=>e+m-t-1:(e,t)=>e+t;for(let e=0;e<p.length;e+=m)for(let t=0;t<m;t++){let n=h(e,t);if(t===0)f[n]=o?1:p[n];else{let r=h(e,t-1);f[n]=o?p[r]*f[r]:p[n]*f[r]}}let g=n.makeTensorInfo(l.shape,d,f);if(c!=null){let e=Cu(c),t=KL({inputs:{x:g},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(l),t}return g}var KB,qB=o((()=>{q(),X(),JL(),KB={kernelName:It,backendName:`cpu`,kernelFunc:GB}}));function JB(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;Y(i,`cumsum`);let c=Su([a],i.shape.length),l=i;c!=null&&(l=KL({inputs:{x:i},backend:n,attrs:{perm:c}}));let u=wu(1,i.shape.length)[0];if(u!==l.shape.length-1)throw Error(`backend.cumsum in CPU expects an inner-most axis=${l.shape.length-1} but got axis=${u}`);let d=ra(l.dtype,`int32`),f=ze(D(l.shape),d),p=n.data.get(l.dataId).values,m=l.shape[l.shape.length-1],h=s?(e,t)=>e+m-t-1:(e,t)=>e+t;for(let e=0;e<p.length;e+=m)for(let t=0;t<m;t++){let n=h(e,t);if(t===0)f[n]=o?0:p[n];else{let r=h(e,t-1);f[n]=o?p[r]+f[r]:p[n]+f[r]}}let g=n.makeTensorInfo(l.shape,d,f);if(c!=null){let e=Cu(c),t=KL({inputs:{x:g},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(g),n.disposeIntermediateTensorInfo(l),t}return g}var YB,XB=o((()=>{q(),X(),JL(),YB={kernelName:Lt,backendName:`cpu`,kernelFunc:JB}}));function ZB(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o,binaryOutput:s}=r;if(i.shape.length===1){let e=n.data.get(i.dataId).values,t=n.data.get(a.dataId).values,r=fI(e,t,a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,r)}else if(i.shape.length===2){let e=pI(n.bufferSync(i),n.bufferSync(a),o,s);return n.makeTensorInfo(e.shape,a.dtype,e.values)}throw Error(`Error in denseBincount: input must be at most rank 2, but got rank${i.shape.length}.`)}var QB,$B=o((()=>{q(),mI(),QB={kernelName:zt,backendName:`cpu`,kernelFunc:ZB}}));function eV(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockSize:a,dataFormat:o}=r;E(o===`NHWC`,()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${o}`);let s=i.shape[0],c=i.shape[1],l=i.shape[2],u=i.shape[3],d=c*a,f=l*a,p=u/(a*a),m=n.data.get(i.dataId).values,h=new Float32Array(s*d*f*p),g=0;for(let e=0;e<s;++e)for(let t=0;t<d;++t){let n=Math.floor(t/a),r=t%a;for(let t=0;t<f;++t){let i=Math.floor(t/a),o=t%a,s=(r*a+o)*p;for(let t=0;t<p;++t){let r=t+s+u*(i+l*(n+c*e));h[g++]=m[r]}}}return n.makeTensorInfo([s,d,f,p],i.dtype,h)}var tV,nV=o((()=>{q(),tV={kernelName:Bt,backendName:`cpu`,kernelFunc:eV}}));function rV(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c,dimRoundingMode:l}=r;Y([i,a],`depthwiseConv2DNative`);let u=O(i.shape),d=O(a.shape),f=c;f??=[1,1],E(ic(o,f),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${o} and dilations '${f}'`);let p=Ks(i.shape,a.shape,o,f,s,l,!0),{filterHeight:m,filterWidth:h,dilationHeight:g,dilationWidth:_,padInfo:v}=p,y=v.left,b=v.top,x=p.outChannels/p.inChannels,S=new Qi(p.outShape,i.dtype),C=n.data.get(i.dataId).values,w=n.data.get(a.dataId).values,ee=S.values;for(let e=0;e<p.batchSize;++e){let t=e*u[0],n=e*S.strides[0];for(let e=0;e<p.outHeight;++e){let r=n+e*S.strides[1],i=e*p.strideHeight-b;for(let e=0;e<m;++e){let n=i+e*g;if(n<0||n>=p.inHeight)continue;let a=e*d[0],o=t+n*u[1];for(let e=0;e<p.outWidth;++e){let t=r+e*S.strides[2],n=e*p.strideWidth-y;for(let e=0;e<h;++e){let r=n+e*_;if(r<0||r>=p.inWidth)continue;let i=a+e*d[1],s=o+r*p.inChannels,c=t,l=i;for(let e=0;e<p.inChannels;++e){let t=C[s+e];for(let e=0;e<x;++e)ee[c+e]+=t*w[l+e];c+=x,l+=x}}}}}}return n.makeTensorInfo(S.shape,S.dtype,S.values)}var iV,aV=o((()=>{q(),X(),iV={kernelName:Vt,backendName:`cpu`,kernelFunc:rV}}));function oV(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,filterShape:u}=r;Y([i,a],`depthwiseConv2dNativeBackpropFilter`);let d=Ks(i.shape,u,o,s,c,l,!0),{strideHeight:f,strideWidth:p,filterHeight:m,filterWidth:h}=d,g=new Qi(d.filterShape,`float32`),_=d.padInfo.left,v=d.padInfo.top,y=d.outChannels/d.inChannels,b=n.data.get(i.dataId).values,x=new Qi(i.shape,i.dtype,b),S=n.data.get(a.dataId).values,C=new Qi(a.shape,a.dtype,S);for(let e=0;e<m;++e){let t=Math.max(0,Math.ceil((v-e)/f)),n=Math.min(d.outHeight,(d.inHeight+v-e)/f);for(let r=0;r<h;++r){let i=Math.max(0,Math.ceil((_-r)/p)),a=Math.min(d.outWidth,(d.inWidth+_-r)/p);for(let o=0;o<d.outChannels;++o){let s=Math.trunc(o/y),c=o%y,l=0;for(let c=0;c<d.batchSize;++c)for(let u=t;u<n;++u){let t=e+u*f-v;for(let e=i;e<a;++e){let n=r+e*p-_;l+=x.get(c,t,n,s)*C.get(c,u,e,o)}}g.set(l,e,r,s,c)}}}return n.makeTensorInfo(g.shape,g.dtype,g.values)}var sV,cV=o((()=>{q(),X(),sV={kernelName:Ht,backendName:`cpu`,kernelFunc:oV}}));function lV(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,inputShape:u}=r;Y([i,a],`depthwiseConv2DNativeBackpropInput`);let d=O(i.shape),f=O(a.shape),p=Ks(u,a.shape,o,s,c,l,!0),m=new Qi(p.inShape,`float32`),h=m.values,[g,_,v]=m.strides,y=n.data.get(i.dataId).values,[b,x,S]=d,C=n.data.get(a.dataId).values,[w,ee,te]=f,{batchSize:T,filterHeight:ne,filterWidth:re,inChannels:ie,inHeight:ae,inWidth:oe,outChannels:se,outHeight:ce,outWidth:le,strideHeight:ue,strideWidth:de}=p,fe=ne-1-p.padInfo.top,pe=re-1-p.padInfo.left,E=se/ie;for(let e=0;e<T;++e)for(let t=0;t<ie;++t)for(let n=0;n<ae;++n){let r=n-fe,i=Math.max(0,Math.ceil(r/ue)),a=Math.min(ce,(ne+r)/ue);for(let o=0;o<oe;++o){let s=o-pe,c=Math.max(0,Math.ceil(s/de)),l=Math.min(le,(re+s)/de),u=0;for(let n=i;n<a;++n){let i=n*ue-r;for(let r=c;r<l;++r){let a=r*de-s,o=b*e+x*n+S*r,c=w*(ne-1-i)+ee*(re-1-a)+te*t;for(let e=0;e<E;++e){let n=y[o+(t*E+e)],r=C[c+e];u+=n*r}}}h[g*e+_*n+v*o+t]=u}}return n.makeTensorInfo(m.shape,m.dtype,m.values)}var uV,dV=o((()=>{q(),X(),uV={kernelName:Ut,backendName:`cpu`,kernelFunc:lV}}));function fV(e){let{inputs:t,backend:n}=e,{x:r}=t,i=D(r.shape),a=n.data.get(r.dataId).values,o=Jo([i,i],r.dtype),s=o.values;for(let e=0;e<a.length;e++)s[e*i+e]=a[e];let c=[...r.shape,...r.shape];return n.makeTensorInfo(c,o.dtype,o.values)}var pV,mV=o((()=>{q(),pV={kernelName:Wt,backendName:`cpu`,kernelFunc:fV}})),hV,gV=o((()=>{q(),hV={kernelName:Gt,backendName:`cpu`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,filter:i}=e,{strides:a,pad:o,dilations:s}=n,c=t,l=c.data.get(r.dataId).values,u=r.shape.length,d=c.data.get(i.dataId).values,f=i.shape.length,{batchSize:p,inHeight:m,inWidth:h,inChannels:g,outHeight:_,outWidth:v,padInfo:y,strideHeight:b,strideWidth:x,filterHeight:S,filterWidth:C,dilationHeight:w,dilationWidth:ee,outShape:te}=Us(r.shape,i.shape,a,o,`NHWC`,s),T=D(te),ne=te.length,re=Te(r.dtype,T);for(let e=0;e<p;++e)for(let t=0;t<_;++t){let n=t*b-y.top;for(let a=0;a<v;++a){let o=a*x-y.left;for(let s=0;s<g;++s){let c=-(2**53-1);for(let t=0;t<S;++t){let a=n+t*w;if(a>=0&&a<m)for(let n=0;n<C;++n){let p=o+n*ee;if(p>=0&&p<h){let o=He([e,a,p,s],u,O(r.shape)),m=He([t,n,s],f,O(i.shape)),h=l[o]+d[m];h>c&&(c=h)}}}let p=He([e,t,a,s],ne,O(te));re[p]=c}}}return{dataId:c.write(Mi(re,r.dtype),te,r.dtype),shape:te,dtype:r.dtype}}}})),_V,vV=o((()=>{q(),_V={kernelName:qt,backendName:`cpu`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,filter:i,dy:a}=e,{strides:o,pad:s,dilations:c}=n,l=t,u=Ie(r.shape,l.data.get(r.dataId).values),d=Ie(i.shape,l.data.get(i.dataId).values),{batchSize:f,inHeight:p,inWidth:m,inChannels:h,outHeight:g,outWidth:_,padInfo:v,strideHeight:y,strideWidth:b,filterHeight:x,filterWidth:S,dilationHeight:C,dilationWidth:w,outShape:ee}=Us(r.shape,i.shape,o,s,`NHWC`,c);E(a.rank===ee.length,()=>`Error in ${qt}, dy must have the same rank as output ${ee.length}, but got ${a.rank}`);let te=Ie(ee,l.data.get(a.dataId).values),T=Be(i.shape,i.dtype);for(let e=0;e<f;++e)for(let t=0;t<g;++t){let n=t*y-v.top;for(let r=0;r<_;++r){let i=r*b-v.left;for(let a=0;a<h;++a){let o=-(2**53-1),s=0,c=0;for(let t=0;t<x;++t){let r=n+t*C;if(r>=0&&r<p)for(let n=0;n<S;++n){let l=i+n*w;if(l>=0&&l<m){let i=u[e][r][l][a]+d[t][n][a];i>o&&(o=i,s=t,c=n)}}}T[s][c][a]+=te[e][t][r][a]}}}return{dataId:l.write(Mi(T,r.dtype),i.shape,i.dtype),shape:i.shape,dtype:i.dtype}}}})),yV,bV=o((()=>{q(),yV={kernelName:Kt,backendName:`cpu`,kernelFunc:({inputs:e,backend:t,attrs:n})=>{let{x:r,filter:i,dy:a}=e,{strides:o,pad:s,dilations:c}=n,l=t,u=Ie(r.shape,l.data.get(r.dataId).values),d=Ie(i.shape,l.data.get(i.dataId).values),{batchSize:f,inHeight:p,inWidth:m,inChannels:h,outHeight:g,outWidth:_,padInfo:v,strideHeight:y,strideWidth:b,filterHeight:x,filterWidth:S,dilationHeight:C,dilationWidth:w,outShape:ee}=Us(r.shape,i.shape,o,s,`NHWC`,c);E(a.rank===ee.length,()=>`Error in ${Kt}, dy must have the same rank as output ${ee.length}, but got ${a.rank}`);let te=Ie(ee,l.data.get(a.dataId).values),T=Be(r.shape,r.dtype);for(let e=0;e<f;++e)for(let t=0;t<g;++t){let n=t*y-v.top;for(let r=0;r<_;++r){let i=r*b-v.left;for(let a=0;a<h;++a){let o=-(2**53-1),s=n<0?0:n,c=i<0?0:i;for(let t=0;t<x;++t){let r=n+t*C;if(r>=0&&r<p)for(let n=0;n<S;++n){let l=i+n*w;if(l>=0&&l<m){let i=u[e][r][l][a]+d[t][n][a];i>o&&(o=i,s=r,c=l)}}}T[e][s][c][a]+=te[e][t][r][a]}}}return{dataId:l.write(Mi(T,r.dtype),r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}}}));function xV(e){let{inputs:t,backend:n,attrs:r}=e,{image:i}=t,{canvas:a,options:o}=r,{contextOptions:s,imageOptions:c}=o||{},l=c?.alpha||1,u=s?.contextType||`2d`;if(u!==`2d`)throw Error(`Context type ${s.contextType} is not supported by the CPU backend.`);let d=a.getContext(u,s?.contextAttributes||{});if(d==null)throw Error(`Could not get the context with ${u} type.`);let[f,p]=i.shape.slice(0,2),m=i.shape.length===2?1:i.shape[2],h=n.data.get(i.dataId).values,g=i.dtype===`float32`?255:1,_=new Uint8ClampedArray(p*f*4);for(let e=0;e<f*p;++e){let t=[0,0,0,255*l];for(let n=0;n<m;n++){let r=h[e*m+n];if(i.dtype===`float32`){if(r<0||r>1)throw Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${r}.`)}else if(i.dtype===`int32`&&(r<0||r>255))throw Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${r}.`);m===1?(t[0]=r*g,t[1]=r*g,t[2]=r*g):t[n]=r*g}let n=e*4;_[n+0]=Math.round(t[0]),_[n+1]=Math.round(t[1]),_[n+2]=Math.round(t[2]),_[n+3]=Math.round(t[3])}a.width=p,a.height=f;let v=new ImageData(_,p,f);return d.putImageData(v,0,0),i}var SV,CV=o((()=>{q(),SV={kernelName:Jt,backendName:`cpu`,kernelFunc:xV}}));function wV(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;Y(i,`sum`);let s;s=i.dtype===`bool`?tI({inputs:{x:i},backend:n,attrs:{dtype:`int32`}}):JF({inputs:{x:i},backend:n});let c=s.shape.length,l=Se(a,s.shape),u=Su(l,c),d=l,f=s;u!=null&&(f=KL({inputs:{x:s},backend:n,attrs:{perm:u}}),d=wu(d.length,c)),xu(`sum`,d,f.shape.length);let[p,m]=yu(f.shape,d),h=KF(n,p,ra(f.dtype,`int32`)),g=D(m),_=n.data.get(h.dataId).values,v=n.data.get(f.dataId).values;for(let e=0;e<_.length;++e){let t=e*g,n=0;for(let e=0;e<g;++e)n+=v[t+e];_[e]=n}if(o){let e=bu(h.shape,l),t=h;h=jz({inputs:{x:h},backend:n,attrs:{shape:e}}),n.disposeIntermediateTensorInfo(t)}return n.disposeIntermediateTensorInfo(s),u!=null&&n.disposeIntermediateTensorInfo(f),h}var TV,EV=o((()=>{q(),X(),qF(),rI(),XF(),Nz(),JL(),TV={kernelName:`Sum`,backendName:`cpu`,kernelFunc:wV}}));function DV(e){let{inputs:t,backend:n,attrs:r}=e,{equation:i}=r,a=t,{allDims:o,summedDims:s,idDims:c}=Ey(i,a.length);Oy(o.length,c,a);let{path:l,steps:u}=ky(s,c),d=u.length,f=null,p=o.length,m=[];for(let e=0;e<d;++e){for(let t of u[e]){let{permutationIndices:e,expandDims:r}=Dy(p,c[t]),i;Ay(e)?i=a[t]:(i=KL({inputs:{x:a[t]},backend:n,attrs:{perm:e}}),m.push(i));let o=i.shape.slice();for(let e=0;e<r.length;++e)o.splice(r[e],0,1);ge(i.shape,o)||(i=jz({inputs:{x:i},backend:n,attrs:{shape:o}}),m.push(i)),f===null?f=i:(f=PL({inputs:{a:i,b:f},backend:n}),m.push(f))}e<d-1&&(l[e]>=0&&(f=wV({inputs:{x:f},backend:n,attrs:{axis:l[e]-(o.length-p),keepDims:!1}}),m.push(f)),p--)}for(let e of m)e!==f&&n.disposeIntermediateTensorInfo(e);return f}var OV,kV=o((()=>{q(),IL(),Nz(),EV(),JL(),OV={kernelName:Xt,backendName:`cpu`,kernelFunc:DV}}));function AV(e){let{inputs:t,backend:n}=e,{dy:r,y:i}=t;Y([r,i],`eluGrad`);let a=new Float32Array(D(i.shape)),o=n.data.get(i.dataId).values,s=n.data.get(r.dataId).values;for(let e=0;e<o.length;++e){let t=o[e];t>=0?a[e]=s[e]:a[e]=s[e]*(t+1)}return n.makeTensorInfo(i.shape,`float32`,a)}var jV,MV=o((()=>{q(),X(),jV={kernelName:Zt,backendName:`cpu`,kernelFunc:AV}})),NV,PV,FV,IV,LV,RV,zV,BV,VV=o((()=>{q(),CI(),NV=dy,PV=fy,FV=py,IV=my,LV=hy,RV=gy,zV=xI(`Erf`,e=>{let t=Math.sign(e),n=Math.abs(e),r=1/(1+NV*n);return t*(1-((((RV*r+LV)*r+IV)*r+FV)*r+PV)*r*Math.exp(-n*n))}),BV={kernelName:`Erf`,backendName:`cpu`,kernelFunc:zV}}));function HV(e){let{inputs:t,backend:n,attrs:r}=e,{input:i}=t,{dim:a}=r,o=i.shape.length,s=i.shape.slice(),c=a;return a<0&&(E(-(o+1)<=a,()=>`Axis must be in the interval [${-(o+1)}, ${o}]`),c=o+a+1),s.splice(c,0,1),jz({inputs:{x:i},backend:n,attrs:{shape:s}})}var UV,WV=o((()=>{q(),Nz(),UV={kernelName:$t,backendName:`cpu`,kernelFunc:HV}})),GV,KV,qV,JV=o((()=>{q(),HF(),oI(),GV=VF((e,t)=>e/t),KV=iI(Yt,GV),qV={kernelName:Yt,backendName:`cpu`,kernelFunc:KV}}));function YV(e,t,n){let r=e.shape,i=r[0],a=r[1],o=n.data.get(e.dataId),s=o.complexTensorInfos.real,c=o.complexTensorInfos.imag,l=[i,a],u=D(l),d=we(`float32`,u),f=we(`float32`,u);for(let e=0;e<i;e++){let r=CR({inputs:{x:s},backend:n,attrs:{begin:[e,0],size:[1,a]}}),i=CR({inputs:{x:c},backend:n,attrs:{begin:[e,0],size:[1,a]}}),o=UF({inputs:{real:r,imag:i},backend:n}),{real:l,imag:u}=XV(o,t,n),p=vy(l,u);for(let t=0;t<a;t++){let n=Sy(p,t);d[e*a+t]=n.real,f[e*a+t]=n.imag}n.disposeIntermediateTensorInfo(r),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(o)}let p=n.makeTensorInfo(l,`float32`,d),m=n.makeTensorInfo(l,`float32`,f),h=UF({inputs:{real:p,imag:m},backend:n});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),h}function XV(e,t,n){let r=D(e.shape),i=n.data.get(e.dataId),a=n.data.get(i.complexTensorInfos.real.dataId).values,o=n.data.get(i.complexTensorInfos.imag.dataId).values;if(ZV(r)){let i=QV(a,o,r,t,n),s=[e.shape[0],e.shape[1]];if(t){let e=n.makeTensorInfo(s,`float32`,i.real),t=n.makeTensorInfo(s,`float32`,i.imag),a=n.makeTensorInfo([],`float32`,Ai(r,`float32`)),o=JF({inputs:{x:a},backend:n}),c=qV.kernelFunc({inputs:{a:e,b:a},backend:n}),l=qV.kernelFunc({inputs:{a:t,b:o},backend:n}),u=n.data.get(c.dataId).values,d=n.data.get(l.dataId).values;return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(l),{real:u,imag:d}}return i}else return yy($V(vy(a,o),r,t))}function ZV(e){return(e&e-1)==0}function QV(e,t,n,r,i){if(n===1)return{real:e,imag:t};let a=vy(e,t),o=n/2,s=by(a),c=s.real,l=s.imag,u=[c.length],d=i.makeTensorInfo(u,`float32`,c),f=i.makeTensorInfo(u,`float32`,l),p=UF({inputs:{real:d,imag:f},backend:i}),m=xy(a),h=m.real,g=m.imag,_=[h.length],v=i.makeTensorInfo(_,`float32`,h),y=i.makeTensorInfo(_,`float32`,g),b=UF({inputs:{real:v,imag:y},backend:i}),x=QV(c,l,o,r,i),S=x.real,C=x.imag,w=[S.length],ee=i.makeTensorInfo(w,`float32`,S),te=i.makeTensorInfo(w,`float32`,C),T=UF({inputs:{real:ee,imag:te},backend:i}),ne=QV(h,g,o,r,i),re=ne.real,ie=ne.imag,ae=[re.length],oe=i.makeTensorInfo(ae,`float32`,re),se=i.makeTensorInfo(ae,`float32`,ie),ce=UF({inputs:{real:oe,imag:se},backend:i}),le=wy(n,r),ue=[le.real.length],de=i.makeTensorInfo(ue,`float32`,le.real),fe=i.makeTensorInfo(ue,`float32`,le.imag),pe=UF({inputs:{real:de,imag:fe},backend:i}),E=PL({inputs:{a:pe,b:ce},backend:i}),me=lI({inputs:{a:T,b:E},backend:i}),he=tz({inputs:{a:T,b:E},backend:i}),D=ZF({inputs:{input:me},backend:i}),ge=ZF({inputs:{input:he},backend:i}),_e=bB({inputs:{input:me},backend:i}),ve=bB({inputs:{input:he},backend:i}),ye=CB({inputs:[D,ge],backend:i,attrs:{axis:0}}),be=CB({inputs:[_e,ve],backend:i,attrs:{axis:0}}),xe=i.data.get(ye.dataId).values,Se=i.data.get(be.dataId).values;return i.disposeIntermediateTensorInfo(d),i.disposeIntermediateTensorInfo(f),i.disposeIntermediateTensorInfo(p),i.disposeIntermediateTensorInfo(v),i.disposeIntermediateTensorInfo(y),i.disposeIntermediateTensorInfo(b),i.disposeIntermediateTensorInfo(ee),i.disposeIntermediateTensorInfo(te),i.disposeIntermediateTensorInfo(T),i.disposeIntermediateTensorInfo(oe),i.disposeIntermediateTensorInfo(se),i.disposeIntermediateTensorInfo(ce),i.disposeIntermediateTensorInfo(de),i.disposeIntermediateTensorInfo(fe),i.disposeIntermediateTensorInfo(pe),i.disposeIntermediateTensorInfo(E),i.disposeIntermediateTensorInfo(me),i.disposeIntermediateTensorInfo(he),i.disposeIntermediateTensorInfo(D),i.disposeIntermediateTensorInfo(_e),i.disposeIntermediateTensorInfo(ge),i.disposeIntermediateTensorInfo(ve),i.disposeIntermediateTensorInfo(ye),i.disposeIntermediateTensorInfo(be),{real:xe,imag:Se}}function $V(e,t,n){let r=new Float32Array(t*2);for(let i=0;i<t;i++){let a=0,o=0;for(let r=0;r<t;r++){let s=Ty(i*r,t,n),c=Sy(e,r);a+=c.real*s.real-c.imag*s.imag,o+=c.real*s.imag+c.imag*s.real}n&&(a/=t,o/=t),Cy(r,a,o,i)}return r}var eH=o((()=>{q(),dI(),GF(),TB(),XF(),SB(),IL(),$F(),JV(),TR(),rz()}));function tH(e){let{inputs:t,backend:n}=e,{input:r}=t,i=D(r.shape),a=r.shape[r.shape.length-1],o=i/a,s=jz({inputs:{x:r},backend:n,attrs:{shape:[o,a]}}),c=YV(s,!1,n),l=jz({inputs:{x:c},backend:n,attrs:{shape:r.shape}});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(c),l}var nH,rH=o((()=>{q(),eH(),Nz(),nH={kernelName:`FFT`,backendName:`cpu`,kernelFunc:tH}}));function iH(e){let{backend:t,attrs:n}=e,{shape:r,value:i,dtype:a}=n,o=a||Me(i),s=Te(o,D(r));return aH(s,i,o),t.makeTensorInfo(r,o,s)}function aH(e,t,n){e.fill(t)}var oH,sH=o((()=>{q(),oH={kernelName:tn,backendName:`cpu`,kernelFunc:iH}})),cH,lH=o((()=>{q(),cH={kernelName:nn,backendName:`cpu`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{image:r}=e,i=n,a=we(r.dtype,D(r.shape)),[o,s,c,l]=r.shape,u=i.data.get(r.dataId).values;for(let e=0;e<o;e++){let t=e*c*s*l;for(let e=0;e<s;e++){let n=c*l*e;for(let e=0;e<c;e++){let r=e*l;for(let i=0;i<l;i++){let o=Math.round(c-e-1),s=t+n+r+i,d=u[s];if(o>=0&&o<c){let e=o*l;d=u[t+n+e+i]}a[s]=d}}}}return{dataId:i.write(a,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}}}));function uH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f,activation:p,leakyreluAlpha:m}=r,h=EB({inputs:{x:i,filter:a},backend:n,attrs:{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f}});if(o){let e=h;if(u===`NCHW`&&o.shape.length===1&&o.shape[0]!==1){let e=jz({inputs:{x:o},backend:n,attrs:{shape:[o.shape[0],1,1]}});h=lI({inputs:{a:h,b:e},backend:n}),n.disposeIntermediateTensorInfo(e)}else h=lI({inputs:{a:h,b:o},backend:n});n.disposeIntermediateTensorInfo(e)}if(p){let e=h;if(u===`NCHW`&&p===`prelu`&&s.shape.length===1&&s.shape[0]!==1){let e=jz({inputs:{x:s},backend:n,attrs:{shape:[s.shape[0],1,1]}});h=kz(n,h,p,e,m),n.disposeIntermediateTensorInfo(e)}else h=kz(n,h,p,s,m);n.disposeIntermediateTensorInfo(e)}return h}var dH,fH=o((()=>{q(),Az(),dI(),OB(),Nz(),dH={kernelName:Yr,backendName:`cpu`,kernelFunc:uH}}));function pH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f,activation:p,leakyreluAlpha:m}=r,h=rV({inputs:{x:i,filter:a},backend:n,attrs:{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f}});if(o){let e=h;h=lI({inputs:{a:h,b:o},backend:n}),n.disposeIntermediateTensorInfo(e)}if(p){let e=h;h=kz(n,h,p,s,m),n.disposeIntermediateTensorInfo(e)}return h}var mH,hH=o((()=>{q(),Az(),dI(),aV(),mH={kernelName:Xr,backendName:`cpu`,kernelFunc:pH}}));function gH(e){let{inputs:t,backend:n}=e,{params:r,indices:i}=t,a=D(r.shape),o=i.shape,s=o[o.length-1],[c,l,u,d]=mv(r,i);if(l===0)return n.makeTensorInfo(c,r.dtype,[]);let f=n.data.get(i.dataId).values,p=XI(f,n.bufferSync(r),r.dtype,l,s,u,d,r.shape,a);return n.makeTensorInfo(c,r.dtype,p.values)}var _H,vH=o((()=>{q(),ZI(),_H={kernelName:cn,backendName:`cpu`,kernelFunc:gH}}));function yH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,indices:a}=t,{axis:o,batchDims:s}=r;Y([i,a],`gatherV2`);let c=Se(o,i.shape)[0],l=n.data.get(a.dataId).values,u=i.shape[c];for(let e=0;e<l.length;++e){let t=l[e];E(t<=u-1&&t>=0,()=>`GatherV2: the index value ${t} is not in [0, ${u-1}]`)}let d=s;s??(d=0);let f=D(a.shape),p=eb(i,a,c,d),m=jz({inputs:{x:i},backend:n,attrs:{shape:[p.batchSize,p.outerSize,p.dimSize,p.sliceSize]}}),h=jz({inputs:{x:a},backend:n,attrs:{shape:[p.batchSize,f/p.batchSize]}}),g=[p.batchSize,p.outerSize,f/p.batchSize,p.sliceSize],_=n.bufferSync(h),v=QI(n.bufferSync(m),_,g);return n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(h),n.makeTensorInfo(p.outputShape,v.dtype,v.values)}var bH,xH=o((()=>{q(),X(),$I(),Nz(),bH={kernelName:sn,backendName:`cpu`,kernelFunc:yH}}));function SH(e){let{inputs:t,backend:n}=e,{input:r}=t,i=D(r.shape),a=r.shape[r.shape.length-1],o=i/a,s=jz({inputs:{x:r},backend:n,attrs:{shape:[o,a]}}),c=YV(s,!0,n),l=jz({inputs:{x:c},backend:n,attrs:{shape:r.shape}});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(c),l}var CH,wH=o((()=>{q(),eH(),Nz(),CH={kernelName:fn,backendName:`cpu`,kernelFunc:SH}})),TH,EH,DH=o((()=>{q(),CI(),TH=xI(mn,e=>+!!Number.isFinite(e),`bool`),EH={kernelName:mn,backendName:`cpu`,kernelFunc:TH}})),OH,kH,AH=o((()=>{q(),CI(),OH=xI(hn,e=>+(Math.abs(e)===1/0),`bool`),kH={kernelName:hn,backendName:`cpu`,kernelFunc:OH}})),jH,MH,NH=o((()=>{q(),CI(),jH=xI(gn,e=>+!!Number.isNaN(e),`bool`),MH={kernelName:gn,backendName:`cpu`,kernelFunc:jH}}));function PH(e){let{backend:t,attrs:n}=e,{start:r,stop:i,num:a}=n,o=gL(r,i,a);return t.makeTensorInfo([o.length],`float32`,o)}var FH,IH=o((()=>{q(),_L(),FH={kernelName:bn,backendName:`cpu`,kernelFunc:PH}})),LH,RH,zH=o((()=>{q(),CI(),LH=xI(xn,e=>Math.log1p(e)),RH={kernelName:xn,backendName:`cpu`,kernelFunc:LH}})),BH,VH,HH,UH=o((()=>{q(),HF(),oI(),BH=VF((e,t)=>e&&t),VH=iI(Sn,BH,null,`bool`),HH={kernelName:Sn,backendName:`cpu`,kernelFunc:VH}})),WH,GH,KH=o((()=>{q(),CI(),WH=xI(Cn,e=>+!e,`bool`),GH={kernelName:Cn,backendName:`cpu`,kernelFunc:WH}})),qH,JH,YH,XH=o((()=>{q(),HF(),oI(),qH=VF((e,t)=>e||t),JH=iI(wn,qH,null,`bool`),YH={kernelName:wn,backendName:`cpu`,kernelFunc:JH}}));function ZH(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{depthRadius:a,bias:o,alpha:s,beta:c}=r;Y(i,`LRN`);let l=i.shape[3],u=l-1,d=n.data.get(i.dataId).values,f=D(i.shape),p=new Float32Array(f);function m(e){let t=e%l,n=e-t+Math.max(0,t-a),r=e-t+Math.min(t+a,u),i=0;for(;n<=r;n++){let e=d[n];i+=e*e}return i}for(let e=0;e<f;e++){let t=m(e);p[e]=d[e]*(o+s*t)**+-c}return n.makeTensorInfo(i.shape,i.dtype,p)}var QH,$H=o((()=>{q(),X(),QH={kernelName:`LRN`,backendName:`cpu`,kernelFunc:ZH}}));function eU(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,y:a,dy:o}=t,{depthRadius:s,bias:c,alpha:l,beta:u}=r;Y(o,`LRNGrad`);let d=D(o.shape),f=o.shape[3],p=n.data.get(o.dataId).values,m=n.data.get(i.dataId).values,h=n.data.get(a.dataId).values,g=new Float32Array(d),_=d;for(let e=0;e<_;e++){let t=e%f,n=e-t+Math.max(0,t-s),r=e-t+Math.min(f,t+s+1),i=0;for(let e=n;e<r;e++)i+=m[e]**2;i=l*i+c;for(let t=n;t<r;t++){let n=-2*l*u*m[t]*h[e]/i;e===t&&(n+=i**+-u),n*=p[e],g[t]+=n}}return n.makeTensorInfo(o.shape,i.dtype,g)}var tU,nU=o((()=>{q(),X(),tU={kernelName:En,backendName:`cpu`,kernelFunc:eU}}));function rU(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reductionIndices:a,keepDims:o}=r,s=n,c=i.shape,l=c.length,u=Se(a,c),d=u,f=Su(d,l),p=s.data.get(i.dataId).values;if(f!=null){let e=Array(l);for(let t=0;t<e.length;t++)e[t]=c[f[t]];p=WL(p,c,i.dtype,f,e),d=wu(d.length,l),c=e}Y(i,`max`),xu(`max`,d,l);let[m,h]=yu(c,d),g=D(h),_=SL(p,g,m,i.dtype),v=s.write(_,m,i.dtype),y=m;return o&&(y=bu(m,u)),{dataId:v,shape:y,dtype:i.dtype}}var iU,aU=o((()=>{q(),X(),CL(),GL(),iU={kernelName:`Max`,backendName:`cpu`,kernelFunc:rU}}));function oU(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;Y(i,`maxPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;E(ic(o,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=Ws(i.shape,a,o,1,s,c),u;if(l.filterWidth===1&&l.filterHeight===1&&ge(l.inShape,l.outShape))u=JF({inputs:{x:i},backend:n});else{let e=n.data.get(i.dataId).values,t=O(i.shape),r=iB(e,i.shape,i.dtype,t,l,`max`);u=n.makeTensorInfo(l.outShape,i.dtype,r.values)}return u}var sU,cU=o((()=>{q(),X(),sB(),XF(),sU={kernelName:On,backendName:`cpu`,kernelFunc:oU}}));function lU(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c,dataFormat:l}=r;Y(i,`maxPool3d`);let u=Gs(i.shape,a,o,1,s,c,l),d=n.data.get(i.dataId).values,f=oB(d,i.shape,i.dtype,O(i.shape),u,`max`);return n.makeTensorInfo(f.shape,`float32`,f.values)}var uU,dU=o((()=>{q(),X(),sB(),uU={kernelName:An,backendName:`cpu`,kernelFunc:lU}}));function fU(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,{filterSize:o,strides:s,pad:c,dimRoundingMode:l}=r;Y([i,a],`maxPool3DGrad`);let u=Gs(a.shape,o,s,1,c,l),d=Vre(n.bufferSync(a),u),f=u.strideDepth,p=u.strideHeight,m=u.strideWidth,h=u.dilationDepth,g=u.dilationHeight,_=u.dilationWidth,v=u.effectiveFilterDepth,y=u.effectiveFilterHeight,b=u.effectiveFilterWidth,x=v-1-u.padInfo.front,S=b-1-u.padInfo.left,C=y-1-u.padInfo.top,w=Jo(a.shape,`float32`),ee=n.bufferSync(i);for(let e=0;e<u.batchSize;++e)for(let t=0;t<u.inChannels;++t)for(let n=0;n<u.inDepth;++n)for(let r=0;r<u.inHeight;++r)for(let i=0;i<u.inWidth;++i){let a=n-x,o=r-C,s=i-S,c=0;for(let n=0;n<v;n+=h){let r=(a+n)/f;if(!(r<0||r>=u.outDepth||Math.floor(r)!==r))for(let i=0;i<y;i+=g){let a=(o+i)/p;if(!(a<0||a>=u.outHeight||Math.floor(a)!==a))for(let o=0;o<b;o+=_){let l=(s+o)/m;if(l<0||l>=u.outWidth||Math.floor(l)!==l)continue;let f=+(v*y*b-1-d.get(e,r,a,l,t)===n*y*b+i*b+o);if(f===0)continue;let p=ee.get(e,r,a,l,t);c+=p*f}}}w.set(c,e,n,r,i,t)}return n.makeTensorInfo(w.shape,w.dtype,w.values)}var pU,mU=o((()=>{q(),X(),sB(),pU={kernelName:jn,backendName:`cpu`,kernelFunc:fU}}));function hU(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a,output:o}=t,s=a;Y([a,o],`maxPoolGrad`);let{filterSize:c,strides:l,pad:u,dimRoundingMode:d}=r,f=Ws(s.shape,c,l,1,u,d),p=n.data.get(s.dataId).values,m=Jo(f.outShape,s.dtype,aB(p,s.shape,s.dtype,f).values),h=f.strideHeight,g=f.strideWidth,_=f.dilationHeight,v=f.dilationWidth,y=f.effectiveFilterHeight,b=f.effectiveFilterWidth,x=b-1-f.padInfo.left,S=y-1-f.padInfo.top,C=Jo(s.shape,`float32`),w=n.data.get(i.dataId).values,ee=Jo(i.shape,`float32`,w);for(let e=0;e<f.batchSize;++e)for(let t=0;t<f.inChannels;++t)for(let n=0;n<f.inHeight;++n)for(let r=0;r<f.inWidth;++r){let i=n-S,a=r-x,o=0;for(let n=0;n<y;n+=_){let r=(i+n)/h;if(!(r<0||r>=f.outHeight||Math.floor(r)!==r))for(let i=0;i<b;i+=v){let s=(a+i)/g;if(s<0||s>=f.outWidth||Math.floor(s)!==s)continue;let c=+(y*b-1-m.get(e,r,s,t)===n*b+i);if(c===0)continue;let l=ee.get(e,r,s,t);o+=l*c}}C.set(o,e,n,r,t)}return n.makeTensorInfo(C.shape,C.dtype,C.values)}var gU,_U=o((()=>{q(),X(),sB(),gU={kernelName:kn,backendName:`cpu`,kernelFunc:hU}}));function vU(e,t,n,r,i){let a=iB(e,t,n,O(t),i,`max`),o=aB(e,t,n,i,!0,r);return[a.values,o.values]}var yU=o((()=>{q(),sB()})),bU,xU=o((()=>{q(),X(),yU(),bU={kernelName:Mn,backendName:`cpu`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{filterSize:i,strides:a,pad:o,includeBatchInIndex:s}=t,c=n;Y(r,`MaxPoolWithArgmax`);let l=c.data.get(r.dataId).values,u=Ws(r.shape,i,a,[1,1],o),[d,f]=vU(l,r.shape,r.dtype,s,u),p=c.write(d,u.outShape,r.dtype),m=c.write(f,u.outShape,r.dtype);return[{dataId:p,shape:u.outShape,dtype:r.dtype},{dataId:m,shape:u.outShape,dtype:`int32`}]}}}));function SU(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=Se(a,i.shape),c=yu(i.shape,s)[1],l=D(c),u=[],d=n.makeTensorInfo([],`float32`,new Float32Array([l]));u.push(d);let f=tI({inputs:{x:i},backend:n,attrs:{dtype:`float32`}});u.push(f);let p=KV({inputs:{a:f,b:d},backend:n});u.push(p);let m=wV({inputs:{x:p},backend:n,attrs:{axis:a,keepDims:o}});return u.forEach(e=>n.disposeIntermediateTensorInfo(e)),m}var CU,wU=o((()=>{q(),rI(),JV(),EV(),CU={kernelName:Nn,backendName:`cpu`,kernelFunc:SU}}));function TU(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;Y(i,`min`);let s=Se(a,i.shape),c=s,l=Su(c,i.shape.length),u=i;l!=null&&(u=KL({inputs:{x:i},backend:n,attrs:{perm:l}}),c=wu(c.length,i.shape.length)),xu(`min`,c,u.shape.length);let[d,f]=yu(u.shape,c),p=D(f),m=ze(D(d),u.dtype),h=n.data.get(u.dataId).values;for(let e=0;e<m.length;++e){let t=e*p,n=h[t];for(let e=0;e<p;++e){let r=h[t+e];(Number.isNaN(r)||r<n)&&(n=r)}m[e]=n}l!=null&&n.disposeIntermediateTensorInfo(u);let g=n.makeTensorInfo(d,u.dtype,m);if(o){let e=bu(d,s),t=jz({inputs:{x:g},backend:n,attrs:{shape:e}});return n.disposeIntermediateTensorInfo(g),t}return g}var EU,DU=o((()=>{q(),X(),Nz(),JL(),EU={kernelName:`Min`,backendName:`cpu`,kernelFunc:TU}}));function OU(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{paddings:a,mode:o}=r;Y(i,`mirrorPad`);let s=a.map((e,t)=>e[0]+i.shape[t]+e[1]),c=a.map(e=>e[0]),l=a.map((e,t)=>e[0]+i.shape[t]),u=o===`reflect`?0:1,d=n.data.get(i.dataId).values,f=i.shape.length,p=O(i.shape),m=D(s),h=s.length,g=O(s),_=we(i.dtype,m);for(let e=0;e<m;e++){let t=Ue(e,h,g);for(let e=0;e<h;e++)t[e]<c[e]?t[e]=c[e]*2-t[e]-u:t[e]>=l[e]&&(t[e]=(l[e]-1)*2-t[e]+u);t=t.map((e,t)=>e-c[t]),_[e]=d[He(t,f,p)]}return{dataId:n.write(_,s,i.dtype),shape:s,dtype:i.dtype}}var kU,AU=o((()=>{q(),X(),kU={kernelName:Fn,backendName:`cpu`,kernelFunc:OU}})),jU,MU,NU,PU=o((()=>{q(),HF(),oI(),jU=VF(((e,t)=>{let n=e%t;return e<0&&t<0||e>=0&&t>=0?n:(n+t)%t})),MU=iI(`Mod`,jU),NU={kernelName:`Mod`,backendName:`cpu`,kernelFunc:MU}}));function FU(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{dim:a}=r,o=i.shape.length,s=a;if(s===-1&&(s=o-1),s!==o-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${o} and dim was ${s}`);let c=Se([s],i.shape),l=rU({inputs:{x:i},backend:n,attrs:{reductionIndices:c,keepDims:!1}}),u=bu(l.shape,c),d=jz({inputs:{x:l},backend:n,attrs:{shape:u}}),f=tz({inputs:{a:i,b:d},backend:n}),p=FI({inputs:{x:f},backend:n}),m=wV({inputs:{x:p},backend:n,attrs:{axis:c,keepDims:!1}}),h=jz({inputs:{x:m},backend:n,attrs:{shape:u}}),g=KV({inputs:{a:p,b:h},backend:n});return n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(h),g}var IU,LU=o((()=>{q(),LI(),aU(),JV(),Nz(),rz(),EV(),IU={kernelName:Cr,backendName:`cpu`,kernelFunc:FU}}));function RU(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{numSamples:a,seed:o,normalized:s}=r;Y(i,`multinomial`);let c=s?i:FU({inputs:{logits:i},backend:n,attrs:{dim:-1}}),l=c.shape[0],u=c.shape[1],d=n.data.get(c.dataId).values,f=[l,a],p=ze(D(f),`int32`);for(let e=0;e<l;++e){let t=e*u,n=new Float32Array(u-1);n[0]=d[t];for(let e=1;e<n.length;++e)n[e]=n[e-1]+d[t+e];let r=zU.alea(o.toString()),i=e*a;for(let e=0;e<a;++e){let t=r();p[i+e]=n.length;for(let r=0;r<n.length;r++)if(t<n[r]){p[i+e]=r;break}}}return s||n.disposeIntermediateTensorInfo(c),n.makeTensorInfo(f,`int32`,p)}var zU,BU,VU=o((()=>{q(),zU=u(Tp()),X(),LU(),BU={kernelName:In,backendName:`cpu`,kernelFunc:RU}}));function HU(e){let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c}=r;Y(i,`NonMaxSuppression`);let l=n.data.get(i.dataId).values,u=n.data.get(a.dataId).values,{selectedIndices:d}=UU(l,u,o,s,c);return n.makeTensorInfo([d.length],`int32`,new Int32Array(d))}var UU,WU,GU=o((()=>{q(),X(),UU=Dg,WU={kernelName:zn,backendName:`cpu`,kernelFunc:HU}}));function KU(e){let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,padToMaxOutputSize:l}=r;Y(i,`NonMaxSuppressionPadded`);let u=n.data.get(i.dataId).values,d=n.data.get(a.dataId).values,{selectedIndices:f,validOutputs:p}=qU(u,d,o,s,c,l);return[n.makeTensorInfo([f.length],`int32`,new Int32Array(f)),n.makeTensorInfo([],`int32`,new Int32Array([p]))]}var qU,JU,YU=o((()=>{q(),X(),qU=Og,JU={kernelName:Bn,backendName:`cpu`,kernelFunc:KU}}));function XU(e){let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,softNmsSigma:l}=r;Y(i,`NonMaxSuppressionWithScore`);let u=n.data.get(i.dataId).values,d=n.data.get(a.dataId).values,{selectedIndices:f,selectedScores:p}=ZU(u,d,o,s,c,l);return[n.makeTensorInfo([f.length],`int32`,new Int32Array(f)),n.makeTensorInfo([p.length],`float32`,new Float32Array(p))]}var ZU,QU,$U=o((()=>{q(),X(),ZU=kg,QU={kernelName:Vn,backendName:`cpu`,kernelFunc:XU}}));function eW(e){let{inputs:t,backend:n,attrs:r}=e,{indices:i}=t,{dtype:a,depth:o,onValue:s,offValue:c}=r;Y(i,`oneHot`);let l=D(i.shape),u=new Float32Array(l*o);u.fill(c);let d=n.data.get(i.dataId).values;for(let e=0;e<l;++e)d[e]>=0&&d[e]<o&&(u[e*o+d[e]]=s);return n.makeTensorInfo([...i.shape,o],a,u)}var tW,nW=o((()=>{q(),X(),tW={kernelName:Un,backendName:`cpu`,kernelFunc:eW}}));function rW(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`string`)throw Error(`zerosLike is not supported for string tensors`);if(r.dtype===`complex64`){let e=ZF({inputs:{input:r},backend:n}),t=rW({inputs:{x:e},backend:n}),i=bB({inputs:{input:r},backend:n}),a=rW({inputs:{x:i},backend:n}),o=UF({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}else return iH({backend:n,attrs:{shape:r.shape,value:0,dtype:r.dtype}})}var iW,aW=o((()=>{q(),GF(),sH(),SB(),$F(),iW={kernelName:Wr,backendName:`cpu`,kernelFunc:rW}}));function oW(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`string`)throw Error(`onesLike is not supported for string tensors`);if(r.dtype===`complex64`){let e=ZF({inputs:{input:r},backend:n}),t=oW({inputs:{x:e},backend:n}),i=bB({inputs:{input:r},backend:n}),a=rW({inputs:{x:i},backend:n}),o=UF({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}else return iH({backend:n,attrs:{shape:r.shape,value:1,dtype:r.dtype}})}var sW,cW=o((()=>{q(),GF(),sH(),SB(),$F(),aW(),sW={kernelName:Hn,backendName:`cpu`,kernelFunc:oW}}));function lW(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r;if(t.length===1)return HV({inputs:{input:t[0]},backend:n,attrs:{dim:i}});let a=t[0].shape,o=t[0].dtype;t.forEach(e=>{me(a,e.shape,`All tensors passed to stack must have matching shapes`),E(o===e.dtype,()=>`All tensors passed to stack must have matching dtypes`)});let s=[],c=CB({inputs:t.map(e=>{let t=HV({inputs:{input:e},backend:n,attrs:{dim:i}});return s.push(t),t}),backend:n,attrs:{axis:i}});return s.forEach(e=>n.disposeIntermediateTensorInfo(e)),c}var uW,dW=o((()=>{q(),TB(),WV(),uW={kernelName:Wn,backendName:`cpu`,kernelFunc:lW}}));function fW(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{paddings:a,constantValue:o}=r;Y(i,`pad`);let s=a.map((e,t)=>e[0]+i.shape[t]+e[1]),c=a.map(e=>e[0]),l=n.data.get(i.dataId).values,u=D(i.shape),d=i.shape.length,f=O(i.shape),p=D(s),m=s.length,h=O(s),g=we(i.dtype,p);o!==0&&g.fill(o);for(let e=0;e<u;e++){let t=He(Ue(e,d,f).map((e,t)=>e+c[t]),m,h);g[t]=l[e]}return{dataId:n.write(g,s,i.dtype),shape:s,dtype:i.dtype}}var pW,mW=o((()=>{q(),X(),pW={kernelName:Gn,backendName:`cpu`,kernelFunc:fW}})),hW,gW,_W,vW=o((()=>{q(),HF(),oI(),hW=VF((e,t)=>e**+t),gW=iI(`Pow`,hW),_W={kernelName:`Pow`,backendName:`cpu`,kernelFunc:gW}}));function yW(e){let{inputs:t,backend:n,attrs:r}=e,{paramsNestedSplits:i,paramsDenseValues:a,indices:o}=t,{outputRaggedRank:s}=r,c=i.map(e=>n.data.get(e.dataId).values),l=i.map(e=>e.shape),u=n.data.get(a.dataId).values,d=n.data.get(o.dataId).values,[f,p,m]=$L(c,l,u,a.shape,a.dtype,d,o.shape,s),h=f.map(e=>n.makeTensorInfo([e.length],`int32`,e)),g=n.makeTensorInfo(m,a.dtype,p);return h.concat([g])}var bW,xW=o((()=>{q(),eR(),bW={kernelName:Jn,backendName:`cpu`,kernelFunc:yW}}));function SW(e){let{inputs:t,backend:n}=e,{starts:r,limits:i,deltas:a}=t,o=n.data.get(r.dataId).values,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,[l,u]=tR(o,r.shape,r.dtype,s,i.shape,c,a.shape);return[n.makeTensorInfo([l.length],`int32`,l),n.makeTensorInfo([u.length],r.dtype,u)]}var CW,wW=o((()=>{q(),rR(),CW={kernelName:Yn,backendName:`cpu`,kernelFunc:SW}}));function TW(e){let{inputs:t,backend:n,attrs:r}=e,{shape:i,values:a,defaultValue:o,rowPartitionTensors:s}=t,{rowPartitionTypes:c}=r,l=n.data.get(i.dataId).values,u=n.data.get(a.dataId).values,d=n.data.get(o.dataId).values,f=s.map(e=>n.data.get(e.dataId).values),p=s.map(e=>e.shape),[m,h]=oR(l,i.shape,u,a.shape,a.dtype,d,o.shape,f,p,c);return n.makeTensorInfo(m,a.dtype,h)}var EW,DW=o((()=>{q(),lR(),EW={kernelName:Xn,backendName:`cpu`,kernelFunc:TW}}));function OW(e){let{backend:t,attrs:n}=e,{start:r,stop:i,dtype:a,step:o}=n,s=uR(r,i,o,a);return t.makeTensorInfo([s.length],a,s)}var kW,AW=o((()=>{q(),dR(),kW={kernelName:Zn,backendName:`cpu`,kernelFunc:OW}})),jW,MW,NW=o((()=>{q(),CI(),jW=xI($n,e=>1/e),MW={kernelName:$n,backendName:`cpu`,kernelFunc:jW}}));function PW(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r;Y(i,`resizeBilinear`);let c=O(i.shape),[l,u]=s,[d,f,p,m]=i.shape,h=n.data.get(i.dataId).values,g=new Float32Array(D([d,l,u,m])),_=[a&&l>1?f-1:f,a&&u>1?p-1:p],v=[a&&l>1?l-1:l,a&&u>1?u-1:u],y=0,b=_[0]/v[0],x=_[1]/v[1];for(let e=0;e<d;e++)for(let t=0;t<l;t++){let n;n=o?b*(t+.5)-.5:b*t;let r=Math.max(0,Math.floor(n)),i=n-r,a=Math.min(f-1,Math.ceil(n)),s=e*c[0]+r*c[1],l=e*c[0]+a*c[1];for(let e=0;e<u;e++){let t;t=o?x*(e+.5)-.5:x*e;let n=Math.max(0,Math.floor(t)),r=t-n,a=Math.min(p-1,Math.ceil(t)),u=s+n*c[2],d=l+n*c[2],f=s+a*c[2],_=l+a*c[2];for(let e=0;e<m;e++){let t=h[u+e],n=h[d+e],a=h[f+e],o=h[_+e],s=t+(a-t)*r,c=s+(n+(o-n)*r-s)*i;g[y++]=c}}}return n.makeTensorInfo([d,l,u,m],`float32`,g)}var FW,IW=o((()=>{q(),X(),FW={kernelName:ir,backendName:`cpu`,kernelFunc:PW}}));function LW(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r;Y([a,i],`resizeBilinearGrad`);let s=O(i.shape),[c,l,u,d]=i.shape,[,f,p]=a.shape,m=new Float32Array(c*l*u*d),h=[o&&f>1?l-1:l,o&&p>1?u-1:u],g=[o&&f>1?f-1:f,o&&p>1?p-1:p],_=h[0]/g[0],v=h[1]/g[1],y=n.data.get(a.dataId).values,b=0;for(let e=0;e<c;e++){let t=e*s[0];for(let e=0;e<f;e++){let n=e*_,r=Math.floor(n),i=Math.min(Math.ceil(n),l-1),a=t+r*s[1],o=t+i*s[1],c=n-r,f=1-c;for(let e=0;e<p;e++){let t=e*v,n=Math.floor(t),r=Math.min(Math.ceil(t),u-1),i=t-n,l=1-i,p=a+n*s[2],h=a+r*s[2],g=o+n*s[2],_=o+r*s[2],x=f*l,S=f*i,C=c*l,w=c*i;for(let e=0;e<d;e++){let t=y[b++];m[p+e]+=t*x,m[h+e]+=t*S,m[g+e]+=t*C,m[_+e]+=t*w}}}}return n.makeTensorInfo([c,u,l,d],`float32`,m)}var RW,zW=o((()=>{q(),X(),RW={kernelName:ar,backendName:`cpu`,kernelFunc:LW}}));function BW(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r;Y(i,`resizeNearestNeighbor`);let c=O(i.shape),[l,u]=s,[d,f,p,m]=i.shape,h=n.data.get(i.dataId).values,g=new Float32Array(d*l*u*m),_=[a&&l>1?f-1:f,a&&u>1?p-1:p],v=[a&&l>1?l-1:l,a&&u>1?u-1:u],y=_[0]/v[0],b=_[1]/v[1],x=0;for(let e=0;e<d;e++){let t=e*c[0];for(let e=0;e<l;e++){let n=o?y*(e+.5):y*e,r=Math.min(f-1,a?Math.round(n):Math.floor(n));o&&(r=Math.max(0,r));let i=t+r*c[1];for(let e=0;e<u;e++){let t=o?b*(e+.5):b*e,n=Math.min(p-1,a?Math.round(t):Math.floor(t));o&&(n=Math.max(0,n));let r=i+n*c[2];for(let e=0;e<m;e++){let t=h[r+e];g[x++]=t}}}}return n.makeTensorInfo([d,l,u,m],i.dtype,g)}var VW,HW=o((()=>{q(),X(),VW={kernelName:nr,backendName:`cpu`,kernelFunc:BW}}));function UW(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r;Y([a,i],`resizeNearestNeighborGrad`);let s=O(i.shape),c=O(a.shape),[l,u,d,f]=i.shape,[,p,m]=a.shape,h=new Float32Array(l*u*d*f),g=n.data.get(a.dataId).values,_=[o&&p>1?u-1:u,o&&m>1?d-1:d],v=[o&&p>1?p-1:p,o&&m>1?m-1:m],y=_[0]/v[0],b=_[1]/v[1],x=1/y,S=1/b,C=Math.ceil(x)*2+2,w=Math.ceil(S)*2+2;for(let e=0;e<l;e++){let t=e*s[0];for(let e=0;e<u;e++){let n=t+e*s[1],r=Math.floor(e*x),i=Math.floor(r-C/2);for(let r=0;r<d;r++){let a=n+r*s[2],l=Math.floor(r*S),_=Math.floor(l-w/2);for(let n=0;n<f;n++){let s=0;for(let a=0;a<C;a++){let l=a+i;if(l<0||l>=p)continue;let f=t+l*c[1],h=l*y,v=Math.min(u-1,o?Math.round(h):Math.floor(h));if(e===v)for(let e=0;e<w;e++){let t=e+_;if(t<0||t>=m)continue;let i=f+t*c[2],a=t*b,l=Math.min(d-1,o?Math.round(a):Math.floor(a));r===l&&(s+=g[i+n])}}h[a+n]=s}}}}return n.makeTensorInfo(i.shape,i.dtype,h)}var WW,GW=o((()=>{q(),X(),WW={kernelName:rr,backendName:`cpu`,kernelFunc:UW}}));function KW(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dims:a}=r;Y(i,`reverse`);let o=i.shape.length,s=Se(a,i.shape);if(o===0)return JF({inputs:{x:i},backend:n});let c=new Qi(i.shape,i.dtype),l=n.bufferSync(i);for(let e=0;e<c.size;e++){let t=c.indexToLoc(e),n=t.slice();s.forEach(e=>n[e]=i.shape[e]-1-n[e]),c.set(l.get(...n),...t)}return n.makeTensorInfo(c.shape,c.dtype,c.values)}var qW,JW=o((()=>{q(),X(),XF(),qW={kernelName:sr,backendName:`cpu`,kernelFunc:KW}})),YW,XW=o((()=>{q(),YW={kernelName:qr,backendName:`cpu`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{image:r}=e,{radians:i,fillValue:a,center:o}=t,s=n,c=we(r.dtype,D(r.shape)),[l,u,d,f]=r.shape,[p,m]=ny(o,u,d),h=Math.sin(i),g=Math.cos(i),_=s.data.get(r.dataId).values;for(let e=0;e<l;e++){let t=e*d*u*f;for(let e=0;e<u;e++){let n=d*f*e;for(let r=0;r<d;r++){let i=r*f;for(let o=0;o<f;o++){let s=[l,e,r,o],v=s[2],y=s[1],b=(v-p)*g-(y-m)*h,x=(v-p)*h+(y-m)*g;b=Math.round(b+p),x=Math.round(x+m);let S=a;if(typeof a!=`number`&&(S=o===3?255:a[o]),b>=0&&b<d&&x>=0&&x<u){let e=d*f*x,n=b*f;S=_[t+e+n+o]}let C=t+n+i+o;c[C]=S}}}}return{dataId:s.write(c,r.shape,r.dtype),shape:r.shape,dtype:r.dtype}}}})),ZW,QW,$W=o((()=>{q(),CI(),ZW=xI(cr,e=>{let t=Math.floor(e);return e-t<.5?Math.floor(e):e-t>.5?Math.ceil(e):t%2==0?t:t+1}),QW={kernelName:cr,backendName:`cpu`,kernelFunc:ZW}}));function eG(e){let{inputs:t,backend:n,attrs:r}=e,{indices:i,updates:a}=t,{shape:o}=r,{sliceRank:s,numUpdates:c,sliceSize:l,strides:u,outputSize:d}=bh(a,i,o),f=gR(n.bufferSync(i),n.bufferSync(a),o,d,l,c,s,u,0,!0);return n.makeTensorInfo(o,f.dtype,f.values)}var tG,nG=o((()=>{q(),_R(),tG={kernelName:ur,backendName:`cpu`,kernelFunc:eG}}));function rG(e,t){let n=0,r=e.length,i=0;for(;n<r;)i=Math.floor((n+r)/2),e[i]<t?n=i+1:r=i;return r}function iG(e,t){let n=0,r=e.length,i=0;for(;n<r;)i=Math.floor((n+r)/2),e[i]<=t?n=i+1:r=i;return r}function aG(e,t,n,r,i,a){let o=Te(`int32`,n*i);for(let s=0;s<n;++s){let n=e.slice(s*r,(s+1)*r),c=s*i;for(let e=0;e<i;++e)o[c+e]=a===`left`?rG(n,t[e+c]):iG(n,t[e+c])}return o}var oG=o((()=>{q()}));function sG(e){let{inputs:t,backend:n,attrs:r}=e,{sortedSequence:i,values:a}=t,{side:o}=r,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,l=aG(s,c,i.shape[0],i.shape[1],a.shape[1],o);return n.makeTensorInfo(a.shape,`int32`,l)}var cG,lG=o((()=>{q(),oG(),cG={kernelName:fr,backendName:`cpu`,kernelFunc:sG}}));function uG(e){let{inputs:t,backend:n}=e,{condition:r,t:i,e:a}=t;Y([r,i,a],`select`);let o=r.shape.length,s=n.data.get(r.dataId).values,c=n.data.get(i.dataId).values,l=n.data.get(a.dataId).values,u=ra(i.dtype,a.dtype),d=ze(D(i.shape),u),f=0,p=o===0||o>1||i.shape.length===1?1:D(i.shape.slice(1));for(let e=0;e<s.length;e++)for(let t=0;t<p;t++)s[e]===1?d[f++]=c[e]:d[f++]=l[e];return n.makeTensorInfo(i.shape,u,d)}var dG,fG=o((()=>{q(),X(),dG={kernelName:pr,backendName:`cpu`,kernelFunc:uG}})),pG,mG,hG,gG,_G=o((()=>{q(),CI(),pG=cy,mG=ly,hG=xI(mr,e=>e>=0?mG*e:pG*(Math.exp(e)-1)),gG={kernelName:mr,backendName:`cpu`,kernelFunc:hG}})),vG,yG,bG=o((()=>{q(),CI(),vG=xI(_r,e=>e<0?-1:+(e>0)),yG={kernelName:_r,backendName:`cpu`,kernelFunc:vG}})),xG,SG,CG=o((()=>{q(),CI(),xG=xI(`Sin`,e=>Math.sin(e)),SG={kernelName:`Sin`,backendName:`cpu`,kernelFunc:xG}})),wG,TG,EG=o((()=>{q(),CI(),wG=xI(gr,e=>Math.sinh(e)),TG={kernelName:gr,backendName:`cpu`,kernelFunc:wG}})),DG,OG,kG,AG=o((()=>{q(),CI(),DG=Math.log(1.1920928955078125e-7)+2,OG=xI(yr,e=>{let t=e>-DG,n=e<DG,r=Math.exp(e),i;return i=n?r:t?e:Math.log(1+r),i}),kG={kernelName:yr,backendName:`cpu`,kernelFunc:OG}}));function jG(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,paddings:o}=r;Y([i],`spaceToBatchND`);let s=D(a),c=[[0,0]];c.push(...o);for(let e=1+a.length;e<i.shape.length;++e)c.push([0,0]);let l=pW.kernelFunc({inputs:{x:i},backend:n,attrs:{paddings:c,constantValue:0}}),u=ry(l.shape,a,s,!1),d=iy(u.length,a.length,!1),f=ay(l.shape,a,s,!1),p=jz({inputs:{x:l},backend:n,attrs:{shape:u}}),m=KL({inputs:{x:p},backend:n,attrs:{perm:d}}),h=jz({inputs:{x:m},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),h}var MG,NG=o((()=>{q(),X(),mW(),Nz(),JL(),MG={kernelName:xr,backendName:`cpu`,kernelFunc:jG}}));function PG(e){let{inputs:t,backend:n}=e,{indices:r,values:i,denseShape:a,defaultValue:o}=t;if(a.shape.length!==1)throw Error(`Dense shape must be a vector, saw:
        ${a.shape}`);if(r.shape.length!==2)throw Error(`Indices must be a matrix, saw:
        ${r.shape}`);if(i.shape.length!==1)throw Error(`Values must be a vector, saw:
        ${i.shape}`);if(o.shape.length!==0)throw Error(`Default value must be a scalar, saw:
        ${o.shape}`);let s=n.data.get(r.dataId).values,c=n.data.get(i.dataId).values,l=n.data.get(a.dataId).values,u=n.data.get(o.dataId).values[0],[d,f,p,m,h]=ER(s,r.shape,r.dtype,c,i.dtype,l,u);return[n.makeTensorInfo(f,r.dtype,d),n.makeTensorInfo([f[0]],i.dtype,p),n.makeTensorInfo([m.length],`bool`,new Uint8Array(m.map(e=>Number(e)))),n.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}var FG,IG=o((()=>{q(),DR(),FG={kernelName:wr,backendName:`cpu`,kernelFunc:PG}}));function LG(e){let{inputs:t,backend:n}=e,{inputIndices:r,inputShape:i,newShape:a}=t;if(r.shape.length!==2)throw Error(`Input indices should be a matrix but received shape
        ${r.shape}`);if(i.shape.length!==1)throw Error(`Input shape should be a vector but received shape
        ${i.shape}`);if(a.shape.length!==1)throw Error(`Target shape should be a vector but received shape ${a.shape}`);let o=Array.from(n.data.get(i.dataId).values),s=n.data.get(r.dataId).values,c=Array.from(n.data.get(a.dataId).values),[l,u,d]=OR(s,r.shape,r.dtype,o,c);return[n.makeTensorInfo(u,r.dtype,l),n.makeTensorInfo([d.length],a.dtype,new Int32Array(d))]}var RG,zG=o((()=>{q(),kR(),RG={kernelName:Tr,backendName:`cpu`,kernelFunc:LG}}));function BG(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
          ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
          ${a.shape}`);if(i.shape[0]!==a.shape[0])throw Error(`segmentIds and indices should have same size.`);let o=n.data.get(r.dataId).values,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,[l,u]=AR(o,r.shape,r.dtype,s,c,!0);return n.makeTensorInfo(u,r.dtype,l)}var VG,HG=o((()=>{q(),jR(),VG={kernelName:Er,backendName:`cpu`,kernelFunc:BG}}));function UG(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
         ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
         ${a.shape}`);if(i.shape[0]!==a.shape[0])throw Error(`segmentIds and indices should have same size.`);let o=n.data.get(r.dataId).values,s=n.data.get(i.dataId).values,c=n.data.get(a.dataId).values,[l,u]=AR(o,r.shape,r.dtype,s,c);return n.makeTensorInfo(u,r.dtype,l)}var WG,GG=o((()=>{q(),jR(),WG={kernelName:Dr,backendName:`cpu`,kernelFunc:UG}}));function KG(e){let{inputs:t,backend:n,attrs:r}=e,{sparseIndices:i,sparseValues:a,defaultValue:o}=t,{outputShape:s}=r,{sliceRank:c,numUpdates:l,sliceSize:u,strides:d,outputSize:f}=bh(a,i,s),p=n.bufferSync(i),m;switch(a.dtype){case`bool`:m=gR(p,n.bufferSync(a),s,f,u,l,c,d,!!n.data.get(o.dataId).values[0],!1);break;case`float32`:{let e=n.bufferSync(a),t=n.data.get(o.dataId).values[0];m=gR(p,e,s,f,u,l,c,d,t,!1);break}case`int32`:{let e=n.bufferSync(a),t=n.data.get(o.dataId).values[0];m=gR(p,e,s,f,u,l,c,d,t,!1);break}case`string`:m=gR(p,n.bufferSync(a),s,f,u,l,c,d,Fi(n.data.get(o.dataId).values[0]),!1);break;default:throw Error(`Unsupported type ${a.dtype}`)}return n.makeTensorInfo(s,m.dtype,m.values)}var qG,JG=o((()=>{q(),_R(),qG={kernelName:Or,backendName:`cpu`,kernelFunc:KG}}));function YG(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{numOrSizeSplits:a,axis:o}=r,s=Se(o,i.shape)[0],c=Ly(i,a,s),l=Array(i.shape.length).fill(0),u=i.shape.slice();return c.map(e=>{let t=[...u];t[s]=e;let r=CR({inputs:{x:i},backend:n,attrs:{begin:l,size:t}});return l[s]+=e,r})}var XG,ZG=o((()=>{q(),TR(),XG={kernelName:Sr,backendName:`cpu`,kernelFunc:YG}})),QG,$G=o((()=>{q(),X(),QG={kernelName:Ar,backendName:`cpu`,kernelFunc:({inputs:e,backend:t})=>{let{x:n}=e,r=t;Y(n,`square`);let i=r.data.get(n.dataId).values,a=new Float32Array(i.length);for(let e=0;e<i.length;++e){let t=i[e];a[e]=t*t}return{dataId:r.write(a,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}}})),eK,tK,nK=o((()=>{q(),CI(),eK=xI(Gr,(e,t)=>isNaN(e)?NaN:e>0?1:t.alpha),tK={kernelName:Gr,backendName:`cpu`,kernelFunc:eK}}));function rK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,end:o,strides:s,beginMask:c,endMask:l,ellipsisMask:u,newAxisMask:d,shrinkAxisMask:f}=r;Y(i,`stridedSlice`);let{finalShapeSparse:p,finalShape:m,isIdentity:h,sliceDim0:g,isSimpleSlice:_,begin:v,end:y,strides:b}=Mv(i.shape,a,o,s,c,l,u,d,f),x;if(h)x=jz({inputs:{x:i},backend:n,attrs:{shape:m}});else if(g||_){E(i.shape.length>=1,()=>`Input must have rank at least 1, got: ${i.shape.length}`);let e=yv(v,y,b),t=CR({inputs:{x:i},backend:n,attrs:{begin:v,size:e}});x=jz({inputs:{x:t},backend:n,attrs:{shape:m}}),n.disposeIntermediateTensorInfo(t)}else{let e=WR(p,n.bufferSync(i),b,v);x=n.makeTensorInfo(m,e.dtype,e.values)}return x}var iK,aK=o((()=>{q(),X(),Nz(),TR(),GR(),iK={kernelName:Mr,backendName:`cpu`,kernelFunc:rK}}));function oK(e){let{inputs:t,backend:n,attrs:r}=e,{separator:i,nGramWidths:a,leftPad:o,rightPad:s,padWidth:c,preserveShortSequences:l}=r,{data:u,dataSplits:d}=t,f=n.data.get(u.dataId).values,p=n.data.get(d.dataId).values,[m,h]=KR(f,p,i,a,o,s,c,l);return[n.makeTensorInfo([m.length],`string`,m),n.makeTensorInfo(d.shape,`int32`,h)]}var sK,cK=o((()=>{q(),JR(),sK={kernelName:Nr,backendName:`cpu`,kernelFunc:oK}}));function lK(e){let{inputs:t,backend:n,attrs:r}=e,{skipEmpty:i}=r,{input:a,delimiter:o}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(a.shape.length!==1)throw Error(`Input must be a vector, got shape: ${a.shape}`);if(o.shape.length!==0)throw Error(`Delimiter must be a scalar, got shape: ${o.shape}`);let s=n.data.get(a.dataId).values,c=n.data.get(o.dataId).values[0],[l,u,d]=YR(s,c,i),f=u.length;return[n.makeTensorInfo([f,2],`int32`,l),n.makeTensorInfo([f],`string`,u),n.makeTensorInfo([2],`int32`,new Int32Array(d))]}var uK,dK=o((()=>{q(),XR(),uK={kernelName:Pr,backendName:`cpu`,kernelFunc:lK}}));function fK(e){let{inputs:t,backend:n,attrs:r}=e,{numBuckets:i}=r,{input:a}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(i<=0)throw Error(`Number of buckets must be at least 1`);let o=n.data.get(a.dataId).values,s=ZR(o,i);return n.makeTensorInfo(a.shape,`int32`,s)}var pK,mK=o((()=>{q(),QR(),pK={kernelName:Fr,backendName:`cpu`,kernelFunc:fK}})),hK,gK,_K=o((()=>{q(),CI(),hK=xI(`Tan`,e=>Math.tan(e)),gK={kernelName:`Tan`,backendName:`cpu`,kernelFunc:hK}})),vK,yK,bK=o((()=>{q(),CI(),vK=xI(Ir,e=>Math.tanh(e)),yK={kernelName:Ir,backendName:`cpu`,kernelFunc:vK}}));function xK(e){let{inputs:t,backend:n}=e,{tensor:r,indices:i,updates:a}=t,{sliceRank:o,numUpdates:s,sliceSize:c,strides:l,outputSize:u}=bh(a,i,r.shape),d=n.bufferSync(i),f=n.bufferSync(a),p=n.bufferSync(r),m=gR(d,f,r.shape,u,c,s,o,l,p,!1);return n.makeTensorInfo(r.shape,m.dtype,m.values)}var SK,CK=o((()=>{q(),_R(),SK={kernelName:dr,backendName:`cpu`,kernelFunc:xK}}));function wK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reps:a}=r;Y(i,`tile`);let o=iz(n.bufferSync(i),a);return n.makeTensorInfo(o.shape,o.dtype,o.values)}var TK,EK=o((()=>{q(),X(),az(),TK={kernelName:Lr,backendName:`cpu`,kernelFunc:wK}}));function DK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{k:a,sorted:o}=r;Y(i,`topk`);let s=n.data.get(i.dataId).values,[c,l]=sz(s,i.shape,i.dtype,a,o);return[n.makeTensorInfo(c.shape,c.dtype,c.values),n.makeTensorInfo(l.shape,l.dtype,l.values)]}var OK,kK=o((()=>{q(),X(),lz(),OK={kernelName:Rr,backendName:`cpu`,kernelFunc:DK}}));function AK(e){let{inputs:t,attrs:n,backend:r}=e,{image:i,transforms:a}=t,{interpolation:o,fillMode:s,fillValue:c,outputShape:l}=n,[u,d,f,p]=i.shape,[m,h]=l??[d,f],g=[u,m,h,p],_=O(i.shape),v=_[0],y=_[1],b=_[2],x=O(g),S=x[0],C=x[1],w=x[2],ee=we(i.dtype,D(g));ee.fill(c);let te=r.data.get(i.dataId).values,T=r.data.get(a.dataId).values;for(let e=0;e<u;++e){let t=a.shape[0]===1?T:T.subarray(e*8,e*8+8);for(let n=0;n<m;++n)for(let r=0;r<h;++r)for(let i=0;i<p;++i){let a,l=t[6]*r+t[7]*n+1;if(l===0)continue;let u=(t[0]*r+t[1]*n+t[2])/l,p=(t[3]*r+t[4]*n+t[5])/l,m=jK(u,f,s),h=jK(p,d,s);switch(o){case`nearest`:a=LK(te,d,f,v,y,b,e,h,m,i,c);break;case`bilinear`:a=RK(te,d,f,v,y,b,e,h,m,i,c);break;default:throw Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${o}`)}let g=e*S+n*C+r*w+i;ee[g]=a}return r.makeTensorInfo(g,i.dtype,ee)}return{dataId:r.write(ee,g,i.dtype),shape:i.shape,dtype:i.dtype}}function jK(e,t,n){switch(n){case`reflect`:return MK(e,t);case`wrap`:return NK(e,t);case`nearest`:return FK(e,t);default:return PK(e,t)}}function MK(e,t){let n=e;if(n<0)if(t<=1)n=0;else{let e=2*t;n<e&&(n=e*Math.trunc(-n/e)+n),n=n<-t?n+e:-n-1}else if(n>t-1)if(t<=1)n=0;else{let e=2*t;n-=e*Math.trunc(n/e),n>=t&&(n=e-n-1)}return ue(0,n,t-1)}function NK(e,t){let n=e;if(n<0)if(t<=1)n=0;else{let e=t-1;n+=t*(Math.trunc(-n/e)+1)}else if(n>t-1)if(t<=1)n=0;else{let e=t-1;n-=t*Math.trunc(n/e)}return ue(0,n,t-1)}function PK(e,t){return e}function FK(e,t){return ue(0,e,t-1)}function IK(e,t,n,r,i,a,o,s,c,l,u){let d=o*r+s*i+c*a+l;return 0<=s&&s<t&&0<=c&&c<n?e[d]:u}function LK(e,t,n,r,i,a,o,s,c,l,u){return IK(e,t,n,r,i,a,o,Math.round(s),Math.round(c),l,u)}function RK(e,t,n,r,i,a,o,s,c,l,u){let d=Math.floor(s),f=Math.floor(c),p=d+1,m=f+1,h=(m-c)*IK(e,t,n,r,i,a,o,d,f,l,u)+(c-f)*IK(e,t,n,r,i,a,o,d,m,l,u),g=(m-c)*IK(e,t,n,r,i,a,o,p,f,l,u)+(c-f)*IK(e,t,n,r,i,a,o,p,m,l,u);return(p-s)*h+(s-d)*g}var zK,BK=o((()=>{q(),zK={kernelName:zr,backendName:`cpu`,kernelFunc:AK}}));function VK(e){let{inputs:t,attrs:n,backend:r}=e,{axis:i}=n,{x:a}=t;Y(a,`unique`);let o=r.data.get(a.dataId).values,{outputValues:s,outputShape:c,indices:l}=uz(o,i,a.shape,a.dtype);return[r.makeTensorInfo(c,a.dtype,s),r.makeTensorInfo([l.length],`int32`,l)]}var HK,UK=o((()=>{q(),X(),dz(),HK={kernelName:Vr,backendName:`cpu`,kernelFunc:VK}}));function WK(e){let{inputs:t,backend:n,attrs:r}=e,{value:i}=t,{axis:a}=r;a<0&&(a+=i.shape.length);let o=i.shape.length,s=i.shape[a],c=Array(o-1),l=0;for(let e=0;e<o;e++)e!==a&&(c[l++]=i.shape[e]);let u=Array(o).fill(0),d=i.shape.slice();d[a]=1;let f=Array(s);for(let e=0;e<f.length;e++){u[a]=e;let t=CR({inputs:{x:i},backend:n,attrs:{begin:u,size:d}});f[e]=jz({inputs:{x:t},backend:n,attrs:{shape:c}}),n.disposeIntermediateTensorInfo(t)}return f}var GK,KK=o((()=>{q(),Nz(),TR(),GK={kernelName:Hr,backendName:`cpu`,kernelFunc:WK}}));function qK(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,segmentIds:a}=t,{numSegments:o}=r;Y(i,`unsortedSegmentSum`);let s=i.shape.length,c=a.shape.length,l=[],u=[],d=s-c,f=a;for(let e=0;e<d;++e){let t=HV({inputs:{input:f},backend:n,attrs:{dim:e+1}});f=t,u.push(t)}for(let e=0;e<o;++e){let t=Ai(e,`int32`),r=n.makeTensorInfo([],`int32`,t),a=jI({inputs:{a:r,b:f},backend:n}),o=tI({inputs:{x:a},backend:n,attrs:{dtype:`float32`}}),s=PL({inputs:{a:o,b:i},backend:n}),c=wV({inputs:{x:s},backend:n,attrs:{axis:0,keepDims:!1}});l.push(c),u.push(r),u.push(a),u.push(o),u.push(s),u.push(c)}let p=lW({inputs:l,backend:n,attrs:{axis:0}});return u.forEach(e=>n.disposeIntermediateTensorInfo(e)),p}var JK,YK=o((()=>{q(),X(),rI(),NI(),WV(),IL(),dW(),EV(),JK={kernelName:Ur,backendName:`cpu`,kernelFunc:qK}})),XK,ZK=o((()=>{q(),Cre(),BF(),wre(),Tre(),dI(),Dre(),kre(),jre(),Nre(),Fre(),Ire(),Lre(),Rre(),zre(),Bre(),Ure(),Gre(),qre(),Yre(),Iz(),Zre(),$re(),tie(),vI(),rie(),rI(),DI(),iie(),GF(),aie(),TB(),OB(),sie(),lie(),die(),pie(),FB(),RB(),VB(),WB(),qB(),XB(),$B(),nV(),aV(),cV(),dV(),mV(),gV(),vV(),bV(),CV(),kV(),hz(),MV(),NI(),VV(),LI(),WV(),VI(),rH(),sH(),lH(),GI(),YI(),fH(),hH(),vH(),xH(),rL(),sL(),XF(),wH(),SB(),DH(),AH(),NH(),vz(),dL(),hL(),IH(),xL(),zH(),UH(),KH(),XH(),$H(),nU(),aU(),DL(),cU(),dU(),mU(),_U(),xU(),wU(),DU(),jL(),AU(),PU(),VU(),IL(),zL(),GU(),YU(),$U(),UL(),nW(),cW(),dW(),mW(),vW(),Sz(),ZL(),xW(),wW(),DW(),AW(),$F(),JV(),NW(),Tz(),Oz(),Nz(),IW(),zW(),HW(),GW(),JW(),XW(),$W(),hR(),nG(),lG(),fG(),_G(),xR(),bG(),CG(),EG(),TR(),LU(),AG(),NG(),IG(),zG(),HG(),GG(),JG(),ZG(),FR(),$G(),zR(),UR(),nK(),aK(),cK(),dK(),mK(),rz(),EV(),_K(),bK(),CK(),EK(),kK(),BK(),JL(),UK(),KK(),YK(),aW(),XK=[Lz,zF,zz,Vz,uI,Hz,Uz,Wz,Gz,Kz,Jz,Xz,Qz,tB,rB,cB,lB,uB,dB,Fz,fB,pB,mB,_I,hB,nI,EI,_B,WF,yB,wB,DB,kB,AB,jB,MB,PB,LB,BB,UB,KB,YB,QB,tV,iV,sV,uV,pV,hV,_V,yV,SV,OV,mz,jV,MI,BV,II,UV,BI,nH,oH,cH,WI,JI,dH,mH,_H,bH,nL,oL,YF,CH,xB,EH,kH,MH,_z,uL,mL,FH,bL,RH,HH,GH,YH,QH,tU,iU,EL,sU,uU,pU,gU,bU,CU,EU,AL,kU,NU,BU,FL,RL,WU,JU,QU,HL,tW,sW,uW,pW,_W,xz,XL,bW,CW,EW,kW,QF,qV,MW,wz,Dz,Mz,FW,RW,VW,WW,qW,YW,QW,mR,tG,cG,dG,gG,bR,yG,SG,TG,wR,IU,kG,MG,FG,RG,VG,WG,qG,XG,PR,QG,RR,HR,tK,iK,sK,uK,pK,nz,TV,gK,yK,SK,TK,OK,zK,qL,HK,GK,JK,iW];for(let e of XK)ri(e)})),QK=o((()=>{xre(),ZK()}));function $K(e,t){rq[e]=t}function eq(e,t){if(!(e in rq)||t!=null){let n=nq(e,t);if(n!==null)rq[e]=n;else return console.log(`Could not get context for WebGL version`,e),null}let n=rq[e];return n==null||n.isContextLost()?(delete rq[e],eq(e)):(n.disable(n.DEPTH_TEST),n.disable(n.STENCIL_TEST),n.disable(n.BLEND),n.disable(n.DITHER),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SAMPLE_COVERAGE),n.enable(n.SCISSOR_TEST),n.enable(n.CULL_FACE),n.cullFace(n.BACK),rq[e])}function tq(e){if(!k().getBool(`IS_SAFARI`)&&typeof OffscreenCanvas<`u`&&e===2)return new OffscreenCanvas(300,150);if(typeof document<`u`)return document.createElement(`canvas`);throw Error(`Cannot create a canvas in this context`)}function nq(e,t){if(e!==1&&e!==2)throw Error(`Cannot get WebGL rendering context, WebGL is disabled.`);let n=t??tq(e);return n.addEventListener(`webglcontextlost`,t=>{t.preventDefault(),delete rq[e]},!1),k().getBool(`SOFTWARE_WEBGL_ENABLED`)&&(iq.failIfMajorPerformanceCaveat=!1),e===1?n.getContext(`webgl`,iq)||n.getContext(`experimental-webgl`,iq):n.getContext(`webgl2`,iq)}var rq,iq,aq=o((()=>{q(),rq={},iq={alpha:!1,antialias:!1,premultipliedAlpha:!1,preserveDrawingBuffer:!1,depth:!1,stencil:!1,failIfMajorPerformanceCaveat:!0}}));function oq(e,t){return[t,e]}function sq(e,t){return e*t}function cq(e){let t=D(e);return ve(Math.ceil(t/4))}function lq(e,t){return[Math.max(1,Math.ceil(t/2)),Math.max(1,Math.ceil(e/2))]}function uq(e,t){let[n,r]=lq(e,t);return n*r*4}function dq(e,t){let n=e,r,i,a,o,s,c,l,u,d,f;return k().getNumber(`WEBGL_VERSION`)===2?(r=n.R32F,i=n.R16F,a=n.RGBA16F,o=n.RGBA32F,s=n.RED,l=4,u=1,d=n.HALF_FLOAT,f=n.FLOAT,c=n.RGBA8):(r=e.RGBA,i=e.RGBA,a=e.RGBA,o=n.RGBA,s=e.RGBA,l=4,u=4,d=t==null?null:t.HALF_FLOAT_OES,f=e.FLOAT,c=e.RGBA),{internalFormatFloat:r,internalFormatHalfFloat:i,internalFormatPackedHalfFloat:a,internalFormatPackedFloat:o,textureFormatFloat:s,downloadTextureFormat:c,downloadUnpackNumChannels:l,defaultNumChannels:u,textureTypeHalfFloat:d,textureTypeFloat:f}}var fq,pq,mq,hq=o((()=>{q(),(function(e){e[e.DENSE=0]=`DENSE`,e[e.SHARED_BATCH=1]=`SHARED_BATCH`})(fq||={}),(function(e){e[e.RENDER=0]=`RENDER`,e[e.UPLOAD=1]=`UPLOAD`,e[e.PIXELS=2]=`PIXELS`,e[e.DOWNLOAD=3]=`DOWNLOAD`})(pq||={}),(function(e){e[e.UNPACKED_FLOAT16=0]=`UNPACKED_FLOAT16`,e[e.UNPACKED_FLOAT32=1]=`UNPACKED_FLOAT32`,e[e.PACKED_4X1_UNSIGNED_BYTE=2]=`PACKED_4X1_UNSIGNED_BYTE`,e[e.PACKED_2X2_FLOAT32=3]=`PACKED_2X2_FLOAT32`,e[e.PACKED_2X2_FLOAT16=4]=`PACKED_2X2_FLOAT16`})(mq||={})}));function Z(e,t){let n=t();return k().getBool(`DEBUG`)&&gq(e),n}function gq(e){let t=e.getError();if(t!==e.NO_ERROR)throw Error(`WebGL Error: `+vq(e,t))}function _q(e){return!!(k().getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)||e===0||aJ<Math.abs(e)&&Math.abs(e)<oJ)}function vq(e,t){switch(t){case e.NO_ERROR:return`NO_ERROR`;case e.INVALID_ENUM:return`INVALID_ENUM`;case e.INVALID_VALUE:return`INVALID_VALUE`;case e.INVALID_OPERATION:return`INVALID_OPERATION`;case e.INVALID_FRAMEBUFFER_OPERATION:return`INVALID_FRAMEBUFFER_OPERATION`;case e.OUT_OF_MEMORY:return`OUT_OF_MEMORY`;case e.CONTEXT_LOST_WEBGL:return`CONTEXT_LOST_WEBGL`;default:return`Unknown error code ${t}`}}function yq(e,t){return Bq(e,()=>e.getExtension(t),`Extension "`+t+`" not supported on this browser.`)}function bq(e,t){let n=Bq(e,()=>e.createShader(e.VERTEX_SHADER),`Unable to create vertex WebGLShader.`);if(Z(e,()=>e.shaderSource(n,t)),Z(e,()=>e.compileShader(n)),e.getShaderParameter(n,e.COMPILE_STATUS)===!1)throw console.log(e.getShaderInfoLog(n)),Error(`Failed to compile vertex shader.`);return n}function xq(e,t){let n=Bq(e,()=>e.createShader(e.FRAGMENT_SHADER),`Unable to create fragment WebGLShader.`);if(Z(e,()=>e.shaderSource(n,t)),Z(e,()=>e.compileShader(n)),k().get(`ENGINE_COMPILE_ONLY`))return n;if(e.getShaderParameter(n,e.COMPILE_STATUS)===!1)throw Sq(t,e.getShaderInfoLog(n)),Error(`Failed to compile fragment shader.`);return n}function Sq(e,t){let n=sJ.exec(t);if(n==null){console.log(`Couldn't parse line number in error: ${t}`),console.log(e);return}let r=+n[1],i=e.split(`
`),a=i.length.toString().length+2,o=i.map((e,t)=>ye((t+1).toString(),a)+e),s=0;for(let e=0;e<o.length;e++)s=Math.max(o[e].length,s);let c=o.slice(0,r-1),l=o.slice(r-1,r),u=o.slice(r);console.log(c.join(`
`)),console.log(t.split(`
`)[0]),console.log(`%c ${ye(l[0],s)}`,`border:1px solid red; background-color:#e3d2d2; color:#a61717`),console.log(u.join(`
`))}function Cq(e){return Bq(e,()=>e.createProgram(),`Unable to create WebGLProgram.`)}function wq(e,t){if(Z(e,()=>e.linkProgram(t)),!k().get(`ENGINE_COMPILE_ONLY`)&&e.getProgramParameter(t,e.LINK_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),Error(`Failed to link vertex and fragment shaders.`)}function Tq(e,t){if(Z(e,()=>e.validateProgram(t)),e.getProgramParameter(t,e.VALIDATE_STATUS)===!1)throw console.log(e.getProgramInfoLog(t)),Error(`Shader program validation failed.`)}function Eq(e,t){let n=Bq(e,()=>e.createBuffer(),`Unable to create WebGLBuffer`);return Z(e,()=>e.bindBuffer(e.ARRAY_BUFFER,n)),Z(e,()=>e.bufferData(e.ARRAY_BUFFER,t,e.STATIC_DRAW)),n}function Dq(e,t){let n=Bq(e,()=>e.createBuffer(),`Unable to create WebGLBuffer`);return Z(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,n)),Z(e,()=>e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW)),n}function Oq(e){return Bq(e,()=>e.createTexture(),`Unable to create WebGLTexture.`)}function kq(e,t){let n=k().getNumber(`WEBGL_MAX_TEXTURE_SIZE`);if(e<=0||t<=0){let n=`[${e}x${t}]`;throw Error(`Requested texture size `+n+` is invalid.`)}if(e>n||t>n){let r=`[${e}x${t}]`,i=`[${n}x${n}]`;throw Error(`Requested texture size `+r+` greater than WebGL maximum on this browser / GPU `+i+`.`)}}function Aq(e){return Bq(e,()=>e.createFramebuffer(),`Unable to create WebGLFramebuffer.`)}function jq(e,t,n,r,i,a,o){let s=e.getAttribLocation(t,n);return s===-1?!1:(Z(e,()=>e.bindBuffer(e.ARRAY_BUFFER,r)),Z(e,()=>e.vertexAttribPointer(s,i,e.FLOAT,!1,a,o)),Z(e,()=>e.enableVertexAttribArray(s)),!0)}function Mq(e,t,n){Vq(e,n),Z(e,()=>e.activeTexture(e.TEXTURE0+n)),Z(e,()=>e.bindTexture(e.TEXTURE_2D,t))}function Nq(e,t,n){return Bq(e,()=>e.getUniformLocation(t,n),`uniform "`+n+`" not present in program.`)}function Pq(e,t,n){return e.getUniformLocation(t,n)}function Fq(e,t,n,r){Z(e,()=>Mq(e,t,r)),Z(e,()=>e.uniform1i(n,r))}function Iq(e,t,n){Z(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,n)),Z(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0))}function Lq(e,t){Z(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,t)),Z(e,()=>e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0))}function Rq(e){let t=e.checkFramebufferStatus(e.FRAMEBUFFER);if(t!==e.FRAMEBUFFER_COMPLETE)throw Error(`Error binding framebuffer: `+zq(e,t))}function zq(e,t){switch(t){case e.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return`FRAMEBUFFER_INCOMPLETE_ATTACHMENT`;case e.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return`FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT`;case e.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return`FRAMEBUFFER_INCOMPLETE_DIMENSIONS`;case e.FRAMEBUFFER_UNSUPPORTED:return`FRAMEBUFFER_UNSUPPORTED`;default:return`unknown error ${t}`}}function Bq(e,t,n){let r=Z(e,()=>t());if(r==null)throw Error(n);return r}function Vq(e,t){let n=e.MAX_COMBINED_TEXTURE_IMAGE_UNITS-1,r=t+e.TEXTURE0;if(r<e.TEXTURE0||r>n){let e=`[gl.TEXTURE0, gl.TEXTURE${n}]`;throw Error(`textureUnit must be in ${e}.`)}}function Hq(e,t=2){return D(e.slice(0,e.length-t))}function Uq(e){if(e.length===0)throw Error(`Cannot get rows and columns of an empty shape array.`);return[e.length>1?e[e.length-2]:1,e[e.length-1]]}function Wq(e){let t=[1,1,1];return e.length===0||e.length===1&&e[0]===1||(t=[Hq(e),...Uq(e)]),t}function Gq(e,t=!1){let n=k().getNumber(`WEBGL_MAX_TEXTURE_SIZE`),r=k().getNumber(`WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE`);r===1/0&&k().getBool(`WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE`)&&(r=n/2),t&&(n*=2,r*=2,e=e.map((t,n)=>n>=e.length-2?de(e[n]):e[n]),e.length===1&&(e=[2,e[0]])),e.length!==2&&(e=Ce(e).newShape);let i=D(e),a=null;e.length<=1&&i<=n?a=[1,i]:e.length===2&&e[0]<=n&&e[1]<=n?a=e:e.length===3&&e[0]*e[1]<=n&&e[2]<=n?a=[e[0]*e[1],e[2]]:e.length===3&&e[0]<=n&&e[1]*e[2]<=n?a=[e[0],e[1]*e[2]]:e.length===4&&e[0]*e[1]*e[2]<=n&&e[3]<=n?a=[e[0]*e[1]*e[2],e[3]]:e.length===4&&e[0]<=n&&e[1]*e[2]*e[3]<=n&&(a=[e[0],e[1]*e[2]*e[3]]);let o=a!=null&&Math.max(...a)>r&&Math.min(...a)<=(t?2:1)&&Math.min(...a)>0;if(a==null||o)if(t){let t=Hq(e),n=2,r=2;e.length&&([n,r]=Uq(e)),i=n/2*t*(r/2),a=ve(i).map(e=>e*2)}else a=ve(i);return a}function Kq(e){return e%2==0}function qq(e,t){if(e=e.slice(-2),t=t.slice(-2),ge(e,t)||!e.length||!t.length||e[0]===0||e[1]===0||t[0]===0||t[1]===0)return!0;if(e.length!==t.length){let n=e[e.length-1],r=t[t.length-1];if(n===r||Kq(n)&&Kq(r)&&(e[0]===1||t[0]===1))return!0}return e[1]===t[1]&&Kq(e[0])&&Kq(t[0])}function Jq(e){if(cJ==null){let t=eq(e);cJ=t.getParameter(t.MAX_TEXTURE_SIZE)}return cJ}function Yq(e){if(lJ==null){let t=eq(e);lJ=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS)}return Math.min(16,lJ)}function Xq(e){if(e===0)return 0;let t,n=eq(e);return t=Zq(n,`EXT_disjoint_timer_query_webgl2`)&&e===2?2:+!!Zq(n,`EXT_disjoint_timer_query`),t}function Zq(e,t){return e.getExtension(t)!=null}function Qq(e){try{if(eq(e)!=null)return!0}catch(e){return console.log(`Error when getting WebGL context: `,e),!1}return!1}function $q(e){if(e===0)return!1;let t=eq(e);if(e===1){if(!Zq(t,`OES_texture_float`))return!1}else if(!Zq(t,`EXT_color_buffer_float`))return!1;return tJ(t)}function eJ(e){if(e===0)return!1;let t=eq(e);if(e===1){if(!Zq(t,`OES_texture_float`)||!Zq(t,`WEBGL_color_buffer_float`))return!1}else{if(Zq(t,`EXT_color_buffer_float`))return tJ(t);let e=`EXT_color_buffer_half_float`;return Zq(t,e)?nJ(t,t.getExtension(e)):!1}return tJ(t)}function tJ(e){let t=dq(e),n=e.createTexture();e.bindTexture(e.TEXTURE_2D,n),e.texImage2D(e.TEXTURE_2D,0,t.internalFormatFloat,1,1,0,t.textureFormatFloat,t.textureTypeFloat,null);let r=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,r),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0);let i=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(n),e.deleteFramebuffer(r),i}function nJ(e,t){let n=dq(e,t),r=e.createTexture();e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,n.internalFormatHalfFloat,1,1,0,n.textureFormatFloat,n.textureTypeHalfFloat,null);let i=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,i),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,r,0);let a=e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE;return e.bindTexture(e.TEXTURE_2D,null),e.bindFramebuffer(e.FRAMEBUFFER,null),e.deleteTexture(r),e.deleteFramebuffer(i),a}function rJ(e){return e===2&&eq(e).fenceSync!=null}function iJ(e,t){Array.isArray(e)||(e=[e]),e.forEach(e=>{e!=null&&E(e.dtype!==`complex64`,()=>`${t} does not support complex64 tensors in the WebGL backend.`)})}var aJ,oJ,sJ,cJ,lJ,uJ=o((()=>{q(),aq(),hq(),aJ=5.96e-8,oJ=65504,sJ=/ERROR: [0-9]+:([0-9]+):/g})),Q,dJ=o((()=>{q(),uJ(),Q=k(),Q.registerFlag(`HAS_WEBGL`,()=>Q.getNumber(`WEBGL_VERSION`)>0),Q.registerFlag(`WEBGL_VERSION`,()=>Qq(2)?2:+!!Qq(1)),Q.registerFlag(`WEBGL_CHECK_NUMERICAL_PROBLEMS`,()=>!1),Q.registerFlag(`WEBGL_BUFFER_SUPPORTED`,()=>Q.get(`WEBGL_VERSION`)===2),Q.registerFlag(`WEBGL_CPU_FORWARD`,()=>!0),Q.registerFlag(`WEBGL_FORCE_F16_TEXTURES`,()=>!1),Q.registerFlag(`WEBGL_PACK`,()=>Q.getBool(`HAS_WEBGL`)),Q.registerFlag(`WEBGL_PACK_NORMALIZATION`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_CLIP`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_DEPTHWISECONV`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_BINARY_OPERATIONS`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_UNARY_OPERATIONS`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_ARRAY_OPERATIONS`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_IMAGE_OPERATIONS`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_REDUCE`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_LAZILY_UNPACK`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_CONV_IM2COL`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_PACK_CONV2DTRANSPOSE`,()=>Q.getBool(`WEBGL_PACK`)),Q.registerFlag(`WEBGL_MAX_TEXTURE_SIZE`,()=>Jq(Q.getNumber(`WEBGL_VERSION`))),Q.registerFlag(`WEBGL_MAX_TEXTURES_IN_SHADER`,()=>Yq(Q.getNumber(`WEBGL_VERSION`))),Q.registerFlag(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`,()=>{let e=Q.getNumber(`WEBGL_VERSION`);return e===0?0:Xq(e)}),Q.registerFlag(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`,()=>Q.getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)>0&&!Ea()),Q.registerFlag(`WEBGL_RENDER_FLOAT32_CAPABLE`,()=>$q(Q.getNumber(`WEBGL_VERSION`))),Q.registerFlag(`WEBGL_RENDER_FLOAT32_ENABLED`,()=>!Q.getBool(`WEBGL_FORCE_F16_TEXTURES`)&&Q.getBool(`WEBGL_RENDER_FLOAT32_CAPABLE`)),Q.registerFlag(`WEBGL_DOWNLOAD_FLOAT_ENABLED`,()=>eJ(Q.getNumber(`WEBGL_VERSION`))),Q.registerFlag(`WEBGL_FENCE_API_ENABLED`,()=>rJ(Q.getNumber(`WEBGL_VERSION`))),Q.registerFlag(`WEBGL_SIZE_UPLOAD_UNIFORM`,()=>Q.getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)?4:0),Q.registerFlag(`WEBGL_DELETE_TEXTURE_THRESHOLD`,()=>-1,e=>{if(typeof e!=`number`)throw Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be a number but got ${e}.`);if(e<0&&e!==-1)throw Error(`WEBGL_DELETE_TEXTURE_THRESHOLD must be -1 (indicating never delete) or at least 0, but got ${e}.`)}),Q.registerFlag(`WEBGL_FLUSH_THRESHOLD`,()=>Ea()?1:-1,e=>{if(typeof e!=`number`)throw Error(`WEBGL_FLUSH_THRESHOLD must be a number but got ${e}.`);if(e<0&&e!==-1)throw Error(`WEBGL_FLUSH_THRESHOLD must be -1 (indicating never manual flush) or at least 0, but got ${e}.`)}),Q.registerFlag(`CPU_HANDOFF_SIZE_THRESHOLD`,()=>128),Q.registerFlag(`WEBGL_USE_SHAPES_UNIFORMS`,()=>!1),Q.registerFlag(`TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD`,()=>1e5),Q.registerFlag(`TOPK_K_CPU_HANDOFF_THRESHOLD`,()=>128),Q.registerFlag(`WEBGL_EXP_CONV`,()=>!1),Q.registerFlag(`SOFTWARE_WEBGL_ENABLED`,()=>Q.getBool(`IS_TEST`)),Q.registerFlag(`WEBGL_MAX_SIZE_FOR_NARROW_TEXTURE`,()=>1/0),Q.registerFlag(`WEBGL_AUTO_SQUARIFY_NARROW_TEXTURE_SHAPE`,()=>!1),Q.registerFlag(`WEBGL2_ISNAN_CUSTOM`,()=>!1),Q.registerFlag(`ENGINE_COMPILE_ONLY`,()=>!1)}));function fJ(){let e,t,n,r,i,a,o,s,c,l;return k().getNumber(`WEBGL_VERSION`)===2?(e=`#version 300 es`,t=`in`,n=`out`,r=`in`,i=`texture`,a=`outputColor`,o=`out vec4 outputColor;`,s=k().getBool(`WEBGL2_ISNAN_CUSTOM`)?`
      bool isnan_custom(float val) {
        uint floatToUint = floatBitsToUint(val);
        return (floatToUint & 0x7fffffffu) > 0x7f800000u;
      }

      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan_custom(val.x),
          isnan_custom(val.y), isnan_custom(val.z), isnan_custom(val.w));
      }

      #define isnan(value) isnan_custom(value)
    `:``,c=``,l=`
      #define round(value) newRound(value)
      int newRound(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 newRound(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `):(e=``,t=`attribute`,n=`varying`,r=`varying`,i=`texture2D`,a=`gl_FragColor`,o=``,s=`
      #define isnan(value) isnan_custom(value)
      bool isnan_custom(float val) {
        return (val > 0. || val < 1. || val == 0.) ? false : true;
      }
      bvec4 isnan_custom(vec4 val) {
        return bvec4(isnan(val.x), isnan(val.y), isnan(val.z), isnan(val.w));
      }
    `,c=`
      uniform float INFINITY;

      bool isinf(float val) {
        return abs(val) == INFINITY;
      }
      bvec4 isinf(vec4 val) {
        return equal(abs(val), vec4(INFINITY));
      }
    `,l=`
      int round(float value) {
        return int(floor(value + 0.5));
      }

      ivec4 round(vec4 value) {
        return ivec4(floor(value + vec4(0.5)));
      }
    `),{version:e,attribute:t,varyingVs:n,varyingFs:r,texture2D:i,output:a,defineOutput:o,defineSpecialNaN:s,defineSpecialInf:c,defineRound:l}}var pJ=o((()=>{q()}));function mJ(e,t,n=`index`){let r=O(t);return r.map((t,i)=>`${`int ${e[i]} = ${n} / ${t}`}; ${i===r.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * ${t}`:`index -= ${e[i]} * ${t}`};`).join(``)}function hJ(e,t,n=`index`){let r=O(t);return r.map((t,i)=>`${`int ${e[i]} = ${n} / outShapeStrides[${i}]`}; ${i===r.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * outShapeStrides[${i}]`:`index -= ${e[i]} * outShapeStrides[${i}]`};`).join(``)}function gJ(e,t){let n=e.length,r=e.map(e=>`${t}[${e}]`),i=Array(n-1);i[n-2]=r[n-1];for(let e=n-3;e>=0;--e)i[e]=`(${i[e+1]} * ${r[e+1]})`;return i}function _J(e,t,n=`index`){let r=gJ(e.map((e,t)=>t),t);return r.map((t,i)=>`${`int ${e[i]} = ${n} / ${r[i]}`}; ${i===r.length-1?`int ${e[i+1]} = ${n} - ${e[i]} * ${r[i]}`:`index -= ${e[i]} * ${r[i]}`};`).join(``)}function vJ(e){let t=O(e).map(e=>e.toString());return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * ${t[0]} + coords.y * ${t[1]} + coords.z;
  }
`}function yJ(){return`
  int getFlatIndex(ivec3 coords) {
    return coords.x * outShapeStrides[0] + coords.y * outShapeStrides[1] + coords.z;
  }
`}var bJ,xJ=o((()=>{q(),bJ=`
  const float FLOAT_MAX = 1.70141184e38;
  const float FLOAT_MIN = 1.17549435e-38;

  lowp vec4 encode_float(highp float v) {
    if (isnan(v)) {
      return vec4(255, 255, 255, 255);
    }

    highp float av = abs(v);

    if(av < FLOAT_MIN) {
      return vec4(0.0, 0.0, 0.0, 0.0);
    } else if(v > FLOAT_MAX) {
      return vec4(0.0, 0.0, 128.0, 127.0) / 255.0;
    } else if(v < -FLOAT_MAX) {
      return vec4(0.0, 0.0,  128.0, 255.0) / 255.0;
    }

    highp vec4 c = vec4(0,0,0,0);

    highp float e = floor(log2(av));
    highp float m = exp2(fract(log2(av))) - 1.0;

    c[2] = floor(128.0 * m);
    m -= c[2] / 128.0;
    c[1] = floor(32768.0 * m);
    m -= c[1] / 32768.0;
    c[0] = floor(8388608.0 * m);

    highp float ebias = e + 127.0;
    c[3] = floor(ebias / 2.0);
    ebias -= c[3] * 2.0;
    c[2] += floor(ebias) * 128.0;

    c[3] += 128.0 * step(0.0, -v);

    return c / 255.0;
  }
`}));function SJ(e,t,n){let r=[];if(e.forEach(e=>{let t=D(e.shapeInfo.logicalShape);if(e.shapeInfo.isUniform?r.push(`uniform float ${e.name}${t>1?`[${t}]`:``};`):(r.push(`uniform sampler2D ${e.name};`),r.push(`uniform int offset${e.name};`)),n.enableShapeUniforms){let{uniformShape:t}=oY(n.packedInputs,e.shapeInfo.logicalShape,e.shapeInfo.texShape);switch(t.length){case 1:r.push(`uniform int ${e.name}Shape;`);break;case 2:r.push(`uniform ivec2 ${e.name}Shape;`);break;case 3:r.push(`uniform ivec3 ${e.name}Shape;`);break;case 4:r.push(`uniform ivec4 ${e.name}Shape;`);break;default:break}r.push(`uniform ivec2 ${e.name}TexShape;`)}}),n.enableShapeUniforms){switch(t.logicalShape.length){case 1:r.push(`uniform int outShape;`);break;case 2:r.push(`uniform ivec2 outShape;`),r.push(`uniform int outShapeStrides;`);break;case 3:r.push(`uniform ivec3 outShape;`),r.push(`uniform ivec2 outShapeStrides;`);break;case 4:r.push(`uniform ivec4 outShape;`),r.push(`uniform ivec3 outShapeStrides;`);break;default:break}r.push(`uniform ivec2 outTexShape;`)}n.customUniforms&&n.customUniforms.forEach(e=>{r.push(`uniform ${e.type} ${e.name}${e.arrayIndex?`[${e.arrayIndex}]`:``};`)});let i=r.join(`
`),a=e.map(e=>TJ(e,t,n.packedInputs,n.enableShapeUniforms)).join(`
`),o=t.texShape,s=fJ(),c=OJ(s),l,u,d=jJ(s);return t.isPacked?(l=EJ(t.logicalShape,o,n.enableShapeUniforms),u=AJ(s)):(l=DJ(t.logicalShape,o,n.enableShapeUniforms),u=kJ(s)),n.packedInputs&&(d+=pY),[d,c,u,i,l,a,n.userCode].join(`
`)}function CJ(e,t=!1){let n=e.shapeInfo.logicalShape;switch(n.length){case 0:return GJ(e,t);case 1:return qJ(e,t);case 2:return YJ(e,t);case 3:return ZJ(e,t);case 4:return $J(e,t);case 5:return eY(e);case 6:return tY(e);default:throw Error(`${n.length}-D input sampling is not yet supported`)}}function wJ(e,t){switch(e.shapeInfo.logicalShape.length){case 0:return WJ(e);case 1:return KJ(e,t);case 2:return JJ(e,t);case 3:return XJ(e,t);default:return QJ(e,t)}}function TJ(e,t,n=!1,r){let i=``;n?i+=wJ(e,r):i+=CJ(e,r);let a=e.shapeInfo.logicalShape,o=t.logicalShape;return a.length<=o.length&&(n?i+=rY(e,t):i+=iY(e,t)),i}function EJ(e,t,n){switch(e.length){case 0:return MJ();case 1:return NJ(e,t,n);case 2:return VJ(e,t,n);case 3:return FJ(e,t,n);default:return LJ(e,t,n)}}function DJ(e,t,n){switch(e.length){case 0:return MJ();case 1:return PJ(e,t,n);case 2:return HJ(e,t,n);case 3:return IJ(e,t,n);case 4:return RJ(e,t,n);case 5:return zJ(e,t);case 6:return BJ(e,t);default:throw Error(`${e.length}-D output sampling is not yet supported`)}}function OJ(e){return`
    float sampleTexture(sampler2D textureSampler, vec2 uv) {
      return ${e.texture2D}(textureSampler, uv).r;
    }
  `}function kJ(e){return`
    void setOutput(float val) {
      ${e.output} = vec4(val, 0, 0, 0);
    }
  `}function AJ(e){return`
    void setOutput(vec4 val) {
      ${e.output} = val;
    }
  `}function jJ(e){return`${e.version}
    precision highp float;
    precision highp int;
    precision highp sampler2D;
    ${e.varyingFs} vec2 resultUV;
    ${e.defineOutput}
    const vec2 halfCR = vec2(0.5, 0.5);

    struct ivec5
    {
      int x;
      int y;
      int z;
      int w;
      int u;
    };

    struct ivec6
    {
      int x;
      int y;
      int z;
      int w;
      int u;
      int v;
    };

    uniform float NAN;
    ${e.defineSpecialNaN}
    ${e.defineSpecialInf}
    ${e.defineRound}

    int imod(int x, int y) {
      return x - y * (x / y);
    }

    int idiv(int a, int b, float sign) {
      int res = a / b;
      int mod = imod(a, b);
      if (sign < 0. && mod != 0) {
        res -= 1;
      }
      return res;
    }

    //Based on the work of Dave Hoskins
    //https://www.shadertoy.com/view/4djSRW
    #define HASHSCALE1 443.8975
    float random(float seed){
      vec2 p = resultUV * seed;
      vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
      p3 += dot(p3, p3.yzx + 19.19);
      return fract((p3.x + p3.y) * p3.z);
    }

    ${uY}
    ${dY}
    ${fY}
  `}function MJ(){return`
    int getOutputCoords() {
      return 0;
    }
  `}function NJ(e,t,n){let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];return r[0]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ceil(float(outTexShape[1]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.x * ${r[1]}.0);
      }
    `:r[1]===1?n?`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ceil(float(outTexShape[0]) / 2.0));
      }
    `:`
      int getOutputCoords() {
        return 2 * int(resultUV.y * ${r[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      return 2 * (resTexRC.x * packedTexShape[1] + resTexRC.y);
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      return 2 * (resTexRC.x * ${r[1]} + resTexRC.y);
    }
  `}function PJ(e,t,n){return t[0]===1?n?`
      int getOutputCoords() {
        return int(resultUV.x * float(outTexShape[1]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.x * ${t[1]}.0);
      }
    `:t[1]===1?n?`
      int getOutputCoords() {
        return int(resultUV.y * float(outTexShape[0]));
      }
    `:`
      int getOutputCoords() {
        return int(resultUV.y * ${t[0]}.0);
      }
    `:n?`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      return resTexRC.x * outTexShape[1] + resTexRC.y;
    }
  `:`
    int getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      return resTexRC.x * ${t[1]} + resTexRC.y;
    }
  `}function FJ(e,t,n){if(n)return`
    ivec3 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec3(b, r, c);
    }
  `;let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],i=Math.ceil(e[2]/2),a=i*Math.ceil(e[1]/2);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      int index = resTexRC.x * ${r[1]} + resTexRC.y;

      int b = index / ${a};
      index -= b * ${a};

      int r = 2 * (index / ${i});
      int c = imod(index, ${i}) * 2;

      return ivec3(b, r, c);
    }
  `}function IJ(e,t,n){if(n)return`
  ivec3 getOutputCoords() {
    ivec2 resTexRC = ivec2(resultUV.yx *
                           vec2(outTexShape[0], outTexShape[1]));
    int index = resTexRC.x * outTexShape[1] + resTexRC.y;
    ${hJ([`r`,`c`,`d`],e)}
    return ivec3(r, c, d);
  }
`;let r=mJ([`r`,`c`,`d`],e);return`
    ivec3 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${r}
      return ivec3(r, c, d);
    }
  `}function LJ(e,t,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));
      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;

      int texelsInLogicalRow = int(ceil(float(outShape[3]) / 2.0));
      int texelsInBatch = texelsInLogicalRow * int(ceil(float(outShape[2]) / 2.0));
      int texelsInBatchN = texelsInBatch * outShape[1];

      int b2 = index / texelsInBatchN;
      index -= b2 * texelsInBatchN;

      int b = index / texelsInBatch;
      index -= b * texelsInBatch;

      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec4(b2, b, r, c);
    }
  `;let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)],i=Math.ceil(e[e.length-1]/2),a=i*Math.ceil(e[e.length-2]/2),o=a,s=``,c=`b, r, c`;for(let t=2;t<e.length-1;t++)o*=e[e.length-t-1],s=`
      int b${t} = index / ${o};
      index -= b${t} * ${o};
    `+s,c=`b${t}, `+c;return`
    ivec${e.length} getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));
      int index = resTexRC.x * ${r[1]} + resTexRC.y;

      ${s}

      int b = index / ${a};
      index -= b * ${a};

      int r = 2 * (index / ${i});
      int c = imod(index, ${i}) * 2;

      return ivec${e.length}(${c});
    }
  `}function RJ(e,t,n){if(n)return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      ${hJ([`r`,`c`,`d`,`d2`],e)}
      return ivec4(r, c, d, d2);
    }
  `;let r=mJ([`r`,`c`,`d`,`d2`],e);return`
    ivec4 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      ${r}
      return ivec4(r, c, d, d2);
    }
  `}function zJ(e,t){let n=mJ([`r`,`c`,`d`,`d2`,`d3`],e);return`
    ivec5 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx * vec2(${t[0]},
                             ${t[1]}));

      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${n}

      ivec5 outShape = ivec5(r, c, d, d2, d3);
      return outShape;
    }
  `}function BJ(e,t){let n=mJ([`r`,`c`,`d`,`d2`,`d3`,`d4`],e);return`
    ivec6 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
        vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;

      ${n}

      ivec6 result = ivec6(r, c, d, d2, d3, d4);
      return result;
    }
  `}function VJ(e,t,n){let r=[Math.ceil(t[0]/2),Math.ceil(t[1]/2)];if(ge(e,t))return n?`
      ivec2 getOutputCoords() {
        ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
        return 2 * ivec2(resultUV.yx * vec2(packedTexShape[0], packedTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return 2 * ivec2(resultUV.yx * vec2(${r[0]}, ${r[1]}));
      }
    `;let i=Math.ceil(e[1]/2);return n?`
    ivec2 getOutputCoords() {
      ivec2 packedTexShape = ivec2(ceil(float(outTexShape[0]) / 2.0), ceil(float(outTexShape[1]) / 2.0));
      int texelsInLogicalRow = int(ceil(float(outShape[1]) / 2.0));
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(packedTexShape[0], packedTexShape[1]));

      int index = resTexRC.x * packedTexShape[1] + resTexRC.y;
      int r = 2 * (index / texelsInLogicalRow);
      int c = imod(index, texelsInLogicalRow) * 2;

      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${r[0]}, ${r[1]}));

      int index = resTexRC.x * ${r[1]} + resTexRC.y;
      int r = 2 * (index / ${i});
      int c = imod(index, ${i}) * 2;

      return ivec2(r, c);
    }
  `}function HJ(e,t,n){return ge(e,t)?n?`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(outTexShape[0], outTexShape[1]));
      }
    `:`
      ivec2 getOutputCoords() {
        return ivec2(resultUV.yx * vec2(${t[0]}, ${t[1]}));
      }
    `:e[1]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(index, 0);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(index, 0);
      }
    `:e[0]===1?n?`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(outTexShape[0], outTexShape[1]));
        int index = resTexRC.x * outTexShape[1] + resTexRC.y;
        return ivec2(0, index);
      }
    `:`
      ivec2 getOutputCoords() {
        ivec2 resTexRC = ivec2(resultUV.yx *
                               vec2(${t[0]}, ${t[1]}));
        int index = resTexRC.x * ${t[1]} + resTexRC.y;
        return ivec2(0, index);
      }
    `:n?`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(outTexShape[0], outTexShape[1]));
      int index = resTexRC.x * outTexShape[1] + resTexRC.y;
      int r = index / outShape[1];
      int c = index - r * outShape[1];
      return ivec2(r, c);
    }
  `:`
    ivec2 getOutputCoords() {
      ivec2 resTexRC = ivec2(resultUV.yx *
                             vec2(${t[0]}, ${t[1]}));
      int index = resTexRC.x * ${t[1]} + resTexRC.y;
      int r = index / ${e[1]};
      int c = index - r * ${e[1]};
      return ivec2(r, c);
    }
  `}function UJ(e){return`offset${e}`}function WJ(e){let t=e.name;return`
    vec4 ${`get`+t.charAt(0).toUpperCase()+t.slice(1)}() {
      return ${fJ().texture2D}(${t}, halfCR);
    }
  `}function GJ(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`float ${r}() {return ${n};}`;let[i,a]=e.shapeInfo.texShape;if(i===1&&a===1)return`
      float ${r}() {
        return sampleTexture(${n}, halfCR);
      }
    `;let o=UJ(n);if(t)return`
    float ${r}() {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], ${o});
      return sampleTexture(${n}, uv);
    }
  `;let[s,c]=e.shapeInfo.texShape;return`
    float ${r}() {
      vec2 uv = uvFromFlat(${s}, ${c}, ${o});
      return sampleTexture(${n}, uv);
    }
  `}function KJ(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=e.shapeInfo.texShape,a=fJ();if(t)return`
    vec4 ${r}(int index) {
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      vec2 uv = packedUVfrom1D(
        packedTexShape[0], packedTexShape[1], index);
      return ${a.texture2D}(${n}, uv);
    }
  `;let o=[Math.ceil(i[0]/2),Math.ceil(i[1]/2)];return`
    vec4 ${r}(int index) {
      vec2 uv = packedUVfrom1D(
        ${o[0]}, ${o[1]}, index);
      return ${a.texture2D}(${n}, uv);
    }
  `}function qJ(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1);if(e.shapeInfo.isUniform)return`
      float ${r}(int index) {
        ${nY(e)}
      }
    `;let i=e.shapeInfo.texShape,a=i[0],o=i[1];if(o===1&&a===1)return`
      float ${r}(int index) {
        return sampleTexture(${n}, halfCR);
      }
    `;let s=UJ(n);return o===1?t?`
      float ${r}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${s}) + 0.5) / float(${n}TexShape[0]));
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${r}(int index) {
        vec2 uv = vec2(0.5, (float(index + ${s}) + 0.5) / ${a}.0);
        return sampleTexture(${n}, uv);
      }
    `:a===1?t?`
      float ${r}(int index) {
        vec2 uv = vec2((float(index + ${s}) + 0.5) / float(${n}TexShape[1]), 0.5);
        return sampleTexture(${n}, uv);
      }
    `:`
      float ${r}(int index) {
        vec2 uv = vec2((float(index + ${s}) + 0.5) / ${o}.0, 0.5);
        return sampleTexture(${n}, uv);
      }
    `:t?`
    float ${r}(int index) {
      vec2 uv = uvFromFlat(${n}TexShape[0], ${n}TexShape[1], index + ${s});
      return sampleTexture(${n}, uv);
    }
  `:`
    float ${r}(int index) {
      vec2 uv = uvFromFlat(${a}, ${o}, index + ${s});
      return sampleTexture(${n}, uv);
    }
  `}function JJ(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape,o=a[0],s=a[1],c=fJ();if(a!=null&&ge(n,a))return t?`
      vec4 ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);

        return ${c.texture2D}(${r}, uv);
      }
    `:`
      vec4 ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${s}.0, ${o}.0);

        return ${c.texture2D}(${r}, uv);
      }
    `;if(t)return`
    vec4 ${i}(int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${r}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom2D(valuesPerRow, packedTexShape[0], packedTexShape[1], row, col);
      return ${c.texture2D}(${r}, uv);
    }
  `;let l=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];return`
    vec4 ${i}(int row, int col) {
      vec2 uv = packedUVfrom2D(${Math.ceil(n[1]/2)}, ${l[0]}, ${l[1]}, row, col);
      return ${c.texture2D}(${r}, uv);
    }
  `}function YJ(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape;if(a!=null&&ge(n,a)){if(t)return`
      float ${i}(int row, int col) {
        vec2 uv = (vec2(col, row) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `;let e=a[0];return`
    float ${i}(int row, int col) {
      vec2 uv = (vec2(col, row) + halfCR) / vec2(${a[1]}.0, ${e}.0);
      return sampleTexture(${r}, uv);
    }
  `}let{newShape:o,keptDims:s}=Ce(n),c=o;if(c.length<n.length)return`
      ${CJ(sY(e,c),t)}
      float ${i}(int row, int col) {
        return ${i}(${cY([`row`,`col`],s)});
      }
    `;if(e.shapeInfo.isUniform)return`
      float ${i}(int row, int col) {
        int index = round(dot(vec2(row, col), vec2(${n[1]}, 1)));
        ${nY(e)}
      }
    `;let l=a[0],u=a[1],d=UJ(r);return u===1?t?`
      float ${i}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${r}Shape[1], 1, 1));
        vec2 uv = vec2(0.5, (index + 0.5) / float(${r}TexShape[0]));
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${i}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2(0.5, (index + 0.5) / ${l}.0);
      return sampleTexture(${r}, uv);
    }
  `:l===1?t?`
      float ${i}(int row, int col) {
        float index = dot(vec3(row, col, ${d}), vec3(${r}Shape[1], 1, 1));
        vec2 uv = vec2((index + 0.5) / float(${r}TexShape[1]), 0.5);
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${i}(int row, int col) {
      float index = dot(vec3(row, col, ${d}), vec3(${n[1]}, 1, 1));
      vec2 uv = vec2((index + 0.5) / ${u}.0, 0.5);
      return sampleTexture(${r}, uv);
    }
  `:t?`
      float ${i}(int row, int col) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${r}Shape[1] + col + ${d};
        vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);
        return sampleTexture(${r}, uv);
      }
    `:`
  float ${i}(int row, int col) {
    // Explicitly use integer operations as dot() only works on floats.
    int index = row * ${n[1]} + col + ${d};
    vec2 uv = uvFromFlat(${l}, ${u}, index);
    return sampleTexture(${r}, uv);
  }
`}function XJ(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=e.shapeInfo.texShape,o=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];if(n[0]===1)return`
        ${wJ(sY(e,n.slice(1)),t)}
        vec4 ${i}(int b, int row, int col) {
          return ${i}(${cY([`b`,`row`,`col`],[1,2])});
        }
      `;let s=fJ();if(t)return`
    vec4 ${i}(int b, int row, int col) {
      ivec2 packedTexShape = ivec2(ceil(float(${r}TexShape[0]) / 2.0), ceil(float(${r}TexShape[1]) / 2.0));
      int valuesPerRow = int(ceil(float(${r}Shape[2]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${r}Shape[1]) / 2.0));
      vec2 uv = packedUVfrom3D(
        packedTexShape[0], packedTexShape[1], texelsInBatch, valuesPerRow, b, row, col);
      return ${s.texture2D}(${r}, uv);
    }
  `;let c=o[0],l=o[1],u=Math.ceil(n[2]/2);return`
    vec4 ${i}(int b, int row, int col) {
      vec2 uv = packedUVfrom3D(
        ${c}, ${l}, ${u*Math.ceil(n[1]/2)}, ${u}, b, row, col);
      return ${s.texture2D}(${r}, uv);
    }
  `}function ZJ(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=n[1]*n[2],o=n[2],{newShape:s,keptDims:c}=Ce(n),l=s;if(l.length<n.length)return`
        ${CJ(sY(e,l),t)}
        float ${i}(int row, int col, int depth) {
          return ${i}(${cY([`row`,`col`,`depth`],c)});
        }
      `;if(e.shapeInfo.isUniform)return`
      float ${i}(int row, int col, int depth) {
        int index = round(dot(vec3(row, col, depth),
                          vec3(${a}, ${o}, 1)));
        ${nY(e)}
      }
    `;let u=e.shapeInfo.texShape,d=u[0],f=u[1],p=e.shapeInfo.flatOffset;if(f===a&&p==null)return t?`
      float ${i}(int row, int col, int depth) {
        int stride1 = ${r}Shape[2];
        float texR = float(row);
        float texC = dot(vec2(col, depth), vec2(stride1, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
        float ${i}(int row, int col, int depth) {
          float texR = float(row);
          float texC = dot(vec2(col, depth), vec2(${o}, 1));
          vec2 uv = (vec2(texC, texR) + halfCR) /
                     vec2(${f}.0, ${d}.0);
          return sampleTexture(${r}, uv);
        }
      `;if(f===o&&p==null)return t?`
      float ${i}(int row, int col, int depth) {
        float texR = dot(vec2(row, col), vec2(${r}Shape[1], 1));
        float texC = float(depth);
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
    float ${i}(int row, int col, int depth) {
      float texR = dot(vec2(row, col), vec2(${n[1]}, 1));
      float texC = float(depth);
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${f}.0, ${d}.0);
      return sampleTexture(${r}, uv);
    }
  `;let m=UJ(r);return t?`
    float ${i}(int row, int col, int depth) {
      // Explicitly use integer operations as dot() only works on floats.
      int stride0 = ${r}Shape[1] * ${r}Shape[2];
      int stride1 = ${r}Shape[2];
      int index = row * stride0 + col * stride1 + depth + ${m};
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index);
      return sampleTexture(${r}, uv);
    }
    `:`
      float ${i}(int row, int col, int depth) {
        // Explicitly use integer operations as dot() only works on floats.
        int index = row * ${a} + col * ${o} + depth + ${m};
        vec2 uv = uvFromFlat(${d}, ${f}, index);
        return sampleTexture(${r}, uv);
      }
  `}function QJ(e,t){let n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=fJ();if(t)return`
    vec4 ${r}(int b2, int b, int row, int col) {
      int valuesPerRow = int(ceil(float(${n}Shape[3]) / 2.0));
      int texelsInBatch = valuesPerRow * int(ceil(float(${n}Shape[2]) / 2.0));
      int index = b * texelsInBatch + (row / 2) * valuesPerRow + (col / 2);
      texelsInBatch *= ${n}Shape[1];
      index = b2 * texelsInBatch + index;
      ivec2 packedTexShape = ivec2(ceil(float(${n}TexShape[0]) / 2.0), ceil(float(${n}TexShape[1]) / 2.0));
      int texR = index / packedTexShape[1];
      int texC = index - texR * packedTexShape[1];
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(packedTexShape[1], packedTexShape[0]); return ${i.texture2D}(${n}, uv);
    }
  `;let a=e.shapeInfo.logicalShape,o=a.length,s=e.shapeInfo.texShape,c=[Math.ceil(s[0]/2),Math.ceil(s[1]/2)],l=c[0],u=c[1],d=Math.ceil(a[o-1]/2),f=d*Math.ceil(a[o-2]/2),p=`int b, int row, int col`,m=`b * ${f} + (row / 2) * ${d} + (col / 2)`;for(let e=2;e<o-1;e++)p=`int b${e}, `+p,f*=a[o-e-1],m=`b${e} * ${f} + `+m;return`
    vec4 ${r}(${p}) {
      int index = ${m};
      int texR = index / ${u};
      int texC = index - texR * ${u};
      vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${u}, ${l});
      return ${i.texture2D}(${n}, uv);
    }
  `}function $J(e,t){let n=e.shapeInfo.logicalShape,r=e.name,i=`get`+r.charAt(0).toUpperCase()+r.slice(1),a=n[3],o=n[2]*a,s=n[1]*o,{newShape:c,keptDims:l}=Ce(n);if(c.length<n.length)return`
      ${CJ(sY(e,c),t)}
      float ${i}(int row, int col, int depth, int depth2) {
        return ${i}(${cY([`row`,`col`,`depth`,`depth2`],l)});
      }
    `;if(e.shapeInfo.isUniform)return`
      float ${i}(int row, int col, int depth, int depth2) {
        int index = round(dot(vec4(row, col, depth, depth2),
                          vec4(${s}, ${o}, ${a}, 1)));
        ${nY(e)}
      }
    `;let u=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,f=d[0],p=d[1],m=`int stride2 = ${r}Shape[3];`,h=`int stride1 = ${r}Shape[2] * stride2;`,g=`int stride0 = ${r}Shape[1] * stride1;`;if(p===s&&u==null)return t?`
      float ${i}(int row, int col, int depth, int depth2) {
        ${m}
        ${h}
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(stride1, stride2, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = float(row);
        float texC =
            dot(vec3(col, depth, depth2),
                vec3(${o}, ${a}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${f}.0);
        return sampleTexture(${r}, uv);
      }
    `;if(p===a&&u==null)return t?`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${r}Shape[1] * ${r}Shape[2], ${r}Shape[2], 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${r}TexShape[1], ${r}TexShape[0]);
        return sampleTexture(${r}, uv);
      }
    `:`
      float ${i}(int row, int col, int depth, int depth2) {
        float texR = dot(vec3(row, col, depth),
                         vec3(${n[1]*n[2]}, ${n[2]}, 1));
        float texC = float(depth2);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${f}.0);
        return sampleTexture(${r}, uv);
      }
    `;let _=UJ(r);return t?`
    float ${i}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      ${m}
      ${h}
      ${g}
      int index = row * stride0 + col * stride1 +
          depth * stride2 + depth2;
      vec2 uv = uvFromFlat(${r}TexShape[0], ${r}TexShape[1], index + ${_});
      return sampleTexture(${r}, uv);
    }
  `:`
    float ${i}(int row, int col, int depth, int depth2) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${s} + col * ${o} +
          depth * ${a} + depth2;
      vec2 uv = uvFromFlat(${f}, ${p}, index + ${_});
      return sampleTexture(${r}, uv);
    }
  `}function eY(e){let t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),i=t[4],a=t[3]*i,o=t[2]*a,s=t[1]*o,{newShape:c,keptDims:l}=Ce(t);if(c.length<t.length)return`
      ${CJ(sY(e,c))}
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        return ${r}(${cY([`row`,`col`,`depth`,`depth2`,`depth3`],l)});
      }
    `;if(e.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        float index = dot(
          vec4(row, col, depth, depth2),
          vec4(${s}, ${o}, ${a}, ${i})) +
          depth3;
        ${nY(e)}
      }
    `;let u=e.shapeInfo.flatOffset,d=e.shapeInfo.texShape,f=d[0],p=d[1];return p===s&&u==null?`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
                         vec4(${o}, ${a}, ${i}, 1));
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${p}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `:p===i&&u==null?`
      float ${r}(int row, int col, int depth, int depth2, int depth3) {
        float texR = dot(
          vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]},
               ${t[2]*t[3]}, ${t[3]}, 1));
        int texC = depth3;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${p}.0, ${f}.0);
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${r}(int row, int col, int depth, int depth2, int depth3) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${s} + col * ${o} + depth * ${a} +
          depth2 * ${i} + depth3 + ${UJ(n)};
      vec2 uv = uvFromFlat(${f}, ${p}, index);
      return sampleTexture(${n}, uv);
    }
  `}function tY(e){let t=e.shapeInfo.logicalShape,n=e.name,r=`get`+n.charAt(0).toUpperCase()+n.slice(1),{newShape:i,keptDims:a}=Ce(t);if(i.length<t.length)return`
      ${CJ(sY(e,i))}
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        return ${r}(${cY([`row`,`col`,`depth`,`depth2`,`depth3`,`depth4`],a)});
      }
    `;let o=t[5],s=t[4]*o,c=t[3]*s,l=t[2]*c,u=t[1]*l;if(e.shapeInfo.isUniform)return`
      float ${r}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
        int index = round(dot(
          vec4(row, col, depth, depth2),
          vec4(${u}, ${l}, ${c}, ${s})) +
          dot(
            vec2(depth3, depth4),
            vec2(${o}, 1)));
        ${nY(e)}
      }
    `;let d=e.shapeInfo.flatOffset,f=e.shapeInfo.texShape,p=f[0],m=f[1];return m===u&&d==null?`
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        int texR = row;
        float texC = dot(vec4(col, depth, depth2, depth3),
          vec4(${l}, ${c}, ${s}, ${o})) +
               float(depth4);
        vec2 uv = (vec2(texC, texR) + halfCR) /
                   vec2(${m}.0, ${p}.0);
        return sampleTexture(${n}, uv);
      }
    `:m===o&&d==null?`
      float ${r}(int row, int col, int depth,
                    int depth2, int depth3, int depth4) {
        float texR = dot(vec4(row, col, depth, depth2),
          vec4(${t[1]*t[2]*t[3]*t[4]},
               ${t[2]*t[3]*t[4]},
               ${t[3]*t[4]},
               ${t[4]})) + float(depth3);
        int texC = depth4;
        vec2 uv = (vec2(texC, texR) + halfCR) /
                  vec2(${m}.0, ${p}.0);
        return sampleTexture(${n}, uv);
      }
    `:`
    float ${r}(int row, int col, int depth,
                  int depth2, int depth3, int depth4) {
      // Explicitly use integer operations as dot() only works on floats.
      int index = row * ${u} + col * ${l} + depth * ${c} +
          depth2 * ${s} + depth3 * ${o} + depth4 + ${UJ(n)};
      vec2 uv = uvFromFlat(${p}, ${m}, index);
      return sampleTexture(${n}, uv);
    }
  `}function nY(e){let t=e.name,n=D(e.shapeInfo.logicalShape);return n<2?`return ${t};`:`
    for (int i = 0; i < ${n}; i++) {
      if (i == index) {
        return ${t}[i];
      }
    }
  `}function rY(e,t){let n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),i=`get`+r+`AtOutCoords`,a=e.shapeInfo.logicalShape.length,o=t.logicalShape.length,s=lY(e.shapeInfo.logicalShape,t.logicalShape),c=aY(o),l=o-a,u,d=[`x`,`y`,`z`,`w`,`u`,`v`];u=a===0?``:o<2&&s.length>=1?`coords = 0;`:s.map(e=>`coords.${d[e+l]} = 0;`).join(`
`);let f=``;f=o<2&&a>0?`coords`:e.shapeInfo.logicalShape.map((e,t)=>`coords.${d[t+l]}`).join(`, `);let p=`return outputValue;`,m=D(e.shapeInfo.logicalShape)===1,h=D(t.logicalShape)===1;if(a===1&&!m&&!h)p=`
      return vec4(outputValue.xy, outputValue.xy);
    `;else if(m&&!h)p=o===1?`
        return vec4(outputValue.x, outputValue.x, 0., 0.);
      `:`
        return vec4(outputValue.x);
      `;else if(s.length){let e=a-2,t=a-1;s.indexOf(e)>-1&&s.indexOf(t)>-1?p=`return vec4(outputValue.x);`:s.indexOf(e)>-1?p=`return vec4(outputValue.x, outputValue.y, outputValue.x, outputValue.y);`:s.indexOf(t)>-1&&(p=`return vec4(outputValue.xx, outputValue.zz);`)}return`
    vec4 ${i}() {
      ${c} coords = getOutputCoords();
      ${u}
      vec4 outputValue = get${r}(${f});
      ${p}
    }
  `}function iY(e,t){let n=e.name,r=n.charAt(0).toUpperCase()+n.slice(1),i=`get`+r+`AtOutCoords`,a=t.texShape,o=e.shapeInfo.texShape,s=e.shapeInfo.logicalShape.length,c=t.logicalShape.length;if(!e.shapeInfo.isUniform&&s===c&&e.shapeInfo.flatOffset==null&&ge(o,a))return`
      float ${i}() {
        return sampleTexture(${n}, resultUV);
      }
    `;let l=aY(c),u=lY(e.shapeInfo.logicalShape,t.logicalShape),d=c-s,f,p=[`x`,`y`,`z`,`w`,`u`,`v`];f=s===0?``:c<2&&u.length>=1?`coords = 0;`:u.map(e=>`coords.${p[e+d]} = 0;`).join(`
`);let m=``;return m=c<2&&s>0?`coords`:e.shapeInfo.logicalShape.map((e,t)=>`coords.${p[t+d]}`).join(`, `),`
    float ${i}() {
      ${l} coords = getOutputCoords();
      ${f}
      return get${r}(${m});
    }
  `}function aY(e){if(e<=1)return`int`;if(e===2)return`ivec2`;if(e===3)return`ivec3`;if(e===4)return`ivec4`;if(e===5)return`ivec5`;if(e===6)return`ivec6`;throw Error(`GPU for rank ${e} is not yet supported`)}function oY(e,t,n){let{newShape:r,keptDims:i}=Ce(t),a=t.length,o=e&&a===3&&t[0]===1,s=o?t.slice(1):r,c=!e&&a>1&&!ge(t,n)&&r.length<a||o;return{useSqueezeShape:c,uniformShape:c?s:t,keptDims:i}}function sY(e,t){let n=JSON.parse(JSON.stringify(e));return n.shapeInfo.logicalShape=t,n}function cY(e,t){return t.map(t=>e[t]).join(`, `)}var lY,uY,dY,fY,pY,mY=o((()=>{q(),pJ(),xJ(),{getBroadcastDims:lY}=nb,uY=`
vec2 uvFromFlat(int texNumR, int texNumC, int index) {
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
vec2 packedUVfrom1D(int texNumR, int texNumC, int index) {
  int texelIndex = index / 2;
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,dY=`
vec2 packedUVfrom2D(int texelsInLogicalRow, int texNumR,
  int texNumC, int row, int col) {
  int texelIndex = (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = texelIndex / texNumC;
  int texC = texelIndex - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,fY=`
vec2 packedUVfrom3D(int texNumR, int texNumC,
    int texelsInBatch, int texelsInLogicalRow, int b,
    int row, int col) {
  int index = b * texelsInBatch + (row / 2) * texelsInLogicalRow + (col / 2);
  int texR = index / texNumC;
  int texC = index - texR * texNumC;
  return (vec2(texC, texR) + halfCR) / vec2(texNumC, texNumR);
}
`,pY=`
  float getChannel(vec4 frag, vec2 innerDims) {
    vec2 modCoord = mod(innerDims, 2.);
    return modCoord.x == 0. ?
      (modCoord.y == 0. ? frag.r : frag.g) :
      (modCoord.y == 0. ? frag.b : frag.a);
  }
  float getChannel(vec4 frag, int dim) {
    float modCoord = mod(float(dim), 2.);
    return modCoord == 0. ? frag.r : frag.g;
  }
`}));function hY(e,t,n,r){let i=n.map((e,n)=>{let r={logicalShape:e.shape,texShape:e.isUniform?null:e.texData.texShape,isUniform:e.isUniform,isPacked:!e.isUniform&&e.texData.isPacked,flatOffset:null};return e.texData!=null&&e.texData.slice!=null&&e.texData.slice.flatOffset>0&&(r.flatOffset=e.texData.slice.flatOffset),{name:t.variableNames[n],shapeInfo:r}}),a=i.map(e=>e.shapeInfo),o={logicalShape:r.shape,texShape:r.texData.texShape,isUniform:!1,isPacked:r.texData.isPacked,flatOffset:null},s=SJ(i,o,t),c=xq(e.gl,s),l=e.createProgram(c);return k().get(`ENGINE_COMPILE_ONLY`)?{program:t,fragmentShader:c,source:s,webGLProgram:l,inShapeInfos:a,outShapeInfo:o,variablesLocations:null,customUniformLocations:null,infLoc:null,nanLoc:null,outShapeLocation:null,outShapeStridesLocation:null,outTexShapeLocation:null}:(e.buildVao(l),Object.assign({program:t,fragmentShader:c,source:s,webGLProgram:l,inShapeInfos:a,outShapeInfo:o},gY(e,t,l)))}function gY(e,t,n){let r=[],i=[],a,o,s,c=null,l=null;l=e.getUniformLocation(n,`NAN`,!1),k().getNumber(`WEBGL_VERSION`)===1&&(c=e.getUniformLocation(n,`INFINITY`,!1));for(let i of t.variableNames){let a={name:i,uniform:e.getUniformLocation(n,i,!1),offset:e.getUniformLocation(n,`offset${i}`,!1)};t.enableShapeUniforms&&(a.shape=e.getUniformLocation(n,`${i}Shape`,!1),a.texShape=e.getUniformLocation(n,`${i}TexShape`,!1)),r.push(a)}if(t.enableShapeUniforms&&(a=e.getUniformLocation(n,`outShape`,!1),s=e.getUniformLocation(n,`outShapeStrides`,!1),o=e.getUniformLocation(n,`outTexShape`,!1)),t.customUniforms)for(let r of t.customUniforms)i.push(e.getUniformLocation(n,r.name,!1));return{variablesLocations:r,customUniformLocations:i,infLoc:c,nanLoc:l,outShapeLocation:a,outShapeStridesLocation:s,outTexShapeLocation:o}}function _Y(e,t){if(e.length!==t.length)throw Error(`Binary was compiled with ${e.length} inputs, but was executed with ${t.length} inputs`);e.forEach((e,n)=>{let r=e.logicalShape,i=t[n],a=i.shape;if(!ge(r,a))throw Error(`Binary was compiled with different shapes than the current args. Shapes ${r} and ${a} must match`);if(e.isUniform&&i.isUniform)return;let o=e.texShape,s=i.isUniform?null:i.texData.texShape;if(!ge(o,s))throw Error(`Binary was compiled with different texture shapes than the current args. Shape ${o} and ${s} must match`)})}function vY(e,t,n,r,i){t.program.enableShapeUniforms||(_Y(t.inShapeInfos,n),_Y([t.outShapeInfo],[r]));let a=r.texData.texture,o=r.texData.texShape;r.texData.isPacked?e.setOutputPackedMatrixTexture(a.texture,o[0],o[1]):e.setOutputMatrixTexture(a.texture,o[0],o[1]),e.setProgram(t.webGLProgram),e.bindVertexArray(t.webGLProgram.vao),k().getNumber(`WEBGL_VERSION`)===1&&t.infLoc!==null&&e.gl.uniform1f(t.infLoc,1/0),t.nanLoc!==null&&e.gl.uniform1f(t.nanLoc,NaN);for(let r=0;r<n.length;++r){let i=n[r],{uniform:a,offset:o,shape:s,texShape:c}=t.variablesLocations[r];if(s){let{uniformShape:n}=oY(t.program.packedInputs,i.shape,i.texData.texShape);switch(n.length){case 1:e.gl.uniform1iv(s,new Int32Array(n));break;case 2:e.gl.uniform2iv(s,new Int32Array(n));break;case 3:e.gl.uniform3iv(s,new Int32Array(n));break;case 4:e.gl.uniform4iv(s,new Int32Array(n));break;default:break}}if(c&&e.gl.uniform2i(c,i.texData.texShape[0],i.texData.texShape[1]),a!=null){if(i.isUniform){if(D(i.shape)<2)e.gl.uniform1f(a,i.uniformValues[0]);else{let t=i.uniformValues;t instanceof Float32Array||(t=new Float32Array(t)),e.gl.uniform1fv(a,t)}continue}i.texData.slice!=null&&o!=null&&e.gl.uniform1i(o,i.texData.slice.flatOffset),e.setInputMatrixTexture(i.texData.texture.texture,a,r)}}let s=t.outShapeLocation;if(s)switch(r.shape.length){case 1:e.gl.uniform1iv(s,new Int32Array(r.shape));break;case 2:e.gl.uniform2iv(s,new Int32Array(r.shape));break;case 3:e.gl.uniform3iv(s,new Int32Array(r.shape));break;case 4:e.gl.uniform4iv(s,new Int32Array(r.shape));break;default:break}if(t.outShapeStridesLocation){let n=O(r.shape);switch(r.shape.length){case 2:e.gl.uniform1iv(t.outShapeStridesLocation,new Int32Array(n));break;case 3:e.gl.uniform2iv(t.outShapeStridesLocation,new Int32Array(n));break;case 4:e.gl.uniform3iv(t.outShapeStridesLocation,new Int32Array(n));break;default:break}}if(t.outTexShapeLocation&&e.gl.uniform2i(t.outTexShapeLocation,r.texData.texShape[0],r.texData.texShape[1]),t.program.customUniforms&&i)for(let n=0;n<t.program.customUniforms.length;++n){let r=t.program.customUniforms[n],a=t.customUniformLocations[n],o=i[n];if(r.type===`float`)e.gl.uniform1fv(a,o);else if(r.type===`vec2`)e.gl.uniform2fv(a,o);else if(r.type===`vec3`)e.gl.uniform3fv(a,o);else if(r.type===`vec4`)e.gl.uniform4fv(a,o);else if(r.type===`int`)e.gl.uniform1iv(a,o);else if(r.type===`ivec2`)e.gl.uniform2iv(a,o);else if(r.type===`ivec3`)e.gl.uniform3iv(a,o);else if(r.type===`ivec4`)e.gl.uniform4iv(a,o);else throw Error(`uniform type ${r.type} is not supported yet.`)}e.executeProgram()}function yY(e,t,n){let r=``;t.concat(n).forEach(t=>{let i=t.texData!=null&&t.texData.slice!=null&&t.texData.slice.flatOffset>0;if(e.enableShapeUniforms&&!t.isUniform){let a=t.texData.texShape,{useSqueezeShape:o,uniformShape:s,keptDims:c}=oY(e.packedInputs,t.shape,a),l=``,u=``,d=``;if(s.length===1&&e.packedInputs){let e=[Math.ceil(a[0]/2),Math.ceil(a[1]/2)];l=`${e[0]>1}_${e[1]>1}`}else if(s.length===2&&!e.packedInputs)u=`${s[0]>1}_${s[1]>1}`;else if(s.length>2&&!e.packedInputs){let e=O(s);d=`${e[0]===a[1]}_${e[e.length-1]===a[1]}`}let f=t.shape.length,p=s.length===2&&ge(t.shape,a),m=D(t.shape)===1,h=Zl(t.shape,n.shape),g=!e.packedInputs&&f===n.shape.length&&ge(a,n.texData.texShape),_=e.packedInputs||s.length>2?``:`${a[0]>1}_${a[1]>1}`;r+=`${f}_${g}_${o?c:``}_${s.length}_${m}_${h}_${p}_${l}_${u}_${d}_${_}_${i}`}else{let e=t.isUniform?`uniform`:t.texData.texShape;r+=`${t.shape}_${e}_${i}`}});let i=e.userCode,a=e.constructor.name;return a+=`_`+r+`_`+i+`${k().getNumber(`WEBGL_VERSION`)}`,a}function bY(e){return k().getBool(`WEBGL_USE_SHAPES_UNIFORMS`)&&e<=4}var xY=o((()=>{q(),mY(),uJ()})),SY,CY=o((()=>{pJ(),xY(),xJ(),hq(),SY=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.outPackingScheme=fq.DENSE,this.customUniforms=[{name:`texShape`,type:`ivec2`}];let t=fJ();this.outputShape=e,this.enableShapeUniforms=bY(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?hJ([`r`,`c`,`d`],e):mJ([`r`,`c`,`d`],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getA(rc.x, rc.y, rc.z);
        }

        ${t.output} = result;
      }
    `}}})),wY,TY=o((()=>{pJ(),xY(),xJ(),hq(),wY=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outPackingScheme=fq.DENSE,this.customUniforms=[{name:`texShape`,type:`ivec2`}];let t=fJ();this.outputShape=e,this.enableShapeUniforms=bY(this.outputShape.length),this.userCode=`
      ivec3 outCoordsFromFlatIndex(int index) {
        ${this.enableShapeUniforms?hJ([`r`,`c`,`d`],e):mJ([`r`,`c`,`d`],e)}
        return ivec3(r, c, d);
      }

      void main() {
        ivec2 resTexRC = ivec2(resultUV.yx * vec2(texShape[0], texShape[1]));
        int index = 4 * (resTexRC.x * texShape[1] + resTexRC.y);

        vec4 result = vec4(0.);

        for (int i=0; i<4; i++) {
          int flatIndex = index + i;
          ivec3 rc = outCoordsFromFlatIndex(flatIndex);
          result[i] = getChannel(getA(rc.x, rc.y, rc.z), vec2(rc.y, rc.z));
        }

        ${t.output} = result;
      }
    `}}})),EY,DY=o((()=>{pJ(),xJ(),hq(),EY=class{constructor(e){this.variableNames=[`A`],this.outTexUsage=pq.DOWNLOAD;let t=fJ();this.outputShape=e,this.userCode=`
      ${bJ}

      void main() {
        float x = getAAtOutCoords();
        ${t.output} = encode_float(x);
      }
    `}}})),OY,kY=o((()=>{pJ(),xJ(),hq(),OY=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!1,this.outTexUsage=pq.DOWNLOAD;let t=fJ();this.outputShape=e,this.userCode=`
      ${bJ}

      void main() {
        ivec3 coords = getOutputCoords();
        float x = getChannel(getAAtOutCoords(), vec2(coords.y, coords.z));
        ${t.output} = encode_float(x);
      }
    `}}})),AY,jY,MY=o((()=>{pJ(),xY(),xJ(),AY={R:0,G:1,B:2,A:3},jY=class{constructor(e,t=!1,n=`RGBA`){this.variableNames=[`A`],this.customUniforms=[{name:`texShape`,type:`ivec2`}];let r=fJ();this.outputShape=e,this.enableShapeUniforms=bY(this.outputShape.length);let i=`result`;t&&(i=`floor(result * 255. + 0.5)`);let a=``;for(let e=0;e<n.length;e++){let t=n[e];a+=`
          if(offset == ${e}) {
            result = values[${AY[t]}];
          }`}this.userCode=`
      ${this.enableShapeUniforms?yJ():vJ(e)}

      void main() {
        ivec3 coords = getOutputCoords();
        int flatIndex = getFlatIndex(coords);
        float result = 0.;
        int offset = imod(flatIndex, ${n.length});

        flatIndex = idiv(flatIndex, ${n.length}, 1.);

        int r = flatIndex / texShape[1];
        if (r < texShape[0]) {
          int c = imod(flatIndex, texShape[1]);
          vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
          vec4 values = ${r.texture2D}(A, uv);
          ${a}
        }
        ${r.output} = vec4(${i}, 0., 0., 0.);
      }
    `}}})),NY,PY=o((()=>{pJ(),xY(),xJ(),NY=class{constructor(e,t=!1){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.customUniforms=[{name:`texShape`,type:`ivec2`}];let n=fJ();this.outputShape=e,this.enableShapeUniforms=bY(this.outputShape.length);let r=``,i=`result`;t&&(i=`floor(result * 255. + 0.5)`);for(let t=0;t<=1;t++)for(let i=0;i<=1;i++){let a=t*2+i;r+=`
          localCoords = coords;
          if(localCoords[2] + ${i} < ${this.enableShapeUniforms?`outShape[2]`:`${e[2]}`}) {
          localCoords[2] += ${i};
          if (localCoords[1] + ${t} < ${this.enableShapeUniforms?`outShape[1]`:`${e[1]}`}) {
            localCoords[1] += ${t};

            flatIndex = getFlatIndex(localCoords);
            offset = imod(flatIndex, 4);

            flatIndex = idiv(flatIndex, 4, 1.);

            int r = flatIndex / texShape[1];
            int c = imod(flatIndex, texShape[1]);
            vec2 uv = (vec2(c, r) + halfCR) / vec2(texShape[1], texShape[0]);
            values = ${n.texture2D}(A, uv);

            if (offset == 0) {
              result[${a}] = values[0];
            } else if (offset == 1) {
              result[${a}] = values[1];
            } else if (offset == 2) {
              result[${a}] = values[2];
            } else {
              result[${a}] = values[3];
            }
          }
        }
        `}this.userCode=`
        ${this.enableShapeUniforms?yJ():vJ(e)}

        void main() {
          ivec3 coords = getOutputCoords();

          vec4 result = vec4(0.);
          int flatIndex, r, c, offset;
          ivec3 localCoords;
          vec2 uv;
          vec4 values;

          ${r}

          ${n.output} = ${i};
        }
    `}}}));function FY(e){let t=fJ();return bq(e,`${t.version}
    precision highp float;
    ${t.attribute} vec3 clipSpacePos;
    ${t.attribute} vec2 uv;
    ${t.varyingVs} vec2 resultUV;

    void main() {
      gl_Position = vec4(clipSpacePos, 1);
      resultUV = uv;
    }`)}function IY(e){return Eq(e,new Float32Array([-1,1,0,0,1,-1,-1,0,0,0,1,1,0,1,1,1,-1,0,1,0]))}function LY(e){return Dq(e,new Uint16Array([0,1,2,2,1,3]))}function RY(e,t,n,r,i,a){kq(t,n);let o=Oq(e),s=e.TEXTURE_2D;return Z(e,()=>e.bindTexture(s,o)),Z(e,()=>e.texParameteri(s,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE)),Z(e,()=>e.texParameteri(s,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),Z(e,()=>e.texParameteri(s,e.TEXTURE_MIN_FILTER,e.NEAREST)),Z(e,()=>e.texParameteri(s,e.TEXTURE_MAG_FILTER,e.NEAREST)),k().getNumber(`WEBGL_VERSION`)===1?Z(e,()=>e.texImage2D(s,0,r,t,n,0,i,a,null)):Z(e,()=>e.texStorage2D(s,1,r,t,n)),Z(e,()=>e.bindTexture(e.TEXTURE_2D,null)),{texture:o,texShape:[n,t]}}function zY(e){return e.internalFormatFloat}function BY(e,t,n,r){let[i,a]=oq(t,n);return RY(e,i,a,zY(r),r.textureFormatFloat,e.FLOAT)}function VY(e){return e.internalFormatHalfFloat}function HY(e,t,n,r){let[i,a]=oq(t,n);return RY(e,i,a,VY(r),r.textureFormatFloat,r.textureTypeHalfFloat)}function UY(e){return e.downloadTextureFormat}function WY(e,t,n,r){let[i,a]=oq(t,n);return RY(e,i,a,UY(r),e.RGBA,e.UNSIGNED_BYTE)}function GY(e){return e.internalFormatPackedFloat}function KY(e,t,n,r){let[i,a]=lq(t,n);return RY(e,i,a,GY(r),e.RGBA,e.FLOAT)}function qY(e){return e.internalFormatPackedHalfFloat}function JY(e,t,n,r){let[i,a]=lq(t,n);return RY(e,i,a,qY(r),e.RGBA,r.textureTypeHalfFloat)}function YY(e,t,n){return Z(e,()=>e.bindBuffer(e.ARRAY_BUFFER,n)),jq(e,t,`clipSpacePos`,n,3,20,0)&&jq(e,t,`uv`,n,2,20,12)}function XY(e,t,n,r,i,a){Z(e,()=>e.bindTexture(e.TEXTURE_2D,t));let o,s,c;i instanceof Uint8Array?(o=new Uint8Array(n*r*4),s=e.UNSIGNED_BYTE,c=e.RGBA):(o=new Float32Array(n*r*4),s=e.FLOAT,c=a.internalFormatPackedFloat),o.set(i),k().getNumber(`WEBGL_VERSION`)===2?Z(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n,r,e.RGBA,s,o)):Z(e,()=>e.texImage2D(e.TEXTURE_2D,0,c,n,r,0,e.RGBA,s,o)),Z(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function ZY(e,t,n){Z(e,()=>e.bindTexture(e.TEXTURE_2D,t)),n.data instanceof Uint8Array?k().getNumber(`WEBGL_VERSION`)===2?Z(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,e.RGBA,e.UNSIGNED_BYTE,n.data)):Z(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,n.width,n.height,0,e.RGBA,e.UNSIGNED_BYTE,n.data)):k().getNumber(`WEBGL_VERSION`)===2?Z(e,()=>e.texSubImage2D(e.TEXTURE_2D,0,0,0,e.RGBA,e.UNSIGNED_BYTE,n)):Z(e,()=>e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,n)),Z(e,()=>e.bindTexture(e.TEXTURE_2D,null))}function QY(e,t,n,r){let i=e.createBuffer();Z(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,i));let a=16*t*n;return Z(e,()=>e.bufferData(e.PIXEL_PACK_BUFFER,a,e.STREAM_READ)),Z(e,()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,0)),Z(e,()=>e.bindBuffer(e.PIXEL_PACK_BUFFER,null)),i}function $Y(e,t,n){let r=e,i=new Float32Array(n);return r.bindBuffer(r.PIXEL_PACK_BUFFER,t),r.getBufferSubData(r.PIXEL_PACK_BUFFER,0,i),r.bindBuffer(r.PIXEL_PACK_BUFFER,null),i}function eX(e,t,n,r){let[i,a]=oq(t,n),o=new Uint8Array(sq(t*n,4));return Z(e,()=>e.readPixels(0,0,i,a,r.downloadTextureFormat,e.UNSIGNED_BYTE,o)),new Float32Array(o.buffer)}function tX(e,t,n,r,i,a,o,s){let c=e,l=new Float32Array(uq(a,o));return c.bindBuffer(c.PIXEL_PACK_BUFFER,t),c.getBufferSubData(c.PIXEL_PACK_BUFFER,0,l),c.bindBuffer(c.PIXEL_PACK_BUFFER,null),l}function nX(e,t,n){let r=new Float32Array(t*n*4);return Z(e,()=>e.readPixels(0,0,n,t,e.RGBA,e.FLOAT,r)),r}var rX=o((()=>{q(),pJ(),hq(),uJ()}));function iX(e){let t=0;for(;t<e.length&&e[t]();++t);return t-1}var aX,oX=o((()=>{q(),aq(),rX(),hq(),uJ(),aX=class{constructor(e){this.outputTexture=null,this.program=null,this.disposed=!1,this.itemsToPoll=[];let t=k().getNumber(`WEBGL_VERSION`);if(e==null?this.gl=eq(t):(this.gl=e,$K(t,e)),e=this.gl,k().getNumber(`WEBGL_VERSION`)===2){let t=e;this.createVertexArray=()=>Z(t,()=>t.createVertexArray()),this.bindVertexArray=e=>Z(t,()=>t.bindVertexArray(e)),this.deleteVertexArray=e=>Z(t,()=>t.deleteVertexArray(e)),this.getVertexArray=()=>Z(t,()=>t.getParameter(t.VERTEX_ARRAY_BINDING))}else if(e!=null){let t=e.getExtension(`OES_vertex_array_object`);if(t==null)throw Error(`All WebGL1 implementations are expected to offer OES_vertex_array_object.`);this.createVertexArray=()=>Z(e,()=>t.createVertexArrayOES()),this.bindVertexArray=n=>Z(e,()=>t.bindVertexArrayOES(n)),this.deleteVertexArray=n=>Z(e,()=>t.deleteVertexArrayOES(n)),this.getVertexArray=()=>Z(e,()=>e.getParameter(t.VERTEX_ARRAY_BINDING_OES))}let n=`WEBGL_color_buffer_float`,r=`EXT_color_buffer_half_float`;if(this.parallelCompilationExtension=this.gl.getExtension(`KHR_parallel_shader_compile`),k().getNumber(`WEBGL_VERSION`)===1){let e=`OES_texture_half_float`;if(this.textureFloatExtension=yq(this.gl,`OES_texture_float`),Zq(this.gl,e))this.textureHalfFloatExtension=yq(this.gl,e);else if(k().get(`WEBGL_FORCE_F16_TEXTURES`))throw Error(`GL context does not support half float textures, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.`);if(this.colorBufferFloatExtension=this.gl.getExtension(n),Zq(this.gl,r))this.colorBufferHalfFloatExtension=yq(this.gl,r);else if(k().get(`WEBGL_FORCE_F16_TEXTURES`))throw Error(`GL context does not support color renderable half floats, yet the environment flag WEBGL_FORCE_F16_TEXTURES is set to true.`)}else if(n=`EXT_color_buffer_float`,Zq(this.gl,n))this.colorBufferFloatExtension=this.gl.getExtension(n);else if(Zq(this.gl,r))this.colorBufferHalfFloatExtension=this.gl.getExtension(r);else throw Error(`GL context does not support color renderable floats`);this.vertexBuffer=IY(this.gl),this.indexBuffer=LY(this.gl),this.framebuffer=Aq(this.gl),this.textureConfig=dq(this.gl,this.textureHalfFloatExtension)}get debug(){return k().getBool(`DEBUG`)}dispose(){if(this.disposed)return;this.program!=null&&console.warn(`Disposing a GPGPUContext that still has a bound WebGLProgram. This is probably a resource leak, delete the program with GPGPUContext.deleteProgram before disposing.`),this.outputTexture!=null&&console.warn(`Disposing a GPGPUContext that still has a bound output matrix texture.  This is probably a resource leak, delete the output matrix texture with GPGPUContext.deleteMatrixTexture before disposing.`);let e=this.gl;Z(e,()=>e.finish()),Z(e,()=>e.bindFramebuffer(e.FRAMEBUFFER,null)),Z(e,()=>e.deleteFramebuffer(this.framebuffer)),Z(e,()=>e.bindBuffer(e.ARRAY_BUFFER,null)),Z(e,()=>e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null)),Z(e,()=>e.deleteBuffer(this.indexBuffer)),this.disposed=!0}createFloat32MatrixTexture(e,t){return this.throwIfDisposed(),BY(this.gl,e,t,this.textureConfig)}createFloat16MatrixTexture(e,t){return this.throwIfDisposed(),HY(this.gl,e,t,this.textureConfig)}createUnsignedBytesMatrixTexture(e,t){return this.throwIfDisposed(),WY(this.gl,e,t,this.textureConfig)}uploadPixelDataToTexture(e,t){this.throwIfDisposed(),ZY(this.gl,e,t)}uploadDenseMatrixToTexture(e,t,n,r){this.throwIfDisposed(),XY(this.gl,e,t,n,r,this.textureConfig)}createFloat16PackedMatrixTexture(e,t){return this.throwIfDisposed(),JY(this.gl,e,t,this.textureConfig)}createPackedMatrixTexture(e,t){return this.throwIfDisposed(),KY(this.gl,e,t,this.textureConfig)}deleteMatrixTexture(e){this.throwIfDisposed(),this.outputTexture===e&&(Lq(this.gl,this.framebuffer),this.outputTexture=null),Z(this.gl,()=>this.gl.deleteTexture(e))}downloadByteEncodedFloatMatrixFromOutputTexture(e,t,n){return this.downloadMatrixDriver(e,()=>eX(this.gl,t,n,this.textureConfig))}downloadPackedMatrixFromBuffer(e,t,n,r,i,a){return tX(this.gl,e,t,n,r,i,a,this.textureConfig)}downloadFloat32MatrixFromBuffer(e,t){return $Y(this.gl,e,t)}createBufferFromTexture(e,t,n){this.bindTextureToFrameBuffer(e);let r=QY(this.gl,t,n,this.textureConfig);return this.unbindTextureToFrameBuffer(),r}createAndWaitForFence(){let e=this.createFence(this.gl);return this.pollFence(e)}createFence(e){let t,n;if(k().getBool(`WEBGL_FENCE_API_ENABLED`)){let r=e,i=r.fenceSync(r.SYNC_GPU_COMMANDS_COMPLETE,0);e.flush(),n=()=>{let e=r.clientWaitSync(i,0,0);return e===r.ALREADY_SIGNALED||e===r.CONDITION_SATISFIED},t=i}else k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)>0?(t=this.beginQuery(),this.endQuery(),n=()=>this.isQueryAvailable(t,k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))):n=()=>!0;return{query:t,isFencePassed:n}}downloadMatrixFromPackedTexture(e,t,n){return this.downloadMatrixDriver(e,()=>nX(this.gl,t,n))}createProgram(e){this.throwIfDisposed();let t=this.gl;this.vertexShader??=FY(t);let n=Cq(t);Z(t,()=>t.attachShader(n,this.vertexShader)),Z(t,()=>t.attachShader(n,e)),wq(t,n);let r=Object.assign(n,{vao:this.createVertexArray()});return this.debug&&Tq(t,r),r}buildVao(e){this.setProgram(e),this.bindVertexArray(e.vao);let t=this.gl;Z(t,()=>t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.indexBuffer)),YY(t,e,this.vertexBuffer)}deleteProgram(e){this.throwIfDisposed(),e===this.program&&(this.program=null),e!=null&&(Z(this.gl,()=>this.gl.deleteProgram(e)),this.deleteVertexArray(e.vao))}setProgram(e){this.throwIfDisposed(),this.program=e,this.program!=null&&this.debug&&Tq(this.gl,this.program),Z(this.gl,()=>this.gl.useProgram(e))}getUniformLocation(e,t,n=!0){return this.throwIfDisposed(),n?Nq(this.gl,e,t):Pq(this.gl,e,t)}getAttributeLocation(e,t){return this.throwIfDisposed(),Z(this.gl,()=>this.gl.getAttribLocation(e,t))}getUniformLocationNoThrow(e,t){return this.throwIfDisposed(),this.gl.getUniformLocation(e,t)}setInputMatrixTexture(e,t,n){this.throwIfDisposed(),this.throwIfNoProgram(),Fq(this.gl,e,t,n)}setOutputMatrixTexture(e,t,n){this.setOutputMatrixTextureDriver(e,n,t)}setOutputPackedMatrixTexture(e,t,n){this.throwIfDisposed();let[r,i]=lq(t,n);this.setOutputMatrixTextureDriver(e,r,i)}setOutputMatrixWriteRegion(e,t,n,r){this.setOutputMatrixWriteRegionDriver(n,e,r,t)}setOutputPackedMatrixWriteRegion(e,t,n,r){throw Error(`setOutputPackedMatrixWriteRegion not implemented.`)}debugValidate(){this.program!=null&&Tq(this.gl,this.program),Rq(this.gl)}executeProgram(){this.throwIfDisposed(),this.throwIfNoProgram();let e=this.gl;if(this.debug){let e=this.getVertexArray();console.assert(e===this.program.vao,`VAO changed between setProgram and executeProgram!`),this.debugValidate()}Z(e,()=>e.drawElements(e.TRIANGLES,6,e.UNSIGNED_SHORT,0))}blockUntilAllProgramsCompleted(){this.throwIfDisposed(),Z(this.gl,()=>this.gl.finish())}getQueryTimerExtension(){return this.disjointQueryTimerExtension??=yq(this.gl,k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2?`EXT_disjoint_timer_query_webgl2`:`EXT_disjoint_timer_query`),this.disjointQueryTimerExtension}getQueryTimerExtensionWebGL2(){return this.getQueryTimerExtension()}getQueryTimerExtensionWebGL1(){return this.getQueryTimerExtension()}beginQuery(){if(k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2){let e=this.gl,t=this.getQueryTimerExtensionWebGL2(),n=e.createQuery();return e.beginQuery(t.TIME_ELAPSED_EXT,n),n}let e=this.getQueryTimerExtensionWebGL1(),t=e.createQueryEXT();return e.beginQueryEXT(e.TIME_ELAPSED_EXT,t),t}endQuery(){if(k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`)===2){let e=this.gl,t=this.getQueryTimerExtensionWebGL2();e.endQuery(t.TIME_ELAPSED_EXT);return}let e=this.getQueryTimerExtensionWebGL1();e.endQueryEXT(e.TIME_ELAPSED_EXT)}async waitForQueryAndGetTime(e){return await be(()=>this.disposed||this.isQueryAvailable(e,k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))),this.getQueryTime(e,k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION`))}getQueryTime(e,t){if(t===0)return null;if(t===2){let t=this.gl;return t.getQueryParameter(e,t.QUERY_RESULT)/1e6}else{let t=this.getQueryTimerExtensionWebGL1();return t.getQueryObjectEXT(e,t.QUERY_RESULT_EXT)/1e6}}isQueryAvailable(e,t){if(t===0)return!0;if(t===2){let t=this.gl,n=this.getQueryTimerExtensionWebGL2(),r=t.getQueryParameter(e,t.QUERY_RESULT_AVAILABLE);return this.disjoint??=this.gl.getParameter(n.GPU_DISJOINT_EXT),r&&!this.disjoint}else{let t=this.getQueryTimerExtensionWebGL1(),n=t.getQueryObjectEXT(e,t.QUERY_RESULT_AVAILABLE_EXT);return this.disjoint??=this.gl.getParameter(t.GPU_DISJOINT_EXT),n&&!this.disjoint}}pollFence(e){return new Promise(t=>{this.addItemToPoll(()=>e.isFencePassed(),()=>t())})}pollItems(){let e=iX(this.itemsToPoll.map(e=>e.isDoneFn));for(let t=0;t<=e;++t){let{resolveFn:e}=this.itemsToPoll[t];e()}this.itemsToPoll=this.itemsToPoll.slice(e+1)}addItemToPoll(e,t){if(this.itemsToPoll.push({isDoneFn:e,resolveFn:t}),this.itemsToPoll.length>1)return;let n;`setTimeoutCustom`in k().platform&&(n=k().platform.setTimeoutCustom.bind(k().platform)),be(()=>(this.pollItems(),this.itemsToPoll.length===0),()=>0,null,n)}bindTextureToFrameBuffer(e){this.throwIfDisposed(),Iq(this.gl,e,this.framebuffer),this.debug&&Rq(this.gl)}unbindTextureToFrameBuffer(){this.outputTexture==null?Lq(this.gl,this.framebuffer):(Iq(this.gl,this.outputTexture,this.framebuffer),this.debug&&Rq(this.gl))}downloadMatrixDriver(e,t){this.bindTextureToFrameBuffer(e);let n=t();return this.unbindTextureToFrameBuffer(),n}setOutputMatrixTextureDriver(e,t,n){this.throwIfDisposed();let r=this.gl;Iq(r,e,this.framebuffer),this.debug&&Rq(r),this.outputTexture=e,Z(r,()=>r.viewport(0,0,t,n)),Z(r,()=>r.scissor(0,0,t,n))}setOutputMatrixWriteRegionDriver(e,t,n,r){this.throwIfDisposed(),Z(this.gl,()=>this.gl.scissor(e,t,n,r))}throwIfDisposed(){if(this.disposed)throw Error(`Attempted to use disposed GPGPUContext.`)}throwIfNoProgram(){if(this.program==null)throw Error(`No GPU program is currently set.`)}}})),sX,cX,lX,uX,dX,fX,pX,mX,hX,gX,_X,vX,yX,bX,xX,SX,CX,wX,TX,EX,DX,OX,kX,AX,jX,MX,NX,PX,FX,IX,LX,RX,zX,BX,VX,HX,UX,WX,GX,KX,qX,JX,YX,XX,ZX,QX,$X,eZ,tZ,nZ=o((()=>{yre(),{addImpl:sX,bincountImpl:cX,bincountReduceImpl:lX,bitwiseAndImpl:uX,castImpl:dX,ceilImpl:fX,concatImpl:pX,equalImpl:mX,expImpl:hX,expm1Impl:gX,floorImpl:_X,gatherNdImpl:vX,gatherV2Impl:yX,greaterImpl:bX,greaterEqualImpl:xX,lessImpl:SX,lessEqualImpl:CX,linSpaceImpl:wX,logImpl:TX,maxImpl:EX,maximumImpl:DX,minimumImpl:OX,multiplyImpl:kX,negImpl:AX,notEqualImpl:jX,prodImpl:MX,raggedGatherImpl:NX,raggedRangeImpl:PX,raggedTensorToTensorImpl:FX,rangeImpl:IX,rsqrtImpl:LX,scatterImpl:RX,sigmoidImpl:zX,simpleAbsImpl:BX,sliceImpl:VX,sparseFillEmptyRowsImpl:HX,sparseReshapeImpl:UX,sparseSegmentReductionImpl:WX,sqrtImpl:GX,staticRegexReplaceImpl:KX,stridedSliceImpl:qX,stringNGramsImpl:JX,stringSplitImpl:YX,stringToHashBucketFastImpl:XX,subImpl:ZX,tileImpl:QX,topKImpl:$X,transposeImpl:eZ,uniqueImpl:tZ}=vre}));function rZ(e,t){return[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,t).map(t=>`${e}.${t}`)}function iZ(e,t){return t===1?[e]:rZ(e,t)}function aZ(e,t){if(e===1)return`rc`;let n=``;for(let r=0;r<e;r++)n+=t[r],r<e-1&&(n+=`,`);return n}var oZ=o((()=>{})),sZ,cZ=o((()=>{xY(),oZ(),mY(),sZ=class{constructor(e){if(this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.enableShapeUniforms=bY(this.outputShape.length),this.rank===0)this.userCode=`
        void main() {
          setOutput(vec4(getA(), 0., 0., 0.));
        }
      `;else{let e=iZ(`rc`,this.rank),t=aY(this.rank),n=this.getOutOfBoundsCondition(e),r=this.getSetup(e),i=this.getOutput(e);this.userCode=`
        void main() {
          ${t} rc = getOutputCoords();

          if(${n}) {
            setOutput(vec4(0));
          } else {
            ${r}

            setOutput(vec4(${i}));
          }
        }
      `}}getSourceCoordsArr(e){let t=[];for(let n=0;n<=1;n++)for(let r=0;r<=1;r++){let i=`${n===0?`r`:`rp1`}, ${r===0?`c`:`cp1`}`;for(let t=2;t<this.rank;t++)i=`${e[e.length-1-t]},`+i;t.push(i)}return t}getOutOfBoundsCondition(e){if(this.rank===1)return`rc > ${this.enableShapeUniforms?`outShape`:this.outputShape[0]}`;let t=``;for(let n=this.rank-2;n<this.rank;n++)t+=`${e[n]} >= ${this.enableShapeUniforms?`outShape[${n}]`:this.outputShape[n]}`,n<this.rank-1&&(t+=`||`);return t}getSetup(e){if(this.rank===1)return``;let t=e.slice(-2),n=this.enableShapeUniforms?`outShape[${this.rank} - 1]`:this.outputShape[this.rank-1],r=this.enableShapeUniforms?`outShape[${this.rank} - 2]`:this.outputShape[this.rank-2];return`
      int r = ${t[0]};
      int c = ${t[1]};
      int rp1 = r + 1;
      int cp1 = c + 1;

      bool cEdge = cp1 >= ${n};
      bool rEdge = rp1 >= ${r};
    `}getOutput(e){let t=this.getSourceCoordsArr(e);return this.rank===1?`getA(rc), (rc + 1 >= ${this.enableShapeUniforms?`outShape`:this.outputShape[0]} ? 0. : getA(rc + 1)), 0, 0`:`getA(${t[0]}),
            cEdge ? 0. : getA(${t[1]}),
            rEdge ? 0. : getA(${t[2]}),
            rEdge || cEdge ? 0. : getA(${t[3]})`}}}));function lZ(e,t){return`
    ivec3 inputCoordsFromReshapedOutCoords(int index) {
      ${t?_J([`r`,`c`,`d`],`inputShape`):mJ([`r`,`c`,`d`],e)}
      return ivec3(r, c, d);
    }
  `}var uZ,dZ=o((()=>{xY(),xJ(),uZ=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`inputShape`,type:`ivec3`}],this.outputShape=e,this.enableShapeUniforms=bY(this.outputShape.length);let n=``;for(let e=0;e<4;e++){let t=`thisRC = rc;`;e%2==1&&(t+=`thisRC.z += 1;`),e>1&&(t+=`thisRC.y += 1;`),n+=`
        ${t}
        ${e>0?`if(thisRC.y < rows && thisRC.z < cols){`:``}
          int flatIndex = getFlatIndex(thisRC);

          ivec3 inputRC = inputCoordsFromReshapedOutCoords(flatIndex);
          vec2 inputRCInnerDims = vec2(float(inputRC.y),float(inputRC.z));

          result[${e}] =
            getChannel(getA(inputRC.x, inputRC.y, inputRC.z), inputRCInnerDims);
        ${e>0?`}`:``}
      `}this.userCode=`
      ${lZ(t,this.enableShapeUniforms)}
      ${this.enableShapeUniforms?yJ():vJ(e)}

      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0.);

        ivec3 thisRC;
        int rows = ${this.enableShapeUniforms?`outShape[1]`:e[1]};
        int cols = ${this.enableShapeUniforms?`outShape[2]`:e[2]};

        ${n}

        setOutput(result);
      }
    `}}}));function fZ(e,t){let n=e;if(t===n.R32F)return 4;if(t===n.R16F)return 2;if(t===n.RGBA32F||t===e.RGBA)return 16;if(t===n.RGBA16F)return 8;if(t===n.RGBA8)return 4;throw Error(`Unknown internal format ${t}`)}function pZ(e,t,n,r,i){let a=mZ(t,r),o;if(i){let[t,n]=lq(e[0],e[1]);o=t*n}else{let[t,n]=oq(e[0],e[1]);o=t*n}let s=fZ(n,a);return o*s}function mZ(e,t){switch(e){case mq.PACKED_2X2_FLOAT32:return GY(t);case mq.PACKED_2X2_FLOAT16:return qY(t);case mq.UNPACKED_FLOAT32:return zY(t);case mq.UNPACKED_FLOAT16:return VY(t);case mq.PACKED_4X1_UNSIGNED_BYTE:return UY(t);default:throw Error(`Unknown physical texture type ${e}`)}}function hZ(e){return k().getBool(`WEBGL_RENDER_FLOAT32_ENABLED`)?e?mq.PACKED_2X2_FLOAT32:mq.UNPACKED_FLOAT32:e?mq.PACKED_2X2_FLOAT16:mq.UNPACKED_FLOAT16}function gZ(e,t){if(e===pq.UPLOAD)return mq.PACKED_2X2_FLOAT32;if(e===pq.RENDER||e==null)return hZ(t);if(e===pq.DOWNLOAD||e===pq.PIXELS)return mq.PACKED_4X1_UNSIGNED_BYTE;throw Error(`Unknown logical texture type ${e}`)}function _Z(e,t,n){return`${e[0]}_${e[1]}_${t}_${n}`}var vZ,yZ=o((()=>{q(),rX(),hq(),vZ=class{constructor(e){this.gpgpu=e,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0,this.freeTextures={},this.usedTextures={},this.logEnabled=!1}acquireTexture(e,t,n){let r=gZ(t,n),i=_Z(e,r,n);i in this.freeTextures||(this.freeTextures[i]=[]),i in this.usedTextures||(this.usedTextures[i]=[]);let a=pZ(e,r,this.gpgpu.gl,this.gpgpu.textureConfig,n);if(this.freeTextures[i].length>0){this.numFreeTextures--,this.numUsedTextures++,this._numBytesFree-=a,this.log();let e=this.freeTextures[i].pop();return this.usedTextures[i].push(e),e}let o;return r===mq.PACKED_2X2_FLOAT32?o=this.gpgpu.createPackedMatrixTexture(e[0],e[1]):r===mq.PACKED_2X2_FLOAT16?o=this.gpgpu.createFloat16PackedMatrixTexture(e[0],e[1]):r===mq.UNPACKED_FLOAT32?o=this.gpgpu.createFloat32MatrixTexture(e[0],e[1]):r===mq.UNPACKED_FLOAT16?o=this.gpgpu.createFloat16MatrixTexture(e[0],e[1]):r===mq.PACKED_4X1_UNSIGNED_BYTE&&(o=this.gpgpu.createUnsignedBytesMatrixTexture(e[0],e[1])),this.usedTextures[i].push(o),this.numUsedTextures++,this._numBytesAllocated+=a,this.log(),o}releaseTexture(e,t,n,r){if(this.freeTextures==null)return;let i=gZ(n,r),a=_Z(t,i,r);a in this.freeTextures||(this.freeTextures[a]=[]);let o=pZ(t,i,this.gpgpu.gl,this.gpgpu.textureConfig,r),s=k().getNumber(`WEBGL_DELETE_TEXTURE_THRESHOLD`);s!==-1&&this._numBytesAllocated>s?(this.gpgpu.deleteMatrixTexture(e.texture),this._numBytesAllocated-=o):(this.freeTextures[a].push(e),this.numFreeTextures++,this._numBytesFree+=o),this.numUsedTextures--;let c=this.usedTextures[a],l=c&&c.indexOf(e);if(l==null||l<0)throw Error(`Cannot release a texture that was never provided by this texture manager`);c[l]=c[c.length-1],c.pop(),this.log()}log(){if(!this.logEnabled)return;let e=this.numFreeTextures+this.numUsedTextures;console.log(`Free/Used`,`${this.numFreeTextures} / ${this.numUsedTextures}`,`(${e})`);let t=this._numBytesFree/this._numBytesAllocated;console.log(`Bytes allocated: ${this._numBytesAllocated}`),console.log(`Bytes unused: ${this._numBytesFree} (${Math.round(100*t)}%)`)}get numBytesAllocated(){return this._numBytesAllocated}get numBytesFree(){return this._numBytesFree}getNumUsedTextures(){return this.numUsedTextures}getNumFreeTextures(){return this.numFreeTextures}dispose(){if(this.freeTextures!=null){for(let e in this.freeTextures)this.freeTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});for(let e in this.usedTextures)this.usedTextures[e].forEach(e=>{this.gpgpu.deleteMatrixTexture(e.texture)});this.freeTextures=null,this.usedTextures=null,this.numUsedTextures=0,this.numFreeTextures=0,this._numBytesAllocated=0,this._numBytesFree=0}}}})),bZ,xZ,SZ,CZ,wZ,TZ,EZ,DZ,OZ,kZ=o((()=>{xY(),bZ=class{constructor(e,t){this.variableNames=[`A`],this.outputShape=e,this.enableShapeUniforms=bY(this.outputShape.length),this.userCode=`
      float unaryOperation(float x) {
        ${t}
      }

      void main() {
        float x = getAAtOutCoords();
        float y = unaryOperation(x);

        setOutput(y);
      }
    `}},xZ=`if (isnan(x)) return x;`,SZ=`return x;`,CZ=`return abs(x);`,wZ=`return (x >= 0.0) ? x : (exp(x) - 1.0);`,TZ=xZ+`
  return (x < 0.0) ? 0.0 : x;
`,EZ=xZ+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,DZ=`return x;`,OZ=`return 1.0 / (1.0 + exp(-1.0 * x));`})),AZ,jZ,MZ,NZ,PZ,FZ,IZ=o((()=>{xY(),AZ=`return x;`,jZ=`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`,MZ=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,NZ=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,PZ=`return 1.0 / (1.0 + exp(-1.0 * x));`,FZ=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.enableShapeUniforms=bY(this.outputShape.length),this.userCode=`
      vec4 unaryOperation(vec4 x) {
        ${t}
      }

      void main() {
        vec4 x = getAAtOutCoords();
        vec4 y = unaryOperation(x);

        setOutput(y);
      }
    `}}})),LZ,RZ=o((()=>{xY(),oZ(),mY(),LZ=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!1,this.outputShape=e,this.enableShapeUniforms=bY(this.outputShape.length);let t=e.length,n=iZ(`rc`,t),r=aY(t),i=aZ(t,n),a=n.slice(-2),o=t<=1?`rc`:`vec2(${a.join(`,`)})`;this.userCode=`
      void main() {
        ${r} rc = getOutputCoords();
        vec4 packedInput = getA(${i});

        setOutput(getChannel(packedInput, ${o}));
      }
    `}}}));function zZ(e){return e in GZ||(GZ[e]={}),GZ[e]}function BZ(){return k().global.screen==null?1024:k().global.screen.height*k().global.screen.width*window.devicePixelRatio*qZ/1024/1024}function VZ(e,t){if(t===`float32`||t===`complex64`)return e;if(t===`int32`||t===`bool`){let n=t===`int32`?new Int32Array(e.length):new Uint8Array(e.length);for(let t=0;t<n.length;++t)n[t]=Math.round(e[t]);return n}else throw Error(`Unknown dtype ${t}`)}var HZ,UZ,WZ,GZ,KZ,qZ,JZ,YZ=o((()=>{dJ(),q(),aq(),CY(),TY(),DY(),kY(),MY(),PY(),oX(),xY(),nZ(),cZ(),dZ(),hq(),yZ(),kZ(),IZ(),RZ(),uJ(),HZ=Fh,UZ=1e-7,WZ=1e-4,GZ={},KZ=k().getNumber(`CPU_HANDOFF_SIZE_THRESHOLD`),qZ=600,JZ=class e extends se{nextDataId(){return e.nextDataId++}constructor(e){if(super(),this.pendingRead=new WeakMap,this.pendingDisposal=new WeakSet,this.dataRefCount=new WeakMap,this.numBytesInGPU=0,this.uploadWaitMs=0,this.downloadWaitMs=0,this.lastGlFlushTime=0,this.warnedAboutMemory=!1,this.pendingDeletes=0,this.disposed=!1,!k().getBool(`HAS_WEBGL`))throw Error(`WebGL is not supported on this device`);let t;e==null?(t=new aX(eq(k().getNumber(`WEBGL_VERSION`))),this.binaryCache=zZ(k().getNumber(`WEBGL_VERSION`)),this.gpgpuCreatedLocally=!0):(t=e instanceof aX?e:new aX(eq(k().getNumber(`WEBGL_VERSION`),e)),this.binaryCache={},this.gpgpuCreatedLocally=!1),this.gpgpu=t,this.canvas=this.gpgpu.gl.canvas,this.textureManager=new vZ(this.gpgpu),this.numMBBeforeWarning=BZ(),this.texData=new oe(this,qa())}numDataIds(){return this.texData.numDataIds()-this.pendingDeletes}writeTexture(e,t,n,r,i,a){let o=this.makeTensorInfo(t,n),s=this.texData.get(o.dataId);s.isPacked=!1,s.texture={texture:e,texShape:[r,i]},s.texShape=[r,i];let c=new jY(Wq(t),!1,a),l=this.runWebGLProgram(c,[o],n,[[r,i]]);return l.shape=t,s.texture=null,this.disposeIntermediateTensorInfo(o),l.dataId}write(e,t,n){if((k().getBool(`WEBGL_CHECK_NUMERICAL_PROBLEMS`)||k().getBool(`DEBUG`))&&this.checkNumericalProblems(e),n===`complex64`&&e!=null)throw Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);let r={id:this.nextDataId()};return this.texData.set(r,{shape:t,dtype:n,values:e,usage:pq.UPLOAD,refCount:1}),r}refCount(e){return this.texData.has(e)?this.texData.get(e).refCount:0}incRef(e){let t=this.texData.get(e);t.refCount++}decRef(e){if(this.texData.has(e)){let t=this.texData.get(e);t.refCount--}}move(e,t,n,r,i){if(k().getBool(`DEBUG`)&&this.checkNumericalProblems(t),r===`complex64`)throw Error(`Cannot write to a complex64 dtype. Please use tf.complex(real, imag).`);this.texData.set(e,{shape:n,dtype:r,values:t,usage:pq.UPLOAD,refCount:i})}disposeIntermediateTensorInfo(e){this.disposeData(e.dataId)}readSync(e){let{values:t,dtype:n,complexTensorInfos:r,slice:i,shape:a,isPacked:o}=this.texData.get(e);if(i!=null){let t;t=o?new FZ(a,DZ):new bZ(a,DZ);let r=this.runWebGLProgram(t,[{dataId:e,shape:a,dtype:n}],n),i=this.readSync(r.dataId);return this.disposeIntermediateTensorInfo(r),i}if(t!=null)return this.convertAndCacheOnCPU(e);if(n===`string`)return t;let s=this.activeTimers!=null,c;s&&(c=Ni());let l;return l=n===`complex64`?vy(this.readSync(r.real.dataId),this.readSync(r.imag.dataId)):this.getValuesFromTexture(e),s&&(this.downloadWaitMs+=Ni()-c),this.convertAndCacheOnCPU(e,l)}async read(e){if(this.pendingRead.has(e)){let t=this.pendingRead.get(e);return new Promise(e=>t.push(e))}let{values:t,shape:n,slice:r,dtype:i,complexTensorInfos:a,isPacked:o}=this.texData.get(e);if(r!=null){let t;t=o?new FZ(n,DZ):new bZ(n,DZ);let r=this.runWebGLProgram(t,[{dataId:e,shape:n,dtype:i}],i),a=this.read(r.dataId);return this.disposeIntermediateTensorInfo(r),a}if(t!=null)return this.convertAndCacheOnCPU(e);if(k().getBool(`DEBUG`)&&!k().getBool(`WEBGL_DOWNLOAD_FLOAT_ENABLED`)&&k().getNumber(`WEBGL_VERSION`)===2)throw Error(`tensor.data() with WEBGL_DOWNLOAD_FLOAT_ENABLED=false and WEBGL_VERSION=2 not yet supported.`);let s=null,c;if(i!==`complex64`&&k().get(`WEBGL_BUFFER_SUPPORTED`)){c=this.decode(e);let t=this.texData.get(c.dataId);s=this.gpgpu.createBufferFromTexture(t.texture.texture,...cq(n))}this.pendingRead.set(e,[]),i!==`complex64`&&await this.gpgpu.createAndWaitForFence();let l;if(i===`complex64`){let e=await Promise.all([this.read(a.real.dataId),this.read(a.imag.dataId)]),t=e[0],n=e[1];l=vy(t,n)}else if(s==null)l=this.getValuesFromTexture(e);else{let e=D(n);l=this.gpgpu.downloadFloat32MatrixFromBuffer(s,e)}if(c!=null&&this.disposeIntermediateTensorInfo(c),s!=null){let e=this.gpgpu.gl;Z(e,()=>e.deleteBuffer(s))}let u=this.convertAndCacheOnCPU(e,l),d=this.pendingRead.get(e);return this.pendingRead.delete(e),d.forEach(e=>e(u)),this.pendingDisposal.has(e)&&(this.pendingDisposal.delete(e),this.disposeData(e)&&qa().removeDataId(e,this),this.pendingDeletes--),u}readToGPU(e,t={}){let{values:n,shape:r,slice:i,dtype:a,isPacked:o,texture:s}=this.texData.get(e);if(a===`complex64`)throw Error(`Does not support reading texture for complex64 dtype.`);if(i!=null){let n;n=o?new FZ(r,DZ):new bZ(r,DZ);let i=this.runWebGLProgram(n,[{dataId:e,shape:r,dtype:a}],a),s=this.readToGPU(i,t);return this.disposeIntermediateTensorInfo(i),s}if(s==null)throw Error(n==null?`There is no data on GPU or CPU.`:`Data is not on GPU but on CPU.`);let c=this.decode(e,t.customTexShape),l=qa().makeTensorFromTensorInfo(c),u=this.texData.get(c.dataId);return Object.assign({tensorRef:l},u.texture)}bufferSync(e){let t=this.readSync(e.dataId);if(e.dtype===`string`)try{let n=t.map(e=>Fi(e));return Jo(e.shape,e.dtype,n)}catch{throw Error(`Failed to decode encoded string bytes into utf-8`)}return Jo(e.shape,e.dtype,t)}checkNumericalProblems(e){if(e!=null)for(let t=0;t<e.length;t++){let n=e[t];if(!_q(n))throw k().getBool(`WEBGL_RENDER_FLOAT32_CAPABLE`)?Error(`The value ${n} cannot be represented with your current settings. Consider enabling float32 rendering: 'tf.env().set('WEBGL_RENDER_FLOAT32_ENABLED', true);'`):Error(`The value ${n} cannot be represented on this device.`)}}getValuesFromTexture(e){let{shape:t,dtype:n,isPacked:r}=this.texData.get(e),i=D(t);if(k().getBool(`WEBGL_DOWNLOAD_FLOAT_ENABLED`)){let n=this.decode(e),r=this.texData.get(n.dataId),a=this.gpgpu.downloadMatrixFromPackedTexture(r.texture.texture,...cq(t)).subarray(0,i);return this.disposeIntermediateTensorInfo(n),a}let a=k().getBool(`WEBGL_PACK`)&&r===!0,o=a?Wq(t):t,s=a?new OY(o):new EY(o),c=this.runWebGLProgram(s,[{shape:o,dtype:n,dataId:e}],`float32`),l=this.texData.get(c.dataId),u=this.gpgpu.downloadByteEncodedFloatMatrixFromOutputTexture(l.texture.texture,l.texShape[0],l.texShape[1]).subarray(0,i);return this.disposeIntermediateTensorInfo(c),u}timerAvailable(){return k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0}time(e){let t=this.activeTimers,n=[],r=!1;this.programTimersStack==null?(this.programTimersStack=n,r=!0):this.activeTimers.push(n),this.activeTimers=n,e();let i=Li(this.activeTimers.map(e=>e.query)).filter(e=>e!=null),a=Li(this.activeTimers.map(e=>e.name)).filter(e=>e!=null);this.activeTimers=t,r&&(this.programTimersStack=null);let o={uploadWaitMs:this.uploadWaitMs,downloadWaitMs:this.downloadWaitMs,kernelMs:null,wallMs:null};return(async()=>{if(k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0){let e=await Promise.all(i);o.kernelMs=pe(e),o.getExtraProfileInfo=()=>e.map((e,t)=>({name:a[t],ms:e})).map(e=>`${e.name}: ${e.ms}`).join(`, `)}else o.kernelMs={error:`WebGL query timers are not supported in this environment.`};return this.uploadWaitMs=0,this.downloadWaitMs=0,o})()}memory(){return{unreliable:!1,numBytesInGPU:this.numBytesInGPU,numBytesInGPUAllocated:this.textureManager.numBytesAllocated,numBytesInGPUFree:this.textureManager.numBytesFree}}startTimer(){return k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0?this.gpgpu.beginQuery():{startMs:Ni(),endMs:null}}endTimer(e){return k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0?(this.gpgpu.endQuery(),e):(e.endMs=Ni(),e)}async getQueryTime(e){if(k().getNumber(`WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE`)>0)return this.gpgpu.waitForQueryAndGetTime(e);let t=e;return t.endMs-t.startMs}disposeData(e,t=!1){if(this.pendingDisposal.has(e))return!1;if(!this.texData.has(e))return!0;if(t?this.texData.get(e).refCount=0:this.texData.get(e).refCount--,!t&&this.texData.get(e).refCount>0)return!1;if(this.pendingRead.has(e))return this.pendingDisposal.add(e),this.pendingDeletes++,!1;this.releaseGPUData(e);let{complexTensorInfos:n}=this.texData.get(e);return n!=null&&(this.disposeData(n.real.dataId,t),this.disposeData(n.imag.dataId,t)),this.texData.delete(e),!0}releaseGPUData(e){let{texture:t,dtype:n,texShape:r,usage:i,isPacked:a,slice:o}=this.texData.get(e),s=o&&o.origDataId||e,c=this.dataRefCount.get(s);c>1?this.dataRefCount.set(s,c-1):(this.dataRefCount.delete(s),t!=null&&(this.numBytesInGPU-=this.computeBytes(r,n),this.textureManager.releaseTexture(t,r,i,a)));let l=this.texData.get(e);l.texture=null,l.texShape=null,l.isPacked=!1,l.slice=null}getTexture(e){return this.uploadToGPU(e),this.texData.get(e).texture.texture}getDataInfo(e){return this.texData.get(e)}shouldExecuteOnCPU(e,t=KZ){return k().getBool(`WEBGL_CPU_FORWARD`)&&e.every(e=>this.texData.get(e.dataId).texture==null&&D(e.shape)<t)}getGPGPUContext(){return this.gpgpu}where(e){Zr(`tf.where() in webgl locks the UI thread. Call tf.whereAsync() instead`);let t=e.dataSync();return HZ(e.shape,t)}packedUnaryOp(e,t,n){let r=new FZ(e.shape,t),i=this.compileAndRun(r,[e],n);return qa().makeTensorFromTensorInfo(i)}abs(e){if(this.shouldExecuteOnCPU([e])&&e.dtype!==`complex64`){let t=BX(this.texData.get(e.dataId).values);return this.makeOutput(e.shape,e.dtype,t)}if(k().getBool(`WEBGL_PACK_UNARY_OPERATIONS`))return this.packedUnaryOp(e,CZ,e.dtype);let t=new bZ(e.shape,CZ),n=this.compileAndRun(t,[e]);return qa().makeTensorFromTensorInfo(n)}makeTensorInfo(e,t,n){let r;if(t===`string`&&n!=null&&n.length>0&&ke(n[0])){let i=n.map(e=>Pi(e));r=this.write(i,e,t)}else r=this.write(n,e,t);return this.texData.get(r).usage=null,{dataId:r,shape:e,dtype:t}}makeOutput(e,t,n){return qa().makeTensorFromTensorInfo(this.makeTensorInfo(e,t,n),this)}unpackTensor(e){let t=new LZ(e.shape);return this.runWebGLProgram(t,[e],e.dtype)}packTensor(e){let t=new sZ(e.shape);return this.runWebGLProgram(t,[e],e.dtype,null,!0)}packedReshape(e,t){let n=[Hq(e.shape),...Uq(e.shape)],r={dtype:e.dtype,shape:n,dataId:e.dataId},i=new uZ([Hq(t),...Uq(t)],n),a=[n],o=this.runWebGLProgram(i,[r],e.dtype,a,!0);return{dataId:o.dataId,shape:t,dtype:o.dtype}}decode(e,t){let{isPacked:n,shape:r,dtype:i}=this.texData.get(e);t!=null&&E(D(r)<=t[0]*t[1]*4,()=>`customTexShape is too small. Row * Column * 4 should be equal or larger than the size of the tensor data.`);let a=Wq(r),o;o=n?new wY(a):new SY(a);let s=[t??cq(a)];return{dtype:i,shape:r,dataId:this.runWebGLProgram(o,[{shape:a,dtype:i,dataId:e}],i,s,!0,t).dataId}}runWebGLProgram(e,t,n,r,i=!1,a){let o=this.makeTensorInfo(e.outputShape,n),s=this.texData.get(o.dataId);if(e.packedOutput&&(s.isPacked=!0),e.outPackingScheme===fq.DENSE&&(s.texShape=(a??cq(e.outputShape)).map(e=>e*2)),e.outTexUsage!=null&&(s.usage=e.outTexUsage),D(o.shape)===0)return s.values=we(o.dtype,0),o;let c=[],l=t.map(t=>{if(t.dtype===`complex64`)throw Error(`GPGPUProgram does not support complex64 input. For complex64 dtypes, please separate the program into real and imaginary parts.`);let n=this.texData.get(t.dataId);if(n.texture==null){if(!e.packedInputs&&D(t.shape)<=k().getNumber(`WEBGL_SIZE_UPLOAD_UNIFORM`))return{shape:t.shape,texData:null,isUniform:!0,uniformValues:n.values};e.packedInputs&&(n.isPacked=!0,n.shape=t.shape)}if(this.uploadToGPU(t.dataId),!!n.isPacked!=!!e.packedInputs)t=n.isPacked?this.unpackTensor(t):this.packTensor(t),c.push(t),n=this.texData.get(t.dataId);else if(n.isPacked&&!qq(n.shape,t.shape)){let e=t,r=t.shape;t.shape=n.shape,t=this.packedReshape(t,r),c.push(t),n=this.texData.get(t.dataId),e.shape=r}return{shape:t.shape,texData:n,isUniform:!1}});this.uploadToGPU(o.dataId);let u={shape:o.shape,texData:s,isUniform:!1},d=yY(e,l,u),f=this.getAndSaveBinary(d,()=>hY(this.gpgpu,e,l,u)),p=this.activeTimers!=null,m;p&&(m=this.startTimer()),k().get(`ENGINE_COMPILE_ONLY`)||vY(this.gpgpu,f,l,u,r),c.forEach(e=>this.disposeIntermediateTensorInfo(e)),p&&(m=this.endTimer(m),this.activeTimers.push({name:e.constructor.name,query:this.getQueryTime(m)}));let h=k().getNumber(`WEBGL_FLUSH_THRESHOLD`);if(h>0){let e=Ni();e-this.lastGlFlushTime>h&&(this.gpgpu.gl.flush(),this.lastGlFlushTime=e)}if(!k().getBool(`WEBGL_LAZILY_UNPACK`)&&s.isPacked&&i===!1){let e=this.unpackTensor(o);return this.disposeIntermediateTensorInfo(o),e}return o}compileAndRun(e,t,n,r,i=!1){return n||=t[0].dtype,this.runWebGLProgram(e,t,n,r,i)}getAndSaveBinary(e,t){return e in this.binaryCache||(this.binaryCache[e]=t()),this.binaryCache[e]}getTextureManager(){return this.textureManager}dispose(){this.disposed||=(k().getBool(`IS_TEST`)||Object.keys(this.binaryCache).forEach(e=>{this.gpgpu.deleteProgram(this.binaryCache[e].webGLProgram),delete this.binaryCache[e]}),this.textureManager.dispose(),this.canvas!=null&&typeof HTMLCanvasElement<`u`&&this.canvas instanceof HTMLCanvasElement?this.canvas.remove():this.canvas=null,this.gpgpuCreatedLocally&&(this.gpgpu.program=null,this.gpgpu.dispose()),!0)}floatPrecision(){return this.floatPrecisionValue??=B(()=>{if(!k().get(`WEBGL_RENDER_FLOAT32_ENABLED`)){let e=k().getBool(`DEBUG`);k().set(`DEBUG`,!1);let t=this.abs(Mu(1e-8)).dataSync()[0];if(k().set(`DEBUG`,e),t>0)return 32}return 16}),this.floatPrecisionValue}epsilon(){return this.floatPrecision()===32?UZ:WZ}uploadToGPU(e){let t=this.texData.get(e),{shape:n,dtype:r,values:i,texture:a,usage:o,isPacked:s}=t;if(a!=null)return;let c=this.activeTimers!=null,l;c&&(l=Ni());let u=t.texShape;if(u??(u=Gq(n,s),t.texShape=u),i!=null){let e=Wq(n),a,o=u[1],d=u[0],f=i instanceof Uint8Array||i instanceof Uint8ClampedArray;(s||!f)&&([o,d]=lq(u[0],u[1])),a=s?new NY(e,f):new jY(e,f);let p=f?[d,o]:u,m=this.makeTensorInfo(p,r),h=this.texData.get(m.dataId);f?h.usage=pq.PIXELS:h.usage=pq.UPLOAD,h.texShape=p,this.gpgpu.uploadDenseMatrixToTexture(this.getTexture(m.dataId),o,d,i);let g=[[d,o]],_=this.runWebGLProgram(a,[m],r,g,!0),v=this.texData.get(_.dataId);t.texShape=v.texShape,t.isPacked=v.isPacked,t.usage=v.usage,k().get(`ENGINE_COMPILE_ONLY`)?this.disposeData(_.dataId):(t.texture=v.texture,t.values=null,this.texData.delete(_.dataId)),this.disposeIntermediateTensorInfo(m),c&&(this.uploadWaitMs+=Ni()-l)}else t.texture=this.acquireTexture(u,o,r,s)}convertAndCacheOnCPU(e,t){let n=this.texData.get(e),{dtype:r}=n;return t!=null&&(n.values=VZ(t,r)),n.values}acquireTexture(e,t,n,r){if(this.numBytesInGPU+=this.computeBytes(e,n),!this.warnedAboutMemory&&this.numBytesInGPU>this.numMBBeforeWarning*1024*1024){let e=(this.numBytesInGPU/1024/1024).toFixed(2);this.warnedAboutMemory=!0,console.warn(`High memory usage in GPU: ${e} MB, most likely due to a memory leak`)}return this.textureManager.acquireTexture(e,t,r)}computeBytes(e,t){return e[0]*e[1]*Oe(t)}checkCompileCompletion(){for(let[,e]of Object.entries(this.binaryCache))this.checkCompletion_(e)}async checkCompileCompletionAsync(){let e=[];if(this.gpgpu.parallelCompilationExtension){for(let[,t]of Object.entries(this.binaryCache))e.push(this.checkCompletionAsync_(t));return Promise.all(e)}else{for(let[,t]of Object.entries(this.binaryCache)){let n=new Promise(e=>{try{this.checkCompletion_(t),e(!0)}catch(e){throw e}});e.push(n)}return Promise.all(e)}}async checkCompletionAsync_(e){return this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.parallelCompilationExtension.COMPLETION_STATUS_KHR)?this.checkCompletion_(e):(await Wv(),this.checkCompletionAsync_(e))}checkCompletion_(e){if(this.gpgpu.gl.getProgramParameter(e.webGLProgram,this.gpgpu.gl.LINK_STATUS)===!1)throw console.log(this.gpgpu.gl.getProgramInfoLog(e.webGLProgram)),this.gpgpu.gl.getShaderParameter(e.fragmentShader,this.gpgpu.gl.COMPILE_STATUS)===!1?(Sq(e.source,this.gpgpu.gl.getShaderInfoLog(e.fragmentShader)),Error(`Failed to compile fragment shader.`)):Error(`Failed to link vertex and fragment shaders.`);return!0}getUniformLocations(){for(let e of Object.values(this.binaryCache)){this.gpgpu.buildVao(e.webGLProgram);let{variablesLocations:t,customUniformLocations:n,infLoc:r,nanLoc:i,outShapeLocation:a,outShapeStridesLocation:o,outTexShapeLocation:s}=gY(this.gpgpu,e.program,e.webGLProgram);e.variablesLocations=t,e.customUniformLocations=n,e.infLoc=r,e.nanLoc=i,e.outShapeLocation=a,e.outShapeStridesLocation=o,e.outTexShapeLocation=s}}createTensorFromGPUData(e,t,n){e.channels=e.channels||`RGBA`;let{texture:r,height:i,width:a,channels:o}=e,s=qa().backend;if(!s.gpgpu.gl.isTexture(r))throw Error(`The texture is invalid. Also, please make sure the texture and the TFJS WebGL backend are using the same canvas. If you want to use your own custom canvas, you have to create and use the custom TFJS WebGL backend created from the canvas through 'new tf.MathBackendWebGL(customCanvas)'.`);let c=s.writeTexture(r,t,n,i,a,o);return qa().makeTensorFromDataId(c,t,n,s)}},JZ.nextDataId=0})),XZ,ZZ=o((()=>{XZ=`4.22.0`})),QZ=o((()=>{q(),YZ(),aq(),oX()})),$Z=o((()=>{q(),YZ(),ZZ(),QZ(),Da()&&Za(`webgl`,()=>new JZ,2)})),eQ,tQ,nQ=o((()=>{q(),xY(),eQ=`
  if (isnan(a)) return a;
  if (isnan(b)) return b;
`,tQ=class{constructor(e,t,n){this.variableNames=[`A`,`B`],this.outputShape=$l(t,n),this.enableShapeUniforms=bY(this.outputShape.length),this.userCode=`
      float binaryOperation(float a, float b) {
        ${e}
      }

      void main() {
        float a = getAAtOutCoords();
        float b = getBAtOutCoords();
        setOutput(binaryOperation(a, b));
      }
    `}}})),rQ,iQ,aQ=o((()=>{q(),xY(),oZ(),mY(),rQ=`
  result.r = isNaN.r ? NAN : result.r;
  result.g = isNaN.g ? NAN : result.g;
  result.b = isNaN.b ? NAN : result.b;
  result.a = isNaN.a ? NAN : result.a;
`,iQ=class{constructor(e,t,n,r=!1){this.variableNames=[`A`,`B`],this.supportsBroadcasting=!0,this.packedInputs=!0,this.packedOutput=!0,this.outputShape=$l(t,n);let i=this.outputShape.length;this.enableShapeUniforms=bY(i);let a=``;if(r)if(i===0||D(this.outputShape)===1)a=`
          result.y = 0.;
          result.z = 0.;
          result.w = 0.;
        `;else if(a=`
          ${aY(i)} coords = getOutputCoords();
        `,i===1)this.enableShapeUniforms?a+=`
            result.y = (coords + 1) >= outShape ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `:a+=`
            result.y = (coords + 1) >= ${this.outputShape[0]} ? 0. : result.y;
            result.z = 0.;
            result.w = 0.;
          `;else{let e=iZ(`coords`,i);this.enableShapeUniforms?a+=`
            bool nextRowOutOfBounds =
              (${e[i-2]} + 1) >= outShape[${i} - 2];
            bool nextColOutOfBounds =
              (${e[i-1]} + 1) >= outShape[${i} - 1];
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `:a+=`
            bool nextRowOutOfBounds =
              (${e[i-2]} + 1) >= ${this.outputShape[i-2]};
            bool nextColOutOfBounds =
              (${e[i-1]} + 1) >= ${this.outputShape[i-1]};
            result.y = nextColOutOfBounds ? 0. : result.y;
            result.z = nextRowOutOfBounds ? 0. : result.z;
            result.w = nextColOutOfBounds || nextRowOutOfBounds ? 0. : result.w;
          `}this.userCode=`
      vec4 binaryOperation(vec4 a, vec4 b) {
        ${e}
      }

      void main() {
        vec4 a = getAAtOutCoords();
        vec4 b = getBAtOutCoords();

        vec4 result = binaryOperation(a, b);
        ${a}

        setOutput(result);
      }
    `}}}));function oQ(e){let{inputs:t,backend:n}=e,{x:r}=t;return n.incRef(r.dataId),{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}var sQ,cQ=o((()=>{q(),sQ={kernelName:dn,backendName:`webgl`,kernelFunc:oQ}}));function lQ(e){let{inputs:t,backend:n}=e,{real:r,imag:i}=t,a=n.makeTensorInfo(r.shape,`complex64`),o=n.texData.get(a.dataId);return o.complexTensorInfos={real:oQ({inputs:{x:r},backend:n}),imag:oQ({inputs:{x:i},backend:n})},a}var uQ,dQ=o((()=>{q(),cQ(),uQ={kernelName:Et,backendName:`webgl`,kernelFunc:lQ}}));function fQ(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{alpha:a}=r,o=n.makeTensorInfo([],`float32`,Ai(a,`float32`)),s=k().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new iQ(mQ,i.shape,o.shape):new tQ(pQ,i.shape,o.shape),c=n.runWebGLProgram(s,[i,o],`float32`);return n.disposeIntermediateTensorInfo(o),c}var pQ,mQ,hQ,gQ=o((()=>{q(),nQ(),aQ(),pQ=`return (a < 0.) ? b * a : a;`,mQ=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,hQ={kernelName:_n,backendName:`webgl`,kernelFunc:fQ}}));function _Q(e){let{inputs:t,backend:n}=e,{x:r,alpha:i}=t,a=k().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new iQ(yQ,r.shape,i.shape):new tQ(vQ,r.shape,i.shape);return n.runWebGLProgram(a,[r,i],`float32`)}var vQ,yQ,bQ,xQ=o((()=>{q(),nQ(),aQ(),vQ=`return (a < 0.) ? b * a : a;`,yQ=`
  vec4 aLessThanZero = vec4(lessThan(a, vec4(0.)));
  return (aLessThanZero * (b * a)) + ((vec4(1.0) - aLessThanZero) * a);
`,bQ={kernelName:Kn,backendName:`webgl`,kernelFunc:_Q}}));function SQ({opSnippet:e,packedOpSnippet:t,cpuKernelImpl:n,dtype:r}){return({inputs:i,backend:a})=>{let{x:o}=i,s=a,c=r||o.dtype;if(s.shouldExecuteOnCPU([o])&&n!=null){let e=n(s.texData.get(o.dataId).values,c);return s.makeTensorInfo(o.shape,c,e)}let l=k().getBool(`WEBGL_PACK_UNARY_OPERATIONS`)&&t!=null,u;return u=l?new FZ(o.shape,t):new bZ(o.shape,e),s.runWebGLProgram(u,[o],c)}}function CQ({opSnippet:e,packedOpSnippet:t,checkOutOfBounds:n=!1,supportsComplex:r=!1,cpuKernelImpl:i,dtype:a}){return({inputs:o,backend:s})=>{let{a:c,b:l}=o,u=s;if(r&&c.dtype===`complex64`){let t=u.texData.get(c.dataId),n=u.texData.get(l.dataId),[r,i]=[[t.complexTensorInfos.real,n.complexTensorInfos.real],[t.complexTensorInfos.imag,n.complexTensorInfos.imag]].map(t=>{let[n,r]=t,i={dataId:n.dataId,dtype:n.dtype,shape:c.shape},a={dataId:r.dataId,dtype:r.dtype,shape:l.shape},o=new tQ(e,c.shape,l.shape);return u.runWebGLProgram(o,[i,a],ra(n.dtype,r.dtype))}),a=lQ({inputs:{real:r,imag:i},backend:u});return u.disposeIntermediateTensorInfo(r),u.disposeIntermediateTensorInfo(i),a}let d=a||ra(c.dtype,l.dtype);if((c.dtype===`string`||l.dtype===`string`||u.shouldExecuteOnCPU([c,l]))&&i!=null){let e=u.texData.get(c.dataId).values,t=u.texData.get(l.dataId).values,n=c.dtype===`string`?rb(e):e,r=c.dtype===`string`?rb(t):t,[a,o]=i(c.shape,l.shape,n,r,d),s=u.makeTensorInfo(o,d),f=u.texData.get(s.dataId);return f.values=a,s}let f=k().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)&&t!=null,p;return p=f?new iQ(t,c.shape,l.shape,n):new tQ(e,c.shape,l.shape),u.runWebGLProgram(p,[c,l],d)}}function wQ(e,t=!1){if(e===`linear`)return t?AZ:SZ;if(e===`relu`)return t?MZ:TZ;if(e===`elu`)return t?jZ:wZ;if(e===`relu6`)return t?NZ:EZ;if(e===`prelu`)return t?yQ:vQ;if(e===`leakyrelu`)return t?mQ:pQ;if(e===`sigmoid`)return t?PZ:OZ;throw Error(`Activation ${e} has not been implemented for the WebGL backend.`)}var TQ,EQ=o((()=>{q(),nQ(),aQ(),dQ(),gQ(),xQ(),kZ(),IZ(),TQ=`if (isnan(x)) return x;`})),DQ,OQ=o((()=>{xY(),DQ=class{constructor(e,t,n,r=!1,i=!1,a=!1,o=null,s=!1,c=!1){this.variableNames=[`matrixA`,`matrixB`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=n,this.enableShapeUniforms=bY(this.outputShape.length);let l=r?e[1]:e[2],u=Math.ceil(l/2),d=r?`i * 2, rc.y`:`rc.y, i * 2`,f=i?`rc.z, i * 2`:`i * 2, rc.z`,p=r?[`a.xxyy`,`a.zzww`]:[`a.xxzz`,`a.yyww`],m=i?[`b.xzxz`,`b.ywyw`]:[`b.xyxy`,`b.zwzw`],h=``,g=``;o&&(h=s?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${o}
        }`:c?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${o}
        }`:`vec4 activation(vec4 x) {
          ${o}
        }`,g=`result = activation(result);`);let _=a?`result += getBiasAtOutCoords();`:``;a&&this.variableNames.push(`bias`),s&&this.variableNames.push(`preluActivationWeights`),c&&this.variableNames.push(`leakyreluAlpha`);let v=`rc.x`,y=`rc.x`;e[0]<t[0]?v=`imod(rc.x, ${e[0]})`:t[0]<e[0]&&(y=`imod(rc.x, ${t[0]})`),this.userCode=`
      ${h}
      // Don't use uniform for sharedDimensionPacked for performance.
      const float sharedDimension = ${u}.0;

      vec4 dot2x2ARowBCol(ivec3 rc) {
        vec4 result = vec4(0);
        int batchA = ${v};
        int batchB = ${y};
        for (int i = 0; i < ${u}; i++) {
          vec4 a = getMatrixA(batchA, ${d});
          vec4 b = getMatrixB(batchB, ${f});

          // These swizzled products need to be separately added.
          // See: https://github.com/tensorflow/tfjs/issues/1735
          result += (${p[0]} * ${m[0]});
          result += (${p[1]} * ${m[1]});
        }
        return result;
      }

      void main() {
        ivec3 rc = getOutputCoords();
        vec4 result = dot2x2ARowBCol(rc);

        ${_}

        ${g}

        setOutput(result);
      }
    `}}})),kQ,AQ,jQ=o((()=>{q(),kQ={REAL:`return areal * breal - aimag * bimag;`,IMAG:`return areal * bimag + aimag * breal;`},AQ=class{constructor(e,t,n){this.variableNames=[`AReal`,`AImag`,`BReal`,`BImag`],this.outputShape=$l(t,n),this.userCode=`
      float binaryOpComplex(
          float areal, float aimag, float breal, float bimag) {
        ${e}
      }

      void main() {
        float areal = getARealAtOutCoords();
        float aimag = getAImagAtOutCoords();
        float breal = getBRealAtOutCoords();
        float bimag = getBImagAtOutCoords();
        setOutput(binaryOpComplex(areal, aimag, breal, bimag));
      }
    `}}}));function MQ(e){let{inputs:t,backend:n}=e,{a:r,b:i}=t,a=ra(r.dtype,i.dtype);if(r.dtype===`complex64`){let e=n.texData.get(r.dataId),t=n.texData.get(i.dataId),a=new AQ(kQ.REAL,r.shape,i.shape),o=new AQ(kQ.IMAG,r.shape,i.shape),s=[{dataId:e.complexTensorInfos.real.dataId,dtype:e.complexTensorInfos.real.dtype,shape:r.shape},{dataId:e.complexTensorInfos.imag.dataId,dtype:e.complexTensorInfos.imag.dtype,shape:r.shape},{dataId:t.complexTensorInfos.real.dataId,dtype:t.complexTensorInfos.real.dtype,shape:i.shape},{dataId:t.complexTensorInfos.imag.dataId,dtype:t.complexTensorInfos.imag.dtype,shape:i.shape}],c=n.runWebGLProgram(a,s,`float32`),l=n.runWebGLProgram(o,s,`float32`),u=lQ({inputs:{real:c,imag:l},backend:n});return n.disposeIntermediateTensorInfo(c),n.disposeIntermediateTensorInfo(l),u}if(n.shouldExecuteOnCPU([r,i])){let e=n.texData.get(r.dataId),t=n.texData.get(i.dataId),[o,s]=kX(r.shape,i.shape,e.values,t.values,a),c=n.makeTensorInfo(s,a),l=n.texData.get(c.dataId);return l.values=o,c}let o;return o=k().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new iQ(NQ,r.shape,i.shape):new tQ(NQ,r.shape,i.shape),n.runWebGLProgram(o,[r,i],a)}var NQ,PQ,FQ=o((()=>{q(),jQ(),nQ(),aQ(),nZ(),dQ(),NQ=`return a * b;`,PQ={kernelName:Ln,backendName:`webgl`,kernelFunc:MQ}}));function IQ(e,t,n){let r=[Hq(e.shape),...Uq(e.shape)],i={dtype:e.dtype,shape:r,dataId:e.dataId},a=new uZ([Hq(t),...Uq(t)],r),o=[r],s=n.runWebGLProgram(a,[i],e.dtype,o,!0);return{dataId:s.dataId,shape:t,dtype:s.dtype}}var LQ=o((()=>{dZ(),uJ()}));function $(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{shape:a}=r,o=n,s=D(i.shape),c=xe(a,s),l=D(c);E(s===l,()=>`The new shape (${c}) has ${l} elements and the old shape (${i.shape}) has ${s} elements. The new shape and old shape must have the same number of elements.`);let u=o.texData.get(i.dataId);return u.isPacked&&!qq(i.shape,c)&&!(u.texture!==null&&qq(u.shape,c))?IQ(i,c,o):(o.incRef(i.dataId),{dataId:i.dataId,shape:c,dtype:i.dtype})}var RQ,zQ=o((()=>{q(),LQ(),uJ(),RQ={kernelName:tr,backendName:`webgl`,kernelFunc:$}})),BQ,VQ=o((()=>{q(),BQ=class{constructor(e,t){this.variableNames=[`x`];let{windowSize:n,batchSize:r,inSize:i,outSize:a}=e;this.outputShape=[r,a];let o=Math.floor(n/4)*4,s=n%4,c=`sumValue += dot(values, ones);`;if(t!=null){let e=1/t;c=`sumValue += dot(values * ${_e(e)?e.toPrecision(2):e}, ones);`}let l=``;i%n>0&&(l=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return 0.0;
        }
      `),this.userCode=`
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${l}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        float sumValue = 0.0;

        for (int i = 0; i < ${o}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${c}
        }

        int inIdx = inOffset + ${o};
        if (${s===1}) {
          vec4 values = vec4(getValue(batch, inIdx), 0.0, 0.0, 0.0);

          ${c}
        } else if (${s===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1), 0.0, 0.0);

          ${c}
        } else if (${s===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2), 0.0);

          ${c}
        }
        setOutput(sumValue);
      }
    `}}})),HQ,UQ=o((()=>{HQ=class{constructor(e,t){this.variableNames=[`x`];let{windowSize:n,batchSize:r,inSize:i,outSize:a}=e;this.outputShape=[r,a];let o=`0.0`,s=``;t===`prod`?o=`1.0`:t===`min`?(o=`1.0 / 1e-20`,s=`min`):t===`max`&&(o=`-1.0 / 1e-20`,s=`max`);let c=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`sum`?c=`sumValue`:t===`prod`?c=`prodValue`:t===`all`?c=`allValue`:t===`any`&&(c=`anyValue`);let l=Math.floor(n/4)*4,u=n%4,d=`
      if (${t===`sum`}) {
        sumValue += dot(values, ones);
      } else if (${t===`prod`}) {
        vec2 tmp = vec2(values[0], values[1]) * vec2(values[2], values[3]);
        prodValue *= tmp[0] * tmp[1];
      } else {
        minMaxValue = ${s}(values, minMaxValue);
        if (${t===`min`} || ${t===`max`}) {
          minMaxValue = ${s}(values, minMaxValue);
          bvec4 isNaN = isnan(values);
          if (isNaN.r || isNaN.g || isNaN.b || isNaN.a) {
            minMaxValue = vec4(NAN);
          }
        }
      }
    `,f=`vec4`;t===`all`?(o=`1.0`,d=`
        bool reducedAllValue = all(values);
        float floatedReducedAllValue = float(reducedAllValue);
        allValue = float(allValue >= 1.0 && floatedReducedAllValue >= 1.0);
      `,f=`bvec4`):t===`any`&&(o=`0.0`,d=`
        bool reducedAnyValue = any(values);
        float floatedReducedAnyValue = float(reducedAnyValue);
        anyValue = float(anyValue >= 1.0 || floatedReducedAnyValue >= 1.0);
      `,f=`bvec4`);let p=``;i%n>0&&(p=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return initializationValue;
        }
      `),this.userCode=`
      const float initializationValue = ${o};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float getValue(int batch, int inIdx) {
        ${p}
        return getX(batch, inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${n};

        vec4 minMaxValue = vec4(${o});
        float prodValue = 1.0;
        float sumValue = 0.0;
        float allValue = 1.0;
        float anyValue = 0.0;

        for (int i = 0; i < ${l}; i += 4) {
          int inIdx = inOffset + i;
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          ${d}
        }

        int inIdx = inOffset + ${l};
        if (${u===1}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${u===2}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          ${d}
        } else if (${u===3}) {
          ${f} values = ${f}(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          ${d}
        }
        setOutput(${c});
      }
    `}}}));function WQ(e){let t=[];for(;t.length===0||t[t.length-1].outSize!==1;){let n=t.length?t[t.length-1].outSize:e[1],r=ey(n);t.push({inSize:n,windowSize:r,outSize:Math.ceil(n/r)})}return t}function GQ(e,t,n,r){let i=WQ(e.shape),a=e;for(let o=0;o<i.length;o++){let{inSize:s,windowSize:c,outSize:l}=i[o],u,d;u=n===`mean`?o===0?new BQ({windowSize:c,inSize:s,batchSize:e.shape[0],outSize:l},s):new BQ({windowSize:c,inSize:s,batchSize:e.shape[0],outSize:l}):new HQ({windowSize:c,inSize:s,batchSize:e.shape[0],outSize:l},n),d=a,a=r.runWebGLProgram(u,[a],t),d.dataId!==e.dataId&&r.disposeIntermediateTensorInfo(d)}return a}var KQ=o((()=>{q(),VQ(),UQ()}));function qQ(e){let t=e.length;if(t>6)throw Error(`Transpose for rank ${t} is not yet supported`);let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`,`resRC.u`,`resRC.v`],r=Array(t);for(let t=0;t<e.length;t++)r[e[t]]=n[t];return r.join()}var JQ,YQ=o((()=>{mY(),JQ=class{constructor(e,t){this.variableNames=[`A`];let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];this.outputShape=n,this.rank=n.length;let r=aY(this.rank),i=qQ(t);this.userCode=`
    void main() {
      ${r} resRC = getOutputCoords();
      setOutput(getA(${i}));
    }
    `}}})),XQ,ZQ=o((()=>{oZ(),mY(),XQ=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0;let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[t[r]];if(this.outputShape=n,this.rank=n.length,this.rank>6)throw Error(`Packed transpose for rank ${this.rank} is not yet supported.`);let r=aY(this.rank),i=rZ(`rc`,this.rank),a=Array(this.rank);for(let e=0;e<t.length;e++)a[t[e]]=i[e];let o=`vec2(${a.slice(-2).join()})`,s=`++${i[this.rank-1]} < ${n[this.rank-1]}`,c=`getChannel(getA(${a.join()}), ${o})`;this.userCode=`
    void main() {
      ${r} rc = getOutputCoords();
      vec4 result = vec4(0.);
      result[0] = ${c};
      if(${s}) {
        result[1] = ${c};
      }
      --${i[this.rank-1]};
      if(++${i[this.rank-2]} < ${n[this.rank-2]}) {
        result[2] = ${c};
        if(${s}) {
          result[3] = ${c};
        }
      }
      setOutput(result);
    }
    `}}}));function QQ(e,t,n){let r=k().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new XQ(e.shape,t):new JQ(e.shape,t);return n.runWebGLProgram(r,[e],e.dtype)}var $Q=o((()=>{q(),nZ(),YQ(),ZQ()}));function e$(e,t,n,r){let i=t,a=e.shape.length,o=Se(i,e.shape),s=o,c=Su(s,a),l=c!=null,u=e;l&&(u=QQ(e,c,r),s=wu(s.length,a)),xu(`sum`,s,a);let[d,f]=yu(u.shape,s),p=d;n&&(p=bu(d,o));let m=D(f),h=D(e.shape)/m,g=$({inputs:{x:u},attrs:{shape:[h,m]},backend:r}),_=GQ(g,ia(e.dtype),`sum`,r),v=$({inputs:{x:_},attrs:{shape:p},backend:r});return r.disposeIntermediateTensorInfo(g),r.disposeIntermediateTensorInfo(_),l&&r.disposeIntermediateTensorInfo(u),v}var t$=o((()=>{q(),KQ(),zQ(),$Q()}));function n$(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r;return e$(i,a,o,n)}var r$,i$=o((()=>{q(),t$(),r$={kernelName:`Sum`,backendName:`webgl`,kernelFunc:n$}}));function a$(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{perm:a}=r,o=n,s=i.shape.length,c=Array(s);for(let e=0;e<c.length;e++)c[e]=i.shape[a[e]];let l;if(o.shouldExecuteOnCPU([i])){let e=o.texData.get(i.dataId).values,t=eZ(e,i.shape,i.dtype,a,c);l=o.makeTensorInfo(c,i.dtype);let n=o.texData.get(l.dataId);n.values=t}else l=QQ(i,a,o);return l}var o$,s$=o((()=>{q(),$Q(),o$={kernelName:Br,backendName:`webgl`,kernelFunc:a$}}));function c$({a:e,b:t,transposeA:n,transposeB:r,backend:i,bias:a=null,preluActivationWeights:o=null,leakyreluAlpha:s=0,activation:c=null}){let l=e.shape.length,u=t.shape.length,d=n?e.shape[l-2]:e.shape[l-1],f=r?t.shape[u-1]:t.shape[u-2],p=n?e.shape[l-1]:e.shape[l-2],m=r?t.shape[u-2]:t.shape[u-1],h=e.shape.slice(0,-2),g=t.shape.slice(0,-2),_=D(h),v=D(g),y=$l(e.shape.slice(0,-2),t.shape.slice(0,-2)).concat([p,m]);E(d===f,()=>`Error in matMul: inner shapes (${d}) and (${f}) of Tensors with shapes ${e.shape} and ${t.shape} and transposeA=${n} and transposeB=${r} must match.`);let b=n?[_,d,p]:[_,p,d],x=r?[v,m,f]:[v,f,m],S=$({inputs:{x:e},backend:i,attrs:{shape:b}}),C=$({inputs:{x:t},backend:i,attrs:{shape:x}}),w=[S,C],ee=Math.max(_,v),te=n?S.shape[1]:S.shape[2],T=a!=null,ne=o!=null,re=c===`leakyrelu`,ie=c==null?null:wQ(c,!0),ae=T||ne||re||ie!=null,oe;if((p===1||m===1)&&te>1e3&&ae===!1){let e=S,t=C;n&&(e=a$({inputs:{x:S},backend:i,attrs:{perm:[0,2,1]}}),w.push(e)),r&&(t=a$({inputs:{x:C},backend:i,attrs:{perm:[0,2,1]}}),w.push(t));let a=m!==1,o=m===1,s=e;a&&(s=$({inputs:{x:e},backend:i,attrs:{shape:[ee,te,1]}}),w.push(s));let c=m===1?2:1,l=t;o&&(l=$({inputs:{x:t},backend:i,attrs:{shape:[ee,1,te]}}),w.push(l));let u=MQ({inputs:{a:s,b:l},backend:i});oe=n$({inputs:{x:u},backend:i,attrs:{axis:c,keepDims:!0}}),w.push(u)}else{let c=ra(e.dtype,t.dtype),l=new DQ(b,x,[ee,p,m],n,r,T,ie,ne,re),u=[S,C];if(a!=null&&u.push(a),ne&&u.push(o),re){let e=i.makeTensorInfo([],`float32`,Ai(s,`float32`));u.push(e),w.push(e)}oe=i.runWebGLProgram(l,u,c)}let se=$({inputs:{x:oe},backend:i,attrs:{shape:y}});w.push(oe);for(let e of w)i.disposeIntermediateTensorInfo(e);return se}var l$=o((()=>{q(),EQ(),OQ(),FQ(),zQ(),i$(),s$()}));function u$(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a,bias:o,preluActivationWeights:s}=t,{transposeA:c,transposeB:l,activation:u,leakyreluAlpha:d}=r;return c$({a:i,b:a,transposeA:c,transposeB:l,backend:n,bias:o,preluActivationWeights:s,leakyreluAlpha:d,activation:u})}var d$,f$=o((()=>{q(),l$(),d$={kernelName:Jr,backendName:`webgl`,kernelFunc:u$}}));function p$(e){let{inputs:t,backend:n}=e,{x:r}=t;if(n.shouldExecuteOnCPU([r])&&r.dtype!==`complex64`){let e=BX(n.texData.get(r.dataId).values);return n.makeTensorInfo(r.shape,r.dtype,e)}let i;return i=k().getBool(`WEBGL_PACK_UNARY_OPERATIONS`)?new FZ(r.shape,m$):new bZ(r.shape,m$),n.runWebGLProgram(i,[r],r.dtype)}var m$,h$,g$=o((()=>{q(),nZ(),kZ(),IZ(),m$=`return abs(x);`,h$={kernelName:`Abs`,backendName:`webgl`,kernelFunc:p$}})),_$,v$,y$,b$=o((()=>{q(),EQ(),kZ(),_$=xZ+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return acos(x);
`,v$=SQ({opSnippet:_$}),y$={kernelName:rt,backendName:`webgl`,kernelFunc:v$}})),x$,S$,C$,w$=o((()=>{q(),EQ(),kZ(),x$=xZ+`
  if (x < 1.0) return NAN;
return log(x + sqrt(x * x - 1.0));`,S$=SQ({opSnippet:x$}),C$={kernelName:it,backendName:`webgl`,kernelFunc:S$}})),T$,E$,D$,O$=o((()=>{q(),EQ(),nZ(),T$=`return a + b;`,E$=CQ({opSnippet:T$,packedOpSnippet:T$,supportsComplex:!0,cpuKernelImpl:sX}),D$={kernelName:`Add`,backendName:`webgl`,kernelFunc:E$}})),k$,A$=o((()=>{k$=class{constructor(e,t){this.outputShape=[],this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let n=[];this.variableNames.forEach(e=>{n.push(`float v${e} = get${e}AtOutCoords();`)});let r=this.variableNames.map(e=>`v${e}`).join(` + `);this.userCode=`
      void main() {
        ${n.join(`
        `)}

        float result = ${r};
        setOutput(result);
      }
    `}}})),j$,M$=o((()=>{j$=class{constructor(e,t){this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.variableNames=t.map((e,t)=>`T${t}`);let n=[];this.variableNames.forEach(e=>{n.push(`vec4 v${e} = get${e}AtOutCoords();`)});let r=this.variableNames.map(e=>`v${e}`).join(` + `);this.userCode=`
      void main() {
        ${n.join(`
        `)}

        vec4 result = ${r};
        setOutput(result);
      }
    `}}}));function N$(e){let{inputs:t,backend:n}=e,r=t;if(r.length===1)return oQ({inputs:{x:r[0]},backend:n});if(r.length>k().getNumber(`WEBGL_MAX_TEXTURES_IN_SHADER`)){let e=Math.floor(r.length/2);return N$({inputs:[N$({inputs:r.slice(0,e),backend:n}),N$({inputs:r.slice(e),backend:n})],backend:n})}let i=r.map(e=>e.dtype).reduce((e,t)=>ra(e,t)),a=r.map(e=>e.shape),o=k().getBool(`WEBGL_PACK`)?new j$(r[0].shape,a):new k$(r[0].shape,a);return n.runWebGLProgram(o,r,i)}var P$,F$=o((()=>{q(),A$(),M$(),cQ(),P$={kernelName:at,backendName:`webgl`,kernelFunc:N$}}));function I$(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=Se(a,i.shape),l=c,u=Su(l,s),d=i;u!=null&&(d=a$({inputs:{x:i},backend:n,attrs:{perm:u}}),l=wu(l.length,s)),xu(`all`,l,s);let[f,p]=yu(d.shape,l),m=D(p),h=$({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}}),g=GQ(h,h.dtype,`all`,n),_;if(o){let e=bu(f,c);_=$({inputs:{x:g},backend:n,attrs:{shape:e}})}else _=$({inputs:{x:g},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),_}var L$,R$=o((()=>{q(),KQ(),zQ(),s$(),L$={kernelName:`All`,backendName:`webgl`,kernelFunc:I$}}));function z$(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=Se(a,i.shape),l=c,u=Su(l,s),d=i;u!=null&&(d=a$({inputs:{x:i},backend:n,attrs:{perm:u}}),l=wu(l.length,s)),xu(`any`,l,s);let[f,p]=yu(d.shape,l),m=D(p),h=$({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}}),g=GQ(h,h.dtype,`any`,n),_;if(o){let e=bu(f,c);_=$({inputs:{x:g},backend:n,attrs:{shape:e}})}else _=$({inputs:{x:g},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),_}var B$,V$=o((()=>{q(),KQ(),zQ(),s$(),B$={kernelName:`Any`,backendName:`webgl`,kernelFunc:z$}})),H$,U$=o((()=>{H$=class{constructor(e,t,n){this.variableNames=[`A`];let{windowSize:r,batchSize:i,outSize:a}=e;n||this.variableNames.push(`bestIndicesA`),this.outputShape=[i,a];let o=t===`max`?`>`:`<`,s=n?`inOffset + i;`:`round(getBestIndicesA(batch, inOffset + i));`;this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = outIdx * ${r};

        int bestIndex = inOffset;
        float bestValue = getA(batch, bestIndex);

        for (int i = 0; i < ${r}; i++) {
          int inIdx = ${s};
          float candidate = getA(batch, inIdx);
          if (candidate ${o} bestValue) {
            bestValue = candidate;
            bestIndex = inIdx;
          }
        }
        setOutput(float(bestIndex));
      }
    `}}})),W$,G$=o((()=>{q(),oZ(),mY(),W$=class{constructor(e,t,n,r){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,E(e.length>2,()=>`Packed arg${n.charAt(0).toUpperCase()+n.slice(1)} supports only inputs with rank above 2.`);let i=e[e.length-1],a=Math.ceil(i/t);this.outputShape=e.slice(0,-1),a>1&&this.outputShape.push(a),r||this.variableNames.push(`bestIndicesA`);let o=this.outputShape,s=o.length,c=aY(s),l=iZ(`coords`,s),u,d;if(a===1){d=s+1;let e=aY(d);u=`
        ${e} sourceLocR = ${e}(${l.join()}, 0);
        ++${l[s-1]};
        ${e} sourceLocG = ${e}(${l.join()}, 0);
        ++${l[s-2]};
        ${e} sourceLocA = ${e}(${l.join()}, 0);
        --${l[s-1]};
        ${e} sourceLocB = ${e}(${l.join()}, 0);
        --${l[s-2]};`}else d=s,u=`
        ${c} sourceLocR = coords;
        ++${l[s-1]};
        ${c} sourceLocG = coords;
        ++${l[s-2]};
        ${c} sourceLocA = coords;
        --${l[s-1]};
        ${c} sourceLocB = coords;
        --${l[s-2]};`;let f=[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,d),p=`.`+f[d-1],m=f.map(e=>`int `+e),h=iZ(`sourceLocR`,d-1).concat(`inIdx.r`),g=iZ(`sourceLocG`,d-1).concat(`inIdx.g`),_=iZ(`sourceLocB`,d-1).concat(`inIdx.b`),v=iZ(`sourceLocA`,d-1).concat(`inIdx.a`),y=n===`max`?`greaterThan`:`lessThan`,b=r?``:`
          inIdx = round(vec4(getBestIndicesAChannel(${h.join()}),
                             getBestIndicesAChannel(${g.join()}),
                             getBestIndicesAChannel(${_.join()}),
                             getBestIndicesAChannel(${v.join()})));`,x=`vec4(
            getAChannel(${h.join()}),
            hasNextCol ? getAChannel(${g.join()}) : 0.,
            hasNextRow ? getAChannel(${_.join()}) : 0.,
            hasNextRow && hasNextCol ? getAChannel(${v.join()}) : 0.)`,S=r?``:`
      float getBestIndicesAChannel(${m.join()}) {
        return getChannel(getBestIndicesA(${f.join()}),
                                          vec2(${f.slice(-2).join()}));
      }`;this.userCode=`
      float getAChannel(${m.join()}) {
        return getChannel(getA(${f.join()}),
                               vec2(${f.slice(-2).join()}));
      }
      ${S}
      void main() {
        ${c} coords = getOutputCoords();
        bool hasNextCol = ${l[s-1]} < ${o[s-1]-1};
        bool hasNextRow = ${l[s-2]} < ${o[s-2]-1};
        ${u}
        ivec4 srcIdx = ivec4(sourceLocR${p}, sourceLocG${p},
          sourceLocB${p}, sourceLocA${p}) * ${t};
        ivec4 inIdx = srcIdx;
        vec4 bestIndex = vec4(inIdx);
        vec4 bestValue = ${x};

        for (int i = 0; i < ${t}; i++) {
          inIdx = srcIdx;
          ${b}
          vec4 candidate = ${x};
          bvec4 nan = isnan(candidate);
          bvec4 replace = bvec4(
            vec4(${y}(candidate, bestValue)) * (vec4(1.0) - vec4(nan)));

          bestValue = vec4(replace.x  ? candidate.x : bestValue.x,
                           replace.y  ? candidate.y : bestValue.y,
                           replace.z  ? candidate.z : bestValue.z,
                           replace.w  ? candidate.w : bestValue.w);
          bestIndex = mix(bestIndex, vec4(inIdx), vec4(replace));
          srcIdx++;
        }
        setOutput(bestIndex);
      }
    `}}}));function K$(e,t,n,r=null){let i=t.shape[0],a=t.shape[1];r!=null&&(i=r.shape[0],a=r.shape[1]);let o=ey(a),s=new H$({windowSize:o,inSize:a,batchSize:i,outSize:Math.ceil(a/o)},n,r==null),c=[t];r!=null&&c.push(r);let l=e.runWebGLProgram(s,c,`int32`);if(l.shape[1]===1)return l;let u=K$(e,t,n,l);return e.disposeIntermediateTensorInfo(l),u}function q$(e,t,n,r=null){let i=r==null?t.shape:r.shape,a=i[i.length-1],o=new W$(i,ey(a),n,r==null),s=r==null?[t]:[t,r],c=e.runWebGLProgram(o,s,`int32`);if(c.shape.length===t.shape.length){let r=q$(e,t,n,c);return e.disposeIntermediateTensorInfo(c),r}return c}function J$(e,t,n,r){let i=[n];if(xu(`arg`+r.charAt(0).toUpperCase()+r.slice(1),i,t.shape.length),!k().getBool(`WEBGL_PACK_REDUCE`)||t.shape.length<=2){let n=[],a=e.texData.get(t.dataId),o=a!==null&&a.isPacked,s=t;o&&(s=e.unpackTensor(t),n.push(s));let[c,l]=yu(s.shape,i),u=D(l),d=$({inputs:{x:s},backend:e,attrs:{shape:[-1,u]}});n.push(d);let f=K$(e,d,r);n.push(f);let p=$({inputs:{x:f},backend:e,attrs:{shape:c}});return n.forEach(t=>e.disposeIntermediateTensorInfo(t)),p}return q$(e,t,r)}var Y$=o((()=>{q(),U$(),G$(),zQ()}));function X$(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r,o=Se(a,i.shape),s=Su(o,i.shape.length),c=i,l=[];s!=null&&(c=a$({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=wu(o.length,c.shape.length)),xu(`argMax`,[o[0]],c.shape.length);let u=J$(n,c,o[0],`max`);return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),u}var Z$,Q$=o((()=>{q(),Y$(),s$(),Z$={kernelName:ot,backendName:`webgl`,kernelFunc:X$}}));function $$(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a}=r,o=Se(a,i.shape),s=Su(o,i.shape.length),c=i,l=[];s!=null&&(c=a$({inputs:{x:i},backend:n,attrs:{perm:s}}),l.push(c),o=wu(o.length,c.shape.length)),xu(`argMin`,[o[0]],c.shape.length);let u=J$(n,c,o[0],`min`);return l.forEach(e=>n.disposeIntermediateTensorInfo(e)),u}var e1,t1=o((()=>{q(),Y$(),s$(),e1={kernelName:st,backendName:`webgl`,kernelFunc:$$}})),n1,r1,i1,a1=o((()=>{q(),EQ(),kZ(),n1=xZ+`
  if (abs(x) > 1.) {
    return NAN;
  }
  return asin(x);
`,r1=SQ({opSnippet:n1}),i1={kernelName:ct,backendName:`webgl`,kernelFunc:r1}})),o1,s1,c1,l1=o((()=>{q(),EQ(),kZ(),o1=xZ+`return log(x + sqrt(x * x + 1.0));`,s1=SQ({opSnippet:o1}),c1={kernelName:lt,backendName:`webgl`,kernelFunc:s1}})),u1,d1,f1,p1=o((()=>{q(),EQ(),kZ(),u1=xZ+`
  return atan(x);
`,d1=SQ({opSnippet:u1}),f1={kernelName:ut,backendName:`webgl`,kernelFunc:d1}})),m1,h1,g1,_1,v1=o((()=>{q(),nQ(),aQ(),EQ(),m1=eQ+`
  return atan(a, b);
`,h1=`
  vec4 result = atan(a, b);
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+rQ+`
  return result;
`,g1=CQ({opSnippet:m1,packedOpSnippet:h1}),_1={kernelName:ft,backendName:`webgl`,kernelFunc:g1}})),y1,b1,x1,S1=o((()=>{q(),EQ(),kZ(),y1=xZ+`
  if ((x < -1.0) || (x > 1.0)) return NAN;
return (log(1.0 + x) - log(1.0 - x)) / 2.0;`,b1=SQ({opSnippet:y1}),x1={kernelName:dt,backendName:`webgl`,kernelFunc:b1}})),C1,w1,T1=o((()=>{C1=class{constructor(e,t,n,r=!1,i=!1){if(this.variableNames=[`x`],t===`avg`&&n)throw Error(`Cannot compute positions for average pool.`);let a=e.filterWidth,o=e.strideHeight,s=e.strideWidth,c=e.dilationHeight,l=e.dilationWidth,u=e.effectiveFilterHeight,d=e.effectiveFilterWidth,f=e.padInfo.top,p=e.padInfo.left;this.outputShape=e.outShape;let m=t===`avg`,h=`((batch  * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + d`,g=`(xR * ${e.inWidth} + xC) * ${e.inChannels} + d`,_=`0.0`;if(m||(_=`-1.0 / 1e-20`),n){this.userCode=`
        const ivec2 strides = ivec2(${o}, ${s});
        const ivec2 pads = ivec2(${f}, ${p});

        void main() {
          ivec4 coords = getOutputCoords();
          int batch = coords[0];
          int d = coords[3];

          ivec2 xRCCorner = coords.yz * strides - pads;
          int xRCorner = xRCCorner.x;
          int xCCorner = xRCCorner.y;

          // max/min x(?, ?, d) to get y(yR, yC, d).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;
          float avgValue = 0.0;

          for (int wR = 0; wR < ${u};
              wR += ${c}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${d};
                wC += ${l}) {
              int xC = xCCorner + wC;

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float value = getX(batch, xR, xC, d);

              // If a min / max value has already been found, use it. If not,
              // use the current value.
              float currMinMaxValue = mix(
                  value, minMaxValue, minMaxValueFound);
              if (value >= currMinMaxValue) {
                minMaxValue = value;
                minMaxValueFound = 1.0;
                minMaxPosition = ${r?i?h:g:`wR * ${d} + wC`};
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let v=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`avg`&&(v=`avgValue / max(count, 1.0)`);let y=Math.floor(a/4)*4,b=a%4,x=`
      if (${m}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec2 strides = ivec2(${o}, ${s});
      const ivec2 pads = ivec2(${f}, ${p});
      const float initializationValue = ${_};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xR, int xC, int d) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xR, xC, d);
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d = coords[3];

        ivec2 xRCCorner = coords.yz * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // max/min x(?, ?, d) to get y(yR, yC, d).
        // ? = to be determined
        vec4 minMaxValue = vec4(${_});
        float avgValue = 0.0;
        count = 0.0;

        for (int wR = 0; wR < ${u};
            wR += ${c}) {
          int xR = xRCorner + wR;

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${y}; wC += 4) {
            int xC = xCCorner + wC * ${l};

            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              getValue(batch, xR, xC + 2 * ${l}, d),
              getValue(batch, xR, xC + 3 * ${l}, d)
            );

            ${x}
          }

          int xC = xCCorner + ${y};
          if (${b===1}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              initializationValue,
              initializationValue,
              initializationValue
            );

            ${x}
          } else if (${b===2}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              initializationValue,
              initializationValue
            );

            ${x}
          } else if (${b===3}) {
            vec4 values = vec4(
              getValue(batch, xR, xC, d),
              getValue(batch, xR, xC + ${l}, d),
              getValue(batch, xR, xC + 2 * ${l}, d),
              initializationValue
            );

            ${x}
          }
        }
        setOutput(${v});
      }
    `}},w1=class{constructor(e,t,n,r=!1,i=!1){if(this.variableNames=[`x`],t===`avg`&&n)throw Error(`Cannot compute positions for average pool.`);let a=e.filterWidth,o=e.strideDepth,s=e.strideHeight,c=e.strideWidth,l=e.dilationDepth,u=e.dilationHeight,d=e.dilationWidth,f=e.effectiveFilterDepth,p=e.effectiveFilterHeight,m=e.effectiveFilterWidth,h=e.padInfo.front,g=e.padInfo.top,_=e.padInfo.left;this.outputShape=e.outShape;let v=t===`avg`,y=`0.0`;if(v||(y=`-1.0 / 1e-20`),n){this.userCode=`
        const ivec3 strides =
            ivec3(${o}, ${s}, ${c});
        const ivec3 pads = ivec3(${h}, ${g}, ${_});

        void main() {
          ivec5 coords = getOutputCoords();
          int batch = coords.x;
          int ch = coords.u;

          ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
          int xDCorner = xCorner.x;
          int xRCorner = xCorner.y;
          int xCCorner = xCorner.z;

          // max/min x(?, ?, ?, ch) to get y(yD, yR, yC, ch).
          // ? = to be determined
          float minMaxValue = 0.0;
          float minMaxValueFound = 0.0;
          int minMaxPosition = 0;

          for (int wD = 0; wD < ${f};
              wD += ${l}) {
            int xD = xDCorner + wD;

            if (xD < 0 || xD >= ${e.inDepth}) {
              continue;
            }

            for (int wR = 0; wR < ${p};
                wR += ${u}) {
              int xR = xRCorner + wR;

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int wC = 0; wC < ${m};
                  wC += ${d}) {
                int xC = xCCorner + wC;

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float value = getX(batch, xD, xR, xC, ch);

                // If a min / max value has already been found, use it. If not,
                // use the current value.
                float currMinMaxValue = mix(
                    value, minMaxValue, minMaxValueFound);
                if (value >= currMinMaxValue) {
                  minMaxValue = value;
                  minMaxValueFound = 1.0;
                  minMaxPosition = ${r?i?`(((batch * ${e.inDepth} + xD) * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`((xD * ${e.inHeight} + xR) * ${e.inWidth} + xC) * ${e.inChannels} + ch`:`wD * ${p} * ${m} +
                      wR * ${m} + wC`};
                }
              }
            }
          }
          setOutput(float(minMaxPosition));
        }
      `;return}let b=`${t}(${t}(${t}(minMaxValue[0], minMaxValue[1]), minMaxValue[2]), minMaxValue[3])`;t===`avg`&&(b=`avgValue / max(count, 1.0)`);let x=Math.floor(a/4)*4,S=a%4,C=`
      if (${v}) {
        avgValue += dot(values, ones);
      } else {
        minMaxValue = max(values, minMaxValue);
      }
    `;this.userCode=`
      const ivec3 strides =
        ivec3(${o}, ${s}, ${c});
      const ivec3 pads = ivec3(${h}, ${g}, ${_});
      const float initializationValue = ${y};
      const vec4 ones = vec4(1.0, 1.0, 1.0, 1.0);

      float count = 0.0;

      float getValue(int batch, int xD, int xR, int xC, int ch) {
        if (xC < 0 || xC >= ${e.inWidth}) {
          return initializationValue;
        }
        count += 1.0;
        return getX(batch, xD, xR, xC, ch);
      }

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 xCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xDCorner = xCorner.x;
        int xRCorner = xCorner.y;
        int xCCorner = xCorner.z;

        // max/min x(?, ?, ?, d) to get y(yD, yR, yC, ch).
        // ? = to be determined
        vec4 minMaxValue = vec4(${y});
        float avgValue = 0.0;
        count = 0.0;

        for (int wD = 0; wD < ${f};
            wD += ${l}) {
          int xD = xDCorner + wD;

          if (xD < 0 || xD >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${p};
            wR += ${u}) {
            int xR = xRCorner + wR;

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${x}; wC += 4) {
              int xC = xCCorner + wC * ${d};

              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                getValue(batch, xD, xR, xC + 3 * ${d}, ch)
              );

              ${C}
            }

            int xC = xCCorner + ${x};
            if (${S===1}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                initializationValue,
                initializationValue,
                initializationValue
              );

              ${C}
            } else if (${S===2}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                initializationValue,
                initializationValue
              );

              ${C}
            } else if (${S===3}) {
              vec4 values = vec4(
                getValue(batch, xD, xR, xC, ch),
                getValue(batch, xD, xR, xC + ${d}, ch),
                getValue(batch, xD, xR, xC + 2 * ${d}, ch),
                initializationValue
              );

              ${C}
            }
          }
        }
        setOutput(${b});
      }
    `}}}));function E1(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;iJ(i,`avgPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;E(ic(o,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=Ws(i.shape,a,o,1,s,c);if(l.filterWidth===1&&l.filterHeight===1&&ge(l.inShape,l.outShape))return oQ({inputs:{x:i},backend:n});let u=new C1(l,`avg`,!1);return n.runWebGLProgram(u,[i],`float32`)}var D1,O1=o((()=>{q(),T1(),uJ(),cQ(),D1={kernelName:pt,backendName:`webgl`,kernelFunc:E1}}));function k1(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dimRoundingMode:c,dataFormat:l}=r,u=new w1(Gs(i.shape,a,o,[1,1,1],s,c,l),`avg`,!1);return n.runWebGLProgram(u,[i],`float32`)}var A1,j1=o((()=>{q(),T1(),A1={kernelName:ht,backendName:`webgl`,kernelFunc:k1}})),M1,N1,P1=o((()=>{M1=class{constructor(e){this.variableNames=[`dy`],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=e.dilationHeight,o=e.dilationWidth,s=e.effectiveFilterHeight,c=e.effectiveFilterWidth,l=s-1-e.padInfo.top,u=c-1-e.padInfo.left,d=1/(t*n);this.userCode=`
      const ivec2 pads = ivec2(${l}, ${u});
      const float avgMultiplier = float(${d});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${s};
            wR += ${a}) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${c};
            wC+= ${o}) {
            float dyC = float(dyCCorner + wC) / ${i}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);

            dotProd += dyValue * avgMultiplier;
          }
        }
        setOutput(dotProd);
      }
    `}},N1=class{constructor(e){this.variableNames=[`dy`],this.outputShape=e.inShape;let t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,u=e.effectiveFilterDepth,d=e.effectiveFilterHeight,f=e.effectiveFilterWidth,p=u-1-e.padInfo.front,m=d-1-e.padInfo.top,h=f-1-e.padInfo.left,g=1/(t*n*r);this.userCode=`
      const ivec3 pads = ivec3(${p}, ${m}, ${h});
      const float avgMultiplier = float(${g});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, d) with pos mask(:, :, :, ch) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${u};
            wD += ${s}) {
          float dyD = float(dyDCorner + wD) / ${i}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${d};
              wR += ${c}) {
            float dyR = float(dyRCorner + wR) / ${a}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${f};
                wC += ${l}) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);

              dotProd += dyValue * avgMultiplier;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}}));function F1(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a,{filterSize:s,strides:c,pad:l,dimRoundingMode:u}=r,d=new N1(Gs(o.shape,s,c,[1,1,1],l,u));return n.runWebGLProgram(d,[i],o.dtype)}var I1,L1=o((()=>{q(),P1(),I1={kernelName:gt,backendName:`webgl`,kernelFunc:F1}}));function R1(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a;iJ([i,a],`avgPoolGrad`);let{filterSize:s,strides:c,pad:l}=r,u=new M1(Ws(o.shape,s,c,1,l));return n.runWebGLProgram(u,[i],o.dtype)}var z1,B1=o((()=>{q(),P1(),uJ(),z1={kernelName:mt,backendName:`webgl`,kernelFunc:R1}}));function V1(e){let{inputs:t,backend:n,attrs:r}=e,{a:i,b:a}=t,{transposeA:o,transposeB:s}=r;return c$({a:i,b:a,transposeA:o,transposeB:s,backend:n})}var H1,U1=o((()=>{q(),l$(),H1={kernelName:_t,backendName:`webgl`,kernelFunc:V1}})),W1,G1=o((()=>{q(),W1=class{constructor(e,t,n,r,i,a){this.outputShape=[],this.variableNames=[`x`,`mean`,`variance`],$l(e,t),$l(e,n);let o=`0.0`;r!=null&&($l(e,r),this.variableNames.push(`offset`),o=`getOffsetAtOutCoords()`);let s=`1.0`;i!=null&&($l(e,i),this.variableNames.push(`scale`),s=`getScaleAtOutCoords()`),this.outputShape=e,this.userCode=`
      void main() {
        float x = getXAtOutCoords();
        float mean = getMeanAtOutCoords();
        float variance = getVarianceAtOutCoords();
        float offset = ${o};
        float scale = ${s};
        float inv = scale * inversesqrt(variance + float(${a}));
        setOutput(dot(vec3(x, -mean, offset), vec3(inv, inv, 1)));
      }
    `}}})),K1,q1=o((()=>{q(),K1=class{constructor(e,t,n,r,i,a){this.packedInputs=!0,this.packedOutput=!0,this.variableNames=[`x`,`mean`,`variance`],$l(e,t),$l(e,n);let o=`vec4(0.0)`;r!=null&&($l(e,r),this.variableNames.push(`offset`),o=`getOffsetAtOutCoords()`);let s=`vec4(1.0)`;i!=null&&($l(e,i),this.variableNames.push(`scale`),s=`getScaleAtOutCoords()`),this.outputShape=e,this.userCode=`
      void main() {
        vec4 offset = ${o};
        vec4 scale = ${s};

        vec4 x = getXAtOutCoords();
        vec4 mean = getMeanAtOutCoords();
        vec4 variance = getVarianceAtOutCoords();

        vec4 inv = scale * inversesqrt(variance + vec4(${a}));

        setOutput((x - mean) * inv + offset);
      }
    `}}})),J1,Y1,X1=o((()=>{q(),G1(),q1(),J1=({inputs:e,backend:t,attrs:n})=>{let{x:r,mean:i,variance:a,offset:o,scale:s}=e;E(i.shape.length===a.shape.length,()=>`Batch normalization gradient requires mean and variance to have equal ranks.`),E(o==null||i.shape.length===o.shape.length,()=>`Batch normalization gradient requires mean and offset to have equal ranks.`),E(s==null||i.shape.length===s.shape.length,()=>`Batch normalization gradient requires mean and scale to have equal ranks.`);let{varianceEpsilon:c}=n;c??=.001;let l=[r,i,a],u=null;o!=null&&(u=o.shape,l.push(o));let d=null;s!=null&&(d=s.shape,l.push(s));let f=k().getBool(`WEBGL_PACK_NORMALIZATION`)?new K1(r.shape,i.shape,a.shape,u,d,c):new W1(r.shape,i.shape,a.shape,u,d,c);return t.runWebGLProgram(f,l,l[0].dtype)},Y1={kernelName:on,backendName:`webgl`,kernelFunc:J1}}));function Z1(e){if(e===1)return`sourceLoc`;if(e<=6)return $1.slice(0,e).map(e=>`sourceLoc.`+e).join(`,`);throw Error(`Slicing for rank ${e} is not yet supported`)}var Q1,$1,e0=o((()=>{mY(),Q1=class{constructor(e){this.variableNames=[`source`],this.outputShape=e,this.rank=e.length;let t=aY(this.rank);this.customUniforms=[{name:`start`,arrayIndex:this.rank,type:`int`}];let n=Z1(this.rank),r;r=`
        ${t} sourceLoc;
        ${t} coords = getOutputCoords();
        ${e.map((e,t)=>`sourceLoc.${$1[t]} = start[${t}] + coords.${$1[t]};`).join(`
`)}
      `,this.userCode=`
      void main() {
        ${r}
        setOutput(getSource(${n}));
      }
    `}},$1=[`x`,`y`,`z`,`w`,`u`,`v`]})),t0,n0=o((()=>{oZ(),mY(),t0=class{constructor(e){this.variableNames=[`source`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=e,this.rank=e.length,this.customUniforms=[{name:`start`,arrayIndex:this.rank,type:`int`}];let t=aY(this.rank),n=iZ(`coords`,this.rank),r=iZ(`sourceLoc`,this.rank),i=this.rank===1?`sourceLoc`:`vec2(${r.slice(-2).join()})`,a=`getChannel(getSource(${r.join()}), ${i})`,o=`
      result.x = ${a};
      if (++${n[this.rank-1]} < ${e[this.rank-1]}) {
        ++${r[this.rank-1]};
        result.y = ${a};
        --${r[this.rank-1]};
      }
    `,s=this.rank===1?``:`
      --${n[this.rank-1]};
      if (++${n[this.rank-2]} < ${e[this.rank-2]}) {
        ++${r[this.rank-2]};
        result.z = ${a};
        if (++${n[this.rank-1]} < ${e[this.rank-1]}) {
          ++${r[this.rank-1]};
          result.w = ${a};
        }
      }
    `,c=this.rank<=4?`sourceLoc = coords +
            ${t}(${e.map((e,t)=>`start[${t}]`).join()});`:e.map((e,t)=>`${r[t]} = ${n[t]} + start[${t}];`).join(`
`);this.userCode=`
      void main() {
        ${t} coords = getOutputCoords();
        ${t} sourceLoc;
        ${c}
        vec4 result = vec4(0.);
        ${o}
        ${s}
        setOutput(result);
      }
    `}}}));function r0(e,t,n,r){let i=r.texData.get(e.dataId),a=r.makeTensorInfo(n,e.dtype),o=r.texData.get(a.dataId);Object.assign(o,i),o.refCount=1,o.shape=n,o.dtype=e.dtype;let s=Av(t,O(e.shape));i.slice&&(s+=i.slice.flatOffset),o.slice={flatOffset:s,origDataId:i.slice&&i.slice.origDataId||e.dataId};let c=r.dataRefCount.get(o.slice.origDataId)||1;return r.dataRefCount.set(o.slice.origDataId,c+1),a}function i0(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,size:o}=r,[s,c]=jv(i,a,o);if(_v(i,s,c),D(c)===0)return n.makeTensorInfo(c,i.dtype,[]);if(n.shouldExecuteOnCPU([i])||i.dtype===`string`){let e=VX(n.texData.get(i.dataId).values,s,c,i.shape,i.dtype);return n.makeTensorInfo(c,i.dtype,e)}let{isPacked:l}=n.texData.get(i.dataId),u=kv(i.shape,s,c);if(l||!u){let e=k().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new t0(c):new Q1(c),t=[s];return n.runWebGLProgram(e,[i],i.dtype,t)}return n.uploadToGPU(i.dataId),r0(i,s,c,n)}var a0,o0=o((()=>{q(),nZ(),e0(),n0(),a0={kernelName:hr,backendName:`webgl`,kernelFunc:i0}})),s0,c0,l0=o((()=>{q(),zQ(),o0(),s$(),s0=e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,crops:o}=r;E(i.shape.length<=4,()=>`batchToSpaceND for rank > 4 with a WebGL backend not implemented yet`);let s=a.reduce((e,t)=>e*t),c=ry(i.shape,a,s),l=iy(c.length,a.length),u=ay(i.shape,a,s),d=oy(o,a.length),f=sy(u,o,a.length),p=[],m=$({inputs:{x:i},backend:n,attrs:{shape:c}}),h=a$({inputs:{x:m},backend:n,attrs:{perm:l}}),g=$({inputs:{x:h},backend:n,attrs:{shape:u}}),_=i0({inputs:{x:g},backend:n,attrs:{begin:d,size:f}});return p.push(m),p.push(h),p.push(g),p.forEach(e=>n.disposeIntermediateTensorInfo(e)),_},c0={kernelName:vt,backendName:`webgl`,kernelFunc:s0}}));function u0(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o}=r,s=cX(n.readSync(i.dataId),n.readSync(a.dataId),a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,s)}var d0,f0=o((()=>{q(),nZ(),d0={kernelName:yt,backendName:`webgl`,kernelFunc:u0}}));function p0(e){let{inputs:t,backend:n}=e,{a:r,b:i}=t,a=k().getBool(`WEBGL_PACK_BINARY_OPERATIONS`),o=k().getNumber(`WEBGL_VERSION`);if(n.shouldExecuteOnCPU([r,i])||o===1){let e=n.texData.get(r.dataId).values,t=n.texData.get(i.dataId).values,[a,o]=uX(r.shape,i.shape,e,t,r.dtype),s=n.makeTensorInfo(o,r.dtype),c=n.texData.get(s.dataId);return c.values=a,s}let s;return s=a?new iQ(m0,r.shape,i.shape,!1):new tQ(h0,r.shape,i.shape),n.runWebGLProgram(s,[r,i],r.dtype)}var m0,h0,g0,_0=o((()=>{q(),nQ(),aQ(),nZ(),m0=`
  int r = int(a.r) & int(b.r);
  int g = int(a.g) & int(b.g);
  int rb = int(a.b) & int(b.b);
  int ra = int(a.a) & int(b.a);
  return vec4(r, g, rb, ra);
`,h0=`
  return float(int(a.r) & int(b.r));
`,g0={kernelName:bt,backendName:`webgl`,kernelFunc:p0}}));function v0(e){let{inputs:t,backend:n}=e,{s0:r,s1:i}=t,a=n.readSync(r.dataId),o=n.readSync(i.dataId),s=$l(Array.from(a),Array.from(o));return n.makeTensorInfo([s.length],`int32`,Int32Array.from(s))}var y0,b0=o((()=>{q(),y0={kernelName:St,backendName:`webgl`,kernelFunc:v0}})),x0,S0,C0,w0=o((()=>{q(),EQ(),nZ(),x0=`return float(a != b);`,S0=CQ({opSnippet:x0,cpuKernelImpl:jX,dtype:`bool`}),C0={kernelName:Rn,backendName:`webgl`,kernelFunc:S0}}));function T0(e){let{inputs:t,backend:n}=e,{input:r}=t;return oQ({inputs:{x:n.texData.get(r.dataId).complexTensorInfos.real},backend:n})}var E0,D0=o((()=>{q(),cQ(),E0={kernelName:Qn,backendName:`webgl`,kernelFunc:T0}}));function mie(e,t){let n=new bZ(e.shape,O0),r=t.runWebGLProgram(n,[e],`int32`);return{dataId:r.dataId,shape:r.shape,dtype:r.dtype}}var O0,k0=o((()=>{kZ(),O0=`return float(int(x));`}));function A0(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dtype:a}=r;if(a===`complex64`){if(i.dtype===`complex64`)return oQ({inputs:{x:i},backend:n});let e=Af(i.shape),t=A0({inputs:{x:i},backend:n,attrs:{dtype:`float32`}}),r=lQ({inputs:{real:t,imag:e},backend:n});return e.dispose(),n.disposeIntermediateTensorInfo(t),r}if(i.dtype===`complex64`){let e=T0({inputs:{input:i},backend:n}),t=A0({inputs:{x:e},backend:n,attrs:{dtype:a}});return n.disposeIntermediateTensorInfo(e),t}if(!De(i.dtype,a)){let e=oQ({inputs:{x:i},backend:n});return{dataId:e.dataId,shape:e.shape,dtype:a}}if(n.shouldExecuteOnCPU([i])){let e=n.texData.get(i.dataId).values,[t,r,o]=dX(e,i.shape,i.dtype,a);return n.makeTensorInfo(t,r,o)}if(a===`int32`)return mie(i,n);if(a===`bool`){let e=n.makeTensorInfo([],`bool`,we(`bool`,1)),t=S0({inputs:{a:i,b:e},backend:n});return n.disposeIntermediateTensorInfo(e),t}throw Error(`Error in Cast: failed to cast ${i.dtype} to ${a}`)}var j0,M0=o((()=>{q(),nZ(),dQ(),cQ(),w0(),D0(),k0(),j0={kernelName:Ct,backendName:`webgl`,kernelFunc:A0}})),N0,P0,F0,I0=o((()=>{q(),EQ(),nZ(),N0=`return ceil(x);`,P0=SQ({opSnippet:N0,packedOpSnippet:N0,cpuKernelImpl:fX}),F0={kernelName:wt,backendName:`webgl`,kernelFunc:P0}})),L0,R0=o((()=>{L0=class{constructor(e){this.variableNames=[`A`],this.customUniforms=[{name:`minVal`,type:`float`},{name:`maxVal`,type:`float`}],this.outputShape=e,this.userCode=`

      void main() {
        float value = getAAtOutCoords();
        if (isnan(value)) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, minVal, maxVal));
      }
    `}}})),z0,B0=o((()=>{z0=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`minVal`,type:`float`},{name:`maxVal`,type:`float`}],this.outputShape=e,this.userCode=`
      void main() {
        vec4 value = getAAtOutCoords();

        if (any(isnan(value))) {
          setOutput(value);
          return;
        }

        setOutput(clamp(value, vec4(minVal), vec4(maxVal)));
      }
    `}}}));function V0(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{clipValueMin:a,clipValueMax:o}=r,s;s=k().getBool(`WEBGL_PACK_CLIP`)?new z0(i.shape):new L0(i.shape);let c=[[a],[o]];return n.runWebGLProgram(s,[i],i.dtype,c)}var H0,U0=o((()=>{q(),R0(),B0(),H0={kernelName:Tt,backendName:`webgl`,kernelFunc:V0}})),W0,G0=o((()=>{W0=class{constructor(e){this.variableNames=[`real`,`imag`],this.outputShape=e,this.userCode=`
      void main() {
        float re = abs(getRealAtOutCoords());
        float im = abs(getImagAtOutCoords());
        float mx = max(re, im);

        // sadly the length function in glsl is not underflow-safe
        // (at least not on Intel GPUs). So the safe solution is
        // to ensure underflow-safety in all cases.
        setOutput(
          mx == 0.0 ? 0.0 : mx * length(vec2(1, min(re, im)/mx))
        );
      }
    `}}}));function K0(e,t){return{dataId:t.dataId,dtype:t.dtype,shape:e.shape}}function q0(e){let{inputs:t,backend:n}=e,{x:r}=t,i=n.texData.get(r.dataId),a=new W0(r.shape),o=[K0(r,i.complexTensorInfos.real),K0(r,i.complexTensorInfos.imag)];return n.runWebGLProgram(a,o,o[0].dtype)}var J0,Y0=o((()=>{q(),G0(),J0={kernelName:Dt,backendName:`webgl`,kernelFunc:q0}})),X0,Z0=o((()=>{q(),X0=class{constructor(e){this.outputShape=[],this.outputShape=qv(e,1),this.variableNames=e.map((e,t)=>`T${t}`);let t=Array(e.length-1);t[0]=e[0][1];for(let n=1;n<t.length;n++)t[n]=t[n-1]+e[n][1];let n=[`if (yC < ${t[0]}) setOutput(getT0(yR, yC));`];for(let e=1;e<t.length;e++){let r=t[e-1];n.push(`else if (yC < ${t[e]}) setOutput(getT${e}(yR, yC-${r}));`)}let r=t.length,i=t[t.length-1];n.push(`else setOutput(getT${r}(yR, yC-${i}));`),this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int yR = coords.x;
        int yC = coords.y;

        ${n.join(`
        `)}
      }
    `}}}));function Q0(e,t,n){let r=e.indexOf(t);return e.map((e,t)=>t===r?`${e} - ${n}`:e).join()}var $0,e2=o((()=>{q(),oZ(),mY(),$0=class{constructor(e,t){this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[],this.outputShape=qv(e,t);let n=this.outputShape,r=n.length,i=aY(r),a=iZ(`coords`,r),o=[`x`,`y`,`z`,`w`,`u`,`v`].slice(0,r);this.variableNames=e.map((e,t)=>`T${t}`);let s=Array(e.length-1);s[0]=e[0][t];for(let n=1;n<s.length;n++)s[n]=s[n-1]+e[n][t];let c=o[t],l=o.slice(-2),u=o.join(),d=`if (${c} < ${s[0]}) {
        return getChannel(
            getT0(${u}), vec2(${l.join()}));
        }`;for(let e=1;e<s.length;e++){let t=s[e-1];d+=`
        if (${c} < ${s[e]}  && ${c} >= ${s[e-1]}) {
          return getChannel(
            getT${e}(${Q0(o,c,t)}),
            vec2(${Q0(l,c,t)}));
        }`}let f=s.length,p=s[s.length-1];d+=`
        return getChannel(
          getT${f}(${Q0(o,c,p)}),
          vec2(${Q0(l,c,p)}));`,this.userCode=`
      float getValue(${o.map(e=>`int `+e)}) {
        ${d}
      }

      void main() {
        ${i} coords = getOutputCoords();
        vec4 result = vec4(getValue(${a}), 0., 0., 0.);

        ${a[r-1]} = ${a[r-1]} + 1;
        if (${a[r-1]} < ${n[r-1]}) {
          result.g = getValue(${a});
        }

        ${a[r-2]} = ${a[r-2]} + 1;
        if (${a[r-2]} < ${n[r-2]}) {
          result.a = getValue(${a});
        }

        ${a[r-1]} = ${a[r-1]} - 1;
        if (${a[r-2]} < ${n[r-2]} &&
            ${a[r-1]} < ${n[r-1]}) {
          result.b = getValue(${a});
        }
        setOutput(result);
      }
    `}}}));function t2(e){let{inputs:t,backend:n}=e,{input:r}=t;return oQ({inputs:{x:n.texData.get(r.dataId).complexTensorInfos.imag},backend:n})}var n2,r2=o((()=>{q(),cQ(),n2={kernelName:pn,backendName:`webgl`,kernelFunc:t2}}));function i2(e,t,n){let r=e[0].dtype;if(r===`complex64`){let r=e.map(e=>T0({inputs:{input:e},backend:n})),i=e.map(e=>t2({inputs:{input:e},backend:n})),a=i2(r,t,n),o=i2(i,t,n),s=lQ({inputs:{real:a,imag:o},backend:n});return r.forEach(e=>n.disposeIntermediateTensorInfo(e)),i.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.disposeIntermediateTensorInfo(a),n.disposeIntermediateTensorInfo(o),s}let i=n.shouldExecuteOnCPU(e);if(r===`string`&&(i=!0),i){let i=e.map(e=>{let r=[-1,D(e.shape.slice(t))];return $({inputs:{x:e},backend:n,attrs:{shape:r}})}),a=pX(i.map(e=>({vals:n.readSync(e.dataId),shape:e.shape})),qv(i.map(e=>e.shape),1),r,i[0].shape[0]===1),o=qv(e.map(e=>e.shape),t),s=n.makeTensorInfo(o,r,a);return i.forEach(e=>n.disposeIntermediateTensorInfo(e)),s}let a=e.filter(e=>D(e.shape)>0),o=k().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)&&a[0].shape.length>1;if(a.length===1){let t=o?new bZ(e[0].shape,DZ):new FZ(e[0].shape,DZ);return n.runWebGLProgram(t,e,r)}let s=k().getNumber(`WEBGL_MAX_TEXTURES_IN_SHADER`);if(a.length>s){let e=[];for(let r=0;r<a.length;r+=s){let i=a.slice(r,r+s);e.push(i2(i,t,n))}let r=i2(e,t,n);for(let t of e)n.disposeIntermediateTensorInfo(t);return r}if(o){let e=new $0(a.map(e=>e.shape),t);return n.runWebGLProgram(e,a,r)}let{tensors2D:c,outShape:l}=a2(a,t,n),u=new X0(c.map(e=>e.shape)),d=n.runWebGLProgram(u,c,r);c.forEach(e=>n.disposeIntermediateTensorInfo(e));let f=$({inputs:{x:d},attrs:{shape:l},backend:n});return n.disposeIntermediateTensorInfo(d),f}function a2(e,t,n){let r=qv(e.map(e=>e.shape),t);return{tensors2D:e.map(e=>$({inputs:{x:e},attrs:{shape:[-1,D(e.shape.slice(t))]},backend:n})),outShape:r}}var o2=o((()=>{q(),Z0(),e2(),nZ(),kZ(),IZ(),dQ(),r2(),D0(),zQ()}));function s2(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r,a=Se(i,t[0].shape)[0];Kv(t.map(e=>e.shape),a);let o=qv(t.map(e=>e.shape),a);if(D(o)===0)return n.makeTensorInfo(o,t[0].dtype,[]);let s=t.filter(e=>D(e.shape)>0);return s.length===1?oQ({inputs:{x:s[0]},backend:n}):i2(s,a,n)}var c2,l2=o((()=>{q(),o2(),cQ(),c2={kernelName:Ot,backendName:`webgl`,kernelFunc:s2}})),u2,d2,f2=o((()=>{u2=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;let a=e.padInfo.top,o=e.padInfo.left,s=e.strideHeight,c=e.strideWidth,l=e.dilationHeight,u=e.dilationWidth,d=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,m=e.inChannels%4,h=e.dataFormat===`channelsLast`,g=h?1:2,_=h?2:3,v=h?3:1,y=``,b=``;n&&(y=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:i?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`
          float activation(float x) {
            ${n}
          }
        `,b=`result = activation(result);`);let x=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
      ${y}

      const ivec2 strides = ivec2(${s}, ${c});
      const ivec2 pads = ivec2(${a}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d2 = coords[${v}];

        ivec2 xRCCorner =
            ivec2(coords[${g}], coords[${_}]) * strides - pads;
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, d2) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${d}; wR++) {
          int xR = xRCorner + wR * ${l};

          if (xR < 0 || xR >= ${e.inHeight}) {
            continue;
          }

          for (int wC = 0; wC < ${f}; wC++) {
            int xC = xCCorner + wC * ${u};

            if (xC < 0 || xC >= ${e.inWidth}) {
              continue;
            }

            for (int d1 = 0; d1 < ${p}; d1 += 4) {
              vec4 wValues = vec4(
                getW(wR, wC, d1, d2),
                getW(wR, wC, d1 + 1, d2),
                getW(wR, wC, d1 + 2, d2),
                getW(wR, wC, d1 + 3, d2)
              );

              if (${h}) {
                vec4 xValues = vec4(
                  getX(batch, xR, xC, d1),
                  getX(batch, xR, xC, d1 + 1),
                  getX(batch, xR, xC, d1 + 2),
                  getX(batch, xR, xC, d1 + 3)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec4 xValues = vec4(
                  getX(batch, d1, xR, xC),
                  getX(batch, d1 + 1, xR, xC),
                  getX(batch, d1 + 2, xR, xC),
                  getX(batch, d1 + 3, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }
            }

            if (${m===1}) {

              if (${h}) {
                dotProd +=
                    getX(batch, xR, xC, ${p}) *
                    getW(wR, wC, ${p}, d2);
              } else {
                dotProd +=
                    getX(batch, ${p}, xR, xC) *
                    getW(wR, wC, ${p}, d2);
              }

            } else if (${m===2}) {
              vec2 wValues = vec2(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2)
              );

              if (${h}) {
                vec2 xValues = vec2(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec2 xValues = vec2(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            } else if (${m===3}) {
              vec3 wValues = vec3(
                getW(wR, wC, ${p}, d2),
                getW(wR, wC, ${p} + 1, d2),
                getW(wR, wC, ${p} + 2, d2)
              );

              if (${h}) {
                vec3 xValues = vec3(
                  getX(batch, xR, xC, ${p}),
                  getX(batch, xR, xC, ${p} + 1),
                  getX(batch, xR, xC, ${p} + 2)
                );
                dotProd += dot(xValues, wValues);
              } else {
                vec3 xValues = vec3(
                  getX(batch, ${p}, xR, xC),
                  getX(batch, ${p} + 1, xR, xC),
                  getX(batch, ${p} + 2, xR, xC)
                );
                dotProd += dot(xValues, wValues);
              }

            }
          }
        }

        float result = dotProd;
        ${x}
        ${b}
        setOutput(result);
      }
    `}},d2=class{constructor(e){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;let t=e.padInfo.front,n=e.padInfo.top,r=e.padInfo.left,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=e.dilationDepth,c=e.dilationHeight,l=e.dilationWidth,u=e.filterDepth,d=e.filterHeight,f=e.filterWidth,p=Math.floor(e.inChannels/4)*4,m=e.inChannels%4;this.userCode=`
      const ivec3 strides = ivec3(${i}, ${a}, ${o});
      const ivec3 pads = ivec3(${t}, ${n}, ${r});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d2 = coords.u;

        ivec3 xFRCCorner = ivec3(coords.y, coords.z, coords.w) * strides - pads;
        int xFCorner = xFRCCorner.x;
        int xRCorner = xFRCCorner.y;
        int xCCorner = xFRCCorner.z;

        // Convolve x(?, ?, ?, d1) with w(:, :, :, d1, d2) to get
        // y(yF, yR, yC, d2). ? = to be determined. : = across all
        // values in that axis.
        float dotProd = 0.0;
        for (int wF = 0; wF < ${u}; wF++) {
          int xF = xFCorner + wF * ${s};

          if (xF < 0 || xF >= ${e.inDepth}) {
            continue;
          }

          for (int wR = 0; wR < ${d}; wR++) {
            int xR = xRCorner + wR * ${c};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int wC = 0; wC < ${f}; wC++) {
              int xC = xCCorner + wC * ${l};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              for (int d1 = 0; d1 < ${p}; d1 += 4) {
                vec4 xValues = vec4(
                  getX(batch, xF, xR, xC, d1),
                  getX(batch, xF, xR, xC, d1 + 1),
                  getX(batch, xF, xR, xC, d1 + 2),
                  getX(batch, xF, xR, xC, d1 + 3)
                );
                vec4 wValues = vec4(
                  getW(wF, wR, wC, d1, d2),
                  getW(wF, wR, wC, d1 + 1, d2),
                  getW(wF, wR, wC, d1 + 2, d2),
                  getW(wF, wR, wC, d1 + 3, d2)
                );

                dotProd += dot(xValues, wValues);
              }

              if (${m===1}) {
                dotProd +=
                  getX(batch, xF, xR, xC, ${p}) *
                  getW(wF, wR, wC, ${p}, d2);
              } else if (${m===2}) {
                vec2 xValues = vec2(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1)
                );
                vec2 wValues = vec2(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2)
                );
                dotProd += dot(xValues, wValues);
              } else if (${m===3}) {
                vec3 xValues = vec3(
                  getX(batch, xF, xR, xC, ${p}),
                  getX(batch, xF, xR, xC, ${p} + 1),
                  getX(batch, xF, xR, xC, ${p} + 2)
                );
                vec3 wValues = vec3(
                  getW(wF, wR, wC, ${p}, d2),
                  getW(wF, wR, wC, ${p} + 1, d2),
                  getW(wF, wR, wC, ${p} + 2, d2)
                );
                dotProd += dot(xValues, wValues);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}})),p2,m2=o((()=>{q(),xY(),p2=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`pads`,type:`ivec2`},{name:`strides`,type:`ivec2`},{name:`dilations`,type:`ivec2`},{name:`inDims`,type:`ivec2`}],this.outputShape=e.outShape,this.enableShapeUniforms=bY(this.outputShape.length);let a=e.padInfo.left,o=e.strideWidth,s=e.dilationWidth,c=e.filterHeight,l=e.filterWidth,u=l,d=`
       int xR; int xC; int xCOffset;
       vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<l;e++)d+=`
           vec4 xTexelC${e*2};
           int xTexelC${e*2}Ready;
           vec4 xTexelC${e*2+1};
           int xTexelC${e*2+1}Ready;
           vec4 xC${e};`;d+=`
     for (int r = 0; r < ${c}; r++) {
      for (int d1 = 0; d1 < ${e.inChannels}; d1 += 2) {
       `;for(let e=0;e<l;e++)d+=`
           xTexelC${e*2} = vec4(0.0);
           xTexelC${e*2}Ready = 0;
           xTexelC${e*2+1} = vec4(0.0);
           xTexelC${e*2+1}Ready = 0;
           xC${e} = vec4(0.0);`;d+=`
         xR = xRCorner + r * dilations[0];
         if (xR >=0 && xR < inDims[0]) {
       `;for(let t=0;t<(u+1)/2;t++){let n=t*2;if(d+=`
           xC = xCCorner + ${n*s};
           `,o===1){if(n<l&&(a%2==1?(d+=`
                 xCOffset = xC + 1;
                 if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xCOffset, d1);

                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }
               `,s===1&&n>0?d+=`
                 xC${n} = vec4(xTexelC${n-2}.zw, xTexelC${n}.xy);
                 `:d+=`
                   xCOffset = xC + 1 - 2;

                   if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       previous.zw = vec2(0.0);
                     }

                     xC${n} = vec4(previous.zw, xTexelC${n}.xy);
                   } else {
                     xC${n} = vec4(0.0, 0.0, xTexelC${n}.xy);
                   }
                   `):d+=`
                 if (xC >= 0 && xC < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 xC${n} = xTexelC${n};
                 `,n+1<l)){let e=a%2==0?de(s):s;s%2==0&&a%2==1||s%2!=0&&a%2!=1?(d+=`
                   xCOffset = xC + imod(pads[1], 2) + ${e};

                   if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                     xTexelC${n+1} = getX(batch, xR, xCOffset, d1);

                     // Need to manually clear unused channels in case
                     // we're reading from recycled texture.
                     if (xCOffset + 1 >= inDims[1]) {
                       xTexelC${n+1}.zw = vec2(0.0);
                     }
                     xTexelC${n+1}Ready = 1;
                   }
                   `,s>1?d+=`
                     xCOffset -= 2;
                     if (xCOffset >= 0 && xCOffset < inDims[1]) {
                      previous = getX(batch, xR, xCOffset, d1);
                      xC${n+1} = vec4(previous.zw, xTexelC${n+1}.xy);
                     } else {
                      xC${n+1} = vec4(0.0, 0.0, xTexelC${n+1}.xy);
                     }
                     `:d+=`
                     xC${n+1} = vec4(xTexelC${n}.zw, xTexelC${n+1}.xy);
                     `):e===1?d+=`
                     xC${n+1} = xTexelC${n};
                     `:d+=`
                     xCOffset = xC + ${e};

                     if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                       xTexelC${n+1} = getX(batch, xR, xCOffset, d1);
                       if (xCOffset + 1 >= inDims[1]) {
                         xTexelC${n+1}.zw = vec2(0.0);
                       }
                       xTexelC${n+1}Ready = 1;
                     }

                     xC${n+1} = xTexelC${n+1};
                     `}}else n<l&&(a%2==1?(d+=`
                 xCOffset = xC + 1 - strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xCOffset, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${n+1}Ready == 0) {
                   xTexelC${n+1} = getX(batch, xR, xC + 1, d1);
                   // Need to manually clear unused channels in case
                   // we're reading from recycled texture.
                   if (xC + 2 >= inDims[1]) {
                     xTexelC${n+1}.zw = vec2(0.0);
                   }
                   xTexelC${n+1}Ready = 1;
                 }

                 xC${n} = vec4(xTexelC${n}.zw, xTexelC${n+1}.zw);
               `,n+1<l&&(d+=`
                   final = vec4(0.0);
                   xCOffset = xC + 1 + strides[1];
                   if(xCOffset >= 0 && xCOffset < inDims[1]) {
                     final = getX(batch, xR, xCOffset, d1);
                   }
                   xC${n+1} = vec4(xTexelC${n+1}.xy, final.xy);
                 `)):(d+=`
                 if(xC >= 0 && xC < inDims[1] && xTexelC${n}Ready == 0) {
                   xTexelC${n} = getX(batch, xR, xC, d1);
                   if (xC + 1 >= inDims[1]) {
                     xTexelC${n}.zw = vec2(0.0);
                   }
                   xTexelC${n}Ready = 1;
                 }

                 xCOffset = xC + strides[1];
                 if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${n+1}Ready == 0) {
                   xTexelC${n+1} = getX(batch, xR, xCOffset, d1);
                   if (xCOffset + 1 >= inDims[1]) {
                     xTexelC${n+1}.zw = vec2(0.);
                   }
                   xTexelC${n+1}Ready = 1;
                 }

                 xC${n} = vec4(
                   xTexelC${n}.xy, xTexelC${n+1}.xy);
               `,n+1<l&&(d+=`
                   xC${n+1} = vec4(xTexelC${n}.zw, xTexelC${n+1}.zw);
                 `)));n<l&&(d+=`
             wTexel = getW(r, ${n}, d1, d2);
             dotProd += xC${n}.xxzz * vec4(wTexel.xy, wTexel.xy);
             if(d1 + 1 < ${e.inChannels}) {
               dotProd += xC${n}.yyww * vec4(wTexel.zw, wTexel.zw);
             }
           `,n+1<l&&(d+=`
               wTexel = getW(r, ${n+1}, d1, d2);
               dotProd += xC${n+1}.xxzz * vec4(wTexel.xy, wTexel.xy);
               if(d1 + 1 < ${e.inChannels}) {
                 dotProd += xC${n+1}.yyww * vec4(wTexel.zw, wTexel.zw);
               }
             `))}d+=`
     }
   `,d+=`
     }
   `,d+=`
     }
   `;let f=``,p=``;n&&(f=r?`vec4 activation(vec4 a) {
           vec4 b = getPreluActivationWeightsAtOutCoords();
           ${n}
         }`:i?`vec4 activation(vec4 a) {
           vec4 b = getLeakyreluAlphaAtOutCoords();
           ${n}
         }`:`vec4 activation(vec4 x) {
           ${n}
         }`,p=`result = activation(result);`);let m=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
       ${f}

       void main() {
         ivec4 coords = getOutputCoords();
         int batch = coords.x;
         ivec2 xRCCorner = coords.yz * strides - pads;
         int d2 = coords.w;
         int xRCorner = xRCCorner.x;
         int xCCorner = xRCCorner.y;

         //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
         vec4 dotProd = vec4(0.000000000000001);

         ${d}

         vec4 result = dotProd - vec4(0.000000000000001);
         ${m}
         ${p}
         setOutput(result);
       }
     `}}})),h2,g2=o((()=>{pJ(),xY(),h2=class{constructor(e,t){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`inputShape`,type:`ivec4`},{name:`pad`,type:`ivec2`},{name:`stride`,type:`ivec2`},{name:`dilation`,type:`ivec2`},{name:`inChannels`,type:`int`},{name:`itemsPerBlockRow`,type:`int`},{name:`outWidth`,type:`int`}],this.outputShape=e,this.enableShapeUniforms=bY(this.outputShape.length);let{dataFormat:n}=t,r=fJ(),i=n===`channelsLast`,a=i?1:2,o=i?2:3,s=this.enableShapeUniforms?`if(blockIndex < outShape[2] && pos < outShape[1]) {`:`if(blockIndex < ${e[2]} && pos < ${e[1]}) {`,c=``;for(let e=0;e<=1;e++)for(let t=0;t<=1;t++)c+=`
          blockIndex = rc.z + ${t};
          pos = rc.y + ${e};

          ${s}
            offsetY = int(blockIndex / outWidth) * stride[0] - pad[0];
            d0 = offsetY + dilation[0] * (pos / itemsPerBlockRow);

            if(d0 < inputShape[${a}] && d0 >= 0) {
              // Use custom imod instead mod. On Intel GPU, mod may generate
              // unexpected value.
              // https://github.com/tensorflow/tfjs/issues/5447
              offsetX = imod(blockIndex, outWidth) * stride[1] - pad[1];
              d1 = offsetX + dilation[1] * (imod(pos, itemsPerBlockRow) /
                  inChannels);

              if(d1 < inputShape[${o}] && d1 >= 0) {

                ch = imod(pos, inChannels);

                if (${i}) {
                  innerDims = vec2(d1, ch);
                  result[${e*2+t}] = getChannel(
                    getA(rc.x, d0, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                } else {
                  innerDims = vec2(d0, d1);
                  result[${e*2+t}] = getChannel(
                    getA(rc.x, ch, int(innerDims.x),
                    int(innerDims.y)), innerDims);
                }
              }
            }
          }
        `;this.userCode=`
      void main() {
        ivec3 rc = getOutputCoords();

        vec4 result = vec4(0);

        int blockIndex, pos, offsetY, d0, offsetX, d1, ch;
        vec2 innerDims;

        ${c}

        ${r.output} = result;
      }
    `}}}));function _2(e,t){let n=e.length;return n>=3?t?[...e.slice(0,-3),e[n-3]*e[n-2],e[n-1]]:[...e.slice(0,-3),e[n-3],e[n-2]*e[n-1]]:!t&&n===1&&e[0]>1?[e[0],1]:null}function v2({x:e,filter:t,convInfo:n,backend:r,bias:i=null,preluActivationWeights:a=null,leakyreluAlpha:o=0,activation:s=null}){let c=e.shape,l=r.texData.get(e.dataId),u=n.inChannels,d=c[0]*c[1]*c[2],f=n.outChannels,p=n.dataFormat===`channelsLast`,m,h=[];if(a!=null){let e=_2(a.shape,p);e!=null&&(a=$({inputs:{x:a},backend:r,attrs:{shape:e}}),h.push(a))}if(i!=null){let e=_2(i.shape,p);e!=null&&(i=$({inputs:{x:i},backend:r,attrs:{shape:e}}),h.push(i))}if(!((d===1||f===1)&&u>1e3)&&l.isPacked&&p&&l.texture!=null&&c[2]%2!=0&&ge(l.shape.slice(-3),c.slice(-3))){let u=c[0]*c[1]*(c[2]+1),d={dataId:e.dataId,shape:[1,u,n.inChannels],dtype:e.dtype},f=l.shape;l.shape=l.shape.slice(),l.shape[l.shape.length-2]++,E(qq(l.shape,d.shape),()=>`packed reshape ${l.shape} to ${d.shape} isn't free`);let p=$({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}});h.push(p);let g=c$({a:d,b:p,backend:r,transposeA:!1,transposeB:!1,bias:i,activation:s,preluActivationWeights:a,leakyreluAlpha:o}),_=r.texData.get(g.dataId);E(_.isPacked,()=>`batchMatMul result is expected to be packed`),l.shape=f,_.shape=n.outShape,m=oQ({inputs:{x:g},backend:r}),m.shape=n.outShape,h.push(g)}else{let c=n.outHeight*n.outWidth,l=$({inputs:{x:e},backend:r,attrs:{shape:p?[n.batchSize,c,n.inChannels]:[n.batchSize,n.inChannels,c]}}),u=$({inputs:{x:t},backend:r,attrs:{shape:[1,n.inChannels,n.outChannels]}}),d=c$({a:p?l:u,b:p?u:l,transposeA:!p,transposeB:!1,backend:r,bias:i,activation:s,preluActivationWeights:a,leakyreluAlpha:o});m=$({inputs:{x:d},backend:r,attrs:{shape:n.outShape}}),h.push(l),h.push(u),h.push(d)}for(let e of h)r.disposeIntermediateTensorInfo(e);return m}function y2({x:e,filter:t,convInfo:n,backend:r,bias:i=null,preluActivationWeights:a=null,leakyreluAlpha:o=0,activation:s=null}){let{filterWidth:c,filterHeight:l,inChannels:u,outWidth:d,outHeight:f,dataFormat:p}=n,m=p===`channelsLast`,h=c*l*u,g=f*d,_=[n.batchSize,h,g],v=[];if(a!=null){let e=_2(a.shape,m);e!=null&&(a=$({inputs:{x:a},backend:r,attrs:{shape:e}}),v.push(a))}if(i!=null){let e=_2(i.shape,m);e!=null&&(i=$({inputs:{x:i},backend:r,attrs:{shape:e}}),v.push(i))}let y=$({inputs:{x:t},backend:r,attrs:{shape:[1,h,D(t.shape)/h]}});v.push(y);let b=new h2(_,n),x=[e.shape,[n.padInfo.top,n.padInfo.left],[n.strideHeight,n.strideWidth],[n.dilationHeight,n.dilationWidth],[n.inChannels],[n.filterWidth*n.inChannels],[n.outWidth]],S=r.runWebGLProgram(b,[e],`float32`,x),C=$({inputs:{x:S},backend:r,attrs:{shape:_}});v.push(S),v.push(C);let w=i!=null,ee=a!=null,te=s===`leakyrelu`,T=s?wQ(s,!0):null,ne=new DQ(m?C.shape:y.shape,m?y.shape:C.shape,m?[n.batchSize,g,n.outChannels]:[n.batchSize,n.outChannels,g],!0,!1,w,T,ee,te),re=m?[C,y]:[y,C];if(i&&re.push(i),ee&&re.push(a),te){let e=r.makeTensorInfo([],`float32`,Ai(o,`float32`));re.push(e),v.push(e)}let ie=r.runWebGLProgram(ne,re,`float32`),ae=$({inputs:{x:ie},backend:r,attrs:{shape:n.outShape}});v.push(ie);for(let e of v)r.disposeIntermediateTensorInfo(e);return ae}var b2=o((()=>{q(),g2(),EQ(),OQ(),uJ(),l$(),cQ(),zQ()}));function x2(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dataFormat:c,dilations:l,dimRoundingMode:u}=r,d=oc(c),f=Ks(i.shape,a.shape,o,l,s,u,!1,d),p;if(f.filterHeight===1&&f.filterWidth===1&&f.dilationHeight===1&&f.dilationWidth===1&&f.strideHeight===1&&f.strideWidth===1&&(f.padInfo.type===`SAME`||f.padInfo.type===`VALID`))p=v2({x:i,filter:a,convInfo:f,backend:n});else if(f.strideWidth<=2&&d===`channelsLast`&&k().getBool(`WEBGL_EXP_CONV`)){let e=new p2(f),t=[[f.padInfo.top,f.padInfo.left],[f.strideHeight,f.strideWidth],[f.dilationHeight,f.dilationWidth],[f.inHeight,f.inWidth]];p=n.runWebGLProgram(e,[i,a],`float32`,t)}else if(k().getBool(`WEBGL_CONV_IM2COL`))p=y2({x:i,filter:a,convInfo:f,backend:n});else{let e=new u2(f);p=n.runWebGLProgram(e,[i,a],`float32`)}let m=$({inputs:{x:p},backend:n,attrs:{shape:f.outShape}});return n.disposeIntermediateTensorInfo(p),m}var S2,C2=o((()=>{q(),f2(),m2(),b2(),zQ(),S2={kernelName:kt,backendName:`webgl`,kernelFunc:x2}})),w2,T2,E2,D2,O2=o((()=>{w2=class{constructor(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;let t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,i=e.padInfo.left,a=e.dataFormat===`channelsLast`;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int d2 = coords.w;

        // Convolve x(?, ?, d1) with dy(:, :, d2) to get dw(wR, wC, d1, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${n} - ${i};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              ${a?`float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);`:`float dyValue = getDy(b, d2, yR, yC);
              float xValue = getX(b, d1, xR, xC);
              dotProd += (xValue * dyValue);`}
            }
          }
        }
        setOutput(dotProd);
      }
    `}},T2=class{constructor(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=e.dataFormat===`channelsLast`,o=t-1-e.padInfo.top,s=n-1-e.padInfo.left,c=a?1:2,l=a?2:3,u=a?3:1;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[${u}];

        ivec2 dyCorner = ivec2(coords[${c}], coords[${l}]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            float dyC = float(dyCCorner + wC) / ${i}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${n} - 1 - wC;

            for (int d2 = 0; d2 < ${e.outChannels}; d2++) {

              if (${a}) {
                float xValue = getDy(batch, idyR, idyC, d2);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              } else {
                float xValue = getDy(batch, d2, idyR, idyC);
                float wValue = getW(wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }

            }
          }
        }
        setOutput(dotProd);
      }
    `}},E2=class{constructor(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;let t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,i=e.padInfo.front,a=e.padInfo.top,o=e.padInfo.left;this.userCode=`
      void main() {
        ivec5 coords = getOutputCoords();
        int wF = coords.x;
        int wR = coords.y;
        int wC = coords.z;
        int d1 = coords.w;
        int d2 = coords.u;

        float dotProd = 0.0;

        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yF = 0; yF < ${e.outDepth}; yF++) {
            int xF = wF + yF * ${t} - ${i};

            if (xF < 0 || xF >= ${e.inDepth}) {
              continue;
            }

            for (int yR = 0; yR < ${e.outHeight}; yR++) {
              int xR = wR + yR * ${n} - ${a};

              if (xR < 0 || xR >= ${e.inHeight}) {
                continue;
              }

              for (int yC = 0; yC < ${e.outWidth}; yC++) {
                int xC = wC + yC * ${r} - ${o};

                if (xC < 0 || xC >= ${e.inWidth}) {
                  continue;
                }

                float dyValue = getDy(b, yF, yR, yC, d2);
                float xValue = getX(b, xF, xR, xC, d1);
                dotProd += (xValue * dyValue);
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}},D2=class{constructor(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;let t=e.filterDepth,n=e.filterHeight,r=e.filterWidth,i=e.strideDepth,a=e.strideHeight,o=e.strideWidth,s=t-1-e.padInfo.front,c=n-1-e.padInfo.top,l=r-1-e.padInfo.left;this.userCode=`
      const ivec3 pads = ivec3(${s}, ${c}, ${l});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.u;


        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyFCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        float dotProd = 0.0;
        for (int wF = 0; wF < ${t}; wF++) {
          float dyF = float(dyFCorner + wF) / ${i}.0;

          if (dyF < 0.0 || dyF >= ${e.outDepth}.0 || fract(dyF) > 0.0) {
            continue;
          }
          int idyF = int(dyF);

          int wFPerm = ${t} - 1 - wF;

          for (int wR = 0; wR < ${n}; wR++) {
            float dyR = float(dyRCorner + wR) / ${a}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
              fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            int wRPerm = ${n} - 1 - wR;

            for (int wC = 0; wC < ${r}; wC++) {
              float dyC = float(dyCCorner + wC) / ${o}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              int wCPerm = ${r} - 1 - wC;

              for (int d2 = 0; d2 < ${e.outChannels}; d2++) {
                float xValue = getDy(batch, idyF, idyR, idyC, d2);
                float wValue = getW(wFPerm, wRPerm, wCPerm, d1, d2);
                dotProd += xValue * wValue;
              }
            }
          }
        }
        setOutput(dotProd);
      }
    `}}}));function k2(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,dataFormat:c,dimRoundingMode:l,filterShape:u}=r,d=oc(c),f=new w2(Ks(i.shape,u,o,1,s,l,!1,d));return n.runWebGLProgram(f,[i,a],`float32`)}var A2,j2=o((()=>{q(),O2(),A2={kernelName:At,backendName:`webgl`,kernelFunc:k2}})),M2,N2=o((()=>{xY(),M2=class{constructor(e){this.variableNames=[`dy`,`W`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`strides`,type:`vec2`}],this.outputShape=e.inShape,this.enableShapeUniforms=bY(this.outputShape.length);let t=e.filterHeight,n=e.filterWidth,r=t-1-e.padInfo.top,i=n-1-e.padInfo.left;this.userCode=`
      const ivec2 pads = ivec2(${r}, ${i});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];

        ivec2 dyCorner = ivec2(coords[1], coords[2]) - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        vec4 result = vec4(0.);
        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / strides[0];
          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);
          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            int wCPerm = ${n} - 1 - wC;

            float dyC = float(dyCCorner + wC) / strides[1];
            bool idyCVal = (dyC >= 0.0) && (dyC < ${e.outWidth}.0)
              && (fract(dyC) == 0.0);
            int idyC = int(dyC);

            float dyC2 = float(dyCCorner + wC + 1) / strides[1];
            bool idyCVal2 = (dyC2 >= 0.0) && (dyC2 < ${e.outWidth}.0)
              && (fract(dyC2) == 0.0);
            int idyC2 = int(dyC2);

            if (idyCVal && idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec4 dySample2 = (idyC / 2 == idyC2 / 2) ?
                  dySample : getDy(batch, idyR, idyC2, d2);

                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));

                dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample2.xy : dySample2.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC, d2);
                vec2 dyValue = mod(float(idyC), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.xy += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            } else if (idyCVal2) {
              for (int d2 = 0; d2 < ${e.outChannels}; d2 += 2) {
                vec4 wValue = getW(wRPerm, wCPerm, d1, d2);
                vec4 dySample = getDy(batch, idyR, idyC2, d2);
                vec2 dyValue = mod(float(idyC2), 2.) == 0. ?
                  dySample.xy : dySample.zw;
                result.zw += vec2(dot(dyValue, wValue.xy),
                  dot(dyValue, wValue.zw));
              }
            }
          }
        }
        setOutput(result);
      }
    `}}}));function P2(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{inputShape:o,strides:s,pad:c,dataFormat:l,dimRoundingMode:u}=r,d=oc(l),f=Ks(o,a.shape,s,1,c,u,!1,d);if(k().getBool(`WEBGL_PACK_CONV2DTRANSPOSE`)&&d===`channelsLast`){let e=[[f.strideHeight,f.strideWidth]],t=new M2(f);return n.runWebGLProgram(t,[i,a],`float32`,e)}else{let e=new T2(f);return n.runWebGLProgram(e,[i,a],`float32`)}}var F2,I2=o((()=>{q(),O2(),N2(),F2={kernelName:jt,backendName:`webgl`,kernelFunc:P2}}));function L2(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c}=r,l=new d2(qs(i.shape,a.shape,o,c,s));return n.runWebGLProgram(l,[i,a],`float32`)}var R2,z2=o((()=>{q(),f2(),R2={kernelName:Mt,backendName:`webgl`,kernelFunc:L2}}));function B2(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,pad:s,filterShape:c}=r,l=new E2(qs(i.shape,c,o,1,s));return n.runWebGLProgram(l,[i,a],`float32`)}var V2,H2=o((()=>{q(),O2(),V2={kernelName:Nt,backendName:`webgl`,kernelFunc:B2}}));function U2(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{pad:o,strides:s,inputShape:c}=r,l=new D2(qs(c,a.shape,s,1,o));return n.runWebGLProgram(l,[i,a],`float32`)}var W2,G2=o((()=>{q(),O2(),W2={kernelName:Pt,backendName:`webgl`,kernelFunc:U2}})),K2,q2,J2,Y2,X2=o((()=>{q(),aQ(),EQ(),K2=TQ+`
  return cos(x);
`,q2=`
  vec4 result = cos(x);
  bvec4 isNaN = isnan(x);
  ${rQ}
  return result;
`,J2=SQ({opSnippet:K2,packedOpSnippet:q2}),Y2={kernelName:`Cos`,backendName:`webgl`,kernelFunc:J2}})),Z2,Q2,$2,e4=o((()=>{q(),EQ(),Z2=`
  float e2x = exp(-x);
  return (e2x + 1.0 / e2x) / 2.0;
`,Q2=SQ({opSnippet:Z2}),$2={kernelName:Ft,backendName:`webgl`,kernelFunc:Q2}})),t4,n4=o((()=>{t4=class{constructor(e,t,n,r,i){this.variableNames=[`Image`,`Boxes`,`BoxInd`],this.outputShape=[];let[a,o,s,c]=e,[l]=t,[u,d]=n;this.outputShape=[l,u,d,c];let f=+(r===`bilinear`),[p,m]=[`${o-1}.0`,`${s-1}.0`],[h,g,_]=u>1?[`${(o-1)/(u-1)}`,`(y2-y1) * height_ratio`,`y1*${p} + float(y)*(height_scale)`]:[`0.0`,`0.0`,`0.5 * (y1+y2) * ${p}`],[v,y,b]=d>1?[`${(s-1)/(d-1)}`,`(x2-x1) * width_ratio`,`x1*${m} + float(x)*(width_scale)`]:[`0.0`,`0.0`,`0.5 * (x1+x2) * ${m}`];this.userCode=`
      const float height_ratio = float(${h});
      const float width_ratio = float(${v});
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int y = coords[1];
        int x = coords[2];
        int d = coords[3];

        // get box vals
        float y1 = getBoxes(b,0);
        float x1 = getBoxes(b,1);
        float y2 = getBoxes(b,2);
        float x2 = getBoxes(b,3);

        // get image in batch index
        int bInd = round(getBoxInd(b));
        if(bInd < 0 || bInd >= ${a}) {
          return;
        }

        float height_scale = ${g};
        float width_scale = ${y};

        float in_y = ${_};
        if( in_y < 0.0 || in_y > ${p} ) {
          setOutput(float(${i}));
          return;
        }
        float in_x = ${b};
        if( in_x < 0.0 || in_x > ${m} ) {
          setOutput(float(${i}));
          return;
        }

        vec2 sourceFracIndexCR = vec2(in_x,in_y);
        if(${f} == 1) {
          // Compute the four integer indices.
          ivec2 sourceFloorCR = ivec2(sourceFracIndexCR);
          ivec2 sourceCeilCR = ivec2(ceil(sourceFracIndexCR));

          float topLeft = getImage(b, sourceFloorCR.y, sourceFloorCR.x, d);
          float bottomLeft = getImage(b, sourceCeilCR.y, sourceFloorCR.x, d);
          float topRight = getImage(b, sourceFloorCR.y, sourceCeilCR.x, d);
          float bottomRight = getImage(b, sourceCeilCR.y, sourceCeilCR.x, d);

          vec2 fracCR = sourceFracIndexCR - vec2(sourceFloorCR);

          float top = topLeft + (topRight - topLeft) * fracCR.x;
          float bottom = bottomLeft + (bottomRight - bottomLeft) * fracCR.x;
          float newValue = top + (bottom - top) * fracCR.y;
          setOutput(newValue);
        } else {
          // Compute the coordinators of nearest neighbor point.
          ivec2 sourceNearestCR = ivec2(floor(
            sourceFracIndexCR + vec2(0.5,0.5)));
          float newValue = getImage(b, sourceNearestCR.y, sourceNearestCR.x, d);
          setOutput(newValue);
        }
      }
    `}}})),r4,i4,a4=o((()=>{q(),n4(),r4=e=>{let{inputs:t,backend:n,attrs:r}=e,{image:i,boxes:a,boxInd:o}=t,{cropSize:s,method:c,extrapolationValue:l}=r,u=new t4(i.shape,a.shape,s,c,l);return n.runWebGLProgram(u,[i,a,o],`float32`)},i4={kernelName:Rt,backendName:`webgl`,kernelFunc:r4}}));function o4(e,t,n){if(e===1)return`${t}`;if(e===2)return`${t}.x, ${t}.y`;if(e===3)return`${t}.x, ${t}.y, ${t}.z`;if(e===4)return`${t}.x, ${t}.y, ${t}.z, ${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}function s4(e,t,n){if(e===1)return`${t}`;if(e===2)return`${t}.y`;if(e===3)return`${t}.z`;if(e===4)return`${t}.w`;throw Error(`Cumulative ${n} for rank ${e} is not yet supported`)}var c4,l4,u4=o((()=>{mY(),(function(e){e.Prod=`*`,e.Sum=`+`})(c4||={}),l4=class{constructor(e,t,n,r){this.op=e,this.outputShape=t,this.variableNames=[`x`],this.customUniforms=[{name:`index`,type:`float`}];let i=this.outputShape.length,a=this.op===c4.Prod?`1.0`:`0.0`,o=n?a:`getX(${o4(i,`coords`,this.op)})`,s=this.outputShape[this.outputShape.length-1],c=``,l=``;n?(c=r?`end != ${s-1}`:`end != 0`,l=r?`end + 1`:`end - 1`):(c=r?`end + pow2 < ${s}`:`end >= pow2`,l=r?`end + pow2`:`end - pow2`),this.userCode=`
      void main() {
        ${aY(i)} coords = getOutputCoords();
        int end = ${s4(i,`coords`,this.op)};
        float val = ${o};
        int pow2 = int(pow(2.0, index));
        if (${c}) {
          int idx = ${l};
          ${s4(i,`coords`,this.op)} = idx;
          val ${this.op}= getX(${o4(i,`coords`,this.op)});
        }
        setOutput(val);
      }
    `}}}));function d4(e,t,n,r,i,a){let o=t.shape.length,s=Su([r],o),c=t;s!=null&&(c=a$({inputs:{x:t},backend:n,attrs:{perm:s}}));let l=wu(1,o)[0];if(l!==o-1)throw Error(`WebGL cumprod shader expects an inner-most axis=${t.shape.length-1} but got axis=${r}`);let u=c.shape[l],d=oQ({inputs:{x:c},backend:n});for(let t=0;t<=Math.ceil(Math.log2(u))-1;t++){let r=new l4(e,c.shape,!1,a),i=[[t]],o=d;d=n.runWebGLProgram(r,[d],d.dtype,i),n.disposeIntermediateTensorInfo(o)}if(i){let t=new l4(e,c.shape,i,a),r=d;d=n.runWebGLProgram(t,[d],d.dtype),n.disposeIntermediateTensorInfo(r)}if(s!=null){let e=Cu(s),t=a$({inputs:{x:d},backend:n,attrs:{perm:e}});return n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(c),t}return d}var f4=o((()=>{q(),u4(),cQ(),s$()}));function p4(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;return d4(c4.Prod,i,n,a,o,s)}var m4,h4=o((()=>{q(),u4(),f4(),m4={kernelName:It,backendName:`webgl`,kernelFunc:p4}}));function g4(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,exclusive:o,reverse:s}=r;return d4(c4.Sum,i,n,a,o,s)}var _4,v4=o((()=>{q(),u4(),f4(),_4={kernelName:Lt,backendName:`webgl`,kernelFunc:g4}}));function y4(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,weights:a}=t,{size:o,binaryOutput:s}=r;if(i.shape.length===1){let e=cX(n.readSync(i.dataId),n.readSync(a.dataId),a.dtype,a.shape,o);return n.makeTensorInfo([o],a.dtype,e)}else if(i.shape.length===2){let e=lX(n.bufferSync(i),n.bufferSync(a),o,s);return n.makeTensorInfo(e.shape,a.dtype,e.values)}throw Error(`Error in denseBincount: input must be at most rank 2, but got rank${i.shape.length}.`)}var b4,x4=o((()=>{q(),nZ(),b4={kernelName:zt,backendName:`webgl`,kernelFunc:y4}})),S4,C4=o((()=>{S4=class{constructor(e,t,n){this.variableNames=[`x`],this.outputShape=[],this.outputShape=e,this.blockSize=t,this.dataFormat=n,this.userCode=`
    void main() {
      ivec4 coords = getOutputCoords();
      int b = coords[0];
      int h = ${this.getHeightCoordString()};
      int w = ${this.getWidthCoordString()};
      int d = ${this.getDepthCoordString()};

      int in_h = h / ${t};
      int offset_h = imod(h, ${t});
      int in_w = w / ${t};
      int offset_w = imod(w, ${t});
      int offset_d = (offset_h * ${t} + offset_w) *
        ${this.getOutputDepthSize()};
      int in_d = d + offset_d;

      float result = ${this.getInputSamplingString()};
      setOutput(result);
    }
  `}getHeightCoordString(){return this.dataFormat===`NHWC`?`coords[1]`:`coords[2]`}getWidthCoordString(){return this.dataFormat===`NHWC`?`coords[2]`:`coords[3]`}getDepthCoordString(){return this.dataFormat===`NHWC`?`coords[3]`:`coords[1]`}getOutputDepthSize(){return this.dataFormat===`NHWC`?this.outputShape[3]:this.outputShape[1]}getInputSamplingString(){return this.dataFormat===`NHWC`?`getX(b, in_h, in_w, in_d)`:`getX(b, in_d, in_h, in_w)`}}}));function w4(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockSize:a,dataFormat:o}=r,s=i.shape[0],c=o===`NHWC`?i.shape[1]:i.shape[2],l=o===`NHWC`?i.shape[2]:i.shape[3],u=o===`NHWC`?i.shape[3]:i.shape[1],d=c*a,f=l*a,p=u/(a*a),m=new S4(o===`NHWC`?[s,d,f,p]:[s,p,d,f],a,o);return n.runWebGLProgram(m,[i],i.dtype)}var T4,E4=o((()=>{q(),C4(),T4={kernelName:Bt,backendName:`webgl`,kernelFunc:w4}})),D4,O4=o((()=>{xY(),D4=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.customUniforms=[{name:`pads`,type:`ivec2`},{name:`strides`,type:`ivec2`},{name:`dilations`,type:`ivec2`},{name:`inDims`,type:`ivec2`}],this.outputShape=e.outShape,this.enableShapeUniforms=bY(this.outputShape.length);let a=e.filterHeight,o=e.filterWidth,s=e.outChannels/e.inChannels,c=``,l=``;n&&(c=r?`float activation(float a) {
          float b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:i?`float activation(float a) {
          float b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`
          float activation(float x) {
            ${n}
          }
        `,l=`result = activation(result);`);let u=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
      ${c}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${s};
        int q = d2 - d1 * ${s};

        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        // Convolve x(?, ?, d1) with w(:, :, d1, q) to get y(yR, yC, d2).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        // TO DO(dsmilkov): Flatten the two for loops and vec4 the operations.
        for (int wR = 0; wR < ${a}; wR++) {
          int xR = xRCorner + wR * dilations[0];

          if (xR < 0 || xR >= inDims[0]) {
            continue;
          }

          for (int wC = 0; wC < ${o}; wC++) {
            int xC = xCCorner + wC * dilations[1];

            if (xC < 0 || xC >= inDims[1]) {
              continue;
            }

            float xVal = getX(batch, xR, xC, d1);
            float wVal = getW(wR, wC, d1, q);
            dotProd += xVal * wVal;
          }
        }

        float result = dotProd;
        ${u}
        ${l}
        setOutput(result);
      }
    `}}})),k4,A4=o((()=>{q(),xY(),k4=class{constructor(e,t=!1,n=null,r=!1,i=!1){this.variableNames=[`x`,`W`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`pads`,type:`ivec2`},{name:`strides`,type:`ivec2`},{name:`dilations`,type:`ivec2`},{name:`inDims`,type:`ivec2`}],this.outputShape=e.outShape,this.enableShapeUniforms=bY(this.outputShape.length);let a=e.outChannels/e.inChannels,o=e.padInfo.left,s=e.strideWidth,c=e.dilationWidth,l=e.filterHeight,u=e.filterWidth,d=u,f=`
      int xR; int xC; int xCOffset;
      vec4 wTexel; vec4 previous; vec4 final;`;for(let e=0;e<u;e++)f+=`
          vec4 xTexelC${e*2};
          int xTexelC${e*2}Ready;
          vec4 xTexelC${e*2+1};
          int xTexelC${e*2+1}Ready;
          vec4 xC${e};`;f+=`
    for (int r = 0; r < ${l}; r++) {
      `;for(let e=0;e<u;e++)f+=`
          xTexelC${e*2} = vec4(0.0);
          xTexelC${e*2}Ready = 0;
          xTexelC${e*2+1} = vec4(0.0);
          xTexelC${e*2+1}Ready = 0;
          xC${e} = vec4(0.0);`;f+=`
        xR = xRCorner + r * dilations[0];
        if (xR >=0 && xR < inDims[0]) {
      `;for(let e=0;e<(d+1)/2;e++){let t=e*2;if(f+=`
          xC = xCCorner + ${t*c};
          `,s===1){if(t<u&&(o%2==1?(f+=`
                xCOffset = xC + 1;
                if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);

                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }
              `,c===1&&t>0?f+=`
                xC${t} = vec4(xTexelC${t-2}.zw, xTexelC${t}.xy);
                `:f+=`
                  xCOffset = xC + 1 - 2;

                  if (xCOffset >= 0 && xCOffset < inDims[1]) {
                    previous = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      previous.zw = vec2(0.0);
                    }

                    xC${t} = vec4(previous.zw, xTexelC${t}.xy);
                  } else {
                    xC${t} = vec4(0.0, 0.0, xTexelC${t}.xy);
                  }
                  `):f+=`
                if (xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xC${t} = xTexelC${t};
                `,t+1<u)){let e=o%2==0?de(c):c;c%2==0&&o%2==1||c%2!=0&&o%2!=1?(f+=`
                  xCOffset = xC + imod(pads[1], 2) + ${e};

                  if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                    xTexelC${t+1} = getX(batch, xR, xCOffset, d1);

                    // Need to manually clear unused channels in case
                    // we're reading from recycled texture.
                    if (xCOffset + 1 >= inDims[1]) {
                      xTexelC${t+1}.zw = vec2(0.0);
                    }
                    xTexelC${t+1}Ready = 1;
                  }
                  `,c>1?f+=`
                    xCOffset -= 2;
                    if (xCOffset >= 0 && xCOffset < inDims[1]) {
                     previous = getX(batch, xR, xCOffset, d1);
                     xC${t+1} = vec4(previous.zw, xTexelC${t+1}.xy);
                    } else {
                     xC${t+1} = vec4(0.0, 0.0, xTexelC${t+1}.xy);
                    }
                    `:f+=`
                    xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.xy);
                    `):e===1?f+=`
                    xC${t+1} = xTexelC${t};
                    `:f+=`
                    xCOffset = xC + ${e};

                    if (xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                      xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                      if (xCOffset + 1 >= inDims[1]) {
                        xTexelC${t+1}.zw = vec2(0.0);
                      }
                      xTexelC${t+1}Ready = 1;
                    }

                    xC${t+1} = xTexelC${t+1};
                    `}}else t<u&&(o%2==1?(f+=`
                xCOffset = xC + 1 - strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xCOffset, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                if(xC + 1 >= 0 && xC + 1 < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xC + 1, d1);
                  // Need to manually clear unused channels in case
                  // we're reading from recycled texture.
                  if (xC + 2 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.0);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
              `,t+1<u&&(f+=`
                  final = vec4(0.0);
                  xCOffset = xC + 1 + strides[1];
                  if(xCOffset >= 0 && xCOffset < inDims[1]) {
                    final = getX(batch, xR, xCOffset, d1);
                  }
                  xC${t+1} = vec4(xTexelC${t+1}.xy, final.xy);
                `)):(f+=`
                if(xC >= 0 && xC < inDims[1] && xTexelC${t}Ready == 0) {
                  xTexelC${t} = getX(batch, xR, xC, d1);
                  if (xC + 1 >= inDims[1]) {
                    xTexelC${t}.zw = vec2(0.0);
                  }
                  xTexelC${t}Ready = 1;
                }

                xCOffset = xC + strides[1];
                if(xCOffset >= 0 && xCOffset < inDims[1] && xTexelC${t+1}Ready == 0) {
                  xTexelC${t+1} = getX(batch, xR, xCOffset, d1);
                  if (xCOffset + 1 >= inDims[1]) {
                    xTexelC${t+1}.zw = vec2(0.);
                  }
                  xTexelC${t+1}Ready = 1;
                }

                xC${t} = vec4(
                  xTexelC${t}.xy, xTexelC${t+1}.xy);
              `,t+1<u&&(f+=`
                  xC${t+1} = vec4(xTexelC${t}.zw, xTexelC${t+1}.zw);
                `)));t<u&&(f+=`
            wTexel = getW(r, ${t}, d1, q);
            dotProd += xC${t} * vec4(wTexel.xz, wTexel.xz);
          `,t+1<u&&(f+=`
              wTexel = getW(r, ${t+1}, d1, q);
              dotProd += xC${t+1} * vec4(wTexel.xz, wTexel.xz);
            `))}f+=`
    }
  `,f+=`
      }
    `;let p=``,m=``;n&&(p=r?`vec4 activation(vec4 a) {
          vec4 b = getPreluActivationWeightsAtOutCoords();
          ${n}
        }`:i?`vec4 activation(vec4 a) {
          vec4 b = getLeakyreluAlphaAtOutCoords();
          ${n}
        }`:`vec4 activation(vec4 x) {
          ${n}
        }`,m=`result = activation(result);`);let h=t?`result += getBiasAtOutCoords();`:``;t&&this.variableNames.push(`bias`),r&&this.variableNames.push(`preluActivationWeights`),i&&this.variableNames.push(`leakyreluAlpha`),this.userCode=`
      ${p}

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        ivec2 xRCCorner = coords.yz * strides - pads;
        int d2 = coords.w;
        int d1 = d2 / ${a};
        int q = d2 - d1 * ${a};
        int xRCorner = xRCCorner.x;
        int xCCorner = xRCCorner.y;

        //intialize dotProd with a small epsilon seems to reduce GPU accuracy loss.
        vec4 dotProd = vec4(0.000000000000001);

        ${f}

        vec4 result = dotProd - vec4(0.000000000000001);
        ${h}
        ${m}
        setOutput(result);
      }
    `}}}));function j4(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c,dimRoundingMode:l}=r,u=c;u??=[1,1],E(ic(o,u),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${o} and dilations '${u}'`);let d=Ks(i.shape,a.shape,o,u,s,l,!0),f;f=k().getBool(`WEBGL_PACK_DEPTHWISECONV`)&&d.strideWidth<=2&&d.outChannels/d.inChannels===1?new k4(d):new D4(d);let p=[[d.padInfo.top,d.padInfo.left],[d.strideHeight,d.strideWidth],[d.dilationHeight,d.dilationWidth],[d.inHeight,d.inWidth]];return n.runWebGLProgram(f,[i,a],`float32`,p)}var M4,N4=o((()=>{q(),O4(),A4(),M4={kernelName:Vt,backendName:`webgl`,kernelFunc:j4}})),P4,F4,I4=o((()=>{P4=class{constructor(e){this.variableNames=[`x`,`dy`],this.outputShape=e.filterShape;let t=e.strideHeight,n=e.strideWidth,r=e.padInfo.top,i=e.padInfo.left,a=e.outChannels/e.inChannels;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int wR = coords.x;
        int wC = coords.y;
        int d1 = coords.z;
        int dm = coords.w;
        int d2 = d1 * ${a} + dm;

        float dotProd = 0.0;

        // TO DO: Vec4 over the batch size
        for (int b = 0; b < ${e.batchSize}; b++) {
          for (int yR = 0; yR < ${e.outHeight}; yR++) {
            int xR = wR + yR * ${t} - ${r};

            if (xR < 0 || xR >= ${e.inHeight}) {
              continue;
            }

            for (int yC = 0; yC < ${e.outWidth}; yC++) {
              int xC = wC + yC * ${n} - ${i};

              if (xC < 0 || xC >= ${e.inWidth}) {
                continue;
              }

              float dyValue = getDy(b, yR, yC, d2);
              float xValue = getX(b, xR, xC, d1);
              dotProd += (xValue * dyValue);
            }
          }
        }
        setOutput(dotProd);
      }
    `}},F4=class{constructor(e){this.variableNames=[`dy`,`W`],this.outputShape=e.inShape;let t=e.filterHeight,n=e.filterWidth,r=e.strideHeight,i=e.strideWidth,a=t-1-e.padInfo.top,o=n-1-e.padInfo.left,s=e.outChannels/e.inChannels;this.userCode=`
      const ivec2 pads = ivec2(${a}, ${o});

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords[0];
        int d1 = coords[3];
        ivec2 dyCorner = coords.yz - pads;
        int dyRCorner = dyCorner.x;
        int dyCCorner = dyCorner.y;

        float dotProd = 0.0;

        for (int wR = 0; wR < ${t}; wR++) {
          float dyR = float(dyRCorner + wR) / ${r}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          int wRPerm = ${t} - 1 - wR;

          for (int wC = 0; wC < ${n}; wC++) {
            float dyC = float(dyCCorner + wC) / ${i}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            int wCPerm = ${n} - 1 - wC;

            // TO DO: Vec4 over the channelMul
            for (int dm = 0; dm < ${s}; dm++) {
              int d2 = d1 * ${s} + dm;
              float xValue = getDy(batch, idyR, idyC, d2);
              float wValue = getW(wRPerm, wCPerm, d1, dm);
              dotProd += xValue * wValue;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}}));function L4(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,dy:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,filterShape:u}=r,d=new P4(Ks(i.shape,u,o,s,c,l,!0));return n.runWebGLProgram(d,[i,a],`float32`)}var R4,z4=o((()=>{q(),I4(),R4={kernelName:Ht,backendName:`webgl`,kernelFunc:L4}}));function B4(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,filter:a}=t,{strides:o,dilations:s,pad:c,dimRoundingMode:l,inputShape:u}=r,d=new F4(Ks(u,a.shape,o,s,c,l,!0));return n.runWebGLProgram(d,[i,a],`float32`)}var V4,H4=o((()=>{q(),I4(),V4={kernelName:Ut,backendName:`webgl`,kernelFunc:B4}})),U4,W4=o((()=>{U4=class{constructor(e){this.variableNames=[`X`],this.outputShape=[e,e],this.userCode=`
      void main() {
          ivec2 coords = getOutputCoords();
          float val = coords[0] == coords[1] ? getX(coords[0]) : 0.0;
          setOutput(val);
      }
    `}}}));function G4(e){let{inputs:t,backend:n}=e,{x:r}=t,i=[...r.shape,...r.shape],a=D(r.shape),o=$({inputs:{x:r},backend:n,attrs:{shape:[a]}}),s=new U4(a),c=n.runWebGLProgram(s,[o],o.dtype),l=$({inputs:{x:c},backend:n,attrs:{shape:i}});return n.disposeIntermediateTensorInfo(o),n.disposeIntermediateTensorInfo(c),l}var K4,q4=o((()=>{q(),W4(),zQ(),K4={kernelName:Wt,backendName:`webgl`,kernelFunc:G4}})),J4,Y4=o((()=>{J4=class{constructor(e){this.variableNames=[`x`,`W`],this.outputShape=e.outShape;let{inHeight:t,inWidth:n,padInfo:r,strideHeight:i,strideWidth:a,filterHeight:o,filterWidth:s,dilationHeight:c,dilationWidth:l}=e,{top:u,left:d}=r;this.userCode=`
      const ivec2 strides = ivec2(${i}, ${a});
      const ivec2 pads = ivec2(${u}, ${d});
      const float neg_infinity = -3.4e38;

      void main() {
        ivec4 coords = getOutputCoords();
        int batch = coords.x;
        int d1 = coords.w;
        ivec2 outTopLeftCorner =
            coords.yz * strides - pads;
        int hBeg = outTopLeftCorner.x;
        int wBeg = outTopLeftCorner.y;

        float curVal = neg_infinity;
        for (int h = 0; h < ${o}; h++) {
          int hIn = hBeg + h * ${c};

          if (hIn >= 0 && hIn < ${t}) {
            for (int w = 0; w < ${s}; w++) {
              int wIn = wBeg + w * ${l};

              if (wIn >= 0 && wIn < ${n}) {
                float xVal = getX(batch, hIn, wIn, d1);
                float wVal = getW(h, w, d1);

                float val = xVal + wVal;
                if (val > curVal) {
                  curVal = val;
                }
              }
            }
          }
        }

        float result = curVal;
        setOutput(result);
      }
    `}}}));function X4(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a}=t,{strides:o,pad:s,dilations:c}=r,l=Us(i.shape,a.shape,o,s,`NHWC`,c),u,d=new J4(l);u=n.runWebGLProgram(d,[i,a],`float32`);let f=$({inputs:{x:u},backend:n,attrs:{shape:l.outShape}});return n.disposeIntermediateTensorInfo(u),f}var Z4,Q4=o((()=>{q(),Y4(),zQ(),Z4={kernelName:Gt,backendName:`webgl`,kernelFunc:X4}}));function $4(e){let{inputs:t,backend:n,attrs:r}=e,{equation:i}=r,a=t,{allDims:o,summedDims:s,idDims:c}=Ey(i,a.length);Oy(o.length,c,a);let{path:l,steps:u}=ky(s,c),d=u.length,f=null,p=o.length,m=[];for(let e=0;e<d;++e){for(let t of u[e]){let{permutationIndices:e,expandDims:r}=Dy(p,c[t]),i;Ay(e)?i=a[t]:(i=a$({inputs:{x:a[t]},backend:n,attrs:{perm:e}}),m.push(i));let o=i.shape.slice();for(let e=0;e<r.length;++e)o.splice(r[e],0,1);ge(i.shape,o)||(i=$({inputs:{x:i},backend:n,attrs:{shape:o}}),m.push(i)),f===null?f=i:(f=MQ({inputs:{a:i,b:f},backend:n}),m.push(f))}e<d-1&&(l[e]>=0&&(f=n$({inputs:{x:f},backend:n,attrs:{axis:l[e]-(o.length-p),keepDims:!1}}),m.push(f)),p--)}for(let e of m)e!==f&&n.disposeIntermediateTensorInfo(e);return f}var e3,t3=o((()=>{q(),FQ(),zQ(),i$(),s$(),e3={kernelName:Xt,backendName:`webgl`,kernelFunc:$4}})),n3,r3,i3=o((()=>{q(),EQ(),n3=SQ({opSnippet:`return (x >= 0.0) ? x : (exp(x) - 1.0);`,packedOpSnippet:`
  vec4 result;

  result.r = (x.r >= 0.0) ? x.r : (exp(x.r) - 1.0);
  result.g = (x.g >= 0.0) ? x.g : (exp(x.g) - 1.0);
  result.b = (x.b >= 0.0) ? x.b : (exp(x.b) - 1.0);
  result.a = (x.a >= 0.0) ? x.a : (exp(x.a) - 1.0);

  return result;
`}),r3={kernelName:`Elu`,backendName:`webgl`,kernelFunc:n3}})),a3,o3,s3,c3,l3=o((()=>{q(),nQ(),aQ(),a3=`return (b >= 0.0) ? a : a * (b + 1.0);`,o3=`
  vec4 bGTEZero = vec4(greaterThanEqual(b, vec4(0.)));
  return (bGTEZero * a) + ((vec4(1.0) - bGTEZero) * (a * (b + vec4(1.0))));
`,s3=e=>{let{inputs:t,backend:n}=e,{dy:r,y:i}=t,a=k().getBool(`WEBGL_PACK_BINARY_OPERATIONS`)?new iQ(o3,r.shape,i.shape):new tQ(a3,r.shape,i.shape);return n.runWebGLProgram(a,[r,i],r.dtype)},c3={kernelName:Zt,backendName:`webgl`,kernelFunc:s3}})),u3,d3,f3,p3,m3=o((()=>{q(),EQ(),nZ(),u3=`
  return vec4(equal(a, b));
`,d3=`return float(a == b);`,f3=CQ({opSnippet:d3,packedOpSnippet:u3,dtype:`bool`,cpuKernelImpl:mX}),p3={kernelName:Qt,backendName:`webgl`,kernelFunc:f3}})),h3,g3,_3,v3=o((()=>{q(),EQ(),h3=`
  // Error function is calculated approximately with elementary function.
  // See "Handbook of Mathematical Functions with Formulas,
  // Graphs, and Mathematical Tables", Abramowitz and Stegun.
  float p = ${dy};
  float a1 = ${fy};
  float a2 = ${py};
  float a3 = ${my};
  float a4 = ${hy};
  float a5 = ${gy};

  float sign = sign(x);
  x = abs(x);
  float t = 1.0 / (1.0 + p * x);
  return sign * (1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*exp(-x*x));
`,g3=SQ({opSnippet:h3}),_3={kernelName:`Erf`,backendName:`webgl`,kernelFunc:g3}})),y3,b3,x3,S3,C3=o((()=>{q(),EQ(),nZ(),y3=TQ+`
  return exp(x);
`,b3=`
  vec4 result = exp(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,x3=SQ({opSnippet:y3,packedOpSnippet:b3,cpuKernelImpl:hX,dtype:`float32`}),S3={kernelName:`Exp`,backendName:`webgl`,kernelFunc:x3}}));function w3(e){let{inputs:t,attrs:n,backend:r}=e,{dim:i}=n,{input:a}=t,o=a.shape.length,s=a.shape.slice(),c=i;return i<0&&(E(-(o+1)<=i,()=>`Axis must be in the interval [${-(o+1)}, ${o}]`),c=o+i+1),s.splice(c,0,1),$({inputs:{x:a},backend:r,attrs:{shape:s}})}var T3,E3=o((()=>{q(),zQ(),T3={kernelName:$t,backendName:`webgl`,kernelFunc:w3}})),D3,O3,k3,A3=o((()=>{q(),EQ(),nZ(),D3=`return exp(x) - 1.0;`,O3=SQ({opSnippet:D3,packedOpSnippet:D3,cpuKernelImpl:gX}),k3={kernelName:en,backendName:`webgl`,kernelFunc:O3}})),j3,M3=o((()=>{j3=class{constructor(e,t,n){this.variableNames=[`real`,`imag`];let r=t[1];this.outputShape=t;let i=n?`2.0 * ${Math.PI}`:`-2.0 * ${Math.PI}`,a=n?`${r}.0`:`1.0`,o;if(e===`real`)o=`return real * expR - imag * expI;`;else if(e===`imag`)o=`return real * expI + imag * expR;`;else throw Error(`FFT component must be either "real" or "imag", got ${e}.`);this.userCode=`
      const float exponentMultiplier = ${i};

      float unaryOpComplex(float real, float expR, float imag, float expI) {
        ${o}
      }

      float mulMatDFT(int batch, int index) {
        float indexRatio = float(index) / float(${r});
        float exponentMultiplierTimesIndexRatio =
            exponentMultiplier * indexRatio;

        float result = 0.0;

        for (int i = 0; i < ${r}; i++) {
          // x = (-2|2 * PI / N) * index * i;
          float x = exponentMultiplierTimesIndexRatio * float(i);
          float expR = cos(x);
          float expI = sin(x);
          float real = getReal(batch, i);
          float imag = getImag(batch, i);

          result +=
              unaryOpComplex(real, expR, imag, expI) / ${a};
        }

        return result;
      }

      void main() {
        ivec2 coords = getOutputCoords();
        setOutput(mulMatDFT(coords[0], coords[1]));
      }
    `}}}));function N3(e,t,n){let r=n.texData.get(e.dataId),i=D(e.shape),a=e.shape[e.shape.length-1],o=i/a,s=$({inputs:{x:e},backend:n,attrs:{shape:[o,a]}}),c=s.shape,l=new j3(`real`,c,t),u=new j3(`imag`,c,t),d=[{dataId:r.complexTensorInfos.real.dataId,dtype:r.complexTensorInfos.real.dtype,shape:c},{dataId:r.complexTensorInfos.imag.dataId,dtype:r.complexTensorInfos.imag.dtype,shape:c}],f=n.runWebGLProgram(l,d,`float32`),p=n.runWebGLProgram(u,d,`float32`),m=lQ({inputs:{real:f,imag:p},backend:n});n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p);let h=$({inputs:{x:m},backend:n,attrs:{shape:e.shape}});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(m),h}var P3=o((()=>{q(),M3(),dQ(),zQ()}));function F3(e){let{inputs:t,backend:n}=e,{input:r}=t;return N3(r,!1,n)}var I3,L3=o((()=>{q(),P3(),I3={kernelName:`FFT`,backendName:`webgl`,kernelFunc:F3}})),R3,z3=o((()=>{R3=class{constructor(e,t){this.outputShape=[],this.customUniforms=[{name:`value`,type:`float`}],this.variableNames=[`x`],this.outputShape=e,this.userCode=`
      void main() {
        // Input can be obtained from uniform value.
        setOutput(value);
      }
    `}}}));function B3(e){let{backend:t,attrs:n}=e,{shape:r,value:i}=n,{dtype:a}=n;if(a||=Me(i),a===`string`){let e=Te(a,D(r));return e.fill(i),t.makeTensorInfo(r,a,e)}else{let e=new R3(r,i),n=[[i]];return t.runWebGLProgram(e,[],a,n)}}var V3,H3=o((()=>{q(),z3(),V3={kernelName:tn,backendName:`webgl`,kernelFunc:B3}})),U3,W3=o((()=>{U3=class{constructor(e){this.variableNames=[`Image`],this.outputShape=[];let t=e[2];this.outputShape=e,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];

          int coordX = ${t} - x - 1;
          float outputValue;
          if(coordX >= 0 && coordX < ${t}) {
            outputValue = getImage(coords[0], coords[1], coordX, coords[3]);
          } else {
            outputValue = getImage(coords[0], coords[1], coords[2], coords[3]);
          }
          setOutput(outputValue);
        }
    `}}})),G3,K3=o((()=>{q(),W3(),G3={kernelName:nn,backendName:`webgl`,kernelFunc:({inputs:e,backend:t})=>{let{image:n}=e,r=t,i=new U3(n.shape);return r.runWebGLProgram(i,[n],n.dtype)}}})),q3,J3,Y3,X3=o((()=>{q(),EQ(),nZ(),q3=`return floor(x);`,J3=SQ({opSnippet:q3,packedOpSnippet:q3,cpuKernelImpl:_X}),Y3={kernelName:rn,backendName:`webgl`,kernelFunc:J3}})),Z3,Q3,$3,e6,t6=o((()=>{q(),EQ(),Z3=`
  float s = sign(a) * sign(b);
  int ia = round(a);
  int ib = round(b);
  if (ib != 0) {
    // Windows (D3D) wants guaranteed non-zero int division at compile-time.
    return float(idiv(ia, ib, s));
  } else {
    return NAN;
  }
`,Q3=`
  ivec4 ia = round(a);
  ivec4 ib = round(b);
  bvec4 cond = notEqual(ib, ivec4(0));
  ivec4 result = ivec4(0);
  vec4 s = sign(a) * sign(b);

  // Windows (D3D) wants guaranteed non-zero int division at compile-time.
  if (cond[0]) {
    result[0] = idiv(ia[0], ib[0], s[0]);
  }
  if (cond[1]) {
    result[1] = idiv(ia[1], ib[1], s[1]);
  }
  if (cond[2]) {
    result[2] = idiv(ia[2], ib[2], s[2]);
  }
  if (cond[3]) {
    result[3] = idiv(ia[3], ib[3], s[3]);
  }
  return vec4(result);
`,$3=CQ({opSnippet:Z3,packedOpSnippet:Q3,dtype:`int32`}),e6={kernelName:an,backendName:`webgl`,kernelFunc:$3}})),n6,r6=o((()=>{pJ(),n6=class{constructor(e){this.variableNames=[`A`];let t=fJ(),[n,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];
        vec2 uv = (vec2(texC, texR) + halfCR) / vec2(${r}.0, ${n}.0);

        vec4 values = ${t.texture2D}(A, uv);
        float value;
        if (depth == 0) {
          value = values.r;
        } else if (depth == 1) {
          value = values.g;
        } else if (depth == 2) {
          value = values.b;
        } else if (depth == 3) {
          value = values.a;
        }

        setOutput(floor(value * 255.0 + 0.5));
      }
    `}}})),i6,a6=o((()=>{pJ(),i6=class{constructor(e){this.variableNames=[`A`],this.packedInputs=!1,this.packedOutput=!0;let t=fJ(),[n,r]=e;this.outputShape=e,this.userCode=`
      void main() {
        ivec3 coords = getOutputCoords();
        int texR = coords[0];
        int texC = coords[1];
        int depth = coords[2];

        vec4 result = vec4(0.);

        for(int row=0; row<=1; row++) {
          for(int col=0; col<=1; col++) {
            texC = coords[1] + row;
            depth = coords[2] + col;

            vec2 uv = (vec2(texC, texR) + halfCR) /
                       vec2(${r}.0, ${n}.0);
            vec4 values = ${t.texture2D}(A, uv);
            float value;
            if (depth == 0) {
              value = values.r;
            } else if (depth == 1) {
              value = values.g;
            } else if (depth == 2) {
              value = values.b;
            } else if (depth == 3) {
              value = values.a;
            }

            result[row * 2 + col] = floor(value * 255.0 + 0.5);
          }
        }

        ${t.output} = result;
      }
    `}}}));function o6(e){let{inputs:t,backend:n,attrs:r}=e,{pixels:i}=t,{numChannels:a}=r,o=typeof HTMLVideoElement<`u`&&i instanceof HTMLVideoElement,s=typeof HTMLImageElement<`u`&&i instanceof HTMLImageElement,[c,l]=o?[i.videoWidth,i.videoHeight]:[i.width,i.height],u=[l,c],d=[l,c,a];if(s||o){let e=k().getBool(`CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU`);(c6==null||e!==l6)&&(l6=e,c6=document.createElement(`canvas`).getContext(`2d`,{willReadFrequently:l6})),c6.canvas.width=c,c6.canvas.height=l,c6.drawImage(i,0,0,c,l),i=c6.canvas}let f=n.makeTensorInfo(u,`int32`);n.texData.get(f.dataId).usage=pq.PIXELS,n.gpgpu.uploadPixelDataToTexture(n.getTexture(f.dataId),i);let p=k().getBool(`WEBGL_PACK`)?new i6(d):new n6(d),m=n.runWebGLProgram(p,[f],`int32`);return n.disposeData(f.dataId),m}var s6,c6,l6,u6=o((()=>{q(),hq(),r6(),a6(),s6={kernelName:Kr,backendName:`webgl`,kernelFunc:o6},l6=k().getBool(`CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU`)}));function d6(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dataFormat:u,dilations:d,dimRoundingMode:f,activation:p,leakyreluAlpha:m}=r,h=oc(u),g=Ks(i.shape,a.shape,c,d,l,f,!1,h),_,v=[],y=o!=null,b=s!=null,x=p===`leakyrelu`,S=()=>{let e=[i,a],t=(e,t)=>{if(t===`NCHW`&&e.shape.length===1&&e.shape[0]!==1){let t=$({inputs:{x:e},backend:n,attrs:{shape:[e.shape[0],1,1]}});return v.push(t),t}return e};if(y&&e.push(t(o,u)),b&&e.push(t(s,u)),x){let t=n.makeTensorInfo([],`float32`,Ai(m,`float32`));e.push(t),v.push(t)}return e};if(g.filterHeight===1&&g.filterWidth===1&&g.dilationHeight===1&&g.dilationWidth===1&&g.strideHeight===1&&g.strideWidth===1&&(g.padInfo.type===`SAME`||g.padInfo.type===`VALID`))_=v2({x:i,filter:a,convInfo:g,backend:n,bias:o,activation:p,preluActivationWeights:s,leakyreluAlpha:m});else if(g.strideWidth<=2&&h===`channelsLast`&&k().getBool(`WEBGL_EXP_CONV`)){let e=new p2(g,y,p?wQ(p,!0):null,b,x),t=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],r=S();_=n.runWebGLProgram(e,r,`float32`,t)}else if(k().getBool(`WEBGL_CONV_IM2COL`))_=y2({x:i,filter:a,convInfo:g,backend:n,bias:o,activation:p,preluActivationWeights:s,leakyreluAlpha:m});else{let e=new u2(g,y,p?wQ(p,!1):null,b,x),t=S();_=n.runWebGLProgram(e,t,`float32`)}let C=$({inputs:{x:_},backend:n,attrs:{shape:g.outShape}});return v.push(_),v.forEach(e=>n.disposeIntermediateTensorInfo(e)),C}var f6,p6=o((()=>{q(),f2(),m2(),EQ(),b2(),zQ(),f6={kernelName:Yr,backendName:`webgl`,kernelFunc:d6}}));function m6(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,filter:a,bias:o,preluActivationWeights:s}=t,{strides:c,pad:l,dilations:u,dimRoundingMode:d,activation:f,leakyreluAlpha:p}=r,m=[],h=u;h??=[1,1],E(ic(c,h),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${c} and dilations '${h}'`);let g=Ks(i.shape,a.shape,c,h,l,d,!0),_=k().getBool(`WEBGL_PACK_DEPTHWISECONV`)&&g.strideWidth<=2&&g.outChannels/g.inChannels===1,v=f?wQ(f,_):null,y=[i,a],b=o!=null,x=s!=null,S=f===`leakyrelu`;if(b&&y.push(o),x&&y.push(s),S){let e=n.makeTensorInfo([],`float32`,Ai(p,`float32`));y.push(e),m.push(e)}let C;C=_?new k4(g,b,v,x,S):new D4(g,b,v,x,S);let w=[[g.padInfo.top,g.padInfo.left],[g.strideHeight,g.strideWidth],[g.dilationHeight,g.dilationWidth],[g.inHeight,g.inWidth]],ee=n.runWebGLProgram(C,y,`float32`,w);return m.forEach(e=>n.disposeIntermediateTensorInfo(e)),ee}var h6,g6=o((()=>{q(),O4(),A4(),EQ(),h6={kernelName:Xr,backendName:`webgl`,kernelFunc:m6}})),_6,v6=o((()=>{mY(),_6=class{constructor(e,t,n,r){this.sliceDim=e,this.strides=t,this.paramsShape=r,this.variableNames=[`x`,`indices`],this.outputShape=n;let i=aY(n.length),a=`
    int index;`;for(let e=0;e<this.sliceDim;e++)a+=`
          index = round(getIndices(coords[0], ${e}));
          out_of_bounds = out_of_bounds || index < 0;
          out_of_bounds = out_of_bounds || index >= ${this.paramsShape[e]};
          flattenIndex += index * ${this.strides[e]};`;this.userCode=`
         void main() {
          ${i} coords = getOutputCoords();
          int flattenIndex = 0;
          bool out_of_bounds = false;

          ${a}

          setOutput(out_of_bounds ? 0.0 : getX(flattenIndex, coords[1]));
        }
      `}}}));function y6(e){let{inputs:t,backend:n}=e,{params:r,indices:i}=t,a=i.shape,o=a[a.length-1],s=D(r.shape),[c,l,u,d]=mv(r,i),f=$({inputs:{x:i},backend:n,attrs:{shape:[l,o]}}),p=$({inputs:{x:r},backend:n,attrs:{shape:[D(r.shape)/u,u]}});if(n.shouldExecuteOnCPU([r,i])||r.dtype===`string`){let e=vX(n.readSync(i.dataId),n.bufferSync(r),r.dtype,l,o,u,d,r.shape,s);return n.makeTensorInfo(c,r.dtype,e.values)}let m=new _6(o,d,[l,u],r.shape),h=n.runWebGLProgram(m,[p,f],p.dtype),g=$({inputs:{x:h},backend:n,attrs:{shape:c}});return n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(h),g}var b6,x6=o((()=>{q(),v6(),nZ(),zQ(),b6={kernelName:cn,backendName:`webgl`,kernelFunc:y6}}));function S6(e,t){let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`],r=[];for(let t=0;t<e.length;t++)t===2?r.push(`index`):r.push(`${n[t]}`);return r.join()}var C6,w6=o((()=>{mY(),C6=class{constructor(e,t){this.variableNames=[`A`,`indices`],this.outputShape=t,this.rank=t.length;let n=aY(this.rank),r=S6(e,2);this.userCode=`
      void main() {
        ${n} resRC = getOutputCoords();
        int index = int(getIndices(resRC.x, resRC.z));
        float inBounds = (index >= 0) && (index < ${e[2]}) ? 1.0 : 0.0;
        setOutput(inBounds * getA(${r}));
      }
    `}}}));function T6(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,indices:a}=t,{axis:o,batchDims:s}=r,c=Se(o,i.shape)[0];if(k().get(`DEBUG`)){let e=n.readSync(a.dataId),t=i.shape[c];for(let n=0;n<e.length;++n){let r=e[n];E(r<=t-1&&r>=0,()=>`GatherV2: the index value ${r} is not in [0, ${t-1}]`)}}let l=eb(i,a,c,s),u=D(a.shape),d=[],f=$({inputs:{x:i},backend:n,attrs:{shape:[l.batchSize,l.outerSize,l.dimSize,l.sliceSize]}}),p=$({inputs:{x:a},backend:n,attrs:{shape:[l.batchSize,u/l.batchSize]}});d.push(f),d.push(p);let m=[l.batchSize,l.outerSize,u/l.batchSize,l.sliceSize];if(n.shouldExecuteOnCPU([i,a])||i.dtype===`string`){let e=n.bufferSync(p),t=yX(n.bufferSync(f),e,m);return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),n.makeTensorInfo(l.outputShape,t.dtype,t.values)}let h=new C6(f.shape,m),g=n.runWebGLProgram(h,[f,p],f.dtype);d.push(g);let _=$({inputs:{x:g},backend:n,attrs:{shape:l.outputShape}});return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),_}var E6,D6=o((()=>{q(),w6(),nZ(),zQ(),E6={kernelName:sn,backendName:`webgl`,kernelFunc:T6}})),O6,k6,A6,j6,M6=o((()=>{q(),EQ(),nZ(),O6=`return float(a > b);`,k6=`
  return vec4(greaterThan(a, b));
`,A6=CQ({opSnippet:O6,packedOpSnippet:k6,cpuKernelImpl:bX,dtype:`bool`}),j6={kernelName:ln,backendName:`webgl`,kernelFunc:A6}})),N6,P6,F6,I6,L6=o((()=>{q(),EQ(),nZ(),N6=`return float(a >= b);`,P6=`
  return vec4(greaterThanEqual(a, b));
`,F6=CQ({opSnippet:N6,packedOpSnippet:P6,dtype:`bool`,cpuKernelImpl:xX}),I6={kernelName:un,backendName:`webgl`,kernelFunc:F6}}));function R6(e){let{inputs:t,backend:n}=e,{input:r}=t;return N3(r,!0,n)}var z6,hie=o((()=>{q(),P3(),z6={kernelName:fn,backendName:`webgl`,kernelFunc:R6}})),B6,V6,H6,gie=o((()=>{q(),EQ(),B6=`return float(!isnan(x) && !isinf(x));`,V6=SQ({opSnippet:B6,dtype:`bool`}),H6={kernelName:mn,backendName:`webgl`,kernelFunc:V6}})),U6,W6,G6,_ie=o((()=>{q(),EQ(),U6=`return float(isinf(x));`,W6=SQ({opSnippet:U6,dtype:`bool`}),G6={kernelName:hn,backendName:`webgl`,kernelFunc:W6}})),K6,q6,J6,vie=o((()=>{q(),EQ(),K6=`return float(isnan(x));`,q6=SQ({opSnippet:K6,dtype:`bool`}),J6={kernelName:gn,backendName:`webgl`,kernelFunc:q6}})),Y6,X6,Z6,Q6,yie=o((()=>{q(),EQ(),nZ(),Y6=`return float(a < b);`,X6=`
  return vec4(lessThan(a, b));
`,Z6=CQ({opSnippet:Y6,packedOpSnippet:X6,cpuKernelImpl:SX,dtype:`bool`}),Q6={kernelName:vn,backendName:`webgl`,kernelFunc:Z6}})),$6,e8,t8,n8,bie=o((()=>{q(),EQ(),nZ(),$6=`return float(a <= b);`,e8=`
  return vec4(lessThanEqual(a, b));
`,t8=CQ({opSnippet:$6,packedOpSnippet:e8,cpuKernelImpl:CX,dtype:`bool`}),n8={kernelName:yn,backendName:`webgl`,kernelFunc:t8}}));function xie(e){let{backend:t,attrs:n}=e,{start:r,stop:i,num:a}=n,o=wX(r,i,a);return t.makeTensorInfo([o.length],`float32`,o)}var r8,Sie=o((()=>{q(),nZ(),r8={kernelName:bn,backendName:`webgl`,kernelFunc:xie}})),i8,a8,o8,s8,Cie=o((()=>{q(),EQ(),nZ(),i8=TQ+`
  return x < 0.0 ? 0./0. : log(x);
`,a8=`
  vec4 result = log(x);
  bvec4 isNaN = isnan(x);
  result.r = isNaN.r ? x.r : (x.r < 0.0 ? 0./0. : result.r);
  result.g = isNaN.g ? x.g : (x.g < 0.0 ? 0./0. : result.g);
  result.b = isNaN.b ? x.b : (x.b < 0.0 ? 0./0. : result.b);
  result.a = isNaN.a ? x.a : (x.a < 0.0 ? 0./0. : result.a);
  return result;
`,o8=SQ({opSnippet:i8,packedOpSnippet:a8,cpuKernelImpl:TX}),s8={kernelName:`Log`,backendName:`webgl`,kernelFunc:o8}})),c8,l8,u8,wie=o((()=>{q(),EQ(),c8=TQ+`
  return log(1.0 + x);
`,l8=SQ({opSnippet:c8}),u8={kernelName:xn,backendName:`webgl`,kernelFunc:l8}})),d8,f8,p8,m8,Tie=o((()=>{q(),EQ(),d8=`return float(a >= 1.0 && b >= 1.0);`,f8=`
  return vec4(
    vec4(greaterThanEqual(a, vec4(1.0))) *
    vec4(greaterThanEqual(b, vec4(1.0))));
`,p8=CQ({opSnippet:d8,packedOpSnippet:f8,dtype:`bool`}),m8={kernelName:Sn,backendName:`webgl`,kernelFunc:p8}})),h8,g8,_8,Eie=o((()=>{q(),EQ(),h8=`return float(!(x >= 1.0));`,g8=SQ({opSnippet:h8}),_8={kernelName:Cn,backendName:`webgl`,kernelFunc:g8}})),v8,y8,b8,x8,Die=o((()=>{q(),EQ(),v8=`return float(a >= 1.0 || b >= 1.0);`,y8=`
  return min(
    vec4(greaterThanEqual(a, vec4(1.0))) +
    vec4(greaterThanEqual(b, vec4(1.0))),
    vec4(1.0));
`,b8=CQ({opSnippet:v8,packedOpSnippet:y8,dtype:`bool`}),x8={kernelName:wn,backendName:`webgl`,kernelFunc:b8}})),S8,Oie=o((()=>{S8=class{constructor(e,t,n,r,i){this.variableNames=[`x`],this.outputShape=[];let a=t,o=e[3]-1;this.outputShape=e;let s,c=`float(${n}) + float(${r}) * sum`;s=i===.5?`inversesqrt(${c})`:i===1?`1.0/(${c})`:`exp(log(${c}) * float(-${i}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];
        int d = coords[3];
        float x = getX(b, r, c, d);
        float sum = 0.0;
        for (int j = -${a}; j <= ${a}; j++) {
          int idx = d + j;
          if (idx >= 0 && idx <=  ${o}) {
            float z = getX(b, r, c, idx);
            sum += z * z;
          }
        }
        float val = x * ${s};
        setOutput(val);
      }
    `}}})),C8,kie=o((()=>{C8=class{constructor(e,t,n,r,i){this.variableNames=[`x`],this.outputShape=[],this.packedInputs=!0,this.packedOutput=!0;let a=t,o=e[3]-1;this.outputShape=e;let s,c=`float(${n}) + float(${r}) * sum`;s=i===.5?`inversesqrt(${c})`:i===1?`1.0/(${c})`:`exp(log(${c}) * float(-${i}));`,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords.x;
        int r = coords.y;
        int c = coords.z;
        int d = coords.w;

        bool hasNextCol = d < ${this.outputShape[3]};
        bool hasNextRow = c < ${this.outputShape[2]};

        vec4 sum = vec4(0.);
        vec4 xFragAtOutputCoords = getX(b, r, c, d);

        vec4 xAtOutputCoords = vec4(
          getChannel(xFragAtOutputCoords, vec2(c, d)),
          hasNextCol ?
            getChannel(xFragAtOutputCoords, vec2(c, d + 1)) : 0.0,
          hasNextRow ?
            getChannel(xFragAtOutputCoords , vec2(c + 1, d)) : 0.0,
          (hasNextRow && hasNextCol) ?
            getChannel(xFragAtOutputCoords, vec2(c + 1, d + 1)) : 0.0
        );

        int firstChannel = d - ${a};
        vec2 cache = vec2(0.);
        if(firstChannel >= 0){
          vec4 firstChannelFrag = getX(b, r, c, firstChannel);
          cache.x = getChannel(firstChannelFrag, vec2(c, firstChannel));
            if(hasNextRow){
              cache.y = getChannel(firstChannelFrag, vec2(c + 1, firstChannel));
            }
        }

        ivec2 depth = ivec2(d, d + 1);
        for (int j = - ${a}; j <= ${a}; j++) {
          ivec2 idx = depth + j;
          bvec2 aboveLowerBound = greaterThanEqual(idx, ivec2(0));
          bvec2 belowUpperBound = lessThanEqual(idx, ivec2(${o}));

          bool depthInRange = aboveLowerBound.x && belowUpperBound.x;
          bool depthPlusOneInRange = aboveLowerBound.y && belowUpperBound.y;

          if(depthInRange || depthPlusOneInRange){
            vec4 z = vec4(0.);
            vec4 xFragAtCurrentDepth;
            z.xz = cache.xy;
            if(depthPlusOneInRange && hasNextCol){
              xFragAtCurrentDepth = idx.y != d ?
                getX(b, r, c, idx.y) : xFragAtOutputCoords;
              z.y = getChannel(xFragAtCurrentDepth, vec2(c, idx.y));
              if(hasNextRow){
                z.w = getChannel(xFragAtCurrentDepth, vec2(c + 1, idx.y));
              }
            }
            cache.xy = z.yw;
            sum += z * z;
          }
        }
        vec4 result = xAtOutputCoords * ${s};
        setOutput(result);
      }
    `}}})),w8,T8,Aie=o((()=>{q(),Oie(),kie(),w8=e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{depthRadius:a,bias:o,alpha:s,beta:c}=r,l=k().getBool(`WEBGL_PACK_NORMALIZATION`)?new C8(i.shape,a,o,s,c):new S8(i.shape,a,o,s,c);return n.runWebGLProgram(l,[i],i.dtype)},T8={kernelName:`LRN`,backendName:`webgl`,kernelFunc:w8}})),E8,jie=o((()=>{E8=class{constructor(e,t,n,r,i){this.variableNames=[`inputImage`,`outputImage`,`dy`],this.outputShape=[],this.outputShape=e,this.depth=e[3],this.depthRadius=t,this.bias=n,this.alpha=r,this.beta=i,this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int r = coords[1];
        int c = coords[2];

        float result = 0.0;
        for (int d = 0; d < ${this.depth}; ++d) {
          int depthBegin = int(max(0.0, float(d - ${t})));
          int depthEnd = int(min(float(${this.depth}),
              float(d + ${t} + 1)));

          const int MIN_DEPTH_BEGIN = 0;
          const int MAX_DEPTH_END = ${this.depth};

          float norm = 0.0;
          for (int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k) {
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd) {
              norm += getInputImage(b, r, c, k) * getInputImage(b, r, c, k);
            }
            else {
              break;
            }
          }

          norm = float(${r}) * norm + float(${n});

          for(int k = MIN_DEPTH_BEGIN; k < MAX_DEPTH_END; ++k){
            if (k < depthBegin){
              continue;
            }
            else if (k >= depthBegin && k < depthEnd){
              float dyi = -2.0 * float(${r})
                * float(${i})
                * getInputImage(b, r, c, k) * getOutputImage(b, r, c, d)
                / norm;
              if (k == d) {
                dyi += pow(norm, -1.0 * ${i});
              }
              if (k == coords[3]) {
                dyi *= getDy(b, r, c, d);
                result += dyi;
              }
            }
            else {
              break;
            }
          }
      }
      setOutput(result);
      }
    `}}})),D8,O8,Mie=o((()=>{q(),jie(),D8=e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i,y:a,dy:o}=t,{depthRadius:s,bias:c,alpha:l,beta:u}=r,d=new E8(i.shape,s,c,l,u);return n.runWebGLProgram(d,[i,a,o],i.dtype)},O8={kernelName:En,backendName:`webgl`,kernelFunc:D8}}));function Nie(e,t,n,r){let i=D(t),a=D(e.shape)/i,o=$({inputs:{x:e},attrs:{shape:[a,i]},backend:r}),s=GQ(o,e.dtype,`max`,r),c=$({inputs:{x:s},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(s),c}var Pie=o((()=>{q(),KQ(),zQ()}));function k8(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reductionIndices:a,keepDims:o}=r,s=i.shape.length,c=Se(a,i.shape),l=c,u=Su(l,s),d=u!=null,f=n.shouldExecuteOnCPU([i]),p=i;if(d){if(f){let e=n.texData.get(p.dataId).values,t=Array(s);for(let e=0;e<t.length;e++)t[e]=i.shape[u[e]];let r=eZ(e,i.shape,i.dtype,u,t);p=n.makeTensorInfo(t,i.dtype);let a=n.texData.get(p.dataId);a.values=r}else p=QQ(i,u,n);l=wu(l.length,s)}xu(`max`,l,s);let[m,h]=yu(p.shape,l),g=m;o&&(g=bu(m,c));let _;if(f){let e=n.texData.get(p.dataId).values,t=EX(e,D(h),g,i.dtype);_=n.makeTensorInfo(g,i.dtype);let r=n.texData.get(_.dataId);r.values=t}else _=Nie(p,h,g,n);return d&&n.disposeIntermediateTensorInfo(p),_}var A8,j8=o((()=>{q(),nZ(),Pie(),$Q(),A8={kernelName:`Max`,backendName:`webgl`,kernelFunc:k8}})),M8,N8,P8,F8,Fie=o((()=>{q(),nQ(),aQ(),EQ(),nZ(),M8=eQ+`
  return max(a, b);
`,N8=`
  vec4 result = vec4(max(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+rQ+`
  return result;
`,P8=CQ({opSnippet:M8,packedOpSnippet:N8,cpuKernelImpl:DX}),F8={kernelName:Dn,backendName:`webgl`,kernelFunc:P8}}));function Iie(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;iJ(i,`maxPool`);let{filterSize:a,strides:o,pad:s,dimRoundingMode:c}=r;E(ic(o,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${o} and dilations '1'`);let l=Ws(i.shape,a,o,1,s,c);if(l.filterWidth===1&&l.filterHeight===1&&ge(l.inShape,l.outShape))return oQ({inputs:{x:i},backend:n});let u=new C1(l,`max`,!1);return n.runWebGLProgram(u,[i],i.dtype)}var I8,Lie=o((()=>{q(),T1(),uJ(),cQ(),I8={kernelName:On,backendName:`webgl`,kernelFunc:Iie}}));function Rie(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{filterSize:a,strides:o,pad:s,dataFormat:c,dimRoundingMode:l}=r,u=new w1(Gs(i.shape,a,o,[1,1,1],s,l,c),`max`,!1);return n.runWebGLProgram(u,[i],i.dtype)}var L8,zie=o((()=>{q(),T1(),L8={kernelName:An,backendName:`webgl`,kernelFunc:Rie}})),R8,z8,B8=o((()=>{R8=class{constructor(e){this.variableNames=[`dy`,`maxPos`],this.outputShape=e.inShape;let t=e.strideHeight,n=e.strideWidth,r=e.dilationHeight,i=e.effectiveFilterHeight,a=e.effectiveFilterWidth,o=i-1-e.padInfo.top,s=a-1-e.padInfo.left,c=i*a-1;this.userCode=`
      const ivec2 pads = ivec2(${o}, ${s});

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];

        ivec2 dyRCCorner = coords.yz - pads;
        int dyRCorner = dyRCCorner.x;
        int dyCCorner = dyRCCorner.y;

        // Convolve dy(?, ?, d) with pos mask(:, :, d) to get dx(xR, xC, d).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;
        for (int wR = 0; wR < ${i};
          wR += ${r}) {
          float dyR = float(dyRCorner + wR) / ${t}.0;

          if (dyR < 0.0 || dyR >= ${e.outHeight}.0 || fract(dyR) > 0.0) {
            continue;
          }
          int idyR = int(dyR);

          for (int wC = 0; wC < ${a}; wC++) {
            float dyC = float(dyCCorner + wC) / ${n}.0;

            if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                fract(dyC) > 0.0) {
              continue;
            }
            int idyC = int(dyC);

            float dyValue = getDy(b, idyR, idyC, d);
            int maxPosValue = ${c} - int(getMaxPos(b, idyR, idyC, d));

            // Get the current value, check it against the value from the
            // position matrix.
            int curPosValue = wR * ${a} + wC;
            float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

            dotProd += dyValue * mask;
          }
        }
        setOutput(dotProd);
      }
    `}},z8=class{constructor(e){this.variableNames=[`dy`,`maxPos`],this.outputShape=e.inShape;let t=e.strideDepth,n=e.strideHeight,r=e.strideWidth,i=e.dilationDepth,a=e.dilationHeight,o=e.dilationWidth,s=e.effectiveFilterDepth,c=e.effectiveFilterHeight,l=e.effectiveFilterWidth,u=s-1-e.padInfo.front,d=c-1-e.padInfo.top,f=l-1-e.padInfo.left,p=s*c*l-1;this.userCode=`
      const ivec3 pads = ivec3(${u}, ${d}, ${f});

      void main() {
        ivec5 coords = getOutputCoords();
        int batch = coords.x;
        int ch = coords.u;

        ivec3 dyCorner = ivec3(coords.y, coords.z, coords.w) - pads;
        int dyDCorner = dyCorner.x;
        int dyRCorner = dyCorner.y;
        int dyCCorner = dyCorner.z;

        // Convolve dy(?, ?, ?, ch) with pos mask(:, :, :, d) to get
        // dx(xD, xR, xC, ch).
        // ? = to be determined. : = across all values in that axis.
        float dotProd = 0.0;

        for (int wD = 0; wD < ${s};
           wD += ${i}) {
          float dyD = float(dyDCorner + wD) / ${t}.0;

          if (dyD < 0.0 || dyD >= ${e.outDepth}.0 || fract(dyD) > 0.0) {
            continue;
          }
          int idyD = int(dyD);

          for (int wR = 0; wR < ${c};
              wR += ${a}) {
            float dyR = float(dyRCorner + wR) / ${n}.0;

            if (dyR < 0.0 || dyR >= ${e.outHeight}.0 ||
                fract(dyR) > 0.0) {
              continue;
            }
            int idyR = int(dyR);

            for (int wC = 0; wC < ${l};
                wC += ${o}) {
              float dyC = float(dyCCorner + wC) / ${r}.0;

              if (dyC < 0.0 || dyC >= ${e.outWidth}.0 ||
                  fract(dyC) > 0.0) {
                continue;
              }
              int idyC = int(dyC);

              float dyValue = getDy(batch, idyD, idyR, idyC, ch);
              int maxPosValue = ${p} -
                  int(getMaxPos(batch, idyD, idyR, idyC, ch));

              // Get the current value, check it against the value from the
              // position matrix.
              int curPosValue =
                  wD * ${c} * ${l} +
                  wR * ${l} + wC;
              float mask = float(maxPosValue == curPosValue ? 1.0 : 0.0);

              dotProd += dyValue * mask;
            }
          }
        }
        setOutput(dotProd);
      }
    `}}}));function Bie(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a}=t,o=a,{filterSize:s,strides:c,pad:l,dimRoundingMode:u}=r,d=Gs(o.shape,s,c,[1,1,1],l,u),f=new w1(d,`max`,!0),p=n.runWebGLProgram(f,[o],o.dtype),m=new z8(d),h=n.runWebGLProgram(m,[i,p],o.dtype);return n.disposeIntermediateTensorInfo(p),h}var V8,Vie=o((()=>{q(),B8(),T1(),V8={kernelName:jn,backendName:`webgl`,kernelFunc:Bie}}));function Hie(e){let{inputs:t,backend:n,attrs:r}=e,{dy:i,input:a,output:o}=t,s=a;iJ([a,o],`maxPoolGrad`);let{filterSize:c,strides:l,pad:u,dimRoundingMode:d}=r,f=Ws(s.shape,c,l,1,u,d),p=new C1(f,`max`,!0),m=n.runWebGLProgram(p,[s],s.dtype),h=new R8(f),g=n.runWebGLProgram(h,[i,m],s.dtype);return n.disposeIntermediateTensorInfo(m),g}var H8,Uie=o((()=>{q(),B8(),T1(),uJ(),H8={kernelName:kn,backendName:`webgl`,kernelFunc:Hie}}));function Wie(e,t,n,r){let i=new C1(n,`max`,!1),a=r.runWebGLProgram(i,[e],`float32`);return i=new C1(n,`max`,!0,!0,t),[a,r.runWebGLProgram(i,[e],`float32`)]}var Gie=o((()=>{T1()})),U8,Kie=o((()=>{q(),Gie(),U8={kernelName:Mn,backendName:`webgl`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{filterSize:i,strides:a,pad:o,includeBatchInIndex:s}=t,c=n;E(r.shape.length===4,()=>`Error in maxPool: input must be rank 4 but got rank ${r.shape.length}.`);let l=[1,1];E(ic(a,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${a} and dilations '${l}'`);let[u,d]=Wie(r,s,Ws(r.shape,i,a,l,o),c);return[u,d]}}}));function qie(e,t,n,r){let i=D(t),a=D(e.shape)/i,o=$({inputs:{x:e},attrs:{shape:[a,i]},backend:r}),s=GQ(o,`float32`,`mean`,r),c=$({inputs:{x:s},attrs:{shape:n},backend:r});return r.disposeIntermediateTensorInfo(o),r.disposeIntermediateTensorInfo(s),c}var Jie=o((()=>{q(),KQ(),zQ()})),W8,Yie=o((()=>{q(),Jie(),$Q(),W8={kernelName:Nn,backendName:`webgl`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{x:r}=e,{keepDims:i,axis:a}=t,o=n,s=r.shape.length,c=Se(a,r.shape),l=c,u=Su(l,s),d=u!=null,f=o.shouldExecuteOnCPU([r]),p=[],m=r;if(d){if(f){let e=o.texData.get(m.dataId).values,t=Array(s);for(let e=0;e<t.length;e++)t[e]=r.shape[u[e]];let n=eZ(e,r.shape,r.dtype,u,t);m=o.makeTensorInfo(t,r.dtype);let i=o.texData.get(m.dataId);i.values=n}else m=QQ(r,u,o);p.push(m),l=wu(l.length,s)}xu(`sum`,l,s);let[h,g]=yu(m.shape,l),_=h;i&&(_=bu(h,c));let v=qie(m,g,_,o);for(let e of p)o.disposeIntermediateTensorInfo(e);return v}}}));function Xie(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=Se(a,i.shape),l=c,u=Su(l,s),d=i;u!=null&&(d=a$({inputs:{x:i},backend:n,attrs:{perm:u}}),l=wu(l.length,i.shape.length)),xu(`min`,l,s);let[f,p]=yu(d.shape,l),m=D(p),h=$({inputs:{x:d},backend:n,attrs:{shape:[-1,m]}}),g=GQ(h,h.dtype,`min`,n),_;if(o){let e=bu(f,c);_=$({inputs:{x:g},backend:n,attrs:{shape:e}})}else _=$({inputs:{x:g},backend:n,attrs:{shape:f}});return n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(g),u!=null&&n.disposeIntermediateTensorInfo(d),_}var G8,Zie=o((()=>{q(),KQ(),zQ(),s$(),G8={kernelName:`Min`,backendName:`webgl`,kernelFunc:Xie}})),K8,q8,J8,Y8,Qie=o((()=>{q(),nQ(),aQ(),EQ(),nZ(),K8=eQ+`
  return min(a, b);
`,q8=`
  vec4 result = vec4(min(a, b));
  bvec4 isNaNA = isnan(a);
  bvec4 isNaNB = isnan(b);
  bvec4 isNaN = bvec4(isNaNA.x || isNaNB.x, isNaNA.y || isNaNB.y, isNaNA.z || isNaNB.z, isNaNA.w || isNaNB.w);
  `+rQ+`
  return result;
`,J8=CQ({opSnippet:K8,packedOpSnippet:q8,cpuKernelImpl:OX}),Y8={kernelName:Pn,backendName:`webgl`,kernelFunc:J8}})),X8,$ie=o((()=>{mY(),X8=class{constructor(e,t,n){this.variableNames=[`x`],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=aY(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=[`coords[0]`,`coords[1]`,`coords[2]`,`coords[3]`].slice(0,r),c=n===`reflect`?0:1;if(r===1){this.userCode=`
        int start = ${a};
        int end = ${o};

        void main() {
          int outC = getOutputCoords();
          if (outC < start) {
            outC = start * 2 - outC - ${c};
          } else if(outC >= end) {
            outC = (end - 1) * 2 - outC + ${c};
          }
          setOutput(getX(outC - start));
        }
      `;return}this.userCode=`
      ${i} start = ${i}(${a});
      ${i} end = ${i}(${o});

      void main() {
        ${i} outC = getOutputCoords();
        for (int i = 0; i < ${r}; i++) {
          if (outC[i] < start[i]) {
            outC[i] = start[i] * 2 - outC[i] - ${c};
          } else if(outC[i] >= end[i]) {
            outC[i] = (end[i] - 1) * 2 - outC[i] + ${c};
          }
        }
        ${i} coords = outC - start;
        setOutput(getX(${s}));
      }
    `}}})),Z8,eae=o((()=>{oZ(),mY(),Z8=class{constructor(e,t,n){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=aY(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=iZ(`rc`,r),c=iZ(`source`,r),l=`${s[r-1]} < ${this.outputShape[r-1]}`,u=r===1?`source`:`vec2(${c.slice(-2).join()})`,d=n===`reflect`?0:1,f=``;if(r===1){let e=`
        ${i} source = rc;
        if (source < start) {
          source = start * 2 - source - ${d};
        } else if (source >= end) {
          source = (end - 1) * 2 - source + ${d};
        }
        source -= start;
      `;f=`
        ${i} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${c.join()}), ${u});
        ${s[r-1]} += 1;
        if(${l}) {
          ${e}
          result[1] = getChannel(getX(${c.join()}), ${u});
        }
      `}else{let e=`
        ${i} source = rc;
        ${i} lt = ${i}(lessThan(source, start));
        ${i} gte = ${i}(greaterThanEqual(source, end));
        ${i} orig = 1 - (lt + gte);
        source = orig * source +
                lt * (start * 2 - source - ${d}) +
                gte * ((end - 1) * 2 - source + ${d});
        source -= start;
      `;f=`
        ${i} rc = outputLoc;
        ${e}
        result[0] = getChannel(getX(${c.join()}), ${u});
        ${s[r-1]} += 1;
        if(${l}) {
          ${e}
          result[1] = getChannel(getX(${c.join()}), ${u});
        }
        rc = outputLoc;
        ${s[r-2]} += 1;
        if(${s[r-2]} < ${this.outputShape[r-2]}) {
          ${e}
          result[2] = getChannel(getX(${c.join()}), ${u});
          ${s[r-1]} += 1;
          if(${l}) {
            ${e}
            result[3] = getChannel(getX(${c.join()}), ${u});
          }
        }
      `}this.userCode=`
      const ${i} start = ${i}(${a});
      const ${i} end = ${i}(${o});

      void main() {
        ${i} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${f}
        setOutput(result);
      }
    `}}})),Q8,$8,tae=o((()=>{q(),$ie(),eae(),Q8=({inputs:e,backend:t,attrs:n})=>{let{x:r}=e,{paddings:i,mode:a}=n,o=k().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new Z8(r.shape,i,a):new X8(r.shape,i,a);return t.runWebGLProgram(o,[r],r.dtype)},$8={kernelName:Fn,backendName:`webgl`,kernelFunc:Q8}})),e5,t5,n5,r5,nae=o((()=>{q(),aQ(),EQ(),e5=`if (b == 0.0) return NAN;
  return mod(a, b);`,t5=`
  vec4 result = mod(a, b);
  bvec4 isNaN = equal(b, vec4(0.0));
  `+rQ+`
  return result;
`,n5=CQ({opSnippet:e5,packedOpSnippet:t5}),r5={kernelName:`Mod`,backendName:`webgl`,kernelFunc:n5}})),i5,rae=o((()=>{i5=class{constructor(e,t,n){this.variableNames=[`probs`],this.customUniforms=[{name:`seed`,type:`float`}],this.outputShape=[e,n],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];

        float r = random(seed);
        float cdf = 0.0;

        for (int i = 0; i < ${t-1}; i++) {
          cdf += getProbs(batch, i);

          if (r < cdf) {
            setOutput(float(i));
            return;
          }
        }

        // If no other event happened, last event happened.
        setOutput(float(${t-1}));
      }
    `}}})),a5,o5,s5,c5,l5=o((()=>{q(),EQ(),a5=`
if (a == b) {
  return 1.0;
};
return a / b;`,o5=`
  // vec4 one = vec4(equal(a, b));
  // return one + (vec4(1.0) - one) * a / b;
  vec4 result = a / b;
  if(a.x == b.x) {
    result.x = 1.;
  }
  if(a.y == b.y) {
    result.y = 1.;
  }
  if(a.z == b.z) {
    result.z = 1.;
  }
  if(a.w == b.w) {
    result.w = 1.;
  }

  return result;
`,s5=CQ({opSnippet:a5,packedOpSnippet:o5,checkOutOfBounds:!0}),c5={kernelName:Yt,backendName:`webgl`,kernelFunc:s5}})),u5,d5,f5,p5=o((()=>{q(),EQ(),nZ(),u5=`return a - b;`,d5=CQ({opSnippet:u5,packedOpSnippet:u5,supportsComplex:!0,cpuKernelImpl:ZX}),f5={kernelName:`Sub`,backendName:`webgl`,kernelFunc:d5}}));function m5(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{dim:a}=r,o=Se([a],i.shape),s=k8({inputs:{x:i},backend:n,attrs:{reductionIndices:o,keepDims:!1}}),c=bu(s.shape,o),l=$({inputs:{x:s},backend:n,attrs:{shape:c}}),u=d5({inputs:{a:i,b:l},backend:n}),d=x3({inputs:{x:u},backend:n}),f=n$({inputs:{x:d},backend:n,attrs:{axis:o,keepDims:!1}}),p=$({inputs:{x:f},backend:n,attrs:{shape:c}}),m=s5({inputs:{a:d,b:p},backend:n});return n.disposeIntermediateTensorInfo(s),n.disposeIntermediateTensorInfo(l),n.disposeIntermediateTensorInfo(u),n.disposeIntermediateTensorInfo(d),n.disposeIntermediateTensorInfo(f),n.disposeIntermediateTensorInfo(p),m}var h5,g5=o((()=>{q(),C3(),j8(),l5(),zQ(),p5(),i$(),h5={kernelName:Cr,backendName:`webgl`,kernelFunc:m5}}));function iae(e){let{inputs:t,backend:n,attrs:r}=e,{logits:i}=t,{numSamples:a,seed:o,normalized:s}=r,c=s?i:m5({inputs:{logits:i},backend:n,attrs:{dim:i.shape.length-1}}),l=c.shape[0],u=c.shape[1],d=new i5(l,u,a),f=[[o]],p=n.runWebGLProgram(d,[c],`int32`,f);return s||n.disposeIntermediateTensorInfo(c),p}var _5,aae=o((()=>{q(),rae(),g5(),_5={kernelName:In,backendName:`webgl`,kernelFunc:iae}}));function oae(e){let{inputs:t,backend:n}=e,{x:r}=t;if(n.shouldExecuteOnCPU([r])){let[e,t]=AX(n.texData.get(r.dataId).values,r.shape,r.dtype);return n.makeTensorInfo(t,r.dtype,e)}let i;return i=k().getBool(`WEBGL_PACK_UNARY_OPERATIONS`)?new FZ(r.shape,y5):new bZ(r.shape,v5),n.runWebGLProgram(i,[r],r.dtype)}var v5,y5,b5,sae=o((()=>{q(),nZ(),kZ(),IZ(),v5=xZ+`
  return -x;
`,y5=`
  vec4 result = -x;
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,b5={kernelName:`Neg`,backendName:`webgl`,kernelFunc:oae}}));function cae(e){Zr(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c}=r,l=n.readSync(i.dataId),u=n.readSync(a.dataId),{selectedIndices:d}=x5(l,u,o,s,c);return n.makeTensorInfo([d.length],`int32`,new Int32Array(d))}var x5,S5,lae=o((()=>{q(),x5=Dg,S5={kernelName:zn,backendName:`webgl`,kernelFunc:cae}}));function uae(e){Zr(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,padToMaxOutputSize:l}=r,u=n.readSync(i.dataId),d=n.readSync(a.dataId),{selectedIndices:f,validOutputs:p}=C5(u,d,o,s,c,l);return[n.makeTensorInfo([f.length],`int32`,new Int32Array(f)),n.makeTensorInfo([],`int32`,new Int32Array([p]))]}var C5,w5,dae=o((()=>{q(),C5=Og,w5={kernelName:Bn,backendName:`webgl`,kernelFunc:uae}}));function fae(e){Zr(`tf.nonMaxSuppression() in webgl locks the UI thread. Call tf.nonMaxSuppressionAsync() instead`);let{inputs:t,backend:n,attrs:r}=e,{boxes:i,scores:a}=t,{maxOutputSize:o,iouThreshold:s,scoreThreshold:c,softNmsSigma:l}=r,u=n.readSync(i.dataId),d=n.readSync(a.dataId),{selectedIndices:f,selectedScores:p}=T5(u,d,o,s,c,l);return[n.makeTensorInfo([f.length],`int32`,new Int32Array(f)),n.makeTensorInfo([p.length],`float32`,new Float32Array(p))]}var T5,E5,pae=o((()=>{q(),T5=kg,E5={kernelName:Vn,backendName:`webgl`,kernelFunc:fae}})),D5,mae=o((()=>{D5=class{constructor(e,t,n,r){this.variableNames=[`indices`],this.outputShape=[e,t],this.userCode=`
      void main() {
        ivec2 coords = getOutputCoords();
        int index = round(getIndices(coords.x));
        setOutput(mix(float(${r}), float(${n}),
                      float(index == coords.y)));
      }
    `}}})),O5,k5,hae=o((()=>{q(),mae(),zQ(),O5=e=>{let{inputs:t,backend:n,attrs:r}=e,{indices:i}=t,{dtype:a,depth:o,onValue:s,offValue:c}=r,l=D(i.shape),u=new D5(l,o,s,c),d=$({inputs:{x:i},backend:n,attrs:{shape:[l]}}),f=n.runWebGLProgram(u,[d],a);n.disposeIntermediateTensorInfo(d);let p=[...i.shape,o],m=$({inputs:{x:f},backend:n,attrs:{shape:p}});return n.disposeIntermediateTensorInfo(f),m},k5={kernelName:Un,backendName:`webgl`,kernelFunc:O5}}));function A5(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`complex64`){let e=T0({inputs:{input:r},backend:n}),t=A5({inputs:{x:e},backend:n}),i=t2({inputs:{input:r},backend:n}),a=A5({inputs:{x:i},backend:n}),o=lQ({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}else return B3({attrs:{shape:r.shape,dtype:r.dtype,value:r.dtype===`string`?``:0},backend:n})}var j5,M5=o((()=>{q(),dQ(),H3(),r2(),D0(),j5={kernelName:Wr,backendName:`webgl`,kernelFunc:A5}}));function N5(e){let{inputs:t,backend:n}=e,{x:r}=t;if(r.dtype===`string`)throw Error(`onesLike is not supported under string dtype`);if(r.dtype===`complex64`){let e=T0({inputs:{input:r},backend:n}),t=N5({inputs:{x:e},backend:n}),i=t2({inputs:{input:r},backend:n}),a=A5({inputs:{x:i},backend:n}),o=lQ({inputs:{real:t,imag:a},backend:n});return n.disposeIntermediateTensorInfo(e),n.disposeIntermediateTensorInfo(t),n.disposeIntermediateTensorInfo(i),n.disposeIntermediateTensorInfo(a),o}else return B3({attrs:{shape:r.shape,dtype:r.dtype,value:1},backend:n})}var P5,gae=o((()=>{q(),dQ(),H3(),r2(),D0(),M5(),P5={kernelName:Hn,backendName:`webgl`,kernelFunc:N5}}));function _ae(e){let{inputs:t,backend:n,attrs:r}=e,{axis:i}=r;if(t.length===1)return w3({inputs:{input:t[0]},backend:n,attrs:{dim:i}});let a=t[0].shape,o=t[0].dtype;t.forEach(e=>{me(a,e.shape,`All tensors passed to stack must have matching shapes`),E(o===e.dtype,()=>`All tensors passed to stack must have matching dtypes`)});let s=[],c=s2({inputs:t.map(e=>{let t=w3({inputs:{input:e},backend:n,attrs:{dim:i}});return s.push(t),t}),backend:n,attrs:{axis:i}});return s.forEach(e=>n.disposeIntermediateTensorInfo(e)),c}var F5,vae=o((()=>{q(),l2(),E3(),F5={kernelName:Wn,backendName:`webgl`,kernelFunc:_ae}})),I5,yae=o((()=>{mY(),I5=class{constructor(e,t,n){this.variableNames=[`x`],this.customUniforms=[{name:`value`,type:`float`}],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=aY(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=[`coords[0]`,`coords[1]`,`coords[2]`,`coords[3]`].slice(0,r);if(r===1){this.userCode=`
        int start = ${a};
        int end = ${o};

        void main() {
          int outC = getOutputCoords();
          if (outC < start || outC >= end) {
            setOutput(value);
          } else {
            setOutput(getX(outC - start));
          }
        }
      `;return}this.userCode=`
      ${i} start = ${i}(${a});
      ${i} end = ${i}(${o});

      void main() {
        ${i} outC = getOutputCoords();
        if (any(lessThan(outC, start)) || any(greaterThanEqual(outC, end))) {
          setOutput(value);
        } else {
          ${i} coords = outC - start;
          setOutput(getX(${s}));
        }
      }
    `}}})),L5,bae=o((()=>{oZ(),mY(),L5=class{constructor(e,t,n){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0,this.customUniforms=[{name:`value`,type:`float`}],this.outputShape=t.map((t,n)=>t[0]+e[n]+t[1]);let r=e.length,i=aY(r),a=t.map(e=>e[0]).join(`,`),o=t.map((t,n)=>t[0]+e[n]).join(`,`),s=iZ(`rc`,r),c=iZ(`source`,r),l=`${s[r-1]} < ${this.outputShape[r-1]}`,u=r===1?`source`:`vec2(${c.slice(-2).join()})`,d=[`${i} rc = outputLoc;`,`${s[r-1]} += 1;
       if(${l}) {
      `,r===1?``:`}
       rc = outputLoc;
       ${s[r-2]} += 1;
       if(${s[r-2]} < ${this.outputShape[r-2]}) {`,r===1?``:`  ${s[r-1]} += 1;
         if(${l}) {`],f=r===1?`rc < start || rc >= end`:`any(lessThan(rc, start)) || any(greaterThanEqual(rc, end))`,p=``;for(let e=0,t=r===1?2:4;e<t;e++)p+=`
        ${d[e]}
        if (${f}) {
          result[${e}] = float(value);
        } else {
          ${i} source = rc - start;
          result[${e}] = getChannel(getX(${c.join()}), ${u});
        }
      `;p+=r===1?`} `:`}}`,this.userCode=`
      const ${i} start = ${i}(${a});
      const ${i} end = ${i}(${o});

      void main() {
        ${i} outputLoc = getOutputCoords();
        vec4 result = vec4(0.);
        ${p}
        setOutput(result);
      }
    `}}})),R5,z5,B5=o((()=>{q(),yae(),bae(),H3(),R5=e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{paddings:a,constantValue:o}=r;if(D(i.shape)===0)return B3({backend:n,attrs:{shape:a.map((e,t)=>e[0]+i.shape[t]+e[1]),value:o,dtype:i.dtype}});let s=k().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new L5(i.shape,a,o):new I5(i.shape,a,o),c=[[o]];return n.runWebGLProgram(s,[i],i.dtype,c)},z5={kernelName:Gn,backendName:`webgl`,kernelFunc:R5}})),V5,H5,U5,W5,xae=o((()=>{q(),aQ(),EQ(),V5=`
  if(a < 0.0 && floor(b) < b){
    return NAN;
  }
  if (b == 0.0) {
    return 1.0;
  }
  return (round(mod(b, 2.0)) != 1) ?
      pow(abs(a), b) : sign(a) * pow(abs(a), b);
`,H5=`
  // isModRound1 has 1 for components with round(mod(b, 2.0)) == 1, 0 otherwise.
  vec4 isModRound1 = vec4(equal(round(mod(b, 2.0)), ivec4(1)));
  vec4 multiplier = sign(a) * isModRound1 + (vec4(1.0) - isModRound1);
  vec4 result = multiplier * pow(abs(a), b);

  // Ensure that a^0 = 1, including 0^0 = 1 as this correspond to TF and JS
  bvec4 isExpZero = equal(b, vec4(0.0));
  result.r = isExpZero.r ? 1.0 : result.r;
  result.g = isExpZero.g ? 1.0 : result.g;
  result.b = isExpZero.b ? 1.0 : result.b;
  result.a = isExpZero.a ? 1.0 : result.a;

  bvec4 isNaN1 = lessThan(a, vec4(0.0));
  bvec4 isNaN2 = lessThan(floor(b), b);
  bvec4 isNaN = bvec4(isNaN1.x && isNaN2.x, isNaN1.y && isNaN2.y, isNaN1.z && isNaN2.z, isNaN1.w && isNaN2.w);
  `+rQ+`
  return result;
`,U5=CQ({opSnippet:V5,packedOpSnippet:H5}),W5={kernelName:`Pow`,backendName:`webgl`,kernelFunc:U5}}));function Sae(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{axis:a,keepDims:o}=r,s=i.shape.length,c=[],l=Se(a,i.shape),u=l,d=Su(u,s),f=i;d!=null&&(f=a$({inputs:{x:i},backend:n,attrs:{perm:d}}),u=wu(u.length,s),c.push(f)),xu(`prod`,u,s);let p;if(n.shouldExecuteOnCPU([f])){let e=n.texData.get(f.dataId).values,{outVals:t,outShape:r,outDtype:i}=MX(f.shape,f.dtype,e,u);p=n.makeTensorInfo(r,i,t)}else{let[e,t]=yu(f.shape,u),r=D(t),a=$({inputs:{x:f},backend:n,attrs:{shape:[-1,r]}}),o=GQ(a,ia(i.dtype),`prod`,n);p=$({inputs:{x:o},backend:n,attrs:{shape:e}}),c.push(a),c.push(o)}if(o){c.push(p);let e=bu(p.shape,l);p=$({inputs:{x:p},backend:n,attrs:{shape:e}})}return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),p}var G5,Cae=o((()=>{q(),KQ(),nZ(),zQ(),s$(),G5={kernelName:qn,backendName:`webgl`,kernelFunc:Sae}}));function wae(e){let{inputs:t,backend:n,attrs:r}=e,{paramsNestedSplits:i,paramsDenseValues:a,indices:o}=t,{outputRaggedRank:s}=r,c=i.map(e=>n.readSync(e.dataId)),l=i.map(e=>e.shape),u=n.readSync(a.dataId),d=n.readSync(o.dataId),[f,p,m]=NX(c,l,u,a.shape,a.dtype,d,o.shape,s),h=f.map(e=>n.makeTensorInfo([e.length],`int32`,e)),g=n.makeTensorInfo(m,a.dtype,p);return h.concat([g])}var K5,Tae=o((()=>{q(),nZ(),K5={kernelName:Jn,backendName:`webgl`,kernelFunc:wae}}));function Eae(e){let{inputs:t,backend:n}=e,{starts:r,limits:i,deltas:a}=t,o=n.readSync(r.dataId),s=n.readSync(i.dataId),c=n.readSync(a.dataId),[l,u]=PX(o,r.shape,r.dtype,s,i.shape,c,a.shape);return[n.makeTensorInfo([l.length],`int32`,l),n.makeTensorInfo([u.length],r.dtype,u)]}var q5,Dae=o((()=>{q(),nZ(),q5={kernelName:Yn,backendName:`webgl`,kernelFunc:Eae}}));function Oae(e){let{inputs:t,backend:n,attrs:r}=e,{shape:i,values:a,defaultValue:o,rowPartitionTensors:s}=t,{rowPartitionTypes:c}=r,l=n.readSync(i.dataId),u=n.readSync(a.dataId),d=n.readSync(o.dataId),f=s.map(e=>n.readSync(e.dataId)),p=s.map(e=>e.shape),[m,h]=FX(l,i.shape,u,a.shape,a.dtype,d,o.shape,f,p,c);return n.makeTensorInfo(m,a.dtype,h)}var J5,kae=o((()=>{q(),nZ(),J5={kernelName:Xn,backendName:`webgl`,kernelFunc:Oae}})),Y5,X5,Z5=o((()=>{q(),nZ(),Y5=e=>{let{backend:t,attrs:n}=e,{start:r,stop:i,step:a,dtype:o}=n,s=IX(r,i,a,o);return t.makeTensorInfo([s.length],o,s)},X5={kernelName:Zn,backendName:`webgl`,kernelFunc:Y5}})),Q5,$5,e7,Aae=o((()=>{q(),EQ(),Q5=`return 1.0 / x;`,$5=SQ({opSnippet:Q5}),e7={kernelName:$n,backendName:`webgl`,kernelFunc:$5}})),t7,n7,r7,i7,jae=o((()=>{q(),EQ(),kZ(),t7=xZ+`
  return (x < 0.0) ? 0.0 : x;
`,n7=`
  vec4 result = x * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,r7=SQ({opSnippet:t7,packedOpSnippet:n7}),i7={kernelName:er,backendName:`webgl`,kernelFunc:r7}})),a7,o7,s7,c7,Mae=o((()=>{q(),EQ(),kZ(),a7=xZ+`
  return (x < 0.0) ? 0.0 : min(6.0, x);
`,o7=`
  vec4 result = min(x, vec4(6.)) * vec4(greaterThanEqual(x, vec4(0.0)));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,s7=SQ({opSnippet:a7,packedOpSnippet:o7}),c7={kernelName:or,backendName:`webgl`,kernelFunc:s7}})),l7,Nae=o((()=>{l7=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d;d=i?`(vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC - vec2(0.5)`:`vec2(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${l[0]/u[0]},
          ${l[1]/u[1]});
      const vec2 inputShapeRC = vec2(${o}.0, ${s}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec2 sourceFloorRC = ivec2(max(sourceFracIndexRC, vec2(0.0)));
        ivec2 sourceCeilRC = ivec2(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        float topLeft = getA(b, sourceFloorRC.x, sourceFloorRC.y, d);
        float bottomLeft = getA(b, sourceCeilRC.x, sourceFloorRC.y, d);
        float topRight = getA(b, sourceFloorRC.x, sourceCeilRC.y, d);
        float bottomRight = getA(b, sourceCeilRC.x, sourceCeilRC.y, d);

        vec2 fracRC = sourceFracIndexRC - vec2(sourceFloorRC);

        float top = topLeft + (topRight - topLeft) * fracRC.y;
        float bottom = bottomLeft + (bottomRight - bottomLeft) * fracRC.y;
        float newValue = top + (bottom - top) * fracRC.x;

        setOutput(newValue);
      }
    `}}})),u7,Pae=o((()=>{u7=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d;d=i?`(vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC - vec3(0.5)`:`vec3(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${l[0]/u[0]},
          ${l[1]/u[1]},
          ${l[1]/u[1]});
      const vec3 inputShapeRC = vec3(${o}.0, ${s}.0,
                                     ${s}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${d};

        // Compute the four integer indices.
        ivec3 sourceFloorRC = ivec3(max(sourceFracIndexRC, vec3(0.0)));
        ivec3 sourceCeilRC = ivec3(
          min(inputShapeRC - 1.0, ceil(sourceFracIndexRC)));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${n-1};

        // In parallel, construct four corners for all four components in
        // packed 2x2 cell.
        vec4 topLeft = vec4(
          getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 bottomLeft = vec4(
          getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceFloorRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceFloorRC.z, d + 1) : 0.0);

        vec4 topRight = vec4(
          getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceFloorRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceFloorRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec4 bottomRight = vec4(
          getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d),
          hasNextCol ? getAValue(b, sourceCeilRC.x, sourceCeilRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceCeilRC.x, sourceCeilRC.z, d + 1) : 0.0);

        vec3 fracRC = sourceFracIndexRC - vec3(sourceFloorRC);

        vec4 top = mix(topLeft, topRight, fracRC.yyzz);
        vec4 bottom = mix(bottomLeft, bottomRight, fracRC.yyzz);
        vec4 newValue = mix(top, bottom, fracRC.x);

        setOutput(newValue);
      }
    `}}}));function Fae(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r,[c,l]=s,u=k().getBool(`WEBGL_PACK_IMAGE_OPERATIONS`)?new u7(i.shape,c,l,a,o):new l7(i.shape,c,l,a,o);return n.runWebGLProgram(u,[i],`float32`)}var d7,Iae=o((()=>{q(),Nae(),Pae(),d7={kernelName:ir,backendName:`webgl`,kernelFunc:Fae}})),f7,Lae=o((()=>{f7=class{constructor(e,t,n){this.variableNames=[`dy`],this.outputShape=[],this.outputShape=t;let[,r,i]=t,[,a,o]=e,s=[n&&a>1?r-1:r,n&&o>1?i-1:i],c=[n&&a>1?a-1:a,n&&o>1?o-1:o],l=s[0]/c[0],u=s[1]/c[1],d=1/l,f=1/u,p=Math.ceil(d)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${l});
        const float widthScale = float(${u});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(startRLerp - float(winHeight / 2));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(startCLerp - float(winWidth / 2));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${a}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${o}) {
              continue;
            }

            float dxR = float(dyR) * heightScale;
            int topDxRIndex = int(floor(dxR));
            int bottomDxRIndex = int(min(ceil(dxR), ${r-1}.0));
            float dxRLerp = dxR - float(topDxRIndex);
            float inverseDxRLerp = 1.0 - dxRLerp;

            float dxC = float(dyC) * widthScale;
            int leftDxCIndex = int(floor(dxC));
            int rightDxCIndex = int(min(ceil(dxC), ${i-1}.0));
            float dxCLerp = dxC - float(leftDxCIndex);
            float inverseDxCLerp = 1.0 - dxCLerp;

            if (r == topDxRIndex && c == leftDxCIndex) {
              // topLeft
              accumulator +=
                getDy(b, dyR, dyC, d) * inverseDxRLerp * inverseDxCLerp;
            }

            if (r == topDxRIndex && c == rightDxCIndex) {
              // topRight
              accumulator += getDy(b, dyR, dyC, d) * inverseDxRLerp * dxCLerp;
            }

            if (r == bottomDxRIndex && c == leftDxCIndex) {
              // bottomLeft
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * inverseDxCLerp;
            }

            if (r == bottomDxRIndex && c == rightDxCIndex) {
              // bottomRight
              accumulator += getDy(b, dyR, dyC, d) * dxRLerp * dxCLerp;
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}}));function Rae(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r,s=new f7(a.shape,i.shape,o);return n.runWebGLProgram(s,[a],a.dtype)}var p7,zae=o((()=>{q(),Lae(),p7={kernelName:ar,backendName:`webgl`,kernelFunc:Rae}})),m7,Bae=o((()=>{m7=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d=r?`0.5`:`0.0`,f;f=i?`max((vec2(yRC) + vec2(0.5)) * effectiveInputOverOutputRatioRC, vec2(0.0))`:`vec2(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec2 effectiveInputOverOutputRatioRC = vec2(
          ${l[0]/u[0]},
          ${l[1]/u[1]});
      const vec2 inputShapeRC = vec2(${o}.0, ${s}.0);

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        ivec2 yRC = coords.yz;

        // Fractional source index.
        vec2 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec2 sourceNearestRC = ivec2(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));
        float newValue = getA(b, sourceNearestRC.x, sourceNearestRC.y, d);

        setOutput(newValue);
      }
    `}}})),h7,Vae=o((()=>{h7=class{constructor(e,t,n,r,i){this.variableNames=[`A`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=[];let[a,o,s,c]=e;this.outputShape=[a,t,n,c];let l=[r&&t>1?o-1:o,r&&n>1?s-1:s],u=[r&&t>1?t-1:t,r&&n>1?n-1:n],d=r?`0.5`:`0.0`,f;f=i?`max((vec3(yRC) + vec3(0.5)) * effectiveInputOverOutputRatioRC, vec3(0.0))`:`vec3(yRC) * effectiveInputOverOutputRatioRC`,this.userCode=`
      const vec3 effectiveInputOverOutputRatioRC = vec3(
          ${l[0]/u[0]},
          ${l[1]/u[1]},
          ${l[1]/u[1]});
      const vec3 inputShapeRC = vec3(${o}.0, ${s}.0,
                                     ${s}.0);

      float getAValue(int b, int r, int c, int d) {
        return getChannel(getA(b, r, c, d), vec2(c, d));
      }

      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        // Calculate values for next column in yRC.z.
        ivec3 yRC = coords.yzz + ivec3(0, 0, 1);

        // Fractional source index.
        vec3 sourceFracIndexRC = ${f};

        // Compute the coordinators of nearest neighbor point.
        ivec3 sourceNearestRC = ivec3(
          min(inputShapeRC - 1.0, floor(sourceFracIndexRC + ${d})));

        // Should we calculate next column and row elements in 2x2 packed cell.
        bool hasNextCol = d < ${c-1};
        bool hasNextRow = coords.z < ${n-1};

        vec4 newValue = vec4(
          getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d),
          hasNextCol ? getAValue(b, sourceNearestRC.x, sourceNearestRC.y, d + 1)
                     : 0.0,
          hasNextRow ? getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d)
                     : 0.0,
          (hasNextRow && hasNextCol) ?
            getAValue(b, sourceNearestRC.x, sourceNearestRC.z, d + 1) : 0.0);

        setOutput(newValue);
      }
    `}}}));function Hae(e){let{inputs:t,backend:n,attrs:r}=e,{images:i}=t,{alignCorners:a,halfPixelCenters:o,size:s}=r,[c,l]=s,u=k().getBool(`WEBGL_PACK_IMAGE_OPERATIONS`)?new h7(i.shape,c,l,a,o):new m7(i.shape,c,l,a,o);return n.runWebGLProgram(u,[i],i.dtype)}var g7,Uae=o((()=>{q(),Bae(),Vae(),g7={kernelName:nr,backendName:`webgl`,kernelFunc:Hae}})),_7,Wae=o((()=>{_7=class{constructor(e,t,n){this.variableNames=[`dy`],this.outputShape=[],this.outputShape=t;let[,r,i]=t,[,a,o]=e,s=[n&&a>1?r-1:r,n&&o>1?i-1:i],c=[n&&a>1?a-1:a,n&&o>1?o-1:o],l=s[0]/c[0],u=s[1]/c[1],d=1/l,f=1/u,p=Math.ceil(d)*2+2,m=Math.ceil(f)*2+2;this.userCode=`
      void main() {
        ivec4 coords = getOutputCoords();
        int b = coords[0];
        int d = coords[3];
        int r = coords[1];
        int c = coords[2];

        float accumulator = 0.0;

        const float heightScale = float(${l});
        const float widthScale = float(${u});

        const float invHeightScale = float(${d});
        const float invWidthScale = float(${f});

        const int winHeight = int(${p});
        const int winWidth = int(${m});

        // Compute bounds for where in dy we will look
        float startRLerp = floor(float(r) * invHeightScale);
        int startDyR = int(floor(startRLerp - float(winHeight / 2)));

        float startCLerp = floor(float(c) * invWidthScale);
        int startDyC = int(floor(startCLerp - float(winWidth / 2)));

        // Loop over dy
        for (int dyROffset = 0; dyROffset < winHeight; dyROffset++) {
          int dyR = dyROffset + startDyR;

          // Guard against the window exceeding the bounds of dy
          if (dyR < 0 || dyR >= ${a}) {
            continue;
          }

          for (int dyCOffset = 0; dyCOffset < winWidth; dyCOffset++) {
            int dyC = dyCOffset + startDyC;

            // Guard against the window exceeding the bounds of dy
            if (dyC < 0 || dyC >= ${o}) {
              continue;
            }

            float sourceFracRow =
              float(${s[0]}) *
                (float(dyR) / float(${c[0]}));

            float sourceFracCol =
                float(${s[1]}) *
                  (float(dyC) / float(${c[1]}));

            int sourceNearestRow = int(min(
                float(int(${r}) - 1),
                ${n} ? float(round(sourceFracRow)) :
                                  float(floor(sourceFracRow))));

            int sourceNearestCol = int(min(
                float(int(${i}) - 1),
                ${n} ? float(round(sourceFracCol)) :
                                  float(floor(sourceFracCol))));

            if (r == sourceNearestRow && c == sourceNearestCol) {
              accumulator += getDy(b, dyR, dyC, d);
            }
          }
        }
        // End loop over dy

        setOutput(accumulator);
      }
    `}}}));function Gae(e){let{inputs:t,backend:n,attrs:r}=e,{images:i,dy:a}=t,{alignCorners:o}=r,s=new _7(a.shape,i.shape,o);return n.runWebGLProgram(s,[a],a.dtype)}var v7,Kae=o((()=>{q(),Wae(),v7={kernelName:rr,backendName:`webgl`,kernelFunc:Gae}})),y7,qae=o((()=>{mY(),y7=class{constructor(e,t){this.variableNames=[`x`];let n=e.length;if(n>4)throw Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);if(this.outputShape=e,n===1){this.userCode=`
        void main() {
          int coord = getOutputCoords();
          setOutput(getX(${e[0]} - coord - 1));
        }
      `;return}let r=n=>t.indexOf(n)!==-1&&e[n]!==1?`${e[n]} - coords[${n}] - 1`:`coords[${n}]`,i=e.map((e,t)=>r(t)).join(`,`),a=aY(n);this.userCode=`
      void main() {
        ${a} coords = getOutputCoords();
        setOutput(getX(${i}));
      }
    `}}})),b7,Jae=o((()=>{oZ(),mY(),b7=class{constructor(e,t){this.variableNames=[`x`],this.packedInputs=!0,this.packedOutput=!0;let n=e.length;if(n>4)throw Error(`WebGL backend: Reverse of rank-${n} tensor is not yet supported`);this.outputShape=e;let r=iZ(`rc`,n),i=`${r[n-1]} + 1 < ${this.outputShape[n-1]}`,a=`${r[n-2]} + 1 < ${this.outputShape[n-2]}`,o=aY(n);n===1?this.userCode=`
        void main(){
          int rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = getChannel(getX(${e[0]} - rc - 1),
            ${e[0]} - rc - 1);
          if(${i}){
              result.g = getChannel(getX(${e[0]} - (rc  + 1) - 1),
                ${e[0]} - (rc  + 1) - 1);
          }
          setOutput(result);
        }
      `:this.userCode=`
        void main() {
          ${o} rc = getOutputCoords();
          vec4 result = vec4(0.);
          result.r = ${s(r.slice())};
          if(${i}){
            result.g = ${c(r.slice())};
          }
          if(${a}) {
            result.b = ${l(r.slice())};
            if(${i}) {
              result.a = ${u(r.slice())};
            }
          }
          setOutput(result);
        }
    `;function s(e){return d(e)}function c(e){return e[n-1]=`(`+e[n-1]+` + 1)`,d(e)}function l(e){return e[n-2]=`(`+e[n-2]+` + 1)`,d(e)}function u(e){return e[n-1]=`(`+e[n-1]+` + 1)`,e[n-2]=`(`+e[n-2]+` + 1)`,d(e)}function d(t){let n=e.map((e,n)=>f(n,t));return`getChannel(getX(${n.join(`,`)}), vec2(${n.slice(-2).join(`,`)}))`}function f(n,r){return t.indexOf(n)!==-1&&e[n]!==1?`${e[n]} - ${r[n]} - 1`:`${r[n]}`}}}}));function Yae(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{dims:a}=r,o=i.shape.length,s=Se(a,i.shape);if(o===0)return oQ({inputs:{x:i},backend:n});let c=k().getBool(`WEBGL_PACK_ARRAY_OPERATIONS`)?new b7(i.shape,s):new y7(i.shape,s);return n.runWebGLProgram(c,[i],i.dtype)}var x7,Xae=o((()=>{q(),qae(),Jae(),cQ(),x7={kernelName:sr,backendName:`webgl`,kernelFunc:Yae}})),S7,Zae=o((()=>{S7=class{constructor(e,t){this.variableNames=[`Image`],this.outputShape=[],this.customUniforms=[{name:`params`,type:`vec4`}];let n=e[1],r=e[2];this.outputShape=e;let i=``;i=typeof t==`number`?`float outputValue = ${t.toFixed(2)};`:`
        vec3 fill = vec3(${t.join(`,`)});
        float outputValue = fill[coords[3]];`,this.userCode=`
        void main() {
          ivec4 coords = getOutputCoords();
          int x = coords[2];
          int y = coords[1];
          float coordXFloat = (float(x) - params[0]) * params[3] -
            (float(y) - params[1]) * params[2];
          float coordYFloat = (float(x) - params[0]) * params[2] +
            (float(y) - params[1]) * params[3];
          int coordX = int(round(coordXFloat + params[0]));
          int coordY = int(round(coordYFloat + params[1]));
          ${i}
          if(coordX >= 0 && coordX < ${r} && coordY >= 0 && coordY < ${n}) {
            outputValue = getImage(coords[0], coordY, coordX, coords[3]);
          }
          setOutput(outputValue);
        }
    `}}})),C7,Qae=o((()=>{q(),Zae(),C7={kernelName:qr,backendName:`webgl`,kernelFunc:({inputs:e,attrs:t,backend:n})=>{let{image:r}=e,{radians:i,fillValue:a,center:o}=t,s=n,c=new S7(r.shape,a),[l,u]=ny(o,r.shape[1],r.shape[2]),d=[[l,u,Math.sin(i),Math.cos(i)]];return s.runWebGLProgram(c,[r],r.dtype,d)}}})),w7,T7,E7,$ae=o((()=>{q(),EQ(),w7=`
  // OpenGL ES does not support round function.
  // The algorithm is based on banker's rounding.
  float base = floor(x);
  if ((x - base) < 0.5) {
    return floor(x);
  } else if ((x - base) > 0.5) {
    return ceil(x);
  } else {
    if (mod(base, 2.0) == 0.0) {
      return base;
    } else {
      return base + 1.0;
    }
  }
`,T7=SQ({opSnippet:w7}),E7={kernelName:cr,backendName:`webgl`,kernelFunc:T7}})),D7,O7,k7,eoe=o((()=>{q(),EQ(),nZ(),D7=`return inversesqrt(x);`,O7=SQ({opSnippet:D7,cpuKernelImpl:LX}),k7={kernelName:lr,backendName:`webgl`,kernelFunc:O7}})),A7,j7=o((()=>{mY(),A7=class{constructor(e,t,n,r,i,a,o=!0,s=!1){this.variableNames=[`updates`,`indices`,`defaultValue`],this.outputShape=a;let c=aY(i.length),l=aY(a.length),u=``;n===1?u=`i`:n===2&&(u=`i, j`);let d=`getIndices(${u})`,f=``;r===1?f=`i`:r===2&&(f=`i, coords[1]`);let p=`getUpdates(${f})`,m=``;s&&(m=`coords[0], coords[1]`);let h=`getDefaultValue(${m})`,g=t>1?`strides[j]`:`strides`;this.userCode=`
        ${c} strides = ${c}(${i});

        void main() {
          ${l} coords = getOutputCoords();
          float sum = 0.0;
          bool found = false;
          for (int i = 0; i < ${e}; i++) {
            int flattenedIndex = 0;
            for (int j = 0; j < ${t}; j++) {
              int index = round(${d});
              flattenedIndex += index * ${g};
            }
            if (flattenedIndex == coords[0]) {
              sum += ${p};
              found = true;
            }
          }
          setOutput(mix(${h}, sum, float(found)));
        }
      `}}})),M7,toe=o((()=>{mY(),M7=class{constructor(e,t,n,r,i,a,o=!0,s=!1){this.variableNames=[`updates`,`indices`,`defaultValue`],this.packedInputs=!0,this.packedOutput=!0,this.outputShape=a;let c=aY(i.length),l=aY(a.length),u=``;n===1?u=`i`:n===2&&(u=`i, j`);let d=`getIndices(${u})`,f=``;r===1?f=`i`:r===2&&(f=`i, coords[1]`);let p=`getUpdates(${f})`,m=``;s&&(m=`coords[0], coords[1]`);let h=`getDefaultValue(${m})`,g=t>1?`strides[j]`:`strides`,_=t>1?`strides[j + 1]`:`strides`;this.userCode=`
        ${c} strides = ${c}(${i});

        void main() {
          ${l} coords = getOutputCoords();
          vec4 sum = vec4(0.);
          vec4 found = vec4(0.);
          for (int i = 0; i < ${e}; i+=2) {
            ivec2 flattenedIndex = ivec2(0);
            for (int j = 0; j < ${t}; j+=2) {
              ivec4 index = round(${d});
              flattenedIndex += index.xz * ${g};
              if (j + 1 < ${t}) {
                flattenedIndex += index.yw * ${_};
              }
            }
            if (flattenedIndex[0] == coords[0] || flattenedIndex[1] == coords[0] ||
                flattenedIndex[0] == coords[0] + 1 || flattenedIndex[1] == coords[0] + 1) {
              vec4 updVals = ${p};
              if (flattenedIndex[0] == coords[0]) {
                sum.xy += updVals.xy;
                found.xy = vec2(1.);
              } else if (flattenedIndex[0] == coords[0] + 1) {
                sum.zw += updVals.xy;
                found.zw = vec2(1.);
              }
              if (flattenedIndex[1] == coords[0]) {
                sum.xy += updVals.zw;
                found.xy = vec2(1.);
              } else if (flattenedIndex[1] == coords[0] + 1) {
                sum.zw += updVals.zw;
                found.zw = vec2(1.);
              }
            }
          }
          setOutput(mix(${h}, sum, found));
        }
      `}}}));function noe(e){let{inputs:t,backend:n,attrs:r}=e,{indices:i,updates:a}=t,{shape:o}=r,{sliceRank:s,numUpdates:c,sliceSize:l,strides:u,outputSize:d}=bh(a,i,o),f=[d/l,l];if(d===0)return n.makeTensorInfo(o,i.dtype);let p=$({inputs:{x:i},backend:n,attrs:{shape:[c,s]}}),m=$({inputs:{x:a},backend:n,attrs:{shape:[c,l]}}),h=n.makeTensorInfo([],`float32`,new Float32Array([0])),g;g=k().getBool(`WEBGL_PACK`)?new M7(c,s,p.shape.length,m.shape.length,u,f):new A7(c,s,p.shape.length,m.shape.length,u,f);let _=n.runWebGLProgram(g,[m,p,h],m.dtype),v=$({inputs:{x:_},backend:n,attrs:{shape:o}});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(_),n.disposeIntermediateTensorInfo(h),v}var N7,roe=o((()=>{q(),j7(),toe(),zQ(),N7={kernelName:ur,backendName:`webgl`,kernelFunc:noe}})),P7,ioe=o((()=>{q(),P7=class{constructor(e,t,n,r){this.variableNames=[`sortedSequence`,`values`],this.customUniforms=[{name:`numInputs`,type:`int`}],this.outputShape=[e,n];let i=`for (int i = 0; i < ${Math.ceil(Math.log2(t+1))}; ++i) { if (left >= right) break;`,a=k().getNumber(`WEBGL_VERSION`)===2?`while (left < right) {`:i,o=r===`left`?`<`:`<=`;this.userCode=`
       int findBound(int batch, float value) {
         int left = 0;
         int right = numInputs;
         int mid;
         ${a}
           mid = (left + right) / 2;
           if (getSortedSequence(batch, mid) ${o} value) {
             left = mid + 1;
           } else {
             right = mid;
           }
         }
         return right;
       }

       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int valueIndex = coords[1];

         float value = getValues(batch, valueIndex);

         setOutput(float(findBound(batch, value)));
       }
     `}}}));function aoe(e){let{inputs:t,backend:n,attrs:r}=e,{sortedSequence:i,values:a}=t,{side:o}=r,s=new P7(i.shape[0],i.shape[1],a.shape[1],o),c=[[i.shape[1]]];return n.runWebGLProgram(s,[i,a],`int32`,c)}var F7,ooe=o((()=>{q(),ioe(),F7={kernelName:fr,backendName:`webgl`,kernelFunc:aoe}})),I7,soe=o((()=>{mY(),I7=class{constructor(e,t,n){this.variableNames=[`c`,`a`,`b`],this.outputShape=t;let r,i;if(n>4)throw Error(`Where for rank ${n} is not yet supported`);if(n===1)i=`resRC`,r=`resRC`;else{let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`],a=[],o=[];for(let r=0;r<t.length;r++)o.push(`${n[r]}`),r<e&&a.push(`${n[r]}`);r=a.join(),i=o.join()}let a=aY(n);this.userCode=`
      void main() {
        ${a} resRC = getOutputCoords();
        float cVal = getC(${r});
        if (cVal >= 1.0) {
          setOutput(getA(${i}));
        } else {
          setOutput(getB(${i}));
        }
      }
    `}}}));function coe(e){let{inputs:t,backend:n}=e,{condition:r,t:i,e:a}=t,o=new I7(r.shape.length,i.shape,i.shape.length);return n.runWebGLProgram(o,[r,i,a],ra(i.dtype,a.dtype))}var L7,loe=o((()=>{q(),soe(),L7={kernelName:pr,backendName:`webgl`,kernelFunc:coe}})),R7,z7,B7,uoe=o((()=>{q(),EQ(),R7=`
  // Stable and Attracting Fixed Point (0, 1) for Normalized Weights.
  // see: https://arxiv.org/abs/1706.02515
  float scaleAlpha = ${cy};
  float scale = ${ly};
  return (x >= 0.0) ? scale * x : scaleAlpha * (exp(x) - 1.0);
`,z7=SQ({opSnippet:R7}),B7={kernelName:mr,backendName:`webgl`,kernelFunc:z7}})),V7,H7,U7,W7,doe=o((()=>{q(),EQ(),nZ(),V7=TQ+`
  return 1.0 / (1.0 + exp(-1.0 * x));
`,H7=`
  vec4 result = 1.0 / (1.0 + exp(-1.0 * x));
  bvec4 isNaN = isnan(x);

  result.r = isNaN.r ? x.r : result.r;
  result.g = isNaN.g ? x.g : result.g;
  result.b = isNaN.b ? x.b : result.b;
  result.a = isNaN.a ? x.a : result.a;

  return result;
`,U7=SQ({opSnippet:V7,packedOpSnippet:H7,cpuKernelImpl:zX}),W7={kernelName:vr,backendName:`webgl`,kernelFunc:U7}})),G7,K7,q7,foe=o((()=>{q(),EQ(),G7=`
  if (isnan(x)) { return 0.0; }
  return sign(x);
`,K7=SQ({opSnippet:G7}),q7={kernelName:_r,backendName:`webgl`,kernelFunc:K7}})),J7,Y7,X7,Z7,poe=o((()=>{q(),aQ(),EQ(),J7=TQ+`
  return sin(x);
`,Y7=`
  vec4 result = sin(x);
  bvec4 isNaN = isnan(x);
  ${rQ}
  return result;
`,X7=SQ({opSnippet:J7,packedOpSnippet:Y7}),Z7={kernelName:`Sin`,backendName:`webgl`,kernelFunc:X7}})),Q7,$7,e9,moe=o((()=>{q(),EQ(),Q7=`
  float e2x = exp(x);
  return (e2x - 1.0 / e2x) / 2.0;
`,$7=SQ({opSnippet:Q7}),e9={kernelName:gr,backendName:`webgl`,kernelFunc:$7}})),t9,n9,r9,hoe=o((()=>{q(),EQ(),t9=`
  float epsilon = 1.1920928955078125e-7;
  float threshold = log(epsilon) + 2.0;

  bool too_large = x > -threshold;
  bool too_small = x < threshold;

  float result;
  float exp_x = exp(x);

  if (too_large){
    result = x;
  }
  else if (too_small){
    result = exp_x;
  }
  else{
    result = log(exp_x + 1.0);
  }
  return result;
`,n9=SQ({opSnippet:t9}),r9={kernelName:yr,backendName:`webgl`,kernelFunc:n9}})),i9,a9,goe=o((()=>{q(),B5(),zQ(),s$(),i9=e=>{let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{blockShape:a,paddings:o}=r;E(i.shape.length<=4,()=>`spaceToBatchND for rank > 4 with a WebGL backend not implemented yet`);let s=a.reduce((e,t)=>e*t),c=[[0,0]];c.push(...o);for(let e=1+a.length;e<i.shape.length;++e)c.push([0,0]);let l=[],u=R5({inputs:{x:i},backend:n,attrs:{paddings:c,constantValue:0}}),d=ry(u.shape,a,s,!1),f=iy(d.length,a.length,!1),p=ay(u.shape,a,s,!1),m=$({inputs:{x:u},backend:n,attrs:{shape:d}}),h=a$({inputs:{x:m},backend:n,attrs:{perm:f}}),g=$({inputs:{x:h},backend:n,attrs:{shape:p}});return l.push(u),l.push(m),l.push(h),l.forEach(e=>n.disposeIntermediateTensorInfo(e)),g},a9={kernelName:xr,backendName:`webgl`,kernelFunc:i9}}));function _oe(e){let{inputs:t,backend:n}=e,{indices:r,values:i,denseShape:a,defaultValue:o}=t;if(a.shape.length!==1)throw Error(`Dense shape must be a vector, saw:
         ${a.shape}`);if(r.shape.length!==2)throw Error(`Indices must be a matrix, saw:
         ${r.shape}`);if(i.shape.length!==1)throw Error(`Values must be a vector, saw:
         ${i.shape}`);if(o.shape.length!==0)throw Error(`Default value must be a scalar, saw:
        ${o.shape}`);let s=n.readSync(r.dataId),c=n.readSync(i.dataId),l=n.readSync(a.dataId),u=n.readSync(o.dataId)[0],[d,f,p,m,h]=HX(s,r.shape,r.dtype,c,i.dtype,l,u);return[n.makeTensorInfo(f,r.dtype,d),n.makeTensorInfo([f[0]],i.dtype,p),n.makeTensorInfo([m.length],`bool`,new Uint8Array(m.map(e=>Number(e)))),n.makeTensorInfo([h.length],r.dtype,new Int32Array(h))]}var o9,voe=o((()=>{q(),nZ(),o9={kernelName:wr,backendName:`webgl`,kernelFunc:_oe}}));function yoe(e){let{inputs:t,backend:n}=e,{inputIndices:r,inputShape:i,newShape:a}=t;if(r.shape.length!==2)throw Error(`Input indices should be a matrix but received shape ${r.shape}`);if(i.shape.length!==1)throw Error(`Input shape should be a vector but received shape ${i.shape}`);if(a.shape.length!==1)throw Error(`Target shape should be a vector but received shape ${a.shape}`);let o=Array.from(n.readSync(i.dataId)),s=n.readSync(r.dataId),c=Array.from(n.readSync(a.dataId)),[l,u,d]=UX(s,r.shape,r.dtype,o,c);return[n.makeTensorInfo(u,r.dtype,l),n.makeTensorInfo([d.length],a.dtype,new Int32Array(d))]}var s9,boe=o((()=>{q(),nZ(),s9={kernelName:Tr,backendName:`webgl`,kernelFunc:yoe}}));function xoe(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
              ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
              ${a.shape}`);let o=n.readSync(r.dataId),s=n.readSync(i.dataId),c=n.readSync(a.dataId),[l,u]=WX(o,r.shape,r.dtype,s,c,!0);return n.makeTensorInfo(u,r.dtype,l)}var c9,Soe=o((()=>{q(),nZ(),c9={kernelName:Er,backendName:`webgl`,kernelFunc:xoe}}));function Coe(e){let{inputs:t,backend:n}=e,{data:r,indices:i,segmentIds:a}=t;if(r.shape.length<1)throw Error(`Data should be at least 1 dimensional but received scalar`);if(i.shape.length!==1)throw Error(`Indices should be a vector but received shape
             ${i.shape}`);if(a.shape.length!==1)throw Error(`Segment ids should be a vector but received shape
             ${a.shape}`);let o=n.readSync(r.dataId),s=n.readSync(i.dataId),c=n.readSync(a.dataId),[l,u]=WX(o,r.shape,r.dtype,s,c);return n.makeTensorInfo(u,r.dtype,l)}var l9,woe=o((()=>{q(),nZ(),l9={kernelName:Dr,backendName:`webgl`,kernelFunc:Coe}}));function Toe(e){let{inputs:t,backend:n,attrs:r}=e,{sparseIndices:i,sparseValues:a,defaultValue:o}=t,{outputShape:s}=r,{sliceRank:c,numUpdates:l,sliceSize:u,strides:d,outputSize:f}=bh(a,i,s);if(a.dtype===`string`){let e=RX(n.bufferSync(i),n.bufferSync(a),s,f,u,l,c,d,Fi(n.readSync(o.dataId)[0]),!1);return n.makeTensorInfo(s,e.dtype,e.values)}let p=new A7(l,c,i.shape.length,a.shape.length,d,[f,1],!1),m=n.runWebGLProgram(p,[a,i,o],a.dtype),h=$({inputs:{x:m},backend:n,attrs:{shape:s}});return n.disposeIntermediateTensorInfo(m),h}var u9,Eoe=o((()=>{q(),nZ(),j7(),zQ(),u9={kernelName:Or,backendName:`webgl`,kernelFunc:Toe}}));function Doe(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{numOrSizeSplits:a,axis:o}=r,s=Se(o,i.shape)[0],c=Ly(i,a,s),l=i.shape.length,u=Array(l).fill(0),d=i.shape.slice();return c.map(e=>{let t=[...d];t[s]=e;let r=i0({inputs:{x:i},backend:n,attrs:{begin:u,size:t}});return u[s]+=e,r})}var d9,Ooe=o((()=>{q(),o0(),d9={kernelName:Sr,backendName:`webgl`,kernelFunc:Doe}})),f9,p9,m9,koe=o((()=>{q(),EQ(),nZ(),f9=`return sqrt(x);`,p9=SQ({opSnippet:f9,packedOpSnippet:f9,cpuKernelImpl:GX}),m9={kernelName:br,backendName:`webgl`,kernelFunc:p9}})),h9,g9,_9,Aoe=o((()=>{q(),EQ(),h9=`return x * x;`,g9=SQ({opSnippet:h9}),_9={kernelName:Ar,backendName:`webgl`,kernelFunc:g9}})),v9,y9,b9,joe=o((()=>{q(),EQ(),v9=`return (a - b) * (a - b);`,y9=CQ({opSnippet:v9,packedOpSnippet:v9}),b9={kernelName:kr,backendName:`webgl`,kernelFunc:y9}}));function Moe(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t;if(i.dtype!==`string`)throw Error(`Input must be of datatype string`);let a=n.readSync(i.dataId),o=KX(rb(a),`string`,r);return n.makeTensorInfo(i.shape,`string`,o)}var x9,Noe=o((()=>{q(),nZ(),x9={kernelName:jr,backendName:`webgl`,kernelFunc:Moe}}));function Poe({inputs:e,attrs:t,backend:n}){let{x:r}=e,i=xZ+`
    return x > 0.0 ? 1.0 : float(${t.alpha});
  `,a=new bZ(r.shape,i);return n.runWebGLProgram(a,[r],r.dtype)}var S9,Foe=o((()=>{q(),kZ(),S9={kernelName:Gr,backendName:`webgl`,kernelFunc:Poe}})),C9,Ioe=o((()=>{mY(),C9=class{constructor(e,t,n){this.variableNames=[`x`],this.outputShape=n;let r=n.length,i=aY(n.length),a=aY(n.length),o=``;if(r===1)o=`coords * strides + begin`;else{let e=0;o=n.map((t,r)=>(e++,n.length===1?`coords * strides[${r}] + begin[${r}]`:`coords[${e-1}] * strides[${r}] + begin[${r}]`)).join(`,`)}this.userCode=`
      ${i} begin = ${i}(${e});
      ${i} strides = ${i}(${t});

      void main() {
        ${a} coords = getOutputCoords();
        setOutput(getX(${o}));
      }
    `}}}));function Loe(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{begin:a,end:o,strides:s,beginMask:c,endMask:l,ellipsisMask:u,newAxisMask:d,shrinkAxisMask:f}=r,{finalShapeSparse:p,finalShape:m,isIdentity:h,sliceDim0:g,isSimpleSlice:_,begin:v,end:y,strides:b}=Mv(i.shape,a,o,s,c,l,u,d,f),x;if(h)x=$({inputs:{x:i},backend:n,attrs:{shape:m}});else if(g||_){E(i.shape.length>=1,()=>`Input must have rank at least 1, got: ${i.shape.length}`);let e=yv(v,y,b),t=i0({inputs:{x:i},backend:n,attrs:{begin:v,size:e}});x=$({inputs:{x:t},backend:n,attrs:{shape:m}}),n.disposeIntermediateTensorInfo(t)}else if(n.shouldExecuteOnCPU([i])){let e=n.readSync(i.dataId),t=qX(p,Jo(i.shape,i.dtype,e),b,v);x=n.makeTensorInfo(m,i.dtype,t.values)}else{let e=new C9(v,b,p);x=n.runWebGLProgram(e,[i],i.dtype)}let S=$({inputs:{x},backend:n,attrs:{shape:m}});return n.disposeIntermediateTensorInfo(x),S}var w9,Roe=o((()=>{q(),nZ(),Ioe(),zQ(),o0(),w9={kernelName:Mr,backendName:`webgl`,kernelFunc:Loe}}));function zoe(e){let{inputs:t,backend:n,attrs:r}=e,{separator:i,nGramWidths:a,leftPad:o,rightPad:s,padWidth:c,preserveShortSequences:l}=r,{data:u,dataSplits:d}=t,[f,p]=JX(n.readSync(u.dataId),n.readSync(d.dataId),i,a,o,s,c,l);return[n.makeTensorInfo([f.length],`string`,f),n.makeTensorInfo(d.shape,`int32`,p)]}var T9,Boe=o((()=>{q(),nZ(),T9={kernelName:Nr,backendName:`webgl`,kernelFunc:zoe}}));function Voe(e){let{inputs:t,backend:n,attrs:r}=e,{skipEmpty:i}=r,{input:a,delimiter:o}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(a.shape.length!==1)throw Error(`Input must be a vector, got shape: ${a.shape}`);if(o.shape.length!==0)throw Error(`Delimiter must be a scalar, got shape: ${o.shape}`);let s=n.readSync(a.dataId),c=n.readSync(o.dataId)[0],[l,u,d]=YX(s,c,i),f=u.length;return[n.makeTensorInfo([f,2],`int32`,l),n.makeTensorInfo([f],`string`,u),n.makeTensorInfo([2],`int32`,new Int32Array(d))]}var E9,Hoe=o((()=>{q(),nZ(),E9={kernelName:Pr,backendName:`webgl`,kernelFunc:Voe}}));function Uoe(e){let{inputs:t,backend:n,attrs:r}=e,{numBuckets:i}=r,{input:a}=t;if(a.dtype!==`string`)throw Error(`Input must be of datatype string`);if(i<=0)throw Error(`Number of buckets must be at least 1`);let o=XX(n.readSync(a.dataId),i);return n.makeTensorInfo(a.shape,`int32`,o)}var D9,Woe=o((()=>{q(),nZ(),D9={kernelName:Fr,backendName:`webgl`,kernelFunc:Uoe}})),O9,k9,A9,Goe=o((()=>{q(),EQ(),O9=`return tan(x);`,k9=SQ({opSnippet:O9}),A9={kernelName:`Tan`,backendName:`webgl`,kernelFunc:k9}})),j9,M9,N9,Koe=o((()=>{q(),EQ(),j9=`
  float e2x = exp(-2.0 * abs(x));
  return sign(x) * (1.0 - e2x) / (1.0 + e2x);
`,M9=SQ({opSnippet:j9}),N9={kernelName:Ir,backendName:`webgl`,kernelFunc:M9}}));function qoe(e){let{inputs:t,backend:n,attrs:r}=e,{tensor:i,indices:a,updates:o}=t,{}=r,{sliceRank:s,numUpdates:c,sliceSize:l,strides:u,outputSize:d}=bh(o,a,i.shape),f=[d/l,l];if(d===0)return n.makeTensorInfo(i.shape,a.dtype);let p=$({inputs:{x:a},backend:n,attrs:{shape:[c,s]}}),m=$({inputs:{x:o},backend:n,attrs:{shape:[c,l]}}),h=$({inputs:{x:i},backend:n,attrs:{shape:f}}),g=new A7(c,s,p.shape.length,m.shape.length,u,f,!1,!0),_=n.runWebGLProgram(g,[m,p,h],h.dtype),v=$({inputs:{x:_},backend:n,attrs:{shape:i.shape}});return n.disposeIntermediateTensorInfo(p),n.disposeIntermediateTensorInfo(m),n.disposeIntermediateTensorInfo(h),n.disposeIntermediateTensorInfo(_),v}var P9,Joe=o((()=>{q(),j7(),zQ(),P9={kernelName:dr,backendName:`webgl`,kernelFunc:qoe}}));function Yoe(e){let t=e.length;if(t>5)throw Error(`Tile for rank ${t} is not yet supported`);if(t===1)return`imod(resRC, ${e[0]})`;let n=[`resRC.x`,`resRC.y`,`resRC.z`,`resRC.w`,`resRC.u`],r=[];for(let t=0;t<e.length;t++)r.push(`imod(${n[t]}, ${e[t]})`);return r.join()}var F9,Xoe=o((()=>{mY(),F9=class{constructor(e,t){this.variableNames=[`A`];let n=Array(e.length);for(let r=0;r<n.length;r++)n[r]=e[r]*t[r];this.outputShape=n,this.rank=n.length;let r=aY(this.rank),i=Yoe(e);this.userCode=`
      void main() {
        ${r} resRC = getOutputCoords();
        setOutput(getA(${i}));
      }
    `}}}));function I9(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{reps:a}=r;if(i.dtype===`string`||i.shape.length>5){let e=n.readSync(i.dataId),t=i.dtype===`string`?e.map(e=>Fi(e)):e,r=QX(Jo(i.shape,i.dtype,t),a);return n.makeTensorInfo(r.shape,r.dtype,r.values)}let o=new F9(i.shape,a);return n.runWebGLProgram(o,[i],i.dtype)}var L9,R9=o((()=>{q(),nZ(),Xoe(),L9={kernelName:Lr,backendName:`webgl`,kernelFunc:I9}})),z9,B9,Zoe=o((()=>{z9=class{constructor(e){this.variableNames=[`x`,`indices`],this.customUniforms=[{name:`n`,type:`int`},{name:`firstPass`,type:`int`},{name:`negativeInf`,type:`float`},{name:`dir`,type:`int`},{name:`inc`,type:`int`}],this.outputShape=e,this.userCode=`
       void main() {
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // We compare elements pair-wise within a group of size 2 * inc.
         // The comparing rule for each group alternates between ascending
         // and descending. Within each group, we compare each pair at
         // positions i and i+inc. To decide whether an element at position i
         // is x0 or x1, we mod it by 2 * inc, if the result is smaller than
         // inc, it is in the first half of the group, we denote it as x0,
         // otherwise we denote it as x1.
         // For example, as shown in the Bitonic top K paper referenced above,
         // Figure5(a) shows that element[1] is in the
         // second half of the group when group size is 2, but it is in the
         // first half of the group when group size is 4.

         bool isFirstInPair = imod(elemIdx, 2 * inc) < inc;
         int i = isFirstInPair ? elemIdx : elemIdx - inc;

         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + inc : int(getIndices(batch, i + inc));
         float x0 = i0 < n ? getX(batch, i0) : negativeInf;
         float x1 = i1 < n ? getX(batch, i1) : negativeInf;

         // Denotes which direction indices are in (ascending or descending).
         bool reverse = imod(elemIdx, 2 * dir) >= dir;
         bool isGreater = x0 > x1 || (x0 == x1 && i1 > i0);
         if (reverse == isGreater) { // Elements in opposite order of direction
           int iTemp = i0;
           i0 = i1;
           i1 = iTemp;
         }
         if (isFirstInPair) {
            setOutput(float(i0));
         } else {
            setOutput(float(i1));
         }
       }
     `}},B9=class{constructor(e){this.variableNames=[`x`,`indices`],this.customUniforms=[{name:`n`,type:`int`},{name:`firstPass`,type:`int`},{name:`k`,type:`int`}],this.outputShape=e,this.userCode=`
    void main() {
         // Takes max of indices (0, k), (1, k + 1), (2, k + 2) ...
         ivec2 coords = getOutputCoords();
         int batch = coords[0];
         int elemIdx = coords[1];

         // The output size is half of the previous size.
         // If the previous sequence is | | | | _ _ _ _  | | | |  _ _ _ _ (k=4),
         // we only need to output the indices at positions |, the indices at
         // positions _ can be thrown away, see Figure5(b) After Phase 2
         // (Merge phase) in the Bitonic Top K paper referenced above.
         // For example, the paper shows we only need to output the orange bars.
         // The output sequence should look like this | | | | | | | |.
         // Because the sequence is halved, to map the output index back
         // to the previous sequence to find the corresponding value,
         // we need to double the index. When we double the index,
         // we basically interpolate a position, so 2i looks like
         // | _ | _ | _ | _ | _ | _ | _. We move the | to the first k position
         // of each 2k positions by - elemIdx % k. E.g. for output at
         // index 4,5,6,7, we want to get the corresponding element at
         // original index 8,9,10,11, for output at index 8,9,10,11,
         // we want to get the corresponding element at original index
         // 16,17,18,19, so on and so forth.

         int i = elemIdx < k ? elemIdx : (elemIdx * 2 - imod(elemIdx, k));
         int i0 = firstPass == 1 ? i : int(getIndices(batch, i));
         int i1 = firstPass == 1 ? i + k : int(getIndices(batch, i + k));

         float x0 = getX(batch, i0);
         float x1 = i1 < n ? getX(batch, i1) : x0;

         setOutput(x0 >= x1 ? float(i0) : float(i1));
       }
     `}}}));function V9(e,t){t!==null&&e.disposeIntermediateTensorInfo(t)}function H9(e){let t=1;for(;t<e;)t*=2;return t}function Qoe(e){let{inputs:t,backend:n,attrs:r}=e,{x:i}=t,{k:a,sorted:o}=r,s=k().getNumber(`TOPK_LAST_DIM_CPU_HANDOFF_SIZE_THRESHOLD`),c=k().getNumber(`TOPK_K_CPU_HANDOFF_THRESHOLD`),l=i.shape,u=l[l.length-1];if(n.shouldExecuteOnCPU([i])||u<s||a>c){let[e,t]=$X(n.readSync(i.dataId),l,i.dtype,a,o);return[n.makeTensorInfo(e.shape,e.dtype,e.values),n.makeTensorInfo(t.shape,t.dtype,t.values)]}if(a===0)return l[l.length-1]=0,[n.makeTensorInfo(l,i.dtype,[]),n.makeTensorInfo(l,`int32`,[])];if(u===1)return[i,B3({attrs:{shape:l,dtype:`int32`,value:0},backend:n})];let d=n.texData.get(i.dataId),f=d!==null&&d.isPacked,p=f?n.unpackTensor(i):i,m=D(l)/u,h=$({inputs:{x:p},attrs:{shape:[m,u]},backend:n});f&&V9(n,p);let g=H9(a),_=H9(u),v=null,y=()=>v===null?[h,h]:[h,v],b=(e,t,r)=>{let i=y(),a=new z9(r),o=[[u],[+(v===null)],[-1/0],[e],[t]],s=v;v=n.runWebGLProgram(a,i,`int32`,o),V9(n,s)};for(let e=1;e<g;e*=2){let t=e*2;for(let n=e;n>=1;n/=2)b(t,n,[m,_])}for(let e=_;e>g;e/=2){let t=y(),r=new B9([m,e/2]),i=[[u],[+(v===null)],[g]],a=v;v=n.runWebGLProgram(r,t,`int32`,i),V9(n,a);let o=g/2,s=o*2;for(let e=o;e>=1;e/=2)b(s,e,v.shape)}let x=v;v=i0({inputs:{x:v},backend:n,attrs:{begin:0,size:[m,a]}}),V9(n,x);let S=T6({inputs:{x:h,indices:v},backend:n,attrs:{axis:1,batchDims:1}});V9(n,h);let C=l.slice(0,-1);C.push(a),x=v,v=$({inputs:{x:v},attrs:{shape:C},backend:n}),V9(n,x);let w=S;return S=$({inputs:{x:S},attrs:{shape:C},backend:n}),V9(n,w),[S,v]}var U9,$oe=o((()=>{q(),nZ(),Zoe(),H3(),D6(),zQ(),o0(),U9={kernelName:Rr,backendName:`webgl`,kernelFunc:Qoe}})),W9,ese=o((()=>{W9=class{constructor(e,t,n,r,i,a){this.variableNames=[`Image`,`Transforms`],this.outputShape=a;let o=n===`nearest`?1:2,s;switch(r){case`constant`:s=1;break;case`reflect`:s=2;break;case`wrap`:s=3;break;case`nearest`:s=4;break;default:s=1;break}this.userCode=`
            float mapCoord(float outCoord, float len) {
              float inCoord = outCoord;
              if(${s} == 2) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    if (inCoord < sz2) {
                      inCoord = sz2 * float(int(float(-inCoord / sz2))) +
                      inCoord;
                    }
                    inCoord = inCoord < -len ? inCoord + sz2 : -inCoord - 1.0;
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz2 = 2.0 * len;
                    inCoord -= sz2 * float(int(float(inCoord / sz2)));
                    if (inCoord >= len) {
                      inCoord = sz2 - inCoord - 1.0;
                    }
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${s} == 3) {
                if (inCoord < 0.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord += len * (float(int(float(-inCoord / sz))) + 1.0);
                  }
                } else if (inCoord > len - 1.0) {
                  if (len <= 1.0) {
                    inCoord = 0.0;
                  } else {
                    float sz = len - 1.0;
                    inCoord -= len * float(int(float(inCoord / sz)));
                  }
                }
                return clamp(inCoord, 0.0, len - 1.0);
              } else if (${s} == 4) {
                return clamp(outCoord, 0.0, len - 1.0);
              } else {
                return outCoord;
              }
            }

            float readWithFillValue(int batch, int coordY, int coordX,
              int channel) {
              float outputValue;
              if (0 <= coordY && coordY < ${e} && 0 <= coordX && coordX < ${t}) {
                  outputValue = getImage(batch, coordY, coordX, channel);
              } else {
                outputValue = float(${i});
              }
              return outputValue;
            }

            void main() {
              ivec4 coords = getOutputCoords();
              float outputValue;
              int batch = coords[0];
              int x = coords[2];
              int y = coords[1];
              int channel = coords[3];
              float xf = float(x);
              float yf = float(y);
              float a1 = getTransforms(batch, 0);
              float a2 = getTransforms(batch, 1);
              float a3 = getTransforms(batch, 2);
              float b1 = getTransforms(batch, 3);
              float b2 = getTransforms(batch, 4);
              float b3 = getTransforms(batch, 5);
              float c1 = getTransforms(batch, 6);
              float c2 = getTransforms(batch, 7);
              float projection = c1 * xf + c2 * yf + 1.0;
              if (projection == 0.0) {
                outputValue = float(${i});
              } else {
                float inX = (a1 * xf + a2 * yf + a3) / projection;
                float inY = (b1 * xf + b2 * yf + b3) / projection;
                float mapX = mapCoord(inX, float(${t}));
                float mapY = mapCoord(inY, float(${e}));

                if (${o} == 1) {
                  int coordY = int(round(mapY));
                  int coordX = int(round(mapX));
                  outputValue = readWithFillValue(batch, coordY, coordX,
                    channel);
                } else {
                  float yFloor = floor(mapY);
                  float xFloor = floor(mapX);
                  float yCeil = yFloor + 1.0;
                  float xCeil = xFloor + 1.0;
                  float valueYFloor = (xCeil - mapX) *
                  readWithFillValue(batch, int(yFloor), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yFloor), int(xCeil), channel);
                  float valueYCeil = (xCeil - mapX) *
                  readWithFillValue(batch, int(yCeil), int(xFloor), channel) +
                  (mapX - xFloor) *
                  readWithFillValue(batch, int(yCeil), int(xCeil), channel);
                  outputValue = (yCeil - mapY) * valueYFloor +
                  (mapY - yFloor) * valueYCeil;
                }
              }
              setOutput(outputValue);
            }
        `}}}));function tse(e){let{inputs:t,backend:n,attrs:r}=e,{image:i,transforms:a}=t,{interpolation:o,fillMode:s,fillValue:c,outputShape:l}=r,[u,d,f,p]=i.shape,[m,h]=l??[d,f],g=new W9(d,f,o,s,c,[u,m,h,p]);return n.runWebGLProgram(g,[i,a],`float32`)}var G9,nse=o((()=>{q(),ese(),G9={kernelName:zr,backendName:`webgl`,kernelFunc:tse}}));function rse(e){let{inputs:t,attrs:n,backend:r}=e,{axis:i}=n,{x:a}=t;iJ(a,`unique`),console.warn(`WARNING: `,`UI might be locked temporarily as data is being downloaded`);let{outputValues:o,outputShape:s,indices:c}=tZ(r.readSync(a.dataId),i,a.shape,a.dtype);return[r.makeTensorInfo(s,a.dtype,o),r.makeTensorInfo([c.length],`int32`,c)]}var K9,ise=o((()=>{q(),nZ(),uJ(),K9={kernelName:Vr,backendName:`webgl`,kernelFunc:rse}}));function ase(e){let{inputs:t,backend:n,attrs:r}=e,{value:i}=t,{axis:a}=r;a<0&&(a+=i.shape.length);let o=i,s=o.shape.length,c=i.shape[a],l=Array(s-1),u=0;for(let e=0;e<s;e++)e!==a&&(l[u++]=o.shape[e]);let d=[],f=Array(s).fill(0),p=o.shape.slice();p[a]=1;let m=Array(c);for(let e=0;e<m.length;e++){f[a]=e;let t=i0({inputs:{x:o},backend:n,attrs:{begin:f,size:p}});m[e]=$({inputs:{x:t},backend:n,attrs:{shape:l}}),d.push(t)}return d.forEach(e=>n.disposeIntermediateTensorInfo(e)),m}var q9,ose=o((()=>{q(),zQ(),o0(),q9={kernelName:Hr,backendName:`webgl`,kernelFunc:ase}})),J9,sse=o((()=>{J9=class{constructor(e,t){this.variableNames=[`x`,`segmentIds`];let n=e.windowSize,r=e.batchSize,i=e.inSize,a=e.numSegments,o=a*Math.ceil(i/n);this.outputShape=[r,o];let s=Math.floor(n/4)*4,c=n%4,l=`
        sumValue += dot(values, segFilter);
    `,u=``;i%n>0&&(u=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return initializationValue;
        }
      `);let d=``;i%n>0&&(d=`
        if (inIdx < 0 || inIdx >= ${i}) {
          return -1.0;
        }
      `),this.userCode=`
      const float initializationValue = 0.0;

      float getValue(int batch, int inIdx) {
        ${u}
        return getX(batch, inIdx);
      }

      float getSegmentIdAtIndex(int inIdx) {
        ${d}
        return getSegmentIds(inIdx);
      }

      void main() {
        ivec2 coords = getOutputCoords();
        int batch = coords[0];
        int outIdx = coords[1];
        int inOffset = int(floor(float(outIdx) / float(
          ${a})) * float(${n}));
        int currentSeg = int(mod(float(outIdx), float(${a})));

        float sumValue = 0.0;

        for (int i = 0; i < ${s}; i += 4) {
          int inIdx = inOffset + i;
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            getValue(batch, inIdx + 3)
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 3)) == currentSeg ? 1 : 0
          );

          ${l}
        }

        int inIdx = inOffset + ${s};
        if (${c===1}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            initializationValue,
            initializationValue,
            initializationValue
          );

          int inIdxSeg = int(getSegmentIdAtIndex(inIdx));

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            0,
            0,
            0
          );

          ${l}
        } else if (${c===2}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            initializationValue,
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
              0,
              0
          );

          ${l}
        } else if (${c===3}) {
          vec4 values = vec4(
            getValue(batch, inIdx),
            getValue(batch, inIdx + 1),
            getValue(batch, inIdx + 2),
            initializationValue
          );

          vec4 segFilter = vec4(
            int(getSegmentIdAtIndex(inIdx)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 1)) == currentSeg ? 1 : 0,
            int(getSegmentIdAtIndex(inIdx + 2)) == currentSeg ? 1 : 0,
            0
          );

          ${l}
        }
        setOutput(sumValue);
      }
    `}}}));function cse(e){let{inputs:t,backend:n,attrs:r}=e,{x:i,segmentIds:a}=t,{numSegments:o}=r,s=i.shape.length,c=[],l=0,u=Su([l],s),d=i;u!=null&&(d=a$({inputs:{x:i},backend:n,attrs:{perm:u}}),c.push(d),l=wu(1,s)[0]);let f=$y(d.shape,l,o),p=D([d.shape[l]]),m=$({inputs:{x:d},backend:n,attrs:{shape:[-1,p]}});c.push(m);let h=ia(i.dtype),g=(e,t,r,i,a)=>{let o=e.shape[0],s=e.shape[1],l=Qy(s,a),u=new J9({windowSize:l,inSize:s,batchSize:o,numSegments:a},t),d=n.compileAndRun(u,[e,r],i);if(c.push(d),d.shape[1]===a)return d;let f=Y5({backend:n,attrs:{start:0,stop:a,step:1,dtype:`float32`}}),p=I9({inputs:{x:f},backend:n,attrs:{reps:[s/l]}});return c.push(f),c.push(p),g(d,t,p,i,a)},_=$({inputs:{x:g(m,`unsortedSegmentSum`,a,h,o)},backend:n,attrs:{shape:f}}),v=_;if(u!=null){c.push(_);let e=Cu(u);v=a$({inputs:{x:v},backend:n,attrs:{perm:e}})}return c.forEach(e=>n.disposeIntermediateTensorInfo(e)),v}var Y9,lse=o((()=>{q(),sse(),Z5(),zQ(),R9(),s$(),Y9={kernelName:Ur,backendName:`webgl`,kernelFunc:cse}})),X9,use=o((()=>{q(),f$(),g$(),b$(),w$(),O$(),F$(),R$(),V$(),Q$(),t1(),a1(),l1(),p1(),v1(),S1(),O1(),j1(),L1(),B1(),U1(),X1(),l0(),f0(),_0(),b0(),M0(),I0(),U0(),dQ(),Y0(),l2(),C2(),j2(),I2(),z2(),H2(),G2(),X2(),e4(),a4(),h4(),v4(),x4(),E4(),N4(),z4(),H4(),q4(),Q4(),t3(),i3(),l3(),m3(),v3(),C3(),E3(),A3(),L3(),H3(),K3(),X3(),t6(),u6(),p6(),g6(),x6(),D6(),M6(),L6(),cQ(),hie(),r2(),gie(),_ie(),vie(),gQ(),yie(),bie(),Sie(),Cie(),wie(),Tie(),Eie(),Die(),Aie(),Mie(),j8(),Fie(),Lie(),zie(),Vie(),Uie(),Kie(),Yie(),Zie(),Qie(),tae(),nae(),aae(),FQ(),sae(),lae(),dae(),pae(),w0(),hae(),gae(),vae(),B5(),xae(),xQ(),Cae(),Tae(),Dae(),kae(),Z5(),D0(),l5(),Aae(),jae(),Mae(),zQ(),Iae(),zae(),Uae(),Kae(),Xae(),Qae(),$ae(),eoe(),roe(),ooe(),loe(),uoe(),doe(),foe(),poe(),moe(),o0(),g5(),hoe(),goe(),voe(),boe(),Soe(),woe(),Eoe(),Ooe(),koe(),Aoe(),joe(),Noe(),Foe(),Roe(),Boe(),Hoe(),Woe(),p5(),i$(),Goe(),Koe(),Joe(),R9(),$oe(),nse(),s$(),ise(),ose(),lse(),M5(),X9=[d$,h$,y$,C$,D$,P$,L$,B$,Z$,e1,i1,c1,f1,_1,x1,D1,A1,I1,z1,H1,Y1,c0,d0,g0,y0,j0,F0,H0,uQ,J0,c2,S2,A2,F2,R2,V2,W2,Y2,$2,i4,m4,_4,b4,T4,M4,R4,V4,K4,Z4,e3,r3,c3,p3,_3,S3,T3,k3,I3,V3,G3,Y3,e6,s6,f6,h6,b6,E6,j6,I6,sQ,z6,n2,H6,G6,J6,hQ,Q6,n8,r8,s8,u8,m8,_8,x8,T8,O8,A8,F8,I8,L8,V8,H8,U8,W8,G8,Y8,$8,r5,_5,PQ,b5,S5,w5,E5,C0,k5,P5,F5,z5,W5,bQ,G5,K5,q5,J5,X5,E0,c5,e7,i7,c7,RQ,d7,p7,g7,v7,x7,C7,E7,k7,N7,F7,L7,B7,W7,q7,Z7,e9,a0,h5,r9,a9,o9,s9,c9,l9,u9,d9,m9,_9,b9,x9,S9,w9,T9,E9,D9,f5,r$,A9,N9,P9,L9,U9,G9,o$,K9,q9,Y9,j5];for(let e of X9)ri(e)})),Z9=o((()=>{$Z(),use()})),Q9,dse=o((()=>{Q9=`4.22.0`})),$9,fse=o((()=>{q(),CC(),Bne(),q(),GN(),kP(),NF(),QK(),Z9(),QK(),Z9(),GN(),kP(),dse(),$9={"tfjs-core":Rv,"tfjs-backend-cpu":fz,"tfjs-backend-webgl":XZ,"tfjs-data":jF,"tfjs-layers":eA,"tfjs-converter":DP,tfjs:Q9}}));s((()=>{te(),ne(),fse(),console.log($9.tfjs);var e=[0,0,0,3,1.5],t=[.6,-.6,0,3,1.5];new ee(`stage-bg`,`#00fa`,e);var n=new ee(`stage-ui`,`#f0fa`,t),r=new T;n.set_change_state_callback(r.set_state.bind(r)),r.inp_x.addEventListener(`change`,n.change_x.bind(n)),r.inp_y.addEventListener(`change`,n.change_y.bind(n)),r.inp_yaw.addEventListener(`change`,n.change_yaw.bind(n)),r.inp_len.addEventListener(`change`,n.change_len.bind(n)),r.inp_wdt.addEventListener(`change`,n.change_wdt.bind(n)),r.reset_btn.addEventListener(`click`,()=>{n.set_state(e)})}))();