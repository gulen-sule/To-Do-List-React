import Form from "./components/Add/Add";
import './App.css';

function App() {
  
  return(<>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" 
    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
    crossOrigin="anonymous"/>

    <div className="container whole" >
    <div className="row">
    <div className="col" id="title">
      <h3>To-Do List</h3>
    </div>
    <div className="col-12">
      <Form  ></Form>
    </div>
  </div>
  </div>
  </>)
}

export default App;
