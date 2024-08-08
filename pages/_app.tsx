import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure FontAwesome styles are imported
import Navbar from "@/components/navbar";
import Footer from "@/components/footNav"; // Assuming you have a Footer component

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      
      <Footer />
    </div>
  );
}
