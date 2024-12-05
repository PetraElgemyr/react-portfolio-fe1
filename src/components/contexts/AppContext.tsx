import React, { createContext } from "react";
import { IProject } from "../interfaces/IProject";

export type AppState = {
  projects: IProject[];
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
};

export const AppContext = createContext<AppState>({} as AppState);
