import { Image, Text, TouchableOpacity, View, Pressable } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import ProductValue from "./ProductValue";
import { useCarrinho } from "contexts/CarrinhoContext";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../constants";

export default function CardCarrinhoProduct({ medicine }) {

    const { id, description, unitMeasurement, image, value, promotion, brand, quantidade } = medicine;
    const { removerProduto } = useCarrinho();
    const navigation = useNavigation();
    const { PRODUTO_DETALHADO } = screens;

    return (
        <Pressable className="bg-primary" onPress={() => navigation.navigate(PRODUTO_DETALHADO, {...medicine})}>
            <View className="flex-row justify-center items-start max-h-none p-2 bg-primary">
                <View className="py-3 w-[70px]">
                    <Image
                        source={{ uri: image }}
                        style={{
                            width: 60,
                            height: 60,
                            resizeMode: 'contain'
                        }}
                    />
                </View>

                <View className="flex-1 px-2 gap-1/2">
                    <Text
                        className="text-base flex-shrink flex-wrap"
                        numberOfLines={0}
                    >
                        {description}
                    </Text>
                    <Text
                        className="text-base flex-shrink flex-wrap opacity-80"
                        numberOfLines={0}
                    >
                        {brand}
                    </Text>
                    <Text
                        className="text-base flex-shrink flex-wrap opacity-80"
                        numberOfLines={0}
                    >
                        {unitMeasurement}
                    </Text>
                </View>

                <View className="pt-1 pr-1">
                    <TouchableOpacity className="flex justify-center items-center">
                        <MaterialCommunityIcons name="delete" size={24} color="black" onPress={() => removerProduto(id)} />
                    </TouchableOpacity>
                </View>
            </View>
            <View className="py-5 px-3 flex-row w-full justify-between bg-primary">
                <View>
                    <ProductValue promotion={promotion} value={value} />
                </View>
                <View className="bg-secondary w-[100px] h-[50px] rounded-2xl flex-row justify-between items-center px-5">
                    <Text className="text-lg m-3">
                        {quantidade}
                    </Text>
                    <AntDesign name="down" size={20} color="black" />
                </View>
            </View>
            <View className="bg-primary flex-row mb-2 px-4 justify-between">
                <View className="flex-row">
                    <Text className="text-purple-900">Você pode assinar esse produto</Text>
                    <AntDesign name="right" size={24} color="purple" />
                </View>
                <AntDesign name="questioncircleo" size={24} color="purple" />
            </View>
        </Pressable>
    )
}