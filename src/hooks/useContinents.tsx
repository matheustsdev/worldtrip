import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { ContinentProps } from "../types/Slides";

interface ContinentsContextProps {
  continents: ContinentProps[];
}

interface ContinentsProviderProps {
  children: ReactNode;
}

const continentsContext = createContext<ContinentsContextProps>(
  {} as ContinentsContextProps
);

export function ContinentsProvider({ children }: ContinentsProviderProps) {
  const [continents, setContinents] = useState<ContinentProps[]>([]);

  useEffect(() => {
    api
      .get<ContinentProps[]>("continents")
      .then((res) => {
        setContinents(res.data);
        return res.data;
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <continentsContext.Provider value={{ continents }}>
      {children}
    </continentsContext.Provider>
  );
}

export function useContinents() {
  const hook = useContext(continentsContext);

  return hook;
}
