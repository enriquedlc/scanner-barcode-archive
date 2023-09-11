import { useState } from "react";
import { Modal, View, StyleSheet, Text, TextInput } from "react-native";

export function ArticleForm() {
  const [name, setName] = useState("");
  return (
    <Modal>
      <View style={articleFormStyles.centeredView}>
        <View style={articleFormStyles.modalView}>
          <Text>Article Form</Text>
          <TextInput
            placeholder="Name"
            onChange={(e) => {
              setName(e.nativeEvent.text);
              console.log(name);
            }}
            value={name}
            id="name"
            nativeID="name"
          />
        </View>
      </View>
    </Modal>
  );
}

const articleFormStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    minWidth: "70%",
    maxWidth: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
