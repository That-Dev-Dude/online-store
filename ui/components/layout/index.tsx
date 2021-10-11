import { FC } from 'react'
import { NextSeo, NextSeoProps } from 'next-seo'
import { styled } from '@mui/material'
import isPropValid from '@emotion/is-prop-valid'

import HideOnScroll from 'components/header/HideOnScroll'
import { tenantName, defaultSeo } from 'constants/seo'

const Layout: FC<Props> = ({ children, hideDrawer, ...restProps }) => {
  return (
    <>
      <SharedMetaTags {...restProps} />
      <HideOnScroll hideDrawer={hideDrawer}>
        <Root noPadding={restProps.noPadding}>{children}</Root>
      </HideOnScroll>
    </>
  )
}

const { openGraph: defaultOpenGraph } = defaultSeo
const SharedMetaTags: FC<Props> = ({ title = tenantName, imageUrl, description = defaultOpenGraph?.description }) => {
  const openGraph: NextSeoProps['openGraph'] = {
    ...defaultOpenGraph,
    description,
    title,
    images: imageUrl
      ? [
          {
            url: imageUrl,
          },
        ]
      : [],
  }
  return (
    <NextSeo
      title={title === tenantName ? tenantName : `${title} | ${tenantName}`}
      description={description}
      openGraph={openGraph}
    />
  )
}

export default Layout

export const layoutPadding = '1% 2% 10vh 2%'

interface RootProps {
  noPadding: Props['noPadding']
}
const Root = styled('div', { shouldForwardProp: isPropValid })<RootProps>`
  padding: ${({ noPadding }) => (noPadding ? '0' : layoutPadding)};
  width: 100%;
  min-height: 85vh;
  & a {
    color: ${({ theme: { palette } }) => palette.primary.main};
  }
`

interface Props {
  hideDrawer?: boolean
  title?: string
  imageUrl?: string
  description?: string
  noPadding?: boolean
}
