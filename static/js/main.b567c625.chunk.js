(this.webpackJsonpkamal_corporations_react=this.webpackJsonpkamal_corporations_react||[]).push([[0],{18:function(e,t,i){},19:function(e,t,i){},20:function(e,t,i){},27:function(e,t,i){"use strict";i.r(t);var s=i(2),c=i.n(s),a=i(12),l=i.n(a),n=(i(18),i(5)),o=i(6),r=i(8),j=i(7),d=(i.p,i(19),i(20),i(3)),h=i(9),b=i(13),x=i(0),m=0,O=function(e){Object(r.a)(i,e);var t=Object(j.a)(i);function i(){var e;Object(n.a)(this,i);for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];return(e=t.call.apply(t,[this].concat(a))).state={logoStyle:{textAlign:"center",height:"50px",width:"50px",margin:"10px",borderRadius:"100%",boxShadow:"0 0 .5em rgba(0, 0, 0, .5)",transition:"width .5s, height .5s"},companyNameStyle:{fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",textAlign:"center",lineHeight:"52px",fontSize:"28",width:"260px",fontWeight:600,color:"rgb(26, 23, 23)",marginLeft:"10px",display:"block",transition:"fontsize .5s,lineHeight .5s"},floatingNavVisible:!1},e.nav=c.a.createRef(),e.handleScroll=function(){m=window.scrollY,e.setState({logoStyle:{textAlign:"center",height:0==m?"50px":"30px",width:0==m?"50px":"30px",margin:0==m?"10px":"2px",borderRadius:"100%",boxShadow:"0 0 .5em rgba(0, 0, 0, .5)",transition:"width .5s, height .5s"},companyNameStyle:{fontSize:0==m?"28px":"18px",lineHeight:0==m?"52px":"32px",fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",textAlign:"center",width:"260px",fontWeight:600,color:"rgb(26, 23, 23)",marginLeft:"10px",display:"block",transition:"fontsize .5s,lineHeight .5s"}})},e.menuOnClick=function(){e.setState({floatingNavVisible:!e.state.floatingNavVisible})},e.mIn=function(e){e.target.style.color="blue",e.target.style.textDecoration="underline"},e.mOut=function(e){e.target.style.color="white",e.target.style.textDecoration="initial"},e.cIN=function(e){e.target.style.width=5},e.cOut=function(e){e.target.style.width=50},e}return Object(o.a)(i,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.handleScroll,!0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)("nav",{className:"my_navbar",children:Object(x.jsxs)("div",{className:"",children:[Object(x.jsx)("div",{className:"main_logo",children:Object(x.jsx)("img",{src:"images/main_logo_circle.png",alt:"main_logo",style:this.state.logoStyle})}),Object(x.jsx)("div",{children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(d.a,{icon:h.a,className:"fa-2x icon_shade",color:"#0000ff"})}),Object(x.jsx)("li",{children:Object(x.jsx)(d.a,{icon:h.c,className:"fa-2x icon_shade",color:"#00ACEE"})}),Object(x.jsx)("li",{children:Object(x.jsx)(d.a,{icon:h.b,className:"fa-2x icon_shade",color:"#0E76A8"})}),Object(x.jsx)("li",{onClick:this.menuOnClick,children:Object(x.jsx)(d.a,{icon:b.a,className:"fa-2x icon_shade",color:"#0E76A8"})})]})}),Object(x.jsx)("div",{children:Object(x.jsx)("span",{style:this.state.companyNameStyle,children:" Kamal Corporations "})})]})}),Object(x.jsx)("div",{style:{top:122,right:"80px",position:"fixed",width:"300px",background:"#000000E0",zIndex:1e4,transition:"visibility 0.5s, opacity 0.5s linear",visibility:this.state.floatingNavVisible?"hidden":"visible",opacity:this.state.floatingNavVisible?0:100},children:Object(x.jsxs)("ul",{style:g.floatingNavUl,children:[Object(x.jsx)("li",{style:g.floatingNavUlLi,onMouseEnter:this.mIn,onMouseLeave:this.mOut,children:"Home"}),Object(x.jsx)("li",{style:g.floatingNavUlLi,onMouseOver:this.mIn,onMouseLeave:this.mOut,children:"History"}),Object(x.jsx)("li",{style:g.floatingNavUlLi,onMouseOver:this.mIn,onMouseLeave:this.mOut,children:"Products"}),Object(x.jsx)("li",{style:g.floatingNavUlLi,onMouseOver:this.mIn,onMouseLeave:this.mOut,children:"News & Gallery"}),Object(x.jsx)("li",{style:g.floatingNavUlLi,onMouseOver:this.mIn,onMouseLeave:this.mOut,children:"Partnership"}),Object(x.jsx)("li",{style:g.floatingNavUlLi,onMouseOver:this.mIn,onMouseLeave:this.mOut,children:"Contact"})]})}),Object(x.jsx)("div",{id:"main_section",className:"section",children:Object(x.jsx)("div",{id:"carouselExampleControls",class:"carousel slide","data-bs-ride":"carousel",children:Object(x.jsxs)("div",{class:"carousel-inner",children:[Object(x.jsx)("div",{class:"carousel-item active","data-bs-interval":"3000",children:Object(x.jsx)("img",{src:"images/products/laptop1.jpg",class:"d-block w-100",alt:"acbd"})}),Object(x.jsx)("div",{class:"carousel-item","data-bs-interval":"3000",children:Object(x.jsx)("img",{src:"images/products/crafts1.jpg",class:"d-block w-100",alt:"abcd"})}),Object(x.jsx)("div",{class:"carousel-item","data-bs-interval":"3000",children:Object(x.jsx)("img",{src:"images/products/cake1.jpg",class:"d-block w-100",alt:"a"})}),Object(x.jsx)("div",{class:"carousel-item","data-bs-interval":"3000",children:Object(x.jsx)("img",{src:"images/products/rice0.jpg",class:"d-block w-100",alt:"abcd"})}),Object(x.jsx)("div",{class:"carousel-item","data-bs-interval":"3000",children:Object(x.jsx)("img",{src:"images/products/vehicle1.jpg",class:"d-block w-100",alt:"a"})})]})})}),Object(x.jsx)("section",{id:"companies",className:"section",children:Object(x.jsxs)("div",{className:"container-fluid",children:[Object(x.jsx)("div",{className:"row",children:Object(x.jsx)("div",{className:"section-title",children:Object(x.jsxs)("h1",{children:[Object(x.jsx)("span",{children:"Our"})," Enterprises"]})})}),Object(x.jsx)("div",{className:"line"}),Object(x.jsxs)("div",{className:"c_body",children:[Object(x.jsx)("div",{className:"single",children:Object(x.jsx)("img",{src:"images/company_logo/alam_trading_corp.png",alt:"",className:""})}),Object(x.jsx)("div",{className:"single",children:Object(x.jsx)("img",{src:"images/company_logo/agriculture.jpg",alt:"",className:""})}),Object(x.jsx)("div",{className:"single",children:Object(x.jsx)("img",{src:"images/company_logo/logistics.jpg",alt:"",className:""})}),Object(x.jsx)("div",{className:"single",children:Object(x.jsx)("img",{src:"images/company_logo/nargis_property.jpg",alt:"",className:""})}),Object(x.jsx)("div",{className:"single",children:Object(x.jsx)("img",{src:"images/company_logo/infotech.png",alt:"",className:""})}),Object(x.jsx)("div",{className:"single",children:Object(x.jsx)("img",{src:"images/company_logo/joy_bangla_corp.jpg",alt:"",className:""})})]})]})}),Object(x.jsxs)("section",{id:"footer",children:[Object(x.jsx)("div",{className:"container"}),Object(x.jsxs)("footer",{children:[Object(x.jsxs)("section",{className:"ft-main",children:[Object(x.jsxs)("div",{className:"ft-main-item",children:[Object(x.jsx)("h2",{className:"ft-title",children:"Registered office"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"Sabera Bhavan,"}),Object(x.jsx)("li",{children:"D C Road,"}),Object(x.jsx)("li",{children:"West Bakoliya,"}),Object(x.jsx)("li",{children:"Chawkbazar,"}),Object(x.jsx)("li",{children:"Chattogram,Bangladesh."})]})]}),Object(x.jsxs)("div",{className:"ft-main-item",children:[Object(x.jsx)("h2",{className:"ft-title",children:"Liaison Office"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"House 5/2,"}),Object(x.jsx)("li",{children:"Road 4,Khulshi R/A,"}),Object(x.jsx)("li",{children:"Zakir Hussain Road,"}),Object(x.jsx)("li",{children:"Chattogram,Bangladesh."})]})]}),Object(x.jsxs)("div",{className:"ft-main-item",children:[Object(x.jsx)("h2",{className:"ft-title",children:"Administration Office"}),Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:"125,Sugandha Housing Society,"}),Object(x.jsx)("li",{children:"Road -1,Block - D"}),Object(x.jsx)("li",{children:"Chittagong, Bangladesh"})]})]})]}),Object(x.jsx)("section",{className:"ft-social",children:Object(x.jsxs)("ul",{className:"ft-social-list",children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#",children:Object(x.jsx)("i",{className:"fab fa-facebook"})})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#",children:Object(x.jsx)("i",{className:"fab fa-twitter"})})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#",children:Object(x.jsx)("i",{className:"fab fa-instagram"})})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#",children:Object(x.jsx)("i",{className:"fab fa-github"})})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#",children:Object(x.jsx)("i",{className:"fab fa-linkedin"})})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#",children:Object(x.jsx)("i",{className:"fab fa-youtube"})})})]})}),Object(x.jsx)("section",{className:"ft-legal",children:Object(x.jsxs)("ul",{className:"ft-legal-list",children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#",children:"Terms & Conditions"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#",children:"Privacy Policy"})}),Object(x.jsx)("li",{children:"\xa9 2021 Copyright Kamal Corporations."})]})})]})]})]})}}]),i}(c.a.Component),g={floatingNavUl:{marginLeft:"30px",marginTop:"20px",color:"#fff",listStyleType:"circle"},floatingNavUlLi:{color:"#fff"}},f=function(e){Object(r.a)(i,e);var t=Object(j.a)(i);function i(){return Object(n.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"componentDidMount",value:function(){document.title="Kamal Corporations"}},{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)(O,{})})}}]),i}(c.a.Component),u=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,28)).then((function(t){var i=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,l=t.getTTFB;i(e),s(e),c(e),a(e),l(e)}))};l.a.render(Object(x.jsx)(c.a.StrictMode,{children:Object(x.jsx)(f,{})}),document.getElementById("root")),u()}},[[27,1,2]]]);
//# sourceMappingURL=main.b567c625.chunk.js.map