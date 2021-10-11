import { FC } from 'react'
import { Button as MuiButton, CircularProgress, styled } from '@mui/material'

export const Button: FC<Props> = ({ onClick, disabled, isLoading, text }) => {
  return (
    <MuiButton variant='contained' onClick={onClick} color='primary' disabled={disabled}>
      {isLoading ? <CircularProgress color='info' size={22} /> : <Text>{text}</Text>}
    </MuiButton>
  )
}

const Text = styled('span')`
  color: ${({ theme: { palette } }) => palette.text.primary};
`

interface Props {
  disabled?: boolean
  onClick?: () => void | Promise<void>
  isLoading?: boolean
  text: string
}
