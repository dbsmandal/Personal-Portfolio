import React from 'react'
import styled from 'styled-components'

const Cardnew = (props) => {

    return (
        <Wrapper>


            {props.details.map((value, index) => (

                    <div className="card-main-sub"key={index}> 
                    <div className="card-main" key={index}>
                        <div className="image-container">
                            <img src={value.img} alt="" />
                        </div>
                        <div className="card-data">
                            <h2 className='heading1'>Skill: {value.skill}</h2>
                            <p className='para1'>description : {value.description}</p>
                            <a href="https://github.com/dbsmandal"
                                target="_blank">
                                <button className='Card-btn'> See My Github Profile</button>

                            </a>

                        </div>
                    </div>
                </div>

            ))

            }


        </Wrapper>
    )
}
const Wrapper = styled.section`
{
    border: 5px solid ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.btn};
    margin:10px;
}
.card-main{
    height: auto;
    text-align: center;
    margin: 10px;
    display: flex;
    flex-direction: row;
}
.card-main-sub{
    border: 1px solid ${({ theme }) => theme.colors.btn};
    color: ${({ theme }) => theme.colors.btn};
    background-color: rgb(249 249 255);
    grid-auto-rows: 100px;
  
}

.image-container{
    width: 700px;
    height: 500px;

}
.image-container img{
    height: 400px;
    width: 600px;
    border: 10px solid skyblue
    margin: 20px;
}
.card-data{
    text-align: start;
    width: 1300px;
    margin: 40px;
}
.heading1{
    font-size: 50px;
    font-style: oblique;
}
.para1{
    font-size: 30px;
    font-style: italic;
    font-weight: bold;
}
.Card-btn{
    height: 100px;
    width: 400px;
    font-size: 30px;
    margin-left: 380px;
    cursor: pointer;
    background-color: rgb(98, 84, 243);
    color: rgb(255, 255, 255);
    border-style: solid;
    border-width: 0.1rem;
    text-transform: capitalize;

    &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        border: 1px solid ${({ theme }) => theme.colors.btn};
        color: ${({ theme }) => theme.colors.btn};
        transform: scale(0.9);
      }
}


`
export default Cardnew
