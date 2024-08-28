import {NavigationContainer} from "@react-navigation/native";
import TabRoutes from "./tabs.routes";

export default function Routes() {
    return (
        <NavigationContainer>
            <TabRoutes />
        </NavigationContainer>
    )
}
