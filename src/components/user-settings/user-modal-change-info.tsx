export const UserModalChangeInfo = () => {
	return (
		<View>
			<View style={styles.arrowBackContainer}>
				<TouchableOpacity onPress={() => navigation.goBack()}>
					<Image style={styles.arrowBack} source={ARROW_BACK} />
				</TouchableOpacity>
			</View>
			<Text style={styles.accountSettingsText}>Account Information</Text>
			<UserProfilePhoto />
			<View style={styles.settingsBasicInformationContainer}>
				<Text style={styles.basicInformationText}>Basic information</Text>
				<UserInfoItem label={"username"} />
				<UserInfoItem label={"email"} />
				<UserInfoItem label={"password"} />
			</View>
		</View>
	);
};
