/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent } from '../chunks/astro/server_Ch05GP6F.mjs';
import 'kleur/colors';
import { a as $$LinkPill, $ as $$Layout } from '../chunks/Layout_twOuC3-I.mjs';
import 'clsx';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$Pill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Pill;
  const { name } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span${addAttribute(`Pill px-3 py-2 text-sm font-light border border-transparent rounded-2xl`, "class")} data-astro-cid-2qeywk4b> <span data-astro-cid-2qeywk4b> ${name} </span> </span> `;
}, "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/components/Pill.astro", void 0);

const $$Astro = createAstro();
const $$CardProject = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardProject;
  const { id, title, desc, skills, link, repository, imgUrl, date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="p-4 card col-span-1 h-fit border border-slate-500/20 rounded-xl" data-astro-cid-3qibyvd4> ${link?.toString().length > 0 ? renderTemplate`<a${addAttribute(link, "href")} class="relative w-full" data-astro-cid-3qibyvd4> <span class="absolute w-full py-2 text-xl font-semibold text-center text-white -z-10 top-1/3" data-astro-cid-3qibyvd4>
Take a Look
</span> <img${addAttribute(imgUrl, "src")} class="z-10 object-cover transition rounded-lg aspect-video hover:scale-110 hover:opacity-30 hover:blur-sm hover:-z-20" alt="Project image" data-astro-cid-3qibyvd4> </a>` : renderTemplate`<div class="relative w-full" data-astro-cid-3qibyvd4> <span class="absolute w-full py-2 text-xl font-semibold text-center text-white -z-10 top-1/3" data-astro-cid-3qibyvd4>
Link not available
</span> <img${addAttribute(imgUrl, "src")} class="z-10 object-cover transition rounded-lg aspect-video hover:scale-110 hover:opacity-30 hover:blur-sm hover:-z-20" alt="Project image" data-astro-cid-3qibyvd4> </div>`} <h5 class="my-5 text-lg font-semibold" data-astro-cid-3qibyvd4>${title}</h5> <p class="text-base font-light text-pretty opacity-80" data-astro-cid-3qibyvd4> ${desc} </p> <div class="flex flex-wrap gap-3 mt-5" data-astro-cid-3qibyvd4> ${skills.map((element) => renderTemplate`${renderComponent($$result, "Pill", $$Pill, { "name": element, "data-astro-cid-3qibyvd4": true })}`)} </div> <div class="flex flex-col items-start justify-center mt-8 gap-y-3" data-astro-cid-3qibyvd4> ${renderComponent($$result, "LinkPill", $$LinkPill, { "name": "View repository", "link": repository, "color": "border-slate-600", "background": "hover:bg-slate-500/30", "data-astro-cid-3qibyvd4": true })} <span class="text-base font-light ms-auto text-slate-500" data-astro-cid-3qibyvd4> ${date} </span> </div> </div> `;
}, "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/components/CardProject.astro", void 0);

const PROJECTS_DATA = [
  {
    id: 0,
    title: 'Reto Trainee Fullstack',
    desc: 'A full-stack challenge project showcasing proficiency in JavaScript. This repository demonstrates skills in both front-end and back-end development, providing practical solutions and best practices for handling various web applications.',
    skills: ['JavaScript', 'Full-stack development', 'Agile methodologies', 'API integration'],
    link: '',
    repository: 'https://github.com/DJAYI/RetoTraineeFullstack',
    imgUrl:
      'https://images.unsplash.com/photo-1720999127413-dd922893f04a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'January 21, 2024'
  },
  {
    id: 1,
    title: 'Inventory Prototype',
    desc: 'An innovative Java application prototype designed for inventory management. This project focuses on efficient data handling and user interface design, offering a robust solution for tracking inventory items and streamlining processes.',
    skills: ['Java', 'Object-oriented programming (OOP)', 'User interface (UI) design', 'Data management'],
    link: '',
    repository: 'https://github.com/DJAYI/Inventory-Prototype',
    imgUrl:
      'https://images.unsplash.com/photo-1720999127413-dd922893f04a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'February 28, 2024'
  },
  {
    id: 2,
    title: 'Gaia Inventory University Project',
    desc: 'A classroom project developed in collaboration with Fundación Tecnológico Comfenalco, aimed at creating an inventory management system. This repository includes documentation and resources related to the project, showcasing teamwork and application development.',
    skills: ['Collaboration tools', 'Project management', 'Application development', 'Documentation skills'],
    link: '',
    repository: 'https://github.com/DJAYI/DJAYI-Gaia-Inventory-PA',
    imgUrl:
      'https://images.unsplash.com/photo-1720999127413-dd922893f04a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'October 22, 2023'
  },
  {
    id: 3,
    title: 'FakeStore API React Practice',
    desc: 'A practice project utilizing React to interact with a Fake Store API. This repository demonstrates the ability to build responsive web applications and handle API data effectively, making it a valuable resource for practicing front-end development skills.',
    skills: ['React', 'API consumption', 'Front-end development', 'State management'],
    link: '',
    repository: 'https://github.com/DJAYI/FakeStore-API-First-React-Practice',
    imgUrl:
      'https://images.unsplash.com/photo-1720999127413-dd922893f04a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'January 11, 2024'
  },
  {
    id: 4,
    title: 'Portfolio',
    desc: 'A personal portfolio built using Astro, highlighting key projects and experiences. This repository serves as a digital resume, allowing potential employers and collaborators to explore my work and skills in a visually appealing format.',
    skills: ['Web design', 'Astro framework', 'Responsive design', 'User experience (UX)'],
    link: '/',
    repository: 'https://github.com/DJAYI/Portfolio',
    imgUrl:
      'https://images.unsplash.com/photo-1720999127413-dd922893f04a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    date: 'March 4, 2024'
  }
];

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "DAYI | Projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid max-w-6xl mt-10 mx-auto p-8 rounded-xl"> <main class="col-span-1 p-4"> <h3 class="text-3xl font-bold text-transparent font-Bungee bg-gradient-to-tr from-red-600 to-orange-500 bg-clip-text mb-4 t w-fit">
Projects
</h3> <section class="my-4 py-4 pe-4 overflow-y-auto scroll-smooth
        max-h-[600px] gap-4 grid md:grid-cols-3 sm:grid-cols-1"> ${PROJECTS_DATA.map((project) => renderTemplate`${renderComponent($$result2, "CardProject", $$CardProject, { ...project })}`)} </section> </main> </div> ` })}`;
}, "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/pages/projects.astro", void 0);

const $$file = "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
