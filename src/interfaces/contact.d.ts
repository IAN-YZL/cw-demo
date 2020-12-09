// export type contactRole = 'Primary' | 'Secondary';
// export type contactPersonType = 'Staff' | 'Insured';

export interface IContactCard {
	id: number;
	name: string;
	contactNumber: string;
	email: string;
	role: string;
	category: string; 
};