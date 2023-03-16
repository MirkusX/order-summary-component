import styled from "styled-components";
import { BsMusicNoteBeamed } from "react-icons/bs";

export const NoteIcon = styled(BsMusicNoteBeamed)``;

export const IconBackgrond = styled.div`
  background-color: #dee4fa;
  border-radius: 50%;
  padding: 1em;
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
  ${(props) => {
    if (props.inner)
      return `
    gap: 1em;
    `;
  }}
`;
