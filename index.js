(()=>{(function(){"use strict";var C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"k-color-field-preview"},[r("div",{staticClass:"color-preview",style:"background-color:"+e.value})])},w=[];function o(e,t,r,l,a,d,h,te){var n=typeof e=="function"?e.options:e;t&&(n.render=t,n.staticRenderFns=r,n._compiled=!0),l&&(n.functional=!0),d&&(n._scopeId="data-v-"+d);var i;if(h?(i=function(s){s=s||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!s&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(s=__VUE_SSR_CONTEXT__),a&&a.call(this,s),s&&s._registeredComponents&&s._registeredComponents.add(h)},n._ssrRegister=i):a&&(i=te?function(){a.call(this,(n.functional?this.parent:this).$root.$options.shadowRoot)}:a),i)if(n.functional){n._injectStyles=i;var re=n.render;n.render=function(ne,m){return i.call(m),re(ne,m)}}else{var $=n.beforeCreate;n.beforeCreate=$?[].concat($,i):[i]}return{exports:e,options:n}}const g={props:{value:String}},c={};var y=o(g,C,w,!1,S,null,null,null);function S(e){for(let t in c)this[t]=c[t]}var k=function(){return y.exports}(),R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"k-colors-field-preview"},[r("div",{staticClass:"color-preview",style:"background-color:"+e.value})])},b=[];const j={props:{value:String}},u={};var P=o(j,R,b,!1,E,null,null,null);function E(e){for(let t in u)this[t]=u[t]}var F=function(){return P.exports}(),M=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"k-color-palette-field-preview"},e._l(e.convertedValue,function(l){return r("div",{staticClass:"color-preview",style:"background-color:"+l})}),0)},x=[];const O={props:{value:String},computed:{convertedValue(){return this.value!==null&&typeof this.value=="object"?Object.keys(this.value).map(e=>this.value[e]):[this.value]}}},_={};var T=o(O,M,x,!1,V,null,null,null);function V(e){for(let t in _)this[t]=_[t]}var A=function(){return T.exports}(),N=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"k-structure-field-preview"},[r("div",{staticClass:"structure-entries-preview"},[e._v(e._s(e.entriesString))])])},U=[];const X={props:{value:String},computed:{entriesCount(){return Object.keys(this.value).length},entriesString(){return this.entriesCount>0?this.entriesCount+this.entryString(this.entriesCount):""}},methods:{entryString(e){return e==1?" entry":" entries"}}},v={};var z=o(X,N,U,!1,W,null,null,null);function W(e){for(let t in v)this[t]=v[t]}var q=function(){return z.exports}(),B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"k-tags-field-preview",attrs:{value:e.value}},[r("div",{staticClass:"tags-preview"},e._l(e.value,function(l){return r("div",{staticClass:"tag"},[e._v(e._s(l.text))])}),0)])},D=[],se="";const G={props:{value:[Array,Object,String]}},f={};var H=o(G,B,D,!1,I,null,null,null);function I(e){for(let t in f)this[t]=f[t]}var J=function(){return H.exports}(),K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"k-multiselect-field-preview"},[r("div",{staticClass:"multiselect-entries"},e._l(e.value,function(l){return r("span",{staticClass:"multiselect-entry"},[e._v(e._s(l.text))])}),0)])},L=[];const Q={props:{value:[Array,Object,String]}},p={};var Y=o(Q,K,L,!1,Z,null,null,null);function Z(e){for(let t in p)this[t]=p[t]}var ee=function(){return Y.exports}();panel.plugin("sylvainjule/previews",{components:{"k-color-field-preview":k,"k-colors-field-preview":F,"k-color-palette-field-preview":A,"k-structure-field-preview":q,"k-tags-field-preview":J,"k-multiselect-field-preview":ee}})})();})();
