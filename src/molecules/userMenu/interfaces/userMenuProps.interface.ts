import { User } from "@prisma/client";

export default interface UserMenuProps {
	currentUser?: User | null;
}
