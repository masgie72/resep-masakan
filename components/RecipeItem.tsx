import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { FC } from "react";
import { recipeData } from "@/app/(tabs)";
import { COLOR } from "@/constants/color";
import { useRouter } from "expo-router";

const RecipeItem: FC<recipeData> = ({ id, name, image, cookTimeMinutes }) => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => router.push(`/recipe/${id}`)}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.time}>{cookTimeMinutes} minutes</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RecipeItem;
const { width } = Dimensions.get("window");
const cardWidth = (width - 48) / 2; // Mengurangi padding horizontal

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    height: 140,
  },
  container: {
    width: cardWidth,
    backgroundColor: COLOR.active,
    borderRadius: 16,
    marginBottom: 16,
    elevation: 4,
  },
  content: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    color: COLOR.white,
  },
  time: {
    fontSize: 14,
    color: COLOR.white,
  },
});
