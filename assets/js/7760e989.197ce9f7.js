"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[1060],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),p=r,k=d["".concat(c,".").concat(p)]||d[p]||m[p]||l;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7997:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={},i="CLI",o={unversionedId:"cli/index",id:"cli/index",title:"CLI",description:"To use the package as a command-line tool, run",source:"@site/docs/cli/index.md",sourceDirName:"cli",slug:"/cli/",permalink:"/docs/cli/",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/cli/index.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Analyzer Plugin",permalink:"/docs/analyzer-plugin"},next:{title:"Analyze",permalink:"/docs/cli/analyze"}},c={},s=[{value:"Available commands",id:"available-commands",level:2},{value:"Multi-package repositories usage",id:"multi-package-repositories-usage",level:2}],u={toc:s};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cli"},"CLI"),(0,r.kt)("p",null,"To use the package as a command-line tool, run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ dart run dart_code_metrics:metrics <command> lib\n\n# or for a Flutter package\n$ flutter pub run dart_code_metrics:metrics <command> lib\n")),(0,r.kt)("p",null,"Alternatively, the package can be installed globally"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ dart pub global activate dart_code_metrics\n$ metrics <command> lib\n\n# or for a Flutter package\n$ flutter pub global activate dart_code_metrics\n$ metrics <command> lib\n")),(0,r.kt)("p",null,"It will produce a result in one of the supported formats:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Console"),(0,r.kt)("li",{parentName:"ul"},"GitHub"),(0,r.kt)("li",{parentName:"ul"},"Checkstyle"),(0,r.kt)("li",{parentName:"ul"},"Codeclimate"),(0,r.kt)("li",{parentName:"ul"},"HTML"),(0,r.kt)("li",{parentName:"ul"},"JSON")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," you need to configure ",(0,r.kt)("inlineCode",{parentName:"p"},"rules")," entry in the ",(0,r.kt)("inlineCode",{parentName:"p"},"analysis_options.yaml")," to have rules report included into the result."),(0,r.kt)("h2",{id:"available-commands"},"Available commands"),(0,r.kt)("p",null,"The following table shows which commands you can use with the tool:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Command"),(0,r.kt)("th",{parentName:"tr",align:null},"Example of use"),(0,r.kt)("th",{parentName:"tr",align:null},"Short description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"analyze"),(0,r.kt)("td",{parentName:"tr",align:null},"dart run dart_code_metrics:metrics analyze lib"),(0,r.kt)("td",{parentName:"tr",align:null},"Reports code metrics, rules and anti-patterns violations.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"check-unnecessary-nullable"),(0,r.kt)("td",{parentName:"tr",align:null},"dart run dart_code_metrics:metrics check-unnecessary-nullable lib"),(0,r.kt)("td",{parentName:"tr",align:null},"Checks unnecessary nullable parameters.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"check-unused-files"),(0,r.kt)("td",{parentName:"tr",align:null},"dart run dart_code_metrics:metrics check-unused-files lib"),(0,r.kt)("td",{parentName:"tr",align:null},"Checks unused ","*",".dart files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"check-unused-l10n"),(0,r.kt)("td",{parentName:"tr",align:null},"dart run dart_code_metrics:metrics check-unused-l10n lib"),(0,r.kt)("td",{parentName:"tr",align:null},"Checks unused localization in *.dart files.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"check-unused-code"),(0,r.kt)("td",{parentName:"tr",align:null},"dart run dart_code_metrics:metrics check-unused-code lib"),(0,r.kt)("td",{parentName:"tr",align:null},"Checks unused code in *.dart files.")))),(0,r.kt)("p",null,"For additional help on any of the commands, enter ",(0,r.kt)("inlineCode",{parentName:"p"},"dart run dart_code_metrics:metrics help <command>")),(0,r.kt)("h2",{id:"multi-package-repositories-usage"},"Multi-package repositories usage"),(0,r.kt)("p",null,"If you run a command from the root of a multi-package repository (aka monorepo), it'll pick up ",(0,r.kt)("inlineCode",{parentName:"p"},"analysis_options.yaml")," files correctly."),(0,r.kt)("p",null,"Additionally, if you use ",(0,r.kt)("a",{parentName:"p",href:"https://pub.dev/packages/melos"},"Melos"),", you can add custom command to the ",(0,r.kt)("inlineCode",{parentName:"p"},"melos.yaml"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="melos.yaml"',title:'"melos.yaml"'},'metrics:\n  run: |\n    melos exec -c 1 --ignore="*example*" -- \\\n      flutter pub run dart_code_metrics:metrics analyze lib\n  description: |\n    Run `dart_code_metrics` in all packages.\n     - Note: you can also rely on your IDEs Dart Analysis / Issues window.\n')))}m.isMDXComponent=!0}}]);