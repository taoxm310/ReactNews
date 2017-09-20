import React from 'react'
import {Row, Col,Tabs,Carousel,BackTop} from 'antd'
import PCHeader from './pcHeader.js'
import PCFooter from './pcFooter.js'
import PCImageBlock from './pcImageBlock.js'
import CommonComment from './common_comment.js'


export default class PCDetails extends React.Component {
    constructor(){
        super()
        this.state = {
            newsItem:''
        }
    }
    componentDidMount(){
        let myFetchOption = {
            method:"GET",
        }
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getnewsitem&uniquekey=${this.props.match.params.uniquekey}`, myFetchOption)
        .then(response => response.json())
        .then(json => {
			this.setState({newsItem: json});
			document.title = this.state.newsItem.title + " - React News | React 新闻平台";
		})
    }
    createMarkup(){
        return {
            __html:this.state.newsItem.pagecontent
        }
    }
	render(){
		return (
            <div>
                <PCHeader></PCHeader>
                <Row>
                    <Col span={2}></Col>
                    <Col span={14} className="container">
                        <div className="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                        <hr/>
                        <CommonComment uniquekey={this.props.match.params.uniquekey}></CommonComment>
                    </Col>
                    <Col span={6}>
                         <PCImageBlock count={20} type="guonei" width="100%" cardTitle="相关新闻" imageWidth="150px"></PCImageBlock>
                    </Col>
                    <Col span={2}></Col>
                </Row>
                <footer>
                    <PCFooter></PCFooter>
                </footer>
                <BackTop/>
            </div>
		)
	}
}
