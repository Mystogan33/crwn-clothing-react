import React, { FC } from "react";
import { RouteComponentProps } from "react-router";

import { CollectionItem } from "../../components";
import { useAppSelector } from "../../redux/hooks";
import { selectCollection } from "../../redux/shop/shop.selectors";

import {
	CollectionPageContainer,
	CollectionTitle,
	CollectionItemsContainer,
} from "./collection.styles";

interface CollectionPageProps extends RouteComponentProps {}

export const CollectionPage: FC<CollectionPageProps> = ({ match: { params: { collectionId } } }: any) => {
	const selectedCollection = selectCollection(collectionId);
	const collection = useAppSelector(selectedCollection);

	const renderedCollectionItems = collection?.items.map((item) => <CollectionItem key={item.id} item={item} />);

	return (
		<CollectionPageContainer>
			<CollectionTitle>{collection?.title}</CollectionTitle>
			<CollectionItemsContainer>
				{renderedCollectionItems}
			</CollectionItemsContainer>
		</CollectionPageContainer>
	)
};

export default CollectionPage;
