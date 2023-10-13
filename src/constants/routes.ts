import { UserBasicInformationLabels } from "../components/user-settings/user-info-item";

interface ChangeUserInfoScreenParams {
	userInfoToChange: UserBasicInformationLabels;
}

export type RootStackParamList = {
	LANDING_SCREEN: undefined;
	LOGIN_SCREEN: undefined;
	SIGN_UP_SCREEN: undefined;
	HOME_SCREEN: undefined;
	PROFILE_SCREEN: undefined;
	USER_SETTINGS_SCREEN: undefined;
	// user settings
	CHANGE_USER_INFO_SCREEN: ChangeUserInfoScreenParams;
	//
	FEED: undefined;
	BARCODE_SCANNER: undefined;
	HOME: undefined;
};

export type RootStackParamName = keyof RootStackParamList;
