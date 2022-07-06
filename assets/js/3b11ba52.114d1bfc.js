"use strict";(self.webpackChunkkmm_icerock_dev=self.webpackChunkkmm_icerock_dev||[]).push([[4231],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=i,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,o(o({ref:t},s),{},{components:r})):n.createElement(d,o({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67254:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(83117),i=r(80102),a=(r(67294),r(3905)),o=["components"],l={sidebar_position:3},c="\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435",p={unversionedId:"push-notifications/practiece",id:"push-notifications/practiece",title:"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435",description:"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0438 \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0439\u0442\u0435 Firebase Cloud Messaging \u043d\u0430 iOS \u0438 Android.",source:"@site/university/10-push-notifications/practiece.md",sourceDirName:"10-push-notifications",slug:"/push-notifications/practiece",permalink:"/university/push-notifications/practiece",draft:!1,editUrl:"https://github.com/icerockdev/kmm.icerock.dev/tree/docusaurus/university/10-push-notifications/practiece.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"\u0422\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",permalink:"/university/push-notifications/testing"},next:{title:"Best Practices",permalink:"/university/memos/best-practices"}},s={},u=[{value:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",id:"\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435-\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f",level:2},{value:"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b",id:"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b",level:2}],m={toc:u};function f(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435-\u0437\u0430\u0434\u0430\u043d\u0438\u0435"},"\u041f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435"),(0,a.kt)("p",null,"\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0435 \u0438 \u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0439\u0442\u0435 ",(0,a.kt)("inlineCode",{parentName:"p"},"Firebase Cloud Messaging")," \u043d\u0430 iOS \u0438 Android.  "),(0,a.kt)("p",null,"\u0412\u043e \u0432\u0440\u0435\u043c\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0430\u0434 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u043c \u0437\u0430\u0434\u0430\u043d\u0438\u0435\u043c \u043d\u0430\u0441\u0442\u043e\u044f\u0442\u0435\u043b\u044c\u043d\u043e \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0443\u0435\u043c \u043e\u0431\u0440\u0430\u0449\u0430\u0442\u044c\u0441\u044f \u043a \u0440\u0430\u0437\u0434\u0435\u043b\u0443 ",(0,a.kt)("a",{parentName:"p",href:"../../university/memos/best-practices"},"\u041f\u0430\u043c\u044f\u0442\u043a\u0438 \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430")),(0,a.kt)("p",null,"\u041f\u043e\u0440\u044f\u0434\u043e\u043a \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,a.kt)("inlineCode",{parentName:"li"},"Kotlin Multiplatform Mobile plugin")),(0,a.kt)("li",{parentName:"ul"},"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0435 Android-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043a Firebase"),(0,a.kt)("li",{parentName:"ul"},"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u0442\u0435 iOS-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043a Firebase. Firebase \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0439\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f ",(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/ios/installation-methods#cocoapods"},"cocoapods")),(0,a.kt)("li",{parentName:"ul"},"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 FCM \u0432 Android-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438"),(0,a.kt)("li",{parentName:"ul"},"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u0442\u0435 FCM \u0432 iOS-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438"),(0,a.kt)("li",{parentName:"ul"},"\u043f\u0440\u043e\u0442\u0435\u0441\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Firebase Console"),(0,a.kt)("li",{parentName:"ul"},"Postman")))),(0,a.kt)("h2",{id:"\u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435-\u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"},"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"iOS \u0438 Android \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u044c \u043f\u0443\u0448\u0438, \u0434\u0430\u0436\u0435 \u0435\u0441\u043b\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441\u0432\u0435\u0440\u043d\u0443\u0442\u043e")),(0,a.kt)("h2",{id:"\u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b"},"\u041c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://kotlinlang.org/docs/multiplatform-mobile-create-first-app.html"},"Create your first cross-platform mobile app \u2013 tutorial"),"  "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/android/setup"},"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")," Android \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043a Firebase"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/ios/setup"},"\u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435")," iOS \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043a Firebase"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/cloud-messaging/android/client"},"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430")," FCM \u0432 Android \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/cloud-messaging/ios/client"},"\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430")," FCM \u0432 iOS \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0438",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://drive.google.com/file/d/1PetTvRcQguLAFBYz07to-Bh43nr7K0ok/view?usp=sharing"},"APNs key")," (\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0434\u043b\u044f IceRock Development)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0430\u0439\u043b\u0430 APNs \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 KeyID \u0438 TeamID: AuthKey_mobiledevelopment_KeyID(TeamID) "))),(0,a.kt)("li",{parentName:"ul"},"\u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u043d\u0435\u0442 \u043a\u043b\u044e\u0447\u0430, \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u0435\u0433\u043e \u0432 \u0441\u0432\u043e\u0435\u043c ",(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/membercenter/index.action"},"Apple Developer Member Center"))))))}f.isMDXComponent=!0}}]);