import{S as ae,i as re,s as se,k as c,q as w,a as Y,l as h,m as p,r as V,h as f,c as P,n as d,b as L,E as e,F as Q,W as X,U as ie,u as G}from"../chunks/index.0a5d0d14.js";/* empty css                    */import{e as oe}from"../chunks/forms.f8a6f744.js";function Z(_,l,a){const n=_.slice();return n[1]=l[a],n}function $(_,l,a){const n=_.slice();return n[1]=l[a],n}function ee(_){let l,a,n;return{c(){l=c("div"),a=c("p"),n=w("No users waiting for approval"),this.h()},l(m){l=h(m,"DIV",{class:!0});var s=p(l);a=h(s,"P",{class:!0});var A=p(a);n=V(A,"No users waiting for approval"),A.forEach(f),s.forEach(f),this.h()},h(){d(a,"class","text-2xl"),d(l,"class","p-5 my-4 mx-auto text-center rounded-xl w-48 bg-gray-400")},m(m,s){L(m,l,s),e(l,a),e(a,n)},d(m){m&&f(l)}}}function te(_){let l,a,n,m=_[1].email+"",s,A,E,q,H=_[1].email_verified?"Yes":"No",I,y,N,F,k=_[1].admin_verified?"Yes":"No",T,O,g,j,D,S,u,i,x,b,U,v,r,B;return{c(){l=c("div"),a=c("div"),n=c("h2"),s=w(m),A=Y(),E=c("p"),q=w("Email Verified: "),I=w(H),y=Y(),N=c("p"),F=w("Admin Verified: "),T=w(k),O=Y(),g=c("a"),j=w("profile link"),S=Y(),u=c("form"),i=c("input"),b=Y(),U=c("button"),v=w("Button"),this.h()},l(t){l=h(t,"DIV",{class:!0});var o=p(l);a=h(o,"DIV",{});var C=p(a);n=h(C,"H2",{class:!0});var J=p(n);s=V(J,m),J.forEach(f),A=P(C),E=h(C,"P",{});var W=p(E);q=V(W,"Email Verified: "),I=V(W,H),W.forEach(f),y=P(C),N=h(C,"P",{});var z=p(N);F=V(z,"Admin Verified: "),T=V(z,k),z.forEach(f),O=P(C),g=h(C,"A",{class:!0,href:!0});var K=p(g);j=V(K,"profile link"),K.forEach(f),C.forEach(f),S=P(o),u=h(o,"FORM",{method:!0,action:!0});var R=p(u);i=h(R,"INPUT",{id:!0,name:!0}),b=P(R),U=h(R,"BUTTON",{type:!0,class:!0});var M=p(U);v=V(M,"Button"),M.forEach(f),R.forEach(f),o.forEach(f),this.h()},h(){d(n,"class","text-xl font-bold mb-2"),d(g,"class","text-blue-500 underline"),d(g,"href",D="/user-profile/"+_[1].id),d(i,"id","email"),d(i,"name","email"),i.hidden=!0,i.value=x=_[1].email,d(U,"type","submit"),d(U,"class","px-4 py-2 bg-blue-500 text-white rounded"),d(u,"method","post"),d(u,"action","?/verify"),d(l,"class","bg-white shadow-md p-4 flex items-center justify-between")},m(t,o){L(t,l,o),e(l,a),e(a,n),e(n,s),e(a,A),e(a,E),e(E,q),e(E,I),e(a,y),e(a,N),e(N,F),e(N,T),e(a,O),e(a,g),e(g,j),e(l,S),e(l,u),e(u,i),e(u,b),e(u,U),e(U,v),r||(B=ie(oe.call(null,u)),r=!0)},p(t,o){o&1&&m!==(m=t[1].email+"")&&G(s,m),o&1&&H!==(H=t[1].email_verified?"Yes":"No")&&G(I,H),o&1&&k!==(k=t[1].admin_verified?"Yes":"No")&&G(T,k),o&1&&D!==(D="/user-profile/"+t[1].id)&&d(g,"href",D),o&1&&x!==(x=t[1].email)&&i.value!==x&&(i.value=x)},d(t){t&&f(l),r=!1,B()}}}function le(_){let l,a,n,m=_[1].email+"",s,A,E,q,H=_[1].email_verified?"Yes":"No",I,y,N,F,k=_[1].admin_verified?"Yes":"No",T,O,g,j,D,S;return{c(){l=c("div"),a=c("div"),n=c("h2"),s=w(m),A=Y(),E=c("p"),q=w("Email Verified: "),I=w(H),y=Y(),N=c("p"),F=w("Admin Verified: "),T=w(k),O=Y(),g=c("a"),j=w("profile link"),S=Y(),this.h()},l(u){l=h(u,"DIV",{class:!0});var i=p(l);a=h(i,"DIV",{});var x=p(a);n=h(x,"H2",{class:!0});var b=p(n);s=V(b,m),b.forEach(f),A=P(x),E=h(x,"P",{});var U=p(E);q=V(U,"Email Verified: "),I=V(U,H),U.forEach(f),y=P(x),N=h(x,"P",{});var v=p(N);F=V(v,"Admin Verified: "),T=V(v,k),v.forEach(f),O=P(x),g=h(x,"A",{class:!0,href:!0});var r=p(g);j=V(r,"profile link"),r.forEach(f),x.forEach(f),S=P(i),i.forEach(f),this.h()},h(){d(n,"class","text-xl font-bold mb-2"),d(g,"class","text-blue-500 underline"),d(g,"href",D="/user-profile/"+_[1].id),d(l,"class","bg-white shadow-md p-4 flex items-center justify-between")},m(u,i){L(u,l,i),e(l,a),e(a,n),e(n,s),e(a,A),e(a,E),e(E,q),e(E,I),e(a,y),e(a,N),e(N,F),e(N,T),e(a,O),e(a,g),e(g,j),e(l,S)},p(u,i){i&1&&m!==(m=u[1].email+"")&&G(s,m),i&1&&H!==(H=u[1].email_verified?"Yes":"No")&&G(I,H),i&1&&k!==(k=u[1].admin_verified?"Yes":"No")&&G(T,k),i&1&&D!==(D="/user-profile/"+u[1].id)&&d(g,"href",D)},d(u){u&&f(l)}}}function ne(_){let l,a,n,m,s,A,E,q,H,I,y,N,F,k,T,O,g,j,D,S,u,i=_[0].allUsers.length===0&&ee(),x=_[0].allUsers,b=[];for(let r=0;r<x.length;r+=1)b[r]=te($(_,x,r));let U=_[0].approvedUsers,v=[];for(let r=0;r<U.length;r+=1)v[r]=le(Z(_,U,r));return{c(){l=c("div"),a=c("h1"),n=w("Admin approve users"),m=Y(),s=c("div"),A=c("div"),E=c("a"),q=w("go to approve brands"),H=Y(),I=c("div"),y=c("a"),N=w("View deal contracts"),F=Y(),k=c("h2"),T=w("Users waiting for approval"),O=Y(),i&&i.c(),g=Y();for(let r=0;r<b.length;r+=1)b[r].c();j=Y(),D=c("h2"),S=w("Approved Users"),u=Y();for(let r=0;r<v.length;r+=1)v[r].c();this.h()},l(r){l=h(r,"DIV",{class:!0});var B=p(l);a=h(B,"H1",{class:!0});var t=p(a);n=V(t,"Admin approve users"),t.forEach(f),m=P(B),s=h(B,"DIV",{class:!0});var o=p(s);A=h(o,"DIV",{class:!0});var C=p(A);E=h(C,"A",{class:!0,href:!0});var J=p(E);q=V(J,"go to approve brands"),J.forEach(f),C.forEach(f),H=P(o),I=h(o,"DIV",{class:!0});var W=p(I);y=h(W,"A",{class:!0,href:!0});var z=p(y);N=V(z,"View deal contracts"),z.forEach(f),W.forEach(f),F=P(o),k=h(o,"H2",{class:!0});var K=p(k);T=V(K,"Users waiting for approval"),K.forEach(f),O=P(o),i&&i.l(o),g=P(o);for(let M=0;M<b.length;M+=1)b[M].l(o);j=P(o),D=h(o,"H2",{class:!0});var R=p(D);S=V(R,"Approved Users"),R.forEach(f),u=P(o);for(let M=0;M<v.length;M+=1)v[M].l(o);o.forEach(f),B.forEach(f),this.h()},h(){d(a,"class","text-center pt-10 text-6xl"),d(E,"class","text-center"),d(E,"href","/admin/approve-brands"),d(A,"class","mx-auto mb-10 text-center rounded-3xl py-4 w-[20%] bg-black text-white"),d(y,"class","text-center"),d(y,"href","/admin/deal-contracts"),d(I,"class","mx-auto mb-10 text-center rounded-3xl py-4 w-[20%] bg-black text-white"),d(k,"class","text-4xl text-center"),d(D,"class","text-4xl text-center"),d(s,"class","mt-10"),d(l,"class","bg-white rounded-xl mx-auto mt-10 max-w-[90%] px-10 pb-10 w-[85%] mb-12")},m(r,B){L(r,l,B),e(l,a),e(a,n),e(l,m),e(l,s),e(s,A),e(A,E),e(E,q),e(s,H),e(s,I),e(I,y),e(y,N),e(s,F),e(s,k),e(k,T),e(s,O),i&&i.m(s,null),e(s,g);for(let t=0;t<b.length;t+=1)b[t]&&b[t].m(s,null);e(s,j),e(s,D),e(D,S),e(s,u);for(let t=0;t<v.length;t+=1)v[t]&&v[t].m(s,null)},p(r,[B]){if(r[0].allUsers.length===0?i||(i=ee(),i.c(),i.m(s,g)):i&&(i.d(1),i=null),B&1){x=r[0].allUsers;let t;for(t=0;t<x.length;t+=1){const o=$(r,x,t);b[t]?b[t].p(o,B):(b[t]=te(o),b[t].c(),b[t].m(s,j))}for(;t<b.length;t+=1)b[t].d(1);b.length=x.length}if(B&1){U=r[0].approvedUsers;let t;for(t=0;t<U.length;t+=1){const o=Z(r,U,t);v[t]?v[t].p(o,B):(v[t]=le(o),v[t].c(),v[t].m(s,null))}for(;t<v.length;t+=1)v[t].d(1);v.length=U.length}},i:Q,o:Q,d(r){r&&f(l),i&&i.d(),X(b,r),X(v,r)}}}function de(_,l,a){let{data:n}=l;return _.$$set=m=>{"data"in m&&a(0,n=m.data)},[n]}class ue extends ae{constructor(l){super(),re(this,l,de,ne,se,{data:0})}}export{ue as component};
