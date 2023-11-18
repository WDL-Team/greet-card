import styled, { css } from 'styled-components'

const preview = css`
  font-size: 12px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 0.75rem;
  position: relative;

  &::after {
    content: 'preview';
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    opacity: 0.7;
  }
`

export const StContainer = styled.article<{ $preview: boolean }>`
  box-sizing: border-box;
  width: ${props => (props.$preview ? '100%' : 'calc(100% - 4rem)')};
  padding: ${props => (props.$preview ? '1rem' : '2rem')};
  margin: ${props => (props.$preview ? '0' : '2rem')};
  ${props => props.$preview && preview}
`
