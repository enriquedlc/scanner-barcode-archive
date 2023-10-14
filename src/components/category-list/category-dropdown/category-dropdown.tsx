import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { CATEGORY_ICONS } from "../../../../assets";
const { CHEVRON_CIRCLE_DOWN, CHEVRON_CIRCLE_UP } = CATEGORY_ICONS;

import { FONT_SIZES } from "../../../constants/font";
import { CategoryList } from "../category-list";

export interface DropdownOption {
	label: string;
	value: string;
}

export interface DropdownProps {
	options: DropdownOption[];
	onSelect: (value: string) => void;
}

export function CategoryDropdown({ options, onSelect }: DropdownProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState<DropdownOption | null>(null);

	function handleSelect(option: DropdownOption) {
		setSelectedOption(option);
		setIsOpen(false);
		onSelect(option.value);
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.selectedOption} onPress={() => setIsOpen(!isOpen)}>
				<Text style={styles.selectedOptionLabel}>
					{selectedOption ? selectedOption.label : "Select an option"}
				</Text>
				{/* TODO: ICONS */}
				{isOpen ? (
					<Image source={CHEVRON_CIRCLE_UP} style={styles.dropdownIcon} />
				) : (
					<Image source={CHEVRON_CIRCLE_DOWN} style={styles.dropdownIcon} />
				)}
			</TouchableOpacity>
			{isOpen && (
				<CategoryList 
					handleSelect={handleSelect}
					options={options}
				/>
				
			)}
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
	},



	dropdownIcon: { height: 20, width: 20, alignSelf: "center", paddingBottom: 5 },
});
