import React from 'react'
import { Badge } from 'react-bootstrap'

const CryptoCard = () => {
  return (  
    <div className="rounded shadow py-5 px-6">
      <div className="currency-logo-group d-flex gap-2 align-items-center">
        <span>logo</span>
        <span className='caption1 fw-bold'>name</span>
        <span className="caption1 fw-bold text-secondary">currency</span>
      </div>
      <div className="value-group  d-flex gap-2 align-items-center">
        <h5>USD</h5>
        <h5>Last Price</h5>
      </div>
      <div className="crypto-footer  d-flex gap-2 align-items-center">
        <span className='caption1'>MarketCap</span>
        <Badge pill bg="critical" className="caption2">24h%</Badge>
      </div>
    </div>
  )
}

export default CryptoCard