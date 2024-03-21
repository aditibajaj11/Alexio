(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6589)}])},6589:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return S}});var a=t(5893),r=t(7294),l=t(8285);let i=()=>{let[e,s]=(0,r.useState)(null),[t,i]=(0,r.useState)(null),[c,n]=(0,r.useState)(!0);(0,r.useEffect)(()=>{o()},[]);let o=async()=>{try{let e=await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");if(!e.ok)throw Error("Failed to fetch user data");let t=await e.json();if(!t||!t.user)throw Error("Invalid data structure received");s(t.user),n(!1)}catch(e){console.error("Error fetching user data:",e),i(e.message),n(!1)}};return c?(0,a.jsx)("div",{children:"Loading..."}):t?(0,a.jsxs)("div",{children:["Error fetching user data: ",t]}):(0,a.jsx)(l.Z,{name:"about",extraClass:"about-section",title:"About",subTitle:e.about.subTitle,leftImage:e.about.avatar.url,leftImageTitle:e.about.name,description:e.about.description,quote:e.about.quote,experience:e.timeline,skills:e.skills,phoneNumber:e.about.phoneNumber,address:e.about.address})},c=()=>{let[e,s]=(0,r.useState)(null),[t,i]=(0,r.useState)(null),[c,n]=(0,r.useState)(!0);(0,r.useEffect)(()=>{o()},[]);let o=async()=>{try{let e=await fetch("https://example.com/api/contact");if(!e.ok)throw Error("Failed to fetch contact information");let t=await e.json();s(t),n(!1)}catch(e){console.error("Error fetching contact information:",e),i(e.message),n(!1)}};return c?(0,a.jsx)("div",{children:"Loading..."}):t?(0,a.jsxs)("div",{children:["Error: ",t]}):(0,a.jsx)(l.Z,{name:"contact",title:"CONTACT ME",subTitle:"GET IN TOUCH",leftImage:"static/img/title-4.jpg",children:e&&(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:"col-md-4 m-15px-tb",children:(0,a.jsxs)("div",{className:"contact-info",children:[(0,a.jsx)("i",{className:"theme-color ti-location-pin"}),(0,a.jsx)("h6",{className:"dark-color font-alt",children:"Our Address"}),(0,a.jsx)("p",{children:e.address})]})}),(0,a.jsx)("div",{className:"col-md-4 m-15px-tb",children:(0,a.jsxs)("div",{className:"contact-info",children:[(0,a.jsx)("i",{className:"theme-color ti-mobile"}),(0,a.jsx)("h6",{className:"dark-color font-alt",children:"Our Phone"}),(0,a.jsx)("p",{children:e.phone})]})}),(0,a.jsx)("div",{className:"col-md-4 m-15px-tb",children:(0,a.jsxs)("div",{className:"contact-info",children:[(0,a.jsx)("i",{className:"theme-color ti-email"}),(0,a.jsx)("h6",{className:"dark-color font-alt",children:"Our Email"}),(0,a.jsx)("p",{children:e.email})]})})]})})};var n=t(5744),o=t(5194);let d=()=>(0,a.jsx)("span",{className:"type-it",children:(0,a.jsx)(o.Z,{options:{speed:200,loop:!0,strings:["Designer","Developer"],breakLines:!1}})}),m=()=>{let{nav:e,changeNav:s}=(0,r.useContext)(n.C);return(0,a.jsx)("div",{className:"page home-banner white-bg ".concat("home"===e?"":"page--inactive"),id:"home",onClick:()=>s("home",!1),children:(0,a.jsx)("div",{className:"container-fluid p-0",children:(0,a.jsxs)("div",{className:"row no-gutters full-screen",children:[(0,a.jsx)("div",{className:"col-lg-3 col-xl-4 blue-bg",children:(0,a.jsx)("div",{className:"d-flex align-items-end home-user-avtar v-center-box",children:(0,a.jsx)("img",{src:"static/img/user.png",title:!0,alt:!0})})}),(0,a.jsx)("div",{className:"col-lg-9 col-xl-8",children:(0,a.jsx)("div",{className:"page-scroll",children:(0,a.jsx)("div",{className:"page-content",children:(0,a.jsxs)("div",{className:"v-center-box d-flex align-items-center",children:[(0,a.jsxs)("div",{className:"home-text",children:[(0,a.jsx)("h6",{className:"dark-color theme-after",children:"Hello, There"}),(0,a.jsx)("h1",{className:"dark-color blue-after",children:"I'm Alexis Larten"}),(0,a.jsxs)("p",{children:["WEB ",(0,a.jsx)(d,{})]}),(0,a.jsx)("div",{className:"btn-bar",children:(0,a.jsx)("a",{href:"#",className:"btn btn-theme",children:"Download CV"})})]}),(0,a.jsxs)("ul",{className:"social-icons",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"facebook",href:"#",children:(0,a.jsx)("i",{className:"fab fa-facebook-f"})})})," ",(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"twitter",href:"#",children:(0,a.jsx)("i",{className:"fab fa-twitter"})})})," ",(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"google",href:"#",children:(0,a.jsx)("i",{className:"fab fa-google-plus-g"})})})," ",(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"linkedin",href:"#",children:(0,a.jsx)("i",{className:"fab fa-linkedin-in"})})})]})]})})})})]})})})};var u=t(1829);let h=()=>{let{changeNav:e,nav:s,toggle:t}=(0,r.useContext)(n.C);return(0,a.jsxs)("header",{className:"header theme-bg",children:[(0,a.jsx)("div",{className:"logo",children:"ALEXIO"}),(0,a.jsx)("div",{className:"menu-toggle",children:(0,a.jsx)("button",{className:"menu-button ".concat(t?"menu-button--open":""),onClick:()=>e(s,!t),children:(0,a.jsx)("span",{children:"Menu"})})})]})},f=()=>{let{changeNav:e,toggle:s,nav:t}=(0,r.useContext)(n.C),[l,i]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let e=document.querySelectorAll(".page");e.forEach((a,r)=>{if(a.style.opacity=0,a.style.zIndex=2,a.style.transform="translate3d(0px, 75%, -300px)",s){t==a.id&&(i(r),a.style.zIndex=5,a.style.transform="translate3d(0px, 75%, -200px)",a.style.opacity="1");let s=e.length-1==l?e[0]:(e.length,e[l+1]),c=e.length-1==l?e[1]:e.length-2==l?e[0]:e[l+2];s.style.zIndex=4,s.style.transform="translate3d(0px, 75%, -250px)",s.style.opacity=".9",c.style.zIndex=3,c.style.transform="translate3d(0px, 75%, -300px)",c.style.opacity=".8"}else t==a.id&&(i(r),a.style.zIndex=5,a.style.opacity="1",a.style.transform="translate3d(0px, 0px, 0px)")})},[s,t]),(0,a.jsxs)("nav",{className:"pages-nav ".concat(s?"pages-nav--open":""),children:[(0,a.jsx)("div",{className:"pages-nav__item",children:(0,a.jsx)("a",{className:"link link--page",onClick:()=>e("home",!1),children:"Home"})}),(0,a.jsx)("div",{className:"pages-nav__item",children:(0,a.jsx)("a",{className:"link link--page",onClick:()=>e("about",!1),children:"About Us"})}),(0,a.jsx)("div",{className:"pages-nav__item",children:(0,a.jsx)("a",{className:"link link--page",onClick:()=>e("resume",!1),children:"Resume"})}),(0,a.jsx)("div",{className:"pages-nav__item",children:(0,a.jsx)("a",{className:"link link--page",onClick:()=>e("portfolio",!1),children:"Portfolio"})}),(0,a.jsx)("div",{className:"pages-nav__item",children:(0,a.jsx)("a",{className:"link link--page",onClick:()=>e("contact",!1),children:"Contact Me"})})]})},x=e=>{let s=(0,r.useRef)();return(0,r.useEffect)(()=>{let t=t=>{s.current.contains(t.target)||e()};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}}),s},p=e=>{let{close:s,src:t}=e,l=x(()=>{s(!1)});return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)("div",{className:"mfp-bg mfp-ready",onClick:()=>s(!1)}),(0,a.jsx)("div",{className:"mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",tabIndex:-1,style:{overflow:"hidden auto"},children:(0,a.jsxs)("div",{className:" popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container",children:[(0,a.jsx)("div",{className:"mfp-content",ref:l,children:(0,a.jsx)("div",{className:"mfp-iframe-scaler",children:(0,a.jsx)("img",{className:"mfp-img",src:t})})}),(0,a.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]})})]})},j=()=>{let[e,s]=(0,r.useState)(!1),[t,l]=(0,r.useState)(null);return(0,r.useEffect)(()=>{setTimeout(()=>{let e=document.querySelectorAll("a");e.forEach(e=>{e.href.includes("static/img/")&&null===e.getAttribute("download")&&e.addEventListener("click",t=>{t.preventDefault(),l(e.href),s(!0)})})},1500)},[]),(0,a.jsx)(r.Fragment,{children:e&&(0,a.jsx)(p,{close:()=>s(!1),src:t})})};var v=t(2004),g=t.n(v);let b=e=>{let{close:s,videoID:t}=e,l=x(()=>{s(!1)});return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)("div",{className:"mfp-bg mfp-ready",onClick:()=>s(!1)}),(0,a.jsx)("div",{className:"mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",tabIndex:-1,style:{overflow:"hidden auto"},children:(0,a.jsxs)("div",{className:"mfp-container popup-container mfp-s-ready mfp-iframe-holder",children:[(0,a.jsx)("div",{className:"mfp-content",ref:l,children:(0,a.jsxs)("div",{className:"mfp-iframe-scaler",children:[(0,a.jsx)("button",{title:"Close (Esc)",type:"button",className:"mfp-close",onClick:()=>s(),children:"\xd7"}),(0,a.jsx)(g(),{url:t,playing:!0})]})}),(0,a.jsx)("div",{className:"mfp-preloader",children:"Loading..."})]})})]})},N=()=>{let[e,s]=(0,r.useState)(!1),[t,l]=(0,r.useState)(null);return(0,r.useEffect)(()=>{setTimeout(()=>{let e=document.querySelectorAll("a");e.forEach(e=>{(e.href.includes("www.youtube.com")||e.href.includes("vimeo.com")||e.href.includes("soundcloud.com"))&&e.addEventListener("click",t=>{t.preventDefault(),l(e.href),s(!0)})})},1500)},[]),(0,a.jsx)(r.Fragment,{children:e&&(0,a.jsx)(b,{close:()=>s(!1),videoID:t})})};var k=t(5152),y=t.n(k);let E=y()(()=>t.e(524).then(t.bind(t,6524)),{loadableGenerated:{webpack:()=>[6524]},ssr:!1}),w=()=>{(0,r.useEffect)(()=>{document.querySelector("html").classList.add("js"),document.querySelector("body").classList.add("dark-body")},[]);let{toggle:e}=(0,r.useContext)(n.C);return(0,a.jsxs)(r.Fragment,{children:[(0,a.jsx)(N,{}),(0,a.jsx)(j,{}),(0,a.jsx)(f,{}),(0,a.jsxs)("div",{className:"pages-stack ".concat(e?"pages-stack--open":""),children:[(0,a.jsx)(m,{}),(0,a.jsx)(i,{}),(0,a.jsx)(u.Z,{}),(0,a.jsx)(E,{}),(0,a.jsx)(c,{})]}),(0,a.jsx)(h,{})]})};var S=w},5742:function(e,s,t){"use strict";var a=t(5893),r=t(7294);let l=()=>{let[e,s]=(0,r.useState)(null);(0,r.useEffect)(()=>{t()},[]);let t=async()=>{try{let e=await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae");if(!e.ok)throw Error("Failed to fetch hero data");let t=await e.json();s(t)}catch(e){console.error("Error fetching hero data:",e)}};return e?(0,a.jsxs)("div",{className:"hero-section",children:[(0,a.jsx)("h1",{children:e.name}),(0,a.jsx)("h2",{children:e.jobTitle}),(0,a.jsx)("p",{children:e.introduction}),(0,a.jsx)("img",{src:e.image,alt:"Profile"})]}):(0,a.jsx)("div",{children:"Loading..."})};s.Z=l},9344:function(e,s,t){"use strict";var a=t(5893),r=t(7294),l=t(8285);let i=()=>{let[e,s]=(0,r.useState)([]),[t,i]=(0,r.useState)(null),[c,n]=(0,r.useState)(!0);(0,r.useEffect)(()=>{o()},[]);let o=async()=>{try{let e=await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae/projects");if(!e.ok)throw Error("Failed to fetch projects data");let t=await e.json();s(t.projects||[]),n(!1)}catch(e){console.error("Error fetching projects data:",e),i(e.message),n(!1)}};return c?(0,a.jsx)("div",{children:"Loading..."}):t?(0,a.jsxs)("div",{children:["Error fetching projects data: ",t]}):(0,a.jsx)(l.Z,{name:"projects",extraClass:"projects-section",title:"Projects",subTitle:"My Work",projectsData:e})};s.Z=i},8285:function(e,s,t){"use strict";t.d(s,{Z:function(){return f}});var a=t(5893);t(7294);var r=t(5697),l=t.n(r);let i=e=>{let{title:s,subTitle:t}=e;return(0,a.jsxs)("div",{className:"section-titel",children:[(0,a.jsx)("h6",{className:"theme-after dark-color",children:t}),(0,a.jsx)("div",{className:"st-title",children:(0,a.jsx)("h2",{className:"theme-after dark-color",children:s})})]})};var c=t(5742),n=t(1829),o=t(9344),d=t(9501),m=t(2556),u=t(1618);let h=e=>{let{section:s,data:t}=e,{name:r,title:l}=s||{};return(0,a.jsxs)("div",{id:r,children:[(0,a.jsx)(i,{title:l}),(e=>{switch(e){case"hero":return(0,a.jsx)(c.Z,{data:t});case"services":return(0,a.jsx)(n.Z,{data:t});case"projects":return(0,a.jsx)(o.Z,{data:t});case"skills":return(0,a.jsx)(d.Z,{data:t});case"testimonials":return(0,a.jsx)(m.Z,{data:t});case"socialMedia":return(0,a.jsx)(u.Z,{data:t});default:return null}})(r)]})};h.propTypes={section:l().shape({name:l().string.isRequired,title:l().string.isRequired}),data:l().object.isRequired};var f=h},1829:function(e,s,t){"use strict";var a=t(5893),r=t(7294),l=t(8285);let i=()=>{let[e,s]=(0,r.useState)(null);(0,r.useEffect)(()=>{t()},[]);let t=async()=>{try{let e=await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae/services");if(!e.ok)throw Error("Failed to fetch services data. Status: "+e.status);let t=await e.json();if(!t||!t.services)throw Error("Invalid data structure received for services.");s(t.services)}catch(e){console.error("Error fetching services data:",e)}};return(0,a.jsx)(l.Z,{name:"services",extraClass:"services-section",title:"Services",subTitle:"What I Offer",servicesData:e})};s.Z=i},9501:function(e,s,t){"use strict";var a=t(5893),r=t(7294),l=t(8285);let i=()=>{let[e,s]=(0,r.useState)([]),[t,i]=(0,r.useState)(null),[c,n]=(0,r.useState)(!0);(0,r.useEffect)(()=>{o()},[]);let o=async()=>{try{let e=await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae/skills");if(!e.ok)throw Error("Failed to fetch skills data");let t=await e.json();s(t.skills||[]),n(!1)}catch(e){console.error("Error fetching skills data:",e),i(e.message),n(!1)}};return c?(0,a.jsx)("div",{children:"Loading..."}):t?(0,a.jsxs)("div",{children:["Error fetching skills data: ",t]}):(0,a.jsx)(l.Z,{name:"skills",extraClass:"skills-section",title:"Skills",subTitle:"What I'm Good At",skillsData:e})};s.Z=i},1618:function(e,s,t){"use strict";var a=t(5893),r=t(7294),l=t(8285);let i=()=>{let[e,s]=(0,r.useState)([]),[t,i]=(0,r.useState)(null),[c,n]=(0,r.useState)(!0);(0,r.useEffect)(()=>{o()},[]);let o=async()=>{try{let e=await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae/social-media");if(!e.ok)throw Error("Failed to fetch social media handles");let t=await e.json();s(t.socialMedia||[]),n(!1)}catch(e){console.error("Error fetching social media handles:",e),i(e.message),n(!1)}};return c?(0,a.jsx)("div",{children:"Loading..."}):t?(0,a.jsxs)("div",{children:["Error fetching social media handles: ",t]}):(0,a.jsx)(l.Z,{name:"social-media",extraClass:"social-media-section",title:"Connect with Me",subTitle:"Let's Stay Connected",socialMediaData:e})};s.Z=i},2556:function(e,s,t){"use strict";var a=t(5893),r=t(7294);t(6066);var l=t(8285);let i=()=>{let[e,s]=(0,r.useState)([]),[t,i]=(0,r.useState)(null),[c,n]=(0,r.useState)(!0);(0,r.useEffect)(()=>{o()},[]);let o=async()=>{try{let e=await fetch("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae/testimonials");if(!e.ok)throw Error("Failed to fetch testimonials");let t=await e.json();s(t.testimonials||[]),n(!1)}catch(e){console.error("Error fetching testimonials:",e),i(e.message),n(!1)}};return c?(0,a.jsx)("div",{children:"Loading..."}):t?(0,a.jsxs)("div",{children:["Error fetching testimonials: ",t]}):(0,a.jsx)(l.Z,{name:"testimonials",extraClass:"testimonial-section",title:"Testimonials",subTitle:"What People Say",testimonials:e})};s.Z=i}},function(e){e.O(0,[556,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);