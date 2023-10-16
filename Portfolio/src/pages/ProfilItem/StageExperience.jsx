import { Button, Container,FormLabel,Heading,Input,Link,Text} from '@chakra-ui/react'
import React from 'react'

export const StageExperience = () => {
  return (
    <Container bg="gray.100" p="20px"  mt="40px" width={{base:"100%",md:"80%",lg:"100%"}}>
         <Heading as="h3" textAlign="center" pb="10px" fontSize="36px" color="gray.600" >Expérience</Heading> 
         <Text w="500px" padding="20px" ligneHeigth="40px"  marginTop="10px" color="gray.600" fontSize="16px" width={{base:"100%",md:"80%",lg:"100%"}} ><p>Mon expérience  m’a permis d’acquérir toutes les connaissances nécessaires à la bonne exécution des tâches du poste à pourvoir. Régulièrement confronté aux aléas du métier, je suis capable de répondre aux imprévus en toute autonomie.</p><br/>
        
          <p>Intégrer votre entreprise, représente pour moi un réel enjeu d’avenir dans lequel mon travail et mon honnêteté pourront s’exprimer pleinement.</p> <br/>
          <p> Motivation, rigueur et écoute sont les maîtres mots de mon comportement professionnel et je vous invite ci-joint pour découvrir mon cv.</p>
          </Text>
          
           <a href='img/besma_cv.pdf' download='besma_cv.pdf'>
          <Button bg="teal.500" color="white" margin="10px">Download cv</Button>
          </a>
    </Container>
  )
}
