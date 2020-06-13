import styled from 'styled-components';

interface ColorProps {
  nome: string;
}

export const Title = styled.h1`
  color: #fff;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

export const ColorPickerInput = styled.input`
  width: 100px;
  height: 100px;
  border: 2px solid black;
  margin-bottom: 24px;
  margin-top: 24px;
`

export const ColorText = styled.h3`
  background-color: white;
  border-radius: 10px 0 0 0;
  padding: 10px;

  @media (max-width: 600px) {
    transform: rotateX(45deg);
  };
`

export const Color = styled.div<ColorProps>`
  background-color: ${({ nome }) => nome};

  display: flex;
  align-items: flex-end;
  justify-content: flex-end;


  width: 18vw;
  height: 20vh;

  @media (max-width: 600px) {
    width: 36vw;
  };
`

export const ColorsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 72vw;
`

export const Names = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30vw;
`

export const Nois = styled.a`
  margin-top: 24px;
  margin-bottom: 24px;
  font-size: 20 px;
  color: #fff;
`;