import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons, FontAwesome, FontAwesome5, AntDesign  } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { screens } from "../../constants";

export default function CustomHeaderCarrinho({ title, showBack = true, showSearch = true, rightIcon }) {
    const navigation = useNavigation();

    return (
        <View className="h-20 flex-row items-center pl-4 bg-primary">
        {showBack && (
          <TouchableOpacity 
            onPress={() => navigation.goBack()}
            className="mr-3 "
          >
            <AntDesign name="left" size={18} color="black" className="pl-4"/>
          </TouchableOpacity>
        )}
  
        {showSearch ? (
          <View className="flex-1 bg-primary flex-row items-center rounded-2xl px-3 h-14 mx-2 w-10 border-1 border-tertiary">
            <AntDesign name="search1" size={18} color="black" />
            <TextInput
              placeholder="O que você está procurando?"
              className="flex-1 text-sm h-full px-3"
              placeholderTextColor="#6b7280"
            />
            <View className="gap-5 flex-row px-3">
              <MaterialCommunityIcons name="barcode-scan" size={18} color="black" />  
              <FontAwesome name="microphone" size={18} color="black" />  
            </View>
          </View>
        ) : (
          <Text className="flex-1 text-xl font-bold ml-2">
            {title}
          </Text>
        )}
  
      </View>
    )
}