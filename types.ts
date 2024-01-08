export type Article = {
  _id?: string;
  title: string;
  image: string;
  file: File | undefined;
  createdAt?: string;
};

export type Property = {
  name: string;
  price: string;
  image: string;
  beds: string;
  baths: string;
  guests: string;
  rating: string;
  type: string;
  isFeatured: boolean;
  file: File | undefined;
};
