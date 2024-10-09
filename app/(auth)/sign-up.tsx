import { Text, ScrollView, View, Image } from "react-native";
import { icons, images } from "@/constants";
import InputField from "@/components/InputField";
import { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  return (
    <ScrollView className="flex-1 bg-white ">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
            Create Your Account
          </Text>
        </View>
        <View>
          <InputField
            label="Name"
            placeholder="Enter your name"
            icon={icons.person}
            value={form.name}
            onChnageText={(value) => setFormValue({ ...form, name: value })}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
