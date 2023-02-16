import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async'
import { getCountries } from '../api/AddressApi'

type Props = {
  onChange: (items: any) => void
  item: any
  placeholder?: string
}

const CountryPicker = (props: Props) => {
  const { onChange, placeholder = '', item } = props
  const [selectedOptions, setSelectedOptions] = useState<any>([])
  const promiseOptions = (inputValue: string) => getCountries(inputValue)
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

export default CountryPicker
