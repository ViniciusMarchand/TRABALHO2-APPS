import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { useEffect, useRef } from 'react';

export default function ToastNotification ({ message, visible, onClose, actionText = "Ir para a cesta", onAction }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <Animated.View 
      style={
        [  styles.toastContainer, 
          { opacity: fadeAnim }]
      }
    >
      <Text className="text-white text-base">{message}</Text>
      <TouchableOpacity onPress={onAction}>
        <Text className="text-white font-bold text-base underline">{actionText}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toastContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'green', // Cor verde como solicitado
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  }
});