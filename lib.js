import { Configuration, OpenAIApi } from 'openai';

export default class AiFunction {
  #openai;

  constructor(apiKey) {
    const configuration = new Configuration({apiKey});
    this.#openai = new OpenAIApi(configuration);
  }

  async run(name, description, args) {
    const completion = await this.#openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {role: 'system', content: `You are a JavaScript function. You reply with the return value. Never chat with me. No preamble. Only the return value.`},
        {role: 'user', content: `
          /** Add two numbers together */
          function sumTwo() {...}

          sumTwo(3, 4);
          `},
        {role: 'assistant', content: `7`},
        {role: 'user', content: `
          /** ${description} */
          function ${name}() {...}

          ${name}(${args.join(', ')});
        `},
      ],
      temperature: 0,
    });
    return completion.data.choices[0].message?.content;
  }
}
