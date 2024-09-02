!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ReactItemsCarousel=t():e.ReactItemsCarousel=t()}("undefined"!=typeof self?self:this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react")},function(e,t){e.exports=require("lodash.min")},function(e,t){e.exports=require("styled-components")},function(e,t){e.exports=require("lodash.max")},function(e,t){e.exports=require("react-motion")},function(e,t){e.exports=require("react-measure")},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),i=r(2),a=r.n(i),u=r(4),c=r.n(u),l=function(e){return 2*e.gutter},s=function(e){return e.gutter},f=function(e){var t=e.containerWidth,r=e.gutter,n=e.numberOfCards,o=e.firstAndLastGutter,i=r*(n-1);return e.showSlither&&(i+=2*s({gutter:r})),o&&(i+=l({gutter:r})),(t-i)/n},p=function(e){var t=e.index,r=e.firstAndLastGutter,n=e.gutter;return 0===t?r?l({gutter:n}):0:n/2},d=function(e){var t=e.index,r=e.firstAndLastGutter,n=e.gutter;return t===e.numberOfChildren-1?r?l({gutter:n}):0:n/2},h=function(e){var t,r=e.activeItemIndex,n=e.activePosition,o=e.containerWidth,i=e.numberOfChildren,a=e.numberOfCards,u=e.gutter,c=e.firstAndLastGutter,p=e.showSlither,d=e.infiniteLoop,h=r;if("center"===n&&(h-=Math.floor(a/2)),"right"===n&&(h-=a-1),(t={numberOfChildren:i,numberOfCards:a}).numberOfChildren<t.numberOfCards)return 0;if(!d&&h<=0)return 0;if(!d&&h>i-a)return function(e){e.activeItemIndex,e.activePosition;var t=e.containerWidth,r=e.numberOfChildren,n=e.numberOfCards,o=e.gutter,i=e.firstAndLastGutter,a=e.showSlither,u=r-n,c=f({containerWidth:t,gutter:o,numberOfCards:n,firstAndLastGutter:i,showSlither:a})*u+o*u;return i&&!a&&(c+=l({gutter:o})),c}({activeItemIndex:h,activePosition:n,containerWidth:o,numberOfChildren:i,numberOfCards:a,gutter:u,firstAndLastGutter:c,showSlither:p});var m=f({containerWidth:o,gutter:u,numberOfCards:a,firstAndLastGutter:c,showSlither:p})*h+u*h;return p&&(m-=s({gutter:u})),c&&(m+=u),m},m=function(e){var t=e.activeItemIndex,r=e.activePosition,n=e.numberOfCards,o=e.numberOfChildren,i=e.slidesToScroll;return!(o<=n)&&v({activeItemIndex:t,activePosition:r,numberOfCards:n,numberOfChildren:o,slidesToScroll:i})>t},b=function(e){var t=e.activeItemIndex,r=e.activePosition,n=e.numberOfCards,o=e.numberOfChildren,i=e.slidesToScroll;return!(o<=n)&&y({activeItemIndex:t,activePosition:r,numberOfCards:n,numberOfChildren:o,slidesToScroll:i})<t},v=function(e){var t=e.activePosition,r=e.activeItemIndex,n=e.numberOfChildren,o=e.numberOfCards,i=e.slidesToScroll;switch(t){case"right":return c()([a()([r+i,n-1]),o]);case"center":return c()([a()([r+i,Math.floor(n-o/2)]),Math.floor(o/2)+1]);case"left":return a()([r+i,n-o])}},y=function(e){var t=e.activePosition,r=e.activeItemIndex,n=e.numberOfCards,o=e.numberOfChildren,i=e.slidesToScroll;switch(t){case"right":return c()([a()([r-i,o-1]),n-1]);case"center":return c()([a()([r-i,Math.floor(o-n/2)-1]),Math.floor(n/2)]);case"left":return a()([c()([r-i,0]),o-n-1])}};function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}function w(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function S(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,j(n.key),n)}}function C(e,t,r){return t=P(t),function(e,t){if(t&&("object"==O(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,function(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return function(){return!!e}()}()?Reflect.construct(t,r||[],P(e).constructor):t.apply(e,r))}function P(e){return(P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t){return(I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function T(e,t,r){return(t=j(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e){var t=function(e,t){if("object"!=O(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=O(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==O(t)?t:t+""}var x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e&&e.length>0?e[0].clientX:t},W=r(6),A=r.n(W);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(){return(_=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}function L(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,G(n.key),n)}}function G(e){var t=function(e,t){if("object"!=E(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=E(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==E(t)?t:t+""}function M(e,t,r){return t=X(t),function(e,t){if(t&&("object"==E(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,function(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return function(){return!!e}()}()?Reflect.construct(t,r||[],X(e).constructor):t.apply(e,r))}function X(e){return(X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function q(e,t){return(q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var k,D,N,B,U,z,F,H=r(5),$=r(3),J=r.n($),K=r(0),Q=r.n(K),V={children:Q.a.arrayOf(Q.a.element).isRequired,numberOfCards:Q.a.number,gutter:Q.a.number,showSlither:Q.a.bool,firstAndLastGutter:Q.a.bool,enablePlaceholder:Q.a.bool,placeholderItem:Q.a.element,numberOfPlaceholderItems:Q.a.number,requestToChangeActive:Q.a.func.isRequired,activeItemIndex:Q.a.number.isRequired,activePosition:Q.a.oneOf(["left","center","right"]),rightChevron:Q.a.oneOfType([Q.a.element,Q.a.string]),leftChevron:Q.a.oneOfType([Q.a.element,Q.a.string]),chevronWidth:Q.a.number,outsideChevron:Q.a.bool,alwaysShowChevrons:Q.a.bool,slidesToScroll:Q.a.number,disableSwipe:Q.a.bool,springConfig:Q.a.shape({stiffness:Q.a.number,damping:Q.a.number,precision:Q.a.number}),onActiveStateChange:Q.a.func,classes:Q.a.shape({wrapper:Q.a.string,itemsWrapper:Q.a.string,itemsInnerWrapper:Q.a.string,itemWrapper:Q.a.string,rightChevronWrapper:Q.a.string,leftChevronWrapper:Q.a.string}),infiniteLoop:Q.a.bool,calculateActualTranslateX:Q.a.func};function Y(e){return(Y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){ae(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function te(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function re(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,ue(n.key),n)}}function ne(e,t,r){return t=oe(t),function(e,t){if(t&&("object"==Y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,function(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return function(){return!!e}()}()?Reflect.construct(t,r||[],oe(e).constructor):t.apply(e,r))}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ie(e,t){return(ie=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function ae(e,t,r){return(t=ue(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ue(e){var t=function(e,t){if("object"!=Y(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=Y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==Y(t)?t:t+""}function ce(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var le=J.a.div(k||(k=ce(["\n  position: relative;\n  ","\n"])),(function(e){return e.height&&"height: ".concat(e.height,"px;")})),se=J.a.div(D||(D=ce(["\n  width: 100%;\n  overflow-x: hidden;\n"]))),fe=J.a.div(N||(N=ce(["\n  width: 100%;\n  display: flex;\n  flex-wrap: nowrap;\n"]))),pe=J.a.div(B||(B=ce(["\n  width: ","px;\n  flex-shrink: 0;\n  margin-right: ","px;\n  margin-left: ","px;\n"])),(function(e){return e.width}),(function(e){return e.rightGutter}),(function(e){return e.leftGutter})),de=J.a.div(U||(U=ce(["\n  position: absolute;\n  height: 100%;\n  width: ","px;\n  cursor: pointer;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"])),(function(e){return e.chevronWidth+1})),he=J()((function(e){return o.a.createElement(de,e)}))(z||(z=ce(["\n  right: -","px;\n"])),(function(e){return e.outsideChevron?e.chevronWidth:0})),me=J()((function(e){return o.a.createElement(de,e)}))(F||(F=ce(["\n  left: -","px;\n"])),(function(e){return e.outsideChevron?e.chevronWidth:0})),be=function(e){function t(){var e;te(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return ae(e=ne(this,t,[].concat(n)),"getScrollState",(function(){var t=e.props,r=t.numberOfCards,n=t.activeItemIndex,o=t.activePosition,i=t.slidesToScroll,a=t.items;return{isLastScroll:!m({activeItemIndex:n,activePosition:o,numberOfChildren:a.length,numberOfCards:r,slidesToScroll:i}),isFirstScroll:!b({activeItemIndex:n,activePosition:o,numberOfChildren:a.length,numberOfCards:r,slidesToScroll:i})}})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&ie(e,t)}(t,e),r=t,(n=[{key:"componentDidUpdate",value:function(e){this.props.onActiveStateChange&&this.props.activeItemIndex!==e.activeItemIndex&&this.props.onActiveStateChange(ee({},this.getScrollState()))}},{key:"renderList",value:function(e){var t=e.items,r=e.translateX,n=e.containerWidth,i=e.measureRef,a=this.props,u=a.gutter,c=a.numberOfCards,l=a.firstAndLastGutter,s=a.showSlither,h=a.classes,m=(0,a.calculateActualTranslateX)(r);return o.a.createElement(se,{className:h.itemsWrapper},o.a.createElement(fe,{ref:i,style:{transform:"translateX(".concat(-1*m,"px)")},className:h.itemsInnerWrapper},t.map((function(e,r){return o.a.createElement(pe,{key:r,className:h.itemWrapper,width:f({firstAndLastGutter:l,containerWidth:n,gutter:u,numberOfCards:c,showSlither:s}),leftGutter:p({index:r,firstAndLastGutter:l,gutter:u}),rightGutter:d({index:r,firstAndLastGutter:l,gutter:u,numberOfChildren:t.length})},e)}))))}},{key:"render",value:function(){var e=this,t=this.props,r=t.containerWidth,n=t.measureRef,i=t.touchRelativeX,a=t.onWrapperTouchStart,u=t.onWrapperTouchEnd,c=t.onWrapperTouchMove,l=(t.gutter,t.numberOfCards,t.firstAndLastGutter,t.activePosition,t.springConfig),s=(t.showSlither,t.rightChevron),f=t.leftChevron,p=t.chevronWidth,d=t.outsideChevron,h=t.requestToChangeActive,m=(t.slidesToScroll,t.alwaysShowChevrons),b=t.classes,v=t.items,y=t.activeItemTranslateX,O=t.nextItemIndex,g=t.previousItemIndex,w=this.getScrollState(),S=w.isFirstScroll,C=w.isLastScroll,P=s&&(m||!C),I=f&&(m||!S);return o.a.createElement(le,{onTouchStart:a,onTouchEnd:u,onTouchMove:c,className:b.wrapper},o.a.createElement(H.Motion,{defaultStyle:{translateX:y},style:{translateX:Object(H.spring)(y+i,l)},children:function(t){var o=t.translateX;return e.renderList({items:v,measureRef:n,containerWidth:r,translateX:o})}}),P&&o.a.createElement(he,{chevronWidth:p,outsideChevron:d,className:b.rightChevronWrapper,onClick:function(){return h(O)}},s),I&&o.a.createElement(me,{chevronWidth:p,outsideChevron:d,className:b.leftChevronWrapper,onClick:function(){return h(g)}},f))}}])&&re(r.prototype,n),i&&re(r,i),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n,i}(o.a.Component);be.defaultProps={onWrapperTouchStart:null,onWrapperTouchEnd:null,onWrapperTouchMove:null},be.propTypes=ee(ee({},V),{},{items:Q.a.arrayOf(Q.a.node).isRequired,activeItemTranslateX:Q.a.number.isRequired,nextItemIndex:Q.a.number.isRequired,previousItemIndex:Q.a.number.isRequired,containerWidth:Q.a.number.isRequired,measureRef:Q.a.oneOfType([Q.a.func,Q.a.shape({current:Q.a.object})]).isRequired,touchRelativeX:Q.a.number.isRequired,onWrapperTouchStart:Q.a.func,onWrapperTouchEnd:Q.a.func,onWrapperTouchMove:Q.a.func});var ve=be;function ye(e){return(ye="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Oe(){return(Oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}function ge(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,Ie(n.key),n)}}function we(e,t,r){return t=Se(t),function(e,t){if(t&&("object"==ye(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,function(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return function(){return!!e}()}()?Reflect.construct(t,r||[],Se(e).constructor):t.apply(e,r))}function Se(e){return(Se=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ce(e,t){return(Ce=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function Pe(e,t,r){return(t=Ie(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Ie(e){var t=function(e,t){if("object"!=ye(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=ye(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==ye(t)?t:t+""}function Te(){return(Te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var je=function(){return function(e){return function(t){var r=t.children,n=t.activeItemIndex,i=t.activePosition,a=t.containerWidth,u=t.numberOfCards,c=t.slidesToScroll,l=t.gutter,s=t.firstAndLastGutter,f=t.showSlither,p=o.a.Children.toArray(r);return o.a.createElement(e,Te({},t,{items:p,nextItemIndex:v({activePosition:i,activeItemIndex:n,numberOfCards:u,slidesToScroll:c,numberOfChildren:p.length}),previousItemIndex:y({activePosition:i,activeItemIndex:n,numberOfCards:u,slidesToScroll:c,numberOfChildren:p.length}),activeItemTranslateX:h({activeItemIndex:n,activePosition:i,containerWidth:a,numberOfChildren:p.length,numberOfCards:u,gutter:l,firstAndLastGutter:s,showSlither:f})}))}}};function xe(e){return function(e){if(Array.isArray(e))return We(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return We(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?We(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function We(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var Ae=function(e){var t=e.activeItemIndex,r=e.activePosition,n=e.containerWidth,o=e.numberOfChildren,i=e.numberOfCards,a=e.gutter,u=e.firstAndLastGutter,c=e.showSlither;return h({activeItemIndex:t,activePosition:r,containerWidth:n,numberOfChildren:o,numberOfCards:i,gutter:a,firstAndLastGutter:u,showSlither:c,infiniteLoop:!0})},Ee=function(e,t){var r=t.numberOfCards;return[].concat(xe(e.slice(e.length-r)),xe(e),xe(e.slice(0,r)))},_e=function(e){return e.activeItemIndex-e.slidesToScroll},Le=function(e){return e.activeItemIndex+e.slidesToScroll},Re=function(e){var t=e.activeItemIndex;e.numberOfCards;return t},Ge=Ae,Me=function(e,t,r){var n=r.activePosition,o=r.containerWidth,i=r.numberOfCards,a=r.gutter,u=r.firstAndLastGutter,c=r.showSlither,l=Ae({numberOfChildren:e.length,activeItemIndex:e.length-2*i,activePosition:n,containerWidth:o,numberOfCards:i,gutter:a,firstAndLastGutter:u,showSlither:c}),s=t%l+Ae({numberOfChildren:e.length,activeItemIndex:i,activePosition:n,containerWidth:o,numberOfCards:i,gutter:a,firstAndLastGutter:u,showSlither:c});return s<=0?l-Math.abs(s):s};function Xe(){return(Xe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}var qe=function(){return function(e){return function(t){var r=t.calculateActualTranslateX,n=t.numberOfCards,i=t.activeItemIndex,a=(t.numberOfChildren,t.slidesToScroll),u=t.containerWidth,c=t.gutter,l=t.firstAndLastGutter,s=t.showSlither,f=t.children,p=Ee(o.a.Children.toArray(f),{numberOfCards:n}),d=Re({activeItemIndex:i,numberOfCards:n}),h=_e({activeItemIndex:d,slidesToScroll:a}),m=Le({activeItemIndex:d,slidesToScroll:a}),b=Ge({activeItemIndex:d,activePosition:"left",containerWidth:u,numberOfChildren:p.length,numberOfCards:n,gutter:c,firstAndLastGutter:l,showSlither:s});return o.a.createElement(e,Xe({},t,{alwaysShowChevrons:!0,activePosition:"left",items:p,previousItemIndex:h,nextItemIndex:m,activeItemIndex:d,activeItemTranslateX:b,calculateActualTranslateX:function(e){var t=Me(p,e,{activePosition:"left",containerWidth:u,numberOfCards:n,gutter:c,firstAndLastGutter:l,showSlither:s});return r(t)}}))}}},ke=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduce((function(e,t){return t(e)}),e)}}((function(e){return function(t){function r(){var e;w(this,r);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return T(e=C(this,r,[].concat(n)),"state",{startTouchX:0,currentTouchX:0}),T(e,"onWrapperTouchStart",(function(t){var r=x(t.touches);e.setState({startTouchX:r,currentTouchX:r})})),T(e,"onWrapperTouchEnd",(function(t){var r=e.props,n=r.containerWidth,o=r.gutter,i=r.numberOfCards,a=r.firstAndLastGutter,u=r.showSlither,c=r.requestToChangeActive,l=r.activeItemIndex,s=f({containerWidth:n,gutter:o,numberOfCards:i,firstAndLastGutter:a,showSlither:u}),p=x(t.changedTouches),d=e.state.startTouchX-p,h=Math.floor(Math.abs(d)/(s+o/2)+.75);h>0&&c(d<0?l-h:l+h),e.setState({startTouchX:0,currentTouchX:0})})),T(e,"onWrapperTouchMove",(function(t){e.setState({currentTouchX:x(t.touches)})})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(r,t),n=r,(i=[{key:"render",value:function(){var t=this.props,r=t.disableSwipe,n=t.isPlaceholderMode,i=this.state,a=i.startTouchX,u=i.currentTouchX;return r||n?o.a.createElement(e,g({},this.props,{touchRelativeX:0})):o.a.createElement(e,g({},this.props,{onWrapperTouchStart:this.onWrapperTouchStart,onWrapperTouchEnd:this.onWrapperTouchEnd,onWrapperTouchMove:this.onWrapperTouchMove,touchRelativeX:a-u}))}}])&&S(n.prototype,i),a&&S(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,i,a}(o.a.Component)}),(function(e){return function(t){function r(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),Pe(t=we(this,r,[e]),"startPlaceholderMinimumTimer",(function(){t.props.minimumPlaceholderTime&&(t.placeholderTimer=setTimeout((function(){t.placeholderTimer=null,o.a.Children.count(t.props.children)>0&&t.setState({isPlaceholderMode:!1})}),t.props.minimumPlaceholderTime))})),Pe(t,"getPlaceholderItems",(function(){var e=t.props,r=e.placeholderItem,n=e.numberOfPlaceholderItems;return Array.from(Array(n)).map((function(e){return r}))})),t.state={isPlaceholderMode:t.props.enablePlaceholder&&0===o.a.Children.count(t.props.children)},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Ce(e,t)}(r,t),n=r,(i=[{key:"componentDidMount",value:function(){this.startPlaceholderMinimumTimer()}},{key:"componentWillUnmount",value:function(){this.placeholderTimer&&clearTimeout(this.placeholderTimer)}},{key:"componentDidUpdate",value:function(e){o.a.Children.count(this.props.children)>0&&0===o.a.Children.count(e.children)&&!this.placeholderTimer&&this.state.isPlaceholderMode&&this.setState({isPlaceholderMode:!1})}},{key:"render",value:function(){return o.a.createElement(e,Oe({},this.props,{items:this.state.isPlaceholderMode?this.getPlaceholderItems():this.props.items}))}}])&&ge(n.prototype,i),a&&ge(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,i,a}(o.a.Component)}),(function(e){return function(t){var r=o.a.Children.toArray(t.children).length>=t.numberOfCards;return t.infiniteLoop&&r?qe()(e)(t):je()(e)(t)}}),(function(e){return function(t){function r(){return L(this,r),M(this,r,arguments)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&q(e,t)}(r,t),n=r,(i=[{key:"render",value:function(){var t=this;return o.a.createElement(A.a,{bounds:!0,margin:!1,whitelist:["width","height"]},(function(r){var n=r.measureRef,i=r.contentRect;return o.a.createElement(e,_({},t.props,{measureRef:n,containerWidth:i.bounds.width||0,containerHeight:i.bounds.height||0}))}))}}])&&R(n.prototype,i),a&&R(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,i,a}(o.a.Component)}))(ve);ke.propTypes=V,ke.defaultProps={numberOfCards:3,gutter:0,disableSwipe:!1,firstAndLastGutter:!1,showSlither:!1,enablePlaceholder:!1,activePosition:"left",slidesToScroll:1,placeholderItem:null,numberOfPlaceholderItems:0,rightChevron:null,leftChevron:null,onActiveStateChange:null,alwaysShowChevrons:!1,classes:{},infiniteLoop:!1,calculateActualTranslateX:function(e){return e}};t.default=ke}])}));