import Companies from "@/components/Companies";
import Everything from "@/components/Everything";
import FiverrBusiness from "@/components/FiverrBusiness";
import HeroBanner from "@/components/HeroBanner";
import JoinFiverr from "@/components/JoinFiverr";
import PopularService from "@/components/PopularService";

import Services from "@/components/Services";
import AuthWrapper from "@/components/AuthWrapper";

export default function Home() {
  return (
    <>
   <div>
    <HeroBanner/>
    <Companies/>
    <PopularService/>
    <Everything/>
    <Services/>
    <FiverrBusiness/>
    <JoinFiverr/>
    <AuthWrapper/>
    
   
   </div>
    </>
  );
}
