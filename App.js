import React , {Component} from "react";
import {View, Text, FlatList, ActivityIndicator , Image, StyleSheet, TouchableOpacity } from "react-native";
import {List, ListItem} from "react-native-elements";



export default class FlatListDemo extends Component{

  constructor(props){

    super(props);

    this.state={
      isLoading: true,
      data:null,
      
    };
  }

  componentDidMount(){
    uri1='https://api.themoviedb.org/3/discover/movie?api_key=c2a40f2fd508d0f8da08aaa40bae2440&language=en-US'
    return fetch (uri1)
      .then((response)=>response.json())
      .then((responseJson)=>{
        this.setState({
          isLoading:false,
          data: responseJson.results
        })
      })
  
      .catch((error)=>{
        console.log(error)
      });
    }


  

  render(){
    
    if(this.state.isLoading){
      return(
        <View>
          <ActivityIndicator style={{paddingTop:250}}/>
        </View>
      )
    }

    else { return(
      <View style={{backgroundColor:'#2e0e2f'}} >

    
      <FlatList 

        data = {this.state.data}
        renderItem={({item}) => 

       <TouchableOpacity onPress={()=> alert('SOON')}>
      <View style= {styles.container}>
      
        
        <Image 
        
        style={styles.image}
        
        source={{uri: 'http://image.tmdb.org/t/p/w185' + item.poster_path}}
        >
    
        </Image>
        
        <View style={{paddingRight:140}}>
        <Text style={styles.title}>
             {item.original_title}
        </Text>
        <Text style={styles.subtitle}>
             {item.overview}
        </Text>
        
        </View>

        
        
      </View>
      </TouchableOpacity>
      
      }
      
      />
    
  
      <Text>Gong Yoo</Text>
      
      </View>
    )}
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    borderWidth: 0.25,
    borderColor: '#FFFFF0',
    flex:1,
    flexDirection: 'row',
    backgroundColor:'#2e0e2f',
    padding:5
  },
  image:{
    resizeMode:'stretch',
    width: 150, 
    height: 120,
    borderRadius: 30,

    

  },
  title: {
    fontSize: 15,
    color:'#FFFFF0',
    fontWeight: 'bold',
    textAlignVertical:'auto',
    flex:1,
    flexDirection: 'row',
    paddingHorizontal:5,

  },
  subtitle:{
    fontSize: 10,
    color:'#FFFFF0',
    textAlignVertical:'auto',
    flex:1,
    flexDirection: 'row',
    paddingHorizontal:5
  },  
  activeTitle: {
    color: 'red',
  },
});