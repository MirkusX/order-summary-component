import hero from "../Images/hero.svg";
import {
  ButtonDiv,
  FlexDiv,
  HoverP,
  IconBackgrond,
  NoMarginP,
  NoteIcon,
  StyledButton,
  StyledDiv,
  StyledH1,
  StyledImg,
  StyledP,
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
            <StyledH1>Order Summary</StyledH1>
            <StyledP>
              You can now listen to millions of songs, audiobooks, and podcasts
              on any device anywhere you like
            </StyledP>
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
            <HoverP>Change</HoverP>
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
