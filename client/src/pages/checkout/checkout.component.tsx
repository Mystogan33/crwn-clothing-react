import React from "react";

import {
	selectCartItems,
	selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { useAppSelector } from "../../redux/hooks";

import { CheckoutItem, StripeCheckoutButton } from "../../components";

import {
	CheckoutPageContainer,
	CheckoutHeaderContainer,
	HeaderBlockContainer,
	TotalContainer,
	WarningContainer,
} from "./checkout.styles";

export const CheckoutPage = () => {
	const cartItems = useAppSelector(selectCartItems);
	const total = useAppSelector(selectCartTotal);

	return (
		<CheckoutPageContainer>
			<CheckoutHeaderContainer>
				<HeaderBlockContainer>
					<span>Product</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Description</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Quantity</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Price</span>
				</HeaderBlockContainer>
				<HeaderBlockContainer>
					<span>Remove</span>
				</HeaderBlockContainer>
			</CheckoutHeaderContainer>
			{cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<TotalContainer>TOTAL: ${total}</TotalContainer>
			<WarningContainer>
				*Please use the following test credit card for payments*
				<br />
				Card Number: 4242 4242 4242 4242 - CVC: 123 - Date: 10/2032
			</WarningContainer>
			<StripeCheckoutButton price={total} />
		</CheckoutPageContainer>
	);
};

export default CheckoutPage;
