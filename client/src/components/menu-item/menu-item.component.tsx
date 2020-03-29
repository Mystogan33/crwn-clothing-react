import React, { FC } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './menu-item.styles';

type IMenuItemProps = RouteComponentProps & {
  title: string,
  imageUrl: string,
  size: boolean | number | string,
  linkUrl: string
};

export const MenuItemComponent: FC<IMenuItemProps> = ({
    title,
    imageUrl,
    size,
    history,
    linkUrl,
    match
  }) => (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className='background-image'
        imageUrl={imageUrl}
      />
      <ContentContainer className='content'>
        <ContentTitle>{title.toUpperCase()}</ContentTitle>
        <ContentSubtitle>SHOP NOW</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );

export const MenuItem = withRouter(MenuItemComponent);
