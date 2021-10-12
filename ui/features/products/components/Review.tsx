import { FC } from 'react'
import { styled, Rating } from '@mui/material'
import format from 'date-fns/format'
import { CheckCircle } from '@mui/icons-material'

import { ProductQuery } from 'generated/index'
import { ArrayElement } from 'generated/utility'

const Review: FC<Props> = ({ author, review, stars, date, title, isVerified }) => {
  return (
    <Container>
      <TopRow>
        <div>
          {author} {isVerified ? <CheckCircle sx={{ paddingTop: '4px' }} color='success' fontSize='small' /> : null}
        </div>
        <div>{formatDate(date)}</div>
      </TopRow>
      <Rating value={stars} readOnly size='small' />
      <Title>{title}</Title>
      <ReviewText>{review}</ReviewText>
    </Container>
  )
}

const formatDate = (date: string): string => {
  try {
    const dateObj = new Date(date)
    return format(dateObj, 'MM/dd/yy')
  } catch (e) {
    return '-'
  }
}

const Title = styled('h2')`
  font-size: 1.2em;
  margin: 0;
`
const ReviewText = styled('p')``
const TopRow = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const Container = styled('div')`
  padding: ${({ theme: { spacing } }) => spacing(3)} 0;
  border-bottom: thin solid ${({ theme: { palette } }) => palette.text.primary};
  /* &::last-of-type {
  } */
`

type Props = ArrayElement<ProductQuery['product']['reviews']>

export default Review
