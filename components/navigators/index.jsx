import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screens } from "../../constants";
import Produtos from "screens/Produtos";
import CustomHeader from "./CustomHeader";
import Carrinho from "screens/Carrinho";
import CustomHeaderCarrinho from "./CustomHeaderCarrinho";
import ProdutoDetalhado from "screens/ProdutoDetalhado";

export default function Navigator() {
    const Stack = createNativeStackNavigator();
    const { PRODUTOS, CARRINHO, PRODUTO_DETALHADO } = screens;

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name={PRODUTOS} 
                    component={Produtos} 
                    options={{
                        header: () => (
                          <CustomHeader 
                            title="Início" 
                            rightIcon="notifications-outline"
                          />
                        ),
                      }}
                />
                <Stack.Screen   
                    name={CARRINHO} 
                    component={Carrinho} 
                    options={{
                        header: () => (
                          <CustomHeaderCarrinho
                            title="Início" 
                            rightIcon="notifications-outline"
                          />
                        ),
                      }}
                />
                <Stack.Screen   
                    name={PRODUTO_DETALHADO} 
                    component={ProdutoDetalhado} 
                    options={{
                        header: () => (
                          <CustomHeader
                            title="Início" 
                            rightIcon="notifications-outline"
                          />
                        ),
                      }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}