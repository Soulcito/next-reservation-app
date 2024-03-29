"use client";
import Container from "@molecules/container/Container";
import Logo from "@molecules/logo/Logo";
import Search from "@molecules/search/Search";
import UserMenu from "@molecules/userMenu/userMenu";
import Categories from "@molecules/categories/Categories/Categories";
import NavbarProps from "./interfaces/navbarProps.interface";

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => (
	<div className="fixed w-full bg-white z-10 shadow-sm">
		<div className="py-4 border-b-[1px]">
			<Container>
				<div
					className="
							flex
							flex-row
							items-center
							justify-between
							gap-3
							md-gap-0
						"
				>
					<Logo />
					<Search />
					<UserMenu currentUser={currentUser} />
				</div>
			</Container>
		</div>
		<Categories />
	</div>
);

export default Navbar;
