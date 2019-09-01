import React , {Component} from "react";
import {View, Text, FlatList, ActivityIndicator , Image} from "react-native";
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
          <ActivityIndicator/>
        </View>
      )
    }

    else { return(
      <View >
      
      <FlatList
        
        data = {this.state.data}
        renderItem={({item}) => 
        <Text>{item.original_title}
        <Image
        style={{width: 100, height: 100}}
        source={{uri: 'http://image.tmdb.org/t/p/w185' + item.poster_path}}
       
        />
      </Text>

      }
      
      />
    
  
      <Text>Gong Yoo</Text>
      
      </View>
    )}
  }
}

