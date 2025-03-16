(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8154:function(e,t,a){Promise.resolve().then(a.bind(a,7826)),Promise.resolve().then(a.bind(a,4715)),Promise.resolve().then(a.bind(a,7275)),Promise.resolve().then(a.bind(a,4673)),Promise.resolve().then(a.bind(a,1160))},7826:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return n}});var s=a(3827),i=a(2175),r=a(4090);function n(){let[e,t]=(0,r.useState)({name:"",email:"",message:""}),[a,n]=(0,r.useState)(!1),[l,o]=(0,r.useState)(!1),[d,c]=(0,r.useState)(""),m=async a=>{a.preventDefault(),o(!0),c("");let s="xkgjgrwl";if(!s){c("Form submission is not configured properly."),o(!1);return}try{if((await fetch("https://formspree.io/f/".concat(s),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})).ok)n(!0),t({name:"",email:"",message:""});else throw Error("Failed to submit form")}catch(e){c("Failed to submit the form. Please try again later.")}finally{o(!1)}};return(0,s.jsx)("section",{id:"contact",className:"py-20 bg-white",children:(0,s.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"max-w-3xl mx-auto",children:[(0,s.jsxs)(i.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},className:"text-center mb-16",children:[(0,s.jsx)("h2",{className:"text-3xl font-bold text-gray-900 sm:text-4xl mb-4",children:"Get in Touch"}),(0,s.jsx)("p",{className:"text-xl text-gray-600",children:"Interested in learning more about our solutions? We'd love to hear from you."})]}),a?(0,s.jsxs)(i.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:"text-center p-6 bg-green-50 rounded-lg",children:[(0,s.jsx)("h3",{className:"text-xl font-semibold text-green-800 mb-2",children:"Thank you for your message!"}),(0,s.jsx)("p",{className:"text-green-600",children:"We'll get back to you as soon as possible."})]}):(0,s.jsxs)(i.E.form,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},onSubmit:m,className:"space-y-6",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-900 mb-1",children:"Name"}),(0,s.jsx)("input",{type:"text",id:"name",name:"name",value:e.name,onChange:a=>t({...e,name:a.target.value}),className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 focus:outline-none sm:text-sm bg-white disabled:bg-gray-50 disabled:text-gray-500",required:!0,disabled:l,placeholder:"Your name"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-900 mb-1",children:"Email"}),(0,s.jsx)("input",{type:"email",id:"email",name:"email",value:e.email,onChange:a=>t({...e,email:a.target.value}),className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 focus:outline-none sm:text-sm bg-white disabled:bg-gray-50 disabled:text-gray-500",required:!0,disabled:l,placeholder:"you@example.com"})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-900 mb-1",children:"Message"}),(0,s.jsx)("textarea",{id:"message",name:"message",rows:4,value:e.message,onChange:a=>t({...e,message:a.target.value}),className:"mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:ring-purple-500 focus:outline-none sm:text-sm bg-white disabled:bg-gray-50 disabled:text-gray-500",required:!0,disabled:l,placeholder:"Your message"})]}),d&&(0,s.jsx)("div",{className:"text-red-600 text-sm bg-red-50 p-3 rounded-md",children:d}),(0,s.jsx)("div",{className:"text-right",children:(0,s.jsx)("button",{type:"submit",disabled:l,className:"inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed",children:l?"Sending...":"Send Message"})})]})]})})})}},4715:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return n}});var s=a(3827),i=a(2175);let r=[{title:"Intelligent Interaction Systems",description:"Advanced sensors and AI algorithms enabling natural and intuitive human-machine communication.",icon:(0,s.jsx)("svg",{className:"w-12 h-12",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})},{title:"Cognitive Enhancement Tools",description:"Hardware and software solutions that expand human memory, attention, and analytical capabilities.",icon:(0,s.jsx)("svg",{className:"w-12 h-12",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})})},{title:"Intelligent Assistant Ecosystem",description:"A comprehensive network of AI assistants that learn and adapt to provide personalized support across multiple domains.",icon:(0,s.jsx)("svg",{className:"w-12 h-12",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"})})},{title:"Assistive Technology Platform",description:"Customized solutions that help people with special needs overcome barriers and achieve their full potential.",icon:(0,s.jsx)("svg",{className:"w-12 h-12",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})})}];function n(){return(0,s.jsx)("section",{id:"core-efforts",className:"py-20 bg-white",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,s.jsxs)("div",{className:"text-center mb-16",children:[(0,s.jsx)(i.E.h2,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8},className:"text-3xl font-bold text-gray-900 sm:text-4xl mb-4",children:"Our Core Efforts"}),(0,s.jsx)(i.E.p,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2},className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Discover how we're pushing the boundaries of human potential through innovative technology solutions."})]}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:r.map((e,t)=>(0,s.jsxs)(i.E.div,{initial:{opacity:0,y:20},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.8,delay:.2*t},className:"bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300",children:[(0,s.jsx)("div",{className:"text-purple-600 mb-4",children:e.icon}),(0,s.jsx)("h3",{className:"text-xl font-semibold text-gray-900 mb-3",children:e.title}),(0,s.jsx)("p",{className:"text-gray-600",children:e.description})]},e.title))})]})})}},7275:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return r}});var s=a(3827),i=a(2175);function r(){return(0,s.jsxs)("div",{className:"relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50",children:[(0,s.jsx)("div",{className:"absolute inset-0 overflow-hidden",children:(0,s.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"})}),(0,s.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",children:(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsxs)(i.E.h1,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:"text-4xl sm:text-6xl font-bold text-gray-900 mb-6",children:[(0,s.jsx)("span",{className:"bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",children:"Enhancing Human Capabilities"}),(0,s.jsx)("br",{}),"Through AI"]}),(0,s.jsx)(i.E.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},className:"text-xl text-gray-600 mb-8 max-w-3xl mx-auto",children:"Integrated hardware and software solutions that empower people to transcend their limitations and achieve more."}),(0,s.jsxs)(i.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},className:"flex justify-center gap-4",children:[(0,s.jsx)("a",{href:"#core-efforts",className:"px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl",children:"Explore Our Solutions"}),(0,s.jsx)("a",{href:"#contact",className:"px-8 py-3 bg-white text-purple-600 rounded-full hover:bg-gray-50 transition-colors duration-200 shadow-lg hover:shadow-xl",children:"Contact Us"})]})]})}),(0,s.jsx)("div",{className:"absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce",children:(0,s.jsx)("a",{href:"#mission",className:"text-gray-400 hover:text-purple-600",children:(0,s.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})})})]})}},4673:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return r}});var s=a(3827),i=a(2175);function r(){return(0,s.jsx)("section",{id:"mission",className:"py-20 bg-gray-50",children:(0,s.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[(0,s.jsxs)(i.E.div,{initial:{opacity:0,x:-20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8},children:[(0,s.jsx)("h2",{className:"text-3xl font-bold text-gray-900 sm:text-4xl mb-6",children:"Our Mission"}),(0,s.jsxs)("div",{className:"prose prose-lg",children:[(0,s.jsx)("p",{className:"mb-6 text-gray-800",children:"Agave Tech is dedicated to developing innovative products that combine hardware and software, enhancing human capabilities through artificial intelligence technologies."}),(0,s.jsx)("p",{className:"text-gray-800",children:"We enable people to transcend their limitations, solve complex problems more efficiently, and achieve higher levels of productivity and creativity."})]})]}),(0,s.jsxs)(i.E.div,{initial:{opacity:0,x:20},whileInView:{opacity:1,x:0},viewport:{once:!0},transition:{duration:.8},className:"relative",children:[(0,s.jsxs)("div",{className:"aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl bg-white",children:[(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10"}),(0,s.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,s.jsxs)("div",{className:"p-8 text-center",children:[(0,s.jsx)("div",{className:"w-20 h-20 mx-auto mb-6 text-purple-600",children:(0,s.jsx)("svg",{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"})})}),(0,s.jsx)("h3",{className:"text-2xl font-semibold text-gray-900 mb-4",children:"Innovation Through Integration"}),(0,s.jsx)("p",{className:"text-gray-700 text-lg",children:"Seamlessly blending cutting-edge hardware with intelligent software to create transformative solutions."})]})})]}),(0,s.jsx)("div",{className:"absolute -top-4 -right-4 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl"}),(0,s.jsx)("div",{className:"absolute -bottom-4 -left-4 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"})]})]})})})}},1160:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return n}});var s=a(3827),i=a(4090),r=a(8792);function n(){let[e,t]=(0,i.useState)(!1),a=[{name:"Our Mission",href:"#mission"},{name:"Core Efforts",href:"#core-efforts"},{name:"Contact",href:"#contact"}];return(0,s.jsxs)("nav",{className:"fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm",children:[(0,s.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,s.jsxs)("div",{className:"flex justify-between h-16",children:[(0,s.jsx)("div",{className:"flex items-center",children:(0,s.jsx)(r.default,{href:"/",className:"flex items-center",children:(0,s.jsx)("span",{className:"text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent",children:"Agave Tech"})})}),(0,s.jsx)("div",{className:"hidden md:flex items-center space-x-8",children:a.map(e=>(0,s.jsx)(r.default,{href:e.href,className:"text-gray-700 hover:text-purple-600 transition-colors duration-200",children:e.name},e.name))}),(0,s.jsx)("div",{className:"md:hidden flex items-center",children:(0,s.jsx)("button",{onClick:()=>t(!e),className:"text-gray-700 hover:text-purple-600 focus:outline-none",children:(0,s.jsx)("svg",{className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e?(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"}):(0,s.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4 6h16M4 12h16M4 18h16"})})})})]})}),(0,s.jsx)("div",{className:"md:hidden ".concat(e?"block":"hidden"),children:(0,s.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1 bg-white",children:a.map(e=>(0,s.jsx)(r.default,{href:e.href,className:"block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md",onClick:()=>t(!1),children:e.name},e.name))})})]})}}},function(e){e.O(0,[843,971,69,744],function(){return e(e.s=8154)}),_N_E=e.O()}]);