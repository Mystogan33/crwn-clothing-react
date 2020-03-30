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

export interface ICartItem extends ICollectionItem {
  quantity: number
};

export interface ICartItems extends Array<ICartItem> {};

export interface ICategory {
  title: string,
  imageUrl: string,
  id: number,
  linkUrl: string,
  size?: string
};

export interface ICategories extends Array<ICategory> {};

export type ErrorMessage = Error | string;