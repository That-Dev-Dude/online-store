import { FC } from 'react'
import { styled, Button } from '@mui/material'
import Link from 'next/link'
import isPropValid from '@emotion/is-prop-valid'

import { Routes } from 'constants/routes'
import { getMobileBreakpoint } from 'hooks'

const Hero: FC = () => {
  return (
    <HeroRoot backgroundUrl='home.jpg'>
      <div>
        <Title>Fine Leather Goods</Title>
        <Subtitle>Made from ethically sourced materials.</Subtitle>
        <ActionContainer>
          <Link passHref href={Routes.Products}>
            <Button variant='outlined'>Shop</Button>
          </Link>
        </ActionContainer>
      </div>
    </HeroRoot>
  )
}

interface HeroRootProps {
  backgroundUrl?: string
}
export const HeroRoot = styled('div', { shouldForwardProp: isPropValid })<HeroRootProps>`
  width: 100vw;
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 2vh;
  ${({
    backgroundUrl,
    theme: {
      palette: { background },
    },
  }) =>
    backgroundUrl
      ? `
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), ${background.paper}),
    url(${require('assets/images/hero/' + backgroundUrl)});
  background-size: cover;
  `
      : ''}
  min-height: 70vh;
  ${getMobileBreakpoint} {
    padding: 0;
    min-height: 40vh;
    align-items: flex-end;
  }
`

const ActionContainer = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 5vh;
`

const Title = styled('h1')`
  text-align: center;
  margin: 0;
`
const Subtitle = styled('h2')`
  margin: 0;
  font-weight: normal;
  text-align: center;
  font-size: 1.2em;
`

export default Hero
