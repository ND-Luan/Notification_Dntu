import ButtonInfo from '@components/ButtonInfo';

import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

function HomeScreen() {
  const url = 'https://crawl.lunnh.repl.co/';
  //const url = 'https://jsonplaceholder.typicode.com/users';
  
  var [data, setData] = useState([]);
  const handleData = async () => {
    var res = await fetch(url);
    var resJson = await res.json();
    setData(resJson);
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.gap}>
          {data.map((val, id) => {
            return (
              <View key={id}>
                <ButtonInfo title={val.title} subTitle={val.date}  />
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gap: {
    padding: 10,
    margin: 5,
  },
});
export default HomeScreen;
