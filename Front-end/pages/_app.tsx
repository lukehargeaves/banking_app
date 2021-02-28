import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <Component router={{ ...router }} {...pageProps} />;
}

export default MyApp;
