import styled from "styled-components";

export const MainContent = styled.div`
    margin-left: 250px;
    padding: 0;
    
    @media only screen and (max-width: 767px) {
        margin-left: 0;
    }
`;

export const ContentWrapper = styled.div`
    width: 100%;
    
`;

export const SectionsGroup = styled.div`
    @media only screen and (max-width: 767px) {
        margin: 0;
        width: 100%!important;
        clear: both;
    }
`;