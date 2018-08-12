import React from 'react'
import { Card,Statistic } from 'semantic-ui-react'
const DashboradCard = (props) => {

    const {value,label}= props
    return (
        <Card fluid>
        <Card.Content>
        <Statistic>
      <Statistic.Value>{value}</Statistic.Value>
      <Statistic.Label>{label}</Statistic.Label>
    </Statistic>

    
        </Card.Content>
      </Card>
    )
}

export default DashboradCard
