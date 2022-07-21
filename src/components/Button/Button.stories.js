import React from 'react';
import Button from './Button';

//component story format

export default {
  title: 'Form/Button',
  component: Button,
  //it is possible to mention args at a component level also
  args: {
    children: 'Button',
  },
};

//every named exports corresponds to a story

export const Primary = () => <Button variant="primary">Primary</Button>;

export const Secondary = () => <Button variant="secondary">Secondary</Button>;

export const Success = () => <Button variant="success">Success</Button>;

export const Danger = () => <Button variant="danger">Danger</Button>;

const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});

PrimaryA.args = {
  variant: 'primary',
  children: 'Primary Args',
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
  variant: 'secondary',
  children: 'Secondary Args',
};
