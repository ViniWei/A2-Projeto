import styled from 'styled-components';

export const DashboardContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const ContainerData = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;

    @media (max-width: 768px) {
        width: 65%;
    }
    
    @media (max-width: 480px) {
        width: 90%;
    }
    `;
    
    export const ContainerInfoInput = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    
    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        width: 80%;
        flex-direction: column;
        margin-bottom: 20px;
    }
`;

export const ContentUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;

    & p {
        margin: 0;
    }

    @media (max-width: 480px) {
        
        margin-bottom: 20px;
    }
`;

export const StyledSelect = styled.select`
    width: 100%;
    border: 1px solid white;
    padding: 0 0 0 5px;
    background-color: #343B41;
    height: 30px;
    border-radius: 4px;
    color: white;
    outline: none;
    margin-top: 4px;

    & option {
        background-color: #343B41;
        color: white;
    }
`;

export const StyledInput = styled.input`
    border: 1px solid white;
    padding: 0 0 0 5px;
    background-color: #343B41;
    height: 30px;
    border-radius: 4px;
    color: white;
    outline: none;
    margin-top: 4px;
`;

export const StyledLabel = styled.label`
  color: white;
  margin-bottom: 4px;
  white-space: nowrap;
  margin-top: 8px;
`;