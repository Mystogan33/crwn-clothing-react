export interface ICollectionItem {
  id: number
  imageUrl: string,
  price: number,
  name: string
};

export interface ICartItem extends ICollectionItem {
  quantity?: number
};

export interface IUserCredentials {
  displayName: string,
  email: string,
  password: string,
  confirmPassword?: string
};