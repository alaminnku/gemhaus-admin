export type Article = {
  _id: string;
  title: string;
  image: string;
  file: File | undefined;
  createdAt: string;
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
};

export type AgentProperty = {
  _id: string;
  isFeatured: boolean;
  price: number;
  address: string;
  city: string;
  state: string;
  image: string;
  description: string;
  file: File | undefined;
};

export type AgentTransaction = {
  address: string;
  status: 'sold';
};
