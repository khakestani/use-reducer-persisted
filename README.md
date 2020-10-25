# use-persisted-reducer

Easily Persist your state created by useReducer into localStorage and sync it accross multi tab/window

## Features :boom::fire:
<h3>1- Three different storage</h3> Store your state in 3 different storage such as

- localStorage
- sessionStorage
- cookie :flushed:
<h3>2- Synced State :</h3> Your state will be synced at all Window/Tap for a same browser ( even in cookie ) 

## Requirement
To use `use-persisted-reducer`, you must use `react@16.8.0` or greater which includes Hooks.

<h2>Using</h2>

first import it

```javascript
import usePersistedReducer from 'use-persisted-reducer';
```

And then easily use it like useReducer , Just some more arguments :smile:

```javascript
const [state, dispatch] = usePersistedReducer(key, reducer, init, storage, options);
```
****key :**** your storage key  like "userInfo" ( Required )  
****reducer :**** your reducer ( Required )  
****init :**** your initial state as value or callback function  
****storage :**** specify storage type as string ( `"local"` for localStorage, `"session"` for sessionStorage , `"cookie"` for cookie )  
***options :*** all options for your cookie and syncing time interval for cookie :  
  - step : interval time in milisecond for syncing state from cookie on other tab/window
  - other option of cookie based on ["universal-cookie"](https://www.npmjs.com/package/universal-cookie)




<h2> Example </h2>

```javascript
import usePersistedReducer from 'use-persisted-reducer';
import reducer from './path/to/yourReducer';

function Counter() {
  const [state, dispatch] = usePersistedReducer('counter', reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```
> Taken from the basic example of React [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)


- The state created by this hook is shared for this App on other tabs or windows

- Even when you close the window completely and open it again your state is persisted

### Licence 
 [MIT](https://github.com/khakestani/use-persisted-reducer/blob/main/LICENSE) Licensed
