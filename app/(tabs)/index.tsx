import { Link } from "expo-router";
import { View } from "react-native";
import { styles } from "../../styles/styles";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href={"/notifications"}>Visit Notifications screen</Link>
    </View>
  );
}
