## Installed react, react-dom/client

## Installed prettier, eslint, parcel locally

npm installs the executables, npx does not; just executes without installing.

use npm install or npm ci to install all dependencies included in the project.
run the project with 'npm run dev'

Rendering components, ReactDom.render() is not supported anymore in React 18
Instead, use {createRoot} from 'react-dom/client';

Syntax --
const root = createRoot(document.getElementById("root"));
root.render(Component);

## Hooks

All hooks begin with 'use'
useState is a hook destructured into array [variable, method]
Hooks never go inside loops and conditionals. They can mess up the program if not in order.
Hooks are Optional

react components start with capital letter
