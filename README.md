# Research project page template

This is a template you can use to build a project page for your research paper, adapted from the original [Nerfies page](https://nerfies.github.io/). It's designed to be easy to set up for those without web development experience, but web developers will appreciate that it's flexible and built with modern, familiar technologies. See a live demo of the template [here](https://research-template.roman.technology).

![](./public/screenshot.png)

## Features

- Easily edit the content in Markdown instead of HTML.
- Quick-to-load, responsive, accessible, and SEO-friendly.
- Includes out-of-the-box components for the header, figures, LaTeX equations, two-column layouts, code blocks (with syntax highlighting), small caps, videos, and YouTube embeds.
- Add custom components using HTML or even other web frameworks like React, Vue, or Svelte.
- Built with [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), [MDX](https://mdxjs.com/), and [Typescript](https://www.typescriptlang.org/).

## Real-world examples

- [CLIP-RT: Learning Language-Conditioned Robotic Policies from Natural Language Supervision](https://clip-rt.github.io/)
- [StochSync: Stochastic Diffusion Synchronization for Image Generation in Arbitrary Spaces](https://stochsync.github.io/)
- [CRESSim: Simulator for Advancing Surgical Autonomy](https://tbs-ualberta.github.io/CRESSim/)
- [PCO: Precision-Controllable Offset Surfaces with Sharp Features](https://alan-leo-wong.github.io/SIGASIA24-PCO-ProjectPage/)

## Usage

Need help setting it up? Please schedule a call with me [here](https://cal.com/romanhauksson/meeting), and I'll personally walk you through making your project page live! I want to talk to potential users to figure out pain points and features to add.

1. [Install Node.js](https://nodejs.org/en/download/package-manager).
1. Click "Use this template" to make a copy of this repository and then clone it, or just clone it directly.
1. Run `npm install` from the root of the project to install dependencies.
1. Edit the content in `/src/pages/index.mdx`, and remember to update the favicon at `/public/favicon.svg` and the social link thumbnail (optional) at `/public/thumbnail.png`.
1. Run `npm run dev` to see a live preview of your page while you edit it.
1. Host the website using [GitHub Pages](https://pages.github.com/), [Vercel](https://vercel.com), [Netlify](https://www.netlify.com/), or any other static site hosting service.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/romanhauksson/academic-project-astro-template) [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRomanHauksson%2Facademic-project-astro-template)

## Notes

- If you're using VS Code, I recommend installing the [Astro extension](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) to get IntelliSense, syntax highlighting, and other features.
- When people share the link to your project on social media, it will often appear as a "link preview" based on the title, description, thumbnail, and favicon you configured. Double check that these previews look right using [this tool](https://linkpreview.xyz/).
- The Nerfies page uses the Google Sans font, which is licensed by Google, so unfortunately, I had to change it to a different font instead (I picked Noto Sans).

## Credits

This template was adapted from Eliahu Horwitz's [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template), which was adapted from Keunhong Park's [project page for _Nerfies_](https://nerfies.github.io/). It's licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
