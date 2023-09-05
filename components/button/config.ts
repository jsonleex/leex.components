import { type ExtractPropTypes, type PropType } from 'vue'

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export const pp = {
  /**
   * The size of the button
   */
  size: {
    type: String as PropType<ButtonSize>,
    default: ButtonSize.Medium,
  },
}

export type ButtonProps = ExtractPropTypes<typeof pp>
