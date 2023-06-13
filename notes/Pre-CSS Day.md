<!-- ## Sophie Koonin

Sophie is a web engineering lead at Monzo https://localghost.dev https://sophie.omg.lol

### Let's bring back the weird

Sophie would like to bring back the weird, funny website styles from the 1999's. She showed us a website she built in the 1999's style, built using modern and accessible HTML, css and Javascript. 

Disable animations and autoplay if users have a preference for that. Use media queries such as prefers-reduced-motion. Use HTML source attribute with the preferes reduced motion media query to load static versions of gifs / videos.

1999's style wordart using modern css. Text cannot be given a gradient fill, use `background-clip: text;` instead and make the text transparent. On the wrapper, add a adrop shadow to simulate a 3d effect.

Music used to be autoplayed when you landed on a webpage. Some browsers nowadays completely block autoplay. It's still important to make audio opt-in only. So no autoplay

Webrings were used to link websites together. Sophia built a webring for silly / funny websites. The webring is built onto google sheets. The webring is a list of websites, each website has a link to the next website in the list. The last website in the list links back to the first website in the list.

Guestbooks were used to leave a message on a website. Sophia built a guestbook using mastodon. Mastodon is a federated social network. It's like twitter, but you can host your own instance. Mastodon has an API, unlike Twitter :(.

## Adam Argyle

CSS variable fonts. Variable fonts are a single font file that contains multiple variations of a font. You can use CSS to change the font weight, width, slant, morphing, etc.

LCH is a color model that is more accurate than RGB. LCH is based on how humans perceive color. L is lightness, C is chroma and H is hue.

https://gradient.style

## Debugging with DevTools

The debugger is a tool that sits between the browser internals and your web app. It ccan help you debug HTML, CSS, Javascript, network requests and much more. 

Tooling should have good UX as well. Not only should it expose information, it should expose it in a way that's easy to understand.

CSS authoring hints. When hovering over a style that's inactive, it will show a hint that tells you why it's inactive. For example, if you have a style that's overridden by another style, it will show a hint that tells you that it's overridden by another style. Another example: place-self: center; is inactive because the parent element is not a grid or flex container. When hovering over selectors in devtools, it will show the specificty of the selector.

CSS features are rolling out very quickly, devtool developers are trying to keep up.

Some new features in devtools:
- Color debugging / conversion
- Animation timing
- Container queries
- Scroll driven animations
 -->

## Sophie Koonin

Sophie Koonin, a web engineering lead at Monzo, aims to revive the quirky and humorous website styles of the 2000s. She showcased a website she built using modern and accessible HTML, CSS, and JavaScript, while incorporating the aesthetics of the 2000s. 

Sophie emphasizes the importance of accommodating user preferences, such as disabling animations and autoplay, utilizing media queries like prefers-reduced-motion, and employing the HTML source attribute to load static versions of gifs/videos. In a demo, Sophie showed us how to create a 200s WordArt effect using modern CSS techniques she used the CSS `background-clip: text;` property and applyied a drop shadow to the wrapper for a simulated 3D effect.

Sophie also highlights the evolution of web practices, mentioning how audio autoplay is no longer favored and opting for audio to be "opt-in" only. She recalls the use of webrings to interlink websites and shares her creation of a webring for silly/funny websites, implemented through Google Sheets. Additionally, Sophie developed a guestbook using Mastodon, a federated social network, as an alternative to leaving messages on websites.


## Adam Argyle

Adam Argyle talked to us about CSS variable fonts, which contain multiple variations of a font within a single font file. By using CSS, developers can modify font attributes such as weight, width, slant, and morphing. Argyle also talks about the LCH color model, which provides a more accurate representation of human-perceived color compared to RGB. LCH stands for lightness (L), chroma (C), and hue (H). To create a palette / color in this style, Adam showed us this website he made https://gradient.style

## Debugging with DevTools

Browser devtools is a tool that assists developers in troubleshooting various aspects of web development, including HTML, CSS, JavaScript and network requests. The Chrome (?) devtools team has been working hard to ensure that the tooling provides a good user experience, not just by exposing information but also by presenting it in an easily understandable manner. 

DevTools offers CSS authoring hints, displaying reasons for inactive styles or selectors and indicating specificity. The rapid pace of CSS feature development requires DevTool developers to keep up. Some new features in DevTools include color debugging/conversion, animation timing, container queries, and scroll-driven animations.