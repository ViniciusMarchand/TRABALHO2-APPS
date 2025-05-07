import { StatusBar, View } from "react-native";

export default function LayoutCarrinho({ children }) {
    return (
        <>
            <StatusBar />
            <View className="min-w-full max-w-full bg-secondary flex-1 justify-center items-center ">
                {children}
            </View>
        </>
    )
}