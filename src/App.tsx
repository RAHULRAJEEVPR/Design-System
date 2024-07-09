import "./App.css";
import TypoGraphy from "./components/atom/typography/TypoGraphy";

function App() {
  return (
    <>
      <TypoGraphy
        tag={"h1"}
        text={"welcome to code"}
        classes={"thega"}
        style={{ color: "#f03" }}
        role={"heading"}
        ariaLable={"welcome to codeing"}
        ariaLabelledBy="title"
      />
      <TypoGraphy tag={"h3"} text={"welcome to code"} classes={""} />
      <TypoGraphy
        tag={"p"}
        text={"welcome to code"}
        classes={""}
        style={{ fontSize: "10px" }}
      >
        <span>umpiko</span>
      </TypoGraphy>
    </>
  );
}

export default App;
