import React from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient, LinearGradientProps } from "react-native-linear-gradient";
import { cssInterop } from "nativewind";
import StyledLinearGradient from "./StyledViews";


interface CustomContainerProps {
    children: React.ReactNode; // Accepts any valid React child, including <View>, <Text>, etc.
}

const GradientView: React.FC<CustomContainerProps> = ({ children }) => {
    return (
        <View className="mx-4 mt-4">
            <StyledLinearGradient
                colors={['#3E409D', '#780CCD']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }} className="rounded">
                {children}
            </StyledLinearGradient>
        </View>
    );
};

export default GradientView;