(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $o="175",iu=0,Ra=1,ru=2,ec=1,tc=2,bn=3,Gn=0,qt=1,Wt=2,Hn=0,Ai=1,La=2,Ia=3,Da=4,su=5,ni=100,ou=101,au=102,lu=103,cu=104,uu=200,hu=201,du=202,fu=203,to=204,no=205,pu=206,mu=207,gu=208,vu=209,_u=210,xu=211,yu=212,Mu=213,Su=214,io=0,ro=1,so=2,Ri=3,oo=4,ao=5,lo=6,co=7,Zo=0,Eu=1,wu=2,Vn=0,bu=1,Tu=2,Au=3,nc=4,Cu=5,Pu=6,Ru=7,ic=300,Li=301,Ii=302,uo=303,ho=304,ds=306,rr=1e3,ri=1001,fo=1002,Yt=1003,Lu=1004,Mr=1005,Ht=1006,xs=1007,kn=1008,hn=1009,rc=1010,sc=1011,sr=1012,jo=1013,Wn=1014,Tn=1015,zi=1016,Jo=1017,Ko=1018,or=1020,oc=35902,ac=1021,lc=1022,Xt=1023,cc=1024,uc=1025,Di=1026,ar=1027,hc=1028,Qo=1029,dc=1030,ea=1031,ta=1033,Jr=33776,Kr=33777,Qr=33778,es=33779,po=35840,mo=35841,go=35842,vo=35843,_o=36196,xo=37492,yo=37496,Mo=37808,So=37809,Eo=37810,wo=37811,bo=37812,To=37813,Ao=37814,Co=37815,Po=37816,Ro=37817,Lo=37818,Io=37819,Do=37820,Uo=37821,ts=36492,No=36494,Fo=36495,fc=36283,Oo=36284,zo=36285,ko=36286,Iu=3200,Du=3201,pc=0,Uu=1,pn="",St="srgb",Ui="srgb-linear",ss="linear",ct="srgb",hi=7680,Ua=519,Nu=512,Fu=513,Ou=514,mc=515,zu=516,ku=517,Bu=518,Hu=519,Na=35044,Fa="300 es",An=2e3,os=2001;class ki{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const It=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oa=1234567;const Ci=Math.PI/180,lr=180/Math.PI;function li(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(It[n&255]+It[n>>8&255]+It[n>>16&255]+It[n>>24&255]+"-"+It[e&255]+It[e>>8&255]+"-"+It[e>>16&15|64]+It[e>>24&255]+"-"+It[t&63|128]+It[t>>8&255]+"-"+It[t>>16&255]+It[t>>24&255]+It[i&255]+It[i>>8&255]+It[i>>16&255]+It[i>>24&255]).toLowerCase()}function Qe(n,e,t){return Math.max(e,Math.min(t,n))}function na(n,e){return(n%e+e)%e}function Vu(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Gu(n,e,t){return n!==e?(t-n)/(e-n):0}function Ki(n,e,t){return(1-t)*n+t*e}function Wu(n,e,t,i){return Ki(n,e,1-Math.exp(-t*i))}function Xu(n,e=1){return e-Math.abs(na(n,e*2)-e)}function qu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Yu(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function $u(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Zu(n,e){return n+Math.random()*(e-n)}function ju(n){return n*(.5-Math.random())}function Ju(n){n!==void 0&&(Oa=n);let e=Oa+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ku(n){return n*Ci}function Qu(n){return n*lr}function eh(n){return(n&n-1)===0&&n!==0}function th(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function nh(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ih(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),h=o((e+i)/2),p=s((e-i)/2),d=o((e-i)/2),f=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*h,l*p,l*d,a*c);break;case"YZY":n.set(l*d,a*h,l*p,a*c);break;case"ZXZ":n.set(l*p,l*d,a*h,a*c);break;case"XZX":n.set(a*h,l*g,l*f,a*c);break;case"YXY":n.set(l*f,a*h,l*g,a*c);break;case"ZYZ":n.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function bi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ia={DEG2RAD:Ci,RAD2DEG:lr,generateUUID:li,clamp:Qe,euclideanModulo:na,mapLinear:Vu,inverseLerp:Gu,lerp:Ki,damp:Wu,pingpong:Xu,smoothstep:qu,smootherstep:Yu,randInt:$u,randFloat:Zu,randFloatSpread:ju,seededRandom:Ju,degToRad:Ku,radToDeg:Qu,isPowerOfTwo:eh,ceilPowerOfTwo:th,floorPowerOfTwo:nh,setQuaternionFromProperEuler:ih,normalize:zt,denormalize:bi};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,i,r,s,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],p=i[7],d=i[2],f=i[5],g=i[8],v=r[0],m=r[3],u=r[6],T=r[1],y=r[4],x=r[7],E=r[2],w=r[5],A=r[8];return s[0]=o*v+a*T+l*E,s[3]=o*m+a*y+l*w,s[6]=o*u+a*x+l*A,s[1]=c*v+h*T+p*E,s[4]=c*m+h*y+p*w,s[7]=c*u+h*x+p*A,s[2]=d*v+f*T+g*E,s[5]=d*m+f*y+g*w,s[8]=d*u+f*x+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-i*s*h+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=t*p+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=p*v,e[1]=(r*c-h*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(h*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=f*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ys.makeScale(e,t)),this}rotate(e){return this.premultiply(ys.makeRotation(-e)),this}translate(e,t){return this.premultiply(ys.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ys=new Je;function gc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function as(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function rh(){const n=as("canvas");return n.style.display="block",n}const za={};function ns(n){n in za||(za[n]=!0,console.warn(n))}function sh(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function oh(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ah(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ka=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ba=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lh(){const n={enabled:!0,workingColorSpace:Ui,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ct&&(r.r=Cn(r.r),r.g=Cn(r.g),r.b=Cn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ct&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pn?ss:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ui]:{primaries:e,whitePoint:i,transfer:ss,toXYZ:ka,fromXYZ:Ba,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:St},outputColorSpaceConfig:{drawingBufferColorSpace:St}},[St]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:ka,fromXYZ:Ba,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:St}}}),n}const rt=lh();function Cn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Pi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let di;class ch{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{di===void 0&&(di=as("canvas")),di.width=e.width,di.height=e.height;const r=di.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=di}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=as("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Cn(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Cn(t[i]/255)*255):t[i]=Cn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let uh=0;class ra{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=li(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ms(r[o].image)):s.push(Ms(r[o]))}else s=Ms(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ms(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ch.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hh=0;class Ft extends ki{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=ri,r=ri,s=Ht,o=kn,a=Xt,l=hn,c=Ft.DEFAULT_ANISOTROPY,h=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=li(),this.name="",this.source=new ra(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ic)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rr:e.x=e.x-Math.floor(e.x);break;case ri:e.x=e.x<0?0:1;break;case fo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rr:e.y=e.y-Math.floor(e.y);break;case ri:e.y=e.y<0?0:1;break;case fo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=ic;Ft.DEFAULT_ANISOTROPY=1;class et{constructor(e=0,t=0,i=0,r=1){et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],h=l[4],p=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(p-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(f+1)/2,E=(u+1)/2,w=(h+d)/4,A=(p+v)/4,P=(g+m)/4;return y>x&&y>E?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=A/i):x>E?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=P/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=A/s,r=P/s),this.set(i,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(p-v)*(p-v)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(p-v)/T,this.z=(d-h)/T,this.w=Math.acos((c+f+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dh extends ki{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new et(0,0,e,t),this.scissorTest=!1,this.viewport=new et(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ht,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Ft(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ra(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends dh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class vc extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class fh extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],h=i[r+2],p=i[r+3];const d=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=v;return}if(p!==v||l!==d||c!==f||h!==g){let m=1-a;const u=l*d+c*f+h*g+p*v,T=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){const E=Math.sqrt(y),w=Math.atan2(E,u*T);m=Math.sin(m*w)/E,a=Math.sin(a*w)/E}const x=a*T;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,p=p*m+v*x,m===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+p*p);l*=E,c*=E,h*=E,p*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],h=i[r+3],p=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return e[t]=a*g+h*p+l*f-c*d,e[t+1]=l*g+h*d+c*p-a*f,e[t+2]=c*g+h*f+a*d-l*p,e[t+3]=h*g-a*p-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(r/2),p=a(s/2),d=l(i/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*p+c*f*g,this._y=c*f*p-d*h*g,this._z=c*h*g+d*f*p,this._w=c*h*p-d*f*g;break;case"YXZ":this._x=d*h*p+c*f*g,this._y=c*f*p-d*h*g,this._z=c*h*g-d*f*p,this._w=c*h*p+d*f*g;break;case"ZXY":this._x=d*h*p-c*f*g,this._y=c*f*p+d*h*g,this._z=c*h*g+d*f*p,this._w=c*h*p-d*f*g;break;case"ZYX":this._x=d*h*p-c*f*g,this._y=c*f*p+d*h*g,this._z=c*h*g-d*f*p,this._w=c*h*p+d*f*g;break;case"YZX":this._x=d*h*p+c*f*g,this._y=c*f*p+d*h*g,this._z=c*h*g-d*f*p,this._w=c*h*p-d*f*g;break;case"XZY":this._x=d*h*p-c*f*g,this._y=c*f*p-d*h*g,this._z=c*h*g+d*f*p,this._w=c*h*p+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],p=t[10],d=i+a+p;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>p){const f=2*Math.sqrt(1+i-a-p);this._w=(h-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>p){const f=2*Math.sqrt(1+a-i-p);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+p-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-i*c,this._z=s*h+o*c+i*l-r*a,this._w=o*h-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),p=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*p+this._w*d,this._x=i*p+this._x*d,this._y=r*p+this._y*d,this._z=s*p+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ha.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ha.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),h=2*(a*t-s*r),p=2*(s*i-o*t);return this.x=t+l*c+o*p-a*h,this.y=i+l*h+a*c-s*p,this.z=r+l*p+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ss.copy(this).projectOnVector(e),this.sub(Ss)}reflect(e){return this.sub(Ss.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ss=new z,Ha=new mr;class gr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(an.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(an.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=an.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,an):an.fromBufferAttribute(s,o),an.applyMatrix4(e.matrixWorld),this.expandByPoint(an);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Sr.copy(i.boundingBox)),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,an),an.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Gi),Er.subVectors(this.max,Gi),fi.subVectors(e.a,Gi),pi.subVectors(e.b,Gi),mi.subVectors(e.c,Gi),Ln.subVectors(pi,fi),In.subVectors(mi,pi),Zn.subVectors(fi,mi);let t=[0,-Ln.z,Ln.y,0,-In.z,In.y,0,-Zn.z,Zn.y,Ln.z,0,-Ln.x,In.z,0,-In.x,Zn.z,0,-Zn.x,-Ln.y,Ln.x,0,-In.y,In.x,0,-Zn.y,Zn.x,0];return!Es(t,fi,pi,mi,Er)||(t=[1,0,0,0,1,0,0,0,1],!Es(t,fi,pi,mi,Er))?!1:(wr.crossVectors(Ln,In),t=[wr.x,wr.y,wr.z],Es(t,fi,pi,mi,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,an).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(an).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yn=[new z,new z,new z,new z,new z,new z,new z,new z],an=new z,Sr=new gr,fi=new z,pi=new z,mi=new z,Ln=new z,In=new z,Zn=new z,Gi=new z,Er=new z,wr=new z,jn=new z;function Es(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){jn.fromArray(n,s);const a=r.x*Math.abs(jn.x)+r.y*Math.abs(jn.y)+r.z*Math.abs(jn.z),l=e.dot(jn),c=t.dot(jn),h=i.dot(jn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ph=new gr,Wi=new z,ws=new z;class fs{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ph.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wi.subVectors(e,this.center);const t=Wi.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Wi,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ws.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wi.copy(e.center).add(ws)),this.expandByPoint(Wi.copy(e.center).sub(ws))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new z,bs=new z,br=new z,Dn=new z,Ts=new z,Tr=new z,As=new z;class sa{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){bs.copy(e).add(t).multiplyScalar(.5),br.copy(t).sub(e).normalize(),Dn.copy(this.origin).sub(bs);const s=e.distanceTo(t)*.5,o=-this.direction.dot(br),a=Dn.dot(this.direction),l=-Dn.dot(br),c=Dn.lengthSq(),h=Math.abs(1-o*o);let p,d,f,g;if(h>0)if(p=o*l-a,d=o*a-l,g=s*h,p>=0)if(d>=-g)if(d<=g){const v=1/h;p*=v,d*=v,f=p*(p+o*d+2*a)+d*(o*p+d+2*l)+c}else d=s,p=Math.max(0,-(o*d+a)),f=-p*p+d*(d+2*l)+c;else d=-s,p=Math.max(0,-(o*d+a)),f=-p*p+d*(d+2*l)+c;else d<=-g?(p=Math.max(0,-(-o*s+a)),d=p>0?-s:Math.min(Math.max(-s,-l),s),f=-p*p+d*(d+2*l)+c):d<=g?(p=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(p=Math.max(0,-(o*s+a)),d=p>0?s:Math.min(Math.max(-s,-l),s),f=-p*p+d*(d+2*l)+c);else d=o>0?-s:s,p=Math.max(0,-(o*d+a)),f=-p*p+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(bs).addScaledVector(br,d),f}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const i=Mn.dot(this.direction),r=Mn.dot(Mn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-d.z)*p,l=(e.max.z-d.z)*p):(a=(e.max.z-d.z)*p,l=(e.min.z-d.z)*p),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,i,r,s){Ts.subVectors(t,e),Tr.subVectors(i,e),As.crossVectors(Ts,Tr);let o=this.direction.dot(As),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,e);const l=a*this.direction.dot(Tr.crossVectors(Dn,Tr));if(l<0)return null;const c=a*this.direction.dot(Ts.cross(Dn));if(c<0||l+c>o)return null;const h=-a*Dn.dot(As);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,t,i,r,s,o,a,l,c,h,p,d,f,g,v,m){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,h,p,d,f,g,v,m)}set(e,t,i,r,s,o,a,l,c,h,p,d,f,g,v,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=h,u[10]=p,u[14]=d,u[3]=f,u[7]=g,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/gi.setFromMatrixColumn(e,0).length(),s=1/gi.setFromMatrixColumn(e,1).length(),o=1/gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=o*h,f=o*p,g=a*h,v=a*p;t[0]=l*h,t[4]=-l*p,t[8]=c,t[1]=f+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*p,g=c*h,v=c*p;t[0]=d+v*a,t[4]=g*a-f,t[8]=o*c,t[1]=o*p,t[5]=o*h,t[9]=-a,t[2]=f*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*p,g=c*h,v=c*p;t[0]=d-v*a,t[4]=-o*p,t[8]=g+f*a,t[1]=f+g*a,t[5]=o*h,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*p,g=a*h,v=a*p;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+v,t[1]=l*p,t[5]=v*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=v-d*p,t[8]=g*p+f,t[1]=p,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*p+g,t[10]=d-v*p}else if(e.order==="XZY"){const d=o*l,f=o*c,g=a*l,v=a*c;t[0]=l*h,t[4]=-p,t[8]=c*h,t[1]=d*p+v,t[5]=o*h,t[9]=f*p-g,t[2]=g*p-f,t[6]=a*h,t[10]=v*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mh,e,gh)}lookAt(e,t,i){const r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),Un.crossVectors(i,jt),Un.lengthSq()===0&&(Math.abs(i.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),Un.crossVectors(i,jt)),Un.normalize(),Ar.crossVectors(jt,Un),r[0]=Un.x,r[4]=Ar.x,r[8]=jt.x,r[1]=Un.y,r[5]=Ar.y,r[9]=jt.y,r[2]=Un.z,r[6]=Ar.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],p=i[5],d=i[9],f=i[13],g=i[2],v=i[6],m=i[10],u=i[14],T=i[3],y=i[7],x=i[11],E=i[15],w=r[0],A=r[4],P=r[8],b=r[12],M=r[1],U=r[5],Y=r[9],N=r[13],k=r[2],O=r[6],V=r[10],$=r[14],W=r[3],le=r[7],me=r[11],xe=r[15];return s[0]=o*w+a*M+l*k+c*W,s[4]=o*A+a*U+l*O+c*le,s[8]=o*P+a*Y+l*V+c*me,s[12]=o*b+a*N+l*$+c*xe,s[1]=h*w+p*M+d*k+f*W,s[5]=h*A+p*U+d*O+f*le,s[9]=h*P+p*Y+d*V+f*me,s[13]=h*b+p*N+d*$+f*xe,s[2]=g*w+v*M+m*k+u*W,s[6]=g*A+v*U+m*O+u*le,s[10]=g*P+v*Y+m*V+u*me,s[14]=g*b+v*N+m*$+u*xe,s[3]=T*w+y*M+x*k+E*W,s[7]=T*A+y*U+x*O+E*le,s[11]=T*P+y*Y+x*V+E*me,s[15]=T*b+y*N+x*$+E*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],p=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],u=e[15];return g*(+s*l*p-r*c*p-s*a*d+i*c*d+r*a*f-i*l*f)+v*(+t*l*f-t*c*d+s*o*d-r*o*f+r*c*h-s*l*h)+m*(+t*c*p-t*a*f-s*o*p+i*o*f+s*a*h-i*c*h)+u*(-r*a*h-t*l*p+t*a*d+r*o*p-i*o*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],p=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],u=e[15],T=p*m*c-v*d*c+v*l*f-a*m*f-p*l*u+a*d*u,y=g*d*c-h*m*c-g*l*f+o*m*f+h*l*u-o*d*u,x=h*v*c-g*p*c+g*a*f-o*v*f-h*a*u+o*p*u,E=g*p*l-h*v*l-g*a*d+o*v*d+h*a*m-o*p*m,w=t*T+i*y+r*x+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=T*A,e[1]=(v*d*s-p*m*s-v*r*f+i*m*f+p*r*u-i*d*u)*A,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*u+i*l*u)*A,e[3]=(p*l*s-a*d*s-p*r*c+i*d*c+a*r*f-i*l*f)*A,e[4]=y*A,e[5]=(h*m*s-g*d*s+g*r*f-t*m*f-h*r*u+t*d*u)*A,e[6]=(g*l*s-o*m*s-g*r*c+t*m*c+o*r*u-t*l*u)*A,e[7]=(o*d*s-h*l*s+h*r*c-t*d*c-o*r*f+t*l*f)*A,e[8]=x*A,e[9]=(g*p*s-h*v*s-g*i*f+t*v*f+h*i*u-t*p*u)*A,e[10]=(o*v*s-g*a*s+g*i*c-t*v*c-o*i*u+t*a*u)*A,e[11]=(h*a*s-o*p*s-h*i*c+t*p*c+o*i*f-t*a*f)*A,e[12]=E*A,e[13]=(h*v*r-g*p*r+g*i*d-t*v*d-h*i*m+t*p*m)*A,e[14]=(g*a*r-o*v*r-g*i*l+t*v*l+o*i*m-t*a*m)*A,e[15]=(o*p*r-h*a*r+h*i*l-t*p*l-o*i*d+t*a*d)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+i,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,p=a+a,d=s*c,f=s*h,g=s*p,v=o*h,m=o*p,u=a*p,T=l*c,y=l*h,x=l*p,E=i.x,w=i.y,A=i.z;return r[0]=(1-(v+u))*E,r[1]=(f+x)*E,r[2]=(g-y)*E,r[3]=0,r[4]=(f-x)*w,r[5]=(1-(d+u))*w,r[6]=(m+T)*w,r[7]=0,r[8]=(g+y)*A,r[9]=(m-T)*A,r[10]=(1-(d+v))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=gi.set(r[0],r[1],r[2]).length();const o=gi.set(r[4],r[5],r[6]).length(),a=gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ln.copy(this);const c=1/s,h=1/o,p=1/a;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=p,ln.elements[9]*=p,ln.elements[10]*=p,t.setFromRotationMatrix(ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=An){const l=this.elements,c=2*s/(t-e),h=2*s/(i-r),p=(t+e)/(t-e),d=(i+r)/(i-r);let f,g;if(a===An)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===os)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=p,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=An){const l=this.elements,c=1/(t-e),h=1/(i-r),p=1/(o-s),d=(t+e)*c,f=(i+r)*h;let g,v;if(a===An)g=(o+s)*p,v=-2*p;else if(a===os)g=s*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const gi=new z,ln=new ht,mh=new z(0,0,0),gh=new z(1,1,1),Un=new z,Ar=new z,jt=new z,Va=new ht,Ga=new mr;class gn{constructor(e=0,t=0,i=0,r=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],p=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Va.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Va,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ga.setFromEuler(this),this.setFromQuaternion(Ga,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class oa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vh=0;const Wa=new z,vi=new mr,Sn=new ht,Cr=new z,Xi=new z,_h=new z,xh=new mr,Xa=new z(1,0,0),qa=new z(0,1,0),Ya=new z(0,0,1),$a={type:"added"},yh={type:"removed"},_i={type:"childadded",child:null},Cs={type:"childremoved",child:null};class Rt extends ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vh++}),this.uuid=li(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new z,t=new gn,i=new mr,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Je}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(Xa,e)}rotateY(e){return this.rotateOnAxis(qa,e)}rotateZ(e){return this.rotateOnAxis(Ya,e)}translateOnAxis(e,t){return Wa.copy(e).applyQuaternion(this.quaternion),this.position.add(Wa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xa,e)}translateY(e){return this.translateOnAxis(qa,e)}translateZ(e){return this.translateOnAxis(Ya,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cr.copy(e):Cr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(Xi,Cr,this.up):Sn.lookAt(Cr,Xi,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),vi.setFromRotationMatrix(Sn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($a),_i.child=e,this.dispatchEvent(_i),_i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yh),Cs.child=e,this.dispatchEvent(Cs),Cs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($a),_i.child=e,this.dispatchEvent(_i),_i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,e,_h),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,xh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const p=l[c];s(e.shapes,p)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),p=o(e.shapes),d=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Rt.DEFAULT_UP=new z(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const cn=new z,En=new z,Ps=new z,wn=new z,xi=new z,yi=new z,Za=new z,Rs=new z,Ls=new z,Is=new z,Ds=new et,Us=new et,Ns=new et;class nn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),cn.subVectors(e,t),r.cross(cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){cn.subVectors(r,t),En.subVectors(i,t),Ps.subVectors(e,t);const o=cn.dot(cn),a=cn.dot(En),l=cn.dot(Ps),c=En.dot(En),h=En.dot(Ps),p=o*c-a*a;if(p===0)return s.set(0,0,0),null;const d=1/p,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,wn.x),l.addScaledVector(o,wn.y),l.addScaledVector(a,wn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return Ds.setScalar(0),Us.setScalar(0),Ns.setScalar(0),Ds.fromBufferAttribute(e,t),Us.fromBufferAttribute(e,i),Ns.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ds,s.x),o.addScaledVector(Us,s.y),o.addScaledVector(Ns,s.z),o}static isFrontFacing(e,t,i,r){return cn.subVectors(i,t),En.subVectors(e,t),cn.cross(En).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),En.subVectors(this.a,this.b),cn.cross(En).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return nn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return nn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;xi.subVectors(r,i),yi.subVectors(s,i),Rs.subVectors(e,i);const l=xi.dot(Rs),c=yi.dot(Rs);if(l<=0&&c<=0)return t.copy(i);Ls.subVectors(e,r);const h=xi.dot(Ls),p=yi.dot(Ls);if(h>=0&&p<=h)return t.copy(r);const d=l*p-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(i).addScaledVector(xi,o);Is.subVectors(e,s);const f=xi.dot(Is),g=yi.dot(Is);if(g>=0&&f<=g)return t.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(yi,a);const m=h*g-f*p;if(m<=0&&p-h>=0&&f-g>=0)return Za.subVectors(s,r),a=(p-h)/(p-h+(f-g)),t.copy(r).addScaledVector(Za,a);const u=1/(m+v+d);return o=v*u,a=d*u,t.copy(i).addScaledVector(xi,o).addScaledVector(yi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function Fs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=na(e,1),t=Qe(t,0,1),i=Qe(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Fs(o,s,e+1/3),this.g=Fs(o,s,e),this.b=Fs(o,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,t=St){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const i=_c[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return rt.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Qe(Dt.r*255,0,255))*65536+Math.round(Qe(Dt.g*255,0,255))*256+Math.round(Qe(Dt.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Dt.copy(this),t);const i=Dt.r,r=Dt.g,s=Dt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const p=o-a;switch(c=h<=.5?p/(o+a):p/(2-o-a),o){case i:l=(r-s)/p+(r<s?6:0);break;case r:l=(s-i)/p+2;break;case s:l=(i-r)/p+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=St){rt.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,r=Dt.b;return e!==St?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Nn),this.setHSL(Nn.h+e,Nn.s+t,Nn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Nn),e.getHSL(Pr);const i=Ki(Nn.h,Pr.h,t),r=Ki(Nn.s,Pr.s,t),s=Ki(Nn.l,Pr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new je;je.NAMES=_c;let Mh=0;class ci extends ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=li(),this.name="",this.type="Material",this.blending=Ai,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=to,this.blendDst=no,this.blendEquation=ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ua,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hi,this.stencilZFail=hi,this.stencilZPass=hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ai&&(i.blending=this.blending),this.side!==Gn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==to&&(i.blendSrc=this.blendSrc),this.blendDst!==no&&(i.blendDst=this.blendDst),this.blendEquation!==ni&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ua&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class un extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _t=new z,Rr=new Te;let Sh=0;class $t{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Na,this.updateRanges=[],this.gpuType=Tn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Rr.fromBufferAttribute(this,t),Rr.applyMatrix3(e),this.setXY(t,Rr.x,Rr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Na&&(e.usage=this.usage),e}}class xc extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class yc extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ut extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Eh=0;const tn=new ht,Os=new Rt,Mi=new z,Jt=new gr,qi=new gr,At=new z;class wt extends ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=li(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gc(e)?yc:xc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return Os.lookAt(e),Os.updateMatrix(),this.applyMatrix4(Os.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ut(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];qi.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(Jt.min,qi.min),Jt.expandByPoint(At),At.addVectors(Jt.max,qi.max),Jt.expandByPoint(At)):(Jt.expandByPoint(qi.min),Jt.expandByPoint(qi.max))}Jt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(At));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)At.fromBufferAttribute(a,c),l&&(Mi.fromBufferAttribute(e,c),At.add(Mi)),r=Math.max(r,i.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new z,l[P]=new z;const c=new z,h=new z,p=new z,d=new Te,f=new Te,g=new Te,v=new z,m=new z;function u(P,b,M){c.fromBufferAttribute(i,P),h.fromBufferAttribute(i,b),p.fromBufferAttribute(i,M),d.fromBufferAttribute(s,P),f.fromBufferAttribute(s,b),g.fromBufferAttribute(s,M),h.sub(c),p.sub(c),f.sub(d),g.sub(d);const U=1/(f.x*g.y-g.x*f.y);isFinite(U)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(p,-f.y).multiplyScalar(U),m.copy(p).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(U),a[P].add(v),a[b].add(v),a[M].add(v),l[P].add(m),l[b].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let P=0,b=T.length;P<b;++P){const M=T[P],U=M.start,Y=M.count;for(let N=U,k=U+Y;N<k;N+=3)u(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const y=new z,x=new z,E=new z,w=new z;function A(P){E.fromBufferAttribute(r,P),w.copy(E);const b=a[P];y.copy(b),y.sub(E.multiplyScalar(E.dot(b))).normalize(),x.crossVectors(w,b);const U=x.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,U)}for(let P=0,b=T.length;P<b;++P){const M=T[P],U=M.start,Y=M.count;for(let N=U,k=U+Y;N<k;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,h=new z,p=new z;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,p=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let u=0;u<h;u++)d[g++]=c[f++]}return new $t(d,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,p=c.length;h<p;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let p=0,d=c.length;p<d;p++){const f=c[p];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],p=s[c];for(let d=0,f=p.length;d<f;d++)h.push(p[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const p=o[c];this.addGroup(p.start,p.count,p.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ja=new ht,Jn=new sa,Lr=new fs,Ja=new z,Ir=new z,Dr=new z,Ur=new z,zs=new z,Nr=new z,Ka=new z,Fr=new z;class He extends Rt{constructor(e=new wt,t=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Nr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],p=s[l];h!==0&&(zs.fromBufferAttribute(p,e),o?Nr.addScaledVector(zs,h):Nr.addScaledVector(zs.sub(t),h))}t.add(Nr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Lr.copy(i.boundingSphere),Lr.applyMatrix4(s),Jn.copy(e.ray).recast(e.near),!(Lr.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Lr,Ja)===null||Jn.origin.distanceToSquared(Ja)>(e.far-e.near)**2))&&(ja.copy(s).invert(),Jn.copy(e.ray).applyMatrix4(ja),!(i.boundingBox!==null&&Jn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Jn)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],u=o[m.materialIndex],T=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,E=y;x<E;x+=3){const w=a.getX(x),A=a.getX(x+1),P=a.getX(x+2);r=Or(this,u,e,i,c,h,p,w,A,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,u=v;m<u;m+=3){const T=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);r=Or(this,o,e,i,c,h,p,T,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],u=o[m.materialIndex],T=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=T,E=y;x<E;x+=3){const w=x,A=x+1,P=x+2;r=Or(this,u,e,i,c,h,p,w,A,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,u=v;m<u;m+=3){const T=m,y=m+1,x=m+2;r=Or(this,o,e,i,c,h,p,T,y,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function wh(n,e,t,i,r,s,o,a){let l;if(e.side===qt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Gn,a),l===null)return null;Fr.copy(a),Fr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Fr);return c<t.near||c>t.far?null:{distance:c,point:Fr.clone(),object:n}}function Or(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Ir),n.getVertexPosition(l,Dr),n.getVertexPosition(c,Ur);const h=wh(n,e,t,i,Ir,Dr,Ur,Ka);if(h){const p=new z;nn.getBarycoord(Ka,Ir,Dr,Ur,p),r&&(h.uv=nn.getInterpolatedAttribute(r,a,l,c,p,new Te)),s&&(h.uv1=nn.getInterpolatedAttribute(s,a,l,c,p,new Te)),o&&(h.normal=nn.getInterpolatedAttribute(o,a,l,c,p,new z),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};nn.getNormal(Ir,Dr,Ur,d.normal),h.face=d,h.barycoord=p}return h}class _e extends wt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],p=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(h,3)),this.setAttribute("uv",new ut(p,2));function g(v,m,u,T,y,x,E,w,A,P,b){const M=x/A,U=E/P,Y=x/2,N=E/2,k=w/2,O=A+1,V=P+1;let $=0,W=0;const le=new z;for(let me=0;me<V;me++){const xe=me*U-N;for(let fe=0;fe<O;fe++){const De=fe*M-Y;le[v]=De*T,le[m]=xe*y,le[u]=k,c.push(le.x,le.y,le.z),le[v]=0,le[m]=0,le[u]=w>0?1:-1,h.push(le.x,le.y,le.z),p.push(fe/A),p.push(1-me/P),$+=1}}for(let me=0;me<P;me++)for(let xe=0;xe<A;xe++){const fe=d+xe+O*me,De=d+xe+O*(me+1),B=d+(xe+1)+O*(me+1),J=d+(xe+1)+O*me;l.push(fe,De,J),l.push(De,B,J),W+=6}a.addGroup(f,W,b),f+=W,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _e(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ni(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function kt(n){const e={};for(let t=0;t<n.length;t++){const i=Ni(n[t]);for(const r in i)e[r]=i[r]}return e}function bh(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Mc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Th={clone:Ni,merge:kt};var Ah=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ch=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ah,this.fragmentShader=Ch,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ni(e.uniforms),this.uniformsGroups=bh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Sc extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=An}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new z,Qa=new Te,el=new Te;class Kt extends Sc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ci*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return lr*2*Math.atan(Math.tan(Ci*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fn.x,Fn.y).multiplyScalar(-e/Fn.z)}getViewSize(e,t){return this.getViewBounds(e,Qa,el),t.subVectors(el,Qa)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ci*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Si=-90,Ei=1;class Ph extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kt(Si,Ei,e,t);r.layers=this.layers,this.add(r);const s=new Kt(Si,Ei,e,t);s.layers=this.layers,this.add(s);const o=new Kt(Si,Ei,e,t);o.layers=this.layers,this.add(o);const a=new Kt(Si,Ei,e,t);a.layers=this.layers,this.add(a);const l=new Kt(Si,Ei,e,t);l.layers=this.layers,this.add(l);const c=new Kt(Si,Ei,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===An)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===os)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(p,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ec extends Ft{constructor(e=[],t=Li,i,r,s,o,a,l,c,h){super(e,t,i,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Rh extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ec(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ht}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _e(5,5,5),s=new vn({name:"CubemapFromEquirect",uniforms:Ni(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:qt,blending:Hn});s.uniforms.tEquirect.value=t;const o=new He(r,s),a=t.minFilter;return t.minFilter===kn&&(t.minFilter=Ht),new Ph(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Ze extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lh={type:"move"};class ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],p=c.joints["thumb-tip"],d=h.position.distanceTo(p.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lh)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ze;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class aa{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=t,this.far=i}clone(){return new aa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class wc extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ih extends Ft{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Yt,h=Yt,p,d){super(null,o,a,l,c,h,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bs=new z,Dh=new z,Uh=new Je;class On{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Bs.subVectors(i,t).cross(Dh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Bs),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Uh.getNormalMatrix(e),r=this.coplanarPoint(Bs).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kn=new fs,zr=new z;class la{constructor(e=new On,t=new On,i=new On,r=new On,s=new On,o=new On){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=An){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],h=r[5],p=r[6],d=r[7],f=r[8],g=r[9],v=r[10],m=r[11],u=r[12],T=r[13],y=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,m-f,x-u).normalize(),i[1].setComponents(l+s,d+c,m+f,x+u).normalize(),i[2].setComponents(l+o,d+h,m+g,x+T).normalize(),i[3].setComponents(l-o,d-h,m-g,x-T).normalize(),i[4].setComponents(l-a,d-p,m-v,x-y).normalize(),t===An)i[5].setComponents(l+a,d+p,m+v,x+y).normalize();else if(t===os)i[5].setComponents(a,p,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kn)}intersectsSprite(e){return Kn.center.set(0,0,0),Kn.radius=.7071067811865476,Kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kn)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(zr.x=r.normal.x>0?e.max.x:e.min.x,zr.y=r.normal.y>0?e.max.y:e.min.y,zr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(zr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ca extends ci{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ls=new z,cs=new z,tl=new ht,Yi=new sa,kr=new fs,Hs=new z,nl=new z;class Nh extends Rt{constructor(e=new wt,t=new ca){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ls.fromBufferAttribute(t,r-1),cs.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ls.distanceTo(cs);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(r),kr.radius+=s,e.ray.intersectsSphere(kr)===!1)return;tl.copy(r).invert(),Yi.copy(e.ray).applyMatrix4(tl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const u=h.getX(v),T=h.getX(v+1),y=Br(this,e,Yi,l,u,T,v);y&&t.push(y)}if(this.isLineLoop){const v=h.getX(g-1),m=h.getX(f),u=Br(this,e,Yi,l,v,m,g-1);u&&t.push(u)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=f,m=g-1;v<m;v+=c){const u=Br(this,e,Yi,l,v,v+1,v);u&&t.push(u)}if(this.isLineLoop){const v=Br(this,e,Yi,l,g-1,f,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Br(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(ls.fromBufferAttribute(a,r),cs.fromBufferAttribute(a,s),t.distanceSqToSegment(ls,cs,Hs,nl)>i)return;Hs.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Hs);if(!(c<e.near||c>e.far))return{distance:c,point:nl.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const il=new z,rl=new z;class bc extends Nh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)il.fromBufferAttribute(t,r),rl.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+il.distanceTo(rl);e.setAttribute("lineDistance",new ut(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bi extends Ft{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ua extends Ft{constructor(e,t,i=Wn,r,s,o,a=Yt,l=Yt,c,h=Di){if(h!==Di&&h!==ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,r,s,o,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ra(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _n{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const h=i[r],d=i[r+1]-h,f=(o-h)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new Te:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new z,r=[],s=[],o=[],a=new z,l=new ht;for(let f=0;f<=e;f++){const g=f/e;r[f]=this.getTangentAt(g,new z)}s[0]=new z,o[0]=new z;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),p=Math.abs(r[0].y),d=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),p<=c&&(c=p,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Qe(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(Qe(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class ha extends _n{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Te){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*p+this.aX,c=d*p+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Fh extends ha{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function da(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,p){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+p)+(l-a)/p;d*=h,f*=h,r(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Hr=new z,Vs=new da,Gs=new da,Ws=new da;class Oh extends _n{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new z){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=r[(a-1)%s]:(Hr.subVectors(r[0],r[1]).add(r[0]),c=Hr);const p=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(Hr.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Hr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(p),f),v=Math.pow(p.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Vs.initNonuniformCatmullRom(c.x,p.x,d.x,h.x,g,v,m),Gs.initNonuniformCatmullRom(c.y,p.y,d.y,h.y,g,v,m),Ws.initNonuniformCatmullRom(c.z,p.z,d.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(Vs.initCatmullRom(c.x,p.x,d.x,h.x,this.tension),Gs.initCatmullRom(c.y,p.y,d.y,h.y,this.tension),Ws.initCatmullRom(c.z,p.z,d.z,h.z,this.tension));return i.set(Vs.calc(l),Gs.calc(l),Ws.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function sl(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,l=n*a;return(2*t-2*i+s+o)*l+(-3*t+3*i-2*s-o)*a+s*n+t}function zh(n,e){const t=1-n;return t*t*e}function kh(n,e){return 2*(1-n)*n*e}function Bh(n,e){return n*n*e}function Qi(n,e,t,i){return zh(n,e)+kh(n,t)+Bh(n,i)}function Hh(n,e){const t=1-n;return t*t*t*e}function Vh(n,e){const t=1-n;return 3*t*t*n*e}function Gh(n,e){return 3*(1-n)*n*n*e}function Wh(n,e){return n*n*n*e}function er(n,e,t,i,r){return Hh(n,e)+Vh(n,t)+Gh(n,i)+Wh(n,r)}class Tc extends _n{constructor(e=new Te,t=new Te,i=new Te,r=new Te){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Te){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(er(e,r.x,s.x,o.x,a.x),er(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xh extends _n{constructor(e=new z,t=new z,i=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new z){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(er(e,r.x,s.x,o.x,a.x),er(e,r.y,s.y,o.y,a.y),er(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ac extends _n{constructor(e=new Te,t=new Te){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Te){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Te){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qh extends _n{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cc extends _n{constructor(e=new Te,t=new Te,i=new Te){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Te){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Qi(e,r.x,s.x,o.x),Qi(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yh extends _n{constructor(e=new z,t=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new z){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Qi(e,r.x,s.x,o.x),Qi(e,r.y,s.y,o.y),Qi(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pc extends _n{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Te){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],h=r[o>r.length-2?r.length-1:o+1],p=r[o>r.length-3?r.length-1:o+2];return i.set(sl(a,l.x,c.x,h.x,p.x),sl(a,l.y,c.y,h.y,p.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Te().fromArray(r))}return this}}var Bo=Object.freeze({__proto__:null,ArcCurve:Fh,CatmullRomCurve3:Oh,CubicBezierCurve:Tc,CubicBezierCurve3:Xh,EllipseCurve:ha,LineCurve:Ac,LineCurve3:qh,QuadraticBezierCurve:Cc,QuadraticBezierCurve3:Yh,SplineCurve:Pc});class $h extends _n{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Bo[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new Bo[r.type]().fromJSON(r))}return this}}class ol extends $h{constructor(e){super(),this.type="Path",this.currentPoint=new Te,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Ac(this.currentPoint.clone(),new Te(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Cc(this.currentPoint.clone(),new Te(e,t),new Te(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new Tc(this.currentPoint.clone(),new Te(e,t),new Te(i,r),new Te(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Pc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,o,a,l),this}absellipse(e,t,i,r,s,o,a,l){const c=new ha(e,t,i,r,s,o,a,l);if(this.curves.length>0){const p=c.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class We extends wt{constructor(e=1,t=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],d=[],f=[];let g=0;const v=[],m=i/2;let u=0;T(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ut(p,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function T(){const x=new z,E=new z;let w=0;const A=(t-e)/i;for(let P=0;P<=s;P++){const b=[],M=P/s,U=M*(t-e)+e;for(let Y=0;Y<=r;Y++){const N=Y/r,k=N*l+a,O=Math.sin(k),V=Math.cos(k);E.x=U*O,E.y=-M*i+m,E.z=U*V,p.push(E.x,E.y,E.z),x.set(O,A,V).normalize(),d.push(x.x,x.y,x.z),f.push(N,1-M),b.push(g++)}v.push(b)}for(let P=0;P<r;P++)for(let b=0;b<s;b++){const M=v[b][P],U=v[b+1][P],Y=v[b+1][P+1],N=v[b][P+1];(e>0||b!==0)&&(h.push(M,U,N),w+=3),(t>0||b!==s-1)&&(h.push(U,Y,N),w+=3)}c.addGroup(u,w,0),u+=w}function y(x){const E=g,w=new Te,A=new z;let P=0;const b=x===!0?e:t,M=x===!0?1:-1;for(let Y=1;Y<=r;Y++)p.push(0,m*M,0),d.push(0,M,0),f.push(.5,.5),g++;const U=g;for(let Y=0;Y<=r;Y++){const k=Y/r*l+a,O=Math.cos(k),V=Math.sin(k);A.x=b*V,A.y=m*M,A.z=b*O,p.push(A.x,A.y,A.z),d.push(0,M,0),w.x=O*.5+.5,w.y=V*.5*M+.5,f.push(w.x,w.y),g++}for(let Y=0;Y<r;Y++){const N=E+Y,k=U+Y;x===!0?h.push(k,k+1,N):h.push(k+1,k,N),P+=3}c.addGroup(u,P,x===!0?1:2),u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new We(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pt extends We{constructor(e=1,t=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new pt(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vr extends wt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),h(),this.setAttribute("position",new ut(s,3)),this.setAttribute("normal",new ut(s.slice(),3)),this.setAttribute("uv",new ut(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(T){const y=new z,x=new z,E=new z;for(let w=0;w<t.length;w+=3)f(t[w+0],y),f(t[w+1],x),f(t[w+2],E),l(y,x,E,T)}function l(T,y,x,E){const w=E+1,A=[];for(let P=0;P<=w;P++){A[P]=[];const b=T.clone().lerp(x,P/w),M=y.clone().lerp(x,P/w),U=w-P;for(let Y=0;Y<=U;Y++)Y===0&&P===w?A[P][Y]=b:A[P][Y]=b.clone().lerp(M,Y/U)}for(let P=0;P<w;P++)for(let b=0;b<2*(w-P)-1;b++){const M=Math.floor(b/2);b%2===0?(d(A[P][M+1]),d(A[P+1][M]),d(A[P][M])):(d(A[P][M+1]),d(A[P+1][M+1]),d(A[P+1][M]))}}function c(T){const y=new z;for(let x=0;x<s.length;x+=3)y.x=s[x+0],y.y=s[x+1],y.z=s[x+2],y.normalize().multiplyScalar(T),s[x+0]=y.x,s[x+1]=y.y,s[x+2]=y.z}function h(){const T=new z;for(let y=0;y<s.length;y+=3){T.x=s[y+0],T.y=s[y+1],T.z=s[y+2];const x=m(T)/2/Math.PI+.5,E=u(T)/Math.PI+.5;o.push(x,1-E)}g(),p()}function p(){for(let T=0;T<o.length;T+=6){const y=o[T+0],x=o[T+2],E=o[T+4],w=Math.max(y,x,E),A=Math.min(y,x,E);w>.9&&A<.1&&(y<.2&&(o[T+0]+=1),x<.2&&(o[T+2]+=1),E<.2&&(o[T+4]+=1))}}function d(T){s.push(T.x,T.y,T.z)}function f(T,y){const x=T*3;y.x=e[x+0],y.y=e[x+1],y.z=e[x+2]}function g(){const T=new z,y=new z,x=new z,E=new z,w=new Te,A=new Te,P=new Te;for(let b=0,M=0;b<s.length;b+=9,M+=6){T.set(s[b+0],s[b+1],s[b+2]),y.set(s[b+3],s[b+4],s[b+5]),x.set(s[b+6],s[b+7],s[b+8]),w.set(o[M+0],o[M+1]),A.set(o[M+2],o[M+3]),P.set(o[M+4],o[M+5]),E.copy(T).add(y).add(x).divideScalar(3);const U=m(E);v(w,M+0,T,U),v(A,M+2,y,U),v(P,M+4,x,U)}}function v(T,y,x,E){E<0&&T.x===1&&(o[y]=T.x-1),x.x===0&&x.z===0&&(o[y]=E/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function u(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.vertices,e.indices,e.radius,e.details)}}class cr extends vr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new cr(e.radius,e.detail)}}const Vr=new z,Gr=new z,Xs=new z,Wr=new nn;class Zh extends wt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Ci*t),o=e.getIndex(),a=e.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],p=new Array(3),d={},f=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:v,b:m,c:u}=Wr;if(v.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),u.fromBufferAttribute(a,c[2]),Wr.getNormal(Xs),p[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,p[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,p[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(p[0]===p[1]||p[1]===p[2]||p[2]===p[0]))for(let T=0;T<3;T++){const y=(T+1)%3,x=p[T],E=p[y],w=Wr[h[T]],A=Wr[h[y]],P=`${x}_${E}`,b=`${E}_${x}`;b in d&&d[b]?(Xs.dot(d[b].normal)<=s&&(f.push(w.x,w.y,w.z),f.push(A.x,A.y,A.z)),d[b]=null):P in d||(d[P]={index0:c[T],index1:c[y],normal:Xs.clone()})}}for(const g in d)if(d[g]){const{index0:v,index1:m}=d[g];Vr.fromBufferAttribute(a,v),Gr.fromBufferAttribute(a,m),f.push(Vr.x,Vr.y,Vr.z),f.push(Gr.x,Gr.y,Gr.z)}this.setAttribute("position",new ut(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class dn extends ol{constructor(e){super(e),this.uuid=li(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new ol().fromJSON(r))}return this}}function jh(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=Rc(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(i&&(s=td(n,e,s,t)),n.length>80*t){a=1/0,l=1/0;let h=-1/0,p=-1/0;for(let d=t;d<r;d+=t){const f=n[d],g=n[d+1];f<a&&(a=f),g<l&&(l=g),f>h&&(h=f),g>p&&(p=g)}c=Math.max(h-a,p-l),c=c!==0?32767/c:0}return ur(s,o,t,a,l,c,0),o}function Rc(n,e,t,i,r){let s;if(r===dd(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=al(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=al(o/i|0,n[o],n[o+1],s);return s&&Fi(s,s.next)&&(dr(s),s=s.next),s}function si(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Fi(t,t.next)||mt(t.prev,t,t.next)===0)){if(dr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ur(n,e,t,i,r,s,o){if(!n)return;!o&&s&&od(n,i,r,s);let a=n;for(;n.prev!==n.next;){const l=n.prev,c=n.next;if(s?Kh(n,i,r,s):Jh(n)){e.push(l.i,n.i,c.i),dr(n),n=c.next,a=c.next;continue}if(n=c,n===a){o?o===1?(n=Qh(si(n),e),ur(n,e,t,i,r,s,2)):o===2&&ed(n,e,t,i,r,s):ur(si(n),e,t,i,r,s,1);break}}}function Jh(n){const e=n.prev,t=n,i=n.next;if(mt(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,l=t.y,c=i.y,h=Math.min(r,s,o),p=Math.min(a,l,c),d=Math.max(r,s,o),f=Math.max(a,l,c);let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=p&&g.y<=f&&ji(r,a,s,l,o,c,g.x,g.y)&&mt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Kh(n,e,t,i){const r=n.prev,s=n,o=n.next;if(mt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,h=r.y,p=s.y,d=o.y,f=Math.min(a,l,c),g=Math.min(h,p,d),v=Math.max(a,l,c),m=Math.max(h,p,d),u=Ho(f,g,e,t,i),T=Ho(v,m,e,t,i);let y=n.prevZ,x=n.nextZ;for(;y&&y.z>=u&&x&&x.z<=T;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&ji(a,h,l,p,c,d,y.x,y.y)&&mt(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&ji(a,h,l,p,c,d,x.x,x.y)&&mt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=u;){if(y.x>=f&&y.x<=v&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&ji(a,h,l,p,c,d,y.x,y.y)&&mt(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=T;){if(x.x>=f&&x.x<=v&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&ji(a,h,l,p,c,d,x.x,x.y)&&mt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Qh(n,e){let t=n;do{const i=t.prev,r=t.next.next;!Fi(i,r)&&Ic(i,t,t.next,r)&&hr(i,r)&&hr(r,i)&&(e.push(i.i,t.i,r.i),dr(t),dr(t.next),t=n=r),t=t.next}while(t!==n);return si(t)}function ed(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cd(o,a)){let l=Dc(o,a);o=si(o,o.next),l=si(l,l.next),ur(o,e,t,i,r,s,0),ur(l,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function td(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:n.length,c=Rc(n,a,l,i,!1);c===c.next&&(c.steiner=!0),r.push(ld(c))}r.sort(nd);for(let s=0;s<r.length;s++)t=id(r[s],t);return t}function nd(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function id(n,e){const t=rd(n,e);if(!t)return e;const i=Dc(t,n);return si(i,i.next),si(t,t.next)}function rd(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(Fi(n,t))return t;do{if(Fi(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const p=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=i&&p>s&&(s=p,o=t.x<t.next.x?t:t.next,p===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,l=o.x,c=o.y;let h=1/0;t=o;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Lc(r<c?i:s,r,l,c,r<c?s:i,r,t.x,t.y)){const p=Math.abs(r-t.y)/(i-t.x);hr(t,n)&&(p<h||p===h&&(t.x>o.x||t.x===o.x&&sd(o,t)))&&(o=t,h=p)}t=t.next}while(t!==a);return o}function sd(n,e){return mt(n.prev,n,e.prev)<0&&mt(e.next,n,n.next)<0}function od(n,e,t,i){let r=n;do r.z===0&&(r.z=Ho(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,ad(r)}function ad(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function Ho(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function ld(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Lc(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function ji(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&Lc(n,e,t,i,r,s,o,a)}function cd(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!ud(n,e)&&(hr(n,e)&&hr(e,n)&&hd(n,e)&&(mt(n.prev,n,e.prev)||mt(n,e.prev,e))||Fi(n,e)&&mt(n.prev,n,n.next)>0&&mt(e.prev,e,e.next)>0)}function mt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Fi(n,e){return n.x===e.x&&n.y===e.y}function Ic(n,e,t,i){const r=qr(mt(n,e,t)),s=qr(mt(n,e,i)),o=qr(mt(t,i,n)),a=qr(mt(t,i,e));return!!(r!==s&&o!==a||r===0&&Xr(n,t,e)||s===0&&Xr(n,i,e)||o===0&&Xr(t,n,i)||a===0&&Xr(t,e,i))}function Xr(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function qr(n){return n>0?1:n<0?-1:0}function ud(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Ic(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function hr(n,e){return mt(n.prev,n,n.next)<0?mt(n,e,n.next)>=0&&mt(n,n.prev,e)>=0:mt(n,e,n.prev)<0||mt(n,n.next,e)<0}function hd(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Dc(n,e){const t=Vo(n.i,n.x,n.y),i=Vo(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function al(n,e,t,i){const r=Vo(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function dr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Vo(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dd(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class fd{static triangulate(e,t,i=2){return jh(e,t,i)}}class tr{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return tr.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];ll(e),cl(i,e);let o=e.length;t.forEach(ll);for(let l=0;l<t.length;l++)r.push(o),o+=t[l].length,cl(i,t[l]);const a=fd.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function ll(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function cl(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class fa extends wt{constructor(e=new dn([new Te(.5,.5),new Te(-.5,.5),new Te(-.5,-.5),new Te(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new ut(r,3)),this.setAttribute("uv",new ut(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const u=t.extrudePath,T=t.UVGenerator!==void 0?t.UVGenerator:pd;let y,x=!1,E,w,A,P;u&&(y=u.getSpacedPoints(h),x=!0,d=!1,E=u.computeFrenetFrames(h,!1),w=new z,A=new z,P=new z),d||(m=0,f=0,g=0,v=0);const b=a.extractPoints(c);let M=b.shape;const U=b.holes;if(!tr.isClockWise(M)){M=M.reverse();for(let ne=0,ce=U.length;ne<ce;ne++){const ee=U[ne];tr.isClockWise(ee)&&(U[ne]=ee.reverse())}}function N(ne){const ee=10000000000000001e-36;let ve=ne[0];for(let D=1;D<=ne.length;D++){const S=D%ne.length,_=ne[S],F=_.x-ve.x,X=_.y-ve.y,j=F*F+X*X,I=Math.max(Math.abs(_.x),Math.abs(_.y),Math.abs(ve.x),Math.abs(ve.y)),K=ee*I*I;if(j<=K){ne.splice(S,1),D--;continue}ve=_}}N(M),U.forEach(N);const k=U.length,O=M;for(let ne=0;ne<k;ne++){const ce=U[ne];M=M.concat(ce)}function V(ne,ce,ee){return ce||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(ce,ee)}const $=M.length;function W(ne,ce,ee){let ve,D,S;const _=ne.x-ce.x,F=ne.y-ce.y,X=ee.x-ne.x,j=ee.y-ne.y,I=_*_+F*F,K=_*j-F*X;if(Math.abs(K)>Number.EPSILON){const Z=Math.sqrt(I),re=Math.sqrt(X*X+j*j),we=ce.x-F/Z,oe=ce.y+_/Z,ge=ee.x-j/re,Ce=ee.y+X/re,Ie=((ge-we)*j-(Ce-oe)*X)/(_*j-F*X);ve=we+_*Ie-ne.x,D=oe+F*Ie-ne.y;const Se=ve*ve+D*D;if(Se<=2)return new Te(ve,D);S=Math.sqrt(Se/2)}else{let Z=!1;_>Number.EPSILON?X>Number.EPSILON&&(Z=!0):_<-Number.EPSILON?X<-Number.EPSILON&&(Z=!0):Math.sign(F)===Math.sign(j)&&(Z=!0),Z?(ve=-F,D=_,S=Math.sqrt(I)):(ve=_,D=F,S=Math.sqrt(I/2))}return new Te(ve/S,D/S)}const le=[];for(let ne=0,ce=O.length,ee=ce-1,ve=ne+1;ne<ce;ne++,ee++,ve++)ee===ce&&(ee=0),ve===ce&&(ve=0),le[ne]=W(O[ne],O[ee],O[ve]);const me=[];let xe,fe=le.concat();for(let ne=0,ce=k;ne<ce;ne++){const ee=U[ne];xe=[];for(let ve=0,D=ee.length,S=D-1,_=ve+1;ve<D;ve++,S++,_++)S===D&&(S=0),_===D&&(_=0),xe[ve]=W(ee[ve],ee[S],ee[_]);me.push(xe),fe=fe.concat(xe)}const De=[],B=[];for(let ne=0;ne<m;ne++){const ce=ne/m,ee=f*Math.cos(ce*Math.PI/2),ve=g*Math.sin(ce*Math.PI/2)+v;for(let D=0,S=O.length;D<S;D++){const _=V(O[D],le[D],ve);Ee(_.x,_.y,-ee),ce==0&&De.push(_)}for(let D=0,S=k;D<S;D++){const _=U[D];xe=me[D];const F=[];for(let X=0,j=_.length;X<j;X++){const I=V(_[X],xe[X],ve);Ee(I.x,I.y,-ee),ce==0&&F.push(I)}ce==0&&B.push(F)}}const J=tr.triangulateShape(De,B),Q=J.length,de=g+v;for(let ne=0;ne<$;ne++){const ce=d?V(M[ne],fe[ne],de):M[ne];x?(A.copy(E.normals[0]).multiplyScalar(ce.x),w.copy(E.binormals[0]).multiplyScalar(ce.y),P.copy(y[0]).add(A).add(w),Ee(P.x,P.y,P.z)):Ee(ce.x,ce.y,0)}for(let ne=1;ne<=h;ne++)for(let ce=0;ce<$;ce++){const ee=d?V(M[ce],fe[ce],de):M[ce];x?(A.copy(E.normals[ne]).multiplyScalar(ee.x),w.copy(E.binormals[ne]).multiplyScalar(ee.y),P.copy(y[ne]).add(A).add(w),Ee(P.x,P.y,P.z)):Ee(ee.x,ee.y,p/h*ne)}for(let ne=m-1;ne>=0;ne--){const ce=ne/m,ee=f*Math.cos(ce*Math.PI/2),ve=g*Math.sin(ce*Math.PI/2)+v;for(let D=0,S=O.length;D<S;D++){const _=V(O[D],le[D],ve);Ee(_.x,_.y,p+ee)}for(let D=0,S=U.length;D<S;D++){const _=U[D];xe=me[D];for(let F=0,X=_.length;F<X;F++){const j=V(_[F],xe[F],ve);x?Ee(j.x,j.y+y[h-1].y,y[h-1].x+ee):Ee(j.x,j.y,p+ee)}}}ye(),Pe();function ye(){const ne=r.length/3;if(d){let ce=0,ee=$*ce;for(let ve=0;ve<Q;ve++){const D=J[ve];ke(D[2]+ee,D[1]+ee,D[0]+ee)}ce=h+m*2,ee=$*ce;for(let ve=0;ve<Q;ve++){const D=J[ve];ke(D[0]+ee,D[1]+ee,D[2]+ee)}}else{for(let ce=0;ce<Q;ce++){const ee=J[ce];ke(ee[2],ee[1],ee[0])}for(let ce=0;ce<Q;ce++){const ee=J[ce];ke(ee[0]+$*h,ee[1]+$*h,ee[2]+$*h)}}i.addGroup(ne,r.length/3-ne,0)}function Pe(){const ne=r.length/3;let ce=0;pe(O,ce),ce+=O.length;for(let ee=0,ve=U.length;ee<ve;ee++){const D=U[ee];pe(D,ce),ce+=D.length}i.addGroup(ne,r.length/3-ne,1)}function pe(ne,ce){let ee=ne.length;for(;--ee>=0;){const ve=ee;let D=ee-1;D<0&&(D=ne.length-1);for(let S=0,_=h+m*2;S<_;S++){const F=$*S,X=$*(S+1),j=ce+ve+F,I=ce+D+F,K=ce+D+X,Z=ce+ve+X;Oe(j,I,K,Z)}}}function Ee(ne,ce,ee){l.push(ne),l.push(ce),l.push(ee)}function ke(ne,ce,ee){L(ne),L(ce),L(ee);const ve=r.length/3,D=T.generateTopUV(i,r,ve-3,ve-2,ve-1);Xe(D[0]),Xe(D[1]),Xe(D[2])}function Oe(ne,ce,ee,ve){L(ne),L(ce),L(ve),L(ce),L(ee),L(ve);const D=r.length/3,S=T.generateSideWallUV(i,r,D-6,D-3,D-2,D-1);Xe(S[0]),Xe(S[1]),Xe(S[3]),Xe(S[1]),Xe(S[2]),Xe(S[3])}function L(ne){r.push(l[ne*3+0]),r.push(l[ne*3+1]),r.push(l[ne*3+2])}function Xe(ne){s.push(ne.x),s.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return md(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Bo[r.type]().fromJSON(r)),new fa(i,e.options)}}const pd={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new Te(s,o),new Te(a,l),new Te(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],p=e[i*3+2],d=e[r*3],f=e[r*3+1],g=e[r*3+2],v=e[s*3],m=e[s*3+1],u=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Te(o,1-l),new Te(c,1-p),new Te(d,1-g),new Te(v,1-u)]:[new Te(a,1-l),new Te(h,1-p),new Te(f,1-g),new Te(m,1-u)]}};function md(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class pa extends vr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new pa(e.radius,e.detail)}}class fr extends vr{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fr(e.radius,e.detail)}}class Et extends wt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,h=l+1,p=e/a,d=t/l,f=[],g=[],v=[],m=[];for(let u=0;u<h;u++){const T=u*d-o;for(let y=0;y<c;y++){const x=y*p-s;g.push(x,-T,0),v.push(0,0,1),m.push(y/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<a;T++){const y=T+c*u,x=T+c*(u+1),E=T+1+c*(u+1),w=T+1+c*u;f.push(y,x,w),f.push(x,E,w)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(v,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Et(e.width,e.height,e.widthSegments,e.heightSegments)}}class ma extends wt{constructor(e=.5,t=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],h=[];let p=e;const d=(t-e)/r,f=new z,g=new Te;for(let v=0;v<=r;v++){for(let m=0;m<=i;m++){const u=s+m/i*o;f.x=p*Math.cos(u),f.y=p*Math.sin(u),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}p+=d}for(let v=0;v<r;v++){const m=v*(i+1);for(let u=0;u<i;u++){const T=u+m,y=T,x=T+i+1,E=T+i+2,w=T+1;a.push(y,x,w),a.push(x,E,w)}}this.setIndex(a),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class oi extends wt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const h=[],p=new z,d=new z,f=[],g=[],v=[],m=[];for(let u=0;u<=i;u++){const T=[],y=u/i;let x=0;u===0&&o===0?x=.5/t:u===i&&l===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){const w=E/t;p.x=-e*Math.cos(r+w*s)*Math.sin(o+y*a),p.y=e*Math.cos(o+y*a),p.z=e*Math.sin(r+w*s)*Math.sin(o+y*a),g.push(p.x,p.y,p.z),d.copy(p).normalize(),v.push(d.x,d.y,d.z),m.push(w+x,1-y),T.push(c++)}h.push(T)}for(let u=0;u<i;u++)for(let T=0;T<t;T++){const y=h[u][T+1],x=h[u][T],E=h[u+1][T],w=h[u+1][T+1];(u!==0||o>0)&&f.push(y,x,w),(u!==i-1||l<Math.PI)&&f.push(x,E,w)}this.setIndex(f),this.setAttribute("position",new ut(g,3)),this.setAttribute("normal",new ut(v,3)),this.setAttribute("uv",new ut(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ga extends wt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],h=new z,p=new z,d=new z;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){const v=g/r*s,m=f/i*Math.PI*2;p.x=(e+t*Math.cos(m))*Math.cos(v),p.y=(e+t*Math.cos(m))*Math.sin(v),p.z=t*Math.sin(m),a.push(p.x,p.y,p.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(p,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/r),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){const v=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,u=(r+1)*(f-1)+g,T=(r+1)*f+g;o.push(v,m,T),o.push(m,u,T)}this.setIndex(o),this.setAttribute("position",new ut(a,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class gd extends ci{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new je(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class vd extends ci{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pc,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _d extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xd extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class va extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class yd extends va{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const qs=new ht,ul=new z,hl=new z;class Uc{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new la,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ul.setFromMatrixPosition(e.matrixWorld),t.position.copy(ul),hl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hl),t.updateMatrixWorld(),qs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(qs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const dl=new ht,$i=new z,Ys=new z;class Md extends Uc{constructor(){super(new Kt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new et(2,1,1,1),new et(0,1,1,1),new et(3,1,1,1),new et(1,1,1,1),new et(3,0,1,1),new et(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),$i.setFromMatrixPosition(e.matrixWorld),i.position.copy($i),Ys.copy(i.position),Ys.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Ys),i.updateMatrixWorld(),r.makeTranslation(-$i.x,-$i.y,-$i.z),dl.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dl)}}class Sd extends va{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Md}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _a extends Sc{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ed extends Uc{constructor(){super(new _a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fl extends va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new Ed}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class wd extends Kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}const pl=new ht;class xa{constructor(e,t,i=0,r=1/0){this.ray=new sa(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new oa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return pl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(pl),this}intersectObject(e,t=!0,i=[]){return Go(e,this,i,t),i.sort(ml),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Go(e[r],this,i,t);return i.sort(ml),i}}function ml(n,e){return n.distance-e.distance}function Go(n,e,t,i){let r=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(r=!1),r===!0&&i===!0){const s=n.children;for(let o=0,a=s.length;o<a;o++)Go(s[o],e,t,!0)}}function gl(n,e,t,i){const r=bd(i);switch(t){case ac:return n*e;case cc:return n*e;case uc:return n*e*2;case hc:return n*e/r.components*r.byteLength;case Qo:return n*e/r.components*r.byteLength;case dc:return n*e*2/r.components*r.byteLength;case ea:return n*e*2/r.components*r.byteLength;case lc:return n*e*3/r.components*r.byteLength;case Xt:return n*e*4/r.components*r.byteLength;case ta:return n*e*4/r.components*r.byteLength;case Jr:case Kr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qr:case es:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case mo:case vo:return Math.max(n,16)*Math.max(e,8)/4;case po:case go:return Math.max(n,8)*Math.max(e,8)/2;case _o:case xo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case yo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case So:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Eo:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case wo:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case bo:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case To:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ao:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Co:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Po:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Io:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Do:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Uo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ts:case No:case Fo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case fc:case Oo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case zo:case ko:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bd(n){switch(n){case hn:case rc:return{byteLength:1,components:1};case sr:case sc:case zi:return{byteLength:2,components:1};case Jo:case Ko:return{byteLength:2,components:4};case Wn:case jo:case Tn:return{byteLength:4,components:1};case oc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$o}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$o);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nc(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Td(n){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,p=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:p}}function i(a,l,c){const h=l.array,p=l.updateRanges;if(n.bindBuffer(c,a),p.length===0)n.bufferSubData(c,0,h);else{p.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<p.length;f++){const g=p[d],v=p[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,p[d]=v)}p.length=d+1;for(let f=0,g=p.length;f<g;f++){const v=p[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Rd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ld=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Id=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ud=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Fd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Od=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Bd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ef=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rf="gl_FragColor = linearToOutputTexel( gl_FragColor );",sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,of=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,df=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ff=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_f=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,xf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,yf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Tf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Af=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,If=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Df=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Nf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Of=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Wf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,qf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ep=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,np=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ip=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,op=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ap=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,fp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,pp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_p=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Mp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Sp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Up=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Np=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Vp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$p=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Zp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,i0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,s0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,o0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:Ad,alphahash_pars_fragment:Cd,alphamap_fragment:Pd,alphamap_pars_fragment:Rd,alphatest_fragment:Ld,alphatest_pars_fragment:Id,aomap_fragment:Dd,aomap_pars_fragment:Ud,batching_pars_vertex:Nd,batching_vertex:Fd,begin_vertex:Od,beginnormal_vertex:zd,bsdfs:kd,iridescence_fragment:Bd,bumpmap_pars_fragment:Hd,clipping_planes_fragment:Vd,clipping_planes_pars_fragment:Gd,clipping_planes_pars_vertex:Wd,clipping_planes_vertex:Xd,color_fragment:qd,color_pars_fragment:Yd,color_pars_vertex:$d,color_vertex:Zd,common:jd,cube_uv_reflection_fragment:Jd,defaultnormal_vertex:Kd,displacementmap_pars_vertex:Qd,displacementmap_vertex:ef,emissivemap_fragment:tf,emissivemap_pars_fragment:nf,colorspace_fragment:rf,colorspace_pars_fragment:sf,envmap_fragment:of,envmap_common_pars_fragment:af,envmap_pars_fragment:lf,envmap_pars_vertex:cf,envmap_physical_pars_fragment:yf,envmap_vertex:uf,fog_vertex:hf,fog_pars_vertex:df,fog_fragment:ff,fog_pars_fragment:pf,gradientmap_pars_fragment:mf,lightmap_pars_fragment:gf,lights_lambert_fragment:vf,lights_lambert_pars_fragment:_f,lights_pars_begin:xf,lights_toon_fragment:Mf,lights_toon_pars_fragment:Sf,lights_phong_fragment:Ef,lights_phong_pars_fragment:wf,lights_physical_fragment:bf,lights_physical_pars_fragment:Tf,lights_fragment_begin:Af,lights_fragment_maps:Cf,lights_fragment_end:Pf,logdepthbuf_fragment:Rf,logdepthbuf_pars_fragment:Lf,logdepthbuf_pars_vertex:If,logdepthbuf_vertex:Df,map_fragment:Uf,map_pars_fragment:Nf,map_particle_fragment:Ff,map_particle_pars_fragment:Of,metalnessmap_fragment:zf,metalnessmap_pars_fragment:kf,morphinstance_vertex:Bf,morphcolor_vertex:Hf,morphnormal_vertex:Vf,morphtarget_pars_vertex:Gf,morphtarget_vertex:Wf,normal_fragment_begin:Xf,normal_fragment_maps:qf,normal_pars_fragment:Yf,normal_pars_vertex:$f,normal_vertex:Zf,normalmap_pars_fragment:jf,clearcoat_normal_fragment_begin:Jf,clearcoat_normal_fragment_maps:Kf,clearcoat_pars_fragment:Qf,iridescence_pars_fragment:ep,opaque_fragment:tp,packing:np,premultiplied_alpha_fragment:ip,project_vertex:rp,dithering_fragment:sp,dithering_pars_fragment:op,roughnessmap_fragment:ap,roughnessmap_pars_fragment:lp,shadowmap_pars_fragment:cp,shadowmap_pars_vertex:up,shadowmap_vertex:hp,shadowmask_pars_fragment:dp,skinbase_vertex:fp,skinning_pars_vertex:pp,skinning_vertex:mp,skinnormal_vertex:gp,specularmap_fragment:vp,specularmap_pars_fragment:_p,tonemapping_fragment:xp,tonemapping_pars_fragment:yp,transmission_fragment:Mp,transmission_pars_fragment:Sp,uv_pars_fragment:Ep,uv_pars_vertex:wp,uv_vertex:bp,worldpos_vertex:Tp,background_vert:Ap,background_frag:Cp,backgroundCube_vert:Pp,backgroundCube_frag:Rp,cube_vert:Lp,cube_frag:Ip,depth_vert:Dp,depth_frag:Up,distanceRGBA_vert:Np,distanceRGBA_frag:Fp,equirect_vert:Op,equirect_frag:zp,linedashed_vert:kp,linedashed_frag:Bp,meshbasic_vert:Hp,meshbasic_frag:Vp,meshlambert_vert:Gp,meshlambert_frag:Wp,meshmatcap_vert:Xp,meshmatcap_frag:qp,meshnormal_vert:Yp,meshnormal_frag:$p,meshphong_vert:Zp,meshphong_frag:jp,meshphysical_vert:Jp,meshphysical_frag:Kp,meshtoon_vert:Qp,meshtoon_frag:e0,points_vert:t0,points_frag:n0,shadow_vert:i0,shadow_frag:r0,sprite_vert:s0,sprite_frag:o0},Re={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},fn={basic:{uniforms:kt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:kt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new je(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:kt([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:kt([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:kt([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new je(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:kt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:kt([Re.points,Re.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:kt([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:kt([Re.common,Re.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:kt([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:kt([Re.sprite,Re.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:kt([Re.common,Re.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:kt([Re.lights,Re.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};fn.physical={uniforms:kt([fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Yr={r:0,b:0,g:0},Qn=new gn,a0=new ht;function l0(n,e,t,i,r,s,o){const a=new je(0);let l=s===!0?0:1,c,h,p=null,d=0,f=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function v(y){let x=!1;const E=g(y);E===null?u(a,l):E&&E.isColor&&(u(E,1),x=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(y,x){const E=g(x);E&&(E.isCubeTexture||E.mapping===ds)?(h===void 0&&(h=new He(new _e(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Ni(fn.backgroundCube.uniforms),vertexShader:fn.backgroundCube.vertexShader,fragmentShader:fn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Qn.copy(x.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(a0.makeRotationFromEuler(Qn)),h.material.toneMapped=rt.getTransfer(E.colorSpace)!==ct,(p!==E||d!==E.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,p=E,d=E.version,f=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new He(new Et(2,2),new vn({name:"BackgroundMaterial",uniforms:Ni(fn.background.uniforms),vertexShader:fn.background.vertexShader,fragmentShader:fn.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=rt.getTransfer(E.colorSpace)!==ct,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||d!==E.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,p=E,d=E.version,f=n.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function u(y,x){y.getRGB(Yr,Mc(n)),i.buffers.color.setClear(Yr.r,Yr.g,Yr.b,x,o)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,x=1){a.set(y),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,u(a,l)},render:v,addToRenderList:m,dispose:T}}function c0(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,U,Y,N,k){let O=!1;const V=p(N,Y,U);s!==V&&(s=V,c(s.object)),O=f(M,N,Y,k),O&&g(M,N,Y,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(O||o)&&(o=!1,x(M,U,Y,N),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function h(M){return n.deleteVertexArray(M)}function p(M,U,Y){const N=Y.wireframe===!0;let k=i[M.id];k===void 0&&(k={},i[M.id]=k);let O=k[U.id];O===void 0&&(O={},k[U.id]=O);let V=O[N];return V===void 0&&(V=d(l()),O[N]=V),V}function d(M){const U=[],Y=[],N=[];for(let k=0;k<t;k++)U[k]=0,Y[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:Y,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,U,Y,N){const k=s.attributes,O=U.attributes;let V=0;const $=Y.getAttributes();for(const W in $)if($[W].location>=0){const me=k[W];let xe=O[W];if(xe===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(xe=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(xe=M.instanceColor)),me===void 0||me.attribute!==xe||xe&&me.data!==xe.data)return!0;V++}return s.attributesNum!==V||s.index!==N}function g(M,U,Y,N){const k={},O=U.attributes;let V=0;const $=Y.getAttributes();for(const W in $)if($[W].location>=0){let me=O[W];me===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(me=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(me=M.instanceColor));const xe={};xe.attribute=me,me&&me.data&&(xe.data=me.data),k[W]=xe,V++}s.attributes=k,s.attributesNum=V,s.index=N}function v(){const M=s.newAttributes;for(let U=0,Y=M.length;U<Y;U++)M[U]=0}function m(M){u(M,0)}function u(M,U){const Y=s.newAttributes,N=s.enabledAttributes,k=s.attributeDivisors;Y[M]=1,N[M]===0&&(n.enableVertexAttribArray(M),N[M]=1),k[M]!==U&&(n.vertexAttribDivisor(M,U),k[M]=U)}function T(){const M=s.newAttributes,U=s.enabledAttributes;for(let Y=0,N=U.length;Y<N;Y++)U[Y]!==M[Y]&&(n.disableVertexAttribArray(Y),U[Y]=0)}function y(M,U,Y,N,k,O,V){V===!0?n.vertexAttribIPointer(M,U,Y,k,O):n.vertexAttribPointer(M,U,Y,N,k,O)}function x(M,U,Y,N){v();const k=N.attributes,O=Y.getAttributes(),V=U.defaultAttributeValues;for(const $ in O){const W=O[$];if(W.location>=0){let le=k[$];if(le===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const me=le.normalized,xe=le.itemSize,fe=e.get(le);if(fe===void 0)continue;const De=fe.buffer,B=fe.type,J=fe.bytesPerElement,Q=B===n.INT||B===n.UNSIGNED_INT||le.gpuType===jo;if(le.isInterleavedBufferAttribute){const de=le.data,ye=de.stride,Pe=le.offset;if(de.isInstancedInterleavedBuffer){for(let pe=0;pe<W.locationSize;pe++)u(W.location+pe,de.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let pe=0;pe<W.locationSize;pe++)m(W.location+pe);n.bindBuffer(n.ARRAY_BUFFER,De);for(let pe=0;pe<W.locationSize;pe++)y(W.location+pe,xe/W.locationSize,B,me,ye*J,(Pe+xe/W.locationSize*pe)*J,Q)}else{if(le.isInstancedBufferAttribute){for(let de=0;de<W.locationSize;de++)u(W.location+de,le.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let de=0;de<W.locationSize;de++)m(W.location+de);n.bindBuffer(n.ARRAY_BUFFER,De);for(let de=0;de<W.locationSize;de++)y(W.location+de,xe/W.locationSize,B,me,xe*J,xe/W.locationSize*de*J,Q)}}else if(V!==void 0){const me=V[$];if(me!==void 0)switch(me.length){case 2:n.vertexAttrib2fv(W.location,me);break;case 3:n.vertexAttrib3fv(W.location,me);break;case 4:n.vertexAttrib4fv(W.location,me);break;default:n.vertexAttrib1fv(W.location,me)}}}}T()}function E(){P();for(const M in i){const U=i[M];for(const Y in U){const N=U[Y];for(const k in N)h(N[k].object),delete N[k];delete U[Y]}delete i[M]}}function w(M){if(i[M.id]===void 0)return;const U=i[M.id];for(const Y in U){const N=U[Y];for(const k in N)h(N[k].object),delete N[k];delete U[Y]}delete i[M.id]}function A(M){for(const U in i){const Y=i[U];if(Y[M.id]===void 0)continue;const N=Y[M.id];for(const k in N)h(N[k].object),delete N[k];delete Y[M.id]}}function P(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function u0(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function o(c,h,p){p!==0&&(n.drawArraysInstanced(i,c,h,p),t.update(h,i,p))}function a(c,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,p);let f=0;for(let g=0;g<p;g++)f+=h[g];t.update(f,i,1)}function l(c,h,p,d){if(p===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,p);let g=0;for(let v=0;v<p;v++)g+=h[v]*d[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function h0(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Xt&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const P=A===zi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==hn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Tn&&!P)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const p=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:p,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:E,maxSamples:w}}function d0(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new On,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const f=p.length!==0||d||i!==0||r;return r=d,i=p.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){t=h(p,d,0)},this.setState=function(p,d,f){const g=p.clippingPlanes,v=p.clipIntersection,m=p.clipShadows,u=n.get(p);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const T=s?0:i,y=T*4;let x=u.clippingState||null;l.value=x,x=h(g,d,y,f);for(let E=0;E!==y;++E)x[E]=t[E];u.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,d,f,g){const v=p!==null?p.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const u=f+v*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,x=f;y!==v;++y,x+=4)o.copy(p[y]).applyMatrix4(T,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function f0(n){let e=new WeakMap;function t(o,a){return a===uo?o.mapping=Li:a===ho&&(o.mapping=Ii),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===uo||a===ho)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Rh(l.height);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Ti=4,vl=[.125,.215,.35,.446,.526,.582],ii=20,$s=new _a,_l=new je;let Zs=null,js=0,Js=0,Ks=!1;const ti=(1+Math.sqrt(5))/2,wi=1/ti,xl=[new z(-ti,wi,0),new z(ti,wi,0),new z(-wi,0,ti),new z(wi,0,ti),new z(0,ti,-wi),new z(0,ti,wi),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)],p0=new z;class yl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=p0}=s;Zs=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),Ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=El(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zs,js,Js),this._renderer.xr.enabled=Ks,e.scissorTest=!1,$r(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Li||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zs=this._renderer.getRenderTarget(),js=this._renderer.getActiveCubeFace(),Js=this._renderer.getActiveMipmapLevel(),Ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ht,minFilter:Ht,generateMipmaps:!1,type:zi,format:Xt,colorSpace:Ui,depthBuffer:!1},r=Ml(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ml(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m0(s)),this._blurMaterial=g0(s,e,t)}return r}_compileMaterial(e){const t=new He(this._lodPlanes[0],e);this._renderer.compile(t,$s)}_sceneToCubeUV(e,t,i,r,s){const l=new Kt(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,f=p.toneMapping;p.getClearColor(_l),p.toneMapping=Vn,p.autoClear=!1;const g=new un({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),v=new He(new _e,g);let m=!1;const u=e.background;u?u.isColor&&(g.color.copy(u),e.background=null,m=!0):(g.color.copy(_l),m=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[T],s.y,s.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[T]));const x=this._cubeSize;$r(r,y*x,T>2?x:0,x,x),p.setRenderTarget(r),m&&p.render(v,l),p.render(e,l)}v.geometry.dispose(),v.material.dispose(),p.toneMapping=f,p.autoClear=d,e.background=u}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Li||e.mapping===Ii;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=El()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new He(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;$r(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,$s)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=xl[(r-s-1)%xl.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new He(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ii-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):ii;m>ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ii}`);const u=[];let T=0;for(let A=0;A<ii;++A){const P=A/v,b=Math.exp(-P*P/2);u.push(b),A===0?T+=b:A<m&&(T+=2*b)}for(let A=0;A<u.length;A++)u[A]=u[A]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const x=this._sizeLods[r],E=3*x*(r>y-Ti?r-y+Ti:0),w=4*(this._cubeSize-x);$r(t,E,w,3*x,2*x),l.setRenderTarget(t),l.render(p,$s)}}function m0(n){const e=[],t=[],i=[];let r=n;const s=n-Ti+1+vl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Ti?l=vl[o-n+Ti-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,p=1+c,d=[h,h,p,h,p,p,h,h,p,p,h,p],f=6,g=6,v=3,m=2,u=1,T=new Float32Array(v*g*f),y=new Float32Array(m*g*f),x=new Float32Array(u*g*f);for(let w=0;w<f;w++){const A=w%3*2/3-1,P=w>2?0:-1,b=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];T.set(b,v*g*w),y.set(d,m*g*w);const M=[w,w,w,w,w,w];x.set(M,u*g*w)}const E=new wt;E.setAttribute("position",new $t(T,v)),E.setAttribute("uv",new $t(y,m)),E.setAttribute("faceIndex",new $t(x,u)),e.push(E),r>Ti&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ml(n,e,t){const i=new Rn(n,e,t);return i.texture.mapping=ds,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $r(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function g0(n,e,t){const i=new Float32Array(ii),r=new z(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Sl(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function El(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function ya(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function v0(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===uo||l===ho,h=l===Li||l===Ii;if(c||h){let p=e.get(a);const d=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new yl(n)),p=c?t.fromEquirectangular(a,p):t.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new yl(n)),p=c?t.fromEquirectangular(a):t.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function _0(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ns("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function x0(n,e,t,i){const r={},s=new WeakMap;function o(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(p,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(p){const d=p.attributes;for(const f in d)e.update(d[f],n.ARRAY_BUFFER)}function c(p){const d=[],f=p.index,g=p.attributes.position;let v=0;if(f!==null){const T=f.array;v=f.version;for(let y=0,x=T.length;y<x;y+=3){const E=T[y+0],w=T[y+1],A=T[y+2];d.push(E,w,w,A,A,E)}}else if(g!==void 0){const T=g.array;v=g.version;for(let y=0,x=T.length/3-1;y<x;y+=3){const E=y+0,w=y+1,A=y+2;d.push(E,w,w,A,A,E)}}else return;const m=new(gc(d)?yc:xc)(d,1);m.version=v;const u=s.get(p);u&&e.remove(u),s.set(p,m)}function h(p){const d=s.get(p);if(d){const f=p.index;f!==null&&d.version<f.version&&c(p)}else c(p);return s.get(p)}return{get:a,update:l,getWireframeAttribute:h}}function y0(n,e,t){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){n.drawElements(i,f,s,d*o),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*o,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let u=0;u<g;u++)m+=f[u];t.update(m,i,1)}function p(d,f,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)c(d[u]/o,f[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,v,0,g);let u=0;for(let T=0;T<g;T++)u+=f[T]*v[T];t.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function M0(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function S0(n,e,t){const i=new WeakMap,r=new et;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0;let d=i.get(a);if(d===void 0||d.count!==p){let M=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let E=a.attributes.position.count*x,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const A=new Float32Array(E*w*4*p),P=new vc(A,E,w,p);P.type=Tn,P.needsUpdate=!0;const b=x*4;for(let U=0;U<p;U++){const Y=u[U],N=T[U],k=y[U],O=E*w*4*U;for(let V=0;V<Y.count;V++){const $=V*b;g===!0&&(r.fromBufferAttribute(Y,V),A[O+$+0]=r.x,A[O+$+1]=r.y,A[O+$+2]=r.z,A[O+$+3]=0),v===!0&&(r.fromBufferAttribute(N,V),A[O+$+4]=r.x,A[O+$+5]=r.y,A[O+$+6]=r.z,A[O+$+7]=0),m===!0&&(r.fromBufferAttribute(k,V),A[O+$+8]=r.x,A[O+$+9]=r.y,A[O+$+10]=r.z,A[O+$+11]=k.itemSize===4?r.w:1)}}d={count:p,texture:P,size:new Te(E,w)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function E0(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,p=e.get(l,h);if(r.get(p)!==c&&(e.update(p),r.set(p,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return p}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Fc=new Ft,wl=new ua(1,1),Oc=new vc,zc=new fh,kc=new Ec,bl=[],Tl=[],Al=new Float32Array(16),Cl=new Float32Array(9),Pl=new Float32Array(4);function Hi(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=bl[r];if(s===void 0&&(s=new Float32Array(r),bl[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ps(n,e){let t=Tl[e];t===void 0&&(t=new Int32Array(e),Tl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function w0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function b0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function T0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function A0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function C0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,i))return;Pl.set(i),n.uniformMatrix2fv(this.addr,!1,Pl),Tt(t,i)}}function P0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,i))return;Cl.set(i),n.uniformMatrix3fv(this.addr,!1,Cl),Tt(t,i)}}function R0(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(bt(t,i))return;Al.set(i),n.uniformMatrix4fv(this.addr,!1,Al),Tt(t,i)}}function L0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function I0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function D0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function U0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function N0(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function F0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function O0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function z0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function k0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(wl.compareFunction=mc,s=wl):s=Fc,t.setTexture2D(e||s,r)}function B0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||zc,r)}function H0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||kc,r)}function V0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Oc,r)}function G0(n){switch(n){case 5126:return w0;case 35664:return b0;case 35665:return T0;case 35666:return A0;case 35674:return C0;case 35675:return P0;case 35676:return R0;case 5124:case 35670:return L0;case 35667:case 35671:return I0;case 35668:case 35672:return D0;case 35669:case 35673:return U0;case 5125:return N0;case 36294:return F0;case 36295:return O0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return H0;case 36289:case 36303:case 36311:case 36292:return V0}}function W0(n,e){n.uniform1fv(this.addr,e)}function X0(n,e){const t=Hi(e,this.size,2);n.uniform2fv(this.addr,t)}function q0(n,e){const t=Hi(e,this.size,3);n.uniform3fv(this.addr,t)}function Y0(n,e){const t=Hi(e,this.size,4);n.uniform4fv(this.addr,t)}function $0(n,e){const t=Hi(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Z0(n,e){const t=Hi(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function j0(n,e){const t=Hi(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function J0(n,e){n.uniform1iv(this.addr,e)}function K0(n,e){n.uniform2iv(this.addr,e)}function Q0(n,e){n.uniform3iv(this.addr,e)}function em(n,e){n.uniform4iv(this.addr,e)}function tm(n,e){n.uniform1uiv(this.addr,e)}function nm(n,e){n.uniform2uiv(this.addr,e)}function im(n,e){n.uniform3uiv(this.addr,e)}function rm(n,e){n.uniform4uiv(this.addr,e)}function sm(n,e,t){const i=this.cache,r=e.length,s=ps(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Fc,s[o])}function om(n,e,t){const i=this.cache,r=e.length,s=ps(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||zc,s[o])}function am(n,e,t){const i=this.cache,r=e.length,s=ps(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||kc,s[o])}function lm(n,e,t){const i=this.cache,r=e.length,s=ps(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Oc,s[o])}function cm(n){switch(n){case 5126:return W0;case 35664:return X0;case 35665:return q0;case 35666:return Y0;case 35674:return $0;case 35675:return Z0;case 35676:return j0;case 5124:case 35670:return J0;case 35667:case 35671:return K0;case 35668:case 35672:return Q0;case 35669:case 35673:return em;case 5125:return tm;case 36294:return nm;case 36295:return im;case 36296:return rm;case 35678:case 36198:case 36298:case 36306:case 35682:return sm;case 35679:case 36299:case 36307:return om;case 35680:case 36300:case 36308:case 36293:return am;case 36289:case 36303:case 36311:case 36292:return lm}}class um{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=G0(t.type)}}class hm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cm(t.type)}}class dm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Qs=/(\w+)(\])?(\[|\.)?/g;function Rl(n,e){n.seq.push(e),n.map[e.id]=e}function fm(n,e,t){const i=n.name,r=i.length;for(Qs.lastIndex=0;;){const s=Qs.exec(i),o=Qs.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Rl(t,c===void 0?new um(a,n,e):new hm(a,n,e));break}else{let p=t.map[a];p===void 0&&(p=new dm(a),Rl(t,p)),t=p}}}class is{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);fm(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ll(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const pm=37297;let mm=0;function gm(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Il=new Je;function vm(n){rt._getMatrix(Il,rt.workingColorSpace,n);const e=`mat3( ${Il.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case ss:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Dl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+gm(n.getShaderSource(e),o)}else return r}function _m(n,e){const t=vm(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function xm(n,e){let t;switch(e){case bu:t="Linear";break;case Tu:t="Reinhard";break;case Au:t="Cineon";break;case nc:t="ACESFilmic";break;case Pu:t="AgX";break;case Ru:t="Neutral";break;case Cu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zr=new z;function ym(){rt.getLuminanceCoefficients(Zr);const n=Zr.x.toFixed(4),e=Zr.y.toFixed(4),t=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ji).join(`
`)}function Sm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Em(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ji(n){return n!==""}function Ul(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wo(n){return n.replace(wm,Tm)}const bm=new Map;function Tm(n,e){let t=Ke[e];if(t===void 0){const i=bm.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Wo(t)}const Am=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fl(n){return n.replace(Am,Cm)}function Cm(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ol(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Pm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ec?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===tc?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function Rm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Li:case Ii:e="ENVMAP_TYPE_CUBE";break;case ds:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Lm(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ii:e="ENVMAP_MODE_REFRACTION";break}return e}function Im(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zo:e="ENVMAP_BLENDING_MULTIPLY";break;case Eu:e="ENVMAP_BLENDING_MIX";break;case wu:e="ENVMAP_BLENDING_ADD";break}return e}function Dm(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Um(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Pm(t),c=Rm(t),h=Lm(t),p=Im(t),d=Dm(t),f=Mm(t),g=Sm(s),v=r.createProgram();let m,u,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ji).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ji).join(`
`),u.length>0&&(u+=`
`)):(m=[Ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ji).join(`
`),u=[Ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Vn?xm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,_m("linearToOutputTexel",t.outputColorSpace),ym(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ji).join(`
`)),o=Wo(o),o=Ul(o,t),o=Nl(o,t),a=Wo(a),a=Ul(a,t),a=Nl(a,t),o=Fl(o),a=Fl(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Fa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const y=T+m+o,x=T+u+a,E=Ll(r,r.VERTEX_SHADER,y),w=Ll(r,r.FRAGMENT_SHADER,x);r.attachShader(v,E),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function A(U){if(n.debug.checkShaderErrors){const Y=r.getProgramInfoLog(v).trim(),N=r.getShaderInfoLog(E).trim(),k=r.getShaderInfoLog(w).trim();let O=!0,V=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,E,w);else{const $=Dl(r,E,"vertex"),W=Dl(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Y+`
`+$+`
`+W)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(N===""||k==="")&&(V=!1);V&&(U.diagnostics={runnable:O,programLog:Y,vertexShader:{log:N,prefix:m},fragmentShader:{log:k,prefix:u}})}r.deleteShader(E),r.deleteShader(w),P=new is(r,v),b=Em(r,v)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,pm)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=w,this}let Nm=0;class Fm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Om(e),t.set(e,i)),i}}class Om{constructor(e){this.id=Nm++,this.code=e,this.usedTimes=0}}function zm(n,e,t,i,r,s,o){const a=new oa,l=new Fm,c=new Set,h=[],p=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,M,U,Y,N){const k=Y.fog,O=N.geometry,V=b.isMeshStandardMaterial?Y.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||V),W=$&&$.mapping===ds?$.image.height:null,le=g[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const me=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,xe=me!==void 0?me.length:0;let fe=0;O.morphAttributes.position!==void 0&&(fe=1),O.morphAttributes.normal!==void 0&&(fe=2),O.morphAttributes.color!==void 0&&(fe=3);let De,B,J,Q;if(le){const lt=fn[le];De=lt.vertexShader,B=lt.fragmentShader}else De=b.vertexShader,B=b.fragmentShader,l.update(b),J=l.getVertexShaderID(b),Q=l.getFragmentShaderID(b);const de=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),Pe=N.isInstancedMesh===!0,pe=N.isBatchedMesh===!0,Ee=!!b.map,ke=!!b.matcap,Oe=!!$,L=!!b.aoMap,Xe=!!b.lightMap,ne=!!b.bumpMap,ce=!!b.normalMap,ee=!!b.displacementMap,ve=!!b.emissiveMap,D=!!b.metalnessMap,S=!!b.roughnessMap,_=b.anisotropy>0,F=b.clearcoat>0,X=b.dispersion>0,j=b.iridescence>0,I=b.sheen>0,K=b.transmission>0,Z=_&&!!b.anisotropyMap,re=F&&!!b.clearcoatMap,we=F&&!!b.clearcoatNormalMap,oe=F&&!!b.clearcoatRoughnessMap,ge=j&&!!b.iridescenceMap,Ce=j&&!!b.iridescenceThicknessMap,Ie=I&&!!b.sheenColorMap,Se=I&&!!b.sheenRoughnessMap,Ue=!!b.specularMap,Be=!!b.specularColorMap,Ye=!!b.specularIntensityMap,H=K&&!!b.transmissionMap,Ae=K&&!!b.thicknessMap,ae=!!b.gradientMap,ue=!!b.alphaMap,be=b.alphaTest>0,he=!!b.alphaHash,ze=!!b.extensions;let st=Vn;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(st=n.toneMapping);const dt={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:De,fragmentShader:B,defines:b.defines,customVertexShaderID:J,customFragmentShaderID:Q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:pe,batchingColor:pe&&N._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&N.instanceColor!==null,instancingMorph:Pe&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Ui,alphaToCoverage:!!b.alphaToCoverage,map:Ee,matcap:ke,envMap:Oe,envMapMode:Oe&&$.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:Xe,bumpMap:ne,normalMap:ce,displacementMap:d&&ee,emissiveMap:ve,normalMapObjectSpace:ce&&b.normalMapType===Uu,normalMapTangentSpace:ce&&b.normalMapType===pc,metalnessMap:D,roughnessMap:S,anisotropy:_,anisotropyMap:Z,clearcoat:F,clearcoatMap:re,clearcoatNormalMap:we,clearcoatRoughnessMap:oe,dispersion:X,iridescence:j,iridescenceMap:ge,iridescenceThicknessMap:Ce,sheen:I,sheenColorMap:Ie,sheenRoughnessMap:Se,specularMap:Ue,specularColorMap:Be,specularIntensityMap:Ye,transmission:K,transmissionMap:H,thicknessMap:Ae,gradientMap:ae,opaque:b.transparent===!1&&b.blending===Ai&&b.alphaToCoverage===!1,alphaMap:ue,alphaTest:be,alphaHash:he,combine:b.combine,mapUv:Ee&&v(b.map.channel),aoMapUv:L&&v(b.aoMap.channel),lightMapUv:Xe&&v(b.lightMap.channel),bumpMapUv:ne&&v(b.bumpMap.channel),normalMapUv:ce&&v(b.normalMap.channel),displacementMapUv:ee&&v(b.displacementMap.channel),emissiveMapUv:ve&&v(b.emissiveMap.channel),metalnessMapUv:D&&v(b.metalnessMap.channel),roughnessMapUv:S&&v(b.roughnessMap.channel),anisotropyMapUv:Z&&v(b.anisotropyMap.channel),clearcoatMapUv:re&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:we&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(b.sheenRoughnessMap.channel),specularMapUv:Ue&&v(b.specularMap.channel),specularColorMapUv:Be&&v(b.specularColorMap.channel),specularIntensityMapUv:Ye&&v(b.specularIntensityMap.channel),transmissionMapUv:H&&v(b.transmissionMap.channel),thicknessMapUv:Ae&&v(b.thicknessMap.channel),alphaMapUv:ue&&v(b.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ce||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(Ee||ue),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:ye,skinning:N.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:fe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:st,decodeVideoTexture:Ee&&b.map.isVideoTexture===!0&&rt.getTransfer(b.map.colorSpace)===ct,decodeVideoTextureEmissive:ve&&b.emissiveMap.isVideoTexture===!0&&rt.getTransfer(b.emissiveMap.colorSpace)===ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Wt,flipSided:b.side===qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ze&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&b.extensions.multiDraw===!0||pe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function u(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const U in b.defines)M.push(U),M.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(T(M,b),y(M,b),M.push(n.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function T(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),b.push(a.mask)}function x(b){const M=g[b.type];let U;if(M){const Y=fn[M];U=Th.clone(Y.uniforms)}else U=b.uniforms;return U}function E(b,M){let U;for(let Y=0,N=h.length;Y<N;Y++){const k=h[Y];if(k.cacheKey===M){U=k,++U.usedTimes;break}}return U===void 0&&(U=new Um(n,M,b,s),h.push(U)),U}function w(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function A(b){l.remove(b)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:x,acquireProgram:E,releaseProgram:w,releaseShaderCache:A,programs:h,dispose:P}}function km(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Bm(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function zl(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function kl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(p,d,f,g,v,m){let u=n[e];return u===void 0?(u={id:p.id,object:p,geometry:d,material:f,groupOrder:g,renderOrder:p.renderOrder,z:v,group:m},n[e]=u):(u.id=p.id,u.object=p,u.geometry=d,u.material=f,u.groupOrder=g,u.renderOrder=p.renderOrder,u.z=v,u.group=m),e++,u}function a(p,d,f,g,v,m){const u=o(p,d,f,g,v,m);f.transmission>0?i.push(u):f.transparent===!0?r.push(u):t.push(u)}function l(p,d,f,g,v,m){const u=o(p,d,f,g,v,m);f.transmission>0?i.unshift(u):f.transparent===!0?r.unshift(u):t.unshift(u)}function c(p,d){t.length>1&&t.sort(p||Bm),i.length>1&&i.sort(d||zl),r.length>1&&r.sort(d||zl)}function h(){for(let p=e,d=n.length;p<d;p++){const f=n[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:h,sort:c}}function Hm(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new kl,n.set(i,[o])):r>=s.length?(o=new kl,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Vm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new je};break;case"SpotLight":t={position:new z,direction:new z,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function Gm(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Wm=0;function Xm(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function qm(n){const e=new Vm,t=Gm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new ht,o=new ht;function a(c){let h=0,p=0,d=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let f=0,g=0,v=0,m=0,u=0,T=0,y=0,x=0,E=0,w=0,A=0;c.sort(Xm);for(let b=0,M=c.length;b<M;b++){const U=c[b],Y=U.color,N=U.intensity,k=U.distance,O=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=Y.r*N,p+=Y.g*N,d+=Y.b*N;else if(U.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(U.sh.coefficients[V],N);A++}else if(U.isDirectionalLight){const V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const $=U.shadow,W=t.get(U);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=U.shadow.matrix,T++}i.directional[f]=V,f++}else if(U.isSpotLight){const V=e.get(U);V.position.setFromMatrixPosition(U.matrixWorld),V.color.copy(Y).multiplyScalar(N),V.distance=k,V.coneCos=Math.cos(U.angle),V.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),V.decay=U.decay,i.spot[v]=V;const $=U.shadow;if(U.map&&(i.spotLightMap[E]=U.map,E++,$.updateMatrices(U),U.castShadow&&w++),i.spotLightMatrix[v]=$.matrix,U.castShadow){const W=t.get(U);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,i.spotShadow[v]=W,i.spotShadowMap[v]=O,x++}v++}else if(U.isRectAreaLight){const V=e.get(U);V.color.copy(Y).multiplyScalar(N),V.halfWidth.set(U.width*.5,0,0),V.halfHeight.set(0,U.height*.5,0),i.rectArea[m]=V,m++}else if(U.isPointLight){const V=e.get(U);if(V.color.copy(U.color).multiplyScalar(U.intensity),V.distance=U.distance,V.decay=U.decay,U.castShadow){const $=U.shadow,W=t.get(U);W.shadowIntensity=$.intensity,W.shadowBias=$.bias,W.shadowNormalBias=$.normalBias,W.shadowRadius=$.radius,W.shadowMapSize=$.mapSize,W.shadowCameraNear=$.camera.near,W.shadowCameraFar=$.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=U.shadow.matrix,y++}i.point[g]=V,g++}else if(U.isHemisphereLight){const V=e.get(U);V.skyColor.copy(U.color).multiplyScalar(N),V.groundColor.copy(U.groundColor).multiplyScalar(N),i.hemi[u]=V,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=d;const P=i.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==T||P.numPointShadows!==y||P.numSpotShadows!==x||P.numSpotMaps!==E||P.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=A,P.directionalLength=f,P.pointLength=g,P.spotLength=v,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=T,P.numPointShadows=y,P.numSpotShadows=x,P.numSpotMaps=E,P.numLightProbes=A,i.version=Wm++)}function l(c,h){let p=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let u=0,T=c.length;u<T;u++){const y=c[u];if(y.isDirectionalLight){const x=i.directional[p];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(y.isSpotLight){const x=i.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function Bl(n){const e=new qm(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function o(h){i.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Ym(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Bl(n),e.set(r,[a])):s>=o.length?(a=new Bl(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const $m=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jm(n,e,t){let i=new la;const r=new Te,s=new Te,o=new et,a=new _d({depthPacking:Du}),l=new xd,c={},h=t.maxTextureSize,p={[Gn]:qt,[qt]:Gn,[Wt]:Wt},d=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:$m,fragmentShader:Zm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new wt;g.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new He(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ec;let u=this.type;this.render=function(w,A,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const b=n.getRenderTarget(),M=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Hn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const N=u!==bn&&this.type===bn,k=u===bn&&this.type!==bn;for(let O=0,V=w.length;O<V;O++){const $=w[O],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const le=W.getFrameExtents();if(r.multiply(le),s.copy(W.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/le.x),r.x=s.x*le.x,W.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/le.y),r.y=s.y*le.y,W.mapSize.y=s.y)),W.map===null||N===!0||k===!0){const xe=this.type!==bn?{minFilter:Yt,magFilter:Yt}:{};W.map!==null&&W.map.dispose(),W.map=new Rn(r.x,r.y,xe),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const me=W.getViewportCount();for(let xe=0;xe<me;xe++){const fe=W.getViewport(xe);o.set(s.x*fe.x,s.y*fe.y,s.x*fe.z,s.y*fe.w),Y.viewport(o),W.updateMatrices($,xe),i=W.getFrustum(),x(A,P,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===bn&&T(W,P),W.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(b,M,U)};function T(w,A){const P=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Rn(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(A,null,P,d,v,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(A,null,P,f,v,null)}function y(w,A,P,b){let M=null;const U=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)M=U;else if(M=P.isPointLight===!0?l:a,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const Y=M.uuid,N=A.uuid;let k=c[Y];k===void 0&&(k={},c[Y]=k);let O=k[N];O===void 0&&(O=M.clone(),k[N]=O,A.addEventListener("dispose",E)),M=O}if(M.visible=A.visible,M.wireframe=A.wireframe,b===bn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:p[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Y=n.properties.get(M);Y.light=P}return M}function x(w,A,P,b,M){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&M===bn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const N=e.update(w),k=w.material;if(Array.isArray(k)){const O=N.groups;for(let V=0,$=O.length;V<$;V++){const W=O[V],le=k[W.materialIndex];if(le&&le.visible){const me=y(w,le,b,M);w.onBeforeShadow(n,w,A,P,N,me,W),n.renderBufferDirect(P,null,N,me,w,W),w.onAfterShadow(n,w,A,P,N,me,W)}}}else if(k.visible){const O=y(w,k,b,M);w.onBeforeShadow(n,w,A,P,N,O,null),n.renderBufferDirect(P,null,N,O,w,null),w.onAfterShadow(n,w,A,P,N,O,null)}}const Y=w.children;for(let N=0,k=Y.length;N<k;N++)x(Y[N],A,P,b,M)}function E(w){w.target.removeEventListener("dispose",E);for(const P in c){const b=c[P],M=w.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const Jm={[io]:ro,[so]:lo,[oo]:co,[Ri]:ao,[ro]:io,[lo]:so,[co]:oo,[ao]:Ri};function Km(n,e){function t(){let H=!1;const Ae=new et;let ae=null;const ue=new et(0,0,0,0);return{setMask:function(be){ae!==be&&!H&&(n.colorMask(be,be,be,be),ae=be)},setLocked:function(be){H=be},setClear:function(be,he,ze,st,dt){dt===!0&&(be*=st,he*=st,ze*=st),Ae.set(be,he,ze,st),ue.equals(Ae)===!1&&(n.clearColor(be,he,ze,st),ue.copy(Ae))},reset:function(){H=!1,ae=null,ue.set(-1,0,0,0)}}}function i(){let H=!1,Ae=!1,ae=null,ue=null,be=null;return{setReversed:function(he){if(Ae!==he){const ze=e.get("EXT_clip_control");he?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),Ae=he;const st=be;be=null,this.setClear(st)}},getReversed:function(){return Ae},setTest:function(he){he?de(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(he){ae!==he&&!H&&(n.depthMask(he),ae=he)},setFunc:function(he){if(Ae&&(he=Jm[he]),ue!==he){switch(he){case io:n.depthFunc(n.NEVER);break;case ro:n.depthFunc(n.ALWAYS);break;case so:n.depthFunc(n.LESS);break;case Ri:n.depthFunc(n.LEQUAL);break;case oo:n.depthFunc(n.EQUAL);break;case ao:n.depthFunc(n.GEQUAL);break;case lo:n.depthFunc(n.GREATER);break;case co:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=he}},setLocked:function(he){H=he},setClear:function(he){be!==he&&(Ae&&(he=1-he),n.clearDepth(he),be=he)},reset:function(){H=!1,ae=null,ue=null,be=null,Ae=!1}}}function r(){let H=!1,Ae=null,ae=null,ue=null,be=null,he=null,ze=null,st=null,dt=null;return{setTest:function(lt){H||(lt?de(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(lt){Ae!==lt&&!H&&(n.stencilMask(lt),Ae=lt)},setFunc:function(lt,sn,xn){(ae!==lt||ue!==sn||be!==xn)&&(n.stencilFunc(lt,sn,xn),ae=lt,ue=sn,be=xn)},setOp:function(lt,sn,xn){(he!==lt||ze!==sn||st!==xn)&&(n.stencilOp(lt,sn,xn),he=lt,ze=sn,st=xn)},setLocked:function(lt){H=lt},setClear:function(lt){dt!==lt&&(n.clearStencil(lt),dt=lt)},reset:function(){H=!1,Ae=null,ae=null,ue=null,be=null,he=null,ze=null,st=null,dt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let h={},p={},d=new WeakMap,f=[],g=null,v=!1,m=null,u=null,T=null,y=null,x=null,E=null,w=null,A=new je(0,0,0),P=0,b=!1,M=null,U=null,Y=null,N=null,k=null;const O=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,$=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=$>=2);let le=null,me={};const xe=n.getParameter(n.SCISSOR_BOX),fe=n.getParameter(n.VIEWPORT),De=new et().fromArray(xe),B=new et().fromArray(fe);function J(H,Ae,ae,ue){const be=new Uint8Array(4),he=n.createTexture();n.bindTexture(H,he),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ze=0;ze<ae;ze++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(Ae+ze,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return he}const Q={};Q[n.TEXTURE_2D]=J(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=J(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=J(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=J(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),de(n.DEPTH_TEST),o.setFunc(Ri),ne(!1),ce(Ra),de(n.CULL_FACE),L(Hn);function de(H){h[H]!==!0&&(n.enable(H),h[H]=!0)}function ye(H){h[H]!==!1&&(n.disable(H),h[H]=!1)}function Pe(H,Ae){return p[H]!==Ae?(n.bindFramebuffer(H,Ae),p[H]=Ae,H===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Ae),H===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function pe(H,Ae){let ae=f,ue=!1;if(H){ae=d.get(Ae),ae===void 0&&(ae=[],d.set(Ae,ae));const be=H.textures;if(ae.length!==be.length||ae[0]!==n.COLOR_ATTACHMENT0){for(let he=0,ze=be.length;he<ze;he++)ae[he]=n.COLOR_ATTACHMENT0+he;ae.length=be.length,ue=!0}}else ae[0]!==n.BACK&&(ae[0]=n.BACK,ue=!0);ue&&n.drawBuffers(ae)}function Ee(H){return g!==H?(n.useProgram(H),g=H,!0):!1}const ke={[ni]:n.FUNC_ADD,[ou]:n.FUNC_SUBTRACT,[au]:n.FUNC_REVERSE_SUBTRACT};ke[lu]=n.MIN,ke[cu]=n.MAX;const Oe={[uu]:n.ZERO,[hu]:n.ONE,[du]:n.SRC_COLOR,[to]:n.SRC_ALPHA,[_u]:n.SRC_ALPHA_SATURATE,[gu]:n.DST_COLOR,[pu]:n.DST_ALPHA,[fu]:n.ONE_MINUS_SRC_COLOR,[no]:n.ONE_MINUS_SRC_ALPHA,[vu]:n.ONE_MINUS_DST_COLOR,[mu]:n.ONE_MINUS_DST_ALPHA,[xu]:n.CONSTANT_COLOR,[yu]:n.ONE_MINUS_CONSTANT_COLOR,[Mu]:n.CONSTANT_ALPHA,[Su]:n.ONE_MINUS_CONSTANT_ALPHA};function L(H,Ae,ae,ue,be,he,ze,st,dt,lt){if(H===Hn){v===!0&&(ye(n.BLEND),v=!1);return}if(v===!1&&(de(n.BLEND),v=!0),H!==su){if(H!==m||lt!==b){if((u!==ni||x!==ni)&&(n.blendEquation(n.FUNC_ADD),u=ni,x=ni),lt)switch(H){case Ai:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case La:n.blendFunc(n.ONE,n.ONE);break;case Ia:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Da:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Ai:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case La:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ia:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Da:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}T=null,y=null,E=null,w=null,A.set(0,0,0),P=0,m=H,b=lt}return}be=be||Ae,he=he||ae,ze=ze||ue,(Ae!==u||be!==x)&&(n.blendEquationSeparate(ke[Ae],ke[be]),u=Ae,x=be),(ae!==T||ue!==y||he!==E||ze!==w)&&(n.blendFuncSeparate(Oe[ae],Oe[ue],Oe[he],Oe[ze]),T=ae,y=ue,E=he,w=ze),(st.equals(A)===!1||dt!==P)&&(n.blendColor(st.r,st.g,st.b,dt),A.copy(st),P=dt),m=H,b=!1}function Xe(H,Ae){H.side===Wt?ye(n.CULL_FACE):de(n.CULL_FACE);let ae=H.side===qt;Ae&&(ae=!ae),ne(ae),H.blending===Ai&&H.transparent===!1?L(Hn):L(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),s.setMask(H.colorWrite);const ue=H.stencilWrite;a.setTest(ue),ue&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ve(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function ne(H){M!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),M=H)}function ce(H){H!==iu?(de(n.CULL_FACE),H!==U&&(H===Ra?n.cullFace(n.BACK):H===ru?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),U=H}function ee(H){H!==Y&&(V&&n.lineWidth(H),Y=H)}function ve(H,Ae,ae){H?(de(n.POLYGON_OFFSET_FILL),(N!==Ae||k!==ae)&&(n.polygonOffset(Ae,ae),N=Ae,k=ae)):ye(n.POLYGON_OFFSET_FILL)}function D(H){H?de(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function S(H){H===void 0&&(H=n.TEXTURE0+O-1),le!==H&&(n.activeTexture(H),le=H)}function _(H,Ae,ae){ae===void 0&&(le===null?ae=n.TEXTURE0+O-1:ae=le);let ue=me[ae];ue===void 0&&(ue={type:void 0,texture:void 0},me[ae]=ue),(ue.type!==H||ue.texture!==Ae)&&(le!==ae&&(n.activeTexture(ae),le=ae),n.bindTexture(H,Ae||Q[H]),ue.type=H,ue.texture=Ae)}function F(){const H=me[le];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function X(){try{n.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function j(){try{n.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function I(){try{n.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function K(){try{n.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function re(){try{n.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function we(){try{n.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function oe(){try{n.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ge(){try{n.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ce(){try{n.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ie(H){De.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),De.copy(H))}function Se(H){B.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),B.copy(H))}function Ue(H,Ae){let ae=c.get(Ae);ae===void 0&&(ae=new WeakMap,c.set(Ae,ae));let ue=ae.get(H);ue===void 0&&(ue=n.getUniformBlockIndex(Ae,H.name),ae.set(H,ue))}function Be(H,Ae){const ue=c.get(Ae).get(H);l.get(Ae)!==ue&&(n.uniformBlockBinding(Ae,ue,H.__bindingPointIndex),l.set(Ae,ue))}function Ye(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},le=null,me={},p={},d=new WeakMap,f=[],g=null,v=!1,m=null,u=null,T=null,y=null,x=null,E=null,w=null,A=new je(0,0,0),P=0,b=!1,M=null,U=null,Y=null,N=null,k=null,De.set(0,0,n.canvas.width,n.canvas.height),B.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:de,disable:ye,bindFramebuffer:Pe,drawBuffers:pe,useProgram:Ee,setBlending:L,setMaterial:Xe,setFlipSided:ne,setCullFace:ce,setLineWidth:ee,setPolygonOffset:ve,setScissorTest:D,activeTexture:S,bindTexture:_,unbindTexture:F,compressedTexImage2D:X,compressedTexImage3D:j,texImage2D:ge,texImage3D:Ce,updateUBOMapping:Ue,uniformBlockBinding:Be,texStorage2D:we,texStorage3D:oe,texSubImage2D:I,texSubImage3D:K,compressedTexSubImage2D:Z,compressedTexSubImage3D:re,scissor:Ie,viewport:Se,reset:Ye}}function Qm(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,h=new WeakMap;let p;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return f?new OffscreenCanvas(S,_):as("canvas")}function v(S,_,F){let X=1;const j=D(S);if((j.width>F||j.height>F)&&(X=F/Math.max(j.width,j.height)),X<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const I=Math.floor(X*j.width),K=Math.floor(X*j.height);p===void 0&&(p=g(I,K));const Z=_?g(I,K):p;return Z.width=I,Z.height=K,Z.getContext("2d").drawImage(S,0,0,I,K),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+I+"x"+K+")."),Z}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),S;return S}function m(S){return S.generateMipmaps}function u(S){n.generateMipmap(S)}function T(S){return S.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?n.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(S,_,F,X,j=!1){if(S!==null){if(n[S]!==void 0)return n[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let I=_;if(_===n.RED&&(F===n.FLOAT&&(I=n.R32F),F===n.HALF_FLOAT&&(I=n.R16F),F===n.UNSIGNED_BYTE&&(I=n.R8)),_===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(I=n.R8UI),F===n.UNSIGNED_SHORT&&(I=n.R16UI),F===n.UNSIGNED_INT&&(I=n.R32UI),F===n.BYTE&&(I=n.R8I),F===n.SHORT&&(I=n.R16I),F===n.INT&&(I=n.R32I)),_===n.RG&&(F===n.FLOAT&&(I=n.RG32F),F===n.HALF_FLOAT&&(I=n.RG16F),F===n.UNSIGNED_BYTE&&(I=n.RG8)),_===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(I=n.RG8UI),F===n.UNSIGNED_SHORT&&(I=n.RG16UI),F===n.UNSIGNED_INT&&(I=n.RG32UI),F===n.BYTE&&(I=n.RG8I),F===n.SHORT&&(I=n.RG16I),F===n.INT&&(I=n.RG32I)),_===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(I=n.RGB8UI),F===n.UNSIGNED_SHORT&&(I=n.RGB16UI),F===n.UNSIGNED_INT&&(I=n.RGB32UI),F===n.BYTE&&(I=n.RGB8I),F===n.SHORT&&(I=n.RGB16I),F===n.INT&&(I=n.RGB32I)),_===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(I=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(I=n.RGBA16UI),F===n.UNSIGNED_INT&&(I=n.RGBA32UI),F===n.BYTE&&(I=n.RGBA8I),F===n.SHORT&&(I=n.RGBA16I),F===n.INT&&(I=n.RGBA32I)),_===n.RGB&&F===n.UNSIGNED_INT_5_9_9_9_REV&&(I=n.RGB9_E5),_===n.RGBA){const K=j?ss:rt.getTransfer(X);F===n.FLOAT&&(I=n.RGBA32F),F===n.HALF_FLOAT&&(I=n.RGBA16F),F===n.UNSIGNED_BYTE&&(I=K===ct?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(I=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(I=n.RGB5_A1)}return(I===n.R16F||I===n.R32F||I===n.RG16F||I===n.RG32F||I===n.RGBA16F||I===n.RGBA32F)&&e.get("EXT_color_buffer_float"),I}function x(S,_){let F;return S?_===null||_===Wn||_===or?F=n.DEPTH24_STENCIL8:_===Tn?F=n.DEPTH32F_STENCIL8:_===sr&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Wn||_===or?F=n.DEPTH_COMPONENT24:_===Tn?F=n.DEPTH_COMPONENT32F:_===sr&&(F=n.DEPTH_COMPONENT16),F}function E(S,_){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Yt&&S.minFilter!==Ht?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function w(S){const _=S.target;_.removeEventListener("dispose",w),P(_),_.isVideoTexture&&h.delete(_)}function A(S){const _=S.target;_.removeEventListener("dispose",A),M(_)}function P(S){const _=i.get(S);if(_.__webglInit===void 0)return;const F=S.source,X=d.get(F);if(X){const j=X[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&b(S),Object.keys(X).length===0&&d.delete(F)}i.remove(S)}function b(S){const _=i.get(S);n.deleteTexture(_.__webglTexture);const F=S.source,X=d.get(F);delete X[_.__cacheKey],o.memory.textures--}function M(S){const _=i.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),i.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let j=0;j<_.__webglFramebuffer[X].length;j++)n.deleteFramebuffer(_.__webglFramebuffer[X][j]);else n.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)n.deleteFramebuffer(_.__webglFramebuffer[X]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const F=S.textures;for(let X=0,j=F.length;X<j;X++){const I=i.get(F[X]);I.__webglTexture&&(n.deleteTexture(I.__webglTexture),o.memory.textures--),i.remove(F[X])}i.remove(S)}let U=0;function Y(){U=0}function N(){const S=U;return S>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+r.maxTextures),U+=1,S}function k(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function O(S,_){const F=i.get(S);if(S.isVideoTexture&&ee(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){const X=S.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(F,S,_);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+_)}function V(S,_){const F=i.get(S);if(S.version>0&&F.__version!==S.version){B(F,S,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+_)}function $(S,_){const F=i.get(S);if(S.version>0&&F.__version!==S.version){B(F,S,_);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+_)}function W(S,_){const F=i.get(S);if(S.version>0&&F.__version!==S.version){J(F,S,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+_)}const le={[rr]:n.REPEAT,[ri]:n.CLAMP_TO_EDGE,[fo]:n.MIRRORED_REPEAT},me={[Yt]:n.NEAREST,[Lu]:n.NEAREST_MIPMAP_NEAREST,[Mr]:n.NEAREST_MIPMAP_LINEAR,[Ht]:n.LINEAR,[xs]:n.LINEAR_MIPMAP_NEAREST,[kn]:n.LINEAR_MIPMAP_LINEAR},xe={[Nu]:n.NEVER,[Hu]:n.ALWAYS,[Fu]:n.LESS,[mc]:n.LEQUAL,[Ou]:n.EQUAL,[Bu]:n.GEQUAL,[zu]:n.GREATER,[ku]:n.NOTEQUAL};function fe(S,_){if(_.type===Tn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ht||_.magFilter===xs||_.magFilter===Mr||_.magFilter===kn||_.minFilter===Ht||_.minFilter===xs||_.minFilter===Mr||_.minFilter===kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(S,n.TEXTURE_WRAP_S,le[_.wrapS]),n.texParameteri(S,n.TEXTURE_WRAP_T,le[_.wrapT]),(S===n.TEXTURE_3D||S===n.TEXTURE_2D_ARRAY)&&n.texParameteri(S,n.TEXTURE_WRAP_R,le[_.wrapR]),n.texParameteri(S,n.TEXTURE_MAG_FILTER,me[_.magFilter]),n.texParameteri(S,n.TEXTURE_MIN_FILTER,me[_.minFilter]),_.compareFunction&&(n.texParameteri(S,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(S,n.TEXTURE_COMPARE_FUNC,xe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Yt||_.minFilter!==Mr&&_.minFilter!==kn||_.type===Tn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(S,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function De(S,_){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",w));const X=_.source;let j=d.get(X);j===void 0&&(j={},d.set(X,j));const I=k(_);if(I!==S.__cacheKey){j[I]===void 0&&(j[I]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),j[I].usedTimes++;const K=j[S.__cacheKey];K!==void 0&&(j[S.__cacheKey].usedTimes--,K.usedTimes===0&&b(_)),S.__cacheKey=I,S.__webglTexture=j[I].texture}return F}function B(S,_,F){let X=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=n.TEXTURE_3D);const j=De(S,_),I=_.source;t.bindTexture(X,S.__webglTexture,n.TEXTURE0+F);const K=i.get(I);if(I.version!==K.__version||j===!0){t.activeTexture(n.TEXTURE0+F);const Z=rt.getPrimaries(rt.workingColorSpace),re=_.colorSpace===pn?null:rt.getPrimaries(_.colorSpace),we=_.colorSpace===pn||Z===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let oe=v(_.image,!1,r.maxTextureSize);oe=ve(_,oe);const ge=s.convert(_.format,_.colorSpace),Ce=s.convert(_.type);let Ie=y(_.internalFormat,ge,Ce,_.colorSpace,_.isVideoTexture);fe(X,_);let Se;const Ue=_.mipmaps,Be=_.isVideoTexture!==!0,Ye=K.__version===void 0||j===!0,H=I.dataReady,Ae=E(_,oe);if(_.isDepthTexture)Ie=x(_.format===ar,_.type),Ye&&(Be?t.texStorage2D(n.TEXTURE_2D,1,Ie,oe.width,oe.height):t.texImage2D(n.TEXTURE_2D,0,Ie,oe.width,oe.height,0,ge,Ce,null));else if(_.isDataTexture)if(Ue.length>0){Be&&Ye&&t.texStorage2D(n.TEXTURE_2D,Ae,Ie,Ue[0].width,Ue[0].height);for(let ae=0,ue=Ue.length;ae<ue;ae++)Se=Ue[ae],Be?H&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,ge,Ce,Se.data):t.texImage2D(n.TEXTURE_2D,ae,Ie,Se.width,Se.height,0,ge,Ce,Se.data);_.generateMipmaps=!1}else Be?(Ye&&t.texStorage2D(n.TEXTURE_2D,Ae,Ie,oe.width,oe.height),H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe.width,oe.height,ge,Ce,oe.data)):t.texImage2D(n.TEXTURE_2D,0,Ie,oe.width,oe.height,0,ge,Ce,oe.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Be&&Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Ie,Ue[0].width,Ue[0].height,oe.depth);for(let ae=0,ue=Ue.length;ae<ue;ae++)if(Se=Ue[ae],_.format!==Xt)if(ge!==null)if(Be){if(H)if(_.layerUpdates.size>0){const be=gl(Se.width,Se.height,_.format,_.type);for(const he of _.layerUpdates){const ze=Se.data.subarray(he*be/Se.data.BYTES_PER_ELEMENT,(he+1)*be/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,he,Se.width,Se.height,1,ge,ze)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,oe.depth,ge,Se.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Ie,Se.width,Se.height,oe.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,Se.width,Se.height,oe.depth,ge,Ce,Se.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Ie,Se.width,Se.height,oe.depth,0,ge,Ce,Se.data)}else{Be&&Ye&&t.texStorage2D(n.TEXTURE_2D,Ae,Ie,Ue[0].width,Ue[0].height);for(let ae=0,ue=Ue.length;ae<ue;ae++)Se=Ue[ae],_.format!==Xt?ge!==null?Be?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,ge,Se.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Ie,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?H&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,Se.width,Se.height,ge,Ce,Se.data):t.texImage2D(n.TEXTURE_2D,ae,Ie,Se.width,Se.height,0,ge,Ce,Se.data)}else if(_.isDataArrayTexture)if(Be){if(Ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Ie,oe.width,oe.height,oe.depth),H)if(_.layerUpdates.size>0){const ae=gl(oe.width,oe.height,_.format,_.type);for(const ue of _.layerUpdates){const be=oe.data.subarray(ue*ae/oe.data.BYTES_PER_ELEMENT,(ue+1)*ae/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,oe.width,oe.height,1,ge,Ce,be)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ge,Ce,oe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ie,oe.width,oe.height,oe.depth,0,ge,Ce,oe.data);else if(_.isData3DTexture)Be?(Ye&&t.texStorage3D(n.TEXTURE_3D,Ae,Ie,oe.width,oe.height,oe.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ge,Ce,oe.data)):t.texImage3D(n.TEXTURE_3D,0,Ie,oe.width,oe.height,oe.depth,0,ge,Ce,oe.data);else if(_.isFramebufferTexture){if(Ye)if(Be)t.texStorage2D(n.TEXTURE_2D,Ae,Ie,oe.width,oe.height);else{let ae=oe.width,ue=oe.height;for(let be=0;be<Ae;be++)t.texImage2D(n.TEXTURE_2D,be,Ie,ae,ue,0,ge,Ce,null),ae>>=1,ue>>=1}}else if(Ue.length>0){if(Be&&Ye){const ae=D(Ue[0]);t.texStorage2D(n.TEXTURE_2D,Ae,Ie,ae.width,ae.height)}for(let ae=0,ue=Ue.length;ae<ue;ae++)Se=Ue[ae],Be?H&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,ge,Ce,Se):t.texImage2D(n.TEXTURE_2D,ae,Ie,ge,Ce,Se);_.generateMipmaps=!1}else if(Be){if(Ye){const ae=D(oe);t.texStorage2D(n.TEXTURE_2D,Ae,Ie,ae.width,ae.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,Ce,oe)}else t.texImage2D(n.TEXTURE_2D,0,Ie,ge,Ce,oe);m(_)&&u(X),K.__version=I.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function J(S,_,F){if(_.image.length!==6)return;const X=De(S,_),j=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,S.__webglTexture,n.TEXTURE0+F);const I=i.get(j);if(j.version!==I.__version||X===!0){t.activeTexture(n.TEXTURE0+F);const K=rt.getPrimaries(rt.workingColorSpace),Z=_.colorSpace===pn?null:rt.getPrimaries(_.colorSpace),re=_.colorSpace===pn||K===Z?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const we=_.isCompressedTexture||_.image[0].isCompressedTexture,oe=_.image[0]&&_.image[0].isDataTexture,ge=[];for(let ue=0;ue<6;ue++)!we&&!oe?ge[ue]=v(_.image[ue],!0,r.maxCubemapSize):ge[ue]=oe?_.image[ue].image:_.image[ue],ge[ue]=ve(_,ge[ue]);const Ce=ge[0],Ie=s.convert(_.format,_.colorSpace),Se=s.convert(_.type),Ue=y(_.internalFormat,Ie,Se,_.colorSpace),Be=_.isVideoTexture!==!0,Ye=I.__version===void 0||X===!0,H=j.dataReady;let Ae=E(_,Ce);fe(n.TEXTURE_CUBE_MAP,_);let ae;if(we){Be&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Ue,Ce.width,Ce.height);for(let ue=0;ue<6;ue++){ae=ge[ue].mipmaps;for(let be=0;be<ae.length;be++){const he=ae[be];_.format!==Xt?Ie!==null?Be?H&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be,0,0,he.width,he.height,Ie,he.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be,Ue,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be,0,0,he.width,he.height,Ie,Se,he.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be,Ue,he.width,he.height,0,Ie,Se,he.data)}}}else{if(ae=_.mipmaps,Be&&Ye){ae.length>0&&Ae++;const ue=D(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Ue,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(oe){Be?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ge[ue].width,ge[ue].height,Ie,Se,ge[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ue,ge[ue].width,ge[ue].height,0,Ie,Se,ge[ue].data);for(let be=0;be<ae.length;be++){const ze=ae[be].image[ue].image;Be?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be+1,0,0,ze.width,ze.height,Ie,Se,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be+1,Ue,ze.width,ze.height,0,Ie,Se,ze.data)}}else{Be?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ie,Se,ge[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,Ue,Ie,Se,ge[ue]);for(let be=0;be<ae.length;be++){const he=ae[be];Be?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be+1,0,0,Ie,Se,he.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,be+1,Ue,Ie,Se,he.image[ue])}}}m(_)&&u(n.TEXTURE_CUBE_MAP),I.__version=j.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function Q(S,_,F,X,j,I){const K=s.convert(F.format,F.colorSpace),Z=s.convert(F.type),re=y(F.internalFormat,K,Z,F.colorSpace),we=i.get(_),oe=i.get(F);if(oe.__renderTarget=_,!we.__hasExternalTextures){const ge=Math.max(1,_.width>>I),Ce=Math.max(1,_.height>>I);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,I,re,ge,Ce,_.depth,0,K,Z,null):t.texImage2D(j,I,re,ge,Ce,0,K,Z,null)}t.bindFramebuffer(n.FRAMEBUFFER,S),ce(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,j,oe.__webglTexture,0,ne(_)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,j,oe.__webglTexture,I),t.bindFramebuffer(n.FRAMEBUFFER,null)}function de(S,_,F){if(n.bindRenderbuffer(n.RENDERBUFFER,S),_.depthBuffer){const X=_.depthTexture,j=X&&X.isDepthTexture?X.type:null,I=x(_.stencilBuffer,j),K=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=ne(_);ce(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,I,_.width,_.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,I,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,I,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,S)}else{const X=_.textures;for(let j=0;j<X.length;j++){const I=X[j],K=s.convert(I.format,I.colorSpace),Z=s.convert(I.type),re=y(I.internalFormat,K,Z,I.colorSpace),we=ne(_);F&&ce(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,re,_.width,_.height):ce(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,re,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,re,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const X=i.get(_.depthTexture);X.__renderTarget=_,(!X.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),O(_.depthTexture,0);const j=X.__webglTexture,I=ne(_);if(_.depthTexture.format===Di)ce(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,I):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(_.depthTexture.format===ar)ce(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,I):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Pe(S){const _=i.get(S),F=S.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==S.depthTexture){const X=S.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",j)};X.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=X}if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");ye(_.__webglFramebuffer,S)}else if(F){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=n.createRenderbuffer(),de(_.__webglDepthbuffer[X],S,!1);else{const j=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,I=_.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,I),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,I)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),de(_.__webglDepthbuffer,S,!1);else{const X=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,j),n.framebufferRenderbuffer(n.FRAMEBUFFER,X,n.RENDERBUFFER,j)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function pe(S,_,F){const X=i.get(S);_!==void 0&&Q(X.__webglFramebuffer,S,S.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Pe(S)}function Ee(S){const _=S.texture,F=i.get(S),X=i.get(_);S.addEventListener("dispose",A);const j=S.textures,I=S.isWebGLCubeRenderTarget===!0,K=j.length>1;if(K||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=_.version,o.memory.textures++),I){F.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer[Z]=[];for(let re=0;re<_.mipmaps.length;re++)F.__webglFramebuffer[Z][re]=n.createFramebuffer()}else F.__webglFramebuffer[Z]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){F.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)F.__webglFramebuffer[Z]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(K)for(let Z=0,re=j.length;Z<re;Z++){const we=i.get(j[Z]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),o.memory.textures++)}if(S.samples>0&&ce(S)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Z=0;Z<j.length;Z++){const re=j[Z];F.__webglColorRenderbuffer[Z]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[Z]);const we=s.convert(re.format,re.colorSpace),oe=s.convert(re.type),ge=y(re.internalFormat,we,oe,re.colorSpace,S.isXRRenderTarget===!0),Ce=ne(S);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,ge,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Z,n.RENDERBUFFER,F.__webglColorRenderbuffer[Z])}n.bindRenderbuffer(n.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),de(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(I){t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),fe(n.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)Q(F.__webglFramebuffer[Z][re],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,re);else Q(F.__webglFramebuffer[Z],S,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);m(_)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(K){for(let Z=0,re=j.length;Z<re;Z++){const we=j[Z],oe=i.get(we);t.bindTexture(n.TEXTURE_2D,oe.__webglTexture),fe(n.TEXTURE_2D,we),Q(F.__webglFramebuffer,S,we,n.COLOR_ATTACHMENT0+Z,n.TEXTURE_2D,0),m(we)&&u(n.TEXTURE_2D)}t.unbindTexture()}else{let Z=n.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Z=S.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Z,X.__webglTexture),fe(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let re=0;re<_.mipmaps.length;re++)Q(F.__webglFramebuffer[re],S,_,n.COLOR_ATTACHMENT0,Z,re);else Q(F.__webglFramebuffer,S,_,n.COLOR_ATTACHMENT0,Z,0);m(_)&&u(Z),t.unbindTexture()}S.depthBuffer&&Pe(S)}function ke(S){const _=S.textures;for(let F=0,X=_.length;F<X;F++){const j=_[F];if(m(j)){const I=T(S),K=i.get(j).__webglTexture;t.bindTexture(I,K),u(I),t.unbindTexture()}}}const Oe=[],L=[];function Xe(S){if(S.samples>0){if(ce(S)===!1){const _=S.textures,F=S.width,X=S.height;let j=n.COLOR_BUFFER_BIT;const I=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,K=i.get(S),Z=_.length>1;if(Z)for(let re=0;re<_.length;re++)t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,K.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let re=0;re<_.length;re++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),Z){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,K.__webglColorRenderbuffer[re]);const we=i.get(_[re]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,we,0)}n.blitFramebuffer(0,0,F,X,0,0,F,X,j,n.NEAREST),l===!0&&(Oe.length=0,L.length=0,Oe.push(n.COLOR_ATTACHMENT0+re),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Oe.push(I),L.push(I),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Oe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Z)for(let re=0;re<_.length;re++){t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,K.__webglColorRenderbuffer[re]);const we=i.get(_[re]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,K.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,we,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&l){const _=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function ne(S){return Math.min(r.maxSamples,S.samples)}function ce(S){const _=i.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ee(S){const _=o.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function ve(S,_){const F=S.colorSpace,X=S.format,j=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||F!==Ui&&F!==pn&&(rt.getTransfer(F)===ct?(X!==Xt||j!==hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),_}function D(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=Y,this.setTexture2D=O,this.setTexture2DArray=V,this.setTexture3D=$,this.setTextureCube=W,this.rebindTextures=pe,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=ce}function eg(n,e){function t(i,r=pn){let s;const o=rt.getTransfer(r);if(i===hn)return n.UNSIGNED_BYTE;if(i===Jo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ko)return n.UNSIGNED_SHORT_5_5_5_1;if(i===oc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===rc)return n.BYTE;if(i===sc)return n.SHORT;if(i===sr)return n.UNSIGNED_SHORT;if(i===jo)return n.INT;if(i===Wn)return n.UNSIGNED_INT;if(i===Tn)return n.FLOAT;if(i===zi)return n.HALF_FLOAT;if(i===ac)return n.ALPHA;if(i===lc)return n.RGB;if(i===Xt)return n.RGBA;if(i===cc)return n.LUMINANCE;if(i===uc)return n.LUMINANCE_ALPHA;if(i===Di)return n.DEPTH_COMPONENT;if(i===ar)return n.DEPTH_STENCIL;if(i===hc)return n.RED;if(i===Qo)return n.RED_INTEGER;if(i===dc)return n.RG;if(i===ea)return n.RG_INTEGER;if(i===ta)return n.RGBA_INTEGER;if(i===Jr||i===Kr||i===Qr||i===es)if(o===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Jr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Jr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Kr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===es)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===po||i===mo||i===go||i===vo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===po)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===go)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_o||i===xo||i===yo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_o||i===xo)return o===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yo)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Mo||i===So||i===Eo||i===wo||i===bo||i===To||i===Ao||i===Co||i===Po||i===Ro||i===Lo||i===Io||i===Do||i===Uo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Mo)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===So)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Eo)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wo)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bo)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===To)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ao)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Co)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Po)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ro)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lo)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Io)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Do)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Uo)return o===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ts||i===No||i===Fo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ts)return o===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===No)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Fo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fc||i===Oo||i===zo||i===ko)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ts)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Oo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ko)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===or?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ng=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ig{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Ft,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new vn({vertexShader:tg,fragmentShader:ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new He(new Et(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rg extends ki{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,p=null,d=null,f=null,g=null;const v=new ig,m=t.getContextAttributes();let u=null,T=null;const y=[],x=[],E=new Te;let w=null;const A=new Kt;A.viewport=new et;const P=new Kt;P.viewport=new et;const b=[A,P],M=new wd;let U=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let J=y[B];return J===void 0&&(J=new ks,y[B]=J),J.getTargetRaySpace()},this.getControllerGrip=function(B){let J=y[B];return J===void 0&&(J=new ks,y[B]=J),J.getGripSpace()},this.getHand=function(B){let J=y[B];return J===void 0&&(J=new ks,y[B]=J),J.getHandSpace()};function N(B){const J=x.indexOf(B.inputSource);if(J===-1)return;const Q=y[J];Q!==void 0&&(Q.update(B.inputSource,B.frame,c||o),Q.dispatchEvent({type:B.type,data:B.inputSource}))}function k(){r.removeEventListener("select",N),r.removeEventListener("selectstart",N),r.removeEventListener("selectend",N),r.removeEventListener("squeeze",N),r.removeEventListener("squeezestart",N),r.removeEventListener("squeezeend",N),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",O);for(let B=0;B<y.length;B++){const J=x[B];J!==null&&(x[B]=null,y[B].disconnect(J))}U=null,Y=null,v.reset(),e.setRenderTarget(u),f=null,d=null,p=null,r=null,T=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",N),r.addEventListener("selectstart",N),r.addEventListener("selectend",N),r.addEventListener("squeeze",N),r.addEventListener("squeezestart",N),r.addEventListener("squeezeend",N),r.addEventListener("end",k),r.addEventListener("inputsourceschange",O),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Q=null,de=null,ye=null;m.depth&&(ye=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?ar:Di,de=m.stencil?or:Wn);const Pe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:s};p=new XRWebGLBinding(r,t),d=p.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Rn(d.textureWidth,d.textureHeight,{format:Xt,type:hn,depthTexture:new ua(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),T=new Rn(f.framebufferWidth,f.framebufferHeight,{format:Xt,type:hn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function O(B){for(let J=0;J<B.removed.length;J++){const Q=B.removed[J],de=x.indexOf(Q);de>=0&&(x[de]=null,y[de].disconnect(Q))}for(let J=0;J<B.added.length;J++){const Q=B.added[J];let de=x.indexOf(Q);if(de===-1){for(let Pe=0;Pe<y.length;Pe++)if(Pe>=x.length){x.push(Q),de=Pe;break}else if(x[Pe]===null){x[Pe]=Q,de=Pe;break}if(de===-1)break}const ye=y[de];ye&&ye.connect(Q)}}const V=new z,$=new z;function W(B,J,Q){V.setFromMatrixPosition(J.matrixWorld),$.setFromMatrixPosition(Q.matrixWorld);const de=V.distanceTo($),ye=J.projectionMatrix.elements,Pe=Q.projectionMatrix.elements,pe=ye[14]/(ye[10]-1),Ee=ye[14]/(ye[10]+1),ke=(ye[9]+1)/ye[5],Oe=(ye[9]-1)/ye[5],L=(ye[8]-1)/ye[0],Xe=(Pe[8]+1)/Pe[0],ne=pe*L,ce=pe*Xe,ee=de/(-L+Xe),ve=ee*-L;if(J.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ve),B.translateZ(ee),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),ye[10]===-1)B.projectionMatrix.copy(J.projectionMatrix),B.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const D=pe+ee,S=Ee+ee,_=ne-ve,F=ce+(de-ve),X=ke*Ee/S*D,j=Oe*Ee/S*D;B.projectionMatrix.makePerspective(_,F,X,j,D,S),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function le(B,J){J===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(J.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;let J=B.near,Q=B.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(Q=v.depthFar)),M.near=P.near=A.near=J,M.far=P.far=A.far=Q,(U!==M.near||Y!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,Y=M.far),A.layers.mask=B.layers.mask|2,P.layers.mask=B.layers.mask|4,M.layers.mask=A.layers.mask|P.layers.mask;const de=B.parent,ye=M.cameras;le(M,de);for(let Pe=0;Pe<ye.length;Pe++)le(ye[Pe],de);ye.length===2?W(M,A,P):M.projectionMatrix.copy(A.projectionMatrix),me(B,M,de)};function me(B,J,Q){Q===null?B.matrix.copy(J.matrixWorld):(B.matrix.copy(Q.matrixWorld),B.matrix.invert(),B.matrix.multiply(J.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(J.projectionMatrix),B.projectionMatrixInverse.copy(J.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=lr*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(B){l=B,d!==null&&(d.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let xe=null;function fe(B,J){if(h=J.getViewerPose(c||o),g=J,h!==null){const Q=h.views;f!==null&&(e.setRenderTargetFramebuffer(T,f.framebuffer),e.setRenderTarget(T));let de=!1;Q.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let pe=0;pe<Q.length;pe++){const Ee=Q[pe];let ke=null;if(f!==null)ke=f.getViewport(Ee);else{const L=p.getViewSubImage(d,Ee);ke=L.viewport,pe===0&&(e.setRenderTargetTextures(T,L.colorTexture,L.depthStencilTexture),e.setRenderTarget(T))}let Oe=b[pe];Oe===void 0&&(Oe=new Kt,Oe.layers.enable(pe),Oe.viewport=new et,b[pe]=Oe),Oe.matrix.fromArray(Ee.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ee.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(ke.x,ke.y,ke.width,ke.height),pe===0&&(M.matrix.copy(Oe.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(Oe)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&p){const pe=p.getDepthInformation(Q[0]);pe&&pe.isValid&&pe.texture&&v.init(e,pe,r.renderState)}}for(let Q=0;Q<y.length;Q++){const de=x[Q],ye=y[Q];de!==null&&ye!==void 0&&ye.update(de,J,c||o)}xe&&xe(B,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const De=new Nc;De.setAnimationLoop(fe),this.setAnimationLoop=function(B){xe=B},this.dispose=function(){}}}const ei=new gn,sg=new ht;function og(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Mc(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,T,y,x){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),p(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&f(m,u,x)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,T,y):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===qt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===qt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const T=e.get(u),y=T.envMap,x=T.envMapRotation;y&&(m.envMap.value=y,ei.copy(x),ei.x*=-1,ei.y*=-1,ei.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ei.y*=-1,ei.z*=-1),m.envMapRotation.value.setFromMatrix4(sg.makeRotationFromEuler(ei)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,T,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*T,m.scale.value=y*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,T){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===qt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const T=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ag(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,y){const x=y.program;i.uniformBlockBinding(T,x)}function c(T,y){let x=r[T.id];x===void 0&&(g(T),x=h(T),r[T.id]=x,T.addEventListener("dispose",m));const E=y.program;i.updateUBOMapping(T,E);const w=e.render.frame;s[T.id]!==w&&(d(T),s[T.id]=w)}function h(T){const y=p();T.__bindingPointIndex=y;const x=n.createBuffer(),E=T.__size,w=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,E,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,x),x}function p(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const y=r[T.id],x=T.uniforms,E=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let w=0,A=x.length;w<A;w++){const P=Array.isArray(x[w])?x[w]:[x[w]];for(let b=0,M=P.length;b<M;b++){const U=P[b];if(f(U,w,b,E)===!0){const Y=U.__offset,N=Array.isArray(U.value)?U.value:[U.value];let k=0;for(let O=0;O<N.length;O++){const V=N[O],$=v(V);typeof V=="number"||typeof V=="boolean"?(U.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,Y+k,U.__data)):V.isMatrix3?(U.__data[0]=V.elements[0],U.__data[1]=V.elements[1],U.__data[2]=V.elements[2],U.__data[3]=0,U.__data[4]=V.elements[3],U.__data[5]=V.elements[4],U.__data[6]=V.elements[5],U.__data[7]=0,U.__data[8]=V.elements[6],U.__data[9]=V.elements[7],U.__data[10]=V.elements[8],U.__data[11]=0):(V.toArray(U.__data,k),k+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,y,x,E){const w=T.value,A=y+"_"+x;if(E[A]===void 0)return typeof w=="number"||typeof w=="boolean"?E[A]=w:E[A]=w.clone(),!0;{const P=E[A];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return E[A]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function g(T){const y=T.uniforms;let x=0;const E=16;for(let A=0,P=y.length;A<P;A++){const b=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,U=b.length;M<U;M++){const Y=b[M],N=Array.isArray(Y.value)?Y.value:[Y.value];for(let k=0,O=N.length;k<O;k++){const V=N[k],$=v(V),W=x%E,le=W%$.boundary,me=W+le;x+=le,me!==0&&E-me<$.storage&&(x+=E-me),Y.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=x,x+=$.storage}}}const w=x%E;return w>0&&(x+=E-w),T.__size=x,T.__cache={},this}function v(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),y}function m(T){const y=T.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(const T in r)n.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class lg{constructor(e={}){const{canvas:t=rh(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,u=null;const T=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let E=!1;this._outputColorSpace=St;let w=0,A=0,P=null,b=-1,M=null;const U=new et,Y=new et;let N=null;const k=new je(0);let O=0,V=t.width,$=t.height,W=1,le=null,me=null;const xe=new et(0,0,V,$),fe=new et(0,0,V,$);let De=!1;const B=new la;let J=!1,Q=!1;const de=new ht,ye=new ht,Pe=new z,pe=new et,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function Oe(){return P===null?W:1}let L=i;function Xe(C,G){return t.getContext(C,G)}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$o}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",he,!1),L===null){const G="webgl2";if(L=Xe(G,C),L===null)throw Xe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ne,ce,ee,ve,D,S,_,F,X,j,I,K,Z,re,we,oe,ge,Ce,Ie,Se,Ue,Be,Ye,H;function Ae(){ne=new _0(L),ne.init(),Be=new eg(L,ne),ce=new h0(L,ne,e,Be),ee=new Km(L,ne),ce.reverseDepthBuffer&&d&&ee.buffers.depth.setReversed(!0),ve=new M0(L),D=new km,S=new Qm(L,ne,ee,D,ce,Be,ve),_=new f0(x),F=new v0(x),X=new Td(L),Ye=new c0(L,X),j=new x0(L,X,ve,Ye),I=new E0(L,j,X,ve),Ie=new S0(L,ce,S),oe=new d0(D),K=new zm(x,_,F,ne,ce,Ye,oe),Z=new og(x,D),re=new Hm,we=new Ym(ne),Ce=new l0(x,_,F,ee,I,f,l),ge=new jm(x,I,ce),H=new ag(L,ve,ce,ee),Se=new u0(L,ne,ve),Ue=new y0(L,ne,ve),ve.programs=K.programs,x.capabilities=ce,x.extensions=ne,x.properties=D,x.renderLists=re,x.shadowMap=ge,x.state=ee,x.info=ve}Ae();const ae=new rg(x,L);this.xr=ae,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const C=ne.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ne.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(C){C!==void 0&&(W=C,this.setSize(V,$,!1))},this.getSize=function(C){return C.set(V,$)},this.setSize=function(C,G,te=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=C,$=G,t.width=Math.floor(C*W),t.height=Math.floor(G*W),te===!0&&(t.style.width=C+"px",t.style.height=G+"px"),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(V*W,$*W).floor()},this.setDrawingBufferSize=function(C,G,te){V=C,$=G,W=te,t.width=Math.floor(C*te),t.height=Math.floor(G*te),this.setViewport(0,0,C,G)},this.getCurrentViewport=function(C){return C.copy(U)},this.getViewport=function(C){return C.copy(xe)},this.setViewport=function(C,G,te,ie){C.isVector4?xe.set(C.x,C.y,C.z,C.w):xe.set(C,G,te,ie),ee.viewport(U.copy(xe).multiplyScalar(W).round())},this.getScissor=function(C){return C.copy(fe)},this.setScissor=function(C,G,te,ie){C.isVector4?fe.set(C.x,C.y,C.z,C.w):fe.set(C,G,te,ie),ee.scissor(Y.copy(fe).multiplyScalar(W).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(C){ee.setScissorTest(De=C)},this.setOpaqueSort=function(C){le=C},this.setTransparentSort=function(C){me=C},this.getClearColor=function(C){return C.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(C=!0,G=!0,te=!0){let ie=0;if(C){let q=!1;if(P!==null){const Me=P.texture.format;q=Me===ta||Me===ea||Me===Qo}if(q){const Me=P.texture.type,Le=Me===hn||Me===Wn||Me===sr||Me===or||Me===Jo||Me===Ko,Ne=Ce.getClearColor(),Fe=Ce.getClearAlpha(),$e=Ne.r,qe=Ne.g,Ve=Ne.b;Le?(g[0]=$e,g[1]=qe,g[2]=Ve,g[3]=Fe,L.clearBufferuiv(L.COLOR,0,g)):(v[0]=$e,v[1]=qe,v[2]=Ve,v[3]=Fe,L.clearBufferiv(L.COLOR,0,v))}else ie|=L.COLOR_BUFFER_BIT}G&&(ie|=L.DEPTH_BUFFER_BIT),te&&(ie|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",he,!1),Ce.dispose(),re.dispose(),we.dispose(),D.dispose(),_.dispose(),F.dispose(),I.dispose(),Ye.dispose(),H.dispose(),K.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Ea),ae.removeEventListener("sessionend",wa),Yn.stop()};function ue(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const C=ve.autoReset,G=ge.enabled,te=ge.autoUpdate,ie=ge.needsUpdate,q=ge.type;Ae(),ve.autoReset=C,ge.enabled=G,ge.autoUpdate=te,ge.needsUpdate=ie,ge.type=q}function he(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ze(C){const G=C.target;G.removeEventListener("dispose",ze),st(G)}function st(C){dt(C),D.remove(C)}function dt(C){const G=D.get(C).programs;G!==void 0&&(G.forEach(function(te){K.releaseProgram(te)}),C.isShaderMaterial&&K.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,te,ie,q,Me){G===null&&(G=Ee);const Le=q.isMesh&&q.matrixWorld.determinant()<0,Ne=Jc(C,G,te,ie,q);ee.setMaterial(ie,Le);let Fe=te.index,$e=1;if(ie.wireframe===!0){if(Fe=j.getWireframeAttribute(te),Fe===void 0)return;$e=2}const qe=te.drawRange,Ve=te.attributes.position;let nt=qe.start*$e,ot=(qe.start+qe.count)*$e;Me!==null&&(nt=Math.max(nt,Me.start*$e),ot=Math.min(ot,(Me.start+Me.count)*$e)),Fe!==null?(nt=Math.max(nt,0),ot=Math.min(ot,Fe.count)):Ve!=null&&(nt=Math.max(nt,0),ot=Math.min(ot,Ve.count));const vt=ot-nt;if(vt<0||vt===1/0)return;Ye.setup(q,ie,Ne,te,Fe);let gt,it=Se;if(Fe!==null&&(gt=X.get(Fe),it=Ue,it.setIndex(gt)),q.isMesh)ie.wireframe===!0?(ee.setLineWidth(ie.wireframeLinewidth*Oe()),it.setMode(L.LINES)):it.setMode(L.TRIANGLES);else if(q.isLine){let Ge=ie.linewidth;Ge===void 0&&(Ge=1),ee.setLineWidth(Ge*Oe()),q.isLineSegments?it.setMode(L.LINES):q.isLineLoop?it.setMode(L.LINE_LOOP):it.setMode(L.LINE_STRIP)}else q.isPoints?it.setMode(L.POINTS):q.isSprite&&it.setMode(L.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ns("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),it.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))it.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ge=q._multiDrawStarts,Lt=q._multiDrawCounts,at=q._multiDrawCount,on=Fe?X.get(Fe).bytesPerElement:1,ui=D.get(ie).currentProgram.getUniforms();for(let Zt=0;Zt<at;Zt++)ui.setValue(L,"_gl_DrawID",Zt),it.render(Ge[Zt]/on,Lt[Zt])}else if(q.isInstancedMesh)it.renderInstances(nt,vt,q.count);else if(te.isInstancedBufferGeometry){const Ge=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Lt=Math.min(te.instanceCount,Ge);it.renderInstances(nt,vt,Lt)}else it.render(nt,vt)};function lt(C,G,te){C.transparent===!0&&C.side===Wt&&C.forceSinglePass===!1?(C.side=qt,C.needsUpdate=!0,yr(C,G,te),C.side=Gn,C.needsUpdate=!0,yr(C,G,te),C.side=Wt):yr(C,G,te)}this.compile=function(C,G,te=null){te===null&&(te=C),u=we.get(te),u.init(G),y.push(u),te.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(u.pushLight(q),q.castShadow&&u.pushShadow(q))}),C!==te&&C.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(u.pushLight(q),q.castShadow&&u.pushShadow(q))}),u.setupLights();const ie=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Me=q.material;if(Me)if(Array.isArray(Me))for(let Le=0;Le<Me.length;Le++){const Ne=Me[Le];lt(Ne,te,q),ie.add(Ne)}else lt(Me,te,q),ie.add(Me)}),u=y.pop(),ie},this.compileAsync=function(C,G,te=null){const ie=this.compile(C,G,te);return new Promise(q=>{function Me(){if(ie.forEach(function(Le){D.get(Le).currentProgram.isReady()&&ie.delete(Le)}),ie.size===0){q(C);return}setTimeout(Me,10)}ne.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let sn=null;function xn(C){sn&&sn(C)}function Ea(){Yn.stop()}function wa(){Yn.start()}const Yn=new Nc;Yn.setAnimationLoop(xn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(C){sn=C,ae.setAnimationLoop(C),C===null?Yn.stop():Yn.start()},ae.addEventListener("sessionstart",Ea),ae.addEventListener("sessionend",wa),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(G),G=ae.getCamera()),C.isScene===!0&&C.onBeforeRender(x,C,G,P),u=we.get(C,y.length),u.init(G),y.push(u),ye.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),B.setFromProjectionMatrix(ye),Q=this.localClippingEnabled,J=oe.init(this.clippingPlanes,Q),m=re.get(C,T.length),m.init(),T.push(m),ae.enabled===!0&&ae.isPresenting===!0){const Me=x.xr.getDepthSensingMesh();Me!==null&&vs(Me,G,-1/0,x.sortObjects)}vs(C,G,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(le,me),ke=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,ke&&Ce.addToRenderList(m,C),this.info.render.frame++,J===!0&&oe.beginShadows();const te=u.state.shadowsArray;ge.render(te,C,G),J===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=m.opaque,q=m.transmissive;if(u.setupLights(),G.isArrayCamera){const Me=G.cameras;if(q.length>0)for(let Le=0,Ne=Me.length;Le<Ne;Le++){const Fe=Me[Le];Ta(ie,q,C,Fe)}ke&&Ce.render(C);for(let Le=0,Ne=Me.length;Le<Ne;Le++){const Fe=Me[Le];ba(m,C,Fe,Fe.viewport)}}else q.length>0&&Ta(ie,q,C,G),ke&&Ce.render(C),ba(m,C,G);P!==null&&A===0&&(S.updateMultisampleRenderTarget(P),S.updateRenderTargetMipmap(P)),C.isScene===!0&&C.onAfterRender(x,C,G),Ye.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(u=y[y.length-1],J===!0&&oe.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function vs(C,G,te,ie){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)te=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)u.pushLight(C),C.castShadow&&u.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||B.intersectsSprite(C)){ie&&pe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ye);const Le=I.update(C),Ne=C.material;Ne.visible&&m.push(C,Le,Ne,te,pe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||B.intersectsObject(C))){const Le=I.update(C),Ne=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),pe.copy(C.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),pe.copy(Le.boundingSphere.center)),pe.applyMatrix4(C.matrixWorld).applyMatrix4(ye)),Array.isArray(Ne)){const Fe=Le.groups;for(let $e=0,qe=Fe.length;$e<qe;$e++){const Ve=Fe[$e],nt=Ne[Ve.materialIndex];nt&&nt.visible&&m.push(C,Le,nt,te,pe.z,Ve)}}else Ne.visible&&m.push(C,Le,Ne,te,pe.z,null)}}const Me=C.children;for(let Le=0,Ne=Me.length;Le<Ne;Le++)vs(Me[Le],G,te,ie)}function ba(C,G,te,ie){const q=C.opaque,Me=C.transmissive,Le=C.transparent;u.setupLightsView(te),J===!0&&oe.setGlobalState(x.clippingPlanes,te),ie&&ee.viewport(U.copy(ie)),q.length>0&&xr(q,G,te),Me.length>0&&xr(Me,G,te),Le.length>0&&xr(Le,G,te),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Ta(C,G,te,ie){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[ie.id]===void 0&&(u.state.transmissionRenderTarget[ie.id]=new Rn(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?zi:hn,minFilter:kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const Me=u.state.transmissionRenderTarget[ie.id],Le=ie.viewport||U;Me.setSize(Le.z*x.transmissionResolutionScale,Le.w*x.transmissionResolutionScale);const Ne=x.getRenderTarget();x.setRenderTarget(Me),x.getClearColor(k),O=x.getClearAlpha(),O<1&&x.setClearColor(16777215,.5),x.clear(),ke&&Ce.render(te);const Fe=x.toneMapping;x.toneMapping=Vn;const $e=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),u.setupLightsView(ie),J===!0&&oe.setGlobalState(x.clippingPlanes,ie),xr(C,te,ie),S.updateMultisampleRenderTarget(Me),S.updateRenderTargetMipmap(Me),ne.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ve=0,nt=G.length;Ve<nt;Ve++){const ot=G[Ve],vt=ot.object,gt=ot.geometry,it=ot.material,Ge=ot.group;if(it.side===Wt&&vt.layers.test(ie.layers)){const Lt=it.side;it.side=qt,it.needsUpdate=!0,Aa(vt,te,ie,gt,it,Ge),it.side=Lt,it.needsUpdate=!0,qe=!0}}qe===!0&&(S.updateMultisampleRenderTarget(Me),S.updateRenderTargetMipmap(Me))}x.setRenderTarget(Ne),x.setClearColor(k,O),$e!==void 0&&(ie.viewport=$e),x.toneMapping=Fe}function xr(C,G,te){const ie=G.isScene===!0?G.overrideMaterial:null;for(let q=0,Me=C.length;q<Me;q++){const Le=C[q],Ne=Le.object,Fe=Le.geometry,$e=Le.group;let qe=Le.material;qe.allowOverride===!0&&ie!==null&&(qe=ie),Ne.layers.test(te.layers)&&Aa(Ne,G,te,Fe,qe,$e)}}function Aa(C,G,te,ie,q,Me){C.onBeforeRender(x,G,te,ie,q,Me),C.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(x,G,te,ie,C,Me),q.transparent===!0&&q.side===Wt&&q.forceSinglePass===!1?(q.side=qt,q.needsUpdate=!0,x.renderBufferDirect(te,G,ie,q,C,Me),q.side=Gn,q.needsUpdate=!0,x.renderBufferDirect(te,G,ie,q,C,Me),q.side=Wt):x.renderBufferDirect(te,G,ie,q,C,Me),C.onAfterRender(x,G,te,ie,q,Me)}function yr(C,G,te){G.isScene!==!0&&(G=Ee);const ie=D.get(C),q=u.state.lights,Me=u.state.shadowsArray,Le=q.state.version,Ne=K.getParameters(C,q.state,Me,G,te),Fe=K.getProgramCacheKey(Ne);let $e=ie.programs;ie.environment=C.isMeshStandardMaterial?G.environment:null,ie.fog=G.fog,ie.envMap=(C.isMeshStandardMaterial?F:_).get(C.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,$e===void 0&&(C.addEventListener("dispose",ze),$e=new Map,ie.programs=$e);let qe=$e.get(Fe);if(qe!==void 0){if(ie.currentProgram===qe&&ie.lightsStateVersion===Le)return Pa(C,Ne),qe}else Ne.uniforms=K.getUniforms(C),C.onBeforeCompile(Ne,x),qe=K.acquireProgram(Ne,Fe),$e.set(Fe,qe),ie.uniforms=Ne.uniforms;const Ve=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ve.clippingPlanes=oe.uniform),Pa(C,Ne),ie.needsLights=Qc(C),ie.lightsStateVersion=Le,ie.needsLights&&(Ve.ambientLightColor.value=q.state.ambient,Ve.lightProbe.value=q.state.probe,Ve.directionalLights.value=q.state.directional,Ve.directionalLightShadows.value=q.state.directionalShadow,Ve.spotLights.value=q.state.spot,Ve.spotLightShadows.value=q.state.spotShadow,Ve.rectAreaLights.value=q.state.rectArea,Ve.ltc_1.value=q.state.rectAreaLTC1,Ve.ltc_2.value=q.state.rectAreaLTC2,Ve.pointLights.value=q.state.point,Ve.pointLightShadows.value=q.state.pointShadow,Ve.hemisphereLights.value=q.state.hemi,Ve.directionalShadowMap.value=q.state.directionalShadowMap,Ve.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ve.spotShadowMap.value=q.state.spotShadowMap,Ve.spotLightMatrix.value=q.state.spotLightMatrix,Ve.spotLightMap.value=q.state.spotLightMap,Ve.pointShadowMap.value=q.state.pointShadowMap,Ve.pointShadowMatrix.value=q.state.pointShadowMatrix),ie.currentProgram=qe,ie.uniformsList=null,qe}function Ca(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=is.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function Pa(C,G){const te=D.get(C);te.outputColorSpace=G.outputColorSpace,te.batching=G.batching,te.batchingColor=G.batchingColor,te.instancing=G.instancing,te.instancingColor=G.instancingColor,te.instancingMorph=G.instancingMorph,te.skinning=G.skinning,te.morphTargets=G.morphTargets,te.morphNormals=G.morphNormals,te.morphColors=G.morphColors,te.morphTargetsCount=G.morphTargetsCount,te.numClippingPlanes=G.numClippingPlanes,te.numIntersection=G.numClipIntersection,te.vertexAlphas=G.vertexAlphas,te.vertexTangents=G.vertexTangents,te.toneMapping=G.toneMapping}function Jc(C,G,te,ie,q){G.isScene!==!0&&(G=Ee),S.resetTextureUnits();const Me=G.fog,Le=ie.isMeshStandardMaterial?G.environment:null,Ne=P===null?x.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ui,Fe=(ie.isMeshStandardMaterial?F:_).get(ie.envMap||Le),$e=ie.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,qe=!!te.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ve=!!te.morphAttributes.position,nt=!!te.morphAttributes.normal,ot=!!te.morphAttributes.color;let vt=Vn;ie.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(vt=x.toneMapping);const gt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,it=gt!==void 0?gt.length:0,Ge=D.get(ie),Lt=u.state.lights;if(J===!0&&(Q===!0||C!==M)){const Ot=C===M&&ie.id===b;oe.setState(ie,C,Ot)}let at=!1;ie.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Lt.state.version||Ge.outputColorSpace!==Ne||q.isBatchedMesh&&Ge.batching===!1||!q.isBatchedMesh&&Ge.batching===!0||q.isBatchedMesh&&Ge.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ge.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ge.instancing===!1||!q.isInstancedMesh&&Ge.instancing===!0||q.isSkinnedMesh&&Ge.skinning===!1||!q.isSkinnedMesh&&Ge.skinning===!0||q.isInstancedMesh&&Ge.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ge.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ge.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ge.instancingMorph===!1&&q.morphTexture!==null||Ge.envMap!==Fe||ie.fog===!0&&Ge.fog!==Me||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==oe.numPlanes||Ge.numIntersection!==oe.numIntersection)||Ge.vertexAlphas!==$e||Ge.vertexTangents!==qe||Ge.morphTargets!==Ve||Ge.morphNormals!==nt||Ge.morphColors!==ot||Ge.toneMapping!==vt||Ge.morphTargetsCount!==it)&&(at=!0):(at=!0,Ge.__version=ie.version);let on=Ge.currentProgram;at===!0&&(on=yr(ie,G,q));let ui=!1,Zt=!1,Vi=!1;const ft=on.getUniforms(),Qt=Ge.uniforms;if(ee.useProgram(on.program)&&(ui=!0,Zt=!0,Vi=!0),ie.id!==b&&(b=ie.id,Zt=!0),ui||M!==C){ee.buffers.depth.getReversed()?(de.copy(C.projectionMatrix),oh(de),ah(de),ft.setValue(L,"projectionMatrix",de)):ft.setValue(L,"projectionMatrix",C.projectionMatrix),ft.setValue(L,"viewMatrix",C.matrixWorldInverse);const Gt=ft.map.cameraPosition;Gt!==void 0&&Gt.setValue(L,Pe.setFromMatrixPosition(C.matrixWorld)),ce.logarithmicDepthBuffer&&ft.setValue(L,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&ft.setValue(L,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Zt=!0,Vi=!0)}if(q.isSkinnedMesh){ft.setOptional(L,q,"bindMatrix"),ft.setOptional(L,q,"bindMatrixInverse");const Ot=q.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),ft.setValue(L,"boneTexture",Ot.boneTexture,S))}q.isBatchedMesh&&(ft.setOptional(L,q,"batchingTexture"),ft.setValue(L,"batchingTexture",q._matricesTexture,S),ft.setOptional(L,q,"batchingIdTexture"),ft.setValue(L,"batchingIdTexture",q._indirectTexture,S),ft.setOptional(L,q,"batchingColorTexture"),q._colorsTexture!==null&&ft.setValue(L,"batchingColorTexture",q._colorsTexture,S));const en=te.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&Ie.update(q,te,on),(Zt||Ge.receiveShadow!==q.receiveShadow)&&(Ge.receiveShadow=q.receiveShadow,ft.setValue(L,"receiveShadow",q.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Qt.envMap.value=Fe,Qt.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&G.environment!==null&&(Qt.envMapIntensity.value=G.environmentIntensity),Zt&&(ft.setValue(L,"toneMappingExposure",x.toneMappingExposure),Ge.needsLights&&Kc(Qt,Vi),Me&&ie.fog===!0&&Z.refreshFogUniforms(Qt,Me),Z.refreshMaterialUniforms(Qt,ie,W,$,u.state.transmissionRenderTarget[C.id]),is.upload(L,Ca(Ge),Qt,S)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(is.upload(L,Ca(Ge),Qt,S),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&ft.setValue(L,"center",q.center),ft.setValue(L,"modelViewMatrix",q.modelViewMatrix),ft.setValue(L,"normalMatrix",q.normalMatrix),ft.setValue(L,"modelMatrix",q.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const Ot=ie.uniformsGroups;for(let Gt=0,_s=Ot.length;Gt<_s;Gt++){const $n=Ot[Gt];H.update($n,on),H.bind($n,on)}}return on}function Kc(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Qc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(C,G,te){const ie=D.get(C);ie.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),D.get(C.texture).__webglTexture=G,D.get(C.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:te,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,G){const te=D.get(C);te.__webglFramebuffer=G,te.__useDefaultFramebuffer=G===void 0};const eu=L.createFramebuffer();this.setRenderTarget=function(C,G=0,te=0){P=C,w=G,A=te;let ie=!0,q=null,Me=!1,Le=!1;if(C){const Fe=D.get(C);if(Fe.__useDefaultFramebuffer!==void 0)ee.bindFramebuffer(L.FRAMEBUFFER,null),ie=!1;else if(Fe.__webglFramebuffer===void 0)S.setupRenderTarget(C);else if(Fe.__hasExternalTextures)S.rebindTextures(C,D.get(C.texture).__webglTexture,D.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Ve=C.depthTexture;if(Fe.__boundDepthTexture!==Ve){if(Ve!==null&&D.has(Ve)&&(C.width!==Ve.image.width||C.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(C)}}const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Le=!0);const qe=D.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(qe[G])?q=qe[G][te]:q=qe[G],Me=!0):C.samples>0&&S.useMultisampledRTT(C)===!1?q=D.get(C).__webglMultisampledFramebuffer:Array.isArray(qe)?q=qe[te]:q=qe,U.copy(C.viewport),Y.copy(C.scissor),N=C.scissorTest}else U.copy(xe).multiplyScalar(W).floor(),Y.copy(fe).multiplyScalar(W).floor(),N=De;if(te!==0&&(q=eu),ee.bindFramebuffer(L.FRAMEBUFFER,q)&&ie&&ee.drawBuffers(C,q),ee.viewport(U),ee.scissor(Y),ee.setScissorTest(N),Me){const Fe=D.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+G,Fe.__webglTexture,te)}else if(Le){const Fe=D.get(C.texture),$e=G;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.__webglTexture,te,$e)}else if(C!==null&&te!==0){const Fe=D.get(C.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Fe.__webglTexture,te)}b=-1},this.readRenderTargetPixels=function(C,G,te,ie,q,Me,Le){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=D.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){ee.bindFramebuffer(L.FRAMEBUFFER,Ne);try{const Fe=C.texture,$e=Fe.format,qe=Fe.type;if(!ce.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-ie&&te>=0&&te<=C.height-q&&L.readPixels(G,te,ie,q,Be.convert($e),Be.convert(qe),Me)}finally{const Fe=P!==null?D.get(P).__webglFramebuffer:null;ee.bindFramebuffer(L.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(C,G,te,ie,q,Me,Le){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=D.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne)if(G>=0&&G<=C.width-ie&&te>=0&&te<=C.height-q){ee.bindFramebuffer(L.FRAMEBUFFER,Ne);const Fe=C.texture,$e=Fe.format,qe=Fe.type;if(!ce.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ve=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ve),L.bufferData(L.PIXEL_PACK_BUFFER,Me.byteLength,L.STREAM_READ),L.readPixels(G,te,ie,q,Be.convert($e),Be.convert(qe),0);const nt=P!==null?D.get(P).__webglFramebuffer:null;ee.bindFramebuffer(L.FRAMEBUFFER,nt);const ot=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await sh(L,ot,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ve),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Me),L.deleteBuffer(Ve),L.deleteSync(ot),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,G=null,te=0){const ie=Math.pow(2,-te),q=Math.floor(C.image.width*ie),Me=Math.floor(C.image.height*ie),Le=G!==null?G.x:0,Ne=G!==null?G.y:0;S.setTexture2D(C,0),L.copyTexSubImage2D(L.TEXTURE_2D,te,0,0,Le,Ne,q,Me),ee.unbindTexture()};const tu=L.createFramebuffer(),nu=L.createFramebuffer();this.copyTextureToTexture=function(C,G,te=null,ie=null,q=0,Me=null){Me===null&&(q!==0?(ns("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=q,q=0):Me=0);let Le,Ne,Fe,$e,qe,Ve,nt,ot,vt;const gt=C.isCompressedTexture?C.mipmaps[Me]:C.image;if(te!==null)Le=te.max.x-te.min.x,Ne=te.max.y-te.min.y,Fe=te.isBox3?te.max.z-te.min.z:1,$e=te.min.x,qe=te.min.y,Ve=te.isBox3?te.min.z:0;else{const en=Math.pow(2,-q);Le=Math.floor(gt.width*en),Ne=Math.floor(gt.height*en),C.isDataArrayTexture?Fe=gt.depth:C.isData3DTexture?Fe=Math.floor(gt.depth*en):Fe=1,$e=0,qe=0,Ve=0}ie!==null?(nt=ie.x,ot=ie.y,vt=ie.z):(nt=0,ot=0,vt=0);const it=Be.convert(G.format),Ge=Be.convert(G.type);let Lt;G.isData3DTexture?(S.setTexture3D(G,0),Lt=L.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(S.setTexture2DArray(G,0),Lt=L.TEXTURE_2D_ARRAY):(S.setTexture2D(G,0),Lt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,G.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,G.unpackAlignment);const at=L.getParameter(L.UNPACK_ROW_LENGTH),on=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ui=L.getParameter(L.UNPACK_SKIP_PIXELS),Zt=L.getParameter(L.UNPACK_SKIP_ROWS),Vi=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,gt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,gt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,$e),L.pixelStorei(L.UNPACK_SKIP_ROWS,qe),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ve);const ft=C.isDataArrayTexture||C.isData3DTexture,Qt=G.isDataArrayTexture||G.isData3DTexture;if(C.isDepthTexture){const en=D.get(C),Ot=D.get(G),Gt=D.get(en.__renderTarget),_s=D.get(Ot.__renderTarget);ee.bindFramebuffer(L.READ_FRAMEBUFFER,Gt.__webglFramebuffer),ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,_s.__webglFramebuffer);for(let $n=0;$n<Fe;$n++)ft&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,D.get(C).__webglTexture,q,Ve+$n),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,D.get(G).__webglTexture,Me,vt+$n)),L.blitFramebuffer($e,qe,Le,Ne,nt,ot,Le,Ne,L.DEPTH_BUFFER_BIT,L.NEAREST);ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(q!==0||C.isRenderTargetTexture||D.has(C)){const en=D.get(C),Ot=D.get(G);ee.bindFramebuffer(L.READ_FRAMEBUFFER,tu),ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,nu);for(let Gt=0;Gt<Fe;Gt++)ft?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,en.__webglTexture,q,Ve+Gt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,en.__webglTexture,q),Qt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ot.__webglTexture,Me,vt+Gt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ot.__webglTexture,Me),q!==0?L.blitFramebuffer($e,qe,Le,Ne,nt,ot,Le,Ne,L.COLOR_BUFFER_BIT,L.NEAREST):Qt?L.copyTexSubImage3D(Lt,Me,nt,ot,vt+Gt,$e,qe,Le,Ne):L.copyTexSubImage2D(Lt,Me,nt,ot,$e,qe,Le,Ne);ee.bindFramebuffer(L.READ_FRAMEBUFFER,null),ee.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Qt?C.isDataTexture||C.isData3DTexture?L.texSubImage3D(Lt,Me,nt,ot,vt,Le,Ne,Fe,it,Ge,gt.data):G.isCompressedArrayTexture?L.compressedTexSubImage3D(Lt,Me,nt,ot,vt,Le,Ne,Fe,it,gt.data):L.texSubImage3D(Lt,Me,nt,ot,vt,Le,Ne,Fe,it,Ge,gt):C.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,Me,nt,ot,Le,Ne,it,Ge,gt.data):C.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,Me,nt,ot,gt.width,gt.height,it,gt.data):L.texSubImage2D(L.TEXTURE_2D,Me,nt,ot,Le,Ne,it,Ge,gt);L.pixelStorei(L.UNPACK_ROW_LENGTH,at),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,on),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ui),L.pixelStorei(L.UNPACK_SKIP_ROWS,Zt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Vi),Me===0&&G.generateMipmaps&&L.generateMipmap(Lt),ee.unbindTexture()},this.copyTextureToTexture3D=function(C,G,te=null,ie=null,q=0){return ns('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,G,te,ie,q)},this.initRenderTarget=function(C){D.get(C).__webglFramebuffer===void 0&&S.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?S.setTextureCube(C,0):C.isData3DTexture?S.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?S.setTexture2DArray(C,0):S.setTexture2D(C,0),ee.unbindTexture()},this.resetState=function(){w=0,A=0,P=null,ee.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const R={paper:"#efe0c2",paperShade:"#e8d3ac",kraft:"#dcc39a",cutEdge:"#fbf6ea",ochre:"#d9a441",mustard:"#dca848",terracotta:"#b9603f",rose:"#c98374",sage:"#8e9a5b",pine:"#4f6b4a",teal:"#5e9c9a",ink:"#5a3a28",indigoInk:"#2f3b6e",umber:"#2a1a12",lantern:"#ffc45a",snow:"#f6efe4"},Hl={bookshelf:{day:{background:"#d6c4ac",fogColor:"#d6c4ac",keyColor:"#ffd49c",keyIntensity:2.45,fillColor:"#e9d6be",fillIntensity:.9,hemiSky:"#fff0d8",hemiGround:"#a87f55",hemiIntensity:.65,accentColor:"#ffc45a",accentIntensity:1.2,exposure:.9,glowIntensity:.55},night:{background:"#1e1510",fogColor:"#1e1510",keyColor:"#7e97c4",keyIntensity:.68,fillColor:"#48526e",fillIntensity:.42,hemiSky:"#58698c",hemiGround:"#3d281a",hemiIntensity:.36,accentColor:"#ffb74d",accentIntensity:3.6,exposure:.86,glowIntensity:2.5}},book:{day:{background:"#ece3d4",fogColor:"#ece3d4",keyColor:"#ffd6a3",keyIntensity:2.55,fillColor:"#f4e0c8",fillIntensity:1.05,hemiSky:"#fff3df",hemiGround:"#b88f64",hemiIntensity:.64,accentColor:"#ffc45a",accentIntensity:.35,exposure:.9,glowIntensity:.4},night:{background:"#241e27",fogColor:"#241e27",keyColor:"#8ba4d6",keyIntensity:.85,fillColor:"#5d6b8e",fillIntensity:.55,hemiSky:"#6375a1",hemiGround:"#3d291d",hemiIntensity:.44,accentColor:"#ffc45a",accentIntensity:2.1,exposure:.86,glowIntensity:2.2}},world:{day:{background:"#5c3e28",fogColor:"#5c3e28",keyColor:"#ffd49e",keyIntensity:2.75,fillColor:"#f3cfa6",fillIntensity:.92,hemiSky:"#ffe9cc",hemiGround:"#b98858",hemiIntensity:.48,accentColor:"#ffc45a",accentIntensity:.85,exposure:.85,glowIntensity:.28},night:{background:"#241711",fogColor:"#241711",keyColor:"#7a95cc",keyIntensity:.72,fillColor:"#485575",fillIntensity:.42,hemiSky:"#586996",hemiGround:"#2f1e14",hemiIntensity:.3,accentColor:"#ffc45a",accentIntensity:3.1,exposure:.86,glowIntensity:2.8}}},pr=[{id:"east-asia",volume:"01",title:"《东方物语》",spineTitle:"East Asia",subtitle:"East Asia Pop-Up Trails",regionEn:"East Asia",coverColor:R.terracotta,spineColor:"#b9603f",ribbonColor:"#a84f30",scenes:[{id:"kyoto-shrine",captionEn:"kyoto shrine",name:"京都 · 伏见鸟居",coords:"34.9671° N, 135.7727° E",wallTheme:"sakura",floorColor:"#f1e4cb",weather:"sakura",defaultNight:!1,hasCanal:!1,backdropStyle:"hills",keepsake:{id:"sakura-scrap",name:"压花垂枝樱",glyph:"🌸",kind:"sakura"},scrapPos:[1.65,2.35],bookProps:[{type:"pagoda",x:.62,z:1.56,rot:.25,scale:.56},{type:"torii",x:.98,z:.98,rot:.78,scale:.62},{type:"torii",x:1.24,z:1.24,rot:.78,scale:.52},{type:"sakuraTree",x:1.56,z:.68,rot:.3,scale:.68},{type:"stoneLantern",x:1.38,z:1.52,rot:0,scale:.65}],worldProps:[{type:"pagoda",x:-3.2,z:-2.9,rot:.25,scale:1.25},{type:"torii",x:-1.1,z:-1.1,rot:.16,scale:1.15},{type:"torii",x:-.65,z:.35,rot:.1,scale:1.08},{type:"torii",x:-.2,z:1.85,rot:.04,scale:1.02},{type:"sakuraTree",x:2.5,z:-2.1,rot:.4,scale:1.35},{type:"sakuraTree",x:-3.5,z:1.7,rot:1.1,scale:1.18},{type:"sakuraTree",x:3.1,z:2.3,rot:2,scale:1.22},{type:"stoneLantern",x:1,z:1.1,rot:0,scale:1.1},{type:"stoneLantern",x:-2.1,z:.1,rot:0,scale:1.05},{type:"bench",x:2.2,z:.2,rot:-.6,scale:1}],spots:[{id:"torii-tunnel",name:"千本朱红鸟居",coords:"34.9671° N, 135.7727° E",glyph:"⛩",pos:[-.6,.7],story:"层叠的赤陶色刀模折纸鸟居沿着参道排开，暖阳穿过纸缝落下柔和长影。"},{id:"sakura-hill",name:"山坡垂枝樱",coords:"34.9679° N, 135.7741° E",glyph:"🌸",pos:[2.4,-1.8],story:"粉灰玫瑰色的交叉剪纸樱树有着米白纸芯切边，细碎花瓣正沿着石阶飘落。"},{id:"stone-lantern",name:"苔藓石灯笼",coords:"34.9665° N, 135.7718° E",glyph:"🏮",pos:[1.1,1.3],story:"站在石灯笼旁歇脚，若切换到星夜模式，暖黄纸光会温柔照亮整片石板路。"}]},{id:"dali-erhai",captionEn:"dali erhai",name:"大理 · 洱海廊桥",coords:"25.7865° N, 100.1682° E",wallTheme:"day",floorColor:"#efe2c7",weather:"breeze",defaultNight:!1,hasCanal:!0,backdropStyle:"mountains",keepsake:{id:"camellia-scrap",name:"苍山风干茶花",glyph:"🌺",kind:"sakura"},scrapPos:[-2.1,2.2],bookProps:[{type:"daliPagoda",x:.62,z:.74,rot:.78,scale:.6},{type:"veniceBridge",x:1.15,z:1.24,rot:-.78,scale:.56},{type:"sailboat",x:1.48,z:1.45,rot:-.4,scale:.55},{type:"sakuraTree",x:1.52,z:.64,rot:.2,scale:.62}],worldProps:[{type:"daliPagoda",x:-3,z:-2.4,rot:.2,scale:1.25},{type:"veniceBridge",x:.2,z:.2,rot:0,scale:1.2},{type:"teaHouse",x:-2.8,z:1.4,rot:1.1,scale:1.1},{type:"pier",x:2.4,z:-1.8,rot:.3,scale:1.15},{type:"sailboat",x:.4,z:2.6,rot:-.3,scale:1.1},{type:"sakuraTree",x:2.8,z:1.4,rot:.4,scale:1.25},{type:"streetLamp",x:-1.4,z:2.1,rot:0,scale:1.1},{type:"bench",x:2.4,z:2.6,rot:-.4,scale:1}],spots:[{id:"three-pagodas",name:"崇圣三塔影",coords:"25.7086° N, 100.1475° E",glyph:"🗼",pos:[-2.6,-1.8],story:"白卡纸剪裁的三座高塔矗立在苍山剪影前，风吹过洱海面泛起细密纸纹。"},{id:"erhai-bridge",name:"洱海白石拱桥",coords:"25.7865° N, 100.1682° E",glyph:"🌉",pos:[.2,.3],story:"走过双曲纸拱桥，水鸭青色的湖水轻轻托起一只白色折纸渔舟。"},{id:"wind-pier",name:"风花雪月木栈桥",coords:"25.7851° N, 100.1704° E",glyph:"⛵",pos:[2.3,-1.5],story:"海风吹动经幡与帆布，把高原阳光折成金黄的一角。"}]},{id:"guilin-river",captionEn:"guilin karst",name:"桂林 · 漓江烟雨",coords:"25.2736° N, 110.2900° E",wallTheme:"day",floorColor:"#e9e2ca",weather:"leaves",defaultNight:!1,hasCanal:!0,backdropStyle:"mountains",keepsake:{id:"bamboo-scrap",name:"漓江青竹叶",glyph:"🍃",kind:"leaf"},scrapPos:[-1.8,-1.4],bookProps:[{type:"karstPeak",x:.62,z:.72,rot:.6,scale:.68},{type:"karstPeak",x:1.38,z:.65,rot:-.2,scale:.56},{type:"teaHouse",x:.72,z:1.44,rot:.78,scale:.52},{type:"gondola",x:1.32,z:1.36,rot:.6,scale:.6}],worldProps:[{type:"karstPeak",x:-3.2,z:-2.6,rot:.2,scale:1.45},{type:"karstPeak",x:3,z:-2.4,rot:-.4,scale:1.35},{type:"teaHouse",x:-2.8,z:1.2,rot:1.2,scale:1.15},{type:"veniceBridge",x:.2,z:-.4,rot:0,scale:1.15},{type:"gondola",x:.1,z:2.2,rot:.1,scale:1.15},{type:"bambooCluster",x:-3.4,z:-.2,rot:.3,scale:1.3},{type:"bambooCluster",x:2.8,z:1.6,rot:.8,scale:1.25},{type:"hangingLantern",x:-1.6,z:1.8,rot:0,scale:1.1}],spots:[{id:"karst-peaks",name:"喀斯特峰林",coords:"25.2736° N, 110.2900° E",glyph:"⛰",pos:[-2.8,-2],story:"层叠鼠尾草绿卡纸剪出的奇峰在远景立起，宛如立体水墨折纸画卷。"},{id:"bamboo-raft",name:"漓江竹筏渡口",coords:"25.2719° N, 110.2921° E",glyph:"🛶",pos:[.2,2],story:"深棕色纸竹筏顺着青绿水面飘荡，竹竿轻点水面荡开纸纹涟漪。"},{id:"river-pavilion",name:"江畔听雨亭",coords:"25.2748° N, 110.2886° E",glyph:"🍵",pos:[-2.3,1.3],story:"竹林旁的纸艺茶亭点着微弱灯火，正适合写下一段江南山水记。"}]},{id:"kamakura-coast",captionEn:"kamakura coast",name:"镰仓 · 海边电车",coords:"35.3067° N, 139.4956° E",wallTheme:"day",floorColor:"#eedec0",weather:"breeze",defaultNight:!1,hasCanal:!1,backdropStyle:"hills",keepsake:{id:"shell-scrap",name:"湘南海滨贝壳",glyph:"🐚",kind:"shell"},scrapPos:[2.1,2.3],bookProps:[{type:"tram",x:.98,z:1.08,rot:.78,scale:.65},{type:"lighthouse",x:.56,z:1.56,rot:.2,scale:.54},{type:"sakuraTree",x:1.54,z:.68,rot:.6,scale:.62},{type:"fence",x:1.25,z:1.38,rot:-.78,scale:.6}],worldProps:[{type:"tram",x:-.6,z:-.3,rot:.15,scale:1.25},{type:"lighthouse",x:3.2,z:-2.5,rot:0,scale:1.15},{type:"pier",x:2.5,z:1.6,rot:.4,scale:1.2},{type:"sailboat",x:3.4,z:3,rot:-.5,scale:1.1},{type:"bench",x:-2.4,z:1.2,rot:.2,scale:1.05},{type:"pineTree",x:-3.2,z:-2.2,rot:.3,scale:1.25},{type:"fence",x:1.2,z:-1.8,rot:0,scale:1.1}],spots:[{id:"enoden-tram",name:"江之电车厢",coords:"35.3067° N, 139.4956° E",glyph:"🚃",pos:[-.5,.4],story:"松绿与奶油色拼接的复古电车停靠在海岸路口，等一阵海风吹过栅栏。"},{id:"shonan-pier",name:"湘南木栈桥",coords:"35.3052° N, 139.4970° E",glyph:"⛵",pos:[2.3,1.8],story:"蓝绿色折纸海面上停泊着一艘白色帆船，远处的海浪以锯齿状纸边铺开。"},{id:"cape-beacon",name:"海角灯塔",coords:"35.3080° N, 139.4932° E",glyph:"🗼",pos:[3,-2],story:"灯塔顶端的暖黄光束缓缓旋转，记录着太平洋岸边每一次日落。"}]}]},{id:"europe",volume:"02",title:"《欧陆风旅》",spineTitle:"Europe",subtitle:"European Paper Sketchbook",regionEn:"Europe",coverColor:R.ochre,spineColor:"#d9a441",ribbonColor:"#b3832b",scenes:[{id:"venice-canal",captionEn:"venice canal",name:"威尼斯 · 运河石桥",coords:"45.4380° N, 12.3359° E",wallTheme:"canal",floorColor:"#f1e4cb",weather:"sakura",defaultNight:!1,hasCanal:!0,backdropStyle:"skyline",keepsake:{id:"gondola-petal",name:"运河岸落花瓣",glyph:"🌸",kind:"sakura"},scrapPos:[2.1,2.2],bookProps:[{type:"palazzo",x:.64,z:.72,rot:.78,scale:.56},{type:"veniceBridge",x:1.02,z:1.08,rot:-.78,scale:.62},{type:"gondola",x:1.38,z:1.38,rot:.78,scale:.65},{type:"sakuraTree",x:1.48,z:.68,rot:.2,scale:.55}],worldProps:[{type:"palazzo",x:-2.6,z:-1.8,rot:.15,scale:1.3},{type:"palazzo",x:-2.9,z:1.5,rot:1.45,scale:1.15},{type:"chalet",x:2.7,z:-1.9,rot:-.25,scale:1.25},{type:"veniceBridge",x:0,z:0,rot:0,scale:1.35},{type:"gondola",x:-.2,z:2.3,rot:-.25,scale:1.25},{type:"gondola",x:.35,z:-2.3,rot:.2,scale:1.12},{type:"pineTree",x:-3.6,z:-.2,rot:.3,scale:1.2},{type:"pineTree",x:3.4,z:1.1,rot:.9,scale:1.25},{type:"streetLamp",x:1.9,z:1.4,rot:0,scale:1.1}],spots:[{id:"rialto-arch",name:"里亚托白石拱桥",coords:"45.4380° N, 12.3359° E",glyph:"🌉",pos:[0,.2],story:"带阶梯折痕的弧形石桥跨过水鸭青色运河，是整座城市风景交汇的中心。"},{id:"gondola-dock",name:"贡多拉船坞",coords:"45.4373° N, 12.3372° E",glyph:"🛶",pos:[1.6,2],story:"两只剪纸贡多拉静静停泊在运河水面上，岸边石阶映出金色阳光。"},{id:"rose-palazzo",name:"粉陶与赭石小屋",coords:"45.4388° N, 12.3346° E",glyph:"🏛",pos:[-2.2,-1.2],story:"山墙屋顶与四格深框小窗用厚卡纸逐层拼贴，带着浓厚手工纸纤维肌理。"}]},{id:"hallstatt-night",captionEn:"hallstatt village",name:"哈尔施塔特 · 湖畔星夜",coords:"47.5622° N, 13.6493° E",wallTheme:"night",floorColor:"#efe1c4",weather:"fireflies",defaultNight:!0,hasCanal:!1,backdropStyle:"mountains",keepsake:{id:"ginkgo-scrap",name:"湖畔压花银杏叶",glyph:"🍂",kind:"ginkgo"},scrapPos:[1.45,2.25],bookProps:[{type:"chalet",x:.72,z:.78,rot:.78,scale:.58},{type:"bellTower",x:1.32,z:.7,rot:.6,scale:.52},{type:"pineTree",x:1.48,z:1.32,rot:.2,scale:.62},{type:"streetLamp",x:.96,z:1.32,rot:0,scale:.68}],worldProps:[{type:"chalet",x:-2.4,z:.6,rot:.55,scale:1.25},{type:"chalet",x:2.2,z:.4,rot:-.6,scale:1.2},{type:"bellTower",x:-2.9,z:-2.5,rot:.2,scale:1.2},{type:"palazzo",x:2.5,z:-2.4,rot:-.4,scale:1.1},{type:"pineTree",x:-3.5,z:-.8,rot:.3,scale:1.3},{type:"pineTree",x:3.4,z:-.9,rot:.9,scale:1.25},{type:"pineTree",x:3.1,z:2.3,rot:.4,scale:1.15},{type:"streetLamp",x:-1.1,z:1.3,rot:0,scale:1.2},{type:"streetLamp",x:1,z:1.2,rot:0,scale:1.2}],spots:[{id:"lakeside-pier",name:"星夜灯笼石板路",coords:"47.5622° N, 13.6493° E",glyph:"🏮",pos:[-.9,1.5],story:"路灯与提灯在石板小径上泼出融融暖光，远方是深褐色的剪纸重峦。"},{id:"hallstatt-church",name:"尖顶湖畔教堂",coords:"47.5629° N, 13.6481° E",glyph:"🔔",pos:[-2.5,-1.9],story:"暖黄格窗在夜色山谷里亮起，金色萤火虫环绕尖顶缓缓盘旋。"},{id:"alpine-cottage",name:"山坡木屋窗口",coords:"47.5615° N, 13.6502° E",glyph:"🏡",pos:[2,.8],story:"推门是扑面而来的壁炉暖意，桌上正摊开着这本湖畔旅行明信片。"}]},{id:"dutch-windmill",captionEn:"dutch windmill",name:"荷兰 · 风车花田",coords:"51.8830° N, 4.6305° E",wallTheme:"day",floorColor:"#dfe4c3",weather:"breeze",defaultNight:!1,hasCanal:!1,backdropStyle:"hills",keepsake:{id:"tulip-scrap",name:"风干彩纸郁金香",glyph:"🌷",kind:"sakura"},scrapPos:[1.9,1.9],bookProps:[{type:"windmill",x:.88,z:.88,rot:.78,scale:.62},{type:"tulipPatch",x:1.38,z:.72,rot:.2,scale:.65},{type:"tulipPatch",x:.72,z:1.42,rot:.8,scale:.65},{type:"fence",x:1.35,z:1.35,rot:-.78,scale:.6}],worldProps:[{type:"windmill",x:-1.8,z:-2.1,rot:.4,scale:1.35},{type:"chalet",x:2.6,z:-2.4,rot:-.4,scale:1.05},{type:"tulipPatch",x:.6,z:1.8,rot:.1,scale:1.25},{type:"tulipPatch",x:2.4,z:1.5,rot:.5,scale:1.25},{type:"tulipPatch",x:-2.8,z:1.9,rot:-.3,scale:1.2},{type:"fence",x:-.6,z:2.6,rot:.15,scale:1.15},{type:"bench",x:1.6,z:-.2,rot:-.6,scale:1}],spots:[{id:"kinderdijk-mill",name:"转动的木风车",coords:"51.8830° N, 4.6305° E",glyph:"🌬",pos:[-1.5,-1.6],story:"四片格子纸风车翼随着海风稳定旋转，像在替大地翻动书页。"},{id:"tulip-rows",name:"彩纸郁金香田",coords:"51.8822° N, 4.6320° E",glyph:"🌷",pos:[2.2,1.5],story:"赤陶、明黄与粉玫瑰色的折纸花苞排成规整几何阵列。"},{id:"meadow-fence",name:"风车田木篱",coords:"51.8841° N, 4.6290° E",glyph:"🚲",pos:[-.4,2.3],story:"沿着运河堤岸散步，整个低地平原都像一张摊开的草绿彩纸。"}]},{id:"tuscan-piazza",captionEn:"tuscan piazza",name:"托斯卡纳 · 星夜广场",coords:"43.3188° N, 11.3308° E",wallTheme:"night",floorColor:"#e2cba7",weather:"fireflies",defaultNight:!0,hasCanal:!1,backdropStyle:"hills",keepsake:{id:"olive-scrap",name:"托斯卡纳橄榄枝",glyph:"🌿",kind:"leaf"},scrapPos:[-1.8,2.1],bookProps:[{type:"bellTower",x:.68,z:.72,rot:.78,scale:.56},{type:"fountain",x:1.08,z:1.08,rot:0,scale:.62},{type:"cypressTree",x:1.48,z:.68,rot:0,scale:.64},{type:"cypressTree",x:.64,z:1.48,rot:0,scale:.64}],worldProps:[{type:"bellTower",x:-2.6,z:-2.4,rot:.3,scale:1.25},{type:"fountain",x:.4,z:.4,rot:0,scale:1.2},{type:"palazzo",x:2.8,z:-2,rot:-.5,scale:1.1},{type:"cypressTree",x:-3.2,z:.8,rot:0,scale:1.3},{type:"cypressTree",x:3.1,z:1.2,rot:0,scale:1.25},{type:"bench",x:-1.4,z:2.2,rot:.4,scale:1.05},{type:"streetLamp",x:1.8,z:2,rot:0,scale:1.1}],spots:[{id:"siena-tower",name:"红砖钟楼",coords:"43.3188° N, 11.3308° E",glyph:"🔔",pos:[-2.2,-1.8],story:"古老的赤陶钟楼静静守望广场，星光下每一道折角都格外清晰。"},{id:"stone-fountain",name:"月光喷泉",coords:"43.3182° N, 11.3315° E",glyph:"⛲",pos:[.4,.7],story:"广场中央的折纸喷泉水盘里，映着微光与夏夜流萤。"},{id:"cypress-walk",name:"丝柏石阶",coords:"43.3176° N, 11.3301° E",glyph:"🌲",pos:[2.7,1.4],story:"高挑瘦削的深绿丝柏剪影，是托斯卡纳夜晚最经典的坐标。"}]}]},{id:"wild-earth",volume:"03",title:"《荒野星海》",spineTitle:"Wild Earth",subtitle:"Wild Earth Expedition",regionEn:"Wild Earth",coverColor:R.pine,spineColor:"#4f6b4a",ribbonColor:"#3a5236",scenes:[{id:"chuanxi-snow",captionEn:"gongga snow camp",name:"川西 · 贡嘎雪营",coords:"29.5967° N, 101.8781° E",wallTheme:"snow",floorColor:"#f1ede4",weather:"snow",defaultNight:!1,hasCanal:!1,backdropStyle:"mountains",keepsake:{id:"snow-scrap",name:"贡嘎纸雪晶",glyph:"❄",kind:"snowflake"},scrapPos:[1.6,2.3],bookProps:[{type:"snowPeak",x:.62,z:.72,rot:.3,scale:.68},{type:"tent",x:.96,z:1.05,rot:.78,scale:.58},{type:"campfire",x:1.24,z:1.28,rot:0,scale:.58},{type:"pineTree",x:1.48,z:.68,rot:.2,scale:.64}],worldProps:[{type:"snowPeak",x:-3,z:-2.6,rot:.2,scale:1.45},{type:"snowPeak",x:2.9,z:-2.8,rot:-.3,scale:1.35},{type:"tent",x:-1.4,z:-.8,rot:.4,scale:1.25},{type:"campfire",x:.4,z:.4,rot:0,scale:1.2},{type:"pineTree",x:2.6,z:.8,rot:.2,scale:1.3},{type:"pineTree",x:-3.2,z:1.8,rot:.6,scale:1.25},{type:"stoneLantern",x:1.8,z:2.2,rot:0,scale:1.05}],spots:[{id:"gongga-ridge",name:"日照金山雪脊",coords:"29.5967° N, 101.8781° E",glyph:"🏔",pos:[-2.4,-2],story:"象牙白与冰灰折纸裁出的贡嘎主峰，在清晨金光里棱角分明。"},{id:"meadow-camp",name:"高山营地篝火",coords:"29.5941° N, 101.8752° E",glyph:"⛺",pos:[.3,.6],story:"赭石帐篷旁升起跳动的纸焰，寒风里也能守住一方温暖。"},{id:"fir-trail",name:"冷杉积雪坡",coords:"29.5920° N, 101.8798° E",glyph:"❄",pos:[2.2,1.6],story:"层叠深松绿的剪纸冷杉林间，片片白纸雪花缓慢飘落。"}]},{id:"sahara-camp",captionEn:"sahara camp",name:"撒哈拉 · 沙漠营火",coords:"31.0802° N, 4.0134° W",wallTheme:"desert",floorColor:"#efd6a3",weather:"dust",defaultNight:!1,hasCanal:!1,backdropStyle:"dunes",keepsake:{id:"desert-star",name:"沙海夜星砂",glyph:"✨",kind:"star"},scrapPos:[-1.8,2.2],bookProps:[{type:"sandDune",x:.65,z:1.46,rot:.6,scale:.65},{type:"tent",x:.88,z:.86,rot:.78,scale:.6},{type:"campfire",x:1.18,z:1.18,rot:0,scale:.65},{type:"palmTree",x:1.48,z:.65,rot:.2,scale:.65}],worldProps:[{type:"tent",x:-1.8,z:-1.6,rot:.4,scale:1.25},{type:"campfire",x:.2,z:.1,rot:0,scale:1.2},{type:"sandDune",x:3,z:-2.4,rot:.5,scale:1.4},{type:"sandDune",x:-3.2,z:2.2,rot:-.4,scale:1.35},{type:"palmTree",x:2.6,z:1.8,rot:.3,scale:1.3},{type:"bench",x:-1,z:1.4,rot:-.5,scale:1}],spots:[{id:"nomad-tent",name:"条纹游牧帐篷",coords:"31.0802° N, 4.0134° W",glyph:"⛺",pos:[-1.5,-1.2],story:"赭石与暖白双色卡纸搭起的沙海庇护所，帘布被热风轻轻掀起。"},{id:"oasis-fire",name:"星夜篝火堆",coords:"31.0795° N, 4.0128° W",glyph:"🔥",pos:[.3,.3],story:"跳跃的三角形火苗闪烁暖橙光晕，是沙漠旅人分享故事的圆心。"},{id:"erg-dune",name:"金沙新月丘",coords:"31.0815° N, 4.0151° W",glyph:"🐪",pos:[2.6,-2],story:"干脆利落的多面折线沙丘，在斜阳下划出分明的明暗双色。"}]},{id:"nordic-fjord",captionEn:"nordic fjord",name:"挪威 · 峡湾灯塔",coords:"62.1008° N, 7.0940° E",wallTheme:"day",floorColor:"#dae7e5",weather:"breeze",defaultNight:!1,hasCanal:!0,backdropStyle:"mountains",keepsake:{id:"fjord-shell",name:"峡湾冷海螺",glyph:"🐚",kind:"shell"},scrapPos:[-2.1,2],bookProps:[{type:"lighthouse",x:.76,z:.76,rot:.78,scale:.62},{type:"snowPeak",x:1.48,z:.68,rot:-.3,scale:.65},{type:"pier",x:1.12,z:1.18,rot:.78,scale:.58},{type:"sailboat",x:1.42,z:1.44,rot:-.4,scale:.58}],worldProps:[{type:"lighthouse",x:-2.4,z:-2,rot:0,scale:1.35},{type:"snowPeak",x:2.8,z:-2.6,rot:.3,scale:1.4},{type:"pier",x:.2,z:.4,rot:.2,scale:1.3},{type:"sailboat",x:.1,z:2.3,rot:-.4,scale:1.2},{type:"pineTree",x:-3.2,z:1.2,rot:.4,scale:1.25},{type:"bench",x:-1.4,z:-.6,rot:.5,scale:1}],spots:[{id:"geiranger-beacon",name:"红白条纹灯塔",coords:"62.1008° N, 7.0940° E",glyph:"🗼",pos:[-2.1,-1.6],story:"矗立在深海峡湾口的红白折纸灯塔，旋转光束守护着归航纸船。"},{id:"fjord-pier",name:"峡湾木码头",coords:"62.1001° N, 7.0952° E",glyph:"⚓",pos:[.4,.7],story:"浅棕卡纸铺成的栈桥延伸进冰蓝海水，海风带着松针清冽气息。"},{id:"viking-sail",name:"北境白帆船",coords:"62.0994° N, 7.0968° E",glyph:"⛵",pos:[.2,2.2],story:"张满三角纸帆的小船缓缓起伏，准备驶向更远的北方海岸。"}]},{id:"iceland-aurora",captionEn:"iceland aurora",name:"冰岛 · 极光观测站",coords:"64.9631° N, 19.0208° W",wallTheme:"aurora",floorColor:"#e4e9ea",weather:"snow",defaultNight:!0,hasCanal:!1,backdropStyle:"mountains",keepsake:{id:"aurora-star",name:"极光折纸星",glyph:"⭐",kind:"star"},scrapPos:[1.8,2.1],bookProps:[{type:"observatory",x:.85,z:.84,rot:.78,scale:.6},{type:"pineTree",x:1.46,z:.68,rot:.3,scale:.62},{type:"snowPeak",x:.6,z:1.46,rot:.2,scale:.64},{type:"campfire",x:1.24,z:1.28,rot:0,scale:.56}],worldProps:[{type:"observatory",x:-1.9,z:-1.9,rot:.4,scale:1.3},{type:"chalet",x:2.4,z:-1.8,rot:-.4,scale:1.05},{type:"snowPeak",x:-3.2,z:-2.8,rot:.2,scale:1.4},{type:"campfire",x:.8,z:1.4,rot:0,scale:1.1},{type:"pineTree",x:3.1,z:1.8,rot:.3,scale:1.2},{type:"telescope",x:-.4,z:-.4,rot:.5,scale:1.25}],spots:[{id:"aurora-dome",name:"极光穹顶站",coords:"64.9631° N, 19.0208° W",glyph:"🔭",pos:[-1.6,-1.4],story:"圆弧纸板拼出的天文穹顶朝向极光带，屋檐下亮着温润黄灯。"},{id:"star-scope",name:"雪地观星台",coords:"64.9624° N, 19.0195° W",glyph:"🌌",pos:[-.3,-.2],story:"翡翠色极光绸带在纸页天幕上缓缓流动，望远镜正对天顶星座。"},{id:"arctic-hearth",name:"极地暖炉营地",coords:"64.9619° N, 19.0221° W",glyph:"🔥",pos:[.9,1.5],story:"零下雪原里的暖色篝火，映红了旅人手里提着的纸灯笼。"}]}]},{id:"island-home",volume:"04",title:"《海岛归途》",spineTitle:"Island Coast",subtitle:"Island & Cozy Home",regionEn:"Island & Home",coverColor:R.teal,spineColor:"#5e9c9a",ribbonColor:"#3f7f84",scenes:[{id:"traveler-bedroom",captionEn:"bedroom",name:"旅人卧室 · 起点书房",coords:"Home Base · 00.00° N",wallTheme:"indoor",floorColor:"#eee0c4",weather:"dust",defaultNight:!1,hasCanal:!1,backdropStyle:"room",keepsake:{id:"ticket-scrap",name:"旧车票与干叶",glyph:"🎫",kind:"ginkgo"},scrapPos:[-1.2,2.2],bookProps:[{type:"bed",x:.72,z:1.18,rot:.78,scale:.65},{type:"deskWithLamp",x:1.28,z:.74,rot:.78,scale:.66},{type:"chair",x:1.18,z:1.02,rot:-.8,scale:.64},{type:"pottedPlant",x:.48,z:.6,rot:0,scale:.62}],worldProps:[{type:"bed",x:-2.4,z:1.2,rot:0,scale:1.35},{type:"deskWithLamp",x:1.8,z:-2.1,rot:-.2,scale:1.35},{type:"chair",x:1.6,z:-.7,rot:2.9,scale:1.25},{type:"pottedPlant",x:-2.8,z:-2.4,rot:.2,scale:1.3},{type:"pottedPlant",x:3.1,z:2.1,rot:1.1,scale:1.15},{type:"bench",x:-.2,z:2.5,rot:0,scale:1.1}],spots:[{id:"map-desk",name:"旅人书桌与台灯",coords:"Home Base · Study Desk",glyph:"💡",pos:[1.6,-1.6],story:"每趟地球远行归来，都会在暖黄台灯下把车票与折纸明信片贴上软木板。"},{id:"cozy-bed",name:"淡紫格子床铺",coords:"Home Base · Window Bed",glyph:"🛏",pos:[-2,1.2],story:"窗帘透进安静的午后光影，折叠小被单让人想起第一本旅行画册。"},{id:"window-fern",name:"窗台盆栽绿植",coords:"Home Base · Conservatory",glyph:"🪴",pos:[-2.4,-2],story:"每一片纸叶都细心裁剪出弧度，陪着房间一起呼吸四季。"}]},{id:"starlight-balcony",captionEn:"balcony",name:"海风阳台 · 星夜剪影",coords:"Home Base · Balcony",wallTheme:"balcony",floorColor:"#e4cfb0",weather:"fireflies",defaultNight:!0,hasCanal:!1,backdropStyle:"skyline",keepsake:{id:"moon-star",name:"阳台摘星纸片",glyph:"🌙",kind:"star"},scrapPos:[1.8,2],bookProps:[{type:"beanbag",x:.96,z:.98,rot:.78,scale:.65},{type:"railing",x:1.32,z:1.32,rot:-.78,scale:.62},{type:"pottedPlant",x:.56,z:1.38,rot:0,scale:.66},{type:"hangingLantern",x:1.25,z:.66,rot:0,scale:.6}],worldProps:[{type:"beanbag",x:-.8,z:-.6,rot:.4,scale:1.35},{type:"railing",x:2.4,z:-1.8,rot:1.57,scale:1.3},{type:"railing",x:2.4,z:1.2,rot:1.57,scale:1.3},{type:"pottedPlant",x:-2.4,z:1.8,rot:.3,scale:1.3},{type:"pottedPlant",x:1.5,z:2.5,rot:.9,scale:1.2},{type:"hangingLantern",x:-2.1,z:-2,rot:0,scale:1.2},{type:"telescope",x:1.2,z:-1.8,rot:.6,scale:1.2}],spots:[{id:"moon-beanbag",name:"星空懒人沙发",coords:"Balcony · Crescent View",glyph:"🌙",pos:[-.7,-.4],story:"窝在暖杏色纸折懒人椅里，看对面城市剪影与弯月同时亮起。"},{id:"balcony-railing",name:"吹风栏杆",coords:"Balcony · Night Breeze",glyph:"✨",pos:[2,.2],story:"夜风裹着淡淡栀子花香拂过围栏，远方的灯火像洒在深蓝卡纸上的金粉。"},{id:"balcony-plants",name:"阳台花盆角",coords:"Balcony · Terrace",glyph:"🌿",pos:[-2,1.6],story:"一排紫蓝小花盆安静排在木甲板角落，接住夜晚温柔的星光。"}]},{id:"botanical-sunroom",captionEn:"sunroom",name:"温室花房 · 蕨叶标本",coords:"Home Base · Glasshouse",wallTheme:"day",floorColor:"#e2e5cd",weather:"leaves",defaultNight:!1,hasCanal:!1,backdropStyle:"hills",keepsake:{id:"fern-scrap",name:"温室蕨类标本",glyph:"🌿",kind:"leaf"},scrapPos:[1.9,1.8],bookProps:[{type:"sunroom",x:.95,z:.95,rot:.78,scale:.62},{type:"pottedPlant",x:.56,z:1.42,rot:.2,scale:.65},{type:"pottedPlant",x:1.44,z:.62,rot:.8,scale:.65},{type:"bench",x:1.26,z:1.32,rot:-.78,scale:.58}],worldProps:[{type:"sunroom",x:-1.6,z:-1.8,rot:.25,scale:1.35},{type:"pottedPlant",x:2.2,z:-1.6,rot:.3,scale:1.35},{type:"pottedPlant",x:-2.8,z:1.8,rot:1.1,scale:1.3},{type:"pottedPlant",x:2.6,z:2.1,rot:.6,scale:1.25},{type:"bambooCluster",x:3.3,z:-.2,rot:.4,scale:1.2},{type:"bench",x:.4,z:2.2,rot:-.3,scale:1.1},{type:"stoneLantern",x:-.6,z:.2,rot:0,scale:1}],spots:[{id:"glass-arch",name:"拱形纸艺玻璃屋",coords:"Sunroom · Conservatory",glyph:"🏡",pos:[-1.4,-1.2],story:"白卡纸骨架搭出半透明温室拱顶，把来自世界各地的植物标本聚在一起。"},{id:"fern-bench",name:"植物采集长椅",coords:"Sunroom · Herbarium",glyph:"🍃",pos:[.5,1.9],story:"长椅上摊着押花笔记本，记录着每一次旅途拾到的叶子与种子。"},{id:"botanical-corner",name:"蕨类绿植角",coords:"Sunroom · Fern Corner",glyph:"🪴",pos:[2.1,-1.3],story:"层叠交错的鼠尾草绿与松绿纸叶，在阳光里显得生气勃勃。"}]},{id:"rooftop-balloon",captionEn:"rooftop balloon",name:"天台热气球 · 环游启程",coords:"Skyward · Departure",wallTheme:"rooftop",floorColor:"#e6dcc9",weather:"breeze",defaultNight:!1,hasCanal:!1,backdropStyle:"skyline",keepsake:{id:"wind-feather",name:"云端高空羽毛",glyph:"🪶",kind:"leaf"},scrapPos:[-1.9,2],bookProps:[{type:"hotAirBalloon",x:.92,z:.96,rot:.78,scale:.66},{type:"telescope",x:1.4,z:.72,rot:.5,scale:.65},{type:"railing",x:1.3,z:1.32,rot:-.78,scale:.58}],worldProps:[{type:"hotAirBalloon",x:.4,z:-.6,rot:.2,scale:1.35},{type:"telescope",x:-2.4,z:1.8,rot:.5,scale:1.3},{type:"railing",x:2.8,z:-1.6,rot:1.57,scale:1.3},{type:"railing",x:2.8,z:1.4,rot:1.57,scale:1.3},{type:"pottedPlant",x:-2.8,z:-2.2,rot:.4,scale:1.25},{type:"bench",x:-1.2,z:2.4,rot:.1,scale:1.1},{type:"kite",x:2.2,z:2.4,rot:-.3,scale:1.1}],spots:[{id:"sky-balloon",name:"拼色折纸热气球",coords:"Rooftop · Launchpad",glyph:"🎈",pos:[.4,-.1],story:"赤陶、明黄与水鸭蓝拼接的折纸气球缓缓起伏，随时准备再次飞向地球彼端。"},{id:"rooftop-scope",name:"天台黄铜望远镜",coords:"Rooftop · Horizon",glyph:"🔭",pos:[-2.1,1.6],story:"透过望远镜仿佛能看见整本折纸地图上的下一个目的地。"},{id:"sky-kite",name:"云端信风旗",coords:"Rooftop · Wind Vane",glyph:"🪁",pos:[2,2.1],story:"高空信风吹动彩纸飘带，把写好的地球明信片寄向四面八方。"}]}]}],cg={id:"__new-book__",volume:"+",title:"《+ 新建足迹册》",spineTitle:"+ New Footprint Book",subtitle:"Create Custom Trail",regionEn:"Custom Album",coverColor:"#cbb289",spineColor:"#c3a87d",ribbonColor:R.terracotta,isCreator:!0,scenes:[]},Vl={coastal:{label:"海滨港湾 · Coastal",wallTheme:"canal",floorColor:"#f1e4cb",weather:"breeze",hasCanal:!0,backdropStyle:"skyline",keepsake:{id:"custom-shell",name:"海岸拾贝",glyph:"🐚",kind:"shell"},bookProps:[{type:"lighthouse",x:.72,z:.76,rot:.78,scale:.58},{type:"veniceBridge",x:1.15,z:1.22,rot:-.78,scale:.56},{type:"sailboat",x:1.48,z:1.44,rot:-.4,scale:.56}],worldProps:[{type:"lighthouse",x:-2.6,z:-2,rot:.2,scale:1.3},{type:"veniceBridge",x:0,z:0,rot:0,scale:1.25},{type:"sailboat",x:.1,z:2.3,rot:-.3,scale:1.2},{type:"chalet",x:2.6,z:-1.8,rot:-.3,scale:1.15},{type:"streetLamp",x:1.8,z:1.5,rot:0,scale:1.1}]},mountain:{label:"雪山营地 · Alpine",wallTheme:"snow",floorColor:"#f1ede4",weather:"snow",hasCanal:!1,backdropStyle:"mountains",keepsake:{id:"custom-snow",name:"山巅雪片",glyph:"❄",kind:"snowflake"},bookProps:[{type:"snowPeak",x:.65,z:.75,rot:.3,scale:.66},{type:"chalet",x:1.12,z:1.05,rot:.78,scale:.56},{type:"pineTree",x:1.48,z:.68,rot:.2,scale:.62}],worldProps:[{type:"snowPeak",x:-2.8,z:-2.4,rot:.3,scale:1.4},{type:"chalet",x:1.8,z:-1.6,rot:-.35,scale:1.25},{type:"campfire",x:.2,z:.6,rot:0,scale:1.2},{type:"pineTree",x:-2.9,z:1.6,rot:.4,scale:1.25},{type:"streetLamp",x:1.5,z:1.4,rot:0,scale:1.1}]},sakura:{label:"东方花巷 · Blossom",wallTheme:"sakura",floorColor:"#f1e4cb",weather:"sakura",hasCanal:!1,backdropStyle:"hills",keepsake:{id:"custom-sakura",name:"压花春樱",glyph:"🌸",kind:"sakura"},bookProps:[{type:"torii",x:.96,z:.96,rot:.78,scale:.6},{type:"sakuraTree",x:1.48,z:.72,rot:.3,scale:.66},{type:"stoneLantern",x:1.28,z:1.38,rot:0,scale:.62}],worldProps:[{type:"teaHouse",x:-2.3,z:-1.9,rot:.3,scale:1.2},{type:"torii",x:.4,z:.2,rot:.1,scale:1.1},{type:"sakuraTree",x:2.5,z:-1.5,rot:.4,scale:1.3},{type:"sakuraTree",x:-2.8,z:1.6,rot:1,scale:1.2},{type:"stoneLantern",x:1.4,z:1.4,rot:0,scale:1.1}]},nighttown:{label:"星夜灯火 · Night Town",wallTheme:"night",floorColor:"#efe1c4",weather:"fireflies",hasCanal:!1,backdropStyle:"mountains",keepsake:{id:"custom-ginkgo",name:"压花银杏",glyph:"🍂",kind:"ginkgo"},bookProps:[{type:"machiya",x:.72,z:.76,rot:.78,scale:.58},{type:"bellTower",x:1.32,z:.72,rot:.5,scale:.54},{type:"streetLamp",x:.96,z:1.3,rot:0,scale:.66}],worldProps:[{type:"machiya",x:-2.4,z:.6,rot:.5,scale:1.25},{type:"palazzo",x:2.2,z:.4,rot:-.5,scale:1.2},{type:"bellTower",x:-2.7,z:-2.4,rot:.2,scale:1.2},{type:"streetLamp",x:-1,z:1.2,rot:0,scale:1.2},{type:"streetLamp",x:1.1,z:1.2,rot:0,scale:1.2}]}},Bc="earth-papertrails-v2",ug="earth-papertrails-v1",hg={stamps:{"kyoto-shrine:torii-tunnel":{collectedAt:"2026-10-12",note:"清晨穿过朱红色鸟居长廊，纸片樱花正好落在石阶上。",photoDataUrl:""},"venice-canal:rialto-arch":{collectedAt:"2026-10-19",note:"拱桥下飘过两只折纸贡多拉，水鸭青色的河面映出微光。",photoDataUrl:""},"hallstatt-night:lakeside-pier":{collectedAt:"2026-11-25",note:"提着纸灯笼走过湖畔木桥，暖黄窗光在夜色纸山间亮起。",photoDataUrl:""},"traveler-bedroom:map-desk":{collectedAt:"2026-11-02",note:"回到暖黄台灯下的书桌，墙上的软木板又多了一枚大头针。",photoDataUrl:""}},scraps:["kyoto-shrine:sakura-scrap","hallstatt-night:ginkgo-scrap"],visitedScenes:["kyoto-shrine","venice-canal","hallstatt-night","traveler-bedroom"],customBooks:[]};function eo(){return JSON.parse(JSON.stringify(hg))}function dg(){try{const n=localStorage.getItem(Bc);if(n){const i=JSON.parse(n);return Hc(i)}const e=localStorage.getItem(ug);if(e){const i=JSON.parse(e),r=eo();return i!=null&&i.stamps&&typeof i.stamps=="object"&&Object.assign(r.stamps,i.stamps),Array.isArray(i==null?void 0:i.visitedScenes)&&(r.visitedScenes=Array.from(new Set([...r.visitedScenes,...i.visitedScenes]))),Xn(r),r}const t=eo();return Xn(t),t}catch{return eo()}}function Hc(n){return{stamps:n!=null&&n.stamps&&typeof n.stamps=="object"?n.stamps:{},scraps:Array.isArray(n==null?void 0:n.scraps)?n.scraps:[],visitedScenes:Array.isArray(n==null?void 0:n.visitedScenes)?n.visitedScenes:[],customBooks:Array.isArray(n==null?void 0:n.customBooks)?n.customBooks:[]}}function Xn(n){try{localStorage.setItem(Bc,JSON.stringify(n))}catch{}}function Ma(n,e){return`${n}:${e}`}function zn(n,e,t){return n.stamps[Ma(e,t)]||null}function fg(n,e,t,{date:i,note:r,photoDataUrl:s}){const o=Ma(e,t),a=n.stamps[o]||{};return n.stamps[o]={collectedAt:i||new Date().toISOString().slice(0,10),note:r!==void 0?r:a.note||"",photoDataUrl:s!==void 0?s:a.photoDataUrl||""},n.visitedScenes.includes(e)||n.visitedScenes.push(e),Xn(n),n.stamps[o]}function pg(n,e,t,i){const r=Ma(e,t),s=n.stamps[r]||{};return n.stamps[r]={collectedAt:s.collectedAt||new Date().toISOString().slice(0,10),note:s.note||"",photoDataUrl:i},Xn(n),n.stamps[r]}function Vc(n,e){return`${n}:${e}`}function rs(n,e,t){return n.scraps.includes(Vc(e,t))}function mg(n,e,t){const i=Vc(e,t);return n.scraps.includes(i)?!1:(n.scraps.push(i),Xn(n),!0)}function gg(n,e){n.visitedScenes.includes(e)||(n.visitedScenes.push(e),Xn(n))}function Xo(n,e){const t=Array.isArray(e==null?void 0:e.customBooks)?e.customBooks:[];return[...n,...t]}function vg(n,e){return Array.isArray(n.customBooks)||(n.customBooks=[]),n.customBooks.push(e),Xn(n),e}function nr(n,e){let t=0;for(const i of e.scenes)for(const r of i.spots)zn(n,i.id,r.id)&&t++;return t}function _g(n,e){return e.reduce((t,i)=>t+nr(n,i),0)}function xg(n){return JSON.stringify(n,null,2)}function yg(n,e){const t=JSON.parse(e),i=Hc(t);return n.stamps=i.stamps,n.scraps=i.scraps,n.visitedScenes=i.visitedScenes,n.customBooks=i.customBooks,Xn(n),n}function Gc(n){let e=n>>>0;return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Gl(n){return n*n*(3-2*n)}function Zi(n,e,t,i,r){const s=new Float32Array(t*t);for(let o=0;o<s.length;o++)s[o]=r()-.5;for(let o=0;o<e;o++){const a=o/e*t,l=Math.floor(a),c=Gl(a-l),h=l%t*t,p=(l+1)%t*t;for(let d=0;d<e;d++){const f=d/e*t,g=Math.floor(f),v=Gl(f-g),m=g%t,u=(g+1)%t,T=s[h+m]+(s[h+u]-s[h+m])*v,y=s[p+m]+(s[p+u]-s[p+m])*v;n[o*e+d]+=i*(T+(y-T)*c)}}}function Wl(n,e,t,i,r){const s=new Float32Array(t*t),o=new Float32Array(t*t),a=new Float32Array(t*t);for(let l=0;l<s.length;l++)s[l]=r(),o[l]=r(),a[l]=.6+r()*.4;for(let l=0;l<e;l++){const c=l/e*t,h=Math.floor(c);for(let p=0;p<e;p++){const d=p/e*t,f=Math.floor(d);let g=9,v=1;for(let u=-1;u<=1;u++){const T=(h+u+t)%t;for(let y=-1;y<=1;y++){const x=(f+y+t)%t,E=T*t+x,w=f+y+s[E]-d,A=h+u+o[E]-c,P=w*w+A*A;P<g&&(g=P,v=a[E])}}const m=Math.min(1,Math.sqrt(g)/.75);n[l*e+p]+=i*((1-m*m)*v-.45)}}}function Mg(n,e,t,i,r){for(let s=0;s<t;s++){let o=r()*e,a=r()*e,l=r()*Math.PI*2;const c=10+r()*44,h=(r()-.5)*.12,p=(r()<.72?1:-.8)*i*(.5+r()*.7);for(let d=0;d<c;d++){const f=d/c,g=p*Math.sin(Math.PI*f),v=Math.floor(o),m=Math.floor(a),u=o-v,T=a-m,y=(v%e+e)%e,x=(m%e+e)%e,E=(y+1)%e,w=(x+1)%e;n[x*e+y]+=g*(1-u)*(1-T),n[x*e+E]+=g*u*(1-T),n[w*e+y]+=g*(1-u)*T,n[w*e+E]+=g*u*T,o+=Math.cos(l),a+=Math.sin(l),l+=h}}}function Xl(n){let e=0;for(let r=0;r<n.length;r++)e+=n[r];e/=n.length;let t=0;for(let r=0;r<n.length;r++)n[r]-=e,t+=n[r]*n[r];const i=1/Math.sqrt(t/n.length+1e-12);for(let r=0;r<n.length;r++)n[r]*=i;return n}function Sg(n=512){const e=Gc(85924654),t=new Float32Array(n*n);Wl(t,n,96,.8,e),Wl(t,n,190,.5,e),Zi(t,n,160,.5,e),Zi(t,n,256,.4,e),Mg(t,n,2200,.7,e),Xl(t);const i=new Float32Array(n*n);Zi(i,n,9,1,e),Zi(i,n,17,.7,e),Zi(i,n,36,.35,e),Xl(i);const r=new Uint8Array(n*n*4),s=.24;for(let a=0;a<n;a++){const l=(a+n-1)%n*n,c=(a+1)%n*n;for(let h=0;h<n;h++){const p=a*n+h,d=(t[a*n+(h+1)%n]-t[a*n+(h+n-1)%n])*s,f=(t[c+h]-t[l+h])*s,g=1/Math.sqrt(d*d+f*f+1);r[p*4]=Math.max(0,Math.min(255,Math.round((-d*g*.5+.5)*255))),r[p*4+1]=Math.max(0,Math.min(255,Math.round((-f*g*.5+.5)*255))),r[p*4+2]=Math.max(0,Math.min(255,Math.round((.5+t[p]*.16)*255))),r[p*4+3]=Math.max(0,Math.min(255,Math.round((.5+i[p]*.16)*255)))}}const o=new Ih(r,n,n,Xt,hn);return o.wrapS=o.wrapT=rr,o.magFilter=Ht,o.minFilter=kn,o.generateMipmaps=!0,o.colorSpace=pn,o.flipY=!1,o.needsUpdate=!0,o}const us={uPaperFibreTex:{value:null},uPaperFibre:{value:new et(1/2.6,.095,.085,.34)},uPaperFibre2:{value:new et(.42,3.73,.85,.27)},uPaperLight:{value:new et(.3,.32,.55,.06)},uPaperTransTint:{value:new je("#ffb070")},uPaperShadowLeak:{value:new je("#7c5634")},uPaperPool:{value:[0,1,2,3,4,5].map(()=>new et(0,0,0,0))},uPaperPoolCol:{value:new et(1,.72,.36,0)}};function ql(n=[],e=2.6,t=0){const i=us.uPaperPool.value;for(let r=0;r<6;r++){const s=n[r];s&&t>.01?i[r].set(s.x,s.y,s.z,(s.strength??1)*t):i[r].set(0,0,0,0)}us.uPaperPoolCol.value.w=t>.01?e:0}const Eg=`
varying vec3 vPaperPos;
varying vec3 vPaperNrm;
varying float vPaperTone;
varying vec3 vPaperW;
float paperHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float paperVNoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(paperHash(i), paperHash(i + vec2(1.0, 0.0)), f.x),
    mix(paperHash(i + vec2(0.0, 1.0)), paperHash(i + vec2(1.0, 1.0)), f.x),
    f.y
  );
}
`,wg=`
{
  mat4 paperM = modelMatrix;
  float paperId = 0.0;
  #ifdef USE_INSTANCING
    paperM = paperM * instanceMatrix;
    paperId = float(gl_InstanceID);
  #endif
  vec4 wp = paperM * vec4(transformed, 1.0);
  vPaperW = wp.xyz;
  #ifdef PAPER_FIBRE_WORLD
    vPaperPos = wp.xyz;
    vPaperNrm = normalize(mat3(paperM) * objectNormal);
  #else
    vPaperPos = transformed * max(0.001, length(paperM[0].xyz));
    vPaperNrm = objectNormal;
  #endif
  vec3 paperO = paperM[3].xyz;
  float paperTn = paperVNoise(paperO.xz * 1.13 + paperO.y * 2.71);
  paperTn = fract(paperTn + paperHash(vec2(paperId, 3.7)) * step(0.5, paperId));
  vPaperTone = paperTn * 2.0 - 1.0;
}
`,bg=`
uniform sampler2D uPaperFibreTex;
uniform vec4 uPaperFibre;
uniform vec4 uPaperFibre2;
uniform vec4 uPaperLight;
uniform vec3 uPaperTransTint;
uniform vec3 uPaperShadowLeak;
uniform vec4 uPaperPool[6];
uniform vec4 uPaperPoolCol;
varying vec3 vPaperPos;
varying vec3 vPaperNrm;
varying float vPaperTone;
varying vec3 vPaperW;
`,Tg=`
varying vec3 vViewPosition;

struct LambertMaterial {
  vec3 diffuseColor;
  float specularStrength;
};

void RE_Direct_Paper(
  const in IncidentLight directLight,
  const in vec3 geometryPosition,
  const in vec3 geometryNormal,
  const in vec3 geometryViewDir,
  const in vec3 geometryClearcoatNormal,
  const in LambertMaterial material,
  inout ReflectedLight reflectedLight
) {
  float nl = dot(geometryNormal, directLight.direction);
  float wrap = uPaperLight.x;
  float front = clamp((nl + wrap) / (1.0 + wrap), 0.0, 1.0);
  vec3 irradiance = front * directLight.color;
  float back = clamp((-nl + 0.1) / 1.1, 0.0, 1.0);
  irradiance += back * uPaperLight.y * uPaperTransTint * directLight.color;
  reflectedLight.directDiffuse += irradiance * BRDF_Lambert(material.diffuseColor);
}

void RE_IndirectDiffuse_Paper(
  const in vec3 irradiance,
  const in vec3 geometryPosition,
  const in vec3 geometryNormal,
  const in vec3 geometryViewDir,
  const in vec3 geometryClearcoatNormal,
  const in LambertMaterial material,
  inout ReflectedLight reflectedLight
) {
  reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert(material.diffuseColor);
}

#define RE_Direct RE_Direct_Paper
#define RE_IndirectDiffuse RE_IndirectDiffuse_Paper
`,Ag=`
vec3 paperAN = abs(vPaperNrm);
vec2 paperUv = (paperAN.y >= max(paperAN.x, paperAN.z))
  ? vPaperPos.xz
  : ((paperAN.x > paperAN.z) ? vPaperPos.zy : vPaperPos.xy);
paperUv *= uPaperFibre.x;
vec4 paperF1 = texture2D(uPaperFibreTex, paperUv, -0.5);
vec4 paperF2 = texture2D(uPaperFibreTex, paperUv * uPaperFibre2.y + vec2(0.37, 0.61), -0.3);
float paperTooth = (paperF1.b - 0.5) + (paperF2.b - 0.5) * uPaperFibre2.x;
float paperCloud = paperF1.a - 0.5;
#ifndef PAPER_NO_FIBRE
  vec4 paperF3 = texture2D(uPaperFibreTex, paperUv.yx * uPaperFibre2.w + vec2(0.13, 0.71), 1.5);
  diffuseColor.rgb *= max(0.0, 1.0 + paperTooth * uPaperFibre.y * 5.8 + (paperCloud + (paperF3.a - 0.5) * 1.15) * uPaperFibre.z * 5.8);
#endif
#ifndef PAPER_NO_VARY
  diffuseColor.rgb *= (1.0 + vPaperTone * uPaperLight.w) * vec3(1.0 + vPaperTone * uPaperLight.w * 0.35, 1.0, 1.0 - vPaperTone * uPaperLight.w * 0.5);
#endif
`,Cg=`
if (uPaperPoolCol.w > 0.001) {
  float pL = 0.0;
  for (int i = 0; i < 6; i++) {
    vec4 pp = uPaperPool[i];
    if (pp.w > 0.0) {
      float pf = max(0.0, 1.0 - distance(vPaperW, pp.xyz) / uPaperPoolCol.w);
      pL += pp.w * pf * pf;
    }
  }
  totalEmissiveRadiance += diffuseColor.rgb * uPaperPoolCol.rgb * pL;
}
`,Pg=`
#ifndef PAPER_NO_FIBRE
{
  vec2 pn = (paperF1.rg - 0.5) * 2.0 + (paperF2.rg - 0.5) * 2.0 * uPaperFibre2.x;
  pn += (paperF3.gr - 0.5) * 2.0 * uPaperFibre2.z / max(uPaperFibre.w, 1e-3);
  vec3 q0 = dFdx(vViewPosition);
  vec3 q1 = dFdy(vViewPosition);
  vec2 st0 = dFdx(paperUv);
  vec2 st1 = dFdy(paperUv);
  vec3 q1perp = cross(q1, normal);
  vec3 q0perp = cross(normal, q0);
  vec3 pT = q1perp * st0.x + q0perp * st1.x;
  vec3 pB = q1perp * st0.y + q0perp * st1.y;
  float pdet = max(dot(pT, pT), dot(pB, pB));
  float pscale = (pdet == 0.0) ? 0.0 : inversesqrt(pdet);
  normal = normalize(normal + (pT * pn.x + pB * pn.y) * pscale * uPaperFibre.w);
}
#endif
`;function Rg(n,e){n.onBeforeCompile=t=>{Object.assign(t.uniforms,us),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
`+Eg).replace("#include <project_vertex>",`#include <project_vertex>
`+wg),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
`+bg).replace("#include <lights_lambert_pars_fragment>",Tg).replace("#include <color_fragment>",`#include <color_fragment>
`+Ag).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
`+Cg).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
`+Pg)},n.customProgramCacheKey=()=>"earth-papertrails-v2|"+JSON.stringify(e)}function Lg(){const n=Sg(512);us.uPaperFibreTex.value=n;const e=new Map,t=new Set;function i(r={}){const{color:s=R.paper,map:o=null,side:a=Wt,emissive:l=null,emissiveIntensity:c=1,transparent:h=!1,opacity:p=1,alphaTest:d=0,fibre:f="local",vary:g=!0,vertexColors:v=!1,glowTag:m=!1,depthWrite:u=!0}=r,T=s&&s.isColor?"#"+s.getHexString():String(s).toLowerCase(),y=l?l.isColor?"#"+l.getHexString():String(l).toLowerCase():"-",x=[T,o?o.uuid:"-",a,y,l?c:0,h?1:0,p,d,f,g?1:0,v?1:0,m?1:0,u?1:0].join("|");let E=e.get(x);return E||(E=new vd({color:s,map:o,side:a,transparent:h,opacity:p,alphaTest:d,vertexColors:v,depthWrite:u}),l&&(E.emissive=new je(l),E.emissiveIntensity=c),E.shadowSide=Wt,E.defines={},f==="world"&&(E.defines.PAPER_FIBRE_WORLD=1),f==="none"&&(E.defines.PAPER_NO_FIBRE=1),g||(E.defines.PAPER_NO_VARY=1),Rg(E,{fibre:f,vary:!!g}),e.set(x,E),(m||l&&c>0)&&(E.userData.baseEmissiveIntensity=c,t.add(E))),E}return{paper:i,glowMaterials:t,fibreTex:n,dispose(){for(const r of e.values())r.dispose();e.clear(),n.dispose()}}}function Bt(n,e=R.ink,t=.36,i=24){if(!n.geometry)return null;const r=new Zh(n.geometry,i),s=new bc(r,new ca({color:e,transparent:t<1,opacity:t,depthWrite:!1}));return s.raycast=()=>{},n.add(s),s}function qo(n=!1){const i=document.createElement("canvas");i.width=512,i.height=512;const r=i.getContext("2d"),s=Gc(n?2241348:5596791);r.fillStyle=n?"#563924":"#7c5436",r.fillRect(0,0,512,512);for(let a=0;a<160;a++){const l=s()*512,c=2+s()*16,h=.04+s()*.08;r.fillStyle=s()>.5?`rgba(38, 22, 12, ${h})`:`rgba(182, 136, 94, ${h*.8})`,r.fillRect(l,0,c,512)}for(let a=0;a<38;a++){r.strokeStyle=`rgba(32, 18, 9, ${.08+s()*.09})`,r.lineWidth=1+s()*2,r.beginPath();const l=s()*512;r.moveTo(l,0),r.bezierCurveTo(l+(s()-.5)*18,512*.33,l+(s()-.5)*18,512*.66,l+(s()-.5)*10,512),r.stroke()}const o=new Bi(i);return o.colorSpace=St,o.wrapS=o.wrapT=rr,o.anisotropy=4,o}function Ig(n){const i=document.createElement("canvas");i.width=256,i.height=768;const r=i.getContext("2d");r.fillStyle=n.spineColor||n.coverColor,r.fillRect(0,0,256,768);const s=r.createLinearGradient(0,0,256,0);s.addColorStop(0,"rgba(26, 14, 8, 0.28)"),s.addColorStop(.14,"rgba(255, 248, 232, 0.08)"),s.addColorStop(.86,"rgba(255, 248, 232, 0.04)"),s.addColorStop(1,"rgba(26, 14, 8, 0.26)"),r.fillStyle=s,r.fillRect(0,0,256,768);const o=n.isCreator,a=o?R.ink:"rgba(251, 246, 234, 0.92)",l=o?"rgba(90, 58, 40, 0.72)":"rgba(251, 246, 234, 0.72)";r.strokeStyle=a,r.lineWidth=3,r.strokeRect(22,26,212,716),r.save(),r.translate(256/2,768*.43),r.rotate(Math.PI/2),r.fillStyle=a,r.textAlign="center",r.textBaseline="middle",r.font=n.isCreator?'600 28px Georgia, "Songti SC", serif':'bold 38px Georgia, "Songti SC", serif',r.fillText(n.spineTitle||n.regionEn||n.title,0,0),r.restore(),r.strokeStyle=l,r.lineWidth=2.5,r.beginPath(),r.moveTo(46,583),r.lineTo(210,583),r.stroke(),r.save(),r.translate(256/2,653),r.strokeStyle=a,r.fillStyle=l,r.lineWidth=2.5,n.isCreator?(r.beginPath(),r.moveTo(-22,0),r.lineTo(22,0),r.moveTo(0,-22),r.lineTo(0,22),r.stroke()):(r.beginPath(),r.arc(0,0,32,0,Math.PI*2),r.stroke(),r.font="bold 20px Georgia, serif",r.textAlign="center",r.textBaseline="middle",r.fillText(n.volume||"01",0,1)),r.restore();const c=new Bi(i);return c.colorSpace=St,c.anisotropy=4,c}function Dg(n){const i=document.createElement("canvas");i.width=512,i.height=720;const r=i.getContext("2d");r.fillStyle=n.coverColor,r.fillRect(0,0,512,720),r.fillStyle="rgba(255, 248, 232, 0.06)";for(let h=0;h<720;h+=6)r.fillRect(0,h,512,2);const s=r.createLinearGradient(0,0,48,0);s.addColorStop(0,"rgba(30, 16, 8, 0.34)"),s.addColorStop(1,"rgba(30, 16, 8, 0)"),r.fillStyle=s,r.fillRect(0,0,48,720);const o=n.isCreator?R.ink:R.cutEdge;r.strokeStyle=o,r.lineWidth=5,r.strokeRect(42,34,440,652),r.lineWidth=1.6,r.strokeRect(54,46,416,628),r.fillStyle=o,r.textAlign="center",r.font="bold 20px Georgia, serif",r.fillText((n.regionEn||"Custom").toUpperCase(),512/2+6,106),r.font='bold 44px Georgia, "Songti SC", serif',r.fillText(n.title,512/2+6,174),r.font="italic 21px Georgia, serif",r.fillText(n.subtitle||"",512/2+6,214);const a=512/2+6,l=415;r.fillStyle=R.paper,r.beginPath(),r.arc(a,l,120,0,Math.PI*2),r.fill(),r.strokeStyle=R.ink,r.lineWidth=4,r.stroke(),r.save(),r.translate(a,l),n.id==="east-asia"?(r.fillStyle=R.rose,r.beginPath(),r.arc(0,-18,40,0,Math.PI*2),r.fill(),r.fillStyle=R.terracotta,r.fillRect(-50,-4,100,12),r.fillRect(-38,14,76,9),r.fillRect(-30,8,12,56),r.fillRect(18,8,12,56),r.fillStyle=R.pine,r.fillRect(-72,56,144,14)):n.id==="europe"?(r.fillStyle=R.ochre,r.beginPath(),r.arc(0,-26,30,0,Math.PI*2),r.fill(),r.fillStyle=R.paperShade,r.fillRect(-68,12,136,20),r.fillStyle=R.teal,r.fillRect(-74,34,148,28)):n.id==="wild-earth"?(r.fillStyle=R.cutEdge,r.beginPath(),r.moveTo(-68,30),r.lineTo(-14,-48),r.lineTo(36,30),r.closePath(),r.fill(),r.fillStyle=R.pine,r.beginPath(),r.moveTo(-6,30),r.lineTo(42,-32),r.lineTo(74,30),r.closePath(),r.fill()):(r.fillStyle=R.teal,r.beginPath(),r.arc(0,0,76,0,Math.PI*2),r.fill(),r.fillStyle=R.cutEdge,r.fillRect(-32,-4,64,46),r.fillStyle=R.terracotta,r.beginPath(),r.moveTo(-42,-4),r.lineTo(0,-38),r.lineTo(42,-4),r.closePath(),r.fill()),r.restore(),r.fillStyle=o,r.font="600 18px Georgia, serif",r.fillText(`VOL. ${n.volume||"★"} · ${(n.scenes||[]).length} SCENES`,512/2+6,644);const c=new Bi(i);return c.colorSpace=St,c.anisotropy=4,c}function Yl(n,e){const r=document.createElement("canvas");r.width=512,r.height=512;const s=r.getContext("2d");s.fillStyle="#f5ebd8",s.fillRect(0,0,512,512);const o=n.wallTheme==="night"||n.wallTheme==="aurora"||n.wallTheme==="balcony",a=R.indigoInk,l=34,c=512-l*2,h=512-l*2;if(s.save(),s.beginPath(),s.rect(l,l,c,h),s.clip(),o){const d=s.createLinearGradient(0,l,0,512-l);d.addColorStop(0,"#36416b"),d.addColorStop(.7,"#586796"),d.addColorStop(1,"#a99d95"),s.fillStyle=d,s.fillRect(l,l,c,h),s.fillStyle="#fff5cf";for(let f=0;f<20;f++){const g=l+(f*73+(e==="right"?40:12))%c,v=l+(f*47+25)%(h*.55);s.beginPath(),s.arc(g,v,f%2+1.2,0,Math.PI*2),s.fill()}e==="right"&&(s.fillStyle="#ffe28a",s.beginPath(),s.arc(370,126,26,0,Math.PI*2),s.fill())}else if(n.wallTheme==="indoor")s.fillStyle="#f6ecd8",s.fillRect(l,l,c,h),s.fillStyle="#ead8b8",s.fillRect(l,364,c,114),s.strokeStyle=a,s.lineWidth=2,s.strokeRect(l,364,c,2),e==="left"?(s.fillStyle="#cfe0ea",s.fillRect(110,96,220,190),s.strokeRect(110,96,220,190),s.fillStyle=R.rose,s.fillRect(88,86,46,215),s.fillRect(308,86,46,215)):(s.fillStyle="#d4ac79",s.fillRect(96,92,290,175),s.strokeRect(96,92,290,175),s.fillStyle=R.cutEdge,s.fillRect(118,112,74,62),s.fillRect(212,124,86,68),s.fillRect(310,110,56,78));else{const d=s.createLinearGradient(0,l,0,512-l);d.addColorStop(0,n.wallTheme==="desert"?"#f8e6c6":"#f4ecd9"),d.addColorStop(1,"#f8f0df"),s.fillStyle=d,s.fillRect(l,l,c,h),e==="left"&&(s.fillStyle=n.wallTheme==="sakura"?"rgba(222, 148, 134, 0.45)":"rgba(232, 190, 110, 0.38)",s.beginPath(),s.arc(138,135,34,0,Math.PI*2),s.fill()),s.fillStyle="rgba(218, 198, 166, 0.28)",s.beginPath(),s.moveTo(l,512-l),s.lineTo(l,392),s.quadraticCurveTo(180,337,320,387),s.lineTo(512-l,367),s.lineTo(512-l,512-l),s.closePath(),s.fill()}s.restore(),s.strokeStyle=a,s.lineWidth=3.5,s.strokeRect(14,14,484,484),s.lineWidth=1.8,s.strokeRect(l,l,c,h);const p=new Bi(r);return p.colorSpace=St,p.anisotropy=4,p}function Wc(n,e=!1){const r=document.createElement("canvas");r.width=512,r.height=512;const s=r.getContext("2d");if(s.fillStyle=n.floorColor||"#f1e4cb",s.fillRect(0,0,512,512),s.strokeStyle="rgba(90, 58, 40, 0.1)",s.lineWidth=2,n.wallTheme==="indoor"){for(let a=32;a<512;a+=44)s.beginPath(),s.moveTo(0,a),s.lineTo(512,a),s.stroke();s.fillStyle=R.rose,s.fillRect(160,160,192,192),s.strokeStyle=R.cutEdge,s.lineWidth=5,s.strokeRect(172,172,168,168)}else if(n.hasCanal){s.fillStyle=R.teal,s.fillRect(175,0,162,512),s.strokeStyle="rgba(251, 246, 234, 0.48)",s.lineWidth=2.5;for(let a=36;a<512;a+=52)s.beginPath(),s.moveTo(205,a),s.quadraticCurveTo(256,a+10,307,a),s.stroke()}else e&&(s.fillStyle="#f6ebd5",s.beginPath(),s.moveTo(210,0),s.bezierCurveTo(275,165,160,330,240,512),s.lineTo(318,512),s.bezierCurveTo(235,330,345,165,290,0),s.closePath(),s.fill());s.strokeStyle=e?"rgba(47, 59, 110, 0.36)":R.indigoInk,s.lineWidth=3.5,s.strokeRect(8,8,496,496),s.lineWidth=1.6,s.strokeRect(18,18,476,476);const o=new Bi(r);return o.colorSpace=St,o.anisotropy=4,o}function Ug(n){const t=document.createElement("canvas");t.width=240,t.height=240;const i=t.getContext("2d"),r=n.defaultNight||n.wallTheme==="night"||n.wallTheme==="aurora",s=i.createLinearGradient(0,0,0,240);if(s.addColorStop(0,r?"#273156":"#f3dfc1"),s.addColorStop(1,r?"#463946":"#e4c79c"),i.fillStyle=s,i.fillRect(0,0,240,240),i.fillStyle=r?"#1f1b2b":"#b9a37e",i.beginPath(),i.moveTo(0,240),i.lineTo(0,145),i.lineTo(65,92),i.lineTo(135,138),i.lineTo(195,82),i.lineTo(240,132),i.lineTo(240,240),i.closePath(),i.fill(),i.fillStyle=n.hasCanal?R.teal:r?"#3c2a1f":R.terracotta,i.fillRect(0,170,240,70),i.fillStyle=r?"#3a271c":R.paper,i.fillRect(88,128,64,46),i.fillStyle=R.terracotta,i.beginPath(),i.moveTo(78,128),i.lineTo(120,96),i.lineTo(162,128),i.closePath(),i.fill(),i.fillStyle=r?R.lantern:R.ink,i.fillRect(102,142,14,14),i.fillRect(126,142,14,14),r){i.fillStyle="#ffd76a";for(const[o,a]of[[42,70],[72,110],[186,62],[202,128],[148,86]])i.beginPath(),i.arc(o,a,3,0,Math.PI*2),i.fill()}return t.toDataURL("image/jpeg",.88)}function Ng({scene:n,glowMaterials:e}){const t=new fl("#ffd49e",2.6);t.castShadow=!0;const r=typeof window<"u"&&window.innerWidth<768?1024:2048;t.shadow.mapSize.set(r,r),t.shadow.bias=-4e-4,t.shadow.normalBias=.018,t.shadow.radius=2.6;const s=new fl("#f3cfa6",.95),o=new yd("#ffe9cc","#b98858",.55),a=new Sd("#ffc45a",1,15,1.25);n.add(t,t.target,s,s.target,o,a),n.background=new je("#ece3d4"),n.fog=new aa("#ece3d4",36,85);let l="bookshelf",c=0,h=0,p=.9;const d=new je,f=new je;function g(v){const m=t.shadow.camera;v==="bookshelf"?(t.position.set(-7.5,9.2,10.5),t.target.position.set(0,1.75,0),s.position.set(7.5,4,8),s.target.position.set(0,1.75,0),m.left=-8.5,m.right=8.5,m.top=6.5,m.bottom=-4.5,m.near=1,m.far=38,n.fog.near=36,n.fog.far=85):v==="book"?(t.position.set(-7,10.5,6.8),t.target.position.set(0,1,.2),s.position.set(8,5,4),s.target.position.set(0,1,.2),m.left=-6,m.right=6,m.top=5.8,m.bottom=-4.5,m.near=1,m.far=34,n.fog.near=36,n.fog.far=85):(t.position.set(-10.5,14,7.8),t.target.position.set(0,.5,0),s.position.set(11,6,-4),s.target.position.set(0,.5,0),m.left=-12,m.right=12,m.top=12,m.bottom=-12,m.near=1,m.far=42,n.fog.near=36,n.fog.far=85),m.updateProjectionMatrix(),t.target.updateMatrixWorld(),s.target.updateMatrixWorld()}return g(l),{key:t,fill:s,hemi:o,accent:a,get isNight(){return c===1},get nightMix(){return h*h*(3-2*h)},get exposure(){return p},setMode(v){l=v,g(v)},setNight(v,m=!1){c=v?1:0,m&&(h=c)},toggleNight(){return c=c?0:1,c===1},setAccentPosition(v,m,u){a.position.set(v,m,u)},update(v){const m=.9523809523809523;h<c?h=Math.min(1,h+v*m):h>c&&(h=Math.max(0,h-v*m));const u=h*h*(3-2*h),T=Hl[l]||Hl.book,y=T.day,x=T.night;d.set(y.background),f.set(x.background),n.background.copy(d).lerp(f,u),d.set(y.fogColor),f.set(x.fogColor),n.fog.color.copy(d).lerp(f,u),d.set(y.keyColor),f.set(x.keyColor),t.color.copy(d).lerp(f,u),t.intensity=y.keyIntensity+(x.keyIntensity-y.keyIntensity)*u,d.set(y.fillColor),f.set(x.fillColor),s.color.copy(d).lerp(f,u),s.intensity=y.fillIntensity+(x.fillIntensity-y.fillIntensity)*u,d.set(y.hemiSky),f.set(x.hemiSky),o.color.copy(d).lerp(f,u),d.set(y.hemiGround),f.set(x.hemiGround),o.groundColor.copy(d).lerp(f,u),o.intensity=y.hemiIntensity+(x.hemiIntensity-y.hemiIntensity)*u,d.set(y.accentColor),f.set(x.accentColor),a.color.copy(d).lerp(f,u),a.intensity=y.accentIntensity+(x.accentIntensity-y.accentIntensity)*u,p=y.exposure+(x.exposure-y.exposure)*u;const E=y.glowIntensity+(x.glowIntensity-y.glowIntensity)*u;for(const w of e){const A=w.userData.baseEmissiveIntensity??1;w.emissiveIntensity=A*E}}}}const $l=`
varying vec2 vUv;
void main() {
  vUv = position.xy * 0.5 + 0.5;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,Fg=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tDepth;
uniform vec4 uProj;
uniform vec2 uTexel;
uniform vec3 uAoParams;

float viewZ(float d) {
  return (uProj.x * uProj.y) / max(1e-5, (uProj.y - d * (uProj.y - uProj.x)));
}

vec3 vpos(vec2 uv) {
  float z = viewZ(texture2D(tDepth, uv).r);
  return vec3((uv * 2.0 - 1.0) * vec2(uProj.z * uProj.w, uProj.z) * z, -z);
}

float ign(vec2 p) {
  return fract(52.9829189 * fract(dot(p, vec2(0.06711056, 0.00583715))));
}

void main() {
  float d0 = texture2D(tDepth, vUv).r;
  if (d0 >= 0.99995) {
    gl_FragColor = vec4(1.0);
    return;
  }
  vec3 P = vpos(vUv);
  vec2 t = uTexel * 2.0;
  vec3 pr = vpos(vUv + vec2(t.x, 0.0));
  vec3 pl = vpos(vUv - vec2(t.x, 0.0));
  vec3 pu = vpos(vUv + vec2(0.0, t.y));
  vec3 pd = vpos(vUv - vec2(0.0, t.y));
  vec3 dxv = abs(pr.z - P.z) < abs(P.z - pl.z) ? pr - P : P - pl;
  vec3 dyv = abs(pu.z - P.z) < abs(P.z - pd.z) ? pu - P : P - pd;
  vec3 N = normalize(cross(dxv, dyv));

  float z = -P.z;
  float rUv = uAoParams.x / max(0.01, 2.0 * z * uProj.z);
  float phi = ign(gl_FragCoord.xy) * 6.2831853;
  float occ = 0.0;
  const int TAPS = 8;
  for (int i = 0; i < TAPS; i++) {
    float fi = float(i);
    float r = sqrt((fi + 0.5) / float(TAPS));
    float a = fi * 2.39996323 + phi;
    vec2 o = vec2(cos(a), sin(a)) * r * rUv;
    vec3 v = vpos(clamp(vUv + vec2(o.x / uProj.w, o.y), 0.001, 0.999)) - P;
    float dv = dot(v, v);
    float fall = clamp(1.0 - dv / (uAoParams.x * uAoParams.x), 0.0, 1.0);
    occ += min(max(dot(v, N) - uAoParams.z, 0.0) / (dv + 1e-4) * uAoParams.x, 1.5) * fall;
  }
  float ao = clamp(1.0 - uAoParams.y * occ / float(TAPS), 0.0, 1.0);
  gl_FragColor = vec4(ao, ao, ao, 1.0);
}
`,Og=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tScene;
uniform sampler2D tDepth;
uniform sampler2D tAo;
uniform vec4 uProj;
uniform vec2 uTexel;
uniform vec4 uTone;     // exposure, contrast, saturation, dofAmount
uniform vec3 uAoTint;
uniform vec3 uShadowTint;
uniform float uTime;

float viewZ(float d) {
  return (uProj.x * uProj.y) / max(1e-5, (uProj.y - d * (uProj.y - uProj.x)));
}

vec3 aces(vec3 x) {
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}

vec3 toSRGB(vec3 c) {
  return mix(c * 12.92, 1.055 * pow(max(c, vec3(0.0)), vec3(1.0 / 2.4)) - 0.055, step(0.0031308, c));
}

float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}

void main() {
  vec3 sharp = texture2D(tScene, vUv).rgb;

  // Macro Tilt-Shift Bokeh DoF (9-tap disc blur outside sharp center band)
  if (uTone.w > 0.01) {
    float band = abs(vUv.y - 0.47);
    float blurAmt = smoothstep(0.15, 0.46, band) * uTone.w;
    if (blurAmt > 0.01) {
      vec2 r = uTexel * (4.2 * blurAmt);
      vec3 b = sharp * 0.2;
      b += texture2D(tScene, vUv + vec2(r.x, 0.0)).rgb * 0.1;
      b += texture2D(tScene, vUv - vec2(r.x, 0.0)).rgb * 0.1;
      b += texture2D(tScene, vUv + vec2(0.0, r.y)).rgb * 0.1;
      b += texture2D(tScene, vUv - vec2(0.0, r.y)).rgb * 0.1;
      b += texture2D(tScene, vUv + vec2(r.x * 0.7, r.y * 0.7)).rgb * 0.1;
      b += texture2D(tScene, vUv + vec2(-r.x * 0.7, r.y * 0.7)).rgb * 0.1;
      b += texture2D(tScene, vUv + vec2(r.x * 0.7, -r.y * 0.7)).rgb * 0.1;
      b += texture2D(tScene, vUv + vec2(-r.x * 0.7, -r.y * 0.7)).rgb * 0.1;
      sharp = mix(sharp, b, clamp(blurAmt * 0.92, 0.0, 0.92));
    }
  }

  // Contact AO
  float ao = 0.25 * (
    texture2D(tAo, vUv + uTexel * vec2(1.0, 1.0)).r +
    texture2D(tAo, vUv + uTexel * vec2(-1.0, 1.0)).r +
    texture2D(tAo, vUv + uTexel * vec2(1.0, -1.0)).r +
    texture2D(tAo, vUv + uTexel * vec2(-1.0, -1.0)).r
  );
  sharp *= mix(uAoTint, vec3(1.0), ao);

  // Subtle dark cardstock edge rim along depth silhouettes
  float z = viewZ(texture2D(tDepth, vUv).r);
  vec2 ox = vec2(uTexel.x * 1.15, 0.0);
  vec2 oy = vec2(0.0, uTexel.y * 1.15);
  float zfar = max(
    max(viewZ(texture2D(tDepth, vUv + ox).r), viewZ(texture2D(tDepth, vUv - ox).r)),
    max(viewZ(texture2D(tDepth, vUv + oy).r), viewZ(texture2D(tDepth, vUv - oy).r))
  );
  float edge = smoothstep(0.0045 * z, 0.014 * z, zfar - z) * 0.24;
  sharp = mix(sharp, sharp * vec3(0.76, 0.67, 0.58), edge);

  // Vignette
  vec2 vc = vUv - 0.5;
  sharp *= 1.0 - 0.14 * smoothstep(0.2, 0.74, dot(vc, vc));

  // ACES + warm filmic grade
  vec3 col = aces(sharp * uTone.x * vec3(1.03, 0.98, 0.99));
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(vec3(l), col, uTone.z);
  col = toSRGB(max(col, 0.0));
  col = (col - 0.44) * uTone.y + 0.44;
  col += uShadowTint * 0.03 * (1.0 - smoothstep(0.0, 0.45, l));

  // Fine tactile paper grain
  float grain = (hash12(gl_FragCoord.xy + vec2(uTime * 19.0)) - 0.5) * 0.016;
  col += grain;

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;function zg({renderer:n,scene:e,camera:t}){if(!(n.capabilities.isWebGL2!==!1&&(n.extensions.has("EXT_color_buffer_float")||n.extensions.has("EXT_color_buffer_half_float"))))return{setMode(){},render(x,E=.9){n.toneMapping=nc,n.toneMappingExposure=E,n.render(e,t)},dispose(){}};let r=2,s=2,o=0;const a=new wc,l=new _a(-1,1,1,-1,0,1),c=new wt;c.setAttribute("position",new $t(new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),3));const h=new He(c,null);h.frustumCulled=!1,a.add(h);const p={value:new et(.1,100,.35,1.6)},d={value:new Te(1/1280,1/720)},f=new vn({vertexShader:$l,fragmentShader:Fg,uniforms:{tDepth:{value:null},uProj:p,uTexel:d,uAoParams:{value:new z(.28,1.05,.012)}},depthTest:!1,depthWrite:!1,toneMapped:!1}),g=new vn({vertexShader:$l,fragmentShader:Og,uniforms:{tScene:{value:null},tDepth:{value:null},tAo:{value:null},uProj:p,uTexel:d,uTone:{value:new et(.88,1.06,.95,0)},uAoTint:{value:new je("#5a3214")},uShadowTint:{value:new je("#3a200c")},uTime:{value:0}},depthTest:!1,depthWrite:!1,toneMapped:!1});let v=null,m=null;const u=new Te;function T(x,E){var b;v&&((b=v.depthTexture)==null||b.dispose(),v.dispose()),m&&m.dispose(),v=new Rn(x,E,{type:zi,format:Xt,minFilter:Ht,magFilter:Ht,depthBuffer:!0,samples:2}),v.texture.colorSpace=pn;const w=new ua(x,E,Wn);w.format=Di,w.minFilter=w.magFilter=Yt,v.depthTexture=w;const A=Math.max(2,Math.round(x*.5)),P=Math.max(2,Math.round(E*.5));m=new Rn(A,P,{type:hn,format:Xt,minFilter:Ht,magFilter:Ht,depthBuffer:!1}),d.value.set(1/x,1/E)}function y(){n.getDrawingBufferSize(u);const x=Math.max(2,Math.floor(u.x)),E=Math.max(2,Math.floor(u.y));(x!==r||E!==s||!v)&&(r=x,s=E,T(x,E))}return{setMode(x){x==="bookshelf"?(o=0,f.uniforms.uAoParams.value.set(.32,.95,.015)):x==="book"?(o=.14,f.uniforms.uAoParams.value.set(.24,1,.012)):(o=.82,f.uniforms.uAoParams.value.set(.3,1.15,.012))},render(x,E=.88){y();const w=Math.tan(ia.degToRad(t.fov)/2);p.value.set(t.near,t.far,w,t.aspect||r/s),g.uniforms.uTone.value.set(E,1.06,.95,o),g.uniforms.uTime.value=(g.uniforms.uTime.value+x)%60,n.setRenderTarget(v),n.clear(),n.render(e,t),f.uniforms.tDepth.value=v.depthTexture,h.material=f,n.setRenderTarget(m),n.render(a,l),g.uniforms.tScene.value=v.texture,g.uniforms.tDepth.value=v.depthTexture,g.uniforms.tAo.value=m.texture,h.material=g,n.setRenderTarget(null),n.render(a,l)},dispose(){var x;(x=v==null?void 0:v.depthTexture)==null||x.dispose(),v==null||v.dispose(),m==null||m.dispose(),f.dispose(),g.dispose(),c.dispose()}}}function kg(){let n=null,e=!1,t=null,i=0;function r(){if(e)return null;if(!n){const a=window.AudioContext||window.webkitAudioContext;if(!a)return null;n=new a}if(n.state==="suspended"&&n.resume().catch(()=>{}),!t&&n){const a=n.sampleRate*.5;t=n.createBuffer(1,a,n.sampleRate);const l=t.getChannelData(0);for(let c=0;c<a;c++)l[c]=Math.random()*2-1}return n}function s({duration:a=.14,freq:l=1400,q:c=1.6,gain:h=.14,type:p="bandpass",delay:d=0}){const f=r();if(!f||!t)return;const g=f.currentTime+d,v=f.createBufferSource();v.buffer=t;const m=f.createBiquadFilter();m.type=p,m.frequency.setValueAtTime(l,g),m.Q.setValueAtTime(c,g);const u=f.createGain();u.gain.setValueAtTime(1e-4,g),u.gain.exponentialRampToValueAtTime(Math.max(.001,h),g+Math.min(.02,a*.2)),u.gain.exponentialRampToValueAtTime(1e-4,g+a),v.connect(m),m.connect(u),u.connect(f.destination),v.start(g),v.stop(g+a+.02)}function o({freq:a=220,freqEnd:l=160,duration:c=.12,gain:h=.08,type:p="triangle",delay:d=0}){const f=r();if(!f)return;const g=f.currentTime+d,v=f.createOscillator();v.type=p,v.frequency.setValueAtTime(a,g),v.frequency.exponentialRampToValueAtTime(Math.max(20,l),g+c);const m=f.createGain();m.gain.setValueAtTime(1e-4,g),m.gain.exponentialRampToValueAtTime(Math.max(.001,h),g+.01),m.gain.exponentialRampToValueAtTime(1e-4,g+c),v.connect(m),m.connect(f.destination),v.start(g),v.stop(g+c+.02)}return{get muted(){return e},unlock(){r()},toggleMute(){return e=!e,e},playHover(){const a=performance.now();a-i<90||(i=a,s({duration:.055,freq:1850,q:2,gain:.055}))},playBookPull(){s({duration:.22,freq:650,q:1.1,gain:.16}),o({freq:135,freqEnd:82,duration:.12,gain:.1}),s({duration:.16,freq:2400,q:1.8,gain:.08,delay:.14})},playPageTurn(){s({duration:.28,freq:1300,q:.95,gain:.16}),s({duration:.035,freq:3400,q:3,gain:.09,delay:.04}),s({duration:.028,freq:4100,q:3.2,gain:.07,delay:.11}),s({duration:.05,freq:920,q:1.5,gain:.09,delay:.22})},playFoldPop(a=1){const l=1900+Math.random()*900;s({duration:.09*a,freq:l,q:2.2,gain:.075})},playFootstep(){const a=900+Math.random()*450;s({duration:.045,freq:a,q:1.7,gain:.04})},playStamp(){o({freq:145,freqEnd:65,duration:.13,gain:.18,type:"sine"}),s({duration:.06,freq:950,q:1.2,gain:.12}),o({freq:523.25,freqEnd:523.25,duration:.32,gain:.06,type:"sine",delay:.06}),o({freq:659.25,freqEnd:659.25,duration:.36,gain:.05,type:"sine",delay:.13})}}}function Bg({materials:n,audio:e,progress:t,onHoverBook:i,onSelectBook:r,onCreateBook:s,onOpenPassport:o,onToggleNight:a}){const l=new Ze,c=new xa,h=new Te,p=qo(!1),d=qo(!0),f=n.paper({map:p,color:"#d8b796",fibre:"world"}),g=n.paper({map:d,color:"#b58d6c",fibre:"world"}),v=n.paper({map:d,color:"#8f694c",fibre:"world"}),m=n.paper({color:"#e5d3bc",fibre:"world"}),u=new He(new Et(26,15),m);u.position.set(0,2,-1.7),u.receiveShadow=!0,l.add(u);const T=new Ze;T.position.set(-5.6,2.2,-1.2);const y=n.paper({color:"#fff4dc",emissive:"#ffd590",emissiveIntensity:.72,glowTag:!0}),x=new He(new Et(2.2,5.4),y);T.add(x);const E=new He(new _e(.18,5.5,.25),f);E.position.set(1.1,0,.08);const w=new He(new _e(2.2,.14,.22),f);w.position.set(0,.65,.08),T.add(E,w),l.add(T);const A=new Ze;l.add(A);function P(I,K,Z,re,we,oe=A,ge=!0){const Ce=new He(new _e(I,K,Z),re);return Ce.position.set(we[0],we[1],we[2]),Ce.castShadow=!0,Ce.receiveShadow=!0,ge&&Bt(Ce,R.umber,.28,25),oe.add(Ce),Ce}P(7.9,6.6,.14,v,[.55,1.85,-1.25]),P(.24,6.7,1.5,g,[-3.35,1.85,-.55]),P(.24,6.7,1.5,g,[1.85,1.85,-.55]),P(.24,6.7,1.5,g,[4.45,1.85,-.55]),P(8.2,.22,1.62,g,[.55,5.15,-.5]),P(5.1,.2,1.5,f,[-.75,2.95,-.54]),P(5.1,.22,1.55,f,[-.75,.72,-.52]),P(5.1,.24,1.6,g,[-.75,-1.35,-.5]),P(2.55,.2,1.5,f,[3.15,1.95,-.54]),P(2.55,.24,1.6,g,[3.15,-1.35,-.5]);const b=[],M=new Ze;M.position.set(-1.95,3.05,-.42),P(.56,.09,.56,g,[0,.045,0],M);const U=new He(new ga(.6,.04,6,16,Math.PI*1.15),f);U.position.set(0,.72,0),U.rotation.z=-Math.PI*.65,M.add(U);const Y=new He(new pa(.54,1),n.paper({color:R.teal}));Y.position.set(0,.74,0),Y.castShadow=!0,Bt(Y,R.cutEdge,.35,15);const N=new He(new cr(.55,0),n.paper({color:R.sage}));N.scale.set(.98,.62,.72),N.rotation.set(.45,.7,.2);const k=new He(new cr(.545,0),n.paper({color:R.paper}));k.scale.set(.65,.88,.55),k.rotation.set(-.5,-.8,.3),Y.add(N,k),M.add(Y);const O=new He(new oi(.68,8,8),new un({visible:!1}));O.position.set(0,.74,0),O.userData.action="passport",M.add(O),b.push(O),A.add(M);for(const[I,K,Z]of[[.35,-.45,R.terracotta],[.95,-.35,R.pine]]){const re=new Ze;re.position.set(I,3.05,K),P(.44,.1,.44,f,[0,.1,0],re),P(.44,.04,.44,n.paper({color:Z}),[0,.03,0],re,!1);const we=new He(new We(.08,.12,.42,8),f);we.position.set(0,.35,0),we.castShadow=!0;const oe=new He(new oi(.11,8,6),f);oe.position.set(0,.56,0),oe.castShadow=!0;const ge=new He(new _e(.5,.65,.5),new un({visible:!1}));ge.position.set(0,.32,0),ge.userData.action="passport",b.push(ge),re.add(we,oe,ge),A.add(re)}const V=new Ze;V.position.set(3.12,2.05,-.42);const $=new He(new We(.42,.28,.52,6),n.paper({color:"#d7cfc2"}));$.position.y=.26,$.castShadow=!0,Bt($,R.ink,.3,20),V.add($);for(let I=0;I<8;I++){const K=I/8*Math.PI*2,Z=new He(new _e(.16,.72,.025),n.paper({color:I%2===0?R.pine:R.sage}));Z.position.set(Math.cos(K)*.2,.74,Math.sin(K)*.2),Z.rotation.set(.42*Math.sin(K),K,.42*Math.cos(K)),Z.castShadow=!0,Bt(Z,R.cutEdge,.35),V.add(Z)}A.add(V);const W=new Ze;W.position.set(3.15,-1.23,-.25),P(.68,.08,.68,g,[0,.04,0],W);const le=new He(new We(.05,.14,.68,5),n.paper({color:R.kraft}));le.position.set(0,.38,0),le.castShadow=!0,Bt(le,R.ink,.35);const me=new He(new pt(.56,.55,8),n.paper({color:R.lantern,emissive:R.lantern,emissiveIntensity:.95,glowTag:!0}));me.position.set(0,.92,0),me.castShadow=!0,Bt(me,R.ink,.35,12);const xe=new He(new _e(1.1,1.35,1.1),new un({visible:!1}));xe.position.set(0,.65,0),xe.userData.action="daynight",b.push(xe),W.add(le,me,xe),A.add(W),P(.95,.14,.75,n.paper({color:R.ochre}),[2.35,-1.16,-.32],A),P(.9,.13,.72,n.paper({color:R.kraft}),[3.9,-1.16,-.32],A),P(.9,.13,.72,n.paper({color:R.paper}),[3.9,-1.02,-.32],A);for(let I=0;I<4;I++)P(.24,1.32,.95,n.paper({color:I%2?R.kraft:"#9a7b5c"}),[-2.5+I*.28,-.58,-.4],A);const fe=new Ze;A.add(fe);let De=[],B=[],J=[],Q=-1,de=-1,ye=0,Pe=0,pe=!1,Ee=-.35,ke=!1,Oe=!1,L=0,Xe=-.35;const ne=new z;function ce(I){for(J=I;fe.children.length>0;)fe.remove(fe.children[0]);De=[],B=[];const K=I.length,Z=Math.min(4.45,Math.max(3.6,K*.88)),re=Z/Math.max(1,K-1),we=-.75-Z/2;I.forEach((oe,ge)=>{const Ce=new Ze,Ie=new z(we+ge*re,.83,-.45);Ce.position.copy(Ie);const Se=Ig(oe),Ue=Dg(oe),Be=n.paper({map:Se,color:"#ffffff"}),Ye=n.paper({map:Ue,color:"#ffffff"}),H=n.paper({color:R.cutEdge}),Ae=n.paper({color:oe.ribbonColor||R.terracotta}),ae=.42,ue=1.72,be=1.18,he=new Ze;Ce.add(he);const ze=P(ae,ue,.05,Be,[0,ue/2,be/2],he,!0),st=P(.05,ue,be,Ye,[ae/2-.015,ue/2,0],he,!0);P(.05,ue,be,n.paper({color:oe.spineColor}),[-ae/2+.015,ue/2,0],he,!0),P(ae-.09,ue-.08,be-.06,H,[0,ue/2,0],he,!0),oe.isCreator||P(.075,.34,.014,Ae,[0,-.1,be/2-.03],he,!1),ze.userData.bookIndex=ge,st.userData.bookIndex=ge;const dt=new He(new _e(.56,1.84,1.36),new un({visible:!1}));dt.position.set(0,ue/2,.06),dt.userData.bookIndex=ge,he.add(dt),B.push(ze,st,dt),fe.add(Ce),De.push({book:oe,idx:ge,slot:Ce,pivot:he,basePos:Ie,hoverT:0,pullT:0})})}function ee(I,K,Z){ne.copy(I.slot.position),ne.y+=.9,ne.z+=.65,ne.project(K);const re=Z.getBoundingClientRect();return{x:(ne.x*.5+.5)*re.width,y:(-ne.y*.5+.5)*re.height}}function ve(I,K){if(!pe||de!==-1)return;c.setFromCamera(h,I);const Z=c.intersectObjects(B,!1),re=Z.length>0?Z[0].object.userData.bookIndex:-1;if(re!==Q)if(Q=re,re!==-1){e.playHover();const oe=J[re],ge=K?ee(De[re],I,K):null;i==null||i(oe,nr(t,oe),ge)}else i==null||i(null,0,null);else if(Q!==-1&&K){const oe=J[Q],ge=ee(De[Q],I,K);i==null||i(oe,nr(t,oe),ge)}const we=c.intersectObjects(b,!1);K.style.cursor=re!==-1||we.length>0?"pointer":"default"}function D(I){const K=Math.max(.4,I.aspect||1);if(K>=1.1)return{baseZ:8.9,centerX:.35,centerY:1.68};const Z=ia.degToRad(I.fov/2);return{baseZ:Math.max(9.5,3.15/(Math.tan(Z)*Math.max(.42,K))),centerX:Ee,centerY:1.62}}function S(I){if(I<0||I>=J.length||de!==-1)return;const K=J[I];if(K.isCreator){e.playBookPull(),s==null||s();return}de=I,e.playBookPull(),setTimeout(()=>{r==null||r(K)},420)}function _(I,K,Z){if(I<0||I>=J.length)return;Q=I,e.playHover();const re=J[I],we=Z&&K?ee(De[I],K,Z):null;i==null||i(re,nr(t,re),we)}function F(I,K,Z){if(!pe)return;if(I.pointerType==="touch"){if(ke){const we=I.clientX-L;Math.abs(we)>8&&(Oe=!0),Ee=Math.max(-.75,Math.min(2.35,Xe-we*.012))}return}const re=K.getBoundingClientRect();h.x=(I.clientX-re.left)/re.width*2-1,h.y=-((I.clientY-re.top)/re.height)*2+1,ye=h.x,Pe=h.y,ve(Z,K)}function X(I,K,Z){if(!pe||de!==-1)return;const re=K.getBoundingClientRect();if(h.x=(I.clientX-re.left)/re.width*2-1,h.y=-((I.clientY-re.top)/re.height)*2+1,I.pointerType==="touch"){ke=!0,Oe=!1,L=I.clientX,Xe=Ee;return}if(ve(Z,K),Q!==-1){S(Q);return}c.setFromCamera(h,Z);const we=c.intersectObjects(b,!1);if(we.length>0){const oe=we[0].object.userData.action;oe==="passport"?(e.playHover(),o==null||o()):oe==="daynight"&&(e.playHover(),a==null||a())}}function j(I,K,Z){if(pe&&I.pointerType==="touch"&&ke&&(ke=!1,!Oe&&de===-1)){const re=K.getBoundingClientRect();h.x=(I.clientX-re.left)/re.width*2-1,h.y=-((I.clientY-re.top)/re.height)*2+1,c.setFromCamera(h,Z);const we=c.intersectObjects(B,!1),oe=we.length>0?we[0].object.userData.bookIndex:-1;if(oe!==-1){Q===oe?S(oe):_(oe,Z,K);return}const ge=c.intersectObjects(b,!1);if(ge.length>0){const Ce=ge[0].object.userData.action;Ce==="passport"?(e.playHover(),o==null||o()):Ce==="daynight"&&(e.playHover(),a==null||a())}}}return{group:l,setBooks:ce,previewBookByIndex(I,K,Z){_(I,K,Z)},openHoveredBook(){Q!==-1&&S(Q)},enter(I){pe=!0,Q=-1,de=-1,ke=!1,Ee=-.35;for(const we of De)we.hoverT=0,we.pullT=0,we.slot.position.copy(we.basePos),we.slot.rotation.set(0,0,0);I.fov=38;const{baseZ:K,centerX:Z,centerY:re}=D(I);I.position.set(Z,re+.08,K),I.lookAt(Z,re,0),I.updateProjectionMatrix()},leave(){pe=!1,Q=-1,de=-1,ke=!1},onPointerMove:F,onPointerDown:X,onPointerUp:j,update(I,K,Z,re){Y.rotation.y=K*.24,re.setAccentPosition(3.15,-.2,.4);const{baseZ:we,centerX:oe,centerY:ge}=D(Z),Ce=Z.aspect<1.1,Ie=oe+(Ce?0:ye*.28),Se=ge+.08+(Ce?0:Pe*.14);Z.position.x+=(Ie-Z.position.x)*(1-Math.exp(-8*I)),Z.position.y+=(Se-Z.position.y)*(1-Math.exp(-8*I)),Z.position.z+=(we-Z.position.z)*(1-Math.exp(-8*I)),Z.lookAt(Z.position.x,ge,0);for(const Ue of De){const Be=Ue.idx===Q,Ye=Ue.idx===de;Ue.hoverT+=((Be?1:0)-Ue.hoverT)*(1-Math.exp(-12*I)),Ye&&(Ue.pullT=Math.min(1,Ue.pullT+I*2.5));const H=Ue.pullT*Ue.pullT*(3-2*Ue.pullT);Ue.slot.position.set(Ue.basePos.x*(1-H)+H*.35,Ue.basePos.y+Ue.hoverT*.08+H*.55,Ue.basePos.z+Ue.hoverT*.52+H*2.9),Ue.slot.rotation.x=Ue.hoverT*.18+H*.14,Ue.slot.rotation.y=-Ue.hoverT*.34-H*.22}}}}function se(n,e,{pos:t=[0,0,0],rot:i=[0,0,0],castShadow:r=!0,edge:s=!0}={}){const o=new He(n,e);return o.position.set(t[0],t[1],t[2]),o.rotation.set(i[0],i[1],i[2]),o.castShadow=r,o.receiveShadow=!0,s&&Bt(o,R.ink,.34,24),o}function Ut(n,e,t,i,{pos:r=[0,0,0],rot:s=[0,0,0],castShadow:o=!0}={}){const a=new fa(n,{depth:e,bevelEnabled:!0,bevelSize:.007,bevelThickness:.007,bevelSegments:1,curveSegments:10});a.translate(0,0,-e/2);const l=new He(a,[t,i]);return l.position.set(r[0],r[1],r[2]),l.rotation.set(s[0],s[1],s[2]),l.castShadow=o,l.receiveShadow=!0,l}function Hg(n=.42,e=7){const t=new dn;for(let i=0;i<=e*4;i++){const r=i/(e*4)*Math.PI*2,s=n*(.86+.16*Math.abs(Math.sin(r*e*.5))),o=Math.cos(r)*s,a=Math.sin(r)*s*1.08;i===0?t.moveTo(o,a):t.lineTo(o,a)}return t.closePath(),t}function Zl(n=.65,e=.95){const t=new dn;return t.moveTo(0,e),t.lineTo(-n*.28,e*.58),t.lineTo(-n*.15,e*.58),t.lineTo(-n*.42,e*.28),t.lineTo(-n*.22,e*.28),t.lineTo(-n*.5,0),t.lineTo(n*.5,0),t.lineTo(n*.22,e*.28),t.lineTo(n*.42,e*.28),t.lineTo(n*.15,e*.58),t.lineTo(n*.28,e*.58),t.closePath(),t}function Vg(){const n=new dn;return n.moveTo(-.85,0),n.lineTo(-.85,.22),n.lineTo(-.56,.34),n.lineTo(-.34,.46),n.lineTo(-.14,.52),n.lineTo(.14,.52),n.lineTo(.34,.46),n.lineTo(.56,.34),n.lineTo(.85,.22),n.lineTo(.85,0),n.lineTo(.42,0),n.absarc(0,0,.42,0,Math.PI,!1),n.lineTo(-.85,0),n.closePath(),n}function jl(){const n=new dn;return n.moveTo(-.85,.22),n.lineTo(-.85,.36),n.quadraticCurveTo(0,.78,.85,.36),n.lineTo(.85,.22),n.quadraticCurveTo(0,.62,-.85,.22),n.closePath(),n}function Gg(n=1,e=.72,t=1.15){const i=new dn;return i.moveTo(-n/2,0),i.lineTo(-n/2,e),i.lineTo(0,t),i.lineTo(n/2,e),i.lineTo(n/2,0),i.closePath(),i}function Wg(){const n=new dn;return n.moveTo(-.62,.14),n.quadraticCurveTo(-.32,0,0,0),n.quadraticCurveTo(.32,0,.65,.18),n.lineTo(.52,.25),n.quadraticCurveTo(.22,.12,0,.12),n.quadraticCurveTo(-.22,.12,-.5,.21),n.closePath(),n}function Jl(n=1.1,e=1.55){const t=new dn;return t.moveTo(-n*.5,0),t.quadraticCurveTo(-n*.38,e*.78,-n*.14,e*.96),t.quadraticCurveTo(-n*.02,e,n*.1,e*.82),t.quadraticCurveTo(n*.28,e*.5,n*.5,0),t.closePath(),t}function Xc(n,e,{scale:t=1,rot:i=0,x:r=0,z:s=0}={}){const o=new Ze;o.position.set(r,0,s),o.rotation.y=i,o.scale.setScalar(t);const a=new Ze;o.add(a);const l=(E,w={})=>e.paper({color:E,...w}),c=l(R.cutEdge,{vary:!1}),h={},p=[];let d=.42*t,f=.06;function g(E,w,A,P,b=0){const M=l(R.ink),U=l(R.lantern,{emissive:R.lantern,emissiveIntensity:.95,glowTag:!0}),Y=new Ze;Y.position.set(w,A,P),Y.rotation.y=b,Y.add(se(new _e(.24,.26,.02),M,{edge:!1}),se(new Et(.18,.2),U,{pos:[0,0,.013],edge:!1}),se(new _e(.2,.02,.028),M,{pos:[0,0,.008],edge:!1}),se(new _e(.02,.22,.028),M,{pos:[0,0,.008],edge:!1})),E.add(Y)}switch(n){case"torii":{const E=l(R.terracotta),w=l(R.umber),A=new dn;A.moveTo(-.74,1.06),A.quadraticCurveTo(0,.98,.74,1.06),A.lineTo(.78,1.16),A.quadraticCurveTo(0,1.06,-.78,1.16),A.closePath(),a.add(se(new _e(.11,1.06,.11),E,{pos:[-.4,.53,0]}),se(new _e(.11,1.06,.11),E,{pos:[.4,.53,0]}),se(new _e(.16,.16,.16),w,{pos:[-.4,.08,0]}),se(new _e(.16,.16,.16),w,{pos:[.4,.08,0]}),Ut(A,.15,E,c),se(new _e(1.06,.09,.09),E,{pos:[0,.84,0]}),se(new _e(.08,.2,.08),E,{pos:[0,.94,0]})),d=.16*t;break}case"pagoda":case"daliPagoda":{const E=l(R.paper),w=n==="daliPagoda"?R.paperShade:R.terracotta,A=l(w),P=l(R.ink),b=n==="daliPagoda"?5:4;a.add(se(new _e(.84,.12,.84),l(R.kraft),{pos:[0,.06,0]}));for(let M=0;M<b;M++){const U=.68-M*.09,Y=.28+M*.4;a.add(se(new _e(U*.7,.3,U*.7),E,{pos:[0,Y,0]})),a.add(se(new pt(U*.78,.22,4),A,{pos:[0,Y+.24,0],rot:[0,Math.PI/4,0]}))}a.add(se(new We(.02,.035,.34,6),P,{pos:[0,.32+b*.4,0]})),d=.52*t;break}case"palazzo":case"chalet":case"machiya":{const E=n==="palazzo"?R.rose:n==="chalet"?R.ochre:R.kraft,w=n==="palazzo"?"#9e5446":n==="chalet"?R.terracotta:R.ink,A=l(E),P=l(w),b=Ut(Gg(1.06,.78,1.24),.92,A,c);a.add(b),a.add(se(new _e(.74,.045,1.04),P,{pos:[-.3,1.03,0],rot:[0,0,.7]}),se(new _e(.74,.045,1.04),P,{pos:[.3,1.03,0],rot:[0,0,-.7]}),se(new _e(.22,.36,.03),l(R.paperShade),{pos:[0,.19,.46]})),g(a,-.26,.52,.465,0),g(a,.26,.52,.465,0),g(a,.535,.52,.16,Math.PI/2),g(a,-.535,.52,-.16,-Math.PI/2),n==="chalet"&&a.add(se(new _e(.16,.34,.16),l(R.paperShade),{pos:[.22,1.14,-.18]})),p.push([0,.35,.65,.6]),d=.68*t;break}case"teaHouse":{const E=l(R.paper),w=l(R.ink),A=l(R.pine),P=l(R.lantern,{emissive:R.lantern,emissiveIntensity:.75,glowTag:!0});a.add(se(new _e(1.18,.14,.98),w,{pos:[0,.07,0]}),se(new _e(1.02,.68,.84),E,{pos:[0,.48,0]}),se(new Et(.56,.44),P,{pos:[0,.46,.425],edge:!1}),se(new pt(.95,.44,4),A,{pos:[0,1.02,0],rot:[0,Math.PI/4,0]})),p.push([0,.35,.6,.55]),d=.72*t;break}case"veniceBridge":{const E=l(R.paper),w=l(R.kraft);a.add(Ut(Vg(),.66,E,c),Ut(jl(),.05,w,c,{pos:[0,0,.31]}),Ut(jl(),.05,w,c,{pos:[0,0,-.31]}));for(const A of[-.66,-.46,-.24,0,.24,.46,.66]){const P=.52-Math.abs(A)*.36;a.add(se(new _e(.18,.04,.58),w,{pos:[A,P,0]}))}d=.2*t;break}case"windmill":{const E=l(R.terracotta),w=l(R.cutEdge),A=l(R.pine);a.add(se(new We(.28,.46,1.38,6),E,{pos:[0,.69,0]}),se(new pt(.38,.42,6),A,{pos:[0,1.56,0]}));const P=new Ze;P.position.set(0,1.24,.36);for(let b=0;b<4;b++){const M=new Ze;M.rotation.z=b*Math.PI/2+.35,M.add(se(new _e(.05,.82,.03),l(R.ink),{pos:[0,.41,0]}),se(new _e(.22,.62,.018),w,{pos:[.11,.48,.01]})),P.add(M)}a.add(P),h.windmillHub=P,d=.55*t;break}case"bellTower":{const E=l(R.terracotta),w=l(R.cutEdge),A=l(R.lantern,{emissive:R.lantern,emissiveIntensity:.9,glowTag:!0});a.add(se(new _e(.56,1.65,.56),E,{pos:[0,.825,0]}),se(new _e(.46,.32,.46),w,{pos:[0,1.78,0]}),se(new pt(.42,.55,4),l(R.ink),{pos:[0,2.2,0],rot:[0,Math.PI/4,0]}),se(new Et(.18,.24),A,{pos:[0,1.78,.235],edge:!1})),d=.45*t;break}case"lighthouse":{const E=l(R.cutEdge),w=l(R.terracotta),A=l(R.lantern,{emissive:R.lantern,emissiveIntensity:1.15,glowTag:!0});a.add(se(new We(.32,.4,.42,8),E,{pos:[0,.21,0]}),se(new We(.26,.32,.42,8),w,{pos:[0,.63,0]}),se(new We(.21,.26,.42,8),E,{pos:[0,1.05,0]}),se(new We(.22,.22,.24,8),A,{pos:[0,1.38,0]}),se(new pt(.28,.26,8),w,{pos:[0,1.62,0]}));const P=new Ze;P.position.set(0,1.38,0),P.add(se(new pt(.45,2.1,10,1,!0),e.paper({color:R.lantern,emissive:R.lantern,emissiveIntensity:.7,transparent:!0,opacity:.24,depthWrite:!1,glowTag:!0}),{pos:[1.05,0,0],rot:[0,0,Math.PI/2],castShadow:!1,edge:!1})),a.add(P),h.beacon=P,p.push([0,.3,0,.75]),d=.48*t;break}case"observatory":{const E=l(R.paper),w=l(R.teal),A=l(R.lantern,{emissive:R.lantern,emissiveIntensity:.9,glowTag:!0});a.add(se(new We(.56,.62,.64,10),E,{pos:[0,.32,0]}),se(new oi(.54,10,6,0,Math.PI*2,0,Math.PI*.55),w,{pos:[0,.64,0]}),se(new _e(.18,.18,.45),l(R.ink),{pos:[0,.94,.42],rot:[-.35,0,0]}),se(new Et(.22,.22),A,{pos:[0,.32,.6],edge:!1})),d=.66*t;break}case"tent":{a.add(se(new pt(.75,.85,5),l(R.ochre),{pos:[0,.425,0]}),se(new pt(.52,.52,5),l(R.terracotta),{pos:[0,.58,0]})),d=.68*t;break}case"campfire":{const E=l(R.ink),w=l(R.lantern,{emissive:R.terracotta,emissiveIntensity:1.3,glowTag:!0});a.add(se(new We(.05,.05,.62,6),E,{pos:[0,.05,0],rot:[0,.4,Math.PI/2]}),se(new We(.05,.05,.62,6),E,{pos:[0,.05,0],rot:[0,-.6,Math.PI/2]}));const A=new Ze;A.add(se(new pt(.16,.42,4),w,{pos:[0,.24,0],castShadow:!1}),se(new pt(.11,.3,4),l(R.terracotta,{emissive:R.lantern,emissiveIntensity:.95,glowTag:!0}),{pos:[.06,.18,.05],rot:[0,.5,-.15],castShadow:!1})),a.add(A),h.flame=A,p.push([0,.25,0,1]),d=.36*t;break}case"tram":{const E=l(R.pine),w=l(R.cutEdge),A=l(R.lantern,{emissive:R.lantern,emissiveIntensity:.65,glowTag:!0});a.add(se(new _e(1.48,.08,.72),l(R.ink),{pos:[0,.04,0]}),se(new _e(1.22,.34,.52),E,{pos:[0,.25,0]}),se(new _e(1.2,.26,.5),w,{pos:[0,.55,0]}),se(new _e(1.26,.08,.56),l(R.kraft),{pos:[0,.72,0]}),se(new Et(.24,.16),A,{pos:[-.32,.54,.255],edge:!1}),se(new Et(.24,.16),A,{pos:[0,.54,.255],edge:!1}),se(new Et(.24,.16),A,{pos:[.32,.54,.255],edge:!1})),d=.75*t;break}case"gondola":case"sailboat":{const E=l(n==="gondola"?R.ink:R.paper),w=Ut(Wg(),.24,E,c);if(a.add(w),n==="sailboat"){const A=new dn;A.moveTo(0,0),A.lineTo(.46,0),A.lineTo(0,.78),A.closePath(),a.add(se(new We(.02,.02,1.05,5),l(R.ink),{pos:[-.04,.64,0]}),Ut(A,.02,l(R.cutEdge),c,{pos:[-.02,.26,0]})),f=.45}else a.add(se(new _e(.24,.13,.18),l(R.terracotta),{pos:[-.06,.18,0]}));h.bob=a,d=.42*t;break}case"pier":{const E=l(R.kraft),w=l(R.ink);a.add(se(new _e(1.35,.08,.56),E,{pos:[0,.18,0]}));for(const A of[-.55,0,.55])a.add(se(new We(.04,.04,.4,6),w,{pos:[A,.2,.24]}),se(new We(.04,.04,.4,6),w,{pos:[A,.2,-.24]}));d=.3*t;break}case"fountain":{const E=l(R.paper),w=l(R.teal);a.add(se(new We(.68,.74,.22,8),E,{pos:[0,.11,0]}),se(new We(.58,.58,.05,8),w,{pos:[0,.21,0]}),se(new We(.14,.2,.52,8),E,{pos:[0,.42,0]}),se(new We(.32,.22,.12,8),E,{pos:[0,.64,0]})),d=.74*t;break}case"sunroom":{const E=l(R.cutEdge),w=l("#cfe6e4",{transparent:!0,opacity:.45,depthWrite:!1});a.add(se(new _e(1.35,.22,1.05),l(R.terracotta),{pos:[0,.11,0]}),se(new _e(1.28,.72,.98),w,{pos:[0,.58,0],castShadow:!1}));for(const A of[-.62,0,.62])a.add(se(new _e(.06,.85,1.02),E,{pos:[A,.6,0]}));a.add(se(new pt(.88,.44,4),w,{pos:[0,1.16,0],rot:[0,Math.PI/4,0],castShadow:!1})),d=.78*t;break}case"hotAirBalloon":{const E=new Ze;E.position.set(0,1.15,0),E.add(se(new We(.56,.26,.52,8),l(R.terracotta),{pos:[0,-.1,0]}),se(new We(.52,.56,.38,8),l(R.ochre),{pos:[0,.34,0]}),se(new pt(.52,.36,8),l(R.teal),{pos:[0,.7,0]})),a.add(se(new _e(.32,.24,.32),l(R.kraft),{pos:[0,.14,0]}),se(new We(.015,.015,.72,4),l(R.ink),{pos:[-.14,.55,.14]}),se(new We(.015,.015,.72,4),l(R.ink),{pos:[.14,.55,.14]}),se(new We(.015,.015,.72,4),l(R.ink),{pos:[-.14,.55,-.14]}),se(new We(.015,.015,.72,4),l(R.ink),{pos:[.14,.55,-.14]}),E),h.bob=E,f=.25,d=.45*t;break}case"bed":{a.add(se(new _e(1.12,.18,.78),l(R.ink),{pos:[0,.12,0]}),se(new _e(1.04,.16,.72),l(R.cutEdge),{pos:[0,.26,0]}),se(new _e(.68,.18,.74),l("#b7a3d4"),{pos:[.18,.28,0]}),se(new _e(.24,.12,.48),l(R.cutEdge),{pos:[-.36,.38,0]}),se(new _e(.08,.54,.78),l(R.kraft),{pos:[-.54,.3,0]})),d=.62*t;break}case"deskWithLamp":{const E=l(R.kraft),w=l(R.lantern,{emissive:R.lantern,emissiveIntensity:.95,glowTag:!0});a.add(se(new _e(1.05,.07,.56),E,{pos:[0,.52,0]}),se(new _e(.07,.5,.48),l(R.ink),{pos:[-.45,.25,0]}),se(new _e(.07,.5,.48),l(R.ink),{pos:[.45,.25,0]}),se(new _e(.34,.03,.24),l(R.cutEdge),{pos:[-.08,.57,.04]}),se(new _e(.34,.22,.03),l(R.paper),{pos:[-.08,.68,-.07],rot:[-.15,0,0]}),se(new We(.02,.03,.26,6),l(R.ink),{pos:[.34,.68,-.1]}),se(new pt(.13,.16,8),w,{pos:[.32,.84,-.06]})),p.push([.32,.45,0,.85]),d=.58*t;break}case"chair":{const E=l(R.paper);a.add(se(new _e(.38,.05,.38),E,{pos:[0,.32,0]}),se(new _e(.38,.38,.05),E,{pos:[0,.52,-.16]}),se(new _e(.05,.32,.05),l(R.ink),{pos:[-.15,.16,.15]}),se(new _e(.05,.32,.05),l(R.ink),{pos:[.15,.16,.15]}),se(new _e(.05,.32,.05),l(R.ink),{pos:[-.15,.16,-.15]}),se(new _e(.05,.32,.05),l(R.ink),{pos:[.15,.16,-.15]})),d=.28*t;break}case"beanbag":{a.add(se(new cr(.42,0),l(R.ochre),{pos:[0,.3,0]}),se(new _e(.26,.26,.14),l(R.rose),{pos:[0,.54,-.14],rot:[.3,.1,.1]})),d=.48*t;break}case"railing":{const E=l(R.cutEdge);a.add(se(new _e(1.4,.06,.07),E,{pos:[0,.58,0]}));for(let w=-3;w<=3;w++)a.add(se(new _e(.045,.58,.045),E,{pos:[w*.21,.29,0]}));d=.16*t;break}case"pottedPlant":{a.add(se(new We(.18,.13,.24,7),l(R.terracotta),{pos:[0,.12,0]}));for(let E=0;E<5;E++){const w=E/5*Math.PI*2;a.add(se(new _e(.12,.38,.02),l(E%2===0?R.sage:R.pine),{pos:[Math.cos(w)*.1,.38,Math.sin(w)*.1],rot:[.32*Math.sin(w),w,.32*Math.cos(w)]}))}f=.65,d=.25*t;break}case"telescope":{const E=l(R.ochre),w=l(R.ink);a.add(se(new We(.025,.025,.68,5),w,{pos:[-.14,.32,.1],rot:[.22,0,-.25]}),se(new We(.025,.025,.68,5),w,{pos:[.14,.32,.1],rot:[.22,0,.25]}),se(new We(.025,.025,.68,5),w,{pos:[0,.32,-.15],rot:[-.28,0,0]}),se(new We(.07,.05,.65,8),E,{pos:[0,.72,.04],rot:[0,0,1.05]})),d=.3*t;break}case"sakuraTree":{const E=l(R.ink),w=l(R.rose),A=l("#dfa79c");a.add(se(new We(.055,.095,.56,6),E,{pos:[0,.28,0]}));const P=Hg(.42,7);a.add(Ut(P,.032,w,c,{pos:[0,.84,0],rot:[0,.2,0]}),Ut(P,.032,A,c,{pos:[0,.84,0],rot:[0,Math.PI/2+.2,0]})),f=.55,d=.26*t;break}case"pineTree":{const E=l(R.ink),w=l(R.pine),A=l(R.sage);a.add(se(new We(.045,.08,.34,6),E,{pos:[0,.17,0]}));const P=Zl(.72,.96);a.add(Ut(P,.028,w,c,{pos:[0,.24,0],rot:[0,.15,0]}),Ut(P,.028,A,c,{pos:[0,.24,0],rot:[0,Math.PI/2+.15,0]})),f=.48,d=.24*t;break}case"cypressTree":{const E=l(R.ink),w=l(R.pine);a.add(se(new We(.04,.07,.34,6),E,{pos:[0,.17,0]}));const A=Zl(.38,1.32);a.add(Ut(A,.026,w,c,{pos:[0,.22,0],rot:[0,.1,0]}),Ut(A,.026,w,c,{pos:[0,.22,0],rot:[0,Math.PI/2+.1,0]})),f=.55,d=.22*t;break}case"palmTree":{a.add(se(new We(.05,.09,1.05,6),l(R.kraft),{pos:[0,.52,0],rot:[.08,0,.08]}));for(let E=0;E<6;E++){const w=E/6*Math.PI*2;a.add(se(new _e(.46,.025,.14),l(R.sage),{pos:[Math.cos(w)*.24+.04,1.02,Math.sin(w)*.24],rot:[.25*Math.sin(w),-w,-.35]}))}f=.8,d=.22*t;break}case"bambooCluster":{for(let E=0;E<5;E++){const w=(E-2)*.12,A=(E%2-.5)*.16,P=1.05+E%3*.28;a.add(se(new We(.032,.038,P,5),l(E%2===0?R.sage:R.pine),{pos:[w,P/2,A],rot:[.04*(E-2),0,.03]}))}f=.85,d=.34*t;break}case"tulipPatch":{const E=[R.terracotta,R.ochre,R.rose,R.cutEdge];for(let w=0;w<6;w++){const A=(w%3-1)*.24,P=(Math.floor(w/3)-.5)*.24;a.add(se(new _e(.03,.24,.02),l(R.sage),{pos:[A,.12,P]}),se(new pt(.08,.14,4),l(E[w%E.length]),{pos:[A,.26,P],rot:[Math.PI,0,0]}))}f=.75,d=.18*t;break}case"karstPeak":{a.add(Ut(Jl(1.15,1.55),.14,l(R.sage),c,{pos:[0,0,0]}),Ut(Jl(.75,1.02),.12,l(R.pine),c,{pos:[.42,0,.16],rot:[0,.2,0]})),d=.64*t;break}case"sandDune":case"snowPeak":{const E=n==="sandDune"?R.ochre:R.snow;a.add(se(new pt(.92,.95,4),l(E),{pos:[0,.47,0],rot:[0,.4,0]})),a.add(se(new pt(.58,.62,4),l(n==="sandDune"?R.mustard:"#e2e9ed"),{pos:[.46,.31,.24],rot:[0,.9,0]})),d=.72*t;break}case"streetLamp":case"stoneLantern":case"hangingLantern":{const E=l(R.lantern,{emissive:R.lantern,emissiveIntensity:1.15,glowTag:!0});n==="stoneLantern"?a.add(se(new We(.07,.12,.42,6),l(R.paperShade),{pos:[0,.21,0]}),se(new _e(.18,.18,.18),E,{pos:[0,.48,0]}),se(new pt(.24,.16,4),l(R.ink),{pos:[0,.64,0],rot:[0,Math.PI/4,0]})):n==="streetLamp"?a.add(se(new We(.06,.09,.08,6),l(R.ink),{pos:[0,.04,0]}),se(new We(.028,.036,.92,6),l(R.ink),{pos:[0,.5,0]}),se(new We(.11,.08,.22,6),E,{pos:[0,1.04,0]}),se(new pt(.15,.12,6),l(R.ink),{pos:[0,1.2,0]})):a.add(se(new We(.03,.04,.86,5),l(R.ink),{pos:[0,.43,0]}),se(new _e(.24,.04,.04),l(R.ink),{pos:[.1,.82,0]}),se(new We(.09,.08,.22,6),E,{pos:[.18,.66,0]})),p.push([0,.15,0,1]),d=.22*t;break}case"sheep":{a.add(se(new _e(.42,.26,.28),l(R.cutEdge),{pos:[0,.24,0]}),se(new _e(.16,.15,.16),l(R.ink),{pos:[.24,.3,0]}),se(new _e(.04,.14,.04),l(R.ink),{pos:[-.12,.07,.08]}),se(new _e(.04,.14,.04),l(R.ink),{pos:[.12,.07,.08]})),d=.28*t;break}case"kite":{const E=new Ze;E.position.set(0,1.35,0),E.add(se(new _e(.32,.32,.02),l(R.terracotta),{pos:[0,0,0],rot:[.2,0,Math.PI/4]}),se(new _e(.06,.42,.01),l(R.ochre),{pos:[-.14,-.34,0],rot:[0,0,-.25]})),a.add(se(new We(.01,.01,1.35,4),l(R.ink),{pos:[0,.67,0]}),E),h.bob=E,f=.9,d=.15*t;break}case"bench":{const E=l(R.kraft);a.add(se(new _e(.68,.05,.28),E,{pos:[0,.24,0]}),se(new _e(.68,.22,.04),E,{pos:[0,.38,-.12]}),se(new _e(.06,.24,.24),l(R.ink),{pos:[-.26,.12,0]}),se(new _e(.06,.24,.24),l(R.ink),{pos:[.26,.12,0]})),d=.36*t;break}case"fence":default:{const E=l(R.paper);a.add(se(new _e(1.05,.05,.04),E,{pos:[0,.34,0]}),se(new _e(1.05,.05,.04),E,{pos:[0,.18,0]}),se(new _e(.07,.42,.06),l(R.ink),{pos:[-.42,.21,0]}),se(new _e(.07,.42,.06),l(R.ink),{pos:[0,.21,0]}),se(new _e(.07,.42,.06),l(R.ink),{pos:[.42,.21,0]})),d=.2*t;break}}let v=1,m=1,u=0;function T(E){v=E,m=E,u=0;const w=Math.max(0,Math.min(1.08,E));a.rotation.x=-(1-w)*(Math.PI/2),a.scale.y=Math.max(.001,w),o.visible=w>.02}function y(E){v=E}function x(E,w){if(Math.abs(v-m)>.001||Math.abs(u)>.001){const b=169*(v-m)-18.72*u;u+=b*E,m+=u*E;const M=Math.max(0,m);a.rotation.x=-(1-Math.min(1.08,M))*(Math.PI/2),a.scale.y=Math.max(.001,Math.min(1.12,M)),o.visible=M>.02}if(f>.05&&m>.85){const A=w*1.45+r*.7+s*.5;a.rotation.z=Math.sin(A)*.045*f}if(h.windmillHub&&(h.windmillHub.rotation.z-=E*.85),h.beacon&&(h.beacon.rotation.y+=E*.9),h.flame){const A=1+Math.sin(w*9.5+r)*.14;h.flame.scale.set(1,A,1)}h.bob&&(h.bob.position.y+=Math.sin(w*2.1+r)*.001,h.bob.rotation.z=Math.sin(w*1.5+s)*.035)}return{root:o,hinge:a,colliderRadius:d,lightPoolOffsets:p,setFoldImmediate:T,setFoldTarget:y,update:x}}function Xg(n,e){const t=new Ze,i=new Ze;if(t.add(i),t.position.set(0,0,-5.25),n==="room")return null;const r=e.paper({color:R.cutEdge,vary:!1}),s=n==="dunes"?[R.ochre,"#c99335"]:n==="skyline"?["#6e7a8a","#4f5a6d"]:["#7b6355","#553f34"],o=[{z:.35,h:1.55,col:s[0],seed:0},{z:-.15,h:2.35,col:s[1],seed:1}];for(const f of o){const g=new dn;if(g.moveTo(-5.8,0),n==="skyline"){const m=[-5.8,-4.4,-3.1,-1.8,-.4,1,2.3,3.8,5.8];for(let u=0;u<m.length-1;u++){const T=f.h*(.45+(u*37+f.seed*19)%50/100);g.lineTo(m[u],T),g.lineTo(m[u+1],T)}}else{const m=f.seed===0?[[-4.2,.72],[-2.1,.42],[.2,.92],[2.4,.55],[4.3,.78]]:[[-4.6,.5],[-2.8,.95],[-.9,.62],[1.4,1],[3.6,.68],[4.9,.82]];for(const[u,T]of m)g.quadraticCurveTo(u-.6,T*f.h*.8,u,T*f.h)}g.lineTo(5.8,0),g.closePath();const v=Ut(g,.036,e.paper({color:f.col,vary:!1}),r,{pos:[0,0,f.z]});i.add(v)}let a=.01,l=.01,c=0;function h(f){a=f,l=f,i.rotation.x=-(1-f)*(Math.PI/2),t.visible=f>.02}function p(f){l=f}function d(f){if(Math.abs(l-a)>.001||Math.abs(c)>.001){const g=121*(l-a)-17.6*c;c+=g*f,a+=c*f;const v=Math.max(0,Math.min(1.06,a));i.rotation.x=-(1-v)*(Math.PI/2),t.visible=v>.02}}return{group:t,setFoldImmediate:h,setFoldTarget:p,update:d}}function qg(n,e=5.9){const t=n==="fireflies"?38:56,i=new Ze,r={sakura:"#f2b1a8",snow:"#fbf8f2",fireflies:"#ffd86b",leaves:"#91a162",dust:"#e6c385",breeze:"#fbf6ea"},s=n==="fireflies"||n==="snow"?new fr(.045,0):new Et(.11,.07),o=new un({color:r[n]||"#fbf6ea",side:Wt,transparent:!0,opacity:n==="breeze"?.55:.88}),a=[];for(let c=0;c<t;c++){const h=new He(s,o);h.position.set((Math.random()-.5)*e*2,.25+Math.random()*3.8,(Math.random()-.5)*e*2),h.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),i.add(h),a.push({mesh:h,vx:(Math.random()-.3)*.35,vy:n==="fireflies"?(Math.random()-.5)*.25:-(.22+Math.random()*.32),vz:(Math.random()-.5)*.25,phase:Math.random()*Math.PI*2})}function l(c,h){for(const p of a){const d=p.mesh;d.position.x+=(p.vx+Math.sin(h*1.1+p.phase)*.22)*c,d.position.y+=(p.vy+(n==="fireflies"?Math.cos(h*1.8+p.phase)*.16:0))*c,d.position.z+=p.vz*c,d.rotation.x+=c*1.1,d.rotation.y+=c*.8,d.position.y<.08?(d.position.y=3.8,d.position.x=(Math.random()-.5)*e*2,d.position.z=(Math.random()-.5)*e*2):d.position.y>4.1&&(d.position.y=.3),d.position.x>e&&(d.position.x=-e),d.position.x<-e&&(d.position.x=e),d.position.z>e&&(d.position.z=-e),d.position.z<-e&&(d.position.z=e)}}return{group:i,update:l,dispose(){s.dispose(),o.dispose()}}}function Yg({materials:n,audio:e,onSceneChange:t,onEnterScene:i}){const r=new Ze,s=new xa,o=new Te,a=new He(new Et(24,24),new gd({opacity:.16}));a.rotation.x=-Math.PI/2,a.position.y=-.02,a.receiveShadow=!0,r.add(a);const l=2.45,c=2.45,h=.026,p=.195,d=3;let f=null,g=new Ze;r.add(g);let v=[],m=[],u=[],T=0,y=0,x=0,E=0,w=!1,A=!1,P=0,b=0,M=0,U=!1;function Y(B,J,Q){const de=Math.max(0,Math.min(Q-1,J)),ye=Math.floor(de),Pe=de-ye,pe=(L,Xe)=>{const ne=d+Xe,ce=ne+1;return L<=ne?-Math.PI/4-(ne-L)*p:Math.PI/4+(L-ce)*p},Ee=pe(B,ye),ke=ye+1<Q?pe(B,ye+1):Ee,Oe=Pe*Pe*(3-2*Pe);return Ee+(ke-Ee)*Oe}function N(B){const J=new wt,Q=new Float32Array(18),de=new Float32Array([0,0,1,0,1,1,0,0,1,1,0,1]);J.setAttribute("position",new $t(Q,3)),J.setAttribute("uv",new $t(de,2)),J.computeVertexNormals();const ye=new He(J,B);ye.castShadow=!0,ye.receiveShadow=!0;const Pe=new wt,pe=new Float32Array(30);Pe.setAttribute("position",new $t(pe,3));const Ee=new bc(Pe,new ca({color:R.indigoInk,transparent:!0,opacity:.72}));return Ee.raycast=()=>{},{mesh:ye,geo:J,positions:Q,lines:Ee,lineGeo:Pe,linePos:pe}}function k(B,J,Q){const de=(J+Q)*.5,ye=(Q-J)*.5,Pe=Math.max(.015,Math.min(Math.PI/4-1e-4,ye)),pe=l*Math.sin(J),Ee=l*Math.cos(J),ke=l*Math.sin(Q),Oe=l*Math.cos(Q),L=l/Math.cos(Pe),Xe=Math.tan(Pe),ne=l*Math.sqrt(Math.max(0,1-Xe*Xe)),ce=L*Math.sin(de),ee=ne,ve=L*Math.cos(de),D=B.positions;D[0]=0,D[1]=0,D[2]=0,D[3]=pe,D[4]=0,D[5]=Ee,D[6]=ce,D[7]=ee,D[8]=ve,D[9]=0,D[10]=0,D[11]=0,D[12]=ce,D[13]=ee,D[14]=ve,D[15]=ke,D[16]=0,D[17]=Oe,B.geo.attributes.position.needsUpdate=!0,B.geo.computeVertexNormals();const S=B.linePos;S[0]=0,S[1]=.004,S[2]=0,S[3]=pe,S[4]=.004,S[5]=Ee,S[6]=0,S[7]=.004,S[8]=0,S[9]=ke,S[10]=.004,S[11]=Oe,S[12]=pe,S[13]=.004,S[14]=Ee,S[15]=ce,S[16]=ee+.004,S[17]=ve,S[18]=ke,S[19]=.004,S[20]=Oe,S[21]=ce,S[22]=ee+.004,S[23]=ve,S[24]=0,S[25]=.004,S[26]=0,S[27]=ce,S[28]=ee+.004,S[29]=ve,B.lineGeo.attributes.position.needsUpdate=!0}function O(){const B=document.createElement("canvas");B.width=B.height=256;const J=B.getContext("2d");J.fillStyle="#f5ebd8",J.fillRect(0,0,256,256),J.strokeStyle=R.indigoInk,J.lineWidth=3,J.strokeRect(10,10,236,236),J.lineWidth=1.4,J.strokeRect(20,20,216,216);const Q=new Bi(B);return Q.colorSpace=St,Q}function V(B,J=0){f=B,r.remove(g),g=new Ze,r.add(g),v=[],m=[],u=[];const Q=Math.max(1,B.scenes.length),de=Q+d*2,ye=de+1,Pe=n.paper({color:"#f5ebd8"}),pe=O(),Ee=n.paper({map:pe,color:"#ffffff",vary:!1}),ke=n.paper({color:"#efe2c7",vary:!1}),Oe=new He(new We(.032,.032,c+.04,8),n.paper({color:R.indigoInk}));Oe.position.y=c/2,Oe.castShadow=!0,g.add(Oe);for(let L=0;L<ye;L++){const Xe=new Ze,ne=L-1-d,ce=L-d,ee=ne>=0&&ne<Q?B.scenes[ne]:null,ve=ce>=0&&ce<Q?B.scenes[ce]:null,D=new He(new _e(h,c,l),Pe);D.position.set(0,c/2,l/2),D.castShadow=!0,D.receiveShadow=!0,Bt(D,R.indigoInk,.65,22),Xe.add(D);const S=ve?n.paper({map:Yl(ve,"left"),color:"#ffffff",vary:!1}):Ee,_=new He(new Et(l,c),S);_.position.set(h/2+.003,c/2,l/2),_.rotation.y=Math.PI/2,_.receiveShadow=!0,Xe.add(_);const F=ee?n.paper({map:Yl(ee,"right"),color:"#ffffff",vary:!1}):Ee,X=new He(new Et(l,c),F);X.position.set(-h/2-.003,c/2,l/2),X.rotation.y=-Math.PI/2,X.receiveShadow=!0,Xe.add(X),g.add(Xe),v.push(Xe)}for(let L=0;L<de;L++){const Xe=L-d,ne=Xe>=0&&Xe<Q?B.scenes[Xe]:null,ce=ne?n.paper({map:Wc(ne,!1),color:"#ffffff",vary:!1}):ke,ee=N(ce);if(g.add(ee.mesh,ee.lines),m.push({leftLeafIdx:L,rightLeafIdx:L+1,floorObj:ee}),ne){const ve=new Ze;g.add(ve);const D=[];for(const S of ne.bookProps){const _=Xc(S.type,n,{x:S.x,z:S.z,rot:S.rot,scale:S.scale});ve.add(_.root),D.push(_)}u.push({scene:ne,leftLeafIdx:L,rightLeafIdx:L+1,floorObj:ee,propsPivot:ve,props:D})}}T=Math.max(0,Math.min(Q-1,J)),y=T,x=0,E=T,$(0,0)}function $(B,J){if(!f)return;const Q=Math.max(1,f.scenes.length),de=9.5,Pe=de*de*(T-y)-2*.84*de*x;x+=Pe*B,y+=x*B,Math.abs(T-y)<.001&&Math.abs(x)<.005&&(y=T,x=0);const pe=Math.max(-.15,Math.min(Q-.85,y));for(let Ee=0;Ee<v.length;Ee++)v[Ee].rotation.y=Y(Ee,pe,Q);for(const Ee of m){const ke=v[Ee.leftLeafIdx].rotation.y,Oe=v[Ee.rightLeafIdx].rotation.y;k(Ee.floorObj,ke,Oe)}for(const Ee of u){const ke=v[Ee.leftLeafIdx].rotation.y,Oe=v[Ee.rightLeafIdx].rotation.y,L=Oe-ke,Xe=(ke+Oe)*.5;Ee.propsPivot.rotation.y=Xe-Math.PI/4;const ne=L/(Math.PI/2),ce=Math.max(0,Math.min(1,(ne-.32)/.62)),ee=ce*ce*(3-2*ce);Ee.propsPivot.visible=ee>.01;for(const ve of Ee.props)ve.setFoldImmediate(ee),ve.update(B,J)}}function W(B){if(!f)return;const J=Math.max(0,Math.min(f.scenes.length-1,B));J!==T&&(T=J,e.playPageTurn(),J!==E&&(E=J,t==null||t(f.scenes[J],J)))}function le(B){w&&(A=!0,U=!1,P=B.clientX,b=B.clientY,M=T)}function me(B){const J=Math.max(.4,B.aspect||1),Q=ia.degToRad(B.fov/2),ye=2.9/(Math.tan(Q)*J),pe=Math.max(8.4,ye)/8.4;return{camY:5*pe,camZ:6.8*pe,lookY:J<1?.85:1.12}}function xe(B,J,Q){var ye,Pe;if(!w)return;const de=J.getBoundingClientRect();if(o.x=(B.clientX-de.left)/de.width*2-1,o.y=-((B.clientY-de.top)/de.height)*2+1,A){const pe=B.clientX-P,Ee=B.clientY-b,ke=B.pointerType==="touch"?26:44;Math.abs(pe)>ke&&Math.abs(pe)>Math.abs(Ee)*1.15&&!U&&(U=!0,W(M+(pe<0?1:-1))),J.style.cursor="grabbing"}else{s.setFromCamera(o,Q);const pe=(Pe=(ye=u[T])==null?void 0:ye.floorObj)==null?void 0:Pe.mesh,Ee=pe?s.intersectObject(pe,!1):[];J.style.cursor=Ee.length>0?"pointer":"grab"}}function fe(B,J,Q){var ye;if(!w||!A)return;if(A=!1,Math.hypot(B.clientX-P,B.clientY-b)<8&&!U){const Pe=J.getBoundingClientRect();o.x=(B.clientX-Pe.left)/Pe.width*2-1,o.y=-((B.clientY-Pe.top)/Pe.height)*2+1,s.setFromCamera(o,Q);const pe=u[T],Ee=[(ye=pe==null?void 0:pe.floorObj)==null?void 0:ye.mesh,pe?v[pe.leftLeafIdx]:null,pe?v[pe.rightLeafIdx]:null,pe==null?void 0:pe.propsPivot].filter(Boolean);s.intersectObjects(Ee,!0).length>0&&(e.playFoldPop(1.2),i==null||i(f.scenes[T]))}}function De(B){if(w&&(Math.abs(B.deltaY)>22||Math.abs(B.deltaX)>22)){const J=(Math.abs(B.deltaX)>Math.abs(B.deltaY)?B.deltaX:B.deltaY)>0?1:-1;W(T+J)}}return{group:r,get currentScene(){return(f==null?void 0:f.scenes[T])||null},get currentIndex(){return T},enter(B,J=0,Q){w=!0,V(B,J),Q.fov=34;const{camY:de,camZ:ye,lookY:Pe}=me(Q);Q.position.set(0,de,ye),Q.lookAt(0,Pe,.35),Q.updateProjectionMatrix(),t==null||t(B.scenes[T],T)},leave(){w=!1,A=!1},prevPage(){W(T-1)},nextPage(){W(T+1)},goToPage(B){W(B)},onPointerDown:le,onPointerMove:xe,onPointerUp:fe,onWheel:De,update(B,J,Q,de){$(B,J),de.setAccentPosition(0,2.2,1.4);const{camY:ye,camZ:Pe,lookY:pe}=me(Q),Ee=1-Math.exp(-7*B);Q.position.x+=(Math.sin(J*.4)*.08-Q.position.x)*Ee,Q.position.y+=(ye-Q.position.y)*Ee,Q.position.z+=(Pe-Q.position.z)*Ee,Q.lookAt(0,pe,.35)}}}function $g({materials:n,audio:e}){const t=new Ze,i=new Ze;t.add(i);const r=n.paper({color:R.terracotta}),s=n.paper({color:R.ochre}),o=n.paper({color:R.cutEdge}),a=n.paper({color:R.ink}),l=n.paper({color:R.kraft}),c=n.paper({color:R.lantern,emissive:R.lantern,emissiveIntensity:1.35,glowTag:!0});function h(fe,De,B,J=[0,0,0]){const Q=new He(fe,De);return Q.position.set(B[0],B[1],B[2]),Q.rotation.set(J[0],J[1],J[2]),Q.castShadow=!0,Q.receiveShadow=!0,Bt(Q,R.ink,.36,22),Q}const p=new Ze;p.position.set(0,.32,0),i.add(p),p.add(h(new pt(.19,.44,5),r,[0,.22,0]),h(new We(.11,.14,.08,6),s,[0,.42,0]),h(new _e(.2,.22,.12),l,[0,.24,-.14]));const d=new Ze;d.position.set(0,.46,0),p.add(d),d.add(h(new _e(.18,.18,.16),o,[0,.1,0]),h(new We(.24,.24,.03,8),a,[0,.19,0]),h(new pt(.13,.14,6),s,[0,.27,0]));const f=new Ze;f.position.set(-.07,.32,0),f.add(h(new _e(.06,.32,.05),a,[0,-.16,0]));const g=new Ze;g.position.set(.07,.32,0),g.add(h(new _e(.06,.32,.05),a,[0,-.16,0])),i.add(f,g);const v=new Ze;v.position.set(-.16,.4,0),v.add(h(new _e(.05,.24,.05),r,[0,-.11,0]));const m=new Ze;m.position.set(.16,.4,0),m.add(h(new _e(.05,.24,.05),r,[0,-.11,0]));const u=new Ze;u.position.set(0,-.22,.07);const T=h(new _e(.11,.14,.11),c,[0,-.09,0]);u.add(h(new We(.008,.008,.09,4),a,[0,-.02,0]),T),m.add(u),p.add(v,m);const y=new z,x=new z(0,.6,0);let E=0,w=0,A=0,P=0,b=0,M=0,U=0,Y=0,N=0,k=0,O=0,V=0,$=0,W=0;function le(){y.set(0,0,0),A=0,P=0,M=0,U=0,Y=0,N=0,k=0,O=0,V=0,$=0,W=0,w=0}function me(fe,De,B){fe.x=Math.max(-B,Math.min(B,fe.x)),fe.z=Math.max(-B,Math.min(B,fe.z));for(const Q of De){const de=fe.x-Q.x,ye=fe.z-Q.z,Pe=.26+Q.r,pe=de*de+ye*ye;if(pe<Pe*Pe){const Ee=Math.sqrt(pe)||.001;fe.x=Q.x+de/Ee*Pe,fe.z=Q.z+ye/Ee*Pe}}}function xe(fe,De,{colliders:B=[],halfBound:J=5.4,run:Q=!1,heightAt:de=()=>0}={}){b+=fe;let ye=De.x||0,Pe=De.z||0;const pe=Math.hypot(ye,Pe);pe>1&&(ye/=pe,Pe/=pe);const Ee=Q?3.55:2.3,ke=16,Oe=ye*Ee,L=Pe*Ee,Xe=Oe-y.x,ne=L-y.z,ce=Math.hypot(Xe,ne);ce<=ke*fe?(y.x=Oe,y.z=L):(y.x+=Xe/ce*ke*fe,y.z+=ne/ce*ke*fe);const ee=Math.hypot(y.x,y.z);let ve=0;if(pe>.05||ee>.2){let ze=(pe>.05?Math.atan2(ye,Pe):Math.atan2(y.x,y.z))-E;ze=Math.atan2(Math.sin(ze),Math.cos(ze)),ve=ze*(1-Math.exp(-12*fe)),E+=ve}w+=(ve/Math.max(fe,.001)-w)*(1-Math.exp(-16*fe));const D=t.position.x,S=t.position.z;t.position.x+=y.x*fe,t.position.z+=y.z*fe,me(t.position,B,J);const _=de(t.position.x,t.position.z)||0;t.position.y+=(_-t.position.y)*(1-Math.exp(-14*fe));const F=Math.hypot(t.position.x-D,t.position.z-S),X=F/Math.max(fe,.001),j=Math.min(1,X/2.3),I=Math.min(1,j/.45);if(P+=(I-P)*(1-Math.exp(-12*fe)),F>5e-4){const he=A;A+=F/.56*Math.PI,(he<Math.PI&&A>=Math.PI||A>=Math.PI*2)&&(A>=Math.PI*2&&(A-=Math.PI*2),X>.35&&e&&e.playFootstep())}else{const he=Math.round(A/Math.PI)*Math.PI;A+=(he-A)*(1-Math.exp(-12*fe)),Math.abs(he-A)<.01&&(A=he>=Math.PI*2?0:he)}const K=Math.sin(E),Z=Math.cos(E),re=y.x*K+y.z*Z,we=Math.max(-14,Math.min(14,(re-W)/Math.max(fe,.001)));W=re;const oe=Math.max(-14,Math.min(14,X*w)),ge=.14*Math.max(-.4,Math.min(1,re/2.3)),Ce=Math.max(-.18,Math.min(.18,-w*.045))*j,Ie=Math.PI*2*2.8,Se=Math.PI*2*1.9,Ue=.025*we+.18*P*Math.sin(A),Be=-.025*oe+.12*P*Math.cos(A);U+=(Ie*Ie*(ge-M)-2*.7*Ie*U)*fe,M+=U*fe,N+=(Ie*Ie*(Ce-Y)-2*.65*Ie*N)*fe,Y+=N*fe,O+=(Se*Se*(Ue-k)-2*.32*Se*O)*fe,k+=O*fe,$+=(Se*Se*(Be-V)-2*.32*Se*$)*fe,V+=$*fe;const Ye=Math.sin(A),H=Math.cos(A),Ae=1-P,ae=Math.sin(b*Math.PI*2*.45);i.position.y=.045*P*Math.abs(Ye),i.rotation.set(M+.02*Ae*ae,.06*P*Ye,Y+.05*P*Ye);const ue=.56*P*H;f.rotation.x=-ue,g.rotation.x=ue;const be=.46*P*H;v.rotation.x=be+.04*Ae*ae,m.rotation.x=-be*.35,p.rotation.x=.06*P*Math.sin(A*2-1.1),d.rotation.x=.07*(P*Math.sin(A*2-1.6)+Ae*.5*ae),u.rotation.set(k,0,V),t.rotation.y=E,T.getWorldPosition(x)}return{group:t,position:t.position,lanternWorldPos:x,teleport(fe,De,B=0,J=0){t.position.set(fe,J,De),E=B,le(),t.rotation.y=E,T.getWorldPosition(x)},update:xe}}function Zg({materials:n,audio:e,progress:t,onOpenSpot:i,onCollectScrap:r,onRequestExit:s}){const o=new Ze,a=new xa,l=new Te,c=new On(new z(0,1,0),0),h=$g({materials:n,audio:e}),p=qo(!0);p.repeat.set(3,2);const d=new He(new _e(36,.6,28),n.paper({map:p,color:"#a88468",fibre:"world"}));d.position.set(0,-.82,0),d.receiveShadow=!0,o.add(d);let f=new Ze;o.add(f);let g=null,v=[],m=null,u=[],T=[],y=[],x=null,E=null,w=!1,A=0;const P=new Set;let b=null,M=null,U=0,Y=!1;const N=["follow","macro","overview"];let k=0,O=0,V=1,$=!1,W=0,le=null,me=0,xe=0;const fe=new Map;let De=0,B=1,J=0;const Q=5.3;function de(){const D=[];for(let K=0;K<12;K++){const Z=K/12*Math.PI*2+K%2*.04,re=Z+Math.PI*2/12*.56,we=Math.cos(Z)*.44,oe=Math.sin(Z)*.44*.86,ge=Math.cos(re)*.44,Ce=Math.sin(re)*.44*.86,Ie=ge-we,Se=Ce-oe,Ue=Math.hypot(Ie,Se)||1,Be=-Se/Ue*.028,Ye=Ie/Ue*.028;D.push(we+Be,0,oe+Ye,ge+Be,0,Ce+Ye,ge-Be,0,Ce-Ye,we+Be,0,oe+Ye,ge-Be,0,Ce-Ye,we-Be,0,oe-Ye)}const X=new wt;X.setAttribute("position",new ut(D,3));const j=new un({color:R.ink,transparent:!0,opacity:.72,side:Wt}),I=new He(X,j);return I.position.y=.022,I.visible=!1,I}function ye(D,S){if(S.wallTheme==="indoor")return;const _=[[-.25,3.2],[.18,2.75],[-.12,2.25],[.22,1.75],[-.18,1.25],[.15,.75],[-.22,-.75],[.14,-1.3],[-.15,-1.85]];for(let F=0;F<_.length;F++){const[X,j]=_[F];if(S.hasCanal&&Math.abs(X)<1.3)continue;const I=new He(new _e(.32+F%2*.08,.018,.24+(F+1)%2*.06),n.paper({color:F%2===0?R.cutEdge:R.kraft,fibre:"world"}));I.position.set(X,.012,j),I.rotation.y=F%3*.16-.12,I.receiveShadow=!0,Bt(I,R.ink,.24),D.add(I)}}function Pe(D,S){const _=new He(new _e(13.2,.18,12.2),n.paper({color:R.umber,fibre:"world"}));_.position.set(0,-.44,0),_.receiveShadow=!0,D.add(_);for(let I=0;I<4;I++){const K=12.75-I*.14,Z=11.75-I*.12,re=new He(new _e(K,.075,Z),n.paper({color:I%2===0?R.paperShade:R.paper,fibre:"world"}));re.position.set(0,-.31+I*.075,0),re.castShadow=!0,re.receiveShadow=!0,Bt(re,R.ink,.24,24),D.add(re)}const F=Wc(S,!0),X=new He(new Et(12.2,11.35),n.paper({map:F,color:"#ffffff",fibre:"world",vary:!1}));if(X.rotation.x=-Math.PI/2,X.position.y=.002,X.receiveShadow=!0,D.add(X),S.hasCanal){const I=n.paper({color:S.floorColor||R.paper,fibre:"world"}),K=new He(new _e(4.65,.14,11.3),I);K.position.set(-3.78,.07,0),K.receiveShadow=!0,K.castShadow=!0,Bt(K,R.ink,.25);const Z=new He(new _e(4.65,.14,11.3),I);Z.position.set(3.78,.07,0),Z.receiveShadow=!0,Z.castShadow=!0,Bt(Z,R.ink,.25),D.add(K,Z)}const j=new He(new Et(.08,11.35),n.paper({color:R.kraft,vary:!1}));j.rotation.x=-Math.PI/2,j.position.y=.005,D.add(j)}function pe(D,S){return g!=null&&g.hasCanal?Math.abs(D)>=1.45?.14:Math.abs(S)<=.55?.14+Math.max(0,1-Math.abs(D)/1.45)*.34:.02:0}function Ee(D){if(g=D,E&&(E.dispose(),E=null),o.remove(f),f=new Ze,o.add(f),v=[],u=[],T=[],y=[],x=null,b=null,le=null,Pe(f,D),ye(f,D),m=Xg(D.backdropStyle,n),m&&(m.setFoldImmediate(.01),f.add(m.group)),D.worldProps.forEach((F,X)=>{const j=Xc(F.type,n,F),I=D.hasCanal&&Math.abs(F.x)>=1.45?.14:0;j.root.position.y=I,j.setFoldImmediate(.01),f.add(j.root),v.push({prop:j,delay:.08+X*.055,popped:!1}),u.push({x:F.x,z:F.z,r:j.colliderRadius});for(const K of j.lightPoolOffsets)y.push({x:F.x+K[0],y:I+K[1],z:F.z+K[2],strength:K[3]??1})}),D.spots.forEach((F,X)=>{const j=new Ze,I=pe(F.pos[0],F.pos[1]);j.position.set(F.pos[0],I,F.pos[1]);const K=!!zn(t,D.id,F.id),Z=new un({color:K?R.pine:R.terracotta,transparent:!0,opacity:.85,side:Wt}),re=new He(new ma(.38,.47,24),Z);re.rotation.x=-Math.PI/2,re.position.y=.014,j.add(re);const we=n.paper({color:K?R.sage:R.lantern,emissive:K?R.pine:R.lantern,emissiveIntensity:K?.35:.95,glowTag:!0}),oe=new He(new fr(.18,0),we);oe.position.y=1.12,oe.castShadow=!0,Bt(oe,R.ink,.45),j.add(oe);const ge=new He(new oi(.48,8,8),new un({visible:!1}));ge.position.y=.78,ge.userData.spotIndex=X,j.add(ge),f.add(j),T.push({spot:F,spotGroup:j,ring:re,ringMat:Z,pin:oe,pinMat:we,hitSphere:ge,phase:X*1.3})}),D.keepsake&&!rs(t,D.id,D.keepsake.id)){const[F,X]=D.scrapPos||[1.8,2.2],j=pe(F,X),I=new Ze;I.position.set(F,j+.04,X);const K=n.paper({color:D.keepsake.kind==="sakura"?R.rose:D.keepsake.kind==="snowflake"?R.cutEdge:R.ochre,emissive:R.lantern,emissiveIntensity:.4,glowTag:!0}),Z=new He(new fr(.14,0),K);Z.scale.set(1.3,.25,1),Bt(Z,R.ink,.45);const re=new He(new oi(.42,8,8),new un({visible:!1}));re.userData.isScrap=!0,I.add(Z,re),f.add(I),x={group:I,mesh:Z,hit:re,x:F,z:X}}E=qg(D.weather,5.8),f.add(E.group),M=de(),f.add(M);const S=D.hasCanal?2.1:0,_=3.5;h.teleport(S,_,Math.PI,pe(S,_)),f.add(h.group)}function ke(){if(g)for(const D of T){const S=!!zn(t,g.id,D.spot.id);D.ringMat.color.set(S?R.pine:R.terracotta),D.pinMat.color.set(S?R.sage:R.lantern),D.pinMat.emissive.set(S?R.pine:R.lantern),D.pinMat.userData.baseEmissiveIntensity=S?.35:.95}}function Oe(){if(!x||!(g!=null&&g.keepsake))return;const D=mg(t,g.id,g.keepsake.id);f.remove(x.group),x=null,D&&(e.playStamp(),r==null||r(g,g.keepsake))}function L(D,S,_){const F=S.getBoundingClientRect();l.x=(D.clientX-F.left)/F.width*2-1,l.y=-((D.clientY-F.top)/F.height)*2+1,a.setFromCamera(l,_);const X=T.map(K=>K.hitSphere);x&&X.push(x.hit);const j=a.intersectObjects(X,!1);if(j.length>0){const K=j[0].object;if(K.userData.isScrap)return Oe(),!0;const Z=T[K.userData.spotIndex];if(Z)return e.playFoldPop(1.1),i==null||i(Z.spot),!0}const I=new z;if(a.ray.intersectPlane(c,I)){const K=Math.max(-Q,Math.min(Q,I.x)),Z=Math.max(-Q,Math.min(Q,I.z));return b={x:K,z:Z},M.position.set(K,pe(K,Z)+.022,Z),M.visible=!0,U=0,!0}return!1}function Xe(D,S,_){if(w){if(D.pointerType==="touch"){if(fe.set(D.pointerId,{x:D.clientX,y:D.clientY}),fe.size>=2){Y=!1,b=null,M.visible=!1;const F=Array.from(fe.values());De=Math.hypot(F[0].x-F[1].x,F[0].y-F[1].y)||1,B=V,J=(F[0].x+F[1].x)*.5;return}Y=!0,L(D,S,_);return}if(D.button===2){$=!0,W=D.clientX;return}D.button===0&&(Y=!0,L(D,S,_))}}function ne(D,S,_){if(!w)return;if(D.pointerType==="touch"&&fe.has(D.pointerId)&&(fe.set(D.pointerId,{x:D.clientX,y:D.clientY}),fe.size>=2)){const I=Array.from(fe.values()),K=Math.hypot(I[0].x-I[1].x,I[0].y-I[1].y)||1;V=Math.max(.65,Math.min(1.5,B*(De/K)));const Z=(I[0].x+I[1].x)*.5;O-=(Z-J)*.007,J=Z;return}if($){const I=D.clientX-W;W=D.clientX,O-=I*.006;return}if(Y){L(D,S,_);return}const F=S.getBoundingClientRect();l.x=(D.clientX-F.left)/F.width*2-1,l.y=-((D.clientY-F.top)/F.height)*2+1,a.setFromCamera(l,_);const X=T.map(I=>I.hitSphere);x&&X.push(x.hit);const j=a.intersectObjects(X,!1);S.style.cursor=j.length>0?"pointer":"crosshair"}function ce(D){if(D.pointerType==="touch"){fe.delete(D.pointerId),fe.size<2&&(De=0),fe.size===0&&(Y=!1);return}D.button===2&&($=!1),Y=!1}function ee(D){var _;if(!w)return;const S=(_=document.activeElement)==null?void 0:_.tagName;S==="INPUT"||S==="TEXTAREA"||(P.add(D.code),D.code==="Escape"&&(s==null||s()))}function ve(D){P.delete(D.code)}return{group:o,get currentViewLabel(){const D=N[k];return D==="follow"?"跟随":D==="macro"?"近景":"全景"},cycleView(){return k=(k+1)%N.length,this.currentViewLabel},focusSpot(D){b={x:D.pos[0],z:D.pos[1]},M.position.set(D.pos[0],pe(D.pos[0],D.pos[1])+.022,D.pos[1]),M.visible=!0,U=0},refreshSpotVisuals:ke,setJoystickInput(D,S){me=D||0,xe=S||0},enter(D,S){w=!0,A=0,k=0,O=0,V=1,me=0,xe=0,fe.clear(),P.clear(),Ee(D),S.fov=34;const _=S.aspect<.9?Math.min(1.55,.92/Math.max(.45,S.aspect)):1;S.position.set(0,6.9*_,9.8*_),S.lookAt(0,.35,2.6),S.updateProjectionMatrix()},leave(){w=!1,P.clear(),fe.clear(),Y=!1,$=!1,me=0,xe=0,ql([],0,0)},onPointerDown:Xe,onPointerMove:ne,onPointerUp:ce,onKeyDown:ee,onKeyUp:ve,update(D,S,_,F){A+=D,m&&(A>.06&&m.setFoldTarget(1),m.update(D));for(const he of v)A>=he.delay&&!he.popped&&(he.popped=!0,he.prop.setFoldTarget(1),e.playFoldPop(.85)),he.prop.update(D,S);let X=0,j=0;(P.has("KeyW")||P.has("ArrowUp"))&&(j-=1),(P.has("KeyS")||P.has("ArrowDown"))&&(j+=1),(P.has("KeyA")||P.has("ArrowLeft"))&&(X-=1),(P.has("KeyD")||P.has("ArrowRight"))&&(X+=1);const I={x:0,z:0},K=Math.hypot(me,xe);if(X!==0||j!==0){b=null,M.visible=!1;const he=Math.cos(O),ze=Math.sin(O);I.x=X*he+j*ze,I.z=-X*ze+j*he}else if(K>.08){b=null,M.visible=!1;const he=Math.cos(O),ze=Math.sin(O);I.x=me*he+xe*ze,I.z=-me*ze+xe*he}else if(b){const he=b.x-h.position.x,ze=b.z-h.position.z,st=Math.hypot(he,ze);if(st<.22)b=null;else{const dt=Math.min(1,st/.55);I.x=he/st*dt,I.z=ze/st*dt}}if(M&&M.visible){U+=D;const he=.92+Math.sin(U*7)*.08;M.scale.setScalar(he),!b&&U>.65&&(M.visible=!1)}const Z=P.has("ShiftLeft")||P.has("ShiftRight");h.update(D,I,{colliders:u,halfBound:Q,run:Z,heightAt:pe});let re=null,we=1/0;for(const he of T){he.pin.position.y=1.05+Math.sin(S*2.4+he.phase)*.12,he.pin.rotation.y=S*1.2+he.phase;const ze=Math.hypot(h.position.x-he.spot.pos[0],h.position.z-he.spot.pos[1]);ze<we&&(we=ze,re=he.spot)}we<1.15&&re&&re.id!==le?(le=re.id,e.playFoldPop(1),i==null||i(re)):we>1.75&&(le=null),x&&(x.mesh.rotation.y=S*1.4,x.mesh.position.y=Math.sin(S*2.5)*.04,Math.hypot(h.position.x-x.x,h.position.z-x.z)<.72&&Oe()),E&&E.update(D,S);const oe=h.lanternWorldPos;F.setAccentPosition(oe.x,oe.y+.45,oe.z);const ge=[{x:oe.x,y:h.position.y+.15,z:oe.z,strength:1.05}];for(let he=0;he<y.length&&ge.length<6;he++)ge.push(y[he]);ql(ge,2.75,F.nightMix*.95);const Ce=N[k],Ie=_.aspect<.9?Math.min(1.55,.92/Math.max(.45,_.aspect)):1;let Se=8.4*Ie*V,Ue=5.2*Ie*V,Be=.45,Ye=h.position.x,H=h.position.z;Ce==="macro"?(Se=4.6*Ie*V,Ue=2.5*Ie*V,Be=.55):Ce==="overview"&&(Se=13.8*Ie*V,Ue=10.4*Ie*V,Be=.2,Ye=0,H=0);const Ae=Ye+Math.sin(O)*Se,ae=H+Math.cos(O)*Se,ue=Ue,be=1-Math.exp(-6.5*D);_.position.x+=(Ae-_.position.x)*be,_.position.y+=(ue-_.position.y)*be,_.position.z+=(ae-_.position.z)*be,_.lookAt(Ye,Be,H)}}}const Kl={ginkgo:'<svg viewBox="0 0 64 64" width="54" height="54"><path d="M32 54 L32 34 C16 32 8 18 14 10 C22 14 27 12 32 16 C37 12 42 14 50 10 C56 18 48 32 32 34 Z" fill="#d9a441" stroke="#5a3a28" stroke-width="2"/></svg>',sakura:'<svg viewBox="0 0 64 64" width="54" height="54"><g fill="#e39f95" stroke="#5a3a28" stroke-width="1.8"><circle cx="32" cy="18" r="9"/><circle cx="45" cy="28" r="9"/><circle cx="40" cy="44" r="9"/><circle cx="24" cy="44" r="9"/><circle cx="19" cy="28" r="9"/></g><circle cx="32" cy="32" r="5" fill="#ffc45a"/></svg>',snowflake:'<svg viewBox="0 0 64 64" width="54" height="54" stroke="#4f6b8a" stroke-width="2.5" stroke-linecap="round"><path d="M32 8v48M11 20l42 24M53 20L11 44"/><circle cx="32" cy="32" r="5" fill="#fbf6ea"/></svg>',shell:'<svg viewBox="0 0 64 64" width="54" height="54"><path d="M12 38 C12 18 52 18 52 38 L42 50 L22 50 Z" fill="#e8c8a2" stroke="#5a3a28" stroke-width="2"/><path d="M32 22v28M22 25l6 25M42 25l-6 25" stroke="#5a3a28" stroke-width="1.4"/></svg>',leaf:'<svg viewBox="0 0 64 64" width="54" height="54"><path d="M16 48 C18 22 36 12 52 12 C50 32 38 46 16 48 Z" fill="#8e9a5b" stroke="#5a3a28" stroke-width="2"/><path d="M14 50 L48 16" stroke="#5a3a28" stroke-width="1.8"/></svg>',star:'<svg viewBox="0 0 64 64" width="54" height="54"><polygon points="32,8 39,23 56,25 43,36 47,53 32,45 17,53 21,36 8,25 25,23" fill="#ffc45a" stroke="#5a3a28" stroke-width="2"/></svg>'};function jg({progress:n,onNavigateStage:e,onToggleDayNight:t,onToggleAudio:i,onPrevPage:r,onNextPage:s,onGoToPage:o,onEnterWorld:a,onBackToBook:l,onCycleView:c,onSelectSpotChip:h,onCollectStamp:p,onJumpToScene:d,onBookCreated:f,onOpenTooltipBook:g,onSelectMobileBook:v,onJoystickMove:m}){const u={breadcrumbs:document.getElementById("breadcrumbs"),sepBook:document.getElementById("sep-book"),crumbBook:document.getElementById("crumb-book"),crumbBookTitle:document.getElementById("crumb-book-title"),sepWorld:document.getElementById("sep-world"),crumbWorldTitle:document.getElementById("crumb-world-title"),passportCount:document.getElementById("passport-count"),btnPassport:document.getElementById("btn-passport"),btnDayNight:document.getElementById("btn-daynight"),dayNightIcon:document.getElementById("daynight-icon"),btnAudio:document.getElementById("btn-audio"),audioIcon:document.getElementById("audio-icon"),uiBookshelf:document.getElementById("ui-bookshelf"),tooltip:document.getElementById("book-tooltip"),tooltipTitle:document.getElementById("tooltip-title"),tooltipSub:document.getElementById("tooltip-sub"),btnTooltipOpen:document.getElementById("btn-tooltip-open"),mobileBookStrip:document.getElementById("mobile-book-strip"),uiBook:document.getElementById("ui-book"),btnPrevPage:document.getElementById("btn-prev-page"),btnNextPage:document.getElementById("btn-next-page"),bookDots:document.getElementById("book-dots"),sceneCaption:document.getElementById("scene-caption"),sceneMeta:document.getElementById("scene-meta"),btnEnterWorld:document.getElementById("btn-enter-world"),uiWorld:document.getElementById("ui-world"),worldCoords:document.getElementById("world-coords"),worldName:document.getElementById("world-name"),worldSpotsPills:document.getElementById("world-spots-pills"),worldScrapStatus:document.getElementById("world-scrap-status"),btnBackBook:document.getElementById("btn-back-book"),btnCameraView:document.getElementById("btn-camera-view"),mobileJoystick:document.getElementById("mobile-joystick"),joystickNub:document.getElementById("joystick-nub"),drawer:document.getElementById("postcard-drawer"),btnCloseDrawer:document.getElementById("btn-close-drawer"),cardCoords:document.getElementById("card-coords"),cardSeal:document.getElementById("card-seal"),cardGlyphSvg:document.getElementById("card-glyph-svg"),cardTitle:document.getElementById("card-title"),cardStory:document.getElementById("card-story"),diaryDate:document.getElementById("diary-date"),diaryNote:document.getElementById("diary-note"),polaroidImg:document.getElementById("polaroid-img"),polaroidLabel:document.getElementById("polaroid-label"),polaroidUpload:document.getElementById("polaroid-upload"),keepsakeSlot:document.getElementById("keepsake-slot"),keepsakeArt:document.getElementById("keepsake-art"),keepsakeName:document.getElementById("keepsake-name"),btnCollectStamp:document.getElementById("btn-collect-stamp"),stampStatus:document.getElementById("stamp-status"),passportModal:document.getElementById("passport-modal"),btnClosePassport:document.getElementById("btn-close-passport"),modalTotalStamps:document.getElementById("modal-total-stamps"),passportGrid:document.getElementById("passport-grid"),btnExportJson:document.getElementById("btn-export-json"),inputImportJson:document.getElementById("input-import-json"),btnOpenCreator:document.getElementById("btn-open-creator"),creatorModal:document.getElementById("creator-modal"),btnCloseCreator:document.getElementById("btn-close-creator"),creatorForm:document.getElementById("creator-form"),colorSwatches:document.getElementById("color-swatches"),toast:document.getElementById("paper-toast"),veil:document.getElementById("transition-veil")};let T=null,y=null,x=null,E="#b9603f",w=null;function A(N){u.toast.textContent=N,u.toast.classList.remove("hidden"),clearTimeout(w),w=setTimeout(()=>u.toast.classList.add("hidden"),2600)}function P(){const N=Xo(pr,n),k=_g(n,N),O=N.reduce((V,$)=>V+$.scenes.reduce((W,le)=>W+le.spots.length,0),0);u.passportCount.textContent=`${k}/${O}`,u.modalTotalStamps.textContent=`${k} / ${O} 枚足迹印章`}function b(){P();const N=Xo(pr,n);u.passportGrid.innerHTML="";for(const k of N){const O=document.createElement("div");O.className="passport-book-card";const V=nr(n,k),$=k.scenes.reduce((le,me)=>le+me.spots.length,0),W=document.createElement("div");W.className="passport-book-head",W.innerHTML=`<span>${k.title}</span><span>${V}/${$}</span>`,O.appendChild(W);for(const le of k.scenes){const me=document.createElement("div");me.className="passport-scene-item";const xe=le.spots.filter(De=>zn(n,le.id,De.id)).length,fe=le.keepsake&&rs(n,le.id,le.keepsake.id);me.innerHTML=`
          <div class="passport-scene-name">
            <span>${le.name}</span>
            <span>${xe}/${le.spots.length}</span>
          </div>
          <div class="passport-stamps-row">
            ${le.spots.map(De=>`<span class="mini-stamp ${!!zn(n,le.id,De.id)?"done":""}">${De.glyph} ${De.name}</span>`).join("")}
            ${le.keepsake?`<span class="mini-stamp ${fe?"done":""}">${le.keepsake.glyph} ${le.keepsake.name}</span>`:""}
          </div>
        `,me.addEventListener("click",()=>{u.passportModal.classList.add("hidden"),d==null||d(k,le)}),O.appendChild(me)}u.passportGrid.appendChild(O)}}function M(){if(y){u.worldSpotsPills.innerHTML="";for(const N of y.spots){const k=!!zn(n,y.id,N.id),O=document.createElement("button");O.className=`spot-chip ${k?"collected":""}`,O.textContent=`${N.glyph} ${N.name}${k?" ✓":""}`,O.addEventListener("click",()=>h==null?void 0:h(N)),u.worldSpotsPills.appendChild(O)}if(y.keepsake){const N=rs(n,y.id,y.keepsake.id);u.worldScrapStatus.textContent=N?`✓ 已拾取压花纪念：${y.keepsake.glyph} ${y.keepsake.name}`:`○ 地面可拾取纪念物：${y.keepsake.glyph} ${y.keepsake.name}`}else u.worldScrapStatus.textContent=""}}function U(N){return new Promise((k,O)=>{const V=new FileReader;V.onload=()=>{const $=new Image;$.onload=()=>{const le=document.createElement("canvas");le.width=320,le.height=320;const me=le.getContext("2d"),xe=Math.min($.width,$.height),fe=($.width-xe)/2,De=($.height-xe)/2;me.drawImage($,fe,De,xe,xe,0,0,320,320),k(le.toDataURL("image/jpeg",.84))},$.onerror=O,$.src=V.result},V.onerror=O,V.readAsDataURL(N)})}if(u.breadcrumbs.addEventListener("click",N=>{const k=N.target.closest(".crumb-btn");if(!k)return;const O=k.dataset.stage;O&&(e==null||e(O))}),u.btnDayNight.addEventListener("click",()=>t==null?void 0:t()),u.btnAudio.addEventListener("click",()=>i==null?void 0:i()),u.btnPrevPage.addEventListener("click",()=>r==null?void 0:r()),u.btnNextPage.addEventListener("click",()=>s==null?void 0:s()),u.btnEnterWorld.addEventListener("click",()=>a==null?void 0:a()),u.btnBackBook.addEventListener("click",()=>l==null?void 0:l()),u.btnCameraView.addEventListener("click",()=>c==null?void 0:c()),u.btnTooltipOpen.addEventListener("click",()=>g==null?void 0:g()),u.btnCloseDrawer.addEventListener("click",()=>u.drawer.classList.add("hidden")),u.mobileJoystick&&u.joystickNub){let N=null;const k=26,O=($,W)=>{const le=u.mobileJoystick.getBoundingClientRect(),me=le.left+le.width/2,xe=le.top+le.height/2;let fe=$-me,De=W-xe;const B=Math.hypot(fe,De);B>k&&(fe=fe/B*k,De=De/B*k),u.joystickNub.style.transform=`translate(${fe}px, ${De}px)`,m==null||m(fe/k,De/k)},V=()=>{N=null,u.joystickNub.style.transform="translate(0px, 0px)",m==null||m(0,0)};u.mobileJoystick.addEventListener("pointerdown",$=>{var W,le;$.preventDefault(),$.stopPropagation(),N=$.pointerId,(le=(W=u.mobileJoystick).setPointerCapture)==null||le.call(W,$.pointerId),O($.clientX,$.clientY)}),u.mobileJoystick.addEventListener("pointermove",$=>{$.pointerId===N&&($.preventDefault(),O($.clientX,$.clientY))}),u.mobileJoystick.addEventListener("pointerup",$=>{$.pointerId===N&&V()}),u.mobileJoystick.addEventListener("pointercancel",$=>{$.pointerId===N&&V()})}u.polaroidUpload.addEventListener("change",async N=>{var O;const k=(O=N.target.files)==null?void 0:O[0];if(!(!k||!y||!T)){try{const V=await U(k);pg(n,y.id,T.id,V),u.polaroidImg.src=V,u.polaroidLabel.textContent="已贴上旅行照片",A("已将旅行照片冲洗为拍立得卡片！")}catch{A("照片读取失败，请更换图片再试")}N.target.value=""}}),u.btnCollectStamp.addEventListener("click",()=>{!y||!T||p==null||p(y,T,{date:u.diaryDate.value,note:u.diaryNote.value.trim()})}),u.btnPassport.addEventListener("click",()=>{b(),u.passportModal.classList.remove("hidden")}),u.btnClosePassport.addEventListener("click",()=>u.passportModal.classList.add("hidden")),u.passportModal.addEventListener("click",N=>{N.target===u.passportModal&&u.passportModal.classList.add("hidden")}),u.btnExportJson.addEventListener("click",()=>{const N=new Blob([xg(n)],{type:"application/json"}),k=URL.createObjectURL(N),O=document.createElement("a");O.href=k,O.download=`earth-papertrails-passport-${new Date().toISOString().slice(0,10)}.json`,O.click(),URL.revokeObjectURL(k),A("足迹护照存档已导出 JSON")}),u.inputImportJson.addEventListener("change",async N=>{var O;const k=(O=N.target.files)==null?void 0:O[0];if(k){try{const V=await k.text();yg(n,V),b(),M(),f==null||f(),A("足迹存档已恢复！")}catch{A("无效的存档文件格式")}N.target.value=""}});function Y(){u.passportModal.classList.add("hidden"),u.creatorModal.classList.remove("hidden")}return u.btnOpenCreator.addEventListener("click",Y),u.btnCloseCreator.addEventListener("click",()=>u.creatorModal.classList.add("hidden")),u.creatorModal.addEventListener("click",N=>{N.target===u.creatorModal&&u.creatorModal.classList.add("hidden")}),u.colorSwatches.addEventListener("click",N=>{const k=N.target.closest(".swatch");if(k){for(const O of u.colorSwatches.querySelectorAll(".swatch"))O.classList.remove("active");k.classList.add("active"),E=k.dataset.color}}),u.creatorForm.addEventListener("submit",N=>{N.preventDefault();const k=document.getElementById("new-book-title").value.trim(),O=document.getElementById("new-book-region").value.trim()||"My Journey",V=document.getElementById("new-scene-name").value.trim(),$=document.getElementById("new-scene-coords").value.trim()||"Custom Earth Trail",W=document.getElementById("new-scene-biome").value,le=document.getElementById("new-spot-name").value.trim(),me=Vl[W]||Vl.coastal,xe=Date.now().toString(36),fe=k.startsWith("《")?k:`《${k}》`,De={id:`custom-scene-${xe}`,captionEn:O.toLowerCase(),name:V,coords:$,wallTheme:me.wallTheme,floorColor:me.floorColor,weather:me.weather,defaultNight:W==="nighttown",hasCanal:me.hasCanal,backdropStyle:me.backdropStyle,keepsake:me.keepsake,scrapPos:[1.6,2.1],bookProps:me.bookProps,worldProps:me.worldProps,spots:[{id:`custom-spot-${xe}`,name:le,coords:$,glyph:me.keepsake.glyph,pos:[.3,.7],story:`亲手装帧进《${k}》的专属地球坐标，等待写下你的旅程记忆。`}]},B={id:`custom-book-${xe}`,volume:"★",title:fe,spineTitle:k.replace(/[《》]/g,""),subtitle:O,regionEn:O,coverColor:E,spineColor:E,ribbonColor:"#d9a441",scenes:[De]};vg(n,B),P(),u.creatorForm.reset(),u.creatorModal.classList.add("hidden"),f==null||f(B),A(`已装帧新绘本 ${fe}！`)}),P(),{openPassport(){b(),u.passportModal.classList.remove("hidden")},openCreator:Y,showToast:A,setStage(N,{book:k,scene:O}={}){u.uiBookshelf.classList.toggle("hidden",N!=="bookshelf"),u.uiBook.classList.toggle("hidden",N!=="book"),u.uiWorld.classList.toggle("hidden",N!=="world"),u.drawer.classList.add("hidden"),u.breadcrumbs.querySelector('[data-stage="bookshelf"]').classList.toggle("active",N==="bookshelf"),N==="bookshelf"?(u.sepBook.classList.add("hidden"),u.crumbBook.classList.add("hidden"),u.sepWorld.classList.add("hidden"),u.crumbWorldTitle.classList.add("hidden")):N==="book"?(u.sepBook.classList.remove("hidden"),u.crumbBook.classList.remove("hidden"),u.crumbBook.classList.add("active"),u.crumbBookTitle.textContent=(k==null?void 0:k.title)||"",u.sepWorld.classList.add("hidden"),u.crumbWorldTitle.classList.add("hidden")):(u.sepBook.classList.remove("hidden"),u.crumbBook.classList.remove("hidden"),u.crumbBook.classList.remove("active"),u.crumbBookTitle.textContent=(k==null?void 0:k.title)||"",u.sepWorld.classList.remove("hidden"),u.crumbWorldTitle.classList.remove("hidden"),u.crumbWorldTitle.textContent=(O==null?void 0:O.name)||"",y=O,u.worldCoords.textContent=(O==null?void 0:O.coords)||"",u.worldName.textContent=(O==null?void 0:O.name)||"",M())},setMobileShelfBooks(N){u.mobileBookStrip&&(u.mobileBookStrip.innerHTML="",N.forEach((k,O)=>{const V=document.createElement("button");V.className="mobile-shelf-pill",V.dataset.bookId=k.id,V.textContent=k.isCreator?"+ 新建":k.title.replace(/[《》]/g,""),V.addEventListener("click",()=>{const $=x===k.id;v==null||v(O,$)}),u.mobileBookStrip.appendChild(V)}))},setTooltip(N,k,O){var V,$;if(!N){x=null,u.tooltip.classList.add("hidden");for(const W of((V=u.mobileBookStrip)==null?void 0:V.querySelectorAll(".mobile-shelf-pill"))||[])W.classList.remove("active");return}x=N.id;for(const W of(($=u.mobileBookStrip)==null?void 0:$.querySelectorAll(".mobile-shelf-pill"))||[])W.classList.toggle("active",W.dataset.bookId===N.id);if(u.tooltipTitle.textContent=N.title,N.isCreator)u.tooltipSub.textContent="创建属于你的新折纸足迹册",u.btnTooltipOpen.textContent="新建足迹册 →";else{const W=N.scenes.reduce((le,me)=>le+me.spots.length,0);u.tooltipSub.textContent=`${k}/${W} Footprints · 点击翻开`,u.btnTooltipOpen.textContent="翻开绘本 →"}if(O&&window.innerWidth>768){const W=Math.min(window.innerWidth-250,Math.max(20,O.x)),le=Math.min(window.innerHeight-100,Math.max(90,O.y));u.tooltip.style.left=`${W}px`,u.tooltip.style.top=`${le}px`}else u.tooltip.style.left="",u.tooltip.style.top="";u.tooltip.classList.remove("hidden")},setBookSpread(N,k,O){u.sceneCaption.textContent=`${k.captionEn} · ${k.name}`;const V=k.spots.filter($=>zn(n,k.id,$.id)).length;u.sceneMeta.textContent=`${k.coords} · 足迹 ${V}/${k.spots.length}`,u.btnPrevPage.disabled=O<=0,u.btnNextPage.disabled=O>=N.scenes.length-1,u.bookDots.innerHTML="",N.scenes.forEach(($,W)=>{const le=document.createElement("button");le.className=`book-dot ${W===O?"active":""}`,le.title=$.name,le.addEventListener("click",()=>o==null?void 0:o(W)),u.bookDots.appendChild(le)})},openSpotDrawer(N,k){y=N,T=k;const O=zn(n,N.id,k.id);if(u.cardCoords.textContent=k.coords,u.cardGlyphSvg.textContent=k.glyph,u.cardTitle.textContent=k.name,u.cardStory.textContent=k.story,u.diaryDate.value=(O==null?void 0:O.collectedAt)||new Date().toISOString().slice(0,10),u.diaryNote.value=(O==null?void 0:O.note)||"",u.polaroidImg.src=(O==null?void 0:O.photoDataUrl)||Ug(N),u.polaroidLabel.textContent=O!=null&&O.photoDataUrl?"点击更换旅行照片":"点击贴上旅行照片",N.keepsake){const V=rs(n,N.id,N.keepsake.id);u.keepsakeSlot.classList.toggle("collected",V),u.keepsakeArt.innerHTML=Kl[N.keepsake.kind]||Kl.leaf,u.keepsakeName.textContent=V?N.keepsake.name:`未拾取: ${N.keepsake.name}`}u.cardSeal.classList.toggle("stamped",!!O),u.btnCollectStamp.textContent=O?"更新旅记随笔 ✓":"盖章收录足迹 ✓",u.stampStatus.textContent=O?`✓ 已盖章收录于 ${O.collectedAt}`:"",u.drawer.classList.remove("hidden")},markSpotCollected(N,k,O){P(),M(),T&&T.id===k.id&&(u.cardSeal.classList.add("stamped"),u.btnCollectStamp.textContent="更新旅记随笔 ✓",u.stampStatus.textContent=`✓ 足迹已盖章收录 (${O.collectedAt})`)},refreshScrapUI(N,k){M(),y&&y.id===N.id&&!u.drawer.classList.contains("hidden")&&(u.keepsakeSlot.classList.add("collected"),u.keepsakeName.textContent=k.name)},setViewLabel(N){u.btnCameraView.textContent=window.innerWidth<=768?`视角: ${N}`:`视角: ${N} (V)`},setDayNightState(N){document.body.classList.toggle("night-mode",N),u.dayNightIcon.textContent=N?"☾":"☀"},setAudioMuted(N){u.audioIcon.textContent=N?"🔇":"🔊"},async fadeTransition(N){u.veil.classList.add("active"),await new Promise(k=>setTimeout(k,240)),N==null||N(),await new Promise(k=>setTimeout(k,70)),u.veil.classList.remove("active")}}}const Vt=document.getElementById("stage"),qn=new lg({canvas:Vt,antialias:!0,powerPreference:"high-performance"}),qc=()=>window.innerWidth<768?1.5:2;qn.setPixelRatio(Math.min(window.devicePixelRatio||1,qc()));qn.setSize(window.innerWidth,window.innerHeight,!1);qn.outputColorSpace=St;qn.shadowMap.enabled=!0;qn.shadowMap.type=tc;const Sa=new wc,yt=new Kt(36,window.innerWidth/Math.max(1,window.innerHeight),.1,100),ms=Lg(),xt=Ng({scene:Sa,glowMaterials:ms.glowMaterials}),_r=zg({renderer:qn,scene:Sa,camera:yt}),ai=kg(),Oi=dg();let Mt="bookshelf",mn=pr[0],rn=pr[0].scenes[0],Bn=0,Pn=!1;function Yo(){return[...Xo(pr,Oi),cg]}const tt=jg({progress:Oi,onNavigateStage(n){n==="bookshelf"?$c():n==="book"&&ir(mn,Bn)},onToggleDayNight(){const n=xt.toggleNight();tt.setDayNightState(n)},onToggleAudio(){const n=ai.toggleMute();tt.setAudioMuted(n)},onPrevPage(){Ct.prevPage()},onNextPage(){Ct.nextPage()},onGoToPage(n){Ct.goToPage(n)},onEnterWorld(){const n=Ct.currentScene||rn;hs(n)},onBackToBook(){ir(mn,Bn)},onCycleView(){const n=Pt.cycleView();tt.setViewLabel(n)},onSelectSpotChip(n){Pt.focusSpot(n),tt.openSpotDrawer(rn,n)},onCollectStamp(n,e,{date:t,note:i}){const r=fg(Oi,n.id,e.id,{date:t,note:i});ai.playStamp(),Pt.refreshSpotVisuals(),tt.markSpotCollected(n,e,r),Mt==="book"&&tt.setBookSpread(mn,rn,Bn)},onJumpToScene(n,e){const t=n.scenes.findIndex(i=>i.id===e.id);mn=n,rn=e,Bn=Math.max(0,t),hs(e)},onBookCreated(n){const e=Yo();Nt.setBooks(e),tt.setMobileShelfBooks(e),n&&ir(n,0)},onOpenTooltipBook(){Nt.openHoveredBook()},onSelectMobileBook(n,e){const i=Yo()[n];if(i){if(i.isCreator){tt.openCreator();return}e?Nt.openHoveredBook():Nt.previewBookByIndex(n,yt,Vt)}},onJoystickMove(n,e){Pt.setJoystickInput(n,e)}}),Nt=Bg({materials:ms,audio:ai,progress:Oi,onHoverBook(n,e,t){tt.setTooltip(n,e,t)},onSelectBook(n){ir(n,0)},onCreateBook(){tt.openCreator()},onOpenPassport(){tt.openPassport()},onToggleNight(){const n=xt.toggleNight();tt.setDayNightState(n)}}),Yc=Yo();Nt.setBooks(Yc);tt.setMobileShelfBooks(Yc);const Ct=Yg({materials:ms,audio:ai,onSceneChange(n,e){rn=n,Bn=e,tt.setBookSpread(mn,n,e),xt.setNight(!!n.defaultNight,!1),tt.setDayNightState(xt.isNight)},onEnterScene(n){hs(n)}}),Pt=Zg({materials:ms,audio:ai,progress:Oi,onOpenSpot(n){tt.openSpotDrawer(rn,n)},onCollectScrap(n,e){tt.refreshScrapUI(n,e),tt.showToast(`拾取到压花纪念：${e.glyph} ${e.name}`)},onRequestExit(){ir(mn,Bn)}});Sa.add(Nt.group,Ct.group,Pt.group);function gs(n){Nt.group.visible=n==="bookshelf",Ct.group.visible=n==="book",Pt.group.visible=n==="world"}function $c(){Pn||(Pn=!0,tt.fadeTransition(()=>{Ct.leave(),Pt.leave(),Mt="bookshelf",gs("bookshelf"),xt.setMode("bookshelf"),xt.setNight(!1,!1),_r.setMode("bookshelf"),Nt.enter(yt),tt.setTooltip(null,0,null),tt.setDayNightState(!1),tt.setStage("bookshelf"),Pn=!1}))}function ir(n,e=0){Pn||(Pn=!0,mn=n,Bn=e,rn=n.scenes[e]||n.scenes[0],tt.fadeTransition(()=>{Nt.leave(),Pt.leave(),Mt="book",gs("book"),xt.setMode("book"),xt.setNight(!!rn.defaultNight,!1),_r.setMode("book"),Ct.enter(n,e,yt),tt.setDayNightState(xt.isNight),tt.setStage("book",{book:mn,scene:rn}),tt.setBookSpread(mn,rn,Bn),Pn=!1}))}function hs(n){Pn||(Pn=!0,rn=n,gg(Oi,n.id),tt.fadeTransition(()=>{Nt.leave(),Ct.leave(),Mt="world",gs("world"),xt.setMode("world"),xt.setNight(!!n.defaultNight,!1),_r.setMode("world"),Pt.enter(n,yt),tt.setDayNightState(xt.isNight),tt.setViewLabel(Pt.currentViewLabel),tt.setStage("world",{book:mn,scene:n}),Pn=!1}))}gs("bookshelf");xt.setMode("bookshelf");xt.setNight(!1,!0);_r.setMode("bookshelf");Nt.enter(yt);tt.setStage("bookshelf");function Zc(){ai.unlock()}Vt.addEventListener("pointerdown",n=>{Zc(),Mt==="bookshelf"?Nt.onPointerDown(n,Vt,yt):Mt==="book"?Ct.onPointerDown(n):Pt.onPointerDown(n,Vt,yt)});window.addEventListener("pointermove",n=>{const e=n.target===Vt;Mt==="bookshelf"?e&&Nt.onPointerMove(n,Vt,yt):Mt==="book"?Ct.onPointerMove(n,Vt,yt):e&&Pt.onPointerMove(n,Vt,yt)});window.addEventListener("pointerup",n=>{Mt==="bookshelf"?Nt.onPointerUp(n,Vt,yt):Mt==="book"?Ct.onPointerUp(n,Vt,yt):Mt==="world"&&Pt.onPointerUp(n)});window.addEventListener("pointercancel",n=>{Mt==="bookshelf"?Nt.onPointerUp(n,Vt,yt):Mt==="book"?Ct.onPointerUp(n,Vt,yt):Mt==="world"&&Pt.onPointerUp(n)});Vt.addEventListener("wheel",n=>{Mt==="book"&&(n.preventDefault(),Ct.onWheel(n))},{passive:!1});Vt.addEventListener("contextmenu",n=>n.preventDefault());window.addEventListener("keydown",n=>{var i;Zc();const e=(i=document.activeElement)==null?void 0:i.tagName,t=e==="INPUT"||e==="TEXTAREA"||e==="SELECT";if(!t){if(n.code==="KeyN"){const r=xt.toggleNight();tt.setDayNightState(r);return}if(n.code==="KeyM"){const r=ai.toggleMute();tt.setAudioMuted(r);return}}Mt==="book"&&!t?n.code==="ArrowLeft"?Ct.prevPage():n.code==="ArrowRight"?Ct.nextPage():n.code==="Enter"?hs(Ct.currentScene||rn):n.code==="Escape"&&$c():Mt==="world"&&(!t&&n.code==="KeyV"&&tt.setViewLabel(Pt.cycleView()),Pt.onKeyDown(n))});window.addEventListener("keyup",n=>{Mt==="world"&&Pt.onKeyUp(n)});window.addEventListener("resize",()=>{const n=window.innerWidth,e=Math.max(1,window.innerHeight);yt.aspect=n/e,yt.updateProjectionMatrix(),qn.setPixelRatio(Math.min(window.devicePixelRatio||1,qc())),qn.setSize(n,e,!1)});let Ql=performance.now(),jr=0;function jc(n){requestAnimationFrame(jc);const e=Math.min(.05,Math.max(.001,(n-Ql)/1e3));Ql=n,jr+=e,Mt==="bookshelf"?Nt.update(e,jr,yt,xt):Mt==="book"?Ct.update(e,jr,yt,xt):Pt.update(e,jr,yt,xt),xt.update(e),_r.render(e,xt.exposure)}requestAnimationFrame(jc);
