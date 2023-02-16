import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async'
import { getStates } from '../api/AddressApi'

type Props = {
  onChange: (items: any) => void
  item: any
  country: string
  placeholder?: string
}

const StatePicker = (props: Props) => {
  const { onChange, placeholder = '', item, country } = props
  const [selectedOptions, setSelectedOptions] = useState<any>([])
  const promiseOptions = (inputValue: string) => getStates(country, inputValue)
  useEffect(() => {
    if (item) {
      setSelectedOptions(item.toJS())
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

export default StatePicker
