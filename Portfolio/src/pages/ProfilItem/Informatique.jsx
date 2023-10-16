
import { List,ListIcon, ListItem, Container, Heading,Text } from "@chakra-ui/react";
import {  EditIcon } from "@chakra-ui/icons";

export default function Informatique() {
  return (
    <Container bg="gray.100" p="40px" mt="40px" W={{base:"100%",md:"80%",lg:"60%"}}>
      <List   spacing={6}>
       <Heading as="h2" textAlign="center" pb="10px" color="gray.600" >Logiciles</Heading> 
       <ListItem>
      <Heading   fontSize="20px" color="teal.600" fontWeight="medium"><ListIcon color="teal.400" as={EditIcon}/>Bureatique :</Heading><Text fontSize="20px"> Word,Excel</Text>
      </ListItem>

       <ListItem>
       <Heading  fontSize="20px" color="teal.600" fontWeight="medium"><ListIcon color="teal.400" as={EditIcon}/>Traitement Graphique :</Heading><Text fontSize="20px">Photoshop,Illustrator,Indesign,Powerpoint</Text>
      </ListItem>
       
       <ListItem>
       <Heading  fontSize="20px" color="teal.600" fontWeight="medium"><ListIcon color="teal.400" as={EditIcon}/>Montage vidéo :</Heading><Text fontSize="20px">Adobe premiére,After Effect,FinalCutPro,Avid,adobe audition</Text>
      </ListItem>
     
       <ListItem>
       <Heading  fontSize="20px" color="teal.600" fontWeight="medium"><ListIcon color="teal.400" as={EditIcon}/>Developpement Web :</Heading><Text fontSize="20px">Html,Css,Bootstrap,JavaScript,Jquery,Reactjs,ChakraUI,Php,Msql,sql,Wordpress,JSON server,Github...</Text>
      </ListItem>
      
       </List>
    </Container>
  )
}
