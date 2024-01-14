import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout/Layout";
import CardList from "./components/Card/CardList";
import MyForm from "./components/Form";
import useGetWorkers from "./shared/utils/useGetWorkers";

function App() {
  const data = useGetWorkers();

  return (
    <Layout>
      <div className="pb-2">
        <MyForm />
      </div>
      <CardList cardsArr={data} />
    </Layout>
  );
}

export default App;
