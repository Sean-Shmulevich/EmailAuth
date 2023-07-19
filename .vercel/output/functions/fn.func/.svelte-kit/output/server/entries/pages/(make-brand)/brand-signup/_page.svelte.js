import { c as create_ssr_component, j as escape, g as add_attribute, r as each } from "../../../../chunks/index2.js";
import "devalue";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let questions = {
    name: "What is your company name?",
    location: "Where is your company located?",
    industry: "What industry is your company in?",
    size: "How many employees does your company have?"
  };
  const questionKeys = Object.keys(questions);
  let currQuestion = "name";
  let responses = [];
  let currIndex = 0;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  return `<div class="flex w-full bg-gray-900 justify-center items-center h-screen"><div class="w-[80%] bg-gray-500 p-4 h-2/3 lg:h-1/2 rounded-xl">${currIndex < questionKeys.length ? `<h2 class="text-center text-5xl mb-4">${escape(questions[currQuestion])}</h2>
			<hr>
			<form>
				<input${add_attribute("id", currQuestion, 0)}${add_attribute("name", currQuestion, 0)}${add_attribute("value", responses[Object.keys(questions).indexOf(currQuestion)] ?? "", 0)}><br>
				<input type="submit" value="Continue">
				<button>Back</button></form>` : ``}

		${currIndex === questionKeys.length ? `<h2 class="text-center text-5xl mb-4">Set Email and Password</h2>
			<hr>
			<form method="POST">
				${each(questionKeys, (question, index) => {
    return `<input type="hidden"${add_attribute("name", question, 0)}${add_attribute("value", responses[index], 0)}>`;
  })}
				<input type="hidden" name="hiddenField" value="someValue">
				<label for="email">Email</label><br>
				<input id="email" name="email"${add_attribute("value", form?.email ?? "", 0)}><br>
				<label for="password">Password</label>
				<p>Password should be at least 8 characters long</p>
				<input id="password" name="password" type="password"><br>
				<input type="submit" value="Continue"></form>` : ``}
		${form?.message ? `<p class="error">${escape(form.message)}</p>` : ``}
		</div></div>
`;
});
export {
  Page as default
};
