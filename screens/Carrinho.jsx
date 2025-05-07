import CardCarrinhoProduct from "components/CardCarrinhoProduct";
import ProductValue from "components/ProductValue";
import { useCarrinho } from "contexts/CarrinhoContext";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

export default function Carrinho() {

    const { 
        produtos, 
        valorTotal,
        valorTotalComDesconto,
        totalEconomizado
    } = useCarrinho();

    return (
        <>
            <View className="min-w-full max-w-full bg-secondary flex-1 mb-48">
                <FlatList
                    data={produtos}
                    keyExtractor={(item) => item.id.toString()}
                    ListHeaderComponent={
                        <View className="bg-primary px-3 pb-3">
                            <Text className="text-2xl font-bold">Entrega 1</Text>
                            <View className="flex-row">
                                <Text className="text-lg">Vendido por </Text>
                                <Text className="text-lg font-bold">DROGA RAIA</Text>
                            </View>
                        </View>
                    }
                    renderItem={({ item }) => <CardCarrinhoProduct medicine={item} />}
                    ItemSeparatorComponent={() => <View className="h-2" />}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View className="absolute bottom-0 left-0 right-0 bg-white px-4 pt-3 border-t border-gray-200 gap-1">

                <View className="flex-row justify-between mb-1">
                    <Text className="text-gray-600">Subtotal</Text>
                    <Text className="font-medium">{valorTotal}</Text>
                </View>
                {
                    totalEconomizado > 0 &&
                    <View className="flex-row justify-between mb-3">
                        <Text className="text-green-600">Você está economizando</Text>
                        <Text className="text-green-600 font-medium">
                            {totalEconomizado.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}
                        </Text>
                    </View>
                }
                <View className="flex-row justify-between mb-2">
                    <View className="my-2 pt-2">
                        <Text className="text-md">Total</Text>
                        <ProductValue value={valorTotal} promotion={valorTotalComDesconto} calculate={false}/>
                        {/* <Text className="text-lg font-bold">R$51,78</Text> */}
                    </View>
                    <TouchableOpacity className='flex justify-center items-center bg-contrast rounded-[100px] w-[100px] h-14'>
                        <Text className='text-primary font-bold'>Continuar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}