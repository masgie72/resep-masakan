import { View, FlatList, Alert } from "react-native";
import React from "react";
import Header from "@/components/Header";
import axios from "axios";
import RecipeItem from "@/components/RecipeItem";
import { LinearGradient } from "expo-linear-gradient";
import { COLOR } from "@/constants/color";
import TagItem from "@/components/TagItem";

const RecipeScreen = () => {
  const [recipes, setRecipes] = React.useState<any[]>([]);
  const [tags, setTags] = React.useState<string[]>([]);
  const [name, setName] = React.useState<string>("");
  const getRecipes = async () => {
    if (!name) {
      const { data } = await axios.get(
        "https://dummyjson.com/recipes?limit=50&select=id,name,image,cookTimeMinutes",
      );
      setRecipes(data.recipes);
    } else {
      const { data } = await axios.get(
        `https://dummyjson.com/recipes/tag/${name}`,
      );
      setRecipes(data.recipes);
    }
  };

  const handleChangeRecipe = async (name: string) => {
    setName(name);
  };

  const getTags = async () => {
    const { data } = await axios.get("https://dummyjson.com/recipes/tags");
    setTags(data);
  };

  React.useEffect(() => {
    getRecipes();
    getTags();
  }, [name]);

  return (
    <LinearGradient
      colors={[COLOR.Background, COLOR.backgroundLight]}
      style={{ flex: 1 }}
    >
      <Header />
      {/* List Tags*/}
      <View style={{ margin: 10 }}>
        <FlatList
          data={tags}
          horizontal
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) => <TagItem name={item} handleChangeRecipe={handleChangeRecipe} selectedName={name} />}
          keyExtractor={(item) => item}
        />
      </View>

      {/* List Recipes */}
      <View style={{ flex: 1, margin: 10 }}>
        <FlatList
          data={recipes}
          numColumns={2}
          contentContainerStyle={{ gap: 10 }}
          columnWrapperStyle={{ justifyContent: "space-between", gap: 10 }}
          renderItem={({ item }) => (
            <RecipeItem
              id={item.id}
              name={item.name}
              image={item.image}
              cookTimeMinutes={item.cookTimeMinutes}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </LinearGradient>
  );
};

export default RecipeScreen;
