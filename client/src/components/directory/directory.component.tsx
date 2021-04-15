import React from "react";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";
import { useAppSelector } from "../../redux/hooks";

import { MenuItem } from "../menu-item/menu-item.component";
import { DirectoryMenuContainer } from "./directory.styles";

export const Directory = () => {
	const sections = useAppSelector(selectDirectorySections);
	const renderedMenuItems = sections.map(({ id, ...othersProps }) => (<MenuItem key={id} {...othersProps} />));

	return (
		<DirectoryMenuContainer>
			{renderedMenuItems}
		</DirectoryMenuContainer>
	)
};
