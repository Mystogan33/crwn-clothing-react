// Error
export type ErrorMessage = Error | string;

// Shop Collections
export interface ICollectionItem {
  id: number,
  imageUrl: string,
  price: number,
  name: string
};

export interface ICollection {
  id?: number | string,
  items: ICollectionItem[],
  title: string
};

export interface ICollections {
  [x: string]: ICollection
};


// Cart

export interface ICartItem extends ICollectionItem {
  quantity: number
};

export interface ICartItems extends Array<ICartItem> {};

// Directory Categories

export interface ICategory {
  title: string,
  imageUrl: string,
  id: number,
  linkUrl: string,
  size?: string
};

export interface ICategories extends Array<ICategory> {};


// User
export type User = {
  id: string,
  createdAt: {
    seconds: number,
    nanoseconds: number
  },
  displayName: string,
  email: string
};