import{S as Xi,i as Ki,s as Qi,w as Je,_ as Ze,k as a,y as be,a as i,l as o,m as u,z as Te,c as r,h as l,n as m,b as H,A as Ie,E as t,$ as tn,g as ut,d as gt,B as we,q as p,r as d,u as Ji,v as bs,f as Ts,W as Es,F as en,X as Zi,U as Is,Z as ws}from"../chunks/index.0a5d0d14.js";import{e as Rs}from"../chunks/forms.84f3cfd1.js";import{B as vs,D as Os}from"../chunks/Wrapper.443f2850.js";/* empty css                                                        */import{R as Ns}from"../chunks/Radio.389dafbc.js";import{C as Us}from"../chunks/Chevron.8783fe36.js";function ds(A,e,s){const c=A.slice();return c[6]=e[s],c}function Ss(A){let e;return{c(){e=p("What is your primary sport?")},l(s){e=d(s,"What is your primary sport?")},m(s,c){H(s,e,c)},d(s){s&&l(e)}}}function Ds(A){let e,s;return e=new Us({props:{$$slots:{default:[Ss]},$$scope:{ctx:A}}}),{c(){be(e.$$.fragment)},l(c){Te(e.$$.fragment,c)},m(c,y){Ie(e,c,y),s=!0},p(c,y){const g={};y&512&&(g.$$scope={dirty:y,ctx:c}),e.$set(g)},i(c){s||(ut(e.$$.fragment,c),s=!0)},o(c){gt(e.$$.fragment,c),s=!1},d(c){we(e,c)}}}function Cs(A){let e=A[6]+"",s;return{c(){s=p(e)},l(c){s=d(c,e)},m(c,y){H(c,s,y)},p:en,d(c){c&&l(s)}}}function us(A){let e,s,c;function y(h){A[3](h)}let g={class:"text-black ml-2 mt-2",name:"sport-preference",value:A[6],$$slots:{default:[Cs]},$$scope:{ctx:A}};return A[0]!==void 0&&(g.group=A[0]),e=new Ns({props:g}),Je.push(()=>Ze(e,"group",y)),e.$on("click",A[4]),{c(){be(e.$$.fragment)},l(h){Te(e.$$.fragment,h)},m(h,f){Ie(e,h,f),c=!0},p(h,f){const E={};f&512&&(E.$$scope={dirty:f,ctx:h}),!s&&f&1&&(s=!0,E.group=h[0],tn(()=>s=!1)),e.$set(E)},i(h){c||(ut(e.$$.fragment,h),c=!0)},o(h){gt(e.$$.fragment,h),c=!1},d(h){we(e,h)}}}function Ys(A){let e,s,c,y=A[2],g=[];for(let f=0;f<y.length;f+=1)g[f]=us(ds(A,y,f));const h=f=>gt(g[f],1,1,()=>{g[f]=null});return{c(){for(let f=0;f<g.length;f+=1)g[f].c();e=i(),s=a("div"),this.h()},l(f){for(let E=0;E<g.length;E+=1)g[E].l(f);e=r(f),s=o(f,"DIV",{class:!0}),u(s).forEach(l),this.h()},h(){m(s,"class","h-2 w-full")},m(f,E){for(let b=0;b<g.length;b+=1)g[b]&&g[b].m(f,E);H(f,e,E),H(f,s,E),c=!0},p(f,E){if(E&7){y=f[2];let b;for(b=0;b<y.length;b+=1){const v=ds(f,y,b);g[b]?(g[b].p(v,E),ut(g[b],1)):(g[b]=us(v),g[b].c(),ut(g[b],1),g[b].m(e.parentNode,e))}for(bs(),b=y.length;b<g.length;b+=1)h(b);Ts()}},i(f){if(!c){for(let E=0;E<y.length;E+=1)ut(g[E]);c=!0}},o(f){g=g.filter(Boolean);for(let E=0;E<g.length;E+=1)gt(g[E]);c=!1},d(f){Es(g,f),f&&l(e),f&&l(s)}}}function ms(A){let e,s;return{c(){e=a("div"),s=p(A[0]),this.h()},l(c){e=o(c,"DIV",{class:!0});var y=u(e);s=d(y,A[0]),y.forEach(l),this.h()},h(){m(e,"class","ml-10")},m(c,y){H(c,e,y),t(e,s)},p(c,y){y&1&&Ji(s,c[0])},d(c){c&&l(e)}}}function Ps(A){let e,s,c,y,g,h,f,E,b;s=new vs({props:{class:"bg-white text-black",$$slots:{default:[Ds]},$$scope:{ctx:A}}});function v(T){A[5](T)}let U={class:"bg-white w-54 h-32 overflow-y-scroll text-left whitespace-nowrap space-y-3 text-sm",$$slots:{default:[Ys]},$$scope:{ctx:A}};A[1]!==void 0&&(U.open=A[1]),y=new Os({props:U}),Je.push(()=>Ze(y,"open",v));let O=A[0]&&ms(A);return{c(){e=a("div"),be(s.$$.fragment),c=i(),be(y.$$.fragment),h=i(),O&&O.c(),f=i(),E=a("input"),this.h()},l(T){e=o(T,"DIV",{class:!0});var w=u(e);Te(s.$$.fragment,w),c=r(w),Te(y.$$.fragment,w),h=r(w),O&&O.l(w),w.forEach(l),f=r(T),E=o(T,"INPUT",{type:!0,name:!0}),this.h()},h(){m(e,"class","flex flex-row rounded-xl items-center"),m(E,"type","hidden"),m(E,"name","sport-preference"),E.value=A[0]},m(T,w){H(T,e,w),Ie(s,e,null),t(e,c),Ie(y,e,null),t(e,h),O&&O.m(e,null),H(T,f,w),H(T,E,w),b=!0},p(T,[w]){const Y={};w&512&&(Y.$$scope={dirty:w,ctx:T}),s.$set(Y);const X={};w&515&&(X.$$scope={dirty:w,ctx:T}),!g&&w&2&&(g=!0,X.open=T[1],tn(()=>g=!1)),y.$set(X),T[0]?O?O.p(T,w):(O=ms(T),O.c(),O.m(e,null)):O&&(O.d(1),O=null),(!b||w&1)&&(E.value=T[0])},i(T){b||(ut(s.$$.fragment,T),ut(y.$$.fragment,T),b=!0)},o(T){gt(s.$$.fragment,T),gt(y.$$.fragment,T),b=!1},d(T){T&&l(e),we(s),we(y),O&&O.d(),T&&l(f),T&&l(E)}}}function Ls(A,e,s){let{sportPref:c}=e;const y=["Baseball","Basketball","Bowling","Cross country","Fencing","Field hockey","Football","Golf","Gymnastics","Ice hockey","Lacrosse","Rifle","Rowing","Skiing","Soccer","Softball","Swimming & Diving","Tennis","Track & field (indoor)","Track & field (outdoor)","Volleyball (indoor)","Volleyball (beach)","Water polo","Wrestling"];let g=!1;function h(b){c=b,s(0,c)}const f=()=>s(1,g=!1);function E(b){g=b,s(1,g)}return A.$$set=b=>{"sportPref"in b&&s(0,c=b.sportPref)},[c,g,y,h,f,E]}class Bs extends Xi{constructor(e){super(),Ki(this,e,Ls,Ps,Qi,{sportPref:0})}}function fs(A,e,s){const c=A.slice();return c[7]=e[s],c}function gs(A){let e,s,c,y,g,h,f=A[7]+"",E,b,v,U,O;return{c(){e=a("label"),s=a("input"),g=i(),h=a("span"),E=p(f),b=i(),this.h()},l(T){e=o(T,"LABEL",{class:!0});var w=u(e);s=o(w,"INPUT",{class:!0,type:!0,name:!0}),g=r(w),h=o(w,"SPAN",{class:!0});var Y=u(h);E=d(Y,f),Y.forEach(l),b=r(w),w.forEach(l),this.h()},h(){m(s,"class","form-radio h-4 text-blue-500"),s.checked=c=A[0]===A[7],m(s,"type","radio"),m(s,"name",A[4]),s.value=y=A[7],m(h,"class","ml-3"),m(e,"class",v="flex items-center w-full "+(A[2]==="left"?"":" justify-center"))},m(T,w){H(T,e,w),t(e,s),t(e,g),t(e,h),t(h,E),t(e,b),U||(O=Zi(s,"change",A[5]),U=!0)},p(T,w){w&3&&c!==(c=T[0]===T[7])&&(s.checked=c),w&16&&m(s,"name",T[4]),w&2&&y!==(y=T[7])&&(s.value=y),w&2&&f!==(f=T[7]+"")&&Ji(E,f),w&4&&v!==(v="flex items-center w-full "+(T[2]==="left"?"":" justify-center"))&&m(e,"class",v)},d(T){T&&l(e),U=!1,O()}}}function Hs(A){let e,s,c=A[1],y=[];for(let g=0;g<c.length;g+=1)y[g]=gs(fs(A,c,g));return{c(){e=a("div");for(let g=0;g<y.length;g+=1)y[g].c();this.h()},l(g){e=o(g,"DIV",{class:!0});var h=u(e);for(let f=0;f<y.length;f+=1)y[f].l(h);h.forEach(l),this.h()},h(){m(e,"class",s="flex "+(A[3]!=="row"?"flex-col":"flex-row "))},m(g,h){H(g,e,h);for(let f=0;f<y.length;f+=1)y[f]&&y[f].m(e,null)},p(g,[h]){if(h&55){c=g[1];let f;for(f=0;f<c.length;f+=1){const E=fs(g,c,f);y[f]?y[f].p(E,h):(y[f]=gs(E),y[f].c(),y[f].m(e,null))}for(;f<y.length;f+=1)y[f].d(1);y.length=c.length}h&8&&s!==(s="flex "+(g[3]!=="row"?"flex-col":"flex-row "))&&m(e,"class",s)},i:en,o:en,d(g){g&&l(e),Es(y,g)}}}function Fs(A,e,s){let{options:c}=e,{fontSize:y=16}=e,{justify:g="center"}=e,{flexDirection:h="column"}=e,{inputName:f}=e,{selected:E}=e;function b(v){s(0,E=v.currentTarget.value)}return A.$$set=v=>{"options"in v&&s(1,c=v.options),"fontSize"in v&&s(6,y=v.fontSize),"justify"in v&&s(2,g=v.justify),"flexDirection"in v&&s(3,h=v.flexDirection),"inputName"in v&&s(4,f=v.inputName),"selected"in v&&s(0,E=v.selected)},[E,c,g,h,f,b,y]}class Ms extends Xi{constructor(e){super(),Ki(this,e,Fs,Hs,Qi,{options:1,fontSize:6,justify:2,flexDirection:3,inputName:4,selected:0})}}function ys(A){let e,s,c,y,g,h,f,E,b,v,U,O,T,w,Y,X,yt,J,F,it,At,Et,M,bt,Tt,It,_,wt,Z,Rt,K,vt,Ot,k,L,Nt,Ut,G,St,Dt,rt,x,st,Ct,Yt,W,Pt,Lt,tt,Bt,Ht,B,Ft,Mt,V,q,lt,_t,z,kt,et,nt,mt,at,Gt,Q,ht,xt,S,Re,Wt,ft,Vt,D,qt,R,N,j,I,ct,pt,$,dt,zt,jt,$t,ot,Xt,Kt,nn,an,Qt,on,rn,sn,ln,ve,hn,cn,pn,dn,Jt,un,mn,fn,gn,Oe,yn,An,En,bn,Zt,Tn,In,wn,Rn,Ne,vn,On,Nn,Un,te,Sn,Dn,Cn,Yn,Ue,Pn,Ln,Bn,Hn,ee,Fn,Mn,_n,kn,Se,Gn,xn,Wn,Vn,ne,qn,zn,jn,$n,De,Xn,Kn,Qn,Jn,ae,Zn,ta,ea,na,Ce,aa,oa,ia,ra,oe,sa,la,ha,ca,Ye,pa,da,ua,ma,ie,fa,ga,ya,Aa,Pe,Ea,ba,Ta,Ia,re,wa,Ra,va,Oa,Le,Na,Ua,Sa,Da,se,Ca,Ya,Pa,La,C,Ba,Ha,Fa,Ma,_a,ka,Ga,xa,Wa,Va,qa,za,ja,$a,Xa,Ka,Qa,Ja,Za,le,to,eo,no,ao,Be,oo,io,ro,so,he,lo,ho,co,po,He,uo,mo,fo,go,ce,yo,Ao,Eo,bo,Fe,To,Io,wo,Ro,pe,vo,Oo,No,Uo,Me,So,Do,Co,Yo,de,Po,Lo,Bo,Ho,_e,Fo,Mo,_o,ko,ue,Go,xo,Wo,Vo,ke,qo,zo,jo,$o,me,Xo,Ko,Qo,Jo,Ge,Zo,ti,fe,ei,ni,ai,oi,xe,ii,ri,si,li,ge,hi,ci,pi,di,We,ui,mi,fi,gi,ye,yi,Ai,Ei,bi,Ve,Ti,Ii,wi,Ri,Ae,vi,Oi,Ni,Ui,qe,Si,Di,Ci,Yi,ze,Pi,Li,Bi,Hi,je,Fi,Mi,_i,ki,$e,Gi,xi,Wi,Vi,Xe,qi,zi,ji,$i,tr;return{c(){e=a("div"),s=a("div"),c=a("p"),y=p("Terms of Service"),g=i(),h=a("button"),f=p("X"),E=i(),b=a("br"),v=a("br"),U=i(),O=a("p"),T=p("Terms of use"),w=i(),Y=a("br"),X=a("br"),yt=i(),J=a("p"),F=p("1. INTRODUCTION"),it=i(),At=a("br"),Et=i(),M=a("p"),bt=p(`DapUp, LLC (“DapUp”) is a digital influence agency that connects Athletes (as defined below)
			with persons or entities who seek to expand their brand, product, and/or service awareness
			online by creating campaigns or otherwise establishing a formal business relationship
			("Businesses"). DapUp specializes in connecting Athletes to the Business where it
			will provide the most value (i.e., the best match). Athletes, for the purposes of these “Terms
			of Use” include those who are actively competing on teams or in competitions that attract
			substantial attention or that are considered higher level in the sports world and who have a
			presence on social media networks (such as Facebook, Twitter, YouTube and TikTok), use their
			social media networks to post regular content, and work or are willing to work with Businesses
			to promote their brand and/or products or services ("Athlete"). As an Athlete, DapUp
			values your opinions and considers you and your audience valuable assets to the Businesses
			with which DapUp works. Working with us and providing your services to the Business through
			DapUp's proprietary relationships with Businesses (the “Service” or “Services”) is subject
			to your acceptance of and compliance with all the terms and conditions of this “Terms of Use,”
			any statement of work (“SOW”), our Privacy Policy (“Privacy Policy”), and any instructions,
			rules, policies, briefs or guidelines related to Athletes (“Guidelines”) (collectively, the
			FEC/49697.0001/10191431 “Agreement”). To the extent of any conflict between this Terms of Use
			and the SOW, the terms of SOW shall control. This Agreement is agreed to between DapUp and
			you, or if you represent a company or other entity, that company or entity (in either case
			“You”, “Your”, or “Athlete”). If You accept or agree to this Agreement on behalf of a company
			or other entity, You represent and warrant that You have the authority to bind that company or
			other entity to this Agreement.`),Tt=i(),It=a("br"),_=a("br"),wt=i(),Z=a("p"),Rt=p("2. ACCEPTANCE OF THIS AGREEMENT"),K=i(),vt=a("br"),Ot=p(`
		You can accept this Agreement by:
		`),k=a("ol"),L=a("li"),Nt=p("1. Viewing on the “I Agree” or “I Accept” box;"),Ut=i(),G=a("li"),St=p("2. Registering in the DapUp’s online platform (“Platform”) at https://www.dapup.co ; or"),Dt=i(),rt=a("li"),x=p(`3. Accessing or using the Platform or otherwise accepting to participate in a campaign by
				Businesses (“Campaign”).`),st=i(),Ct=a("br"),Yt=i(),W=a("p"),Pt=p(`The term of this Agreement will commence on the date any of the earliest above numbered events
			occur (the “Eﬀective Date”) and will end when terminated by either party in accordance with
			this Agreement. In accepting this Agreement, You agree that DapUp may disclose Your
			registration and other applicable information to the Business. [In this case, You understand
			and agree that DapUp will treat Your use of the Platform as acceptance of this Agreement from
			that point onwards.] By accepting this Agreement, You acknowledge and agree that You have read
			and accept the terms set forth herein and agree to be bound by this Agreement. Each time You
			use the Platform, the current version of the Terms of Use will apply. Accordingly,
			FEC/49697.0001/10191431 when You use the Platform, You should check the date of the Terms of
			Use (which appears at the top of this document) and review any changes since the last version.
			The Terms of Use will be available at all times at [DapUp website link for Terms of Use]. You
			may not register and access and use the Platform and may not accept this Agreement if: (a) You
			are not legally competent to form a binding contract with DapUp; (b) in the case of a company
			or other entity, You lack the authority to enter into this Agreement and bind that company or
			other entity to this Agreement; or (c) You do not comply with Section [9] “Eligibility” rules.
			Your acceptance will legally bind You to comply with this Agreement. IF YOU DO NOT AGREE TO
			THE TERMS OF THIS AGREEMENT, OR DO NOT MEET THE QUALIFICATIONS INCLUDED IN THIS AGREEMENT,
			THEN YOU HAVE NO RIGHT TO ACCESS OR USE THE PLATFORM AND PROVIDE ANY SERVICES. IF YOU ACCESS
			OR USE THE PLATFORM, YOU ACKNOWLEDGE THAT YOUR MEET THE QUALIFICATIONS INCLUDED IN THIS
			AGREEMENT AND AGREE TO BE BOUND BY THE TERMS OF THIS AGREEMENT. Before You continue, You
			should print oﬀ or save a local copy of the Terms of Use for Your records.`),Lt=i(),tt=a("br"),Bt=a("br"),Ht=i(),B=a("p"),Ft=p("3. CAMPAIGNS"),Mt=i(),V=a("br"),q=i(),lt=a("p"),_t=p(`DapUp’s method of operations: Participating Businesses create and send Campaigns through the
			Platform located on the DapUp website, which oﬀer Athletes the opportunity to participate in
			Campaigns from a Business. DapUp presents this information to eligible Athletes on the
			platform for Athletes to indicate whether such FEC/49697.0001/10191431 Campaign is one they
			would like to pursue. Each Campaign details a brief description of the Campaign, deliverables,
			a start and end date, compensation information, and any exclusivity requirements. If accepted
			to the Campaign, participating Athletes will receive additional information and Guidelines
			from DapUp via email communications and through Athlete’s account in the Platform. All
			Campaigns must comply with the requirements established by DapUp (referred to as the
			“Requirements”). By accepting and participating in a Campaign, You acknowledge the terms of
			the Campaign and agree to be connected that You have reviewed and accept all Requirements and
			that You agree to strictly adhere to the Campaign, the Requirements, and this Agreement.
			Permanence of Content: All content created or published for any Campaign will remain publicly
			visible with the campaign hashtag(s) and disclosures for a period of at least 90 days after
			the final payment of Fees. In addition, if the Content is modified in any way beyond this time
			period, the required disclosure must remain intact in order to comply with FTC requirements.
			Reporting: The outcomes of all connections between Businesses and Athletes must be reported
			within 2 hours of Athlete receiving compensation, and failure to timely report will result in
			potential payment deduction of fifty dollars ($25.00) in compensation for each day delay in
			submission. During the term of this Agreement, Athlete has the right to provide content
			services to others provided that such other engagement or performance does not: (a) interfere
			in any way with the timely and professional performance of the Services to DapUp; (b) require
			the disclosure or use of Confidential Information; and (c) conflict with any other agreements
			between DapUp and Athlete regarding exclusivity. DapUp has no obligation to propose a Campaign
			to Athlete and may receive content services from other Athletes during the term of this
			Agreement. If You do not accept the Requirements, You must immediately notify DapUp and
			refrain from participating in the Campaign. Noncompliance with the Requirements, including but
			not limited to any applicable acceptance or posting dates, or this Agreement may result in
			Athlete not being entitled to compensation, removal from the Campaign, ineligibility to
			participate in any future DapUp Campaigns and/or being removed from the DapUp Platform.`),z=i(),kt=a("br"),et=i(),nt=a("p"),mt=p("4. REVIEWS & APPROVALS"),at=i(),Gt=a("br"),Q=i(),ht=a("p"),xt=p(`DapUp in its sole discretion shall determine whether Athlete has complied with the
			Requirements and is entitled to the compensation in connection with a Campaign. Athletes who
			do not comply with the Requirements and this Agreement will not be entitled to the
			compensation associated with such Campaign. Failure to submit required posts within the
			Campaign posting period or to make necessary edits to published posts in a timely manner may
			result in disqualification to participate in the Campaign and reduced or non-payment of
			associated compensation.`),S=i(),Re=a("br"),Wt=i(),ft=a("p"),Vt=p("5. USE OF PLATFORM"),D=i(),qt=a("br"),R=i(),N=a("p"),j=p(`In order to access the Platform and provide Services, You may be required to provide
			information about yourself (such as identification or contact details) as part of
			registration, or as part of Your continued use of the Platform. You agree that any
			registration information You provide to DapUp will always be accurate, complete and up to
			date. You will update Your registration information as necessary to maintain accuracy. You
			agree to use the Platform only for purposes that are permitted by (a) this Agreement, and (b)
			any applicable law, regulation or generally accepted practices or guidelines in the relevant
			jurisdictions (including any laws regarding the export of data or software to and from the
			United States or other relevant countries). Unless otherwise agreed in writing by DapUp, You
			agree that You shall not copy, distribute, modify, reproduce, duplicate, perform, display,
			create derivative works from, reverse engineer, decompile, attempt to obtain the source code
			or algorithms of, trade, sell, rent, lease, license, sublicense, resell or transfer the
			Platform or any portion thereof. You shall not in connection with any Campaign take any of the
			following actions or use the Platform to transmit spam, send unsolicited e-mails, conceal the
			identity of an e-mail sender or to create or utilize technology to generate fraudulent point
			activity including, but not limited to, bots, or spiders. You shall not use the Platform for
			the benefit of any third party other than as authorized in this Agreement, whether on a paid
			or unpaid basis. You agree not to access (or attempt to access) any information of DapUp,
			Business or Campaign (i) by any means other than through the interface that is provided by
			DapUp, unless You have been specifically allowed to do so in a separate agreement with DapUp;
			or (ii) through any automated means (including use of scripts or web crawlers), and You shall
			ensure to comply with any and all instructions set out on the Platform. You agree that You
			will not engage in any activity that interferes with or disrupts the Platform. Product samples
			provided by a brand are for campaign use only and are not allowed to be resold or traded.
			Athletes are required to follow guidelines on usage and trial of sample products. You agree
			that when You accept and participate in a Campaign, You shall in no way attempt to circumvent
			DapUp to work with the Business directly on the Campaign. You will not use any information you
			obtained from DapUp, the Business or any third party to compete with DapUp or in any way that
			would be detrimental to DapUp. Specifically, You agree not to solicit business directly from
			the Business and in the event the Business contacts you directly to solicit you or your
			services, you will notify DapUp immediately of such contact. DapUp, Athlete and Business
			understand the necessity of protects on against the unfair competition of circumvention of the
			other party and that the nature and scope of such protection has been carefully considered by
			each party. The parties further acknowledge and agree that the covenants and provisions of
			this section, for the consideration for disclosure of the identity of and nature of the
			relationship with the Business are among the inducements for entering into and consummating
			any transaction contemplated as a result thereof. If, however, any court determines that the
			foregoing restrictions are not reasonable, such restrictions shall be modified, rewritten, or
			interpreted to include as much as their nature and scope will render them enforceable. The
			parties understand and agree that in the event of a breach of this Agreement by either party,
			each shall be entitled to equitable relief, including injunction and specific performance as a
			remedy for any such breach, in addition to, and not exclusive of, any and all other remedies
			available at law or in equity, including recovery of damages. You agree that You are solely
			responsible for (and that DapUp has no responsibility to You or to any third party for) any
			breach of Your obligations under this Agreement or applicable law and for the consequences
			(including any loss or damage which DapUp or a third party may suﬀer) of any such breach.
			DapUp reserves the right to terminate or suspend Your use of the Platform at its sole
			discretion, with or without notice to You, upon any actual, threatened, or suspected breach of
			this Agreement or applicable law or upon any other conduct deemed by DapUp to be inappropriate
			or detrimental to the Platform, DapUp, or any Business or any person or entity accessing or
			using the DapUp website or Platform (“User”).`),I=i(),ct=a("br"),pt=i(),$=a("p"),dt=p("6. YOUR ACCOUNT, PASSWORDS AND ACCOUNT SECURITY"),zt=i(),jt=a("br"),$t=i(),ot=a("p"),Xt=p(`Your account, account ID and password is for Your sole use. You may not distribute, transfer
			or allow any third party to access Your account. You agree and understand that You are
			responsible for maintaining the confidentiality of any account ID and passwords associated
			with any account You use to access the Platform. Accordingly, You agree that You will be
			solely responsible to DapUp for all activities that occur under Your account. If You become
			aware of any unauthorized use of Your password or of Your account or any other breach of
			security, You agree to immediately notify DapUp.`),Kt=i(),nn=a("br"),an=i(),Qt=a("p"),on=p("7. PRIVACY AND YOUR PERSONAL INFORMATION"),rn=i(),sn=a("br"),ln=i(),ve=a("p"),hn=p(`For information about DapUp’s data protection practices, please read DapUp’s Privacy Policy.
			This policy explains how DapUp treats Your personal information, and protects Your privacy,
			when You use the Platform. Athlete expressly consents to the use and disclosure of personally
			identifiable information and other data and information as described in DapUp’s Privacy
			Policy. Athlete acknowledges and agrees that DapUp may disclose all information about Athlete
			and that Athlete may provide with respect to Athlete Content to the applicable Business to
			which that Athlete Content relates. By FEC/49697.0001/10191431 accepting this Agreement, You
			agree to the use of Your data in accordance with DapUp’s Privacy Policy, which is incorporated
			into and made part of this Agreement.`),cn=i(),pn=a("br"),dn=i(),Jt=a("p"),un=p("8. ELIGIBILITY"),mn=i(),fn=a("br"),gn=i(),Oe=a("p"),yn=p(`You must be eighteen (18) years or older to register as an Athlete in the Platform. If you are
			13 or older and younger than 18, then you may register on the Platform or provide Services
			only if you have your parents’ or guardians’ prior permission. By registering on the Platform,
			You represent and warrant that you are at least 18 years old or that you are at least 13 years
			old and have your parents’ or guardians’ prior permission to do so. If you are a parent or
			guardian providing permission for a child age 13 or older to the Platform or provide Services,
			then you agree to accept full responsibility for that child’s use of the Platform and
			provision of Services under this Agreement. For purposes of this Agreement, “You” includes
			parents or guardians who have given permission to a child who is 13 or older and younger than
			18 to register on the Platform or provide Services. By registering on the Platform, You
			represent and warrant that all information You submit is truthful and accurate, and that You
			agree to maintain the accuracy of such information. You understand and agree that we will use
			the information You provide in accordance with the terms of the DapUp Privacy Policy. DapUp
			accounts are not transferable, assignable or resalable under any circumstances and You are not
			permitted to transfer or assign Your rights or obligations under this Agreement without the
			express written consent of DapUp. Athletes in the Platform must have been registered directly
			by the individual with control and authority to bind the Athlete(s). DapUp will evaluate and
			qualify Athletes FEC/49697.0001/10191431 according to its internal criteria and DapUp may
			accept or reject Athletes for participation in any Campaign in its sole discretion.`),An=i(),En=a("br"),bn=i(),Zt=a("p"),Tn=p("9. Fees"),In=i(),wn=a("br"),Rn=i(),Ne=a("p"),vn=p(`Businesses will pay Athlete pursuant to the formal contract between Athlete and Business.
			DapUp shall not be obligated to pay Athlete any Fees. Athlete will look solely to Businesses
			for all compensation owed to You. Athlete acknowledges that Athlete is: (i) an independent
			contractor and not an employee of DapUp or Business, and nothing herein is intended to, or
			shall be construed to create a partnership, agency, joint venture, employment or similar
			relationship between the parties; (ii) responsible for the payment of all federal, state and
			local taxes on business and payments received from DapUp; (iii) responsible for any reporting
			requirements imposed by the federal, state or local government; and (iv) responsible for
			compliance with all other applicable laws, rules and regulations.`),On=i(),Nn=a("br"),Un=i(),te=a("p"),Sn=p("10. CONTENT INFORMATION"),Dn=i(),Cn=a("br"),Yn=i(),Ue=a("p"),Pn=p(`Athlete should be aware that Content presented to them as part of the Campaign, including but
			not limited to advertisements in the sponsored Content contained in Campaign materials, may be
			protected by intellectual property rights (as defined below) which might be owned by the
			Businesses who provide that Content to DapUp (or by other persons or companies on their
			behalf). Athlete is responsible to verify the accuracy, completeness and applicability of the
			Content for Your authorized use. DapUp will not be responsible for any errors or omissions in
			the Content. “Intellectual property rights” means all intellectual property and proprietary
			rights throughout the FEC/49697.0001/10191431 world, including, without limitation, all
			copyrights, trademarks, trade secrets, patents, moral rights, and other rights protecting
			data, information or intangible property throughout the world. Athlete shall not use the
			Content for any unauthorized purpose and shall not modify, alter, reproduce, rent, lease,
			loan, sell, license, sublicense, distribute, transfer or assign any Content or create
			derivative works based on the Content (either in whole or in part) unless they have been
			specifically authorized to do so by DapUp or by the owners of that Content in a separate
			written agreement. Athlete shall maintain any copyright and trademark notices or marks and
			will not alter or remove any valid notices associated with the Content. Athlete is not granted
			any right or license to the Content except as expressly set forth herein or in a separate
			written agreement. [You understand that by using the Platform, You may be exposed to Content
			that You may find oﬀensive, indecent or objectionable and that, in this respect, You use the
			Platform at Your own risk.] Athlete agrees that Athlete is solely responsible for (and that
			DapUp has no responsibility to them or to any third party for) any Content that You create,
			transmit or display while using the Platform and for the consequences of Your actions
			(including any loss or damage which DapUp or a third party may suﬀer) by doing so. DapUp will
			direct Athlete to take appropriate action to address any copyright infringement that it
			discovers including removal of Content when notified of any such infringement. Athlete will
			immediately implement any such direction from DapUp and will notify DapUp of any copyright
			infringement that it becomes aware of and will take immediate action to address any violation
			of copyright or other violation of proprietary rights of third parties and applicable laws.`),Ln=i(),Bn=a("br"),Hn=i(),ee=a("p"),Fn=p("11. DISCLOSURE AND ATHLETE REQUIREMENTS"),Mn=i(),_n=a("br"),kn=i(),Se=a("p"),Gn=p(`Every Athlete registering to DapUp, and any Athlete utilizing the Platform for participation
			in a Campaign, is required to provide disclosure in accordance with FTC Disclosure Guidelines.
			Each Athlete shall fully comply with all applicable FTC Guidelines including, but not limited
			to, the FTC Guidelines Concerning the Use of Endorsements and Testimonials in Advertising and
			.com Disclosures How to Make Eﬀective Disclosures in Digital Advertising, including any
			updates, additions, modifications, or supplemental guidance to the foregoing. Any failure of
			Athlete to fully disclose in strict accordance with the FTC Disclosure Guidelines shall
			constitute a material breach of this Agreement and DapUp and Business shall have the right to
			pursue all applicable legal and equitable remedies including termination and recovery of
			damages. Athletes participating in Campaigns that fail to fully comply with all applicable FTC
			Disclosure Guidelines [shall/may] not be permitted to participate in any future Campaigns and
			[will/may] be removed from our Platform.`),xn=i(),Wn=a("br"),Vn=i(),ne=a("p"),qn=p("12. CONFIDENTIALITY"),zn=i(),jn=a("br"),$n=i(),De=a("p"),Xn=p(`“Confidential Information” means any information disclosed to an Athlete by DapUp, either
			directly or indirectly, in writing, orally or by inspection of tangible objects including,
			without limitation, all Campaign related information, materials, and oﬀer terms. Confidential
			Information shall not, however, include information that You can establish: (i) was publicly
			known and made generally available in the public domain prior to the time of disclosure to You
			by DapUp; (ii) becomes publicly known and made generally available after disclosure to You by
			DapUp other than through Your action or inaction; or (iii) is in Your possession, without
			confidentiality restrictions, prior to the time of disclosure by DapUp as shown by Your files
			and records. Athlete shall not at any time (i) disclose, sell, license, transfer or otherwise
			make available to any person or entity any Confidential Information (except to Your employees
			and agents who have a legitimate need to know such information and are bound in writing by
			confidentiality and non-use restrictions not less protective than those contained herein), or
			(ii) use, reproduce or copy any Confidential Information, except as necessary in connection
			with the purpose for which such Confidential Information is disclosed to You and in accordance
			with this Agreement. Athlete agrees to take all measures to protect the secrecy, and avoid
			disclosure and unauthorized use, of the Confidential Information. Athlete may disclose
			Confidential Information if required by law to disclose the Confidential Information, provided
			that You give DapUp prompt written notice of such requirement prior to such disclosure and
			assistance in obtaining an order protecting the information from public disclosure, and
			provided further that any such disclosure is limited to the minimum extent necessary to comply
			with the legal requirement. All Confidential Information shall remain the property of DapUp
			and all documents, electronic media and other tangible items containing or relating to any
			Confidential Information shall be delivered to DapUp immediately upon DapUp’s request, and
			also, upon termination of the Agreement. Nothing contained in the Agreement will prevent
			DapUp, its parent and/or aﬃliates from complying with privacy laws and regulations, and if
			there is any conflict between this Agreement and the terms of the applicable DapUp Privacy
			Policy (as posted on or linked from the DapUp website), this Agreement shall control. Athlete
			may not issue any press release or other public statement regarding this Agreement, DapUp, its
			parent and/or its aﬃliates without DapUp’s prior written consent.`),Kn=i(),Qn=a("br"),Jn=i(),ae=a("p"),Zn=p("13. PLATFORM GUIDELINES"),ta=i(),ea=a("br"),na=i(),Ce=a("p"),aa=p(`All participants in the Platform or a Campaign shall comply with the following Requirements
			and restrictions. Campaign opportunities will be presented to the Athlete(s) by DapUp through
			the Platform setting forth terms for each Campaign. Athlete(s) shall comply with the terms of
			the Campaign, including, but not limited to, the time frames specified for posting Campaign
			related materials. Athlete(s) shall only post Campaign related materials and Business URL
			links on authorized websites and blogs within Your directly owned or controlled social
			channel. “Athlete Content” means Athlete content generated in the course of a Campaign
			including, without limitation, all creative presentation, social media posts, photographs,
			images, graphics, illustrations, video, original artwork, text, messages, data, information or
			other communications, titles, computer software, music, audio files or other sounds, URLs and
			descriptions, intellectual property, and any other type of content or media that You may
			create, prepare, produce and/or distribute pursuant to your use of the Platform and this
			Agreement. Athlete Content shall not include any material that may be deemed illegal,
			deceptive or oﬀensive by DapUp or the Business. DapUp reserves the right to track all visitors
			who view the Campaign post (each, a “View”). Athlete(s) shall maintain absolute traﬃc
			integrity by not taking any action to manipulate View traﬃc. Specifically, in this regard,
			Athlete(s) shall not generate Views through any automated, deceptive, fraudulent or other
			invalid means. Links and posts must be generated internally and limited to properties owned by
			the Athlete(s) Facilitated or promoted and Campaign related content shall not contain
			plagiarized, defamatory, libelous, slanderous, or unlawful and prohibited content and/or
			activity and shall not contain any content that infringes the intellectual property rights of
			third parties. Pornography or sexually explicit, overly graphic, hate related, violent,
			profanity, obscenity, or other vulgar content shall not be employed in the Platform or a
			Campaign. Misleading descriptions, titles, thumbnails, tags, large amounts of repetitive
			content is not in the spirit of the Platform or a Campaign. Facilitated or promoted and
			Campaign related content and links shall not be misleading, inaccurate, or deceptive, or View
			through to a site that is unrelated to content. There shall be no harassment, threats,
			invasion of privacy, predatory behavior, or stalking.`),oa=i(),ia=a("br"),ra=i(),oe=a("p"),sa=p("14. UNAUTHORIZED USE AND REMEDIES"),la=i(),ha=a("br"),ca=i(),Ye=a("p"),pa=p(`Any attempt to utilize automated programs, bots, screen scraping, database calls, human
			initiated data collection, or to copy, replicate, crawl, spider, index, store, cache or employ
			any other means of gathering data, content or other information for the purpose of obtaining
			unauthorized information from the Business or reverse engineering our Platform for commercial
			gain is strictly prohibited. Any manipulation of View data, impressions or any other relevant
			data or metric reported in the Platform as specified in this Agreement is strictly prohibited.
			DapUp will not be liable or responsible for any such actions. The oﬀending party will be
			immediately removed and banned from the Platform and may be liable to third parties.`),da=i(),ua=a("br"),ma=i(),ie=a("p"),fa=p("15. MODIFICATIONS"),ga=i(),ya=a("br"),Aa=i(),Pe=a("p"),Ea=p(`DapUp reserves the right, at any time, to modify, update or revise this Agreement, without
			prior notice to You, by making those modifications available on the Platform or by providing
			notice to You as specified in this Agreement. Modifications will be eﬀective immediately upon
			posting on the DapUp website and will apply automatically to any new Services or to any
			modification of Services. The most recent version of these Terms of Use will always be
			available on the DapUp website. Continued use of the Platform or any part thereof on the part
			of the User after the entry into eﬀect of new Terms of Use will signify the User´s acceptance
			of the same.`),ba=i(),Ta=a("br"),Ia=i(),re=a("p"),wa=p("16. REPRESENTATIONS AND WARRANTIES"),Ra=i(),va=a("br"),Oa=i(),Le=a("p"),Na=p(`Athletes participating in the Platform each represent, warrant and covenant to DapUp and
			Business that (i) You have the full right, power and authority to enter into and fully perform
			Your obligations under this Agreement in accordance with its terms; (ii) Your use of DapUp’s
			Platform is solely for lawful commercial and business purposes; (iii) You have the necessary
			rights to the Athlete Content including, without limitation, authorizations, waivers and
			releases necessary to provide, distribute and publish all Athlete Content (including, without
			limitation, all creative presentation, social media posts, photographs, images, video,
			original artwork, text, messages, data, information or other communications, titles, computer
			software, music, audio files or other sounds, URLs and descriptions, intellectual property,
			and any other type of content or media that You may create, prepare, produce and/or distribute
			pursuant to your use of the Platform and this Agreement) pursuant to a Campaign and this
			Agreement; and (iv) all such Athlete Content: (a) does not violate any law, statute,
			ordinance, treaty or regulation, including, but not limited to, the Federal Trade Commission
			Act and all rules and regulations promulgated thereunder and FTC Guidelines, DapUp policy or
			Guideline; (b) does not infringe any copyright, patent, trademark, trade secret or other
			intellectual property right of any third party; (c) does not breach any duty toward or rights
			of any person or entity including rights of publicity or privacy, and have not otherwise
			resulted in or are not likely to result in any consumer fraud, product liability, tort, breach
			of contract, injury, damage or harm of any kind to any person or entity; (d) are not false,
			deceptive or misleading; (e) does not contain any profanity, scandalous, libelous, defamatory,
			slanderous, threatening, obscene, pornographic or unlawful matter or material; (f) will be
			free of viruses, malware, Trojan horses, trap doors, back doors, Easter eggs, worms, time
			bombs, cancelbots or other computer programming routines that may potentially damage,
			interfere with, intercept, or expropriate any system data or personal information; and (g)
			will comply with the applicable Campaign and the Requirements,; and (i) You will not engage or
			cause others to engage in any form of spamming or improper or malicious, as determined by
			DapUp, Viewing, impression or marketing activities through the Platform, and You will comply
			with all applicable laws including complying with all applicable laws such as the CAN-SPAM Act
			of 2003.`),Ua=i(),Sa=a("br"),Da=i(),se=a("p"),Ca=p("17. COPYRIGHT, TRADEMARKS AND PROPRIETARY RIGHTS"),Ya=i(),Pa=a("br"),La=i(),C=a("p"),Ba=p(`You acknowledge and agree that DapUp (or DapUp´s licensors) own all legal rights, title and
			interest in and to the Platform and the Content as applicable, including any intellectual
			property rights. You further acknowledge that the Platform may contain information which is
			designated confidential by DapUp and that You shall not disclose such information without
			DapUp´s prior written consent. DapUp retains all intellectual property rights in and to the
			any additions, improvements, updates and modifications to the Platform. You receive no
			ownership interest in or to the Platform or Content and You are not granted any right or
			license to use the Platform or Content, apart from Your right to access the Platform and
			Content in compliance with this Agreement. Notwithstanding anything in the Privacy Policy or
			these Terms of Use to the contrary, DapUp shall have the right to collect, extract, compile,
			process and analyze non- personally identifiable data or information that is generated and
			processed in connection with the Service. The Platform or Content may contain links to
			third-party sites that are not under the control of DapUp. DapUp is not responsible for any
			content (or associated intellectual property rights) on any linked site and You access any
			third- party site from the Platform at Your own risk. Except as expressly authorized pursuant
			to a Campaign or as agreed to by DapUp in a separate written agreement, nothing in this
			Agreement gives You a right to use any of DapUp´s or its Business’s trade names, trademarks,
			service marks, logos, domain names, and other distinctive brand features. If You have been
			given an explicit right to use any of these brand features in a separate written agreement
			with DapUp, then You agree that Your use of such features shall be in compliance with that
			agreement. Unless You have been expressly authorized to do so in writing by DapUp, You agree
			that You will not use any trademark, service mark, trade name, logo of any company or
			organization in a way that is likely or intended to cause confusion about the owner or
			authorized user of such marks, names or logos. If DapUp makes any Business names, logos,
			trademarks, product images or other Business materials (“Business Materials”) available for
			Your use in connection with a Campaign, then subject to the terms and conditions provided to
			Athlete by DapUp or Business, Business grants Athlete a non- exclusive, revocable,
			non-transferable right to use the Business Materials only pursuant to those terms and
			conditions and this FEC/49697.0001/10191431 Agreement and only for purposes of the Campaign.
			Athlete understands that as to the Business Materials Athlete may not use them in a manner
			that suggests any endorsement of Athlete or Athlete’s website/blog/social media sites or other
			sites or services. Athlete understands that the license to the Business Materials will
			automatically terminate if Athlete exceeds the scope of the license or violates any of the
			terms and conditions hereunder, and that Athlete will then be subject to copyright
			infringement and potentially other liability. If any Business Materials are provided to
			Athlete with any disclosure or confidentiality obligations (e.g., no mention until a certain
			date), Athlete will strictly comply with such obligations. All Athlete Content will belong
			exclusively to DapUp. Athlete hereby acknowledges and agrees that DapUp shall be the sole
			owner of all right title and interest in and to any and all Athlete Content and all
			intellectual property rights therein or related thereto. Athlete hereby grants, assigns, and
			transfers to DapUp all present and future worldwide right, title and interest in and to the
			Athlete Content created, prepared, produced and/or distributed pursuant to a Campaign and this
			Agreement, and all intellectual property rights, except that Athlete retains a limited license
			to display such Athlete Content on Athlete’s blog, social media accounts, in portfolios, and
			other self-promotion channels. As to any portion of the Athlete Content created after the
			execution of this Agreement, the assignment shall become eﬀective immediately upon creation
			thereof, without need for further consideration or written agreement among the parties.
			Athlete waives any and all moral rights in any Athlete Content in perpetuity. By way of
			example and not limitation, DapUp shall have the right to publish, repurpose, create
			derivative works of and further use the Athlete Content for any purpose without any further
			assignment, license or authorization and shall have the right to license and sublicense the
			Athlete Content at its discretion. Further, Athlete hereby grants to DapUp the nonexclusive,
			worldwide, sublicensable, fully paid-up, royalty free right and license to use, reproduce,
			modify, copy, publish, display and distribute Athlete’s name, nickname, username, likeness,
			image and photo in connection with the Athlete Content, in whole or in part, edited or
			otherwise modified, alone or with other materials, for the purpose of promoting DapUp,
			Business and/or the Campaign. Athlete is prohibited from modifying, removing, suppressing, or
			in any other way making inconspicuous the copyright, digital fingerprints, watermarks,
			identification labels, legal notices contained within the Content or other technical
			protection devices or data identifying DapUp or its licensors rights in the Content, its files
			or its components. If You believe that Your work has been used in a way that constitutes
			copyright infringement, or Your intellectual property rights have been otherwise infringed,
			please notify DapUp at info@dapup.co. We will review all claims of copyright infringement
			received and remove the Content deemed to have been posted or distributed in breach of any
			applicable laws. To make a claim, please provide us with the following:`),Ha=a("br"),Fa=a("br"),Ma=p(`
			1. A description of the copyrighted work that You claim has been infringed;`),_a=a("br"),ka=p(`

			2. Information suﬃcient to enable DapUp to locate the allegedly infringing Content on the
			Service;`),Ga=a("br"),xa=p(`

			3. Your address, telephone number and email address;`),Wa=a("br"),Va=p(`

			4. A statement by You that You have a good faith belief that the use of the Content is not
			authorized;`),qa=a("br"),za=p(`
			5. A statement by You that the above information in Your notification is accurate and that You
			are the copyright owner or authorized to act on the copyright owner's behalf; and`),ja=a("br"),$a=p(`
			6. A signature of the person authorized to act on behalf of the owner of the copyright interest.`),Xa=a("br"),Ka=p(`

			Upon receipt of notice as described above, DapUp will take whatever action, in its sole
			discretion, it deems appropriate, including removal of the challenged use or termination of
			the posting account.`),Qa=i(),Ja=a("br"),Za=i(),le=a("p"),to=p("18. INDEMNIFICATION"),eo=i(),no=a("br"),ao=i(),Be=a("p"),oo=p(`Athletes participating in the Platform (“Indemnitors”) each agree to indemnify and hold
			harmless DapUp and Business, and their parent and aﬃliates and their oﬃcers, directors,
			licensors, partners, licensees, consultants, contractors, agents, attorneys, employees (each,
			a “Indemnified Entity” and collectively, the “Indemnified Entities”) and third party service
			providers from any and all claims, liabilities, costs and expenses, including reasonable
			attorneys’ fees (collectively, “Claim(s)”), that arise from: (i) Your use or misuse of the
			Platform; (ii) Athlete Content or social postings; (iii) Your website; (v) performance of a
			Campaign due to Your conduct or actions; and (vi) Your breach of this Agreement, including but
			not limited to applicable representations and warranties, and any separate Agreement the
			parties execute. You agree to be solely responsible for defending any Claim against or suﬀered
			by DapUp and/or any Indemnified Entity, subject to DapUp and/or the Indemnified Entity’s right
			to participate with counsel of its own choosing, and for payment of damages or losses
			resulting from all claims against DapUp, and/or any Indemnified Entities provided that You
			will not agree to any settlement that imposes any obligation or liability on DapUp and/or an
			Indemnified Entities without DapUp’s or Indemnified Entity’s prior express written consent. If
			You are accepting or agreeing to this Agreement on behalf of a company or other entity, You
			and such entity shall be jointly and severally liable for all of Indemnitors promises and
			obligations pursuant to this this Section [18].`),io=i(),ro=a("br"),so=i(),he=a("p"),lo=p("19. INTERNATIONAL USE"),ho=i(),co=a("br"),po=i(),He=a("p"),uo=p(`As a consequence of the global nature of the Internet, You agree to comply with all local
			rules and laws applicable to You in respect of Your conduct on the Internet and acceptable
			content. Specifically, You agree to comply with all applicable laws regarding use, processing
			and storage of personal data, obscene and indecent content and communications and those
			regarding the transmission of technical data exported from the United States or the country
			from which You access the Platform.`),mo=i(),fo=a("br"),go=i(),ce=a("p"),yo=p("20. WARRANTY DISCLAIMER"),Ao=i(),Eo=a("br"),bo=i(),Fe=a("p"),To=p(`ATHLETE EXPRESSLY AGREES THAT THE SERVICES ARE AVAILABLE ON AN “AS IS“ BASIS, WITHOUT WARRANTY
			OF ANY KIND, EXPRESS OR IMPLIED, AND THAT YOUR USE THEREOF IS AT YOUR OWN RISK. WITHOUT
			LIMITING THE GENERALITY OF THE FOREGOING, DAPUP DISCLAIMS TO THE MAXIMUM EXTENT PERMITTED BY
			LAW ANY AND ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY (I)
			WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, (II) WARRANTIES AGAINST
			INFRINGEMENT OF ANY THIRD PARTY INTELLECTUAL PROPERTY OR PROPRIETARY RIGHTS, (III) WARRANTIES
			RELATING TO DELAYS, INTERRUPTIONS, ERRORS, OR OMISSIONS IN THE SERVICE OR DAPUP WEBSITE, OR
			ANY THIRD PARTY THEREOF, (IV) WARRANTIES RELATING TO THE FEC/49697.0001/10191431 TRANSMISSION
			OR DELIVERY OF THE SERVICE OR THE DAPUP WEBSITE, (V) WARRANTIES RELATING TO THE ACCURACY OR
			CORRECTNESS OF DATA, AND ANY OTHER WARRANTIES OTHERWISE RELATING TO PERFORMANCE,
			NONPERFORMANCE OR OTHER ACTS OR OMISSIONS BY DAPUP. FURTHER, AND WITHOUT LIMITING THE
			GENERALITY OF ANY OF THE FOREGOING, THERE IS NO WARRANTY THAT THE PLATFORM OR THE DAPUP
			WEBSITE WILL MEET YOUR NEEDS OR REQUIREMENTS OR THE NEEDS OR REQUIREMENTS OF ANY OTHER PERSON.
			IN ADDITION, YOU ACKNOWLEDGE AND AGREE THAT DAPUP´S WARRANTY DOES NOT COVER TELECOMMUNICATIONS
			OR INTERNET OUTAGES CAUSED BY THIRD PARTIES OR OTHERWISE OUTSIDE OF DAPUP'S CONTROL.
			BECAUSE SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN CATEGORIES OF DAMAGES
			OR IMPLIED WARRANTIES, THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU. IN SUCH JURISDICTIONS,
			DAPUP´S LIABILITY IS LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW.`),Io=i(),wo=a("br"),Ro=i(),pe=a("p"),vo=p("21. LIMITATION OF LIABILITY"),Oo=i(),No=a("br"),Uo=i(),Me=a("p"),So=p(`DAPUP SHALL NOT BE LIABLE TO ATHLETE FOR DAMAGES OF ANY KIND ARISING OUT OF ATHLETE’S USE OF
			THE PLATFORM. IN NO EVENT SHALL DAPUP OR ANY DAPUP ENTITY BE LIABLE FOR ANY INDIRECT, SPECIAL,
			INCIDENTAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, ARISING OUT OF, OR IN CONNECTION
			WITH YOUR USE OF THE PLATFORM OR PARTICIPATION IN A CAMPAIGN INCLUDING, WITHOUT LIMITATION,
			ANY: (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II) LOST BUSINESS, LOST REVENUES, OR
			LOSS OF ANTICIPATED PROFITS OR ANY OTHER PECUNIARY OR NON-PECUNIARY LOSS OR DAMAGES, (III) ANY
			UNAUTHORIZED ACCESS TO OR USE OF PERSONAL INFORMATION, (IV) INTERRUPTION OR FAILURE OF THE
			SERVICE, (V) ANY BUGS, VIRUSES, EASTER EGGS, TROJAN HORSES OR OTHER FORMS OF MALWARE
			INTRODUCED TO THE SERVICE BY A THIRD PARTY. DAPUP SHALL NOT BE LIABLE FOR ANY OFFENSIVE,
			DEFAMATORY, OR ILLEGAL CONDUCT OR CONTENT OF ANY THIRD PARTY AND ANY USER’S OR ATHLETE’S SOLE
			REMEDY IS TO DISCONTINUE USING THE PLATFORM OR PARTICIPATION IN ANY CAMPAIGN. ATHLETE AGREES
			THAT IT WILL NOT HOLD DAPUP RESPONSIBLE FOR THE SELECTION OR RETENTION OF, OR ANY ACTS,
			ERRORS, OR OMISSIONS BY, ANY THIRD PARTY IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITH
			RESPECT TO VIEWS BY ANY THIRD PARTY ON ATHLETE’S POSTING(S) OF CAMPAIGNS AND ATHLETE CONTENT,
			REGARDLESS OF THE INTENT OF SUCH THIRD PARTY. THE FOREGOING LIMITATIONS APPLY REGARDLESS OF
			THE LEGAL THEORY UPON WHICH ANY CLAIM FOR SUCH DAMAGES IS BASED, WHETHER THE PARTIES HAD BEEN
			ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND WHETHER SUCH DAMAGES WERE REASONABLY
			FORESEEABLE. IN NO EVENT SHALL THE AGGREGATE LIABILITY OF DAPUP ARISING OUT OF OR RELATED TO
			THIS AGREEMENT EXCEED THE TOTAL FEES PAID BY DAPUP TO ATHLETE IN THE MONTH PRIOR TO THE MONTH
			IN WHICH THE CLAIM AROSE. YOU ACKNOWLEDGE AND AGREE THAT (A) THE REMEDIES, EXCLUSIONS,
			LIMITATIONS OF LIABILITY, AND LIMITATION OF DAMAGES HEREIN, REFLECT A REASONABLE ALLOCATION OF
			RISKS; (B) THAT DAPUP WOULD NOT ENTER INTO THIS AGREEMENT WITHOUT THESE EXCLUSIONS,
			LIMITATIONS OF LIABILITY, AND ALL OTHER TERMS IN THIS AGREEMENT. ATHLETE ACKNOWLEDGES THAT THE
			TERMS CONTAINED IN THIS AGREEMENT ARE A FAIR ALLOCATION OF RISKS FEC/49697.0001/10191431
			BETWEEN ATHLETE AND DAPUP. BECAUSE SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION
			OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, DAPUP´S LIABILITY IN SUCH JURISDICTIONS SHALL BE
			LIMITED TO THE FULLEST EXTENT PERMITTED BY LAW.`),Do=i(),Co=a("br"),Yo=i(),de=a("p"),Po=p("22. NOTICES"),Lo=i(),Bo=a("br"),Ho=i(),_e=a("p"),Fo=p(`Except for copyright infringement notices as set forth in Section [17]: Copyright, Trademarks,
			and Proprietary Rights above, any notice from User to DapUp must be addressed to
			info@dapup.co. There may be other information regarding the Platform and DapUp’s services that
			the law requires us to send to the User. User consents to DapUp´s sending this information in
			electronic form to the email address provided in the User profile on the DapUp website. Email
			shall be the fully authorized formal and standard means of communication of notices and
			messages and shall be considered delivered at the close of business of the day that the email
			communication was transmitted. DapUp will send notices via email or regular mail [or display
			links to notices on the DapUp website and the Platform. You must read these notices regularly
			as these notices will apply and You will be responsible for immediate compliance. Please
			ensure Your email address is valid and up to date to receive such information. We may also
			provide required information to the User access to www.DapUp.com or another website designated
			in an email notice or generally designated in advance for this purpose. Notices provided to
			You via email will be deemed given and received on the transmission date.`),Mo=i(),_o=a("br"),ko=i(),ue=a("p"),Go=p("23. GOVERNING LAW; JURISDICTION AND VENUE"),xo=i(),Wo=a("br"),Vo=i(),ke=a("p"),qo=p(`This Agreement shall be governed by the laws of the State of Arkansas, without regard to
			conflicts of laws principles. Each party agrees that all disputes arising under this Agreement
			shall be brought in the Superior Court of the State of Arkansas in Washington County or the
			Federal District Court of Arkansas, Western District. Each party irrevocably consents to such
			jurisdiction and irrevocably waives any objection such party may have as to the venue of any
			such proceeding brought in such court as an inconvenient forum.`),zo=i(),jo=a("br"),$o=i(),me=a("p"),Xo=p("24. ELECTRONIC SIGNATURES EFFECTIVE"),Ko=i(),Qo=a("br"),Jo=i(),Ge=a("p"),Zo=p(`This Agreement is an electronic contract that sets out the legally binding terms of Your use
			of the DapUp Platform. You indicate Your acceptance of this Agreement, and all of the terms
			and conditions contained or referenced herein, pursuant to Section 2 (Acceptance of This
			Agreement) of this Agreement and thereby also consent to have this Agreement provided to you
			in electronic form. Please print and save a copy of this Agreement for Your records.`),ti=i(),fe=a("p"),ei=p("25. TERMINATION"),ni=i(),ai=a("br"),oi=i(),xe=a("p"),ii=p(`This Agreement will continue to apply until terminated by either You or DapUp. This Agreement
			may be terminated by either party at any time, in that party’s sole discretion by providing
			notice as specified herein. Termination will be effective upon receipt by the non-terminating
			party. Upon termination of this Agreement for any reason: (1) all rights granted to You in
			relation to the Platform and under this Agreement will terminate FEC/49697.0001/10191431 and
			You will immediately return and cease using or accessing all Campaign materials; (2) You will
			immediately cease all use of and access to the Platform and all Content. Upon termination of
			this Agreement, any provision which, by its nature or express terms should survive, will
			survive such termination or expiration, including but not limited to Sections 3, 5, 6, 8, 10
			through 15, and 16 through 28.`),ri=i(),si=a("br"),li=i(),ge=a("p"),hi=p("26. CEASING OF PERFORMANCE OF SERVICES"),ci=i(),pi=a("br"),di=i(),We=a("p"),ui=p(`Athlete will immediately cease performing the Services, and/or return all work created in
			connection with my Services, upon notice by DapUp or Business.`),mi=i(),fi=a("br"),gi=i(),ye=a("p"),yi=p("27. ASSIGNMENT; THIRD-PARTY BENEFICIARY"),Ai=i(),Ei=a("br"),bi=i(),Ve=a("p"),Ti=p(`DapUp will have the right to assign this Agreement and rights and delegate its duties in
			connection with a merger, reorganization, or sale of substantially all of its assets. This
			Agreement will bind successors and permitted assigns. User shall not assign these this
			Agreement or assign any rights or delegate any obligations hereunder, in whole or in part,
			whether voluntarily or by operation of law, without DapUp’s prior written consent. Any such
			purported assignment or delegation without consent will be null and void and of no force or
			effect. You acknowledge and agree that (i) Business is a third-party beneficiary to this
			Agreement and is entitled to the rights and benefits hereunder and may enforce the provisions
			hereof as if it were a party hereto and (ii) Business has no liability or obligations to you
			under this Agreement.`),Ii=i(),wi=a("br"),Ri=i(),Ae=a("p"),vi=p("28. MISCELLANEOUS"),Oi=i(),Ni=a("br"),Ui=i(),qe=a("p"),Si=p(`User understands and agrees that this Agreement and any notices given pursuant to this
			Agreement are enforceable in electronic format. The specific set of Terms of Use relating to
			each User’s contract for the Services will not be stored individually. This Agreement
			constitutes the complete agreement between DapUp and the User and supersedes any prior oral or
			written agreement or understanding relating thereto between the User and DapUp. Should any
			part of this Agreement be or be found to be invalid, illegal or unenforceable, this shall in
			no way affect the validity of the remaining parts. DapUp´s failure to act or enforce any
			provision in respect to this Agreement or a breach thereof it shall not constitute a waiver of
			such provision.`),Di=i(),Ci=a("br"),Yi=i(),ze=a("p"),Pi=p("Any questions?"),Li=i(),Bi=a("br"),Hi=i(),je=a("p"),Fi=p("If You have questions, queries or suggestions, please contact us at:"),Mi=i(),_i=a("br"),ki=i(),$e=a("p"),Gi=p("DapUp, LLC"),xi=i(),Wi=a("br"),Vi=i(),Xe=a("p"),qi=p("Email: info@dapup.co"),zi=i(),ji=a("br"),this.h()},l(Ke){e=o(Ke,"DIV",{class:!0});var n=u(e);s=o(n,"DIV",{class:!0});var Qe=u(s);c=o(Qe,"P",{class:!0});var er=u(c);y=d(er,"Terms of Service"),er.forEach(l),g=r(Qe),h=o(Qe,"BUTTON",{class:!0});var nr=u(h);f=d(nr,"X"),nr.forEach(l),Qe.forEach(l),E=r(n),b=o(n,"BR",{}),v=o(n,"BR",{}),U=r(n),O=o(n,"P",{class:!0});var ar=u(O);T=d(ar,"Terms of use"),ar.forEach(l),w=r(n),Y=o(n,"BR",{}),X=o(n,"BR",{}),yt=r(n),J=o(n,"P",{class:!0});var or=u(J);F=d(or,"1. INTRODUCTION"),or.forEach(l),it=r(n),At=o(n,"BR",{}),Et=r(n),M=o(n,"P",{});var ir=u(M);bt=d(ir,`DapUp, LLC (“DapUp”) is a digital influence agency that connects Athletes (as defined below)
			with persons or entities who seek to expand their brand, product, and/or service awareness
			online by creating campaigns or otherwise establishing a formal business relationship
			("Businesses"). DapUp specializes in connecting Athletes to the Business where it
			will provide the most value (i.e., the best match). Athletes, for the purposes of these “Terms
			of Use” include those who are actively competing on teams or in competitions that attract
			substantial attention or that are considered higher level in the sports world and who have a
			presence on social media networks (such as Facebook, Twitter, YouTube and TikTok), use their
			social media networks to post regular content, and work or are willing to work with Businesses
			to promote their brand and/or products or services ("Athlete"). As an Athlete, DapUp
			values your opinions and considers you and your audience valuable assets to the Businesses
			with which DapUp works. Working with us and providing your services to the Business through
			DapUp's proprietary relationships with Businesses (the “Service” or “Services”) is subject
			to your acceptance of and compliance with all the terms and conditions of this “Terms of Use,”
			any statement of work (“SOW”), our Privacy Policy (“Privacy Policy”), and any instructions,
			rules, policies, briefs or guidelines related to Athletes (“Guidelines”) (collectively, the
			FEC/49697.0001/10191431 “Agreement”). To the extent of any conflict between this Terms of Use
			and the SOW, the terms of SOW shall control. This Agreement is agreed to between DapUp and
			you, or if you represent a company or other entity, that company or entity (in either case
			“You”, “Your”, or “Athlete”). If You accept or agree to this Agreement on behalf of a company
			or other entity, You represent and warrant that You have the authority to bind that company or
			other entity to this Agreement.`),ir.forEach(l),Tt=r(n),It=o(n,"BR",{}),_=o(n,"BR",{}),wt=r(n),Z=o(n,"P",{class:!0});var rr=u(Z);Rt=d(rr,"2. ACCEPTANCE OF THIS AGREEMENT"),rr.forEach(l),K=r(n),vt=o(n,"BR",{}),Ot=d(n,`
		You can accept this Agreement by:
		`),k=o(n,"OL",{});var Ee=u(k);L=o(Ee,"LI",{});var sr=u(L);Nt=d(sr,"1. Viewing on the “I Agree” or “I Accept” box;"),sr.forEach(l),Ut=r(Ee),G=o(Ee,"LI",{});var lr=u(G);St=d(lr,"2. Registering in the DapUp’s online platform (“Platform”) at https://www.dapup.co ; or"),lr.forEach(l),Dt=r(Ee),rt=o(Ee,"LI",{});var hr=u(rt);x=d(hr,`3. Accessing or using the Platform or otherwise accepting to participate in a campaign by
				Businesses (“Campaign”).`),hr.forEach(l),Ee.forEach(l),st=r(n),Ct=o(n,"BR",{}),Yt=r(n),W=o(n,"P",{});var cr=u(W);Pt=d(cr,`The term of this Agreement will commence on the date any of the earliest above numbered events
			occur (the “Eﬀective Date”) and will end when terminated by either party in accordance with
			this Agreement. In accepting this Agreement, You agree that DapUp may disclose Your
			registration and other applicable information to the Business. [In this case, You understand
			and agree that DapUp will treat Your use of the Platform as acceptance of this Agreement from
			that point onwards.] By accepting this Agreement, You acknowledge and agree that You have read
			and accept the terms set forth herein and agree to be bound by this Agreement. Each time You
			use the Platform, the current version of the Terms of Use will apply. Accordingly,
			FEC/49697.0001/10191431 when You use the Platform, You should check the date of the Terms of
			Use (which appears at the top of this document) and review any changes since the last version.
			The Terms of Use will be available at all times at [DapUp website link for Terms of Use]. You
			may not register and access and use the Platform and may not accept this Agreement if: (a) You
			are not legally competent to form a binding contract with DapUp; (b) in the case of a company
			or other entity, You lack the authority to enter into this Agreement and bind that company or
			other entity to this Agreement; or (c) You do not comply with Section [9] “Eligibility” rules.
			Your acceptance will legally bind You to comply with this Agreement. IF YOU DO NOT AGREE TO
			THE TERMS OF THIS AGREEMENT, OR DO NOT MEET THE QUALIFICATIONS INCLUDED IN THIS AGREEMENT,
			THEN YOU HAVE NO RIGHT TO ACCESS OR USE THE PLATFORM AND PROVIDE ANY SERVICES. IF YOU ACCESS
			OR USE THE PLATFORM, YOU ACKNOWLEDGE THAT YOUR MEET THE QUALIFICATIONS INCLUDED IN THIS
			AGREEMENT AND AGREE TO BE BOUND BY THE TERMS OF THIS AGREEMENT. Before You continue, You
			should print oﬀ or save a local copy of the Terms of Use for Your records.`),cr.forEach(l),Lt=r(n),tt=o(n,"BR",{}),Bt=o(n,"BR",{}),Ht=r(n),B=o(n,"P",{class:!0});var pr=u(B);Ft=d(pr,"3. CAMPAIGNS"),pr.forEach(l),Mt=r(n),V=o(n,"BR",{}),q=r(n),lt=o(n,"P",{});var dr=u(lt);_t=d(dr,`DapUp’s method of operations: Participating Businesses create and send Campaigns through the
			Platform located on the DapUp website, which oﬀer Athletes the opportunity to participate in
			Campaigns from a Business. DapUp presents this information to eligible Athletes on the
			platform for Athletes to indicate whether such FEC/49697.0001/10191431 Campaign is one they
			would like to pursue. Each Campaign details a brief description of the Campaign, deliverables,
			a start and end date, compensation information, and any exclusivity requirements. If accepted
			to the Campaign, participating Athletes will receive additional information and Guidelines
			from DapUp via email communications and through Athlete’s account in the Platform. All
			Campaigns must comply with the requirements established by DapUp (referred to as the
			“Requirements”). By accepting and participating in a Campaign, You acknowledge the terms of
			the Campaign and agree to be connected that You have reviewed and accept all Requirements and
			that You agree to strictly adhere to the Campaign, the Requirements, and this Agreement.
			Permanence of Content: All content created or published for any Campaign will remain publicly
			visible with the campaign hashtag(s) and disclosures for a period of at least 90 days after
			the final payment of Fees. In addition, if the Content is modified in any way beyond this time
			period, the required disclosure must remain intact in order to comply with FTC requirements.
			Reporting: The outcomes of all connections between Businesses and Athletes must be reported
			within 2 hours of Athlete receiving compensation, and failure to timely report will result in
			potential payment deduction of fifty dollars ($25.00) in compensation for each day delay in
			submission. During the term of this Agreement, Athlete has the right to provide content
			services to others provided that such other engagement or performance does not: (a) interfere
			in any way with the timely and professional performance of the Services to DapUp; (b) require
			the disclosure or use of Confidential Information; and (c) conflict with any other agreements
			between DapUp and Athlete regarding exclusivity. DapUp has no obligation to propose a Campaign
			to Athlete and may receive content services from other Athletes during the term of this
			Agreement. If You do not accept the Requirements, You must immediately notify DapUp and
			refrain from participating in the Campaign. Noncompliance with the Requirements, including but
			not limited to any applicable acceptance or posting dates, or this Agreement may result in
			Athlete not being entitled to compensation, removal from the Campaign, ineligibility to
			participate in any future DapUp Campaigns and/or being removed from the DapUp Platform.`),dr.forEach(l),z=r(n),kt=o(n,"BR",{}),et=r(n),nt=o(n,"P",{class:!0});var ur=u(nt);mt=d(ur,"4. REVIEWS & APPROVALS"),ur.forEach(l),at=r(n),Gt=o(n,"BR",{}),Q=r(n),ht=o(n,"P",{});var mr=u(ht);xt=d(mr,`DapUp in its sole discretion shall determine whether Athlete has complied with the
			Requirements and is entitled to the compensation in connection with a Campaign. Athletes who
			do not comply with the Requirements and this Agreement will not be entitled to the
			compensation associated with such Campaign. Failure to submit required posts within the
			Campaign posting period or to make necessary edits to published posts in a timely manner may
			result in disqualification to participate in the Campaign and reduced or non-payment of
			associated compensation.`),mr.forEach(l),S=r(n),Re=o(n,"BR",{}),Wt=r(n),ft=o(n,"P",{class:!0});var fr=u(ft);Vt=d(fr,"5. USE OF PLATFORM"),fr.forEach(l),D=r(n),qt=o(n,"BR",{}),R=r(n),N=o(n,"P",{});var gr=u(N);j=d(gr,`In order to access the Platform and provide Services, You may be required to provide
			information about yourself (such as identification or contact details) as part of
			registration, or as part of Your continued use of the Platform. You agree that any
			registration information You provide to DapUp will always be accurate, complete and up to
			date. You will update Your registration information as necessary to maintain accuracy. You
			agree to use the Platform only for purposes that are permitted by (a) this Agreement, and (b)
			any applicable law, regulation or generally accepted practices or guidelines in the relevant
			jurisdictions (including any laws regarding the export of data or software to and from the
			United States or other relevant countries). Unless otherwise agreed in writing by DapUp, You
			agree that You shall not copy, distribute, modify, reproduce, duplicate, perform, display,
			create derivative works from, reverse engineer, decompile, attempt to obtain the source code
			or algorithms of, trade, sell, rent, lease, license, sublicense, resell or transfer the
			Platform or any portion thereof. You shall not in connection with any Campaign take any of the
			following actions or use the Platform to transmit spam, send unsolicited e-mails, conceal the
			identity of an e-mail sender or to create or utilize technology to generate fraudulent point
			activity including, but not limited to, bots, or spiders. You shall not use the Platform for
			the benefit of any third party other than as authorized in this Agreement, whether on a paid
			or unpaid basis. You agree not to access (or attempt to access) any information of DapUp,
			Business or Campaign (i) by any means other than through the interface that is provided by
			DapUp, unless You have been specifically allowed to do so in a separate agreement with DapUp;
			or (ii) through any automated means (including use of scripts or web crawlers), and You shall
			ensure to comply with any and all instructions set out on the Platform. You agree that You
			will not engage in any activity that interferes with or disrupts the Platform. Product samples
			provided by a brand are for campaign use only and are not allowed to be resold or traded.
			Athletes are required to follow guidelines on usage and trial of sample products. You agree
			that when You accept and participate in a Campaign, You shall in no way attempt to circumvent
			DapUp to work with the Business directly on the Campaign. You will not use any information you
			obtained from DapUp, the Business or any third party to compete with DapUp or in any way that
			would be detrimental to DapUp. Specifically, You agree not to solicit business directly from
			the Business and in the event the Business contacts you directly to solicit you or your
			services, you will notify DapUp immediately of such contact. DapUp, Athlete and Business
			understand the necessity of protects on against the unfair competition of circumvention of the
			other party and that the nature and scope of such protection has been carefully considered by
			each party. The parties further acknowledge and agree that the covenants and provisions of
			this section, for the consideration for disclosure of the identity of and nature of the
			relationship with the Business are among the inducements for entering into and consummating
			any transaction contemplated as a result thereof. If, however, any court determines that the
			foregoing restrictions are not reasonable, such restrictions shall be modified, rewritten, or
			interpreted to include as much as their nature and scope will render them enforceable. The
			parties understand and agree that in the event of a breach of this Agreement by either party,
			each shall be entitled to equitable relief, including injunction and specific performance as a
			remedy for any such breach, in addition to, and not exclusive of, any and all other remedies
			available at law or in equity, including recovery of damages. You agree that You are solely
			responsible for (and that DapUp has no responsibility to You or to any third party for) any
			breach of Your obligations under this Agreement or applicable law and for the consequences
			(including any loss or damage which DapUp or a third party may suﬀer) of any such breach.
			DapUp reserves the right to terminate or suspend Your use of the Platform at its sole
			discretion, with or without notice to You, upon any actual, threatened, or suspected breach of
			this Agreement or applicable law or upon any other conduct deemed by DapUp to be inappropriate
			or detrimental to the Platform, DapUp, or any Business or any person or entity accessing or
			using the DapUp website or Platform (“User”).`),gr.forEach(l),I=r(n),ct=o(n,"BR",{}),pt=r(n),$=o(n,"P",{class:!0});var yr=u($);dt=d(yr,"6. YOUR ACCOUNT, PASSWORDS AND ACCOUNT SECURITY"),yr.forEach(l),zt=r(n),jt=o(n,"BR",{}),$t=r(n),ot=o(n,"P",{});var Ar=u(ot);Xt=d(Ar,`Your account, account ID and password is for Your sole use. You may not distribute, transfer
			or allow any third party to access Your account. You agree and understand that You are
			responsible for maintaining the confidentiality of any account ID and passwords associated
			with any account You use to access the Platform. Accordingly, You agree that You will be
			solely responsible to DapUp for all activities that occur under Your account. If You become
			aware of any unauthorized use of Your password or of Your account or any other breach of
			security, You agree to immediately notify DapUp.`),Ar.forEach(l),Kt=r(n),nn=o(n,"BR",{}),an=r(n),Qt=o(n,"P",{class:!0});var Er=u(Qt);on=d(Er,"7. PRIVACY AND YOUR PERSONAL INFORMATION"),Er.forEach(l),rn=r(n),sn=o(n,"BR",{}),ln=r(n),ve=o(n,"P",{});var br=u(ve);hn=d(br,`For information about DapUp’s data protection practices, please read DapUp’s Privacy Policy.
			This policy explains how DapUp treats Your personal information, and protects Your privacy,
			when You use the Platform. Athlete expressly consents to the use and disclosure of personally
			identifiable information and other data and information as described in DapUp’s Privacy
			Policy. Athlete acknowledges and agrees that DapUp may disclose all information about Athlete
			and that Athlete may provide with respect to Athlete Content to the applicable Business to
			which that Athlete Content relates. By FEC/49697.0001/10191431 accepting this Agreement, You
			agree to the use of Your data in accordance with DapUp’s Privacy Policy, which is incorporated
			into and made part of this Agreement.`),br.forEach(l),cn=r(n),pn=o(n,"BR",{}),dn=r(n),Jt=o(n,"P",{class:!0});var Tr=u(Jt);un=d(Tr,"8. ELIGIBILITY"),Tr.forEach(l),mn=r(n),fn=o(n,"BR",{}),gn=r(n),Oe=o(n,"P",{});var Ir=u(Oe);yn=d(Ir,`You must be eighteen (18) years or older to register as an Athlete in the Platform. If you are
			13 or older and younger than 18, then you may register on the Platform or provide Services
			only if you have your parents’ or guardians’ prior permission. By registering on the Platform,
			You represent and warrant that you are at least 18 years old or that you are at least 13 years
			old and have your parents’ or guardians’ prior permission to do so. If you are a parent or
			guardian providing permission for a child age 13 or older to the Platform or provide Services,
			then you agree to accept full responsibility for that child’s use of the Platform and
			provision of Services under this Agreement. For purposes of this Agreement, “You” includes
			parents or guardians who have given permission to a child who is 13 or older and younger than
			18 to register on the Platform or provide Services. By registering on the Platform, You
			represent and warrant that all information You submit is truthful and accurate, and that You
			agree to maintain the accuracy of such information. You understand and agree that we will use
			the information You provide in accordance with the terms of the DapUp Privacy Policy. DapUp
			accounts are not transferable, assignable or resalable under any circumstances and You are not
			permitted to transfer or assign Your rights or obligations under this Agreement without the
			express written consent of DapUp. Athletes in the Platform must have been registered directly
			by the individual with control and authority to bind the Athlete(s). DapUp will evaluate and
			qualify Athletes FEC/49697.0001/10191431 according to its internal criteria and DapUp may
			accept or reject Athletes for participation in any Campaign in its sole discretion.`),Ir.forEach(l),An=r(n),En=o(n,"BR",{}),bn=r(n),Zt=o(n,"P",{class:!0});var wr=u(Zt);Tn=d(wr,"9. Fees"),wr.forEach(l),In=r(n),wn=o(n,"BR",{}),Rn=r(n),Ne=o(n,"P",{});var Rr=u(Ne);vn=d(Rr,`Businesses will pay Athlete pursuant to the formal contract between Athlete and Business.
			DapUp shall not be obligated to pay Athlete any Fees. Athlete will look solely to Businesses
			for all compensation owed to You. Athlete acknowledges that Athlete is: (i) an independent
			contractor and not an employee of DapUp or Business, and nothing herein is intended to, or
			shall be construed to create a partnership, agency, joint venture, employment or similar
			relationship between the parties; (ii) responsible for the payment of all federal, state and
			local taxes on business and payments received from DapUp; (iii) responsible for any reporting
			requirements imposed by the federal, state or local government; and (iv) responsible for
			compliance with all other applicable laws, rules and regulations.`),Rr.forEach(l),On=r(n),Nn=o(n,"BR",{}),Un=r(n),te=o(n,"P",{class:!0});var vr=u(te);Sn=d(vr,"10. CONTENT INFORMATION"),vr.forEach(l),Dn=r(n),Cn=o(n,"BR",{}),Yn=r(n),Ue=o(n,"P",{});var Or=u(Ue);Pn=d(Or,`Athlete should be aware that Content presented to them as part of the Campaign, including but
			not limited to advertisements in the sponsored Content contained in Campaign materials, may be
			protected by intellectual property rights (as defined below) which might be owned by the
			Businesses who provide that Content to DapUp (or by other persons or companies on their
			behalf). Athlete is responsible to verify the accuracy, completeness and applicability of the
			Content for Your authorized use. DapUp will not be responsible for any errors or omissions in
			the Content. “Intellectual property rights” means all intellectual property and proprietary
			rights throughout the FEC/49697.0001/10191431 world, including, without limitation, all
			copyrights, trademarks, trade secrets, patents, moral rights, and other rights protecting
			data, information or intangible property throughout the world. Athlete shall not use the
			Content for any unauthorized purpose and shall not modify, alter, reproduce, rent, lease,
			loan, sell, license, sublicense, distribute, transfer or assign any Content or create
			derivative works based on the Content (either in whole or in part) unless they have been
			specifically authorized to do so by DapUp or by the owners of that Content in a separate
			written agreement. Athlete shall maintain any copyright and trademark notices or marks and
			will not alter or remove any valid notices associated with the Content. Athlete is not granted
			any right or license to the Content except as expressly set forth herein or in a separate
			written agreement. [You understand that by using the Platform, You may be exposed to Content
			that You may find oﬀensive, indecent or objectionable and that, in this respect, You use the
			Platform at Your own risk.] Athlete agrees that Athlete is solely responsible for (and that
			DapUp has no responsibility to them or to any third party for) any Content that You create,
			transmit or display while using the Platform and for the consequences of Your actions
			(including any loss or damage which DapUp or a third party may suﬀer) by doing so. DapUp will
			direct Athlete to take appropriate action to address any copyright infringement that it
			discovers including removal of Content when notified of any such infringement. Athlete will
			immediately implement any such direction from DapUp and will notify DapUp of any copyright
			infringement that it becomes aware of and will take immediate action to address any violation
			of copyright or other violation of proprietary rights of third parties and applicable laws.`),Or.forEach(l),Ln=r(n),Bn=o(n,"BR",{}),Hn=r(n),ee=o(n,"P",{class:!0});var Nr=u(ee);Fn=d(Nr,"11. DISCLOSURE AND ATHLETE REQUIREMENTS"),Nr.forEach(l),Mn=r(n),_n=o(n,"BR",{}),kn=r(n),Se=o(n,"P",{});var Ur=u(Se);Gn=d(Ur,`Every Athlete registering to DapUp, and any Athlete utilizing the Platform for participation
			in a Campaign, is required to provide disclosure in accordance with FTC Disclosure Guidelines.
			Each Athlete shall fully comply with all applicable FTC Guidelines including, but not limited
			to, the FTC Guidelines Concerning the Use of Endorsements and Testimonials in Advertising and
			.com Disclosures How to Make Eﬀective Disclosures in Digital Advertising, including any
			updates, additions, modifications, or supplemental guidance to the foregoing. Any failure of
			Athlete to fully disclose in strict accordance with the FTC Disclosure Guidelines shall
			constitute a material breach of this Agreement and DapUp and Business shall have the right to
			pursue all applicable legal and equitable remedies including termination and recovery of
			damages. Athletes participating in Campaigns that fail to fully comply with all applicable FTC
			Disclosure Guidelines [shall/may] not be permitted to participate in any future Campaigns and
			[will/may] be removed from our Platform.`),Ur.forEach(l),xn=r(n),Wn=o(n,"BR",{}),Vn=r(n),ne=o(n,"P",{class:!0});var Sr=u(ne);qn=d(Sr,"12. CONFIDENTIALITY"),Sr.forEach(l),zn=r(n),jn=o(n,"BR",{}),$n=r(n),De=o(n,"P",{});var Dr=u(De);Xn=d(Dr,`“Confidential Information” means any information disclosed to an Athlete by DapUp, either
			directly or indirectly, in writing, orally or by inspection of tangible objects including,
			without limitation, all Campaign related information, materials, and oﬀer terms. Confidential
			Information shall not, however, include information that You can establish: (i) was publicly
			known and made generally available in the public domain prior to the time of disclosure to You
			by DapUp; (ii) becomes publicly known and made generally available after disclosure to You by
			DapUp other than through Your action or inaction; or (iii) is in Your possession, without
			confidentiality restrictions, prior to the time of disclosure by DapUp as shown by Your files
			and records. Athlete shall not at any time (i) disclose, sell, license, transfer or otherwise
			make available to any person or entity any Confidential Information (except to Your employees
			and agents who have a legitimate need to know such information and are bound in writing by
			confidentiality and non-use restrictions not less protective than those contained herein), or
			(ii) use, reproduce or copy any Confidential Information, except as necessary in connection
			with the purpose for which such Confidential Information is disclosed to You and in accordance
			with this Agreement. Athlete agrees to take all measures to protect the secrecy, and avoid
			disclosure and unauthorized use, of the Confidential Information. Athlete may disclose
			Confidential Information if required by law to disclose the Confidential Information, provided
			that You give DapUp prompt written notice of such requirement prior to such disclosure and
			assistance in obtaining an order protecting the information from public disclosure, and
			provided further that any such disclosure is limited to the minimum extent necessary to comply
			with the legal requirement. All Confidential Information shall remain the property of DapUp
			and all documents, electronic media and other tangible items containing or relating to any
			Confidential Information shall be delivered to DapUp immediately upon DapUp’s request, and
			also, upon termination of the Agreement. Nothing contained in the Agreement will prevent
			DapUp, its parent and/or aﬃliates from complying with privacy laws and regulations, and if
			there is any conflict between this Agreement and the terms of the applicable DapUp Privacy
			Policy (as posted on or linked from the DapUp website), this Agreement shall control. Athlete
			may not issue any press release or other public statement regarding this Agreement, DapUp, its
			parent and/or its aﬃliates without DapUp’s prior written consent.`),Dr.forEach(l),Kn=r(n),Qn=o(n,"BR",{}),Jn=r(n),ae=o(n,"P",{class:!0});var Cr=u(ae);Zn=d(Cr,"13. PLATFORM GUIDELINES"),Cr.forEach(l),ta=r(n),ea=o(n,"BR",{}),na=r(n),Ce=o(n,"P",{});var Yr=u(Ce);aa=d(Yr,`All participants in the Platform or a Campaign shall comply with the following Requirements
			and restrictions. Campaign opportunities will be presented to the Athlete(s) by DapUp through
			the Platform setting forth terms for each Campaign. Athlete(s) shall comply with the terms of
			the Campaign, including, but not limited to, the time frames specified for posting Campaign
			related materials. Athlete(s) shall only post Campaign related materials and Business URL
			links on authorized websites and blogs within Your directly owned or controlled social
			channel. “Athlete Content” means Athlete content generated in the course of a Campaign
			including, without limitation, all creative presentation, social media posts, photographs,
			images, graphics, illustrations, video, original artwork, text, messages, data, information or
			other communications, titles, computer software, music, audio files or other sounds, URLs and
			descriptions, intellectual property, and any other type of content or media that You may
			create, prepare, produce and/or distribute pursuant to your use of the Platform and this
			Agreement. Athlete Content shall not include any material that may be deemed illegal,
			deceptive or oﬀensive by DapUp or the Business. DapUp reserves the right to track all visitors
			who view the Campaign post (each, a “View”). Athlete(s) shall maintain absolute traﬃc
			integrity by not taking any action to manipulate View traﬃc. Specifically, in this regard,
			Athlete(s) shall not generate Views through any automated, deceptive, fraudulent or other
			invalid means. Links and posts must be generated internally and limited to properties owned by
			the Athlete(s) Facilitated or promoted and Campaign related content shall not contain
			plagiarized, defamatory, libelous, slanderous, or unlawful and prohibited content and/or
			activity and shall not contain any content that infringes the intellectual property rights of
			third parties. Pornography or sexually explicit, overly graphic, hate related, violent,
			profanity, obscenity, or other vulgar content shall not be employed in the Platform or a
			Campaign. Misleading descriptions, titles, thumbnails, tags, large amounts of repetitive
			content is not in the spirit of the Platform or a Campaign. Facilitated or promoted and
			Campaign related content and links shall not be misleading, inaccurate, or deceptive, or View
			through to a site that is unrelated to content. There shall be no harassment, threats,
			invasion of privacy, predatory behavior, or stalking.`),Yr.forEach(l),oa=r(n),ia=o(n,"BR",{}),ra=r(n),oe=o(n,"P",{class:!0});var Pr=u(oe);sa=d(Pr,"14. UNAUTHORIZED USE AND REMEDIES"),Pr.forEach(l),la=r(n),ha=o(n,"BR",{}),ca=r(n),Ye=o(n,"P",{});var Lr=u(Ye);pa=d(Lr,`Any attempt to utilize automated programs, bots, screen scraping, database calls, human
			initiated data collection, or to copy, replicate, crawl, spider, index, store, cache or employ
			any other means of gathering data, content or other information for the purpose of obtaining
			unauthorized information from the Business or reverse engineering our Platform for commercial
			gain is strictly prohibited. Any manipulation of View data, impressions or any other relevant
			data or metric reported in the Platform as specified in this Agreement is strictly prohibited.
			DapUp will not be liable or responsible for any such actions. The oﬀending party will be
			immediately removed and banned from the Platform and may be liable to third parties.`),Lr.forEach(l),da=r(n),ua=o(n,"BR",{}),ma=r(n),ie=o(n,"P",{class:!0});var Br=u(ie);fa=d(Br,"15. MODIFICATIONS"),Br.forEach(l),ga=r(n),ya=o(n,"BR",{}),Aa=r(n),Pe=o(n,"P",{});var Hr=u(Pe);Ea=d(Hr,`DapUp reserves the right, at any time, to modify, update or revise this Agreement, without
			prior notice to You, by making those modifications available on the Platform or by providing
			notice to You as specified in this Agreement. Modifications will be eﬀective immediately upon
			posting on the DapUp website and will apply automatically to any new Services or to any
			modification of Services. The most recent version of these Terms of Use will always be
			available on the DapUp website. Continued use of the Platform or any part thereof on the part
			of the User after the entry into eﬀect of new Terms of Use will signify the User´s acceptance
			of the same.`),Hr.forEach(l),ba=r(n),Ta=o(n,"BR",{}),Ia=r(n),re=o(n,"P",{class:!0});var Fr=u(re);wa=d(Fr,"16. REPRESENTATIONS AND WARRANTIES"),Fr.forEach(l),Ra=r(n),va=o(n,"BR",{}),Oa=r(n),Le=o(n,"P",{});var Mr=u(Le);Na=d(Mr,`Athletes participating in the Platform each represent, warrant and covenant to DapUp and
			Business that (i) You have the full right, power and authority to enter into and fully perform
			Your obligations under this Agreement in accordance with its terms; (ii) Your use of DapUp’s
			Platform is solely for lawful commercial and business purposes; (iii) You have the necessary
			rights to the Athlete Content including, without limitation, authorizations, waivers and
			releases necessary to provide, distribute and publish all Athlete Content (including, without
			limitation, all creative presentation, social media posts, photographs, images, video,
			original artwork, text, messages, data, information or other communications, titles, computer
			software, music, audio files or other sounds, URLs and descriptions, intellectual property,
			and any other type of content or media that You may create, prepare, produce and/or distribute
			pursuant to your use of the Platform and this Agreement) pursuant to a Campaign and this
			Agreement; and (iv) all such Athlete Content: (a) does not violate any law, statute,
			ordinance, treaty or regulation, including, but not limited to, the Federal Trade Commission
			Act and all rules and regulations promulgated thereunder and FTC Guidelines, DapUp policy or
			Guideline; (b) does not infringe any copyright, patent, trademark, trade secret or other
			intellectual property right of any third party; (c) does not breach any duty toward or rights
			of any person or entity including rights of publicity or privacy, and have not otherwise
			resulted in or are not likely to result in any consumer fraud, product liability, tort, breach
			of contract, injury, damage or harm of any kind to any person or entity; (d) are not false,
			deceptive or misleading; (e) does not contain any profanity, scandalous, libelous, defamatory,
			slanderous, threatening, obscene, pornographic or unlawful matter or material; (f) will be
			free of viruses, malware, Trojan horses, trap doors, back doors, Easter eggs, worms, time
			bombs, cancelbots or other computer programming routines that may potentially damage,
			interfere with, intercept, or expropriate any system data or personal information; and (g)
			will comply with the applicable Campaign and the Requirements,; and (i) You will not engage or
			cause others to engage in any form of spamming or improper or malicious, as determined by
			DapUp, Viewing, impression or marketing activities through the Platform, and You will comply
			with all applicable laws including complying with all applicable laws such as the CAN-SPAM Act
			of 2003.`),Mr.forEach(l),Ua=r(n),Sa=o(n,"BR",{}),Da=r(n),se=o(n,"P",{class:!0});var _r=u(se);Ca=d(_r,"17. COPYRIGHT, TRADEMARKS AND PROPRIETARY RIGHTS"),_r.forEach(l),Ya=r(n),Pa=o(n,"BR",{}),La=r(n),C=o(n,"P",{});var P=u(C);Ba=d(P,`You acknowledge and agree that DapUp (or DapUp´s licensors) own all legal rights, title and
			interest in and to the Platform and the Content as applicable, including any intellectual
			property rights. You further acknowledge that the Platform may contain information which is
			designated confidential by DapUp and that You shall not disclose such information without
			DapUp´s prior written consent. DapUp retains all intellectual property rights in and to the
			any additions, improvements, updates and modifications to the Platform. You receive no
			ownership interest in or to the Platform or Content and You are not granted any right or
			license to use the Platform or Content, apart from Your right to access the Platform and
			Content in compliance with this Agreement. Notwithstanding anything in the Privacy Policy or
			these Terms of Use to the contrary, DapUp shall have the right to collect, extract, compile,
			process and analyze non- personally identifiable data or information that is generated and
			processed in connection with the Service. The Platform or Content may contain links to
			third-party sites that are not under the control of DapUp. DapUp is not responsible for any
			content (or associated intellectual property rights) on any linked site and You access any
			third- party site from the Platform at Your own risk. Except as expressly authorized pursuant
			to a Campaign or as agreed to by DapUp in a separate written agreement, nothing in this
			Agreement gives You a right to use any of DapUp´s or its Business’s trade names, trademarks,
			service marks, logos, domain names, and other distinctive brand features. If You have been
			given an explicit right to use any of these brand features in a separate written agreement
			with DapUp, then You agree that Your use of such features shall be in compliance with that
			agreement. Unless You have been expressly authorized to do so in writing by DapUp, You agree
			that You will not use any trademark, service mark, trade name, logo of any company or
			organization in a way that is likely or intended to cause confusion about the owner or
			authorized user of such marks, names or logos. If DapUp makes any Business names, logos,
			trademarks, product images or other Business materials (“Business Materials”) available for
			Your use in connection with a Campaign, then subject to the terms and conditions provided to
			Athlete by DapUp or Business, Business grants Athlete a non- exclusive, revocable,
			non-transferable right to use the Business Materials only pursuant to those terms and
			conditions and this FEC/49697.0001/10191431 Agreement and only for purposes of the Campaign.
			Athlete understands that as to the Business Materials Athlete may not use them in a manner
			that suggests any endorsement of Athlete or Athlete’s website/blog/social media sites or other
			sites or services. Athlete understands that the license to the Business Materials will
			automatically terminate if Athlete exceeds the scope of the license or violates any of the
			terms and conditions hereunder, and that Athlete will then be subject to copyright
			infringement and potentially other liability. If any Business Materials are provided to
			Athlete with any disclosure or confidentiality obligations (e.g., no mention until a certain
			date), Athlete will strictly comply with such obligations. All Athlete Content will belong
			exclusively to DapUp. Athlete hereby acknowledges and agrees that DapUp shall be the sole
			owner of all right title and interest in and to any and all Athlete Content and all
			intellectual property rights therein or related thereto. Athlete hereby grants, assigns, and
			transfers to DapUp all present and future worldwide right, title and interest in and to the
			Athlete Content created, prepared, produced and/or distributed pursuant to a Campaign and this
			Agreement, and all intellectual property rights, except that Athlete retains a limited license
			to display such Athlete Content on Athlete’s blog, social media accounts, in portfolios, and
			other self-promotion channels. As to any portion of the Athlete Content created after the
			execution of this Agreement, the assignment shall become eﬀective immediately upon creation
			thereof, without need for further consideration or written agreement among the parties.
			Athlete waives any and all moral rights in any Athlete Content in perpetuity. By way of
			example and not limitation, DapUp shall have the right to publish, repurpose, create
			derivative works of and further use the Athlete Content for any purpose without any further
			assignment, license or authorization and shall have the right to license and sublicense the
			Athlete Content at its discretion. Further, Athlete hereby grants to DapUp the nonexclusive,
			worldwide, sublicensable, fully paid-up, royalty free right and license to use, reproduce,
			modify, copy, publish, display and distribute Athlete’s name, nickname, username, likeness,
			image and photo in connection with the Athlete Content, in whole or in part, edited or
			otherwise modified, alone or with other materials, for the purpose of promoting DapUp,
			Business and/or the Campaign. Athlete is prohibited from modifying, removing, suppressing, or
			in any other way making inconspicuous the copyright, digital fingerprints, watermarks,
			identification labels, legal notices contained within the Content or other technical
			protection devices or data identifying DapUp or its licensors rights in the Content, its files
			or its components. If You believe that Your work has been used in a way that constitutes
			copyright infringement, or Your intellectual property rights have been otherwise infringed,
			please notify DapUp at info@dapup.co. We will review all claims of copyright infringement
			received and remove the Content deemed to have been posted or distributed in breach of any
			applicable laws. To make a claim, please provide us with the following:`),Ha=o(P,"BR",{}),Fa=o(P,"BR",{}),Ma=d(P,`
			1. A description of the copyrighted work that You claim has been infringed;`),_a=o(P,"BR",{}),ka=d(P,`

			2. Information suﬃcient to enable DapUp to locate the allegedly infringing Content on the
			Service;`),Ga=o(P,"BR",{}),xa=d(P,`

			3. Your address, telephone number and email address;`),Wa=o(P,"BR",{}),Va=d(P,`

			4. A statement by You that You have a good faith belief that the use of the Content is not
			authorized;`),qa=o(P,"BR",{}),za=d(P,`
			5. A statement by You that the above information in Your notification is accurate and that You
			are the copyright owner or authorized to act on the copyright owner's behalf; and`),ja=o(P,"BR",{}),$a=d(P,`
			6. A signature of the person authorized to act on behalf of the owner of the copyright interest.`),Xa=o(P,"BR",{}),Ka=d(P,`

			Upon receipt of notice as described above, DapUp will take whatever action, in its sole
			discretion, it deems appropriate, including removal of the challenged use or termination of
			the posting account.`),P.forEach(l),Qa=r(n),Ja=o(n,"BR",{}),Za=r(n),le=o(n,"P",{class:!0});var kr=u(le);to=d(kr,"18. INDEMNIFICATION"),kr.forEach(l),eo=r(n),no=o(n,"BR",{}),ao=r(n),Be=o(n,"P",{});var Gr=u(Be);oo=d(Gr,`Athletes participating in the Platform (“Indemnitors”) each agree to indemnify and hold
			harmless DapUp and Business, and their parent and aﬃliates and their oﬃcers, directors,
			licensors, partners, licensees, consultants, contractors, agents, attorneys, employees (each,
			a “Indemnified Entity” and collectively, the “Indemnified Entities”) and third party service
			providers from any and all claims, liabilities, costs and expenses, including reasonable
			attorneys’ fees (collectively, “Claim(s)”), that arise from: (i) Your use or misuse of the
			Platform; (ii) Athlete Content or social postings; (iii) Your website; (v) performance of a
			Campaign due to Your conduct or actions; and (vi) Your breach of this Agreement, including but
			not limited to applicable representations and warranties, and any separate Agreement the
			parties execute. You agree to be solely responsible for defending any Claim against or suﬀered
			by DapUp and/or any Indemnified Entity, subject to DapUp and/or the Indemnified Entity’s right
			to participate with counsel of its own choosing, and for payment of damages or losses
			resulting from all claims against DapUp, and/or any Indemnified Entities provided that You
			will not agree to any settlement that imposes any obligation or liability on DapUp and/or an
			Indemnified Entities without DapUp’s or Indemnified Entity’s prior express written consent. If
			You are accepting or agreeing to this Agreement on behalf of a company or other entity, You
			and such entity shall be jointly and severally liable for all of Indemnitors promises and
			obligations pursuant to this this Section [18].`),Gr.forEach(l),io=r(n),ro=o(n,"BR",{}),so=r(n),he=o(n,"P",{class:!0});var xr=u(he);lo=d(xr,"19. INTERNATIONAL USE"),xr.forEach(l),ho=r(n),co=o(n,"BR",{}),po=r(n),He=o(n,"P",{});var Wr=u(He);uo=d(Wr,`As a consequence of the global nature of the Internet, You agree to comply with all local
			rules and laws applicable to You in respect of Your conduct on the Internet and acceptable
			content. Specifically, You agree to comply with all applicable laws regarding use, processing
			and storage of personal data, obscene and indecent content and communications and those
			regarding the transmission of technical data exported from the United States or the country
			from which You access the Platform.`),Wr.forEach(l),mo=r(n),fo=o(n,"BR",{}),go=r(n),ce=o(n,"P",{class:!0});var Vr=u(ce);yo=d(Vr,"20. WARRANTY DISCLAIMER"),Vr.forEach(l),Ao=r(n),Eo=o(n,"BR",{}),bo=r(n),Fe=o(n,"P",{});var qr=u(Fe);To=d(qr,`ATHLETE EXPRESSLY AGREES THAT THE SERVICES ARE AVAILABLE ON AN “AS IS“ BASIS, WITHOUT WARRANTY
			OF ANY KIND, EXPRESS OR IMPLIED, AND THAT YOUR USE THEREOF IS AT YOUR OWN RISK. WITHOUT
			LIMITING THE GENERALITY OF THE FOREGOING, DAPUP DISCLAIMS TO THE MAXIMUM EXTENT PERMITTED BY
			LAW ANY AND ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, ANY (I)
			WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, (II) WARRANTIES AGAINST
			INFRINGEMENT OF ANY THIRD PARTY INTELLECTUAL PROPERTY OR PROPRIETARY RIGHTS, (III) WARRANTIES
			RELATING TO DELAYS, INTERRUPTIONS, ERRORS, OR OMISSIONS IN THE SERVICE OR DAPUP WEBSITE, OR
			ANY THIRD PARTY THEREOF, (IV) WARRANTIES RELATING TO THE FEC/49697.0001/10191431 TRANSMISSION
			OR DELIVERY OF THE SERVICE OR THE DAPUP WEBSITE, (V) WARRANTIES RELATING TO THE ACCURACY OR
			CORRECTNESS OF DATA, AND ANY OTHER WARRANTIES OTHERWISE RELATING TO PERFORMANCE,
			NONPERFORMANCE OR OTHER ACTS OR OMISSIONS BY DAPUP. FURTHER, AND WITHOUT LIMITING THE
			GENERALITY OF ANY OF THE FOREGOING, THERE IS NO WARRANTY THAT THE PLATFORM OR THE DAPUP
			WEBSITE WILL MEET YOUR NEEDS OR REQUIREMENTS OR THE NEEDS OR REQUIREMENTS OF ANY OTHER PERSON.
			IN ADDITION, YOU ACKNOWLEDGE AND AGREE THAT DAPUP´S WARRANTY DOES NOT COVER TELECOMMUNICATIONS
			OR INTERNET OUTAGES CAUSED BY THIRD PARTIES OR OTHERWISE OUTSIDE OF DAPUP'S CONTROL.
			BECAUSE SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN CATEGORIES OF DAMAGES
			OR IMPLIED WARRANTIES, THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU. IN SUCH JURISDICTIONS,
			DAPUP´S LIABILITY IS LIMITED TO THE GREATEST EXTENT PERMITTED BY LAW.`),qr.forEach(l),Io=r(n),wo=o(n,"BR",{}),Ro=r(n),pe=o(n,"P",{class:!0});var zr=u(pe);vo=d(zr,"21. LIMITATION OF LIABILITY"),zr.forEach(l),Oo=r(n),No=o(n,"BR",{}),Uo=r(n),Me=o(n,"P",{});var jr=u(Me);So=d(jr,`DAPUP SHALL NOT BE LIABLE TO ATHLETE FOR DAMAGES OF ANY KIND ARISING OUT OF ATHLETE’S USE OF
			THE PLATFORM. IN NO EVENT SHALL DAPUP OR ANY DAPUP ENTITY BE LIABLE FOR ANY INDIRECT, SPECIAL,
			INCIDENTAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, ARISING OUT OF, OR IN CONNECTION
			WITH YOUR USE OF THE PLATFORM OR PARTICIPATION IN A CAMPAIGN INCLUDING, WITHOUT LIMITATION,
			ANY: (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II) LOST BUSINESS, LOST REVENUES, OR
			LOSS OF ANTICIPATED PROFITS OR ANY OTHER PECUNIARY OR NON-PECUNIARY LOSS OR DAMAGES, (III) ANY
			UNAUTHORIZED ACCESS TO OR USE OF PERSONAL INFORMATION, (IV) INTERRUPTION OR FAILURE OF THE
			SERVICE, (V) ANY BUGS, VIRUSES, EASTER EGGS, TROJAN HORSES OR OTHER FORMS OF MALWARE
			INTRODUCED TO THE SERVICE BY A THIRD PARTY. DAPUP SHALL NOT BE LIABLE FOR ANY OFFENSIVE,
			DEFAMATORY, OR ILLEGAL CONDUCT OR CONTENT OF ANY THIRD PARTY AND ANY USER’S OR ATHLETE’S SOLE
			REMEDY IS TO DISCONTINUE USING THE PLATFORM OR PARTICIPATION IN ANY CAMPAIGN. ATHLETE AGREES
			THAT IT WILL NOT HOLD DAPUP RESPONSIBLE FOR THE SELECTION OR RETENTION OF, OR ANY ACTS,
			ERRORS, OR OMISSIONS BY, ANY THIRD PARTY IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITH
			RESPECT TO VIEWS BY ANY THIRD PARTY ON ATHLETE’S POSTING(S) OF CAMPAIGNS AND ATHLETE CONTENT,
			REGARDLESS OF THE INTENT OF SUCH THIRD PARTY. THE FOREGOING LIMITATIONS APPLY REGARDLESS OF
			THE LEGAL THEORY UPON WHICH ANY CLAIM FOR SUCH DAMAGES IS BASED, WHETHER THE PARTIES HAD BEEN
			ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND WHETHER SUCH DAMAGES WERE REASONABLY
			FORESEEABLE. IN NO EVENT SHALL THE AGGREGATE LIABILITY OF DAPUP ARISING OUT OF OR RELATED TO
			THIS AGREEMENT EXCEED THE TOTAL FEES PAID BY DAPUP TO ATHLETE IN THE MONTH PRIOR TO THE MONTH
			IN WHICH THE CLAIM AROSE. YOU ACKNOWLEDGE AND AGREE THAT (A) THE REMEDIES, EXCLUSIONS,
			LIMITATIONS OF LIABILITY, AND LIMITATION OF DAMAGES HEREIN, REFLECT A REASONABLE ALLOCATION OF
			RISKS; (B) THAT DAPUP WOULD NOT ENTER INTO THIS AGREEMENT WITHOUT THESE EXCLUSIONS,
			LIMITATIONS OF LIABILITY, AND ALL OTHER TERMS IN THIS AGREEMENT. ATHLETE ACKNOWLEDGES THAT THE
			TERMS CONTAINED IN THIS AGREEMENT ARE A FAIR ALLOCATION OF RISKS FEC/49697.0001/10191431
			BETWEEN ATHLETE AND DAPUP. BECAUSE SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION
			OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, DAPUP´S LIABILITY IN SUCH JURISDICTIONS SHALL BE
			LIMITED TO THE FULLEST EXTENT PERMITTED BY LAW.`),jr.forEach(l),Do=r(n),Co=o(n,"BR",{}),Yo=r(n),de=o(n,"P",{class:!0});var $r=u(de);Po=d($r,"22. NOTICES"),$r.forEach(l),Lo=r(n),Bo=o(n,"BR",{}),Ho=r(n),_e=o(n,"P",{});var Xr=u(_e);Fo=d(Xr,`Except for copyright infringement notices as set forth in Section [17]: Copyright, Trademarks,
			and Proprietary Rights above, any notice from User to DapUp must be addressed to
			info@dapup.co. There may be other information regarding the Platform and DapUp’s services that
			the law requires us to send to the User. User consents to DapUp´s sending this information in
			electronic form to the email address provided in the User profile on the DapUp website. Email
			shall be the fully authorized formal and standard means of communication of notices and
			messages and shall be considered delivered at the close of business of the day that the email
			communication was transmitted. DapUp will send notices via email or regular mail [or display
			links to notices on the DapUp website and the Platform. You must read these notices regularly
			as these notices will apply and You will be responsible for immediate compliance. Please
			ensure Your email address is valid and up to date to receive such information. We may also
			provide required information to the User access to www.DapUp.com or another website designated
			in an email notice or generally designated in advance for this purpose. Notices provided to
			You via email will be deemed given and received on the transmission date.`),Xr.forEach(l),Mo=r(n),_o=o(n,"BR",{}),ko=r(n),ue=o(n,"P",{class:!0});var Kr=u(ue);Go=d(Kr,"23. GOVERNING LAW; JURISDICTION AND VENUE"),Kr.forEach(l),xo=r(n),Wo=o(n,"BR",{}),Vo=r(n),ke=o(n,"P",{});var Qr=u(ke);qo=d(Qr,`This Agreement shall be governed by the laws of the State of Arkansas, without regard to
			conflicts of laws principles. Each party agrees that all disputes arising under this Agreement
			shall be brought in the Superior Court of the State of Arkansas in Washington County or the
			Federal District Court of Arkansas, Western District. Each party irrevocably consents to such
			jurisdiction and irrevocably waives any objection such party may have as to the venue of any
			such proceeding brought in such court as an inconvenient forum.`),Qr.forEach(l),zo=r(n),jo=o(n,"BR",{}),$o=r(n),me=o(n,"P",{class:!0});var Jr=u(me);Xo=d(Jr,"24. ELECTRONIC SIGNATURES EFFECTIVE"),Jr.forEach(l),Ko=r(n),Qo=o(n,"BR",{}),Jo=r(n),Ge=o(n,"P",{});var Zr=u(Ge);Zo=d(Zr,`This Agreement is an electronic contract that sets out the legally binding terms of Your use
			of the DapUp Platform. You indicate Your acceptance of this Agreement, and all of the terms
			and conditions contained or referenced herein, pursuant to Section 2 (Acceptance of This
			Agreement) of this Agreement and thereby also consent to have this Agreement provided to you
			in electronic form. Please print and save a copy of this Agreement for Your records.`),Zr.forEach(l),ti=r(n),fe=o(n,"P",{class:!0});var ts=u(fe);ei=d(ts,"25. TERMINATION"),ts.forEach(l),ni=r(n),ai=o(n,"BR",{}),oi=r(n),xe=o(n,"P",{});var es=u(xe);ii=d(es,`This Agreement will continue to apply until terminated by either You or DapUp. This Agreement
			may be terminated by either party at any time, in that party’s sole discretion by providing
			notice as specified herein. Termination will be effective upon receipt by the non-terminating
			party. Upon termination of this Agreement for any reason: (1) all rights granted to You in
			relation to the Platform and under this Agreement will terminate FEC/49697.0001/10191431 and
			You will immediately return and cease using or accessing all Campaign materials; (2) You will
			immediately cease all use of and access to the Platform and all Content. Upon termination of
			this Agreement, any provision which, by its nature or express terms should survive, will
			survive such termination or expiration, including but not limited to Sections 3, 5, 6, 8, 10
			through 15, and 16 through 28.`),es.forEach(l),ri=r(n),si=o(n,"BR",{}),li=r(n),ge=o(n,"P",{class:!0});var ns=u(ge);hi=d(ns,"26. CEASING OF PERFORMANCE OF SERVICES"),ns.forEach(l),ci=r(n),pi=o(n,"BR",{}),di=r(n),We=o(n,"P",{});var as=u(We);ui=d(as,`Athlete will immediately cease performing the Services, and/or return all work created in
			connection with my Services, upon notice by DapUp or Business.`),as.forEach(l),mi=r(n),fi=o(n,"BR",{}),gi=r(n),ye=o(n,"P",{class:!0});var os=u(ye);yi=d(os,"27. ASSIGNMENT; THIRD-PARTY BENEFICIARY"),os.forEach(l),Ai=r(n),Ei=o(n,"BR",{}),bi=r(n),Ve=o(n,"P",{});var is=u(Ve);Ti=d(is,`DapUp will have the right to assign this Agreement and rights and delegate its duties in
			connection with a merger, reorganization, or sale of substantially all of its assets. This
			Agreement will bind successors and permitted assigns. User shall not assign these this
			Agreement or assign any rights or delegate any obligations hereunder, in whole or in part,
			whether voluntarily or by operation of law, without DapUp’s prior written consent. Any such
			purported assignment or delegation without consent will be null and void and of no force or
			effect. You acknowledge and agree that (i) Business is a third-party beneficiary to this
			Agreement and is entitled to the rights and benefits hereunder and may enforce the provisions
			hereof as if it were a party hereto and (ii) Business has no liability or obligations to you
			under this Agreement.`),is.forEach(l),Ii=r(n),wi=o(n,"BR",{}),Ri=r(n),Ae=o(n,"P",{class:!0});var rs=u(Ae);vi=d(rs,"28. MISCELLANEOUS"),rs.forEach(l),Oi=r(n),Ni=o(n,"BR",{}),Ui=r(n),qe=o(n,"P",{});var ss=u(qe);Si=d(ss,`User understands and agrees that this Agreement and any notices given pursuant to this
			Agreement are enforceable in electronic format. The specific set of Terms of Use relating to
			each User’s contract for the Services will not be stored individually. This Agreement
			constitutes the complete agreement between DapUp and the User and supersedes any prior oral or
			written agreement or understanding relating thereto between the User and DapUp. Should any
			part of this Agreement be or be found to be invalid, illegal or unenforceable, this shall in
			no way affect the validity of the remaining parts. DapUp´s failure to act or enforce any
			provision in respect to this Agreement or a breach thereof it shall not constitute a waiver of
			such provision.`),ss.forEach(l),Di=r(n),Ci=o(n,"BR",{}),Yi=r(n),ze=o(n,"P",{});var ls=u(ze);Pi=d(ls,"Any questions?"),ls.forEach(l),Li=r(n),Bi=o(n,"BR",{}),Hi=r(n),je=o(n,"P",{});var hs=u(je);Fi=d(hs,"If You have questions, queries or suggestions, please contact us at:"),hs.forEach(l),Mi=r(n),_i=o(n,"BR",{}),ki=r(n),$e=o(n,"P",{});var cs=u($e);Gi=d(cs,"DapUp, LLC"),cs.forEach(l),xi=r(n),Wi=o(n,"BR",{}),Vi=r(n),Xe=o(n,"P",{});var ps=u(Xe);qi=d(ps,"Email: info@dapup.co"),ps.forEach(l),zi=r(n),ji=o(n,"BR",{}),n.forEach(l),this.h()},h(){m(c,"class","text-2xl font-bold"),m(h,"class","ml-auto text-2xl text-red-500 fond-extrabold"),m(s,"class","flex flex-row w-full justify-between"),m(O,"class","text-xl"),m(J,"class","text-lg font-extrabold"),m(Z,"class","text-lg font-extrabold"),m(B,"class","text-lg font-extrabold"),m(nt,"class","text-lg font-extrabold"),m(ft,"class","text-lg font-extrabold"),m($,"class","text-lg font-extrabold"),m(Qt,"class","text-lg font-extrabold"),m(Jt,"class","text-lg font-extrabold"),m(Zt,"class","text-lg font-extrabold"),m(te,"class","text-lg font-extrabold"),m(ee,"class","text-lg font-extrabold"),m(ne,"class","text-lg font-extrabold"),m(ae,"class","text-lg font-extrabold"),m(oe,"class","text-lg font-extrabold"),m(ie,"class","text-lg font-extrabold"),m(re,"class","text-lg font-extrabold"),m(se,"class","text-lg font-extrabold"),m(le,"class","text-lg font-extrabold"),m(he,"class","text-lg font-extrabold"),m(ce,"class","text-lg font-extrabold"),m(pe,"class","text-lg font-extrabold"),m(de,"class","text-lg font-extrabold"),m(ue,"class","text-lg font-extrabold"),m(me,"class","text-lg font-extrabold"),m(fe,"class","text-lg font-extrabold"),m(ge,"class","text-lg font-extrabold"),m(ye,"class","text-lg font-extrabold"),m(Ae,"class","text-lg font-extrabold"),m(e,"class","centerAll border border-green-500 w-[90%] overflow-y-scroll sm:w-[80%] h-[60vh] rounded-xl bg-white z-10 p-10 svelte-1i575gh")},m(Ke,n){H(Ke,e,n),t(e,s),t(s,c),t(c,y),t(s,g),t(s,h),t(h,f),t(e,E),t(e,b),t(e,v),t(e,U),t(e,O),t(O,T),t(e,w),t(e,Y),t(e,X),t(e,yt),t(e,J),t(J,F),t(e,it),t(e,At),t(e,Et),t(e,M),t(M,bt),t(e,Tt),t(e,It),t(e,_),t(e,wt),t(e,Z),t(Z,Rt),t(e,K),t(e,vt),t(e,Ot),t(e,k),t(k,L),t(L,Nt),t(k,Ut),t(k,G),t(G,St),t(k,Dt),t(k,rt),t(rt,x),t(e,st),t(e,Ct),t(e,Yt),t(e,W),t(W,Pt),t(e,Lt),t(e,tt),t(e,Bt),t(e,Ht),t(e,B),t(B,Ft),t(e,Mt),t(e,V),t(e,q),t(e,lt),t(lt,_t),t(e,z),t(e,kt),t(e,et),t(e,nt),t(nt,mt),t(e,at),t(e,Gt),t(e,Q),t(e,ht),t(ht,xt),t(e,S),t(e,Re),t(e,Wt),t(e,ft),t(ft,Vt),t(e,D),t(e,qt),t(e,R),t(e,N),t(N,j),t(e,I),t(e,ct),t(e,pt),t(e,$),t($,dt),t(e,zt),t(e,jt),t(e,$t),t(e,ot),t(ot,Xt),t(e,Kt),t(e,nn),t(e,an),t(e,Qt),t(Qt,on),t(e,rn),t(e,sn),t(e,ln),t(e,ve),t(ve,hn),t(e,cn),t(e,pn),t(e,dn),t(e,Jt),t(Jt,un),t(e,mn),t(e,fn),t(e,gn),t(e,Oe),t(Oe,yn),t(e,An),t(e,En),t(e,bn),t(e,Zt),t(Zt,Tn),t(e,In),t(e,wn),t(e,Rn),t(e,Ne),t(Ne,vn),t(e,On),t(e,Nn),t(e,Un),t(e,te),t(te,Sn),t(e,Dn),t(e,Cn),t(e,Yn),t(e,Ue),t(Ue,Pn),t(e,Ln),t(e,Bn),t(e,Hn),t(e,ee),t(ee,Fn),t(e,Mn),t(e,_n),t(e,kn),t(e,Se),t(Se,Gn),t(e,xn),t(e,Wn),t(e,Vn),t(e,ne),t(ne,qn),t(e,zn),t(e,jn),t(e,$n),t(e,De),t(De,Xn),t(e,Kn),t(e,Qn),t(e,Jn),t(e,ae),t(ae,Zn),t(e,ta),t(e,ea),t(e,na),t(e,Ce),t(Ce,aa),t(e,oa),t(e,ia),t(e,ra),t(e,oe),t(oe,sa),t(e,la),t(e,ha),t(e,ca),t(e,Ye),t(Ye,pa),t(e,da),t(e,ua),t(e,ma),t(e,ie),t(ie,fa),t(e,ga),t(e,ya),t(e,Aa),t(e,Pe),t(Pe,Ea),t(e,ba),t(e,Ta),t(e,Ia),t(e,re),t(re,wa),t(e,Ra),t(e,va),t(e,Oa),t(e,Le),t(Le,Na),t(e,Ua),t(e,Sa),t(e,Da),t(e,se),t(se,Ca),t(e,Ya),t(e,Pa),t(e,La),t(e,C),t(C,Ba),t(C,Ha),t(C,Fa),t(C,Ma),t(C,_a),t(C,ka),t(C,Ga),t(C,xa),t(C,Wa),t(C,Va),t(C,qa),t(C,za),t(C,ja),t(C,$a),t(C,Xa),t(C,Ka),t(e,Qa),t(e,Ja),t(e,Za),t(e,le),t(le,to),t(e,eo),t(e,no),t(e,ao),t(e,Be),t(Be,oo),t(e,io),t(e,ro),t(e,so),t(e,he),t(he,lo),t(e,ho),t(e,co),t(e,po),t(e,He),t(He,uo),t(e,mo),t(e,fo),t(e,go),t(e,ce),t(ce,yo),t(e,Ao),t(e,Eo),t(e,bo),t(e,Fe),t(Fe,To),t(e,Io),t(e,wo),t(e,Ro),t(e,pe),t(pe,vo),t(e,Oo),t(e,No),t(e,Uo),t(e,Me),t(Me,So),t(e,Do),t(e,Co),t(e,Yo),t(e,de),t(de,Po),t(e,Lo),t(e,Bo),t(e,Ho),t(e,_e),t(_e,Fo),t(e,Mo),t(e,_o),t(e,ko),t(e,ue),t(ue,Go),t(e,xo),t(e,Wo),t(e,Vo),t(e,ke),t(ke,qo),t(e,zo),t(e,jo),t(e,$o),t(e,me),t(me,Xo),t(e,Ko),t(e,Qo),t(e,Jo),t(e,Ge),t(Ge,Zo),t(e,ti),t(e,fe),t(fe,ei),t(e,ni),t(e,ai),t(e,oi),t(e,xe),t(xe,ii),t(e,ri),t(e,si),t(e,li),t(e,ge),t(ge,hi),t(e,ci),t(e,pi),t(e,di),t(e,We),t(We,ui),t(e,mi),t(e,fi),t(e,gi),t(e,ye),t(ye,yi),t(e,Ai),t(e,Ei),t(e,bi),t(e,Ve),t(Ve,Ti),t(e,Ii),t(e,wi),t(e,Ri),t(e,Ae),t(Ae,vi),t(e,Oi),t(e,Ni),t(e,Ui),t(e,qe),t(qe,Si),t(e,Di),t(e,Ci),t(e,Yi),t(e,ze),t(ze,Pi),t(e,Li),t(e,Bi),t(e,Hi),t(e,je),t(je,Fi),t(e,Mi),t(e,_i),t(e,ki),t(e,$e),t($e,Gi),t(e,xi),t(e,Wi),t(e,Vi),t(e,Xe),t(Xe,qi),t(e,zi),t(e,ji),$i||(tr=Zi(h,"click",A[4]),$i=!0)},p:en,d(Ke){Ke&&l(e),$i=!1,tr()}}}function As(A){let e,s=A[0].message+"",c;return{c(){e=a("p"),c=p(s),this.h()},l(y){e=o(y,"P",{class:!0});var g=u(e);c=d(g,s),g.forEach(l),this.h()},h(){m(e,"class","error svelte-1i575gh")},m(y,g){H(y,e,g),t(e,c)},p(y,g){g&1&&s!==(s=y[0].message+"")&&Ji(c,s)},d(y){y&&l(e)}}}function _s(A){var qt;let e,s,c,y,g,h,f,E,b,v,U,O,T,w,Y,X,yt,J,F,it,At,Et,M,bt,Tt,It,_,wt,Z,Rt,K,vt,Ot,k,L,Nt,Ut,G,St,Dt,rt,x,st,Ct,Yt,W,Pt,Lt,tt,Bt,Ht,B,Ft,Mt,V,q,lt,_t,z,kt,et,nt,mt,at,Gt,Q,ht,xt,S=A[2]&&ys(A);function Re(R){A[5](R)}let Wt={};A[3]!==void 0&&(Wt.sportPref=A[3]),_=new Bs({props:Wt}),Je.push(()=>Ze(_,"sportPref",Re));function ft(R){A[6](R)}let Vt={inputName:"gender-preference",options:["Male","Female"],flexDirection:"row"};A[1]!==void 0&&(Vt.selected=A[1]),L=new Ms({props:Vt}),Je.push(()=>Ze(L,"selected",ft));let D=((qt=A[0])==null?void 0:qt.message)&&As(A);return{c(){S&&S.c(),e=i(),s=a("div"),c=a("h1"),y=p("Create an athlete account"),g=i(),h=a("form"),f=a("label"),E=p("Full Name"),b=a("br"),v=i(),U=a("input"),T=a("br"),w=i(),Y=a("label"),X=p("University"),yt=a("br"),J=i(),F=a("input"),At=a("br"),Et=i(),M=a("label"),bt=p("Sport"),Tt=a("br"),It=i(),be(_.$$.fragment),Z=a("br"),Rt=i(),K=a("label"),vt=p("Gender"),Ot=a("br"),k=i(),be(L.$$.fragment),Ut=i(),G=a("label"),St=p("Email"),Dt=a("br"),rt=i(),x=a("input"),Ct=a("br"),Yt=i(),W=a("label"),Pt=p("Password"),Lt=i(),tt=a("p"),Bt=p("Password should be at least 8 characters long"),Ht=i(),B=a("input"),Ft=a("br"),Mt=i(),V=a("div"),q=a("label"),lt=p("Agree to our terms of service"),_t=i(),z=a("input"),kt=i(),et=a("input"),nt=i(),D&&D.c(),mt=i(),at=a("a"),Gt=p("Sign in"),this.h()},l(R){S&&S.l(R),e=r(R),s=o(R,"DIV",{class:!0});var N=u(s);c=o(N,"H1",{class:!0});var j=u(c);y=d(j,"Create an athlete account"),j.forEach(l),g=r(N),h=o(N,"FORM",{method:!0,class:!0});var I=u(h);f=o(I,"LABEL",{for:!0,class:!0});var ct=u(f);E=d(ct,"Full Name"),ct.forEach(l),b=o(I,"BR",{}),v=r(I),U=o(I,"INPUT",{class:!0,id:!0,name:!0}),T=o(I,"BR",{}),w=r(I),Y=o(I,"LABEL",{for:!0,class:!0});var pt=u(Y);X=d(pt,"University"),pt.forEach(l),yt=o(I,"BR",{}),J=r(I),F=o(I,"INPUT",{class:!0,id:!0,name:!0}),At=o(I,"BR",{}),Et=r(I),M=o(I,"LABEL",{for:!0,class:!0});var $=u(M);bt=d($,"Sport"),$.forEach(l),Tt=o(I,"BR",{}),It=r(I),Te(_.$$.fragment,I),Z=o(I,"BR",{}),Rt=r(I),K=o(I,"LABEL",{for:!0,class:!0});var dt=u(K);vt=d(dt,"Gender"),dt.forEach(l),Ot=o(I,"BR",{}),k=r(I),Te(L.$$.fragment,I),Ut=r(I),G=o(I,"LABEL",{for:!0,class:!0});var zt=u(G);St=d(zt,"Email"),zt.forEach(l),Dt=o(I,"BR",{}),rt=r(I),x=o(I,"INPUT",{class:!0,id:!0,name:!0}),Ct=o(I,"BR",{}),Yt=r(I),W=o(I,"LABEL",{for:!0,class:!0});var jt=u(W);Pt=d(jt,"Password"),jt.forEach(l),Lt=r(I),tt=o(I,"P",{class:!0});var $t=u(tt);Bt=d($t,"Password should be at least 8 characters long"),$t.forEach(l),Ht=r(I),B=o(I,"INPUT",{class:!0,id:!0,name:!0,type:!0}),Ft=o(I,"BR",{}),Mt=r(I),V=o(I,"DIV",{class:!0});var ot=u(V);q=o(ot,"LABEL",{class:!0,for:!0});var Xt=u(q);lt=d(Xt,"Agree to our terms of service"),Xt.forEach(l),_t=r(ot),z=o(ot,"INPUT",{class:!0,type:!0,id:!0,name:!0}),ot.forEach(l),kt=r(I),et=o(I,"INPUT",{type:!0,class:!0}),I.forEach(l),nt=r(N),D&&D.l(N),mt=r(N),at=o(N,"A",{href:!0});var Kt=u(at);Gt=d(Kt,"Sign in"),Kt.forEach(l),N.forEach(l),this.h()},h(){var R,N,j;m(c,"class","pt-10 svelte-1i575gh"),m(f,"for","name"),m(f,"class","svelte-1i575gh"),m(U,"class","w-full svelte-1i575gh"),m(U,"id","name"),m(U,"name","name"),U.value=O=((R=A[0])==null?void 0:R.name)??"",m(Y,"for","university"),m(Y,"class","svelte-1i575gh"),m(F,"class","w-full svelte-1i575gh"),m(F,"id","university"),m(F,"name","university"),F.value=it=((N=A[0])==null?void 0:N.university)??"",m(M,"for","sport"),m(M,"class","svelte-1i575gh"),m(K,"for","gender-preference"),m(K,"class","svelte-1i575gh"),m(G,"for","email"),m(G,"class","svelte-1i575gh"),m(x,"class","w-full svelte-1i575gh"),m(x,"id","email"),m(x,"name","email"),x.value=st=((j=A[0])==null?void 0:j.email)??"",m(W,"for","password"),m(W,"class","svelte-1i575gh"),m(tt,"class","svelte-1i575gh"),m(B,"class","w-full svelte-1i575gh"),m(B,"id","password"),m(B,"name","password"),m(B,"type","password"),m(q,"class","text-blue-500 underline mr-2 svelte-1i575gh"),m(q,"for","checkbox"),m(z,"class","transform translate-y-[2px] svelte-1i575gh"),m(z,"type","checkbox"),m(z,"id","terms-of-service"),m(z,"name","terms-of-service"),z.value="accepted",m(V,"class","w-full align-start"),m(et,"type","submit"),et.value="Continue",m(et,"class","svelte-1i575gh"),m(h,"method","post"),m(h,"class","svelte-1i575gh"),m(at,"href","/login"),m(s,"class","rounded-xl bg-white px-10 pb-10 mx-6 pt-0 -mt-10 max-w-[800px] mx-auto")},m(R,N){S&&S.m(R,N),H(R,e,N),H(R,s,N),t(s,c),t(c,y),t(s,g),t(s,h),t(h,f),t(f,E),t(h,b),t(h,v),t(h,U),t(h,T),t(h,w),t(h,Y),t(Y,X),t(h,yt),t(h,J),t(h,F),t(h,At),t(h,Et),t(h,M),t(M,bt),t(h,Tt),t(h,It),Ie(_,h,null),t(h,Z),t(h,Rt),t(h,K),t(K,vt),t(h,Ot),t(h,k),Ie(L,h,null),t(h,Ut),t(h,G),t(G,St),t(h,Dt),t(h,rt),t(h,x),t(h,Ct),t(h,Yt),t(h,W),t(W,Pt),t(h,Lt),t(h,tt),t(tt,Bt),t(h,Ht),t(h,B),t(h,Ft),t(h,Mt),t(h,V),t(V,q),t(q,lt),t(V,_t),t(V,z),t(h,kt),t(h,et),t(s,nt),D&&D.m(s,null),t(s,mt),t(s,at),t(at,Gt),Q=!0,ht||(xt=[Zi(q,"click",A[7]),Is(Rs.call(null,h))],ht=!0)},p(R,[N]){var ct,pt,$,dt;R[2]?S?S.p(R,N):(S=ys(R),S.c(),S.m(e.parentNode,e)):S&&(S.d(1),S=null),(!Q||N&1&&O!==(O=((ct=R[0])==null?void 0:ct.name)??"")&&U.value!==O)&&(U.value=O),(!Q||N&1&&it!==(it=((pt=R[0])==null?void 0:pt.university)??"")&&F.value!==it)&&(F.value=it);const j={};!wt&&N&8&&(wt=!0,j.sportPref=R[3],tn(()=>wt=!1)),_.$set(j);const I={};!Nt&&N&2&&(Nt=!0,I.selected=R[1],tn(()=>Nt=!1)),L.$set(I),(!Q||N&1&&st!==(st=(($=R[0])==null?void 0:$.email)??"")&&x.value!==st)&&(x.value=st),(dt=R[0])!=null&&dt.message?D?D.p(R,N):(D=As(R),D.c(),D.m(s,mt)):D&&(D.d(1),D=null)},i(R){Q||(ut(_.$$.fragment,R),ut(L.$$.fragment,R),Q=!0)},o(R){gt(_.$$.fragment,R),gt(L.$$.fragment,R),Q=!1},d(R){S&&S.d(R),R&&l(e),R&&l(s),we(_),we(L),D&&D.d(),ht=!1,ws(xt)}}}function ks(A,e,s){let{form:c}=e,y,g=!1,h;const f=()=>s(2,g=!1);function E(U){h=U,s(3,h),s(0,c)}function b(U){y=U,s(1,y)}const v=()=>{s(2,g=!0)};return A.$$set=U=>{"form"in U&&s(0,c=U.form)},A.$$.update=()=>{A.$$.dirty&1&&c&&c.sport&&s(3,h=c.sport)},[c,y,g,h,f,E,b,v]}class js extends Xi{constructor(e){super(),Ki(this,e,ks,_s,Qi,{form:0})}}export{js as component};
