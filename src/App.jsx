import Counter from './counter';
import './App.css'
import Batsman from './Batsman';
import Users from './Users';
import Posts from './Posts';
import { Suspense } from 'react';
import Friends from './Friends';
import Photos from './Photos';



//1. just write a simple fetch with json conversion.
//2. wrap the data loading component under Suspense

// Direct fetching here:
// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
// .then(res=>res.json())


// const fetchFriends = async() =>{
// const res = await fetch('https://jsonplaceholder.typicode.com/users')

// return res.json()

// }

// const fetchPosts = async() =>{
// const res = await fetch('https://jsonplaceholder.typicode.com/posts')

// return res.json()
// }

const fetchPhotos = async() =>{
  const res = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")

return res.json()
}





function App() {
//One line function added here for the async-await fetching:
  // const friendsPromise = fetchFriends();

  // const postsPromise = fetchPosts()

  const photosPromise = fetchPhotos()

function handleClick(){ 
  alert('I am clicked.')
}
const handleClick3 = () =>{
  alert('Clicked me 3')
}

const handleAdd5 = (num)=>{
const newNum = num + 5;
alert(newNum);
}

  return (
    <>
      <h3>Vite + React</h3>

      <Suspense fallback={<h3>Photos are Coming soon ...</h3>}>
        <Photos photosPromise={photosPromise}></Photos>
      </Suspense>

      {/* <Suspense fallback={<h3>Posts are coming soon ...</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Loading ...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

      {/* <Suspense fallback={<h3>Friends are coming for treat ...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense> */}
      <Batsman></Batsman>
      <Counter></Counter>
      {/* <button onclick="handleClick(">Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function handleClick2() {
          alert("I am clicked");
        }}
      >
        Click Me2
      </button>
      {/* if not passed parameter in the eventHandler I will use this one event handler */}
      <button onClick={handleClick3}>Click me 3</button>
      <button onClick={() => alert("click 4")}>Click me 4</button>
      {/* arrow function with wrap */}
      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  );
}

export default App

//ex:Hooks
// const [andolon, date] = getSomething();

// function useState(initialValue) {
//   let state = initialValue;
//   function setSatate(newValue) {
//     state = newValue;
//   }
//   return [state, setState];
// }