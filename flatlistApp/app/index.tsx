import {
  Text,
  View,
  StyleSheet,
  FlatList
} from "react-native"; 
import defaultStyles from "../styles/defaultStyles";
import { useState } from "react";
import ListItemSeparator from "@/components/ListItemSeparator";
import ListItem from "@/components/ListItem";
import { dataType } from "@/data/appData";
import { DATA } from "@/data/appData";

export default function Index() {

  const [selectedId, setSelectedId] = useState<string>('1')

  // Create a simply function to call when an items is selected
  // Pass a param of the item that was clicked on
  const handleRowPress = (item: dataType) => {
    console.log('Clicked on ' + item.title)
    setSelectedId(item.id)
  }

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList 
            data = {DATA}
            keyExtractor = {(item: dataType) => item.id}
            extraData = {selectedId}
            ItemSeparatorComponent={() => (<ListItemSeparator color='blue'/>)}
            renderItem = {({ item }) => (
              <ListItem
                item = {item}
                isSelected = {item.id === selectedId}
                onPress = {handleRowPress}
              />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  }
});
