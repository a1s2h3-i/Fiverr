'use client';

import { StateProvider } from "@/context/StateContext";
import { initialState } from "@/context/StateReducers";
import reducer from "@/context/StateReducers";

export default function ClientLayoutWrapper({ children }) {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      {children}
    </StateProvider>
  );
}
