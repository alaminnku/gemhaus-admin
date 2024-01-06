'use client';

import { useUser } from 'contexts/User';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

export default function AuthProvider({ children }: { children: ReactNode }) {
  const route = useRouter();
  const { isUser } = useUser();

  useEffect(() => {
    if (!isUser) {
      route.push('/properties');
    }
  }, [isUser]);

  return <main>{children}</main>;
}
