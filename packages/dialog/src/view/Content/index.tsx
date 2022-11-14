
import React from 'react';
import { useSelector } from "react-redux";

import { selectData } from "../../store/slice";


interface IProps {
  children: any;
}


function Content({ children }: IProps) {
  const data = useSelector(selectData);

  if (children instanceof Function) {
    return children.call(null, { data });
  }
  return React.Children.map(children, (child: any) => (
    React.cloneElement<any, typeof data>(child, { data })
  ));
}

export default Content;
