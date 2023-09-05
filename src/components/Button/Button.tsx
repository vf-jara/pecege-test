import React from 'react'
import { StyledButton } from './Button.style'

interface ButtonProps {
    variant: "default" | "green" | "red" | undefined,
    children: React.ReactNode
}

export default function Button({variant, children}: ButtonProps) {
  return (
    <StyledButton variant={variant}>{children}</StyledButton>
  )
}
