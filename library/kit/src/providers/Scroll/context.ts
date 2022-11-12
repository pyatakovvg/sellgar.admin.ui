
import React from "react";


interface IProps {
  isScroll: boolean;
}


export const context = React.createContext<IProps>({
  isScroll: false,
});

export const Provider = context.Provider;
