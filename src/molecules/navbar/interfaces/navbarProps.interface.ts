import { User } from "@prisma/client";

export default interface NavbarProps {
	currentUser?: User | null;
}
