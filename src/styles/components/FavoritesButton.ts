import styled from 'styled-components'
import { design } from '../../styles/globals' 

export const FavoritesListButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${design.colors.green500};
  color: ; ${design.colors.black};
  padding: 8px 12px;
  border-radius: 20px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  position: relative;
  text-decoration: none;
  transition: background-color 0.2s, box-shadow 0.2s;

  svg {
    margin-right: 8px;
  }

  span {
    background-color: ${design.colors.red};
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 0.875rem;
    position: absolute;
    top: -4px;
    right: -4px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 20px;
    height: 20px;
  }

  &:hover {
    background-color: ${design.colors.yellow};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); 
  }
`
