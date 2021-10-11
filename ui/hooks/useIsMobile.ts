import { Theme, useMediaQuery, useTheme } from '@mui/material'

export const useIsMobile = () => {
  const {
    breakpoints: { down },
  } = useTheme()
  const isMobile = useMediaQuery(down('sm'))
  return isMobile
}

export const getMobileBreakpoint = ({
  theme: {
    breakpoints: { up },
  },
}: {
  theme: Theme
}) => up('sm')
