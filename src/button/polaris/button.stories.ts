import button from './button.html?raw'
import type { Meta, StoryObj } from '@storybook/html'

type ButtonArgs = {
  intent: 'basic' | 'primary' | 'destructive'
  size: 'medium' | 'large' | 'slim'
  text: string
}

const meta: Meta<ButtonArgs> = {
  title: 'Components/Button/Polaris - Tailwind',
  component: button,
  argTypes: {
    intent: {
      options: ['basic', 'primary', 'destructive'],
      control: { type: 'select' }
    },
    size: {
      options: ['medium', 'large', 'slim'],
      control: { type: 'select' }
    }
  }
}

export default meta

type Story = StoryObj<ButtonArgs>

export const Basic: Story = {
  render: (args) => {
    const script = `
      <script type="text/javascript">
        window.buttonArgs = {};
        window.buttonArgs.intent = '${args.intent}';
        window.buttonArgs.size = '${args.size}';
        window.buttonArgs.text = '${args.text}';
        window.buttonArgs.onClick = () => {
          alert(window.buttonArgs.text);
        };
      </script>
    `

    return `${script}${button}`
  },
  args: {
    intent: 'basic',
    size: 'medium',
    text: 'Hello World'
  }
}
