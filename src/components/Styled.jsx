import styled from "styled-components";
import SVG from "react-inlinesvg";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const NaventHeader = styled.header`
  background: #fafafa;
  color: #582568;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  box-shadow: 0 9px 20px rgb(0 0 0 / 6%), 0 2px 3px rgb(0 0 0 / 4%);
  margin-bottom: 2em;

  h4 {
    flex: 1;
    color: #9595a0;
  }

  @media (max-width: 750px) {
    font-size: 18px;
    h4 {
      font-size: 16px;
    }
  }
`;

export const TransparentCard = styled.div`
  width: 80%;
  margin: 0 auto;
  background: #fafafa;

  .problemContainer {
    margin-bottom: 2em;

    p {
      font-size: 16px;
    }

    .showList {
      text-align: center;
      font-size: 24px;
    }
    .codeContainer {
      border-radius: 0.25rem;
      text-align: left;
      margin: 1em 0;
      padding: 10px 20px;
      font-size: 16px;
      background-color: #582568;
      color: #fafafa;

      h5 {
        margin: 1em 0;
      }
    }
  }
`;

export const StyledSVG = styled(SVG)`
  height: 120px;
  flex: 1;
  @media (max-width: 750px) {
    height: 80px;
  }
`;

export const StyledInput = styled.input`
  border: 1px solid #7c7c84;
  border-radius: 0.25rem;
  height: 30px;
  margin: 10px;

  &:focus {
    border: 2px solid #582568;
    outline: none;
  }
`;

export const StyledButton = styled.button`
  border: 1px solid #582568;
  background-color: transparent;
  color: #582568;
  font-weight: bold;
  border-radius: 0.25rem;
  padding: 0.3em 0.5em;
  height: 30px;
  cursor: pointer;
  margin: 1em 10px;
  transition: background-color color 0.5s ease-in-out;
  &:hover {
    background-color: #582568;
    color: #fafafa;
  }
  &:focus {
    border: 2px solid #582568;
    outline: none;
  }
`;

export const Warning = styled.p`
  color: #582568;
  font-weight: bold;
`;

export const NaventFooter = styled.footer`
  background: rgba(88, 37, 104, 0.712);
  color: #fafafa;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  margin-top: 2em;

  a {
    color: #fafafa;
    text-decoration: none;

    &:hover {
      color: #582568;
      text-decoration: underline;
      font-weight: bold;
    }
  }

  @media (max-width: 750px) {
    font-size: 18px;
    h4 {
      font-size: 16px;
    }
  }
`;
