import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
    return (
        <Container>
   
        <Section name="Model S" 
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existiong Inventory"
        
        />
        <Section name="Model Y" 
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existiong Inventory"/>

        <Section name="Model X" 
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existiong Inventory"/>

        
<Section name="Model 3" 
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existiong Inventory"/>

        
<Section name="Lowest Cost Solar Panel in America" 
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText=" order now"
        rightBtnText="LEarn More"/>

<Section name="Solar for new Roof" 
        description="Solar Roof Cost Less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnText=" order now"
        rightBtnText="LEarn More"/>


<Section name="Accessories" 
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText=" Shop now"
      />
        </Container>
    )
}

export default Home

const Container=styled.div`
height:100vh;
`