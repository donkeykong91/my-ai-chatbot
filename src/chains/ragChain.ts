import { RunnableSequence } from '@langchain/core/runnables';
import { getContextRunnablePassthrough } from '../helpers/runnableHelpers.js';
import { getQaPrompt } from '../helpers/promptHelpers.js';
import aiChatBotConfig from '../globals/AiChatBotConfig.js';
import { GetRAGChain } from './types.js';

/**
 * Gets the RAG chain, and uses the context before prompting the LLM.
 * @function getRAGChain
 * @returns {RunnableSequence} The constructed LCEL (LangChain Expression Language)
 * of runnables before prompting the `ragChain`.
 */
const getRAGChain: GetRAGChain = (): RunnableSequence => {
  return RunnableSequence.from([
    getContextRunnablePassthrough(),
    getQaPrompt(),
    aiChatBotConfig.llm,
  ]);
};

export { getRAGChain };
