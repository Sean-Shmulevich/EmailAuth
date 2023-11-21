import { c as create_ssr_component, e as compute_rest_props, v as validate_component, f as spread, g as escape_attribute_value, h as escape_object, j as is_void } from "./index2.js";
import { W as Wrapper } from "./Wrapper.js";
import { twMerge } from "tailwind-merge";
const DropdownItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["defaultClass", "href"]);
  let { defaultClass = "font-medium py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600" } = $$props;
  let { href = void 0 } = $$props;
  let liClass;
  let wrap = true;
  function init(node) {
    wrap = node.parentElement?.tagName === "UL";
  }
  if ($$props.defaultClass === void 0 && $$bindings.defaultClass && defaultClass !== void 0)
    $$bindings.defaultClass(defaultClass);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  liClass = twMerge(defaultClass, href ? "block" : "w-full text-left", $$props.class);
  return `${validate_component(Wrapper, "Wrapper").$$render($$result, { tag: "li", show: wrap, use: init }, {}, {
    default: () => {
      return `${((tag) => {
        return tag ? `<${href ? "a" : "button"}${spread(
          [
            { href: escape_attribute_value(href) },
            {
              type: escape_attribute_value(href ? void 0 : "button")
            },
            escape_object($$restProps),
            { class: escape_attribute_value(liClass) },
            {
              role: escape_attribute_value(href ? void 0 : "button")
            }
          ],
          {}
        )}>${is_void(tag) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag) ? "" : `</${tag}>`}` : "";
      })(href ? "a" : "button")}`;
    }
  })}

`;
});
export {
  DropdownItem as D
};
