import t from"immer";import{useState as r,useCallback as n,useMemo as o,useReducer as e}from"react";function c(o){const[e,c]=r(o);return[e,n(r=>{if("function"==typeof r){let n;return c(o=>(n=t(o,r),n)),n}{const t=r;return c(t),t}},[])]}function f(r,n,c){const f=o(()=>t(r),[r]);return e(f,n,c)}export{c as useImmer,f as useImmerReducer};
//# sourceMappingURL=use-immer.modern.js.map
