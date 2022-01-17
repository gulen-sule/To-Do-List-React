import Form from "./components/Add/Add";
import './App.css';

function App() {
  
  return(<>
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" 
    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
     crossorigin="anonymous"/>
  </head>
  <div class="container as">
  <h3 class="container title" className="title">To-Do List</h3>
  <Form class="container " ></Form>
  </div>
  </>)
}

export default App;
