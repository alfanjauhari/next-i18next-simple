import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const { t, ready } = useTranslation("common");
  const router = useRouter();

  const changeLocalTo = router.locale === "id" ? "en" : "id";

  return (
    <div>
      <h1>{t("home")}</h1>
      <Link href="/" locale={changeLocalTo}>
        <a>Change Locale</a>
      </Link>
    </div>
  );
}
