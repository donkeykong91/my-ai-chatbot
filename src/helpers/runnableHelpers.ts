import { RunnablePassthrough, RunnableAssign } from '@langchain/core/runnables';
import { ContextData, GetContextRunnablePassthrough } from './types.js';
import { getContext } from './contextHelpers.js';

/**
 * Gets the `RunnablePassthrough` regarding `context` based on the
 * returned value from `getContext`.
 * @function getContextRunnablePassthrough
 * @returns {RunnableAssign<ContextData>} The runnable in which the `context`
 * assignment is made.
 */
const getContextRunnablePassthrough: GetContextRunnablePassthrough =
  (): RunnableAssign<ContextData> => {
    return RunnablePassthrough.assign({
      context: getContext,
    });
  };

export { getContextRunnablePassthrough };
