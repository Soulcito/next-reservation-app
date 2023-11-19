export default interface ModalProps {
	disabled?: boolean;
	isOpen: boolean;
	title?: string;
	actionLabel: string;
	onClose: () => void;
	onSubmit: () => void;
	body?: React.ReactElement;
	footer?: React.ReactElement;
	secondaryAction?: () => void;
	secondaryActionLabel?: string;
}
