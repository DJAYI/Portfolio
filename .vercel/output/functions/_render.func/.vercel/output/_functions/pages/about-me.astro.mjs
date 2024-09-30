/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as createAstro, d as renderComponent } from '../chunks/astro/server_Ch05GP6F.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_B1MIHLTh.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ExperienceItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ExperienceItem;
  const {
    enterprise_name,
    latest,
    date_released,
    desc_position,
    link_enterprise,
    duration
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="mb-10 ms-6"> <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-[13px] ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900"> <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"> <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"></path> </svg> </span> <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"> ${enterprise_name} ${latest && renderTemplate`<span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
Latest
</span>`} </h3> <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on ${date_released}</time> <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"> ${desc_position} </p> <span class="my-4 py-4 font-semibold block">Duration: ${duration}</span> ${link_enterprise?.length > 0 && renderTemplate`<a${addAttribute(link_enterprise, "href")} class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
View enterprise
</a>`} <br> </li>`;
}, "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/components/ExperienceItem.astro", void 0);

const EXPERIENCE_DATA = [
  {
    enterprise_name: 'Freelancer',
    latest: true,
    date_released: 'Actually',
    desc_position:
      'I have experience in both personal and business development projects, which has equipped me with the ability to work effectively in a team using clean practices for agile development. I excel in assertive communication and can easily adapt to any team’s workflow, ensuring collaboration and success in a dynamic environment.',
    link_enterprise: '',
    duration: '2 years'
  },
  {
    enterprise_name: 'Bolívar Government',
    latest: false,
    date_released: 'October 5th 2022',
    desc_position:
      'As a Software Development Intern, I assisted in gathering and organizing data from various sources, ensuring its quality and accuracy. I collaborated with development teams to create tools and applications that handle large volumes of data and participated in software testing to ensure proper data management. Additionally, I ensured that data handling complied with privacy and protection regulations, aligning the developed solutions with governance objectives and policies.',
    link_enterprise: 'https://www.bolivar.gov.co/web/',
    duration: '3 months'
  }
];

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "DAYI | About Me" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-[1400px] mx-auto mt-8 p-8 rounded-xl grid grid-cols-1 xl:grid-cols-[1fr_500px]"> <section class="flex flex-col p-4 mx-4 rounded"> <h2 class="mt-6 mb-10 text-3xl font-bold text-transparent bg-gradient-to-tr w-fit from-indigo-500 to-red-500 bg-clip-text font-Bungee">
About Me
</h2> <article class="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row"> <img class="object-cover mx-0 my-4 rounded-md lg:mx-6 aspect-square size-52 -rotate-6" src="images/about-photo.webp" alt=""> <p class="mx-0 text-lg lg:mx-6">
My full name is <span class="font-semibold text-orange-500">Danilo José Arenas Yi</span> 18 years old, born in Venezuela, and currently living in Cartagena de
          Indias.
<br> <br>
I am passionate about technology and development, committed to my personal
          and professional growth through new challenges and experiences that constantly
          push me to improve. I strongly believe in the importance of maintaining
          a self-driven approach, always seeking to acquire knowledge proactively.
<br> <br>
Furthermore, I adopt a critical and objective perspective when facing each
          challenge. If given the opportunity, I am dedicated to working with full
          commitment and effort, exceeding expectations and delivering far more than
          anticipated.
<br> <br> <a class="text-lg font-semibold text-indigo-600" href="CV.pdf">See my CV here! 👈</a> </p> </article> </section> <section class="flex flex-col items-center justify-center p-4 mx-4 rounded"> <h2 class="my-6 text-3xl font-bold text-transparent bg-gradient-to-tr w-fit from-indigo-500 to-green-500 bg-clip-text font-Bungee">
Experience
</h2> <article class="p-3 max-h-[500px] overflow-y-auto my-6 w-full"> <ol class="relative border-gray-200 border-s h-fit dark:border-gray-700"> ${EXPERIENCE_DATA.map((exp) => renderTemplate`${renderComponent($$result2, "ExperienceItem", $$ExperienceItem, { ...exp })}`)} </ol> </article> </section> </main> ` })}`;
}, "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/pages/about-me.astro", void 0);

const $$file = "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/pages/about-me.astro";
const $$url = "/about-me";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AboutMe,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
