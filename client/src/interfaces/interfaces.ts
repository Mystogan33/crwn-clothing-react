export interface ICollectionItem {
  id: number,
  imageUrl: string,
  price: number,
  name: string
};

export interface ICollection extends Array<ICollectionItem> {};
export interface ICollections extends Array<ICollection> {};

export interface ICartItem extends ICollectionItem {
  quantity?: number
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

export interface IUserCredentials {
  displayName: string,
  email: string,
  password: string,
  confirmPassword?: string
};