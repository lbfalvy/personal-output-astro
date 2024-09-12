import { pics } from '../../annaja-personal-output/src/data.mjs'
import fs from 'fs/promises'
for (const { title, size: [width, height], source, price } of pics) {
    const slug = source.match(/^\/images\/(?<slug>.*)\.jpg$/).groups['slug'];
    console.log(slug)
    const priceText = price ? `price: ${price}\n` : '';
    await fs.writeFile(`./src/content/pics/${slug}.mdx`, `---
title: ${title}
width: ${width}
height: ${height}
${priceText}---
import src from './${slug}.jpg'
import PicImg from '../../components/PicImg.astro'

<PicImg src={src} slug='${slug}' />
`);
}
