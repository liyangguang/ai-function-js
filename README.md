# AI Function JS

> Heavily inspired by https://github.com/Torantulino/AI-Functions

No need to write functions, just describe it and use it. Let GPT to figure out the rest!

```js
af.run('Add all numbers together', [1,2,3,4,5]));  // 15
af.run('Check if it is a valid email address', 'liyangguang@gmail.com'));  //true
af.run('Make a string into underline slugify case', 'Hi, my name is Yangguang'));  // hi_my_name_is_yangguang
af.run('Generate first 10 digits in fibonacci sequence'));  // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
af.run('Translate date notation from U.S. to Chinese', 'Apr 8, 2023'));  // 2023年4月8日
```

> This package is mostly for fun. DO NOT recommend using it in production code.

## How to use

```js
import AiFunction from 'ai-function';

const af = new AiFunction(process.env.OPENAI_API_KEY);

af.run('Add all numbers together', [1,2,3,4,5]).then((result) => {
  console.log(result);
})
```

### API reference

- Constructor: `new AiFunction(apiKey: string, model?: Model)`
  - `apiKey`: OpenAI API key.
  - `model`: Optional. Default to `gpt-3.5-turbo`. Only support `gpt-3.5-turbo` and `gpt-4`.
  - Return value: an instance of `AiFunction`.
- Method: `af.run(description: string, args: any): Promise<string>`
  - `description`: what does your imaginary function do.
  - `args`: Arguments you pass to it. Use array for multiple arguments.
  - Return value: Promise of the result string. (Convert to other types afterwards if needed)

### Run examples

To run the example code:

```bash
npm i
npm run build
OPENAI_API_KEY=sk-... node dist/example.js
```

## TODOs

- Publish to npm
