export const capitalize = (str: string) => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};

export const hidePassword = (str: string) => {
	return new Array(str?.length).fill("*").join("").substring(0, 12);
};
