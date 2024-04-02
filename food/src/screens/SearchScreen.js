import React, { useEffect, useState } from 'react'
import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import ListCard from './ListCard'
import yelp from '../api/yelp'
import axios from 'axios'
import fetchSearchResults from '../api/yelp'
import Results from '../components/Results'


function SearchScreen(props) {

  const [term, setTrem] = useState('');
  const [fetchSearchResults, errorMssage, results] = yelp();
  console.log('pp');




  return (
    <View>

      <SearchBar
        term={term}
        onTermChange={(newTerm) => {
          setTrem(newTerm);
        }}
        onTermSubmit={async () => {
          console.log('Term was submitted');
          await fetchSearchResults(term);


        }}
      />
      {errorMssage ? <Text>{errorMssage}</Text> : null}
      {results.local_results ? <Results
        results={results}
        navigation={props.navigation}
      /> : null}
      {/* <ListCard title={'Cost effective'}/>
      <ListCard title={'Big pricer'}/> */}

    </View>
  )
}


const styles = StyleSheet.create({})

export default SearchScreen
