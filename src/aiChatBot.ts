import { ChatOpenAI, OpenAIEmbeddings } from '@langchain/openai';
import { HNSWLib } from '@langchain/community/vectorstores/hnswlib';
import { Document } from '@langchain/core/documents';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { RESUME } from './constant.js';
import { DocxLoader } from 'langchain/document_loaders/fs/docx';
import { getRAGChain } from './chains/ragChain.js';
import { RunnableSequence } from '@langchain/core/runnables';
import { InitAiChatBot, RagChainData } from './types.js';
import aiChatBotConfig from './globals/AiChatBotConfig.js';

/**
 * Used to initialize the AI chatbot. Loads the Word Document, splits
 * it into smaller Documents, creates a vector store in memory with
 * open ai embeddings, pulls a retriever from vector store, and uses
 * open ai llm.
 * @async
 * @function initAiChatBot
 * @returns {Promise<RagChainData>} A promise that resolves to the RagChainData.
 */
const initAiChatBot: InitAiChatBot = async (): Promise<RagChainData> => {
  // TODO: Move file to S3 bucket
  const loader: DocxLoader = new DocxLoader(RESUME);
  const docs: Document[] = await loader.load();
  const splitDocs: Document[] = await new RecursiveCharacterTextSplitter({
    chunkSize: 170,
    chunkOverlap: 30,
  }).splitDocuments(docs);
  const vectorStore: HNSWLib = await HNSWLib.fromDocuments(
    splitDocs,
    new OpenAIEmbeddings()
  );

  aiChatBotConfig.llm = new ChatOpenAI({ temperature: 0 });
  aiChatBotConfig.retriever = vectorStore.asRetriever();

  const ragChain: RunnableSequence = getRAGChain();

  return { ragChain };
};

export { initAiChatBot };
