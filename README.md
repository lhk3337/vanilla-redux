# Redux

## Learning Vanilla-Redux and React-Redux

### Redux 관련 정보

- reducer : data를 modify하는 함수로 reducer가 return하는 것은 application에 있는 data가 됨. 첫번째 인자는 state, 두번째 인자는 action이다.
- store : 데이터를 넣는곳 즉 state, 창고
- createStore : const store = createStore(reducer function), Store를 만들어주는 역할을 하고, reducer 함수를 요구한다.
- action : Redux의 state가 어떻게 변할지 알려주는 인자. 즉 application에서 store에 보내는 일종의 데이터.

### Redux Store 메소드

- subscribe( ) : state의 변화를 감지하여
- getState( ) : Application의 현재 상태 트리를 반환
- dispatch( ) : reducer함수에게 action을 보내기, dispatch({type:value})
