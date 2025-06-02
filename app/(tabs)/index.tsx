import { Text, View } from "react-native";
import { Link } from "expo-router";
import { styles } from "../../styles/styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href={"/notifications"}>Visit Notifications screen</Link>
    </View>
  );
}
