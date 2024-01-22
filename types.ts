export type Article = {
  _id?: string;
  title: string;
  image: string;
  file: File | undefined;
  createdAt?: string;
};

export type Property = {
  _id?: string;
  hostawayId: string;
  name: string;
  price: string;
  images: string[];
  beds: string;
  baths: string;
  guests: string;
  rating: string;
  description: string;
  files: FileList | null;
  isFeatured: boolean;
  cleaningFee: string;
  insuranceFee: string;
  lodgingTaxPercent: string;
  salesTaxPercent: string;
  serviceFeePercent: string;
};

export type ServerError = {
  message: string;
};
