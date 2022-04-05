import "./App.css";
import { Greet } from "./components/Basics Props/Greet";
import { Heading } from "./components/Basics Props/Heading";
import { Oscar } from "./components/Basics Props/Oscar";
import { Person } from "./components/Basics Props/Person";
import { PersonList } from "./components/Basics Props/PersonList";
import { Status } from "./components/Basics Props/Status";
import { Button } from "./components/Event Props/Button";
import { Input } from "./components/Event Props/Input";
import { Container } from "./components/Style Props/Container";
import { ThemeContextProvider } from "./components/useContext Hook/ThemeContext";
import { LoggedIn } from "./components/useState Hook/LoggedIn";
import { User } from "./components/useState Hook/User";
import { Counter } from "./components/usReducer Hook/Counter";
import { Box } from "./components/useContext Hook/Box";
import { Users } from "./components/useContext Hook/User";
import { UserContextProvider } from "./components/useContext Hook/UserContext";
import { DomRef } from "./components/useRef Hook/DomRef";
import { MutableRef } from "./components/useRef Hook/MutableRef";
import { Counters } from "./components/Class Component/Counters";
import { Private } from "./components/Component Prop Auth/Private";
import { Profile } from "./components/Component Prop Auth/Profile";
import { Lists } from "./components/Generics/Lists";
import { RandomNumber } from "./components/Restricting Props/RandomNumber";
function App() {
  const personName = {
    first: "Priya",
    last: "Pandey",
  };

  const nameList = [
    {
      first: "Priya",
      last: "Pandey",
    },
    {
      first: "Preeti",
      last: "Pandey",
    },
    {
      first: "Komal",
      last: "Pandey",
    },
  ];
  return (
    <div className="App">
      {/* Basic Props */}

      {/* <Greet name="World" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status="loading" />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Laonardo Dicaprio</Heading>
      </Oscar>
      <Greet name="Priya" isLoggedIn={true} /> */}

      {/* Event Props */}

      {/* <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} /> */}

      {/* Style Props */}

      {/* <Container styles={{ border: "1px solid black", padding: "1rem" }} /> */}

      {/* useState Hook */}

      {/* <LoggedIn />
      <User /> */}

      {/* useReducer Hook */}

      {/* <Counter /> */}

      {/* useContext Hook */}

      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <Users />
      </UserContextProvider> */}

      {/* useRef Hook */}

      {/* <DomRef />
      <MutableRef /> */}

      {/* Class Component */}

      {/* <Counters message="The Count Value is : " /> */}

      {/* Component Prop */}

      {/* <Private isLoggedIn={true} component={Profile} /> */}

      {/* Generics  */}

      {/* <Lists
        items={["Batman", "Superman", "Wonder Woman"]}
        onClick={(item) => console.log(item)}
      />
      <Lists items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      {/* <Lists
        items={[
          {
            id: 1,
            first: "Priya",
            last: "Pandey",
          },
          {
            id: 2,
            first: "Preeti",
            last: "Pandey",
          },
          {
            id: 3,
            first: "Komal",
            last: "Pandey",
          },
        ]}
        onClick={(item) => console.log(item)}
      /> */}

      {/* Restricting Prop  */}

      <RandomNumber value={10} isPositive />
    </div>
  );
}

export default App;
