import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity ,ScrollView , Linking} from 'react-native';
import japaneseData from './jpData.json';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAvoidingView } from 'react-native';


export default function App() {
  const [japanese, setJapanese] = useState('あ');
  const [english, setEnglish] = useState('a');
  const [userInput, setUserInput] = useState('');
  const [result, setResult] = useState('');
  const [theme, setTheme] = useState("light");

  // useEffect(() => {
  //   // Fetch the Japanese character and its corresponding English translation from the API
  //   fetch('http://localhost:5000/api/next')
  //     .then(response => response.json())
  //     .then(data => {
  //       setJapanese(data.japanese);
  //       setEnglish(data.english);
  //     })
  //     .catch(error => console.error(error));
  // }, []);

  // const handleNext = () => {
  //   // Fetch the next Japanese character and its corresponding English translation from the API
  //   fetch('http://localhost:5000/api/next')
  //     .then(response => response.json())
  //     .then(data => {
  //       setJapanese(data.japanese);
  //       setEnglish(data.english);
  //       setResult('');
  //       setUserInput('');
  //     })
  //     .catch(error => console.error(error));
  // };

  const getRandomJapaneseCharacter = () => {
    const japaneseCharacters = Object.keys(japaneseData);
    const randomIndex = Math.floor(Math.random() * japaneseCharacters.length);
    const randomJapaneseCharacter = japaneseCharacters[randomIndex];
    return randomJapaneseCharacter;
  };

  const handleNext = () => {
    const randomJapaneseCharacter = getRandomJapaneseCharacter();
    setJapanese(randomJapaneseCharacter);
    setEnglish(japaneseData[randomJapaneseCharacter]);
    setResult('');
    setUserInput('');
  };

  const handleSubmit = () => {
    if (userInput === english) {
      setResult('Correct!');
    } else {
      setResult('Incorrect!');
    }
  };

  const openGithub = () => {
    Linking.openURL('https://www.github.com/ramandeep11/'); // Replace with your Facebook profile URL
  };

  const openLinkedin = () => {
    Linking.openURL('https://www.facebook.com/'); // Replace with your Facebook profile URL
  };

  const openInsta = () => {
    Linking.openURL('https://www.facebook.com/'); // Replace with your Facebook profile URL
  };

  const openGmail = () => {
    Linking.openURL('mailto:${"ramandeep20012001@openGmail.com"}'); // Replace with your Facebook profile URL
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Japanese Practice - 日本</Text>
        <Text style={styles.subtitle}>By Raman</Text>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>{`Guess the character?`}</Text>
          <Text style={styles.japaneseCharacter}>{japanese}</Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={text => setUserInput(text)}
          value={userInput}
        />
        <Text style={[styles.result, result === 'Correct!' ? styles.correctResult : styles.incorrectResult]}>{result}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <KeyboardAvoidingView style={styles.socialMediaContainer}>
      <TouchableOpacity onPress={openGithub}>
      <Icon name="github" size={30} color="#3b5998" style={styles.socialMediaIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={openGmail}>
      <Icon name="envelope" size={30} color="#1da1f2" style={styles.socialMediaIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={openInsta}>
      <Icon name="instagram" size={30} color="#e4405f" style={styles.socialMediaIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={openLinkedin}>
      <Icon name="linkedin" size={30} color="#0077b5" style={styles.socialMediaIcon} />
      </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FFF5E6', // very light blue background
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // dark text color
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  mainContainer: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  questionContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  question: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333', // dark text color
  },
  japaneseCharacter: {
    fontSize: 100,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 15, // increased padding for larger input field
    marginBottom: 20,
    width: '100%',
    backgroundColor: '#fff', // white background
    fontSize: 20, // increased font size
    textAlign: 'center', // aligned to center
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // dark text color
  },
  correctResult: {
    color: '#28a745', // green for correct result
  },
  incorrectResult: {
    color: '#FFC2C2', // dark text color for incorrect result
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  nextButton: {
    backgroundColor: '#ddd', // light gray for next button
    color: '#333', // dark text color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 4,
    marginRight: 20,
  },
  submitButton: {
    backgroundColor: '#333', // black for submit button
    color: '#fff', // white text color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 4,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
    paddingTop: 50,
  
  },
  socialMediaIcon: {
    marginHorizontal: 10,
    color: '#000',
  },
});