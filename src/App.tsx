import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout/Layout";
import CardList from "./components/Card/CardList";
import MyForm from "./components/Form";

function App() {
  return (
    <Layout>
      <div className="pb-2">
        <MyForm />
      </div>
      <CardList
        cardsArr={[
          {
            email: "email",
            fullName: "fullName",
            id: "dasf",
            jobPosition: "jobPosition",
            workingTime: "workingTime",
          },
          {
            email: "email",
            fullName: "fullName",
            id: "dasf",
            jobPosition: "jobPosition",
            workingTime: "workingTime",
          },
          {
            email: "email",
            fullName: "fullName",
            id: "dasf",
            jobPosition: "jobPosition",
            workingTime: "workingTime",
          },
        ]}
      />
    </Layout>
  );
}

export default App;
