## Sophie Koonin

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

