const addCounterBtn = document.getElementById("addCounter");
const resetBtn = document.getElementById("resetCounter");
const mainContainer = document.getElementById("cont");

const ADDCOUNTER = "addcounter"
const INCREMENT = "increment";
const DECREMENT = "decrement";
const RESET = "reset";

const initialState = [{ id: 1, count: 0 }];

function reducer(state = initialState, action) {

  if(action.type === ADDCOUNTER){
    let updatedState = [...state,action.payload]
    return updatedState
  } else if (action.type === INCREMENT) { 
    let updatedState = state.map((el) => {
      if (el.id === action.payload) {
        return { ...el, count: el.count + action.payload };
      }
      return {
        ...el,
      };
    });
  
    return updatedState;
  } else if (action.type === DECREMENT) {
    let updatedState = state.map((el) => {
      if (el.id === action.payload) {
        return { ...el, count: el.count - action.payload };
      }
      return {
        ...el,
      };
    });

    return updatedState;
  } else if (action.type === RESET) {
    let updatedState = state.map((el) => {
      return {
        ...el,
        count: 0,
      };
    });
    return updatedState;
  } else {
    return state;
  }
}

const store = Redux.createStore(reducer);

function render() {
  const counters = document.querySelectorAll(".counter");
  store.getState().forEach((el, index) => {
    counters[index].innerText = el.count.toString();
  });
}
render();
store.subscribe(render);

function addNewCounter() {
  let id = store.getState().length + 1;
  let count = 0;


  let markup = ` <div
      
      class="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow"
    >
      <div class="text-2xl font-semibold counter"></div>
      <div class="flex space-x-3">
        <button onClick="incrementFunc(${id})"
          class="bg-indigo-400 text-white px-3 py-2 rounded shadow"
        >
          Increment by ${id}
        </button>
        <button onClick="decrementFunc(${id})"
          class="bg-red-400 text-white px-3 py-2 rounded shadow"
        >
          Decrement by ${id}
        </button>
      </div>
    </div>
`;
  mainContainer.insertAdjacentHTML("beforebegin", markup);

  store.dispatch({
    type:ADDCOUNTER,
    payload:{id,count}
  })
}

addCounterBtn.addEventListener("click", addNewCounter);

function incrementFunc(id) {
  store.dispatch({
    type: INCREMENT,
    payload: id,
  });
}
function decrementFunc(id) {
  store.dispatch({
    type: DECREMENT,
    payload: id,
  });
}

resetBtn.addEventListener("click", () => {
  store.dispatch({
    type: RESET,
  });
});
