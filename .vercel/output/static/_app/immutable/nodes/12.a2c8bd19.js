import{S as J,i as M,s as O,k as u,q as k,a as P,e as C,l as c,m as E,r as R,h as m,c as y,n as _,b as h,G as n,J as j,H as F,u as z}from"../chunks/index.6e2e1d93.js";import{e as D}from"../chunks/forms.b0509e59.js";function G(p){let s,o=p[0].message+"",r;return{c(){s=u("p"),r=k(o),this.h()},l(e){s=c(e,"P",{class:!0});var l=E(s);r=R(l,o),l.forEach(m),this.h()},h(){_(s,"class","error")},m(e,l){h(e,s,l),n(s,r)},p(e,l){l&1&&o!==(o=e[0].message+"")&&z(r,o)},d(e){e&&m(s)}}}function K(p){var x;let s,o,r,e,l,q,H,w,I,L,b,S,v,N,d,T,U,a=((x=p[0])==null?void 0:x.message)&&G(p);return{c(){s=u("h1"),o=k("Reset password"),r=P(),e=u("form"),l=u("label"),q=k("New password"),H=P(),w=u("p"),I=k("Password must be at least 8 characters long"),L=P(),b=u("input"),S=P(),v=u("input"),N=P(),a&&a.c(),d=C(),this.h()},l(t){s=c(t,"H1",{});var i=E(s);o=R(i,"Reset password"),i.forEach(m),r=y(t),e=c(t,"FORM",{method:!0});var f=E(e);l=c(f,"LABEL",{for:!0});var A=E(l);q=R(A,"New password"),A.forEach(m),H=y(f),w=c(f,"P",{});var B=E(w);I=R(B,"Password must be at least 8 characters long"),B.forEach(m),L=y(f),b=c(f,"INPUT",{id:!0,name:!0}),S=y(f),v=c(f,"INPUT",{type:!0}),f.forEach(m),N=y(t),a&&a.l(t),d=C(),this.h()},h(){_(l,"for","new-password"),_(b,"id","new-password"),_(b,"name","new-password"),_(v,"type","submit"),v.value="Reset password",_(e,"method","post")},m(t,i){h(t,s,i),n(s,o),h(t,r,i),h(t,e,i),n(e,l),n(l,q),n(e,H),n(e,w),n(w,I),n(e,L),n(e,b),n(e,S),n(e,v),h(t,N,i),a&&a.m(t,i),h(t,d,i),T||(U=j(D.call(null,e)),T=!0)},p(t,[i]){var f;(f=t[0])!=null&&f.message?a?a.p(t,i):(a=G(t),a.c(),a.m(d.parentNode,d)):a&&(a.d(1),a=null)},i:F,o:F,d(t){t&&m(s),t&&m(r),t&&m(e),t&&m(N),a&&a.d(t),t&&m(d),T=!1,U()}}}function Q(p,s,o){let{form:r}=s;return p.$$set=e=>{"form"in e&&o(0,r=e.form)},[r]}class X extends J{constructor(s){super(),M(this,s,Q,K,O,{form:0})}}export{X as component};