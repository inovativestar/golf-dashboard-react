import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';
import customRoutes from '../../customApp/router';

const routes = [
  {
    path: '',
    component: asyncComponent(() => import('../Player/Dashboard')),
  },
  {
    path: 'putting',
    component: asyncComponent(() => import('../Putting/Putting')),
  },
  {
    path: 'trends',
    component: asyncComponent(() => import('../Player/Trends')),
  },

  {
    path: 'rounds',
    component: asyncComponent(() => import('../Player/Rounds/index.js')),
  },
  {
    path: 'profile',
    component: asyncComponent(() => import('../Profile/profile')),
  },
  {
    path: 'strokes',
    component: asyncComponent(() => import('../StrokesGained/strokesHome')),
  },

  {
    path: 'Community',
    component: asyncComponent(() => import('../Player/Community')),
  },
  {
    path: 'communityFriends',
    component: asyncComponent(() => import('../FirestoreCRUD/Article/friends')),
  },
  {
    path: 'coachcommunity',
    component: asyncComponent(() => import('../Coach/Community')),
  },
  {
    path: 'coachcommunity/group',
    component: asyncComponent(() => import('../Coach/Community/editGroup')),
  },
  {
    path: 'coachspiderrankings',
    component: asyncComponent(() => import('../Coach/SpiderRankings/index.js')),
  },
  {
    path: 'adminsettings',
    component: asyncComponent(() => import('../admin_setting/resetPassword')),
  },
  {
    path : 'settings',
    component: asyncComponent(() => import('../Settings')),
  },
  {
    path: 'adminprofile',
    component: asyncComponent(() => import('../Profile/profile')),
  },
  


  ...customRoutes,
];

class AppRouter extends Component {
  render() {
    const { url, style } = this.props;
    return (
      <div style={style}>
        {routes.map(singleRoute => {
          const { path, exact, ...otherProps } = singleRoute;
          return (
            <Route
              exact={exact === false ? false : true}
              key={singleRoute.path}
              path={`${url}/${singleRoute.path}`}
              {...otherProps}
            />
          );
        })}
      </div>
    );
  }
}

export default AppRouter;
