import React from 'react'

import { BackButton, Counter, Card } from 'finalsa-react-components'
import 'finalsa-react-components/dist/index.css'

const App = () => {
  return (
    <>
      <BackButton count={1} />
      <Counter/>
      <Card></Card>
    </>
  )
}

export default App
