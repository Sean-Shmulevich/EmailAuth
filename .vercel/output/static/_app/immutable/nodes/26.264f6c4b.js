import{S as $,i as B,s as C,k as p,q as V,a as w,l as _,m as x,r as L,h as u,c as D,n as d,b as N,E as n,F as j,W as M,u as z}from"../chunks/index.0a5d0d14.js";import"../chunks/paths.fa1005e7.js";function F(f,t,s){const a=f.slice();return a[1]=t[s],a}function Q(f){let t,s;return{c(){t=p("p"),s=V("No emails were found"),this.h()},l(a){t=_(a,"P",{class:!0});var h=x(t);s=L(h,"No emails were found"),h.forEach(u),this.h()},h(){d(t,"class","my-2 text-center text-zinc-500")},m(a,h){N(a,t,h),n(t,s)},d(a){a&&u(t)}}}function U(f){let t,s,a,h,I=f[1].toAddress+"",v,m,b,S=f[1].dateSent.toLocaleString()+"",g,A,o,y=f[1].subject+"",c,E,r;return{c(){t=p("div"),s=p("div"),a=p("p"),h=V("To: "),v=V(I),m=w(),b=p("p"),g=V(S),A=w(),o=p("a"),c=V(y),r=w(),this.h()},l(e){t=_(e,"DIV",{class:!0});var i=x(t);s=_(i,"DIV",{class:!0});var l=x(s);a=_(l,"P",{});var k=x(a);h=L(k,"To: "),v=L(k,I),k.forEach(u),m=D(l),b=_(l,"P",{class:!0});var P=x(b);g=L(P,S),P.forEach(u),l.forEach(u),A=D(i),o=_(i,"A",{class:!0,href:!0});var q=x(o);c=L(q,y),q.forEach(u),r=D(i),i.forEach(u),this.h()},h(){d(b,"class","text-zinc-400"),d(s,"class","flex place-content-between text-sm"),d(o,"class","mt-2 font-medium hover:underline"),d(o,"href",E=`/admin/email/${f[1].emailId}`),d(t,"class","py-4")},m(e,i){N(e,t,i),n(t,s),n(s,a),n(a,h),n(a,v),n(s,m),n(s,b),n(b,g),n(t,A),n(t,o),n(o,c),n(t,r)},p(e,i){i&1&&I!==(I=e[1].toAddress+"")&&z(v,I),i&1&&S!==(S=e[1].dateSent.toLocaleString()+"")&&z(g,S),i&1&&y!==(y=e[1].subject+"")&&z(c,y),i&1&&E!==(E=`/admin/email/${e[1].emailId}`)&&d(o,"href",E)},d(e){e&&u(t)}}}function O(f){let t,s,a,h,I,v,m,b,S,g,A,o,y,c=f[0].emails.length<1&&Q(),E=f[0].emails,r=[];for(let e=0;e<E.length;e+=1)r[e]=U(F(f,E,e));return{c(){t=p("div"),s=p("form"),a=p("label"),h=V("Search by mailbox"),I=w(),v=p("div"),m=p("input"),S=w(),g=p("input"),A=w(),o=p("div"),c&&c.c(),y=w();for(let e=0;e<r.length;e+=1)r[e].c();this.h()},l(e){t=_(e,"DIV",{});var i=x(t);s=_(i,"FORM",{});var l=x(s);a=_(l,"LABEL",{for:!0,class:!0});var k=x(a);h=L(k,"Search by mailbox"),k.forEach(u),I=D(l),v=_(l,"DIV",{class:!0});var P=x(v);m=_(P,"INPUT",{id:!0,name:!0,class:!0,placeholder:!0}),S=D(P),g=_(P,"INPUT",{type:!0,class:!0}),P.forEach(u),l.forEach(u),i.forEach(u),A=D(e),o=_(e,"DIV",{class:!0});var q=x(o);c&&c.l(q),y=D(q);for(let T=0;T<r.length;T+=1)r[T].l(q);q.forEach(u),this.h()},h(){d(a,"for","query"),d(a,"class","text-medium text-sm"),d(m,"id","query"),d(m,"name","q"),d(m,"class","w-full rounded border px-2 placeholder:text-zinc-400"),d(m,"placeholder","user@example.com"),m.value=b=f[0].emailAddressQuery,d(g,"type","submit"),g.value="Search",d(g,"class","rounded bg-black px-4 py-1 font-medium text-white hover:cursor-pointer"),d(v,"class","flex gap-x-2"),d(o,"class","my-4 grid grid-cols-1 divide-y")},m(e,i){N(e,t,i),n(t,s),n(s,a),n(a,h),n(s,I),n(s,v),n(v,m),n(v,S),n(v,g),N(e,A,i),N(e,o,i),c&&c.m(o,null),n(o,y);for(let l=0;l<r.length;l+=1)r[l]&&r[l].m(o,null)},p(e,[i]){if(i&1&&b!==(b=e[0].emailAddressQuery)&&m.value!==b&&(m.value=b),e[0].emails.length<1?c||(c=Q(),c.c(),c.m(o,y)):c&&(c.d(1),c=null),i&1){E=e[0].emails;let l;for(l=0;l<E.length;l+=1){const k=F(e,E,l);r[l]?r[l].p(k,i):(r[l]=U(k),r[l].c(),r[l].m(o,null))}for(;l<r.length;l+=1)r[l].d(1);r.length=E.length}},i:j,o:j,d(e){e&&u(t),e&&u(A),e&&u(o),c&&c.d(),M(r,e)}}}function R(f,t,s){let{data:a}=t;return f.$$set=h=>{"data"in h&&s(0,a=h.data)},[a]}class H extends ${constructor(t){super(),B(this,t,R,O,C,{data:0})}}export{H as component};
