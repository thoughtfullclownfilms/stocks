(this.webpackJsonpstockapp=this.webpackJsonpstockapp||[]).push([[0],{205:function(e,t,a){},256:function(e,t,a){e.exports=a(536)},261:function(e,t,a){},262:function(e,t,a){},263:function(e,t,a){},285:function(e,t,a){},536:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(12),l=a.n(c),o=(a(261),a(262),a(11)),i=(a(263),a(222)),s=a(4),u=a(576),p=a(577),d=a(581),m=a(578),f=a(571),v=a(575),E=(a(285),a(28)),g=a(17),y=a.n(g),h=(a(133),function(e){var t,a,n,r;return y.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=e.url,a=e.method,n=e.bodyParams,c.next=3,y.a.awrap(fetch(t,{method:a,headers:{Accept:"application/json","Content-Type":"application/json"},body:n?JSON.stringify(n):void 0}));case 3:return r=c.sent,c.next=6,y.a.awrap(r.json());case 6:return c.abrupt("return",c.sent);case 7:case"end":return c.stop()}}))}),b=a(27);a(205);function x(e){var t=e.date,a=e.index,n=e.type,c=e.ce,l=e.pe,i=r.a.useState([]),s=Object(o.a)(i,2),u=s[0],p=s[1],d=r.a.useState([]),m=Object(o.a)(d,2),f=m[0],v=m[1];r.a.useEffect((function(){var e=function(){var e,r,o,i,s,u,p,d,m,f,E,g,b,x,_,k,j,P,w,O,C,S,N,T,I;return y.a.async((function(B){for(;;)switch(B.prev=B.next){case 0:return B.prev=0,B.next=3,y.a.awrap(h({url:"https://api.optionalgo.in:6001/v1/getdata",method:"post",bodyParams:{date:t,pointtype:n,stockname:a,strike_price_pe:l,strike_price_ce:c}}));case 3:if(e=B.sent,r=e.data,o=e.success,console.log(e),o){for(i=[],s=0;s<r.length;s++)for(u=r[s],p=u.time_hour_m_in_sec,d=u.indexprice,m=u.stock,f=0;f<m.length;f++)E={},"Both"!==n?(g=m[f],b=g.last_price,x=g.oi,_=g.expiry,k=g.strike_price,j=g.instrument_type,E={id:p,time:p,indexprice:d,last_price:b.toFixed(2),oi:x,expiry:_,strike_price:k,instrument_type:j}):(P=m[f],w=P.last_price,O=P.oi,C=P.strike_price_pe,S=P.strike_price_ce,N=P.last_price_ce,T=P.last_price_pe,I=P.instrument_type,E={id:i.length,time:p,last_price:w.toFixed(2),indexprice:d,oi:O,strike_price_ce:S,strike_price_pe:C,last_price_ce:N,last_price_pe:T,instrument_type:I}),0===f&&(console.log(i),i.push(E));v(i)}B.next=11;break;case 9:B.prev=9,B.t0=B.catch(0);case 11:case"end":return B.stop()}}),null,null,[[0,9]])};e();var r=setInterval((function(){e()}),6e4);return function(){return clearInterval(r)}}),[t,a,n,c,l]),r.a.useEffect((function(){p([]),v([])}),[t,a,n,c,l]),r.a.useEffect((function(){!function(){if(0===u.length)p(f);else for(var e=u.length;e<f.length;e++)p([].concat(Object(E.a)(u),[f[e]]))}()}),[f,u]);return r.a.createElement("div",null,r.a.createElement(b.c,{width:1e3,height:400,data:u,margin:{top:5,right:20,bottom:5,left:0}},r.a.createElement(b.b,{type:"monotone",dataKey:"last_price",stroke:"#8884d8"}),r.a.createElement(b.a,{stroke:"#ccc",strokeDasharray:"5 5"}),r.a.createElement(b.e,{dataKey:"time"}),r.a.createElement(b.f,{type:"number",allowDecimals:!0,allowDataOverflow:!0,domain:["dataMin-10","dataMax+10 "]}),r.a.createElement(b.d,{content:function(e){return e.active&&null!=e.payload&&null!=e.payload[0]&&"Both"!==n?r.a.createElement("div",{className:"custom-tooltip"},r.a.createElement("p",null,e.payload[0].payload.time),r.a.createElement("p",null,e.payload[0].payload.last_price),r.a.createElement("p",null,e.payload[0].payload.strike_price),r.a.createElement("p",null,e.payload[0].payload.indexprice)):e.active&&null!=e.payload&&null!=e.payload[0]&&"Both"===n?r.a.createElement("div",{className:"customTooltip"},r.a.createElement("div",{className:"tooltipContent"},r.a.createElement("p",null,"LTP: ",e.payload[0].payload.last_price),r.a.createElement("p",null,"Puts Price: ",e.payload[0].payload.strike_price_pe),r.a.createElement("p",null,"Call Price: ",e.payload[0].payload.strike_price_ce),r.a.createElement("p",null,"Puts Last Price: ",e.payload[0].payload.last_price_pe),r.a.createElement("p",null,"Call Last Price: ",e.payload[0].payload.last_price_ce),r.a.createElement("p",null,"Time: ",e.payload[0].payload.time))):""}})))}function _(e){var t=e.children,a=e.value,n=e.index,c=e.date,l=e.indexType,o=e.ce,i=e.pe,u=Object(s.a)(e,["children","value","index","date","indexType","ce","pe"]);return r.a.createElement(f.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"scrollable-force-tabpanel-".concat(n),"aria-labelledby":"scrollable-force-tab-".concat(n)},u),a===n&&r.a.createElement(v.a,{p:3,style:{marginTop:"10px"}},r.a.createElement(x,{date:c,index:l,type:t,ce:o,pe:i})))}var k=Object(u.a)((function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}}));function j(e){var t=e.date,a=e.index,n=e.cePrice,c=e.pePrice,l=k(),i=r.a.useState(0),s=Object(o.a)(i,2),u=s[0],f=s[1];return""!==t&&""!==a&&0!==n&&0!==c?(console.log(t),console.log(" "!==t),r.a.createElement("div",{className:l.root},r.a.createElement(p.a,{position:"static",style:{justifyContent:"center"},color:"default"},r.a.createElement(d.a,{value:u,onChange:function(e,t){f(t)},variant:"scrollable",style:{justifyContent:"center"},scrollButtons:"off",indicatorColor:"primary",textColor:"primary","aria-label":"scrollable force tabs example"},r.a.createElement(m.a,Object.assign({label:"CALL+PUTS"},function(e){return{id:"scrollable-force-tab-".concat(e),"aria-controls":"scrollable-force-tabpanel-".concat(e)}}(0))))),r.a.createElement(_,{value:u,date:t,indexType:a,ce:n,pe:c,index:0},"Both"),r.a.createElement(_,{value:u,date:t,indexType:a,ce:n,index:1},"CE"),r.a.createElement(_,{value:u,date:t,indexType:a,pe:c,index:2},"PE"))):r.a.createElement("div",null)}var P=a(579),w=a(582),O=a(580),C=a(583),S=Object(u.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function N(e){var t=e.changeDate,a=S(),n=r.a.useState(""),c=Object(o.a)(n,2),l=c[0],i=c[1],s=r.a.useState([]),u=Object(o.a)(s,2),p=u[0],d=u[1],m=r.a.useRef(null);r.a.useEffect((function(){f()}),[]);var f=function(){var e,t,a;return y.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,y.a.awrap(h({url:"https://api.optionalgo.in:6001/v1/getdates",method:"post",bodyParams:{}}));case 3:e=n.sent,t=e.data,a=e.success,console.log(e),a&&d(t),n.next=11;break;case 9:n.prev=9,n.t0=n.catch(0);case 11:case"end":return n.stop()}}),null,null,[[0,9]])};return r.a.createElement("div",{className:a.root},r.a.createElement(P.a,{variant:"outlined",className:a.formControl},r.a.createElement(w.a,{ref:m,id:"demo-simple-select-outlined-label"},"Select Date"),r.a.createElement(O.a,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:l,onChange:function(e){i(e.target.value),t(e.target.value)},className:a.selectEmpty},p.map((function(e,t){return r.a.createElement(C.a,{value:e},e)})))))}var T=Object(u.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function I(e){var t=e.changeIndex,a=T(),n=r.a.useState(),c=Object(o.a)(n,2),l=c[0],i=c[1],s=r.a.useRef(null);return r.a.createElement("div",{className:a.root},r.a.createElement(P.a,{variant:"outlined",className:a.formControl},r.a.createElement(w.a,{ref:s,id:"demo-simple-select-outlined-label"},"Select Index"),r.a.createElement(O.a,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:l,onChange:function(e){i(e.target.value),t(e.target.value)},className:a.selectEmpty},["NIFTY","BANKNIFTY"].map((function(e,t){return r.a.createElement(C.a,{value:e},e)})))))}var B=Object(u.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function W(e){var t=e.strikeprice,a=e.strikeprice2,n=e.date,c=e.index,l=e.type,i=B(),s=r.a.useState(0),u=Object(o.a)(s,2),p=u[0],d=u[1],m=r.a.useState([]),f=Object(o.a)(m,2),v=f[0],E=f[1],g=r.a.useState([]),b=Object(o.a)(g,2),x=b[0],_=b[1];r.a.useEffect((function(){!function(){var e,t,a;y.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,y.a.awrap(h({url:"https://api.optionalgo.in:6001/v1/getstrikeprices",method:"post",bodyParams:{date:n,pointtype:l,stockname:c}}));case 3:e=r.sent,t=e.data,a=e.success,console.log(e),a&&E(t),r.next=11;break;case 9:r.prev=9,r.t0=r.catch(0);case 11:case"end":return r.stop()}}),null,null,[[0,9]])}()}),[n,c,l]),r.a.useEffect((function(){var e=v.sort();"PE"===l&&(e=e.reverse()),_(e)}),[v,l]);var k=r.a.useRef(null);return""!==n&&""!==c&&0!==v.length?r.a.createElement("div",{className:i.root},r.a.createElement(P.a,{variant:"outlined",className:i.formControl},r.a.createElement(w.a,{ref:k,id:"demo-simple-select-outlined-label"},l," Price"),r.a.createElement(O.a,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:p,onChange:function(e){d(e.target.value),console.log(e.target.value),console.log(v[e.target.value]),t&&t(e.target.value),a&&a(e.target.value)},className:i.selectEmpty},x.map((function(e,t){return r.a.createElement(C.a,{value:e},e)}))))):r.a.createElement("div",null)}function D(e){var t=e.date,a=e.index,n=e.sPrice,c=e.lPrice,l=r.a.useState([]),i=Object(o.a)(l,2),s=i[0],u=i[1],p=r.a.useState([]),d=Object(o.a)(p,2),m=d[0],f=d[1];return r.a.useEffect((function(){u([]),f([])}),[a,t]),r.a.useEffect((function(){var e=function(){var e,r,l,o,i,s,u;return y.a.async((function(p){for(;;)switch(p.prev=p.next){case 0:return p.prev=0,console.log(t,a),p.next=4,y.a.awrap(h({url:"https://api.optionalgo.in:6001/v1/getdata",method:"post",bodyParams:{date:t,pointtype:"CE",stockname:a}}));case 4:if(e=p.sent,r=e.data,e.success){for(l=[],o=0;o<r.length;o++)i=r[o],s=i.time_hour_m_in_sec,u=i.indexprice,0===o&&n(u),o===r.length-1&&c(u),l.push({time:s,price:u});f(l)}p.next=11;break;case 9:p.prev=9,p.t0=p.catch(0);case 11:case"end":return p.stop()}}),null,null,[[0,9]])};e();var r=setInterval((function(){e()}),6e4);return function(){return clearInterval(r)}}),[t,a,n,c]),r.a.useEffect((function(){!function(){if(0===s.length)u(m);else for(var e=s.length;e<m.length;e++)u([].concat(Object(E.a)(s),[m[e]]))}()}),[m,s]),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("br",null)),r.a.createElement(b.c,{width:1e3,height:400,data:s,margin:{top:5,right:20,bottom:5,left:20}},r.a.createElement(b.b,{type:"monotone",dataKey:"price",stroke:"#8884d8"}),r.a.createElement(b.a,{stroke:"#ccc",strokeDasharray:"5 5"}),r.a.createElement(b.e,{dataKey:"time"}),r.a.createElement(b.f,{type:"number",domain:["dataMin-50","dataMax+50 "]}),r.a.createElement(b.d,null)))}var q=Object(u.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)},position:"fixed",right:"5%",top:"25%",bottom:"auto",left:"auto",borderStyle:"groove",border:"gold",background:"black",color:"white"},extendedIcon:{marginRight:e.spacing(1)}}}));function L(e){var t=e.startPrice,a=e.lastPrice,n=(e.index,q());return r.a.createElement("div",{className:n.root},r.a.createElement("div",null,r.a.createElement("h6",null,r.a.createElement("div",{style:{color:"green"}},"Start Price:")," ",t),r.a.createElement("h6",null,r.a.createElement("div",{style:{color:"green"}},"Last Price:")," ",a)))}var K=function(){var e=r.a.useState(""),t=Object(o.a)(e,2),a=t[0],n=t[1],c=r.a.useState(""),l=Object(o.a)(c,2),s=l[0],u=l[1],d=r.a.useState(0),m=Object(o.a)(d,2),f=m[0],v=m[1],E=r.a.useState(0),g=Object(o.a)(E,2),y=g[0],h=g[1],b=r.a.useState(0),x=Object(o.a)(b,2),_=x[0],k=x[1],P=r.a.useState(0),w=Object(o.a)(P,2),O=w[0],C=w[1];return r.a.createElement("div",{className:"home-body"},r.a.createElement(i.d,{className:" mt-5 pt-5"},r.a.createElement(p.a,{position:"static",style:{display:"flex",justifyContent:"center"},color:"default"},r.a.createElement("div",{className:"drop"},r.a.createElement(N,{changeDate:function(e){n(e),console.log(a)}}),r.a.createElement(I,{changeIndex:function(e){u(e),console.log(s)}}),""!==a&&""!==s?r.a.createElement(W,{strikeprice:function(e){h(e),console.log(y)},date:a,index:s,type:"PE"}):null,""!==a&&""!==s?r.a.createElement(W,{strikeprice2:function(e){v(e),console.log(f)},date:a,index:s,type:"CE"}):null)),0!==_&&0!==O?r.a.createElement(L,{startPrice:_,lastPrice:O,index:s}):null,""!==a&&""!==s&&0!==f&&0!==y?r.a.createElement(j,{date:a,index:s,pePrice:y,cePrice:f}):null,""!==a&&""!==s?r.a.createElement(D,{date:a,index:s,sPrice:function(e){k(e)},lPrice:function(e){C(e)}}):null))};var A=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(K,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(533),a(534),a(535);l.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[256,1,2]]]);
//# sourceMappingURL=main.259a2e57.chunk.js.map