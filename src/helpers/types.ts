import { ChatPromptTemplate } from '@langchain/core/prompts';
import { Runnable, RunnableAssign } from '@langchain/core/runnables';

/**
 * Gets and creates the prompt for 'context'.
 */
type GetContextPrompt = () => ChatPromptTemplate;

/**
 * Gets and creates the prompt for 'qa' (question/answer).
 */
type GetQaPrompt = () => ChatPromptTemplate;

/**
 * The data used to dynamically provide context to a prompt.
 */
type ContextData = {
  context: () => Runnable | string;
};

/**
 * Gets the `RunnablePassthrough` regarding `context` based on the
 * returned value from `getContext`.
 */
type GetContextRunnablePassthrough = () => RunnableAssign<ContextData>;

/**
 * Gets the context chain if the chat history is passed into <br>
 * the `input` when calling the `ragChain`.
 * **`input`**: Object that holds both the user input and the <br>
 * chat history.
 */
type GetContext = (input: Record<string, unknown>) => Runnable | string;

export type {
  GetQaPrompt,
  GetContextPrompt,
  GetContextRunnablePassthrough,
  ContextData,
  GetContext,
};
