import "../styles/globals.css";
import { appWithTranslation, useTranslation } from "next-i18next";
import nextI18NextConfig from "../next-i18next.config.js";

function MyApp({ Component, pageProps }) {
  const { ready } = useTranslation();

  if (!ready) {
    return "Loading...";
  }

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp, nextI18NextConfig);
