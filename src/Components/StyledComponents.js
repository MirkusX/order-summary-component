import styled from "styled-components";
import { BsMusicNoteBeamed } from "react-icons/bs";

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
  background-color: pink;
  border-radius: 10px;
`;

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
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
  background-color: #766cf1;
  border: none;
  padding: 1em;
  width: 80%;
  border-radius: 10px;
  color: white;
  font-weight: bold;
`;
