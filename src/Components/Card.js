import hero from "../Images/hero.svg";
import {
  IconBackgrond,
  NoteIcon,
  StyledDiv,
  StyledImg,
  StyledSection,
} from "./StyledComponents";

export const Card = () => {
  return (
    <StyledSection>
      <StyledDiv>
        <div>
          <StyledImg src={hero} />
        </div>
        <div>
          <h1>Order Summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like
          </p>
          <div>
            <IconBackgrond>
              <NoteIcon />
            </IconBackgrond>
            <div>
              <p>Annual Plan</p>
              <p>$59.99/year</p>
            </div>
            <p>Change</p>
          </div>
        </div>
      </StyledDiv>
    </StyledSection>
  );
};
