import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../style/Button";

const HeroSection = ({name,image}) => {

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data"> 
          <p className="hero-top-data">THIS IS ME</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            I'm {name}. A Full stack Developer, youtuber and freelancer. A Full
            stack Developer, youtuber and freelancer.
          </p>
          <Button className="btn hireme-btn">
            <NavLink to="/contact"> hire me </NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero image" className="hero-img " />
          </picture> 
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }
.btn.hireme-btn{
  {
    -webkit-text-decoration: none;
    text-decoration: none;
    max-width: auto;
    background-color: rgb(98 84 243);
    color: rgb(255 255 255);
    padding: 1.4rem 2.4rem;
    border: none;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
}

}
  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
}

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 3.5rem;
    max-width: 60rem;
  }
  p {
    color: rgb(24 24 29);
    opacity: .7;
    font-size: 1.65rem;
    line-height: 1.5;
    margin-top: 1rem;
    font-weight: 400;
}

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 80%;
  }
  .grid-two-column {
    grid-template-columns: repeat(2,1fr);
}
.grid {
  display: grid;
  gap: 9rem;
}.container {
  max-width: 120rem;
  margin: 0 auto;
}



.grid-two-column {
    grid-template-columns: repeat(2,1fr);
}

.grid {
    display: grid;
    gap: 9rem;
}

.container {
    max-width: 120rem;
    margin: 0 auto;
}
h1 {
  color: rgb(24 24 29);
  font-size: 6rem;
  font-weight: 900;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans',sans-serif;
}
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
