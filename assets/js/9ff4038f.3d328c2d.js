"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[2353],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4982:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:0},l="Introduction",c={unversionedId:"getting-started/introduction",id:"getting-started/introduction",title:"Introduction",description:"Dart Code Metrics is a static analysis tool that helps you analyse and improve your code quality.",source:"@site/docs/getting-started/introduction.md",sourceDirName:"getting-started",slug:"/getting-started/introduction",permalink:"/docs/getting-started/introduction",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/getting-started/introduction.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"sidebar",next:{title:"Installation and Usage",permalink:"/docs/getting-started/installation"}},u={},d=[{value:"Metrics",id:"metrics",level:2},{value:"Rules",id:"rules",level:2}],p={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Dart Code Metrics is a static analysis tool that helps you analyse and improve your code quality."),(0,i.kt)("p",null,"It collects analytical data on the code through calculating code metrics with configurable thresholds and provides additional rules for the Dart analyzer."),(0,i.kt)("p",null,"It can be launched via the command line, connected as a plugin to the Dart Analysis Server, or as a library. Launching via the command line allows you to easily integrate the tool into the CI/CD process, and you can get results in \u0421onsole, HTML, JSON, CodeClimate, or GitHub. Connecting the tool as a plugin to the Analysis Server allows you to receive real-time feedback directly from the IDE."),(0,i.kt)("h2",{id:"metrics"},"Metrics"),(0,i.kt)("p",null,"Metrics can help manage codebase for teams or individuals working on both big and small projects."),(0,i.kt)("p",null,"Big projects usually have their own history with contributions from different people and sometimes it's really hard to detect places in the codebase that need attention the most."),(0,i.kt)("p",null,"For small projects metrics can help avoid the stage when codebase becomes harder to maintain because they provide instant feedback on any PR and questionable solutions might not even be merged into the main branch."),(0,i.kt)("h2",{id:"rules"},"Rules"),(0,i.kt)("p",null,"Other ecosystems have useful rules like unused arguments check, class member ordering check, etc. They\u2019re not available in the built-in Dart SDK linter, but they are very handy and thats why Dart Code Metrics provides them."),(0,i.kt)("p",null,"Stylistic rules aren\u2019t the only important things to consider; Dart Code Metrics also provide rules, that highlight potential errors like ",(0,i.kt)("inlineCode",{parentName:"p"},"no-equal-then-else"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"no-equal-arguments"),", and more."),(0,i.kt)("p",null,"The rules are partially based on a personal experience during code reviews and feedback / requests from the community, so if you have any ideas to share, please don't hesitate! Another part of the rules emerged during the process of studying other tools\u2019 rules. (Shoutout to PVS-Studio, TSLint, and ESLint for inspiration!)"))}h.isMDXComponent=!0}}]);