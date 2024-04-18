import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import YoutubePlayer from 'react-native-youtube-iframe';

const Support = () => {
    
    return (
        
            
        <View>
            <YoutubePlayer
            height={300}
            play={false}
            videoId={'kPVXI7zc8q0'}
            />
            <YoutubePlayer
            height={300}
            play={false}
            videoId={'zQN_Uwv80w8'}
            />
            <YoutubePlayer
            height={300}
            play={false}
            videoId={'zQN_Uwv80w8'}
            />
        </View>
        

        
        
    );
};

export default Support;