import { FC } from 'react'
import { styled, Grid } from '@mui/material'
import isPropValid from '@emotion/is-prop-valid'

import { getMobileBreakpoint } from 'hooks'

export const FlexContainer = styled('div')<Props>`
  display: flex;
  justify-content: ${({ justify = 'center' }) => justify};
  align-items: ${({ align = 'center' }) => align};
  flex-direction: ${({ direction = 'row' }) => direction};
  ${({ height }) => (height ? `height: ${height};` : '')}
  ${({ width }) => (width ? `width: ${width};` : '')}
`
interface Props {
  justify?: string
  align?: string
  width?: string
  height?: string
  direction?: string
}

interface RootProps {
  isOffColor?: boolean
}
export const Root = styled('div', { shouldForwardProp: isPropValid })<RootProps>`
  width: 100vw;
  background-color: ${({ theme: { palette }, isOffColor }) =>
    isOffColor ? palette.background.default : palette.background.paper};
  display: flex;
  justify-content: center;
  padding: 5vh 0;
  ${getMobileBreakpoint} {
    padding: 2% 0;
  }
`

export const SubRoot = styled(Grid)`
  max-width: 100vw;
  ${getMobileBreakpoint} {
    max-width: 70vw;
  }
`

export const Container = styled(Grid)``

export const Title = styled('h3')`
  color: ${({ theme: { palette } }) => palette.primary.main};
`

export const Subtitle = styled('p')`
  color: ${({ theme: { palette } }) => palette.text.primary};
`

export const subRootSpacing = 3

interface RowProps {
  isOffColor?: boolean
  title?: string
  id?: string
}
export const Row: FC<RowProps> = ({ isOffColor, title, id, children }) => (
  <Root isOffColor={isOffColor} id={id}>
    <SubRoot container spacing={subRootSpacing}>
      <Grid item xs={12}>
        {title ? <RowTitle>{title}</RowTitle> : null}
        {children}
      </Grid>
    </SubRoot>
  </Root>
)

const RowTitle = styled('h2')`
  margin-top: 0;
`
