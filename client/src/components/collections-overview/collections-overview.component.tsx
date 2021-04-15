import React from "react";
import { useAppSelector } from "../../redux/hooks";
import {
	selectIsCollectionFetching,
	selectShopCollectionsForPreview,
} from "../../redux/shop/shop.selectors";

import { CollectionPreview } from "../collection-preview/collection-preview.component";
import { Spinner } from "../spinner/spinner.component";
import { CollectionsOverviewContainer } from "./collections-overview.styles";

export const CollectionsOverview = () => {
	const isLoading = useAppSelector(selectIsCollectionFetching);
	const collections = useAppSelector(selectShopCollectionsForPreview);

	const renderedCollectionPreview = collections.map(({ id, ...otherProps }) => (
		<CollectionPreview key={id} {...otherProps} />
	));

	return (
		<CollectionsOverviewContainer>
			{isLoading ? <Spinner /> : renderedCollectionPreview}
		</CollectionsOverviewContainer>
	);
};

export default CollectionsOverview;
