import { FC, useState } from 'react'
import { styled, Grid, Tooltip, Tab, IconButton } from '@mui/material'
import { TabContext, TabList } from '@mui/lab'
import { Circle } from '@mui/icons-material'
import shouldForwardProp from '@emotion/is-prop-valid'

import { ProductQuery, ProductOption, ProductOptionType } from 'generated/index'

export const OptionsSelect: FC<{ options: ProductOptions }> = ({ options }) => {
  return (
    <Grid container spacing={1}>
      {options?.map(option => {
        if (option.productType === ProductOptionType.Radio) {
          return <RadioSelect key={option.id} options={option.options || []} name={option.name} />
        } else {
          return <ColorSelect key={option.id} options={option.options || []} name={option.name} />
        }
      })}
    </Grid>
  )
}

const RadioSelect: FC<{ options: SpecificOptionChoices; name: string }> = ({ options = [], name }) => {
  const [selectedOption, setSelectedOption] = useState(0)
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setSelectedOption(newValue)
  }
  return (
    <Grid item xs={12} sx={{ marginBottom: ({ spacing }) => spacing(3) }}>
      <div>{name}</div>
      <TabContext value={selectedOption as unknown as string}>
        <TabList onChange={handleChange}>
          {options?.map(({ id, option, description }) => (
            <Tooltip title={description || ''} key={id}>
              <Tab label={option} />
            </Tooltip>
          ))}
        </TabList>
      </TabContext>
    </Grid>
  )
}

const ColorSelect: FC<{ options: SpecificOptionChoices; name: string }> = ({ options = [], name }) => {
  const [selectedOption, setSelectedOption] = useState(0)
  const handleChange = (newValue: number) => {
    setSelectedOption(newValue)
  }
  return (
    <Grid item xs={12} sx={{ marginBottom: ({ spacing }) => spacing(3) }}>
      <div>{name}</div>
      <div>
        {options?.map(({ id, option, description }, index) => (
          <Tooltip title={description || ''} key={id}>
            <IconButton onClick={() => handleChange(index)}>
              <ColorChoice isSelected={selectedOption === index} colorOption={option} />
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
