import { Configuration, OpenAIApi } from 'openai';

enum Model {
  GPT_3 = 'gpt-3.5-turbo',
  GPT_4 = 'gpt-4',
}

export default class AiFunction {
  #openai: OpenAIApi;
  #model = Model.GPT_3;

  constructor(apiKey?: string, model?: Model) {
    const configuration = new Configuration({apiKey});
    this.#openai = new OpenAIApi(configuration);
    if (model === Model.GPT_4) {
      this.#model = model;
    }
  }

  async run(description: string, args: any[]) {
    const completion = await this.#openai.createChatCompletion({
      model: this.#model,
      messages: [
        {role: 'system', content: `You are a JavaScript function. You reply with the return value. Never chat with me. No preamble. Only the return value.`},
        {role: 'user', content: `
          /** Add two numbers together */
          (function () {...})(3, 4);
        `},
        {role: 'assistant', content: `7`},
        {role: 'user', content: `
          /** ${description} */
          (function () {...})(${args.join(', ')});
        `},
      ],
      temperature: 0,
    });
    return completion.data.choices[0].message?.content;
  }
}
