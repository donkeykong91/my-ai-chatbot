import { Runnable } from '@langchain/core/runnables';
import { getContextChain } from '../chains/contextChain.js';
import { formatDocumentsAsString } from 'langchain/util/document';
import aiChatBotConfig from '../globals/AiChatBotConfig.js';
import { CHAT_HISTORY } from './constants.js';
import { GetContext } from './types.js';

/**
 * Gets the context chain if the chat history is passed into
 * the `input` when calling the `ragChain`.
 * @param input - Object that holds both the user input and the
 * chat history.
 * @function getContext
 * @returns {Runnable | string} The `contextChain` is returned; otherwise, an
 * empty string.
 */
const getContext: GetContext = (
  input: Record<string, unknown>
): Runnable | string => {
  if (CHAT_HISTORY in input) {
    const contextChain: Runnable<string> = getContextChain();

    return contextChain
      .pipe(aiChatBotConfig.retriever)
      .pipe(formatDocumentsAsString);
  }

  return '';
};

export { getContext };
