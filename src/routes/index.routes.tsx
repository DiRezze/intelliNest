import {NavigationContainer} from "@react-navigation/native";
import TabRoutes from "./tabs.routes";
import { AuthProvider, useAuth } from "../contexts/authContext";
import { LandingStack } from "./landing.routes";

function Routes(){
    const {isAuthenticated} = useAuth();
    return(
        <NavigationContainer>
            {isAuthenticated ? <TabRoutes /> : <LandingStack />}
        </NavigationContainer>
    );
}

export default function AppRoutes() {
    return (
        <AuthProvider>
            <Routes />
        </AuthProvider>
    )
}
