# Liquid + React + Typescript + Tailwind CSS

This template should help get you started developing with [Liquid Oxygen](https://emdgroup-liquid.github.io/liquid/) and [React](https://reactjs.org) using Typescript and Tailwind CSS.


## About

This repo reproduces an weird bug on LdSelect focus which does not always occures:  

- Liquid related: [issue#813](https://github.com/emdgroup-liquid/liquid/issues/813).  
- Codesandbox: [repro sandbox](https://codesandbox.io/p/github/dpitois/liquid-select-focus-bug/main?file=/README.md:1,1&workspaceId=bd142dc9-6e08-409c-9537-d407ff1d0ee3).

## Repro steps

1. Clone the repo
2. Install dependencies
3. Run the application
4. Click on the 1st LdSelect of the form

## Expected behavior

The focus should always be done.

## Current behavior

Sometime, the focus is not done, and the bug can be observed when user clicks quickly on the LdSelect.  
Above the input, a custom element `<ClickLogger />` logs time between `mousedown` and `mouseup` event, and most of the time when the bug occures, this duration is around 40ms.

