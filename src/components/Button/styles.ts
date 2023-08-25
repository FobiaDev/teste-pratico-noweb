import styled from 'styled-components'

export const BaseButton = styled.button`
  font-weight: 700;
  line-height: 2.375rem;
  padding: 0.78rem 2.88rem;

  border-radius: 0.9375rem;
  text-transform: uppercase;

  cursor: pointer;
`

export const SolidPrimaryButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['yellow-700']};

  border: 0;
  color: ${(props) => props.theme['blue-800']};
`

export const SolidSecondaryButton = styled(BaseButton)`
  background-color: ${(props) => props.theme['blue-800']};

  border: 0;
  color: ${(props) => props.theme.white};
`

export const OutlinedPrimaryButton = styled(BaseButton)`
  background-color: transparent;

  border: 2px solid ${(props) => props.theme.white};
  color: ${(props) => props.theme.white};
`
