"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[9488],{29488:(H,L,s)=>{s.d(L,{ProtectedEditPage:()=>Z});var t=s(92132),B=s(21272),i=s(94061),M=s(83997),m=s(30893),h=s(85963),U=s(90151),A=s(68074),R=s(7537),g=s(5287),I=s(38413),c=s(55356),T=s(4198),W=s(21610),o=s(38591),K=s(46270),f=s(61535),p=s(54894),j=s(17703),J=s(71389),x=s(12083),e=s(53682),Q=s(46794),Y=s(43842),ns=s(15126),Es=s(63299),is=s(67014),rs=s(59080),ds=s(79275),es=s(14718),ls=s(82437),Ms=s(5790),Ps=s(35223),Ds=s(5409),Os=s(74930),ms=s(2600),hs=s(48940),As=s(41286),Rs=s(56336),gs=s(13426),vs=s(84624),Cs=s(77965),Ls=s(54257),Bs=s(71210),Us=s(51187),Is=s(39404),cs=s(58692),Ts=s(501),Ws=s(57646),Ks=s(23120),fs=s(44414),js=s(25962),xs=s(14664),ys=s(42588),us=s(90325),ps=s(62785),Ss=s(87443),Ns=s(41032),Fs=s(22957),zs=s(93179),Vs=s(73055),Hs=s(15747),Js=s(85306),Qs=s(26509),Ys=s(32058),$s=s(81185),Gs=s(82261),Xs=s(412),Zs=s(94710);const $=({disabled:n,role:a,values:D,errors:_,onChange:r,onBlur:v})=>{const{formatMessage:E}=(0,p.A)();return(0,t.jsx)(i.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:4,children:[(0,t.jsxs)(M.s,{justifyContent:"space-between",children:[(0,t.jsxs)(i.a,{children:[(0,t.jsx)(i.a,{children:(0,t.jsx)(m.o,{fontWeight:"bold",children:a?a.name:E({id:"global.details",defaultMessage:"Details"})})}),(0,t.jsx)(i.a,{children:(0,t.jsx)(m.o,{textColor:"neutral500",variant:"pi",children:a?a.description:E({id:"Settings.roles.form.description",defaultMessage:"Name and description of the role"})})})]}),(0,t.jsx)(h.$,{disabled:!0,variant:"secondary",children:E({id:"Settings.roles.form.button.users-with-role",defaultMessage:"{number, plural, =0 {# users} one {# user} other {# users}} with this role"},{number:a.usersCount})})]}),(0,t.jsxs)(U.x,{gap:4,children:[(0,t.jsx)(A.E,{col:6,children:(0,t.jsx)(R.k,{disabled:n,name:"name",error:_.name&&E({id:_.name}),label:E({id:"global.name",defaultMessage:"Name"}),onChange:r,onBlur:v,required:!0,value:D.name||""})}),(0,t.jsx)(A.E,{col:6,children:(0,t.jsx)(g.T,{disabled:n,label:E({id:"global.description",defaultMessage:"Description"}),id:"description",error:_.name&&E({id:_.name}),onChange:r,onBlur:v,children:D.description||""})})]})]})})},G=x.Ik().shape({name:x.Yj().required(o.iW.required),description:x.Yj().optional()}),X=()=>{const n=(0,o.hN)(),{formatMessage:a}=(0,p.A)(),_=(0,j.W5)("/settings/roles/:id")?.params.id,r=B.useRef(null),{lockApp:v,unlockApp:E}=(0,o.MA)(),{trackUsage:b}=(0,o.z1)(),{_unstableFormatAPIError:S,_unstableFormatValidationErrors:N}=(0,o.wq)(),{isLoading:k,data:F}=(0,e.A)({role:_??""}),{roles:w,isLoading:z,refetch:q}=(0,Q.u)({id:_},{refetchOnMountOrArgChange:!0}),P=w[0]??{},{data:ss,isLoading:ts}=(0,e.B)({id:_},{skip:!_,refetchOnMountOrArgChange:!0}),[_s]=(0,e.G)(),[as]=(0,e.E)();if(!_)return(0,t.jsx)(j.rd,{to:"/settings/roles"});const os=async(y,C)=>{try{v();const{permissionsToSend:O,didUpdateConditions:u}=r.current?.getPermissions()??{},d=await _s({id:_,...y});if("error"in d){(0,e.x)(d.error)&&d.error.name==="ValidationError"?C.setErrors(N(d.error)):n({type:"warning",message:S(d.error)});return}if(P.code!=="strapi-super-admin"&&O){const l=await as({id:d.data.id,permissions:O});if("error"in l){(0,e.x)(l.error)&&l.error.name==="ValidationError"?C.setErrors(N(l.error)):n({type:"warning",message:S(l.error)});return}u&&b("didUpdateConditions")}r.current?.setFormAfterSubmit(),await q(),n({type:"success",message:{id:"notification.success.saved"}})}catch{n({type:"warning",message:{id:"notification.error"}})}finally{E()}},V=!z&&P.code==="strapi-super-admin";return(0,t.jsxs)(I.g,{children:[(0,t.jsx)(o.x7,{name:"Roles"}),(0,t.jsx)(f.l1,{enableReinitialize:!0,initialValues:{name:P.name??"",description:P.description??""},onSubmit:os,validationSchema:G,validateOnChange:!1,children:({handleSubmit:y,values:C,errors:O,handleChange:u,handleBlur:d,isSubmitting:l})=>(0,t.jsxs)("form",{onSubmit:y,children:[(0,t.jsx)(c.Q,{primaryAction:(0,t.jsx)(M.s,{gap:2,children:(0,t.jsx)(h.$,{type:"submit",disabled:P.code==="strapi-super-admin",loading:l,size:"L",children:a({id:"global.save",defaultMessage:"Save"})})}),title:a({id:"Settings.roles.edit.title",defaultMessage:"Edit a role"}),subtitle:a({id:"Settings.roles.create.description",defaultMessage:"Define the rights given to the role"}),navigationAction:(0,t.jsx)(W.N,{as:J.k2,startIcon:(0,t.jsx)(K.A,{}),to:"/settings/roles",children:a({id:"global.back",defaultMessage:"Back"})})}),(0,t.jsx)(T.s,{children:(0,t.jsxs)(M.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,t.jsx)($,{disabled:V,errors:O,values:C,onChange:u,onBlur:d,role:P}),!k&&!z&&!ts&&F?(0,t.jsx)(i.a,{shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(Y.P,{isFormDisabled:V,permissions:ss,ref:r,layout:F})}):(0,t.jsx)(i.a,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0,children:(0,t.jsx)(o.Bl,{})})]})})]})})]})},Z=()=>{const n=(0,e.j)(r=>r.admin_app.permissions.settings?.roles),{isLoading:a,allowedActions:{canRead:D,canUpdate:_}}=(0,o.ec)(n);return a?(0,t.jsx)(o.Bl,{}):!D&&!_?(0,t.jsx)(j.rd,{to:"/"}):(0,t.jsx)(X,{})}},46794:(H,L,s)=>{s.d(L,{u:()=>m});var t=s(21272),B=s(38591),i=s(54894),M=s(53682);const m=(h={},U)=>{const{locale:A}=(0,i.A)(),R=(0,B.QM)(A,{sensitivity:"base"}),{data:g,error:I,isError:c,isLoading:T,refetch:W}=(0,M.z)(h,U);return{roles:t.useMemo(()=>[...g??[]].sort((K,f)=>R.compare(K.name,f.name)),[g,R]),error:I,isError:c,isLoading:T,refetch:W}}}}]);
