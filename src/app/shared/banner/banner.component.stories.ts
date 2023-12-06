import { Meta, StoryObj } from '@storybook/angular';

import { BannerComponent } from './banner.component';

type ComponentWithCustomControls = BannerComponent;

const meta: Meta<ComponentWithCustomControls> = {
  // title: 'Components/Banner',
  component: BannerComponent,
  // decorators: [moduleMetadata({imports: []})],
  parameters: {
    docs: { description: { component: `Banner` } },
  },
  argTypes: {},
  args: {},
};
export default meta;

export const Banner: StoryObj<ComponentWithCustomControls> = {
  render: (args: ComponentWithCustomControls) => ({ props: args }),
  args: {},
}
