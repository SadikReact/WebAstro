(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[121],{1247:function(e,t,a){"use strict";a.r(t);var n=a(198),l=a(199),r=a(201),o=a(200),c=a(146),i=a(202),s=a(0),u=a.n(s),m=(a(681),a(53)),d=a(664),f=a(665),b=a(675),h=a(203),p=a(669),g=a.n(p),v=a(963);a(965),a(966);var N=function(e){function t(e){var a,l,i,s;return Object(n.a)(this,t),l=this,i=t,s=[e],i=Object(c.a)(i),(a=Object(r.a)(l,Object(o.a)()?Reflect.construct(i,s||[],Object(c.a)(l).constructor):i.apply(l,s))).componentDidMount=function(){var e=JSON.parse(localStorage.getItem("user_id"));m.a.get("/user/walletHistory/".concat(e)).then((function(e){!0===e.data.status&&a.setState({WalletTransacList:e.data.data})})).catch((function(e){console.log(e)})),m.a.get("/user/viewoneuser/".concat(e)).then((function(e){a.setState({amount:e.data.data.amount})})).catch((function(e){console.log(e)}))},a.state={WalletTransacList:[],data:{}},a.state={TablerowData:[],columns:[{headerName:"ID",field:"transaction_id",sortable:!0,filter:!0},{headerName:"Amount Before",field:"beforeAmt",sortable:!0,filter:!0},{headerName:"Transaction Amount",field:"amount",sortable:!0,filter:"agNumberColumnFilter"},{headerName:"Amount After",field:"finalAmt",sortable:!0,filter:"agNumberColumnFilter"},{headerName:"Date/Time",field:"createdAt",sortable:!0,filter:"agNumberColumnFilter"},{headerName:"\tTransaction Type",field:"tran_Type",sortable:!0,filter:"agNumberColumnFilter"}]},a}return Object(i.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e,t=this.state.WalletTransacList;return u.a.createElement(h.a,{headerTop:"visible"},u.a.createElement("section",{className:"pt-0 pb-0"},u.a.createElement("div",{className:"",style:{float:"left",width:"100%",backgroundColor:"#272727",position:"relative",backgroundAttachment:"fixed",backgroundSize:"cover",color:"#ffffff",padding:" 50px 0px 50px 0px",backgroundImage:"url(".concat(g.a,")"),backgroundPosition:"center center",backgroundRepeat:" no-repeat",textAlign:"center"}},u.a.createElement(d.a,null,u.a.createElement(f.a,null,u.a.createElement(b.a,{md:"12"},u.a.createElement("div",{className:"leftcont text-left"},u.a.createElement("h1",null,"Wallet Transactions"),u.a.createElement("h3",null,"Available balance : ",u.a.createElement("span",null,this.state.amount)))))))),u.a.createElement("section",null,u.a.createElement("div",{className:"ag-theme-balham",style:{height:"80vh",width:"100%"}},u.a.createElement(v.AgGridReact,{columnDefs:null===(e=this.state)||void 0===e?void 0:e.columns,rowData:t,pagination:!0,paginationPageSize:50}))))}}]),t}(u.a.Component);t.default=N},669:function(e,t,a){e.exports=a.p+"static/media/astrologin-bg.f858568c.jpg"},681:function(e,t,a){}}]);
//# sourceMappingURL=121.3d756891.chunk.js.map