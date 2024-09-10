import { Pagination } from 'antd';
import styled from 'styled-components';

export const PaginationStyled = styled(Pagination)`
  .ant-pagination {
    &-item {
      --height: 40px;
      width: var(--height);
      height: var(--height);
      color: ${({ theme }) => theme.textPrimary};
      border: 2px solid ${({ theme }) => theme.lightGray};
      border-radius: 6px;

      a {
        color: ${({ theme }) => theme.textPrimary};
        line-height: calc(var(--height) - 4px);
      }

      &-active {
        background-color: ${({ theme }) => theme.primary};
        border-color: ${({ theme }) => theme.primary};
        transition: all 0.2s linear;

        a {
          color: ${({ theme }) => theme.white};
        }

        &:hover {
          border-color: ${({ theme }) => theme.primary};
          opacity: 0.8;
          a {
            color: ${({ theme }) => theme.white};
          }
        }
      }
    }
  }
`;
