import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async'
import { getCountries } from '../api/AddressApi'

type CountryPickerProps = {
  onChange: (items: any) => void
  value: any
  placeholder?: string
  isDisabled?: boolean
  isMulti?: boolean
}

const CountryPicker = (props: CountryPickerProps) => {
  const { onChange, placeholder = '', value, isDisabled = false, isMulti = false } = props
  const [selectedOptions, setSelectedOptions] = useState<any>([])
  const promiseOptions = (inputValue: string) => getCountries(inputValue)
  useEffect(() => {
    if (value) {
      setSelectedOptions(value)
    }
  }, [value])

  return (
    <AsyncSelect
      isDisabled={isDisabled}
      isMulti={isMulti}
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
