import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";

import {
	MenuItemContainer,
	BackgroundImageContainer,
	ContentContainer,
	ContentTitle,
	ContentSubtitle,
} from "./menu-item.styles";
import { ICategory } from "../../interfaces/interfaces";

type MenuItemProps = Omit<ICategory, "id"> & RouteComponentProps;

export const MenuItemComponent = ({
	title,
	imageUrl,
	size,
	history: { push },
	linkUrl,
	match: { url },
}: MenuItemProps) => (
	<MenuItemContainer
		size={size}
		onClick={() => push(`${url}${linkUrl}`)}
	>
		<BackgroundImageContainer
			className="background-image"
			imageUrl={imageUrl}
		/>
		<ContentContainer className="content">
			<ContentTitle>{title.toUpperCase()}</ContentTitle>
			<ContentSubtitle>SHOP NOW</ContentSubtitle>
		</ContentContainer>
	</MenuItemContainer>
);

export const MenuItem = withRouter(MenuItemComponent);
