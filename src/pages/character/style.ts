import Link from 'next/link'
import styled from 'styled-components'
import { design } from '../../styles/globals' 

export const CharacterContainer = styled.div`
  margin: 26px auto;
  padding: 0 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  background: ${design.colors.background};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`

export const HeaderContainer = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`

export const AddFavoriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${design.colors.green500};
  color: ${design.colors.white};
  border-radius: 8px;
  border: none;
  padding: 12px 24px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  }
`

export const GoBack = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${design.colors.gray800};
  background: ${design.colors.white};
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.2s;

  &:hover {
    background: ${design.colors.green500};
    color: ${design.colors.white};
  }
`

export const Name = styled.h1`
  color: ${design.colors.gray800};
  font-size: ${design.fontSizes['2xl']};
  margin: 20px auto;
  text-align: center;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${design.colors.gray900};
  color: ${design.colors.white};
  border: 2px solid ${design.colors.green100};
  margin-bottom: 26px;
  width: 100%;
  padding: 20px;
  border-radius: 8px;

  > strong {
    color: ${design.colors.yellow};
    font-size: ${design.fontSizes.xl};
    text-align: center;
  }

  > span {
    text-align: center;
    font-size: ${design.fontSizes.md};
  }
`
