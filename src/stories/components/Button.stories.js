import React from 'react';
import  Button  from './Button';

export default {
  title: 'UI/Button/Colors',
  component: Button,
};

export const Primary = () => <Button variant='primary'>Primary</Button>
export const Success = () => <Button variant='success'>Success</Button>
export const Danger = () => <Button variant='danger'>Danger</Button>
export const Warning = () => <Button variant='warning'>Warning</Button>