(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[85],{1196:function(e,t,a){"use strict";a.r(t);var l=a(198),r=a(199),n=a(201),o=a(200),s=a(146),c=a(202),i=a(0),d=a.n(i),u=a(2),m=a(664),b=a(665),f=a(675),p=a(669),v=a.n(p),g=a(203),h=(a(681),a(765)),E=a(53);var O=function(e){function t(e){var a,r,c,i;return Object(l.a)(this,t),r=this,c=t,i=[e],c=Object(s.a)(c),(a=Object(n.a)(r,Object(o.a)()?Reflect.construct(c,i||[],Object(s.a)(r).constructor):c.apply(r,i))).state={userOrdersList:[]},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=JSON.parse(localStorage.getItem("user_id"));console.log(t),E.a.get("/user/myOrders/".concat(t)).then((function(t){console.log("userOrdersList",t.data.data),!0===t.data.status&&e.setState({userOrdersList:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this.state.userOrdersList;return d.a.createElement(g.a,{headerTop:"visible"},d.a.createElement("section",{className:"pt-0 pb-0"},d.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(v.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},d.a.createElement(m.a,null,d.a.createElement(b.a,null,d.a.createElement(f.a,{md:"12"},d.a.createElement("div",{className:"leftcont text-left"},d.a.createElement("h1",null,"Order History"))))))),d.a.createElement("section",null,d.a.createElement(m.a,null,d.a.createElement(b.a,null,d.a.createElement(f.a,{lg:"12"},d.a.createElement("div",{className:""},d.a.createElement(h.a,{striped:!0,className:""},d.a.createElement("thead",null,d.a.createElement("tr",null,d.a.createElement("th",null,"#Order ID"),d.a.createElement("th",null,"Astrologer Name"),d.a.createElement("th",null,"Email "),d.a.createElement("th",null,"Mobile No."),d.a.createElement("th",null,"Product Name"),d.a.createElement("th",null,"Price"),d.a.createElement("th",null,"Date/Time"),d.a.createElement("th",null,"Action"))),e.length?e.map((function(e,t){var a,l,r,n,o,s;return d.a.createElement("tbody",null,d.a.createElement("tr",null,d.a.createElement("th",null,null===e||void 0===e?void 0:e.orderId),d.a.createElement("td",null,null===e||void 0===e||null===(a=e.astroid)||void 0===a?void 0:a.fullname),d.a.createElement("td",null,null===e||void 0===e||null===(l=e.astroid)||void 0===l?void 0:l.email),d.a.createElement("td",null,null===e||void 0===e||null===(r=e.astroid)||void 0===r?void 0:r.mobile),d.a.createElement("td",null,null===e||void 0===e||null===(n=e.product)||void 0===n||null===(o=n.product)||void 0===o?void 0:o.productname),d.a.createElement("td",null,null===e||void 0===e||null===(s=e.product)||void 0===s?void 0:s.price,"Rs."),d.a.createElement("td",null,null===e||void 0===e?void 0:e.createdAt),d.a.createElement("td",null,d.a.createElement(u.c,{className:"Tansdel"},d.a.createElement("i",{class:"fa fa-trash-o","aria-hidden":"true"})))))})):null)))))))}}]),t}(d.a.Component);t.default=O},669:function(e,t,a){e.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},675:function(e,t,a){"use strict";var l=a(7),r=a(15),n=a(0),o=a.n(n),s=a(4),c=a.n(s),i=a(77),d=a.n(i),u=a(58),m=["className","cssModule","widths","tag"],b=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:b,offset:b})]),p={tag:u.n,xs:f,sm:f,md:f,lg:f,xl:f,className:c.a.string,cssModule:c.a.object,widths:c.a.array},v={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},h=function(e){var t=e.className,a=e.cssModule,n=e.widths,s=e.tag,c=Object(r.a)(e,m),i=[];n.forEach((function(t,l){var r=e[t];if(delete c[t],r||""===r){var n=!l;if(Object(u.h)(r)){var o,s=n?"-":"-"+t+"-",m=g(n,t,r.size);i.push(Object(u.j)(d()(((o={})[m]=r.size||""===r.size,o["order"+s+r.order]=r.order||0===r.order,o["offset"+s+r.offset]=r.offset||0===r.offset,o)),a))}else{var b=g(n,t,r);i.push(b)}}})),i.length||i.push("col");var b=Object(u.j)(d()(t,i),a);return o.a.createElement(s,Object(l.a)({},c,{className:b}))};h.propTypes=p,h.defaultProps=v,t.a=h},681:function(e,t,a){},765:function(e,t,a){"use strict";var l=a(7),r=a(15),n=a(0),o=a.n(n),s=a(4),c=a.n(s),i=a(77),d=a.n(i),u=a(58),m=["className","cssModule","size","bordered","borderless","striped","dark","hover","responsive","tag","responsiveTag","innerRef"],b={className:c.a.string,cssModule:c.a.object,size:c.a.string,bordered:c.a.bool,borderless:c.a.bool,striped:c.a.bool,dark:c.a.bool,hover:c.a.bool,responsive:c.a.oneOfType([c.a.bool,c.a.string]),tag:u.n,responsiveTag:u.n,innerRef:c.a.oneOfType([c.a.func,c.a.string,c.a.object])},f=function(e){var t=e.className,a=e.cssModule,n=e.size,s=e.bordered,c=e.borderless,i=e.striped,b=e.dark,f=e.hover,p=e.responsive,v=e.tag,g=e.responsiveTag,h=e.innerRef,E=Object(r.a)(e,m),O=Object(u.j)(d()(t,"table",!!n&&"table-"+n,!!s&&"table-bordered",!!c&&"table-borderless",!!i&&"table-striped",!!b&&"table-dark",!!f&&"table-hover"),a),j=o.a.createElement(v,Object(l.a)({},E,{ref:h,className:O}));if(p){var N=Object(u.j)(!0===p?"table-responsive":"table-responsive-"+p,a);return o.a.createElement(g,{className:N},j)}return j};f.propTypes=b,f.defaultProps={tag:"table",responsiveTag:"div"},t.a=f}}]);
//# sourceMappingURL=85.f4706c54.chunk.js.map