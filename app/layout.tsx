import "./globals.css";

export const metadata = {
  title: "Katla Sathwik — AI/ML Engineer",
  description:
    "Portfolio of Katla Sathwik, AI/ML Engineer specializing in Deep Learning, NLP, and full-stack AI systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
