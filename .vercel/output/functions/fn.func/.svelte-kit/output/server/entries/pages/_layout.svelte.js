import { c as create_ssr_component, b as add_attribute, d as compute_slots, e as compute_rest_props, f as spread, g as escape_attribute_value, h as escape_object, i as escape, j as is_void, v as validate_component } from "../../chunks/index2.js";
/* empty css                */import "devalue";
import { twMerge } from "tailwind-merge";
import { B as Button, D as Dropdown } from "../../chunks/Wrapper.js";
/* empty css                                                    */import { D as DropdownItem } from "../../chunks/DropdownItem.js";
const Placeholder = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rounded = false } = $$props;
  let svgClass = twMerge("text-gray-400 bg-gray-100 dark:bg-gray-600", rounded ? "rounded" : "rounded-full", $$props.class);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  return `<svg${add_attribute("class", svgClass, 0)} fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>

`;
});
const Indicator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { color = "gray" } = $$props;
  let { rounded = false } = $$props;
  let { size = "md" } = $$props;
  let { border = false } = $$props;
  let { placement = void 0 } = $$props;
  let { offset = true } = $$props;
  const colors = {
    gray: "bg-gray-200",
    dark: "bg-gray-900 dark:bg-gray-700",
    blue: "bg-blue-600",
    orange: "bg-orange-600",
    green: "bg-green-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    indigo: "bg-indigo-500",
    yellow: "bg-yellow-300",
    teal: "bg-teal-500",
    none: ""
  };
  const sizes = {
    xs: "w-2 h-2",
    sm: "w-2.5 h-2.5",
    md: "w-3 h-3",
    lg: "w-3.5 h-3.5",
    xl: "w-6 h-6"
  };
  const placements = {
    // top
    "top-left": "top-0 left-0",
    "top-center": "top-0 left-1/2 -translate-x-1/2",
    "top-right": "top-0 right-0",
    // center
    "center-left": "top-1/2 -translate-y-1/2 left-0",
    center: "top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2",
    "center-right": "top-1/2 -translate-y-1/2 right-0",
    // bottom
    "bottom-left": "bottom-0 left-0",
    "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
    "bottom-right": "bottom-0 right-0"
  };
  const offsets = {
    // top
    "top-left": "-translate-x-1/3 -translate-y-1/3",
    "top-center": "-translate-y-1/3",
    "top-right": "translate-x-1/3 -translate-y-1/3",
    // center
    "center-left": "-translate-x-1/3",
    center: "",
    "center-right": "translate-x-1/3",
    // bottom
    "bottom-left": "-translate-x-1/3 translate-y-1/3",
    "bottom-center": "translate-y-1/3",
    "bottom-right": "translate-x-1/3 translate-y-1/3"
  };
  let dotClass;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.placement === void 0 && $$bindings.placement && placement !== void 0)
    $$bindings.placement(placement);
  if ($$props.offset === void 0 && $$bindings.offset && offset !== void 0)
    $$bindings.offset(offset);
  dotClass = twMerge("flex-shrink-0", rounded ? "rounded" : "rounded-full", border && "border-2 border-white dark:border-gray-800", sizes[size], colors[color], $$slots.default && "inline-flex items-center justify-center", placement && "absolute " + placements[placement], placement && offset && offsets[placement], $$props.class);
  return `<div${add_attribute("class", dotClass, 0)}>${slots.default ? slots.default({}) : ``}</div>

`;
});
const Avatar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["src", "href", "rounded", "border", "stacked", "dot", "alt", "size"]);
  let $$slots = compute_slots(slots);
  let { src = "" } = $$props;
  let { href = void 0 } = $$props;
  let { rounded = false } = $$props;
  let { border = false } = $$props;
  let { stacked = false } = $$props;
  let { dot = void 0 } = $$props;
  let { alt = "" } = $$props;
  let { size = "md" } = $$props;
  const sizes = {
    xs: "w-6 h-6",
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-20 h-20",
    xl: "w-36 h-36"
  };
  let avatarClass;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.stacked === void 0 && $$bindings.stacked && stacked !== void 0)
    $$bindings.stacked(stacked);
  if ($$props.dot === void 0 && $$bindings.dot && dot !== void 0)
    $$bindings.dot(dot);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  dot = dot && {
    placement: "top-right",
    color: "gray",
    size: "lg",
    ...dot
  };
  avatarClass = twMerge(rounded ? "rounded" : "rounded-full", border && "p-1 ring-2 ring-gray-300 dark:ring-gray-500", sizes[size], stacked && "border-2 -ml-4 border-white dark:border-gray-800", "bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300", $$props.class);
  return `${!src || !!href || $$slots.default || dot ? `${((tag) => {
    return tag ? `<${href ? "a" : "div"}${spread(
      [
        { href: escape_attribute_value(href) },
        escape_object($$restProps),
        {
          class: "relative flex justify-center items-center " + escape(avatarClass, true)
        }
      ],
      {}
    )}>${is_void(tag) ? "" : `${src ? `<img${add_attribute("alt", alt, 0)}${add_attribute("src", src, 0)}${add_attribute("class", rounded ? "rounded" : "rounded-full", 0)}>` : `${slots.default ? slots.default({}) : `${validate_component(Placeholder, "AvatarPlaceholder").$$render(
      $$result,
      {
        rounded,
        class: twMerge($$props.classPlaceholder)
      },
      {},
      {}
    )}`}`}
    ${dot ? `${validate_component(Indicator, "Indicator").$$render($$result, Object.assign({}, { border: true }, { offset: rounded }, dot), {}, {})}` : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
  })(href ? "a" : "div")}` : `<img${spread(
    [
      { alt: escape_attribute_value(alt) },
      { src: escape_attribute_value(src) },
      escape_object($$restProps),
      {
        class: escape_attribute_value(avatarClass)
      }
    ],
    {}
  )}>`}

`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<body class="bg-gray-900 overflow-x-hidden font-sans" style="touch-action: manipulation;">
	<header class="w-full body-font bg-gray-800"><div class="container sticky mx-auto flex pt-5 flex-row justify-center items-center">
			<a href="/" class="flex title-font font-mediums items-center text-white mb-4 md:mb-0" style="margin-top:-18px"><img class="transform scale-80 sm:mr-6 md:mr-0 mt-3 md:mt-0 sm:scale-100 w-40"${add_attribute("src", "https://slimecars.com/assets/dapuplogo.png", 0)}>
				
				</a>
			<nav class="md:ml-auto block items-center text-base justify-center z-[100]" style="margin-bottom:18px">${data.msg === "not authenticated" ? `
					<a href="/login" class="hover:text-yellow-500 text-sm sm:text-lg hover:bg-gray-800 bg-gray-500 text-white font-semibold inline-flex items-center mr-0 sm:mr-5 px-2 sm:px-4 py-2 rounded-full bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">Athlete login
					</a>

					
					<a href="/brand-login" class="hover:text-yellow-500 text-sm sm:text-lg hover:bg-gray-800 bg-gray-500 text-white font-semibold inline-flex items-center px-2 sm:px-4 py-2 rounded-full bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">Brand login
					</a>
					` : `${validate_component(Button, "Button").$$render(
    $$result,
    {
      pill: true,
      class: "h-full w-full bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100\n						text-white !p-1",
      id: "avatar_with_name"
    },
    {},
    {
      default: () => {
        return `${validate_component(Avatar, "Avatar").$$render($$result, { src: data.profilePicture }, {}, {})}
						<p class="pl-1">${escape(data.user.name)}</p>
						<svg class="mx-1 sm:mx-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4.5" width="18" height="1.5" rx="0.75" fill="currentColor"></rect><rect x="3" y="11" width="18" height="1.5" rx="0.75" fill="currentColor"></rect><rect x="3" y="17.5" width="18" height="1.5" rx="0.75" fill="currentColor"></rect></svg>`;
      }
    }
  )}`}</nav></div>
		<div class="z-10 relative">${data.msg !== "not authenticated" ? `${validate_component(Dropdown, "Dropdown").$$render(
    $$result,
    {
      class: "z-12 text-white bg-gray-700 rounded-lg",
      triggeredBy: "#avatar_with_name"
    },
    {},
    {
      default: () => {
        return `${data.msg === "email authenticated" ? `<div class="px-4 py-2 bg-red-700"><span class="block text-sm text-white">Waiting on verification </span></div>` : ``}

					${!data.user.isBrand ? `${data.msg === "fully authenticated" ? `${validate_component(DropdownItem, "DropdownItem").$$render(
          $$result,
          {
            class: "hover:bg-gray-600 text-center",
            href: "/deals"
          },
          {},
          {
            default: () => {
              return `Discover`;
            }
          }
        )}
							${validate_component(DropdownItem, "DropdownItem").$$render(
          $$result,
          {
            class: "hover:bg-gray-600 text-center",
            href: "/matches"
          },
          {},
          {
            default: () => {
              return `Matches`;
            }
          }
        )}` : ``}
						${validate_component(DropdownItem, "DropdownItem").$$render(
          $$result,
          {
            class: "hover:bg-gray-600 text-center",
            href: "/user-profile/" + data.user.userId
          },
          {},
          {
            default: () => {
              return `View Profile`;
            }
          }
        )}
						${validate_component(DropdownItem, "DropdownItem").$$render(
          $$result,
          {
            class: "hover:bg-gray-600 text-center",
            href: "/edit-profile/" + data.user.userId
          },
          {},
          {
            default: () => {
              return `Edit Profile`;
            }
          }
        )}` : `${validate_component(DropdownItem, "DropdownItem").$$render(
          $$result,
          {
            class: "hover:bg-gray-600 text-center",
            href: "/brand-profile/" + data.user.userId
          },
          {},
          {
            default: () => {
              return `View Profile`;
            }
          }
        )}
						${validate_component(DropdownItem, "DropdownItem").$$render(
          $$result,
          {
            class: "hover:bg-gray-600 text-center",
            href: "/brand-edit-profile/" + data.user.userId
          },
          {},
          {
            default: () => {
              return `Edit Profile`;
            }
          }
        )}

						${data.msg === "fully authenticated" ? `
							${validate_component(DropdownItem, "DropdownItem").$$render(
          $$result,
          {
            class: "hover:bg-gray-600 text-center",
            href: "/creation-center"
          },
          {},
          {
            default: () => {
              return `Creation Center`;
            }
          }
        )}` : `${validate_component(DropdownItem, "DropdownItem").$$render(
          $$result,
          {
            class: "hover:bg-gray-600 text-center",
            href: "/creation-center-clone"
          },
          {},
          {
            default: () => {
              return `Creation Center`;
            }
          }
        )}
							${validate_component(DropdownItem, "DropdownItem").$$render(
          $$result,
          {
            class: " text-center hover:bg-blue-500 bg-blue-500",
            target: "_blank",
            href: "https://buy.stripe.com/7sI8zt13w9zwclWdQS"
          },
          {},
          {
            default: () => {
              return `Purchase Subscription`;
            }
          }
        )}`}`}

					<form action="?/logout" class="text-center mx-auto" method="post">${validate_component(DropdownItem, "DropdownItem").$$render(
          $$result,
          {
            class: "text-center hover:bg-gray-600 ",
            type: "submit",
            slot: "footer"
          },
          {},
          {
            default: () => {
              return `Sign out`;
            }
          }
        )}</form>`;
      }
    }
  )}` : ``}</div></header>
	<main class="relative">${slots.default ? slots.default({}) : ``}</main></body>

`;
});
export {
  Layout as default
};
