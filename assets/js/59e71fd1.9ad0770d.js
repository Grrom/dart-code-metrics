"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[7624],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),m=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(n),d=i,g=u["".concat(o,".").concat(d)]||u[d]||p[d]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9729:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),i=n(5321);function a(e){let{version:t,severity:n,hasConfig:a,hasFix:l,isDeprecated:s}=e;return r.createElement("div",{className:"single-rule-info"},r.createElement(i.Z,{version:t,severity:n,hasConfig:a,hasFix:l,isDeprecated:s}))}},5321:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);function i(e){let{hasConfig:t,hasFix:n,isDeprecated:i}=e;return r.createElement("div",{className:"rule-options"},t&&r.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),n&&r.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),i&&r.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function a(e){let{severity:t,version:n,hasConfig:a,hasFix:l,isDeprecated:s}=e;const o=null==t?void 0:t.toLowerCase();return r.createElement("div",{className:"rule-additional-info"},r.createElement("div",null,r.createElement("span",{className:"added-in-label"},"added in:")," ",n),r.createElement("div",{className:`rule-severity ${o}`},o),r.createElement(i,{hasConfig:a,hasFix:l,isDeprecated:s}))}},4515:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(7462),i=(n(7294),n(3905)),a=n(9729);const l={},s=void 0,o={unversionedId:"rules/intl/prefer-intl-name",id:"rules/intl/prefer-intl-name",title:"prefer-intl-name",description:"Recommends to use $_${ClassMemberName} pattern for name argument in Intl.message(), Intl.plural(), Intl.gender(), Intl.select() methods.",source:"@site/docs/rules/intl/prefer-intl-name.mdx",sourceDirName:"rules/intl",slug:"/rules/intl/prefer-intl-name",permalink:"/docs/rules/intl/prefer-intl-name",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/intl/prefer-intl-name.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"use-setstate-synchronously",permalink:"/docs/rules/flutter/use-setstate-synchronously"},next:{title:"prefer-provide-intl-description",permalink:"/docs/rules/intl/prefer-provide-intl-description"}},m={},c=[{value:"Example",id:"example",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(a.Z,{version:"1.7.0",severity:"warning",hasFix:!0,mdxType:"RuleDetails"}),(0,i.kt)("p",null,"Recommends to use ",(0,i.kt)("inlineCode",{parentName:"p"},"${ClassName}_${ClassMemberName}")," pattern for ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," argument in ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl.message()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl.plural()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl.gender()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl.select()")," methods."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:intl/intl.dart';\n\nclass SomeButtonI18n {\n  static final String title1 = Intl.message(\n    'One Title',\n    name: 'SomeButtonI18n_titleOne'\n  );\n\n  final String title2 = Intl.message(\n    'Two Title',\n    name: 'titleTwo'\n  );\n\n  String get title3 => Intl.message(\n    'Three Title',\n    name: 'SomeButtonI18n_titleThree'\n  );\n\n  static String get title4 => Intl.message(\n    'Four Title',\n    name: 'SomeButtonI18n_titleFour'\n  );\n\n  String title5() => Intl.message(\n    'Five Title',\n    name: 'SomeButtonI18n_titleFive'\n  );\n\n  static String title6() {\n    return Intl.message(\n      'Six Title',\n      name: 'SomeButtonI18n_titleSix'\n     );\n  }\n}\n\nString title7() {\n  return Intl.message(\n    'Seven Title',\n    name: 'SomeButtonI18n_titleSeven'\n  );\n}\n\nString title8() => Intl.message(\n  'Eight Title',\n  name: 'titleEight'\n);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:intl/intl.dart';\n\nclass SomeButtonCorrectI18n {\n  static final int number = int.parse('1');\n\n  static final String title1 = Intl.message(\n    'One Title',\n    name: 'SomeButtonCorrectI18n_title1'\n  );\n\n  final String title2 = Intl.message(\n    'Two Title',\n    name: 'SomeButtonCorrectI18n_title2'\n  );\n\n  String get title3 => Intl.message(\n    'Three Title',\n    name: 'SomeButtonCorrectI18n_title3'\n  );\n\n  static String get title4 => Intl.message(\n    'Four Title',\n    name: 'SomeButtonCorrectI18n_title4'\n  );\n\n  String get title5 => Intl.message(\n    'Three Title',\n    name: 'SomeButtonCorrectI18n_title5'\n  );\n\n  static String get title6 => Intl.message(\n    'Four Title',\n    name: 'SomeButtonCorrectI18n_title6'\n  );\n}\n\nString title77() {\n  return Intl.message(\n    'Seven seven Title',\n    name: 'title77'\n   );\n}\n\nString title8() => Intl.message(\n  'Eight Title',\n  name: 'title8'\n);\n")))}u.isMDXComponent=!0}}]);