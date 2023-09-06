import React from 'react'
import { StyledButton } from './Button.style'

interface ButtonProps {
    variant: "default" | "green" | "red" | undefined,
    children: React.ReactNode,
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button({variant, children, onClick}: ButtonProps) {
  return (
    <StyledButton variant={variant} onClick={onClick}>{children}</StyledButton>
  )
}
