export default interface ICounterProps {
	title: string;
	subtitle: string;
	value: number;
	onChange: (value: number) => void;
}
