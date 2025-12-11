import UsersList from "@/components/UsersList";
import { TEXT } from "@/i18n";

type Lang = "en" | "fr";

interface PageProps {
  params: Promise<{ lang: Lang }>;
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const t = TEXT[lang] ?? TEXT.en;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{t.title}</h1>
      <UsersList text={t} />
    </div>
  );
}
