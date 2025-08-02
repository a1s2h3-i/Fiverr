'use client'
import Companies from "@/components/Companies";
import Everything from "@/components/Everything";
import FiverrBusiness from "@/components/FiverrBusiness";
import HeroBanner from "@/components/HeroBanner";
import JoinFiverr from "@/components/JoinFiverr";
import PopularService from "@/components/PopularService";

import Services from "@/components/Services";
import AuthWrapper from "@/components/AuthWrapper";
import { useStateProvider } from "@/context/StateContext";

export default function Home() {
  const [{showLoginModal,showSignupModal}]=useStateProvider();
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
    {(showLoginModal||showSignupModal)&&(<AuthWrapper  type={showLoginModal?"login":"signup"}/>)}
   
    
   
   </div>
    </>
  );
}
