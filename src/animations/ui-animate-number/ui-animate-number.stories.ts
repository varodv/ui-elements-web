import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { UiAnimateNumberProps } from './';
import './';

const meta = {
  title: 'animations/ui-animate-number',
  tags: ['autodocs'],
  render: () => html`<ui-animate-number>1,000,000.00</ui-animate-number>`,
} satisfies Meta<UiAnimateNumberProps>;

export default meta;
type Story = StoryObj<UiAnimateNumberProps>;

export const Default: Story = {};
