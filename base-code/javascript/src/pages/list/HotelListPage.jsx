import 'react-input-range/lib/css/index.css'

import React, { useState } from 'react'
import InputRange from 'react-input-range'

export default function HotelListPage() {
  const [value, setValue] = useState({
    min: 0,
    max: 1000000,
  })

  return (
    <div style={{ height: 400, width: 200, padding: 100 }}>
      <InputRange
        minValue={0}
        maxValue={1000000}
        value={value}
        step={1000}
        formatLabel={value => (value === 1000000 ? '1,000,000+' : value.toString())}
        onChange={value => setValue(value)}
      />
    </div>
  )
}
