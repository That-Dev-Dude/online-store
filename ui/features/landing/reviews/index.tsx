import { FC } from 'react'
import { styled, Grid, Card, CardContent, CardHeader } from '@mui/material'

import SlideShow from 'components/slide-show'
import { useIsMobile } from 'hooks'

const Reviews: FC = () => {
  const isMobile = useIsMobile()
  return (
    <SlideShow<IReview> list={reviews} chunkLimit={isMobile ? 1 : 3} slideInterval={7000} RenderComponent={Review} />
  )
}

// char limit: 300
const reviews: IReview[] = [
  {
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doreprehenderit in cillum dolore eu fugiat sint occaeca reprehenderit in cillum dolore eu fugiat sint occaecat reprehenderit in cillum dolore eu fugiat sint occaecat reprehenderit in cillum dolore eu fugiat sint',
    author: 'Bill Nye',
    cohort: 'Ares - 2022',
  },
  {
    review:
      'Lorem ipsum dolorreprehenderit in cillum dolore eu fugiat sint occaecat reprehenderit in cillum dolore eu fugiat sint occaecat reprehenderit in cillum dolore eu fugiat sint occaecatcupidatat non proident, sunt in culpa qui mollit anim id est laborum.',
    author: 'Captain Marvel',
    cohort: 'Ares - 2022',
  },
  {
    review:
      'Lorem ipsum doloraliquip ex ea commodo consequat. Duis in reprehenderit in cillum dolore eu fugiat sint occaecat cupidatat non proident, sunt in culpa qui mollit anim id est laborum. qui mollit anim id est laborum qui mollit anim id est laborum qui mollit anim id est laborum qui mollit anim id est laborum',
    author: 'Itachi Uchiha',
    cohort: 'Ares - 2022',
  },
  {
    review:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doreprehenderit in cillum dolore eu fugiat sint occaeca reprehenderit in cillum dolore eu fugiat sint occaecat reprehenderit in cillum dolore eu fugiat sint occaecat reprehenderit in cillum dolore eu fugiat sint occaecat reprehenderit in cillum dolore eu fugiat sint occaecat',
    author: 'Harry Potter',
    cohort: 'Ares - 2022',
  },
  {
    review:
      'Lorem ipsum dolorreprehenderit in cillum dolore eu fugiat sint occaecat reprehenderit in cillum dolore eu fugiat sint occaecat reprehenderit in cillum dolore eu fugiat sint occaecatcupidatat non proident, sunt in culpa qui mollit anim id est laborum.',
    author: 'Captain Marvel',
    cohort: 'Ares - 2022',
  },
  {
    review:
      'Lorem ipsum doloraliquip ex ea commodo consequat. Duis in reprehenderit in cillum dolore eu fugiat sint occaecat cupidatat non proident, sunt in culpa qui mollit anim id est laborum. qui mollit anim id est laborum qui mollit anim id est laborum qui mollit anim id est laborum qui mollit anim id est laborum',
    author: 'Itachi Uchiha',
    cohort: 'Ares - 2022',
  },
  {
    review:
      'Lorem ipsum dolorreprehenderit in cillum dolore eu fugiat sint occaecat reprehenderit in cillum dolore eu fugiat sint occaecat reprehenderit in cillum dolore eu fugiat sint occaecatcupidatat non proident, sunt in culpa qui mollit anim id est laborum.',
    author: 'Captain Marvel',
    cohort: 'Ares - 2022',
  },
  {
    review:
      'Lorem ipsum doloraliquip ex ea commodo consequat. Duis in reprehenderit in cillum dolore eu fugiat sint occaecat cupidatat non proident, sunt in culpa qui mollit anim id est laborum. qui mollit anim id est laborum qui mollit anim id est laborum qui mollit anim id est laborum qui mollit anim id est laborum',
    author: 'Itachi Uchiha',
    cohort: 'Ares - 2022',
  },
  {
    review:
      'Lorem ipsum dolorreprehenderit in cillum dolore eu fugiat sint occaecat reprehenderit in cillum dolore eu fugiat sint occaecat reprehenderit in cillum dolore eu fugiat sint occaecatcupidatat non proident, sunt in culpa qui mollit anim id est laborum.',
    author: 'Captain Marvel',
    cohort: 'Ares - 2022',
  },
  {
    review:
      'Lorem ipsum doloraliquip ex ea commodo consequat. Duis in reprehenderit in cillum dolore eu fugiat sint occaecat cupidatat non proident, sunt in culpa qui mollit anim id est laborum. qui mollit anim id est laborum qui mollit anim id est laborum qui mollit anim id est laborum qui mollit anim id est laborum',
    author: 'Itachi Uchiha',
    cohort: 'Ares - 2022',
  },
  {
    review:
      'Lorem ipsum dolorreprehenderit in cillum dolore eu fugiat sint occaecat reprehenderit in cillum dolore eu fugiat sint occaecat reprehenderit in cillum dolore eu fugiat sint occaecatcupidatat non proident, sunt in culpa qui mollit anim id est laborum.',
    author: 'Captain Marvel',
    cohort: 'Ares - 2022',
  },
  {
    review:
      'Lorem ipsum doloraliquip ex ea commodo consequat. Duis in reprehenderit in cillum dolore eu fugiat sint occaecat cupidatat non proident, sunt in culpa qui mollit anim id est laborum. qui mollit anim id est laborum qui mollit anim id est laborum qui mollit anim id est laborum qui mollit anim id est laborum',
    author: 'Itachi Uchiha',
    cohort: 'Ares - 2022',
  },
  {
    review:
      'Lorem ipsum dolorreprehenderit in cillum dolore eu fugiat sint occaecat reprehenderit in cillum dolore eu fugiat sint occaecat reprehenderit in cillum dolore eu fugiat sint occaecatcupidatat non proident, sunt in culpa qui mollit anim id est laborum.',
    author: 'Captain Marvel',
    cohort: 'Ares - 2022',
  },
  {
    review:
      'Lorem ipsum doloraliquip ex ea commodo consequat. Duis in reprehenderit in cillum dolore eu fugiat sint occaecat cupidatat non proident, sunt in culpa qui mollit anim id est laborum. qui mollit anim id est laborum qui mollit anim id est laborum qui mollit anim id est laborum qui mollit anim id est laborum',
    author: 'Itachi Uchiha',
    cohort: 'Ares - 2022',
  },
  {
    review:
      'Lorem ipsum doloraliquip ex ea commodo consequat. Duis in reprehenderit in cillum dolore eu fugiat sint occaecat cupidatat non proident, sunt in culpa qui mollit anim id est laborum. qui mollit anim id est laborum qui mollit anim id est laborum qui mollit anim id est laborum qui mollit anim id est laborum',
    author: 'Itachi Uchiha',
    cohort: 'Ares - 2022',
  },
]

interface IReview {
  author: string
  cohort: string
  review: string
}

const Review: FC<IReview> = ({ author, cohort, review }) => (
  <Grid item xs={12} lg={4}>
    <Card sx={{ height: '370px' }}>
      <Author title={author} subheader={cohort} />
      <CardContent>{review}</CardContent>
    </Card>
  </Grid>
)

const Author = styled(CardHeader)`
  color: ${({ theme: { palette } }) => palette.primary.main};
`

export default Reviews
