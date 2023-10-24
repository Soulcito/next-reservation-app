import { Open_Sans } from "next/font/google";
import type { Metadata } from "next";
import Navbar from "@molecules/navbar/Navbar";
import "@atoms/globals.css";

export const metadata: Metadata = {
	title: "Alquiler de alojamientos vacacionales y apartamentos",
	description: "List of reservations",
};

const font = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={font.className}>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
