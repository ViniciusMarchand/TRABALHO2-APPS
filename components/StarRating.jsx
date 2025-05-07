import { Ionicons } from '@expo/vector-icons';
import { View } from 'react-native';

export default function StarRating({ rating = 0, size = 20 }) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
  
    return (
      <View className="flex-row p-1 rounded-lg">
        {[1, 2, 3, 4, 5].map((star) => {
          if (star <= fullStars) {
            return (
              <Ionicons
                key={star}
                name="star"
                size={size}
                color="#f59e0b"
              />
            );
          } else if (star === fullStars + 1 && hasHalfStar) {
            return (
              <Ionicons 
                key={star}
                name="star-half"
                size={size}
                color="#f59e0b"
              />
            );
          } else {
            return (
              <Ionicons 
                key={star}
                name="star-outline"
                size={size}
                color="#f59e0b"
              />
            );
          }
        })}
      </View>
    );
};