import { c as createComponent, r as renderTemplate, a as addAttribute, b as createAstro, m as maybeRenderHead, d as renderComponent, f as renderHead, e as renderSlot } from './astro/server_Ch05GP6F.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                            */

const $$Astro$2 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/danil/Documents/Workspace/Otros/Portfolio/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const NAV_LINKS = [
    {
      id: 0,
      title: "Home",
      link: "/",
      icon: ""
    },
    {
      id: 1,
      title: "Projects",
      link: "/projects",
      icon: ""
    },
    {
      id: 2,
      title: "About me",
      link: "/about-me",
      icon: ""
    },
    {
      id: 3,
      title: "Contact",
      link: "/contact",
      icon: ""
    }
  ];
  return renderTemplate`${maybeRenderHead()}<header class="py-8"> <nav> <ul class="flex items-center justify-center gap-x-2"> <li></li> ${NAV_LINKS.map(({ title, link, icon }) => renderTemplate`<li> <a class="font-semibold px-3 py-2 hover:bg-slate-300 hover:text-black rounded-full transition-[200ms] text-center"${addAttribute(link, "href")}> <span${addAttribute(icon, "class")}></span> ${title} </a> </li>`)} </ul> </nav> </header>`;
}, "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/layouts/sections/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$LinkPill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LinkPill;
  const { name, link, color, background } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute(["px-4 py-2 rounded-lg border bg-transparent transition hover:scale-[103%]", [[color], [background]]], "class:list")}> <span> ${name} </span> </a>`;
}, "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/components/LinkPill.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="grid w-full p-5 mt-10 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 max-w-screen"> <div class="flex items-center justify-center gap-3 p-4"> <i>Contact me if you want my dev services!</i> </div> <div class="flex items-center justify-center gap-3 p-4"> ${renderComponent($$result, "LinkPill", $$LinkPill, { "name": "danilo.arenasyi@gmail.com", "link": "https://mail.google.com/mail/?view=cm&fs=1&to=danilo.arenasyi@gmail.com", "color": "border-red-500", "background": "hover:bg-red-600/30" })} ${renderComponent($$result, "LinkPill", $$LinkPill, { "name": "Linkedin", "link": "https://www.linkedin.com/in/danilo-arenas-yi-b17058201/", "color": "border-cyan-500", "background": "hover:bg-cyan-600/30" })} ${renderComponent($$result, "LinkPill", $$LinkPill, { "name": "GitHub", "link": "https://github.com/DJAYI", "color": "border-slate-700", "background": "hover:bg-slate-900/30" })} </div> </footer>`;
}, "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/layouts/sections/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="grid w-screen h-screen place-items-center"> <div class="w-full h-full bg-slate-950"> <div class="absolute bottom-0 left-[-10%] right-0 top-[10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-10%] top-[50%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(100,50,252,.15),rgba(255,255,255,0))]"></div> </div> ${renderComponent($$result, "Header", $$Header, {})} <div class="relative"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})}  </body> </html>`;
}, "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$LinkPill as a };
