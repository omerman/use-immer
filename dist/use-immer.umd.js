!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports,require("immer"),require("react")):"function"==typeof define&&define.amd?define(["exports","immer","react"],r):r((e=e||self).useImmer={},e.immer,e.react)}(this,function(e,r,t){r=r&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r,e.useImmer=function(e){var n=t.useState(e),u=n[1];return[n[0],t.useCallback(function(e){var t;if("function"==typeof e)return new Promise(function(n){u(function(u){return t=r(u,e),n(t),t})});var n=e;return u(n),Promise.resolve(n)},[])]},e.useImmerReducer=function(e,n,u){var o=t.useMemo(function(){return r(e)},[e]);return t.useReducer(o,n,u)}});
//# sourceMappingURL=use-immer.umd.js.map
