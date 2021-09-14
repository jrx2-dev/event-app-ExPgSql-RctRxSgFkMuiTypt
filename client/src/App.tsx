import { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

import PATH from "./pages/path";

import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";

const AddEvent = lazy(
  () =>
    import(
      /* webpackChunkName: "AddEventComponent" */ "./pages/AddEvent/AddEvent"
    )
);

const EventList = lazy(
  () =>
    import(
      /* webpackChunkName: "EventListComponent" */ "./pages/EventList/EventList"
    )
);

const App: React.FunctionComponent = (): JSX.Element => {
  const location = useLocation();
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <AnimatePresence exitBeforeEnter initial={false}>
          <Switch location={location} key={location.pathname}>
            <Redirect exact from={PATH.HOME} to={PATH.EVENT_LIST} />
            <Route path={PATH.ADD_EVENT} exact component={AddEvent} />
            <Route path={PATH.EVENT_LIST} exact component={EventList} />
            <Redirect path="*" to={PATH.HOME} />
          </Switch>
        </AnimatePresence>
      </Suspense>
    </>
  );
};

export default App;
