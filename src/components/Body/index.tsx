import React from 'react';
import { Row, Col, Input, Select, DatePicker } from 'antd';
import styled from 'styled-components';
import InfoCard from '../InfoCard';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import ContactCardBody from './ContactBody';

const { Option } = Select;

const BodyLayout = styled(Row)`
	background-color: #f4f4f4f4;
	padding: 20px;
`;

const CardBody = styled.div`
	background-color: #ffffff;
	padding: 20px;

	p {
		margin-bottom: 10px;
		font-size: 10px;
	}
`;

const CardCheckbox = styled(Checkbox)`
	margin-top: 10px;
	font-size: 10px;
`;

const Body = () => {

	return (
		<BodyLayout>
			<Col span={18}>
				<InfoCard title='Project Information'>
					<CardBody>
						<Row gutter={8}>
							<Col span={12}>
								<p>Sum Insured</p>
								<Input />
							</Col>
							<Col span={12}>
								<p>Incident Type</p>
								<Input.Group style={{ width: '100%' }}>
									<Select style={{ width: '100%', fontSize: '10px' }} defaultValue='Drury Lane'>
										<Option value='Drury Lane'>
											Drury Lane
										</Option>
										<Option value='Adelaide St'>
											Adelaide St
										</Option>
										<Option value='Queen St'>
											Queen St
										</Option>
									</Select>
								</Input.Group>
							</Col>
						</Row>
						<CardCheckbox>Flood coverage</CardCheckbox>
					</CardBody>
				</InfoCard>
				<InfoCard title='Policy Information'>
					<CardBody>
						<Row gutter={8}>
							<Col span={8}>
								<p>Policy Number</p>
								<Input />
							</Col>
							<Col span={8}>
								<p>Policy period start</p>
								<DatePicker style={{ width: '100%' }} />
							</Col>
							<Col span={8}>
								<p>Policy period end</p>
								<DatePicker style={{ width: '100%' }} />
							</Col>
						</Row>
					</CardBody>
				</InfoCard>
				<InfoCard title='Contacts'>
					<ContactCardBody />
				</InfoCard>
			</Col>
		</BodyLayout>
	);
};

export default Body;