import styled,{css} from 'styled-components';

export default styled.button`
    height:30px;
    width:30px;
    background-color:#f2f2f2;
    border:none;
    outline:none;
    cursor:pointer;
    transform: rotate(0deg);
    ${props=>props.rotate && css`
        transform:rotate(360deg);
    ` }
    transition: transform .7s ease-out;

`
