import { c as create_ssr_component, i as escape, o as each } from "./index2.js";
import { d as durationUnitRegex, r as range } from "./utils.js";
/* empty css                                       */const css = {
  code: ".wrapper.svelte-c0n7a9{width:var(--size);height:var(--size)}.circle.svelte-c0n7a9{border-radius:100%;animation-fill-mode:both;position:absolute;opacity:0;width:var(--size);height:var(--size);background-color:var(--color);animation:svelte-c0n7a9-bounce var(--duration) linear infinite}.pause-animation.svelte-c0n7a9{animation-play-state:paused}@keyframes svelte-c0n7a9-bounce{0%{opacity:0;transform:scale(0)}5%{opacity:1}100%{opacity:0;transform:scale(1)}}",
  map: null
};
const Jumper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "#FF3E00" } = $$props;
  let { unit = "px" } = $$props;
  let { duration = "1s" } = $$props;
  let { size = "60" } = $$props;
  let { pause = false } = $$props;
  let durationUnit = duration.match(durationUnitRegex)?.[0] ?? "s";
  let durationNum = duration.replace(durationUnitRegex, "");
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.pause === void 0 && $$bindings.pause && pause !== void 0)
    $$bindings.pause(pause);
  $$result.css.add(css);
  return `<div class="wrapper svelte-c0n7a9" style="${"--size: " + escape(size, true) + escape(unit, true) + "; --color: " + escape(color, true) + "; --duration: " + escape(duration, true) + ";"}">${each(range(3, 1), (version) => {
    return `<div class="${["circle svelte-c0n7a9", pause ? "pause-animation" : ""].join(" ").trim()}" style="${"animation-delay: " + escape(+durationNum / 3 * (version - 1) + durationUnit, true) + ";"}"></div>`;
  })}
</div>`;
});
export {
  Jumper as J
};
