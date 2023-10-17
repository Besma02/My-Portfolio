
import { EditIcon } from "@chakra-ui/icons";
import { List,ListIcon, ListItem, Container, Heading,Flex,Text } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
export default function Compétence() {
  return (
    <Container >
       <List  fontSize="24px" color="gray.600" spacing={5}w={{base:"100%",md:"80%",lg:"100%"}}>
       <Heading as="h3" textAlign="center" pb="10px" marginTop="20px" colorScheme="purple.600" w={{base:"100%",md:"80%",lg:"100%"}}  >Mes Compétences</Heading> 
       <ListItem>
      <ListIcon color="purple" as={EditIcon} /><span style={{fontSize:"18px"}} >Création et désign des sites web </span>
      </ListItem>

       <ListItem>
      <ListIcon color="purple" as={EditIcon}/><span style={{fontSize:"18px"}} >Traitement d'image et montage vidéo </span>
      </ListItem>
       
       <ListItem>
      <ListIcon color="purple" as={EditIcon}/><span style={{fontSize:"18px"}} >Traitement de son </span>
      </ListItem>
     
       <ListItem>
      <ListIcon color="purple" as={EditIcon}/><span style={{fontSize:"18px"}} >Travail en équipe et intégration </span>
      </ListItem>
      
       <ListItem>
      <ListIcon color="purple" as={EditIcon}/><span style={{fontSize:"18px"}} >Technologies et Nouveautés </span>
      </ListItem>
       </List>
       <Heading as="h3" textAlign="center" p="20px" colorScheme="purple.600" >Langue</Heading> 
       <Flex justifyContent="center" gap="10px"  >
       <CircularProgress value={80} color="teal.600" size='100px' thickness='4px' >
         <CircularProgressLabel pb="20px">80%</CircularProgressLabel>
         <Text fontSize="18px" textAlign="center" color="teal.600">Français</Text>
       </CircularProgress>
       <CircularProgress value={70} color="blue.600" size='100px' thickness='4px'>
         <CircularProgressLabel pb="20px">70%</CircularProgressLabel>
         <Text fontSize="18px" textAlign="center" color="blue.600">Anglais</Text>
       </CircularProgress>
       <CircularProgress value={100} color="red.600" size='100px' thickness='4px'>
         <CircularProgressLabel pb="20px">100%</CircularProgressLabel>
         <Text fontSize="18px" textAlign="center" color="red.600">Arabe</Text>
       </CircularProgress>
       </Flex>
       </Container>
  )
}
