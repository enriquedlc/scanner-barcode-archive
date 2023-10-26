import React, { Component, ErrorInfo, ReactNode } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ERROR } from "../../../assets";

interface ErrorBoundaryState {
	hasError: boolean;
	error: Error | null;
}

interface ErrorBoundaryProps {
	children: ReactNode;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		// You can log the error here or send it to a logging service
		console.error(error, errorInfo);
	}

	render(): ReactNode {
		if (this.state.hasError) {
			// You can customize the error message to your liking
			return (
				<View style={styles.container}>
					<Image style={styles.image} source={ERROR} />
					<Text style={styles.errorOcurred}>An error occurred</Text>
					<Text style={styles.error}>{this.state.error?.toString()}</Text>
				</View>
			);
		}

		return this.props.children;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	errorOcurred: {
		fontSize: 20,
		fontWeight: "bold",
	},
	error: {
		fontSize: 16,
	},
	image: {
		width: 100,
		height: 100,
	},
});
