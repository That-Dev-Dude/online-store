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
        <Title>
          Learn to code. Get Hired <br /> (Or 100% of your money back*)
        </Title>
        <Subtitle>
          Launch your tech career from beginner to job-ready professional in 22 weeks or less.
          <br />
          *Read more <Link href={Routes.Refund}>about our refund process</Link>
        </Subtitle>
        <Link passHref href={Routes.Programs}>
          <Button>Select a Program</Button>
        </Link>
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
  ${getMobileBreakpoint} {
    padding: 0;
    min-height: 40vh;
    align-items: flex-end;
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
  }
`

const Title = styled('h1')``
const Subtitle = styled('h2')`
  font-size: 1.2em;
`

export default Hero
