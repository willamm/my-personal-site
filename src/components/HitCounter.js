// ABOUTME: Hit counter component styled with styled-components
// ABOUTME: Fetches and displays page view count from the API in production

import * as React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const CounterText = styled.p`
  color: var(--color-text-muted);
  font-size: ${(props) => props.theme.typography.fontSize.sm};
  margin-top: ${(props) => props.theme.spacing.lg};
  margin-bottom: 0;
`

const HitCounter = ({ slug }) => {
  const [hits, setHits] = useState(undefined)

  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      return
    }
    const url = 'https://api.williamm.me/v1/count'
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ site: slug }),
    }
    fetch(url, options)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed')
        }
        return res.json()
      })
      .then((data) => {
        setHits(data)
      })
      .catch((error) => {
        console.error('Error in fetch request:' + error)
      })
  }, [slug])

  if (typeof hits === 'undefined') {
    return null
  }

  return <CounterText>{hits} views</CounterText>
}

export default HitCounter
