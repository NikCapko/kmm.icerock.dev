"use strict";(self.webpackChunkkmm_icerock_dev=self.webpackChunkkmm_icerock_dev||[]).push([[862],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=r,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return t?o.createElement(m,i(i({ref:n},p),{},{components:t})):o.createElement(m,i({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},53439:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var o=t(87462),r=t(63366),a=(t(67294),t(3905)),i={},c="ObjectiveC interop annotations",l={unversionedId:"kotlin-native/advanced/objc-interop-annotations",id:"kotlin-native/advanced/objc-interop-annotations",isDocsHomePage:!1,title:"ObjectiveC interop annotations",description:"\u0412 kotlinlang.slack.com \u041a\u0435\u0432\u0438\u043d \u0413\u0430\u043b\u043b\u0438\u0433\u0430\u043d \u043e\u043f\u0438\u0441\u0430\u043b \u0441\u0432\u043e\u0439 \u043e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0430\u043d\u043d\u043e\u0442\u0430\u0446\u0438\u044f\u043c\u0438 ObjC \u0438\u043d\u0442\u0435\u0440\u043e\u043f\u0430.",source:"@site/learning/kotlin-native/advanced/objc-interop-annotations.md",sourceDirName:"kotlin-native/advanced",slug:"/kotlin-native/advanced/objc-interop-annotations",permalink:"/learning/kotlin-native/advanced/objc-interop-annotations",editUrl:"https://github.com/icerockdev/kmm.icerock.dev/tree/docusaurus/learning/kotlin-native/advanced/objc-interop-annotations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kotlin/Native \u0438 LLVM",permalink:"/learning/kotlin-native/advanced/kotlin-native-llvm"},next:{title:"\u0418\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f ObjC \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 \u0432 Kotlin",permalink:"/learning/kotlin-native/objc_protocol"}},s=[],p={toc:s};function u(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"objectivec-interop-annotations"},"ObjectiveC interop annotations"),(0,a.kt)("p",null,"\u0412 ",(0,a.kt)("a",{parentName:"p",href:"https://kotlinlang.slack.com/archives/C3SGXARS6/p1627430386468200"},"kotlinlang.slack.com")," \u041a\u0435\u0432\u0438\u043d \u0413\u0430\u043b\u043b\u0438\u0433\u0430\u043d \u043e\u043f\u0438\u0441\u0430\u043b \u0441\u0432\u043e\u0439 \u043e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0430\u043d\u043d\u043e\u0442\u0430\u0446\u0438\u044f\u043c\u0438 ObjC \u0438\u043d\u0442\u0435\u0440\u043e\u043f\u0430."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Curious about "encoding" in ',(0,a.kt)("inlineCode",{parentName:"p"},"@ObjCMethod")," annotation. We've been doing some experiments with cinterop and can successfully link and call to objc methods. As a concrete example, on iOS the objc class for Crashlytics is ",(0,a.kt)("inlineCode",{parentName:"p"},"FIRCrashlytics"),". We only care about getting the global instance and logging a string, so after seeing what cinterop does, we just made this Kotlin class. It'll successfully link to the objc, and calls the methods as we expect.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'@ExternalObjCClass\nopen class FIRCrashlytics : NSObject() {\n    @ExternalObjCClass\n    companion object : NSObjectMeta(), ObjCClassOf<FIRCrashlytics> {\n        @ObjCMethod("crashlytics", "@16@0:8")\n        external fun crashlytics(): FIRCrashlytics\n    }\n\n    @ObjCMethod(selector = "log:", encoding = "v24@0:8@16")\n    open external fun log(msg: String)\n}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The encoding is a little cryptic, but you can find some references that describe it. We just copied directly from what cinterop generates. However, the encoding will be different depending on if the platform is 32 or 64 bit, with the numbers in the encoding differing by a factor of 2. If I just change the encodings to nonsense values, the calls still work, as (I'm told) if they're empty strings. Before we go on a crazy deep dive, I'm just wondering if the value has any impact in the way we're using it?")),(0,a.kt)("p",null,"\u041f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 \u043f\u0440\u0438\u043c\u0435\u0440 \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432\u0440\u0443\u0447\u043d\u0443\u044e \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u043e\u0442 \u043a\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e\n\u043d\u0443\u0436\u0435\u043d \u0432 Kotlin \u0447\u0430\u0441\u0442\u0438, \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 \u043d\u0430\u0442\u0438\u0432\u043d\u043e\u0439 ObjectiveC \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u043e\u0439. \u042d\u0442\u043e \u0430\u043b\u044c\u0442\u0435\u0440\u043d\u0430\u0442\u0438\u0432\u0430\n\u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 cInterop \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438, \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0433\u043e\u043d cInterop \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430. \u041d\u043e \u0432\u0430\u0436\u043d\u043e \u043d\u0435\n\u0437\u0430\u0431\u044b\u0432\u0430\u0442\u044c \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043b\u0438\u043d\u043a\u043e\u0432\u043a\u0443 \u0441 \u0441\u0430\u043c\u0438\u043c \u0431\u0438\u043d\u0430\u0440\u043d\u0438\u043a\u043e\u043c, \u0442\u0430\u043a \u043a\u0430\u043a \u0434\u043b\u044f \u043a\u043e\u043c\u043f\u0438\u043b\u044f\u0446\u0438\u0438 \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u043e\u0434\u0430 \u043f\u043e\u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f\n\u043b\u0438\u043d\u043a\u043e\u0432\u043a\u0430 \u0441 \u0441\u0430\u043c\u0438\u043c \u0431\u0438\u043d\u0430\u0440\u043d\u0438\u043a\u043e\u043c."))}u.isMDXComponent=!0}}]);