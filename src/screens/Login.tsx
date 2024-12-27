import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text, View } from "react-native";
import { RootStackParamList } from "../navigation";

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({ navigation }: LoginProps) => {
    return (
        <SafeAreaView className='flex-1 bg-yellow-100'>
            <View className='flex-1 items-center justify-center bg-gray-800'>
                <Text className='color-yellow-900'>Login</Text>
            </View>
        </SafeAreaView >

    );
}

export default Login;