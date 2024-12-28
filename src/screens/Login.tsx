import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Pressable, SafeAreaView, Text, View } from "react-native";
import { RootStackParamList } from "../navigation";
import GradientView from "../components/PrimaryButton";

type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({ navigation }: LoginProps) => {
    return (
        <SafeAreaView className='flex-1 bg-black'>
            <View className='flex-1'>
                <GradientView>
                    <View
                        className="h-[80px] rounded flex-row">
                        <View className="flex-1 justify-center ml-5">
                            <Text
                                className="color-white text-xs font-normal">
                                Total Balance
                            </Text>
                            <Text
                                className="color-white font-black text-3xl">
                                $1500
                            </Text>
                        </View>
                        <View className="flex-1 justify-center items-center ml-5 flex-row">
                            <Text
                                className="color-white font-semibold text-xs">
                                Withdraw
                            </Text>
                            <View className="w-4" />
                            <Text
                                className="color-white font-semibold text-xs">
                                Deposit
                            </Text>
                        </View>
                    </View>
                </GradientView>
            </View>

        </SafeAreaView >

    );
}

export default Login;