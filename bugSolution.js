import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const getInitialURLAsync = async () => {
      // Attempt to get initial URL immediately
      let url = await Linking.getInitialURL();
      if (url) {
        setInitialUrl(url);
      } else {
        // If it fails initially, try again after a small delay.
        setTimeout(async () => {
          url = await Linking.getInitialURL();
          setInitialUrl(url);
        }, 500); // Adjust delay as needed
      }
    };
    getInitialURLAsync();
  }, []);

  return (
    <View>
      {initialUrl ? (
        <Text>Initial URL: {initialUrl}</Text>
      ) : (
        <Text>No initial URL found.</Text>
      )}
    </View>
  );
}

export default App;