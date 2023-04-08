import { Configuration, OpenAIApi, ChatCompletionRequestMessage } from 'openai';

enum Model {
  GPT_3 = 'gpt-3.5-turbo',
  GPT_4 = 'gpt-4',
}

export default class AiFunction {
  #openai: OpenAIApi;
  #model = Model.GPT_3;

  constructor(apiKey: string, model?: string) {
    const configuration = new Configuration({apiKey});
    this.#openai = new OpenAIApi(configuration);
    if (model === Model.GPT_4) {
      this.#model = model;
    }
  }

  async run(name: string, description: string, args?: any) {
    // Wrap the arguments in an array if the user forget to do so.
    const arrayArgs = Array.isArray(args) ? args : [args];

    const messages: ChatCompletionRequestMessage[] = [
      {role: 'system', content: `You are a JavaScript function.
        You reply with the return value. Never chat with me. Never add preamble. Never show me the code.
        The function body is empty intentionally, you decide what the function should do, and what the return value should be based on the description.
        Only reply the return value.`},
      {role: 'user', content: `
        /** Extract the number part from a string */
        function extractNumber() {...})
      `},
      /* Use text, rather than code to represent this, so GPT can handle types correctly.
       * If we write `(function (){})(args)`, then there will be issues like string doesn't have quotation marks round them. */
      {role: 'user', content: `Run this function with arguments: This shirt is $9.15`},
      {role: 'assistant', content: `9.15`},
      {role: 'user', content: `
        /** Generate a random integer between 1 ~ 10 */
        function randomInt() {...})
      `},
      {role: 'user', content: `Run this function`},
      {role: 'assistant', content: `4`},
      {role: 'user', content: `
        /** ${description} */
        function ${name}() {...}
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
