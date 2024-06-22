import React, { useState, useEffect } from "react"; //Импорт хуков из реакта
import { StyleSheet } from "react-native"; //Импорт стилей из нетива
import { NavigationContainer } from "@react-navigation/native"; // Импорт навигацииобщий блок
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //Импорт Навигатора
import { PostProvider } from "./context/PostContext"; // Импортируем провайдер контекста
import { MainScreen } from "./sсreens/mainScreen/MainScreen"; //Импорт Главного экрана
import { AboutScreen } from "./sсreens/aboutScreen/AboutScreen"; //Импорт Описания приложения
import { CreateScreen } from "./sсreens/createScreen/CreateScreen"; //Импорт Создания контента
import { BookScreen } from "./sсreens/bookScreen/BookScreen"; //Импорт Закладок
export function Application() {
	//Создаем навигацию MainScreen
	const Stack = createNativeStackNavigator();

	//Возвращаем главный экран
	return (
		<PostProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="MainScreen"
						component={MainScreen}
						options={() => styleOption("Главный экран")}
					/>

					<Stack.Screen
						name="AboutScreen"
						component={AboutScreen}
						options={() => styleOption("Подробнее")}
					/>
					<Stack.Screen
						name="CreateScreen"
						component={CreateScreen}
						options={() => styleOption("Создать")}
					/>
					<Stack.Screen
						name="BookScreen"
						component={BookScreen}
						options={() => styleOption("Закладки")}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</PostProvider>
	);
}

//стили приложения
const styles = StyleSheet.create({});
const styleOption = (title) => {
	return {
		title: title,
		headerStyle: {
			backgroundColor: "rgb(14, 13, 13)",
			height: 50,
			borderBottomWidth: 0,
		},
		headerTitleAlign: "center",
		headerTintColor: "#aee3f0",
		headerTitleStyle: {
			fontWeight: "bold",
		},
	};
};
