# finalsa-react-components

> React components made with bulma and react.

[![NPM](https://img.shields.io/npm/v/finalsa-react-components.svg)](https://www.npmjs.com/package/finalsa-react-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save finalsa-react-components
```

## Usage

```jsx
import React, { Component } from 'react'

import {TableModule} from 'finalsa-react-components'
import 'finalsa-react-components/dist/index.css'

class Example extends Component {
  render() {
    const cols = [
    {
      "name" : "Name",
      "selector" : "name"
    },
    {
      "name" : "Attribute1",
      "selector" : "attr1"
    },
    {
      "name" : "Year",
      "selector" : "year"
    }
    ]
    const data = [
      {"name" : "Luis", "attr1" : "test", "year" : 2021 },
      {"name" : "Luis", "attr1" : "test", "year" : 2021 },
      {"name" : "Luis", "attr1" : "test", "year" : 2021 },
      {"name" : "Luis", "attr1" : "test", "year" : 2021 },
      {"name" : "Luis", "attr1" : "test", "year" : 2021 },
      {"name" : "Luis", "attr1" : "test", "year" : 2021 },
      {"name" : "Luis", "attr1" : "test", "year" : 2021 },
    ]
    return <TableModule 
      title="People"
      cols={cols}
      data={[{
        "name" : "Luis"
      }]}
    />
  }
}
```

## License

MIT © [finalsa](https://github.com/finalsa)
