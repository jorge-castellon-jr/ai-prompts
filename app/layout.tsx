import "./globals.scss";

export const metadata = {
  title: "AI Prompts",
  description: "AI generated prompts for creative writing, art, and more.",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}test</main>
      </body>
    </html>
  );
};

export default RootLayout;
