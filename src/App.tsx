import Layout from "./Components/Layout/Layout";
import Comments from "./Components/Comments/Comments";
import Diary from "./Components/Diary/Diary";
import data from "./data.json";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <Layout />
            <Diary data={data} />
            <Comments />
            <Layout />
        </div>
    );
}

export default App;
