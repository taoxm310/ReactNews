import React from 'react'
import {Row, Col,Tabs,Carousel,BackTop} from 'antd'
import MobileHeader from './mobileHeader.js'
import MobileFooter from './mobileFooter.js'
import MobileList from './mobileList.js'


const TabPane = Tabs.TabPane

export default class MobileIndex extends React.Component {
	render(){
		const settings = {
            dots:true,
            infinite:true,
            slidesToShow:1,
            autoplay:true,
        }
		return (
			<div>
				<MobileHeader></MobileHeader>
				<Tabs>
					<TabPane key="hot" tab="热点">			
						<div class="carousel">
							<Carousel {...settings}>
								<div><img src="./src/images/carousel_1.jpg" alt="1"/></div>
								<div><img src="./src/images/carousel_2.jpg" alt="2"/></div>
								<div><img src="./src/images/carousel_3.jpg" alt="3"/></div>
								<div><img src="./src/images/carousel_4.jpg" alt="4"/></div>
							</Carousel>
						</div>
						<MobileList count={20} type="top"/>
					</TabPane>
					<TabPane key="finance" tab="财经">
						<MobileList count={20} type="caijing"/>
					</TabPane>
					<TabPane key="domestic" tab="国内">
						<MobileList count={20} type="guonei"/>
					</TabPane>
					<TabPane key="society" tab="社会">
						<MobileList count={20} type="shehui"/>
					</TabPane>
					<TabPane key="car" tab="汽车">
						<MobileList count={20} type="shehui"/>
					</TabPane>
					<TabPane key="physic" tab="体育">
						<MobileList count={20} type="tiyu"/>
					</TabPane>
					<TabPane key="comic" tab="动漫">
						<MobileList count={20} type="dongman"/>
					</TabPane>
					<TabPane key="entertainment" tab="娱乐">
						<MobileList count={20} type="yule"/>
					</TabPane>
				</Tabs>
				
				<MobileFooter></MobileFooter>
				<BackTop/>
			</div>
		)
	}
}