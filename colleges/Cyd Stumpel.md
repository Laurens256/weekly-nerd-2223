# Accessible, Creative Development
Cyd Stumpel - March 2023

Website accessibility is a critical consideration for web developers to ensure that everyone, regardless of their abilities, can access and use websites. Unfortunately, many award-winning websites are still inaccessible.

In this lecture, Cyd Stumpel, creative freelance developer, discussed the importance of website accessibility and how to make websites accessible. She will also discuss common mistakes that developers and designers make when creating websites and how to avoid them.

## Common mistakes
Some common mistakes that contribute to inaccessibility include hiding focus states, using excessive moving text, badly formatted HTML and not respecting `prefers-reduced-motion` and similar media queries. All of these mistakes can lead to a less pleasurable experience for users, especially those with disabilities.

## Smooth scroll libraries
Something that lots of "creative" websites do is remove the native scroll functionality and replace it with the scrolling functionality of a smooth scroll library. This is often done to create a more stylistic experience for users. However, these scroll libraries often disrupt the native functionality of the browser, which can make it more difficult to interact with the website. An example Cyd mentioned is the "find" function (`ctrl / cmd` + `f`) which most browsers have. This function allows users to search for a specific word on the page. When native scroll is enabled, when a keyword is found on the page, the browser scroll down to the keyword automatically. When native scroll is disabled however, the browser is not able to scroll down to the keyword. This leads to the user seeing not being able to jump to a keyword by searching for it. 

A (more) valid alternative to common scrolling libraries, is [Lenis](https://lenis.studiofreight.com/). Lenis is a scrolling library which allows the developer to control the scrolling experience more freely while still keeping most functionality provided by native scroll. 

## Final words
To make a website accessible, developers should rethink their defaults. They should consider and when possible, not interfere the native functionality the browser provides. By taking these steps, developers can create websites that are accessible to everyone, regardless of their abilities.
