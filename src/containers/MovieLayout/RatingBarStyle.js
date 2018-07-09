import styled from 'styled-components';

const RatingBar = styled.path`
    stroke-dasharray: 283;
    stroke-dashoffset: ${props => (283 - (parseFloat(props.rating) * 283))};
    stroke: hsl( ${props => parseFloat(props.rating) * 120}, 90%, 61%);
`

export { RatingBar };