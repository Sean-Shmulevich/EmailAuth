import { c as create_ssr_component, g as add_attribute, j as escape } from "../../../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width: 950px){.profile-card.svelte-14f5e9s{flex-direction:column;width:90%}.image.svelte-14f5e9s{min-width:100%}.profile-text.svelte-14f5e9s{margin-top:20px;padding-left:6px;width:100%}}",
  map: null
};
let defaultImage = "https://arkansasrazorbacks.com/wp-content/uploads/2022/10/Ayden-Owens-Delerme-MTR-2022-23.jpg";
let s3 = "/api/s3object";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let user = {
    name: "Profile empty",
    location: "empty",
    industry: "empty",
    size: "empty",
    goals: "empty",
    bio: "empty"
  };
  user = { ...user, ...data.currUserProfile };
  let index = 1;
  let images = [defaultImage];
  for (let i = 0; i < data.objects.length && data.objects !== []; i++) {
    images[i] = `${s3 + "/" + encodeURIComponent(data.objects[i].id)}`;
  }
  console.log(data.objects);
  let currentImage = images[index];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="text-white mt-10 flex flex-col items-center"><div class="profile-card w-full flex flex-col md:flex-row bg-gray-800 shadow rounded-lg max-w-7xl p-6 svelte-14f5e9s"><div class="image w-3/4 md:min-w-[400px] md:w-[43%] relative svelte-14f5e9s"><img${add_attribute("src", currentImage, 0)} alt="Current image" class="justify-center items-center object-cover h-full max-h-[90vh] w-full rounded-lg">
			<div class="absolute top-1/2 transform -translate-y-1/2 left-3"><button class="bg-transparent text-white text-4xl font-semibold hover:text-gray-300 transition-colors duration-200">&lt;
				</button></div>

			<div class="absolute top-1/2 transform -translate-y-1/2 right-3"><button class="bg-transparent text-white text-4xl font-semibold hover:text-gray-300 transition-colors duration-200">&gt;
				</button></div></div>

		<div class="profile-text mt-5 md:mt-0 md:pl-6 md:w-[57%] flex flex-col svelte-14f5e9s" style="height:inherit"><h2 class="text-6xl mb-2 -mt-4">${escape(user.name)}</h2>
			<div class="flex-grow mb-2 border border-red-100 rounded-xl block w-full h-fit p-5"><h4 class="text-lg leading-6 font-medium text-white">Biography</h4>
				${``}</div>
			<div class="flex-grow mb-2 border border-red-100 rounded-xl block w-full h-fit p-5"><h4 class="text-lg leading-6 font-medium text-white">Company goals</h4>
				${``}</div>
			
			</div></div>

	<div class="w-full px-6 lg:px-0 max-w-7xl min-h-40 flex mb-8 mt-5 md:flex-row flex-col"><div class="md:w-[30%] w-full rounded-xl p-5 pl-8 border border-white mr-10"><div class="text-sm leading-5 text-gray-400"><ul class="list-disc ml-4 text-lg"><li><span class="font-semibold">Location:</span> ${escape(user.location)}</li>
					<li><span class="font-semibold">Industry:</span> ${escape(user.industry)}</li>
					<li><span class="font-semibold">Size:</span> ${escape(user.size)}</li></ul></div></div>
		<div class="md:w-[70%] w-full rounded-xl p-5 pl-8 border border-white"><div class="text-sm leading-5 text-gray-400"><ul class="list-disc ml-4 text-lg"><li><span class="font-semibold">Location:</span> ${escape(user.location)}</li>
					<li><span class="font-semibold">Industry:</span> ${escape(user.industry)}</li>
					<li><span class="font-semibold">Size:</span> ${escape(user.size)}</li></ul></div></div></div>
</div>`;
});
export {
  Page as default
};
