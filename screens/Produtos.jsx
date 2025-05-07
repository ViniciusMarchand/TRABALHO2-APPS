import { FlatList, Pressable } from 'react-native';
import ProductCard from "../components/ProductCard";
import { medicinesMock, screens } from "../constants";
import Layout from '../components/Layout';
import { useNavigation } from '@react-navigation/native';
import ToastNotification from 'components/common/ToastNotification';
import { useState } from 'react';

const Produtos = () => {

    const { navigate } = useNavigation();
    const { PRODUTO_DETALHADO, CARRINHO } = screens
    const [showToast, setShowToast] = useState(false);


    return (
        <Layout>
            <FlatList
                className='w-full bg-primary'
                data={medicinesMock}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: 'space-between',
                }}
                contentContainerStyle={{
                    minHeight: 500,
                    paddingBottom: 16
                }}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Pressable onPress={() => navigate(PRODUTO_DETALHADO, {...item})}>
                        <ProductCard
                            medicine={item}
                            setShowToast={setShowToast}
                        />
                   </Pressable>
                )}
                ListEmptyComponent={
                    <Text className="text-center mt-10">Nenhum medicamento encontrado</Text>
                }
            />
            <ToastNotification
                visible={showToast}
                message="1 item adicionado"
                actionText="Ir para a cesta"
                onClose={() => setShowToast(false)}
                onAction={() => navigate(CARRINHO)}
            />
        </Layout>
    );
};

export default Produtos;