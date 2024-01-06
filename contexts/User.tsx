'use client';

import { ReactNode, createContext, useContext } from 'react';

type UserContext = {
  isUser: boolean;
  isLoading: boolean;
};

const UserContext = createContext({} as UserContext);
export const useUser = () => useContext(UserContext);

export default function UserProvider({ children }: { children: ReactNode }) {
  const isUser = false;
  const isLoading = false;

  return (
    <UserContext.Provider
      value={{
        isUser,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
