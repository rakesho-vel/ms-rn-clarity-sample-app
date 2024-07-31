import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export interface ProductProps {
  title: string;
  price: string;
  description: string;
}

type RootStackParamList = {
  ProductDetails: ProductProps;
};

type ProductDetailsScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;
type ProductDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ProductDetails'>;

type Props = {
  route: ProductDetailsScreenRouteProp;
  navigation: ProductDetailsScreenNavigationProp;
};

const ProductDetailsScreen: React.FC<Props> = ({ route }: Props) => {
  
  return (
    <View style={{padding: 16}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 16}}>
        Product Details
      </Text>
      <Text style={{fontSize: 18, fontWeight: 'bold', marginVertical: 5}}>
        Product Name: {route.params.title}
      </Text>
      <Text style={{fontSize: 16, fontStyle: 'italic', marginVertical: 5}}>
        Price: {route.params.price}
      </Text>
      <Text style={{fontSize: 16, marginVertical: 5}}>
        Description: {route.params.description}
      </Text>
    </View>
  );
};

export default ProductDetailsScreen;