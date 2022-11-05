import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';

import store from './src/common/store';

import {
  MapBoardContainer,
  MenuBar,
  ToiletInfoContainer,
  ReviewPage,
} from './src/components/mainComponents';
import MenuContainer from './src/components/menu/MenuContainer';
import initIcon from './src/components/UI/fontAwesomeIcon';

const styles = StyleSheet.create({
  backgroundStyle: {
    height: '100%',
    width: '100%',
  },
});

const App = ({}) => {
  useEffect(() => {
    initIcon();
  }, []);
  return (
    <Provider store={store}>
      <View style={styles.backgroundStyle}>
        <MapBoardContainer />
        <ToiletInfoContainer />
        <MenuContainer />
        <MenuBar />
        <ReviewPage />
      </View>
    </Provider>
  );
};

export default App;
