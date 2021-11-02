# Redux + Rest

Vamos supor que temos um aplicativo com uma área de logging e um sistema de notificações.

Independente de onde o usuário esteja, algumas informações devem ser mantidas em sincronia. Uma maneira de resolver isso, é utilizando o Redux.

Porém, para isso, utilizamos uma camada extra, conhecida como Middlewares.

Esses middlewares são a camada entre o disparo de uma ação e o momento que ela atinge o reducer. Eles tem várias funções, entre elas, as chamadas de APIs de serviço.

Podemos fazer loggs das situações processadas  através de um logging manual, com console.log.

```JS
store.dispatch (addTodo('Use Redux'))

const action = addTodo('Use Redux')

console.log ('dispatching', action)
store.dispatch(action)
console.log('next state',stroe.getState())
```

Isso é possível, mas fazer por todo o código é custoso e polui todo o ambiente.

## Solução no Redux

```JS
const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next (action)
    console.log ('next state',store.getState())
    return result
}

const crashReporter = store => next => action => {
    try{
        return next(action)
    } catch (err){
        console.error('Caught an Expection", err)
        Ravel.captureException(err,{
            extra:{
                action,
                state: store.getState()
            }
        })
        throw err
    }
}
```

```JS
import {creatStore, combineReducers, applyMiddleware} from 'redux'

const todoApp = combineReducers (reducers)
const store = createStore(
    todoApp,
    //applyMiddleware() diz a createStore() como fazer o handling do middleware
    applyMiddleware(logger,crashReporter)
)
```

Essa é a forma manual de se criar um middleware, mas temos os middlewares mais usados já criados:

* redux-thunk

* redux-saga

## Redux Thunk

Thunk é uma função que retorna outra função

```JS
function some_functio(){
    //do something
    return function thunk(){
        //do something else thinking
    }
}
```

Podemos instalar ele através do `npm install thunk`.
