import { ChatOpenAI } from '@langchain/openai';
import { VectorStoreRetriever } from '@langchain/core/vectorstores';
import { HNSWLib } from '@langchain/community/vectorstores/hnswlib';

/**
 * The configuration of the AI Chat Bot.
 */
class AiChatBotConfig {
  private static instance: AiChatBotConfig;
  private _llm: ChatOpenAI;
  private _retriever: VectorStoreRetriever<HNSWLib>;

  /**
   * Creates only one new instance of AiChatBotConfig.
   * @throws {Error} Throws an error if an instance already exists.
   * @return {void}
   */
  constructor() {
    if (AiChatBotConfig.instance) {
      throw new Error('Only one instance of AiChatBotConfig can exist!');
    }

    AiChatBotConfig.instance = this;
  }

  /**
   * Returns the INSTANCE of AiChatBotConfig.
   * If the instance has not been created yet, it creates a new instance and
   * returns it. Otherwise, it returns the existing instance.
   * @return {AiChatBotConfig} The instance of AiChatBotConfig.
   */
  static getInstance(): AiChatBotConfig {
    if (!AiChatBotConfig.instance) {
      AiChatBotConfig.instance = new AiChatBotConfig();
    }
    return AiChatBotConfig.instance;
  }

  /**
   * Gets the value of the llm property.
   * @return {ChatOpenAI} The value of the llm property.
   */
  get llm(): ChatOpenAI {
    return this._llm;
  }

  /**
   * Sets the value of the llm.
   * @param {ChatOpenAI} updatedLlm - The updated value of the llm.
   */
  set llm(updatedLlm: ChatOpenAI) {
    this._llm = updatedLlm;
  }

  /**
   * Gets the value of 'retriever'.
   * @returns {VectorStoreRetriever<HNSWLib>} The value of 'retriever'.
   */
  get retriever(): VectorStoreRetriever<HNSWLib> {
    return this._retriever;
  }

  /**
   * Sets value of 'retriever' .
   * @param {VectorStoreRetriever<HNSWLib>} updatedRetriever - The updated value
   * for the retriever property.
   */
  set retriever(updatedRetriever: VectorStoreRetriever<HNSWLib>) {
    this._retriever = updatedRetriever;
  }
}

export default AiChatBotConfig.getInstance();
