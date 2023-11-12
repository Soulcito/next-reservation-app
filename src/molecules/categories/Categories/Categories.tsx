"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Container from "@molecules/container/Container";
import CategoryBox from "@molecules/categories/CategoryBox/CategoryBox";
import { categories } from "@molecules/categories/Categories/constants/categories";

const Categories = () => {
	const params = useSearchParams();
	const pathName = usePathname();
	const category = params?.get("category");
	const isMainPage = pathName === "/";

	if (!isMainPage) {
		return null;
	}

	return (
		<Container>
			<div
				className="
					pt-4
					flex
					flex-row
					items-center
					justify-between
					overflow-x-auto
				"
			>
				{categories.map(item => (
					<CategoryBox key={item.label} label={item.label} icon={item.icon} selected={category === item.label} />
				))}
			</div>
		</Container>
	);
};

export default Categories;
