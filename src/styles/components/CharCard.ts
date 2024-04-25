import styled from 'styled-components'
import { design } from '../../styles/globals'

export const CharContent = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  background: ${design.colors.white};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  padding: 20px;
  margin: 10px;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  max-width: 600px;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 6px 24px rgba(0,0,0,0.15);
  }

  img {
    border-radius: 10px;
    width: 120px;
    height: 120px; 
    object-fit: cover;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 20px;
    flex: 1;
  }

  span {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${design.colors.gray900};
    margin-left: 20px;
  }
`

export const AddFavoriteButton = styled.button`
  background: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  padding: 8px;
  align-self: flex-start;
  transition: transform 0.2s;

  svg {
    color: ${design.colors.yellow};
    font-size: 2rem;
  }

  &:hover {
    transform: scale(1.2);
  }
`
