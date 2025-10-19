# Documentation

If you discover into any bugs, imperfections, or features you'd like from this template, I would super duper appreciate it if you [filed an issue](https://github.com/RomanHauksson/academic-project-astro-template/issues/new), even if you eventually figure it out yourself. You can even book a call with me using [my meeting scheduler](https://cal.com/romanhauksson/meeting), during which I can help you debug something or give you a tour of the repository.

## Font

[The original Nerfies project page](https://nerfies.github.io/) uses the Google Sans font, which is technically [licensed by Google and unavailable for public use](https://developers.google.com/fonts/faq#can_i_use_the_product_sans_or_google_sans_fonts). Instead, I choose to use [Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans), which looks similar, supports a wide range of glyphs, and is a [variable font](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide).

If you want to use a different font, consult the docs on [Astro's experimental Fonts API](https://docs.astro.build/en/reference/experimental-flags/fonts/). You'll have to edit the following three files:

`/astro.config.ts`:

```mjs
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

`/src/layouts/Layout.astro`:

```astro
<Font cssVariable="--font-noto-sans" preload />
```

`/src/styles/global.css`:

```css
@theme inline {
  --font-sans: var(--font-noto-sans);
  ...
}
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
