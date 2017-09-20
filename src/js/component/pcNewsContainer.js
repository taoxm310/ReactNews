
import React from 'react'
import { Menu, Modal, Icon, Row, Col, Input, Tabs, Form, Button, Checkbox, message, Carousel } from 'antd'
import PCNewsBlock from './pcNewsBlock.js'
import PCImageBlock from './pcImageBlock.js'
import PCProduct from './pcProduct.js'

const TabPane = Tabs.TabPane

export default class PCNewsContainer extends React.Component {

	render(){
        const settings = {
            dots:true,
            infinite:true,
            slidesToShow:1,
            autoplay:true,
        }
		return (
			<div>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="container">
                        <div class="leftContainer">
                            <div class="carousel">
                                <Carousel {...settings}>
                                    <div><img src="./src/images/carousel_1.jpg" alt="1"/></div>
                                    <div><img src="./src/images/carousel_2.jpg" alt="2"/></div>
                                    <div><img src="./src/images/carousel_3.jpg" alt="3"/></div>
                                    <div><img src="./src/images/carousel_4.jpg" alt="4"/></div>
                                </Carousel>
                            </div>
                            <PCImageBlock count={6} type="guoji" width="400px" cardTitle="国际头条" imageWidth="112px"></PCImageBlock>
                        </div>
                        <Tabs class="tab_news">
                            <TabPane tab="热点" key="1">
                                <PCNewsBlock count={24} type="top" width="100%" bordered="false"></PCNewsBlock>
                            </TabPane>
                            <TabPane tab="社会" key="2">
                                <PCNewsBlock count={24} type="shehui" width="100%" bordered="false"></PCNewsBlock>
                            </TabPane>
                            <TabPane tab="国际" key="3">
                                <PCNewsBlock count={24} type="top" width="100%" bordered="false"></PCNewsBlock>
                            </TabPane>
                        </Tabs>
                        <Tabs>
                            <TabPane tab="其他产品" key="5">
                                <PCProduct></PCProduct>
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <Row>
                    <Col span={2}></Col>
                    <Col span={20} class="imageBlock">
                        <PCImageBlock count={10} type="guonei" width="100%" cardTitle="国内新闻" imageWidth="132px"></PCImageBlock>
                        <PCImageBlock count={10} type="yule" width="100%" cardTitle="娱乐新闻" imageWidth="132px"></PCImageBlock>
                    </Col>
                    <Col span={2}></Col>
                </Row>
			</div>
		)
	}
}