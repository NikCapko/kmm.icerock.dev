"use strict";(self.webpackChunkkmm_icerock_dev=self.webpackChunkkmm_icerock_dev||[]).push([[1195],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var i=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=i.createContext({}),d=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=d(e.components);return i.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(t),k=l,s=u["".concat(p,".").concat(k)]||u[k]||m[k]||a;return t?i.createElement(s,r(r({ref:n},c),{},{components:t})):i.createElement(s,r({ref:n},c))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,r=new Array(a);r[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var d=2;d<a;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},81382:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return m}});var i=t(83117),l=t(80102),a=(t(67294),t(3905)),r=["components"],o={},p="Xcode: Tips and Tricks",d={unversionedId:"ios/tips_and_tricks",id:"ios/tips_and_tricks",title:"Xcode: Tips and Tricks",description:"\u041a\u0443\u0440\u0441\u043e\u0440:",source:"@site/learning/ios/tips_and_tricks.md",sourceDirName:"ios",slug:"/ios/tips_and_tricks",permalink:"/learning/ios/tips_and_tricks",draft:!1,editUrl:"https://github.com/icerockdev/kmm.icerock.dev/tree/docusaurus/learning/ios/tips_and_tricks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u0421\u0442\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0438 \u0434\u0438\u043d\u0430\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438/\u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0438 \u0432 iOS",permalink:"/learning/ios/static-dynamic-libs"},next:{title:"Xcode - environment variables",permalink:"/learning/ios/xcode-environment-variables"}},c={},m=[{value:"\u041a\u0443\u0440\u0441\u043e\u0440:",id:"\u043a\u0443\u0440\u0441\u043e\u0440",level:2},{value:"\u0412\u043b\u043e\u0436\u0435\u043d\u0438\u0435 / \u0422\u0435\u043a\u0441\u0442:",id:"\u0432\u043b\u043e\u0436\u0435\u043d\u0438\u0435--\u0442\u0435\u043a\u0441\u0442",level:2},{value:"\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f:",id:"\u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f",level:2},{value:"\u0420\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433:",id:"\u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433",level:2},{value:"\u0421\u0438\u043c\u0443\u043b\u044f\u0442\u043e\u0440:",id:"\u0441\u0438\u043c\u0443\u043b\u044f\u0442\u043e\u0440",level:2},{value:"\u0420\u0430\u0437\u043d\u043e\u0435:",id:"\u0440\u0430\u0437\u043d\u043e\u0435",level:2},{value:"\u0411\u0438\u043b\u0434:",id:"\u0431\u0438\u043b\u0434",level:2},{value:"\u0410\u0441\u0441\u0435\u0442\u044b:",id:"\u0430\u0441\u0441\u0435\u0442\u044b",level:2}],u={toc:m};function k(e){var n=e.components,o=(0,l.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"xcode-tips-and-tricks"},"Xcode: Tips and Tricks"),(0,a.kt)("h2",{id:"\u043a\u0443\u0440\u0441\u043e\u0440"},"\u041a\u0443\u0440\u0441\u043e\u0440:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Shift")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"Control")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"\u041a\u043b\u0438\u043a")," \u0432 \u043d\u0443\u0436\u043d\u043e\u0435 \u043c\u0435\u0441\u0442\u043e \u0432 \u043a\u043e\u0434\u0435:\n\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043a\u0443\u0440\u0441\u043e\u0440 \u0441 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435 \u043d\u0443\u0436\u043d\u044b\u0435 \u043c\u0435\u0441\u0442\u0430 "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"\u043f\u0440\u043e\u0432\u0435\u0441\u0442\u0438 \u0437\u0430\u0436\u0430\u0442\u043e\u0439 \u043c\u044b\u0448\u043a\u043e\u0439 / \u0442\u0430\u0447\u043f\u0430\u0434\u043e\u043c \u0432\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u043e \u043f\u043e \u0441\u0442\u0440\u043e\u043a\u0430\u043c \u043a\u043e\u0434\u0430"),":\n\u041c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u043a\u0443\u0440\u0441\u043e\u0440 \u043f\u043e\u0434\u0440\u044f\u0434 \u043f\u043e \u0432\u0441\u0435\u043c \u0441\u0442\u0440\u043e\u043a\u0430\u043c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"Shift")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"\u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0432\u043b\u0435\u0432\u043e / \u0432\u043f\u0440\u0430\u0432\u043e"),":\n\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u0430 \u043f\u043e\u0441\u043b\u043e\u0432\u043d\u043e "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Cmd")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"Shift")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"\u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u0432\u043b\u0435\u0432\u043e / \u0432\u043f\u0440\u0430\u0432\u043e"),":\n\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u0430 \u043f\u043e\u0441\u0442\u0440\u043e\u0447\u043d\u043e"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Alt")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u043e\u0431\u043b\u0430\u0441\u0442\u0438"),":\n\u0412\u044b\u0434\u0435\u043b\u044f\u0435\u0442 \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u0443\u044e \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u043a\u043e\u0434\u0430 \u0431\u0435\u0437 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0435\u0439 \u0441\u0442\u0440\u043e\u043a\u0438")),(0,a.kt)("h2",{id:"\u0432\u043b\u043e\u0436\u0435\u043d\u0438\u0435--\u0442\u0435\u043a\u0441\u0442"},"\u0412\u043b\u043e\u0436\u0435\u043d\u0438\u0435 / \u0422\u0435\u043a\u0441\u0442:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"\u0417\u0430\u043a\u0440\u044b\u0432\u0430\u044e\u0449\u0430\u044f / \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u044e\u0449\u0430\u044f \u043a\u0440\u0443\u0433\u043b\u0430\u044f \u0441\u043a\u043e\u0431\u043a\u0430"),":\n\u041e\u0431\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u0432 \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"\u041a\u0430\u0432\u044b\u0447\u043a\u0438"),":\n\u041e\u0431\u043e\u0440\u0430\u0447\u0438\u0432\u0430\u0435\u0442 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u0442\u0435\u043a\u0441\u0442 \u0432 \u043a\u0430\u0432\u044b\u0447\u043a\u0438"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0442\u0435\u043a\u0441\u0442")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"\u0417\u0430\u043a\u0440\u044b\u0432\u0430\u044e\u0449\u0430\u044f / \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u044e\u0449\u0430\u044f \u0444\u0438\u0433\u0443\u0440\u043d\u0430\u044f \u0441\u043a\u043e\u0431\u043a\u0430"),":\n\u041f\u043e\u043c\u0435\u0449\u0430\u0435\u0442 \u043a\u043e\u0434 \u0432\u043d\u0443\u0442\u0440\u044c \u0444\u0438\u0433\u0443\u0440\u043d\u044b\u0445 \u0441\u043a\u043e\u0431\u043e\u043a"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Control")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"I"),":\n\u0412\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u043d\u0438\u0435 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0442\u0435\u043a\u0441\u0442\u0430 (\u0432\u044b\u0440\u0430\u0432\u043d\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u043e\u0442\u0441\u0442\u0443\u043f\u044b \u043f\u043e \u043e\u0441\u0438 x, \u043d\u044c\u044e\u043b\u0430\u0439\u043d\u044b \u043d\u0435 \u0438\u0441\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u041a\u043b\u0438\u043a \u043d\u0430 \u0437\u0430\u043a\u0440\u044b\u0432\u0430\u044e\u0449\u0443\u044e \u0441\u043a\u043e\u0431\u043a\u0443")," (\u0444\u0438\u0433\u0443\u0440\u043d\u0443\u044e / \u043a\u0440\u0443\u0433\u043b\u0443\u044e):\n\u041f\u043e\u0434\u0441\u0432\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u044e\u0449\u0443\u044e, \u0438 \u043d\u0430\u043e\u0431\u043e\u0440\u043e\u0442"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u0414\u0432\u043e\u0439\u043d\u043e\u0439 \u043a\u043b\u0438\u043a \u043f\u043e \u0437\u0430\u043a\u0440\u044b\u0432\u0430\u044e\u0449\u0435\u0439 \u0438\u043b\u0438 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u044e\u0449\u0435\u0439 \u0441\u043a\u043e\u0431\u043a\u0435"),":\n\u0412\u044b\u0434\u0435\u043b\u0430\u0435\u0442 \u0432\u0435\u0441\u044c \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 (\u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u043a\u0430\u043a \u0441 \u043a\u0440\u0443\u0433\u043b\u044b\u043c\u0438, \u0442\u0430\u043a \u0438 \u0441 \u0444\u0438\u0433\u0443\u0440\u043d\u044b\u043c\u0438 \u0441\u043a\u043e\u0431\u043a\u0430\u043c\u0438)")),(0,a.kt)("h2",{id:"\u043d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f"},"\u041d\u0430\u0432\u0438\u0433\u0430\u0446\u0438\u044f:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Shift")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"Cmd")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"J"),":\n\u0412\u044b\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0438 \u043f\u0435\u0440\u0435\u0445\u043e\u0434 \u043a \u0444\u0430\u0439\u043b\u0443, \u0432 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043c\u044b \u0441\u0435\u0439\u0447\u0430\u0441 \u043d\u0430\u0445\u043e\u0434\u0438\u043c\u0441\u044f (\u0432 \u0434\u0435\u0440\u0435\u0432\u0435 \u0444\u0430\u0439\u043b\u043e\u0432) "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Control")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"Cmd")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"J"),":\n\u041f\u0440\u043e\u0432\u0430\u043b\u0438\u0442\u044c\u0441\u044f \u0432\u043d\u0443\u0442\u0440\u044c \u043b\u044e\u0431\u043e\u0433\u043e \u0442\u0438\u043f\u0430, \u043c\u043e\u0436\u043d\u043e \u0432\u043c\u0435\u0441\u0442\u043e ",(0,a.kt)("inlineCode",{parentName:"li"},"J")," - \u043a\u043b\u0438\u043a\u043d\u0443\u0442\u044c \u043d\u0430 \u0438\u043c\u044f \u0442\u0438\u043f\u0430"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u0421\u0432\u0430\u0439\u043f \u0434\u0432\u0443\u043c\u044f \u043f\u0430\u043b\u044c\u0446\u0430\u043c\u0438 \u043f\u043e \u0442\u0440\u0435\u043a\u043f\u0430\u0434\u0443 \u0432\u043b\u0435\u0432\u043e / \u0432\u043f\u0440\u0430\u0432\u043e"),":\n\u041f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u0435 \u043f\u043e \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u0444\u0430\u0439\u043b\u043e\u0432, \u0432 \u0442.\u0447. \u043f\u043e \u0441\u0442\u0440\u043e\u043a\u0430\u043c, \u0433\u0434\u0435 \u0437\u0430\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u043b\u0438\u0441\u044c")),(0,a.kt)("h2",{id:"\u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433"},"\u0420\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u041f\u0440\u0430\u0432\u0430\u044f \u043a\u043d\u043e\u043f\u043a\u0430 \u043d\u0430 \u0438\u043c\u0435\u043d\u0438")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Refactor")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Rename"),":\n\u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0442\u0438\u043f\u0430 \u0432\u043e \u0432\u0441\u0435\u0445 \u043c\u0435\u0441\u0442\u0430\u0445 \u0443\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u044f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u0412\u044b\u0434\u0435\u043b\u0438\u0442\u044c \u0438\u043c\u044f \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 / \u0442\u0438\u043f\u0430")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Cmd")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"Control")," + ",(0,a.kt)("inlineCode",{parentName:"li"},"E"),":\n\u041f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435 \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0432\u0438\u0434\u0438\u043c\u043e\u0441\u0442\u0438 ")),(0,a.kt)("h2",{id:"\u0441\u0438\u043c\u0443\u043b\u044f\u0442\u043e\u0440"},"\u0421\u0438\u043c\u0443\u043b\u044f\u0442\u043e\u0440:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u041f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u0432 \u0441\u0438\u043c\u0443\u043b\u044f\u0442\u043e\u0440")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Debug")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Slow animation"),":\n\u0412\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043c\u0435\u0434\u043b\u0435\u043d\u043d\u0443\u044e \u0430\u043d\u0438\u043c\u0430\u0446\u0438\u044e \u0434\u043b\u044f \u0435\u0435 \u043e\u0442\u043b\u0430\u0434\u043a\u0438")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"slowAnimation",src:t(74805).Z,width:"1342",height:"602"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u0417\u0430\u0436\u0430\u0442\u044c Option")," \u043d\u0430 \u0441\u0438\u043c\u0443\u043b\u044f\u0442\u043e\u0440\u0435:\n\u0412\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0438 \u0432\u0438\u0434\u0435\u043e \u0441 \u043d\u0435\u0433\u043e (\u043a\u043d\u043e\u043f\u043a\u0430 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u0430 \u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u043d\u0430 \u0437\u0430\u043f\u0438\u0441\u044c) ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"screenRecording",src:t(8699).Z,width:"1906",height:"942"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Window")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"devices and simulators")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"connect via network"),":\n\u042d\u0442\u0430 \u0433\u0430\u043b\u043e\u0447\u043a\u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442 \u043d\u0430 \u0434\u0435\u0432\u0430\u0439\u0441\u0435 \u043f\u043e \u0441\u0435\u0442\u0438")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"connectVia",src:t(84415).Z,width:"2110",height:"440"})),(0,a.kt)("h2",{id:"\u0440\u0430\u0437\u043d\u043e\u0435"},"\u0420\u0430\u0437\u043d\u043e\u0435:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'#warning("\u0422\u0435\u043a\u0441\u0442")'),":\n\u041e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u0430\u043c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043e \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435 (\u0436\u0435\u043b\u0442\u044b\u0439 \u0432\u043e\u0441\u043a\u043b\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0437\u043d\u0430\u043a) "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'#error("\u0422\u0435\u043a\u0441\u0442")'),":\n\u041e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0432\u0430\u043c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439 \u043e \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0430\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u043a\u0430\u043a \u043e\u0448\u0438\u0431\u043a\u0430, \u0438 \u043d\u0435 \u0434\u0430\u0435\u0442 \u043a\u043e\u043c\u043f\u0438\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"warning",src:t(21557).Z,width:"1110",height:"156"})),(0,a.kt)("h2",{id:"\u0431\u0438\u043b\u0434"},"\u0411\u0438\u043b\u0434:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"defaults write com.apple.dt.Xcode ShowBuildOperationDuration YES"),":\n\u0412\u0432\u043e\u0434 \u044d\u0442\u043e\u0439 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0447\u0435\u0440\u0435\u0437 \u0442\u0435\u0440\u043c\u0438\u043d\u0430\u043b, \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043e\u0431\u0449\u0435\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u0441\u0431\u043e\u0440\u043a\u0438 \u0431\u0438\u043b\u0434\u0430 \u0432 \u0438\u043a\u0441\u043a\u043e\u0434\u0435 (\u0441\u043f\u0440\u0430\u0432\u0430 \u0441\u0432\u0435\u0440\u0445\u0443)")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"buildtime",src:t(59759).Z,width:"2240",height:"100"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Build")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Show report navigator")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Build target")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"Show timeline"),":\n\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442 \u0432\u0435\u0441\u044c \u0431\u0438\u043b\u0434 \u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u043e\u0439 \u0413\u0430\u043d\u0442\u0430")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"timeline",src:t(98761).Z,width:"3840",height:"1186"}),"\n",(0,a.kt)("img",{alt:"timeline2",src:t(36688).Z,width:"1920",height:"762"})),(0,a.kt)("h2",{id:"\u0430\u0441\u0441\u0435\u0442\u044b"},"\u0410\u0441\u0441\u0435\u0442\u044b:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"\u041f\u0435\u0440\u0435\u0445\u043e\u0434\u0438\u043c \u0432 Assets")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"\u0412\u044b\u0434\u0435\u043b\u044f\u0435\u043c \u0438\u043a\u043e\u043d\u043a\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f")," -> ",(0,a.kt)("inlineCode",{parentName:"li"},"\u0412\u043a\u043b\u044e\u0447\u0430\u0435\u043c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440 Single size"),"\n\u041f\u043e\u0441\u043b\u0435 \u044d\u0442\u043e\u0433\u043e \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0430\u0442\u044c \u043e\u0434\u043d\u043e \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 1024, \u0438 \u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u044b Xcode \u0441\u0434\u0435\u043b\u0430\u0435\u043c \u0441\u0430\u043c.\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"iconSingleSize",src:t(534).Z,width:"3012",height:"802"})),(0,a.kt)("div",{style:{textAlign:"right"}},"\u0410\u0432\u0442\u043e\u0440: ",(0,a.kt)("a",{href:"https://github.com/EvelDevel"},"@EvelDevel")))}k.isMDXComponent=!0},59759:function(e,n,t){n.Z=t.p+"assets/images/buildtime-aa2e5e16089ff382aaf3cd0fd9e36ead.jpeg"},84415:function(e,n,t){n.Z=t.p+"assets/images/connectVia-eeae033c0d60da3bc784022787817e5a.jpeg"},534:function(e,n,t){n.Z=t.p+"assets/images/iconSingleSize-69c550e18a4cfdb0530afb4c351233c9.jpeg"},8699:function(e,n,t){n.Z=t.p+"assets/images/screenRecording-5c9e072dfa58f6d0fcdecd501627cc0b.jpeg"},74805:function(e,n,t){n.Z=t.p+"assets/images/slowAnimation-359da61d35151a31bf0a74ad921b0800.jpeg"},98761:function(e,n,t){n.Z=t.p+"assets/images/timeline-1edea4027c7e26919506d1de3c1d872f.jpeg"},36688:function(e,n,t){n.Z=t.p+"assets/images/timeline2-0553945157af949b135df96239b8aa68.jpeg"},21557:function(e,n,t){n.Z=t.p+"assets/images/warning-63b6c51f3c9367a0da0690b048c08dec.jpeg"}}]);