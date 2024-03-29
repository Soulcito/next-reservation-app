"use client";
import { useState, useEffect } from "react";
import ClientProcessorProps from "@molecules/clientProcessor/interfaces/clientProcessor.interface";

const ClientProcessor: React.FC<ClientProcessorProps> = ({ children }) => {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasMounted) {
		return null;
	}

	return <div>{children}</div>;
};

export default ClientProcessor;
