import { RunnableSequence } from '@langchain/core/runnables';

/**
 * Holds the initialized RAG chain. <br>
 * **`ragChain`**: The RAG chain ready to be used for user prompts.
 */
type RagChainData = {
  ragChain: RunnableSequence;
};

/**
 * Used to initialize the AI chatbot. Loads the Word Document, splits <br>
 * it into smaller Documents, creates a vector store in memory with <br>
 * open ai embeddings, pulls a retriever from vector store, and uses <br>
 * open ai llm.
 */
type InitAiChatBot = () => Promise<RagChainData>;

/**
 * Begins and recursively continues back-and-forth chat between ai assistant <br>
 * and user.
 */
type Chat = () => Promise<void>;

export type { RagChainData, InitAiChatBot, Chat };
