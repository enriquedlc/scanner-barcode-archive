import { ReactNode } from "react";
import { Text, View } from "react-native";

import { User } from "../../store/user-auth";
import { ArrowBack } from "./arrow-back";

type ChangeInfoProps = {
	route: {
		params: {
			userInfoToChange: keyof User;
		};
	};
};

export function ChangeInfo(props: ChangeInfoProps): ReactNode {
	const { userInfoToChange } = props.route.params;

	let infoToChange: ReactNode;

	switch (userInfoToChange) {
		case "username": {
			infoToChange = <Text>Change username</Text>;
			break;
		}
		case "email": {
			infoToChange = <Text>Change email</Text>;
			break;
		}
		case "password": {
			infoToChange = <Text>Change password</Text>;
			break;
		}
		default: {
			infoToChange = <Text>Change user info</Text>;
			break;
		}
	}

	return (
		<View>
			<ArrowBack />
			<Text>Change user info</Text>
			{infoToChange}
		</View>
	);
}
