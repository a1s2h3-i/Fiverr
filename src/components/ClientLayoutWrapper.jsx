'use client';

import { StateProvider } from "@/context/StateContext";
import { initialState } from "@/context/StateReducers";
import reducer from "@/context/StateReducers";
import { CookiesProvider } from 'react-cookie';
import UserHydration from "./UserHydration";

export default function ClientLayoutWrapper({ children }) {
  return (
    <CookiesProvider>
      <StateProvider initialState={initialState} reducer={reducer}>
        <UserHydration /> {/* Just run effect, don’t wrap */}
        {children}
      </StateProvider>
    </CookiesProvider>
  );
}
