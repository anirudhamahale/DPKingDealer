import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, Text, View } from "react-native";
import { RootStackParamList } from "../navigation";
import GradientButton from "../components/PrimaryButton";

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({ navigation }: LoginProps) => {
    return (
        <SafeAreaView className='flex-1 bg-black'>
            <View className='flex-1'>
                <GradientButton text="login" />
            </View>

        </SafeAreaView >

    );
}

export default Login;