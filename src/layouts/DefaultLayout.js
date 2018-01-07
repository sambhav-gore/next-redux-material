import Header from "../components/Header";

const defaultLayout = (props) => (
  <div>
    <Header/>
    {props.children}
  </div>
);

export default defaultLayout;