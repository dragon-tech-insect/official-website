import{d as _,r as s,o as h,c as g,a,n as f,u as m,b as w,_ as b}from"./index-BrGDR8VI.js";const V="/assets/butterfly-BMS27acI.mp4",k="/assets/castle-B54VHDc7.mp4",M={class:"home"},B=["src"],x=["src"],C=_({__name:"HomeView",setup(O){const l=s(window.innerWidth<768),i=s(""),r=s(null),u=s(null),v=s(null),d=s(null),p=o=>{setTimeout(()=>{const n=o==="video1"?r.value:u.value;n==null||n.play()},500);const e={large:l.value?{height:"70%"}:{width:"70%"},small:l.value?{height:"30%"}:{width:"30%"},active:{opacity:"100%"},inactive:{opacity:"50%"}},t={active:o==="video1"?v.value:d.value,inactive:o==="video1"?d.value:v.value};t.active&&t.inactive&&(Object.assign(t.active.style,e.large,e.active),Object.assign(t.inactive.style,e.small,e.inactive)),i.value=o},c=o=>{i.value="";const e=o==="video1"?r.value:u.value;e&&(e.pause(),e.currentTime=0);const t={mobile:{width:"100%",height:"50%"},desktop:{width:"50%",height:"100%"}},n=l.value?t.mobile:t.desktop;[v.value,d.value].forEach(y=>{y&&Object.assign(y.style,{...n,opacity:"100%"})})};return h(()=>{addEventListener("resize",()=>{l.value=window.innerWidth<768,c("video1"),c("video2")})}),(o,e)=>(w(),g("div",M,[a("div",{class:"video-container",id:"video1",ref_key:"video1Container",ref:v},[a("span",{class:"video-tag",id:"castle",style:f({opacity:i.value==="video1"?1:0,left:i.value==="video1"?0:"-120px"})},"蝴蝶城工程介紹",4),a("video",{ref_key:"video1",ref:r,src:m(k),onMouseenter:e[0]||(e[0]=t=>p("video1")),onMouseleave:e[1]||(e[1]=t=>c("video1")),loop:"",muted:""},null,40,B)],512),a("div",{class:"video-container",id:"video2",ref_key:"video2Container",ref:d},[a("span",{class:"video-tag",id:"butterfly",style:f({opacity:i.value==="video2"?1:0,right:i.value==="video2"?0:"-120px"})},"昆蟲生態動畫解說",4),a("video",{ref_key:"video2",ref:u,src:m(V),onMouseenter:e[2]||(e[2]=t=>p("video2")),onMouseleave:e[3]||(e[3]=t=>c("video2")),loop:"",muted:""},null,40,x)],512)]))}}),$=b(C,[["__scopeId","data-v-9416e653"]]);export{$ as default};