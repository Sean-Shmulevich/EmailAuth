import { c as create_ssr_component, i as escape, b as add_attribute, o as each } from "../../../../chunks/index2.js";
import "devalue";
/* empty css                                                          */const Checkboxes_svelte_svelte_type_style_lang = "";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".centerAll.svelte-24ul42.svelte-24ul42{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}@media(min-width: 640px){}@media(min-width: 768px){}@media(min-width: 1024px){}label.svelte-24ul42.svelte-24ul42{margin-bottom:0.25rem;width:100%;font-size:0.875rem;line-height:1.25rem;font-weight:500}input.svelte-24ul42.svelte-24ul42{margin-top:0.25rem;margin-bottom:0.5rem;border-width:1px;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.375rem;padding-bottom:0.375rem}input[type='submit'].svelte-24ul42.svelte-24ul42{margin-bottom:0.5rem;cursor:pointer;border-width:1px;--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem;padding-top:0.375rem;padding-bottom:0.375rem;font-weight:500;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}p.error.svelte-24ul42.svelte-24ul42{font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(248 113 113 / var(--tw-text-opacity))}form.svelte-24ul42.svelte-24ul42{margin-top:0.5rem;margin-bottom:0.5rem}form.svelte-24ul42 p.svelte-24ul42{font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(156 163 175 / var(--tw-text-opacity))}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let questions = {
    name: "What is your company name?",
    location: "Where is your company located?",
    size: "Company Size",
    industry: "What industry is your company in?",
    athlete: "Has your company sponsored a college athlete before?",
    sportPref: "What sports do you prefer to sponsor?",
    goals: "Top 3 goals of athlete marketing"
  };
  const questionKeys = Object.keys(questions);
  let currQuestion = "name";
  let responses = [];
  let currIndex = 0;
  let sizeSelected = "Size";
  let placeholders = ["Company Name", "Location", "", "Industry"];
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${``}
<div class="flex justify-center pt-10 mx-auto h-[85vh]"><div class="w-[90%] overflow-hidden sm:w-[60%] border border-white h-fit bg-gray-700 p-4 rounded-xl">${currIndex < questionKeys.length ? `<h2 class="text-center text-5xl mb-4 text-white">${escape(questions[currQuestion])}</h2>
			<hr>
			<form class=" svelte-24ul42">
				${`<input class="w-full bg-gray-700 text-white rounded-xl svelte-24ul42"${add_attribute("placeholder", placeholders[currIndex], 0)}${add_attribute("id", currQuestion, 0)}${add_attribute("name", currQuestion, 0)}${add_attribute("value", responses[Object.keys(questions).indexOf(currQuestion)] ?? "", 0)}>`}
				<br>
				<input class="float-right mt-3 rounded-full svelte-24ul42" type="submit" value="Continue">
				<button class="text-left mt-1 border border-white rounded-full bg-black p-2 text-white">Back</button></form>` : ``}

		${currIndex === questionKeys.length ? `<h2 class="text-center text-white text-5xl mb-4">Set Email and Password</h2>
			<hr>
			<form method="POST" class="svelte-24ul42">
				<input type="hidden" name="size" class="svelte-24ul42"${add_attribute("value", sizeSelected, 0)}>
				${each(questionKeys, (question, index) => {
      return `<input type="hidden"${add_attribute("name", question, 0)}${add_attribute("value", responses[index], 0)} class="svelte-24ul42">`;
    })}
				<label class="w-full text-white svelte-24ul42" for="email">Email</label><br>
				<input class="w-full text-white bg-gray-700 rounded-xl border border-white svelte-24ul42" id="email" name="email"${add_attribute("value", form?.email ?? "", 0)}><br>
				<label class="w-full text-white svelte-24ul42" for="password">Password</label>
				<p class="svelte-24ul42">Password should be at least 8 characters long</p>
				<input class="text-white w-full bg-gray-700 rounded-xl border border-white svelte-24ul42" id="password" name="password" type="password"><br>
				<div class="w-full align-start"><label class="text-blue-400 underline mr-2 svelte-24ul42" for="checkbox">Agree to our terms of service</label>
					<input class="transform translate-y-[2px] svelte-24ul42" type="checkbox" id="terms-of-service" name="terms-of-service" value="accepted"></div>
				<input class="rounded-full border border-white svelte-24ul42" type="submit" value="Submit"></form>` : ``}
		${form?.message ? `<p class="error svelte-24ul42">${escape(form.message)}</p>` : ``}
		</div></div>

`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
