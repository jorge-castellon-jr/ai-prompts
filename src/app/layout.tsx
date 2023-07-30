import Nav from "@/components/Nav";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import Provider from "@/components/Provider";

export const metadata: Metadata = {
  title: "AI Prompts",
  description: "Prompts for AI-generated art",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
