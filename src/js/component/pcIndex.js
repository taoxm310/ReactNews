import React from 'react'
import {Row, Col} from 'antd'
import PCHeader from './pcHeader.js'
import PCFooter from './pcFooter.js'
import PCNewsContainer from'./pcNewsContainer.js'


export default class PCIndex extends React.Component {
	render(){
		return (
			<div>
				<PCHeader></PCHeader>
				<PCNewsContainer></PCNewsContainer>
				<PCFooter></PCFooter>
			</div>
		)
	}
}