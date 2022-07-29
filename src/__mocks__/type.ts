export interface CustomerResult {
  id: any;
  address: Address;
  avatarUrl: string;
  createdAt: Date;
  email: string;
  name: string;
  phone: string;
}

export interface Address {
  country: Country;
  state: string;
  city: string;
  street: string;
}

export enum Country {
  Usa = "USA",
}

export interface ProductResult {
  id: any;
  createdAt: string;
  description: string;
  media: string;
  title: string;
  totalDownloads: string;
}

export interface Address {
  country: Country;
  state: string;
  city: string;
  street: string;
}
