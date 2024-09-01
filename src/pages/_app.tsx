import "@/styles/globals.css";
import Animations from "@/components/animations";
import type { AppProps } from "next/app";
import {Roboto} from '@next/font/google';
const roboto=Roboto({
  subsets:['latin'],
  weight:['400','700']
});


export default function App({ Component, pageProps }: AppProps) {
  return (
   
      <main className={roboto.className}>
        <div className="fixed top-0 left-0 w-screen h-screen z-[-1] overflow-hidden">
      <Animations/>
      </div>

       
      <Component {...pageProps} />
      </main>
 
  );
}
