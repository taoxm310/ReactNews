import React from 'react'
import { Menu, Upload, Modal, Icon, Row, Col, Input, Tabs, Form, Button, Checkbox, message } from 'antd'
import { Link } from 'react-router-dom'
import MobileHeader from './mobileHeader.js'
import MobileFooter from './mobileFooter.js'

const FormItem = Form.Item
const TabPane = Tabs.TabPane

export default class MobileUserCenter extends React.Component {
    constructor(){
        super();
        this.state ={
            previewImage:"",
            previewVisibale:false,
            userCollection:"",
            userComments:""
        }
    }
    
    ComponentDidMount(){
        let myFetchOptions = {
            method:"GET"
        }

        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getuc&userid${localStorage.userid}`, myFetchOptions)
		.then(response=>response.json())
		.then(json=>{
			this.setState({usercollection:json});
        });
        
        fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=getusercomments&userid${localStorage.userid}`, myFetchOptions)
		.then(response=>response.json())
		.then(json=>{
			this.setState({usercomments:json});
		});
    }

    render(){
        const {userCollection, userComments} = this.state
        const userCollectionList = userCollection.length
            ?
            userCollection.map((uc,index)=>{
                <Card key={index} title={uc.uniquekey} extra={<a target="_blank" href={`/#/details/${uc.uniquekey}`}>查看</a>}>
                    <p>{uc.title}</p>
                </Card>
            })
            :
            "您还没有收藏任何新闻，快去收藏一些吧。"

        const userCommentsList = userComments.length
            ?
            userComments.map((comment,index)=>{<Card key={index} title={`于 ${comment.datetime} 评论了文章 ${comment.uniquekey}`} extra={<a target="_blank" href={`/#/details/${comment.uniquekey}`}>查看</a>}>
                <p>{comment.Comments}</p>
            </Card>})       
            :
            "您还没有评论过文章。"
        
        return (
            <div>
                <MobileHeader></MobileHeader>
                <Row>
                    <Col span={24}>
                        <Tabs>
                            <TabPane tab="我的收藏列表" key="1">
                                 <Row>
                                     <Col span={24}>{userCollectionList}</Col>
                                 </Row>
                            </TabPane>
                            <TabPane tab="我的评论列表" key="2">
                                 <Row>
                                     <Col span={24}>{userCommentsList}</Col>
                                 </Row>                              
                            </TabPane>
                            <TabPane tab="头像设置" key="3">
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
                <MobileFooter></MobileFooter>
            </div>
        )
    }
}