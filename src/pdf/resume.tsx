import React from 'react';
import { Document, Page, Text, View } from '@react-pdf/renderer';
import * as model from '../model';
import { styles } from '../styles';
import { SkillGroups } from './skillGroups';
import { WorkList } from './workList';
import { Header } from './header';
import { Education } from './education';
import { Heading } from './heading';
import { Certificates } from './certificates';

type Props = { data: model.Resume };
export function Resume({ data }: Props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Header basics={data.basics} />
        <View style={styles.main}>
          <SkillGroups skillGroups={data.skillGroups} />
          <View style={styles.mainColumn}>
            <View style={styles.basicSummary}>
              <Heading>Summary</Heading>
              <Text>{data.basics.summary}</Text>
            </View>
            <WorkList work={data.work} />
            {data.education && <Education education={data.education} />}
            {data.certificates && <Certificates certificates={data.certificates} />}
          </View>
        </View>
      </Page>
    </Document>
  );
}
