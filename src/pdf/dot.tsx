import React from 'react';
import {  Text, View } from '@react-pdf/renderer';
import { styles } from '../styles';

type Props = {children: React.ReactNode, style?: any};
export function Dot({children, style}: Props) {
  return (
    <View style={[styles.dotContainer, style]}>
      <View style={styles.dot}><Text>-</Text></View>
      <View style={styles.dotText}><Text>{children}</Text></View>
    </View>
  );
}
