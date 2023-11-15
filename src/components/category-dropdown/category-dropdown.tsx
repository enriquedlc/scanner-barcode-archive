import React, { useEffect, useState } from "react";
import { Image, ImageProps, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Category } from "../../services/category";
import { CategoryIcon } from "./category-icon";
import { CategoryList } from "./category-list";

import { CATEGORY_ICONS } from "../../../assets";
import { FONT_SIZES } from "../../constants/font";
import { useCategoriesStore } from "../../store/categories";
const { CHEVRON_CIRCLE_DOWN, CHEVRON_CIRCLE_UP } = CATEGORY_ICONS;

export interface DropdownOption {
	label: Category["categoryName"];
	value: Category["categoryName"];
	icon: ImageProps["source"];
}

export interface DropdownProps {
	defaultCategory: DropdownOption["value"];
	options: DropdownOption[];
	onSelect: (value: string) => void;
}

export function CategoryDropdown({ options, onSelect, defaultCategory }: DropdownProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);

	function handleSelect(option: DropdownOption) {
		setSelectedOption(option);
		setIsOpen(false);
		onSelect(option.value);
	}

	const fetchCategories = useCategoriesStore((state) => state.fetchCategories);

	// biome-ignore lint/nursery/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		fetchCategories();
	}, []);

	const defaultValueText = defaultCategory || "Select a category";

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.selectedOption} onPress={() => setIsOpen(!isOpen)}>
				<View style={{ flexDirection: "row", gap: 15, justifyContent: "center" }}>
					<CategoryIcon
						categoryName={defaultCategory}
						imageStyles={{ width: 25, height: 25 }}
					/>
					<Text style={styles.selectedOptionLabel}>
						{selectedOption ? selectedOption?.label : defaultValueText}
					</Text>
				</View>
				{isOpen ? (
					<Image source={CHEVRON_CIRCLE_UP} style={styles.dropdownIcon} />
				) : (
					<Image source={CHEVRON_CIRCLE_DOWN} style={styles.dropdownIcon} />
				)}
			</TouchableOpacity>
			{isOpen && <CategoryList handleSelect={handleSelect} options={options} />}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		position: "relative",
		width: "85%",
		paddingBottom: 10,
	},
	selectedOption: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		padding: 10,
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 5,
	},
	selectedOptionLabel: {
		fontSize: FONT_SIZES.MEDIUM,
		alignSelf: "center",
	},
	dropdownIcon: { height: 20, width: 20, alignSelf: "flex-end", paddingBottom: 5 },
});
