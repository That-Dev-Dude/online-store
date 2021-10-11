import { FC } from 'react'
import { GridSize } from '@mui/material'
import ContactSupportIcon from '@mui/icons-material/ContactSupport'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import MenuBookIcon from '@mui/icons-material/MenuBook'

import { Root, SubRoot, Container, Title, Subtitle } from '../shared'
import { useIsMobile } from 'hooks'

const ItWorks: FC = () => {
  const isMobile = useIsMobile()
  return (
    <>
      <h2>Why does this process work?</h2>
      <SubRoot container spacing={isMobile ? 3 : 6}>
        {stats.map(stat => (
          <Block key={stat.title} {...stat} />
        ))}
      </SubRoot>
    </>
  )
}

export default ItWorks

const stats: IBlock[] = [
  {
    title: 'Learn what matters',
    text: 'Learn an enterprise technology stack. Our curriculum evolves with feedback from employer partners, so you acquire skills that companies like USAA, Accenture, Oracle and SWBC are looking for.',
    icon: <MenuBookIcon />,
    cols: 4,
  },
  {
    title: 'Do It Live',
    text: "With our structure, you will spend over 670 hours learning from live instruction along side your classnames. That's roughly the same amount of hours as you'd spend getting a Bachelor's degree over the span of four years.",
    icon: <ContactSupportIcon />,
    cols: 4,
  },
  {
    title: 'Launch Your Career',
    text: "You will not only be equipped with the necessary technical skills and knowledge, but I will help you truly jump start your career in the tech industry. You'll with the student placement team that will help you define and execute your job search strategy.",
    icon: <FlightTakeoffIcon />,
    cols: 4,
  },
]

export interface IBlock {
  icon: JSX.Element
  title: string
  text: string
  cols: GridSize
}

export const Block: FC<IBlock> = ({ title, text, icon, cols }) => (
  <Container item xs={12} lg={cols}>
    {icon}
    <Title sx={{ marginTop: 0 }}>{title}</Title>
    <Subtitle>{text}</Subtitle>
  </Container>
)
