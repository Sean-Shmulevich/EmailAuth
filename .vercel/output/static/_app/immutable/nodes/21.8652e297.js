import{S as V,i as F,s as H,k as h,q as b,a as S,l as m,m as p,r as v,h as o,c as D,n as d,b as w,E as c,u as B,F as C}from"../chunks/index.0a5d0d14.js";function L(u){let e,r,l,s;return{c(){e=h("p"),r=b("No contract uploaded yet get in contact with the brand to Negotiatiate the terms of the deal"),l=S(),s=h("p"),this.h()},l(t){e=m(t,"P",{class:!0});var a=p(e);r=v(a,"No contract uploaded yet get in contact with the brand to Negotiatiate the terms of the deal"),a.forEach(o),l=D(t),s=m(t,"P",{}),p(s).forEach(o),this.h()},h(){d(e,"class","text-red-400 text-center font-bold text-xl w-[90%] bg-gray-700 p-5 rounded-xl border border-white sm:w-[75%]")},m(t,a){w(t,e,a),c(e,r),w(t,l,a),w(t,s,a)},p:C,d(t){t&&o(e),t&&o(l),t&&o(s)}}}function z(u){let e,r,l=u[0].deal.userDealStatus[0].contract.file_name+"",s;return{c(){e=h("a"),r=h("span"),s=b(l),this.h()},l(t){e=m(t,"A",{class:!0,href:!0,target:!0});var a=p(e);r=m(a,"SPAN",{class:!0});var _=p(r);s=v(_,l),_.forEach(o),a.forEach(o),this.h()},h(){d(r,"class","underline"),d(e,"class","text-white text-center font-bold text-xl w-[90%] bg-gray-700 p-5 rounded-xl border border-white sm:w-[75%]"),d(e,"href",u[2]),d(e,"target","_blank")},m(t,a){w(t,e,a),c(e,r),c(r,s)},p(t,a){a&1&&l!==(l=t[0].deal.userDealStatus[0].contract.file_name+"")&&B(s,l),a&4&&d(e,"href",t[2])},d(t){t&&o(e)}}}function G(u){let e,r,l,s,t,a,_=u[0].deal.authUser.email+"",g,E,U,x,N,P;function I(n,i){return n[1]?z:L}let y=I(u),f=y(u);return{c(){e=h("div"),r=h("div"),l=h("p"),s=b("Brand Email:"),t=S(),a=h("a"),g=b(_),U=S(),x=h("h2"),N=b("Uploaded Contract"),P=S(),f.c(),this.h()},l(n){e=m(n,"DIV",{class:!0});var i=p(e);r=m(i,"DIV",{class:!0});var k=p(r);l=m(k,"P",{class:!0});var A=p(l);s=v(A,"Brand Email:"),A.forEach(o),t=D(k),a=m(k,"A",{href:!0,class:!0});var j=p(a);g=v(j,_),j.forEach(o),k.forEach(o),U=D(i),x=m(i,"H2",{class:!0});var q=p(x);N=v(q,"Uploaded Contract"),q.forEach(o),P=D(i),f.l(i),i.forEach(o),this.h()},h(){d(l,"class","text-2xl text-white font-extrabold"),d(a,"href",E="mailto:"+u[0].deal.authUser.email),d(a,"class","m-full underline text-right mx-auto sm:ml-auto text-green-500 text-xl"),d(r,"class","w-[90%] flex flex-col items-center sm:flex-row bg-gray-700 p-5 rounded-xl border border-white sm:w-[75%]"),d(x,"class","font-extrabold text-2xl text-white my-5"),d(e,"class","p-10 w-full flex flex-col items-center justify-center")},m(n,i){w(n,e,i),c(e,r),c(r,l),c(l,s),c(r,t),c(r,a),c(a,g),c(e,U),c(e,x),c(x,N),c(e,P),f.m(e,null)},p(n,[i]){i&1&&_!==(_=n[0].deal.authUser.email+"")&&B(g,_),i&1&&E!==(E="mailto:"+n[0].deal.authUser.email)&&d(a,"href",E),y===(y=I(n))&&f?f.p(n,i):(f.d(1),f=y(n),f&&(f.c(),f.m(e,null)))},i:C,o:C,d(n){n&&o(e),f.d()}}}function J(u,e,r){let{data:l}=e,s,t;return l.deal.userDealStatus[0].contractId&&(s=!0,t="/api/s3object/"+l.deal.userDealStatus[0].contractId),u.$$set=a=>{"data"in a&&r(0,l=a.data)},[l,s,t]}class M extends V{constructor(e){super(),F(this,e,J,G,H,{data:0})}}export{M as component};
