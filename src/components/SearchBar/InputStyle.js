import styled from 'styled-components';

const Input = styled.input`
    width: 250px;
    margin: 20px 10px;
    padding:10px;
    border:2px solid #731eb1;
    border-color: ${props => props.response ? "#731eb1" : "red"};

    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);

    &:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,0.12), 0 5px 10px rgba(0,0,0,0.20);
    }

    &:focus {
        outline: #d03bd7 auto 8px;
    }
`

export { Input };
