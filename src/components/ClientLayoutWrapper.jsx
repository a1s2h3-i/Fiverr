'use client';

import { StateProvider } from "@/context/StateContext";
import { initialState } from "@/context/StateReducers";
import reducer from "@/context/StateReducers";
import { CookiesProvider } from 'react-cookie'; // ✅ Import

export default function ClientLayoutWrapper({ children }) {
  return (
    <CookiesProvider> {/* ✅ Add this wrapper */}
      <StateProvider initialState={initialState} reducer={reducer}>
        {children}
      </StateProvider>
    </CookiesProvider>
  );
}
