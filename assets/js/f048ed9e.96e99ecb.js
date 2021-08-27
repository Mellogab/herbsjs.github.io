"use strict";(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[9962],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45675:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={id:"getting-started",title:"Getting Started with Herbs",sidebar_label:"Getting Started",slug:"/",custom_edit_url:null},u=void 0,l={unversionedId:"introduction/getting-started",id:"introduction/getting-started",isDocsHomePage:!1,title:"Getting Started with Herbs",description:"Installation",source:"@site/docs/introduction/getting-started.md",sourceDirName:"introduction",slug:"/",permalink:"/docs/",editUrl:null,tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started with Herbs",sidebar_label:"Getting Started",slug:"/",custom_edit_url:null},sidebar:"sidebar",next:{title:"What's Herbs?",permalink:"/docs/introduction/whats-herbs"}},c=[{value:"Installation",id:"installation",children:[]},{value:"Using",id:"using",children:[]},{value:"Take a tour of our sample application",id:"take-a-tour-of-our-sample-application",children:[]},{value:"Forum &amp; Discussions",id:"forum--discussions",children:[]},{value:"Next steps",id:"next-steps",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Herbs is available as an ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@herbsjs/herbs"},"npm package"),"."),(0,o.kt)("p",null,"To install and save in your package.json dependencies, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# with npm\nnpm install npm i @herbsjs/herbs\n\n# with yarn\nyarn add npm i @herbsjs/herbs\n")),(0,o.kt)("h2",{id:"using"},"Using"),(0,o.kt)("p",null,"Here's a quick example to get you started, it's literally all you need:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { entity, field, Ok, Err, usecase, step, ifElse  } from '@herbsjs/herbs'\n\nconst Item = entity('Item', {\n  id: field(Number),\n  description: field(String),\n  isDone: field(Boolean),\n  position: field(Number)\n})\n\nconst dependency = {\n    ItemRepository: require('../repositories/ItemRepository').ItemRepository,\n    ...\n}\n\nconst addOrUpdateItem = (injection) =>\n\nusecase('Add or Update an Item on a to-do List', {\n\n    // Input/Request type validation\n    request: { listId: Number, item: Item },\n\n    // Output/Response type\n    response: { item: Item },\n\n    // Authorization Audit\n    authorize: async (user) => user.isAdmin ? Ok() : Err(),\n\n    // Dependency Injection control\n    setup: (ctx) => ctx.di = Object.assign({}, dependency, injection),\n\n    // Step audit and description\n    'Check if the Item is valid': step((ctx) => {\n        ...\n        return item.validate() // Ok or Error\n    }),\n\n    'Check if the List exists': step(async (ctx) => {\n        ...\n        return Ok()\n    }),\n\n    // Conditional step\n    'Add or Update the Item': ifElse({\n\n        'If the Item exists': step(async (ctx) => {\n            ...\n            return Ok(newItem)\n        }),\n\n        'Then: Add a new Item to the List': step(async (ctx) => {\n            ...\n            return ctx.ret = await itemRepo.save(item) // Ok or Error\n        }),\n\n        'Else: Update Item on the List': step(async (ctx) => {\n            ...\n            return ctx.ret = await itemRepo.save(item) // Ok or Error\n        })\n    })\n})\n\n\n\n")),(0,o.kt)("h2",{id:"take-a-tour-of-our-sample-application"},"Take a tour of our sample application"),(0,o.kt)("p",null,"We created an example repository, that you can see the applicability of Herbs in a project closer to the real world. This application consists in a GraphQL API using Herbs and a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/todolist-on-herbs/generate"},"template")," to use with this repository"),(0,o.kt)("p",null,"So, you can start with HerbJS, taking a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/todolist-on-herbs"},"sample repository"),", or follow this documentation to get more knowledge of how to use herbsJS"),(0,o.kt)("h2",{id:"forum--discussions"},"Forum & Discussions"),(0,o.kt)("p",null,"We have a forum with our discussions and questions about the world around Herbs. Any question, you can communicate with the community through this link: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/forum"},"Herbs Forum")),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Now that you've seen the basics of using Herbs, in the next sections of the documentation, we'll explain in detail how Herbs works under the hood for you."))}d.isMDXComponent=!0}}]);