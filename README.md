# Research project page template

This is a template to help you build a professional project page for your research paper, based on the design from the original [Nerfies page](https://nerfies.github.io/). Instead of manually editing an HTML file, you can author the page's content in Markdown and make use of a polished set of components, then deploy it with GitHub Pages. [See a live demo of the template](https://research-template.roman.technology).

<img src="public/screenshot-light.png" width="48%" alt="Screenshot of this template in light mode" /> <img src = "public/screenshot-dark.png" width="48%" alt="Screenshot of this template in dark mode"/>

## Features

- Pre-built components for LaTeX, figures, tables, code blocks (with syntax highlighting), videos, YouTube embeds, 3D objects, comparison sliders, carousels, tabbed slides, and pairs of columns.
- Optional dark mode :)
- Automatically converts figures stored as PDF files into images.
- Compresses images using [AVIF](https://en.wikipedia.org/wiki/AVIF) and uses [responsive images](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Responsive_images) to minimize loading time.
- Optimized font rendering, with [resized fallback font faces](https://developer.chrome.com/blog/font-fallbacks) to prevent cumulative layout shift.
- Responsive, accessible, and SEO-optimized.
- Add your own components with HTML or any Javascript framework you like. React comes pre-configured, but you could also use Vue, Svelte, etc.
- Built with [Astro](https://astro.build/), [React](https://react.dev/), [Tailwind](https://tailwindcss.com/), [MDX](https://mdxjs.com/), and [TypeScript](https://www.typescriptlang.org/).

## Examples

- [Token-Efficient Long Video Understanding for Multimodal LLMs](https://research.nvidia.com/labs/lpr/storm/) (NVIDIA Research)
- [PolyPose: Deformable 2D/3D Registration via Polyrigid Transforms](https://polypose.csail.mit.edu/) (MIT CSAIL)
- [ByteWrist: A Parallel Robotic Wrist Enabling Flexible and Anthropomorphic Motion for Confined Spaces](https://bytewrist.github.io/) (ByteDance Seed)
- [Dexterous Teleoperation of 20-DoF ByteDexter Hand via Human Motion Retargeting](https://byte-dexter.github.io/) (ByteDance Seed)
- [Conformal Prediction as Bayesian Quadrature](https://jakesnell.com/projects/conformal-as-bayes-quad/)
- [Lossy Compression With Pretrained Diffusion Models](https://jeremyiv.github.io/diffc-project-page/)
- [RoboSpatial: Teaching Spatial Understanding to 2D and 3D Vision-Language Models for Robotics](https://chanh.ee/RoboSpatial/)
- [CLIP-RT: Learning Language-Conditioned Robotic Policies from Natural Language Supervision](https://clip-rt.github.io/)
- [PCO: Precision-Controllable Offset Surfaces with Sharp Features](https://alan-leo-wong.github.io/SIGASIA24-PCO-ProjectPage/)
- [SCUBA: Salesforce Computer Use Benchmark](https://sfrcua.github.io/SCUBA/)

## Usage

1. Click ["Use this template"](https://github.com/new?template_name=academic-project-astro-template&template_owner=RomanHauksson) to make a copy of this repository in your GitHub account.
2. Enable GitHub Pages for the repository. Click on the **Settings** tab, then go to **Pages** (under the **Code and automation** section). Using the dropdown, change **Source** from "Deploy from a branch" to "GitHub Actions".

At this point, whenever you push to the `main` branch, the GitHub Actions workflow in `.github/workflows/astro.yml` will automatically build a static website and deploy it to `https://<username>.github.io/<repository>/`. No other configuration is necessary!

To edit the content, you _could_ simply edit [`./src/paper.mdx`](./src/paper.mdx) in your browser in the GitHub interface, without downloading or setting anything else up. But if you want to preview your changes faster, I recommend editing it locally:

3. Clone the repository.

4. [Install Node.js](https://nodejs.org/en/download/) if you haven't already. Make sure you're using version 24 or later, which you can check by running

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

8. Edit the content in [`./src/paper.mdx`](./src/paper.mdx). You should use [Visual Studio Code](https://code.visualstudio.com/) – or one of its forks, like [Cursor](https://cursor.com/) – so you can take advantage of the extensions I recommend in [`./.vscode/extensions.json`](./.vscode/extensions.json). Every time you save a file, the development server will automatically reload and display the updated version of the page.

9. Push your changes to the remote repository to trigger a new deployment with your changes.

Alternatively, you can build the site locally. Running the following command will create a static website stored in `./dist/`.

```bash
npm run build
```

For more information, consult [`./documentation.md`](./documentation.md).

I'd like to speak directly with users to learn about what they want and get feedback on the template. If you're interested in me helping you build your project page with you (for free), you can [email me](mailto:roman.i0djm@aleeas.com) or [schedule a virtual intro meeting](https://cal.com/romanhauksson/meeting).

## Alternative template

For a different look, the other template I'd recommend is [_Clarity: A Minimalist Website Template for AI Research_](https://shikun.io/projects/clarity) by Shikun Liu. It has a beautiful and careful design that's distinct from the original Nerfies page. It's simply an HTML file styled with Sass.

## Credits

This template was originally adapted from Eliahu Horwitz's [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template), which was adapted from Keunhong Park's [project page for _Nerfies_](https://nerfies.github.io/). It's licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).
