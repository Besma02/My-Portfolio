import { Grid, GridItem } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar"
import Sidbar from "../Components/Sidbar"





export default function RootLayout() {
  return (
    <div >
    
      <Grid templateColumns="repeat(6,1fr)">
        <GridItem as="aside" colSpan={{base:6,md:2,lg:1}} bg="teal.400" minH={{lg:'100vh'}}>
      <Sidbar/>
      </GridItem>
      <GridItem as="main" colSpan={{base:6,md:4,lg:5}}   >
        <Navbar/>
        
      <Outlet />
      
      </GridItem>
     
      </Grid>
    
    </div>
  )
}
