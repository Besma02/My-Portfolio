
import { EditIcon } from "@chakra-ui/icons";
import { List,ListIcon, ListItem, Container, Heading,Flex,Text } from "@chakra-ui/react";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'
export default function Compétence() {
  return (
    <Container bg="gray.100" p="40px" mt="40px" w={{base:"100%",md:"80%",lg:"100%"}}>
       <List  fontSize="24px" color="gray.600" spacing={5}w={{base:"100%",md:"80%",lg:"100%"}}>
       <Heading as="h3" textAlign="center" pb="10px" colorScheme="purple.600" w={{base:"100%",md:"80%",lg:"100%"}}  >Mes Compétences</Heading> 
       <ListItem>
      <ListIcon color="purple" as={EditIcon}/>Création et désign des sites web
      </ListItem>

       <ListItem>
      <ListIcon color="purple" as={EditIcon}/>Traitement d'image et montage vidéo
      </ListItem>
       
       <ListItem>
      <ListIcon color="purple" as={EditIcon}/>Traitement de son
      </ListItem>
     
       <ListItem>
      <ListIcon color="purple" as={EditIcon}/>Travail en équipe et intégration
      </ListItem>
      
       <ListItem>
      <ListIcon color="purple" as={EditIcon}/>Technologies et Nouveautés
      </ListItem>
       </List>
       <Heading as="h3" textAlign="center" p="20px" colorScheme="purple.600" >Langue</Heading> 
       <Flex justifyContent="center" gap="10px"  >
       <CircularProgress value={80} color="teal.600" size='120px' thickness='4px' >
         <CircularProgressLabel pb="20px">80%</CircularProgressLabel>
         <Text fontSize="18px" textAlign="center" color="teal.600">Français</Text>
       </CircularProgress>
       <CircularProgress value={70} color="blue.600" size='120px' thickness='4px'>
         <CircularProgressLabel pb="20px">70%</CircularProgressLabel>
         <Text fontSize="18px" textAlign="center" color="blue.600">Anglais</Text>
       </CircularProgress>
       <CircularProgress value={100} color="red.600" size='120px' thickness='4px'>
         <CircularProgressLabel pb="20px">100%</CircularProgressLabel>
         <Text fontSize="18px" textAlign="center" color="red.600">Arabe</Text>
       </CircularProgress>
       </Flex>
       </Container>
  )
}
