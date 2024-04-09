import * as readline from 'node:readline';
import { initAiChatBot } from './aiChatBot.js';
import { Chat } from './types.js';

const { ragChain } = await initAiChatBot();
// TODO: Update with langchain chat history class
let chat_history = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Listens for the `SIGINT` (ctrl-c) and logs out a 'goodbye'
 * message for the user to see and properly closes the
 * readline console interface.
 */
rl.on('SIGINT', () => {
  console.log('\n\nAI Assistant: Exiting... Bye!\n\n');
  rl.close();
});

/**
 * Begins and recursively continues back-and-forth chat between ai assistant
 * and user.
 * @async
 * @function chat
 * @returns {Promise<void>} Resolves when the chat interaction is completed.
 */
const chat: Chat = async (): Promise<void> => {
  rl.question('\nYou: ', async (input) => {
    const response = await ragChain.invoke({
      question: input,
      chat_history,
    });

    chat_history = [...chat_history, response];
    console.log(`\nAI Assistant: ${response.content}`);

    await chat();
  });
};

export { chat };
