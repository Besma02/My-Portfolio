import { AddIcon, EditIcon, ExternalLinkIcon, RepeatIcon,HamburgerIcon  } from '@chakra-ui/icons'
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbarham = () => {
  return (
    <div className='menuRes'>
<Menu >
  <MenuButton
    as={IconButton}
    aria-label='Options'
    icon={<HamburgerIcon />}
    variant='outline'
    
  />
  <MenuList >
    <MenuItem  >
      <Link to='/'>Accuil</Link>
    </MenuItem>
    <MenuItem  >
    <Link to='/Profil'>Profil</Link>
    </MenuItem>
    <MenuItem  >
    <Link to='/Portfolio'>Portfolio</Link>
    </MenuItem>
    <MenuItem  >
    <Link to='/Contact'> Contact</Link>
    </MenuItem>
  </MenuList>
</Menu>
</div>
  )
}

export default Navbarham