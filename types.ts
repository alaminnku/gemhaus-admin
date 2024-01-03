export type Article = {
  title: string;
  slug: string;
  image: string;
  file: File | undefined;
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
