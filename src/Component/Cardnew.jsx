import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from '../style/Button'

const Cardnew = (props) => {

    return (
        <Wrapper  className="section">
                  <h2 className="common-heading">======My Skills======</h2>
                  <div className="container grid grid-three-column">

            {props.details.map((value, index) => (
                <div key={index} className="card">
                    <figure>
                        <img src={value.img} alt="CardImage" />
                    </figure>
                    <div className="card-data">
                        <h3>Skills::{value.skill}</h3>
                        <p>Description::{value.description}</p>
                        <a href="https://github.com/dbsmandal"
                            target="_blank">
                            <Button className='btn'> See My Github Profile</Button>

                        </a>
                        <NavLink to="/MySkills">
                  <Button className="btn">Read More</Button>
                </NavLink>
                    </div>

                </div>


            ))

            }
                </div>


        </Wrapper>
    )
}
const Wrapper = styled.section`
padding: 9rem 0;
background-color: ${({ theme }) => theme.colors.bg};
.common-heading {
  color: darkblue;
  background-color: skyblue;
}
.container {
  max-width: 120rem;
}

.card {
  border: 0.1rem solid rgb(170 170 170 / 40%);
  background-color: aquamarine;

  .card-data {
    padding: 0 2rem;
  }

  h3 {
    margin: 2rem 0;
    font-weight: bold;
    font-size: 2.4rem;
  }
  p {
    color: rgb(24 24 29);
    font-size: 1.75rem;
}
  .btn {
    margin: 2rem auto;
    background-color: rgb(0 0 0 / 0%);
    border: 0.1rem solid rgb(98 84 243);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(98 84 243);
    font-size: 1.4rem;

    &:hover {
      background-color: rgb(98 84 243);
      color: #fff;
    }
  }
}

figure {
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: all 0.5s linear;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.2s linear;
    cursor: pointer;
  }
  &:hover::after {
    width: 100%;
  }
  &:hover img {
    transform: scale(1.2);
  }
  img {
    max-width: 90%;
    margin-top: 1.5rem;
    height: 20rem;
    transition: all 0.2s linear;
  }
}

@media (max-width: ${({ theme }) => theme.media.tab}) {
  .grid-three-column {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  .grid-two-column,
  .grid-three-column {
    grid-template-columns: 1fr;
  }
}
  
`
export default Cardnew;





//     <div className="card-main-sub"key={index}> 
//     <div className="card-main" key={index}>
//         <div className="image-container">
//             <img src={value.img} alt="" />
//         </div>
//         <div className="card-data">
//             <h2 className='heading1'>Skill: {value.skill}</h2>
//             <p className='para1'>description : {value.description}</p>
//             <a href="https://github.com/dbsmandal"
//                 target="_blank">
//                 <button className='Card-btn'> See My Github Profile</button>

//             </a>

//         </div>
//     </div>
// </div>
