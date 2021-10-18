import { FC } from 'react'
import { styled } from '@mui/material'
import shouldForwardProp from '@emotion/is-prop-valid'

const PaymentOption: FC<Props> = ({ buttonColor, children }) => {
  return <Container buttonColor={buttonColor}>{children}</Container>
}

interface Props extends ContainerProps {}

interface ContainerProps {
  buttonColor: string
}
const Container = styled('div', { shouldForwardProp })<ContainerProps>`
  width: 100%;
  padding: 2%;
  background-color: ${({ buttonColor }) => buttonColor};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  margin: ${({ theme: { spacing } }) => spacing(2)} 0;
`

export default PaymentOption

const ShopPay: FC = () => <PaymentOption buttonColor='#5a31f4'>Shop Pay</PaymentOption>
const AmazonPay: FC = () => <PaymentOption buttonColor='#fad676'>Amazon Pay</PaymentOption>
const PayPal: FC = () => <PaymentOption buttonColor='rgb(240,194,73)'>PayPal</PaymentOption>
const GooglePay: FC = () => <PaymentOption buttonColor='black'>Google Pay</PaymentOption>

export const PaymentOptions: FC = () => (
  <>
    <ShopPay />
    <AmazonPay />
    <PayPal />
    <GooglePay />
  </>
)
