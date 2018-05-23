# What is this?

Its a simple tooltip component since the ones I found couldn't do what I need

https://kingcosmic.github.io/tooltip-react/

# Example

```js
import React from 'react';
import Tooltip from 'kc-tooltip';

const Example = (props) => {
  return (
    <Tooltip content='Tooltip content'>
      <a>Place what you want the tooltip around here</a>
    </Tooltip>
  )
}

export default Example;
```