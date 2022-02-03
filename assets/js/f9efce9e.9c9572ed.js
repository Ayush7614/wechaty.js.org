"use strict";(self.webpackChunkwechaty_docusaurus=self.webpackChunkwechaty_docusaurus||[]).push([[244],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),h=c(a),m=n,y=h["".concat(s,".").concat(m)]||h[m]||u[m]||o;return a?r.createElement(y,p(p({ref:t},l),{},{components:a})):r.createElement(y,p({ref:t},l))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,p=new Array(o);p[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<o;c++)p[c]=a[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},68262:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return h}});var r=a(87462),n=a(63366),o=(a(67294),a(3905)),p=["components"],i={title:"Main concepts in Wechaty"},s=void 0,c={unversionedId:"main-concepts-in-wechaty",id:"main-concepts-in-wechaty",isDocsHomePage:!1,title:"Main concepts in Wechaty",description:"This section explains the main concepts in Wechaty. If you are new to software or chatbot development, start from this glossary to familiarize yourself with the terminology.",source:"@site/docs/main-concepts-in-wechaty.md",sourceDirName:".",slug:"/main-concepts-in-wechaty",permalink:"/docs/main-concepts-in-wechaty",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/main/docusaurus/docs/main-concepts-in-wechaty.md",tags:[],version:"current",lastUpdatedBy:"nibble0101",lastUpdatedAt:1627663029,formattedLastUpdatedAt:"7/30/2021",frontMatter:{title:"Main concepts in Wechaty"},sidebar:"docs",previous:{title:"Getting started",permalink:"/docs/getting-started-with-wechaty"},next:{title:"Showcases: Index",permalink:"/docs/showcases/"}},l=[],u={toc:l};function h(e){var t=e.components,a=(0,n.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section explains the main concepts in Wechaty. If you are new to software or chatbot development, start from this glossary to familiarize yourself with the terminology."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Bot")),(0,o.kt)("p",{parentName:"li"},"A bot is a software application that is programmed to perform specific tasks. Bots usually imitate human behavior and perform certain repetitive tasks faster. Bots are automated therefore, do not need to be started manually by a human being.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Chatbot")),(0,o.kt)("p",{parentName:"li"},"These are bots that are designed for interacting with humans in voice or text-based conversation. Chatbots simulate human conversation by responding to certain phrases or words with programmed responses. Wechaty is a software program for developing chatbots for Instant Messaging services such as Wechat and Whatsapp. You can check our ",(0,o.kt)("a",{parentName:"p",href:"/docs/"},"Introduction section")," for a list of all the supported Instant Messaging systems.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Wechaty Puppet")),(0,o.kt)("p",{parentName:"li"},"Wechaty Puppet is a standard for maintaining compatibility between Instant Messaging(IM) systems. Wechaty Puppet defines the universal Instant Messaging interface for compatibility between Wechaty API and variants of IM systems.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Puppet provider")),(0,o.kt)("p",{parentName:"li"},"Wechaty puppet provider refers to RPA module used for connecting Wechaty API to the corresponding Instant Messaging platform(Wechat, Whatsapp and Tiktok) bot account. Each supported Instant Messaging system has its own Puppet provider. The Puppet Provider for WeChat is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-wechat"},"wechaty-puppet-wechat"),", for Whatsapp is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-whatsapp"},"wechaty-puppet-whatsapp"),", and the one for Lark is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-puppet-lark"},"wechaty-puppet-lark"),". See ",(0,o.kt)("a",{parentName:"p",href:"/docs/puppet-providers/"},"Puppet Providers")," section for a complete list of puppet providers.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Puppet service provider")),(0,o.kt)("p",{parentName:"li"},"Puppet service providers refer to Wechaty developers who provide puppet cloud services for the different Instant Messaging systems.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Puppet service")),(0,o.kt)("p",{parentName:"li"},"Wechaty Puppet Service is gRPC for Wechaty Puppet Provider. For example, we can cloudify the Wechaty Puppet Provider wechaty-puppet-padlocal to a Wechaty Puppet Service by running Wechaty Puppet Service Token Gateway.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Wechaty Puppet Service Token")),(0,o.kt)("p",{parentName:"li"},"This is a unique key for authorizing the service from Wechaty Puppet Service Provider access. This token is issued by Puppet service providers.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Robotic process automation")),(0,o.kt)("p",{parentName:"li"},"Robotic process automation (RPA) refers to the technology that allows users to configure software robots to execute business processes and automate repetitive tasks across applications and systems without human intervention.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Software Development Kit")),(0,o.kt)("p",{parentName:"li"},"Software development kit (SDK) is a toolkit used by developers to create applications for a specific platform, operating system or device. A great example would be ",(0,o.kt)("strong",{parentName:"p"},"Wechaty"),", wherein it is called a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"conversational RPA SDK"))," that is used by developers to create customized chatbots.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Wechaty gRPC")),(0,o.kt)("p",{parentName:"li"},"Initially, Wechaty was built using TypeScript. Support for other languages such as Python, Go, Java, PHP, .NET, and Scala was later introduced in 2020 so that chatbot makers can build chatbots in their preferred language. This version of Wechaty which offers multi-language support is referred to as ",(0,o.kt)("strong",{parentName:"p"},"Wechaty polyglot"),". The introduction of Wechaty polyglot however came with its challenges because all Wechaty puppet providers were built using TypeScript and delivered via npm. Translating all of them to the languages supported by Wechaty polyglot was a monumental challenge. To solve this problem, Wechaty gRPC was created. The goal of Wechaty RPC is to ",(0,o.kt)("em",{parentName:"p"},"cloudify")," Wechaty Puppet Providers. It ensures we can use the Wechaty Puppet Providers remotely via network and Polyglot Wechaty can use the Wechaty Puppet API from the TypeScript ecosystem."))))}h.isMDXComponent=!0}}]);