import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Picker from '@gregfrench/react-native-wheel-picker'
var PickerItem = Picker.Item;

const App = () => {
  const [selectedItem, setSelectedItem ] = useState(2);
  const [itemList , setItemList ] = useState(['Apple', 'Orange', 'Peach', 'Strawberries', 'Pineapple']);

  return (
    <View style={styles.container}>
      <Picker style={{width: 150, height: 180}}
          lineColor="#000000" 
          lineGradientColorFrom="#008000" 
          lineGradientColorTo="#FF5733" 
          selectedValue={selectedItem}
          itemStyle={{color:"white", fontSize:26}}
          onValueChange={(index) => setSelectedItem(index) }>
          {itemList.map((value, i) => (
            <PickerItem label={value} value={i} key={i} />
          ))}
        </Picker>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff4646'
  }
})