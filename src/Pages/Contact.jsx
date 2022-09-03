import React from "react";
import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    .common-heading {
      font-size: 3.8rem;
      font-weight: 600;
      margin-bottom: 6rem;
      text-transform: capitalize;
      text-align: center;
      
  }
    .container {
      margin-top: 6rem;
      text-align: center;
      border: 1px solid;
      border-color: skyblue;
      padding: 2rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          .input1{
            height: 3rem;
            width: auto
            font-size:3 rem

        

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  }
  .container .contact-form .contact-inputs {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

  `;

  return (
    <Wrapper>
      <h2 className="common-heading">Feel Free to Contact us</h2>
      
   
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14435.909441172013!2d87.8466875!3d25.2376875!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3f87e82ba80a9c1c!2sKataha%20Diara%20High%20School%20(H.S.)%2C!5e0!3m2!1sen!2sin!4v1662190901123!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "5px solid skyblue"
        }}
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
            <input className="input1"
              type="text"
              name="username"
              placeholder="username"
              style={{    fontSize: 30}}
              autoComplete="off"
              required
            />

            <input className="input1"
                style={{    fontSize: 30}}
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea className="input1"
                style={{    fontSize: 30}}
              name="message"
              placeholder="Write your Meassage"
              cols="10"
              rows="6"
              autoComplete="off"
              required></textarea>

            <input  style={{fontSize: 30 ,height:70, backgroundColor:"skyblue", 
            transform: 0.9}} className="input" type="submit" value="send" />
          </form>
        </div>
      </div>
    </Wrapper>
  );
};

export default Contact;