# Accessible, Creative Development
Cyd Stumpel March 2023

Website accessibility is a critical consideration for web developers to ensure that everyone, regardless of their abilities, can access and use websites. Unfortunately, many award-winning websites are still inaccessible.

In this lecture, Cyd Stumpel, (haar baan ofzo hier) discussed the importance of website accessibility and how to make websites accessible. She will also discuss common mistakes that developers and designers make when creating websites and how to avoid them.

## Common mistakes
Some common mistakes that contribute to inaccessibility include hiding focus states, using excessive moving text, badly formatted HTML code and not respecting prefers-reduced-motion and similar media queries. All of these mistakes can lead to a less pleasurable experience for users, especially those with disabilities.

## Smooth scroll libraries
Something that lots of "creative" websites do is remove the native scroll functionality and replace it with a smooth scroll library. This is often done to create a more stylistic experience for users. However, these scroll libraries often disrupt the native functionality of the browser, which can make it more difficult to interact with the website. An example Cyd mentioned is the "find" (`ctrl / cmd` + `f`) function which most browsers have. This function allows users to search for a specific word on the page. 

this can be problematic for users with disabilities. For example, users with motor disabilities may not be able to scroll the website at all. Users with visual disabilities may not be able to see the scroll bar, which makes it difficult to navigate the website.

Smooth scroll libraries are often used in web development, but they can be inaccessible for some users. An alternative solution is Lenis, which allows users to use "ctrl + find" to navigate the website easily.

To make a website accessible, developers should rethink their defaults and ensure that they include text alternatives for image and line animations. They should also consider the native functionality of scrolling libraries and respect media queries such as prefers-reduced-motion. By taking these steps, developers can create websites that are accessible to everyone, regardless of their abilities.



<!--
- Creative development wat wel accessible is.

## Why are so many award winning website inaccessible?
- Focus states worden vaak verborgen
- Veel bewegende tekst, rare html etc.

## Veelgemaakte fouten bij het maken van een website
- Tekst-select wordt uitgezet waardoor bijvoorbeeld screen readers geselecteerde tekst niet kunnen lezen.
- Focus states worden verborgen
- Native scroll wordt verwijderd of aangepast
- Alt teksten worden vergeten
- Geen tekst alternatieven voor geanimeerde tekstvlakken. Zorgt ervoor dat letters 1 voor 1 worden voorgelezen
- Prefers-reduced-motion en soortgelijk wordt niet gerespecteerd

Alternatief voor smooth scroll libraries:
Lenis: ctrl + find werkt wel

## Hoe maak je een website toegankelijk?
- Rethink your defaults
- Voeg tekst alternatives toe voor img en line animations
- Denk na over native functionaliteit van scrolling libraries
- Respecteer prefers-reduced-motion en soortgelijke media queries
-->
