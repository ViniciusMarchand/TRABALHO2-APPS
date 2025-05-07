import { StatusBar, View } from "react-native";

export default function Layout({ children }) {
    return (
        <>
            <StatusBar />
            <View className="min-w-full max-w-full bg-primary flex-1 justify-center items-center px-2">
                {children}
            </View>
        </>
    )
}