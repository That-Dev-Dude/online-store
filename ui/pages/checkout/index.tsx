import { FC, useState } from 'react'
import { Collapse, FormGroup, FormControlLabel, Switch } from '@mui/material'

import Layout from 'components/layout'
import { Row } from 'components/container'
import { AddressInput } from 'features/checkout/components/Address'

const Checkout: FC = () => {
  const [isBillingSameAsShipping, setIsBillingSameAsShipping] = useState(false)
  return (
    <Layout noPadding title='Checkout'>
      <Row title='Checkout'>
        <AddressInput />
        <FormGroup>
          <FormControlLabel
            onChange={() => setIsBillingSameAsShipping(current => !current)}
            control={<Switch checked={isBillingSameAsShipping} inputProps={{ 'aria-label': 'controlled' }} />}
            label='Billing is same as shipping'
          />
        </FormGroup>
        <Collapse in={!isBillingSameAsShipping}>
          <AddressInput isBilling />
        </Collapse>
      </Row>
    </Layout>
  )
}

export default Checkout
