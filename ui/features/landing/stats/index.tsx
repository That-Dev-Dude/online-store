import { FC } from 'react'
import { Grid, styled } from '@mui/material'

import { Container } from '../shared'
import { getMobileBreakpoint } from 'hooks'

const Stats: FC = () => {
  return (
    <Grid container>
      {stats.map(stat => (
        <Stat key={stat.title} {...stat} />
      ))}
    </Grid>
  )
}

export default Stats

const stats: StatProps[] = [
  {
    title: '897',
    subtitle: '# of Graduates',
  },
  {
    title: '99%',
    subtitle: 'Employment rate',
  },
  {
    title: '$45,505',
    subtitle: 'Median Starting Salary',
  },
]

interface StatProps {
  title: string
  subtitle: string
}
const Stat: FC<StatProps> = ({ title, subtitle }) => (
  <Container item xs={12} lg={4}>
    <Title>{title}</Title>
    <Subtitle sx={{ textAlign: { xs: 'center', sm: 'left' } }}>{subtitle}</Subtitle>
  </Container>
)

const Title = styled('h3')`
  color: ${({ theme: { palette } }) => palette.primary.main};
  font-size: 3em;
  margin: 0;
  text-align: center;
  ${getMobileBreakpoint} {
    margin: 3px;
    text-align: left;
  }
`
const Subtitle = styled('p')`
  text-align: center;
  margin-bottom: 5vh;
  ${getMobileBreakpoint} {
    margin-bottom: 0;
    text-align: left;
  }
`
