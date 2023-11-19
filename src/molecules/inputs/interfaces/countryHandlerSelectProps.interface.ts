import ICountrySelectValue from "./countrySelectValue.interface";

export default interface ICountryHandlerSelectProps {
	value?: ICountrySelectValue;
	onChange: (value: ICountrySelectValue) => void;
}
