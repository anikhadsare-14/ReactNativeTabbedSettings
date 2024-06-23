import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Switch,
} from "react-native";
import colors from "./constants/colors";
import FeatherIcon from "react-native-vector-icons/Feather";
import Preferences from "./components/PreferencesComponent";
import HelpComponent from "./components/HelpComponent";
import ContentComponent from "./components/ContentComponent copy";

const tabs = [
  { name: "Preferences", icon: "settings" },
  { name: "Help", icon: "help-circle" },
  { name: "Content", icon: "align-center" },
];

export default function App() {
  const [value, setValue] = React.useState(0);

  const [form, setForm] = useState({
    emailNotifications: true,
    pushNotifications: false,
  });

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors._f6f6f6 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          <Text style={styles.subtitle}>
            Welcome user, here you can change your preferences according to your
            requirements. Hope this suits you well.
          </Text>
        </View>

        <View style={styles.profile}>
          <View style={styles.profileHeader}>
            <Image
              style={styles.profileAvatar}
              alt="Profile Picture"
              source={require("./assets/profile.jpg")}
            />
            <View style={styles.profileBody}>
              <Text style={styles.profileName}>Animesh Khadsare</Text>
              <Text style={styles.profileHandle}>animesh.k@gmail.com</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}
          >
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>Edit Profile</Text>
              <FeatherIcon color={colors.white} name="edit-3" size={16} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.tabs}>
          {tabs.map(({ name, icon }, index) => {
            const isActive = index == value;
            return (
              <View
                key={name}
                style={[
                  styles.tabWrapper,
                  isActive && { borderBottomColor: colors._6366f1 },
                ]}
              >
                <TouchableOpacity
                  onPress={() => {
                    setValue(index);
                  }}
                >
                  <View style={styles.tab}>
                    <FeatherIcon
                      color={isActive ? colors._6366f1 : colors._6b7280}
                      name={icon}
                      size={16}
                    />

                    <Text
                      style={[
                        styles.tabText,
                        isActive && { color: colors._6366f1 },
                      ]}
                    >
                      {name}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        {value == 0 && <Preferences form={form} setForm={setForm} />}

        {value == 1 && <HelpComponent />}

        {value == 2 && <ContentComponent />}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 48,
  },
  header: {
    paddingHorizontal: 24,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: colors._1d1d1d,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "500",
    color: colors._929292,
  },
  profile: {
    paddingTop: 12,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: colors.white,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors._e3e3e3,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: colors._ccc,
    marginRight: 12,
  },
  profileName: {
    fontSize: 17,
    fontWeight: "600",
    color: colors._3d3d3d,
  },
  profileHandle: {
    marginTop: 4,
    fontSize: 15,
    color: "#989898",
  },
  profileAction: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007bff",
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: "600",
    color: "#fff",
  },
  //tabs
  tabs: {
    flexDirection: "row",
    backgroundColor: colors.white,
    paddingTop: 16,
  },
  tabWrapper: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    borderColor: colors._e5e7eb,
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 13,
    fontWeight: "600",
    color: colors._6b7280,
    marginLeft: 5,
  },
  tab: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    position: "relative",
    overflow: "hidden",
  },
});
