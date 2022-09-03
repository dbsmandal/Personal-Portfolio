import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    margin-left: 1rem;
    margin-right: 1rem;
   
    .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 2rem;
      text-transform: capitalize;
      text-align: center;
  }
    .container {
      margin-top: 2rem;
      text-align: center;
      padding: 2rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          
          
        
      
    }
  }
  .container .contact-form .contact-inputs input[type="submit"] {
    cursor: pointer;
    transition: all 0.2s ease 0s;
}
  .container .contact-form .contact-inputs {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}
input[type="submit"] {
  max-width: 16rem;
  margin-top: 2rem;
  background-color: rgb(98, 84, 243);
  color: rgb(255, 255, 255);
  padding: 1.4rem 2.2rem;
  border-style: solid;
  border-width: 0.1rem;
  text-transform: capitalize;
  font-size: 1.8rem;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.btn};
    transform: scale(0.9);
  }
}
input, textarea {
  max-width: 50rem;
  color: rgb(33, 37, 41);
  padding: 1.6rem 2.4rem;
  border: 1px solid rgba(98, 84, 243, 0.5);
  text-transform: capitalize;
  box-shadow: rgb(0 0 0 / 16%) 0px 1px 4px;
  font-size: 2rem;
}
 
  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact us</h2>
      
   
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14435.909441172013!2d87.8466875!3d25.2376875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f87e82ba80a9c1c!2sKataha%20Diara%20High%20School%20(H.S.)%2C!5e0!3m2!1sen!2sin!4v1662190901123!5m2!1sen!2sin"
        width="100%"
        height="500" 
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
          
        </iframe>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mbjbdjqz"
            method="POST"
            className="contact-inputs">
            <input 
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input 
           
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea 
                
              name="message"
              placeholder="Write your Meassage"
              cols="10"
              rows="6"
              autoComplete="off"
              required></textarea>

            <input className="input" type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;