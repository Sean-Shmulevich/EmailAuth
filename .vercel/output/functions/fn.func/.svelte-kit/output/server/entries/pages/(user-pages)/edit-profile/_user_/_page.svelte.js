import { c as create_ssr_component, l as createEventDispatcher, i as escape, v as validate_component, o as each, b as add_attribute } from "../../../../../chunks/index2.js";
/* empty css                                                           */import "file-selector";
import "../../../../../chunks/FileDrop.svelte_svelte_type_style_lang.js";
import { B as Button, D as Dropdown } from "../../../../../chunks/Wrapper.js";
/* empty css                                                             */import { D as DropdownItem } from "../../../../../chunks/DropdownItem.js";
import { C as Chevron } from "../../../../../chunks/Chevron.js";
import "devalue";
import "quill-delta";
const ImageCropper_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".prof-pic-wrapper.svelte-1r0qc53{display:none;position:relative;border:solid;overflow:hidden}.prof-pic.svelte-1r0qc53{position:absolute}.nah.svelte-1r0qc53{display:none}.input.svelte-1r0qc53{background-color:#222;border:none;color:#fff;padding:1em;width:100%;border-radius:0.25rem;margin-bottom:1rem;font-size:1.2rem}.input.svelte-1r0qc53:focus{outline:none;box-shadow:0 0 0 3px rgba(46, 184, 0, 0.5)}.btn.svelte-1r0qc53{background:linear-gradient(90deg, rgba(46, 184, 0, 1) 0%, rgba(46, 163, 192, 1) 100%);color:white;border:none;padding:10px 20px;border-radius:5px;font-size:1.2rem;cursor:pointer;margin-top:1rem;margin-bottom:1rem;transition:background 0.5s ease}.btn.svelte-1r0qc53:hover{background:linear-gradient(90deg, rgba(46, 184, 0, 1) 50%, rgba(46, 163, 192, 1) 50%)}.close-button.svelte-1r0qc53{position:absolute;top:10px;right:10px;padding:0;margin:0;background:transparent}",
  map: null
};
const ImageCropper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { open } = $$props;
  let { croppedImage } = $$props;
  let { square } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.croppedImage === void 0 && $$bindings.croppedImage && croppedImage !== void 0)
    $$bindings.croppedImage(croppedImage);
  if ($$props.square === void 0 && $$bindings.square && square !== void 0)
    $$bindings.square(square);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"fixed inset-1/2 w-3/4 h-3/4 bg-gray-500 rounded-xl p-10 transform -translate-x-1/2 -translate-y-1/2 overflow-y-scroll z-10 " + escape(!open ? "nah" : "", true) + " border-2 border-white flex flex-col items-center justify-center svelte-1r0qc53"}"><div class="flex justify-between w-full mb-5"><h2 class="font-bold text-2xl text-center w-full">Image Upload</h2>
		<button type="button" class="btn close-button svelte-1r0qc53"><p class="text-2xl hover:text-red-700 text-black font-bold">X</p></button></div>
	${`<h2 class="font-bold text-xl mb-3">Upload a picture for cropping?</h2>
		<input type="file" accept=".jpg, .jpeg, .png" class="input svelte-1r0qc53">`}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const SocialMediaPicker = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let socialMediaTypes = [
    "Instagram",
    "Twitter",
    "Facebook",
    "Tik Tok",
    "Snapchat",
    "Linkedin",
    "Website"
  ];
  let { links } = $$props;
  let open = false;
  let pickedTypes = [];
  if (links !== void 0) {
    for (let key in links) {
      pickedTypes = [...pickedTypes, key];
    }
  }
  if ($$props.links === void 0 && $$bindings.links && links !== void 0)
    $$bindings.links(links);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Button, "Button").$$render($$result, { class: "border border-white " }, {}, {
      default: () => {
        return `${validate_component(Chevron, "Chevron").$$render($$result, {}, {}, {
          default: () => {
            return `Pick 3 social media links to add to your profile`;
          }
        })}`;
      }
    })}
${validate_component(Dropdown, "Dropdown").$$render(
      $$result,
      {
        placement: "top",
        class: " w-64 h-32 bg-gray-700 overflow-y-scroll overflow-x-hidden text-white  text-left whitespace-nowrap text-sm",
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
          return `${each(socialMediaTypes, (socialMedia) => {
            return `${validate_component(DropdownItem, "DropdownItem").$$render(
              $$result,
              {
                class: "text-white ml-2 mt-2",
                value: socialMedia,
                group: socialMedia
              },
              {
                group: ($$value) => {
                  socialMedia = $$value;
                  $$settled = false;
                }
              },
              {
                default: () => {
                  return `${escape(socialMedia)}`;
                }
              }
            )}`;
          })}
	<div class="h-2 w-full"></div>`;
        }
      }
    )}
${each(pickedTypes, (input, i) => {
      return `<div class="flex flex-col justify-center items-center sm:flex-row my-4 space-x-4"><p class="w-[20%]">${escape(input)}</p>

		<div class="flex w-full sm:w-[80%] flex-row"><input class="bg-gray-700 rounded-md text-white w-full p-2 mr-5" placeholder="https://social-media.com/my-profile"${add_attribute("value", links[input] === void 0 ? "" : links[input], 0)}>
			<button class="text-xl font-extrabold">-</button></div>
	</div>`;
    })}
${pickedTypes.length > 0 ? `<input type="hidden" name="social-media"${add_attribute("value", JSON.stringify(links), 0)}>` : ``}

${``}`;
  } while (!$$settled);
  return $$rendered;
});
const Industries = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let industryTypes = [
    "real estate",
    "modeling",
    "marketing",
    "retail",
    "food and beverage",
    "supply chain",
    "music",
    "entrepreneurship",
    "apparel",
    "tech",
    "law",
    "medicine",
    "gaming",
    "fitness",
    "sports",
    "NFTs",
    "crypto",
    "business",
    "health and wellness",
    "fashion",
    "engineering"
  ];
  let { pickedTypes } = $$props;
  let open = false;
  if ($$props.pickedTypes === void 0 && $$bindings.pickedTypes && pickedTypes !== void 0)
    $$bindings.pickedTypes(pickedTypes);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Button, "Button").$$render($$result, { class: "border border-white " }, {}, {
      default: () => {
        return `${validate_component(Chevron, "Chevron").$$render($$result, {}, {}, {
          default: () => {
            return `Industries`;
          }
        })}`;
      }
    })}
${validate_component(Dropdown, "Dropdown").$$render(
      $$result,
      {
        placement: "top",
        class: " w-64 h-32 bg-gray-700 overflow-y-scroll overflow-x-hidden text-white text-left whitespace-nowrap text-sm",
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
          return `${each(industryTypes, (industry) => {
            return `${validate_component(DropdownItem, "DropdownItem").$$render(
              $$result,
              {
                class: "text-white ml-2 mt-2",
                value: industry
              },
              {},
              {
                default: () => {
                  return `${escape(industry)}`;
                }
              }
            )}`;
          })}
	<div class="h-2 w-full"></div>`;
        }
      }
    )}
${each(pickedTypes, (input, i) => {
      return `<div class="flex justify-center items-center sm:flex-row my-4"><div class="flex bg-gray-700 rounded-xl w-full flex-row"><p class="p-2 text-bold mr-10 text-center">${escape(input)}</p></div>
		<button class="p-2 font-extrabold text-xl">-</button>
	</div>`;
    })}
${pickedTypes.length > 0 ? `<input type="hidden" name="industries"${add_attribute("value", JSON.stringify(pickedTypes), 0)}>` : ``}

${``}`;
  } while (!$$settled);
  return $$rendered;
});
const Goals = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let interests = [
    "grow personal network",
    "increase career opportunities",
    "build wealth",
    "increase social media footprint",
    "connect with community",
    "custom"
  ];
  let { selected } = $$props;
  let custom;
  if (selected !== null && !interests.includes(selected)) {
    custom = selected;
    selected = "custom";
  }
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  return `<div class="">${each(interests, (option) => {
    return `<label class="my-4 flex items-center w-full justify-center'}"><input class="form-radio h-4 text-blue-500" ${selected === option ? "checked" : ""} type="radio" name="goal"${add_attribute("value", option, 0)}>
			<span class="ml-3 mr-5">${escape(option)}</span>
		</label>`;
  })}</div>
${selected && selected === "custom" || selected !== null && !interests.includes(selected) ? `<div class="mt-5"><label class="text-gray-300 text-sm font-bold mb-4 text-center" for="event-type">Custom goal</label>
		<input id="goal-custom" name="goal-custom" type="text" class="mx-5 shadow appearance-none border rounded mt-2 mb-5 w-[90%] py-2 px-3 text-white bg-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="ex: personal network growth"${add_attribute("value", custom, 0)}></div>` : ``}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".nah.svelte-1n9z0m3{display:none}.gold.svelte-1n9z0m3{background:radial-gradient(\n				ellipse farthest-corner at right bottom,\n				#fedb37 0%,\n				#fdb931 8%,\n				#9f7928 30%,\n				#8a6e2f 40%,\n				transparent 80%\n			),\n			radial-gradient(\n				ellipse farthest-corner at left top,\n				#ffffff 0%,\n				#ffffac 8%,\n				#d1b464 25%,\n				#5d4a1f 62.5%,\n				#5d4a1f 100%\n			)}",
  map: null
};
let s3 = "/api/s3object";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let editor;
  let buttons = [];
  let images = {
    "main-image": "",
    image1: "",
    image2: "",
    image3: "",
    image4: "",
    image5: "",
    image6: "",
    image7: "",
    image8: ""
  };
  let user = {
    name: "",
    venmo: "",
    bio: "",
    hometown: "",
    year: "",
    phoneNumber: "",
    image: ""
  };
  let isModalOpen = false;
  let croppedImage = null;
  let squareInput = true;
  let currImage = null;
  let deltaContent = "";
  const snapshot = {
    capture: () => {
      return { user, deltaContent };
    },
    restore: (data2) => {
      user = data2.user;
      data2.deltaContent;
    }
  };
  const processedImageNumbers = /* @__PURE__ */ new Set();
  if (data.objects.length > 0 && data.objects[0].image_number === 0) {
    let imageUrl = `${s3}/${encodeURIComponent(data.objects[0].id)}`;
    images["main-image"] = imageUrl;
  }
  if (data.objects.length > 1) {
    console.log(data.objects.length);
    for (let i = 0; i < data.objects.length; i++) {
      let imgNum = data.objects[i].image_number;
      if (processedImageNumbers.has(imgNum)) {
        continue;
      }
      processedImageNumbers.add(imgNum);
      let imageUrl = `${s3}/${encodeURIComponent(data.objects[i].id)}`;
      if (imgNum <= 8 && imgNum !== 0) {
        images[`image${imgNum}`] = imageUrl;
        buttons.push(`image${imgNum}`);
      }
    }
  }
  let showMessage = true;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.snapshot === void 0 && $$bindings.snapshot && snapshot !== void 0)
    $$bindings.snapshot(snapshot);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    {
      if (croppedImage !== null && currImage !== null) {
        images[currImage] = URL.createObjectURL(croppedImage);
      }
    }
    {
      if (form?.message) {
        setTimeout(
          () => {
            showMessage = false;
          },
          3e3
        );
        showMessage = true;
      }
    }
    $$rendered = `
<link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
<div class="bg-gray-900 text-white flex flex-col items-center text-center justify-center space-y-8"><h2 class="text-2xl mt-10">Edit Profile</h2>
	<div class="profile-card flex flex-col bg-gray-800 shadow overflow-hidden mt-10 rounded-lg max-w-5xl mb-10 w-full p-6"><form method="POST" action="?/update" class="w-full">

			${validate_component(ImageCropper, "ImageCropper").$$render(
      $$result,
      {
        croppedImage,
        square: squareInput,
        open: isModalOpen
      },
      {
        croppedImage: ($$value) => {
          croppedImage = $$value;
          $$settled = false;
        },
        square: ($$value) => {
          squareInput = $$value;
          $$settled = false;
        },
        open: ($$value) => {
          isModalOpen = $$value;
          $$settled = false;
        }
      },
      {}
    )}

			<div class="mb-4"><label class="block text-gray-300 text-sm font-bold mb-2" for="image">Main Profile Picture
				</label>
				<p class="text-gray-500 text-xs mb-2">Please upload a profile picture.</p>
				<button class="${"gold " + escape(images["main-image"] !== "" ? "nah" : "", true) + " text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 svelte-1n9z0m3"}">Upload Image
				</button>
				${images["main-image"] !== "" ? `<h2 class="text-2xl">Main Image</h2>
					<img${add_attribute("src", images["main-image"], 0)} alt="Profile example" class="w-1/2 mx-auto">
					<button class="border border-white p-5 bg-gray-800 rounded-full mt-2">Change Image</button>` : ``}
				<hr class="my-5"></div>
			<div class="mb-4"><label class="block text-gray-300 text-sm font-bold mb-2" for="image">Additional Profile Images
				</label>
				<p class="text-gray-500 text-xs -mb-10">Please upload additional profile pictures.</p>
				<div class="space-y-4 p-10">${each(buttons, (button) => {
      return `<button ${images[button] !== "" ? "disabled" : ""} class="${"gold " + escape(images[button] !== "" ? "nah" : "", true) + " text-white w-full hover:bg-gradient-to-br focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 svelte-1n9z0m3"}">Upload ${escape(button.charAt(0).toUpperCase() + button.slice(1, button.length - 1) + " " + button.slice(button.length - 1))}</button>
						${images[button] !== "" ? `<h2 class="text-2xl">${escape(button.charAt(0).toUpperCase() + button.slice(1, button.length - 1) + " " + button.slice(button.length - 1))}</h2>
							${images[button] !== "" ? `<img${add_attribute("src", images[button], 0)} alt="Profile example" class="w-1/2 mx-auto">` : ``}
							<button class="border border-white p-5 bg-gray-800 rounded-full mt-2">Change Image</button>` : ``}
						<hr class="my-5">`;
    })}
					${buttons.length < 8 ? `<br>
						<button class="w-1/4 gold text-white font-bold py-2 px-4 rounded transition duration-300 svelte-1n9z0m3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5 inline-flex"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
							Add
						</button>` : ``}</div></div>
			<div class="mb-4 rounded-xl w-fit bg-gray-700 mx-auto p-4"><label class="block text-gray-300 text-sm font-bold mb-2" for="name">Name </label>
				<p class="text-white text-4xl mb-2">${escape(data.user.name)}</p></div>
			<div class="mb-4"><label class="block text-gray-300 text-sm font-bold mb-2" for="venmo">Venmo </label>
				<p class="text-gray-500 text-xs">Input Venmo to recieve payment for finalized deals</p>
				<p class="text-gray-500 text-xs mb-2">format @venmoname</p>
				<input class="shadow bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" name="venmo" id="venmo" type="text" placeholder="@janeDoe17"${add_attribute("value", user.venmo, 0)}></div>

			<div class="mb-4"><label class="block text-gray-300 text-sm font-bold mb-2" for="graduation">Graduation year</label>
				<p class="text-gray-500 mb-2 text-xs">When will you graduate</p>
				<input class="shadow bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" name="graduation" id="graduation" type="text" placeholder="2025"${add_attribute("value", user.year, 0)}></div>
			<div class="mb-4"><label class="block text-gray-300 text-sm font-bold mb-2" for="phoneNumber">Phone number</label>
				<p class="text-gray-500 text-xs mb-2">input in xxx-xxx-xxxx format</p>
				<input class="shadow bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" name="phoneNumber" id="phoneNumber" type="text" placeholder="267-733-9999"${add_attribute("value", user.phoneNumber, 0)}></div>
			<div class="mb-4"><label class="block text-gray-300 text-sm font-bold mb-2" for="venmo">Hometown</label>
				<p class="text-gray-500 text-xs mb-2">Input hometown</p>
				<input class="shadow bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" name="hometown" id="hometown" type="text" placeholder="Pittsburgh, PA"${add_attribute("value", user.hometown, 0)}></div>
			<div class="mb-4"><label class="block text-gray-300 text-sm font-bold mb-2" for="industries">Industries of interest</label>
				<p class="text-gray-500 text-xs mb-2">Choose industries of interest</p>
				${validate_component(Industries, "Industries").$$render(
      $$result,
      {
        pickedTypes: data.currUserProfile.industries.length === 0 ? [] : data.currUserProfile.industries
      },
      {},
      {}
    )}</div>
			<div class="mb-4"><label class="block text-gray-300 text-sm font-bold mb-2" for="year">#1 goal of NIL marketing</label>
				<p class="text-gray-500 text-xs mb-2">Pick one goal or create a custom one</p>
				${validate_component(Goals, "Goals").$$render($$result, { selected: data.currUserProfile.goal }, {}, {})}</div>
			<div class="mb-4 mt-4"><label class="block text-gray-300 text-sm font-bold mb-2" for="bio">Social Media links</label>
				<p class="text-gray-500 text-xs mb-5">Submit up to 3 forms of social media</p>
				${validate_component(SocialMediaPicker, "SocialMediaPicker").$$render(
      $$result,
      {
        links: data.currUserProfile.socialMedia === null ? {} : data.currUserProfile.socialMedia
      },
      {},
      {}
    )}</div>
			<div class="mb-4"><label class="block text-gray-300 text-sm font-bold mb-2" for="bio">Bio </label>
				<p class="text-gray-500 text-xs mb-2">Tell us a little about yourself. (achievements, accolades, hobbies, etc.)
				</p>
				
				<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style="display: none;" name="bio" id="bio" type="text"${add_attribute("value", user.bio, 0)}>
				<div class="shadow appearance-none border z-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-white focus:shadow-outline"${add_attribute("this", editor, 0)}>${escape(deltaContent)}</div></div>

			<div class="flex items-center justify-between"><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Update Profile
				</button></div></form>
		${form?.message && showMessage ? `<p class="error">${escape(form.message)}</p>` : ``}</div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
