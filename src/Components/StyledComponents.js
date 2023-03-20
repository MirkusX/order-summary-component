import styled from "styled-components";
import { BsMusicNoteBeamed } from "react-icons/bs";
import background from "../Images/background.svg";

export const NoteIcon = styled(BsMusicNoteBeamed)`
  vertical-align: middle;
  width: 25px;
  height: 25px;
`;

export const IconBackgrond = styled.div`
  background-color: #dee4fa;
  border-radius: 50%;
  padding: 0.7em;
`;

export const StyledDiv = styled.div`
  width: 30%;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.53);
  -webkit-box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.53);
  -moz-box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.53);
  @media (max-width: 811px) {
    width: 90%;
  }
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url(${background});
  background-size: cover;
  @media (max-width: 811px) {
    align-items: flex-start;
    padding-top: 1em;
  }
`;

export const HoverP = styled.p`
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 70%;
  justify-content: space-around;
  ${(props) => {
    if (props.inner)
      return `
    gap: 1em;
    margin: 0;
    justify-content: flex-start;
    `;
  }}
  ${(props) => {
    if (props.column)
      return `
    flex-direction: column;`;
  }}
`;

export const NoMarginP = styled.p`
  margin-bottom: 0.25em;
  font-weight: bold;
  ${(props) => {
    if (props.top)
      return `
      font-weight: normal;
    margin-top: 0.25em;
    margin-bottom: 1em;`;
  }}
`;

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: #382ae1;
  border: none;
  padding: 1em;
  width: 80%;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  &:hover {
    background-color: #766cf1;
  }
  ${(props) => {
    if (props.cancel)
      return `
    background-color: white;
    color: gray;
    margin: 1em 0 2em 0;
    &:hover{
      background-color: white;
      color: black;
    }
    `;
  }}
`;

export const ButtonDiv = styled.div`
  margin-top: 1em;
`;

export const StyledP = styled.p``;
