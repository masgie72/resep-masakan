import React, { FC } from "react";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

interface Props {
  name: string;
  handleChangeRecipe: (name: string) => void;
  selectedName: string;
}

const TagItem: FC<Props> = ({
  name,
  handleChangeRecipe,
  selectedName,
}: Props) => {
  const isSelected = name === selectedName;

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleChangeRecipe(name)}>
        <View style={[styles.badge, isSelected && styles.selectedBadge]}>
          <Text style={styles.badgeText}>{name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    margin: 4,
  },
  badge: {
    backgroundColor: "#e0e0e0",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  selectedBadge: {
    backgroundColor: "#c0e8ff",
  },
  badgeText: { fontSize: 14, color: "#333", fontWeight: "500" },
});

export default TagItem;
