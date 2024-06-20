import React from 'react';
import * as model from '../model';
import { Text } from '@react-pdf/renderer';

type Props = { location: model.Location };
export function Location({ location }: Props) {
  return (<Text>{location.city}, {location.region} {location.postalCode}</Text>);
}
