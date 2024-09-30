/* empty css                                    */
import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Ch05GP6F.mjs';
import 'kleur/colors';
import { $ as $$LinkButton } from '../chunks/LinkButton_DSiXYRaa.mjs';
import { $ as $$Layout } from '../chunks/Layout_B1MIHLTh.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="grid h-[80vh] justify-center items-center"> <div class="max-w-[800px] text-center"> <span class="text-5xl font-bold">404 Page Not Found</span> <p class="my-4">
Theres an error, the page required wasn't found, please back to home
        page
</p> <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHN6dXFleWU4eHl6ajN1ZzR3amZtMmNnZzR1OG5haWVmM3JlNGFoNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lNMyVfxjfzIJO/200.webp" alt="" class="w-full my-10"> ${renderComponent($$result2, "LinkButton", $$LinkButton, { "title": "Back to home", "link": "/" })} </div> </main> ` })}`;
}, "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/pages/404.astro", void 0);

const $$file = "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
