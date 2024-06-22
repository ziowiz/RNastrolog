import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PostContext } from "../context/PostContext"; // Импортируем контекст
export const BookScreen = ({}) => {
	const context = useContext(PostContext); // Используем контекст
	return (
		<View style={[styles.component_Container]}>
			<View style={[styles.content, styles.shadowProp]}>
				<Text style={styles.text}>Book Screen</Text>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	component_Container: {
		flex: 1,
		backgroundColor: "rgb(14, 13, 13)",
	},
	content: {
		flex: 0.97,
		width: "95%",
		marginVertical: "auto",
		marginHorizontal: "auto",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgb(36, 36, 36)",
		borderWidth: 1,
		borderRadius: 13,
		borderColor: "rgb(0, 131, 163)",
	},
	text: {
		color: "rgb(255, 255, 255)",
		fontSize: 20,
		fontWeight: "bold",
	},
	shadowProp: {
		shadowColor: "#054458",
		shadowOffset: { width: -1, height: 1 },
		shadowOpacity: 0.7,
		shadowRadius: 15,
	},
});
