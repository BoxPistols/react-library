import React from 'react';
import  Btn  from './UI-Button';

export default  {
  title: 'UI/UI-Button/Colors',
  component: Btn,
};

export const Primary = () => <Btn variant='primary'>Primary</Btn>
export const Success = () => <Btn variant='success'>Success</Btn>
export const Danger = () => <Btn variant='danger'>Danger</Btn>
export const Warning = () => <Btn variant='warning'>Warning</Btn>