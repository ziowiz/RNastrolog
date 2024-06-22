import * as Font from "expo-font";
export async function bootstrap() {
	await Font.loadAsync({
		"Comfortaa-Regular": require("../assets/fonts/Comfortaa-Regular.ttf"),
		"Jura-Medium": require("../assets/fonts/Jura-Medium.ttf"),
	});
}
