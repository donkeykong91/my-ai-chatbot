import { Runnable, RunnableSequence } from '@langchain/core/runnables';

/**
 * Gets the context chain based on the context prompt.
 */
type GetContextChain = () => Runnable<string>;

/**
 * Gets the RAG chain, and uses the context before prompting the LLM.
 */
type GetRAGChain = () => RunnableSequence;

export type { GetContextChain, GetRAGChain };
