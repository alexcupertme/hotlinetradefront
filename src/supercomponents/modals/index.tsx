// @ts-nocheck
// ** React Imports
import { Fragment } from 'react'

// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'

// ** Reactstrap Imports
import { Row, Col } from 'reactstrap'

// ** Demo Components
// import AddCardExample from './AddCard'
// import EditUserExample from './EditUser'
// import ReferEarnExample from './ReferEarn'
import CreateAppExample from './CreateApp'
// import PricingExample from './PricingModal'
// import ShareProjectExample from './ShareProject'
// import AddNewAddressExample from './AddNewAddress'
// import AuthenticationExample from './Authentication'

const ModalExamples = () => {
  return (
    <Fragment>
      <Breadcrumbs breadCrumbTitle='Modal Examples' breadCrumbParent='Pages' breadCrumbActive='Modal Examples' />
      <Row>
        <Col md='4'>
          <CreateAppExample />
        </Col>
      </Row>
    </Fragment>
  )
}

export default ModalExamples