import{p as A}from"./parse.bee59afc.js";import{h as E}from"./singletons.e03a3409.js";import{i as w}from"./navigation.361c9081.js";function L(t){return E.apply_action(t)}function M(t){const r=JSON.parse(t);return r.data&&(r.data=A(r.data)),r}function y(t){return HTMLElement.prototype.cloneNode.call(t)}function H(t,r=()=>{}){const s=async({action:a,result:c,reset:o})=>{c.type==="success"&&(o!==!1&&HTMLFormElement.prototype.reset.call(t),await w()),(location.origin+location.pathname===a.origin+a.pathname||c.type==="redirect"||c.type==="error")&&L(c)};async function l(a){var d,f,b,h;if(((d=a.submitter)!=null&&d.hasAttribute("formmethod")?a.submitter.formMethod:y(t).method)!=="post")return;a.preventDefault();const o=new URL((f=a.submitter)!=null&&f.hasAttribute("formaction")?a.submitter.formAction:y(t).action),n=new FormData(t),u=(b=a.submitter)==null?void 0:b.getAttribute("name");u&&n.append(u,((h=a.submitter)==null?void 0:h.getAttribute("value"))??"");const m=new AbortController;let p=!1;const g=await r({action:o,cancel:()=>p=!0,controller:m,get data(){return n},formData:n,get form(){return t},formElement:t,submitter:a.submitter})??s;if(p)return;let i;try{const e=await fetch(o,{method:"POST",headers:{accept:"application/json","x-sveltekit-action":"true"},cache:"no-store",body:n,signal:m.signal});i=M(await e.text()),i.type==="error"&&(i.status=e.status)}catch(e){if((e==null?void 0:e.name)==="AbortError")return;i={type:"error",error:e}}g({action:o,get data(){return n},formData:n,get form(){return t},formElement:t,update:e=>s({action:o,result:i,reset:e==null?void 0:e.reset}),result:i})}return HTMLFormElement.prototype.addEventListener.call(t,"submit",l),{destroy(){HTMLFormElement.prototype.removeEventListener.call(t,"submit",l)}}}export{H as e};
