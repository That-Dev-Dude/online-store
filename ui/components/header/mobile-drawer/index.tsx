import { FC, useRef, useState } from 'react'
import { Badge, styled, IconButton, Drawer as MuiDrawer, List, ListItemText, ListItem, Box } from '@mui/material'
import { Menu } from '@mui/icons-material'
import { useOutsideClick } from '@caldwell619/react-hooks'

import { Routes } from 'constants/routes'
import { ShoppingCart } from '@mui/icons-material'
import Link from 'next/link'
import { FlexContainer } from 'components/container'
import DarkModeToggle from '../DarkModeToggle'
import SocialIcons from 'components/footer/social'
import { useShoppingCart } from 'hooks/useCart'

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
  const { cartCount } = useShoppingCart()
  return (
    <>
      <FlexContainer justify='space-between' width='100%'>
        <img src={logoSrc} height='32px' width='32px' alt='Glendale Chiropractic logo' />
        <div>
          <Link passHref href={Routes.Cart}>
            <IconButton sx={{ marginRight: '30px' }} size='small'>
              <Badge badgeContent={cartCount} color='primary'>
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Link>
          <IconButton onClick={openDrawer} color='inherit' aria-label='open drawer' edge='start'>
            <Menu />
          </IconButton>
        </div>
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
