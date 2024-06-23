import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";

export default function PreferencesComponent({ form, setForm }) {
  return (
    <ScrollView>
      <View style={styles.section}>
        <View style={styles.sectionBody}>
          <View style={[styles.rowWrapper, styles.rowFirst]}>
            <TouchableOpacity style={styles.row}>
              <Text style={styles.rowLabel}>Language</Text>
              <View style={styles.rowSpacer} />
              <Text style={styles.rowValue}>English</Text>
              <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
            </TouchableOpacity>
          </View>

          <View style={styles.rowWrapper}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={styles.row}
            >
              <Text style={styles.rowLabel}>Location</Text>
              <View style={styles.rowSpacer} />
              <Text style={styles.rowValue}>Los Angeles, CA</Text>
              <FeatherIcon color="#C6C6C6" name="chevron-right" size={20} />
            </TouchableOpacity>
          </View>

          <View style={styles.rowWrapper}>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Email Notifications</Text>
              <View style={styles.rowSpacer} />
              <Switch
                onValueChange={(emailNotifications) =>
                  setForm({ ...form, emailNotifications })
                }
                style={{
                  transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }],
                }}
                value={form.emailNotifications}
              />
            </View>
          </View>

          <View style={styles.rowWrapper}>
            <View style={styles.row}>
              <Text style={styles.rowLabel}>Push Notifications</Text>
              <View style={styles.rowSpacer} />
              <Switch
                onValueChange={(pushNotifications) =>
                  setForm({ ...form, pushNotifications })
                }
                style={{
                  transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }],
                }}
                value={form.pushNotifications}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
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
