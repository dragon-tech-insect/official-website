import{_ as b,o as y,c as _,a as n,d as x,r as a,b as V,e as k,w as $,T,n as w,u as g,f as C,g as L}from"./index-BvWHB9Ke.js";const M="/official-website/assets/butterfly-swbcc1WO.mp4",B="/official-website/assets/castle-CK8KzjTe.mp4",E={},O={class:"loading-view"};function j(h,t){return y(),_("div",O,t[0]||(t[0]=[n("p",null,"Loading...",-1)]))}const N=b(E,[["render",j],["__scopeId","data-v-28a55875"]]),W={class:"home"},z=["src"],S=["src"],H=x({__name:"HomeView",setup(h){const t=a(window.innerWidth<768),s=a(""),d=a(null),u=a(null),r=a(null),c=a(null),p=i=>{setTimeout(()=>{const v=i==="video1"?d.value:u.value;v==null||v.play()},500);const e={large:t.value?{height:"70%"}:{width:"70%"},small:t.value?{height:"30%"}:{width:"30%"},active:{opacity:"100%"},inactive:{opacity:"50%"}},o={active:i==="video1"?r.value:c.value,inactive:i==="video1"?c.value:r.value};o.active&&o.inactive&&(Object.assign(o.active.style,e.large,e.active),Object.assign(o.inactive.style,e.small,e.inactive)),s.value=i},l=i=>{s.value="";const e=i==="video1"?d.value:u.value;e&&(e.pause(),e.currentTime=0);const o={mobile:{width:"100%",height:"50%"},desktop:{width:"50%",height:"100%"}},v=t.value?o.mobile:o.desktop;[r.value,c.value].forEach(m=>{m&&Object.assign(m.style,{...v,opacity:"100%"})})},f=a(0);return t.value=window.innerWidth<768,V(()=>{var i,e;addEventListener("resize",()=>{t.value=window.innerWidth<768,l("video1"),l("video2")}),(i=d.value)==null||i.addEventListener("canplay",()=>{f.value++}),(e=u.value)==null||e.addEventListener("canplay",()=>{f.value++})}),(i,e)=>(y(),_("div",W,[k(T,{name:"fade"},{default:$(()=>[f.value==1?(y(),C(N,{key:0})):L("",!0)]),_:1}),n("div",{class:"video-container",id:"video1",ref_key:"video1Container",ref:r},[n("span",{class:"video-tag",id:"castle",style:w({opacity:s.value==="video1"||t.value?1:0,left:s.value==="video1"||t.value?0:"-120px",bottom:t.value?"60px":"120px"})},"蝴蝶城工程介紹",4),n("video",{ref_key:"video1",ref:d,src:g(B),onMouseenter:e[0]||(e[0]=o=>!t.value&&p("video1")),onMouseleave:e[1]||(e[1]=o=>!t.value&&l("video1")),onTouchstart:e[2]||(e[2]=o=>t.value&&p("video1")),onTouchend:e[3]||(e[3]=o=>t.value&&l("video1")),loop:"",muted:"",playsinline:""},null,40,z)],512),n("div",{class:"video-container",id:"video2",ref_key:"video2Container",ref:c},[n("span",{class:"video-tag",id:"butterfly",style:w({opacity:s.value==="video2"||t.value?1:0,right:s.value==="video2"||t.value?0:"-120px",bottom:t.value?"60px":"120px"})},"昆蟲生態動畫解說",4),n("video",{ref_key:"video2",ref:u,src:g(M),onMouseenter:e[4]||(e[4]=o=>!t.value&&p("video2")),onMouseleave:e[5]||(e[5]=o=>!t.value&&l("video2")),onTouchstart:e[6]||(e[6]=o=>t.value&&p("video2")),onTouchend:e[7]||(e[7]=o=>t.value&&l("video2")),loop:"",muted:"",playsinline:""},null,40,S)],512)]))}}),K=b(H,[["__scopeId","data-v-c8b8b438"]]);export{K as default};
