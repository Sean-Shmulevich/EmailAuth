import{S as Sa,i as va,s as Ua,w as wa,_ as Ia,y as j,a as P,e as de,z as X,c as L,A as K,b as n,$ as Oa,g as B,d as H,B as Q,h as t,W as Ae,k as o,q as m,l as r,m as G,r as c,n as R,E as O,X as ce,Y as Na,u as ue,v as be,f as ye,F as ae,Z as es,a0 as _a,U as ns}from"../chunks/index.0a5d0d14.js";import{e as is}from"../chunks/forms.84f3cfd1.js";import{B as Da,D as Ba}from"../chunks/Wrapper.443f2850.js";/* empty css                                                        */import{D as Ya}from"../chunks/DropdownItem.9887f328.js";import{C as Ca}from"../chunks/Chevron.8783fe36.js";function ka(h,a,l){const s=h.slice();return s[9]=a[l],s[11]=l,s}function Fa(h,a,l){const s=h.slice();return s[12]=a[l],s}function os(h){let a;return{c(){a=m(h[1])},l(l){a=c(l,h[1])},m(l,s){n(l,a,s)},p(l,s){s&2&&ue(a,l[1])},d(l){l&&t(a)}}}function rs(h){let a,l;return a=new Ca({props:{$$slots:{default:[os]},$$scope:{ctx:h}}}),{c(){j(a.$$.fragment)},l(s){X(a.$$.fragment,s)},m(s,p){K(a,s,p),l=!0},p(s,p){const b={};p&32770&&(b.$$scope={dirty:p,ctx:s}),a.$set(b)},i(s){l||(B(a.$$.fragment,s),l=!0)},o(s){H(a.$$.fragment,s),l=!1},d(s){Q(a,s)}}}function as(h){let a=h[12]+"",l;return{c(){l=m(a)},l(s){l=c(s,a)},m(s,p){n(s,l,p)},p(s,p){p&1&&a!==(a=s[12]+"")&&ue(l,a)},d(s){s&&t(l)}}}function Ma(h){let a,l;function s(){return h[6](h[12])}return a=new Ya({props:{class:"text-white ml-2 mt-2",value:h[12],$$slots:{default:[as]},$$scope:{ctx:h}}}),a.$on("click",s),{c(){j(a.$$.fragment)},l(p){X(a.$$.fragment,p)},m(p,b){K(a,p,b),l=!0},p(p,b){h=p;const d={};b&1&&(d.value=h[12]),b&32769&&(d.$$scope={dirty:b,ctx:h}),a.$set(d)},i(p){l||(B(a.$$.fragment,p),l=!0)},o(p){H(a.$$.fragment,p),l=!1},d(p){Q(a,p)}}}function ss(h){let a,l,s,p=h[0],b=[];for(let f=0;f<p.length;f+=1)b[f]=Ma(Fa(h,p,f));const d=f=>H(b[f],1,1,()=>{b[f]=null});return{c(){for(let f=0;f<b.length;f+=1)b[f].c();a=P(),l=o("div"),this.h()},l(f){for(let u=0;u<b.length;u+=1)b[u].l(f);a=L(f),l=r(f,"DIV",{class:!0}),G(l).forEach(t),this.h()},h(){R(l,"class","h-2 w-full")},m(f,u){for(let y=0;y<b.length;y+=1)b[y]&&b[y].m(f,u);n(f,a,u),n(f,l,u),s=!0},p(f,u){if(u&29){p=f[0];let y;for(y=0;y<p.length;y+=1){const I=Fa(f,p,y);b[y]?(b[y].p(I,u),B(b[y],1)):(b[y]=Ma(I),b[y].c(),B(b[y],1),b[y].m(a.parentNode,a))}for(be(),y=p.length;y<b.length;y+=1)d(y);ye()}},i(f){if(!s){for(let u=0;u<p.length;u+=1)B(b[u]);s=!0}},o(f){b=b.filter(Boolean);for(let u=0;u<b.length;u+=1)H(b[u]);s=!1},d(f){Ae(b,f),f&&t(a),f&&t(l)}}}function Ga(h){let a,l,s,p=h[9]+"",b,d,f,u,y,I;function N(){return h[8](h[9])}return{c(){a=o("div"),l=o("div"),s=o("p"),b=m(p),d=P(),f=o("button"),u=m("-"),this.h()},l(E){a=r(E,"DIV",{class:!0});var T=G(a);l=r(T,"DIV",{class:!0});var w=G(l);s=r(w,"P",{class:!0});var v=G(s);b=c(v,p),v.forEach(t),w.forEach(t),d=L(T),f=r(T,"BUTTON",{class:!0});var A=G(f);u=c(A,"-"),A.forEach(t),T.forEach(t),this.h()},h(){R(s,"class","p-2 text-bold mr-10 text-center"),R(l,"class","flex bg-gray-700 rounded-xl w-full flex-row"),R(f,"class","p-2 font-extrabold"),R(a,"class","flex justify-center text-white items-center sm:flex-row my-4")},m(E,T){n(E,a,T),O(a,l),O(l,s),O(s,b),O(a,d),O(a,f),O(f,u),y||(I=ce(f,"click",Na(N)),y=!0)},p(E,T){h=E,T&8&&p!==(p=h[9]+"")&&ue(b,p)},d(E){E&&t(a),y=!1,I()}}}function $a(h){let a,l;return{c(){a=o("input"),this.h()},l(s){a=r(s,"INPUT",{type:!0,name:!0}),this.h()},h(){R(a,"type","hidden"),R(a,"name","industries"),a.value=l=JSON.stringify(h[3])},m(s,p){n(s,a,p)},p(s,p){p&8&&l!==(l=JSON.stringify(s[3]))&&(a.value=l)},d(s){s&&t(a)}}}function Wa(h){let a,l;return{c(){a=o("p"),l=m(h[2]),this.h()},l(s){a=r(s,"P",{class:!0});var p=G(a);l=c(p,h[2]),p.forEach(t),this.h()},h(){R(a,"class","text-red-500 text-lg text-center")},m(s,p){n(s,a,p),O(a,l)},p(s,p){p&4&&ue(l,s[2])},d(s){s&&t(a)}}}function ls(h){let a,l,s,p,b,d,f,u,y;a=new Da({props:{class:"border border-white w-full ",$$slots:{default:[rs]},$$scope:{ctx:h}}});function I(A){h[7](A)}let N={class:" w-fit rounded-xl h-48 bg-gray-700 overflow-y-scroll overflow-x-hidden text-white text-left whitespace-nowrap text-sm",$$slots:{default:[ss]},$$scope:{ctx:h}};h[4]!==void 0&&(N.open=h[4]),s=new Ba({props:N}),wa.push(()=>Ia(s,"open",I));let E=h[3],T=[];for(let A=0;A<E.length;A+=1)T[A]=Ga(ka(h,E,A));let w=h[3].length>0&&$a(h),v=h[2]!==null&&Wa(h);return{c(){j(a.$$.fragment),l=P(),j(s.$$.fragment),b=P();for(let A=0;A<T.length;A+=1)T[A].c();d=P(),w&&w.c(),f=P(),v&&v.c(),u=de()},l(A){X(a.$$.fragment,A),l=L(A),X(s.$$.fragment,A),b=L(A);for(let S=0;S<T.length;S+=1)T[S].l(A);d=L(A),w&&w.l(A),f=L(A),v&&v.l(A),u=de()},m(A,S){K(a,A,S),n(A,l,S),K(s,A,S),n(A,b,S);for(let _=0;_<T.length;_+=1)T[_]&&T[_].m(A,S);n(A,d,S),w&&w.m(A,S),n(A,f,S),v&&v.m(A,S),n(A,u,S),y=!0},p(A,[S]){const _={};S&32770&&(_.$$scope={dirty:S,ctx:A}),a.$set(_);const q={};if(S&32797&&(q.$$scope={dirty:S,ctx:A}),!p&&S&16&&(p=!0,q.open=A[4],Oa(()=>p=!1)),s.$set(q),S&40){E=A[3];let k;for(k=0;k<E.length;k+=1){const F=ka(A,E,k);T[k]?T[k].p(F,S):(T[k]=Ga(F),T[k].c(),T[k].m(d.parentNode,d))}for(;k<T.length;k+=1)T[k].d(1);T.length=E.length}A[3].length>0?w?w.p(A,S):(w=$a(A),w.c(),w.m(f.parentNode,f)):w&&(w.d(1),w=null),A[2]!==null?v?v.p(A,S):(v=Wa(A),v.c(),v.m(u.parentNode,u)):v&&(v.d(1),v=null)},i(A){y||(B(a.$$.fragment,A),B(s.$$.fragment,A),y=!0)},o(A){H(a.$$.fragment,A),H(s.$$.fragment,A),y=!1},d(A){Q(a,A),A&&t(l),Q(s,A),A&&t(b),Ae(T,A),A&&t(d),w&&w.d(A),A&&t(f),v&&v.d(A),A&&t(u)}}}function ps(h,a,l){let{dropdownTypes:s}=a,p=[],b=null,d=!1;function f(E){p.length>0&&l(3,p=p.filter(T=>T!==E))}let{dropdownName:u}=a;const y=E=>{l(4,d=!1),p.length<3&&!p.includes(E)?l(3,p=[...p,E]):p.length===3?l(2,b="you have already picked 3 different options delete one in order to replace it"):l(2,b="you have already picked this option")};function I(E){d=E,l(4,d)}const N=E=>f(E);return h.$$set=E=>{"dropdownTypes"in E&&l(0,s=E.dropdownTypes),"dropdownName"in E&&l(1,u=E.dropdownName)},h.$$.update=()=>{h.$$.dirty&4&&b!==null&&setTimeout(()=>{l(2,b=null)},3e3)},[s,u,b,p,d,f,y,I,N]}class ts extends Sa{constructor(a){super(),va(this,a,ps,ls,Ua,{dropdownTypes:0,dropdownName:1})}}function us(h){let a,l,s,p,b,d,f,u,y,I,N,E,T,w,v,A,S,_,q,k,F,J,g,C,M,Z,z,Y,ee,oe,x,se,te,le,fe,ne,$,U,V,D,W,ie,he,re,me,pe,Ee,Te,Re,we,Ie,Oe,ge,Ne,Se,ve,Ue,De,Be,Ye,Ce,Pe,Le,He,_e,ke,Fe,Me,Ge,$e,We,Ve,qe,ze,xe,je,Xe,Ke,Qe,Je,Ze,et,tt,nt,it,ot,rt,at,st,lt,pt,ut,ft,ht,mt,ct,dt,bt,yt,At,Et,Tt,Rt,wt,It,Ot,gt,Nt,St,vt,Ut,Dt,Bt,Yt,Ct,Pt,Lt,Ht,_t,kt,Ft,Mt,Gt,$t,Wt,Vt,qt,zt,xt,jt,Xt,Kt,Qt,Jt,Zt,en,tn,nn,on,rn,an,sn,ln,pn,un,fn,hn,mn,cn,dn,bn,yn,An,En,Tn,Rn,wn,In,On,gn,Nn,Sn,vn,Un,Dn,Bn,Yn,Cn,Pn,Ln,Hn,_n,kn,Fn,Mn,Gn,$n,Wn,Vn,qn,zn,xn,jn,Xn,Kn,Qn,Jn,Zn,ei,ti,ni,ii,oi,ri,ai,si,li,pi,ui,fi,hi,mi,ci,di,bi,yi,Ai,Ei,Ti,Ri,wi,Ii,Oi,gi,Ni,Si,vi,Ui,Di,Bi,Yi,Ci,Pi,Li,Hi,_i,ki,Fi,Mi,Gi,$i,Wi,Vi,qi,zi,xi,ji,Xi,Ki,Qi,Ji,Zi,eo,to,no,io,oo,ro,ao,so,lo,po,uo,fo,ho,mo,co,bo,yo,Ao,Eo,To,Ro,wo,Io,Oo,go,No,So,vo,Uo,Do,Bo,Yo,Co,Po,Lo,Ho,_o,ko,Fo,Mo,Go,$o,Wo,Vo,qo,zo,xo,jo,Xo,Ko,Qo,Jo,Zo,er,tr,nr,ir,or,rr,ar,sr,lr,pr,ur,fr,hr,mr,cr,dr,br,yr,Ar,Er,Tr,Rr,wr,Ir,Or,gr,Nr,Sr,vr,Ur,Dr,Br,Yr,Cr,Pr,Lr,Hr,_r,kr,Fr,Mr,Gr,$r,Wr,Vr,qr,zr,xr,jr,Xr,Kr,Qr,Jr,Zr,ea,ta,na,ia,oa,ra,aa,sa,la,pa,ua,fa,ha,ma,ca,da,ba,ya,Aa,Ea,Ta,Ra,ga,Pa;return{c(){a=o("div"),l=o("p"),s=m("Terms of Service"),p=P(),b=o("button"),d=m("X"),f=m(`
Version 1.1 Dated August 2
`),u=o("br"),y=m(" Terms of Use "),I=o("br"),N=o("br"),E=m(`
1. INTRODUCTION `),T=o("br"),w=o("br"),v=m(`
DapUp, LLC (“DapUp”) is a digital influence agency that connects Athletes (as defined below) with persons
or entities who seek to expand their brand, product, and/or service awareness online by creating campaigns
or otherwise establishing a formal business relationship ("Businesses"). DapUp specializes in connecting
Athletes to the Business where it will provide the most value (i.e., the best match). Athletes, for the
purposes of these “Terms of Use” include those who are actively competing on teams or in competitions
that attract substantial attention or that are considered higher level in the sports world and who have
a presence on social media networks (such as Facebook, Twitter, YouTube and TikTok), use their social
media networks to post regular content, and work or are willing to work with Businesses to promote their
brand and/or products or services ("Athlete"). As an Business, DapUp values your opinions and considers
you and your connections with Athletes valuable to Athletes, schools, and the communities impacted by
them. `),A=o("br"),S=o("br"),_=m(`

Working with us to connect to Athletes for the purpose of establishing a relationship with the
Athlete via DapUp's proprietary relationships with them and this Platform (the “Service” or
“Services”) is subject to your acceptance of and compliance with all the terms and conditions of
this “Terms of Use,” any statement of work (“SOW”), our Privacy Policy (“Privacy Policy”), and any
instructions, rules, policies, briefs or guidelines related to Athletes (“Guidelines”)
(collectively, the “Agreement”). To the extent of any conflict between this Terms of Use and the
SOW, the terms of SOW shall control. This Agreement is agreed to between DapUp and you, or if you
represent a company or other entity, that company or entity (in either case “You”, “Your”, or
“Business”). If You accept or agree to this Agreement on behalf of a company or other entity, You
represent and warrant that You have the authority to bind that company or other entity to this
Agreement. `),q=o("br"),k=o("br"),F=m(`
2. ACCEPTANCE OF THIS AGREEMENT `),J=o("br"),g=o("br"),C=m(`
You can accept this Agreement by: `),M=o("br"),Z=o("br"),z=m(`
1. Viewing on the “I Agree” or “I Accept” box; `),Y=o("br"),ee=o("br"),oe=m(`
2. registering in the DapUp’s online platform (“Platform”) at http://www.dapup.co ; or`),x=o("br"),se=o("br"),te=m(`
3. accessing or using the Platform or otherwise accepting to post a campaign to connect with Athletes
(“Campaign”). `),le=o("br"),fe=o("br"),ne=m(`
The term of this Agreement will commence on the date any of the earliest above numbered events occur
(the “Effective Date”) and will end when terminated by either party in accordance with this Agreement.
In accepting this Agreement, You agree that DapUp may disclose Your registration and other applicable
information to the Business. [In this case, You understand and agree that DapUp will treat Your use of
the Platform as acceptance of this Agreement from that point onwards.] `),$=o("br"),U=o("br"),V=m(`
By accepting this Agreement, You acknowledge and agree that You have read and accept the terms set forth
herein and agree to be bound by this Agreement. Each time You use the Platform, the current version of
the Terms of Use will apply. Accordingly, when You use the Platform, You should check the date of the
Terms of Use (which appears at the top of this document) and review any changes since the last version.
The Terms of Use will be available at all times at [DapUp website link for Terms of Use].
`),D=o("br"),W=o("br"),ie=m(`
You may not register and access and use the Platform and may not accept this Agreement if: (a) You are
not legally competent to form a binding contract with DapUp; (b) in the case of a company or other entity,
You lack the authority to enter into this Agreement and bind that company or other entity to this Agreement;
or (c) You do not comply with Section [9] “Eligibility” rules. Your acceptance will legally bind You
to comply with this Agreement. `),he=o("br"),re=o("br"),me=m(`
IF YOU DO NOT AGREE TO THE TERMS OF THIS AGREEMENT, OR DO NOT MEET THE QUALIFICATIONS INCLUDED IN THIS
AGREEMENT, THEN YOU HAVE NO RIGHT TO ACCESS OR USE THE PLATFORM AND PROVIDE ANY SERVICES. IF YOU ACCESS
OR USE THE PLATFORM, YOU ACKNOWLEDGE THAT YOUR MEET THE QUALIFICATIONS INCLUDED IN THIS AGREEMENT AND
AGREE TO BE BOUND BY THE TERMS OF THIS AGREEMENT. `),pe=o("br"),Ee=o("br"),Te=m(`

Before You continue, You should print off or save a local copy of the Terms of Use for Your records.
`),Re=o("br"),we=o("br"),Ie=m(`
3. CAMPAIGNS `),Oe=o("br"),ge=o("br"),Ne=m(`
DapUp’s method of operations: Participating Businesses create and send Campaigns through the Platform
located on the DapUp website, which offer Athletes the opportunity to participate in Campaigns from a
Business. DapUp presents this information to eligible Athletes on the platform for Athletes to indicate
whether such Campaign is one they would like to pursue. Each Campaign details a brief description of
the Campaign, deliverables, a start and end date, compensation information, and any exclusivity requirements.
If accepted to the Campaign, participating Athletes will receive additional information and Guidelines
from DapUp via email communications and through Athlete’s account in the Platform. All Campaigns must
comply with the requirements established by DapUp (referred to as the “Requirements”). By accepting and
participating in a Campaign, You acknowledge the terms of the Campaign and agree to be connected that
You have reviewed and accept all Requirements and that You agree to strictly adhere to the Campaign,
the Requirements, and this Agreement.
`),Se=o("br"),ve=o("br"),Ue=m(`
Permanence of Content: All content created or published for any Campaign will remain publicly visible
with the campaign hashtag(s) and disclosures for a period of at least 90 days after the final payment
of Fees. In addition, if the Content is modified in any way beyond this time period, the required disclosure
must remain intact in order to comply with FTC requirements. `),De=o("br"),Be=o("br"),Ye=m(`

Reporting: The outcomes of all connections between Businesses and Athletes must be reported within 2
days of Athlete receiving compensation by emailing the executed agreements to contracts@dapup.co,
and failure to timely report will result in potential payment deduction of twenty-five dollars
($25.00) in compensation for each day delay insubmission. `),Ce=o("br"),Pe=o("br"),Le=m(`
During the term of this Agreement, Athlete has the right to provide content services to others provided
that such other engagement or performance does not: (a) interfere in any way with the timely and professional
performance of the Services to DapUp; (b) require the disclosure or use of Confidential Information;
and (c) conflict with any other agreements between DapUp and Athlete or DapUp and Business regarding
exclusivity. DapUp has no obligation to propose a Campaign to Athlete and may receive content services
from other Athletes during the term of this Agreement. DapUp has no obligation of exclusivity to Businesses
and no obligation, and shall face no liability for any failure, to enforce any possible exclusivity obligations
between Athletes and Businesses. `),He=o("br"),_e=o("br"),ke=m(`
If You do not accept the Requirements, You must immediately notify DapUp and refrain from participating
in the Campaign. Noncompliance inwith the Requirements may result removal of the Campaign, ineligibility
to participate in any future DapUp Campaigns, and/or being removed from the DapUp Platform.
`),Fe=o("br"),Me=o("br"),Ge=m(" 4. REVIEWS & APPROVALS "),$e=o("br"),We=o("br"),Ve=m(`
DapUp in its sole discretion shall determine whether Athlete has complied with the Requirements and is
entitled to the compensation in connection with a Campaign. Athletes who do not comply with the Requirements
and this Agreement will not be entitled to the compensation associated with such Campaign. Failure to
submit required posts within the Campaign posting period or to make necessary edits to published posts
in a timely manner may result in disqualification to participate in the Campaign and reduced or non-payment
of associated compensation. `),qe=o("br"),ze=o("br"),xe=m(`
Any non-payment of the Athlete by any Business may result in such Business’ removal from the Platform.
Any material deviation of the Campaign by a Business from the details provided in the post of the Campaign
that the Athlete agreed to must be agreed by the Athlete in writing. If a Business makes material changes
or attempts to make material changes to the Campaign without agreement by the Athlete in writing, DapUp
may suspend or remove the Business from the Platform, in its sole discretion.
`),je=o("br"),Xe=o("br"),Ke=m(`
5. USE OF PLATFORM `),Qe=o("br"),Je=o("br"),Ze=m(`
In order to access the Platform and provide Services, You may be required to provide information about
yourself and/or your business (such as identification or contact details) as part of registration, or
as part of Your continued use of the Platform. You agree that any registration information You provide
to DapUp will always be accurate, complete and up to date. You will update Your registration information
as necessary to maintain accuracy. `),et=o("br"),tt=o("br"),nt=m(`
You agree to use the Platform only for purposes that are permitted by (a) this Agreement, and (b) any
applicable law, regulation or generally accepted practices or guidelines in the relevant jurisdictions
(including any laws regarding the export of data or software to and from the United States or other relevant
countries). Unless otherwise agreed in writing by DapUp, You agree that You shall not copy, distribute,
modify, reproduce, duplicate, perform, display, create derivative works from, reverse engineer, decompile,
attempt to obtain the source code or algorithms of, trade, sell, rent, lease, license, sublicense, resell
or transfer the Platform or any portion thereof. You shall not in connection with any Campaign take any
of the following actions or use the Platform to transmit spam, send unsolicited e-mails, conceal the
identity of an e-mail sender or to create or utilize technology to generate fraudulent point activity
including, but not limited to, bots, or spiders. You shall not use the Platform for the benefit of any
third party other than as authorized in this Agreement, whether on a paid or unpaid basis.
`),it=o("br"),ot=o("br"),rt=m(`
You agree not to access (or attempt to access) any information of DapUp, Athletes, or Campaign (i) by
any means other than through the interface that is provided by DapUp, unless You have been specifically
allowed to do so in a separate agreement with DapUp; or (ii) through any automated means (including use
of scripts or web crawlers), and You shall ensure to comply with any and all instructions set out on
the Platform. `),at=o("br"),st=o("br"),lt=m(`
You agree that You will not engage in any activity that interferes with or disrupts the Platform.
`),pt=o("br"),ut=o("br"),ft=m(`
You agree that when You post a Campaign and connect with an Athlete, You shall in no way attempt to circumvent
DapUp to work with the Athlete directly on the Campaign or anything related thereto. You will not use
any information you obtained from DapUp, the Athlete, or any third party to compete with DapUp or in
any way that would be detrimental to DapUp. DapUp, Athlete and Business understand the necessity of protects
on against the unfair competition of circumvention of the other party and that the nature and scope of
such protection has been carefully considered by each party. The parties further acknowledge and agree
that the covenants and provisions of this section, for the consideration for disclosure of the identity
of and nature of the relationship with the Athletes are among the inducements for entering into and consummating
any transaction contemplated as a result thereof. If, however, any court determines that the foregoing
restrictions are not reasonable, such restrictions shall be modified, rewritten, or interpreted to include
as much as their nature and scope will render them enforceable. The parties understand and agree that
in the event of a breach of this Agreement by either party, each shall be entitled to equitable relief,
including injunction and specific performance as a remedy for any such breach, in addition to, and not
exclusive of, any and all other remedies available at law or in equity, including recovery of damages.
`),ht=o("br"),mt=o("br"),ct=m(`
You agree that You are solely responsible for (and that DapUp has no responsibility to You or to any
third party for) any breach of Your obligations under this Agreement or applicable law and for the consequences
(including any loss or damage which DapUp or a third party may suffer) of any such breach.
`),dt=o("br"),bt=o("br"),yt=m(`
DapUp reserves the right to terminate or suspend Your use of the Platform at its sole discretion, with
or without notice to You, upon any actual, threatened, or suspected breach of this Agreement or applicable
law or upon any other conduct deemed by DapUp to be inappropriate or detrimental to the Platform, DapUp,
or any Business, Athlete, or any person or entity accessing or using the DapUp website or Platform (“User”).
`),At=o("br"),Et=o("br"),Tt=m(`

6. YOUR ACCOUNT, PASSWORDS AND ACCOUNT SECURITY `),Rt=o("br"),wt=o("br"),It=m(`
Your account, account ID and password is for Your sole use. You may not distribute, transfer or allow
any third party to access Your account. `),Ot=o("br"),gt=o("br"),Nt=m(`
You agree and understand that You are responsible for maintaining the confidentiality of any account
ID and passwords associated with any account You use to access the Platform. Accordingly, You agree that
You will be solely responsible to DapUp for all activities that occur under Your account. If You become
aware of any unauthorized use of Your password or of Your account or any other breach of security, You
agree to immediately notify DapUp. `),St=o("br"),vt=o("br"),Ut=m(`
7. PRIVACY AND YOUR PERSONAL INFORMATION `),Dt=o("br"),Bt=o("br"),Yt=m(`
For information about DapUp’s data protection practices, please read DapUp’s Privacy Policy. This policy
explains how DapUp treats Your personal information, and protects Your privacy, when You use the Platform.
Business expressly consents to the use and disclosure of personally identifiable information and other
data and information as described in DapUp’s Privacy Policy. Business acknowledges and agrees that DapUp
may disclose all information about Business and that Business may provide with respect to Buisness Content
to the applicable Business to which that Business Content relates. By accepting this Agreement, You agree
to the use of Your data in accordance with DapUp’s Privacy Policy, which is incorporated into and made
part of this Agreement. `),Ct=o("br"),Pt=o("br"),Lt=m(`
8. ELIGIBILITY `),Ht=o("br"),_t=o("br"),kt=m(`

You must be eighteen (18) years or older to register a Business or register as an Athlete in the
Platform. By registering on the Platform, You represent and warrant that you are at least 18 years
old. DapUp reserves the right to determine the eligibility of any Business or Campaign to ensure the
marketplace on the Platform remains in the best interest of DapUp, other Businesses, and the
Athletes, such determination to be made in DapUp’s sole discretion. `),Ft=o("br"),Mt=o("br"),Gt=m(`
By registering on the Platform, You represent and warrant that all information You submit is truthful
and accurate, and that You agree to maintain the accuracy of such information. You understand and agree
that we will use the information You provide in accordance with the terms of the DapUp Privacy Policy.
DapUp accounts are not transferable, assignable or resalable under any circumstances and You are not
permitted to transfer or assign Your rights or obligations under this Agreement without the express written
consent of DapUp. `),$t=o("br"),Wt=o("br"),Vt=m(`
Businesses on the Platform must have been registered directly by an individual with control and authority
to bind the Businesses. DapUp will evaluate and qualify Businesses and Athletes according to its internal
criteria and DapUp may accept or reject Businesses and Athletes for participation in any Campaign in
its sole discretion. `),qt=o("br"),zt=o("br"),xt=m(`
9. FEES `),jt=o("br"),Xt=o("br"),Kt=m(`
Businesses will pay Athlete pursuant to the formal contract between Athlete and Business. DapUp shall
not be obligated to pay Athlete any Fees. `),Qt=o("br"),Jt=o("br"),Zt=m(`

To post a Campaign on the Platform, Businesses shall pay DapUp a subscription fee of Forty-Nine and
99/100 Dollars ($49.99) per month for the months Business wants to post Campaigns. Businesses may
post an unlimited number of Campaigns during such months and connect with as many Athletes as a
Business would like to, subject to the rules and eligibility provisions established herein.
`),en=o("br"),tn=o("br"),nn=m(`
Businesses shall also pay DapUp ten percent (10%) of the compensation to be paid to DapUp in any agreement
entered into between Athletes and Businesses in relation to any Campaign posted on the Platform or any
relationship established between an Athlete and a Business herein (the “Commission Fee”).
`),on=o("br"),rn=o("br"),an=m(`
Business acknowledges that Athlete is an independent contractor and not an employee of DapUp or Business,
and nothing herein is intended to, or shall be construed to create a partnership, agency, joint venture,
employment or similar relationship between the parties. Business also acknowledges that it is responsible
for any reporting requirements imposed by the federal, state, or local government and responsible for
compliance with all other applicable laws, rules, and regulations. `),sn=o("br"),ln=o("br"),pn=m(`
10. CONTENT INFORMATION `),un=o("br"),fn=o("br"),hn=m(`
“Business Content” is content presented to Athletes as part of the Campaign, including but not limited
to advertisements in the sponsored content contained in Campaign materials, may be protected by intellectual
property rights (as defined below) which might be owned by the Businesses who provide that Content to
DapUp (or by other persons or companies on their behalf). Business is responsible to verify the accuracy,
completeness and applicability of the Business Content for authorized use. DapUp will not be responsible
for any errors or omissions in the Business Content. “Intellectual property rights” means all intellectual
property and proprietary rights throughout the world, including, without limitation, all copyrights,
trademarks, trade secrets, patents, moral rights, and other rights protecting data, information or intangible
property throughout the world. `),mn=o("br"),cn=o("br"),dn=m(`
Athlete shall not use the Business Content for any unauthorized purpose and shall not modify, alter,
reproduce, rent, lease, loan, sell, license, sublicense, distribute, transfer or assign any Business
Content or create derivative works based on the Business Content (either in whole or in part) unless
they have been specifically authorized to do so by DapUp or by the owners of that Business Content in
a separate written agreement. Athletes and Businesses shall maintain any copyright and trademark notices
or marks and will not alter or remove any valid notices associated with any content. Athlete is not granted
any right or license to the Business Content except as expressly set forth herein or in a separate written
agreement. `),bn=o("br"),yn=o("br"),An=m(`
[You understand that by using the Platform, You may be exposed to content that You may find offensive,
indecent or objectionable and that, in this respect, You use the Platform at Your own risk.]
`),En=o("br"),Tn=o("br"),Rn=m(`
Business agrees that Business is solely responsible for (and that DapUp has no responsibility to them
or to any third party for) any content that You create, transmit or display while using the Platform
and for the consequences of Your actions (including any loss or damage which DapUp or a third party may
suffer) by doing so. DapUp will direct any party to take appropriate action to address any copyright
infringement that it discovers including removal of content when notified of any such infringement. Businesses
will immediately implement any such direction from DapUp and will notify DapUp of any copyright infringement
that it becomes aware of and will take immediate action to address any violation of copyright or other
violation of proprietary rights of third parties and applicable laws. `),wn=o("br"),In=o("br"),On=m(`
11. DISCLOSURE AND ATHLETE REQUIREMENTS `),gn=o("br"),Nn=o("br"),Sn=m(`
Every Athlete registering to DapUp, and any Athlete utilizing the Platform for participation in a Campaign,
is required to provide disclosure in accordance with FTC Disclosure Guidelines. Each Athlete shall fully
comply with all applicable FTC Guidelines including, but not limited to, the FTC Guidelines Concerning
the Use of Endorsements and Testimonials in Advertising and .com Disclosures How to Make Effective Disclosures
in Digital Advertising, including any updates, additions, modifications, or supplemental guidance to
the foregoing. Any failure of Athlete to fully disclose in strict accordance with the FTC Disclosure
Guidelines shall constitute a material breach of this Agreement and DapUp and Business shall have the
right to pursue all applicable legal and equitable remedies including termination and recovery of damages.
Athletes participating in Campaigns that fail to fully comply with all applicable FTC Disclosure Guidelines
[shall/may] not be permitted to participate in any future Campaigns and [will/may] be removed from our
Platform. `),vn=o("br"),Un=o("br"),Dn=m(` 12. CONFIDENTIALITY
`),Bn=o("br"),Yn=o("br"),Cn=m(`
“Confidential Information” means any information disclosed to a Business by DapUp, either directly or
indirectly, in writing, orally or by inspection of tangible objects including, without limitation, all
Athlete related information, materials, and offer terms. Confidential Information shall not, however,
include information that You can establish: (i) was publicly known and made generally available in the
public domain prior to the time of disclosure to You by DapUp; (ii) becomes publicly known and made generally
available after disclosure to You by DapUp other than through Your action or inaction; or (iii) is in
Your possession, without confidentiality restrictions, prior to the time of disclosure by DapUp as shown
by Your files and records. Business shall not at any time (i) disclose, sell, license, transfer or otherwise
make available to any person or entity any Confidential Information (except to Your employees and agents
who have a legitimate need to know such information and are bound in writing by confidentiality and non-use
restrictions not less protective than those contained herein), or (ii) use, reproduce or copy any Confidential
Information, except as necessary in connection with the purpose for which such Confidential Information
is disclosed to You and in accordance with this Agreement. Business agrees to take all measures to protect
the secrecy, and avoid disclosure and unauthorized use, of the Confidential Information. Business may
disclose Confidential Information if required by law to disclose the Confidential Information, provided
that You give DapUp prompt written notice of such requirement prior to such disclosure and assistance
in obtaining an order protecting the information from public disclosure, and provided further that any
such disclosure is limited to the minimum extent necessary to comply with the legal requirement. All
Confidential Information shall remain the property of DapUp or the property of the party that provided
such Confidential Information and all documents, electronic media and other tangible items containing
or relating to any Confidential Information shall be delivered to DapUp immediately upon DapUp’s request,
and also, upon termination of the Agreement. Nothing contained in the Agreement will prevent DapUp, its
parent and/or affiliates from complying with privacy laws and regulations, and if there is any conflict
between this Agreement and the terms of the applicable DapUp Privacy Policy (as posted on or linked from
the DapUp website), this Agreement shall control. Athlete may not issue any press release or other public
statement regarding this Agreement, DapUp, its parent and/or its affiliates without DapUp’s prior written
consent. `),Pn=o("br"),Ln=o("br"),Hn=m(`
13.PLATFORMGUIDELINES `),_n=o("br"),kn=o("br"),Fn=m(`
All participants in the Platform or a Campaign shall comply with the following Requirements and restrictions.
Campaign opportunities will be presented to the Athlete(s) by DapUp through the Platform setting forth
terms for each Campaign. Athlete(s) and Business(es) shall comply with the terms of the Campaign, including,
but not limited to, the time frames specified for posting Campaign related materials.
`),Mn=o("br"),Gn=o("br"),$n=m(`
Athlete(s) shall only post Campaign related materials and Business URL links on authorized websites and
apps within their directly owned or controlled social channel. “Athlete Content” means Athlete content
generated in the course of a Campaign including, without limitation, all creative presentation, social
media posts, photographs, images, graphics, illustrations, video, original artwork, text, messages, data,
information or other communications, titles, computer software, music, audio files or other sounds, URLs
and descriptions, intellectual property, and any other type of content or media that Athletes may create,
prepare, produce and/or distribute pursuant to its use of the Platform and this Agreement. Athlete Content
shall not include any material that may be deemed illegal, deceptive or offensive by DapUp or the Business.
`),Wn=o("br"),Vn=o("br"),qn=m(`

DapUp reserves the right to track all visitors who view the Campaign post (each, a “View”).
Athlete(s) shall maintain absolute traffic integrity by not taking any action to manipulate View
traffic. Specifically, in this regard, Athlete(s) shall not generate Views through any automated,
deceptive, fraudulent or other invalid means. Links and posts must be generated internally and
limited to properties owned by the Athlete(s)
`),zn=o("br"),xn=o("br"),jn=m(`
Facilitated or promoted and Campaign related content shall not contain plagiarized, defamatory, libelous,
slanderous, or unlawful and prohibited content and/or activity and shall not contain any content that
infringes the intellectual property rights of third parties. `),Xn=o("br"),Kn=o("br"),Qn=m(`
Pornography or sexually explicit, overly graphic, hate related, violent, profanity, obscenity, or other
vulgar content shall not be employed in the Platform or a Campaign.
`),Jn=o("br"),Zn=o("br"),ei=m(`
Misleading descriptions, titles, thumbnails, tags, large amounts of repetitive content is not in the
spirit of the Platform or a Campaign. `),ti=o("br"),ni=o("br"),ii=m(`
Facilitated or promoted and Campaign related content and links shall not be misleading, inaccurate, or
deceptive, or View through to a site that is unrelated to content. `),oi=o("br"),ri=o("br"),ai=m(`
There shall be no harassment, threats, invasion of privacy, predatory behavior, or stalking.
`),si=o("br"),li=o("br"),pi=m(`
14. UNAUTHORIZED USE AND REMEDIES `),ui=o("br"),fi=o("br"),hi=m(`

Any attempt to utilize automated programs, bots, screen scraping, database calls, human initiated
data collection, or to copy, replicate, crawl, spider, index, store, cache or employ any other means
of gathering data, content or other information for the purpose of obtaining unauthorized
information from any Business or Athlete or reverse engineering our Platform for commercial gain is
strictly prohibited. Any manipulation of View data, impressions or any other relevant data or metric
reported in the Platform as specified in this Agreement is strictly prohibited. DapUp will not be
liable or responsible for any such actions. The offending party will be immediately removed and
banned from the Platform and may be liable to third parties.
`),mi=o("br"),ci=o("br"),di=m(`
15. MODIFICATIONS `),bi=o("br"),yi=o("br"),Ai=m(`
DapUp reserves the right, at any time, to modify, update or revise this Agreement, without prior notice
to You, by making those modifications available on the Platform or by providing notice to You as specified
in this Agreement. Modifications will be effective immediately upon posting on the DapUp website and
will apply automatically to any new Services or to any modification of Services. The most recent version
of these Terms of Use will always be available on the DapUp website. Continued use of the Platform or
any part thereof on the part of the User after the entry into effect of new Terms of Use will signify
the User ́s acceptance of the same. `),Ei=o("br"),Ti=o("br"),Ri=m(`
16. REPRESENTATIONS AND WARRANTIES `),wi=o("br"),Ii=o("br"),Oi=m(`
Businesses participating in the Platform each represent, warrant and covenant to DapUp and Athletes that
(i) You have the full right, power and authority to enter into and fully perform Your obligations under
this Agreement in accordance with its terms; (ii) Your use of DapUp’s Platform is solely for lawful commercial
and business purposes; (iii) You have the necessary rights to the Business Content you provide including,
without limitation, authorizations, waivers and releases necessary to provide, distribute and publish
such Business Content (including, without limitation, all creative presentation, social media posts,
photographs, images, video, original artwork, text, messages, data, information or other communications,
titles, computer software, music, audio files or other sounds, URLs and descriptions, intellectual property,
and any other type of content or media that You may create, prepare, produce and/or distribute pursuant
to your use of the Platform and this Agreement) pursuant to a Campaign and this Agreement; and (iv) all
such Business Content: (a) does not violate any law, statute, ordinance, treaty or regulation, including,
but not limited to, the Federal Trade Commission Act and all rules and regulations promulgated thereunder
and FTC Guidelines, DapUp policy or Guideline; (b) does not infringe any copyright, patent, trademark,
trade secret or other intellectual property right of any third party; (c) does not breach any duty toward
or rights of any person or entity including rights of publicity or privacy, and have not otherwise resulted
in or are not likely to result in any consumer fraud, product liability, tort, breach of contract, injury,
damage or harm of any kind to any person or entity; (d) are not false, deceptive or misleading; (e) does
not contain any profanity, scandalous, libelous, defamatory, slanderous, threatening, obscene, pornographic
or unlawful matter or material; (f) will be free of viruses, malware, Trojan horses, trap doors, back
doors, Easter eggs, worms, time bombs, cancelbots or other computer programming routines that may potentially
damage, interfere with, intercept, or expropriate any system data or personal information; and (g) will
comply with the applicable Campaign and the Requirements; and (i) You will not engage or cause others
to engage in any form of spamming or improper or malicious, as determined by DapUp, Viewing, impression
or marketing activities through the Platform, and You will comply with all applicable laws including
complying with all applicable laws such as the CAN- SPAM Act of 2003. `),gi=o("br"),Ni=o("br"),Si=m(`
17. COPYRIGHT, TRADEMARKS AND PROPRIETARY RIGHTS `),vi=o("br"),Ui=o("br"),Di=m(`
You acknowledge and agree that DapUp (or DapUp ́s licensors) own all legal rights, title and interest
in and to the Platform and the Content as applicable, including any intellectual property rights. You
further acknowledge that the Platform may contain information which is designated confidential by DapUp
and that You shall not disclose such information without DapUp ́s prior written consent. DapUp retains
all intellectual property rights in and to the any additions, improvements, updates and modifications
to the Platform. You receive no ownership interest in or to the Platform or Content and You are not granted
any right or license to use the Platform or Content, apart from Your right to access the Platform and
Content in compliance with this Agreement. Notwithstanding anything in the Privacy Policy or these Terms
of Use to the contrary, DapUp shall have the right to collect, extract, compile, process and analyze
non- personally identifiable data or information that is generated and processed in connection with the
Service. The Platform or Content may contain links to third-party sites that are not under the control
of DapUp. DapUp is not responsible for any content (or associated intellectual property rights) on any
linked site and You access any third- party site from the Platform at Your own risk.
`),Bi=o("br"),Yi=o("br"),Ci=m(`
Except as expressly authorized pursuant to a Campaign or as agreed to by DapUp in a separate written
agreement, nothing in this Agreement gives You a right to use any of DapUp ́s, any Business’, or any Athlete’
trade names, trademarks, service marks, logos, domain names, and other distinctive brand features. If
You have been given an explicit right to use any of these brand features in a separate written agreement
with DapUp, then You agree that Your use of such features shall be in compliance with that agreement.
Unless You have been expressly authorized to do so in writing by DapUp, You agree that You will not use
any trademark, service mark, trade name, logo of any company or organization in a way that is likely
or intended to cause confusion about the owner or authorized user of such marks, names or logos.
`),Pi=o("br"),Li=o("br"),Hi=m(`
If DapUp makes any Business names, logos, trademarks, product images or other Business materials (“Business
Materials”) available for Your use in connection with a Campaign, then subject to the terms and conditions
provided to Athlete by DapUp or Business, Business grants Athlete a non- exclusive, revocable, non-transferable
right to use the Business Materials only pursuant to those terms and conditions and this Agreement and
only for purposes of the Campaign. Athlete may not use them in a manner that suggests any endorsement
of Athlete or Athlete’s website/blog/social media sites or other sites or services unless agreed to by
a separate written agreement. The license to the Business Materials will automatically terminate if Athlete
exceeds the scope of the license or violates any of the terms and conditions hereunder.
`),_i=o("br"),ki=o("br"),Fi=m(`
All Athlete Content will belong exclusively to DapUp. DapUp shall be the sole owner of all right title
and interest in and to any and all Athlete Content and all intellectual property rights therein or related
thereto. Pursuant to the agreements between Athlete and Business, the Business may acquire a limited
license to display such Athlete Content on Business’s blog, social media accounts, in portfolios, and
other self- promotion channels. As to any portion of the Athlete Content created after the execution
of this Agreement, the assignment shall become effective immediately upon creation thereof, without need
for further consideration or written agreement among the parties. By way of example and not limitation,
DapUp shall have the right to publish, repurpose, create derivative works of and further use the Athlete
Content for any purpose without any further assignment, license or authorization and shall have the righttolicenseandsublicensetheAthleteContentatitsdiscretion.
`),Mi=o("br"),Gi=o("br"),$i=m(`
Business is prohibited from modifying, removing, suppressing, or in any other way making inconspicuous
the copyright, digital fingerprints, watermarks, identification labels, legal notices contained within
any content or other technical protection devices or data identifying DapUp or its licensors rights in
the content, its files, or its components. `),Wi=o("br"),Vi=o("br"),qi=m(`
If You believe that content has been used in a way that constitutes copyright infringement, or Your intellectual
property rights have been otherwise infringed, please notify DapUp at info@dapup.co. We will review all
claims of copyright infringement received and remove the Content deemed to have been posted or distributed
in breach of any applicable laws. To make a claim, please provide us with the following: `),zi=o("br"),xi=o("br"),ji=m(`
1. A description of the copyrighted work that You claim has been infringed; `),Xi=o("br"),Ki=o("br"),Qi=m(` 2.
Information sufficient to enable DapUp to locate the allegedly infringing Content on the Service;
`),Ji=o("br"),Zi=o("br"),eo=m(`
3. Your address, telephone number and email address; `),to=o("br"),no=o("br"),io=m(`

4. A statement by You that You have a good faith belief that the use of the Content is not
authorized; `),oo=o("br"),ro=o("br"),ao=m(`
5. A statement by You that the above information in Your notification is accurate and that You are the
copyright owner or authorized to act on the copyright owner's behalf; and `),so=o("br"),lo=o("br"),po=m(`
6. A signature of the person authorized to act on behalf of the owner of the copyright interest.
`),uo=o("br"),fo=o("br"),ho=m(`
Upon receipt of notice as described above, DapUp will take whatever action, in its sole discretion, it
deems appropriate, including removal of the challenged use or termination of the posting account.
`),mo=o("br"),co=o("br"),bo=m(`
18. INDEMNIFICATION `),yo=o("br"),Ao=o("br"),Eo=m(`
Businesses participating in the Platform (“Indemnitors”) each agree to indemnify and hold harmless DapUp
and Athletes, and their affiliates and their officers, directors, licensors, partners, licensees, consultants,
contractors, agents, attorneys, employees (each, a “Indemnified Entity” and collectively, the “Indemnified
Entities”) and third party service providers from any and all claims, liabilities, costs and expenses,
including reasonable attorneys’ fees (collectively, “Claim(s)”), that arise from: (i) Your use or misuse
of the Platform; (ii) Athlete Content or social postings; (iv) performance of a Campaign due to Your
conduct or actions; and (v) Your breach of this Agreement, including but not limited to applicable representations
and warranties, and any separate Agreement the parties execute. You agree to be solely responsible for
defending any Claim against or suffered by DapUp and/or any Indemnified Entity, subject to DapUp and/or
the Indemnified Entity’s right to participate with counsel of its own choosing, and for payment of damages
or losses resulting from all claims against DapUp, and/or any Indemnified Entities provided that You
will not agree to any settlement that imposes any obligation or liability on DapUp and/or an Indemnified
Entities without DapUp’s or Indemnified Entity’s prior express written consent. If You are accepting
or agreeing to this Agreement on behalf of a company or other entity, You and such entity shall be jointly
and severally liable for all of Indemnitors promises and obligations pursuant to this this Section [18].
`),To=o("br"),Ro=o("br"),wo=m(`
19. INTERNATIONAL USE `),Io=o("br"),Oo=o("br"),go=m(`
As a consequence of the global nature of the Internet, You agree to comply with all local rules and laws
applicable to You in respect of Your conduct on the Internet and acceptable content. Specifically, You
agree to comply with all applicable laws regarding use, processing and storage of personal data, obscene
and indecent content and communications and those regarding the transmission of technical data exported
from the United States or the country from which You access the Platform.
`),No=o("br"),So=o("br"),vo=m(`
20. WARRANTY DISCLAIMER `),Uo=o("br"),Do=o("br"),Bo=m(`
BUSINESS EXPRESSLY AGREES THAT THE SERVICES ARE AVAILABLE ON AN “AS IS“ BASIS, WITHOUT WARRANTY OF ANY
KIND, EXPRESS OR IMPLIED, AND THAT YOUR USE THEREOF IS AT YOUR OWN RISK. WITHOUT LIMITING THE GENERALITY
OF THE FOREGOING, DAPUP DISCLAIMS TO THE MAXIMUM EXTENT PERMITTED BY LAW ANY AND ALL WARRANTIES, EXPRESS
OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY (I) WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR
PURPOSE, (II) WARRANTIES AGAINST INFRINGEMENT OF ANY THIRD PARTY INTELLECTUAL PROPERTY OR PROPRIETARY
RIGHTS, (III) WARRANTIES RELATING TO DELAYS, INTERRUPTIONS, ERRORS, OR OMISSIONS IN THE SERVICE OR DAPUP
WEBSITE, OR ANY THIRD PARTY THEREOF, (IV) WARRANTIES RELATING TO THE TRANSMISSION OR DELIVERY OF THE
SERVICE OR THE DAPUP WEBSITE, (V) WARRANTIES RELATING TO THE ACCURACY OR CORRECTNESS OF DATA, AND ANY
OTHER WARRANTIES OTHERWISE RELATING TO PERFORMANCE, NONPERFORMANCE OR OTHER ACTS OR OMISSIONS BY DAPUP.
FURTHER, AND WITHOUT LIMITING THE GENERALITY OF ANY OF THE FOREGOING, THERE IS NO WARRANTY THAT THE PLATFORM
OR THE DAPUP WEBSITE WILL MEET YOUR NEEDS OR REQUIREMENTS OR THE NEEDS OR REQUIREMENTS OF ANY OTHER PERSON.
IN ADDITION, YOU ACKNOWLEDGE AND AGREE THAT DAPUP ́S WARRANTY DOES NOT COVER TELECOMMUNICATIONS OR INTERNET
OUTAGES CAUSED BY THIRD PARTIES OR OTHERWISE OUTSIDE OF DAPUP'S CONTROL. `),Yo=o("br"),Co=o("br"),Po=m(`
BECAUSE SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN CATEGORIES OF DAMAGES OR IMPLIED
WARRANTIES, THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU. IN SUCH JURISDICTIONS, DAPUP ́S LIABILITY IS LIMITED
TO THE GREATEST EXTENT PERMITTED BY LAW. `),Lo=o("br"),Ho=o("br"),_o=m(` 21. LIMITATION OF LIABILITY
`),ko=o("br"),Fo=o("br"),Mo=m(`
DAPUP SHALL NOT BE LIABLE TO BUSINESS FOR DAMAGES OF ANY KIND ARISING OUT OF ATHLETE’S USE OF THE PLATFORM.
IN NO EVENT SHALL DAPUP OR ANY DAPUP ENTITY BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL,
PUNITIVE, OR EXEMPLARY DAMAGES, ARISING OUT OF, OR IN CONNECTION WITH YOUR USE OF THE PLATFORM OR PARTICIPATION
IN A CAMPAIGN INCLUDING, WITHOUT LIMITATION, ANY: (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II)
LOST BUSINESS, LOST REVENUES, OR LOSS OF ANTICIPATED PROFITS OR ANY OTHER PECUNIARY OR NON-PECUNIARY
LOSS OR DAMAGES, (III) ANY UNAUTHORIZED ACCESS TO OR USE OF PERSONAL INFORMATION, (IV) INTERRUPTION OR
FAILURE OF THE SERVICE, (V) ANY BUGS, VIRUSES, EASTER EGGS, TROJAN HORSES OR OTHER FORMS OF MALWARE INTRODUCED
TO THE SERVICE BY A THIRD PARTY. DAPUP SHALL NOT BE LIABLE FOR ANY OFFENSIVE, DEFAMATORY, OR ILLEGAL
CONDUCT OR CONTENT OF ANY THIRD PARTY AND ANY USER’S OR ATHLETE’S SOLE REMEDY IS TO DISCONTINUE USING
THE PLATFORM OR PARTICIPATION IN ANY CAMPAIGN. ATHLETE AGREES THAT IT WILL NOT HOLD DAPUP RESPONSIBLE
FOR THE SELECTION OR RETENTION OF, OR ANY ACTS, ERRORS, OR OMISSIONS BY, ANY THIRD PARTY IN CONNECTION
WITH THIS AGREEMENT, INCLUDING WITH RESPECT TO VIEWS BY ANY THIRD PARTY ON ATHLETE’S POSTING(S) OF CAMPAIGNS
AND ATHLETE CONTENT, REGARDLESS OF THE INTENT OF SUCH THIRD PARTY. `),Go=o("br"),$o=o("br"),Wo=m(`
THE FOREGOING LIMITATIONS APPLY REGARDLESS OF THE LEGAL THEORY UPON WHICH ANY CLAIM FOR SUCH DAMAGES
IS BASED, WHETHER THE PARTIES HAD BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND WHETHER SUCH DAMAGES
WERE REASONABLY FORESEEABLE. IN NO EVENT SHALL THE AGGREGATE LIABILITY OF DAPUP ARISING OUT OF OR RELATED
TO THIS AGREEMENT EXCEED THE TOTAL FEES PAID TO DAPUP BY BUSINESS IN THE MONTH PRIOR TO THE MONTH IN
WHICH THE CLAIM AROSE. `),Vo=o("br"),qo=o("br"),zo=m(`

YOU ACKNOWLEDGE AND AGREE THAT (A) THE REMEDIES, EXCLUSIONS, LIMITATIONS OF LIABILITY, AND
LIMITATION OF DAMAGES HEREIN, REFLECT A REASONABLE ALLOCATION OF RISKS; (B) THAT DAPUP WOULD NOT
ENTER INTO THIS AGREEMENT WITHOUT THESE EXCLUSIONS, LIMITATIONS OF LIABILITY, AND ALL OTHER TERMS IN
THIS AGREEMENT. ATHLETE ACKNOWLEDGES THAT THE TERMS CONTAINED IN THIS AGREEMENT ARE A FAIR
ALLOCATION OF RISKS BETWEEN BUSINESS AND DAPUP. BECAUSE SOME JURISDICTIONS DO NOT ALLOW THE
EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, DAPUP ́S LIABILITY IN SUCH
JURISDICTIONS SHALL BE LIMITED TO THE FULLEST EXTENT PERMITTED BY LAW. `),xo=o("br"),jo=o("br"),Xo=m(`
22. NOTICES `),Ko=o("br"),Qo=o("br"),Jo=m(`
Except for copyright infringement notices as set forth in Section [17]: Copyright, Trademarks, and Proprietary
Rights above, any notice from User to DapUp must be addressed to info@dapup.co.
`),Zo=o("br"),er=o("br"),tr=m(`
There may be other information regarding the Platform and DapUp’s services that the law requires us to
send to the User. User consents to DapUp ́s sending this information in electronic form to the email address
provided in the User profile on the DapUp website. Email shall be the fully authorized formal and standard
means of communication of notices and messages and shall be considered delivered at the close of business
of the day that the email communication was transmitted. DapUp will send notices via email or regular
mail [or display links to notices on the DapUp website and the Platform. You must read these notices
regularly as these notices will apply and You will be responsible for immediate compliance.
`),nr=o("br"),ir=o("br"),or=m(`

Please ensure Your email address is valid and up to date to receive such information. We may also
provide required information to the User access to www.dapup.co or another website designated in an
email notice or generally designated in advance for this purpose. Notices provided to You via email
will be deemed given and received on the transmission date. `),rr=o("br"),ar=o("br"),sr=m(`
23. GOVERNING LAW; JURISDICTION AND VENUE `),lr=o("br"),pr=o("br"),ur=m(`
This Agreement shall be governed by the laws of the State of Arkansas, without regard to conflicts of
laws principles. Each party agrees that all disputes arising under this Agreement shall be brought in
the Superior Court of the State of Arkansas in Washington County or the Federal District Court of Arkansas,
Western District. Each party irrevocably consents to such jurisdiction and irrevocably waives any objection
such party may have as to the venue of any such proceeding brought in such court as an inconvenient forum.
`),fr=o("br"),hr=o("br"),mr=m(`
24. ELECTRONIC SIGNATURES EFFECTIVE `),cr=o("br"),dr=o("br"),br=m(`
This Agreement is an electronic contract that sets out the legally binding terms of Your use of the DapUp
Platform. You indicate Your acceptance of this Agreement, and all of the terms and conditions contained
or referenced herein, pursuant to Section 2 (Acceptance of This Agreement) of this Agreement and thereby
also consent to have this Agreement provided to you in electronic form. Please print and save a copy
of this Agreement for Your records. `),yr=o("br"),Ar=o("br"),Er=m(" 25. TERMINATION "),Tr=o("br"),Rr=o("br"),wr=m(`

This Agreement will continue to apply until terminated by either You or DapUp. This Agreement may be
terminated by either party at any time, in that party’s sole discretion by providing notice as
specified herein. Termination will be effective upon receipt by the non-terminating party. Upon
termination of this Agreement for any reason: (1) all rights granted to You in relation to the
Platform and under this Agreement will terminate and You will immediately return and cease using or
accessing all Campaign materials; (2) You will immediately cease all use of and access to the
Platform and all Content. `),Ir=o("br"),Or=o("br"),gr=m(`
Upon termination of this Agreement, any provision which, by its nature or express terms should survive,
will survive such termination or expiration, including but not limited to Sections 3, 5, 6, 8, 10 through
15, and 16 through 28. `),Nr=o("br"),Sr=o("br"),vr=m(" 26. CEASING OF PERFORMANCE OF SERVICES "),Ur=o("br"),Dr=o("br"),Br=m(`
Business will immediately cease performing the Services, and/or return all work created in connection
with my Services, upon notice by DapUp or Athlete. `),Yr=o("br"),Cr=o("br"),Pr=m(`
27. ASSIGNMENT; THIRD-PARTY BENEFICIARY `),Lr=o("br"),Hr=o("br"),_r=m(`
DapUp will have the right to assign this Agreement and rights and delegate its duties in connection with
a merger, reorganization, or sale of substantially all of its assets. This Agreement will bind successors
and permitted assigns. `),kr=o("br"),Fr=o("br"),Mr=m(`
User shall not assign these this Agreement or assign any rights or delegate any obligations hereunder,
in whole or in part, whether voluntarily or by operation of law, without DapUp’s prior written consent.
Any such purported assignment or delegation without consent will be null and void and of no force or
effect. `),Gr=o("br"),$r=o("br"),Wr=m(`
You acknowledge and agree that (i) Athlete is a third-party beneficiary to this Agreement and is entitled
to the rights and benefits hereunder and may enforce the provisions hereof as if it were a party hereto.
`),Vr=o("br"),qr=o("br"),zr=m(`
YOU ALSO ACKNOWLEDGE AND AGREE THAT DAPUP IS A THIRD-PARTY BENEFICIARY TO ANY AGREEMENT REACHED BETWEEN
ATHLETE AND BUSINESS AND IS ENTITLED TO RIGHTS AND BENEFITS SET FORTH THEREIN AS IF IT WERE A PARTY THERETO.
`),xr=o("br"),jr=o("br"),Xr=m(`
28. MISCELLANEOUS `),Kr=o("br"),Qr=o("br"),Jr=m(`
User understands and agrees that this Agreement and any notices given pursuant to this Agreement are
enforceable in electronic format. The specific set of Terms of Use relating to each User’s contract for
the Services will not be stored individually. `),Zr=o("br"),ea=o("br"),ta=m(`
This Agreement constitutes the complete agreement between DapUp and the User and supersedes any prior
oral or written agreement or understanding relating thereto between the User and DapUp.
`),na=o("br"),ia=o("br"),oa=m(`
Should any part of this Agreement be or be found to be invalid, illegal or unenforceable, this shall
in no way affect the validity of the remaining parts. `),ra=o("br"),aa=o("br"),sa=m(`

DapUp ́s failure to act or enforce any provision in respect to this Agreement or a breach
thereofitshallnotconstituteawaiverofsuchprovision. `),la=o("br"),pa=o("br"),ua=m(`
Any questions? `),fa=o("br"),ha=o("br"),ma=m(`
If You have questions, queries or suggestions, please contact us at: `),ca=o("br"),da=o("br"),ba=m(" DapUp, LLC"),ya=o("br"),Aa=o("br"),Ea=m(`
Email: info@dapup.co`),Ta=o("br"),Ra=o("br"),this.h()},l(e){a=r(e,"DIV",{class:!0});var i=G(a);l=r(i,"P",{class:!0});var La=G(l);s=c(La,"Terms of Service"),La.forEach(t),p=L(i),b=r(i,"BUTTON",{class:!0});var Ha=G(b);d=c(Ha,"X"),Ha.forEach(t),i.forEach(t),f=c(e,`
Version 1.1 Dated August 2
`),u=r(e,"BR",{}),y=c(e," Terms of Use "),I=r(e,"BR",{}),N=r(e,"BR",{}),E=c(e,`
1. INTRODUCTION `),T=r(e,"BR",{}),w=r(e,"BR",{}),v=c(e,`
DapUp, LLC (“DapUp”) is a digital influence agency that connects Athletes (as defined below) with persons
or entities who seek to expand their brand, product, and/or service awareness online by creating campaigns
or otherwise establishing a formal business relationship ("Businesses"). DapUp specializes in connecting
Athletes to the Business where it will provide the most value (i.e., the best match). Athletes, for the
purposes of these “Terms of Use” include those who are actively competing on teams or in competitions
that attract substantial attention or that are considered higher level in the sports world and who have
a presence on social media networks (such as Facebook, Twitter, YouTube and TikTok), use their social
media networks to post regular content, and work or are willing to work with Businesses to promote their
brand and/or products or services ("Athlete"). As an Business, DapUp values your opinions and considers
you and your connections with Athletes valuable to Athletes, schools, and the communities impacted by
them. `),A=r(e,"BR",{}),S=r(e,"BR",{}),_=c(e,`

Working with us to connect to Athletes for the purpose of establishing a relationship with the
Athlete via DapUp's proprietary relationships with them and this Platform (the “Service” or
“Services”) is subject to your acceptance of and compliance with all the terms and conditions of
this “Terms of Use,” any statement of work (“SOW”), our Privacy Policy (“Privacy Policy”), and any
instructions, rules, policies, briefs or guidelines related to Athletes (“Guidelines”)
(collectively, the “Agreement”). To the extent of any conflict between this Terms of Use and the
SOW, the terms of SOW shall control. This Agreement is agreed to between DapUp and you, or if you
represent a company or other entity, that company or entity (in either case “You”, “Your”, or
“Business”). If You accept or agree to this Agreement on behalf of a company or other entity, You
represent and warrant that You have the authority to bind that company or other entity to this
Agreement. `),q=r(e,"BR",{}),k=r(e,"BR",{}),F=c(e,`
2. ACCEPTANCE OF THIS AGREEMENT `),J=r(e,"BR",{}),g=r(e,"BR",{}),C=c(e,`
You can accept this Agreement by: `),M=r(e,"BR",{}),Z=r(e,"BR",{}),z=c(e,`
1. Viewing on the “I Agree” or “I Accept” box; `),Y=r(e,"BR",{}),ee=r(e,"BR",{}),oe=c(e,`
2. registering in the DapUp’s online platform (“Platform”) at http://www.dapup.co ; or`),x=r(e,"BR",{}),se=r(e,"BR",{}),te=c(e,`
3. accessing or using the Platform or otherwise accepting to post a campaign to connect with Athletes
(“Campaign”). `),le=r(e,"BR",{}),fe=r(e,"BR",{}),ne=c(e,`
The term of this Agreement will commence on the date any of the earliest above numbered events occur
(the “Effective Date”) and will end when terminated by either party in accordance with this Agreement.
In accepting this Agreement, You agree that DapUp may disclose Your registration and other applicable
information to the Business. [In this case, You understand and agree that DapUp will treat Your use of
the Platform as acceptance of this Agreement from that point onwards.] `),$=r(e,"BR",{}),U=r(e,"BR",{}),V=c(e,`
By accepting this Agreement, You acknowledge and agree that You have read and accept the terms set forth
herein and agree to be bound by this Agreement. Each time You use the Platform, the current version of
the Terms of Use will apply. Accordingly, when You use the Platform, You should check the date of the
Terms of Use (which appears at the top of this document) and review any changes since the last version.
The Terms of Use will be available at all times at [DapUp website link for Terms of Use].
`),D=r(e,"BR",{}),W=r(e,"BR",{}),ie=c(e,`
You may not register and access and use the Platform and may not accept this Agreement if: (a) You are
not legally competent to form a binding contract with DapUp; (b) in the case of a company or other entity,
You lack the authority to enter into this Agreement and bind that company or other entity to this Agreement;
or (c) You do not comply with Section [9] “Eligibility” rules. Your acceptance will legally bind You
to comply with this Agreement. `),he=r(e,"BR",{}),re=r(e,"BR",{}),me=c(e,`
IF YOU DO NOT AGREE TO THE TERMS OF THIS AGREEMENT, OR DO NOT MEET THE QUALIFICATIONS INCLUDED IN THIS
AGREEMENT, THEN YOU HAVE NO RIGHT TO ACCESS OR USE THE PLATFORM AND PROVIDE ANY SERVICES. IF YOU ACCESS
OR USE THE PLATFORM, YOU ACKNOWLEDGE THAT YOUR MEET THE QUALIFICATIONS INCLUDED IN THIS AGREEMENT AND
AGREE TO BE BOUND BY THE TERMS OF THIS AGREEMENT. `),pe=r(e,"BR",{}),Ee=r(e,"BR",{}),Te=c(e,`

Before You continue, You should print off or save a local copy of the Terms of Use for Your records.
`),Re=r(e,"BR",{}),we=r(e,"BR",{}),Ie=c(e,`
3. CAMPAIGNS `),Oe=r(e,"BR",{}),ge=r(e,"BR",{}),Ne=c(e,`
DapUp’s method of operations: Participating Businesses create and send Campaigns through the Platform
located on the DapUp website, which offer Athletes the opportunity to participate in Campaigns from a
Business. DapUp presents this information to eligible Athletes on the platform for Athletes to indicate
whether such Campaign is one they would like to pursue. Each Campaign details a brief description of
the Campaign, deliverables, a start and end date, compensation information, and any exclusivity requirements.
If accepted to the Campaign, participating Athletes will receive additional information and Guidelines
from DapUp via email communications and through Athlete’s account in the Platform. All Campaigns must
comply with the requirements established by DapUp (referred to as the “Requirements”). By accepting and
participating in a Campaign, You acknowledge the terms of the Campaign and agree to be connected that
You have reviewed and accept all Requirements and that You agree to strictly adhere to the Campaign,
the Requirements, and this Agreement.
`),Se=r(e,"BR",{}),ve=r(e,"BR",{}),Ue=c(e,`
Permanence of Content: All content created or published for any Campaign will remain publicly visible
with the campaign hashtag(s) and disclosures for a period of at least 90 days after the final payment
of Fees. In addition, if the Content is modified in any way beyond this time period, the required disclosure
must remain intact in order to comply with FTC requirements. `),De=r(e,"BR",{}),Be=r(e,"BR",{}),Ye=c(e,`

Reporting: The outcomes of all connections between Businesses and Athletes must be reported within 2
days of Athlete receiving compensation by emailing the executed agreements to contracts@dapup.co,
and failure to timely report will result in potential payment deduction of twenty-five dollars
($25.00) in compensation for each day delay insubmission. `),Ce=r(e,"BR",{}),Pe=r(e,"BR",{}),Le=c(e,`
During the term of this Agreement, Athlete has the right to provide content services to others provided
that such other engagement or performance does not: (a) interfere in any way with the timely and professional
performance of the Services to DapUp; (b) require the disclosure or use of Confidential Information;
and (c) conflict with any other agreements between DapUp and Athlete or DapUp and Business regarding
exclusivity. DapUp has no obligation to propose a Campaign to Athlete and may receive content services
from other Athletes during the term of this Agreement. DapUp has no obligation of exclusivity to Businesses
and no obligation, and shall face no liability for any failure, to enforce any possible exclusivity obligations
between Athletes and Businesses. `),He=r(e,"BR",{}),_e=r(e,"BR",{}),ke=c(e,`
If You do not accept the Requirements, You must immediately notify DapUp and refrain from participating
in the Campaign. Noncompliance inwith the Requirements may result removal of the Campaign, ineligibility
to participate in any future DapUp Campaigns, and/or being removed from the DapUp Platform.
`),Fe=r(e,"BR",{}),Me=r(e,"BR",{}),Ge=c(e," 4. REVIEWS & APPROVALS "),$e=r(e,"BR",{}),We=r(e,"BR",{}),Ve=c(e,`
DapUp in its sole discretion shall determine whether Athlete has complied with the Requirements and is
entitled to the compensation in connection with a Campaign. Athletes who do not comply with the Requirements
and this Agreement will not be entitled to the compensation associated with such Campaign. Failure to
submit required posts within the Campaign posting period or to make necessary edits to published posts
in a timely manner may result in disqualification to participate in the Campaign and reduced or non-payment
of associated compensation. `),qe=r(e,"BR",{}),ze=r(e,"BR",{}),xe=c(e,`
Any non-payment of the Athlete by any Business may result in such Business’ removal from the Platform.
Any material deviation of the Campaign by a Business from the details provided in the post of the Campaign
that the Athlete agreed to must be agreed by the Athlete in writing. If a Business makes material changes
or attempts to make material changes to the Campaign without agreement by the Athlete in writing, DapUp
may suspend or remove the Business from the Platform, in its sole discretion.
`),je=r(e,"BR",{}),Xe=r(e,"BR",{}),Ke=c(e,`
5. USE OF PLATFORM `),Qe=r(e,"BR",{}),Je=r(e,"BR",{}),Ze=c(e,`
In order to access the Platform and provide Services, You may be required to provide information about
yourself and/or your business (such as identification or contact details) as part of registration, or
as part of Your continued use of the Platform. You agree that any registration information You provide
to DapUp will always be accurate, complete and up to date. You will update Your registration information
as necessary to maintain accuracy. `),et=r(e,"BR",{}),tt=r(e,"BR",{}),nt=c(e,`
You agree to use the Platform only for purposes that are permitted by (a) this Agreement, and (b) any
applicable law, regulation or generally accepted practices or guidelines in the relevant jurisdictions
(including any laws regarding the export of data or software to and from the United States or other relevant
countries). Unless otherwise agreed in writing by DapUp, You agree that You shall not copy, distribute,
modify, reproduce, duplicate, perform, display, create derivative works from, reverse engineer, decompile,
attempt to obtain the source code or algorithms of, trade, sell, rent, lease, license, sublicense, resell
or transfer the Platform or any portion thereof. You shall not in connection with any Campaign take any
of the following actions or use the Platform to transmit spam, send unsolicited e-mails, conceal the
identity of an e-mail sender or to create or utilize technology to generate fraudulent point activity
including, but not limited to, bots, or spiders. You shall not use the Platform for the benefit of any
third party other than as authorized in this Agreement, whether on a paid or unpaid basis.
`),it=r(e,"BR",{}),ot=r(e,"BR",{}),rt=c(e,`
You agree not to access (or attempt to access) any information of DapUp, Athletes, or Campaign (i) by
any means other than through the interface that is provided by DapUp, unless You have been specifically
allowed to do so in a separate agreement with DapUp; or (ii) through any automated means (including use
of scripts or web crawlers), and You shall ensure to comply with any and all instructions set out on
the Platform. `),at=r(e,"BR",{}),st=r(e,"BR",{}),lt=c(e,`
You agree that You will not engage in any activity that interferes with or disrupts the Platform.
`),pt=r(e,"BR",{}),ut=r(e,"BR",{}),ft=c(e,`
You agree that when You post a Campaign and connect with an Athlete, You shall in no way attempt to circumvent
DapUp to work with the Athlete directly on the Campaign or anything related thereto. You will not use
any information you obtained from DapUp, the Athlete, or any third party to compete with DapUp or in
any way that would be detrimental to DapUp. DapUp, Athlete and Business understand the necessity of protects
on against the unfair competition of circumvention of the other party and that the nature and scope of
such protection has been carefully considered by each party. The parties further acknowledge and agree
that the covenants and provisions of this section, for the consideration for disclosure of the identity
of and nature of the relationship with the Athletes are among the inducements for entering into and consummating
any transaction contemplated as a result thereof. If, however, any court determines that the foregoing
restrictions are not reasonable, such restrictions shall be modified, rewritten, or interpreted to include
as much as their nature and scope will render them enforceable. The parties understand and agree that
in the event of a breach of this Agreement by either party, each shall be entitled to equitable relief,
including injunction and specific performance as a remedy for any such breach, in addition to, and not
exclusive of, any and all other remedies available at law or in equity, including recovery of damages.
`),ht=r(e,"BR",{}),mt=r(e,"BR",{}),ct=c(e,`
You agree that You are solely responsible for (and that DapUp has no responsibility to You or to any
third party for) any breach of Your obligations under this Agreement or applicable law and for the consequences
(including any loss or damage which DapUp or a third party may suffer) of any such breach.
`),dt=r(e,"BR",{}),bt=r(e,"BR",{}),yt=c(e,`
DapUp reserves the right to terminate or suspend Your use of the Platform at its sole discretion, with
or without notice to You, upon any actual, threatened, or suspected breach of this Agreement or applicable
law or upon any other conduct deemed by DapUp to be inappropriate or detrimental to the Platform, DapUp,
or any Business, Athlete, or any person or entity accessing or using the DapUp website or Platform (“User”).
`),At=r(e,"BR",{}),Et=r(e,"BR",{}),Tt=c(e,`

6. YOUR ACCOUNT, PASSWORDS AND ACCOUNT SECURITY `),Rt=r(e,"BR",{}),wt=r(e,"BR",{}),It=c(e,`
Your account, account ID and password is for Your sole use. You may not distribute, transfer or allow
any third party to access Your account. `),Ot=r(e,"BR",{}),gt=r(e,"BR",{}),Nt=c(e,`
You agree and understand that You are responsible for maintaining the confidentiality of any account
ID and passwords associated with any account You use to access the Platform. Accordingly, You agree that
You will be solely responsible to DapUp for all activities that occur under Your account. If You become
aware of any unauthorized use of Your password or of Your account or any other breach of security, You
agree to immediately notify DapUp. `),St=r(e,"BR",{}),vt=r(e,"BR",{}),Ut=c(e,`
7. PRIVACY AND YOUR PERSONAL INFORMATION `),Dt=r(e,"BR",{}),Bt=r(e,"BR",{}),Yt=c(e,`
For information about DapUp’s data protection practices, please read DapUp’s Privacy Policy. This policy
explains how DapUp treats Your personal information, and protects Your privacy, when You use the Platform.
Business expressly consents to the use and disclosure of personally identifiable information and other
data and information as described in DapUp’s Privacy Policy. Business acknowledges and agrees that DapUp
may disclose all information about Business and that Business may provide with respect to Buisness Content
to the applicable Business to which that Business Content relates. By accepting this Agreement, You agree
to the use of Your data in accordance with DapUp’s Privacy Policy, which is incorporated into and made
part of this Agreement. `),Ct=r(e,"BR",{}),Pt=r(e,"BR",{}),Lt=c(e,`
8. ELIGIBILITY `),Ht=r(e,"BR",{}),_t=r(e,"BR",{}),kt=c(e,`

You must be eighteen (18) years or older to register a Business or register as an Athlete in the
Platform. By registering on the Platform, You represent and warrant that you are at least 18 years
old. DapUp reserves the right to determine the eligibility of any Business or Campaign to ensure the
marketplace on the Platform remains in the best interest of DapUp, other Businesses, and the
Athletes, such determination to be made in DapUp’s sole discretion. `),Ft=r(e,"BR",{}),Mt=r(e,"BR",{}),Gt=c(e,`
By registering on the Platform, You represent and warrant that all information You submit is truthful
and accurate, and that You agree to maintain the accuracy of such information. You understand and agree
that we will use the information You provide in accordance with the terms of the DapUp Privacy Policy.
DapUp accounts are not transferable, assignable or resalable under any circumstances and You are not
permitted to transfer or assign Your rights or obligations under this Agreement without the express written
consent of DapUp. `),$t=r(e,"BR",{}),Wt=r(e,"BR",{}),Vt=c(e,`
Businesses on the Platform must have been registered directly by an individual with control and authority
to bind the Businesses. DapUp will evaluate and qualify Businesses and Athletes according to its internal
criteria and DapUp may accept or reject Businesses and Athletes for participation in any Campaign in
its sole discretion. `),qt=r(e,"BR",{}),zt=r(e,"BR",{}),xt=c(e,`
9. FEES `),jt=r(e,"BR",{}),Xt=r(e,"BR",{}),Kt=c(e,`
Businesses will pay Athlete pursuant to the formal contract between Athlete and Business. DapUp shall
not be obligated to pay Athlete any Fees. `),Qt=r(e,"BR",{}),Jt=r(e,"BR",{}),Zt=c(e,`

To post a Campaign on the Platform, Businesses shall pay DapUp a subscription fee of Forty-Nine and
99/100 Dollars ($49.99) per month for the months Business wants to post Campaigns. Businesses may
post an unlimited number of Campaigns during such months and connect with as many Athletes as a
Business would like to, subject to the rules and eligibility provisions established herein.
`),en=r(e,"BR",{}),tn=r(e,"BR",{}),nn=c(e,`
Businesses shall also pay DapUp ten percent (10%) of the compensation to be paid to DapUp in any agreement
entered into between Athletes and Businesses in relation to any Campaign posted on the Platform or any
relationship established between an Athlete and a Business herein (the “Commission Fee”).
`),on=r(e,"BR",{}),rn=r(e,"BR",{}),an=c(e,`
Business acknowledges that Athlete is an independent contractor and not an employee of DapUp or Business,
and nothing herein is intended to, or shall be construed to create a partnership, agency, joint venture,
employment or similar relationship between the parties. Business also acknowledges that it is responsible
for any reporting requirements imposed by the federal, state, or local government and responsible for
compliance with all other applicable laws, rules, and regulations. `),sn=r(e,"BR",{}),ln=r(e,"BR",{}),pn=c(e,`
10. CONTENT INFORMATION `),un=r(e,"BR",{}),fn=r(e,"BR",{}),hn=c(e,`
“Business Content” is content presented to Athletes as part of the Campaign, including but not limited
to advertisements in the sponsored content contained in Campaign materials, may be protected by intellectual
property rights (as defined below) which might be owned by the Businesses who provide that Content to
DapUp (or by other persons or companies on their behalf). Business is responsible to verify the accuracy,
completeness and applicability of the Business Content for authorized use. DapUp will not be responsible
for any errors or omissions in the Business Content. “Intellectual property rights” means all intellectual
property and proprietary rights throughout the world, including, without limitation, all copyrights,
trademarks, trade secrets, patents, moral rights, and other rights protecting data, information or intangible
property throughout the world. `),mn=r(e,"BR",{}),cn=r(e,"BR",{}),dn=c(e,`
Athlete shall not use the Business Content for any unauthorized purpose and shall not modify, alter,
reproduce, rent, lease, loan, sell, license, sublicense, distribute, transfer or assign any Business
Content or create derivative works based on the Business Content (either in whole or in part) unless
they have been specifically authorized to do so by DapUp or by the owners of that Business Content in
a separate written agreement. Athletes and Businesses shall maintain any copyright and trademark notices
or marks and will not alter or remove any valid notices associated with any content. Athlete is not granted
any right or license to the Business Content except as expressly set forth herein or in a separate written
agreement. `),bn=r(e,"BR",{}),yn=r(e,"BR",{}),An=c(e,`
[You understand that by using the Platform, You may be exposed to content that You may find offensive,
indecent or objectionable and that, in this respect, You use the Platform at Your own risk.]
`),En=r(e,"BR",{}),Tn=r(e,"BR",{}),Rn=c(e,`
Business agrees that Business is solely responsible for (and that DapUp has no responsibility to them
or to any third party for) any content that You create, transmit or display while using the Platform
and for the consequences of Your actions (including any loss or damage which DapUp or a third party may
suffer) by doing so. DapUp will direct any party to take appropriate action to address any copyright
infringement that it discovers including removal of content when notified of any such infringement. Businesses
will immediately implement any such direction from DapUp and will notify DapUp of any copyright infringement
that it becomes aware of and will take immediate action to address any violation of copyright or other
violation of proprietary rights of third parties and applicable laws. `),wn=r(e,"BR",{}),In=r(e,"BR",{}),On=c(e,`
11. DISCLOSURE AND ATHLETE REQUIREMENTS `),gn=r(e,"BR",{}),Nn=r(e,"BR",{}),Sn=c(e,`
Every Athlete registering to DapUp, and any Athlete utilizing the Platform for participation in a Campaign,
is required to provide disclosure in accordance with FTC Disclosure Guidelines. Each Athlete shall fully
comply with all applicable FTC Guidelines including, but not limited to, the FTC Guidelines Concerning
the Use of Endorsements and Testimonials in Advertising and .com Disclosures How to Make Effective Disclosures
in Digital Advertising, including any updates, additions, modifications, or supplemental guidance to
the foregoing. Any failure of Athlete to fully disclose in strict accordance with the FTC Disclosure
Guidelines shall constitute a material breach of this Agreement and DapUp and Business shall have the
right to pursue all applicable legal and equitable remedies including termination and recovery of damages.
Athletes participating in Campaigns that fail to fully comply with all applicable FTC Disclosure Guidelines
[shall/may] not be permitted to participate in any future Campaigns and [will/may] be removed from our
Platform. `),vn=r(e,"BR",{}),Un=r(e,"BR",{}),Dn=c(e,` 12. CONFIDENTIALITY
`),Bn=r(e,"BR",{}),Yn=r(e,"BR",{}),Cn=c(e,`
“Confidential Information” means any information disclosed to a Business by DapUp, either directly or
indirectly, in writing, orally or by inspection of tangible objects including, without limitation, all
Athlete related information, materials, and offer terms. Confidential Information shall not, however,
include information that You can establish: (i) was publicly known and made generally available in the
public domain prior to the time of disclosure to You by DapUp; (ii) becomes publicly known and made generally
available after disclosure to You by DapUp other than through Your action or inaction; or (iii) is in
Your possession, without confidentiality restrictions, prior to the time of disclosure by DapUp as shown
by Your files and records. Business shall not at any time (i) disclose, sell, license, transfer or otherwise
make available to any person or entity any Confidential Information (except to Your employees and agents
who have a legitimate need to know such information and are bound in writing by confidentiality and non-use
restrictions not less protective than those contained herein), or (ii) use, reproduce or copy any Confidential
Information, except as necessary in connection with the purpose for which such Confidential Information
is disclosed to You and in accordance with this Agreement. Business agrees to take all measures to protect
the secrecy, and avoid disclosure and unauthorized use, of the Confidential Information. Business may
disclose Confidential Information if required by law to disclose the Confidential Information, provided
that You give DapUp prompt written notice of such requirement prior to such disclosure and assistance
in obtaining an order protecting the information from public disclosure, and provided further that any
such disclosure is limited to the minimum extent necessary to comply with the legal requirement. All
Confidential Information shall remain the property of DapUp or the property of the party that provided
such Confidential Information and all documents, electronic media and other tangible items containing
or relating to any Confidential Information shall be delivered to DapUp immediately upon DapUp’s request,
and also, upon termination of the Agreement. Nothing contained in the Agreement will prevent DapUp, its
parent and/or affiliates from complying with privacy laws and regulations, and if there is any conflict
between this Agreement and the terms of the applicable DapUp Privacy Policy (as posted on or linked from
the DapUp website), this Agreement shall control. Athlete may not issue any press release or other public
statement regarding this Agreement, DapUp, its parent and/or its affiliates without DapUp’s prior written
consent. `),Pn=r(e,"BR",{}),Ln=r(e,"BR",{}),Hn=c(e,`
13.PLATFORMGUIDELINES `),_n=r(e,"BR",{}),kn=r(e,"BR",{}),Fn=c(e,`
All participants in the Platform or a Campaign shall comply with the following Requirements and restrictions.
Campaign opportunities will be presented to the Athlete(s) by DapUp through the Platform setting forth
terms for each Campaign. Athlete(s) and Business(es) shall comply with the terms of the Campaign, including,
but not limited to, the time frames specified for posting Campaign related materials.
`),Mn=r(e,"BR",{}),Gn=r(e,"BR",{}),$n=c(e,`
Athlete(s) shall only post Campaign related materials and Business URL links on authorized websites and
apps within their directly owned or controlled social channel. “Athlete Content” means Athlete content
generated in the course of a Campaign including, without limitation, all creative presentation, social
media posts, photographs, images, graphics, illustrations, video, original artwork, text, messages, data,
information or other communications, titles, computer software, music, audio files or other sounds, URLs
and descriptions, intellectual property, and any other type of content or media that Athletes may create,
prepare, produce and/or distribute pursuant to its use of the Platform and this Agreement. Athlete Content
shall not include any material that may be deemed illegal, deceptive or offensive by DapUp or the Business.
`),Wn=r(e,"BR",{}),Vn=r(e,"BR",{}),qn=c(e,`

DapUp reserves the right to track all visitors who view the Campaign post (each, a “View”).
Athlete(s) shall maintain absolute traffic integrity by not taking any action to manipulate View
traffic. Specifically, in this regard, Athlete(s) shall not generate Views through any automated,
deceptive, fraudulent or other invalid means. Links and posts must be generated internally and
limited to properties owned by the Athlete(s)
`),zn=r(e,"BR",{}),xn=r(e,"BR",{}),jn=c(e,`
Facilitated or promoted and Campaign related content shall not contain plagiarized, defamatory, libelous,
slanderous, or unlawful and prohibited content and/or activity and shall not contain any content that
infringes the intellectual property rights of third parties. `),Xn=r(e,"BR",{}),Kn=r(e,"BR",{}),Qn=c(e,`
Pornography or sexually explicit, overly graphic, hate related, violent, profanity, obscenity, or other
vulgar content shall not be employed in the Platform or a Campaign.
`),Jn=r(e,"BR",{}),Zn=r(e,"BR",{}),ei=c(e,`
Misleading descriptions, titles, thumbnails, tags, large amounts of repetitive content is not in the
spirit of the Platform or a Campaign. `),ti=r(e,"BR",{}),ni=r(e,"BR",{}),ii=c(e,`
Facilitated or promoted and Campaign related content and links shall not be misleading, inaccurate, or
deceptive, or View through to a site that is unrelated to content. `),oi=r(e,"BR",{}),ri=r(e,"BR",{}),ai=c(e,`
There shall be no harassment, threats, invasion of privacy, predatory behavior, or stalking.
`),si=r(e,"BR",{}),li=r(e,"BR",{}),pi=c(e,`
14. UNAUTHORIZED USE AND REMEDIES `),ui=r(e,"BR",{}),fi=r(e,"BR",{}),hi=c(e,`

Any attempt to utilize automated programs, bots, screen scraping, database calls, human initiated
data collection, or to copy, replicate, crawl, spider, index, store, cache or employ any other means
of gathering data, content or other information for the purpose of obtaining unauthorized
information from any Business or Athlete or reverse engineering our Platform for commercial gain is
strictly prohibited. Any manipulation of View data, impressions or any other relevant data or metric
reported in the Platform as specified in this Agreement is strictly prohibited. DapUp will not be
liable or responsible for any such actions. The offending party will be immediately removed and
banned from the Platform and may be liable to third parties.
`),mi=r(e,"BR",{}),ci=r(e,"BR",{}),di=c(e,`
15. MODIFICATIONS `),bi=r(e,"BR",{}),yi=r(e,"BR",{}),Ai=c(e,`
DapUp reserves the right, at any time, to modify, update or revise this Agreement, without prior notice
to You, by making those modifications available on the Platform or by providing notice to You as specified
in this Agreement. Modifications will be effective immediately upon posting on the DapUp website and
will apply automatically to any new Services or to any modification of Services. The most recent version
of these Terms of Use will always be available on the DapUp website. Continued use of the Platform or
any part thereof on the part of the User after the entry into effect of new Terms of Use will signify
the User ́s acceptance of the same. `),Ei=r(e,"BR",{}),Ti=r(e,"BR",{}),Ri=c(e,`
16. REPRESENTATIONS AND WARRANTIES `),wi=r(e,"BR",{}),Ii=r(e,"BR",{}),Oi=c(e,`
Businesses participating in the Platform each represent, warrant and covenant to DapUp and Athletes that
(i) You have the full right, power and authority to enter into and fully perform Your obligations under
this Agreement in accordance with its terms; (ii) Your use of DapUp’s Platform is solely for lawful commercial
and business purposes; (iii) You have the necessary rights to the Business Content you provide including,
without limitation, authorizations, waivers and releases necessary to provide, distribute and publish
such Business Content (including, without limitation, all creative presentation, social media posts,
photographs, images, video, original artwork, text, messages, data, information or other communications,
titles, computer software, music, audio files or other sounds, URLs and descriptions, intellectual property,
and any other type of content or media that You may create, prepare, produce and/or distribute pursuant
to your use of the Platform and this Agreement) pursuant to a Campaign and this Agreement; and (iv) all
such Business Content: (a) does not violate any law, statute, ordinance, treaty or regulation, including,
but not limited to, the Federal Trade Commission Act and all rules and regulations promulgated thereunder
and FTC Guidelines, DapUp policy or Guideline; (b) does not infringe any copyright, patent, trademark,
trade secret or other intellectual property right of any third party; (c) does not breach any duty toward
or rights of any person or entity including rights of publicity or privacy, and have not otherwise resulted
in or are not likely to result in any consumer fraud, product liability, tort, breach of contract, injury,
damage or harm of any kind to any person or entity; (d) are not false, deceptive or misleading; (e) does
not contain any profanity, scandalous, libelous, defamatory, slanderous, threatening, obscene, pornographic
or unlawful matter or material; (f) will be free of viruses, malware, Trojan horses, trap doors, back
doors, Easter eggs, worms, time bombs, cancelbots or other computer programming routines that may potentially
damage, interfere with, intercept, or expropriate any system data or personal information; and (g) will
comply with the applicable Campaign and the Requirements; and (i) You will not engage or cause others
to engage in any form of spamming or improper or malicious, as determined by DapUp, Viewing, impression
or marketing activities through the Platform, and You will comply with all applicable laws including
complying with all applicable laws such as the CAN- SPAM Act of 2003. `),gi=r(e,"BR",{}),Ni=r(e,"BR",{}),Si=c(e,`
17. COPYRIGHT, TRADEMARKS AND PROPRIETARY RIGHTS `),vi=r(e,"BR",{}),Ui=r(e,"BR",{}),Di=c(e,`
You acknowledge and agree that DapUp (or DapUp ́s licensors) own all legal rights, title and interest
in and to the Platform and the Content as applicable, including any intellectual property rights. You
further acknowledge that the Platform may contain information which is designated confidential by DapUp
and that You shall not disclose such information without DapUp ́s prior written consent. DapUp retains
all intellectual property rights in and to the any additions, improvements, updates and modifications
to the Platform. You receive no ownership interest in or to the Platform or Content and You are not granted
any right or license to use the Platform or Content, apart from Your right to access the Platform and
Content in compliance with this Agreement. Notwithstanding anything in the Privacy Policy or these Terms
of Use to the contrary, DapUp shall have the right to collect, extract, compile, process and analyze
non- personally identifiable data or information that is generated and processed in connection with the
Service. The Platform or Content may contain links to third-party sites that are not under the control
of DapUp. DapUp is not responsible for any content (or associated intellectual property rights) on any
linked site and You access any third- party site from the Platform at Your own risk.
`),Bi=r(e,"BR",{}),Yi=r(e,"BR",{}),Ci=c(e,`
Except as expressly authorized pursuant to a Campaign or as agreed to by DapUp in a separate written
agreement, nothing in this Agreement gives You a right to use any of DapUp ́s, any Business’, or any Athlete’
trade names, trademarks, service marks, logos, domain names, and other distinctive brand features. If
You have been given an explicit right to use any of these brand features in a separate written agreement
with DapUp, then You agree that Your use of such features shall be in compliance with that agreement.
Unless You have been expressly authorized to do so in writing by DapUp, You agree that You will not use
any trademark, service mark, trade name, logo of any company or organization in a way that is likely
or intended to cause confusion about the owner or authorized user of such marks, names or logos.
`),Pi=r(e,"BR",{}),Li=r(e,"BR",{}),Hi=c(e,`
If DapUp makes any Business names, logos, trademarks, product images or other Business materials (“Business
Materials”) available for Your use in connection with a Campaign, then subject to the terms and conditions
provided to Athlete by DapUp or Business, Business grants Athlete a non- exclusive, revocable, non-transferable
right to use the Business Materials only pursuant to those terms and conditions and this Agreement and
only for purposes of the Campaign. Athlete may not use them in a manner that suggests any endorsement
of Athlete or Athlete’s website/blog/social media sites or other sites or services unless agreed to by
a separate written agreement. The license to the Business Materials will automatically terminate if Athlete
exceeds the scope of the license or violates any of the terms and conditions hereunder.
`),_i=r(e,"BR",{}),ki=r(e,"BR",{}),Fi=c(e,`
All Athlete Content will belong exclusively to DapUp. DapUp shall be the sole owner of all right title
and interest in and to any and all Athlete Content and all intellectual property rights therein or related
thereto. Pursuant to the agreements between Athlete and Business, the Business may acquire a limited
license to display such Athlete Content on Business’s blog, social media accounts, in portfolios, and
other self- promotion channels. As to any portion of the Athlete Content created after the execution
of this Agreement, the assignment shall become effective immediately upon creation thereof, without need
for further consideration or written agreement among the parties. By way of example and not limitation,
DapUp shall have the right to publish, repurpose, create derivative works of and further use the Athlete
Content for any purpose without any further assignment, license or authorization and shall have the righttolicenseandsublicensetheAthleteContentatitsdiscretion.
`),Mi=r(e,"BR",{}),Gi=r(e,"BR",{}),$i=c(e,`
Business is prohibited from modifying, removing, suppressing, or in any other way making inconspicuous
the copyright, digital fingerprints, watermarks, identification labels, legal notices contained within
any content or other technical protection devices or data identifying DapUp or its licensors rights in
the content, its files, or its components. `),Wi=r(e,"BR",{}),Vi=r(e,"BR",{}),qi=c(e,`
If You believe that content has been used in a way that constitutes copyright infringement, or Your intellectual
property rights have been otherwise infringed, please notify DapUp at info@dapup.co. We will review all
claims of copyright infringement received and remove the Content deemed to have been posted or distributed
in breach of any applicable laws. To make a claim, please provide us with the following: `),zi=r(e,"BR",{}),xi=r(e,"BR",{}),ji=c(e,`
1. A description of the copyrighted work that You claim has been infringed; `),Xi=r(e,"BR",{}),Ki=r(e,"BR",{}),Qi=c(e,` 2.
Information sufficient to enable DapUp to locate the allegedly infringing Content on the Service;
`),Ji=r(e,"BR",{}),Zi=r(e,"BR",{}),eo=c(e,`
3. Your address, telephone number and email address; `),to=r(e,"BR",{}),no=r(e,"BR",{}),io=c(e,`

4. A statement by You that You have a good faith belief that the use of the Content is not
authorized; `),oo=r(e,"BR",{}),ro=r(e,"BR",{}),ao=c(e,`
5. A statement by You that the above information in Your notification is accurate and that You are the
copyright owner or authorized to act on the copyright owner's behalf; and `),so=r(e,"BR",{}),lo=r(e,"BR",{}),po=c(e,`
6. A signature of the person authorized to act on behalf of the owner of the copyright interest.
`),uo=r(e,"BR",{}),fo=r(e,"BR",{}),ho=c(e,`
Upon receipt of notice as described above, DapUp will take whatever action, in its sole discretion, it
deems appropriate, including removal of the challenged use or termination of the posting account.
`),mo=r(e,"BR",{}),co=r(e,"BR",{}),bo=c(e,`
18. INDEMNIFICATION `),yo=r(e,"BR",{}),Ao=r(e,"BR",{}),Eo=c(e,`
Businesses participating in the Platform (“Indemnitors”) each agree to indemnify and hold harmless DapUp
and Athletes, and their affiliates and their officers, directors, licensors, partners, licensees, consultants,
contractors, agents, attorneys, employees (each, a “Indemnified Entity” and collectively, the “Indemnified
Entities”) and third party service providers from any and all claims, liabilities, costs and expenses,
including reasonable attorneys’ fees (collectively, “Claim(s)”), that arise from: (i) Your use or misuse
of the Platform; (ii) Athlete Content or social postings; (iv) performance of a Campaign due to Your
conduct or actions; and (v) Your breach of this Agreement, including but not limited to applicable representations
and warranties, and any separate Agreement the parties execute. You agree to be solely responsible for
defending any Claim against or suffered by DapUp and/or any Indemnified Entity, subject to DapUp and/or
the Indemnified Entity’s right to participate with counsel of its own choosing, and for payment of damages
or losses resulting from all claims against DapUp, and/or any Indemnified Entities provided that You
will not agree to any settlement that imposes any obligation or liability on DapUp and/or an Indemnified
Entities without DapUp’s or Indemnified Entity’s prior express written consent. If You are accepting
or agreeing to this Agreement on behalf of a company or other entity, You and such entity shall be jointly
and severally liable for all of Indemnitors promises and obligations pursuant to this this Section [18].
`),To=r(e,"BR",{}),Ro=r(e,"BR",{}),wo=c(e,`
19. INTERNATIONAL USE `),Io=r(e,"BR",{}),Oo=r(e,"BR",{}),go=c(e,`
As a consequence of the global nature of the Internet, You agree to comply with all local rules and laws
applicable to You in respect of Your conduct on the Internet and acceptable content. Specifically, You
agree to comply with all applicable laws regarding use, processing and storage of personal data, obscene
and indecent content and communications and those regarding the transmission of technical data exported
from the United States or the country from which You access the Platform.
`),No=r(e,"BR",{}),So=r(e,"BR",{}),vo=c(e,`
20. WARRANTY DISCLAIMER `),Uo=r(e,"BR",{}),Do=r(e,"BR",{}),Bo=c(e,`
BUSINESS EXPRESSLY AGREES THAT THE SERVICES ARE AVAILABLE ON AN “AS IS“ BASIS, WITHOUT WARRANTY OF ANY
KIND, EXPRESS OR IMPLIED, AND THAT YOUR USE THEREOF IS AT YOUR OWN RISK. WITHOUT LIMITING THE GENERALITY
OF THE FOREGOING, DAPUP DISCLAIMS TO THE MAXIMUM EXTENT PERMITTED BY LAW ANY AND ALL WARRANTIES, EXPRESS
OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY (I) WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR
PURPOSE, (II) WARRANTIES AGAINST INFRINGEMENT OF ANY THIRD PARTY INTELLECTUAL PROPERTY OR PROPRIETARY
RIGHTS, (III) WARRANTIES RELATING TO DELAYS, INTERRUPTIONS, ERRORS, OR OMISSIONS IN THE SERVICE OR DAPUP
WEBSITE, OR ANY THIRD PARTY THEREOF, (IV) WARRANTIES RELATING TO THE TRANSMISSION OR DELIVERY OF THE
SERVICE OR THE DAPUP WEBSITE, (V) WARRANTIES RELATING TO THE ACCURACY OR CORRECTNESS OF DATA, AND ANY
OTHER WARRANTIES OTHERWISE RELATING TO PERFORMANCE, NONPERFORMANCE OR OTHER ACTS OR OMISSIONS BY DAPUP.
FURTHER, AND WITHOUT LIMITING THE GENERALITY OF ANY OF THE FOREGOING, THERE IS NO WARRANTY THAT THE PLATFORM
OR THE DAPUP WEBSITE WILL MEET YOUR NEEDS OR REQUIREMENTS OR THE NEEDS OR REQUIREMENTS OF ANY OTHER PERSON.
IN ADDITION, YOU ACKNOWLEDGE AND AGREE THAT DAPUP ́S WARRANTY DOES NOT COVER TELECOMMUNICATIONS OR INTERNET
OUTAGES CAUSED BY THIRD PARTIES OR OTHERWISE OUTSIDE OF DAPUP'S CONTROL. `),Yo=r(e,"BR",{}),Co=r(e,"BR",{}),Po=c(e,`
BECAUSE SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN CATEGORIES OF DAMAGES OR IMPLIED
WARRANTIES, THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU. IN SUCH JURISDICTIONS, DAPUP ́S LIABILITY IS LIMITED
TO THE GREATEST EXTENT PERMITTED BY LAW. `),Lo=r(e,"BR",{}),Ho=r(e,"BR",{}),_o=c(e,` 21. LIMITATION OF LIABILITY
`),ko=r(e,"BR",{}),Fo=r(e,"BR",{}),Mo=c(e,`
DAPUP SHALL NOT BE LIABLE TO BUSINESS FOR DAMAGES OF ANY KIND ARISING OUT OF ATHLETE’S USE OF THE PLATFORM.
IN NO EVENT SHALL DAPUP OR ANY DAPUP ENTITY BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL,
PUNITIVE, OR EXEMPLARY DAMAGES, ARISING OUT OF, OR IN CONNECTION WITH YOUR USE OF THE PLATFORM OR PARTICIPATION
IN A CAMPAIGN INCLUDING, WITHOUT LIMITATION, ANY: (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II)
LOST BUSINESS, LOST REVENUES, OR LOSS OF ANTICIPATED PROFITS OR ANY OTHER PECUNIARY OR NON-PECUNIARY
LOSS OR DAMAGES, (III) ANY UNAUTHORIZED ACCESS TO OR USE OF PERSONAL INFORMATION, (IV) INTERRUPTION OR
FAILURE OF THE SERVICE, (V) ANY BUGS, VIRUSES, EASTER EGGS, TROJAN HORSES OR OTHER FORMS OF MALWARE INTRODUCED
TO THE SERVICE BY A THIRD PARTY. DAPUP SHALL NOT BE LIABLE FOR ANY OFFENSIVE, DEFAMATORY, OR ILLEGAL
CONDUCT OR CONTENT OF ANY THIRD PARTY AND ANY USER’S OR ATHLETE’S SOLE REMEDY IS TO DISCONTINUE USING
THE PLATFORM OR PARTICIPATION IN ANY CAMPAIGN. ATHLETE AGREES THAT IT WILL NOT HOLD DAPUP RESPONSIBLE
FOR THE SELECTION OR RETENTION OF, OR ANY ACTS, ERRORS, OR OMISSIONS BY, ANY THIRD PARTY IN CONNECTION
WITH THIS AGREEMENT, INCLUDING WITH RESPECT TO VIEWS BY ANY THIRD PARTY ON ATHLETE’S POSTING(S) OF CAMPAIGNS
AND ATHLETE CONTENT, REGARDLESS OF THE INTENT OF SUCH THIRD PARTY. `),Go=r(e,"BR",{}),$o=r(e,"BR",{}),Wo=c(e,`
THE FOREGOING LIMITATIONS APPLY REGARDLESS OF THE LEGAL THEORY UPON WHICH ANY CLAIM FOR SUCH DAMAGES
IS BASED, WHETHER THE PARTIES HAD BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND WHETHER SUCH DAMAGES
WERE REASONABLY FORESEEABLE. IN NO EVENT SHALL THE AGGREGATE LIABILITY OF DAPUP ARISING OUT OF OR RELATED
TO THIS AGREEMENT EXCEED THE TOTAL FEES PAID TO DAPUP BY BUSINESS IN THE MONTH PRIOR TO THE MONTH IN
WHICH THE CLAIM AROSE. `),Vo=r(e,"BR",{}),qo=r(e,"BR",{}),zo=c(e,`

YOU ACKNOWLEDGE AND AGREE THAT (A) THE REMEDIES, EXCLUSIONS, LIMITATIONS OF LIABILITY, AND
LIMITATION OF DAMAGES HEREIN, REFLECT A REASONABLE ALLOCATION OF RISKS; (B) THAT DAPUP WOULD NOT
ENTER INTO THIS AGREEMENT WITHOUT THESE EXCLUSIONS, LIMITATIONS OF LIABILITY, AND ALL OTHER TERMS IN
THIS AGREEMENT. ATHLETE ACKNOWLEDGES THAT THE TERMS CONTAINED IN THIS AGREEMENT ARE A FAIR
ALLOCATION OF RISKS BETWEEN BUSINESS AND DAPUP. BECAUSE SOME JURISDICTIONS DO NOT ALLOW THE
EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, DAPUP ́S LIABILITY IN SUCH
JURISDICTIONS SHALL BE LIMITED TO THE FULLEST EXTENT PERMITTED BY LAW. `),xo=r(e,"BR",{}),jo=r(e,"BR",{}),Xo=c(e,`
22. NOTICES `),Ko=r(e,"BR",{}),Qo=r(e,"BR",{}),Jo=c(e,`
Except for copyright infringement notices as set forth in Section [17]: Copyright, Trademarks, and Proprietary
Rights above, any notice from User to DapUp must be addressed to info@dapup.co.
`),Zo=r(e,"BR",{}),er=r(e,"BR",{}),tr=c(e,`
There may be other information regarding the Platform and DapUp’s services that the law requires us to
send to the User. User consents to DapUp ́s sending this information in electronic form to the email address
provided in the User profile on the DapUp website. Email shall be the fully authorized formal and standard
means of communication of notices and messages and shall be considered delivered at the close of business
of the day that the email communication was transmitted. DapUp will send notices via email or regular
mail [or display links to notices on the DapUp website and the Platform. You must read these notices
regularly as these notices will apply and You will be responsible for immediate compliance.
`),nr=r(e,"BR",{}),ir=r(e,"BR",{}),or=c(e,`

Please ensure Your email address is valid and up to date to receive such information. We may also
provide required information to the User access to www.dapup.co or another website designated in an
email notice or generally designated in advance for this purpose. Notices provided to You via email
will be deemed given and received on the transmission date. `),rr=r(e,"BR",{}),ar=r(e,"BR",{}),sr=c(e,`
23. GOVERNING LAW; JURISDICTION AND VENUE `),lr=r(e,"BR",{}),pr=r(e,"BR",{}),ur=c(e,`
This Agreement shall be governed by the laws of the State of Arkansas, without regard to conflicts of
laws principles. Each party agrees that all disputes arising under this Agreement shall be brought in
the Superior Court of the State of Arkansas in Washington County or the Federal District Court of Arkansas,
Western District. Each party irrevocably consents to such jurisdiction and irrevocably waives any objection
such party may have as to the venue of any such proceeding brought in such court as an inconvenient forum.
`),fr=r(e,"BR",{}),hr=r(e,"BR",{}),mr=c(e,`
24. ELECTRONIC SIGNATURES EFFECTIVE `),cr=r(e,"BR",{}),dr=r(e,"BR",{}),br=c(e,`
This Agreement is an electronic contract that sets out the legally binding terms of Your use of the DapUp
Platform. You indicate Your acceptance of this Agreement, and all of the terms and conditions contained
or referenced herein, pursuant to Section 2 (Acceptance of This Agreement) of this Agreement and thereby
also consent to have this Agreement provided to you in electronic form. Please print and save a copy
of this Agreement for Your records. `),yr=r(e,"BR",{}),Ar=r(e,"BR",{}),Er=c(e," 25. TERMINATION "),Tr=r(e,"BR",{}),Rr=r(e,"BR",{}),wr=c(e,`

This Agreement will continue to apply until terminated by either You or DapUp. This Agreement may be
terminated by either party at any time, in that party’s sole discretion by providing notice as
specified herein. Termination will be effective upon receipt by the non-terminating party. Upon
termination of this Agreement for any reason: (1) all rights granted to You in relation to the
Platform and under this Agreement will terminate and You will immediately return and cease using or
accessing all Campaign materials; (2) You will immediately cease all use of and access to the
Platform and all Content. `),Ir=r(e,"BR",{}),Or=r(e,"BR",{}),gr=c(e,`
Upon termination of this Agreement, any provision which, by its nature or express terms should survive,
will survive such termination or expiration, including but not limited to Sections 3, 5, 6, 8, 10 through
15, and 16 through 28. `),Nr=r(e,"BR",{}),Sr=r(e,"BR",{}),vr=c(e," 26. CEASING OF PERFORMANCE OF SERVICES "),Ur=r(e,"BR",{}),Dr=r(e,"BR",{}),Br=c(e,`
Business will immediately cease performing the Services, and/or return all work created in connection
with my Services, upon notice by DapUp or Athlete. `),Yr=r(e,"BR",{}),Cr=r(e,"BR",{}),Pr=c(e,`
27. ASSIGNMENT; THIRD-PARTY BENEFICIARY `),Lr=r(e,"BR",{}),Hr=r(e,"BR",{}),_r=c(e,`
DapUp will have the right to assign this Agreement and rights and delegate its duties in connection with
a merger, reorganization, or sale of substantially all of its assets. This Agreement will bind successors
and permitted assigns. `),kr=r(e,"BR",{}),Fr=r(e,"BR",{}),Mr=c(e,`
User shall not assign these this Agreement or assign any rights or delegate any obligations hereunder,
in whole or in part, whether voluntarily or by operation of law, without DapUp’s prior written consent.
Any such purported assignment or delegation without consent will be null and void and of no force or
effect. `),Gr=r(e,"BR",{}),$r=r(e,"BR",{}),Wr=c(e,`
You acknowledge and agree that (i) Athlete is a third-party beneficiary to this Agreement and is entitled
to the rights and benefits hereunder and may enforce the provisions hereof as if it were a party hereto.
`),Vr=r(e,"BR",{}),qr=r(e,"BR",{}),zr=c(e,`
YOU ALSO ACKNOWLEDGE AND AGREE THAT DAPUP IS A THIRD-PARTY BENEFICIARY TO ANY AGREEMENT REACHED BETWEEN
ATHLETE AND BUSINESS AND IS ENTITLED TO RIGHTS AND BENEFITS SET FORTH THEREIN AS IF IT WERE A PARTY THERETO.
`),xr=r(e,"BR",{}),jr=r(e,"BR",{}),Xr=c(e,`
28. MISCELLANEOUS `),Kr=r(e,"BR",{}),Qr=r(e,"BR",{}),Jr=c(e,`
User understands and agrees that this Agreement and any notices given pursuant to this Agreement are
enforceable in electronic format. The specific set of Terms of Use relating to each User’s contract for
the Services will not be stored individually. `),Zr=r(e,"BR",{}),ea=r(e,"BR",{}),ta=c(e,`
This Agreement constitutes the complete agreement between DapUp and the User and supersedes any prior
oral or written agreement or understanding relating thereto between the User and DapUp.
`),na=r(e,"BR",{}),ia=r(e,"BR",{}),oa=c(e,`
Should any part of this Agreement be or be found to be invalid, illegal or unenforceable, this shall
in no way affect the validity of the remaining parts. `),ra=r(e,"BR",{}),aa=r(e,"BR",{}),sa=c(e,`

DapUp ́s failure to act or enforce any provision in respect to this Agreement or a breach
thereofitshallnotconstituteawaiverofsuchprovision. `),la=r(e,"BR",{}),pa=r(e,"BR",{}),ua=c(e,`
Any questions? `),fa=r(e,"BR",{}),ha=r(e,"BR",{}),ma=c(e,`
If You have questions, queries or suggestions, please contact us at: `),ca=r(e,"BR",{}),da=r(e,"BR",{}),ba=c(e," DapUp, LLC"),ya=r(e,"BR",{}),Aa=r(e,"BR",{}),Ea=c(e,`
Email: info@dapup.co`),Ta=r(e,"BR",{}),Ra=r(e,"BR",{}),this.h()},h(){R(l,"class","text-2xl font-bold"),R(b,"class","ml-auto text-2xl text-red-500 fond-extrabold"),R(a,"class","flex flex-row w-full justify-between")},m(e,i){n(e,a,i),O(a,l),O(l,s),O(a,p),O(a,b),O(b,d),n(e,f,i),n(e,u,i),n(e,y,i),n(e,I,i),n(e,N,i),n(e,E,i),n(e,T,i),n(e,w,i),n(e,v,i),n(e,A,i),n(e,S,i),n(e,_,i),n(e,q,i),n(e,k,i),n(e,F,i),n(e,J,i),n(e,g,i),n(e,C,i),n(e,M,i),n(e,Z,i),n(e,z,i),n(e,Y,i),n(e,ee,i),n(e,oe,i),n(e,x,i),n(e,se,i),n(e,te,i),n(e,le,i),n(e,fe,i),n(e,ne,i),n(e,$,i),n(e,U,i),n(e,V,i),n(e,D,i),n(e,W,i),n(e,ie,i),n(e,he,i),n(e,re,i),n(e,me,i),n(e,pe,i),n(e,Ee,i),n(e,Te,i),n(e,Re,i),n(e,we,i),n(e,Ie,i),n(e,Oe,i),n(e,ge,i),n(e,Ne,i),n(e,Se,i),n(e,ve,i),n(e,Ue,i),n(e,De,i),n(e,Be,i),n(e,Ye,i),n(e,Ce,i),n(e,Pe,i),n(e,Le,i),n(e,He,i),n(e,_e,i),n(e,ke,i),n(e,Fe,i),n(e,Me,i),n(e,Ge,i),n(e,$e,i),n(e,We,i),n(e,Ve,i),n(e,qe,i),n(e,ze,i),n(e,xe,i),n(e,je,i),n(e,Xe,i),n(e,Ke,i),n(e,Qe,i),n(e,Je,i),n(e,Ze,i),n(e,et,i),n(e,tt,i),n(e,nt,i),n(e,it,i),n(e,ot,i),n(e,rt,i),n(e,at,i),n(e,st,i),n(e,lt,i),n(e,pt,i),n(e,ut,i),n(e,ft,i),n(e,ht,i),n(e,mt,i),n(e,ct,i),n(e,dt,i),n(e,bt,i),n(e,yt,i),n(e,At,i),n(e,Et,i),n(e,Tt,i),n(e,Rt,i),n(e,wt,i),n(e,It,i),n(e,Ot,i),n(e,gt,i),n(e,Nt,i),n(e,St,i),n(e,vt,i),n(e,Ut,i),n(e,Dt,i),n(e,Bt,i),n(e,Yt,i),n(e,Ct,i),n(e,Pt,i),n(e,Lt,i),n(e,Ht,i),n(e,_t,i),n(e,kt,i),n(e,Ft,i),n(e,Mt,i),n(e,Gt,i),n(e,$t,i),n(e,Wt,i),n(e,Vt,i),n(e,qt,i),n(e,zt,i),n(e,xt,i),n(e,jt,i),n(e,Xt,i),n(e,Kt,i),n(e,Qt,i),n(e,Jt,i),n(e,Zt,i),n(e,en,i),n(e,tn,i),n(e,nn,i),n(e,on,i),n(e,rn,i),n(e,an,i),n(e,sn,i),n(e,ln,i),n(e,pn,i),n(e,un,i),n(e,fn,i),n(e,hn,i),n(e,mn,i),n(e,cn,i),n(e,dn,i),n(e,bn,i),n(e,yn,i),n(e,An,i),n(e,En,i),n(e,Tn,i),n(e,Rn,i),n(e,wn,i),n(e,In,i),n(e,On,i),n(e,gn,i),n(e,Nn,i),n(e,Sn,i),n(e,vn,i),n(e,Un,i),n(e,Dn,i),n(e,Bn,i),n(e,Yn,i),n(e,Cn,i),n(e,Pn,i),n(e,Ln,i),n(e,Hn,i),n(e,_n,i),n(e,kn,i),n(e,Fn,i),n(e,Mn,i),n(e,Gn,i),n(e,$n,i),n(e,Wn,i),n(e,Vn,i),n(e,qn,i),n(e,zn,i),n(e,xn,i),n(e,jn,i),n(e,Xn,i),n(e,Kn,i),n(e,Qn,i),n(e,Jn,i),n(e,Zn,i),n(e,ei,i),n(e,ti,i),n(e,ni,i),n(e,ii,i),n(e,oi,i),n(e,ri,i),n(e,ai,i),n(e,si,i),n(e,li,i),n(e,pi,i),n(e,ui,i),n(e,fi,i),n(e,hi,i),n(e,mi,i),n(e,ci,i),n(e,di,i),n(e,bi,i),n(e,yi,i),n(e,Ai,i),n(e,Ei,i),n(e,Ti,i),n(e,Ri,i),n(e,wi,i),n(e,Ii,i),n(e,Oi,i),n(e,gi,i),n(e,Ni,i),n(e,Si,i),n(e,vi,i),n(e,Ui,i),n(e,Di,i),n(e,Bi,i),n(e,Yi,i),n(e,Ci,i),n(e,Pi,i),n(e,Li,i),n(e,Hi,i),n(e,_i,i),n(e,ki,i),n(e,Fi,i),n(e,Mi,i),n(e,Gi,i),n(e,$i,i),n(e,Wi,i),n(e,Vi,i),n(e,qi,i),n(e,zi,i),n(e,xi,i),n(e,ji,i),n(e,Xi,i),n(e,Ki,i),n(e,Qi,i),n(e,Ji,i),n(e,Zi,i),n(e,eo,i),n(e,to,i),n(e,no,i),n(e,io,i),n(e,oo,i),n(e,ro,i),n(e,ao,i),n(e,so,i),n(e,lo,i),n(e,po,i),n(e,uo,i),n(e,fo,i),n(e,ho,i),n(e,mo,i),n(e,co,i),n(e,bo,i),n(e,yo,i),n(e,Ao,i),n(e,Eo,i),n(e,To,i),n(e,Ro,i),n(e,wo,i),n(e,Io,i),n(e,Oo,i),n(e,go,i),n(e,No,i),n(e,So,i),n(e,vo,i),n(e,Uo,i),n(e,Do,i),n(e,Bo,i),n(e,Yo,i),n(e,Co,i),n(e,Po,i),n(e,Lo,i),n(e,Ho,i),n(e,_o,i),n(e,ko,i),n(e,Fo,i),n(e,Mo,i),n(e,Go,i),n(e,$o,i),n(e,Wo,i),n(e,Vo,i),n(e,qo,i),n(e,zo,i),n(e,xo,i),n(e,jo,i),n(e,Xo,i),n(e,Ko,i),n(e,Qo,i),n(e,Jo,i),n(e,Zo,i),n(e,er,i),n(e,tr,i),n(e,nr,i),n(e,ir,i),n(e,or,i),n(e,rr,i),n(e,ar,i),n(e,sr,i),n(e,lr,i),n(e,pr,i),n(e,ur,i),n(e,fr,i),n(e,hr,i),n(e,mr,i),n(e,cr,i),n(e,dr,i),n(e,br,i),n(e,yr,i),n(e,Ar,i),n(e,Er,i),n(e,Tr,i),n(e,Rr,i),n(e,wr,i),n(e,Ir,i),n(e,Or,i),n(e,gr,i),n(e,Nr,i),n(e,Sr,i),n(e,vr,i),n(e,Ur,i),n(e,Dr,i),n(e,Br,i),n(e,Yr,i),n(e,Cr,i),n(e,Pr,i),n(e,Lr,i),n(e,Hr,i),n(e,_r,i),n(e,kr,i),n(e,Fr,i),n(e,Mr,i),n(e,Gr,i),n(e,$r,i),n(e,Wr,i),n(e,Vr,i),n(e,qr,i),n(e,zr,i),n(e,xr,i),n(e,jr,i),n(e,Xr,i),n(e,Kr,i),n(e,Qr,i),n(e,Jr,i),n(e,Zr,i),n(e,ea,i),n(e,ta,i),n(e,na,i),n(e,ia,i),n(e,oa,i),n(e,ra,i),n(e,aa,i),n(e,sa,i),n(e,la,i),n(e,pa,i),n(e,ua,i),n(e,fa,i),n(e,ha,i),n(e,ma,i),n(e,ca,i),n(e,da,i),n(e,ba,i),n(e,ya,i),n(e,Aa,i),n(e,Ea,i),n(e,Ta,i),n(e,Ra,i),ga||(Pa=ce(b,"click",h[1]),ga=!0)},p:ae,i:ae,o:ae,d(e){e&&t(a),e&&t(f),e&&t(u),e&&t(y),e&&t(I),e&&t(N),e&&t(E),e&&t(T),e&&t(w),e&&t(v),e&&t(A),e&&t(S),e&&t(_),e&&t(q),e&&t(k),e&&t(F),e&&t(J),e&&t(g),e&&t(C),e&&t(M),e&&t(Z),e&&t(z),e&&t(Y),e&&t(ee),e&&t(oe),e&&t(x),e&&t(se),e&&t(te),e&&t(le),e&&t(fe),e&&t(ne),e&&t($),e&&t(U),e&&t(V),e&&t(D),e&&t(W),e&&t(ie),e&&t(he),e&&t(re),e&&t(me),e&&t(pe),e&&t(Ee),e&&t(Te),e&&t(Re),e&&t(we),e&&t(Ie),e&&t(Oe),e&&t(ge),e&&t(Ne),e&&t(Se),e&&t(ve),e&&t(Ue),e&&t(De),e&&t(Be),e&&t(Ye),e&&t(Ce),e&&t(Pe),e&&t(Le),e&&t(He),e&&t(_e),e&&t(ke),e&&t(Fe),e&&t(Me),e&&t(Ge),e&&t($e),e&&t(We),e&&t(Ve),e&&t(qe),e&&t(ze),e&&t(xe),e&&t(je),e&&t(Xe),e&&t(Ke),e&&t(Qe),e&&t(Je),e&&t(Ze),e&&t(et),e&&t(tt),e&&t(nt),e&&t(it),e&&t(ot),e&&t(rt),e&&t(at),e&&t(st),e&&t(lt),e&&t(pt),e&&t(ut),e&&t(ft),e&&t(ht),e&&t(mt),e&&t(ct),e&&t(dt),e&&t(bt),e&&t(yt),e&&t(At),e&&t(Et),e&&t(Tt),e&&t(Rt),e&&t(wt),e&&t(It),e&&t(Ot),e&&t(gt),e&&t(Nt),e&&t(St),e&&t(vt),e&&t(Ut),e&&t(Dt),e&&t(Bt),e&&t(Yt),e&&t(Ct),e&&t(Pt),e&&t(Lt),e&&t(Ht),e&&t(_t),e&&t(kt),e&&t(Ft),e&&t(Mt),e&&t(Gt),e&&t($t),e&&t(Wt),e&&t(Vt),e&&t(qt),e&&t(zt),e&&t(xt),e&&t(jt),e&&t(Xt),e&&t(Kt),e&&t(Qt),e&&t(Jt),e&&t(Zt),e&&t(en),e&&t(tn),e&&t(nn),e&&t(on),e&&t(rn),e&&t(an),e&&t(sn),e&&t(ln),e&&t(pn),e&&t(un),e&&t(fn),e&&t(hn),e&&t(mn),e&&t(cn),e&&t(dn),e&&t(bn),e&&t(yn),e&&t(An),e&&t(En),e&&t(Tn),e&&t(Rn),e&&t(wn),e&&t(In),e&&t(On),e&&t(gn),e&&t(Nn),e&&t(Sn),e&&t(vn),e&&t(Un),e&&t(Dn),e&&t(Bn),e&&t(Yn),e&&t(Cn),e&&t(Pn),e&&t(Ln),e&&t(Hn),e&&t(_n),e&&t(kn),e&&t(Fn),e&&t(Mn),e&&t(Gn),e&&t($n),e&&t(Wn),e&&t(Vn),e&&t(qn),e&&t(zn),e&&t(xn),e&&t(jn),e&&t(Xn),e&&t(Kn),e&&t(Qn),e&&t(Jn),e&&t(Zn),e&&t(ei),e&&t(ti),e&&t(ni),e&&t(ii),e&&t(oi),e&&t(ri),e&&t(ai),e&&t(si),e&&t(li),e&&t(pi),e&&t(ui),e&&t(fi),e&&t(hi),e&&t(mi),e&&t(ci),e&&t(di),e&&t(bi),e&&t(yi),e&&t(Ai),e&&t(Ei),e&&t(Ti),e&&t(Ri),e&&t(wi),e&&t(Ii),e&&t(Oi),e&&t(gi),e&&t(Ni),e&&t(Si),e&&t(vi),e&&t(Ui),e&&t(Di),e&&t(Bi),e&&t(Yi),e&&t(Ci),e&&t(Pi),e&&t(Li),e&&t(Hi),e&&t(_i),e&&t(ki),e&&t(Fi),e&&t(Mi),e&&t(Gi),e&&t($i),e&&t(Wi),e&&t(Vi),e&&t(qi),e&&t(zi),e&&t(xi),e&&t(ji),e&&t(Xi),e&&t(Ki),e&&t(Qi),e&&t(Ji),e&&t(Zi),e&&t(eo),e&&t(to),e&&t(no),e&&t(io),e&&t(oo),e&&t(ro),e&&t(ao),e&&t(so),e&&t(lo),e&&t(po),e&&t(uo),e&&t(fo),e&&t(ho),e&&t(mo),e&&t(co),e&&t(bo),e&&t(yo),e&&t(Ao),e&&t(Eo),e&&t(To),e&&t(Ro),e&&t(wo),e&&t(Io),e&&t(Oo),e&&t(go),e&&t(No),e&&t(So),e&&t(vo),e&&t(Uo),e&&t(Do),e&&t(Bo),e&&t(Yo),e&&t(Co),e&&t(Po),e&&t(Lo),e&&t(Ho),e&&t(_o),e&&t(ko),e&&t(Fo),e&&t(Mo),e&&t(Go),e&&t($o),e&&t(Wo),e&&t(Vo),e&&t(qo),e&&t(zo),e&&t(xo),e&&t(jo),e&&t(Xo),e&&t(Ko),e&&t(Qo),e&&t(Jo),e&&t(Zo),e&&t(er),e&&t(tr),e&&t(nr),e&&t(ir),e&&t(or),e&&t(rr),e&&t(ar),e&&t(sr),e&&t(lr),e&&t(pr),e&&t(ur),e&&t(fr),e&&t(hr),e&&t(mr),e&&t(cr),e&&t(dr),e&&t(br),e&&t(yr),e&&t(Ar),e&&t(Er),e&&t(Tr),e&&t(Rr),e&&t(wr),e&&t(Ir),e&&t(Or),e&&t(gr),e&&t(Nr),e&&t(Sr),e&&t(vr),e&&t(Ur),e&&t(Dr),e&&t(Br),e&&t(Yr),e&&t(Cr),e&&t(Pr),e&&t(Lr),e&&t(Hr),e&&t(_r),e&&t(kr),e&&t(Fr),e&&t(Mr),e&&t(Gr),e&&t($r),e&&t(Wr),e&&t(Vr),e&&t(qr),e&&t(zr),e&&t(xr),e&&t(jr),e&&t(Xr),e&&t(Kr),e&&t(Qr),e&&t(Jr),e&&t(Zr),e&&t(ea),e&&t(ta),e&&t(na),e&&t(ia),e&&t(oa),e&&t(ra),e&&t(aa),e&&t(sa),e&&t(la),e&&t(pa),e&&t(ua),e&&t(fa),e&&t(ha),e&&t(ma),e&&t(ca),e&&t(da),e&&t(ba),e&&t(ya),e&&t(Aa),e&&t(Ea),e&&t(Ta),e&&t(Ra),ga=!1,Pa()}}}function fs(h,a,l){let{showTOS:s}=a;const p=()=>l(0,s=!1);return h.$$set=b=>{"showTOS"in b&&l(0,s=b.showTOS)},[s,p]}class hs extends Sa{constructor(a){super(),va(this,a,fs,us,Ua,{showTOS:0})}}function Va(h,a,l){const s=h.slice();return s[27]=a[l],s[29]=l,s}function qa(h,a,l){const s=h.slice();return s[33]=a[l],s}function za(h,a,l){const s=h.slice();return s[30]=a[l],s}function xa(h){let a,l,s,p;function b(f){h[17](f)}let d={};return h[1]!==void 0&&(d.showTOS=h[1]),l=new hs({props:d}),wa.push(()=>Ia(l,"showTOS",b)),{c(){a=o("div"),j(l.$$.fragment),this.h()},l(f){a=r(f,"DIV",{class:!0});var u=G(a);X(l.$$.fragment,u),u.forEach(t),this.h()},h(){R(a,"class","centerAll border border-green-500 w-[90%] overflow-y-scroll sm:w-[80%] h-[60vh] rounded-xl bg-white z-10 p-10 svelte-24ul42")},m(f,u){n(f,a,u),K(l,a,null),p=!0},p(f,u){const y={};!s&&u[0]&2&&(s=!0,y.showTOS=f[1],Oa(()=>s=!1)),l.$set(y)},i(f){p||(B(l.$$.fragment,f),p=!0)},o(f){H(l.$$.fragment,f),p=!1},d(f){f&&t(a),Q(l)}}}function ja(h){let a,l=h[10][h[2]]+"",s,p,b,d,f,u,y,I,N,E,T,w,v,A,S,_,q;const k=[ys,bs,ds,cs,ms],F=[];function J(g,C){return g[4]!==2&&g[4]!==4&&g[4]!==5&&g[4]!==6?0:g[4]===2?1:g[4]===4?2:g[4]===5?3:4}return u=J(h),y=F[u]=k[u](h),{c(){a=o("h2"),s=m(l),p=P(),b=o("hr"),d=P(),f=o("form"),y.c(),I=P(),N=o("br"),E=P(),T=o("input"),w=P(),v=o("button"),A=m("Back"),this.h()},l(g){a=r(g,"H2",{class:!0});var C=G(a);s=c(C,l),C.forEach(t),p=L(g),b=r(g,"HR",{}),d=L(g),f=r(g,"FORM",{class:!0});var M=G(f);y.l(M),I=L(M),N=r(M,"BR",{}),E=L(M),T=r(M,"INPUT",{class:!0,type:!0}),w=L(M),v=r(M,"BUTTON",{class:!0});var Z=G(v);A=c(Z,"Back"),Z.forEach(t),M.forEach(t),this.h()},h(){R(a,"class","text-center text-5xl mb-4 text-white"),R(T,"class","float-right mt-3 rounded-full svelte-24ul42"),R(T,"type","submit"),T.value="Continue",R(v,"class","text-left mt-1 border border-white rounded-full bg-black p-2 text-white"),R(f,"class"," svelte-24ul42")},m(g,C){n(g,a,C),O(a,s),n(g,p,C),n(g,b,C),n(g,d,C),n(g,f,C),F[u].m(f,null),O(f,I),O(f,N),O(f,E),O(f,T),O(f,w),O(f,v),O(v,A),S=!0,_||(q=[ce(T,"click",h[22]),ce(v,"click",Na(h[13])),ce(f,"submit",Na(h[12]))],_=!0)},p(g,C){(!S||C[0]&4)&&l!==(l=g[10][g[2]]+"")&&ue(s,l);let M=u;u=J(g),u===M?F[u].p(g,C):(be(),H(F[M],1,1,()=>{F[M]=null}),ye(),y=F[u],y?y.p(g,C):(y=F[u]=k[u](g),y.c()),B(y,1),y.m(f,I))},i(g){S||(B(y),S=!0)},o(g){H(y),S=!1},d(g){g&&t(a),g&&t(p),g&&t(b),g&&t(d),g&&t(f),F[u].d(),_=!1,es(q)}}}function ms(h){let a,l;return a=new ts({props:{dropdownName:"Choose upto 3 goals",dropdownTypes:h[8]}}),{c(){j(a.$$.fragment)},l(s){X(a.$$.fragment,s)},m(s,p){K(a,s,p),l=!0},p:ae,i(s){l||(B(a.$$.fragment,s),l=!0)},o(s){H(a.$$.fragment,s),l=!1},d(s){Q(a,s)}}}function cs(h){let a,l;return a=new ts({props:{dropdownName:"Choose up to 3 sports",dropdownTypes:h[9]}}),{c(){j(a.$$.fragment)},l(s){X(a.$$.fragment,s)},m(s,p){K(a,s,p),l=!0},p:ae,i(s){l||(B(a.$$.fragment,s),l=!0)},o(s){H(a.$$.fragment,s),l=!1},d(s){Q(a,s)}}}function ds(h){let a,l,s,p,b;a=new Da({props:{class:"w-full text-center bg-gray-700 border border-white mb-2",$$slots:{default:[Es]},$$scope:{ctx:h}}});function d(u){h[21](u)}let f={class:"bg-gray-700",$$slots:{default:[Rs]},$$scope:{ctx:h}};return h[5]!==void 0&&(f.open=h[5]),s=new Ba({props:f}),wa.push(()=>Ia(s,"open",d)),{c(){j(a.$$.fragment),l=P(),j(s.$$.fragment)},l(u){X(a.$$.fragment,u),l=L(u),X(s.$$.fragment,u)},m(u,y){K(a,u,y),n(u,l,y),K(s,u,y),b=!0},p(u,y){const I={};y[0]&128|y[1]&32&&(I.$$scope={dirty:y,ctx:u}),a.$set(I);const N={};y[0]&160|y[1]&32&&(N.$$scope={dirty:y,ctx:u}),!p&&y[0]&32&&(p=!0,N.open=u[5],Oa(()=>p=!1)),s.$set(N)},i(u){b||(B(a.$$.fragment,u),B(s.$$.fragment,u),b=!0)},o(u){H(a.$$.fragment,u),H(s.$$.fragment,u),b=!1},d(u){Q(a,u),u&&t(l),Q(s,u)}}}function bs(h){let a,l,s,p,b;a=new Da({props:{class:"w-full text-center bg-gray-700 border border-white mb-2",$$slots:{default:[Is]},$$scope:{ctx:h}}});function d(u){h[19](u)}let f={class:"bg-gray-700",$$slots:{default:[gs]},$$scope:{ctx:h}};return h[5]!==void 0&&(f.open=h[5]),s=new Ba({props:f}),wa.push(()=>Ia(s,"open",d)),{c(){j(a.$$.fragment),l=P(),j(s.$$.fragment)},l(u){X(a.$$.fragment,u),l=L(u),X(s.$$.fragment,u)},m(u,y){K(a,u,y),n(u,l,y),K(s,u,y),b=!0},p(u,y){const I={};y[0]&64|y[1]&32&&(I.$$scope={dirty:y,ctx:u}),a.$set(I);const N={};y[0]&96|y[1]&32&&(N.$$scope={dirty:y,ctx:u}),!p&&y[0]&32&&(p=!0,N.open=u[5],Oa(()=>p=!1)),s.$set(N)},i(u){b||(B(a.$$.fragment,u),B(s.$$.fragment,u),b=!0)},o(u){H(a.$$.fragment,u),H(s.$$.fragment,u),b=!1},d(u){Q(a,u),u&&t(l),Q(s,u)}}}function ys(h){let a,l,s;return{c(){a=o("input"),this.h()},l(p){a=r(p,"INPUT",{class:!0,placeholder:!0,id:!0,name:!0}),this.h()},h(){R(a,"class","w-full bg-gray-700 text-white rounded-xl svelte-24ul42"),R(a,"placeholder",l=h[15][h[4]]),R(a,"id",h[2]),R(a,"name",h[2]),a.value=s=h[3][Object.keys(h[10]).indexOf(h[2])]??""},m(p,b){n(p,a,b)},p(p,b){b[0]&16&&l!==(l=p[15][p[4]])&&R(a,"placeholder",l),b[0]&4&&R(a,"id",p[2]),b[0]&4&&R(a,"name",p[2]),b[0]&12&&s!==(s=p[3][Object.keys(p[10]).indexOf(p[2])]??"")&&a.value!==s&&(a.value=s)},i:ae,o:ae,d(p){p&&t(a)}}}function As(h){let a;return{c(){a=m(h[7])},l(l){a=c(l,h[7])},m(l,s){n(l,a,s)},p(l,s){s[0]&128&&ue(a,l[7])},d(l){l&&t(a)}}}function Es(h){let a,l;return a=new Ca({props:{$$slots:{default:[As]},$$scope:{ctx:h}}}),{c(){j(a.$$.fragment)},l(s){X(a.$$.fragment,s)},m(s,p){K(a,s,p),l=!0},p(s,p){const b={};p[0]&128|p[1]&32&&(b.$$scope={dirty:p,ctx:s}),a.$set(b)},i(s){l||(B(a.$$.fragment,s),l=!0)},o(s){H(a.$$.fragment,s),l=!1},d(s){Q(a,s)}}}function Ts(h){let a=h[33]+"",l;return{c(){l=m(a)},l(s){l=c(s,a)},m(s,p){n(s,l,p)},p:ae,d(s){s&&t(l)}}}function Xa(h){let a,l;function s(...p){return h[20](h[33],...p)}return a=new Ya({props:{class:"text-white",$$slots:{default:[Ts]},$$scope:{ctx:h}}}),a.$on("click",s),{c(){j(a.$$.fragment)},l(p){X(a.$$.fragment,p)},m(p,b){K(a,p,b),l=!0},p(p,b){h=p;const d={};b[1]&32&&(d.$$scope={dirty:b,ctx:h}),a.$set(d)},i(p){l||(B(a.$$.fragment,p),l=!0)},o(p){H(a.$$.fragment,p),l=!1},d(p){Q(a,p)}}}function Rs(h){let a,l,s=h[16],p=[];for(let d=0;d<s.length;d+=1)p[d]=Xa(qa(h,s,d));const b=d=>H(p[d],1,1,()=>{p[d]=null});return{c(){for(let d=0;d<p.length;d+=1)p[d].c();a=de()},l(d){for(let f=0;f<p.length;f+=1)p[f].l(d);a=de()},m(d,f){for(let u=0;u<p.length;u+=1)p[u]&&p[u].m(d,f);n(d,a,f),l=!0},p(d,f){if(f[0]&65696){s=d[16];let u;for(u=0;u<s.length;u+=1){const y=qa(d,s,u);p[u]?(p[u].p(y,f),B(p[u],1)):(p[u]=Xa(y),p[u].c(),B(p[u],1),p[u].m(a.parentNode,a))}for(be(),u=s.length;u<p.length;u+=1)b(u);ye()}},i(d){if(!l){for(let f=0;f<s.length;f+=1)B(p[f]);l=!0}},o(d){p=p.filter(Boolean);for(let f=0;f<p.length;f+=1)H(p[f]);l=!1},d(d){Ae(p,d),d&&t(a)}}}function ws(h){let a;return{c(){a=m(h[6])},l(l){a=c(l,h[6])},m(l,s){n(l,a,s)},p(l,s){s[0]&64&&ue(a,l[6])},d(l){l&&t(a)}}}function Is(h){let a,l;return a=new Ca({props:{$$slots:{default:[ws]},$$scope:{ctx:h}}}),{c(){j(a.$$.fragment)},l(s){X(a.$$.fragment,s)},m(s,p){K(a,s,p),l=!0},p(s,p){const b={};p[0]&64|p[1]&32&&(b.$$scope={dirty:p,ctx:s}),a.$set(b)},i(s){l||(B(a.$$.fragment,s),l=!0)},o(s){H(a.$$.fragment,s),l=!1},d(s){Q(a,s)}}}function Os(h){let a=h[30]+"",l;return{c(){l=m(a)},l(s){l=c(s,a)},m(s,p){n(s,l,p)},p:ae,d(s){s&&t(l)}}}function Ka(h){let a,l;function s(...p){return h[18](h[30],...p)}return a=new Ya({props:{class:"text-white",$$slots:{default:[Os]},$$scope:{ctx:h}}}),a.$on("click",s),{c(){j(a.$$.fragment)},l(p){X(a.$$.fragment,p)},m(p,b){K(a,p,b),l=!0},p(p,b){h=p;const d={};b[1]&32&&(d.$$scope={dirty:b,ctx:h}),a.$set(d)},i(p){l||(B(a.$$.fragment,p),l=!0)},o(p){H(a.$$.fragment,p),l=!1},d(p){Q(a,p)}}}function gs(h){let a,l,s=h[14],p=[];for(let d=0;d<s.length;d+=1)p[d]=Ka(za(h,s,d));const b=d=>H(p[d],1,1,()=>{p[d]=null});return{c(){for(let d=0;d<p.length;d+=1)p[d].c();a=de()},l(d){for(let f=0;f<p.length;f+=1)p[f].l(d);a=de()},m(d,f){for(let u=0;u<p.length;u+=1)p[u]&&p[u].m(d,f);n(d,a,f),l=!0},p(d,f){if(f[0]&16480){s=d[14];let u;for(u=0;u<s.length;u+=1){const y=za(d,s,u);p[u]?(p[u].p(y,f),B(p[u],1)):(p[u]=Ka(y),p[u].c(),B(p[u],1),p[u].m(a.parentNode,a))}for(be(),u=s.length;u<p.length;u+=1)b(u);ye()}},i(d){if(!l){for(let f=0;f<s.length;f+=1)B(p[f]);l=!0}},o(d){p=p.filter(Boolean);for(let f=0;f<p.length;f+=1)H(p[f]);l=!1},d(d){Ae(p,d),d&&t(a)}}}function Qa(h){let a,l,s,p,b,d,f,u,y,I,N,E,T,w,v,A,S,_,q,k,F,J,g,C,M,Z,z,Y,ee,oe,x,se,te,le,fe,ne=h[11],$=[];for(let U=0;U<ne.length;U+=1)$[U]=Ja(Va(h,ne,U));return{c(){a=o("h2"),l=m("Set Email and Password"),s=P(),p=o("hr"),b=P(),d=o("form"),f=o("input"),u=P();for(let U=0;U<$.length;U+=1)$[U].c();y=P(),I=o("label"),N=m("Email"),E=o("br"),T=P(),w=o("input"),A=o("br"),S=P(),_=o("label"),q=m("Password"),k=P(),F=o("p"),J=m("Password should be at least 8 characters long"),g=P(),C=o("input"),M=o("br"),Z=P(),z=o("div"),Y=o("label"),ee=m("Agree to our terms of service"),oe=P(),x=o("input"),se=P(),te=o("input"),this.h()},l(U){a=r(U,"H2",{class:!0});var V=G(a);l=c(V,"Set Email and Password"),V.forEach(t),s=L(U),p=r(U,"HR",{}),b=L(U),d=r(U,"FORM",{method:!0,class:!0});var D=G(d);f=r(D,"INPUT",{type:!0,name:!0,class:!0}),u=L(D);for(let pe=0;pe<$.length;pe+=1)$[pe].l(D);y=L(D),I=r(D,"LABEL",{class:!0,for:!0});var W=G(I);N=c(W,"Email"),W.forEach(t),E=r(D,"BR",{}),T=L(D),w=r(D,"INPUT",{class:!0,id:!0,name:!0}),A=r(D,"BR",{}),S=L(D),_=r(D,"LABEL",{class:!0,for:!0});var ie=G(_);q=c(ie,"Password"),ie.forEach(t),k=L(D),F=r(D,"P",{class:!0});var he=G(F);J=c(he,"Password should be at least 8 characters long"),he.forEach(t),g=L(D),C=r(D,"INPUT",{class:!0,id:!0,name:!0,type:!0}),M=r(D,"BR",{}),Z=L(D),z=r(D,"DIV",{class:!0});var re=G(z);Y=r(re,"LABEL",{class:!0,for:!0});var me=G(Y);ee=c(me,"Agree to our terms of service"),me.forEach(t),oe=L(re),x=r(re,"INPUT",{class:!0,type:!0,id:!0,name:!0}),re.forEach(t),se=L(D),te=r(D,"INPUT",{class:!0,type:!0}),D.forEach(t),this.h()},h(){var U;R(a,"class","text-center text-white text-5xl mb-4"),R(f,"type","hidden"),R(f,"name","size"),R(f,"class","svelte-24ul42"),R(I,"class","w-full text-white svelte-24ul42"),R(I,"for","email"),R(w,"class","w-full text-white bg-gray-700 rounded-xl border border-white svelte-24ul42"),R(w,"id","email"),R(w,"name","email"),w.value=v=((U=h[0])==null?void 0:U.email)??"",R(_,"class","w-full text-white svelte-24ul42"),R(_,"for","password"),R(F,"class","svelte-24ul42"),R(C,"class","text-white w-full bg-gray-700 rounded-xl border border-white svelte-24ul42"),R(C,"id","password"),R(C,"name","password"),R(C,"type","password"),R(Y,"class","text-blue-400 underline mr-2 svelte-24ul42"),R(Y,"for","checkbox"),R(x,"class","transform translate-y-[2px] svelte-24ul42"),R(x,"type","checkbox"),R(x,"id","terms-of-service"),R(x,"name","terms-of-service"),x.value="accepted",R(z,"class","w-full align-start"),R(te,"class","rounded-full border border-white svelte-24ul42"),R(te,"type","submit"),te.value="Submit",R(d,"method","POST"),R(d,"class","svelte-24ul42")},m(U,V){n(U,a,V),O(a,l),n(U,s,V),n(U,p,V),n(U,b,V),n(U,d,V),O(d,f),_a(f,h[6]),O(d,u);for(let D=0;D<$.length;D+=1)$[D]&&$[D].m(d,null);O(d,y),O(d,I),O(I,N),O(d,E),O(d,T),O(d,w),O(d,A),O(d,S),O(d,_),O(_,q),O(d,k),O(d,F),O(F,J),O(d,g),O(d,C),O(d,M),O(d,Z),O(d,z),O(z,Y),O(Y,ee),O(z,oe),O(z,x),O(d,se),O(d,te),le||(fe=[ce(f,"input",h[23]),ce(Y,"click",h[24]),ns(is.call(null,d))],le=!0)},p(U,V){var D;if(V[0]&64&&_a(f,U[6]),V[0]&2056){ne=U[11];let W;for(W=0;W<ne.length;W+=1){const ie=Va(U,ne,W);$[W]?$[W].p(ie,V):($[W]=Ja(ie),$[W].c(),$[W].m(d,y))}for(;W<$.length;W+=1)$[W].d(1);$.length=ne.length}V[0]&1&&v!==(v=((D=U[0])==null?void 0:D.email)??"")&&w.value!==v&&(w.value=v)},d(U){U&&t(a),U&&t(s),U&&t(p),U&&t(b),U&&t(d),Ae($,U),le=!1,es(fe)}}}function Ja(h){let a,l;return{c(){a=o("input"),this.h()},l(s){a=r(s,"INPUT",{type:!0,name:!0,class:!0}),this.h()},h(){R(a,"type","hidden"),R(a,"name",h[27]),a.value=l=h[3][h[29]],R(a,"class","svelte-24ul42")},m(s,p){n(s,a,p)},p(s,p){p[0]&8&&l!==(l=s[3][s[29]])&&(a.value=l)},d(s){s&&t(a)}}}function Za(h){let a,l=h[0].message+"",s;return{c(){a=o("p"),s=m(l),this.h()},l(p){a=r(p,"P",{class:!0});var b=G(a);s=c(b,l),b.forEach(t),this.h()},h(){R(a,"class","error svelte-24ul42")},m(p,b){n(p,a,b),O(a,s)},p(p,b){b[0]&1&&l!==(l=p[0].message+"")&&ue(s,l)},d(p){p&&t(a)}}}function Ns(h){var N;let a,l,s,p,b,d,f=h[1]&&xa(h),u=h[4]<h[11].length&&ja(h),y=h[4]===h[11].length&&Qa(h),I=((N=h[0])==null?void 0:N.message)&&Za(h);return{c(){f&&f.c(),a=P(),l=o("div"),s=o("div"),u&&u.c(),p=P(),y&&y.c(),b=P(),I&&I.c(),this.h()},l(E){f&&f.l(E),a=L(E),l=r(E,"DIV",{class:!0});var T=G(l);s=r(T,"DIV",{class:!0});var w=G(s);u&&u.l(w),p=L(w),y&&y.l(w),b=L(w),I&&I.l(w),w.forEach(t),T.forEach(t),this.h()},h(){R(s,"class","w-[90%] overflow-hidden sm:w-[60%] border border-white h-fit bg-gray-700 p-4 rounded-xl"),R(l,"class","flex justify-center pt-10 mx-auto h-[85vh]")},m(E,T){f&&f.m(E,T),n(E,a,T),n(E,l,T),O(l,s),u&&u.m(s,null),O(s,p),y&&y.m(s,null),O(s,b),I&&I.m(s,null),d=!0},p(E,T){var w;E[1]?f?(f.p(E,T),T[0]&2&&B(f,1)):(f=xa(E),f.c(),B(f,1),f.m(a.parentNode,a)):f&&(be(),H(f,1,1,()=>{f=null}),ye()),E[4]<E[11].length?u?(u.p(E,T),T[0]&16&&B(u,1)):(u=ja(E),u.c(),B(u,1),u.m(s,p)):u&&(be(),H(u,1,1,()=>{u=null}),ye()),E[4]===E[11].length?y?y.p(E,T):(y=Qa(E),y.c(),y.m(s,b)):y&&(y.d(1),y=null),(w=E[0])!=null&&w.message?I?I.p(E,T):(I=Za(E),I.c(),I.m(s,null)):I&&(I.d(1),I=null)},i(E){d||(B(f),B(u),d=!0)},o(E){H(f),H(u),d=!1},d(E){f&&f.d(E),E&&t(a),E&&t(l),u&&u.d(),y&&y.d(),I&&I.d()}}}function Ss(h,a,l){let s,p=["Increase brand awareness regionally","Expand reach and exposure","Drive traffic and generate leads","Enhance brand credibility and trust","Connect with Community","Increase social media engagement","Launch and promote new products","Drive conversions and sales","Build brand affinity and loyalty","Create engaging and authentic content","Gain insights and market research","Leverage athlete credibility and trust","Drive product endorsement and sales","Increase brand association with athleticism and performance","Drive In store traffic","Drive event attendance and participation"],b=["any","basketball","baseball (men)","beach volleyball (women)","softball (women)","football (men)","cross country","field hockey (women)","bowling (women)","golf","fencing (coeducational)","lacrosse","soccer","gymnastics","rowing (women)","volleyball","ice hockey","water polo","rifle (coeducational)","tennis","skiing (coeducational)","track and field","swimming and diving","wrestling (men)"],{form:d}=a,f={name:"What is your company name?",location:"Where is your company located?",size:"Company Size",industry:"What industry is your company in?",athlete:"Has your company sponsored a college athlete before?",sportPref:"What sports do you prefer to sponsor?",goals:"Top 3 goals of athlete marketing"};const u=Object.keys(f);let y="name",I=[],N=0;function E(Y){const ee=Y.target,x=new FormData(ee).get(y);l(3,I[N]=x,I),ee.reset(),N+1<u.length?(l(4,N++,N),l(2,y=u[N])):l(4,N++,N)}function T(Y){if(N-1>=0)l(4,N--,N),l(2,y=u[N]);else return}let w=!1,v=["Micro (1-9 employees)","Small (10-49)","Medium (50-249)","Large (250 or more)"],A="Size",S="Yes",_=["Company Name","Location","","Industry"],q=["Yes","No"];function k(Y){s=Y,l(1,s)}const F=(Y,ee)=>{l(5,w=!1),l(6,A=Y)};function J(Y){w=Y,l(5,w)}const g=(Y,ee)=>{l(5,w=!1),l(7,S=Y)};function C(Y){w=Y,l(5,w)}const M=()=>{};function Z(){A=this.value,l(6,A)}const z=()=>{l(1,s=!0)};return h.$$set=Y=>{"form"in Y&&l(0,d=Y.form)},[d,s,y,I,N,w,A,S,p,b,f,u,E,T,v,_,q,k,F,J,g,C,M,Z,z]}class Ps extends Sa{constructor(a){super(),va(this,a,Ss,Ns,Ua,{form:0},null,[-1,-1])}}export{Ps as component};
