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
  align-items: center;
  margin: ${({ theme: { spacing } }) => spacing(2)} 0;
  height: 45px;
`

export default PaymentOption

const ShopPay: FC = () => (
  <PaymentOption buttonColor='#5a31f4'>
    <img src={require('assets/svg/shop-pay.svg')} height='20px' alt='shop pay logo' />
  </PaymentOption>
)
const AmazonPay: FC = () => (
  <PaymentOption buttonColor='#fad676'>
    <img src={require('assets/svg/Amazon_Pay-Logo.svg')} height='75px' alt='amazon pay logo' />
  </PaymentOption>
)
const PayPal: FC = () => (
  <PaymentOption buttonColor='rgb(240,194,73)'>
    <img src={require('assets/svg/PayPal.svg')} height='20px' alt='google pay logo' />
  </PaymentOption>
)
const GooglePay: FC = () => (
  <PaymentOption buttonColor='black'>
    <img src={require('assets/svg/google-pay.png')} height='20px' alt='google pay logo' />
  </PaymentOption>
)

export const PaymentOptions: FC = () => (
  <>
    <ShopPay />
    <AmazonPay />
    <PayPal />
    <GooglePay />
  </>
)
