export type Article = {
  _id?: string;
  title: string;
  image: string;
  file: File | undefined;
  createdAt?: string;
};

export type Property = {
  _id?: string;
  name: string;
  price: string;
  images: string[];
  beds: string;
  baths: string;
  guests: string;
  rating: string;
  description?: string;
  isFeatured: boolean;
  files: FileList | null;
};

export type ServerError = {
  message: string;
};
