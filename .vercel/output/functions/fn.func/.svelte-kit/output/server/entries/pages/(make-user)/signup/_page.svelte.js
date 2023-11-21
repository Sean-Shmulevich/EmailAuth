import { c as create_ssr_component, v as validate_component, o as each, i as escape, b as add_attribute } from "../../../../chunks/index2.js";
import "devalue";
import { B as Button, D as Dropdown } from "../../../../chunks/Wrapper.js";
/* empty css                                                          */import { R as Radio$1 } from "../../../../chunks/Radio.js";
import { C as Chevron } from "../../../../chunks/Chevron.js";
const SportRadio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { sportPref } = $$props;
  const sportsNames = [
    "Baseball",
    "Basketball",
    "Bowling",
    "Cross country",
    "Fencing",
    "Field hockey",
    "Football",
    "Golf",
    "Gymnastics",
    "Ice hockey",
    "Lacrosse",
    "Rifle",
    "Rowing",
    "Skiing",
    "Soccer",
    "Softball",
    "Swimming & Diving",
    "Tennis",
    "Track & field (indoor)",
    "Track & field (outdoor)",
    "Volleyball (indoor)",
    "Volleyball (beach)",
    "Water polo",
    "Wrestling"
  ];
  let open = false;
  if ($$props.sportPref === void 0 && $$bindings.sportPref && sportPref !== void 0)
    $$bindings.sportPref(sportPref);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="flex flex-row rounded-xl items-center">${validate_component(Button, "Button").$$render($$result, { class: "bg-white text-black" }, {}, {
      default: () => {
        return `${validate_component(Chevron, "Chevron").$$render($$result, {}, {}, {
          default: () => {
            return `What is your primary sport?`;
          }
        })}`;
      }
    })}
	${validate_component(Dropdown, "Dropdown").$$render(
      $$result,
      {
        class: "bg-white w-54 h-32 overflow-y-scroll text-left whitespace-nowrap space-y-3 text-sm",
        open
      },
      {
        open: ($$value) => {
          open = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${each(sportsNames, (sportName) => {
            return `${validate_component(Radio$1, "Radio").$$render(
              $$result,
              {
                class: "text-black ml-2 mt-2",
                name: "sport-preference",
                value: sportName,
                group: sportPref
              },
              {
                group: ($$value) => {
                  sportPref = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `${escape(sportName)}`;
                }
              }
            )}`;
          })}
		<div class="h-2 w-full"></div>`;
        }
      }
    )}
	${sportPref ? `<div class="ml-10">${escape(sportPref)}</div>` : ``}</div>
<input type="hidden" name="sport-preference"${add_attribute("value", sportPref, 0)}>`;
  } while (!$$settled);
  return $$rendered;
});
const Radio = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  let { fontSize = 16 } = $$props;
  let { justify = "center" } = $$props;
  let { flexDirection = "column" } = $$props;
  let { inputName } = $$props;
  let { selected } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.fontSize === void 0 && $$bindings.fontSize && fontSize !== void 0)
    $$bindings.fontSize(fontSize);
  if ($$props.justify === void 0 && $$bindings.justify && justify !== void 0)
    $$bindings.justify(justify);
  if ($$props.flexDirection === void 0 && $$bindings.flexDirection && flexDirection !== void 0)
    $$bindings.flexDirection(flexDirection);
  if ($$props.inputName === void 0 && $$bindings.inputName && inputName !== void 0)
    $$bindings.inputName(inputName);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  return `<div class="${"flex " + escape(flexDirection !== "row" ? "flex-col" : "flex-row ", true)}">${each(options, (option) => {
    return `<label class="${"flex items-center w-full " + escape(justify === "left" ? "" : " justify-center", true)}"><input class="form-radio h-4 text-blue-500" ${selected === option ? "checked" : ""} type="radio"${add_attribute("name", inputName, 0)}${add_attribute("value", option, 0)}>
			<span class="ml-3">${escape(option)}</span>
		</label>`;
  })}
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".centerAll.svelte-1i575gh.svelte-1i575gh{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%)}h1.svelte-1i575gh.svelte-1i575gh{margin-top:8rem;margin-bottom:0.5rem;width:100%;font-size:1.875rem;line-height:2.25rem;font-weight:600}@media(min-width: 640px){h1.svelte-1i575gh.svelte-1i575gh{margin-top:7rem}}@media(min-width: 768px){h1.svelte-1i575gh.svelte-1i575gh{margin-top:6rem}}@media(min-width: 1024px){h1.svelte-1i575gh.svelte-1i575gh{margin-top:5rem}}label.svelte-1i575gh.svelte-1i575gh{margin-bottom:0.25rem;width:100%;font-size:0.875rem;line-height:1.25rem;font-weight:500}input.svelte-1i575gh.svelte-1i575gh{margin-top:0.25rem;margin-bottom:0.5rem;border-radius:0.25rem;border-width:1px;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.375rem;padding-bottom:0.375rem}input[type='checkbox'].svelte-1i575gh.svelte-1i575gh{margin-top:0.25rem;margin-bottom:0.5rem;border-radius:0.25rem;border-width:1px;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.375rem;padding-bottom:0.375rem}input[type='submit'].svelte-1i575gh.svelte-1i575gh{margin-bottom:0.5rem;width:100%;cursor:pointer;border-radius:0.25rem;border-width:1px;--tw-bg-opacity:1;background-color:rgb(0 0 0 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem;padding-top:0.375rem;padding-bottom:0.375rem;font-weight:500;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}p.error.svelte-1i575gh.svelte-1i575gh{font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(248 113 113 / var(--tw-text-opacity))}form.svelte-1i575gh.svelte-1i575gh{margin-top:0.5rem;margin-bottom:0.5rem}form.svelte-1i575gh p.svelte-1i575gh{font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(113 113 122 / var(--tw-text-opacity))}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let genderPreference;
  let sportPref;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      {
        if (form && form.sport) {
          sportPref = form.sport;
        }
      }
    }
    $$rendered = `${``}
<div class="rounded-xl bg-white px-10 pb-10 mx-6 pt-0 -mt-10 max-w-[800px] mx-auto"><h1 class="pt-10 svelte-1i575gh">Create an athlete account</h1>
	<form method="post" class="svelte-1i575gh"><label for="name" class="svelte-1i575gh">Full Name</label><br>
		<input class="w-full svelte-1i575gh" id="name" name="name"${add_attribute("value", form?.name ?? "", 0)}><br>
		

		<label for="university" class="svelte-1i575gh">University</label><br>
		<input class="w-full svelte-1i575gh" id="university" name="university"${add_attribute("value", form?.university ?? "", 0)}><br>

		<label for="sport" class="svelte-1i575gh">Sport</label><br>
		${validate_component(SportRadio, "SportRadio").$$render(
      $$result,
      { sportPref },
      {
        sportPref: ($$value) => {
          sportPref = $$value;
          $$settled = false;
        }
      },
      {}
    )}<br>

		<label for="gender-preference" class="svelte-1i575gh">Gender</label><br>
		${validate_component(Radio, "Radio").$$render(
      $$result,
      {
        inputName: "gender-preference",
        options: ["Male", "Female"],
        flexDirection: "row",
        selected: genderPreference
      },
      {
        selected: ($$value) => {
          genderPreference = $$value;
          $$settled = false;
        }
      },
      {}
    )}

		

		<label for="email" class="svelte-1i575gh">Email</label><br>
		<input class="w-full svelte-1i575gh" id="email" name="email"${add_attribute("value", form?.email ?? "", 0)}><br>
		<label for="password" class="svelte-1i575gh">Password</label>
		<p class="svelte-1i575gh">Password should be at least 8 characters long</p>
		<input class="w-full svelte-1i575gh" id="password" name="password" type="password"><br>

		<div class="w-full align-start"><label class="text-blue-500 underline mr-2 svelte-1i575gh" for="checkbox">Agree to our terms of service</label>
			<input class="transform translate-y-[2px] svelte-1i575gh" type="checkbox" id="terms-of-service" name="terms-of-service" value="accepted"></div>
		<input type="submit" value="Continue" class="svelte-1i575gh"></form>
	${form?.message ? `<p class="error svelte-1i575gh">${escape(form.message)}</p>` : ``}
	<a href="/login">Sign in</a>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
