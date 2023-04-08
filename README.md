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

## TODOs

- Publish to npm
- Add TS
