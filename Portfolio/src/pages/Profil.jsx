import { Container,Text,Heading } from "@chakra-ui/react";



export default function Profil() {
  return (
    
   <Container bg="gray.100" p="20px"  mt="80px"W={{base:"100%",md:"80%",lg:"60%"}} >
    <Heading as="h3" textAlign="center" pb="10px" fontSize="36px" color="gray.600" >A propos de moi</Heading>
    <Text  w="500px" padding="20px" ligneHeigth="40px"  marginTop="5px" color="gray.600" fontSize="18px " >
      J'ai poursuivi mes études à l'Institut Supérieur des Arts Multimédias (isamm) dans l'audiovisuel;
      Je ai obtenu mon diplôme dans la spécialité "montage vidéo graphique". J'ai débuté dans la profession et j'ai beaucoup évolué depuis.
      J'ai appris à maîtriser les outils de design graphique et de montage vidéo, des années plus tard, j'ai décidé de se lancer 
      dans le domaine du web, attirée par cet univers (les nouvelles techniques) j'ai voulu faire ma deuxième formation, actuellement je suis en 2e année développement front end.
      Je serais ravi de découvrir de nouveaux programmes et des nouvelles technologies et de m'enrichir. 
    </Text>
   </Container>
    
   
    
  )
}
