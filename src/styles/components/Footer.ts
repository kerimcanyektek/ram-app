import styled from 'styled-components';
import { design } from '../../styles/globals'

export const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  background-color: ${design.colors.black};
  color: ${design.colors.white};
  padding: 90px;
  gap: 20px;
`;

export const LogoContainer = styled.div`
  flex: 1;
  min-width: 150px;

  p {
    margin-top: 8px;
    font-size: ${design.fontSizes.sm};
  }
`;

export const MenuContainer = styled.nav`
  flex: 2;
  display: flex;
  justify-content: flex-end;
`;

export const FooterMenu = styled.div`
  text-align: right;

  h4 {
    margin-bottom: 16px;
    color: ${design.colors.white};
  }

  a {
    color: ${design.colors.white};
    text-decoration: none;
    display: block;
    margin-bottom: 8px;

    &:hover {
      color: ${design.colors.orange};
      text-decoration: underline;
    }
  }
`;

export const FooterCopy = styled.p`
  width: 100%;
  text-align: center;
  font-size: ${design.fontSizes.sm};
  margin-top: 20px;
`;
