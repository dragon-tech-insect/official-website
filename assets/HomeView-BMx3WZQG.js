import{_ as k,o as b,c as C,a as n,d as _,r as i,b as E,e as L,w as M,T as h,n as c,u as V,f as B,g as $,h as O,i as S}from"./index-CaRBcVSE.js";const j="/official-website/assets/butterfly-swbcc1WO.mp4",N="/official-website/assets/castle-CK8KzjTe.mp4",z={},W={class:"loading-view"};function H(T,v){return b(),C("div",W,v[0]||(v[0]=[n("div",{class:"loader"},null,-1)]))}const I=k(z,[["render",H],["__scopeId","data-v-83215ec2"]]),K={class:"home"},q=["src","autoplay"],J=["src","autoplay"],P=_({__name:"HomeView",setup(T){const v=B(),t=i(window.innerWidth<768),s=i(""),p=i(0),g=i(0),y=i(null),f=i(null),u=i(null),d=i(null),r=a=>{setTimeout(()=>{const m=a==="video1"?y.value:f.value;m==null||m.play()},500);const e={large:t.value?{height:"70%"}:{width:"70%"},small:t.value?{height:"30%"}:{width:"30%"},active:{opacity:"100%"},inactive:{opacity:"50%"}},o={active:a==="video1"?u.value:d.value,inactive:a==="video1"?d.value:u.value};o.active&&o.inactive&&(Object.assign(o.active.style,e.large,e.active),Object.assign(o.inactive.style,e.small,e.inactive)),s.value=a},l=()=>{s.value="";const a=t.value?{width:"100%",height:"50%"}:{width:"50%",height:"100%"};[u.value,d.value].forEach(e=>{e&&Object.assign(e.style,{...a,opacity:"100%"})})},w=a=>{a&&(a.addEventListener("loadeddata",()=>{$(()=>a.play())}),a.addEventListener("ended",()=>{$(()=>{a.pause(),a.currentTime=0,p.value++})}),a.addEventListener("canplay",()=>{g.value++}))},x=(a,e,o=1)=>{v.push({name:a,params:{id:e},query:{loop:o}})};return E(()=>{addEventListener("resize",()=>{t.value=window.innerWidth<768,l()}),w(y.value),w(f.value)}),(a,e)=>(b(),C("div",K,[L(h,{name:"fade"},{default:M(()=>[g.value<2?(b(),O(I,{key:0})):S("",!0)]),_:1}),n("button",{onClick:e[4]||(e[4]=o=>x("video-player","tfJiSXQSxcM",0)),class:"video-container",id:"video1",ref_key:"video1Container",ref:u},[n("span",{class:"video-tag",id:"castle",style:c({opacity:s.value==="video1"||t.value?1:0,left:s.value==="video1"||t.value?0:"-120px",bottom:t.value?"60px":"120px"})}," 蝴蝶城堡工程介紹 ",4),n("div",{class:"number-tag",id:"castle",style:c({opacity:s.value==="video1"||t.value?1:0,bottom:t.value?"20px":"72px"})},e[10]||(e[10]=[n("p",null,"110年南院民認慶字第829號",-1),n("p",null,"111年南院民認慶字第1573號",-1)]),4),n("video",{ref_key:"video1",ref:y,src:V(N),onMouseenter:e[0]||(e[0]=o=>!t.value&&r("video1")),onMouseleave:e[1]||(e[1]=o=>!t.value&&l()),onTouchstart:e[2]||(e[2]=o=>t.value&&r("video1")),onTouchend:e[3]||(e[3]=o=>t.value&&l()),loop:"",autoplay:p.value<2,muted:"",playsinline:""},null,40,q)],512),n("button",{onClick:e[9]||(e[9]=o=>x("insect-list","")),class:"video-container",id:"video2",ref_key:"video2Container",ref:d},[n("span",{class:"video-tag",id:"butterfly",style:c({opacity:s.value==="video2"||t.value?1:0,right:s.value==="video2"||t.value?0:"-120px",bottom:t.value?"60px":"120px"})},"昆蟲生態動畫解說",4),n("div",{class:"number-tag",id:"butterfly",style:c({opacity:s.value==="video2"||t.value?1:0,bottom:t.value?"36px":"92px"})},e[11]||(e[11]=[n("p",null,"111年南院民認慶字第1573號",-1)]),4),n("video",{ref_key:"video2",ref:f,src:V(j),onMouseenter:e[5]||(e[5]=o=>!t.value&&r("video2")),onMouseleave:e[6]||(e[6]=o=>!t.value&&l()),onTouchstart:e[7]||(e[7]=o=>t.value&&r("video2")),onTouchend:e[8]||(e[8]=o=>t.value&&l()),loop:"",autoplay:p.value<2,muted:"",playsinline:""},null,40,J)],512)]))}}),X=k(P,[["__scopeId","data-v-386ebc72"]]);export{X as default};
