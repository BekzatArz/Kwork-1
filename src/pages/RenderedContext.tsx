import React, { createContext, useState, ReactNode, Dispatch, SetStateAction, useContext } from 'react';

interface RenderedItem {
  home: boolean;
  advertiser: boolean;
  [key: string]: boolean;
}

interface RenderedContextType {
  rendered: RenderedItem;
  setRendered: Dispatch<SetStateAction<RenderedItem>>;
}

export const RenderedContext = createContext<RenderedContextType | undefined>(undefined);

export const RenderedProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [rendered, setRendered] = useState<RenderedItem>({ home: false, advertiser: false });

  return (
    <RenderedContext.Provider value={{ rendered, setRendered }}>
      {children}
    </RenderedContext.Provider>
  );
};

export const useRenderedContext = () => {
  const context = useContext(RenderedContext);
  if (!context) {
    throw new Error("useRenderedContext must be used within a RenderedProvider");
  }
  return context;
}
