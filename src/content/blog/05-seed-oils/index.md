---
title: "Seed oils - poisonous snake oil"
description: "Processed food - easy diabetes"
date: "2024-03-16"
draft: false
---

## Criticisms of Seed Oils

### High Omega-6 Fatty Acids:

Seed oils are rich in omega-6 fatty acids, which, in excess, can promote inflammation in the body. The modern diet often contains an imbalance of omega-6 to omega-3 fatty acids, potentially contributing to chronic diseases such as heart disease and arthritis.
Processing and Refinement:

Many seed oils undergo extensive processing, including chemical extraction and high-heat treatments, which can strip the oil of nutrients and create harmful byproducts like trans fats. This processing can reduce the nutritional quality of the oil and introduce potentially harmful substances.

### Oxidation and Free Radicals:

Seed oils are prone to oxidation due to their polyunsaturated fat content. Oxidized oils can produce free radicals, which are linked to cellular damage, aging, and various chronic diseases.


## Potential Health Risks:

Some studies suggest a correlation between high consumption of seed oils and increased risks of certain health issues, such as obesity, liver problems, and insulin resistance. However, these findings are not universally accepted and often depend on 


Even today, refined industrial seed oils are used in practically every food product.

<Callout>
  <b>Let me tell you a little story.</b>
  Before my bypass surgery, I had gout. 
  I'd take open heart surgery over gout in pure pain.
 Could not figure out what it Wars
only later did I find out it was an apple fritter tri-fecta

</Callout>


MDX is an extension of Markdown with the ability to import `.astro`,
`.jsx`, `.tsx` and other framework components you have integrated.

This guide covers the basics of MDX syntax and how to use it, as well as a few examples.

## Example 1

Importing a component from the `/components` directory.

This component accepts a Javascript date object and format it as a string.

```astro
import DateComp from "../../../components/FormattedDate.astro";

<DateComp date={new Date()} />
```

import FormattedDate from "../../../components/FormattedDate.astro";

<FormattedDate date={new Date()} />

---

## Example 2

Importing a component from a relative path to your content.

This component displays an alert when the button is clicked.

```astro
import RelativeComponent from "./component.astro";

<RelativeComponent />
```

import RelativeComponent from "./component.astro";

<RelativeComponent />

---

By default Micro has zero frameworks installed. If you install a framework, components of that framework can be used in MDX files.

<Callout>
  Don't forget to use [client
  directives](https://docs.astro.build/en/reference/directives-reference/#client-directives)
  to make framework components interactive.
</Callout>

```astro
<ReactComponent client:load />
```

---

## More Links
- <a href="https://mdxjs.com/docs/what-is-mdx" target="_blank">MDX Syntax Documentation</a>
- [Astro Framework Integrations](https://docs.astro.build/en/guides/integrations-guide)
- [Astro Usage Documentation](https://docs.astro.build/en/guides/markdown-content/#markdown-and-mdx-pages)
- [Client Directives](https://docs.astro.build/en/reference/directives-reference/#client-directives)
