import { Meta, StoryObj } from '@storybook/angular';

import { FooterComponent } from './footer.component';

type ComponentWithCustomControls = FooterComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Footer',
  component: FooterComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Footer` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Footer: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
