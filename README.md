# Country-react-select

The Country State Select control for [React](https://reactjs.org).

Features include:

- Country picker.
- State picker.
- City picker.


# Installation and usage


```
yarn add country-react-select

or

npm instal country-react-select --save

```

## Sample code

### Country picker:

```js
import React, { useState } from 'react';
import {CountryPicker} from 'country-react-select';

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="App">
      <CountryPicker
        value={selectedOption}
        onChange={setSelectedOption}
      />
    </div>
  );
}
```

### CountryPickerProps

- `isDisabled` - disable the control
- `isMulti` - allow the user to select multiple values
- `onChange` - subscribe to change events
- `placeholder` - change the text displayed when no option is selected
- `value` - control the current value

### State picker:

```js
import React, { useState } from 'react';
import {StatePicker} from 'country-react-select';

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="App">
      <StatePicker
        value={selectedOption}
        onChange={setSelectedOption}
        country={'CA'}
      />
    </div>
  );
}
```

### City picker:

```js
import React, { useState } from 'react';
import {CityPicker} from 'country-react-select';

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="App">
      <CityPicker
        value={selectedOption}
        onChange={setSelectedOption}
        country={'CA'}
        state={'QC'}
      />
    </div>
  );
}
```


## License

MIT Licensed. Copyright (c) Vu Vo 2023.