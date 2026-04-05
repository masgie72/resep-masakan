import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { COLOR } from "@/constants/color";
import Header from "@/components/Header";
import axios from "axios";
import RecipeItem from "@/components/RecipeItem";

export interface recipeData {
  id: number;
  name: string;
  cookTimeMinutes: number;
  image: string;
}

const HomeScreen = () => {
  // Random 1 - 30
  const random = Math.floor(Math.random() * 30) + 1;
  const [randomRecipe, setRandomRecipe] = useState<recipeData[]>([]);
  const [recipes, setRecipes] = React.useState<Record<string, any>>({});
  const getRecipes = async () => {
    const recipe = await axios.get(`https://dummyjson.com/recipes/${random}`);
    setRecipes(recipe.data);
  };
  const getRandomRecipe = async () => {
    const { data } = await axios.get(
      `https://dummyjson.com/recipes?limit=10&skip=${random}&select=id,name,image,cookTimeMinutes`,
    );
    setRandomRecipe(data.recipes);
  };
  useEffect(() => {
    getRecipes();
    getRandomRecipe();
  }, []);

  return (
    <LinearGradient
      colors={[COLOR.Background, COLOR.backgroundLight]}
      style={{ flex: 1 }}
    >
      <Header />
      
        <View style={styles.card}>
          <Image source={{ uri: recipes.image }} style={styles.imageFull} />
          <View style={styles.overlay}>
            <Text style={styles.title}>{recipes.name}</Text>
            <Text style={{ color: COLOR.white, fontSize: 16 }}>
              {recipes.cookTimeMinutes} minutes
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.randomText}>Mungkin Kamu Suka</Text>

          <FlatList
            data={randomRecipe}
            renderItem={({ item }) => (
              <RecipeItem
                id={item.id}
                name={item.name}
                cookTimeMinutes={item.cookTimeMinutes}
                image={item.image}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            contentContainerStyle={{ gap: 8}}
            style={{ marginTop: 10}}
          /> 
        </View>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageFull: {
    width: "100%",
    height: 450,
    borderRadius: 25,
    elevation: 15,
  },
  card: {
    position: "relative",
    marginBottom: 20,
    borderRadius: 12,
  },
  overlay: {
    position: "absolute",
    bottom: 5,
    left: 16,
    right: 10,
  },

  title: {
    fontSize: 23,
    fontWeight: "600",
    padding: 10,
    color: COLOR.white,
    marginBottom: 10,
    textShadowColor: COLOR.primary, 
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 3,
  },
  randomText: {
    fontSize: 20,
    color: COLOR.primary,
    paddingHorizontal: 16,
    letterSpacing: 2,
  },
});
