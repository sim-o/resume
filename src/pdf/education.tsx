import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import * as model from '../model';
import { styles } from '../styles';
import { month } from '../utils';
import { Heading } from './heading';

type Props = {education: model.Education[]};
export function Education({ education }: Props) {
  return (
    <View>
      <Heading>Education</Heading>
      {education.map((e, i) => (
        <View key={i} style={styles.section}>
          <View style={styles.sectionTitle}>
            <Text style={styles.sectionTitleMain}>{e.institution}</Text>
            <Text style={styles.sectionDate}>{month(e.startDate)} - {month(e.endDate)}</Text>
          </View>
          <Text>{e.studyType} of {e.area}</Text>
        </View>
      ))}
    </View>
  );
}
