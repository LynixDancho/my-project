"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[9880],{19880:(K,s,_)=>{_.r(s),_.d(s,{UserListPageEE:()=>m});var o=_(92132),a=_(62072),n=_(10720),A=_(21272),C=_(38591),U=_(5409),l=_(53682),R=_(15126),v=_(63299),B=_(67014),t=_(59080),i=_(79275),L=_(14718),I=_(82437),d=_(61535),O=_(5790),T=_(12083),M=_(35223),E=_(74930),D=_(2600),W=_(48940),P=_(41286),h=_(56336),r=_(13426),f=_(84624),g=_(77965),S=_(54257),y=_(71210),j=_(51187),N=_(39404),F=_(58692),H=_(501),x=_(57646),V=_(23120),X=_(44414),$=_(25962),c=_(14664),z=_(42588),G=_(90325),J=_(62785),Q=_(87443),Y=_(41032),Z=_(22957),e=_(93179),u=_(73055),p=_(15747),k=_(85306),w=_(26509),b=_(32058),q=_(81185),__=_(82261),E_=_(62482),t_=_(40245),s_=_(46794),O_=_(51833),M_=_(55151),D_=_(79077),P_=_(67031);const m=()=>((0,n.u)(),(0,o.jsx)(a.e,{}))},10720:(K,s,_)=>{_.d(s,{u:()=>B});var o=_(21272),a=_(38591),n=_(67031),A=_(54894),C=_(17703),U=_(53682);const l="strapi-notification-seat-limit",R="https://cloud.strapi.io/profile/billing",v="https://strapi.io/billing/request-seats",B=()=>{const{formatMessage:t}=(0,A.A)(),{license:i,isError:L,isLoading:I}=(0,U.m)(),d=(0,a.hN)(),{pathname:O}=(0,C.zy)(),{enforcementUserCount:T,permittedSeats:M,licenseLimitStatus:E,isHostedOnStrapiCloud:D}=i??{};o.useEffect(()=>{if(L||I)return;const W=!n(M)&&!window.sessionStorage.getItem(`${l}-${O}`)&&(E==="AT_LIMIT"||E==="OVER_LIMIT");let P;E==="OVER_LIMIT"?P="warning":E==="AT_LIMIT"&&(P="softWarning"),W&&d({type:P,message:t({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:E}),title:t({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:E,enforcementUserCount:T,permittedSeats:M}),link:{url:D?R:v,label:t({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:D})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${l}-${O}`,"true")}})},[d,i,O,t,I,M,E,T,D,L])}}}]);
