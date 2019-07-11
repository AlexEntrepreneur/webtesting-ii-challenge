import React from 'react';

export default function Dashboard({
  recordStrike,
  recordBall,
  recordFoul,
  recordHit
}) {
  return (
    <div>
      <button
        data-testid="strike-button"
        onClick={recordStrike}
      >
        Strike
      </button>
      <button
        data-testid="ball-button"
        onClick={recordBall}
      >
        Ball
      </button>
      <button
        data-testid="foul-button"
        onClick={recordFoul}
      >
        Foul
      </button>
      <button
        data-testid="hit-button"
        onClick={recordHit}
      >
        Hit
      </button>
    </div>
  )
}
