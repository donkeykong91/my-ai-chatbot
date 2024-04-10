# My AI Chabot
*🚧This is a work-in-progress project and is not yet considered complete.*

This AI Chatbot is intended to be a self-promoter for **my-website** (another project). The AI Chatbot is intended
to talk about my skillset based on my Resume (which will eventually live in an S3 Bucket).

It utilizes RAG (Retrieval-Augmented Generation) and Context to answer questions related to my Resume.  
I use the [LangChain Framework]([url](https://python.langchain.com/docs/get_started/introduction/)) to develop faster with 
the tools provided.  
I use OpenAI's Embeddings API and GPT-3.5 Turbo LLM.  
* The **Embedding API** is used to transform the recursively split Documents into vectors and save them in a vector store (HNSWLib).
This is done to use a similarity search on the eight most *similar* vectors compared to the input from the user.
I plan to replace the vector store HNSWLib with Weaviate or Chroma (whichever is easier/faster to use) to use
the maximal-marginal-relevance search to provide a more contextually relevant selection of Documents to choose from by the
LLM.
* The **GPT-3.5 Turbo** model is used for its low-cost savings and speed of responses. I plan to explore GPT-4 Turbo model and its capabilities
with other iterations of this bot.

Currently, the AI Chatbot only runs in the terminal. 

The plan is to have the AI Chatbot run in **my-website** inside a chat bubble at the bottom right of the screen.

To run the AI Chatbot locally on your machine, you would need to have an API key from OpenAI and run it with the following in Windows Powershell:  
```powershell
npm run build
$env:OPENAI_API_KEY = "<YOUR_API_KEY>"; node ./dist/bundle.js
```
