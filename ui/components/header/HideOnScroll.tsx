import React, { FC } from 'react'
import { useScrollTrigger, Slide, AppBar, IconButton, useTheme } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import Link from 'next/link'

// import { ActiveLink } from 'components/link'
import { TitleProps, LeftGroup, LogoContainer, Root, Toolbar, Title, Settings } from './elements'
import DarkModeToggle from './DarkModeToggle'
import { Routes } from 'constants/routes'
import { useIsMobile } from 'hooks'
import { MobileDrawer } from './mobile-drawer'

// import { InputWithIcon } from 'components/text-field'
const logoSrc = require('assets/images/logo.png')

const HideOnScroll: FC<Props> = ({ children }) => {
  const trigger = useScrollTrigger()

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

const HideAppBar: FC<Props> = ({ children }) => {
  const {
    palette: {
      text: { primary },
    },
  } = useTheme()
  const isMobile = useIsMobile()
  return (
    <Root>
      <HideOnScroll>
        <AppBar sx={{ zIndex: 100000, height: '30px' }} position='fixed'>
          <Toolbar variant='dense'>
            {isMobile ? (
              <MobileDrawer />
            ) : (
              <>
                <LeftGroup>
                  <LogoTitle />
                  {/* <ActiveLink passHref href={Routes.Home}>
                    <HeaderLinkContainer>
                      <HeaderLink>Programs</HeaderLink>
                    </HeaderLinkContainer>
                  </ActiveLink> */}
                </LeftGroup>
                <Settings>
                  <Link passHref href={Routes.Home}>
                    <IconButton sx={{ marginRight: '30px', color: primary }} size='small'>
                      <ShoppingCart color='primary' />
                    </IconButton>
                  </Link>
                  <DarkModeToggle />
                </Settings>
              </>
            )}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      {children}
    </Root>
  )
}

export const LogoTitle: FC<TitleProps> = props => (
  <Link href={Routes.Home}>
    <a>
      <LogoContainer>
        <img src={logoSrc} height='32px' width='32px' alt='Online Store logo' />
        <Title {...props}>Online Store</Title>
      </LogoContainer>
    </a>
  </Link>
)

interface Props {
  children: React.ReactElement
  hideDrawer?: boolean
}

export default HideAppBar
