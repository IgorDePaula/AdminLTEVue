(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{156:function(t,e,n){"use strict";n.r(e);var r={name:"RandomProgressBar",components:{LteProgressBar:n(62).a},data:function(){return{percent:0}},mounted:function(){var t=this;setInterval(function(){t.percent=100*Math.random()},1500)}},s=n(0),o=Object(s.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this._v("\n   "+this._s(this.percent.toFixed(2))+"% "),e("br"),this._v(" "),e("lte-progress-bar",{attrs:{percent:this.percent.toFixed(2),color:"success"}})],1)},[],!1,null,null,null);o.options.__file="RandomProgressBar.vue";e.default=o.exports}}]);