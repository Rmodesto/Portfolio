import { Questrial } from "@next/font/google";
import localFont from "@next/font/local";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import "../styles/slick.css";

const myFont = Questrial({ subsets: ["latin"], weight: "400" });

const nasa = localFont({
  src: "./nasa.otf",
  variable: "--font-nasa",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={nasa.className}>
      <Component {...pageProps} />
    </main>
  );
}
