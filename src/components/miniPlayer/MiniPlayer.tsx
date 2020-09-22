import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  // @ts-ignore: temp fix for error - no exported member 'usePlaybackState'
  usePlaybackState,
  STATE_PLAYING,
  STATE_BUFFERING,
} from 'react-native-track-player';
import FeatherIcon from 'react-native-vector-icons/Feather';
import tailwind from 'tailwind-rn';

import {usePlayerContext} from '../../contexts/PlayerContext';

const MiniPlayer = () => {
  const {currentTrack, togglePlayback, skipToNext} = usePlayerContext();
  const navigation = useNavigation();
  const playbackState = usePlaybackState();

  // ternary operator?
  if (!currentTrack) {
    return null;
  }

  const {artwork, title} = currentTrack;

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Player')}>
      <View
        style={tailwind(
          'h-16 mx-2 border-t border-gray-300 flex-row items-center',
        )}>
        <Image
          source={{uri: artwork}}
          style={tailwind('h-12 w-12 mr-2 rounded-lg')}
        />
        <Text
          numberOfLines={1}
          style={tailwind('flex-1 mr-2 text-lg font-bold')}>
          {title}
        </Text>

        <TouchableOpacity
          onPress={() => togglePlayback()}
          style={tailwind('mr-2')}>
          <FeatherIcon
            size={30}
            name={
              playbackState === STATE_PLAYING ||
              playbackState === STATE_BUFFERING
                ? 'pause'
                : 'play'
            }
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={skipToNext} style={tailwind('mr-2')}>
          <FeatherIcon size={30} name="skip-forward" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default MiniPlayer;
