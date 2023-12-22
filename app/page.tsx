import { ChatWindow } from "@/components/ChatWindow";
import { GoLaw } from "react-icons/go";

const lawQuestions = [
  "What is considered as an Indian coin?",
  "What is the punishment for overspeeding?",
  "What is the punishment for voluntarily causing hurt?",
  "What is the considered as assault?",
  "What is the punishment for robbery?",
  "What is the punishment for extortion?",
  "What is the punishment for criminal misappropriation of property?",
];

export default function AgentsPage() {
  const InfoCard = (
    <div className="p-4 md:p-8 rounded bg-[#25252d] w-full max-h-[85%] overflow-hidden">
      <h1 className="text-3xl md:text-4xl mb-4">
        <GoLaw className="inline-block mr-2" />
        LawGPT
      </h1>
      <ul>
        <li className="hidden text-l md:block">
          🔗
          <span className="ml-2">
            This project showcases how to perform retrieval with a{" "}
            <a href="https://js.langchain.com/" target="_blank">
              LangChain.js
            </a>{" "}
            chain and the Vercel{" "}
            <a href="https://sdk.vercel.ai/docs" target="_blank">
              AI SDK
            </a>{" "}
            in a{" "}
            <a href="https://nextjs.org/" target="_blank">
              Next.js
            </a>{" "}
            project.
          </span>
        </li>
        <li className="hidden text-l md:block">
          <span className="ml-2">The chain works in two steps:</span>
          <ul>
            <li className="ml-4">
              1️⃣
              <span className="ml-2">
                First, it rephrases the input question into a
                &quot;standalone&quot; question, dereferencing pronouns based on
                the chat history.
              </span>
            </li>
            <li className="ml-4">
              2️⃣
              <span className="ml-2">
                Then, it queries the retriever for documents similar to the
                dereferenced question and composes an answer.
              </span>
            </li>
          </ul>
        </li>

        <li className="text-l">
          🎨
          <span className="ml-2">
            The main frontend logic is found in <code>app/page.tsx</code>.
          </span>
        </li>

        <li>
          <span className="ml-2">
            The api logic can be found in{" "}
            <code>app/api/chat/retrieval/route.tsx</code>.
          </span>
        </li>

        <li className="text-l">
          👇
          <span className="ml-2">
            Try asking e.g.{" "}
            <code>
              {lawQuestions[Math.floor(Math.random() * lawQuestions.length)]}
            </code>{" "}
            below!
          </span>
        </li>
      </ul>
    </div>
  );
  return (
    <ChatWindow
      endpoint="api/chat/retrieval"
      emptyStateComponent={InfoCard}
      showIngestForm={false}
      placeholder={`I've got a legal eagle eye for untangling your law questions, ask away!`}
      emoji="⚖️"
      titleText="LawGPT"
    ></ChatWindow>
  );
}
