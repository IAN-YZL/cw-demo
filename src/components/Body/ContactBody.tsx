import React, { useState } from 'react';
import styled from 'styled-components';
import { IContactCard } from '../../interfaces/contact';
import ContactCard from '../ContactCard';
import { remove } from 'lodash';

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

const ContactBody = () => {
	const [contacts, setContacts] = useState([
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
			name: 'Jack Wilson',
			contactNumber: '0462762176',
			email: 'diane@gmail.com',
			role: 'Primary',
			category: 'Staff',
		},
		{
			id: 3,
			name: 'William Wilson',
			contactNumber: '0462762176',
			email: 'diane@gmail.com',
			role: 'Primary',
			category: 'Staff',
		},
		{
			id: 4,
			name: 'Ian Wilson',
			contactNumber: '0462762176',
			email: 'diane@gmail.com',
			role: 'Primary',
			category: 'Staff',
		},
		{
			id: 5,
			name: 'Alex Wilson',
			contactNumber: '0462762176',
			email: 'diane@gmail.com',
			role: 'Primary',
			category: 'Staff',
		},
	])

	const handleDelete = (id: number) => {
		const newContacts = remove(contacts, (item) => {
			return item.id !== id;
		});

		setContacts(newContacts);
	};

	return (
		<ContactWrapper>
			{contacts.map(({id, name, contactNumber, email, role, category}) => {
				return (
					<ContactCard
						key={id}
						id={id}
						name={name}
						contactNumber={contactNumber}
						email={email}
						role={role}
						category={category}
						handleDelete={handleDelete}
					/>
				)
			})}
		</ContactWrapper>
	);
};

export default ContactBody;