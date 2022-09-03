import React from "react";
import styled from "styled-components";
import { Button } from "../style/Button";
import { NavLink } from "react-router-dom";
import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>Ready to get started?</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section  */}

      <footer>
        <div className="container grid grid-four-column">
          <div className="footer-about">
            <h3>Dbsmandal</h3>
            <p>Hi, I am Dipak Mandal And it is my Personal Portfolio</p>
          </div>

          {/* 2nd column */}
          <div className="footer-subscribe">
            <h3>Subscribe to get important updates</h3>
            <form  action="#"
         >
              <input
                   style={{fontSize: 30 ,height:70,}}
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input style={{fontSize: 30 ,height:70, backgroundColor:"skyblue", 
            transformStyle: 0.9 ,cursor:"pointer"}}
              type="submit" value="Subscribe" />
            </form>
          </div>

          {/* 3rs column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
              <a
                  href="https://www.linkedin.com/feed/?trk=nav_back_to_linkedin"
                  target="_blank">
                  <FaLinkedin className="icons" />
                </a>
            
              </div>
              <div>
              <a
               href="https://www.facebook.com/"
               target="_blank">
                <FaFacebook className="icons" />
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/dbsmandal"
                  target="_blank">
                  <FaGithub className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 4th column  */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>+91 9734078407</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>
              @{new Date().getFullYear()} Dbsmandal. All Rights Reserved
            </p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .grid-two-column {
    grid-template-columns: repeat(2, 1fr);
}
.grid {
  display: grid;
  gap: 9rem;
}

  .contact-short-btn {
    justify-self: end;
    align-self: center;
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .grid-four-column {
      grid-template-columns: 1fr 1.2fr 0.5fr 0.8fr;
  }
  .container {
    max-width: 120rem;
    margin: 0px auto;
    font-size: 2rem;
}
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
    footer p {
      color: rgb(255, 255, 255);
  }p {
    
    opacity: 0.7;
    font-size: 1.65rem;
    line-height: 1.5;
    margin-top: 1rem;
    font-weight: 400;
}

    .footer-bottom--section {
      padding-top: 1rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }
  
footer.input{

}

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;