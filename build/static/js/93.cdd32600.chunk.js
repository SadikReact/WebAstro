(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[93],{1210:function(e,t,a){"use strict";a.r(t);var n=a(205),l=a(198),o=a(199),c=a(201),r=a(200),i=a(146),u=a(202),m=a(0),s=a.n(m),p=a(2),E=a(664),d=a(665),v=a(675),h=a(757),f=a(740),g=a(763),b=a(715),y=a(669),S=a.n(y),N=(a(699),a(203)),x=a(53),C=a(674),O=a.n(C),k=a(745),H=a(1182),j=a(1183),R=a(1184);var D=function(e){function t(e){var a,o,u,m;return Object(l.a)(this,t),o=this,u=t,m=[e],u=Object(i.a)(u),(a=Object(c.a)(o,Object(r.a)()?Reflect.construct(u,m||[],Object(i.a)(o).constructor):u.apply(o,m))).changeHandler=function(e){a.setState(Object(n.a)({},e.target.name,e.target.value))},a.changeCountry=function(e){a.setState({selectedCountry:e}),x.a.post("/user/time_zone",{country_code:null===e||void 0===e?void 0:e.timezones[0].zoneName}).then((function(e){var t,n;a.setState({timezone:null===e||void 0===e||null===(t=e.data)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.timezone})})).catch((function(e){console.log(e)}))},a.changeCity=function(e){console.log("item",e),a.setState({submitPlaceHandler:e}),x.a.post("/user/geo_detail",{place:null===e||void 0===e?void 0:e.name}).then((function(e){var t,n,l,o;a.setState({latitude:null===e||void 0===e||null===(t=e.data)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.geonames[0].latitude,longitude:null===e||void 0===e||null===(l=e.data)||void 0===l||null===(o=l.data)||void 0===o?void 0:o.geonames[0].longitude})})).catch((function(e){console.log(e)}))},a.submitCountryHandler=function(e){e.preventDefault();var t={country_code:a.state.country_code};x.a.post("/user/time_zone",t).then((function(e){a.setState({data:e.data}),O()("Success!","Submitted SuccessFull!","success")})).catch((function(e){O()("Error!","You clicked the button!","error")}))},a.submitPlaceHandler=function(e){e.preventDefault();var t={place:a.state.place};x.a.post("/user/geo_detail",t).then((function(e){a.setState({data:e.data}),O()("Success!","Submitted SuccessFull!","success")})).catch((function(e){O()("Error!","You clicked the button!","error")}))},a.submitHandler=function(e){e.preventDefault();var t={day:a.state.day,month:a.state.month,year:a.state.year,hour:a.state.hour,min:a.state.min,lat:a.state.latitude,lon:a.state.longitude,tzone:a.state.timezone};console.log("shgdjhg",t),x.a.post("/user/kalsharpDosh",t).then((function(e){a.setState({data1:!0}),console.log("data1",e.data.data),a.setState({kalsharpDosh:e.data.data}),O()("Success!","Submitted SuccessFull!","success")})).catch((function(e){O()("Error!","You clicked the button!","error"),console.log(e)}))},a.state={day:"",data1:!1,month:"",year:"",hour:"",min:"",lat:"",lon:"",tzone:"",kalsharpDosh:{},state:[],city:[],country:[],selectedCountry:null,selectedState:null,selectedCity:null,timezone:null,latitude:"",longitude:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleInputChanged",value:function(e){this.setState({searchQuery:e.target.value}),x.a.post("/user/geo_detail",{place:this.state.searchQuery}).then((function(e){console.log(e.data)})).catch((function(e){console.log(e)})),console.log(this.state.searchQuery)}},{key:"render",value:function(){var e,t,a,n,l,o=this,c=this.state.kalsharpDosh;return console.log("Respose",c),!0===this.state.data1?(console.log("first",this.state.data1),s.a.createElement(N.a,{headerTop:"visible"},s.a.createElement("section",{className:"pt-0 pb-0"},s.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(S.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},s.a.createElement(E.a,null,s.a.createElement(d.a,null,s.a.createElement(v.a,{md:"12"},s.a.createElement("div",{className:"leftcont text-left"},s.a.createElement("h1",null,"KALSHARP DOSH"))))))),s.a.createElement(E.a,null,s.a.createElement(d.a,null,s.a.createElement(v.a,{md:"12"},s.a.createElement(h.a,{className:"mb-50 pt-d"},s.a.createElement("h3",null,"KALSHARP DOSH Online"),s.a.createElement("p",null,'Kalasarpa Dosha, also known as Kalsharp Dosh, is a condition in Vedic astrology that is believed to occur when all the seven planets in an individual\'s birth chart are situated between the two lunar nodes, Rahu and Ketu. The term "Kalasarpa" means "serpent of time," and it is believed that this condition can cause various negative effects on an individual\'s life'),s.a.createElement("p",null,"According to Vedic astrology, the presence of Kalasarpa Dosha in an individual's birth chart can cause delays and obstacles in various aspects of life, such as career, education, health, marriage, and financial stability. It is also believed to create mental stress, fear, and anxiety in individuals."),s.a.createElement("h3",null,"KALSHARP DOSH "),s.a.createElement("div",{className:"match-bx bg-white"},s.a.createElement(d.a,null,!0===(null===c||void 0===c?void 0:c.present)?s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",null,"Present"),s.a.createElement("span",null,"Yes")):null,(null===c||void 0===c||null===(e=c.type)||void 0===e?void 0:e.length)>0?s.a.createElement(s.a.Fragment,null," ",s.a.createElement("h3",null,"Type"),s.a.createElement("p",null,null===c||void 0===c?void 0:c.type)):null,(null===c||void 0===c||null===(t=c.name)||void 0===t?void 0:t.length)>0?s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",null,"Name"),s.a.createElement("p",null,null===c||void 0===c?void 0:c.name)):null,s.a.createElement("h3",null,"Details"),s.a.createElement("p",null,null===c||void 0===c?void 0:c.one_line))))))))):s.a.createElement(N.a,{headerTop:"visible"},s.a.createElement("section",{className:"pt-0 pb-0"},s.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(S.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},s.a.createElement(E.a,null,s.a.createElement(d.a,null,s.a.createElement(v.a,{md:"12"},s.a.createElement("div",{className:"leftcont text-left"},s.a.createElement("h1",null,"KALSHARP DOSH"))))))),s.a.createElement(E.a,null,s.a.createElement(d.a,null,s.a.createElement(v.a,{md:"12"},s.a.createElement(h.a,{className:"mb-50 pt-d"},s.a.createElement("h3",null,"KALSHARP DOSH"),s.a.createElement("p",null,'Kalasarpa Dosha, also known as Kalsharp Dosh, is a condition in Vedic astrology that is believed to occur when all the seven planets in an individual\'s birth chart are situated between the two lunar nodes, Rahu and Ketu. The term "Kalasarpa" means "serpent of time," and it is believed that this condition can cause various negative effects on an individual\'s life'),s.a.createElement("p",null,"According to Vedic astrology, the presence of Kalasarpa Dosha in an individual's birth chart can cause delays and obstacles in various aspects of life, such as career, education, health, marriage, and financial stability. It is also believed to create mental stress, fear, and anxiety in individuals."),s.a.createElement("div",{className:"match-bx"},s.a.createElement(d.a,null,s.a.createElement(v.a,{md:"8"},s.a.createElement("h3",null," KALSHARP DOSH"),s.a.createElement(f.a,{onSubmit:this.submitHandler},s.a.createElement("div",{className:"form-m"},s.a.createElement(d.a,null,s.a.createElement(v.a,{md:"2"},s.a.createElement("label",null,"Birth Day"),s.a.createElement(g.a,{className:"form-control",type:"select",name:"day",value:this.state.day,onChange:this.changeHandler},s.a.createElement("option",{value:""},"--Select--"),s.a.createElement("option",null,"0"),s.a.createElement("option",null,"1"),s.a.createElement("option",null,"2"),s.a.createElement("option",null,"3"),s.a.createElement("option",null,"4"),s.a.createElement("option",null,"5"),s.a.createElement("option",null,"6"),s.a.createElement("option",null,"7"),s.a.createElement("option",null,"8"),s.a.createElement("option",null,"9"),s.a.createElement("option",null,"10"),s.a.createElement("option",null,"11"),s.a.createElement("option",null,"12"),s.a.createElement("option",null,"13"),s.a.createElement("option",null,"14"),s.a.createElement("option",null,"15"),s.a.createElement("option",null,"16"),s.a.createElement("option",null,"17"),s.a.createElement("option",null,"18"),s.a.createElement("option",null,"19"),s.a.createElement("option",null,"20"),s.a.createElement("option",null,"21"),s.a.createElement("option",null,"22"),s.a.createElement("option",null,"23"),s.a.createElement("option",null,"25"),s.a.createElement("option",null,"26"),s.a.createElement("option",null,"27"),s.a.createElement("option",null,"28"),s.a.createElement("option",null,"29"),s.a.createElement("option",null,"30"),s.a.createElement("option",null,"31"))),s.a.createElement(v.a,{md:"2"},s.a.createElement("label",null,"Birth Month"),s.a.createElement(g.a,{className:"form-control",type:"select",name:"month",value:this.state.month,onChange:this.changeHandler},s.a.createElement("option",{value:""},"--Select--"),s.a.createElement("option",null,"1"),s.a.createElement("option",null,"2"),s.a.createElement("option",null,"3"),s.a.createElement("option",null,"4"),s.a.createElement("option",null,"5"),s.a.createElement("option",null,"6"),s.a.createElement("option",null,"7"),s.a.createElement("option",null,"8"),s.a.createElement("option",null,"9"),s.a.createElement("option",null,"10"),s.a.createElement("option",null,"11"),s.a.createElement("option",null,"12"))),s.a.createElement(v.a,{md:"2"},s.a.createElement("label",null,"Birth Year"),s.a.createElement(g.a,{className:"form-control",type:"select",name:"year",value:this.state.year,onChange:this.changeHandler},s.a.createElement("option",{value:""},"--Select--"),s.a.createElement("option",{value:"1942"},"1942"),s.a.createElement("option",{value:"1943"},"1943"),s.a.createElement("option",{value:"1944"},"1944"),s.a.createElement("option",{value:"1945"},"1945"),s.a.createElement("option",{value:"1946"},"1946"),s.a.createElement("option",{value:"1947"},"1947"),s.a.createElement("option",{value:"1948"},"1948"),s.a.createElement("option",{value:"1949"},"1949"),s.a.createElement("option",{value:"1950"},"1950"),s.a.createElement("option",{value:"1951"},"1951"),s.a.createElement("option",{value:"1952"},"1952"),s.a.createElement("option",{value:"1953"},"1953"),s.a.createElement("option",{value:"1954"},"1954"),s.a.createElement("option",{value:"1955"},"1955"),s.a.createElement("option",{value:"1956"},"1956"),s.a.createElement("option",{value:"1957"},"1957"),s.a.createElement("option",{value:"1958"},"1958"),s.a.createElement("option",{value:"1959"},"1959"),s.a.createElement("option",{value:"1960"},"1960"),s.a.createElement("option",{value:"1961"},"1961"),s.a.createElement("option",{value:"1962"},"1962"),s.a.createElement("option",{value:"1963"},"1963"),s.a.createElement("option",{value:"1964"},"1964"),s.a.createElement("option",{value:"1965"},"1965"),s.a.createElement("option",{value:"1966"},"1966"),s.a.createElement("option",{value:"1967"},"1967"),s.a.createElement("option",{value:"1968"},"1968"),s.a.createElement("option",{value:"1969"},"1969"),s.a.createElement("option",{value:"1970"},"1970"),s.a.createElement("option",{value:"1971"},"1971"),s.a.createElement("option",{value:"1972"},"1972"),s.a.createElement("option",{value:"1973"},"1973"),s.a.createElement("option",{value:"1974"},"1974"),s.a.createElement("option",{value:"1975"},"1975"),s.a.createElement("option",{value:"1976"},"1976"),s.a.createElement("option",{value:"1977"},"1977"),s.a.createElement("option",{value:"1978"},"1978"),s.a.createElement("option",{value:"1979"},"1979"),s.a.createElement("option",{value:"1980"},"1980"),s.a.createElement("option",{value:"1981"},"1981"),s.a.createElement("option",{value:"1982"},"1982"),s.a.createElement("option",{value:"1983"},"1983"),s.a.createElement("option",{value:"1984"},"1984"),s.a.createElement("option",{value:"1985"},"1985"),s.a.createElement("option",{value:"1986"},"1986"),s.a.createElement("option",{value:"1987"},"1987"),s.a.createElement("option",{value:"1988"},"1988"),s.a.createElement("option",{value:"1989"},"1989"),s.a.createElement("option",{value:"1990"},"1990"),s.a.createElement("option",{value:"1991"},"1991"),s.a.createElement("option",{value:"1992"},"1992"),s.a.createElement("option",{value:"1993"},"1993"),s.a.createElement("option",{value:"1994"},"1994"),s.a.createElement("option",{value:"1995"},"1995"),s.a.createElement("option",{value:"1996"},"1996"),s.a.createElement("option",{value:"1997"},"1997"),s.a.createElement("option",{value:"1998"},"1998"),s.a.createElement("option",{value:"1999"},"1999"),s.a.createElement("option",{value:"2000"},"2000"),s.a.createElement("option",{value:"2001"},"2001"),s.a.createElement("option",{value:"2002"},"2002"),s.a.createElement("option",{value:"2003"},"2003"),s.a.createElement("option",{value:"2004"},"2004"),s.a.createElement("option",{value:"2005"},"2005"),s.a.createElement("option",{value:"2006"},"2006"),s.a.createElement("option",{value:"2007"},"2007"),s.a.createElement("option",{value:"2008"},"2008"),s.a.createElement("option",{value:"2009"},"2009"),s.a.createElement("option",{value:"2010"},"2010"),s.a.createElement("option",{value:"2011"},"2011"),s.a.createElement("option",{value:"2011"},"2012"),s.a.createElement("option",{value:"2011"},"2013"),s.a.createElement("option",{value:"2011"},"2014"),s.a.createElement("option",{value:"2011"},"2015"),s.a.createElement("option",{value:"2011"},"2016"),s.a.createElement("option",{value:"2011"},"2017"),s.a.createElement("option",{value:"2011"},"2018"),s.a.createElement("option",{value:"2011"},"2019"),s.a.createElement("option",{value:"2011"},"2020"),s.a.createElement("option",{value:"2011"},"2021"),s.a.createElement("option",{value:"2011"},"2022"),s.a.createElement("option",{value:"2011"},"2023"),s.a.createElement("option",{value:"2011"},"2024"),s.a.createElement("option",{value:"2011"},"2025"),s.a.createElement("option",{value:"2011"},"2026"),s.a.createElement("option",{value:"2011"},"2021"),s.a.createElement("option",{value:"2011"},"2027"),s.a.createElement("option",{value:"2011"},"2028"),s.a.createElement("option",{value:"2011"},"2029"),s.a.createElement("option",{value:"2011"},"2030"))),s.a.createElement(v.a,{md:"2"},s.a.createElement("label",null,"Birth Hour"),s.a.createElement(g.a,{className:"form-control",type:"select",name:"hour",value:this.state.hour,onChange:this.changeHandler},s.a.createElement("option",{value:""},"--Select--"),s.a.createElement("option",null,"1"),s.a.createElement("option",null,"2"),s.a.createElement("option",null,"3"),s.a.createElement("option",null,"4"),s.a.createElement("option",null,"5"),s.a.createElement("option",null,"6"),s.a.createElement("option",null,"7"),s.a.createElement("option",null,"8"),s.a.createElement("option",null,"9"),s.a.createElement("option",null,"10"),s.a.createElement("option",null,"11"),s.a.createElement("option",null,"12"),s.a.createElement("option",null,"13"),s.a.createElement("option",null,"14"),s.a.createElement("option",null,"15"),s.a.createElement("option",null,"16"),s.a.createElement("option",null,"17"),s.a.createElement("option",null,"18"),s.a.createElement("option",null,"19"),s.a.createElement("option",null,"20"),s.a.createElement("option",null,"21"),s.a.createElement("option",null,"22"),s.a.createElement("option",null,"23"),s.a.createElement("option",null,"24"))),s.a.createElement(v.a,{md:"2"},s.a.createElement("label",null,"Birth Minute"),s.a.createElement(g.a,{className:"form-control",type:"select",name:"min",value:this.state.min,onChange:this.changeHandler},s.a.createElement("option",{value:""},"--Select--"),s.a.createElement("option",null,"1"),s.a.createElement("option",null,"2"),s.a.createElement("option",null,"3"),s.a.createElement("option",null,"4"),s.a.createElement("option",null,"5"),s.a.createElement("option",null,"6"),s.a.createElement("option",null,"7"),s.a.createElement("option",null,"8"),s.a.createElement("option",null,"9"),s.a.createElement("option",null,"10"),s.a.createElement("option",null,"11"),s.a.createElement("option",null,"12"),s.a.createElement("option",null,"13"),s.a.createElement("option",null,"14"),s.a.createElement("option",null,"15"),s.a.createElement("option",null,"16"),s.a.createElement("option",null,"17"),s.a.createElement("option",null,"18"),s.a.createElement("option",null,"19"),s.a.createElement("option",null,"20"),s.a.createElement("option",null,"21"),s.a.createElement("option",null,"22"),s.a.createElement("option",null,"23"),s.a.createElement("option",null,"24"),s.a.createElement("option",null,"25"),s.a.createElement("option",null,"26"),s.a.createElement("option",null,"27"),s.a.createElement("option",null,"28"),s.a.createElement("option",null,"29"),s.a.createElement("option",null,"30"),s.a.createElement("option",null,"31"),s.a.createElement("option",null,"32"),s.a.createElement("option",null,"33"),s.a.createElement("option",null,"34"),s.a.createElement("option",null,"35"),s.a.createElement("option",null,"36"),s.a.createElement("option",null,"37"),s.a.createElement("option",null,"38"),s.a.createElement("option",null,"39"),s.a.createElement("option",null,"40"),s.a.createElement("option",null,"41"),s.a.createElement("option",null,"42"),s.a.createElement("option",null,"43"),s.a.createElement("option",null,"44"),s.a.createElement("option",null,"45"),s.a.createElement("option",null,"46"),s.a.createElement("option",null,"47"),s.a.createElement("option",null,"48"),s.a.createElement("option",null,"49"),s.a.createElement("option",null,"50"),s.a.createElement("option",null,"51"),s.a.createElement("option",null,"52"),s.a.createElement("option",null,"53"),s.a.createElement("option",null,"54"),s.a.createElement("option",null,"55"),s.a.createElement("option",null,"56"),s.a.createElement("option",null,"57"),s.a.createElement("option",null,"58"),s.a.createElement("option",null,"59")," ",s.a.createElement("option",null,"60")))),s.a.createElement(d.a,null,s.a.createElement(v.a,{md:"4"},s.a.createElement("label",null,"Country"),s.a.createElement(k.a,{options:H.a.getAllCountries(),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:this.state.selectedCountry,onChange:function(e){o.changeCountry(e)}})),s.a.createElement(v.a,{md:"4"},s.a.createElement("label",null,"State"),s.a.createElement(k.a,{options:null===j.a||void 0===j.a?void 0:j.a.getStatesOfCountry(null===(a=this.state.selectedCountry)||void 0===a?void 0:a.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:this.state.selectedState,onChange:function(e){o.setState({selectedState:e})}})),s.a.createElement(v.a,{md:"4"},s.a.createElement("label",null,"City"),s.a.createElement(k.a,{options:R.a.getCitiesOfState(null===(n=this.state.selectedState)||void 0===n?void 0:n.countryCode,null===(l=this.state.selectedState)||void 0===l?void 0:l.isoCode),getOptionLabel:function(e){return e.name},getOptionValue:function(e){return e.name},value:this.state.submitPlaceHandler,onChange:function(e){o.changeCity(e)}})),s.a.createElement(v.a,{md:"4"},s.a.createElement("label",null,"Birth Place Latitude"),s.a.createElement(g.a,{className:"form-control",placeholder:"00.00",maxLength:7,type:"text",name:"latitude",value:this.state.latitude,onChange:this.changeHandler})),s.a.createElement(v.a,{md:"4"},s.a.createElement("label",null,"Birth Place Longitude"),s.a.createElement(g.a,{className:"form-control",placeholder:"00.000",maxLength:7,type:"text",name:"longitude",value:this.state.longitude,onChange:this.changeHandler})),s.a.createElement(v.a,{md:"4"},s.a.createElement("label",null,"Birth Place Time Zone"),s.a.createElement("input",{className:"form-control",type:"text",placeholder:"00.00",maxLength:5,name:"timezone",value:this.state.timezone,onChange:this.changeHandler}))),s.a.createElement(b.a,{className:"btn btn-primary"},"submit")))),s.a.createElement(v.a,{md:"4"},s.a.createElement("h3",null,"Saved Kalsharp Dosh Matches"),s.a.createElement("div",{className:"form-m"},s.a.createElement(d.a,null,s.a.createElement(v.a,null,s.a.createElement("h4",{className:"mt-3"},"Recent Views"),s.a.createElement("hr",null),s.a.createElement("div",{className:"mtkun-box"},s.a.createElement(p.c,null,s.a.createElement("div",{className:"k-bx"},s.a.createElement("p",null,"R")),s.a.createElement("div",{className:"k-bxx"},s.a.createElement("h5",null,"lorem"),s.a.createElement("p",null,"21/09/2022"),s.a.createElement("p",null,"Indore")),s.a.createElement("div",{className:"k-dlt"},s.a.createElement(p.c,{className:"Tansdel"},s.a.createElement("i",{class:"fa fa-trash-o","aria-hidden":"true"}))))),s.a.createElement("div",{className:"mtkun-box"},s.a.createElement(p.c,null,s.a.createElement("div",{className:"k-bx"},s.a.createElement("p",null,"S")),s.a.createElement("div",{className:"k-bxx"},s.a.createElement("h5",null,"lorem"),s.a.createElement("p",null,"21/09/2022"),s.a.createElement("p",null,"Indore")),s.a.createElement("div",{className:"k-dlt"},s.a.createElement(p.c,{className:"Tansdel"},s.a.createElement("i",{class:"fa fa-trash-o","aria-hidden":"true"}))))))))))))))))}}]),t}(s.a.Component);t.default=D},669:function(e,t,a){e.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},699:function(e,t,a){},740:function(e,t,a){"use strict";var n=a(7),l=a(15),o=a(207),c=a(19),r=a(0),i=a.n(r),u=a(4),m=a.n(u),s=a(77),p=a.n(s),E=a(58),d=["className","cssModule","inline","tag","innerRef"],v={children:m.a.node,inline:m.a.bool,tag:E.n,innerRef:m.a.oneOfType([m.a.object,m.a.func,m.a.string]),className:m.a.string,cssModule:m.a.object},h=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(o.a)(a)),a.submit=a.submit.bind(Object(o.a)(a)),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,o=e.inline,c=e.tag,r=e.innerRef,u=Object(l.a)(e,d),m=Object(E.j)(p()(t,!!o&&"form-inline"),a);return i.a.createElement(c,Object(n.a)({},u,{ref:r,className:m}))},t}(r.Component);h.propTypes=v,h.defaultProps={tag:"form"},t.a=h},757:function(e,t,a){"use strict";var n=a(7),l=a(15),o=a(0),c=a.n(o),r=a(4),i=a.n(r),u=a(77),m=a.n(u),s=a(58),p=["className","cssModule","color","body","inverse","outline","tag","innerRef"],E={tag:s.n,inverse:i.a.bool,color:i.a.string,body:i.a.bool,outline:i.a.bool,className:i.a.string,cssModule:i.a.object,innerRef:i.a.oneOfType([i.a.object,i.a.string,i.a.func])},d=function(e){var t=e.className,a=e.cssModule,o=e.color,r=e.body,i=e.inverse,u=e.outline,E=e.tag,d=e.innerRef,v=Object(l.a)(e,p),h=Object(s.j)(m()(t,"card",!!i&&"text-white",!!r&&"card-body",!!o&&(u?"border":"bg")+"-"+o),a);return c.a.createElement(E,Object(n.a)({},v,{className:h,ref:d}))};d.propTypes=E,d.defaultProps={tag:"div"},t.a=d}}]);
//# sourceMappingURL=93.cdd32600.chunk.js.map