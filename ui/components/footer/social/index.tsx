import { FC } from 'react'

import { FlexContainer } from 'components/container'
import { instagramLink, facebookLink } from 'constants/contact'
import { SocialWrapper, SocialLink } from './elements'

const FacebookIcon = require('assets/svg/facebook.svg')
const InstagramIcon = require('assets/svg/instagram.svg')
const LinkedInIcon = require('assets/svg/linkedin-logo.svg')

const SocialIcons: FC = () => {
  return (
    <FlexContainer>
      <FlexContainer width='50%' justify='space-evenly'>
        <SocialLink href={facebookLink} target='_blank' rel='noopener noreferrer'>
          <SocialWrapper height='40px' width='40px' src={FacebookIcon} alt='Icon link to Facebook travel page' />
        </SocialLink>
        <SocialLink href={instagramLink} target='_blank' rel='noopener noreferrer'>
          <SocialWrapper height='40px' width='40px' src={InstagramIcon} alt='Icon link to Instagram page' />
        </SocialLink>
        <SocialLink href={instagramLink} target='_blank' rel='noopener noreferrer'>
          <SocialWrapper height='40px' width='40px' src={LinkedInIcon} alt='Icon link to Instagram page' />
        </SocialLink>
      </FlexContainer>
    </FlexContainer>
  )
}

export default SocialIcons
