import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import LoginTab from "../(tabs)/loginTab";
import LandingTab from "../(tabs)/landingTab";

const Stack = createStackNavigator();

export const LandingStack = () => {
    return(
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS,
                transitionSpec: {
                    open: {
                        animation: 'timing',
                        config: {
                            duration: 150,
                        }
                    },
                    close: {
                        animation: 'timing',
                        config: {
                            duration: 200,
                        }
                    }
                }
            }}
        >
            <Stack.Screen name="landing" component={LandingTab} />
            <Stack.Screen name="login" component={LoginTab} />
        </Stack.Navigator>
    );
}