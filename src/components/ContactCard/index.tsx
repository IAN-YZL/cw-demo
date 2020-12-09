import { DeleteOutlined, EyeOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import { Col, Input, Row, Select } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { IContactCard } from '../../interfaces/contact';

const { Option } = Select;

const CardWrapper = styled.div`
	padding: 10px;
	width: 220px;
	height: 150px;
	border: 1px solid #ececec;
	margin: 0 10px 20px 0;

	h4 {
		font-size: 12px;
	}

	svg {
		margin-right: 3px;
		color: #389e0d;
	}
`;

interface ContactCardProps extends IContactCard {
	handleDelete: (id: number) => any;
}

const ContactCard = (props: ContactCardProps) => {
	return (
		<CardWrapper>
			<Row style={{ justifyContent: 'space-between'}}>
				<Col span={18}>
					<h4>{props.name}</h4>
				</Col>
				<Col span={6} style={{ display: 'flex', justifyContent: 'space-around' }}>
					<EyeOutlined color='#389e0d' />
					<DeleteOutlined color='#389e0d' onClick={() => props.handleDelete(props.id)} />
				</Col>
			</Row>
			<p>{props.category}</p>
			<Row>
				<Col span={11} style={{ display: 'flex' }}>
					<PhoneOutlined color='#389e0d' />
					<p>{props.contactNumber}</p>
				</Col>
				<Col span={13} style={{ display: 'flex' }}>
					<MailOutlined color='#389e0d' />
					<p>{props.email}</p>
				</Col>
			</Row>
			<div>
				<p>Contact Role</p>
				<Input.Group size='small'>
					<Select defaultValue={props.role} style={{ fontSize: '10px' }} size='small'>
						<Option value='Primary'>Primary</Option>
						<Option value='Secondary'>Secondary</Option>
					</Select>
				</Input.Group>
			</div>
		</CardWrapper>
	);
};

export default ContactCard;