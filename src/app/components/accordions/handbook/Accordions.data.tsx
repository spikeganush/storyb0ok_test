import React from 'react';
import UnitInfo from '../../Unit/UnitInfo';
import { primaryData as primaryDataUnitInfo, secondaryData } from '../../Unit/UnitInfo.data';
import { TAccordionsProps } from './type';

export const primaryData: TAccordionsProps = {
  title: 'Schedule of unit offerings',
  accordion: [
    { title: 'Part A', subtitle: 'Arts Majors', children: <UnitInfo {...primaryDataUnitInfo} /> },
    { title: 'Part F', subtitle: 'Inquire units', children: <UnitInfo {...secondaryData} /> },
  ],
};
