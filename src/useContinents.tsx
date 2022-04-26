import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "./services/api";
import { SlideProps } from "./types/Slides";

interface ContinentsContextProps {
  continents: SlideProps[];
}

interface ContinentsProviderProps {
  children: ReactNode;
}

const continentsContext = createContext<ContinentsContextProps>(
  {} as ContinentsContextProps
);

export function ContinentsProvider({ children }: ContinentsProviderProps) {
  const [continents, setContinents] = useState<SlideProps[]>([]);

  useEffect(() => {
    api
      .get<SlideProps[]>("continents")
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
