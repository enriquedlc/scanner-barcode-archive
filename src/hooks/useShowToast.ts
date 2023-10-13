import Toast from "react-native-toast-message";

type ToastType = "success" | "error" | "info";

export const useShowToast = () => {
	const showToast = (
		type: ToastType,
		title: string,
		message: string,
		visibilityTimeMs?: number,
	) => {
		Toast.show({
			type,
			position: "top",
			text1: title,
			text2: message,
			visibilityTime: 4000 ?? visibilityTimeMs,
			autoHide: true,
			topOffset: 60,
		});
	};

	return { showToast };
};
