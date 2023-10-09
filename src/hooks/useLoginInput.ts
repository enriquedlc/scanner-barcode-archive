import { useState } from "react";

export function useInputFocus<T>(INITIAL_STATE: T) {
	const [isFocused, setIsFocused] = useState<T>(INITIAL_STATE);

	const handleInputFocus = (key: keyof T, state: boolean) => {
		setIsFocused((prevState) => {
			return { ...prevState, [key]: state };
		});
	};

	return { handleInputFocus, isFocused };
}
