import r from"immer";import{useState as n,useCallback as t,useMemo as o,useReducer as u}from"react";function e(o){var u=n(o),e=u[1];return[u[0],t(function(n){var t;if("function"==typeof n)return e(function(o){return t=r(o,n)}),t;var o=n;return e(o),o},[])]}function f(n,t,e){var f=o(function(){return r(n)},[n]);return u(f,t,e)}export{e as useImmer,f as useImmerReducer};
//# sourceMappingURL=use-immer.module.js.map
