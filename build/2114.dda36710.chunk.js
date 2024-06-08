"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[2114],{12114:(p,P,s)=>{s.d(P,{ProtectedListPage:()=>ts});var _=s(92132),D=s(21272),e=s(90361),E=s(33363),d=s(30893),C=s(83997),T=s(94061),h=s(88353),r=s(38413),a=s(55356),A=s(85963),R=s(74773),U=s(4198),W=s(35513),N=s(40216),I=s(26127),K=s(98765),V=s(25641),n=s(38591),S=s(5194),G=s(90625),J=s(41909),X=s(50612),Y=s(92803),Z=s(88761),$=s(54894),b=s(17703),F=s(53682),k=s(46794),z=s(51833),rs=s(15126),Ms=s(63299),Os=s(67014),Ps=s(59080),Cs=s(79275),Ts=s(14718),hs=s(82437),As=s(61535),Rs=s(5790),Ls=s(12083),ms=s(35223),Bs=s(5409),gs=s(74930),vs=s(2600),cs=s(48940),Us=s(41286),Ws=s(56336),Is=s(13426),Ks=s(84624),xs=s(77965),js=s(54257),fs=s(71210),ys=s(51187),us=s(39404),ps=s(58692),Ns=s(501),Ss=s(57646),$s=s(23120),Fs=s(44414),zs=s(25962),Hs=s(14664),Qs=s(42588),Vs=s(90325),Gs=s(62785),Js=s(87443),Xs=s(41032),Ys=s(22957),Zs=s(93179),bs=s(73055),ks=s(15747),ws=s(85306),qs=s(26509),s_=s(32058),__=s(81185),t_=s(82261),o_=s(55151),n_=s(79077);const w=({id:t,name:O,description:l,usersCount:m,icons:B,rowIndex:x,canUpdate:g})=>{const{formatMessage:v}=(0,$.A)(),[,L]=B,j=v({id:"Roles.RoleRow.user-count",defaultMessage:"{number, plural, =0 {#  user} one {#  user} other {# users}}"},{number:m});return(0,_.jsxs)(e.Tr,{"aria-rowindex":x,...g?(0,n.qM)({fn:L.onClick}):{},children:[(0,_.jsx)(E.Td,{maxWidth:(0,n.a8)(130),children:(0,_.jsx)(d.o,{ellipsis:!0,textColor:"neutral800",children:O})}),(0,_.jsx)(E.Td,{maxWidth:(0,n.a8)(250),children:(0,_.jsx)(d.o,{ellipsis:!0,textColor:"neutral800",children:l})}),(0,_.jsx)(E.Td,{children:(0,_.jsx)(d.o,{textColor:"neutral800",children:j})}),(0,_.jsx)(E.Td,{children:(0,_.jsx)(C.s,{justifyContent:"flex-end",...n.dG,children:B.map((i,c)=>i?(0,_.jsx)(T.a,{paddingLeft:c===0?0:1,children:(0,_.jsx)(h.K,{onClick:i.onClick,label:i.label,borderWidth:0,icon:i.icon})},i.label):null)})})]},t)},q=()=>{const{formatMessage:t}=(0,$.A)();(0,n.L4)();const O=(0,F.j)(z.s),{formatAPIError:l}=(0,n.wq)(),m=(0,n.hN)(),[B,x]=D.useState(!1),[{query:g}]=(0,n.sq)(),{isLoading:v,allowedActions:{canCreate:L,canDelete:j,canRead:i,canUpdate:c}}=(0,n.ec)(O.settings?.roles),{roles:H,refetch:os}=(0,k.u)({filters:g?._q?{name:{$containsi:g._q}}:void 0},{refetchOnMountOrArgChange:!0,skip:v||!i}),{push:f}=(0,b.W6)(),[{showModalConfirmButtonLoading:ns,roleToDelete:Es},y]=D.useReducer(_s,ss),{post:as}=(0,n.GD)(),ls=async()=>{try{y({type:"ON_REMOVE_ROLES"}),await as("/admin/roles/batch-delete",{ids:[Es]}),await os(),y({type:"RESET_DATA_TO_DELETE"})}catch(o){o instanceof Y.pe&&m({type:"warning",message:l(o)})}u()},Q=()=>f("/settings/roles/new"),u=()=>x(o=>!o),ds=o=>M=>{M.preventDefault(),M.stopPropagation(),o.usersCount?m({type:"info",message:{id:"Roles.ListPage.notification.delete-not-allowed"}}):(y({type:"SET_ROLE_TO_DELETE",id:o.id}),u())},is=o=>M=>{M.preventDefault(),M.stopPropagation(),f(`/settings/roles/duplicate/${o.id}`)},es=H.length+1,Ds=6;return v?(0,_.jsx)(r.g,{children:(0,_.jsx)(n.Bl,{})}):(0,_.jsxs)(r.g,{children:[(0,_.jsx)(n.x7,{name:"Roles"}),(0,_.jsx)(a.Q,{primaryAction:L?(0,_.jsx)(A.$,{onClick:Q,startIcon:(0,_.jsx)(S.A,{}),size:"S",children:t({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,title:t({id:"global.roles",defaultMessage:"roles"}),subtitle:t({id:"Settings.roles.list.description",defaultMessage:"List of roles"}),as:"h2"}),i&&(0,_.jsx)(R.B,{startActions:(0,_.jsx)(n.q7,{label:t({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:t({id:"global.roles",defaultMessage:"roles"})})})}),i&&(0,_.jsx)(U.s,{children:(0,_.jsxs)(W.X,{colCount:Ds,rowCount:es,footer:L?(0,_.jsx)(N.S,{onClick:Q,icon:(0,_.jsx)(S.A,{}),children:t({id:"Settings.roles.list.button.add",defaultMessage:"Add new role"})}):null,children:[(0,_.jsx)(I.d,{children:(0,_.jsxs)(e.Tr,{"aria-rowindex":1,children:[(0,_.jsx)(E.Th,{children:(0,_.jsx)(d.o,{variant:"sigma",textColor:"neutral600",children:t({id:"global.name",defaultMessage:"Name"})})}),(0,_.jsx)(E.Th,{children:(0,_.jsx)(d.o,{variant:"sigma",textColor:"neutral600",children:t({id:"global.description",defaultMessage:"Description"})})}),(0,_.jsx)(E.Th,{children:(0,_.jsx)(d.o,{variant:"sigma",textColor:"neutral600",children:t({id:"global.users",defaultMessage:"Users"})})}),(0,_.jsx)(E.Th,{children:(0,_.jsx)(K.s,{children:t({id:"global.actions",defaultMessage:"Actions"})})})]})}),(0,_.jsx)(V.N,{children:H?.map((o,M)=>(0,_.jsx)(w,{id:o.id,name:o.name,description:o.description,usersCount:o.usersCount,icons:[L&&{onClick:is(o),label:t({id:"app.utils.duplicate",defaultMessage:"Duplicate"}),icon:(0,_.jsx)(G.A,{})},c&&{onClick:()=>f(`/settings/roles/${o.id}`),label:t({id:"app.utils.edit",defaultMessage:"Edit"}),icon:(0,_.jsx)(J.A,{})},j&&{onClick:ds(o),label:t({id:"global.delete",defaultMessage:"Delete"}),icon:(0,_.jsx)(X.A,{})}].filter(Boolean),rowIndex:M+2,canUpdate:c},o.id))})]})}),(0,_.jsx)(n.TM,{isOpen:B,onConfirm:ls,isConfirmButtonLoading:ns,onToggleDialog:u})]})},ss={roleToDelete:null,showModalConfirmButtonLoading:!1,shouldRefetchData:!1},_s=(t,O)=>(0,Z.Ay)(t,l=>{switch(O.type){case"ON_REMOVE_ROLES":{l.showModalConfirmButtonLoading=!0;break}case"ON_REMOVE_ROLES_SUCCEEDED":{l.shouldRefetchData=!0,l.roleToDelete=null;break}case"RESET_DATA_TO_DELETE":{l.shouldRefetchData=!1,l.roleToDelete=null,l.showModalConfirmButtonLoading=!1;break}case"SET_ROLE_TO_DELETE":{l.roleToDelete=O.id;break}default:return l}}),ts=()=>{const t=(0,F.j)(z.s);return(0,_.jsx)(n.kz,{permissions:t.settings?.roles.main,children:(0,_.jsx)(q,{})})}},46794:(p,P,s)=>{s.d(P,{u:()=>d});var _=s(21272),D=s(38591),e=s(54894),E=s(53682);const d=(C={},T)=>{const{locale:h}=(0,e.A)(),r=(0,D.QM)(h,{sensitivity:"base"}),{data:a,error:A,isError:R,isLoading:U,refetch:W}=(0,E.z)(C,T);return{roles:_.useMemo(()=>[...a??[]].sort((I,K)=>r.compare(I.name,K.name)),[a,r]),error:A,isError:R,isLoading:U,refetch:W}}},40216:(p,P,s)=>{s.d(P,{S:()=>r});var _=s(92132),D=s(63891),e=s(94061),E=s(48653),d=s(83997),C=s(30893);const T=(0,D.Ay)(e.a)`
  height: ${24/16}rem;
  width: ${24/16}rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: ${10/16}rem;
    width: ${10/16}rem;
  }

  svg path {
    fill: ${({theme:a})=>a.colors.primary600};
  }
`,h=(0,D.Ay)(e.a)`
  border-radius: 0 0 ${({theme:a})=>a.borderRadius} ${({theme:a})=>a.borderRadius};
  display: block;
  width: 100%;
  border: none;
`,r=({children:a,icon:A,...R})=>(0,_.jsxs)("div",{children:[(0,_.jsx)(E.c,{}),(0,_.jsx)(h,{as:"button",background:"primary100",padding:5,...R,children:(0,_.jsxs)(d.s,{children:[(0,_.jsx)(T,{"aria-hidden":!0,background:"primary200",children:A}),(0,_.jsx)(e.a,{paddingLeft:3,children:(0,_.jsx)(C.o,{variant:"pi",fontWeight:"bold",textColor:"primary600",children:a})})]})})]})}}]);
