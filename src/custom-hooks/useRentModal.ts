import { create } from "zustand";
import RentModalStore from "@/custom-hooks/interfaces/rentModal.interface";

const useRentModal = create<RentModalStore>( set => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true}),
	onClose: () => set({ isOpen: false}),
}));


export default useRentModal;
