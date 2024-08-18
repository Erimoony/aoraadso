import { TouchableOpacity, Text } from 'react-native';
import React from 'react';

const CustomButton = ({ title, handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      style={[
        {
          backgroundColor: '#FFA001',
          borderRadius: 20,
          minHeight: 62,
          justifyContent: 'center',
          alignItems: 'center',
        },
        containerStyles,
        isLoading && { opacity: 0.5 }, 
      ]}
      disabled={isLoading}
    >
      <Text
        style={[
          {
            color: '#ffffff',
            fontFamily: 'Poppins-SemiBold',
            fontSize: 18,
          },
          textStyles,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
