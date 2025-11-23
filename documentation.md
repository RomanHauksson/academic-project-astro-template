# Documentation

If you discover any bugs, imperfections, or features you'd like from this template, I would super-duper appreciate it if you [filed an issue](https://github.com/RomanHauksson/academic-project-astro-template/issues/new), even if you eventually figure it out yourself. You can even book a call with me using [my meeting scheduler](https://cal.com/romanhauksson/meeting), during which I can help you debug something or give you a tour of the repository.

## Working with AI tools

If you're a student or researcher at an educational institution, [you can get free access to GitHub Copilot Pro](https://docs.github.com/en/copilot/how-tos/manage-your-account/get-free-access-to-copilot-pro).

To get a quick draft started, try copying the TeX source of your paper into some subdirectory and asking Copilot to turn it into a project page. Here's an example of a prompt you could use:

```
Use the website template in this directory to make a project page for my research paper. You can find the TeX source of the paper in `/<directory>/`. Copy the abstract verbatim, but the rest of the project page should be a summary to show off my key results and figures. Use bullet points sparingly. Copy any images you use for the page into `/src/assets/`. At the end, give me a few suggestions for figures I could make that were not in the TeX source or interactive elements I could add to the page.
```

I've already generated an outline of the repository for GitHub Copilot in `/.github/copilot-instructions.md`, configured an MCP server to give it access to Astro's documentation in `/.vscode/mcp.json`, and configured [ESLint](https://eslint.org/) to catch simple errors quickly. None of these should need any further configuration on your part, and they'll help Copilot perform better.

For more guidance on using AI tools with this repository, see [Astro's guide](https://docs.astro.build/en/guides/build-with-ai/).

## Videos

By default, videos displayed using the `Video` component will be muted and play automatically. To display a video that contains audio, I recommend the following settings:

```mdx
<Video src={...} muted={false} autoplay={false} playsinline={false} />
```

Note that `autoplay` is set to false – autoplaying a video with audio is bad form, and most modern browsers won't even let you do it anyway. `playsinline` is also set to false, so when the user begins playing the video on mobile, it will go fullscreen.

You can disable the controls to make your video appear like a GIF would. Do this instead of literally using a GIF; it's much more performant.

```mdx
<Video src={...} controls={false} />
```

For longer videos, you probably want to use a hosted video service, like YouTube:

```mdx
<YouTubeVideo videoId="..." />
```

(Or [Mux](https://docs.astro.build/en/guides/media/mux/), if you're feeling fancy or want more control.)

## Fonts

[The original Nerfies project page](https://nerfies.github.io/) uses the Google Sans font, which is technically [licensed by Google and unavailable for public use](https://developers.google.com/fonts/faq#can_i_use_the_product_sans_or_google_sans_fonts). Instead, I choose to use [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans), which looks similar, supports a wide range of glyphs, and is a [variable font](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide) (so it loads faster).

If you want to use a different font, consult the docs on [Astro's experimental Fonts API](https://docs.astro.build/en/reference/experimental-flags/fonts/). You'll have to edit the following lines. If you're using a [Google Font](https://fonts.google.com/), it's simple as editing the font name.

In `/astro.config.ts`:

```ts
experimental: {
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Noto Sans",
      cssVariable: "--font-noto-sans",
      weights: ["100 900"],
    },
  ];
}
```

In `/src/pages/index.astro`:

```astro
<Font cssVariable="--font-noto-sans" preload />

...

<body class="...font-(family-name:--font-noto-sans)..."></body>
```

## Icons

This template uses the [Astro Icon](https://www.astroicon.dev/) library for the icons in the buttons in the header.

To use a custom icon:

1. Search on [Iconify](https://icon-sets.iconify.design/) to find the icon you want. For example, the Hugging Face icon is `simple-icons:huggingface`, from the Simple Icons icon set.
1. Install the corresponding icon set: `npm install @iconify-json/simple-icons`.
1. If you're using the icon in one of the link buttons, put the icon name in the value of the `icon` key, like this:

```yaml
- name: Hugging Face
  url: https://huggingface.co/
  icon: simple-icons:huggingface
```

Or, to use it anywhere in an Astro component or MDX file:

```mdx
import { Icon } from "astro-icon/components";

<Icon name={"simple-icons:huggingface"} />
```
