import { c as create_ssr_component, l as createEventDispatcher, b as add_attribute, i as escape, k as subscribe, v as validate_component, o as each } from "../../../../../chunks/index2.js";
/* empty css                                                             */import "file-selector";
import "../../../../../chunks/FileDrop.svelte_svelte_type_style_lang.js";
import { p as page } from "../../../../../chunks/stores.js";
const css$1 = {
  code: "p.svelte-1r2u3jm.svelte-1r2u3jm{background-color:#f0f0f0;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:0.375rem;border:0.7em dashed #c3c3c3;outline:1em solid #f0f0f0;transition:border 0.3s ease-in-out;outline-offset:-1.3em;padding:0.475em}p.svelte-1r2u3jm.svelte-1r2u3jm:focus{border-color:#2196f3}p.svelte-1r2u3jm.svelte-1r2u3jm:hover{border-color:#343434}p.svelte-1r2u3jm span.svelte-1r2u3jm{transition:color 0.1s;transition:fill 0.1s}p.svelte-1r2u3jm:focus span.svelte-1r2u3jm{color:#2196f3;fill:#2196f3}p.svelte-1r2u3jm:hover span.svelte-1r2u3jm,p.svelte-1r2u3jm span.svelte-1r2u3jm{color:#373737;font-size:1.2em;cursor:default;align-content:center}",
  map: null
};
const FileDrop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isMulti;
  let { id = void 0 } = $$props;
  let { accept = void 0 } = $$props;
  let { multiple = void 0 } = $$props;
  let { disabled = void 0 } = $$props;
  let { maxSize = void 0 } = $$props;
  let { minSize = void 0 } = $$props;
  let { fileLimit = void 0 } = $$props;
  let { clickToUpload = true } = $$props;
  let { input = void 0 } = $$props;
  createEventDispatcher();
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.accept === void 0 && $$bindings.accept && accept !== void 0)
    $$bindings.accept(accept);
  if ($$props.multiple === void 0 && $$bindings.multiple && multiple !== void 0)
    $$bindings.multiple(multiple);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.maxSize === void 0 && $$bindings.maxSize && maxSize !== void 0)
    $$bindings.maxSize(maxSize);
  if ($$props.minSize === void 0 && $$bindings.minSize && minSize !== void 0)
    $$bindings.minSize(minSize);
  if ($$props.fileLimit === void 0 && $$bindings.fileLimit && fileLimit !== void 0)
    $$bindings.fileLimit(fileLimit);
  if ($$props.clickToUpload === void 0 && $$bindings.clickToUpload && clickToUpload !== void 0)
    $$bindings.clickToUpload(clickToUpload);
  if ($$props.input === void 0 && $$bindings.input && input !== void 0)
    $$bindings.input(input);
  $$result.css.add(css$1);
  isMulti = (fileLimit === void 0 || fileLimit > 1) && (multiple === void 0 || multiple);
  return `<label${add_attribute("id", id, 0)}>${slots.default ? slots.default({}) : `
        <p class="svelte-1r2u3jm"><span class="svelte-1r2u3jm">Drag &amp; drop or select to upload ${escape(isMulti ? "files" : "a file ")}</span></p>
    `}
    <input type="file">
</label>`;
});
const NILQuickFacts = "/_app/immutable/assets/NILQuickFacts.721bd647.pdf";
const SponsorshipAgreement = "/_app/immutable/assets/ExampleNILSponsorshipAgreementDapUp.8b1d0c61.pdf";
const SampleExclusiveNIL = "/_app/immutable/assets/SampleExclusiveNILDapUp.3fb69f75.pdf";
const SampleNonExclusiveNIL = "/_app/immutable/assets/SampleNonExclusiveNILDapUp.d567e7bf.pdf";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".centerAll.svelte-rgoa2x{position:fixed;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%)}",
  map: null
};
function formatFileSize(size) {
  if (size < 1024)
    return size + " B";
  size /= 1024;
  if (size < 1024)
    return size.toFixed(2) + " KB";
  size /= 1024;
  if (size < 1024)
    return size.toFixed(2) + " MB";
  size /= 1024;
  return size.toFixed(2) + " GB";
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let files;
  let currFile;
  $page.url;
  let athlete = data.deal.userDealStatus[0].user;
  console.log(data.deal);
  let hasContract = false;
  let contractLink;
  if (data.deal.userDealStatus[0].contractId) {
    hasContract = true;
    contractLink = "/api/s3object/" + data.deal.userDealStatus[0].contractId;
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${``}
<div class="text-white p-10"><h1 class="text-center font-extrabold -mt-8 text-4xl">Contract for ${escape(data.deal.userDealStatus[0].user.name)}</h1>
	<h1 class="text-center font-extrabold text-gray-400 mb-10 text-2xl">Deal Title: ${escape(data.deal.title)}</h1>
	<h1 class="text-center font-extrabold text-2xl mb-2">Contract templates</h1>
	<div class="flex flex-row w-full justify-center mb-10 space-x-0 sm:space-x-5"><a class="w-40 p-4 bg-gray-700 border rounded-xl border-white"${add_attribute("href", NILQuickFacts, 0)} target="_blank"><img class="mb-5 w-[10vw] mx-auto" src="https://slimecars.com/assets/contract.png">
			<p class="text-center">NIL quick facts</p></a>
		<a class="w-40 p-4 bg-gray-700 border rounded-xl border-white"${add_attribute("href", SponsorshipAgreement, 0)} target="_blank"><img class="mb-5 w-[10vw] mx-auto" src="https://slimecars.com/assets/contract.png">
			<p class="text-center">Sponsorship agreement</p></a>
		<a class="w-40 p-4 bg-gray-700 border rounded-xl border-white"${add_attribute("href", SampleExclusiveNIL, 0)} target="_blank"><img class="mb-5 w-[10vw] mx-auto" src="https://slimecars.com/assets/contract.png">
			<p class="text-center">Exclusive NIL</p></a>
		<a class="w-40 p-4 bg-gray-700 border rounded-xl border-white"${add_attribute("href", SampleNonExclusiveNIL, 0)} target="_blank"><img class="mb-5 w-[10vw] mx-auto" src="https://slimecars.com/assets/contract.png">
			<p class="text-center">Non Exclusive NIL</p></a></div>
	<h1 class="text-center font-extrabold mt-10 text-4xl">Athlete Contact Info</h1>
	<div class="w-[85%] md:w-[60%] flex flex-col sm:flex-row justify-between space-y-5 sm:space-y-0 my-10 mx-auto items-center"><p class="p-5 border border-white text-sm md:text-lg bg-gray-700 rounded-full">${escape(athlete.email)}</p>
		<p class="p-5 border border-white text-sm md:text-lg bg-gray-700 rounded-full">${escape(athlete.profile.phoneNumber)}</p>
		<a href="${"/user-profile/" + escape(athlete.id, true)}" target="_blank" class="p-5 border border-white text-sm md:text-lg bg-gray-700 rounded-full">View Profile
		</a></div>
	${!hasContract ? `<div class="w-full"><h1 class="text-center font-extrabold my-10 text-4xl">Upload finalized contract</h1>
			<div class="w-full sm:w-1/2 mx-auto">${validate_component(FileDrop, "FileDrop").$$render($$result, { accept: ".pdf" }, {}, {})}</div></div>` : ``}
	<div class="w-full sm:w-1/2 mx-auto">${hasContract ? `${!hasContract ? `<h3 class="text-green-500">Accepted files</h3>` : `<h3 class="text-green-500">Finalized Contract</h3>`}
			<ul class="text-white rounded-xl bg-gray-700 p-3 flex flex-row items-center justify-between">${data.deal.userDealStatus[0].contractId ? `<a${add_attribute("href", contractLink, 0)} target="_blank">
						<li class="underline">${escape(data.deal.userDealStatus[0].contract.file_name)} - ${escape(formatFileSize(data.deal.userDealStatus[0].contract.file_size))}</li></a>` : `<li>${escape(currFile.name)} - ${escape(formatFileSize(currFile.size))}</li>
					<button><img class="w-10 h-10" src="https://slimecars.com/assets/trash.png"></button>`}</ul>
			${!hasContract && files.rejected.length > 0 ? `<h3 class="text-red-500">Rejected files</h3>
				<ul class="text-white">${each(files.rejected, (rejected) => {
    return `<li>${escape(rejected.file.name)} - ${escape(rejected.error.message)}</li>`;
  })}</ul>` : ``}` : ``}
		${!contractLink && currFile ? `<button class="bg-blue-500 rounded-xl text-white p-3 float-right mt-5 mb-10">Send finalized contract</button>` : ``}</div>
</div>`;
});
export {
  Page as default
};
