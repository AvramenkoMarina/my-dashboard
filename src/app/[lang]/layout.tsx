import "../globals.css";

type LangLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function LangLayout({
  children,
  params,
}: LangLayoutProps) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body className="bg-gray-100 min-h-screen p-6">
        <main className="max-w-3xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
