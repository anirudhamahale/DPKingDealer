import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "react-native-linear-gradient";
import { cssInterop } from "nativewind";

const StyledLinearGradient = cssInterop(LinearGradient, {
    className: 'style'
});

const GradientView: React.FC<{ view: View, }> = ({ view, ...props }) => {
    return (
        <View className="mx-4 mt-4">
            <StyledLinearGradient
                colors={['#3E409D', '#780CCD']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }} className="rounded">
                <Pressable className="h-[40px] rounded justify-center" {...props}>
                    <Text className="text-center">Login</Text>
                </Pressable>
            </StyledLinearGradient>
        </View>
    );
};

export default GradientView;