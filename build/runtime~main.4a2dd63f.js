(()=>{"use strict";var h={},g={};function f(e){var r=g[e];if(r!==void 0)return r.exports;var a=g[e]={id:e,loaded:!1,exports:{}};return h[e].call(a.exports,a,a.exports,f),a.loaded=!0,a.exports}f.m=h,(()=>{var e=[];f.O=(r,a,d,b)=>{if(a){b=b||0;for(var t=e.length;t>0&&e[t-1][2]>b;t--)e[t]=e[t-1];e[t]=[a,d,b];return}for(var c=1/0,t=0;t<e.length;t++){for(var[a,d,b]=e[t],s=!0,n=0;n<a.length;n++)(b&!1||c>=b)&&Object.keys(f.O).every(p=>f.O[p](a[n]))?a.splice(n--,1):(s=!1,b<c&&(c=b));if(s){e.splice(t--,1);var i=d();i!==void 0&&(r=i)}}return r}})(),f.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return f.d(r,{a:r}),r},(()=>{var e=Object.getPrototypeOf?a=>Object.getPrototypeOf(a):a=>a.__proto__,r;f.t=function(a,d){if(d&1&&(a=this(a)),d&8||typeof a=="object"&&a&&(d&4&&a.__esModule||d&16&&typeof a.then=="function"))return a;var b=Object.create(null);f.r(b);var t={};r=r||[null,e({}),e([]),e(e)];for(var c=d&2&&a;typeof c=="object"&&!~r.indexOf(c);c=e(c))Object.getOwnPropertyNames(c).forEach(s=>t[s]=()=>a[s]);return t.default=()=>a,f.d(b,t),b}})(),f.d=(e,r)=>{for(var a in r)f.o(r,a)&&!f.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},f.f={},f.e=e=>Promise.all(Object.keys(f.f).reduce((r,a)=>(f.f[a](e,r),r),[])),f.u=e=>""+({2028:"redirects-translation-fr-json",3578:"[request]",6379:"redirects-translation-de-json",9015:"redirects-translation-en-json"}[e]||e)+"."+{157:"30739af7",159:"edaece64",277:"9d6c8108",319:"a538c665",352:"2d99436a",421:"55296231",431:"9e344cb0",440:"84601b75",474:"2c4cb7e8",545:"5285f69d",878:"5abe09f3",987:"26291f5f",995:"0d948291",1041:"2955d22e",1047:"47808b0e",1067:"a4022290",1089:"29ebd8fe",1136:"5575a2f1",1189:"72af0f95",1223:"db882b1b",1226:"25fa58e9",1289:"e2e606c0",1396:"9e93cac2",1461:"2436f57b",1528:"6af6cdb7",1540:"ecadd532",1547:"a51e2a07",1556:"0df11a91",1636:"b54875de",1833:"80fe4096",1840:"09e6d646",1888:"9c1f2c0d",1957:"08a54e0e",2028:"904a5f4f",2037:"5535f866",2072:"c70170a7",2111:"996671cf",2114:"dda36710",2227:"e35004b8",2301:"261aa198",2545:"958fee7d",2552:"47c5779d",2585:"3b1b57c2",2613:"56ef5856",2687:"09664b14",2709:"14ecd4bd",2752:"11b46523",2772:"40426421",2927:"99b5d56f",2947:"0a711cdc",3016:"c07170dc",3042:"38db7d70",3106:"40e61eaa",3200:"3c0e8bb9",3265:"af62a935",3277:"6cf47515",3282:"c61b032b",3358:"ea0bc8e1",3379:"f7c8ef20",3398:"2f17a81b",3471:"6d357f2e",3544:"f150e311",3578:"4d0ce5de",3642:"8a7d2dc0",3667:"d1c6ff36",3801:"bc52513e",3828:"42c2bae2",3829:"b699e5f6",3842:"5dec6f45",3882:"064787b3",3891:"0c7e77d6",3901:"0b1b69bb",3908:"7351490c",3927:"a54bc3da",3934:"97dc67f9",3938:"193470aa",4011:"8dd3d46b",4014:"3b439ba9",4041:"aa3cb377",4110:"68ba933f",4167:"1c15b132",4214:"b05f3a38",4215:"38913f06",4259:"763dd284",4306:"9d286a84",4338:"62adf32b",4342:"abdfd214",4347:"79a0ac77",4384:"8f5d1f2c",4407:"f126d752",4441:"46204bf6",4475:"9817717f",4495:"20b2bbe6",4513:"6a94f440",4550:"1dfeb92e",4675:"d0c70806",4678:"70ad75bc",4799:"819311ce",4813:"de3c6b44",4857:"3cb0709c",4878:"1d1a63a0",4911:"35973240",4972:"6998c633",4998:"1613a064",5029:"1f542915",5097:"cd1f9fa9",5174:"6a9274ab",5199:"2ec21a48",5275:"bf2e22d4",5320:"5689c805",5411:"37f17a9e",5445:"5819453f",5465:"5f45f9c7",5480:"98e87278",5506:"158a6fd1",5517:"111a118a",5533:"f1ca051c",5608:"eb397582",5674:"e3101b3f",5687:"e75ae000",5707:"80f59e1a",5726:"92af5b36",5736:"0fe3894c",5904:"d854ed06",5912:"bac81a1a",6079:"5aa67833",6085:"bcdd3ec5",6103:"f0d0c652",6126:"4139cb77",6309:"a9b75890",6323:"2df81561",6349:"7d28b3bd",6354:"52faacb3",6379:"bf9bf6a8",6460:"325c2187",6488:"38e7ed64",6511:"9ae8786d",6582:"3d2f6208",6588:"30188541",6624:"4f831d47",6694:"2e213212",6876:"cd7d8a90",6888:"a33e247e",7059:"7c8e69b4",7171:"96c0c398",7225:"fab63569",7230:"d628bce9",7293:"387a4b9e",7311:"4afc27bd",7320:"d1aa8eae",7396:"393296cc",7407:"5cc7c678",7410:"f73e465b",7412:"b9200396",7479:"eb67b9b9",7539:"6371a8a3",7542:"3e311e90",7550:"66fe64da",7570:"e413451f",7665:"423883f3",7690:"e916097f",7702:"8323ab5e",7768:"240ecde5",7808:"d95e6aa7",7838:"81759082",7904:"0d156c66",7907:"eb637207",7970:"c1539471",7983:"81a8b861",8055:"d34f884c",8117:"2de44f05",8227:"60dac253",8267:"b2fb9779",8283:"feb21246",8366:"6df17e88",8441:"17750dff",8501:"4ec903b0",8597:"32a20ed4",8657:"6bc35eb0",8699:"d94d61ed",8702:"4855a389",8705:"14e4ca07",8739:"b382cfe6",8786:"825f1967",8848:"38e1f3a2",8923:"958a1145",8932:"06c88239",9015:"7831c9af",9055:"c637a9c4",9095:"4de1a3f4",9127:"4991a53d",9133:"66eb86a0",9473:"657184b4",9488:"221b78e3",9509:"b778a76c",9524:"f17f3892",9589:"9f834a9b",9633:"48a81274",9732:"88338a9c",9770:"9efbb14d",9781:"e12ee4d3",9785:"e7115053",9880:"5dd23cee",9916:"ee13ba49",9953:"3346c31d",9958:"0b57b053",9966:"12355f57",9969:"a733ffec",9971:"44913aab"}[e]+".chunk.js",f.miniCssF=e=>{},f.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),f.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={},r="my-project:";f.l=(a,d,b,t)=>{if(e[a]){e[a].push(d);return}var c,s;if(b!==void 0)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var o=n[i];if(o.getAttribute("src")==a||o.getAttribute("data-webpack")==r+b){c=o;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,f.nc&&c.setAttribute("nonce",f.nc),c.setAttribute("data-webpack",r+b),c.src=a),e[a]=[d];var l=(_,p)=>{c.onerror=c.onload=null,clearTimeout(u);var v=e[a];if(delete e[a],c.parentNode&&c.parentNode.removeChild(c),v&&v.forEach(m=>m(p)),_)return _(p)},u=setTimeout(l.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=l.bind(null,c.onerror),c.onload=l.bind(null,c.onload),s&&document.head.appendChild(c)}})(),f.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},f.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),f.p="/admin/",(()=>{f.b=document.baseURI||self.location.href;var e={5354:0};f.f.j=(d,b)=>{var t=f.o(e,d)?e[d]:void 0;if(t!==0)if(t)b.push(t[2]);else if(d!=5354){var c=new Promise((o,l)=>t=e[d]=[o,l]);b.push(t[2]=c);var s=f.p+f.u(d),n=new Error,i=o=>{if(f.o(e,d)&&(t=e[d],t!==0&&(e[d]=void 0),t)){var l=o&&(o.type==="load"?"missing":o.type),u=o&&o.target&&o.target.src;n.message="Loading chunk "+d+` failed.
(`+l+": "+u+")",n.name="ChunkLoadError",n.type=l,n.request=u,t[1](n)}};f.l(s,i,"chunk-"+d,d)}else e[d]=0},f.O.j=d=>e[d]===0;var r=(d,b)=>{var[t,c,s]=b,n,i,o=0;if(t.some(u=>e[u]!==0)){for(n in c)f.o(c,n)&&(f.m[n]=c[n]);if(s)var l=s(f)}for(d&&d(b);o<t.length;o++)i=t[o],f.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return f.O(l)},a=self.webpackChunkmy_project=self.webpackChunkmy_project||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))})(),f.nc=void 0})();