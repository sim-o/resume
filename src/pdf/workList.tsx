import React from 'react';
import { Text, View } from '@react-pdf/renderer';
import * as model from '../model';
import { styles } from '../styles';
import { month } from '../utils';
import { Dot } from './dot';
import { Heading } from './heading';

type Props = { work: model.Work[] };
export function WorkList({ work }: Props) {
  return (
    <View style={styles.workList}>
      <Heading>Experience</Heading>
      {work.map((w, i) => (
        <View key={i} style={styles.section}>
          <View wrap={false}>
            <View style={styles.sectionTitle} wrap={false}>
              <Text style={styles.sectionTitleMain}>{w.company}</Text>
              <Text style={styles.sectionDate}>{month(w.startDate)} - {month(w.endDate)}</Text>
            </View>
            <View style={styles.sectionSubtitle}>
              <View style={styles.position}><Text>{w.position}</Text></View>
              {/* <View style={styles.location}><Text>{w.location}</Text></View> */}
            </View>
          </View>
          <View style={styles.summary}><Text>{w.summary}</Text></View>
          {w.highlights && (
            <View style={styles.highlights}>
              {w.highlights.map((h, i) => (
                <Dot key={i}>{h}</Dot>
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
}
