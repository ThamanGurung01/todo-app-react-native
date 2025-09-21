import { useState } from "react";
import { Button, FlatList, Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  const [task,setTask]=useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const addTask=()=>{
    if(task.trim().length>0){
      setTasks([...tasks,task])
      setTask("");
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo app</Text>
      <Image source={require('../assets/images/icon.png')} style={styles.image}/>
      <TextInput
      style={styles.input}
      placeholder="Enter a Task"
      value={task}
      onChangeText={(text)=>setTask(text)}
      />
      <Button title="Add Task" onPress={addTask}/>
      <FlatList
      data={tasks}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item,index}) => (
        <Text style={styles.task}>{(index+1)+". "+item}</Text>
      )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff",flexDirection:"column",justifyContent:"center" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20,textAlign:"center", },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  task: { fontSize: 18, padding: 5, borderBottomWidth: 1, borderColor: "#ccc" },
  image:{width:350,height:350,marginBottom:20,alignSelf:"center"}
});