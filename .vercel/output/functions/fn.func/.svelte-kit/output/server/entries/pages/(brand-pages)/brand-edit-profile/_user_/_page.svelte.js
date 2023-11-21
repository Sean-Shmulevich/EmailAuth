import { c as create_ssr_component, l as createEventDispatcher, i as escape, v as validate_component, o as each, b as add_attribute } from "../../../../../chunks/index2.js";
/* empty css                                                           */import "file-selector";
import "../../../../../chunks/FileDrop.svelte_svelte_type_style_lang.js";
import "devalue";
import { B as Button, D as Dropdown } from "../../../../../chunks/Wrapper.js";
/* empty css                                                             */import { D as DropdownItem } from "../../../../../chunks/DropdownItem.js";
import { C as Chevron } from "../../../../../chunks/Chevron.js";
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
        class: " bg-gray-700 w-64 h-32 overflow-y-scroll overflow-x-hidden text-black  text-left whitespace-nowrap text-sm",
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

		<div class="flex w-full sm:w-[80%] flex-row"><input class="bg-gray-700 rounded-md text-white w-full p-2 mr-5" placeholder="https://www.socialmedia.com/my-profile-link"${add_attribute(
        "value",
        links == void 0 || links[input] === void 0 ? "" : links[input],
        0
      )}>
			<button>-</button></div>
	</div>`;
    })}
${pickedTypes.length > 0 ? `<input type="hidden" name="social-media"${add_attribute("value", JSON.stringify(links), 0)}>` : ``}

${``}`;
  } while (!$$settled);
  return $$rendered;
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
  let editorGoals;
  let deltaContent = "";
  let deltaContentGoals = "";
  let buttons = ["image1"];
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
    name: "Profile empty",
    location: "empty",
    industry: "empty",
    size: "empty",
    goals: "empty",
    bio: "empty"
  };
  let isModalOpen = false;
  let croppedImage = null;
  let squareInput = false;
  let currImage = null;
  const snapshot = {
    capture: () => {
      return { user, deltaContent, deltaContentGoals };
    },
    restore: (data2) => {
      user = data2.user;
      data2.deltaContent;
      data2.deltaContentGoals;
    }
  };
  for (let i = 0; i < data.objects.length; i++) {
    let imgNum = data.objects[i].image_number;
    if (imgNum > 1) {
      buttons.push(`image${imgNum}`);
    }
    if (imgNum === 0) {
      images["main-image"] = `${s3 + "/" + encodeURIComponent(data.objects[i].id)}`;
    } else if (imgNum <= 8) {
      images[`image${imgNum}`] = `${s3 + "/" + encodeURIComponent(data.objects[i].id)}`;
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
      {
        console.log(data.currUserProfile.socialMediaLinks);
      }
    }
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
				<button class="${escape(images["main-image"] !== "" ? "nah" : "", true) + " text-white gold font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 svelte-1n9z0m3"}">Upload Image
				</button>
				${images["main-image"] !== "" ? `<h2 class="text-2xl">Main Image</h2>
					<img${add_attribute("src", images["main-image"], 0)} alt="Profile example" class="w-1/2 mx-auto">
					<button class="rounded-full mt-4 border border-white p-2">Change Image</button>` : ``}</div>
			<div class="mb-4"><label class="block text-gray-300 text-sm font-bold mb-2" for="image">Additional Profile Images
				</label>
				<p class="text-gray-500 text-xs">Please upload a profile picture.</p>
				<div class="space-y-4 px-10 pt-5">${each(buttons, (button) => {
      return `<button ${images[button] !== "" ? "disabled" : ""} class="${escape(images[button] !== "" ? "nah" : "", true) + " text-white w-full gold font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 svelte-1n9z0m3"}">Upload ${escape(button.charAt(0).toUpperCase() + button.slice(1, button.length - 1) + " " + button.slice(button.length - 1))}</button>
						${images[button] !== "" ? `<h2 class="text-2xl">${escape(button.charAt(0).toUpperCase() + button.slice(1, button.length - 1) + " " + button.slice(button.length - 1))}</h2>
							<img${add_attribute("src", images[button], 0)} alt="Profile example" class="w-1/2 mx-auto">
							<button class="rounded-full mt-4 border border-white p-2">Change Image</button>` : ``}`;
    })}
					${buttons.length < 8 ? `<div class="w-40 mx-auto gold text-white font-bold py-2 px-4 rounded-full text-center svelte-1n9z0m3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5 inline-flex"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
							Add image
						</div>` : ``}</div></div>

			<div class="mb-4"><label class="block text-gray-300 text-sm font-bold mb-2" for="sport">Company Size</label>
				<p class="text-gray-500 text-xs mb-2">What is your companies approximate size</p>
				<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="size" name="size" type="text" placeholder="1-10"${add_attribute("value", user.size, 0)}></div>

			<div class="mb-4"><label class="block text-gray-300 text-sm font-bold mb-2" for="bio">Bio </label>
				<p class="text-gray-500 text-xs mb-2">Tell us a little about yourself.</p>
				
				<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style="display: none;" name="bio" id="bio" hidden type="text"${add_attribute("value", user.bio, 0)}>
				<div class="shadow appearance-none border z-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-white focus:shadow-outline"${add_attribute("this", editor, 0)}></div></div>

			<div class="mb-4"><label class="block text-gray-300 text-sm font-bold mb-2" for="bio">Goals </label>
				<p class="text-gray-500 text-xs mb-2">What are your company&#39;s goals</p>
				
				<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" style="display: none;" name="goals" id="goals" hidden type="text"${add_attribute("value", user.goals, 0)}>
				<div class="shadow appearance-none border z-0 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none bg-white focus:shadow-outline"${add_attribute("this", editorGoals, 0)}></div></div>

			<div class="mb-4"><label class="block text-gray-300 text-sm font-bold mb-2">Social Media Links</label>
				${validate_component(SocialMediaPicker, "SocialMediaPicker").$$render(
      $$result,
      {
        links: data.currUserProfile && data.currUserProfile.socialMediaLinks !== null && data.currUserProfile.socialMediaLinks !== "" ? data.currUserProfile.socialMediaLinks : {}
      },
      {},
      {}
    )}
				

				</div>

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
