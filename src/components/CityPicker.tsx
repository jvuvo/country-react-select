import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async'
import { getCities } from '../api/AddressApi'

type CityPickerProps = {
  onChange: (item: any) => void
  value: any
  country: string
  state: string
  placeholder?: string
}

const CityPicker = (props: CityPickerProps) => {
  const { onChange, placeholder = '', value, country, state } = props
  const [selectedOptions, setSelectedOptions] = useState<any>([])
  const promiseOptions = (inputValue: string) => getCities(country, state, inputValue)
  useEffect(() => {
    if (value) {
      setSelectedOptions(value)
    }
  }, [value])

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
