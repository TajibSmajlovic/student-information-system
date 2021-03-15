export type IParam = {
  param?: number | string;
};

interface IRouteConfiguration {
  order: number;
  isDisabled: boolean;
  label: string;
}

export interface IRoute {
  id: string;
  path: string;
  exact: boolean;
  private: boolean;
  showNavigation: boolean;
  Component: React.FC;
}

export interface IConfigurableRoute extends IRoute {
  configuration: IRouteConfiguration;
}

export interface ISharedRoutes {
  LOGIN: IRoute;
  ROOT: IRoute;
}

export interface IAdminRoutes {
  COURSES_MANAGEMENT: IConfigurableRoute;
  USERS_MANAGEMENT: IConfigurableRoute;
  ANNOUNCEMENTS: IConfigurableRoute;
}

export interface IProfessorRoutes {}

export interface IStudentRoutes {}

export interface IRoutes extends ISharedRoutes, IAdminRoutes, IProfessorRoutes, IStudentRoutes {}
