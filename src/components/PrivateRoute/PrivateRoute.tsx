import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { getUser } from 'store/reducers/sessionReducer';
import { redirectTo } from 'utils/routes/routes';

interface IProps {
  path: string;
  exact: boolean;
  currentRoute: any;
  component: React.ElementType;
}

const PrivateRoute = ({ currentRoute, component: Component, ...rest }: IProps) => {
  const currentUser = useSelector(getUser);

  return (
    <Route
      {...rest}
      render={props => {
        if (!currentUser) return redirectTo('/login'); // not logged in so redirect to login page with the return url

        if (currentRoute?.configuration?.isDisabled) return <div>Not Allowed!</div>; // TODO: add appropriate component

        // authorized so return component
        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
