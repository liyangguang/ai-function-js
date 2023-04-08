import AiFunction from './lib.js';

const af = new AiFunction(process.env.OPENAI_API_KEY!);

af.run('Make a string into underline slugify case', ['Hi, my name is Yangguang']).then(console.log);
