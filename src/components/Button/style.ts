"use client";
import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: #59323f;
  width: 101%;
  margin-top: 20px;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;
  border: none;
  border-radius: 4px;
  padding: 10px 15px 10px 15px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #ff577f;
  }
`;
