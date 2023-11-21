import { c as create_ssr_component, b as add_attribute, i as escape } from "../../../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width: 950px){.profile-card.svelte-14f5e9s{flex-direction:column;width:90%}.image.svelte-14f5e9s{min-width:100%}.profile-text.svelte-14f5e9s{margin-top:20px;padding-left:6px;width:100%}}",
  map: null
};
let defaultImage = "https://slimecars.com/assets/dapupprofile.png";
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
  let iconLinks = {
    Instagram: "https://slimecars.com/assets/instagram.png",
    Twitter: "https://slimecars.com/assets/twitter.png",
    Facebook: "https://slimecars.com/assets/facebook.png",
    "Tik Tok": "https://slimecars.com/assets/tiktok.png",
    Snapchat: "https://slimecars.com/assets/snapchat.png",
    Linkedin: "https://slimecars.com/assets/linkedin.png",
    Website: "https://slimecars.com/assets/website.png"
  };
  user = { ...user, ...data.currUserProfile };
  let index = 1;
  let images = [defaultImage, defaultImage];
  for (let i = 0; i < data.objects.length && data.objects !== []; i++) {
    images[i] = `${s3 + "/" + encodeURIComponent(data.objects[i].id)}`;
  }
  let currentImage = images[index];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `<div class="text-white mt-10 flex flex-col items-center"><div class="profile-card w-full flex flex-col md:flex-row bg-gray-800 shadow rounded-lg max-w-7xl p-6 svelte-14f5e9s"><div class="image w-3/4 md:min-w-[400px] md:w-[43%] relative svelte-14f5e9s"><img${add_attribute("src", currentImage, 0)} alt="Current image" class="justify-center items-center object-cover h-full max-h-[90vh] w-full rounded-lg">
			<div class="absolute top-1/2 transform -translate-y-1/2 left-3"><button class="bg-transparent text-white text-4xl font-semibold hover:text-gray-300 transition-colors duration-200">&lt;
				</button></div>
			${user.socialMediaLinks ? `<div data-sveltekit-preload-data="false" class="flex flex-row absolute -bottom-5 transform -translate-y-1/2 right-0 rounded-full bg-gray-400 py-1 bg-opacity-60 space-x-2 px-2">${user.socialMediaLinks["Instagram"] ? `<a${add_attribute("href", user.socialMediaLinks["Instagram"], 0)} target="_blank"><img${add_attribute("src", iconLinks.Instagram, 0)} width="40" height="40" alt="Instagram"></a>` : ``}

					${user.socialMediaLinks["Twitter"] ? `<a${add_attribute("href", user.socialMediaLinks["Twitter"], 0)} target="_blank"><img${add_attribute("src", iconLinks.Twitter, 0)} width="40" height="40" alt="Twitter"></a>` : ``}

					${user.socialMediaLinks["Facebook"] ? `<a${add_attribute("href", user.socialMediaLinks["Facebook"], 0)} target="_blank"><img${add_attribute("src", iconLinks.Facebook, 0)} width="40" height="40" alt="Facebook"></a>` : ``}

					${user.socialMediaLinks["Tik Tok"] ? `<a${add_attribute("href", user.socialMediaLinks["Tik Tok"], 0)} target="_blank"><img${add_attribute("src", iconLinks["Tik Tok"], 0)} width="40" height="40" alt="Tik Tok"></a>` : ``}

					${user.socialMediaLinks["Snapchat"] ? `<a${add_attribute("href", user.socialMediaLinks["Snapchat"], 0)} target="_blank"><img${add_attribute("src", iconLinks.Snapchat, 0)} width="40" height="40" alt="Snapchat"></a>` : ``}

					${user.socialMediaLinks["Linkedin"] ? `<a${add_attribute("href", user.socialMediaLinks["Linkedin"], 0)} target="_blank"><img${add_attribute("src", iconLinks.Linkedin, 0)} width="40" height="40" alt="LinkedIn"></a>` : ``}

					${user.socialMediaLinks["Website"] ? `<a${add_attribute("href", user.socialMediaLinks["Website"], 0)} target="_blank"><img${add_attribute("src", iconLinks.Website, 0)} width="40" height="40" alt="Website"></a>` : ``}</div>` : ``}
			<div class="absolute top-1/2 transform -translate-y-1/2 right-3"><button class="bg-transparent text-white text-4xl font-semibold hover:text-gray-300 transition-colors duration-200">&gt;
				</button></div></div>

		<div class="profile-text mt-5 md:mt-0 md:pl-6 md:w-[57%] flex flex-col svelte-14f5e9s" style="height:inherit"><h2 class="text-6xl mb-2 -mt-4">${escape(user.name)}</h2>
			<div class="flex-grow mb-2 border border-red-100 rounded-xl block w-full h-fit p-5"><h4 class="text-lg leading-6 font-medium text-white">Biography</h4>
				${``}</div>
			<div class="flex-grow mb-2 border border-red-100 rounded-xl block w-full h-fit p-5"><h4 class="text-lg leading-6 font-medium text-white">Company goals</h4>
				${``}</div>

			<div class="text-sm leading-5 text-gray-400"><ul class="list-disc ml-4 text-lg"><li><span class="font-semibold">Location:</span> ${escape(user.location)}</li>
					<li><span class="font-semibold">Industry:</span> ${escape(user.industry)}</li>
					<li><span class="font-semibold">Size:</span> ${escape(user.size)}</li></ul></div>
			
			</div></div>

	
	
</div>`;
});
export {
  Page as default
};
