import styled from 'styled-components'

const ContentBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  box-shadow: 10px 10px 10px grey;
  padding: 20px;
  min-width: 300px;
  max-width: 500px;
  display: ${props => props.visible ? 'block' : 'none'};
`
export default ContentBox;