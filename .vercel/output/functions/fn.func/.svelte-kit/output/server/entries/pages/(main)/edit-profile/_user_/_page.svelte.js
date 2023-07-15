import { c as create_ssr_component, t as createEventDispatcher, e as escape, v as validate_component, f as add_attribute, d as each } from "../../../../../chunks/index2.js";
import "file-selector";
import "../../../../../chunks/FileDrop.svelte_svelte_type_style_lang.js";
import "devalue";
import "quill-delta";
const Cropper_svelte_svelte_type_style_lang = "";
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
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".nah.svelte-14g8qdp{display:none}",
  map: null
};
let s3 = "/api/s3object";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  let showMessage = true;
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
  for (let i = 0; i < data.objects.length; i++) {
    let imgNum = data.objects[i].image_number;
    if (imgNum > 1 && imgNum < data.objects.length) {
      buttons.push(`image${imgNum}`);
    }
    if (imgNum === 0) {
      images["main-image"] = `${s3 + "/" + encodeURIComponent(data.objects[i].id)}`;
    } else if (imgNum <= 8) {
      images[`image${imgNum}`] = `${s3 + "/" + encodeURIComponent(data.objects[i].id)}`;
    }
  }
  let user = {
    name: "",
    sport: "",
    college: "",
    year: "",
    bio: "",
    image: ""
  };
  let editor;
  let isModalOpen = false;
  let croppedImage = null;
  let currImage = null;
  let squareInput = false;
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
    {
      if (croppedImage !== null && currImage !== null) {
        images[currImage] = URL.createObjectURL(croppedImage);
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
				<button class="${escape(images["main-image"] !== "" ? "nah" : "", true) + " text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 svelte-14g8qdp"}">Upload Image
				</button>
				${images["main-image"] !== "" ? `<h2 class="text-2xl">Main Image</h2>
					<img${add_attribute("src", images["main-image"], 0)} alt="Profile example" class="w-1/2 mx-auto">
					<button>Change Image</button>` : ``}</div>
			<div class="mb-4"><label class="block text-gray-300 text-sm font-bold mb-2" for="image">Additional Profile Images
				</label>
				<p class="text-gray-500 text-xs mb-2">Please upload a profile picture.</p>
				<div class="space-y-4 p-10">${each(buttons, (button) => {
      return `<button ${images[button] !== "" ? "disabled" : ""} class="${escape(images[button] !== "" ? "nah" : "", true) + " text-white w-full bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 svelte-14g8qdp"}">Upload ${escape(button.charAt(0).toUpperCase() + button.slice(1, button.length - 1) + " " + button.slice(button.length - 1))}</button>
						${images[button] !== "" ? `<h2 class="text-2xl">${escape(button.charAt(0).toUpperCase() + button.slice(1, button.length - 1) + " " + button.slice(button.length - 1))}</h2>
							<img${add_attribute("src", images[button], 0)} alt="Profile example" class="w-1/2 mx-auto">
							<button>Change Image</button>` : ``}`;
    })}
					${buttons.length < 8 ? `<button class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5 inline-flex"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
							Add
						</button>` : ``}</div></div>
			<div class="mb-4"><label class="block text-gray-300 text-sm font-bold mb-2" for="name">Name </label>
				<p class="text-gray-500 text-xs mb-2">Please enter your full name.</p>
				<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name="name" type="text" placeholder="John Doe"${add_attribute("value", user.name, 0)}></div>
			<div class="mb-4"><label class="block text-gray-300 text-sm font-bold mb-2" for="sport">Sport </label>
				<p class="text-gray-500 text-xs mb-2">What is your primary sport?</p>
				<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sport" name="sport" type="text" placeholder="Basketball"${add_attribute("value", user.sport, 0)}></div>
			<div class="mb-4"><label class="block text-gray-300 text-sm font-bold mb-2" for="college">College </label>
				<p class="text-gray-500 text-xs mb-2">Where did you go to college?</p>
				<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="college" id="college" type="text" placeholder="Harvard University"${add_attribute("value", user.college, 0)}></div>
			<div class="mb-4"><label class="block text-gray-300 text-sm font-bold mb-2" for="year">Year </label>
				<p class="text-gray-500 text-xs mb-2">Which year did you graduate?</p>
				<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="year" id="year" type="text" placeholder="2018"${add_attribute("value", user.year, 0)}></div>
			<div class="mb-4"><label class="block text-gray-300 text-sm font-bold mb-2" for="bio">Bio </label>
				<p class="text-gray-500 text-xs mb-2">Tell us a little about yourself.</p>
				
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
