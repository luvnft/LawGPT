import "./globals.css";
import { Poppins } from "next/font/google";

import { Navbar } from "@/components/Navbar";

const poppins = Poppins({ style: "normal", weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>LawGPT</title>
        {/* <link rel="shortcut icon" href="/images/favicon.ico" /> */}
        {/* using an emoji as favicon */}
        <link
          rel="shortcut icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚖️</text></svg>"
        />
        <meta
          name="description"
          content="LawGPT: A legal question answering system built on top of GPT-3.5 implementing RAG."
        />
        <meta property="og:title" content="LangChain + Next.js Template" />
        <meta
          property="og:description"
          content="LawGPT: A legal question answering system built on top of GPT-3.5 implementing RAG."
        />
        {/* TODO: add custom OG image */}
        <meta property="og:image" content="/images/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LangChain + Next.js Template" />
        <meta
          name="twitter:description"
          content="LawGPT: A legal question answering system built on top of GPT-3.5 implementing RAG."
        />
        <meta name="twitter:image" content="/images/og-image.png" />
      </head>
      <body className={poppins.className}>
        <div className="flex flex-col p-4 md:p-12 h-[100vh]">
          <Navbar></Navbar>
          {children}
        </div>
      </body>
    </html>
  );
}
