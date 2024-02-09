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
