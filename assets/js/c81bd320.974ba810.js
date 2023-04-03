"use strict";(self.webpackChunklbc_javascript_docusite=self.webpackChunklbc_javascript_docusite||[]).push([[505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||g[d]||i;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},203:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:2},s="Strings",o={unversionedId:"Basics/strings",id:"Basics/strings",title:"Strings",description:"A String is a sequence of characters intended to represent text",source:"@site/docs/Basics/strings.md",sourceDirName:"Basics",slug:"/Basics/strings",permalink:"/lbc-javascript-docusite/docs/Basics/strings",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Basics/strings.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Variables",permalink:"/lbc-javascript-docusite/docs/Basics/variables"},next:{title:"Objetos",permalink:"/lbc-javascript-docusite/docs/Basics/Objetos"}},l={},c=[{value:"Creating Strings",id:"creating-strings",level:2},{value:"Basic String Manipulation",id:"basic-string-manipulation",level:2},{value:"String Indexing",id:"string-indexing",level:3},{value:"The length Property",id:"the-length-property",level:3},{value:"String Concatenation",id:"string-concatenation",level:2},{value:"Common String Methods",id:"common-string-methods",level:3}],p={toc:c},u="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"strings"},"Strings"),(0,a.kt)("p",null,"A String is a sequence of characters intended to represent text\nA string is a data type that represents a sequence of characters in JavaScript, which can include letters, numbers, and special characters. They are commonly used to represent text in a program."),(0,a.kt)("h2",{id:"creating-strings"},"Creating Strings"),(0,a.kt)("p",null,"In JavaScript, there are different ways to create a string. You can wrap the text inside single quotes (' '), double quotes (\" \"), or backticks ( ), which are known as template literals. For instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Single quote string\nlet string1 = 'I am a string!';\n\n// Double quote string\nlet string2 = \"I am a string!\";\n\n// Template literal string\nlet string3 = `I am a string!`;\n")),(0,a.kt)("p",null,"Note that strings created using different quotes are treated equally, meaning they can be compared:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"string1 === string2; // true\nstring1 === string3; // true\nstring2 === string3; // true\n")),(0,a.kt)("p",null,"Additionally, you can create strings using the String() constructor. If called with new, it generates a string object, while calling it without new coerces the value to a primitive string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let str1 = new String('What am I?');\ntypeof str1; // 'object'\n\nlet str2 = String('What am I?');\ntypeof str2; // 'string'\n\nlet str3 = \"What am I?\";\ntypeof str3; // 'string'\n")),(0,a.kt)("p",null,"From now on, we will focus on manipulating primitive strings, which are immutable."),(0,a.kt)("h2",{id:"basic-string-manipulation"},"Basic String Manipulation"),(0,a.kt)("h3",{id:"string-indexing"},"String Indexing"),(0,a.kt)("p",null,"You can access each character of a string using bracket notation and its numeric index, starting from zero."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let str = 'hello';\nstr[0]; // 'h'\nstr[1]; // 'e'\nstr[2]; // 'l'\nstr[3]; // 'l'\nstr[4]; // 'o'\n")),(0,a.kt)("p",null,"Also, you can use the charAt() method to retrieve a specific character:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"str.charAt(0); // 'h'\n")),(0,a.kt)("h3",{id:"the-length-property"},"The length Property"),(0,a.kt)("p",null,"You can get the length of a string using the length property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let sentence = 'The quick brown fox jumps over the lazy dog';\nsentence.length; // 43\n")),(0,a.kt)("h2",{id:"string-concatenation"},"String Concatenation"),(0,a.kt)("p",null,"You can concatenate multiple strings using the + operator or the += operator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let a = 'Hello,';\nlet b = ' world!';\nlet c = a + b;\nconsole.log(c); // 'Hello, world!'\n\na += b;\nconsole.log(a); // 'Hello, world!'\n")),(0,a.kt)("p",null,"You can also use template literals to concatenate strings:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"let a = 'Hello,';\nlet b = ' world!';\nlet c = `${a}${b}`;\nconsole.log(c); // 'Hello, world!'\n")),(0,a.kt)("h3",{id:"common-string-methods"},"Common String Methods"),(0,a.kt)("p",null,"JavaScript has many ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3schools.com/js/js_string_methods.asp"},"built-in methods")," for manipulating strings."))}g.isMDXComponent=!0}}]);