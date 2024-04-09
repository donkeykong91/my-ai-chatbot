import { StringOutputParser } from '@langchain/core/output_parsers';
import { getContextPrompt } from '../helpers/promptHelpers.js';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { Runnable } from '@langchain/core/runnables';
import aiChatBotConfig from '../globals/AiChatBotConfig.js';
import { GetContextChain } from './types.js';

/**
 * Gets the context chain based on the context prompt.
 * @function getContextChain
 * @returns {Runnable<string>} A string-based Runnable to use with LCEL
 * (LangChain Expression Language).
 */
const getContextChain: GetContextChain = (): Runnable<string> => {
  const contextPrompt: ChatPromptTemplate = getContextPrompt();
  return contextPrompt.pipe(aiChatBotConfig.llm).pipe(new StringOutputParser());
};

export { getContextChain };
