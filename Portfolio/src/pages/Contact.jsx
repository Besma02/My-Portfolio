
import { Button, Checkbox, Container, Flex, FormControl, FormLabel, Heading, Textarea } from "@chakra-ui/react"
import { Form,redirect } from "react-router-dom"

export default function Contact() {
 
  return (
   
    <Container w="500px" mt="60px"  p="20px 30px">
    <Form method="post" action="/Contact"  >
    <Heading>Contact me</Heading>
      <FormControl  mt="20px"  >
        <FormLabel > name:</FormLabel>
        <input type="text"   />
      </FormControl>
      <FormControl  mt="20px">
         <FormLabel > Email:</FormLabel>
        <input  type="email" name='title'  />
      </FormControl>
      <FormControl mt="20px">
        <FormLabel>description</FormLabel>
        <Textarea placeholder="entrer une description" name='description' bg="white" width={{base:"50%",md:"80%",lg:"100%"}}/>
      </FormControl>
      
      <FormControl >
      <Flex alignItems="center" alignContent="center" gap={4} mt="20px">
        <Checkbox size="lg"   colorScheme="teal" name="isPriority" mb="4px"/>
        <FormLabel>priority</FormLabel>
      </Flex>
      </FormControl>
    <Button type='submit' mt="20px"  bg="teal.400" colorScheme="teal">Envoyer</Button>
    </Form>
    </Container>
 
  )
}
export const contactAction = async ({ request }) => {
  const data = await request.formData()

  const task = {
    title: data.get('title'),
    description: data.get('description'),
    isPriority: data.get('isPriority') === ''
  }

  console.log(task)

  return redirect('/')
}
