import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async'
import { getStates } from '../api/AddressApi'

type StatePickerProps = {
  onChange: (items: any) => void
  value: any
  country: string
  placeholder?: string
}

const StatePicker = (props: StatePickerProps) => {
  const { onChange, placeholder = '', value, country } = props
  const [selectedOptions, setSelectedOptions] = useState<any>([])
  const promiseOptions = (inputValue: string) => getStates(country, inputValue)
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

export default StatePicker
