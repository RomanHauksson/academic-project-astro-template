# Research project page template

This is a template you can use to build a project page for your research paper, adapted from the original [Nerfies page](https://nerfies.github.io/). It's designed to be easy to set up for those without web development experience, but web developers will appreciate that it's flexible and built with modern, familiar technologies. See a live demo of the template [here](https://research-template.roman.technology).

<img src="public/screenshot-light.png" width="48%" /> <img src = "public/screenshot-dark.png" width="48%" />

## Usage

Want help setting it up? Please schedule a call with me [here](https://cal.com/romanhauksson/meeting), and I'll personally walk you through making your project page live! I want to talk to potential users to figure out pain points and features to add.

1. Click ["Use this template"](https://github.com/new?template_name=academic-project-astro-template&template_owner=RomanHauksson) to make a copy of this repository in your GitHub account. Alternatively, you can click one of the buttons below to quickly begin deploying a copy with Vercel or Netlify. To use GitHub Pages instead (recommended), see step 7.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FRomanHauksson%2Facademic-project-astro-template) [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/romanhauksson/academic-project-astro-template)

2. Clone your repository.
3. [Install Node.js](https://nodejs.org/en/download/package-manager) if you haven't already. Make sure you're using version 24 or later, which you can check by running:

```bash
node --version
```

If your Node version is less than 24, you can use [Node Version Manager](https://github.com/nvm-sh/nvm) to install version 24 and switch to it:

```bash
nvm install 24 && nvm use 24
```

6. In the root directory of your cloned repository, install the dependencies:

```bash
npm install
```

7. Start the development server:

```bash
npm run dev
```

While the development server is running, you can open `http://localhost:4321` in your browser to see a live preview of your page.

8. Edit the content in `/src/pages/index.mdx`. You should use [Visual Studio Code](https://code.visualstudio.com/) – or one of its forks, like [Cursor](https://cursor.com/) – so you can take advantage of the extensions I recommend in `.vscode/extensions.json`. Every time you save a file, the development server will automatically reload and display the updated version of the page.

9. To deploy your site to the web, you need to enable GitHub Pages for the GitHub repository. Click on the **Settings** tab, then go to **Pages** (under the **Code and automation** section). Using the dropdown, change **Source** from "Deploy from a branch" to "GitHub Actions".
10. Whenever you push to the `main` branch, the GitHub Actions workflow in `.github/workflows/astro.yml` will automatically build and deploy your site to `https://<username>.github.io/<repository>/`. No other configuration is necessary!

For more documentation, consult [`./documentation.md`](./documentation.md).

## Features

- Easily edit the content using Markdown syntax instead of HTML.
- Quick-to-load, works with mobile devices, accessible, SEO-friendly, and supports dark mode.
- Includes out-of-the-box components for figures, LaTeX, code blocks (with syntax highlighting), videos, 3D objects, and a figure comparison slider.
- Add custom components using HTML or even other web frameworks like React, Vue, or Svelte.
- Built with [Astro](https://astro.build/), [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [MDX](https://mdxjs.com/), and [TypeScript](https://www.typescriptlang.org/).

## Real-world examples

- [Token-Efficient Long Video Understanding for Multimodal LLMs](https://research.nvidia.com/labs/lpr/storm/) (NVIDIA Research)
- [RoboSpatial: Teaching Spatial Understanding to 2D and 3D Vision-Language Models for Robotics](https://chanh.ee/RoboSpatial/) (NVIDIA Research, CVPR 2025 Oral)
- [PolyPose: Deformable 2D/3D Registration via Polyrigid Transforms](https://polypose.csail.mit.edu/) (MIT CSAIL)
- [Lossy Compression With Pretrained Diffusion Models](https://jeremyiv.github.io/diffc-project-page/) (ICLR 2025)
- [ByteWrist: A Parallel Robotic Wrist Enabling Flexible and Anthropomorphic Motion for Confined Spaces](https://bytewrist.github.io/) (ByteDance Seed)
- [CLIP-RT: Learning Language-Conditioned Robotic Policies from Natural Language Supervision](https://clip-rt.github.io/)
- [StochSync: Stochastic Diffusion Synchronization for Image Generation in Arbitrary Spaces](https://stochsync.github.io/)
- [CRESSim: Simulator for Advancing Surgical Autonomy](https://tbs-ualberta.github.io/CRESSim/)
- [PCO: Precision-Controllable Offset Surfaces with Sharp Features](https://alan-leo-wong.github.io/SIGASIA24-PCO-ProjectPage/)

## Alternative templates

- [Clarity: A Minimalist Website Template for AI Research](https://shikun.io/projects/clarity) by Shikun Liu. Beautiful and careful design that's distinct from the original Nerfies page. Editable via an HTML template and Sass.
- [Academic Project Page Template](https://denkiwakame.github.io/academic-project-template/) by Mai Nishimura. Built with React and UIKit and editable with Markdown in a YAML file.

## Credits

This template was adapted from Eliahu Horwitz's [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template), which was adapted from Keunhong Park's [project page for _Nerfies_](https://nerfies.github.io/). It's licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
