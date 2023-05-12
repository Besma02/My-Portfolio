import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Avatar, AvatarBadge,Container,Flex, Heading, List, ListIcon, ListItem, Text } from "@chakra-ui/react";

export default function Acceuil() {
  
  const position={
    position:'absolute',
    top:'30%',
    left:'40%'
  }
  return (
    <Container paddingTop={{sm:"100%",md:"80%",lg:"0%"}}  W={{base:"100%",md:"80%",lg:"60%"}}  >
    <Flex p="40px"gap="10px" alignContent="center" position sx={position} >
      <Avatar src="/img/besma.jpg" w="25%" h="25%" >
        <AvatarBadge w="40%" h="40%" bg="teal.400">
          <Text fontSize="32px">B</Text>
        </AvatarBadge>
      </Avatar>
      <div >
      <Heading initial={{x:-10}}animate={{x:0}}  as="h4" fontSize="24px" my="20px" ml="10px">BESMA HARZLI <br/><Text fontSize="14px" fontWeight="medium" mt="5px">FrontEnd developer<br/>& Graphic video designer</Text></Heading>
      <Text fontSize="18px">
        <List ml="10px">
         <ListItem>
          <ListIcon as={EmailIcon}/>besmaharzli@gmail.com <br/>
         </ListItem>
         <ListItem>
          <ListIcon as={PhoneIcon}/>99437105 <br/>
         </ListItem>
      </List>
       </Text>
      </div>
    </Flex>
    </Container>
  )
}
