import Image from "next/image";
import { Inter } from "next/font/google";
import HeroSection from "@/components/herosection";
import InfoSection from "@/components/infosection";
import WhyChooseVFTC from "@/components/whychoose";
import TokenDistribution from "@/components/tokendstb";
import VFTCIntroduction from "@/components/vftcIntroduction";
import CoFoundersSection from "@/components/cofounders";
import FAQSection from "@/components/faq";
import DocumentsSection from "@/components/documentsec";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div>
        <HeroSection/>
        <InfoSection/>
        <WhyChooseVFTC/>
        <TokenDistribution/>
        <VFTCIntroduction/>
        <CoFoundersSection/>
        <FAQSection/>
        <DocumentsSection/>
      </div>
    </main>
  );
}
