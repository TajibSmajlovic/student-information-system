import styled from 'styled-components';
import { lazy, Suspense, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { generatePath, matchPath } from 'react-router';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { Container as CustomContainer } from 'react-bootstrap';

import IUser from 'models/IUser';
import { PrivateRoute, SideMenu, Navigation, Loader } from 'components';
import { IRoute, IParam, IRoutes, ISharedRoutes, IAdminRoutes, IConfigurableRoute } from 'utils/routes/IRoutes';
import { getUser } from 'store/reducers/sessionReducer';
import { USER_ROLES } from 'utils/enums';

const Login = lazy(() => import('views/Login'));
const CoursesManagement = lazy(() => import('views/CoursesManagement'));
const ProfessorsManagement = lazy(() => import('views/ProfessorsManagement'));

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
};

const adminRoutes: IAdminRoutes = {
  COURSES_MANAGEMENT: {
    id: 'COURSES_MANAGEMENT',
    path: '/courses-management',
    exact: true,
    private: true,
    showNavigation: true,
    configuration: {
      order: 1,
      isDisabled: false,
      label: 'courses_management',
    },
    Component: CoursesManagement,
  },
  PROFESSORS_MANAGEMENT: {
    id: 'PROFESSORS_MANAGEMENT',
    path: '/professors-management',
    exact: true,
    private: true,
    showNavigation: true,
    configuration: {
      order: 2,
      isDisabled: false,
      label: 'professors_management',
    },
    Component: ProfessorsManagement,
  },
  STUDENTS_MANAGEMENT: {
    id: 'STUDENTS_MANAGEMENT',
    path: '/students-management',
    exact: true,
    private: true,
    showNavigation: true,
    configuration: {
      order: 3,
      isDisabled: true,
      label: 'students_management',
    },
    Component: () => <div></div>, // replace with real component
  },
  ANNOUNCEMENTS: {
    id: 'ANNOUNCEMENTS',
    path: '/announcements',
    exact: true,
    private: true,
    showNavigation: true,
    configuration: {
      order: 4,
      isDisabled: true,
      label: 'announcements',
    },
    Component: () => <div></div>, // replace with real component
  },
};

export const routes: IRoutes = {
  ...sharedRoutes,
  ...adminRoutes,
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
    default:
      break;
  }
};

const Routes = () => {
  const history = useHistory();
  const currentRoute = matchRoute(history.location.pathname);
  const currentUser = useSelector(getUser);

  const availableUserRoutes = useMemo(() => {
    switch (currentUser?.role) {
      case USER_ROLES.ADMIN:
        const routes = { ...sharedRoutes, ...adminRoutes };

        return Object.values(routes);
      case USER_ROLES.PROFESSOR:
        // todo
        return;
      case USER_ROLES.STUDENT:
        // todo
        return;
      default:
        return Object.values(sharedRoutes);
    }
  }, [currentUser]) as IRoute[] | IConfigurableRoute[];

  return (
    <Suspense fallback={<CenteredLoader />}>
      {currentUser && currentRoute?.showNavigation && <Navigation />}
      <Container fluid className="p-0">
        {currentUser && currentRoute?.showNavigation && <SideMenu />}
        <Content>
          <Suspense fallback={!currentUser ? <CenteredLoader /> : <Loader isCentered={true} />}>
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
