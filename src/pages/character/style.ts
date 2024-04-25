import Link from 'next/link'
import styled from 'styled-components'
import { design } from '../../styles/globals' 

export const CharacterContainer = styled.div`
  margin: 26px auto 0;
  padding: 0 26px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HeaderContainer = styled.div`
  margin: 0 auto 26px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
`

export const AddFavoriteButton = styled.button`
  display: flex;
  align-items: center;
  background: ${design.colors.gray800};
  color: ${design.colors.orange};
  border-radius: 8px;
  border: none;
  padding: 10px;
  cursor: pointer;
`

export const GoBack = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid ${design.colors.white};
  border-radius: 8px;
  text-transform: none;
  text-decoration: none;
  border: none;
  color: ${design.colors.gray800};
  background: ${design.colors.green500};
  padding: 10px;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`

export const Name = styled.h1`
  color: ${design.colors.green500};
  font-size: ${design.fontSizes['2xl']};
  margin: 26px auto;
  text-align: center;
`

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${design.colors.gray800};
  border: 2px solid ${design.colors.green100};
  margin-bottom: 26px;
  width: 100%;
  max-width: 300px;
  padding: 8px;
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
