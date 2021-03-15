import React from 'react';
import { TAB_TYPES } from 'utils/enums';

import { TabsComponents } from './Tabs.styles';

interface IProps {
  type?: TAB_TYPES;
  activeKey: string;
  children: React.ReactNode;
  onSelect: (eventKey: string) => void;
}

const Tabs = ({ type = TAB_TYPES.DEFAULT, children, ...rest }: IProps) => {
  switch (type) {
    case TAB_TYPES.DEFAULT:
      return <TabsComponents {...rest}> {children} </TabsComponents>;

    default:
      return <TabsComponents {...rest}> {children} </TabsComponents>;
  }
};

export default Tabs;
