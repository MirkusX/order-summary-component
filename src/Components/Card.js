import hero from "../Images/hero.svg";

export const Card = () => {
  return (
    <section>
      <div>
        <div>
          <img src={hero} />
        </div>
        <div>
          <h1>Order Summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like
          </p>
        </div>
      </div>
    </section>
  );
};
