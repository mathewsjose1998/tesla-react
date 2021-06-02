import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Section = ({name,description,backgroundImg,leftBtnText,rightBtnText}) => {
    return (
        <Wrap image={backgroundImg} >
            <Fade bottom>
                <ItemText>
                    <h1>{name}</h1>
                <p>{description}</p>
                </ItemText>
            </Fade>
          
            <Buttons>
                <Fade bottom> 
                        <ButtonGroup>
                         <LeftButton>
                                    {leftBtnText}
                         </LeftButton>
                            {rightBtnText &&
                         <RightButton>
                            {rightBtnText}
                         </RightButton>
                        }
                            
                        </ButtonGroup>
                </Fade>
            <DownArrow src="/images/down-arrow.svg"/>
        </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap=styled.div`
z-index:10;
widht:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image:url("/images/${props=>props.image}");
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

`

const ItemText=styled.div`
padding-top:15vh;
text-align:center;


`
const Buttons=styled.div`

`

const ButtonGroup =styled.div`

display:flex;
@media (max-width:768px){
    flex-direction:column;
}
`


const LeftButton=styled.div`
padding:15px;
width:250px;
margin:10px;
color:white;
border-radius:30px;
opacity:0.85;
text-transform:uppercase;
cursor:pointer;

background-color:rgba(23,26,32,0.8);
`


const RightButton =styled(LeftButton)`
background-color:white;
color:black;
opacity:0.85;


`

const DownArrow=styled.img`

height:40px;
animation:animateDown infinite 1.5s;
overflow-x:hidden;
`