import { c as create_ssr_component, l as createEventDispatcher, i as escape } from "./index2.js";
/* empty css                                       */import "file-selector";
import "./FileDrop.svelte_svelte_type_style_lang.js";
const ImageCropper_svelte_svelte_type_style_lang = "";
const css = {
  code: ".prof-pic-wrapper.svelte-1r0qc53{display:none;position:relative;border:solid;overflow:hidden}.prof-pic.svelte-1r0qc53{position:absolute}.nah.svelte-1r0qc53{display:none}.input.svelte-1r0qc53{background-color:#222;border:none;color:#fff;padding:1em;width:100%;border-radius:0.25rem;margin-bottom:1rem;font-size:1.2rem}.input.svelte-1r0qc53:focus{outline:none;box-shadow:0 0 0 3px rgba(46, 184, 0, 0.5)}.btn.svelte-1r0qc53{background:linear-gradient(90deg, rgba(46, 184, 0, 1) 0%, rgba(46, 163, 192, 1) 100%);color:white;border:none;padding:10px 20px;border-radius:5px;font-size:1.2rem;cursor:pointer;margin-top:1rem;margin-bottom:1rem;transition:background 0.5s ease}.btn.svelte-1r0qc53:hover{background:linear-gradient(90deg, rgba(46, 184, 0, 1) 50%, rgba(46, 163, 192, 1) 50%)}.close-button.svelte-1r0qc53{position:absolute;top:10px;right:10px;padding:0;margin:0;background:transparent}",
  map: null
};
const ImageCropper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { open } = $$props;
  let { croppedImage } = $$props;
  let { square } = $$props;
  let { mobile = false } = $$props;
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.croppedImage === void 0 && $$bindings.croppedImage && croppedImage !== void 0)
    $$bindings.croppedImage(croppedImage);
  if ($$props.square === void 0 && $$bindings.square && square !== void 0)
    $$bindings.square(square);
  if ($$props.mobile === void 0 && $$bindings.mobile && mobile !== void 0)
    $$bindings.mobile(mobile);
  $$result.css.add(css);
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
export {
  ImageCropper as I
};
