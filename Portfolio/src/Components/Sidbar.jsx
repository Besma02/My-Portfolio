import { List, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";



export default function Sidbar() {
  return (
    <List color="white" spacing={4} pl="50px" mt="6.3em">
      <ListItem>
        <NavLink to='/'>Acceuil</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/Profil'>Profil</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/Portfolio'>Portfolio</NavLink>
      </ListItem>
      <ListItem>
        <NavLink to='/Contact'>Contact</NavLink>
      </ListItem>
    </List>
  )
}
