import { UserBasicInformationLabels } from "../../components/user-settings/user-info-item";

export const changeInfoDescription: Record<UserBasicInformationLabels, string> = {
	username:
		"This is your username, this will be displayed in your profile and will use it to login.",
	email: "This is your email, this will be displayed in your profile.",
	password:
		"Your password is encrypted, and we don't have access to it, but you can change it whenever you want. It must be at least 8 characters long.",
} as const;
