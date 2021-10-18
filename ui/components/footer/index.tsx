import { FC } from 'react'
import { Grid } from '@mui/material'
import LaunchIcon from '@mui/icons-material/Launch'

import { Routes } from 'constants/routes'
import { Container, FooterSubtitle, FooterTitle, Copyright } from './elements'
import SocialIcons from './social'

const logoSrc = require('assets/images/logo.png')
const Footer: FC = () => {
  return (
    <Container>
      <Grid container item xs={12} md={9} justifyContent='center'>
        <Grid item xs={12} md={3} justifyContent='center'>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterSubtitle href='mailto:info@fineleathergoods.com'>info@fineleathergoods.com</FooterSubtitle>
          <FooterSubtitle href='sms:1234567890'>123-456-7890</FooterSubtitle>
        </Grid>
        {footerItems.map(({ title, children, root }) => (
          <Grid item xs={12} md={3} key={`root-${title}`}>
            <FooterTitle>{title}</FooterTitle>
            {children.map(({ title: subtitle, isExternal, goesToPath }) => (
              <FooterSubtitle
                key={`subtitle-${subtitle}`}
                href={goesToPath}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
              >
                {subtitle}
                {isExternal ? <LaunchIcon /> : null}
              </FooterSubtitle>
            ))}
            {root ? (
              <>
                <FooterTitle>{title}</FooterTitle>
                {root.children.map(({ title: nestedSubtitle, isExternal, goesToPath }) => (
                  <FooterSubtitle
                    key={`nested-subtitle-${nestedSubtitle}`}
                    href={goesToPath}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                  >
                    {nestedSubtitle}
                    {isExternal ? <LaunchIcon /> : null}
                  </FooterSubtitle>
                ))}
              </>
            ) : null}
          </Grid>
        ))}
        <Grid
          item
          xs={12}
          md={3}
          justifyContent='center'
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <img src={logoSrc} height='200px' width='230px' alt='Fine Leather Goods logo' />
          <SocialIcons />
        </Grid>
        <Copyright>Copyright © {new Date().getFullYear()} Fine Leather Goods.</Copyright>
      </Grid>
    </Container>
  )
}

export default Footer

const footerItems: RootFooterItem[] = [
  {
    title: 'Links',
    children: [
      {
        title: 'Home',
        goesToPath: Routes.Home,
      },
      {
        title: 'Products',
        goesToPath: Routes.Products,
      },
    ],
  },
  {
    title: 'Legal',
    children: [
      {
        title: 'Privacy',
        goesToPath: 'https://github.com',
        isExternal: true,
      },
      {
        title: 'Terms',
        goesToPath: 'https://slack.com',
        isExternal: true,
      },
      {
        title: 'Data Policy',
        goesToPath: 'https://slack.com',
        isExternal: true,
      },
      {
        title: 'Cookie Policy',
        goesToPath: 'https://slack.com',
        isExternal: true,
      },
    ],
  },
]

export interface RootFooterItem {
  title: string
  children: FooterItem[]
  root?: RootFooterItem
}
export interface FooterItem {
  title: string
  goesToPath: string
  isExternal?: boolean
}
