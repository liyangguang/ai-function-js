# AI Function JS

> Heavily inspired by https://github.com/Torantulino/AI-Functions

No need to write functions, just describe it and use it. Let GPT to figure out the rest!

```js
const result = await af.run('what do you want it to do', ['argument', 'list'])
```


## Example

```js
import AiFunction from './lib.js';

const af = new AiFunction(process.env.OPENAI_API_KEY);

af.run('Make a string into underline slugify case', ['Hi, my name is Yangguang'])
  .then(console.log);  // Output: hi_my_name_is_yangguang
```

## How to use

To run the example code locally:

```bash
npm i
npm run build
OPENAI_API_KEY=sk-... node dist/example.js
```

## TODOs

- Publish to npm
