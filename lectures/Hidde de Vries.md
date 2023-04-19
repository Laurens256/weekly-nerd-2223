# Dialogs and Modals

Hidde de Vries - april 2023

Hidde is a frontend developer who is currently working a lot on accessibility on the web. In this lecture, he will talk specifically about the use of modals and dialogs on the web.

## Definitions

### Modal

A modal is a dialog that is displayed on top of the main content of a website. Specifically, a modal is the only thing the user can interact with. This means that the user cannot interact with the main content (inert) of the website while the modal is displayed. A common mistake when creating modals is not making the rest of the page inert. This means that the user can still interact (with tabs for example) with the main content of the website while the modal is displayed.

### Non-modal

A non-modal dialog is a dialog that is displayed on top of the main content of a website. However, unlike a modal, the user can still interact with the main content of the website while the dialog is displayed.

### Light dismiss

A light dismiss is a way to dismiss a modal or dialog by not implicitly clicking a button. This can be done by clicking outside, or even hovering outside of the modal or dialog.

### Explicit dismiss

An explicit dismiss is a way to dismiss a modal or dialog by explicitly clicking a button.

### Z-index

Z-index is a CSS property that determines the stacking order of elements. Elements with a higher z-index will be displayed on top of elements with a lower z-index.

### Top layer

The top layer is the a relatively new feature. The top layer is a layer that is displayed on top of the z-index. This means that content inside the top layer will always be displayed on top of content outside the top layer, regardless of the z-index.

### Backdrop

Sometimes modals have a backdrop behind them. This is a semi-transparent overlay that is displayed behind the modal. Top layer elements have a built in backdrop, which can be styled using the css `::backdrop` pseudo selector.

### Keyboard focus traps

A keyboard focus trap is a way to trap the keyboard focus inside a modal or dialog. This means that the user can only interact with the modal or dialog while it is displayed. A focus trap should only be used temporarily, and should be removed when the modal or dialog is dismissed.
