import React, {useState, useEffect, useRef} from "react";
import { View, FlatList, useWindowDimensions } from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import CustomMarker from "../../components/CustomMarker";
import PostCarouselItem from "../../components/PostCarouselItem";

import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';

import places from '../../../assets/data/feed';


const SearchResultsMaps = (props) => {

  const {posts} = props;

  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  const flatlist = useRef();
   const map = useRef();
  const viewConfig = useRef({itemVisiblePercentThreshold: 13})
  const width = useWindowDimensions().width;
  
  const onViewChanged = useRef(({viewableItems})=>{
    console.log(viewableItems)
  })


  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = places.findIndex(place => place.id === selectedPlaceId)
    flatlist.current.scrollToIndex({index})
   
     
    
  }, [selectedPlaceId])

  return (
    <View style={{width: '100%', height: '100%'}}>
      <MapView
        ref={map}
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 45.761936,
          longitude: 21.224281,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {places.map(place => (
          <CustomMarker
            coordinate={place.coordinate}
            title={place.title}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />)
        )}
      </MapView>

      <View style={{position: 'absolute', bottom: 70}}>
        <FlatList
          ref={flatlist}
          data={places}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={"center"}
          decelerationRate={"fast"}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
}

export default SearchResultsMaps;
