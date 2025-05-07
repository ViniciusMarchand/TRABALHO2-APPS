import { View } from "react-native";

export default function CardLayout({children, className}) {
    return (
        <View className={"flex-1 mt-10 p-4 border-1 border-tertiary rounded-2xl " + className}>
            {children}
        </View>
    )
}