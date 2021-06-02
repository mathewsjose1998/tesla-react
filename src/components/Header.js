import React,{useState} from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import {selectCars} from '../features/car/carSlice'
import {useSelector} from 'react-redux';


const Header = () => {
    const [burgerStatus, setBurgerStatus]=useState(false);
    const cars=useSelector(selectCars);
    console.log(cars);
    return (
        <Container>
            <Logo>
                <img src="images/logo.svg" alt="" />
            </Logo>
            <Menu>
                {cars && cars.map((car,index)=>(
             
                     <a key={index} href="#">{car}</a> 
                ))}
        
              {/* <a href="#">Model S</a> 
              <a href="#">Model Y</a>
              <a href="#">Model X</a>
              <a href="#">Model 3</a> */}

            </Menu>
            <RightContainer>
                    <a href="#">Shop</a>
                <a href="#">Tesla Account</a> 

                <CustumMenu onClick={()=>setBurgerStatus(true)}/>


            </RightContainer>       
          <BurgerNav show={burgerStatus}>
                <CustomWrap>
                         <CustomClose onClick={()=>setBurgerStatus(false)}/>
                </CustomWrap>
                {cars && cars.map((car,index)=>(
             
             <li><a key={index} href="#">{car}</a></li>
        ))}
                

                <li><a href="#">Trade-in</a></li>
                <li><a href="#">CyberTruck</a></li>
                <li><a href="#">Roadster</a></li>
                <li><a href="#">Charging</a></li>
                <li><a href="#">Power</a></li>
            </BurgerNav>
            
          
            
        </Container>
    )
}

export default Header

const Container =styled.div`
z-index:1;
padding:0 20px;
width:100%;
position:fixed;
min-height:60px;
display:flex;
padding:0 20px;
align-items:center;
justify-content: space-between;




`

const Logo=styled.div`

margin-top:30px;

min-height:60px;

width:100px;
background-repeat:no-repeat;
`

const Menu=styled.div`
padding:20px;
display:flex;

align-items:center;

a{
    padding:0 15px;
    font-weight:600;
    text-transform:uppercase;
}

@media(max-width:768px){
    display:none;
}

`





const RightContainer=styled.div`
display:flex;
align-items:center;

a{
    padding:0 10px;
    font-weight:600;
}
`

const CustumMenu=styled(MenuIcon)`
cursor:pointer;
margin-right:10px;

`

const BurgerNav=styled.div`
top:0;
right:0;
bottom:0;
position:fixed;
background:white;
width:300px;
display:flex;
flex-direction:column;
text-align:start;
font-weight:600;

padding:50px 15px;;
z-index:20;
list-style: none;
transform:${props=>props.show ? 'translateX(0)':'translateX(100%)'};
transition:  ease-in 300ms;

li{
    padding-top:25px;
    padding-left:20px;
    padding-bottom:10px;
    border-bottom:solid 0.5px rgba(0,0,0,0.2);
    display:flex;
    align-items:center;
   

}
a{

}



`
const CustomWrap=styled.div`
display:flex;
justify-content:flex-end;

`

const CustomClose=styled(CloseIcon)`
cursor:pointer;
`