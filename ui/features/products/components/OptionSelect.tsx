import { FC, useState } from 'react'
import { styled, Grid, Tooltip, Tab, IconButton, Tabs } from '@mui/material'
import { Circle } from '@mui/icons-material'
import shouldForwardProp from '@emotion/is-prop-valid'
import { useRecoilState } from 'recoil'
import { useRouter } from 'next/router'

import { ProductQuery, ProductOption, ProductOptionType } from 'generated/index'
import { optionsAtom } from 'store'

export const OptionsSelect: FC<{ options: ProductOptions }> = ({ options }) => {
  return (
    <Grid container spacing={1}>
      {options?.map(option => {
        if (option.productType === ProductOptionType.Radio) {
          return <RadioSelect key={option.id} {...option} />
        } else {
          return <ColorSelect key={option.id} {...option} />
        }
      })}
    </Grid>
  )
}

const useUpdateProductOptions = (optionId: string, options: ProductOption[]) => {
  const router = useRouter()
  const productId = router.query.id as string
  const [allProductOptions, setOptions] = useRecoilState(optionsAtom)
  const productOptions = allProductOptions[productId] || {}
  const optionChoice = productOptions[optionId] || options[0]

  const handleChange = (newId: string) => {
    const chosenOption = options.find(({ id: targetOptionId }) => targetOptionId === newId)
    if (!chosenOption) throw new Error('Cannot find designated option')
    setOptions(currentOptions => ({
      ...currentOptions,
      [productId]: {
        ...currentOptions[productId],
        [optionId]: chosenOption,
      },
    }))
  }
  return { handleChange, optionChoice }
}

interface OptionSelectProps {
  options: SpecificOptionChoices
  name: string
  id: string
}
const RadioSelect: FC<OptionSelectProps> = ({ options = [], name, id }) => {
  const { handleChange, optionChoice } = useUpdateProductOptions(id, options)
  return (
    <Grid item xs={12} sx={{ marginBottom: ({ spacing }) => spacing(3) }}>
      <div>{name}</div>
      <Tabs value={optionChoice.id} onChange={(_, newId) => handleChange(newId)} aria-label='basic tabs example'>
        {options?.map(({ id, option }) => (
          <Tab label={option} value={id} key={id} />
        ))}
      </Tabs>
    </Grid>
  )
}

const ColorSelect: FC<OptionSelectProps> = ({ id, options = [], name }) => {
  const { handleChange, optionChoice } = useUpdateProductOptions(id, options)
  return (
    <Grid item xs={12} sx={{ marginBottom: ({ spacing }) => spacing(3) }}>
      <div>{name}</div>
      <div>
        {options?.map(({ id, option, description }) => (
          <Tooltip title={description || ''} key={id}>
            <IconButton onClick={() => handleChange(id)}>
              <ColorChoice isSelected={id === optionChoice.id} colorOption={option} />
            </IconButton>
          </Tooltip>
        ))}
      </div>
    </Grid>
  )
}

interface ColorChoiceProps {
  colorOption: string
  isSelected: boolean
}
const ColorChoice = styled(Circle, { shouldForwardProp })<ColorChoiceProps>`
  color: ${({ colorOption }) => colorOption};
  margin-right: 10px;
  font-size: 1.7em;
  cursor: pointer;
  border: 1px solid ${({ theme: { palette }, isSelected }) => (isSelected ? palette.text.primary : 'transparent')};
  border-radius: 100%;
`

type ProductOptions = ProductQuery['product']['options']
type SpecificOptionChoices = Pick<ProductOption, 'id' | 'option' | 'description'>[]

export default OptionsSelect
