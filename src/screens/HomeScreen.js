import ButtonInfo from '@components/ButtonInfo';

import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

function HomeScreen() {
  var title = "Thong bao"
  const url = 'https://crawl.lunnh.repl.co/';
  const getData = url => {
    fetch(url)
   .then(res => res.json())
   .then(data => {
      var title = "Thong bao"
       return <ButtonInfo key={id} title={title} subTitle={null} />;

   }).catch((err)=>{ console.log(err)})
  };

  return (
    <View style={styles.container}>
      <View style={styles.gap}>
        {getData(url)}
        <ButtonInfo title="title" />
      </View>
    </View>
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
