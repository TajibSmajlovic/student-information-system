export type IParam = {
  param?: number | string;
};

interface IRouteConfiguration {
  order?: number;
  isDisabled?: boolean;
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
  isVisible: boolean;
  configuration: IRouteConfiguration;
}

export interface ISharedRoutes {
  LOGIN: IRoute;
  ROOT: IRoute;
  RESET_PASSWORD: IRoute;
  GENERATE_PASSWORD: IRoute;
  MY_PROFILE: IRoute;
}

export interface IAdminRoutes {
  COURSES_MANAGEMENT: IConfigurableRoute;
  USERS_MANAGEMENT: IConfigurableRoute;
  ANNOUNCEMENTS: IConfigurableRoute;
  ACADEMIC_CALENDAR: IConfigurableRoute;
  ADD_COURSE: IConfigurableRoute;
}

export interface IProfessorRoutes {
  HOME: IConfigurableRoute;
  CALENDAR: IConfigurableRoute;
  OFFERED_COURSES: IConfigurableRoute;
  OFFERED_COURSES_PREVIEW: IConfigurableRoute;
  MY_COURSES: IConfigurableRoute;
  COURSE_DETAILS: IConfigurableRoute;
}

export interface IStudentRoutes {
  HOME: IConfigurableRoute;
  COURSE_DETAILS: IConfigurableRoute;
  COURSE_REGISTRATION: IConfigurableRoute;
  MY_COURSES: IConfigurableRoute;
  ATTENDANCE: IConfigurableRoute;
  DOCUMENTS: IConfigurableRoute;
  ATTENDANCE2: IConfigurableRoute;
  GRADE_DETAILS: IConfigurableRoute;
}

export interface IRoutes extends ISharedRoutes, IAdminRoutes, IProfessorRoutes, IStudentRoutes {}
