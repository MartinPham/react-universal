# React Universal v2


Init project
--
```
yarn
```

Running DEV mode
--
```
yarn start
```


Running SSR mode
--
```
yarn ssr:watch
```


Release
---
```
yarn client:dist
```
- Client build will be located in the `dist` branch


Log
---
Use `loglevel`

```
import log from 'loglevel';

...

log.info('...') // Informations
log.warn('...') // Warnings
log.error('...') // Errors
```

Routing
---
- Config routes in `src/routes.js`
- Push new page with 

```
	props.navigator.push(
		pageNameOrPath, // use RouteId like @Home?test=1, or PathName like /sample?test=1
		transition = 'slideLeft', // optional
		data = {} // optional
	)
	
```
- or with a `Link` component

```
import {Link as A} from 'components/Navigator';

...

<A href="@Sample?test=1" transition="flyLeft" data={{a: 'b'}}>Click here</A>
	
```
- or dispatch a `push` action

```
import push from 'components/Navigator/actions/push';

...

props.dispatch(push(
		pageNameOrPath, // use RouteId like @Home?test=1, or PathName like /sample?test=1
		transition = 'slideLeft', // optional
		data = {} // optional
))
	
```

Page
---
- Located in `src/pages`
- Props: 

```
{
	page, // page name
	queryParams, // query variables like ?a=1&b=2
	data, // data from push()
	navigator: {
		push: (pageNameOrPath, transition, data), // push new page
		goBack: (),
		goForward: (),
		go: (index), // go to specific history position
	},
	location, // current location info
	params, // page param, like /sample/:id/:name
	dispatcher: (action) // for dispatch redux action
}
```

Redux
---
- **Only store global state in redux store, otherwise use component state for local state**
- Register reducers on `src/config/reducers.js`
- Register sagas on `src/config/sagas.js`
- Connect a component 

```
import quickConnect from 'utils/redux/quickConnect';

...

quickConnect()(Component)

```

Examples
---
- Located in `examples`