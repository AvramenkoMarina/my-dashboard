import { TEXT } from "@/i18n";
import { Lang } from "../../../types";

interface PageProps {
  params: Promise<{ lang: Lang }>;
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const t = TEXT[lang] ?? TEXT.en;

  return <div></div>;
}
