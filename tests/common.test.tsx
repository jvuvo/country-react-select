import * as React from 'react'
import { render } from '@testing-library/react'

import 'jest-canvas-mock'

import { CountryPicker } from '../src'

describe('Common render', () => {
  it('renders without crashing', () => {
    render(
      <CountryPicker
        value={''}
        onChange={(value) => {
          console.log(value)
        }}
      />,
    )
  })
})
