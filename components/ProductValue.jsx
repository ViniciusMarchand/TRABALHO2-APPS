import { View, Text } from 'react-native';

export default function ProductValue({ value, promotion, calculate = true, promotionIcon = false }) {
  const promotionValue = (value * (1 - promotion / 100)).toLocaleString('pt-BR', {
    maximumFractionDigits: 2,
  });

  if(!calculate) {
    return  <View className="items-start mb-2">
    {promotion > 0 ? (
      <>
        <Text className="line-through text-gray-500 text-md">
          R$ {value.toLocaleString('pt-BR', {
            maximumFractionDigits: 2,
          })}
        </Text>
        <Text className="font-bold text-lg">
          R$ {promotion.toLocaleString('pt-BR', {
            maximumFractionDigits: 2,
          })}
        </Text>
      </>
    ) : (
      <Text className="text-black text-lg">
        R$ {value.toLocaleString('pt-BR', {
          maximumFractionDigits: 2,
        })}
      </Text>
    )}
  </View>
  }



  return (
    <View className="items-start mb-2">
      {promotion > 0 ? (
        <>
          <View className='flex-row'>
            <Text className="line-through text-gray-500 text-md">
              R$ {value.toLocaleString('pt-BR', {
                maximumFractionDigits: 2,
              })}
            </Text>
            <Text className="text-xs text-green-600 px-1 rounded">↓ {promotion}%</Text>
          
          </View>
          <Text className="font-bold text-lg">
            R$ {promotionValue.toLocaleString('pt-BR', {
              maximumFractionDigits: 2,
            })}
          </Text>
        </>
      ) : (
        <Text className="text-black text-lg">
          R$ {value.toLocaleString('pt-BR', {
            maximumFractionDigits: 2,
          })}
        </Text>
      )}
    </View>
  );
};