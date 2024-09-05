import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  bottom: 0;
`;

export const CopyrightSection = styled.div`
  font-size: 14px;
`;

export const LinksSection = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & a {
    color: #ecf0f1;
    text-decoration: none;
    font-size: 14px;

    &:hover {
      text-decoration: underline;
    }
  }
`;
