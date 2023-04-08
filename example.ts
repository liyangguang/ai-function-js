import AiFunction from './index.js';

const af = new AiFunction(process.env.OPENAI_API_KEY!);

(async function cases() {
  console.log(await af.run('Add all numbers together', [1,2,3,4,5]));
  console.log(await af.run('Check if it is a valid email address', 'liyangguang@gmail.com'));
  console.log(await af.run('Make a string into underline slugify case', 'Hi, my name is Yangguang'));
  console.log(await af.run('Generate first 10 digits in fibonacci sequence'));
  console.log(await af.run('Translate date notation from U.S. to Chinese', 'Apr 8, 2023'));
})();
