import { FC } from 'react'
import { Button, styled, useTheme } from '@mui/material'
import Link from 'next/link'

import { Root } from 'features/landing/shared'

const ApplyFooter: FC<Props> = ({ title, actionText, goesToPath }) => {
  const {
    palette: {
      primary: { main },
      text: { primary },
    },
  } = useTheme()
  return (
    <Root sx={{ backgroundColor: main }}>
      <CallToAction>
        <Title>{title}</Title>
        <Link passHref href={goesToPath}>
          <ApplyLinkButton>{actionText}</ApplyLinkButton>
        </Link>
      </CallToAction>
    </Root>
  )
}

interface Props {
  actionText: string
  goesToPath: string
  title: string
}

const ApplyLinkButton = styled(Button)`
  background-color: ${({ theme: { palette } }) => palette.text.primary};
  &:hover {
    background-color: ${({ theme: { palette } }) => palette.text.primary};
    opacity: 0.9;
  }
`
const CallToAction = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Title = styled('h2')`
  margin-top: 0;
`

export default ApplyFooter
