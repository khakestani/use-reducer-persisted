# use-persisted-reducer

Easily Persist your state created by useReducer into localStorage and sync it accross multi tab/window

### Requirement

To use `use-persisted-reducer`, you must use `react@16.8.0` or greater which includes Hooks.

<h2>Using</h2>

first import it

```javascript
import usePersistedReducer from 'use-persisted-reducer';
```

And then easily use it like useReducer , Just add a key as the first function parameter, The other parameters are exactly like useReducer.

```javascript
const [state, dispatch] = usePersistedReducer('key', reducer, initialState, init);
```



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
