(globalThis["webpackChunk_canva_web"] = globalThis["webpackChunk_canva_web"] || []).push([[59427],{

/***/ 248032:
function(_,__,__webpack_require__){__webpack_require__.n_x=__webpack_require__.n;const __web_req__=__webpack_require__;__web_req__(765703);globalThis._5f74ec40302898c5a55451c9fbd04240=globalThis._5f74ec40302898c5a55451c9fbd04240||{};(function(__c){var Qzd;Qzd=function(a,b){if(a===""||b.length===0)return[];var c=[],d=0;for(let e of b)b=a.slice(d,d+e),c.push(b),d+=e;return c};
__c.P_=class{wg({store:a,text:b,pb:c,textAlign:d,constraint:e}){var f=__c.Rua({fontFamily:a.nx,fontSize:a.fontSize,fontWeight:a.fontWeight,fontStyle:a.fontStyle},b);d={fontSize:a.fontSize,fontFamily:a.$h,fontWeight:a.fontWeight,textAlign:d,textBaseline:"alphabetic"};a=this.Eb.Y.FG(a.mc.config.ref)?.R2a()??!1;if(c==null||b!==""&&c.length===0||a){switch(e.type){case "size":c=e.maxWidth;break;case "aspectRatio":c=this.Xa.measureText({text:b,...d});if(c.width/c.height<=e.Nxb)return{lines:[b],wg:[c],lineHeight:c.fontBoundingBoxAscent+
c.fontBoundingBoxDescent};c=Math.sqrt(c.width*c.height*e.cJb);break;default:throw new __c.E(e);}c=this.Eb.text.VS(f,c)}f=c.length;if(f===0)return{lines:[],wg:[],lineHeight:0};b=f>1?Qzd(b,c):[b];c=b.map(l=>l.trimEnd());a=this.Xa.Dl({Su:c,...d});var g=a[0].fontBoundingBoxAscent+a[0].fontBoundingBoxDescent;if(e.type!=="size"||e.maxHeight==null||f===1||g*f<=e.maxHeight)return{lines:c,wg:a,lineHeight:g};f=Math.max(0,Math.floor(e.maxHeight/g)-1);var {text:h,...k}=this.Xa.ah({text:`${b[f]}${c[f+1]}`,...d,
maxWidth:e.maxWidth});return{lines:[...c.slice(0,f),h],wg:[...a.slice(0,f),k],lineHeight:g}}constructor(a,b){this.Xa=a;this.Eb=b}};
}).call(globalThis,globalThis._5f74ec40302898c5a55451c9fbd04240);}

}])
//# sourceMappingURL=sourcemaps/9e8f643debfc7939.js.map