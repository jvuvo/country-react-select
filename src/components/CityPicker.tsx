import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async'
import { getCities } from '../api/AddressApi'

type Props = {
  onChange: (item: any) => void
  item: any
  country: any
  state: any
  placeholder?: string
}

const CityPicker = (props: Props) => {
  const { onChange, placeholder = '', item, country, state } = props
  const [selectedOptions, setSelectedOptions] = useState<any>([])
  const promiseOptions = (inputValue: string) => getCities(country, state, inputValue)
  useEffect(() => {
    if (item) {
      setSelectedOptions(item)
    }
  }, [item])

  return (
    <AsyncSelect
      cacheOptions
      value={selectedOptions}
      classNamePrefix={placeholder}
      loadOptions={promiseOptions}
      onChange={(value) => {
        setSelectedOptions(value)
        onChange(value)
      }}
    />
  )
}

export default CityPicker
