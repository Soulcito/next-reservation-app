"use client";

import axios from "axios";
import { toast } from "react-hot-toast";
import { FieldValues, useForm, SubmitHandler } from "react-hook-form";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Modal from "./Modal";
import Categories from "@molecules/categories/Categories/Categories";
import Heading from "@molecules/heading/Heading";
import Input from "@molecules/inputs/Input";
import useRentModal from "@custom-hooks/useRentModal";

const RentModal = () => {
	return (
		<Modal
			isOpen={false}
			title="Airbnb tu casa!"
			actionLabel="Submit"
			//todo: secondaryActionLabel=""
			onSubmit={() => {}}
			onClose={() => {}}
			body={<></>}
			disabled={false}
			footer={<></>}
		/>
	);
};

export default RentModal;
