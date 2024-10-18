import { Pressable,View,Text,StyleSheet } from "react-native";

function CategoryGridTile({title , color}) {
    return <View>
        <Pressable>
        <View>
            <Text>{title}</Text>
        </View>
        </Pressable>
    </View>
}
export default CategoryGridTile;

const styles = StyleSheet.create({
   gridItem: {
    flex: 1
   } 
});