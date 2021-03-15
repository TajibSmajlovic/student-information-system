import React from 'react';
import { Tab as BootstrapTab } from 'react-bootstrap';

interface IProps {
  title: string;
  eventKey: string;
  disabled?: boolean;
  children: React.ReactNode;
}

const Tab = ({ children, ...rest }: IProps) => <BootstrapTab.Content {...rest}> {children} </BootstrapTab.Content>;

export default Tab;
