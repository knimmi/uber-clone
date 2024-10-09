import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  View,
  Text,
} from "react-native";

const InputField = ({ label, labelStyle }) => (
  <KeyboardAvoidingView>
    <TouchableWithoutFeedback>
      <View className="my-2 w-full">
        <Text className={`tex-lg font-JakartaSemiBold mb-3 ${labelStyle}`}>
          {label}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

export default InputField;
