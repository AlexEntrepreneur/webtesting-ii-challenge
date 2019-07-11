import React from 'react';

export default function Display({ balls = 0, strikes = 0 }) {
  return (
    <div>
      <h3>Balls: { balls }</h3>
      <h3>Strikes: { strikes }</h3>
    </div>
  )
}
