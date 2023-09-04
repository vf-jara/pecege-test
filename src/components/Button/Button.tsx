import { StyledButton } from "./Button.style";
type ChildrenProps ={
  children: React.ReactNode;
}

export default function Button({ children } : ChildrenProps) {
  return (
      <StyledButton>{children}</StyledButton>
  );
}
