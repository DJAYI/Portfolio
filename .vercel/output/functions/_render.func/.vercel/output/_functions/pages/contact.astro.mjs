/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderSlot, b as createAstro, d as renderComponent } from '../chunks/astro/server_Ch05GP6F.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_twOuC3-I.mjs';
import nodemailer from 'nodemailer';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$LinkIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LinkIcon;
  const { link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a class="p-3 transition border rounded-lg border-white/50 hover:bg-white/20"${addAttribute(link, "href")}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/components/LinkIcon.astro", void 0);

const $$GitHubIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 250" width="32" height="32" fill="#fff" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"> <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"></path> </svg>`;
}, "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/Icons/GitHubIcon.astro", void 0);

const $$GmailIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 49.4 512 399.42" width="32" height="32"> <g fill="none" fill-rule="evenodd"> <g fill-rule="nonzero"> <path fill="#4285f4" d="M34.91 448.818h81.454V251L0 163.727V413.91c0 19.287 15.622 34.91 34.91 34.91z"></path> <path fill="#34a853" d="M395.636 448.818h81.455c19.287 0 34.909-15.622 34.909-34.909V163.727L395.636 251z"></path> <path fill="#fbbc04" d="M395.636 99.727V251L512 163.727v-46.545c0-43.142-49.25-67.782-83.782-41.891z"></path> </g> <path fill="#ea4335" d="M116.364 251V99.727L256 204.455 395.636 99.727V251L256 355.727z"></path> <path fill="#c5221f" fill-rule="nonzero" d="M0 117.182v46.545L116.364 251V99.727L83.782 75.291C49.25 49.4 0 74.04 0 117.18z"></path> </g> </svg>`;
}, "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/Icons/GmailIcon.astro", void 0);

const $$LinkedinIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2"></path></svg>`;
}, "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/Icons/LinkedinIcon.astro", void 0);

const $$WhatsAppIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 256 259" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="m67.663 221.823 4.185 2.093c17.44 10.463 36.971 15.346 56.503 15.346 61.385 0 111.609-50.224 111.609-111.609 0-29.297-11.859-57.897-32.785-78.824-20.927-20.927-48.83-32.785-78.824-32.785-61.385 0-111.61 50.224-110.912 112.307 0 20.926 6.278 41.156 16.741 58.594l2.79 4.186-11.16 41.156 41.853-10.464Z" fill="#00000000"></path><path d="M219.033 37.668C195.316 13.254 162.531 0 129.048 0 57.898 0 .698 57.897 1.395 128.35c0 22.322 6.278 43.947 16.742 63.478L0 258.096l67.663-17.439c18.834 10.464 39.76 15.347 60.688 15.347 70.453 0 127.653-57.898 127.653-128.35 0-34.181-13.254-66.269-36.97-89.986ZM129.048 234.38c-18.834 0-37.668-4.882-53.712-14.648l-4.185-2.093-40.458 10.463 10.463-39.76-2.79-4.186C7.673 134.63 22.322 69.058 72.546 38.365c50.224-30.692 115.097-16.043 145.79 34.181 30.692 50.224 16.043 115.097-34.18 145.79-16.045 10.463-35.576 16.043-55.108 16.043Zm61.385-77.428-7.673-3.488s-11.16-4.883-18.136-8.371c-.698 0-1.395-.698-2.093-.698-2.093 0-3.488.698-4.883 1.396 0 0-.697.697-10.463 11.858-.698 1.395-2.093 2.093-3.488 2.093h-.698c-.697 0-2.092-.698-2.79-1.395l-3.488-1.395c-7.673-3.488-14.648-7.674-20.229-13.254-1.395-1.395-3.488-2.79-4.883-4.185-4.883-4.883-9.766-10.464-13.253-16.742l-.698-1.395c-.697-.698-.697-1.395-1.395-2.79 0-1.395 0-2.79.698-3.488 0 0 2.79-3.488 4.882-5.58 1.396-1.396 2.093-3.488 3.488-4.883 1.395-2.093 2.093-4.883 1.395-6.976-.697-3.488-9.068-22.322-11.16-26.507-1.396-2.093-2.79-2.79-4.883-3.488H83.01c-1.396 0-2.79.698-4.186.698l-.698.697c-1.395.698-2.79 2.093-4.185 2.79-1.395 1.396-2.093 2.79-3.488 4.186-4.883 6.278-7.673 13.951-7.673 21.624 0 5.58 1.395 11.161 3.488 16.044l.698 2.093c6.278 13.253 14.648 25.112 25.81 35.575l2.79 2.79c2.092 2.093 4.185 3.488 5.58 5.58 14.649 12.557 31.39 21.625 50.224 26.508 2.093.697 4.883.697 6.976 1.395h6.975c3.488 0 7.673-1.395 10.464-2.79 2.092-1.395 3.487-1.395 4.882-2.79l1.396-1.396c1.395-1.395 2.79-2.092 4.185-3.487 1.395-1.395 2.79-2.79 3.488-4.186 1.395-2.79 2.092-6.278 2.79-9.765v-4.883s-.698-.698-2.093-1.395Z" fill="#00E676"></path></svg>`;
}, "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/Icons/WhatsAppIcon.astro", void 0);

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  if (Astro2.request.method === "POST") {
    try {
      const data = await Astro2.request.formData();
      const email = data.get("email");
      const subject = data.get("subject");
      const message = data.get("message");
      const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 25,
        secure: false,
        // Use `true` for port 465, `false` for all other ports
        auth: {
          user: "2ba6dd9316fddb",
          pass: "1ac4ef6c819e80"
        }
      });
      async function main() {
        const info = await transporter.sendMail({
          from: "<Sender> " + email.toString(),
          // sender address
          to: "danilo.arenasyi@gmail.com",
          // list of receivers
          subject: subject.toString(),
          // Subject line
          text: message.toString()
          // plain text body // html body
        });
        console.log("Message sent: %s", info.messageId);
      }
      main().catch(console.error);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "DAYI | Contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="max-w-[1400px] mx-auto"> <section class="grid grid-cols-1 py-3 my-2 text-center px-7 gap-7 place-items-center"> <span class="my-5 text-5xl text-transparent bg-gradient-to-r font-Bungee from-red-500 to-purple-400 bg-clip-text">
Contact Me
</span> <div class="flex flex-wrap items-center justify-center gap-4 px-11"> ${renderComponent($$result2, "LinkIcon", $$LinkIcon, { "link": "https://github.com/DJAYI" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "GitHubIcon", $$GitHubIcon, {})} ` })} ${renderComponent($$result2, "LinkIcon", $$LinkIcon, { "link": "https://mail.google.com/mail/?view=cm&fs=1&to=danilo.arenasyi@gmail.com" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "GmailIcon", $$GmailIcon, {})} ` })} ${renderComponent($$result2, "LinkIcon", $$LinkIcon, { "link": "https://www.linkedin.com/in/danilo-arenas-yi-b17058201/" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "LinkedinIcon", $$LinkedinIcon, {})} ` })} ${renderComponent($$result2, "LinkIcon", $$LinkIcon, { "link": "https://wa.me/573117837123" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "WhatsAppIcon", $$WhatsAppIcon, {})} ` })} </div> <div class="flex flex-wrap items-center justify-center w-full max-w-[600px] gap-3 mt-8 mb-4"> <hr class="flex-grow border border-white/30"> <span class="text-base font-semibold text-white/80">Contact me directly</span> <hr class="flex-grow border border-white/30"> </div> <form method="post" action="contact" class="flex flex-col w-full max-w-[600px] gap-5"> <span class="self-start px-2 font-semibold">Email & Subject</span> <label class="flex flex-col items-start w-full gap-4 sm:flex-row"> <input type="email" name="email" class="w-full px-4 py-2 transition border-2 rounded-lg outline-none sm:w-1/2 bg-black/20 border-slate-600/40 focus:border-indigo-600/60" placeholder="Enter your Email" required> <input type="text" name="subject" class="w-full px-4 py-2 transition border-2 rounded-lg outline-none sm:w-1/2 bg-black/20 border-slate-600/40 focus:border-indigo-600/60" placeholder="Enter your Subject" required> </label> <label class="flex flex-col items-start w-full gap-4"> <span class="px-2 font-semibold">Message</span> <textarea name="message" class="px-4 py-2 bg-black/20 rounded-lg h-[130px] w-full border-2 border-slate-600/40 transition focus:border-indigo-600/60 outline-none resize-none" placeholder="Enter your message" required></textarea> </label> <button class="self-end px-4 py-2 font-semibold transition border rounded-lg cursor-pointer hover:bg-white hover:text-black w-fit">Submit</button> </form> </section> </main> ` })}`;
}, "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/pages/contact.astro", void 0);

const $$file = "C:/Users/danil/Documents/Workspace/Otros/Portfolio/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
