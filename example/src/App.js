import React from 'react'
import 'finalsa-bulma-dark/css/bulma.min.css';

import { BackButton, Counter, Card, TableModule} from 'finalsa-react-components'
import 'finalsa-react-components/dist/index.css'

const App = () => {
  const cols = [
    {
      "name" : "Name",
      "selector" : "name"
    }
  ]
  return (
    <>

      <BackButton count={1} />
      <Counter/>
      <Card></Card>
      <TableModule
      title="People"
      cols={cols}
      data={[{
        "name" : "Luis"
      }]}
      
      ></TableModule>
    </>
  )
}

export default App
