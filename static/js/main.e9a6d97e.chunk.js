(this["webpackJsonpcheck-reader"]=this["webpackJsonpcheck-reader"]||[]).push([[0],{41:function(e,t){},487:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(3),r=n.n(s),a=n(68),i=n.n(a),o=(n(79),n(80),n(44),n(71)),l=n(6),u=n(12),d=n(13),j=n(15),b=n(14),p=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).state={},c}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.setState({})}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{id:"carouselExampleSlidesOnly",class:"carousel slide","data-bs-ride":"carousel",children:Object(c.jsxs)("div",{class:"carousel-inner",children:[Object(c.jsx)("div",{class:"carousel-item active",children:Object(c.jsx)("img",{src:"https://picsum.photos/1000/250",class:"d-block w-100",alt:"..."})}),Object(c.jsx)("div",{class:"carousel-item",children:Object(c.jsx)("img",{src:"https://picsum.photos/1000/250",class:"d-block w-100",alt:"..."})}),Object(c.jsx)("div",{class:"carousel-item",children:Object(c.jsx)("img",{src:"https://picsum.photos/1000/250",class:"d-block w-100",alt:"..."})})]})}),Object(c.jsx)("div",{class:"card text-center",children:Object(c.jsxs)("div",{class:"card-body",children:[Object(c.jsx)("h3",{class:"card-title",children:Object(c.jsx)("b",{children:"AI Check Reader"})}),Object(c.jsx)("h4",{class:"card-text",children:"Submit your check for validation"}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:"/get-started",class:"btn btn-primary btn-lg",children:"Begin New Transaction"})]})})]})}}]),n}(s.Component),h=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).state={},c}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.setState({})}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:"/upload",class:"btn btn-outline-primary",children:"Upload file"}),Object(c.jsx)("a",{href:"/enterURL",class:"btn btn-outline-success",children:"Enter Image URL"}),Object(c.jsx)("a",{href:"/snapshot",class:"btn btn-outline-info",children:"Take Snapshot"}),Object(c.jsx)("br",{})]})}}]),n}(s.Component),f=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).state={},c}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.setState({})}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)("div",{class:"card",children:[Object(c.jsx)("p",{class:"card-header",children:"Here's your validated check details"}),Object(c.jsxs)("ul",{class:"list-group list-group-flush",children:[Object(c.jsx)("li",{class:"list-group-item",children:"Name: Rahmana Muhammed"}),Object(c.jsx)("li",{class:"list-group-item",children:"Amount: $ 1 000 000 "}),Object(c.jsx)("li",{class:"list-group-item",children:"Date: March 9, 2021"})]})]}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:"/",class:"btn btn-warning",children:"Start Over"})]})}}]),n}(s.Component),O=(n(81),function(){var e=0,t=0,n=function(){var n=document.createElement("video");n.id="video",n.width=e,n.width=t,n.autoplay=!0,document.body.appendChild(n);var c=document.createElement("canvas");c.id="canvas",c.width=e,c.width=t,document.body.appendChild(c)};return{video:null,context:null,canvas:null,startCamera:function(){var c,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:680,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:480;navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&(e=s,t=r,n(),this.video=document.getElementById("video"),this.canvas=document.getElementById("canvas"),this.context=this.canvas.getContext("2d"),c=this.video,navigator.mediaDevices.getUserMedia({video:!0}).then((function(e){c.srcObject=e,c.play()})),console.log("Started camera"))},takeSnapshot:function(){this.context.drawImage(this.video,0,0,e,t)}}}()),v=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var c;return Object(u.a)(this,n),(c=t.call(this,e)).state={},c}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.setState({})}},{key:"render",value:function(){return O.startCamera(),Object(c.jsxs)("div",{id:"canvasContainer",children:[Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:"/results",class:"btn btn-success",children:"Submit"}),Object(c.jsx)("button",{class:"btn btn-secondary",formAction:"camera.takeSnapshot()",children:"Capture"})]})}}]),n}(s.Component),x=n(31),m=n(8),g=n.n(m),y=n(17),k=n(30),w=n(489),C="318b02ec6181416083cc1bff9e257c23",S="https://cheque.cognitiveservices.azure.com/";console.log("key = ".concat(C)),console.log("endpoint = ".concat(S));var R=["ImageType","Faces","Adult","Categories","Color","Tags","Description","Objects","Brands"],L=function(){var e=Object(y.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.filter((function(e){return"text"===e.name.toLowerCase()})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(y.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.filter((function(e){return"handwriting"===e.name.toLowerCase()})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){return new Promise((function(t){setTimeout(t,e)}))},A=function(){var e=Object(y.a)(g.a.mark((function e(t){var n,c,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new k.a(new w.a({inHeader:{"Ocp-Apim-Subscription-Key":C}}),S),c=t,e.next=4,n.analyzeImage(c,{visualFeatures:R});case 4:if(s=e.sent,!L(s.tags)&&!U(s.tags)){e.next=9;break}return e.next=8,z(n,c);case 8:s.text=e.sent;case 9:return e.abrupt("return",Object(x.a)({URL:c},s));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(y.a)(g.a.mark((function e(t,n){var c,s,r,a,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.read(n);case 2:s=e.sent,r=s.operationLocation.split("/").slice(-1)[0],a=Date.now(),console.log("".concat(a," -").concat(null===(c=s)||void 0===c?void 0:c.status," "));case 6:if("succeeded"===s.status){e.next=15;break}return e.next=9,D(500);case 9:return console.log("".concat(Date.now()-a," -").concat(null===(i=s)||void 0===i?void 0:i.status," ")),e.next=12,t.getReadResult(r);case 12:s=e.sent,e.next=6;break;case 15:return e.abrupt("return",s.analyzeResult);case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=n(70),I=n.n(F),E=n(29),P=n.n(E),T=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(e){var r,a=this;return Object(u.a)(this,s),(r=t.call(this,e)).fs=n(29),r.uploadFunc=function(e){P.a.readFile(e.path,(function(t,n){if(t)throw t;var c=new I.a.S3({params:{Bucket:"checkreaderbucket"}});c.createBucket((function(){var t={Key:e.originalFilename,Body:n};c.upload(t,(function(t,n){P.a.unlink(e.path,(function(e){e&&console.error(e),console.log("Temp File Delete")})),console.log("PRINT FILE:",e),t?console.log("ERROR MSG: ",t):console.log("Successfully uploaded data")}))}))}))},r.processUpload=function(e){r.setState({fileSelected:e})},r.onFileUrlEntered=function(e){r.setState({processing:!0,analysis:null}),A(r.state.fileSelected||null).then((function(e){r.setState({analysis:e,fileSelected:"",processing:!1})}))},r.PrettyPrintJson=function(e){return Object(c.jsx)("div",{children:Object(c.jsx)("pre",{children:JSON.stringify(e,null,2)})})},r.DisplayResults=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:"Computer Vision Analysis"}),Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:r.state.analysis.URL,height:"200",border:"1",alt:r.state.analysis.description&&r.state.analysis.description.captions&&r.state.analysis.description.captions[0].text?r.state.analysis.description.captions[0].text:"can't find caption"})}),r.PrettyPrintJson(r.state.analysis)]})},r.Analyze=function(){return Object(c.jsxs)("div",{children:[!r.state.processing,r.state.processing&&Object(c.jsx)("div",{children:"Processing"}),Object(c.jsx)("hr",{}),r.state.analysis&&r.DisplayResults()]})},r.CantAnalyze=function(){return Object(c.jsx)("div",{children:"Key and/or endpoint not configured in ./azure-cognitiveservices-computervision.js"})},r.Render=function(){return function(){var e=C.length>0&&S.length>0;return console.log("key = ".concat(C)),console.log("endpoint = ".concat(S)),console.log("ComputerVision isConfigured = ".concat(e)),e}()?Object(c.jsx)(a.Analyze,{}):Object(c.jsx)(a.CantAnalyze,{})},r.handleChange=function(e){if(e.target.files[0]){var t=[];for(var n in e.target.files)if(e.target.files.hasOwnProperty(n)){var c=e.target.files[n],s=URL.createObjectURL(c);r.processUpload(s.slice(5)),t.push(s)}r.setState({uploads:t})}else r.setState({uploads:[]})},r.state={uploads:[],patterns:[],documents:[],fileSelected:null,analysis:null,processing:!1},r}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.setState({})}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("div",{children:this.Render()}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsxs)("section",{className:"hero",children:[Object(c.jsxs)("label",{className:"fileUploaderContainer",children:["Click here to upload documents",Object(c.jsx)("input",{type:"file",id:"fileUploader",onChange:this.handleChange})]}),Object(c.jsx)("div",{children:this.state.uploads.map((function(e,t){return Object(c.jsx)("img",{src:e,width:"400px",alt:"upload"},t)}))}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:this.onFileUrlEntered,class:"btn btn-success",children:"Generate"})]})]})}}]),s}(s.Component),M=n(32),B="318b02ec6181416083cc1bff9e257c23",N="https://cheque.cognitiveservices.azure.com/";console.log("key = ".concat(B)),console.log("endpoint = ".concat(N));var J=["ImageType","Faces","Adult","Categories","Color","Tags","Description","Objects","Brands"],K=function(){var e=Object(y.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.filter((function(e){return"text"===e.name.toLowerCase()})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var e=Object(y.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t.filter((function(e){return"handwriting"===e.name.toLowerCase()})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(e){return new Promise((function(t){setTimeout(t,e)}))},q=function(){var e=Object(y.a)(g.a.mark((function e(t){var n,c,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new k.a(new w.a({inHeader:{"Ocp-Apim-Subscription-Key":B}}),N),c=t,e.next=4,n.analyzeImage(c,{visualFeatures:J});case 4:if(s=e.sent,!K(s.tags)&&!H(s.tags)){e.next=9;break}return e.next=8,G(n,c);case 8:s.text=e.sent;case 9:return e.abrupt("return",Object(x.a)({URL:c},s));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(y.a)(g.a.mark((function e(t,n){var c,s,r,a,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.read(n);case 2:s=e.sent,r=s.operationLocation.split("/").slice(-1)[0],a=Date.now(),console.log("".concat(a," -").concat(null===(c=s)||void 0===c?void 0:c.status," "));case 6:if("succeeded"===s.status){e.next=15;break}return e.next=9,V(500);case 9:return console.log("".concat(Date.now()-a," -").concat(null===(i=s)||void 0===i?void 0:i.status," ")),e.next=12,t.getReadResult(r);case 12:s=e.sent,e.next=6;break;case 15:return e.abrupt("return",s.analyzeResult);case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();var $=function(){var e=Object(s.useState)(null),t=Object(M.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(null),i=Object(M.a)(a,2),o=i[0],l=i[1],u=Object(s.useState)(!1),d=Object(M.a)(u,2),j=d[0],b=d[1],p=function(e){r(e.target.value)},h=function(e){b(!0),l(null),q(n||null).then((function(e){l(e),r(""),b(!1)}))},f=function(e){var t=[];for(var n in e.text.readResults[0].lines)t.push(e.text.readResults[0].lines[n].text);return Object(c.jsx)("div",{children:Object(c.jsx)("pre",{children:t.map((function(e){return e+"\n"}))})})},O=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("p",{children:"Analyze image from URL"}),!j&&Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{children:"URL"}),Object(c.jsx)("input",{type:"text",placeholder:"Enter URL or leave empty for random image from collection",size:"50",onChange:p})]}),Object(c.jsx)("button",{class:"btn btn-outline-success",onClick:h,children:"Analyze"})]}),j&&Object(c.jsx)("div",{children:"Processing"}),Object(c.jsx)("hr",{}),o&&Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Check Scan Results"}),Object(c.jsx)("div",{children:Object(c.jsx)("img",{src:o.URL,height:"200",border:"1",alt:o.description&&o.description.captions&&o.description.captions[0].text?o.description.captions[0].text:"can't find caption"})}),f(o)]})]})},v=function(){return Object(c.jsx)("div",{children:"Key and/or endpoint not configured in ./azure-cognitiveservices-computervision.js"})};return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("div",{children:function(){var e=B.length>0&&N.length>0;return console.log("key = ".concat(B)),console.log("endpoint = ".concat(N)),console.log("ComputerVision isConfigured = ".concat(e)),e}()?Object(c.jsx)(O,{}):Object(c.jsx)(v,{})})})};var Q=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(o.a,{children:[Object(c.jsx)(l.a,{path:"/",component:p}),Object(c.jsx)(l.a,{path:"/get-started",component:h}),Object(c.jsx)(l.a,{path:"/snapshot",component:v}),Object(c.jsx)(l.a,{path:"/upload",component:T}),Object(c.jsx)(l.a,{path:"/results",component:f}),Object(c.jsx)(l.a,{path:"/enterURL",component:$})]})})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,490)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),r(e),a(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(Q,{})}),document.getElementById("root")),W()},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){}},[[487,1,2]]]);
//# sourceMappingURL=main.e9a6d97e.chunk.js.map