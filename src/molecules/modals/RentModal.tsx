'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import dynamic from 'next/dynamic';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';

import Modal from './Modal';
import Categories from '@molecules/categories/Categories/Categories';
import Heading from '@molecules/heading/Heading';
import Input from '@molecules/inputs/Input';
import useRentModal from '@custom-hooks/useRentModal';
import { STEPS } from './enum/rentSteps.enum';
import { categories } from '@molecules/categories/Categories/constants/categories';
import CategoryInput from '@molecules/inputs/CategoryInput';
import CountrySelect from '@molecules/inputs/CountrySelect';
import Counter from '@molecules/inputs/Counter';
import ImageUpload from '@molecules/inputs/ImageUpload';
//import Map from '@molecules/map/Map';

const RentModal = () => {
	const rentModal = useRentModal();
	const [step, setStep] = useState(STEPS.CATEGORY);

	const {
		register,
		setValue,
		watch,
		formState: { errors },
		reset,
	} = useForm<FieldValues>({
		defaultValues: {
			category: '',
			location: null,
			guestCount: 1,
			roomCount: 1,
			bathroomCount: 1,
			imageSrc: '',
			price: 1,
			title: '',
			description: '',
		},
	});

	const location = watch('location');
	const category = watch('category');
	const guestCount = watch('guestCount');
	const roomCount = watch('roomCount');
	const bathroomCount = watch('bathroomCount');
	const imageSrc = watch('imageSrc');

	const setCustomValue = (id: string, value: unknown) => {
		setValue(id, value, {
			shouldDirty: true,
			shouldTouch: true,
			shouldValidate: true,
		});
	};

	const actionLabel = useMemo(() => {
		if (step === STEPS.PRICE) {
			return 'Create';
		}
		return 'Next';
	}, [step]);

	const secondaryActionLabel = useMemo(() => {
		if (step === STEPS.CATEGORY) {
			return undefined;
		}
		return 'Back';
	}, [step]);

	const onBack = () => {
		setStep(value => value - 1);
	};

	const onNext = () => {
		setStep(value => value + 1);
	};

	const Map = useMemo(
		() =>
			dynamic(() => import('@molecules/map/Map'), {
				ssr: false,
			}),
		[],
	);

	let bodyContent = (
		<div className="flex flex-col gap-8">
			<Heading title="Cual de estas describe mejor tu lugar?" subtitle="Selecciona una categoria" />
			<div
				className="
					grid
					grid-cols-1
					md:grid-cols-2
					gap-3
					max-h-[50vh]
					overflow-y-auto
				"
			>
				{categories.map(item => (
					<div key={item.label} className="col-span-1">
						<CategoryInput
							onClick={category => setCustomValue('category', category)}
							selected={category === item.label}
							label={item.label}
							icon={item.icon}
						/>
					</div>
				))}
			</div>
		</div>
	);

	if (step === STEPS.LOCATION) {
		bodyContent = (
			<div className="flex flex-col gap-8">
				<Heading title="Donde esta ubicado tu lugar?" subtitle="Ayudanos a encontrarte!" />
				<CountrySelect value={location} onChange={value => setCustomValue('location', value)} />
				<Map center={location?.latlng} />
			</div>
		);
	}

	if (step === STEPS.INFO) {
		bodyContent = (
			<div className="flex flex-col gap-8">
				<Heading title="Comparte algunos conceptos basicos sobre tu lugar." subtitle="Que comodidades tienes?" />
				<Counter
					onChange={value => setCustomValue('guestCount', value)}
					value={guestCount}
					title="Huespedes"
					subtitle="Cuantos huespedes permites?"
				/>
				<hr />
				<Counter
					onChange={value => setCustomValue('roomCount', value)}
					value={roomCount}
					title="Habitaciones"
					subtitle="Cuantas habitaciones tienes?"
				/>
				<hr />
				<Counter
					onChange={value => setCustomValue('bathroomCount', value)}
					value={bathroomCount}
					title="Baños"
					subtitle="Cuantos baños tienes?"
				/>
			</div>
		);
	}

	if (step === STEPS.IMAGES) {
		bodyContent = (
			<div className="flex flex-col gap-8">
				<Heading title="Agrega una foto de tu lugar" subtitle="Muestra a los huespedes como luce tu lugar" />
				<ImageUpload onChange={value => setCustomValue('imageSrc', value)} value={imageSrc} />
			</div>
		);
	}

	return (
		<Modal
			isOpen={rentModal.isOpen}
			title="Airbnb tu casa!"
			actionLabel={actionLabel}
			onSubmit={onNext}
			secondaryActionLabel={secondaryActionLabel}
			secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
			onClose={rentModal.onClose}
			body={bodyContent}
		/>
	);
};

export default RentModal;
