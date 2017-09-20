import React from 'react'
import {Row, Col,Tabs,Carousel,BackTop} from 'antd'
import MobileHeader from './mobileHeader.js'
import MobileFooter from './mobileFooter.js'
import CommonComment from './common_comment.js'



export default class MobileDetails extends React.Component {
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
        console.log(this.props)
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
            <div id="mobileDetailsContainer">
                <MobileHeader></MobileHeader>
                <div class="uncmobileList">
                    <Row>
                        
                        <Col span={24} className="container">
                            <div class="articleContainer" dangerouslySetInnerHTML={this.createMarkup()}></div>
                        </Col>  
                        <CommonComment uniquekey={this.props.match.params.uniquekey}></CommonComment>
                    </Row>
                    <MobileFooter></MobileFooter>
                    <BackTop/>
                </div>                  
            </div>
		)
	}
}
