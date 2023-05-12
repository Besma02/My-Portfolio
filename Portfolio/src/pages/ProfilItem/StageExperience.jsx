import { Button, Container,FormLabel,Heading,Input,Text} from '@chakra-ui/react'
import React from 'react'

export const StageExperience = () => {
  return (
    <Container bg="gray.100" p="20px"  mt="40px"W={{base:"100%",md:"80%",lg:"60%"}}>
         <Heading as="h3" textAlign="center" pb="10px" fontSize="36px" color="gray.600" >Expérience</Heading> 
         <Text w="500px" padding="20px" ligneHeigth="40px"  marginTop="10px" color="gray.600" fontSize="18px " >Mon expérience en tant qu’infographiste m’a permis d’acquérir toutes les connaissances nécessaires à la bonne exécution des tâches du poste à pourvoir. Régulièrement confronté aux aléas du métier, je suis capable de répondre aux imprévus en toute autonomie.
          Motivation, rigueur et écoute sont les maîtres mots de mon comportement professionnel.

          Intégrer votre entreprise, représente pour moi un réel enjeu d’avenir dans lequel mon travail et mon honnêteté pourront s’exprimer pleinement.
          </Text>
          
          <Input type="file" />
          <Button bg="teal.500" color="white" margin="10px">Download cv</Button>
    </Container>
  )
}
