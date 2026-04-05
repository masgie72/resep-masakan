import Header from "@/components/Header";
import { COLOR } from "@/constants/color";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const DetailRecipe = () => {
  const { id } = useLocalSearchParams();
  const [recipe, setRecipe] = useState<Record<string, any>>({});
  const getRecipe = async () => {
    const response = await axios.get(`https://dummyjson.com/recipe/${id}`);
    const data = await response.data;
    setRecipe(data);
  };
  React.useEffect(() => {
    getRecipe();
  }, []);
  return (
    <LinearGradient
      colors={[COLOR.Background, COLOR.backgroundLight]}
      style={{ flex: 1 }}
    >
      <Header />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.card}>
            <Image source={{ uri: recipe.image }} style={styles.imageFull} />
            <View style={styles.overlay}>
              <Text style={styles.title}>{recipe.name}</Text>
            </View>
          </View>
        </View>
        {/* Content*/}
        <View style={styles.containerContent}>
          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Ionicons name="time" size={20} color={COLOR.active} />
              <Text style={styles.statValue}>{recipe.cookTimeMinutes}</Text>
              <Text style={styles.statLabel}>Cooking time (Minutes)</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="time" size={20} color={COLOR.active} />
              <Text style={styles.statValue}>{recipe.prepTimeMinutes}</Text>
              <Text style={styles.statLabel}>Prep time (Minutes)</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="people" size={20} color={COLOR.active} />
              <Text style={styles.statValue}>{recipe.servings}</Text>
              <Text style={styles.statLabel}>servings</Text>
            </View>
          </View>
        </View>
        <View style={styles.containerContent}>
          {/* Stats */}
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Ionicons name="bar-chart" size={20} color={COLOR.active} />
              <Text style={styles.statValue}>{recipe.difficulty}</Text>
              <Text style={styles.statLabel}>Difficulty</Text>
            </View>
            <View style={styles.statCard}>
              <Ionicons name="earth" size={20} color={COLOR.active} />
              <Text style={styles.statValue}>{recipe.cuisine}</Text>
              <Text style={styles.statLabel}>Negara</Text>
            </View>
          </View>
          {/* Ingrements */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionTitleRow}>
              <Ionicons name="list" color={COLOR.active} size={16} />
              <Text style={styles.titlelSection}>Cara membuat:</Text>
            </View>
          </View>
          <View style={styles.ingredientsGrid}>
            {recipe.instructions &&
              recipe.instructions.map((item: any, index: number) => (
                <View key={index} style={styles.ingredientsCard}>
                  <View style={styles.ingredientsNumber}>
                    <Text style={styles.ingredientsText}>{index + 1}</Text>
                  </View>
                  <Text style={styles.ingredientsText}>{item}</Text>
                </View>
              ))}
          </View>
          {/* Intruction */}
            <View style={styles.sectionContainer}>
            <View style={styles.sectionTitleRow}>
              <Ionicons name="list" color={COLOR.active} size={16} />
              <Text style={styles.titlelSection}>Bahan-bahan</Text>
            </View>
          </View>
          <View style={styles.ingredientsGrid}>
            {recipe.ingredients &&
              recipe.ingredients.map((ingredient: any, index: number) => (
                <View key={index} style={styles.ingredientsCard}>
                  <View style={styles.ingredientsNumber}>
                    <Text style={styles.ingredientsText}>{index + 1}</Text>
                  </View>
                  <Text style={styles.ingredientsText}>{ingredient}</Text>
                </View>
              ))}
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    position: "relative",
    marginBottom: 20,
    borderRadius: 12,
  },
  ingredientsText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 22,
  },
  imageFull: {
    width: "100%",
    height: 400,
    borderRadius: 25,
    elevation: 15,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
  },
  title: {
    color: COLOR.white,
    fontSize: 20,
    fontWeight: "bold",
  },
  containerContent: {
    backgroundColor: COLOR.Background,
    borderRadius: 2,
    marginTop: -20,
    paddingTop: 30,
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  statsContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  statCard: {
    flex: 1,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  statValue: {
    fontSize: 18,
    fontWeight: "600",
    color: COLOR.active,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: COLOR.primary,
    textAlign: "center",
    fontWeight: 400,
  },
  sectionContainer: {
    marginBottom: 15,
    marginTop: 32,
  },
  sectionTitleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    flex: 1,
    marginBottom: 16,
  },
  titlelSection: {
    fontSize: 22,
    fontWeight: "600",
    flex: 1,
  },
  ingredientsGrid: {
    gap: 12,
  },
  ingredientsCard: {
    flexDirection: "row",
    backgroundColor: COLOR.backgroundLight,
    borderRadius: 20,
    padding: 20,
    gap: 16,
  },
  ingredientsNumber: {
    width: 28,
    height: 28,
    borderRadius: 30,
    backgroundColor: COLOR.backgroundLight,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DetailRecipe;
