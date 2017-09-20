import React from 'react'
import { Menu, Modal, Icon, Row, Col, Input, Tabs, Form, Button, Checkbox, message } from 'antd'
import {Link} from 'react-router-dom'

const FormItem = Form.Item
const TabPane = Tabs.TabPane


class MobileHeader extends React.Component {
	constructor(){
		super()
		this.state = {
			current: 'hot',
			modalShow: false,
			action: 'login',
			hasLogined: false,
			userName: '',
			userid: 0
		}
	}

	setModalShow(value){
		this.setState({
			modalShow:value
		})
	}

	handleClick(e){
		if(e.key == "register"){
			this.setState({
				current:'register'
			})
			this.setModalShow(true)
		} else {
			this.setState({
				current:e.key
			})
		}
	}

	handleSubmit(e){
		//向API提交数据
		e.preventDefault()
		var myFetchOptions = {
			method:'GET',
		}
		var formData = this.props.form.getFieldsValue()
		fetch(`http://newsapi.gugujiankong.com/Handler.ashx?action=${this.state.action}&username=${formData.userName}&password=${formData.password
		}&r_userName=${formData.r_userName}&r_password=${formData.r_password}&r_confirmPassword=${formData.r_confirmPassword}`, myFetchOptions)

		message.success("请求成功")
		this.setModalShow(false)
	}

	login(){
		this.setModalShow(true)
	}

	render(){
		let {getFieldDecorator} = this.props.form
		const userShow = this.state.hasLogined?
		<Link to={'/usercenter'}>
			<Icon type="inbox" />
		</Link>
		:
		<Icon type="setting" onClick={this.login.bind(this)} />;

		return (
            <div id="mobileheader">
                <header>
                    <img src="./src/images/logo.png" alt="logo"/>
                    <span>ReactNews</span>
					{userShow}
                </header>

				<Modal title="用户中心" wrapClassName="vertical-center-modal" visible={this.state.modalShow} onCancel={()=>this.setModalShow(false)} onOk={()=>this.setModalShow(false)} okText="关闭">
					<Tabs type="card">
						<TabPane tab="注册" key="1">
							<Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
								<FormItem label="账户">
									 {getFieldDecorator('r_userName', {
										rules: [{
											required:true,
											message:'请输入您的账户名',
										}]
									})(
										<Input placeholder="请输入您的账户名"  />
									)}
								</FormItem>
								<FormItem label="密码">
									{
										getFieldDecorator('r_passWord',{
											rules:[{
												required:true,
												message:'请输入您的密码',
											}]
										})(
											<Input type="password" placeholder="请输入您的密码" />
										)
									}
								</FormItem>
								<FormItem label="确认密码">
									{
										getFieldDecorator('r_confirmPassWord',{
											rules:[{
												required:true,
												message:'请输入您的密码',
											}]
										})(
											<Input type="password" placeholder="请再次输入您的密码" />
										)
									}
								</FormItem>
								<Button type="primary" htmlType="submit">注册</Button>
							</Form>
						</TabPane>
						{/* <TabPane  tab="登陆" key="2">
							<Form layout="horizontal" onSubmit={this.handleSubmit.bind(this)}>
								<FormItem label="账户">
									<Input placeholder="请输入您的账户名" {...getFieldDecorator('l_userName')} />
								</FormItem>
								<FormItem label="密码">
									<Input type="password" placeholder="请输入您的密码" {...getFieldDecorator('l_password')} />
								</FormItem>
								<Button type="primary" htmlType="submit">登陆</Button>
							</Form>
						</TabPane> */}
					</Tabs>
				</Modal>
            </div>
			)
	}
}

export default MobileHeader=Form.create({})(MobileHeader)