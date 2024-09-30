/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Ch05GP6F.mjs';
import 'kleur/colors';
import { $ as $$LinkButton } from '../chunks/LinkButton_DSiXYRaa.mjs';
import { $ as $$Layout } from '../chunks/Layout_B1MIHLTh.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "DAYI | Portfolio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="grid items-center justify-center p-3 my-2 text-center gap-7"> <span class="my-5 text-5xl text-transparent bg-gradient-to-r font-Bungee from-indigo-500 to-red-400 bg-clip-text">Danilo Arenas Yi</span> <img loading="lazy" decoding="async" src="../../public/images/index-photo.webp" class="w-[300px] mx-auto rounded-lg border border-gray-700 p-3 bg-transparent hover:rotate-2 hover:scale-110 transition object-cover -rotate-6" alt="Danilo Arenas Yi photo"> <p class="w-[430px] mx-auto text-lg text-pretty">
Hey there! I'm Danilo Arenas Yi, a Junior Fullstack Developer. I'm your
        go-to partner for creating tech applications that fit your needs
        perfectly.
</p> ${renderComponent($$result2, "LinkButton", $$LinkButton, { "title": "Take a Look \u{1F449}", "link": "/projects" })} </section> </main> ` })}`;
}, "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
