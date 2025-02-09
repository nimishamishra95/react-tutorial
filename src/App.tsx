import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  /*
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
  */
  /*
  return (
    <div>
      <Alert>
        Hello <span>World!</span>
      </Alert>
    </div>
  );
  */

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Hello <span>World!</span>
      </Button>
    </div>
  );
}

export default App;
