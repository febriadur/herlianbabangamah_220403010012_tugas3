import React from 'react';
import { View, Text, TextInput, Image, Button, ScrollView } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Selamat datang di Aplikasi penjualan Bunga Mawar</Text>
      <TextInput placeholder="Cari produk..." />
      <ScrollView>
        <Image
        source={{uri:'https://4.bp.blogspot.com/-h_dMDBPEvIA/V7w7YEuBMmI/AAAAAAAAArg/aqQMf8mSNf0HeS_gsgDzJ9yUTCm_i7goQCLcB/s1600/Ingin%2Bbertanam%2Bbunga%2Bmawar%2Bdalam%2Bpot%2BIkuti%2B6%2Blangkah%2Bmudah%2Bberikut%2Bini.jpg'}}style={{width:200,height:200}}/>
        <Image
        source={{uri:'https://tse3.mm.bing.net/th?id=OIP.L1qMkulliv4ahr-QzuUowQHaE8&pid=Api&P=0&h=180'}}style={{width:200,height:200}}/>
        <Image
        source={{uri:'https://tse1.mm.bing.net/th?id=OIP.GIpZbwu_V_V4GBSszW0YtwHaE8&pid=Api&P=0&h=180'}}style={{width:200,height:200}}/>
        <Image
        source={{uri:'https://tse1.mm.bing.net/th?id=OIP.J5AnQFQe7dst5ALrfgdhMgHaHa&pid=Api&P=0&h=180'}}style={{width:200,height:200}}/>
      </ScrollView>
      <Button title="Beli Sekarang" onPress={() => ('Produk telah ditambahkan ke keranjang belanja')} />
    </View>
  );
};

export default App;