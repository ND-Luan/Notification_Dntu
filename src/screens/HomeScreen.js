import ButtonInfo from '@components/ButtonInfo';

import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

function HomeScreen() {
  const url = 'https://crawl.lunnh.repl.co/';
  const getData = url => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        data.map((val, id) => {
          return <ButtonInfo key={id} title="ThongBao" subTitle="Thong Bao" />;
        });
      });
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
