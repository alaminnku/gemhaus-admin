export type Article = {
  _id: string;
  title: string;
  image: string;
  file: File | undefined;
  createdAt: string;
};

export type Property = {
  _id: string;
  hostawayId: string;
  name: string;
  price: string;
  guests: string;
  rating: string;
  images: string[];
  bedrooms: string;
  bathrooms: string;
  isFeatured: boolean;
  cleaningFee: string;
  insuranceFee: string;
  description: string;
  files: FileList | null;
  lodgingTaxPercent: string;
  salesTaxPercent: string;
  serviceFeePercent: string;
  offerings: { name: string; icon: string }[];
};

export type ServerError = {
  message: string;
};
