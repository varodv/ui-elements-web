import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { UiDateInputProps } from './';
import './';

const meta = {
  title: 'components/ui-date-input',
  tags: ['autodocs'],
  render: () => html`<ui-date-input></ui-date-input>`,
} satisfies Meta<UiDateInputProps>;

export default meta;
type Story = StoryObj<UiDateInputProps>;

export const Default: Story = {};
