import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import { useState } from "react";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onLogin = () => {
    console.log("CredentialsLogin", ` ${email} + ${password}`);
  };

  return (
    <View style={styles.form}>
      <View>
        <KeyboardAvoidingView
          style={styles.cont}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <Text
            style={{ ...styles.text, marginBottom: isShowKeyboard ? 10 : 33 }}
          >
            Войти
          </Text>
          <TextInput
            value={email}
            onChangeText={emailHandler}
            placeholder="Адрес электронной почты"
            style={styles.input}
            onFocus={() => setIsShowKeyboard(true)}
          />
          <TextInput
            value={password}
            onChangeText={passwordHandler}
            placeholder="Пароль"
            secureTextEntry={true}
            style={styles.input}
            onFocus={() => setIsShowKeyboard(true)}
          />
          <TouchableOpacity style={styles.inputText}>
            <Text style={{ color: "#1B4371" }}>Показать</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
      <TouchableOpacity
        onPress={() => {
          setIsShowKeyboard(false);
          onLogin();
        }}
        activeOpacity={0.7}
        style={{ ...styles.btn, marginTop: isShowKeyboard ? 5 : 27 }}
      >
        <Text style={{ color: "white" }}>Войти</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.btnText, marginBottom: isShowKeyboard ? 10 : 144 }}
      >
        <Text style={{ color: "#1B4371" }}>
          Нет аккаунта? Зарегистрироваться
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 343,
    height: 50,
    padding: 10,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  inputText: {
    top: -50,
    left: 120,
  },
  btn: {
    width: 343,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginBottom: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {},
  form: {
    width: "100%",
    // top: -120,
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  text: {
    fontSize: 30,
    marginTop: 32,
    marginBottom: 33,
  },
  cont: {
    alignItems: "center",
  },
});
