export type contactRole = 'Primary' | 'Secondary';
export type contactPersonType = 'Staff' | 'Insured';

interface IContactCard {
	id: number;
	name: string;
	contactNumber: string;
	email: string;
	role: contactRole;
	category: contactPersonType; 
}