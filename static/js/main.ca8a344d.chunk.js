(this.webpackJsonpstockapp=this.webpackJsonpstockapp||[]).push([[0],{137:function(e,t,a){},153:function(e,t,a){},268:function(e,t,a){e.exports=a(545)},273:function(e,t,a){},274:function(e,t,a){},296:function(e,t,a){},545:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),o=a.n(r),c=(a(273),a(274),a(32)),i=a(51),s=a(24),d=a(10),u=(a(153),a(107)),p=(a(4),a(586)),m=a(584),y=a(585),E=(a(296),a(16)),f=a.n(E),v=(a(143),function(e){var t,a,n,l;return f.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.url,a=e.method,n=e.bodyParams,r.next=3,f.a.awrap(fetch(t,{method:a,headers:{Accept:"application/json","Content-Type":"application/json"},body:n?JSON.stringify(n):void 0}));case 3:return l=r.sent,r.next=6,f.a.awrap(l.json());case 6:return r.abrupt("return",r.sent);case 7:case"end":return r.stop()}}))}),h=a(11),g=(a(137),a(577)),b=a(590),k=a(583),x=a(48),w=a.n(x);function _(e){var t=e.date,a=e.index,n=e.type,r=e.ce,o=e.pe,c=l.a.useState([]),i=Object(d.a)(c,2),u=i[0],p=i[1],m=l.a.useState([]),y=Object(d.a)(m,2),E=y[0],x=y[1],_=l.a.useState(21),O=Object(d.a)(_,2),P=O[0],j=O[1],C=l.a.useState(21),S=Object(d.a)(C,2),N=S[0],I=S[1];l.a.useEffect((function(){var e=function(){var e,l,c,i,s,d,u,p,m,y,E,h,g,b,k,w,_,O,j,C,S,N,I,K,D,T,W,L,M;return f.a.async((function(R){for(;;)switch(R.prev=R.next){case 0:return R.prev=0,R.next=3,f.a.awrap(v({url:"https://api.optionalgo.in:6001/v1/getdata",method:"post",bodyParams:{date:t,pointtype:n,stockname:a,strike_price_pe:o,strike_price_ce:r}}));case 3:if(e=R.sent,l=e.data,e.success){for(c=[],i=0,s=0,d=P,console.log(l.length),u=0;u<l.length;u++)for(p=l[u],m=p.time_hour_m_in_sec,y=p.indexprice,E=p.stock,h=0;h<E.length;h++)g={},"Both"!==n?(b=E[h],k=b.last_price,w=b.oi,_=b.expiry,O=b.strike_price,j=b.instrument_type,g={id:m,time:m,indexprice:y,last_price:k.toFixed(2),oi:w,expiry:_,strike_price:O,instrument_type:j}):(C=E[h],S=C.last_price,N=C.oi,I=C.oice,K=C.oipe,D=C.strike_price_pe,T=C.strike_price_ce,W=C.last_price_ce,L=C.last_price_pe,M=C.instrument_type,0===P?(i=y.toFixed(2),s=y.toFixed(2)):d===P||0===d?(d=P,i=S.toFixed(2),s=S.toFixed(2),d-=1):(S>i&&(i=S.toFixed(2)),S<s&&(s=S.toFixed(2)),d-=1),g={id:c.length,time:m,last_price:S,indexprice:y,oi:N,oice:I,oipe:K,strike_price_ce:T,strike_price_pe:D,last_price_ce:W,last_price_pe:L,instrument_type:M,height:[s,i]}),c.push(g);x([].concat(c))}R.next=11;break;case 8:R.prev=8,R.t0=R.catch(0),console.log(R.t0);case 11:case"end":return R.stop()}}),null,null,[[0,8]])};e();var l=setInterval((function(){e()}),6e4);return function(){return clearInterval(l)}}),[t,a,n,r,o,P]),l.a.useEffect((function(){p([]),x([])}),[t,a,n,r,o,P]),l.a.useEffect((function(){!function(){if(0===u.length)p(E);else for(var e=u.length;e<E.length;e++)p([].concat(Object(s.a)(u),[E[e]]))}()}),[E,u]);return l.a.createElement("div",null,l.a.createElement(h.e,{width:1e3,height:400},l.a.createElement(h.c,{width:1e3,height:400,data:u,margin:{top:5,right:20,bottom:5,left:0}},P>=2?l.a.createElement(h.a,{dataKey:"height",stroke:"#8884d8",fill:"#8884d8"}):null,l.a.createElement(h.d,{type:"monotone",dataKey:"last_price",stroke:"#8884d8"}),l.a.createElement(h.b,{stroke:"#ccc",strokeDasharray:"5 5"}),l.a.createElement(h.g,{dataKey:"time"}),l.a.createElement(h.h,{type:"number",allowDecimals:!0,allowDataOverflow:!0,domain:["dataMin-10","dataMax+10"]}),l.a.createElement(h.f,{content:function(e){return e.active&&null!=e.payload&&null!=e.payload[0]&&"Both"!==n?l.a.createElement("div",{className:"custom-tooltip"},l.a.createElement("p",null,e.payload[0].payload.time),l.a.createElement("p",null,e.payload[0].payload.last_price),l.a.createElement("p",null,e.payload[0].payload.strike_price),l.a.createElement("p",null,e.payload[0].payload.indexprice)):e.active&&null!=e.payload&&null!=e.payload[0]&&"Both"===n?l.a.createElement("div",{className:"customTooltip"},l.a.createElement("div",{className:"tooltipContent"},l.a.createElement("p",null,"LTP: ",e.payload[0].payload.last_price),l.a.createElement("p",null,"Puts Last Price: ",e.payload[0].payload.last_price_pe),l.a.createElement("p",null,"Call Last Price: ",e.payload[0].payload.last_price_ce),l.a.createElement("p",null,"OI: ",e.payload[0].payload.oi),l.a.createElement("p",null,"Puts Price: ",e.payload[0].payload.strike_price_pe),l.a.createElement("p",null,"Call Price: ",e.payload[0].payload.strike_price_ce),l.a.createElement("p",null,"Time: ",e.payload[0].payload.time),l.a.createElement("p",null,"Low: ",e.payload[0].payload.height[0]),l.a.createElement("p",null,"Peak: ",e.payload[0].payload.height[1]))):""}}))),l.a.createElement("div",null,l.a.createElement(g.a,{variant:"outlined",style:{display:"flex",flexDirection:"row",justifyContent:"center"}},l.a.createElement(b.a,{id:"outlined-basic",label:"Points",variant:"outlined",defaultValue:21,onChange:function(e){I(e.target.value)},style:{padding:"1%"}}),l.a.createElement(k.a,{color:"primary","aria-label":"add",onClick:function(){j(N)},style:{padding:"1%"}},l.a.createElement(w.a,{onClick:function(){j(N)}}))),l.a.createElement(h.e,{width:1e3,height:400},l.a.createElement(h.c,{width:1e3,height:400,data:u,margin:{top:5,right:20,bottom:5,left:15}},l.a.createElement(h.d,{type:"monotone",dataKey:"oi",stroke:"#fb3a1c"}),l.a.createElement(h.d,{type:"monotone",dataKey:"oipe",stroke:"black"}),l.a.createElement(h.d,{type:"monotone",dataKey:"oice",stroke:"green"}),l.a.createElement(h.b,{stroke:"#ccc",strokeDasharray:"5 5"}),l.a.createElement(h.g,{dataKey:"time"}),l.a.createElement(h.h,{type:"number",allowDecimals:!0,allowDataOverflow:!0,domain:["dataMin-1000","dataMax+10"]}),l.a.createElement(h.f,{content:function(e){return e.active&&null!=e.payload&&null!=e.payload[0]&&"Both"!==n?l.a.createElement("div",{className:"custom-tooltip"},l.a.createElement("p",null,e.payload[0].payload.time),l.a.createElement("p",null,e.payload[0].payload.last_price),l.a.createElement("p",null,e.payload[0].payload.strike_price),l.a.createElement("p",null,e.payload[0].payload.indexprice)):e.active&&null!=e.payload&&null!=e.payload[0]&&"Both"===n?l.a.createElement("div",{className:"customTooltip"},l.a.createElement("div",{className:"tooltipContent"},l.a.createElement("p",null,"LTP: ",e.payload[0].payload.last_price),l.a.createElement("p",null,"OI: ",e.payload[0].payload.oi),l.a.createElement("p",null,"Puts OI: ",e.payload[0].payload.oipe),l.a.createElement("p",null,"Call OI: ",e.payload[0].payload.oice),l.a.createElement("p",null,"Puts Price: ",e.payload[0].payload.strike_price_pe),l.a.createElement("p",null,"Call Price: ",e.payload[0].payload.strike_price_ce),l.a.createElement("p",null,"Time: ",e.payload[0].payload.time),l.a.createElement("p",null,"Low: ",e.payload[0].payload.height[0]),l.a.createElement("p",null,"Peak: ",e.payload[0].payload.height[1]))):""}})))))}var O=Object(p.a)((function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}}));function P(e){var t=e.date,a=e.index,n=e.cePrice,r=e.pePrice,o=O();return""!==t&&""!==a&&0!==n&&0!==r?(console.log(t),console.log(" "!==t),l.a.createElement("div",{className:o.root},l.a.createElement(y.a,{p:3,style:{marginTop:"10px"}},l.a.createElement(_,{date:t,index:a,type:"Both",ce:n,pe:r})))):l.a.createElement("div",null)}var j=a(592),C=a(589),S=a(593),N=Object(p.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function I(e){var t=e.changeDate,a=N(),n=l.a.useState(""),r=Object(d.a)(n,2),o=r[0],c=r[1],i=l.a.useState([]),s=Object(d.a)(i,2),u=s[0],p=s[1],m=l.a.useRef(null);l.a.useEffect((function(){y()}),[]);var y=function(){var e,t,a;return f.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,f.a.awrap(v({url:"https://api.optionalgo.in:6001/v1/getdates",method:"post",bodyParams:{}}));case 3:e=n.sent,t=e.data,a=e.success,console.log(e),a&&p(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),window.alert(n.t0);case 12:case"end":return n.stop()}}),null,null,[[0,9]])};return l.a.createElement("div",{className:a.root},l.a.createElement(g.a,{variant:"outlined",className:a.formControl},l.a.createElement(j.a,{ref:m,id:"demo-simple-select-outlined-label"},"Select Date"),l.a.createElement(C.a,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:o,onChange:function(e){c(e.target.value),t(e.target.value)},className:a.selectEmpty},u.map((function(e,t){return l.a.createElement(S.a,{value:e,key:e},e)})))))}var K=Object(p.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function D(e){var t=e.changeIndex,a=K(),n=l.a.useState(""),r=Object(d.a)(n,2),o=r[0],c=r[1],i=l.a.useRef(null);return l.a.createElement("div",{className:a.root},l.a.createElement(g.a,{variant:"outlined",className:a.formControl},l.a.createElement(j.a,{ref:i,id:"demo-simple-select-outlined-label"},"Select Index"),l.a.createElement(C.a,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:o,onChange:function(e){c(e.target.value),t(e.target.value)},className:a.selectEmpty},["NIFTY","BANKNIFTY"].map((function(e,t){return l.a.createElement(S.a,{value:e},e)})))))}var T=a(587),W=Object(p.a)((function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function L(e){var t=e.strikeprice,a=e.strikeprice2,n=e.date,r=e.index,o=e.type,c=W(),i=l.a.useState(0),s=Object(d.a)(i,2),u=s[0],p=s[1],m=l.a.useState([]),y=Object(d.a)(m,2),E=y[0],h=y[1],b=l.a.useState([]),k=Object(d.a)(b,2),x=k[0],w=k[1];l.a.useEffect((function(){!function(){var e,t,a;f.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,f.a.awrap(v({url:"https://api.optionalgo.in:6001/v1/getstrikeprices",method:"post",bodyParams:{date:n,pointtype:o,stockname:r}}));case 3:e=l.sent,t=e.data,a=e.success,console.log(e),a&&h(t),l.next=12;break;case 9:l.prev=9,l.t0=l.catch(0),window.alert(l.t0);case 12:case"end":return l.stop()}}),null,null,[[0,9]])}()}),[n,r,o]),l.a.useEffect((function(){var e=E.sort();"PE"===o&&(e=e.reverse()),w(e)}),[E,o]);var _=l.a.useRef(null);return""!==n&&""!==r&&0!==E.length?l.a.createElement("div",{className:c.root},l.a.createElement(g.a,{variant:"outlined",className:c.formControl},l.a.createElement(j.a,{ref:_,id:"demo-simple-select-outlined-label"},o," Price"),l.a.createElement(C.a,{labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:u,onChange:function(e){p(e.target.value),console.log(e.target.value),console.log(E[e.target.value]),t&&t(e.target.value),a&&a(e.target.value)},className:c.selectEmpty},x.map((function(e,t){return l.a.createElement(S.a,{value:e,key:e},e)}))))):l.a.createElement("div",null)}function M(e){var t=e.date,a=e.index,n=e.sPrice,r=e.lPrice,o=l.a.useState([]),c=Object(d.a)(o,2),i=c[0],u=c[1],p=l.a.useState([]),m=Object(d.a)(p,2),y=m[0],E=m[1],x=l.a.useState(21),_=Object(d.a)(x,2),O=_[0],P=_[1],j=l.a.useState(21),C=Object(d.a)(j,2),S=C[0],N=C[1];l.a.useEffect((function(){u([]),E([])}),[a,t,O]),l.a.useEffect((function(){var e=function(){var e,l,o,c,i,s,d,u,p,m;return f.a.async((function(y){for(;;)switch(y.prev=y.next){case 0:return y.prev=0,console.log(t,a),y.next=4,f.a.awrap(v({url:"https://api.optionalgo.in:6001/v1/getdata",method:"post",bodyParams:{date:t,pointtype:"CE",stockname:a}}));case 4:if(e=y.sent,l=e.data,e.success){for(o=[],c=0,i=0,s=O,d=0;d<l.length;d++)u=l[d],p=u.time_hour_m_in_sec,m=u.indexprice,0===d&&n(m),d===l.length-1&&r(m),0===O?(c=m,i=m):s===O||0===s?(s=O,c=m,i=m,s-=1):(m>c&&(c=m),m<i&&(i=m),s-=1),o.push({time:p,price:m,height:[i,c]});E(o)}y.next=12;break;case 9:y.prev=9,y.t0=y.catch(0),window.alert(y.t0);case 12:case"end":return y.stop()}}),null,null,[[0,9]])};e();var l=setInterval((function(){e()}),6e4);return function(){return clearInterval(l)}}),[t,a,n,r,O]),l.a.useEffect((function(){!function(){if(0===i.length)u(y);else for(var e=i.length;e<y.length;e++)u([].concat(Object(s.a)(i),[y[e]]))}()}),[y,i]);return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("br",null)),l.a.createElement(h.e,{width:1e3,height:400},l.a.createElement(h.c,{width:1e3,height:400,data:i,margin:{top:5,right:20,bottom:5,left:0}},O>=2?l.a.createElement(h.a,{dataKey:"height",stroke:"#8884d8",fill:"#8884d8"}):null,l.a.createElement(h.d,{type:"monotone",dataKey:"price",stroke:"#8884d8"}),l.a.createElement(h.b,{stroke:"#ccc",strokeDasharray:"5 5"}),l.a.createElement(h.g,{dataKey:"time"}),l.a.createElement(h.h,{type:"number",allowDecimals:!0,allowDataOverflow:!0,domain:["dataMin-10","dataMax+10 "]}),l.a.createElement(h.f,{content:function(e){return e.active&&null!=e.payload&&null!=e.payload[0]?l.a.createElement("div",{className:"customTooltip"},l.a.createElement("div",{className:"tooltipContent"},l.a.createElement("p",null,"Price: ",e.payload[0].payload.price),l.a.createElement("p",null,"Time: ",e.payload[0].payload.time),l.a.createElement("p",null,"Low: ",e.payload[0].payload.height[0]),l.a.createElement("p",null,"Peak: ",e.payload[0].payload.height[1]))):""}}))),l.a.createElement("div",null,l.a.createElement(g.a,{variant:"outlined",style:{display:"flex",flexDirection:"row",justifyContent:"center"}},l.a.createElement(b.a,{id:"outlined-basic",label:"Points",variant:"outlined",defaultValue:21,onChange:function(e){N(e.target.value)},style:{padding:"1%"}}),l.a.createElement(k.a,{color:"primary","aria-label":"add",onClick:function(){P(S)},style:{padding:"1%"}},l.a.createElement(w.a,{onClick:function(){P(S)}})))))}var R=Object(p.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)},position:"fixed",right:"5%",top:"25%",bottom:"auto",left:"auto",borderStyle:"groove",border:"gold",background:"black",color:"white"},extendedIcon:{marginRight:e.spacing(1)}}}));function B(e){var t=e.startPrice,a=e.lastPrice,n=(e.index,R());return l.a.createElement("div",{className:n.root},l.a.createElement("div",null,l.a.createElement("h6",null,l.a.createElement("div",{style:{color:"green"}},"Start Price:")," ",t),l.a.createElement("h6",null,l.a.createElement("div",{style:{color:"green"}},"Last Price:")," ",a)))}var F=a(106),q=a.n(F),A=a(588),G=Object(p.a)((function(e){return{root:{flexGrow:1},title:{marginRight:e.spacing(2)}}})),J=function(e){e.hideButton;var t=G();return l.a.createElement(c.a,{basename:"/"},l.a.createElement(T.a,{position:"sticky",style:{background:"black"}},l.a.createElement(A.a,null,l.a.createElement(m.a,{variant:"h6",className:t.title},l.a.createElement(c.b,{to:"/"},"My LOGO")),l.a.createElement("div",{style:{flex:"1"}}),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}},l.a.createElement(m.a,{variant:"h6",style:{paddingRight:"10px"}},l.a.createElement(c.b,{to:"/"},"Home")),l.a.createElement(m.a,{variant:"h6",style:{paddingRight:"10px"}},l.a.createElement(c.b,{to:"/OI"},"OI")),l.a.createElement(m.a,{variant:"h6"},l.a.createElement(c.b,{to:"/OI"},"Logout"))))))},V=function(){var e=l.a.useState(""),t=Object(d.a)(e,2),a=t[0],n=t[1],r=l.a.useState(""),o=Object(d.a)(r,2),c=o[0],i=o[1],p=l.a.useState(0),m=Object(d.a)(p,2),y=m[0],E=m[1],f=l.a.useState(0),v=Object(d.a)(f,2),h=v[0],g=v[1],b=l.a.useState(0),x=Object(d.a)(b,2),_=x[0],O=x[1],j=l.a.useState(0),C=Object(d.a)(j,2),S=C[0],N=C[1],K=l.a.useState([]),W=Object(d.a)(K,2),R=W[0],F=W[1];return l.a.createElement("div",{className:"home-body"},l.a.createElement(J,null),l.a.createElement(u.d,{className:" mt-5 pt-5"},l.a.createElement(T.a,{position:"static",style:{display:"flex",justifyContent:"center",color:"white"},color:"white"},l.a.createElement("div",{key:"div",className:"drop"},l.a.createElement(I,{key:"slm",changeDate:function(e){n(e),console.log(a)}}),l.a.createElement(D,{key:"ind",changeIndex:function(e){i(e),console.log(c)}}),""!==a&&""!==c?l.a.createElement(L,{key:"PE",strikeprice:function(e){g(e),console.log(h)},date:a,index:c,type:"PE"}):null,""!==a&&""!==c&&""!==h?l.a.createElement(L,{key:"CE",strikeprice2:function(e){E(e),console.log(y)},date:a,index:c,type:"CE"}):null,0!==y&&""!==h?l.a.createElement("div",{style:{background:"white",paddingRight:"1%"}},l.a.createElement(k.a,{color:"primary","aria-label":"add",style:{width:"50px",top:"20px"},onClick:function(){var e=a,t=c,n=y,r=h,o=l.a.createElement("div",null,l.a.createElement("h6",{style:{display:"flex",flexDirection:"row"}},l.a.createElement("div",{style:{color:"green"}},"CE Price: ")," ",n,l.a.createElement("div",{style:{flex:"1"}}),l.a.createElement("div",{style:{color:"green"}},"PE Price: ")," ",r),l.a.createElement(P,{date:e,index:t,pePrice:r,cePrice:n}));F([o].concat(Object(s.a)(R)))}},l.a.createElement(w.a,null))):null)),0!==_&&0!==S?l.a.createElement(B,{startPrice:_,lastPrice:S,index:c}):null,l.a.createElement("ul",{style:{listStyleType:"none",margin:"0",padding:"0"}},R.map((function(e,t){return l.a.createElement("li",{key:t,style:{paddingTop:"3%"}},e,l.a.createElement(k.a,{color:"primary",key:t,value:t,"aria-label":"remove",onClick:function(){return function(e){console.log(e);var t=R.filter((function(t,a){return a!==e}));console.log(t),F(t)}(t)},style:{width:"50px",top:"20px"}},l.a.createElement(q.a,{key:t,value:t})))}))),""!==a&&""!==c?l.a.createElement(M,{date:a,index:c,sPrice:function(e){O(e)},lPrice:function(e){N(e)}}):null))},H=a(68),Y=a(581),$=a(594),z=Object(p.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120,maxWidth:300},chips:{display:"flex",flexWrap:"wrap"},chip:{margin:2},noLabel:{marginTop:e.spacing(3)}}})),Q={PaperProps:{style:{maxHeight:224,width:250}}};function U(e,t,a){return{fontWeight:-1===t.indexOf(e)?a.typography.fontWeightRegular:a.typography.fontWeightMedium}}function X(e){var t=e.strikeprice,a=e.strikeprice2,n=e.date,r=e.index,o=e.type,c=z(),i=l.a.useState([]),s=Object(d.a)(i,2),u=s[0],p=s[1],m=l.a.useState([]),y=Object(d.a)(m,2),E=y[0],h=y[1],b=l.a.useState([]),k=Object(d.a)(b,2),x=k[0],w=k[1],_=Object(H.a)();l.a.useEffect((function(){!function(){var e,t,a;f.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:return l.prev=0,l.next=3,f.a.awrap(v({url:"https://api.optionalgo.in:6001/v1/getstrikeprices",method:"post",bodyParams:{date:n,pointtype:o,stockname:r}}));case 3:e=l.sent,t=e.data,a=e.success,console.log(e),a&&h(t),l.next=12;break;case 9:l.prev=9,l.t0=l.catch(0),window.alert(l.t0);case 12:case"end":return l.stop()}}),null,null,[[0,9]])}()}),[n,r,o]),l.a.useEffect((function(){var e=E.sort();"PE"===o&&(e=e.reverse()),w(e)}),[E,o]);var O=l.a.useRef(null);return""!==n&&""!==r&&0!==E.length?l.a.createElement("div",{className:c.root},l.a.createElement(g.a,{variant:"outlined",className:c.formControl},l.a.createElement(j.a,{ref:O,id:"demo-simple-select-outlined-label"},o," Price"),l.a.createElement(C.a,{multiple:!0,labelId:"demo-simple-select-required-label",id:"demo-simple-select-required",value:u,onChange:function(e){e.target.value.length<=5?(p(e.target.value),console.log(e.target.value),console.log(e.target.value),t&&t(e.target.value),a&&a(e.target.value)):window.alert("Don't Select more than 5")},input:l.a.createElement(Y.a,{id:"select-multiple-chip"}),renderValue:function(e){return l.a.createElement("div",{className:c.chips},e.map((function(e){return l.a.createElement($.a,{key:e,label:e,className:c.chip})})))},MenuProps:Q},x.map((function(e){return l.a.createElement(S.a,{value:e,key:e,style:U(e,u,_)},e)}))))):l.a.createElement("div",null)}function Z(e){var t=e.date,a=e.index,n=e.type,r=e.ce,o=e.pe,c=l.a.useState([]),i=Object(d.a)(c,2),u=i[0],p=i[1],m=l.a.useState([]),y=Object(d.a)(m,2),E=y[0],g=y[1];l.a.useEffect((function(){var e=function(){var e,n,l,c,i,s,d,u,p,m,y,E,h,b,k;return f.a.async((function(x){for(;;)switch(x.prev=x.next){case 0:return x.prev=0,x.next=3,f.a.awrap(v({url:"https://api.optionalgo.in:6001/v1/getoidata",method:"post",bodyParams:{date:t,stockname:a,strike_price_pes:o,strike_price_ces:r}}));case 3:if(e=x.sent,n=e.data,l=e.success,console.log(e),l){for(c=[],i=0;i<n.length;i++)for(s=n[i],d=s.time_hour_m_in_sec,u=s.indexprice,p=s.stock,m=0;m<p.length;m++)y={},E=p[m],h=E.oi,b=E.strike_price,k=E.instrument_type,r[0]===b?y={id:c.length,time:d,indexprice:u,oi0:h,strike_price:b,instrument_type:k}:r[1]===b?y={id:c.length,time:d,indexprice:u,oi1:h,strike_price:b,instrument_type:k}:r[2]===b?y={id:c.length,time:d,indexprice:u,oi2:h,strike_price:b,instrument_type:k}:r[3]===b?y={id:c.length,time:d,indexprice:u,oi3:h,strike_price:b,instrument_type:k}:r[4]===b?y={id:c.length,time:d,indexprice:u,oi4:h,strike_price:b,instrument_type:k}:o[0]===b?y={id:c.length,time:d,indexprice:u,oi5:h,strike_price:b,instrument_type:k}:o[1]===b?y={id:c.length,time:d,indexprice:u,oi6:h,strike_price:b,instrument_type:k}:o[2]===b?y={id:c.length,time:d,indexprice:u,oi7:h,strike_price:b,instrument_type:k}:o[3]===b?y={id:c.length,time:d,indexprice:u,oi8:h,strike_price:b,instrument_type:k}:o[4]===b&&(y={id:c.length,time:d,indexprice:u,oi9:h,strike_price:b,instrument_type:k}),console.log(c),c.push(y);g(c),console.log(c)}x.next=12;break;case 9:x.prev=9,x.t0=x.catch(0),window.alert(x.t0);case 12:case"end":return x.stop()}}),null,null,[[0,9]])};e();var n=setInterval((function(){e()}),6e4);return function(){return clearInterval(n)}}),[t,a,n,r,o]),l.a.useEffect((function(){p([]),g([])}),[t,a,n,r,o]),l.a.useEffect((function(){!function(){if(0===u.length)p(E);else for(var e=u.length;e<E.length;e++)p([].concat(Object(s.a)(u),[E[e]]))}()}),[E,u]);return l.a.createElement("div",null,l.a.createElement("div",null,void 0!==r&&void 0!==r[0]?l.a.createElement("h5",{style:{background:"#194610",color:"white"}},"CE: ",r[0]):null,void 0!==r&&void 0!==r[1]?l.a.createElement("h5",{style:{background:"#1f770d",color:"white"}},"CE: ",r[1]):null,void 0!==r&&void 0!==r[2]?l.a.createElement("h5",{style:{background:"#a2c764",color:"white"}},"CE: ",r[2]):null,void 0!==r&&void 0!==r[3]?l.a.createElement("h5",{style:{background:"#dff54f",color:"white"}},"CE: ",r[3]):null,void 0!==r&&void 0!==r[4]?l.a.createElement("h5",{style:{background:"#f5f04f",color:"white"}},"CE: ",r[4]):null,void 0!==o&&void 0!==o[0]?l.a.createElement("h5",{style:{background:"#ab6988",color:"white"}},"PE: ",o[0]):null,void 0!==o&&void 0!==o[1]?l.a.createElement("h5",{style:{background:"#010b28",color:"white"}},"PE: ",o[1]):null,void 0!==o&&void 0!==o[2]?l.a.createElement("h5",{style:{background:"#0018ff",color:"white"}},"PE: ",o[2]):null,void 0!==o&&void 0!==o[3]?l.a.createElement("h5",{style:{background:"#24756c",color:"white"}},"PE: ",o[3]):null,void 0!==o&&void 0!==o[4]?l.a.createElement("h5",{style:{background:"#906c59",color:"white"}},"PE: ",o[4]):null),l.a.createElement(h.c,{width:1200,height:500,data:u,margin:{top:5,right:20,bottom:5,left:20}},void 0!==r&&void 0!==r[0]?l.a.createElement(h.d,{type:"monotype",dataKey:"oi0",stroke:"#194610"}):null,void 0!==r&&void 0!==r[1]?l.a.createElement(h.d,{type:"monotype",dataKey:"oi1",stroke:"#1f770d"}):null,void 0!==r&&void 0!==r[2]?l.a.createElement(h.d,{type:"monotype",dataKey:"oi2",stroke:"#a2c764"}):null,void 0!==r&&void 0!==r[3]?l.a.createElement(h.d,{type:"monotype",dataKey:"oi3",stroke:"#dff54f"}):null,void 0!==r&&void 0!==r[4]?l.a.createElement(h.d,{type:"monotype",dataKey:"oi4",stroke:"#f5f04f"}):null,void 0!==o&&void 0!==o[0]?l.a.createElement(h.d,{type:"monotype",dataKey:"oi5",stroke:"#ab6988"}):null,void 0!==o&&void 0!==o[1]?l.a.createElement(h.d,{type:"monotype",dataKey:"oi6",stroke:"#010b28"}):null,void 0!==o&&void 0!==o[2]?l.a.createElement(h.d,{type:"monotype",dataKey:"oi7",stroke:"#0018ff"}):null,void 0!==o&&void 0!==o[3]?l.a.createElement(h.d,{type:"monotype",dataKey:"oi8",stroke:"#24756c"}):null,void 0!==o&&void 0!==o[4]?l.a.createElement(h.d,{type:"monotype",dataKey:"oi9",stroke:"#906c59"}):null,l.a.createElement(h.b,{stroke:"#ccc",strokeDasharray:"5 5"}),l.a.createElement(h.g,{dataKey:"time"}),l.a.createElement(h.h,{type:"number",allowDecimals:!0,allowDataOverflow:!0,domain:["dataMin-1000","dataMax+1000"]}),l.a.createElement(h.f,null)))}var ee=function(){var e=l.a.useState(""),t=Object(d.a)(e,2),a=t[0],n=t[1],r=l.a.useState(""),o=Object(d.a)(r,2),c=o[0],i=o[1],p=l.a.useState([]),m=Object(d.a)(p,2),y=m[0],E=m[1],f=l.a.useState([]),v=Object(d.a)(f,2),h=v[0],g=v[1],b=l.a.useState(0),x=Object(d.a)(b,2),_=x[0],O=x[1],P=l.a.useState(0),j=Object(d.a)(P,2),C=j[0],S=j[1],N=l.a.useState([]),K=Object(d.a)(N,2),W=K[0],L=K[1];return l.a.createElement("div",{className:"home-body"},l.a.createElement(J,null),l.a.createElement(u.d,{className:" mt-5 pt-5"},l.a.createElement(T.a,{position:"static",style:{display:"flex",justifyContent:"center",color:"white"},color:"white"},l.a.createElement("div",{key:"div",className:"drop"},l.a.createElement(I,{key:"slm",changeDate:function(e){n(e),console.log(a)}}),l.a.createElement(D,{key:"ind",changeIndex:function(e){i(e),console.log(c)}}),""!==a&&""!==c?l.a.createElement(X,{key:"PE",strikeprice:function(e){g(e),console.log(h)},date:a,index:c,type:"PE"}):null,""!==a&&""!==c?l.a.createElement(X,{key:"CE",strikeprice2:function(e){E(e),console.log(y)},date:a,index:c,type:"CE"}):null,0!==y.length||0!==h.length?l.a.createElement("div",{style:{background:"white",paddingRight:"1%"}},l.a.createElement(k.a,{color:"primary","aria-label":"add",style:{width:"50px",top:"20px"},onClick:function(){var e=a,t=c,n=y,r=h,o=l.a.createElement("div",null,l.a.createElement(Z,{date:e,index:t,pe:r,ce:n}));L([o].concat(Object(s.a)(W)))}},l.a.createElement(w.a,null))):null)),0!==_&&0!==C?l.a.createElement(B,{startPrice:_,lastPrice:C,index:c}):null,l.a.createElement("ul",{style:{listStyleType:"none",margin:"0",padding:"0"}},W.map((function(e,t){return l.a.createElement("li",{key:t,style:{paddingTop:"3%"}},e,l.a.createElement(k.a,{color:"primary",key:t,value:t,"aria-label":"remove",onClick:function(){return function(e){console.log(e);var t=W.filter((function(t,a){return a!==e}));console.log(t),L(t)}(t)},style:{width:"50px",top:"20px"}},l.a.createElement(q.a,{key:t,value:t})))}))),""!==a&&""!==c?l.a.createElement(M,{date:a,index:c,sPrice:function(e){O(e)},lPrice:function(e){S(e)}}):null))},te=function(){return l.a.createElement("div",null,l.a.createElement(c.a,{basename:"/"},l.a.createElement(i.a,{exact:!0,path:"/"},l.a.createElement(V,null)),l.a.createElement(i.a,{exact:!0,path:"/OI",component:ee})))};var ae=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(542),a(543),a(544);o.a.render(l.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[268,1,2]]]);
//# sourceMappingURL=main.ca8a344d.chunk.js.map