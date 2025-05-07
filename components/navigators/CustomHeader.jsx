import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons, FontAwesome, FontAwesome5, AntDesign  } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../constants";

export default function CustomHeader({ title, showBack = true, showSearch = true, rightIcon }) {
    const navigation = useNavigation();
    const { CARRINHO } = screens;

    return (
        <View className="h-20 flex-row items-center px-4 bg-primary">
        {showBack && (
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className="mr-3"
          >
            <AntDesign name="left" size={18} color="black" />
          </TouchableOpacity>
        )}
  
        {showSearch ? (
          <View className="flex-1 bg-secondary flex-row items-center rounded-[50px] px-3 h-14 mx-2 w-10">
            <TextInput
              placeholder="Buscar na Raia"
              className="flex-1 text-base h-full px-3"
              placeholderTextColor="#6b7280"
            />
            <View className="gap-5 flex-row px-3">
              <MaterialCommunityIcons name="barcode-scan" size={18} color="black" />  
              <FontAwesome name="microphone" size={18} color="black" />  
            </View>
          </View>
        ) : (
          <Text className="flex-1 text-white text-xl font-bold ml-2">
            {title}
          </Text>
        )}
  
        {rightIcon && (
          <TouchableOpacity className="ml-3" onPress={() => navigation.navigate(CARRINHO)}>
            <FontAwesome5 name="shopping-basket" size={18} color="black" />
          </TouchableOpacity>
        )}
      </View>
    )
}