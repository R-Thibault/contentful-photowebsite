import "../styles/globals.css";
import {Paprika} from "next/font/google"

const paprika = Paprika({
  subsets: ["latin"],
  variable: "--font-paprika",
  weight: "400"
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${paprika.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  );
}
