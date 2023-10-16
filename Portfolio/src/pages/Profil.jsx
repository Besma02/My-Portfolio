import { Container,Text,Heading } from "@chakra-ui/react";



export default function Profil() {
  return (
    
   <Container bg="gray.100" p="20px"  mt="80px" width={{base:"100%",md:"80%",lg:"100%"}} className='profil' >
    <Heading as="h3" textAlign="center" pb="10px" fontSize="36px" color="gray.600" width={{base:"100%",md:"80%",lg:"100%"}} >A propos de moi</Heading>
    <Text  w="400px" padding="10px 20px 10px 10px" ligneHeigth="60px"  marginTop="5px" color="gray.600" fontSize="16px " width={{base:"100%",md:"80%",lg:"100%"}}>
      <p>Je m'appelle Besma Harzli, je suis diplomée de
     l'Institut Supérieur des Arts Multimédias (isamm) en audiovisuel
      dans la spécialité "montage vidéo graphique". J'ai débuté dans la profession et j'ai beaucoup évolué depuis.</p> <br></br>
      <p> Des années plus tard, c'était un grand défi pour moi de franchir le pas 
      dans le domaine du web , actuellement je suis en terminal (3éme année développement full stack).</p><br/>
      <p>Je serais ravi pour découvrir de nouveaux programmes et des nouvelles technologies et de m'enrichir dans mon parcours professionnel.</p>
    </Text>
   </Container>
    
   
    
  )
}
