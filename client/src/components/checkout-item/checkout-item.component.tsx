import React, { FC } from "react";
import { ICartItem } from "../../interfaces/interfaces";
import {
	addItem,
	clearCartItem,
	removeCartItem,
} from "../../redux/cart/cartSlice";
import { useAppDispatch } from "../../redux/hooks";

import {
	CheckoutItemContainer,
	ImageContainer,
	TextContainer,
	QuantityContainer,
	RemoveButtonContainer,
} from "./checkout-item.styles";

type CheckoutItemProps = {
	cartItem: ICartItem;
};

export const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const dispatch = useAppDispatch();
	const clearItem = () => dispatch(clearCartItem(cartItem));
	const addCartItem = () => dispatch(addItem(cartItem));
	const removeItem = () => dispatch(removeCartItem(cartItem));

	return (
		<CheckoutItemContainer>
			<ImageContainer>
				<img src={imageUrl} alt="Item" />
			</ImageContainer>
			<TextContainer>{name}</TextContainer>
			<QuantityContainer>
				<div className="arrow" onClick={removeItem}>
					&#10094;
				</div>
				<span>{quantity}</span>
				<div className="arrow" onClick={addCartItem}>
					&#10095;
				</div>
			</QuantityContainer>
			<TextContainer>{price}</TextContainer>
			<RemoveButtonContainer onClick={clearItem}>
				&#10005;
			</RemoveButtonContainer>
		</CheckoutItemContainer>
	);
};
