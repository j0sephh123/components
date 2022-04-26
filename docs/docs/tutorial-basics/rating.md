---
sidebar_position: 1
---

# Rating

## Rating Props :white_check_mark:

| Name        | Type                                        | Default | Required           | Description                                                                                                                        |
| ----------- | ------------------------------------------- | ------- | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| _stars_     | `5` \| `10` \| `tuple` with 5 or 10 strings | 5       | :x:                | If a `number` is provided, no labels will be shown. If `tuple` with strings - will display the corresponding string for each index |
| _className_ | `string`                                    |         | :x:                | Provides an Additional className to the wrapper element                                                                            |
| _onChange_  | `Function`                                  |         | :white_check_mark: | On click, will fire the function                                                                                                   |

## Star Props

to be passed as `starProps`

| Name          | Type                                     | Default      | Required | Description                                                                                                                 |
| ------------- | ---------------------------------------- | ------------ | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| type          | `controlled` \| `readOnly` \| `disabled` | `controlled` | :x:      | `controlled` - edit rating <br/> `readOnly` - just show result, no opacity <br/> `disabled` - just show result with opacity |
| starClassName | `string`                                 |              | :x:      | Additional className to the star svg                                                                                        |
| fill          | `string`                                 | `#EFCE4A`    | :x:      | Star color                                                                                                                  |

Add **Markdown or React** files to `src/pages` to create a **standalone page**:

- `src/pages/index.js` -> `localhost:3000/`
- `src/pages/foo.md` -> `localhost:3000/foo`
- `src/pages/foo/bar.js` -> `localhost:3000/foo/bar`

## Create your first React Page

Create a file at `src/pages/my-react-page.js`:

```tsx title="src/pages/my-react-page.js"
import React from "react";
import Layout from "@theme/Layout";

export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

A new page is now available at `http://localhost:3000/my-react-page`.

## Create your first Markdown Page

Create a file at `src/pages/my-markdown-page.md`:

```mdx title="src/pages/my-markdown-page.md"
# My Markdown page

This is a Markdown page
```

A new page is now available at `http://localhost:3000/my-markdown-page`.
