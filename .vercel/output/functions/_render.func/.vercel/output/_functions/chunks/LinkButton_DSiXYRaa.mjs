import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro } from './astro/server_Ch05GP6F.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$LinkButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$LinkButton;
  const title = Astro2.props.title;
  const link = Astro2.props.link;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="py-2 px-4 font-semibold w-fit mx-auto hover:bg-slate-800 mt-4 bg-black transition rounded-full">${title}</a>`;
}, "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/components/LinkButton.astro", void 0);

export { $$LinkButton as $ };
