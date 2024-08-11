import "@/styles/globals.css";
import type { AppProps } from "next/app";
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure FontAwesome styles are imported
import Navbar from "@/components/navbar";
import Footer from "@/components/footNav"; // Assuming you have a Footer component
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  // Define paths where Navbar and Footer should not be displayed
  const hideNavAndFooter = ["/Login", "/Register"].includes(router.pathname);
  
  return (
    <div className="flex flex-col min-h-screen">
      {!hideNavAndFooter && <Navbar />}
      
      <main className="flex-grow">
        <Component {...pageProps} />
      </main>
      
      {!hideNavAndFooter && <Footer />}
    </div>
  );
}
