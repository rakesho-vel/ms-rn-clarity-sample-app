import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { ProductProps } from "./product";
import { RootStackParamList } from "../utils/root-stack-param-list";

type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Welcome'
>;

const WelcomeScreen: React.FC<{
  navigation: WelcomeScreenNavigationProp;
}> = ({navigation}) => {
  const quickActions = [
    {title: 'Action 1', description: 'Description 1'},
    {title: 'Action 2', description: 'Description 2'},
  ];

  const itemList: ProductProps[] = [
    {title: 'Item 1', description: 'Description 1', price: '$10'},
    {title: 'Item 2', description: 'Description 2', price: '$20'},
    {title: 'Item 3', description: 'Description 3', price: '$30'},
    {title: 'Item 4', description: 'Description 4', price: '$40'},
  ];

  const handleProductPress = (item: ProductProps) => {
    navigation.navigate('Product', item);
  };
  return (
    <View style={styles.container}>
      <View style={styles.quickActionsContainer}>
        {quickActions.map((action, index) => (
          <View key={index} style={styles.quickActionCard}>
            <Text>{action.title}</Text>
            <Text>{action.description}</Text>
          </View>
        ))}
      </View>

      <View style={styles.listHeader}>
        <Text style={styles.listHeaderText}>Products</Text>
      </View>

      <View style={styles.itemListContainer}>
        {itemList.map((item, index) => (
          <TouchableWithoutFeedback
            onPress={() => {handleProductPress(item);}}
            key={index}
            style={styles.itemCard}>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>{item.price}</Text>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  quickActionCard: {
    width: '48%',
    height: 100,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemListContainer: {
    flex: 1,
  },
  itemCard: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#e0e0e0',
  },
  listHeader: {
    marginBottom: 16,
  },
  listHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
