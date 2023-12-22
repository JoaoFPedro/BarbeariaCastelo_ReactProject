import styled from 'styled-components';

export const ListItem = styled.li<{ status: string }>`
  display: flex;
  min-height: 40px;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 8px;
  font-size: 16px;
  align-items: center;
  color: ${({ status }) => (status === 'Atendimento Atual' ? '#fb7512' : '#696969')};
  border: ${({ status }) =>
    status === 'Atendimento Atual' ? '2px solid #fb7512' : '2px solid #f5f5f5'};
  box-shadow: ${({ status }) =>
    status === 'Atendimento Atual' ? '0px 4px 6px rgba(251, 117, 18, 0.1)' : 'none'};

  & button {
    border: solid 1px #59aa74;
    background: #59aa74;
    color: #fff;
    padding: 8px 24px;
    border-radius: 50px;
    cursor: pointer;

    &.cancel {
      border: solid 1px #fb7512;
      background: #fb7512;
      margin-left: 8px;
    }
  }

  & div {
    width: 400px;
    display: flex;
    justify-content: flex-end;
  }
`;

export const SpanStatus = styled.span<{ status: string }>`
  color: ${(props) => {
    switch (props.status) {
      case 'Concluído':
        return '#59aa74';
      case 'Atendimento Atual':
        return '#fb7512';
      case 'Cancelado':
        return '#fb7512';
      default:
        return '#696969';
    }
  }};
`;
