import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image source={require('./pomodoro.png')} />
      <View style={styles.actions}>
        <Text style={styles.timer}>
          25:00
        </Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            Começar
          </Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Projeto desenvolvido por Luiz Fernando Balbino
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40
  },
  actions: {
    padding: 24,
    backgroundColor: '#14448080',
    borderRadius: 32,
    width: '80%',
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32,
  },
  timer: {
    fontSize: 54,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#bb72ff',
    borderRadius: 32,
    padding: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#021123',
    fontSize: 18,
    fontWeight: 25,
  },
  footer: {
    width: '80%'
  },
  footerText: {
    textAlign: 'center',
    color: '#0980a8',
    fontSize: 12.5,
  }
})
