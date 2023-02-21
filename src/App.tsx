import Layout from "@/Components/Layout/Layout";
import { Comments } from "@/Components";
import { Diary } from "@/Components";
import data from "@/data.json";
import "@/App.scss";

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
