import React from 'react';
import { Image, Link, Text, View } from '@react-pdf/renderer';
import * as model from '../model';
import { styles } from '../styles';
import { Location } from './location';

type Props = { basics: model.Basics };
export function Header({ basics }: Props) {
  return (
    <View style={styles.header}>
      {basics.picture && (
        <View style={styles.portrait}>
          <Image style={styles.portraitImage} src={basics.picture} />
        </View>
      )}
      <View style={styles.headerTitle}>
        <View>
          <Text style={styles.name}>{basics.name}</Text>
        </View>
        <View>
          <Text style={styles.label}>{basics.label}</Text>
        </View>
      </View>
      <View style={styles.headerInfo}>
        <Text>{basics.phone}</Text>
        <Link href={`mailto:${basics.email}`} style={styles.link}>
          <Text>{basics.email}</Text>
        </Link>
        <Location location={basics.location} />
      </View>
    </View>
  );
}
