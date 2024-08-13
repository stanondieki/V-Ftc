import InvestmentOpportunities from '@/company/aboutstyles/invest';
import InfoSection from '@/components/infosection';
import Insupport from './aboutstyles/investsupport';
import Missions from './aboutstyles/mission';
import AdvancedPage from './aboutstyles/advanced';
import InvestPage from './aboutstyles/investmentoptions';
import ChoosePage from './aboutstyles/choose';
import VftcPage from './aboutstyles/vftc';
import DealsPage from './aboutstyles/deals';
import MineralPage from './aboutstyles/minerals';
import IntroPage from './aboutstyles/introduction';


const About = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center text-white">
      <Insupport/>
      <InfoSection/>
      <Missions/>
      <AdvancedPage/>
      <InvestPage/>
      <ChoosePage/>
      <InvestmentOpportunities/>
      <VftcPage/>
      <DealsPage/>
      <MineralPage/>
      <IntroPage/>
    </div>
  );
};

export default About;

