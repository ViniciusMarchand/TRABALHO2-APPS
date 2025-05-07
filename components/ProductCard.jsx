import React, { useState } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import CardLayout from "./common/CardLayout";
import imagem1 from "../assets/imgs/remedio1.png"
import { View } from 'react-native';
import ProductValue from './ProductValue';
import AntDesign from '@expo/vector-icons/AntDesign';
import StarRating from './StarRating';
import { useCarrinho } from 'contexts/CarrinhoContext';
import ToastNotification from './common/ToastNotification';

export default function ProductCard({ medicine, setShowToast }) {

    if (!medicine) return null;

    const { description, unitMeasurement, image, value, promotion, brand, rating } = medicine;

    const { adicionarProduto } = useCarrinho();

    const handleComprar = (produto) => {
        adicionarProduto(produto);
        setShowToast(true);
      };

    return (
        <CardLayout className={"max-w-[175px] min-w-[175px] min-h-[430px] flex-col justify-between"}>
             {promotion > 0 && (
                <View className="absolute top-3 right-3 bg-[#288352] rounded-full px-2 py-1 z-10 flex-row items-center justify-center gap-1">
                    <AntDesign name="arrowdown" size={12} color="white" />
                    <Text className="text-white text-xs font-bold">
                    {promotion}%
                    </Text>
                </View>
            )}
            <View className='gap-1'>
                <View className='w-full flex justify-center items-center p-2'>
                    <Image source={{ uri: image }} 
                    style={{
                        width: 125,
                        height: 125,
                        resizeMode: 'contain'
                    }}
                    />
                </View>
                <View className="h-[50px] justify-center"> 
                    <Text 
                        numberOfLines={2} 
                        ellipsizeMode="tail"
                        className="text-base" 
                    >
                        {description}
                    </Text>
                </View>
                <Text className='text-sm font-semibold'>{brand}</Text>
                <Text className='opacity-50'>{unitMeasurement}</Text>
                <StarRating rating={rating} size={18}/>
                <Text className='text-sm  font-semibold text-purple-500'>Compra programada</Text>
            </View>
            <View>
                <ProductValue value={value} promotion={promotion}/>
                <TouchableOpacity className='flex justify-center items-center bg-contrast rounded-[100px] w-full h-14' onPress={() => handleComprar(medicine)}>
                    <Text className='text-primary font-bold'>Comprar</Text>
                </TouchableOpacity>          
            </View>

        </CardLayout>
    );
};

