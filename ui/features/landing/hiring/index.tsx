import { FC } from 'react'
import { styled, Button, Grid } from '@mui/material'
import Link from 'next/link'

import { Root, SubRoot } from '../shared'
import { FlexContainer } from 'components/container'
import avatarOne from 'assets/images/avatar-1.jpg'
import avatarTwo from 'assets/images/avatar-2.jpg'
import avatarThree from 'assets/images/avatar-3.png'
import { Routes } from 'constants/routes'

const Hiring: FC = () => {
  return (
    <Grid container spacing={2} justifyContent='flex-end' sx={{ marginTop: '2vh' }}>
      <AvatarsContainer item xs={12} lg={5} justifyContent='flex-start'>
        <AvatarContainer>
          <Avatar height='130px' width='130px' src={avatarTwo} sx={{ marginRight: '40px' }} alt='Avatar Two' />
        </AvatarContainer>
        <AvatarContainer justify='flex-start'>
          <Avatar height='90px' width='90px' src={avatarOne} alt='Avatar One' />
        </AvatarContainer>
        <AvatarContainer justify='flex-end'>
          <Avatar
            height='170px'
            width='170px'
            src={avatarThree}
            sx={{ marginRight: '40px', marginTop: '-70px' }}
            alt='Avatar Three'
          />
        </AvatarContainer>
      </AvatarsContainer>
      <TextContainer item xs={12} lg={6}>
        <h2>Hire Tech Talent</h2>
        <p>
          Diversify, de-risk, and fast-track your hiring process for free. Our curriculum caters to the needs of
          employer partners, so you can be sure that your next hire will thrive in their role and continue to evolve
          with the fast-paced tech industry. No fees, just talent backed by a Salary Refund Guarantee.
        </p>
        <Link passHref href={Routes.Employers}>
          <Button>Learn More About Our Candidates</Button>
        </Link>
      </TextContainer>
    </Grid>
  )
}

const Avatar = styled('img')`
  border-radius: 100%;
`
const AvatarContainer = styled(FlexContainer)`
  /* height: 100px; */
`
const AvatarsContainer = styled(Grid)``

const TextContainer = styled(Grid)``

export default Hiring
