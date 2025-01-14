import styled from "@emotion/styled";

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
` 
  
export const FeedbackWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 34px;
  gap: 10px;
  color: red;
` 
  
export const IconLogo = styled.img`
  width: 90px;
  height: 90px;
  cursor: pointer;
  transition: transform 0.2s;

&:hover {
  transform: scale(1.1);
  }
`

export const ResetButton = styled.button` 
  width: 140px ;
  height: 80px;
  padding: 8px 16px;
  border: none;
  background-color: #007bff;
  color: white;
  font-size: 20px;
  border-radius: 4px;
  cursor: pointer;
  
&:hover {
  background-color: #0056b3;
  }
` 