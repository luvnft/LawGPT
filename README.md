# ⚖️ LawGPT

LawGPT is a question answering system for legal Indian documents. It uses [LangChain.js](https://js.langchain.com/) to compose different modules together, including [OpenAI's GPT-3](https://openai.com/blog/openai-api/) and [Supabase](https://supabase.io/). Vercel's [AI SDK](https://github.com/vercel-labs/ai) is used to stream tokens to the client and display the incoming messages.

<!-- TODO: add demo -->
<!-- ![Demo GIF](/public/images/agent-convo.gif) -->

You can check out a hosted version of this repo [here](https://lawgpt.siddahmed.tech)

## 🚀 Getting Started

First, clone this repo and download it locally.

Next, you'll need to set up environment variables in your repo's `.env.local` file. Copy the `.env.example` file to `.env.local`.
To start with the basic examples, you'll just need to add your OpenAI API key.

Next, install the required packages using your preferred package manager (e.g. `pnpm`).

<!-- TODO: add a note about adding acts in supabase -->

Now you're ready to run the development server:

```bash
pnm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result! Ask the bot something and you'll see a streamed response.

<!-- ![A streaming conversation between the user and the AI](/public/images/chat-conversation.png) -->
<!-- TODO: add converstaion image -->

Backend logic lives in `app/api/chat/route.ts`. From here, you can change the prompt and model, or add other modules and logic.

## Document Retrieval

LawGPT answers questions by retrieving relevant documents using Supabase as a vector store and then generating an answer from them. This is called retrieval augmented generation (RAG).
However, you can swap in [another supported vector store](https://js.langchain.com/docs/modules/data_connection/vectorstores/integrations/) if preferred by changing
the code under `app/api/retrieval/ingest/route.ts`, `app/api/chat/retrieval/route.ts`.
<!-- TODO: change ingset code for custom act PDFs -->

For Supabase, follow [these instructions](https://js.langchain.com/docs/modules/data_connection/vectorstores/integrations/supabase) to set up your
database, then get your database URL and private key and paste them into `.env.local`.

After splitting, embedding, and uploading some acts, you're ready to ask legal questions!

The specific variant of the conversational retrieval chain used here is composed using LangChain Expression Language, which you can [read more about here](https://js.langchain.com/docs/guides/expression_language/cookbook). 
This chain example will also return cited sources (sections of the retrieved acts) in the response.
via header in addition to the streaming response.

## 📚 Learn More
### Conversation Flow
![Conversation flow diagram](/public/images/LawGPT%20flow.svg)

The example chains in the `app/api/chat/route.ts` and `app/api/chat/retrieval/route.ts` files use [LangChain Expression Language](https://js.langchain.com/docs/guides/expression_language/interface) to compose different LangChain modules together. You can integrate other retrievers, agents, preconfigured chains, and more too, though keep in mind
`BytesOutputParser` is meant to be used directly with model output.

To learn more about what you can do with LangChain.js, check out the docs here:

- https://js.langchain.com/docs/