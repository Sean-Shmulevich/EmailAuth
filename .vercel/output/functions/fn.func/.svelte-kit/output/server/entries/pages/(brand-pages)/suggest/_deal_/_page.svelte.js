import { c as create_ssr_component, i as escape, o as each, b as add_attribute } from "../../../../../chunks/index2.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "@media(max-width: 950px){.profile-card.svelte-1v2p22b{flex-direction:column;width:80%}.image.svelte-1v2p22b{width:100%}.profile-text.svelte-1v2p22b{margin-top:0px;padding-left:6px;width:100%}}",
  map: null
};
let defaultImage = "https://slimecars.com/assets/dapupprofile.png";
let s3 = "/api/s3object";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let users = [];
  let index0 = 0;
  let index1 = 0;
  let images = [[defaultImage], [defaultImage]];
  for (let i = 0; data.images && i < data.images[0].length; i++) {
    let imgNum = data.images[0][i].image_number;
    images[0][imgNum] = `${s3 + "/" + encodeURIComponent(data.images[0][i].id)}`;
  }
  for (let i = 0; data.images && data.images[1] && i < data.images[1].length; i++) {
    let imgNum = data.images[1][i].image_number;
    images[1][imgNum] = `${s3 + "/" + encodeURIComponent(data.images[1][i].id)}`;
  }
  let iconLinks = {
    Instagram: "https://slimecars.com/assets/instagram.png",
    Twitter: "https://slimecars.com/assets/twitter.png",
    Facebook: "https://slimecars.com/assets/facebook.png",
    "Tik Tok": "https://slimecars.com/assets/tiktok.png",
    Snapchat: "https://slimecars.com/assets/snapchat.png",
    Linkedin: "https://slimecars.com/assets/linkedin.png",
    Website: "https://slimecars.com/assets/website.png"
  };
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  return `


<h2 class="text-xl text-center text-white mt-5 mb-5">Your deal has been launched pick one of our recommended athletes or wait for your deal to generate
	interest
</h2>
<h2 class="text-3xl text-center text-white mt-5 mb-5">Suggested Athletes</h2>
<div class="w-full text-center"><a class="p-2 w-full mx-auto bg-red-500 rounded-full" href="/creation-center">Go back to creation center</a>
	<a class="p-2 w-full mx-auto bg-yellow-500 rounded-full" href="${"/creation-center/deal/" + escape(data.dealId, true)}">See interest on your deal</a></div>
${data.matchingProfiles !== void 0 ? `${each(users, (user, i) => {
    return `<div class="bg-gray-900 my-5 text-white flex flex-col items-center justify-center space-y-8"><div class="profile-card flex flex-col md:flex-row bg-gray-800 shadow rounded-lg max-w-7xl w-full p-6 overflow-hidden svelte-1v2p22b"><div class="image w-3/4 md:w-[83%] relative svelte-1v2p22b">${i === 0 ? `<img${add_attribute("src", images[i][index0], 0)} alt="Next" class="object-cover h-full w-full rounded-lgx">` : ``}
					${i === 1 ? `<img${add_attribute("src", images[i][index1], 0)} alt="Next" class="object-cover h-full w-full rounded-lgx">` : ``}

					${user.socialMedia !== null ? `<div data-sveltekit-preload-data="false" class="flex flex-row absolute -bottom-5 transform -translate-y-1/2 right-0 rounded-full bg-gray-400 py-1 bg-opacity-60 space-x-2 px-2">${user.socialMedia["Instagram"] ? `<a${add_attribute("href", user.socialMedia["Instagram"], 0)} target="_blank"><img${add_attribute("src", iconLinks.Instagram, 0)} width="40" height="40" alt="Instagram">
								</a>` : ``}

							${user.socialMedia["Twitter"] ? `<a${add_attribute("href", user.socialMedia["Twitter"], 0)} target="_blank"><img${add_attribute("src", iconLinks.Twitter, 0)} width="40" height="40" alt="Twitter">
								</a>` : ``}

							${user.socialMedia["Facebook"] ? `<a${add_attribute("href", user.socialMedia["Facebook"], 0)} target="_blank"><img${add_attribute("src", iconLinks.Facebook, 0)} width="40" height="40" alt="Facebook">
								</a>` : ``}

							${user.socialMedia["Tik Tok"] ? `<a${add_attribute("href", user.socialMedia["Tik Tok"], 0)} target="_blank"><img${add_attribute("src", iconLinks["Tik Tok"], 0)} width="40" height="40" alt="Tik Tok">
								</a>` : ``}

							${user.socialMedia["Snapchat"] ? `<a${add_attribute("href", user.socialMedia["Snapchat"], 0)} target="_blank"><img${add_attribute("src", iconLinks.Snapchat, 0)} width="40" height="40" alt="Snapchat">
								</a>` : ``}

							${user.socialMedia["Linkedin"] ? `<a${add_attribute("href", user.socialMedia["Linkedin"], 0)} target="_blank"><img${add_attribute("src", iconLinks.Linkedin, 0)} width="40" height="40" alt="LinkedIn">
								</a>` : ``}

							${user.socialMedia["Website"] ? `<a${add_attribute("href", user.socialMedia["Website"], 0)} target="_blank"><img${add_attribute("src", iconLinks.Website, 0)} width="40" height="40" alt="Website">
								</a>` : ``}
						</div>` : ``}
					<div class="absolute top-1/2 transform -translate-y-1/2 left-3"><button class="bg-transparent text-white text-4xl font-semibold hover:text-gray-300 transition-colors duration-200">&lt;
						</button></div>

					<div class="absolute top-1/2 transform -translate-y-1/2 right-3"><button class="bg-transparent text-white text-4xl font-semibold hover:text-gray-300 transition-colors duration-200">&gt;
						</button>
					</div></div>

				<div class="profile-text mt-5 md:mt-0 md:pl-6 w-full flex flex-col svelte-1v2p22b" style="height:inherit"><div class="text-5xl my-5 font-medium text-white leading-10">${escape(data.names[i])}</div>
					<div class="mt-5 flex-grow overflow-y-auto overflow-wrap break-word"><h4 class="text-lg leading-6 font-medium text-white">Biography</h4>
						<p class="mt-2 text-base text-gray-400"><!-- HTML_TAG_START -->${user.bio}<!-- HTML_TAG_END -->
						</p></div>
					<div class="border border-white p-2 rounded-xl -mb-2 mt-5 flex flex-col">${user.industries && user.industries.length !== 0 ? `<div class="flex flex-row items-baseline pt-2 justify-start bottom-0"><h4 class="text-lg leading-6 mr-8 font-medium text-white">Industries of interest
								</h4>
								<p class="mt-2 text-base text-gray-400">${escape(user.industries.map((industry) => industry.charAt(0).toUpperCase() + industry.slice(1)).join(", "))}</p>
							</div>` : ``}
						<div class="flex flex-row items-baseline pt-2 mb-2 justify-start bottom-0"><h4 class="text-lg leading-6 mr-8 font-medium text-white">#1 Goal of NIL</h4>
							<p class="mt-2 text-base text-gray-400">${user.goal === null ? `empty` : `${escape(user.goal)}`}</p>
						</div></div>
					<div class="flex flex-col sm:flex-row items-start space-y-2 sm:space-y-0 sm:items-center pt-2 justify-start space-x-2 mt-5 bottom-0"><div class="border p-2 rounded-full flex items-center text-xs ml-[9px] sm:ml-0 sm:text-sm text-gray-400">Sport: ${escape(user.sport)}</div>
						<div class="border p-2 rounded-full flex items-center text-xs sm:text-sm text-gray-400">${escape(user.college)}</div>
						<div class="border p-2 rounded-full flex items-center text-xs sm:text-sm text-gray-400">Graduation: ${escape(user.year)}</div>
						<div class="border p-2 rounded-full flex items-center text-xs sm:text-sm text-gray-400">Hometown: ${escape(user.hometown)}</div>
					</div></div>
			</div></div>
		<form class="mx-auto text-center mb-5" method="POST" action="?/pickUser"><input type="hidden" name="userId"${add_attribute("value", user.user_id, 0)}>
			<button class="text-center rounded-full p-2 bg-green-500" type="submit">Work with this athlete</button>
		</form>`;
  })}` : `<p class="text-center text-red-500 text-3xl mt-20">No athletes found</p>`}`;
});
export {
  Page as default
};
