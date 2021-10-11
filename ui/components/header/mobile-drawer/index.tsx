import { FC, useRef, useState } from 'react'
import {
  ClickAwayListener,
  styled,
  IconButton,
  Drawer as MuiDrawer,
  List,
  ListItemText,
  ListItem,
  Box,
} from '@mui/material'
import { Menu } from '@mui/icons-material'
import { useOutsideClick } from '@caldwell619/react-hooks'

import { FlexContainer } from 'components/container'
import DarkModeToggle from '../DarkModeToggle'
import SocialIcons from 'components/footer/social'

const logoSrc = require('assets/images/logo.png')

export const MobileDrawer: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const openDrawer = () => {
    setIsDrawerOpen(true)
  }
  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  const ref = useOutsideClick<HTMLDivElement>(useRef<HTMLDivElement>(null), closeDrawer)

  return (
    <>
      <FlexContainer justify='space-between' width='100%'>
        <img src={logoSrc} height='32px' width='32px' alt='Glendale Chiropractic logo' />
        <IconButton onClick={openDrawer} color='inherit' aria-label='open drawer' edge='start'>
          <Menu />
        </IconButton>
      </FlexContainer>
      <Drawer ref={ref} variant='persistent' anchor='right' open={isDrawerOpen}>
        <Box>
          <List>
            <ListItem>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>About</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>FAQ</ListItemText>
            </ListItem>
            <ListItem>
              <DarkModeToggle />
            </ListItem>
          </List>
          <SocialIcons />
        </Box>
      </Drawer>
    </>
  )
}

const Drawer = styled(MuiDrawer)(({ theme }) => ({
  ...theme.mixins.toolbar,
  '& .MuiDrawer-paper': {
    width: 240,
  },
}))
