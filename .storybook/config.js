import { configure, addDecorator } from '@storybook/react';

configure(require.context('../stories', true, /\.stories\.tsx$/), module)