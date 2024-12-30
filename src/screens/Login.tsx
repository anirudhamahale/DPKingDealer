import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { RootStackParamList } from "../navigation";
import TextField from "../components/TextField";
import GradientView from "../components/GradientView";
import { Button } from "@react-navigation/elements";

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({ navigation }: LoginProps) => {
    return (
        <SafeAreaView className='flex-1 bg-black'>
            <View className='flex-1 p-4 justify-center'>
                <Text className="color-white text-center font-bold text-4xl mb-10">DPKing Dealer</Text>
                <TextField placeholder="Username" isRequired={true} />
                <TextField placeholder="Password" isRequired={true} />
                <Pressable
                    className="h-12 bg-venetian-nights rounded-lg justify-center mt-4 overflow-hidden"
                    android_ripple={{ color: 'white', borderless: false, foreground: true }}>
                    <Text className="text-white text-center text-xl">Login</Text>
                </Pressable>
            </View>

        </SafeAreaView >

    );
}

export default Login;