import hero from "../Images/hero.svg";
import {
  ButtonDiv,
  FlexDiv,
  IconBackgrond,
  NoMarginP,
  NoteIcon,
  StyledButton,
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
          <FlexDiv column>
            <h1>Order Summary</h1>
            <p>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like
            </p>
          </FlexDiv>
          <FlexDiv>
            <FlexDiv inner>
              <IconBackgrond>
                <NoteIcon />
              </IconBackgrond>
              <div>
                <NoMarginP>Annual Plan</NoMarginP>
                <NoMarginP top>$59.99/year</NoMarginP>
              </div>
            </FlexDiv>
            <p>Change</p>
          </FlexDiv>
        </div>
        <ButtonDiv>
          <StyledButton>Proceed to Payment</StyledButton>
          <StyledButton cancel>Cancel Order</StyledButton>
        </ButtonDiv>
      </StyledDiv>
    </StyledSection>
  );
};
