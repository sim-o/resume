import React from 'react';
import { range, skillNum } from '../utils';
import { Image, Link, Text, View } from '@react-pdf/renderer';
import * as model from '../model';
import { styles } from '../styles';
import { Heading } from './heading';

type Props = { skillGroups: model.SkillGroup[]; basics: model.Basics };
export function LeftColumn({ skillGroups, basics }: Props) {
  return (
    <View style={styles.skills}>
      <View style={{ marginBottom: 8 }}>
        {basics.profiles.map((p, i) => (
          <Link
            key={i}
            href={p.url}
            style={[
              styles.link,
              {
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 4,
              },
            ]}
          >
            {p.icon && <Image src={p.icon} style={{ height: 10, aspectRatio: 1, marginRight: 4 }} />}
            <Text>{p.network}</Text>
          </Link>
        ))}
      </View>
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
              {process.env.RESUME_SKILL_PIPS && (
                <View style={styles.skillPips}>
                  {range(5).map((n) => (
                    <View key={n} style={n < skillNum(s.level) ? styles.pipOn : styles.pipOff} />
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
