import styled from "styled-components";

export const Sidebarstyles = styled.div`
#sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    padding-top: 60px;
    width: 230px;
    overflow: auto;
    z-index: 10;
    -webkit-box-shadow: 0 8px 17px rgb(0 0 0 / 20%);
    box-shadow: 0 8px 17px rgb(0 0 0 / 20%);
    transition: transform .3s ease-in-out;
    background: rgb(40, 36, 61);
}
 
#sidebar {
    ul li a {
    color: #fff;
    padding: 12px 25px 12px 55px;
    display: block;
    position: relative;
    font-size: 14px;
    -webkit-transition: 0.3s ease all;
    transition: 0.3s ease all;
    display: flex;
    align-items: center;
    gap: 10px;
    &:hover {
        box-shadow: rgb(58 53 65 / 42%) 0px 4px 8px -4px;
        background-image: linear-gradient(98deg, rgb(198, 167, 254), rgb(145, 85, 253) 94%);
    }
}

li.active a{
    box-shadow: rgb(58 53 65 / 42%) 0px 4px 8px -4px;
    background-image: linear-gradient(98deg, rgb(198, 167, 254), rgb(145, 85, 253) 94%);
}
}


 

`;
