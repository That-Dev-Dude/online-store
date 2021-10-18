import { FC } from 'react'
import { Grid, TextField } from '@mui/material'

export const AddressInput: FC<Props> = ({ isBilling }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h3>{isBilling ? 'Billing' : 'Shipping'} Address</h3>
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label='First Name' required />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label='Last Name' required />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label='Email Address' type='email' required />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField fullWidth label='Phone' type='tel' />
      </Grid>
      <Grid item xs={12}>
        <TextField fullWidth label='Street Address' required />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField fullWidth label='City' required />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField fullWidth label='State' required />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField fullWidth label='Zip' required type='tel' />
      </Grid>
    </Grid>
  )
}

interface Props {
  isBilling?: boolean
}
