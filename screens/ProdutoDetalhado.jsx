import StarRating from "components/StarRating";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import ProductValue from "components/ProductValue";

import { useCarrinho } from "contexts/CarrinhoContext";
import { useState } from "react";
import ToastNotification from "components/common/ToastNotification";
import { useNavigation } from "@react-navigation/native";
import { screens } from "../constants";

export default function ProdutoDetalhado({ route }) {

    const { description, unitMeasurement, image, value, promotion, brand, rating, details } = route.params;
    const { adicionarProduto } = useCarrinho();
    const [showToast, setShowToast] = useState(false);
    const { CARRINHO } = screens

    const { navigate } = useNavigation();
    
    
    return (
        <>
        <ScrollView className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
            <Text className="text-lg font-bold text-gray-900 mb-1">
                {description}
            </Text>

            <View className="flex-row items-center mb-2">
                <StarRating rating={rating} size={20} />
                <Text className="text-sm text-gray-600">{rating} (18 avaliações)</Text>
            </View>

            <Text className="text-sm text-gray-500 mb-4">
                {brand} · {unitMeasurement}
            </Text>
            <View className="w-full">
                <Image source={{ uri: image }} 
                    style={{
                        width: '100%',
                        height: 340,
                        resizeMode: 'contain'
                    }}
                    />
            </View>

            <Text className="text-sm text-gray-600 mb-4">
                Vendido e entregue por <Text className="font-semibold">Raia</Text>
            </Text>

            <View className="bg-white p-4 border border-gray-200 rounded-[15px]">
                <ProductValue value={value} promotion={promotion} promotionIcon={true} />

                <Text className="text-s font-bold underline mb-2">Formas de pagamento</Text>

                <TouchableOpacity className='flex justify-center items-center bg-contrast rounded-[100px] w-full h-14' onPress={() => {adicionarProduto(route.params);        setShowToast(true);}}>
                    <Text className='text-primary font-bold'>Comprar</Text>
                </TouchableOpacity>

                <View className="flex-row items-start my-3">
                    <FontAwesome5 name="box" size={18} color="purple" className="mr-1" />
                    <Text className="text-sm text-purple-500">Você pode assinar este produto</Text>
                </View>

                <View className="mb-4">
                    <View className="flex-row">
                        <Text className="text-sm text-green-600 mb-1">• Frete grátis</Text>
                        <Text className="text-sm text-gray-700 mb-1"> a partir do 2º pedido</Text>
                    </View>
                    <Text className="text-sm text-gray-700">• Assinatura gratuita, sem taxas mensais</Text>
                </View>

                <Text className="text-s mb-4 font-bold underline">Saiba como funciona</Text>

                <TouchableOpacity className='flex justify-center items-center bg-purple-500 rounded-[100px] w-full h-14'>
                    <Text className='text-primary font-bold'>Compra programada</Text>
                </TouchableOpacity>

            </View>
            <View className="rounded-lg p-3 mb-2">
                <Text className="text-s text-gray-600 font-bold">Consultar formas de entregas</Text>
                <Text className="text-s text-gray-400 mt-1">CEP</Text>
                <TextInput className="text-xs  p-3 bg-gray-300 rounded-[10px]"></TextInput>
            </View>
            <View className="boder-t border-gray-200 my-1 h-1" />
            <View className="h-px bg-gray-200 my-3" />
            <View className="bg-secondary w-full px-4 py-6 rounded-[15px] my-6 gap-5">
                <Text className="font-bold">Descição do Produto</Text>
                <Text>{details}</Text>
                <Text className="font-bold underline">Descrição completa</Text>
            </View>
        </ScrollView>
        <ToastNotification
            visible={showToast}
            message="1 item adicionado"
            actionText="Ir para a cesta"
            onClose={() => setShowToast(false)}
            onAction={() => navigate(CARRINHO)}
            />
        </>
    )
}