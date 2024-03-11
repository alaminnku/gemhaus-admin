import { DefaultSession, DefaultUser } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';

type Role = 'ADMIN';

declare module 'next-auth' {
  interface Session {
    user: {
      role: Role;
      accessToken: string;
    } & DefaultSession;
  }
  interface User extends DefaultUser {
    role: Role;
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    role: Role;
    accessToken: string;
    refreshToken: string;
    expiresIn: number;
  }
}

export type Article = {
  _id: string;
  title: string;
  image: string;
  content: string;
  excerpt: string;
  createdAt: string;
  file: File | undefined;
};

export type Offering = { name: string; icon: string };

export type Property = {
  _id: string;
  hostawayId: number;
  name: string;
  price: string;
  guests: string;
  rating: string;
  images: string[];
  latitude: number;
  longitude: number;
  bedrooms: string;
  bathrooms: string;
  isFeatured: boolean;
  cleaningFee: string;
  insuranceFee: string;
  description: string;
  offerings: Offering[];
  files: FileList | null;
  lodgingTaxPercent: string;
  salesTaxPercent: string;
  serviceFeePercent: string;
};

export type ServerError = {
  message: string;
};

export type Agent = {
  _id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  bio: string;
  image: string;
  qrCodeLink: string;
  file: File | undefined;
  properties: AgentProperty[];
  transactions: AgentTransaction[];
};

export type AgentProperty = {
  _id: string;
  isFeatured: boolean;
  price: number;
  address: string;
  city: string;
  state: string;
  images: string[];
  description: string;
  file: File | undefined;
};

export type AgentTransaction = {
  _id: string;
  address: string;
  type: 'sold' | 'available';
};

export type Alert = {
  message: string;
  type: 'success' | 'failed';
};
