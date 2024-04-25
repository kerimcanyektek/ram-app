import styled from 'styled-components'
import { design } from '../styles/globals'

export const FilterForm = styled.form`
  margin: 26px auto 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 320px;
  width: 100%;
  padding: 0 26px;
  gap: 8px;

  > div {
    width: 100%;
    > input {
      width: 100%;
      padding: 8px;
      border: 1px solid ${design.colors.green100};
      border-radius: 8px;
    }
    > span {
      font-size: ${design.fontSizes.sm};
      color: ${design.colors.orange};
    }
  }

  > button {
    display: flex;
    align-items: center;
    border-radius: 8px;
    border: none;
    color: ${design.colors.gray900};
    font-size: ${design.fontSizes.md};
    background: ${design.colors.green500};
    padding: 9px 14px;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      opacity: 0.8;
    }
  }
`

export const FilteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 26px auto 0;
  text-align: center;
  padding: 8px;
  font-size: ${design.fontSizes.sm};
`

export const FilterSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${design.colors.gray800};
  padding: 8px;
  border-radius: 16px;
  margin-top: 8px;
`

export const ClearButton = styled.button`
  height: 22px;
  background: transparent;
  border: 0;
  padding: 3px;
  color: ${design.colors.gray100};
  cursor: pointer;
`

export const CharContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1080px;
  width: 100%;
  margin: auto;
  padding: 26px;
  flex-wrap: wrap;
  gap: 26px;
`

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 12px;
  margin-bottom: 56px;
`

export const BackButton = styled.button`
  border-radius: 4px;
  border: none;
  color: ${design.colors.gray900};
  font-size: ${design.fontSizes.sm};
  background: ${design.colors.yellow};
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const PageCount = styled.input`
  padding: 10px;
  max-width: 75px;
  text-align: center;
  font-size: ${design.fontSizes.sm};
  color: ${design.colors.gray100};
  background: ${design.colors.gray800};
  border: none;
`

export const NextButton = styled.button`
  border-radius: 4px;
  border: none;
  color: ${design.colors.gray900};
  font-size: ${design.fontSizes.sm};
  background: ${design.colors.green500};
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
