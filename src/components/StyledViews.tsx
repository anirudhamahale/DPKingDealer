import { LinearGradient } from "react-native-linear-gradient";
import { cssInterop } from "nativewind";

export const StyledLinearGradient = cssInterop(LinearGradient, {
    className: 'style'
});