/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Linking
} from 'react-native'
var request = require('superagent')

class jfpevents extends Component {

  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount () {
    console.log('about to fetch...')
    request
      .get('http://localhost:3001/api/')
      .end((err, res) => {
        console.log('res', res)
        this.setState({data: res.body.children})
      })
  }

  render() {
    let data = <Text style={{paddingTop: 100}}>Loading</Text>
    if (this.state.data.length > 0) {
      data = this.state.data.map((item, i) => {
        return <Text
        style={styles.text} key={i}>{item.text}</Text>
      })
    }
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Jackson Free Press Events</Text>
        </View>
        <ScrollView>
        {data}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 20,
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  titleContainer: {
    paddingTop: 30,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ededed'
  },
  title: {
    fontSize: 26,
    textAlign: 'center'
  }
})

AppRegistry.registerComponent('jfpevents', () => jfpevents);
