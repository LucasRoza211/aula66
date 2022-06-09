import './App.css';
import './components/TraficLights/styles.css'
import TrafficLight from './components/TraficLights/TraficLights';
import TodoList from './components/TodoList/TodoList'
import FetchGitHubUsers from './components/GitHubAPI/FetchGitHubUsers';

function App() {
  return (
    <div className="App">
      <TrafficLight  initialValue={0} />
      <TrafficLight  initialValue={1} />
      {/* <TodoList />*/}
      {/*<FetchGitHubUsers />*/}
    </div>
  );
}

export default App;

