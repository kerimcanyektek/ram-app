import styled from 'styled-components'
import { design } from '../../styles/globals'

export const FavoritesContainer = styled.div`
  padding: 24px;
  max-width: 800px;
  margin: 30px auto;
`;

export const FavoritesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FavoriteItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${design.colors.white};
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 12px 20px;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }

  img {
    border-radius: 10px;
    width: 100px;
    height: 100px;
  }
`;

export const FavoriteDetails = styled.div`
  flex-grow: 1;
  margin-left: 20px;

  h3 {
    color: ${design.colors.gray900};
    font-size: ${design.fontSizes.lg};  
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const FavoriteRemoveButton = styled.button`
  all: unset;
  cursor: pointer;
  font-size: ${design.fontSizes.md};
  color: ${design.colors.red};
  font-weight: bold;

  &:hover {
    color: ${design.colors.red};
  }
`;

export const GoBackButton = styled.a`
  display: inline-flex;
  align-items: center;
  margin-bottom: 24px;
  color: ${design.colors.gray800};
  text-decoration: none;
  font-weight: bold;
  padding: 10px 18px;
  background: ${design.colors.white};
  border-radius: 10px;  

  &:hover {
    background: ${design.colors.green500};
    color: ${design.colors.white};
  }

  svg {
    margin-right: 8px;
  }
`;

export const NoFavorites = styled.p`
  text-align: center;
  color: ${design.colors.gray800};
  font-size: ${design.fontSizes.md};
  padding: 20px;
`;
