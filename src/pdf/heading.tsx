import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import { styles } from '../styles';

type Props = { children: React.ReactNode; underline?: boolean; style?: any };
export function Heading({ children, style, underline = true }: Props) {
  return (
    <View style={[styles.columnTitle, style]}>
      <Text>{children}</Text>
      {underline && <View style={styles.columnTitleUnderline} />}
    </View>
  );
}
