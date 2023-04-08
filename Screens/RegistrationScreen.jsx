import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import { useState } from "react";

export default function RegistrationScreen() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const loginHandler = (text) => setLogin(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onRegister = () => {
    console.log("Credentials", `${login} + ${email} + ${password}`);
  };

  return (
    <View style={styles.form}>
      <View>
        <KeyboardAvoidingView
          style={styles.cont}
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
          <View style={styles.image}></View>
          <TouchableOpacity style={styles.inputText}>
            <Image
              style={styles.imageAdd}
              source={require("../assets/add.png")}
            ></Image>
          </TouchableOpacity>
          <Text
            style={{ ...styles.text, marginBottom: isShowKeyboard ? 10 : 33 }}
          >
            Регистрация
          </Text>
          <TextInput
            value={login}
            onChangeText={loginHandler}
            placeholder="Логин"
            style={styles.input}
            onFocus={() => setIsShowKeyboard(true)}
          />
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
          onRegister();
        }}
        activeOpacity={0.7}
        style={{ ...styles.btn, marginTop: isShowKeyboard ? 5 : 27 }}
      >
        <Text style={{ color: "white" }}>Зарегистрироваться</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.btnText, marginBottom: isShowKeyboard ? 10 : 78 }}
      >
        <Text style={{ color: "#1B4371" }}>Уже есть аккаунт? Войти</Text>
      </TouchableOpacity>
      {/* <Button title="" onPress={onRegister} /> */}
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
  btnText: {

  },
  form: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  image: {
    backgroundColor: "#F6F6F6",
    width: 120,
    height: 120,
    top: -60,
    borderRadius: 16,
  },
  imageAdd: {
    top: -60,
    left: -60,
  },
  text: {
    fontSize: 30,
    marginTop: -65,
  },
  cont: {
    alignItems: "center",
  },
});
