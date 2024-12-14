import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

function Welcome() {
  const [show, setShow] = useState(true)

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Ben Venuto</Alert.Heading>
        <p>il tuo libro preferito</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
    </>
  )
}

export default Welcome
