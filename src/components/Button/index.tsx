import { ReactNode } from 'react'

import {
  OutlinedPrimaryButton,
  SolidPrimaryButton,
  SolidSecondaryButton,
} from './styles'

interface ButtonProps {
  children: ReactNode
  solid?: boolean
  style?: 'primary' | 'secondary'
}

export const Button = ({
  children,
  solid = true,
  style = 'primary',
}: ButtonProps) => {
  if (solid) {
    if (style === 'primary') {
      return <SolidPrimaryButton>{children}</SolidPrimaryButton>
    } else if (style === 'secondary') {
      return <SolidSecondaryButton>{children}</SolidSecondaryButton>
    }
  } else {
    return <OutlinedPrimaryButton>{children}</OutlinedPrimaryButton>
  }
}
