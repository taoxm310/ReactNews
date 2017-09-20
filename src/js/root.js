import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router, Route, hashHistory, Switch} from 'react-router-dom'
import 'antd/dist/antd.css'
import PCIndex from './component/pcIndex'
import PCDetails from "./component/pcDetails"
import PCUserCenter from "./component/pcUserCenter"
import MobileIndex from './component/mobileIndex'
import MobileDetails from './component/mobileDetails'
import MobileUserCenter from'./component/mobileUserCenter'
import MediaQuery from 'react-responsive'


export default class Root extends React.Component {
	render(){
		return (
			<div>
				<MediaQuery query='(min-device-width: 1224px)'>
					 <Router>		
						<Switch>			 
							<Route exact path="/" component={PCIndex}></Route> 
							<Route path="/details/:uniquekey" component={PCDetails}></Route>
							<Route path="/usercenter" component={PCUserCenter}></Route>		
						</Switch>		
					 </Router> 
				</MediaQuery>
				<MediaQuery query='(max-device-width: 1224px)'>
					<Router>		
						<Switch>			 
							<Route exact path="/" component={MobileIndex}></Route> 
							<Route path="/details/:uniquekey" component={MobileDetails}></Route>		
							<Route path="/usercenter" component={MobileUserCenter}></Route>
						</Switch>		
					 </Router> 
				</MediaQuery>
			</div>

		)
	}
}

ReactDOM.render(
	<Root/>, document.getElementById('mainContainer')
	)