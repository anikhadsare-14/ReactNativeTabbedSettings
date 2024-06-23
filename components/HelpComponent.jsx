import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

export default function HelpComponent() {
  return (
    <View style={styles.section}>
      <View style={styles.sectionBody}>
        <View style={styles.rowWrapper}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
            style={styles.row}
          >
            <Text style={styles.rowLabel}>Call us</Text>
            <View style={styles.rowSpacer} />
            <FeatherIcon color="#C6C6C6" name="phone" size={20} />
          </TouchableOpacity>
        </View>

        <View style={styles.rowWrapper}>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Chat with us</Text>
            <View style={styles.rowSpacer} />
            <FeatherIcon color="#C6C6C6" name="inbox" size={20} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  /** Section */
  section: {
    marginTop: 12,
  },
  sectionBody: {
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#e3e3e3",
    paddingLeft: 24,
  },
  sectionTitle: {
    marginTop: 0,
    marginHorizontal: 24,
    marginBottom: 8,
    fontSize: 14,
    fontWeight: "600",
    color: "#a7a7a7",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  rowWrapper: {
    borderTopWidth: 1,
    borderColor: "#e3e3e3",
  },
  rowFirst: {
    borderTopWidth: 0,
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: "500",
    color: "#2c2c2c",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: 44,
    paddingRight: 24,
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  rowValue: {
    fontSize: 17,
    fontWeight: "500",
    color: "#7f7f7f",
    marginRight: 4,
  },
});
