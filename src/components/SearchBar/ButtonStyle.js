import styled from 'styled-components';

const Submit = styled.button`
    margin: 20px 10px;
    color: white;
    font-weight: bold;
    padding:10px 15px;
    background: #731eb1;
    border:0 none;

    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,0.12), 0 5px 10px rgba(0,0,0,0.20);
    }
`

export { Submit };
