import { PaginationProps } from 'antd';
import React from 'react';

import { PaginationStyled } from './styled';

const Pagination: React.FC<PaginationProps> = (props) => <PaginationStyled {...props} />;

export default Pagination;
