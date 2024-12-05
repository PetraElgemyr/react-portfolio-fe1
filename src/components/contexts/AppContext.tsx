import React, { createContext } from "react";
import { IProject } from "../interfaces/IProject";
import { Pages } from "../enums/Pages";

export type AppState = {
  projects: IProject[];
  setProjects: React.Dispatch<React.SetStateAction<IProject[]>>;
  activePage: Pages;
  setActivePage: React.Dispatch<React.SetStateAction<Pages>>;
};

export const AppContext = createContext<AppState>({} as AppState);
