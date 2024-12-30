import React from 'react';
import { View, Text, TextInput, StyleSheet, TextInputProps, Platform } from 'react-native';

type TextFieldProps = TextInputProps & {
    placeholder?: string; // Placeholder text for the field
    errorMessage?: string; // Error message to display
    isRequired?: boolean; // Flag to show * if the field is required
    onChangeText?: ((text: string) => void);
};

const TextField: React.FC<TextFieldProps> = ({
    placeholder,
    errorMessage,
    isRequired,
    style,
    onChangeText,
    ...textInputProps
}) => {
    return (
        <View className="w-full mb-4">
            <Text className="text-white mb-2 text-base">
                {placeholder} {isRequired && <Text className="text-red-900 text-xl">*</Text>}
            </Text>
            <View className="border-1 text-base border border-venetian-nights rounded-lg h-12 color-white justify-center px-2 bg-sambucus">
                <TextInput
                    className="text-base color-white"
                    placeholderTextColor="#00000"
                    cursorColor="#00000"
                    onChangeText={onChangeText}
                    {...textInputProps}
                    style={{ textAlignVertical: 'center' }}
                />
            </View>

            {/* <View className="h-[1px] bg-gray-800 w-full mt-1"></View> */}
            {errorMessage && <Text className="text-red-500 text-sm mt-1">{errorMessage}</Text>}
        </View>
    );
};

export default TextField;

// TODO:- Add border to text field of color 794DFD
// TODO:- Background color of text field should be 1B1C2D