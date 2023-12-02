export default interface IListingsParams {
	userId?: string;
	guestCount?: number;
	roomCount?: number;
	bathroomCount?: number;
	startDate?: Date;
	endDate?: Date;
	locationValue?: string;
	category?: string;
}
