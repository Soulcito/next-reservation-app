
import { IconType } from "react-icons";

export default interface CategoryInputProps {
	icon: IconType;
	label: string;
	selected?: boolean;
	onClick: (value: string) => void;
}
