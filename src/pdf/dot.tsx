import { Text, View } from '@react-pdf/renderer';
import React from 'react';
import { styles } from '../styles';

type Props = { children: React.ReactNode };
export function Dot({ children }: Props) {
  return (
    <View style={[styles.dotContainer]}>
      <View style={styles.dotText}>
        <Text>
          <Text style={styles.dot}>- </Text>
          {children}
        </Text>
      </View>
    </View>
  );
}
