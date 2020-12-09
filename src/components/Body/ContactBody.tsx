import React from 'react';
import styled from 'styled-components';
import { IContactCard } from '../../interfaces/contact';
import ContactCard from '../ContactCard';

const ContactWrapper = styled.div`
	background-color: #ffffff;
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;

	p {
		margin-bottom: 10px;
		font-size: 10px;
	}
`;

let contactsList: Array<IContactCard> = [
	{
		id: 1,
		name: 'Diane Wilson',
		contactNumber: '0462762176',
		email: 'diane@gmail.com',
		role: 'Primary',
		category: 'Staff',
	},
	{
		id: 2,
		name: 'Diane Wilson',
		contactNumber: '0462762176',
		email: 'diane@gmail.com',
		role: 'Primary',
		category: 'Staff',
	},
	{
		id: 3,
		name: 'Diane Wilson',
		contactNumber: '0462762176',
		email: 'diane@gmail.com',
		role: 'Primary',
		category: 'Staff',
	},
	{
		id: 4,
		name: 'Diane Wilson',
		contactNumber: '0462762176',
		email: 'diane@gmail.com',
		role: 'Primary',
		category: 'Staff',
	},
	{
		id: 5,
		name: 'Diane Wilson',
		contactNumber: '0462762176',
		email: 'diane@gmail.com',
		role: 'Primary',
		category: 'Staff',
	},
]

const ContactBody = () => {

	return (
		<ContactWrapper>
			{contactsList.map(({id, name, contactNumber, email, role, category}) => {
				return (
					<ContactCard
						key={id}
						id={id}
						name={name}
						contactNumber={contactNumber}
						email={email}
						role={role}
						category={category}
					/>
				)
			})}
		</ContactWrapper>
	);
};

export default ContactBody;