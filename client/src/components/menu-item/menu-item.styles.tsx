import styled from 'styled-components';
import { ICategory } from '../../interfaces/interfaces';

export const MenuItemContainer = styled.div<Partial<ICategory>>`
	height: ${({ size }) => (size ? '380px' : '240px')};
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 7.5px 15px;
	border-radius: 0.3rem;
	box-shadow: 0;
	transition: all .4s ease-in-out;
	box-shadow: 0 1px 5px rgba(10, 10, 10, 0.35);

	&:hover {
		cursor: pointer;
		box-shadow: 0 1px 10px rgba(10, 10, 10, 0.7);

		& .background-image {
			transform: scale(1.1);
		}

		& .content {
			opacity: 0.9;
		}
	}

	&:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }

	@media screen and (max-width: 800px) {
		height: 200px;
	}
`;

export const BackgroundImageContainer = styled.div<Partial<ICategory>>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
	transition: transform 3s cubic-bezier(0.25, 0.45, 0.45, 0.95);
`;

export const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  border-radius: 0.2rem;
	transition: opacity .3s ease-in-out;
`;

export const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;
