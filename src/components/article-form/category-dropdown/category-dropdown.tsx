import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FONT_SIZES } from "../../../constants/font";

interface DropdownOption {
	label: string;
	value: string;
}

interface DropdownProps {
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
				<Text style={styles.arrow}>{isOpen ? "▲" : "▼"}</Text>
			</TouchableOpacity>
			{isOpen && (
				<View style={styles.optionsContainer}>
					{/* TODO: FlatList */}
					{/* TODO: fetch categories */}
					{/* TODO: categories store zustand */}
					{options.map((option, index) => (
						<TouchableOpacity
							key={option.value + index}
							style={styles.option}
							onPress={() => handleSelect(option)}
						>
							<Text style={styles.optionLabel}>{option.label}</Text>
						</TouchableOpacity>
					))}
				</View>
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
	arrow: {
		fontSize: 12,
	},
	optionsContainer: {
		position: "absolute",
		top: "100%",
		left: 0,
		right: 0,
		backgroundColor: "white",
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 5,
		padding: 10,
		maxHeight: 150,
		overflow: "scroll",
		zIndex: 1,
	},
	option: {
		padding: 10,
	},
	optionLabel: {
		fontSize: 16,
	},
});
