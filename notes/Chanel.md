Chanel is frontend developer at Triple.
She was a CMD student who graduated in 2018.

## Webstandaarden bij Triple

- Git, version control is one of the most important things in web development
  - Work process
  1.  Create branch
  2.  Commit & Push
  3.  Create pull request
  4.  Push to main branch
  5.  Deployment
- Npm, sometimes the best way to solve a problem is to use a package. Tips: check when the package was update last, check the number of downloads, check the number of contributors: multiple contributors is better, package size, dependencies.

### Vanilla, library or framework?

Don't reinvent the wheel, often a framework or library can help you prevent reinventing the wheel. But don't just always use a framework or library, sometimes it's better to use vanilla javascript.

Triple often use React or Nextjs after switching from Angular. Next > React is SEO is important because React renders the DOM on the client side, Next renders the DOM on the server side.

They are preparing switching to Svelte, package is faster, lighter and easier to use for starters.

## Typescript <3 my beloved

- Eslint, linter for javascript. helps collaborate with other developers and enforce code style.
- Prettier, code formatter to format most languages

## CSS

Lots of repeating, for example when styling nested elements. This is where CSS preprocessors come in handy. Triple uses SASS, which is a CSS preprocessor. SASS is a superset of CSS, which means that all valid CSS is valid SASS. SASS adds features like variables, nesting, mixins, inheritance, etc.

## Vite!!!! <3

## Azure & Azure DevOps

Used for pipelines; a virtual machine that runs your code and checks it against the standards. Then builds it so it's ready for deployment.
Three environments for testing:
- Development: for testing and developing
- Acceptance: for testing with the client
- Production: the live website