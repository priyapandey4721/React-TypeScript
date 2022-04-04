import "./App.css";
import { Greet } from "./components/Basics Props/Greet";
import { Heading } from "./components/Basics Props/Heading";
import { Oscar } from "./components/Basics Props/Oscar";
import { Person } from "./components/Basics Props/Person";
import { PersonList } from "./components/Basics Props/PersonList";
import { Status } from "./components/Basics Props/Status";
import { Button } from "./components/Event Props/Button";
import { Input } from "./components/Event Props/Input";

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

      <Button
        handleClick={(event, id) => {
          console.log("Button Clicked", event, id);
        }}
      />
      <Input value="" handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
