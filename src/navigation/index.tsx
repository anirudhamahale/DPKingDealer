import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Home from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';

export type RootStackParamList = {
    Auth: undefined;
    Login: undefined;
    Home: undefined;
    HomeStack: undefined;
};

export const Stack = createStackNavigator<RootStackParamList>();

const AuthStack = () => (
    <Stack.Navigator
        initialRouteName='Login'>
        <Stack.Screen
            name='Login'
            component={Login}
            options={{ headerShown: false }} />
    </Stack.Navigator>
);

const HomeStack = () => (
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
);

const Navigation = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Auth'
                component={AuthStack}
                options={{
                    headerShown: false,
                    cardStyleInterpolator: ({ current }) => ({
                        cardStyle: {
                            opacity: current.progress,
                        },
                    }),
                }} />
            <Stack.Screen
                name='HomeStack'
                component={HomeStack}
                options={{
                    headerShown: false,
                    cardStyleInterpolator: ({ current }) => ({
                        cardStyle: {
                            opacity: current.progress,
                        },
                    }),
                }} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default Navigation;