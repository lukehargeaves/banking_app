import "../styles/globals.css";
import { useRouter } from "next/router";
import "../styles/globals.css";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return <Component router={{ ...router }} {...pageProps} />;
}

export default MyApp;
