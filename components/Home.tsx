import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

type Props = {}

const Home = (props: Props) => {
  return (
    <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
            <TouchableOpacity>
                <Image source={require('../assets/ProfilePicture.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../assets/IconHambMenu.png')}/>
            </TouchableOpacity>
        </View>
        <View style={{marginVertical: 10, marginHorizontal: 20,}}>
            <Text style={styles.sectionTitle}>Delivery</Text>
        </View>
        {/* SEARCHBAR */}
        <View>
            <KeyboardAvoidingView style={styles.searchBar} behavior={Platform.OS === 'ios' ? "padding" : "height"}>
                <Image source={require('../assets/SearchIcon.png')}/>
                <TextInput style={styles.searchText} placeholder='Buscar...' />
            </KeyboardAvoidingView>
            <View style={styles.line}></View>
        </View>
        {/* CATEGORIES */}
        <View style={styles.header}>
            <Text style={styles.subsectionTitle}>Categorias</Text>
            <View style={{justifyContent:'center'}}>
                <TouchableOpacity>
                    <Text style={styles.sectionParagraph}>Ver todo</Text>
                </TouchableOpacity>
            </View>
        </View>
        {/* POPULAR */}
        <View style={styles.header}>
            <Text style={styles.subsectionTitle}>Populares</Text>
            <View style={{justifyContent:'center'}}>
                <TouchableOpacity>
                    <Text style={styles.sectionParagraph}>Ver todo</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  header: {
    marginVertical: 40,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  sectionParagraph: {
    marginHorizontal: 20,
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  subsectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchBar: {
    marginHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    marginLeft: 10,
    opacity: 0.7,
  },
  line: {
    borderBlockColor: "black",
    borderBottomWidth: StyleSheet.hairlineWidth, 
    alignSelf: 'stretch',
    width: '80%',
    marginLeft: 48,
  },
});

export default Home