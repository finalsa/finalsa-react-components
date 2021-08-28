import React from 'react'
import 'finalsa-bulma-dark/css/bulma.min.css';

import { BackButton, Counter, Card, TableModule, LoadingBar, Loading, Select} from 'finalsa-react-components'
import 'finalsa-react-components/dist/index.css'

const App = () => {
  const cols = [
    {
      "name" : "Name",
      "selector" : "name"
    }
  ]
  return (
    <div className="container">
    <div className="columns is-multiline">
      
      <div className="column is-full" >
      <TableModule
      title="People"
      cols={cols}
      data={[{
        "name" : "Luis"
      }]}
      automatic={true}
      ></TableModule>
      </div>
      <div className="column is-full" >
      <LoadingBar></LoadingBar>

      </div>
    </div>
      <Select      
      options={[]}
      ></Select>
      <BackButton count={1} />
      <Counter/>
      <Card></Card>
      
    </div>
  )
}

export default App
