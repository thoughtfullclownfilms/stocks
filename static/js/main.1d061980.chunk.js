(this.webpackJsonpstockapp=this.webpackJsonpstockapp||[]).push([[0],{205:function(e,t,a){},260:function(e,t,a){e.exports=a(538)},265:function(e,t,a){},266:function(e,t,a){},267:function(e,t,a){},289:function(e,t,a){},538:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),c=a.n(r),o=(a(265),a(266),a(27)),i=a(11),s=(a(267),a(228)),u=(a(4),a(579)),p=(a(577),a(578)),d=(a(289),a(16)),m=a.n(d),f=(a(133),function(e){var t,a,n,l;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.url,a=e.method,n=e.bodyParams,r.next=3,m.a.awrap(fetch(t,{method:a,headers:{Accept:"application/json","Content-Type":"application/json"},body:n?JSON.stringify(n):void 0}));case 3:return l=r.sent,r.next=6,m.a.awrap(l.json());case 6:return r.abrupt("return",r.sent);case 7:case"end":return r.stop()}}))}),y=a(21),E=(a(205),a(570)),g=a(582),v=a(576),h=a(62),b=a.n(h);function k(e){var t=e.date,a=e.index,n=e.type,r=e.ce,c=e.pe,s=l.a.useState([]),u=Object(i.a)(s,2),p=u[0],d=u[1],h=l.a.useState([]),k=Object(i.a)(h,2),x=k[0],_=k[1],w=l.a.useState(21),P=Object(i.a)(w,2),j=P[0],C=P[1],O=l.a.useState(21),S=Object(i.a)(O,2),N=S[0],I=S[1];l.a.useEffect((function(){var e=function(){var e,l,o,i,s,u,p,d,y,E,g,v,h,b,k,x,w,P,C,O,S,N,I,T,D,F,W;return m.a.async((function(B){for(;;)switch(B.prev=B.next){case 0:return B.prev=0,B.next=3,m.a.awrap(f({url:"https://api.optionalgo.in:6001/v1/getdata",method:"post",bodyParams:{date:t,pointtype:n,stockname:a,strike_price_pe:c,strike_price_ce:r}}));case 3:if(e=B.sent,l=e.data,e.success){for(o=[],i=0,s=0,u=j,console.log(l.length),p=0;p<l.length;p++)for(d=l[p],y=d.time_hour_m_in_sec,E=d.indexprice,g=d.stock,v=0;v<g.length;v++)h={},"Both"!==n?(b=g[v],k=b.last_price,x=b.oi,w=b.expiry,P=b.strike_price,C=b.instrument_type,h={id:y,time:y,indexprice:E,last_price:k.toFixed(2),oi:x,expiry:w,strike_price:P,instrument_type:C}):(O=g[v],S=O.last_price,N=O.oi,I=O.strike_price_pe,T=O.strike_price_ce,D=O.last_price_ce,F=O.last_price_pe,W=O.instrument_type,0===j?(i=E.toFixed(2),s=E.toFixed(2)):u===j||0===u?(u=j,i=S.toFixed(2),s=S.toFixed(2),u-=1):(S>i&&(i=S.toFixed(2)),S<s&&(s=S.toFixed(2)),u-=1),h={id:o.length,time:y,last_price:S,indexprice:E,oi:N,strike_price_ce:T,strike_price_pe:I,last_price_ce:D,last_price_pe:F,instrument_type:W,height:[s,i]}),o.push(h);_([].concat(o))}B.next=11;break;case 8:B.prev=8,B.t0=B.catch(0),console.log(B.t0);case 11:case"end":return B.stop()}}),null,null,[[0,8]])};e();var l=setInterval((function(){e()}),6e4);return function(){return clearInterval(l)}}),[t,a,n,r,c,j]),l.a.useEffect((function(){d([]),_([])}),[t,a,n,r,c,j]),l.a.useEffect((function(){!function(){if(0===p.length)d(x);else for(var e=p.length;e<x.length;e++)d([].concat(Object(o.a)(p),[x[e]]))}()}),[x,p]);return l.a.createElement("div",null,l.a.createElement(y.e,{width:1e3,height:400},l.a.createElement(y.c,{width:1e3,height:400,data:p,margin:{top:5,right:20,bottom:5,left:0}},j>=2?l.a.createElement(y.a,{dataKey:"height",stroke:"#8884d8",fill:"#8884d8"}):null,l.a.createElement(y.d,{type:"monotone",dataKey:"last_price",stroke:"#8884d8"}),l.a.createElement(y.b,{stroke:"#ccc",strokeDasharray:"5 5"}),l.a.createElement(y.g,{dataKey:"time"}),l.a.createElement(y.h,{type:"number",allowDecimals:!0,allowDataOverflow:!0,domain:["dataMin-10","dataMax+10"]}),l.a.createElement(y.f,{content:function(e){return e.active&&null!=e.payload&&null!=e.payload[0]&&"Both"!==n?l.a.createElement("div",{className:"custom-tooltip"},l.a.createElement("p",null,e.payload[0].payload.time),l.a.createElement("p",null,e.payload[0].payload.last_price),l.a.createElement("p",null,e.payload[0].payload.strike_price),l.a.createElement("p",null,e.payload[0].payload.indexprice)):e.active&&null!=e.payload&&null!=e.payload[0]&&"Both"===n?l.a.createElement("div",{className:"customTooltip"},l.a.createElement("div",{className:"tooltipContent"},l.a.createElement("p",null,"LTP: ",e.payload[0].payload.last_price),l.a.createElement("p",null,"Puts Price: ",e.payload[0].payload.strike_price_pe),l.a.createElement("p",null,"Call Price: ",e.payload[0].payload.strike_price_ce),l.a.createElement("p",null,"Puts Last Price: ",e.payload[0].payload.last_price_pe),l.a.createElement("p",null,"Call Last Price: ",e.payload[0].payload.last_price_ce),l.a.createElement("p",null,"Time: ",e.payload[0].payload.time),l.a.createElement("p",null,"Low: ",e.payload[0].payload.height[0]),l.a.createElement("p",null,"Peak: ",e.payload[0].payload.height[1]))):""}}))),l.a.createElement("div",null,l.a.createElement(E.a,{variant:"outlined",style:{display:"flex",flexDirection:"row",justifyContent:"center"}},l.a.createElement(g.a,{id:"outlined-basic",label:"Points",variant:"outlined",defaultValue:21,onChange:function(e){I(e.target.value)},style:{padding:"1%"}}),l.a.createElement(v.a,{color:"primary","aria-label":"add",onClick:function(){C(N)},style:{padding:"1%"}},l.a.createElement(b.a,{onClick:function(){C(N)}})))))}var x=Object(u.a)((function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}}));function _(e){var t=e.date,a=e.index,n=e.cePrice,r=e.pePrice,c=x();return""!==t&&""!==a&&0!==n&&0!==r?(console.log(t),console.log(" "!==t),l.a.createElement("div",{className:c.root},l.a.createElement(p.a,{p:3,style:{marginTop:"10px"}},l.a.createElement(k,{date:t,index:a,type:"Both",ce:n,pe:r})))):l.a.createElement("div",null)}var w=a(584),P=a(581),j=a(585),C=Object(u.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function O(e){var t=e.changeDate,a=C(),n=l.a.useState(""),r=Object(i.a)(n,2),c=r[0],o=r[1],s=l.a.useState([]),u=Object(i.a)(s,2),p=u[0],d=u[1],y=l.a.useRef(null);l.a.useEffect((function(){g()}),[]);var g=function(){var e,t,a;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,m.a.awrap(f({url:"https://api.optionalgo.in:6001/v1/getdates",method:"post",bodyParams:{}}));case 3:e=n.sent,t=e.data,a=e.success,console.log(e),a&&d(t),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),null,null,[[0,9]])};return l.a.createElement("div",{className:a.root},l.a.createElement(E.a,{variant:"outlined",className:a.formControl},l.a.createElement(w.a,{ref:y,id:"demo-simple-select-outlined-label"},"Select Date"),l.a.createElement(P.a,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:c,onChange:function(e){o(e.target.value),t(e.target.value)},className:a.selectEmpty},p.map((function(e,t){return l.a.createElement(j.a,{value:e,key:e},e)})))))}var S=Object(u.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function N(e){var t=e.changeIndex,a=S(),n=l.a.useState(""),r=Object(i.a)(n,2),c=r[0],o=r[1],s=l.a.useRef(null);return l.a.createElement("div",{className:a.root},l.a.createElement(E.a,{variant:"outlined",className:a.formControl},l.a.createElement(w.a,{ref:s,id:"demo-simple-select-outlined-label"},"Select Index"),l.a.createElement(P.a,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:c,onChange:function(e){o(e.target.value),t(e.target.value)},className:a.selectEmpty},["NIFTY","BANKNIFTY"].map((function(e,t){return l.a.createElement(j.a,{value:e},e)})))))}var I=a(580),T=Object(u.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function D(e){var t=e.strikeprice,a=e.strikeprice2,n=e.date,r=e.index,c=e.type,o=T(),s=l.a.useState(0),u=Object(i.a)(s,2),p=u[0],d=u[1],y=l.a.useState([]),g=Object(i.a)(y,2),v=g[0],h=g[1],b=l.a.useState([]),k=Object(i.a)(b,2),x=k[0],_=k[1];l.a.useEffect((function(){!function(){var e,t,a;m.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,m.a.awrap(f({url:"https://api.optionalgo.in:6001/v1/getstrikeprices",method:"post",bodyParams:{date:n,pointtype:c,stockname:r}}));case 3:e=l.sent,t=e.data,a=e.success,console.log(e),a&&h(t),l.next=11;break;case 9:l.prev=9,l.t0=l.catch(0);case 11:case"end":return l.stop()}}),null,null,[[0,9]])}()}),[n,r,c]),l.a.useEffect((function(){var e=v.sort();"PE"===c&&(e=e.reverse()),_(e)}),[v,c]);var C=l.a.useRef(null);return""!==n&&""!==r&&0!==v.length?l.a.createElement("div",{className:o.root},l.a.createElement(E.a,{variant:"outlined",className:o.formControl},l.a.createElement(w.a,{ref:C,id:"demo-simple-select-outlined-label"},c," Price"),l.a.createElement(P.a,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:p,onChange:function(e){d(e.target.value),console.log(e.target.value),console.log(v[e.target.value]),t&&t(e.target.value),a&&a(e.target.value)},className:o.selectEmpty},x.map((function(e,t){return l.a.createElement(j.a,{value:e,key:e},e)}))))):l.a.createElement("div",null)}function F(e){var t=e.date,a=e.index,n=e.sPrice,r=e.lPrice,c=l.a.useState([]),s=Object(i.a)(c,2),u=s[0],p=s[1],d=l.a.useState([]),h=Object(i.a)(d,2),k=h[0],x=h[1],_=l.a.useState(21),w=Object(i.a)(_,2),P=w[0],j=w[1],C=l.a.useState(21),O=Object(i.a)(C,2),S=O[0],N=O[1];l.a.useEffect((function(){p([]),x([])}),[a,t,P]),l.a.useEffect((function(){var e=function(){var e,l,c,o,i,s,u,p,d,y;return m.a.async((function(E){for(;;)switch(E.prev=E.next){case 0:return E.prev=0,console.log(t,a),E.next=4,m.a.awrap(f({url:"https://api.optionalgo.in:6001/v1/getdata",method:"post",bodyParams:{date:t,pointtype:"CE",stockname:a}}));case 4:if(e=E.sent,l=e.data,e.success){for(c=[],o=0,i=0,s=P,u=0;u<l.length;u++)p=l[u],d=p.time_hour_m_in_sec,y=p.indexprice,0===u&&n(y),u===l.length-1&&r(y),0===P?(o=y,i=y):s===P||0===s?(s=P,o=y,i=y,s-=1):(y>o&&(o=y),y<i&&(i=y),s-=1),c.push({time:d,price:y,height:[i,o]});x(c)}E.next=11;break;case 9:E.prev=9,E.t0=E.catch(0);case 11:case"end":return E.stop()}}),null,null,[[0,9]])};e();var l=setInterval((function(){e()}),6e4);return function(){return clearInterval(l)}}),[t,a,n,r,P]),l.a.useEffect((function(){!function(){if(0===u.length)p(k);else for(var e=u.length;e<k.length;e++)p([].concat(Object(o.a)(u),[k[e]]))}()}),[k,u]);return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("br",null)),l.a.createElement(y.e,{width:1e3,height:400},l.a.createElement(y.c,{width:1e3,height:400,data:u,margin:{top:5,right:20,bottom:5,left:0}},P>=2?l.a.createElement(y.a,{dataKey:"height",stroke:"#8884d8",fill:"#8884d8"}):null,l.a.createElement(y.d,{type:"monotone",dataKey:"price",stroke:"#8884d8"}),l.a.createElement(y.b,{stroke:"#ccc",strokeDasharray:"5 5"}),l.a.createElement(y.g,{dataKey:"time"}),l.a.createElement(y.h,{type:"number",allowDecimals:!0,allowDataOverflow:!0,domain:["dataMin-10","dataMax+10 "]}),l.a.createElement(y.f,{content:function(e){return e.active&&null!=e.payload&&null!=e.payload[0]?l.a.createElement("div",{className:"customTooltip"},l.a.createElement("div",{className:"tooltipContent"},l.a.createElement("p",null,"Price: ",e.payload[0].payload.price),l.a.createElement("p",null,"Time: ",e.payload[0].payload.time),l.a.createElement("p",null,"Low: ",e.payload[0].payload.height[0]),l.a.createElement("p",null,"Peak: ",e.payload[0].payload.height[1]))):""}}))),l.a.createElement("div",null,l.a.createElement(E.a,{variant:"outlined",style:{display:"flex",flexDirection:"row",justifyContent:"center"}},l.a.createElement(g.a,{id:"outlined-basic",label:"Points",variant:"outlined",defaultValue:21,onChange:function(e){N(e.target.value)},style:{padding:"1%"}}),l.a.createElement(v.a,{color:"primary","aria-label":"add",onClick:function(){j(S)},style:{padding:"1%"}},l.a.createElement(b.a,{onClick:function(){j(S)}})))))}var W=Object(u.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)},position:"fixed",right:"5%",top:"25%",bottom:"auto",left:"auto",borderStyle:"groove",border:"gold",background:"black",color:"white"},extendedIcon:{marginRight:e.spacing(1)}}}));function B(e){var t=e.startPrice,a=e.lastPrice,n=(e.index,W());return l.a.createElement("div",{className:n.root},l.a.createElement("div",null,l.a.createElement("h6",null,l.a.createElement("div",{style:{color:"green"}},"Start Price:")," ",t),l.a.createElement("h6",null,l.a.createElement("div",{style:{color:"green"}},"Last Price:")," ",a)))}var K=a(227),q=a.n(K),L=function(){var e=l.a.useState(""),t=Object(i.a)(e,2),a=t[0],n=t[1],r=l.a.useState(""),c=Object(i.a)(r,2),u=c[0],p=c[1],d=l.a.useState(0),m=Object(i.a)(d,2),f=m[0],y=m[1],E=l.a.useState(0),g=Object(i.a)(E,2),h=g[0],k=g[1],x=l.a.useState(0),w=Object(i.a)(x,2),P=w[0],j=w[1],C=l.a.useState(0),S=Object(i.a)(C,2),T=S[0],W=S[1],K=l.a.useState([]),L=Object(i.a)(K,2),R=L[0],M=L[1];return l.a.createElement("div",{className:"home-body"},l.a.createElement(s.d,{className:" mt-5 pt-5"},l.a.createElement(I.a,{position:"static",style:{display:"flex",justifyContent:"center",color:"white"},color:"white"},l.a.createElement("div",{key:"div",className:"drop"},l.a.createElement(O,{key:"slm",changeDate:function(e){n(e),console.log(a)}}),l.a.createElement(N,{key:"ind",changeIndex:function(e){p(e),console.log(u)}}),""!==a&&""!==u?l.a.createElement(D,{key:"PE",strikeprice:function(e){k(e),console.log(h)},date:a,index:u,type:"PE"}):null,""!==a&&""!==u&&""!==h?l.a.createElement(D,{key:"CE",strikeprice2:function(e){y(e),console.log(f)},date:a,index:u,type:"CE"}):null,0!==f&&""!==h?l.a.createElement("div",{style:{background:"white",paddingRight:"1%"}},l.a.createElement(v.a,{color:"primary","aria-label":"add",style:{width:"50px",top:"20px"},onClick:function(){var e=a,t=u,n=f,r=h,c=l.a.createElement("div",null,l.a.createElement("h6",{style:{display:"flex",flexDirection:"row"}},l.a.createElement("div",{style:{color:"green"}},"CE Price: ")," ",n,l.a.createElement("div",{style:{flex:"1"}}),l.a.createElement("div",{style:{color:"green"}},"PE Price: ")," ",r),l.a.createElement(_,{date:e,index:t,pePrice:r,cePrice:n}));M([c].concat(Object(o.a)(R)))}},l.a.createElement(b.a,null))):null)),0!==P&&0!==T?l.a.createElement(B,{startPrice:P,lastPrice:T,index:u}):null,l.a.createElement("ul",{style:{listStyleType:"none",margin:"0",padding:"0"}},R.map((function(e,t){return l.a.createElement("li",{key:t,style:{paddingTop:"3%"}},e,l.a.createElement(v.a,{color:"primary",key:t,value:t,"aria-label":"remove",onClick:function(){return function(e){console.log(e);var t=R.filter((function(t,a){return a!==e}));console.log(t),M(t)}(t)},style:{width:"50px",top:"20px"}},l.a.createElement(q.a,{key:t,value:t})))}))),""!==a&&""!==u?l.a.createElement(F,{date:a,index:u,sPrice:function(e){j(e)},lPrice:function(e){W(e)}}):null))};var R=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(535),a(536),a(537);c.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[260,1,2]]]);
//# sourceMappingURL=main.1d061980.chunk.js.map