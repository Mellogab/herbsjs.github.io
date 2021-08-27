"use strict";(self.webpackChunkherbjs=self.webpackChunkherbjs||[]).push([[7846],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=s,b=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(b,a(a({ref:t},c),{},{components:r})):n.createElement(b,a({ref:t},c))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5868:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(87462),s=r(63366),i=(r(67294),r(3905)),a=["components"],l={id:"herbs2rpl",title:"Herbs2rpl",sidebar_label:"Herbs2rpl",slug:"/glues/herbs2rpl"},o=void 0,u={unversionedId:"glues/herbs2rpl",id:"glues/herbs2rpl",isDocsHomePage:!1,title:"Herbs2rpl",description:"Herbs REPL",source:"@site/docs/glues/herbs2repl.md",sourceDirName:"glues",slug:"/glues/herbs2rpl",permalink:"/docs/glues/herbs2rpl",editUrl:"https://github.com/herbsjs/herbsjs.github.io/docs/glues/herbs2repl.md",tags:[],version:"current",frontMatter:{id:"herbs2rpl",title:"Herbs2rpl",sidebar_label:"Herbs2rpl",slug:"/glues/herbs2rpl"},sidebar:"sidebar",previous:{title:"Herbs Shelf",permalink:"/docs/glues/herbsshelf"},next:{title:"Suma2text",permalink:"/docs/glues/suma2text"}},c=[{value:"Getting started",id:"getting-started",children:[{value:"Installing",id:"installing",children:[]},{value:"Using",id:"using",children:[]}]},{value:"Contribute",id:"contribute",children:[]},{value:"License",id:"license",children:[]}],p={toc:c};function d(e){var t=e.components,r=(0,s.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/herbsjs/herbs2repl/main/doc/render1607020056527.gif",alt:"Herbs REPL"})),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"installing"},"Installing"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," npm install herbs2repl\n")),(0,i.kt)("h3",{id:"using"},"Using"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"srs/domain/usecases/_uclist.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = (injection) => {\n    return [\n        { usecase: require('./createItem').createItem(injection), tags: { group: 'Items' } },\n        { usecase: require('./updateItem').updateItem(injection), tags: { group: 'Items' } },\n        ...\n     ]\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"srs/infra/repl/index.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const usecases = require('../../domain/usecases/_uclist')\nconst repl = require('herbs2repl')\n\nconst main = async (injection) => {\n    \n    // list of all use cases, initialized\n    const ucs = usecases(injection)\n\n    // your user for the REPL session\n    const user = {\n        canAddItem: true, canCreateList: true, canDeteleList: false,\n        canGetLists: true, canUpdateItem: true, canUpdateList: true\n    }\n\n    repl(ucs, user, {groupBy: \"group\"})\n}\n\nmain().then()\n")),(0,i.kt)("p",null,"Then run on your terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"}," $ node ./src/infra/repl\n")),(0,i.kt)("h2",{id:"contribute"},"Contribute"),(0,i.kt)("p",null,"Come with us to make an awesome ",(0,i.kt)("em",{parentName:"p"},"herbs2repl"),"."),(0,i.kt)("p",null,"Now, if you do not have the technical knowledge and also have intended to help us, do not feel shy, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/herbs2repl/issues"},"click here")," to open an issue and collaborate their ideas, the contribution may be a criticism or a compliment (why not?)"),(0,i.kt)("p",null,"If you would like to help contribute to this repository, please see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/herbs2repl/blob/main/.github/CONTRIBUTING.md"},"CONTRIBUTING")),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"herbsshelf")," is released under the\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/herbsjs/herbs2repl/blob/main/LICENSE.md"},"MIT license")))}d.isMDXComponent=!0}}]);