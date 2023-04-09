# AI Function JS

> Heavily inspired by https://github.com/Torantulino/AI-Functions

No need to write functions 👨🏻‍💻, just describe it 🗣 and use it. Let GPT 🤖 to figure out the rest!

```js
af.run('sum', 'Add all numbers together', [1,2,3,4,5]);
// Output: 15

af.run('checkEmail', 'Check if it is a valid email address', 'liyangguang@gmail.com');
// Output: true

af.run('slugify', 'Make a string into underline slugify case', 'Hi, my name is Yangguang');
// Output: hi_my_name_is_yangguang

af.run('fib', 'Generate first 10 digits in fibonacci sequence');
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

af.run('chineseDate', 'Translate date notation from U.S. to Chinese', 'Apr 8, 2023');
// Output: 2023年4月8日
```

This package is mostly for fun. DO NOT recommend using it in production code. 😜
The response if not always reliable, as you can expect from a GPT bot.

## How to use

```bash
npm i ai-function-js@latest
```

```js
import AiFunction from 'ai-function-js';

const af = new AiFunction(process.env.OPENAI_API_KEY);

af.run('sum', 'Add all numbers together', [1,2,3,4,5]).then((result) => {
  console.log(result);
})
```

### API reference

- Constructor: `new AiFunction(apiKey: string, model?: Model)`
  - `apiKey`: OpenAI API key.
  - `model`: Optional. Default to `gpt-3.5-turbo`. Only support `gpt-3.5-turbo` and `gpt-4`. `gpt-4` is smarter, but the cost is higher. Refer to [OpenAI API pricing](https://openai.com/pricing#language-models) for details.
  - Return value: an instance of `AiFunction`.
- Method: `af.run(name: string, description: string, args: any): Promise<string>`
  - `name`: function name you want to give. A better name gives a better result.
  - `description`: what does your imaginary function do. A better description gives a better result.
  - `args`: Arguments you pass to it. Use array for multiple arguments.
  - Return value: Promise of the result string. (Convert to other types afterwards if needed)

### Run examples

To run the example code:

```bash
npm i
npm run build
OPENAI_API_KEY=sk-... node dist/example.js
```

## More

This package is obvious for experimental and fun. If you want more practical auto-code, check out my another repo [GPT-TDD](https://github.com/liyangguang/gpt-tdd) - Use GPT to automatically generate code for Test-Drive-Development.
