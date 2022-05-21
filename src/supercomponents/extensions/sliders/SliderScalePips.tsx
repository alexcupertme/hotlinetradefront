// ** Third Party Components
import Nouislider from 'nouislider-react'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

const SliderScalePips = ({ direction }) => {
  return (
    <Card>
      <CardBody>
        <Nouislider
          step={20}
          start={10}
          tooltips={true}
          className='mt-1 mb-3'
          direction={direction}
          range={{
            min: 0,
            max: 100
          }}
          pips={{
            mode: 'steps',
            stepped: true,
            density: 5
          }}
        />
      </CardBody>
    </Card>
  )
}

export default SliderScalePips
