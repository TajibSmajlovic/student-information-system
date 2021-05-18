import styled from 'styled-components';
import { lazy, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { generatePath, matchPath } from 'react-router';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { Container as CustomContainer } from 'react-bootstrap';

import IUser from 'models/redux/IUser';
import { PrivateRoute, SideMenu, Navigation, Loader, CourseDetails as Details } from 'components';
import {
  IRoute,
  IParam,
  IRoutes,
  ISharedRoutes,
  IAdminRoutes,
  IConfigurableRoute,
  IProfessorRoutes,
  IStudentRoutes,
} from 'utils/routes/IRoutes';
import { getUser } from 'store/reducers/sessionReducer';
import { USER_ROLES } from 'utils/enums';

const Login = lazy(() => import('views/Login'));
const CoursesManagement = lazy(() => import('views/CoursesManagement'));
const UsersManagement = lazy(() => import('views/UsersManagement'));
const ResetPassword = lazy(() => import('views/ResetPassword'));
const GeneratePassword = lazy(() => import('views/GeneratePassword'));
const Announcements = lazy(() => import('views/Announcements'));
const AcademicCalendar = lazy(() => import('views/AcademicCalendar'));
const ProfessorsHome = lazy(() => import('views/ProfessorsHome'));
const ProfessorsCalendar = lazy(() => import('views/ProfessorsCalendar'));
const MyCourses = lazy(() => import('views/MyCourses'));
const CourseDetails = lazy(() => import('views/CourseDetails'));
const OfferedCourses = lazy(() => import('views/OfferedCourses'));
const OfferedCoursesPreview = lazy(() => import('views/OfferedCoursePreview'));
const StudentsHome = lazy(() => import('views/StudentsHome'));
const CourseRegistration = lazy(() => import('views/CourseRegistration'));
const MyPRofile = lazy(() => import('components/UsersManagement/MyProfile'));
const StudentsCourses = lazy(() => import('views/StudentsCourses'));

const sharedRoutes: ISharedRoutes = {
  LOGIN: {
    id: 'LOGIN',
    path: '/login',
    exact: true,
    private: false,
    showNavigation: false,
    Component: Login,
  },
  // will be overwritten
  ROOT: {
    id: 'ROOT',
    path: '/',
    exact: true,
    private: true,
    showNavigation: true,
    Component: () => <></>,
  },
  RESET_PASSWORD: {
    id: 'RESET_PASSWORD',
    path: '/reset-password',
    exact: true,
    private: false,
    showNavigation: false,
    Component: ResetPassword,
  },
  GENERATE_PASSWORD: {
    id: 'GENERATE_PASSWORD',
    path: '/generate-password',
    exact: true,
    private: false,
    showNavigation: false,
    Component: GeneratePassword,
  },
  MY_PROFILE: {
    id: 'MY_PROFILE',
    path: '/profile',
    exact: true,
    private: false,
    showNavigation: true,
    Component: MyPRofile,
  },
};

const adminRoutes: IAdminRoutes = {
  COURSES_MANAGEMENT: {
    id: 'COURSES_MANAGEMENT',
    path: '/courses-management',
    exact: true,
    private: true,
    showNavigation: true,
    isVisible: true,
    configuration: {
      order: 1,
      isDisabled: false,
      label: 'courses_management',
    },
    Component: CoursesManagement,
  },
  USERS_MANAGEMENT: {
    id: 'USERS_MANAGEMENT',
    path: '/users-management',
    exact: true,
    private: true,
    showNavigation: true,
    isVisible: true,
    configuration: {
      order: 2,
      isDisabled: false,
      label: 'users_management',
    },
    Component: UsersManagement,
  },
  ANNOUNCEMENTS: {
    id: 'ANNOUNCEMENTS',
    path: '/announcements',
    exact: true,
    private: true,
    showNavigation: true,
    isVisible: true,
    configuration: {
      order: 4,
      isDisabled: false,
      label: 'announcements',
    },
    Component: Announcements, // replace with real component
  },
  ACADEMIC_CALENDAR: {
    id: 'CALENDAR',
    path: '/calendar',
    exact: true,
    private: true,
    showNavigation: true,
    isVisible: true,
    configuration: {
      order: 4,
      isDisabled: false,
      label: 'Academic Calendar',
    },
    Component: AcademicCalendar, // replace with real component
  },
  ADD_COURSE: {
    id: 'COURSES_MANAGEMENT',
    path: '/courses/add',
    exact: true,
    private: true,
    showNavigation: true,
    isVisible: false,
    configuration: {
      label: 'Courses management',
    },
    Component: Details,
  },
};

const professorsRoutes: IProfessorRoutes = {
  HOME: {
    id: 'HOME',
    path: '/home',
    exact: true,
    private: true,
    showNavigation: true,
    isVisible: true,
    configuration: {
      order: 1,
      isDisabled: false,
      label: 'Home',
    },
    Component: ProfessorsHome,
  },
  CALENDAR: {
    id: 'CALENDAR',
    path: '/calendar',
    exact: true,
    private: true,
    showNavigation: true,
    isVisible: true,
    configuration: {
      order: 1,
      isDisabled: false,
      label: 'Calendar',
    },
    Component: ProfessorsCalendar,
  },
  OFFERED_COURSES: {
    id: 'OFFERED_COURSES',
    path: '/offered-courses',
    exact: true,
    private: true,
    showNavigation: true,
    isVisible: true,
    configuration: {
      order: 1,
      isDisabled: false,
      label: 'Offered Courses',
    },
    Component: OfferedCourses,
  },
  OFFERED_COURSES_PREVIEW: {
    id: 'OFFERED_COURSESssss',
    path: '/offered-courses/123',
    exact: true,
    private: true,
    showNavigation: true,
    isVisible: false,
    configuration: {
      order: 1,
      isDisabled: false,
      label: 'Offered Courses',
    },
    Component: OfferedCoursesPreview,
  },
  MY_COURSES: {
    id: 'MY_COURSES',
    path: '/my-courses',
    exact: true,
    private: true,
    showNavigation: true,
    isVisible: true,
    configuration: {
      order: 1,
      isDisabled: false,
      label: 'My Courses',
    },
    Component: MyCourses,
  },
  COURSE_DETAILS: {
    id: 'COURSE_DETAILS',
    path: '/course-details/:param',
    exact: true,
    private: true,
    showNavigation: true,
    isVisible: false,
    configuration: {
      label: 'My Courses',
    },
    Component: CourseDetails,
  },
};

const studentsRoutes: IStudentRoutes = {
  HOME: {
    id: 'HOME',
    path: '/home',
    exact: true,
    private: true,
    showNavigation: true,
    isVisible: true,
    configuration: {
      order: 1,
      isDisabled: false,
      label: 'Home',
    },
    Component: StudentsHome,
  },
  COURSE_DETAILS: {
    id: 'COURSE_DETAILS',
    path: '/course-details/:param',
    exact: true,
    private: true,
    showNavigation: true,
    isVisible: false,
    configuration: {
      label: 'My Courses',
    },
    Component: CourseDetails,
  },

  COURSE_REGISTRATION: {
    id: 'COURSE_REGISTRATION',
    path: '/course-registration',
    exact: true,
    private: true,
    showNavigation: true,
    isVisible: true,
    configuration: {
      order: 1,
      isDisabled: false,
      label: 'Course Registration',
    },
    Component: CourseRegistration,
  },
  MY_COURSES: {
    id: 'MY_COURSES',
    path: '/my-courses',
    exact: true,
    private: true,
    showNavigation: true,
    isVisible: true,
    configuration: {
      order: 1,
      isDisabled: false,
      label: 'My Courses',
    },
    Component: StudentsCourses,
  },
  ATTENDANCE: {
    id: 'ATteNDANCE',
    path: '/course-detailss/:param',
    exact: true,
    private: true,
    showNavigation: true,
    isVisible: false,
    configuration: {
      order: 1,
      isDisabled: false,
      label: 'My Courses',
    },
    Component: Details,
  },
  GRADE_DETAILS: {
    id: 'GRADE_DETAILS',
    path: '/documents',
    exact: true,
    private: true,
    showNavigation: true,
    isVisible: true,
    configuration: {
      isDisabled: true,
      label: 'Grade Details',
    },
    Component: () => <></>,
  },
  ATTENDANCE2: {
    id: 'ATteNDANCE2',
    path: '/attendance',
    exact: true,
    private: true,
    showNavigation: true,
    isVisible: true,
    configuration: {
      isDisabled: true,
      label: 'Attendance',
    },
    Component: () => <></>,
  },
  DOCUMENTS: {
    id: 'DOCUMENTS',
    path: '/documents',
    exact: true,
    private: true,
    showNavigation: true,
    isVisible: true,
    configuration: {
      isDisabled: true,
      label: 'Documents',
    },
    Component: () => <></>,
  },
};

export const routes: IRoutes = {
  ...sharedRoutes,
  ...adminRoutes,
  ...professorsRoutes,
  ...studentsRoutes,
};

export const redirectTo = (route: string) => <Redirect to={route} />;

export const generateLink = (route: IRoute, param: IParam) => generatePath(route.path, param);

export const matchRoute = (pathname: string, exact?: boolean): IRoute | IConfigurableRoute =>
  Object.values(routes).find((r: IRoute) =>
    matchPath(pathname, {
      path: r.path,
      exact: !exact ? r.exact : exact, // if exact flag provided use it otherwise use as specified in route r
    })
  );

const overwriteSharedRootRoute = (route: IConfigurableRoute) => {
  routes.ROOT = {
    ...sharedRoutes.ROOT,
    path: route.path,
    showNavigation: route.showNavigation,
    Component: route.Component,
  };
};

export const overwriteSharedRoot = (user: IUser) => {
  const { role } = user;

  switch (role) {
    case USER_ROLES.ADMIN:
      overwriteSharedRootRoute(adminRoutes.COURSES_MANAGEMENT);
      break;
    case USER_ROLES.PROFESSOR:
      overwriteSharedRootRoute(professorsRoutes.HOME);
      break;
    case USER_ROLES.STUDENT:
      overwriteSharedRootRoute(studentsRoutes.HOME);
      break;
    default:
      break;
  }
};

export const useAvailableUserRoutes = () => {
  const activeUser = useSelector(getUser);

  const availableUserRoutes = useMemo(() => {
    switch (activeUser?.role) {
      case USER_ROLES.ADMIN:
        return Object.values({ ...sharedRoutes, ...adminRoutes });
      case USER_ROLES.PROFESSOR:
        return Object.values({ ...sharedRoutes, ...professorsRoutes });
      case USER_ROLES.STUDENT:
        return Object.values({ ...sharedRoutes, ...studentsRoutes });
      default:
        return Object.values(sharedRoutes);
    }
  }, [activeUser]) as IRoute[] | IConfigurableRoute[];

  return availableUserRoutes;
};

const Routes = () => {
  const location = useLocation();
  const currentRoute = matchRoute(location.pathname);
  const availableUserRoutes = useAvailableUserRoutes();
  const activeUser = useSelector(getUser);

  return (
    <Suspense fallback={<CenteredLoader />}>
      {activeUser && currentRoute?.showNavigation && <Navigation />}
      <Container fluid className="p-0">
        {activeUser && currentRoute?.showNavigation && <SideMenu />}
        <Content>
          <Suspense fallback={!activeUser ? <CenteredLoader /> : <Loader isCentered={true} />}>
            <Switch>
              {availableUserRoutes.map((r: any, i: number) =>
                r.private ? (
                  <PrivateRoute
                    key={i}
                    path={r.path}
                    exact={r.exact}
                    currentRoute={currentRoute}
                    component={r.Component}
                  />
                ) : (
                  <Route key={i} path={r.path} exact={r.exact} component={r.Component} />
                )
              )}
              <Route path="*">
                <Redirect to={routes.ROOT.path} />
              </Route>
            </Switch>
          </Suspense>
        </Content>
      </Container>
    </Suspense>
  );
};

const Container = styled(CustomContainer)`
  height: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  justify-content: stretch;
  align-items: stretch;
`;

const Content = styled.div`
  flex: 1 1 0%;
  padding: 1rem 0.5rem;
`;

const CenteredLoader = styled(({ ...rest }) => (
  <div {...rest}>
    <Loader isCentered={true} />
  </div>
))`
  height: 100vh;
  width: 100vw;
`;

export default Routes;
