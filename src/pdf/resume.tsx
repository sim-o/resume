import React from 'react';
import { Document, Page, Text, View, Image, Link } from '@react-pdf/renderer';
import * as model from '../model';
import { Location } from './location';
import { styles } from '../styles';
import { month, range, skillNum } from '../utils';

type Props = { data: model.Resume };
export function Resume({ data }: Props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.portrait}>
            <Image style={styles.portraitImage} src={data.basics.picture} />
          </View>
          <View style={styles.headerTitle}>
            <View><Text style={styles.name}>{data.basics.name}</Text></View>
            <View><Text style={styles.label}>{data.basics.label}</Text></View>
          </View>
          <View style={styles.headerInfo}>
            <Text>{data.basics.phone}</Text>
            <Link href={`mailto:${data.basics.email}`}>
              <Text>{data.basics.email}</Text>
            </Link>
            <Location location={data.basics.location} />
            <View style={{flex: 1}} />
            { data.basics.profiles.map((p, i) => (
              <Link key={i} href={p.url} style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                { p.icon && <Image src={p.icon} style={{height: 10, aspectRatio: 1, marginRight: 4}}/> }
                <Text>{p.network}</Text>
              </Link>
            )) } 
          </View>
        </View>
        <View style={styles.basicSummary}>
          <Text>{ data.basics.summary }</Text>
        </View>
        <View style={styles.main}>
          <View style={styles.skills}>
            {data.skillGroups.map(sg => (
              <View key={sg.name} style={styles.skillGroup}>
                <View><Text>{sg.name}</Text></View>
                { sg.skills.map((s, i) => (
                  <View key={i} style={styles.skill}>
                    <View style={styles.skillName}><Text>{s.name}</Text></View>
                    <View style={styles.skillPips}>
                      { range(5).map(n => (
                        <View key={n} style={n < skillNum(s.level) ? styles.pipOn : styles.pipOff}/>
                      ))}
                    </View>
                  </View>
                ))}
              </View>
            ))}
          </View>
          <View style={styles.mainColumn}>
            <View style={styles.workList}>
              <Text style={styles.columnTitle}>Work history</Text>
              {data.work.map((w, i) => (
                <View key={i} style={styles.section}>
                  <View wrap={false}>
                    <View style={styles.sectionTitle} wrap={false}>
                      <Text style={styles.sectionTitleMain}>{w.company}</Text>
                      <Text style={styles.sectionDate}>{month(w.startDate)} - {month(w.endDate)}</Text>
                    </View>
                    <View style={styles.sectionSubtitle}>
                      <View style={styles.position}><Text>{w.position}</Text></View>
                      <View style={styles.location}><Text>{w.location}</Text></View>
                    </View>
                  </View>
                  <View style={styles.summary}><Text>{w.summary}</Text></View>
                  {w.highlights && (
                    <View style={styles.highlights}>
                      {w.highlights.map((h, i) => (
                        <Text key={i} style={styles.highlight}>- {h}</Text>
                      ))}
                    </View>
                  )}
                </View>
              ))}
            </View>
            { data.education && (
              <View>
                <Text style={styles.columnTitle}>Education</Text>
                {data.education.map((e, i)=> (
                  <View key={i} style={styles.section}>
                    <View style={styles.sectionTitle}>
                      <Text style={styles.sectionTitleMain}>{e.institution}</Text>
                      <Text style={styles.sectionDate}>{month(e.startDate)} - {month(e.endDate)}</Text>
                    </View>
                    <Text>{e.studyType} of {e.area}</Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
}
