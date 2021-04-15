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
  title: string,
  routeName: string
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

export type User = Partial<firebase.User> & {
  id: string;
  additionalData?: {
    displayName: string;
  }
};

export type SignInCredentials = {
  email: string,
  password: string
};

export type SignUpCredentials = SignInCredentials & {
  displayName: string
}