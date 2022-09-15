(()=>{function R(p){return(p||"").replace(/^\d+-/,"")}function z(p){let t=p>>16&255,e=p>>8&255,r=p&255;return`rgb(${t},${e},${r})`}function c(p,t={},e){let r=document.createElementNS("http://www.w3.org/2000/svg",p);for(let n in t)!t.hasOwnProperty(n)||r.setAttribute(n,t[n]);return e&&e.appendChild(r),r}var m=2.7,L=4,O=2,k={black:["#000"],gray:["#000","#333","#666","#999","#ccc","#ddd","#eee"],white:["#fff"],red:["#cf2a27","#ea9999","#eo6666","#cc0000","#990000","#660000"],orange:["#ff9900","#f9cb9c","#f6b26b","#e69138","#b45f06","#783f04"],yellow:["#ffff00","#ffe599","#ffd966","#f1c232","#bf9000","#7f6000"],green:["#009e0f","#b6d7a8","#93c47d","#6aa84f","#38761d","#274e13"],cyan:["#00ffff","#a2c4c9","#76a5af","#45818e","#134f5c","#0c343d"],blue:["#2b78e4","#9fc5f8","#6fa8dc","#597eaa","#085394","#073763"],purple:["#9900ff","#b4a7d6","#8e7cc3","#674ea7","#351c75","#20124d"],pink:["#ff00ff","#d5a6bd","#c27ba0","#a64d79","#741b47","#4c1130"]},w=class{constructor(t,e){this.svgRoot=t,this.fontFamily=e,this.canvasRenderingContext2D=document.createElement("canvas").getContext("2d")}render(t,e){let r=t.typeID;r in this?this[r](t,e):console.log(`'${r}' control type not implemented`)}parseColor(t,e){return t===void 0?`rgb(${e})`:z(t)}parseFontProperties(t){var e,r,n;return{style:(e=t.properties)!=null&&e.italic?"italic":"normal",weight:(r=t.properties)!=null&&r.bold?"bold":"normal",size:(n=t.properties)!=null&&n.size?t.properties.size+"px":"13px",family:this.fontFamily}}measureText(t,e){return this.canvasRenderingContext2D.font=e,this.canvasRenderingContext2D.measureText(t)}drawRectangle(t,e){var r,n,i,s,a,o;c("rect",{x:parseInt(t.x)+m/2,y:parseInt(t.y)+m/2,width:parseInt((r=t.w)!=null?r:t.measuredW)-m,height:parseInt((n=t.h)!=null?n:t.measuredH)-m,rx:O,fill:this.parseColor((i=t.properties)==null?void 0:i.color,"255,255,255"),"fill-opacity":(a=(s=t.properties)==null?void 0:s.backgroundAlpha)!=null?a:1,stroke:this.parseColor((o=t.properties)==null?void 0:o.borderColor,"0,0,0"),"stroke-width":m},e)}addText(t,e,r,n){var i,s;let a=(i=t.properties.text)!=null?i:"",o=parseInt(t.x),l=parseInt(t.y),d=this.parseFontProperties(t),u=this.measureText(a,`${d.style} ${d.weight} ${d.size} ${d.family}`),h=n==="center"?o+((s=t.w)!=null?s:t.measuredW)/2-u.width/2:o,b=l+t.measuredH/2+u.actualBoundingBoxAscent/2,g=c("text",{x:h,y:b,fill:r,"font-style":d.style,"font-weight":d.weight,"font-size":d.size},e);if(!a.includes("{color:")){let x=c("tspan",{},g);x.textContent=a;return}a.split(/{color:|{color}/).forEach(x=>{if(x.includes("}")){let[f,I]=x.split("}");if(!f.startsWith("#")){let v=parseInt(f.slice(-1));f=isNaN(v)?k[f][0]:k[f][v]}let C=c("tspan",{fill:f},g);C.textContent=I}else{let f=c("tspan",{},g);f.textContent=x}})}TextArea(t,e){this.drawRectangle(t,e)}Canvas(t,e){this.drawRectangle(t,e)}Label(t,e){var r;this.addText(t,e,this.parseColor((r=t.properties)==null?void 0:r.color,"0,0,0"),"left")}TextInput(t,e){var r;this.drawRectangle(t,e),this.addText(t,e,this.parseColor((r=t.properties)==null?void 0:r.textColor,"0,0,0"),"center")}Arrow(t,e){var r,n,i;let s=parseInt(t.x),a=parseInt(t.y),{p0:o,p1:l,p2:d}=t.properties,u;((r=t.properties)==null?void 0:r.stroke)==="dotted"?u="0.8 12":((n=t.properties)==null?void 0:n.stroke)==="dashed"&&(u="28 46");let h={x:(d.x-o.x)*l.x,y:(d.y-o.y)*l.x};c("path",{d:`M${s+o.x} ${a+o.y}Q${s+o.x+h.x+h.y*l.y*3.6} ${a+o.y+h.y+-h.x*l.y*3.6} ${s+d.x} ${a+d.y}`,fill:"none",stroke:this.parseColor((i=t.properties)==null?void 0:i.color,"0,0,0"),"stroke-width":L,"stroke-linecap":"round","stroke-linejoin":"round","stroke-dasharray":u},e)}Icon(t,e){var r;let n=parseInt(t.x),i=parseInt(t.y),s=10;c("circle",{cx:n+s,cy:i+s,r:s,fill:this.parseColor((r=t.properties)==null?void 0:r.color,"0,0,0")},e),t.properties.icon.ID==="check-circle"&&c("path",{d:`M${n+4.5} ${i+s}L${n+8.5} ${i+s+4} ${n+15} ${i+s-2.5}`,fill:"none",stroke:"#fff","stroke-width":3.5,"stroke-linecap":"round","stroke-linejoin":"round"},e)}HRule(t,e){var r,n,i,s;let a=parseInt(t.x),o=parseInt(t.y),l;((r=t.properties)==null?void 0:r.stroke)==="dotted"?l="0.8, 8":((n=t.properties)==null?void 0:n.stroke)==="dashed"&&(l="18, 30"),c("path",{d:`M${a} ${o}L${a+parseInt((i=t.w)!=null?i:t.measuredW)} ${o}`,fill:"none",stroke:this.parseColor((s=t.properties)==null?void 0:s.color,"0,0,0"),"stroke-width":m,"stroke-linecap":"round","stroke-linejoin":"round","stroke-dasharray":l},e)}__group__(t,e){var r;let n=(r=t?.properties)==null?void 0:r.controlName,i=R(n),s=localStorage.getItem(i)==="done",a=c("g",{...n?{class:`clickable-group ${s?"done":""}`,"data-group-id":n}:{}},e);t.children.controls.control.sort((o,l)=>o.zOrder-l.zOrder).forEach(o=>{o.x=parseInt(o.x,10)+parseInt(t.x,10),o.y=parseInt(o.y,10)+parseInt(t.y,10),this.render(o,a)})}};async function $(p,t={}){if(t={padding:5,fontFamily:"balsamiq",fontURL:"https://fonts.gstatic.com/s/balsamiqsans/v3/P5sEzZiAbNrN8SB3lQQX7Pncwd4XIA.woff2",...t},t.fontURL){let l=new FontFace(t.fontFamily,`url(${t.fontURL})`);await l.load(),document.fonts.add&&document.fonts.add(l)}let e=p.mockup,r=e.measuredW-e.mockupW-t.padding,n=e.measuredH-e.mockupH-t.padding,i=parseInt(e.mockupW)+t.padding*2,s=parseInt(e.mockupH)+t.padding*2,a=c("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:`${r} ${n} ${i} ${s}`,style:"font-family: balsamiq"}),o=new w(a,t.fontFamily);return e.controls.control.sort((l,d)=>l.zOrder-d.zOrder).forEach(l=>{o.render(l,a)}),a}var y=class{constructor(t){this.config=t,this.init=this.init.bind(this),this.onDOMLoaded=this.onDOMLoaded.bind(this),this.fetchRoadmapSvg=this.fetchRoadmapSvg.bind(this)}fetchRoadmapSvg(t){return t?fetch(t).then(function(e){return e.json()}).then(function(e){return $(e)}):(console.error("jsonUrl not defined in frontmatter"),null)}onDOMLoaded(){this.fetchRoadmapSvg(this.config.jsonUrl).then(t=>{document.getElementById(this.config.containerId).replaceChildren(t)}).catch(console.error)}init(){window.addEventListener("DOMContentLoaded",this.onDOMLoaded)}};window.initRoadmap=function(p){new y(p).init()};})();
//# sourceMappingURL=roadmap.js.map
