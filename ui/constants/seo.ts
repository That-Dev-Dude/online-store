import { DefaultSeoProps } from 'next-seo'

export const tenantName = 'Fine Leather Goods'

export const defaultSeo: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://e-commerce.com',
    site_name: tenantName,
    description: 'Buy Things!',
    title: tenantName,
  },
  description: 'Buy Things!',
  title: tenantName,
}
