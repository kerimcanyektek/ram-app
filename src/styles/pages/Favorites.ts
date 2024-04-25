import styled from 'styled-components'
import { design } from '../../styles/globals'

export const FavoritesContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 20px auto;
`;

export const FavoritesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FavoriteItem = styled.div`
  display: flex;
  align-items: center;
  background: ${design.colors.gray100};
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  padding: 10px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${design.colors.gray100};
  }

  img {
    border-radius: 5px;
  }
`;

export const FavoriteDetails = styled.div`
  margin-left: 15px;
  flex-grow: 1;

  h3 {
    margin: 0;
    color: ${design.colors.gray900};
  }
`;

export const FavoriteRemoveButton = styled.button`
  all: unset;
  cursor: pointer;
  margin-left: auto;
  color: ${design.colors.orange};

  &:hover {
    color: ${design.colors.yellow};
  }
`;

export const GoBackButton = styled.a`
  display: inline-flex;
  align-items: center;
  margin-bottom: 20px;
  color: ${design.colors.blue500};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: 5px;
  }
`;

export const NoFavorites = styled.p`
  text-align: center;
  color: ${design.colors.gray800};
`;
