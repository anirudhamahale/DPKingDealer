import { LinearGradient } from "react-native-linear-gradient";
import { cssInterop } from "nativewind";

const StyledLinearGradient = cssInterop(LinearGradient, {
    className: 'style'
});
export default StyledLinearGradient;