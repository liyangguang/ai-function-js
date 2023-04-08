import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from 'openai';

enum Model {
  GPT_3 = 'gpt-3.5-turbo',
  GPT_4 = 'gpt-4',
}

export default class AiFunction {
  #openai: OpenAIApi;
  #model = Model.GPT_3;

  constructor(apiKey: string, model?: Model) {
    const configuration = new Configuration({apiKey});
    this.#openai = new OpenAIApi(configuration);
    if (model === Model.GPT_4) {
      this.#model = model;
    }
  }

  async run(description: string, args?: any) {
    // Wrap the arguments in an array if the user forget to do so.
    const arrayArgs = Array.isArray(args) ? args : [args];

    const messages: ChatCompletionRequestMessage[] = [
      {role: 'system', content: `You are a JavaScript function.
        You decide what the function do based on the comment.
        You reply with the return value. Never chat with me. No preamble. Only the return value.`},
      {role: 'user', content: `
        /** Add two numbers together */
        function () {...})
      `},
      /* Use text, rather than code to represent this, so GPT can handle types correctly.
       * If we write `(function (){})(args)`, then there will be issues like string doesn't have quotation marks round them. */
      {role: 'user', content: `Run this function with arguments: 3, 4`},
      {role: 'assistant', content: `7`},
      {role: 'user', content: `
        /** ${description} */
        function () {...}
      `},
      {role: 'user', content: `Run this function ${args ? `with arguments: ${arrayArgs.join(', ')}` : ''}, `},
    ];
    const completion = await this.#openai.createChatCompletion({
      model: this.#model,
      messages,
      temperature: 0,
    });
    return completion.data.choices[0].message?.content;
  }
}
