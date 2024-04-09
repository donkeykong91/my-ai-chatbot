import {
  ChatPromptTemplate,
  MessagesPlaceholder,
} from '@langchain/core/prompts';
import { contextPrompt, qaPrompt } from '../constants/prompts.js';
import { HUMAN, SYSTEM, QUESTION, CHAT_HISTORY } from './constants.js';
import { GetContextPrompt, GetQaPrompt } from './types.js';

/**
 * Gets and creates the prompt for 'context'.
 * @function getContextPrompt
 * @returns {ChatPromptTemplate} The template for chat prompts, in particular.
 */
const getContextPrompt: GetContextPrompt = (): ChatPromptTemplate => {
  return ChatPromptTemplate.fromMessages([
    [SYSTEM, contextPrompt],
    new MessagesPlaceholder(CHAT_HISTORY),
    [HUMAN, `{${QUESTION}}`],
  ]);
};

/**
 * Gets and creates the prompt for 'qa' (question/answer).
 * @function getQaPrompt
 * @returns {ChatPromptTemplate} The template for chat prompts, in particular.
 */
const getQaPrompt: GetQaPrompt = (): ChatPromptTemplate => {
  return ChatPromptTemplate.fromMessages([
    [SYSTEM, qaPrompt],
    new MessagesPlaceholder(CHAT_HISTORY),
    [HUMAN, `{${QUESTION}}`],
  ]);
};

export { getContextPrompt, getQaPrompt };
