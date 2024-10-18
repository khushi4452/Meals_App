 import { FlatList } from 'react-native';
 import { CATEGORIES } from '../data/dummy-data.js';
import CategoryGridTile from '../components/CategoryGridTile.js';
 function renderCategoryItem (item) {
return <CategoryGridTile  title={itemData.item.title} color={itemData.item.color}/>
 }
function CategoriesScreen() {
 return <FlatList data={CATEGORIES}
  keyExtractor={ (item)=> item.id}
  renderItem= {renderCategoryItem}/>
}

export default CategoriesScreen;