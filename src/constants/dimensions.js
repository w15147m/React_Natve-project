// src/constants/dimensions.js
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const dimensions = {
  width,
  height,
  padding: 20,
  margin: 16,
  borderRadius: 12,
};