# AI Function JS

> Heavily inspired by https://github.com/Torantulino/AI-Functions

No need to write functions, just describe it and use it. Let GPT to figure out the rest!

## Example

```js
import AiFunction from './lib.js';

const af = new AiFunction(process.env.OPENAI_API_KEY);

af.run('slugify', 'Make a string into underline slugify case', ['Hi, my name is Yangguang']).then(console.log);
// Output: hi_my_name_is_yangguang
```

## How to use

To run the example code locally:

```bash
npm i
OPENAI_API_KEY=sk-... node example.js
```

## TODOs

- Publish to npm
- Add TS
