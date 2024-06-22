import { StatusBar } from "expo-status-bar"; //Импорт статус бара(по умолчанию)
import React, { useState, useEffect } from "react"; //Импорт хуков из реакта
import * as SplashScreen from "expo-splash-screen"; //Загрузка экрана загрузки
import { View, StyleSheet } from "react-native"; //Импорт стилей из нетива

import { bootstrap } from "./src/bootstrap"; //Импорт шрифтов
import { Application } from "./src/Application";

export default function App() {
	const [fontLoaded, setFontLoaded] = useState(false); //Загрузка шрифтов
	//Пасивная загрузка шрифтов
	useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				SplashScreen.preventAutoHideAsync();
				await bootstrap();
			} catch (e) {
				console.warn(e);
			} finally {
				setFontLoaded(true);
				SplashScreen.hideAsync();
			}
		}

		loadResourcesAndDataAsync();
	}, []);
	if (!fontLoaded) {
		return null;
	}
	return (
		<View style={styles.app}>
			<StatusBar style="auto" />
			<Application />
		</View>
	);
}
const styles = StyleSheet.create({
	app: {
		flex: 1,
	},
});
