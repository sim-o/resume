import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import * as model from '../model';
import { styles } from '../styles';
import { month } from '../utils';
import { Heading } from './heading';

type Props = { certificates: model.Certificate[] };
export function Certificates({ certificates }: Props) {
  return (
    <View style={styles.workList}>
      <Heading>Certificates</Heading>
      {certificates.map((c, i) => (
        <View key={i} style={styles.section}>
          <View style={styles.sectionTitle}>
            <Text style={styles.sectionTitleMain}>{c.name}</Text>
            <Text style={styles.sectionDate}>{month(c.date)}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
