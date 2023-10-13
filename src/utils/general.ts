export const capitalize = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const hidePassword = (str: string) => {
	return str.replace(/./g, "*").slice(0, 12);
};
