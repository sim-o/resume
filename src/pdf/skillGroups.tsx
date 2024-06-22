import React from 'react';
import { range, skillNum } from '../utils';
import { Text, View } from '@react-pdf/renderer';
import * as model from '../model';
import { styles } from '../styles';
import { Heading } from './heading';

type Props = { skillGroups: model.SkillGroup[] };
export function SkillGroups({ skillGroups }: Props) {
  return (
    <View style={styles.skills}>
      {skillGroups.map((sg) => (
        <View key={sg.name} style={styles.skillGroup}>
          <Heading underline={false} style={{ marginBottom: 6 }}>
            {sg.name}
          </Heading>
          {sg.skills.map((s, i) => (
            <View key={i} style={styles.skill} wrap={false}>
              <View style={styles.skillName}>
                <Text>{s.name}</Text>
              </View>
              <View style={styles.skillPips}>
                {range(5).map((n) => (
                  <View
                    key={n}
                    style={n < skillNum(s.level) ? styles.pipOn : styles.pipOff}
                  />
                ))}
              </View>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
