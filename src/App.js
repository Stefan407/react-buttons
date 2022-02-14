import './App.css';
import ButtonStyle from "./components/ButtonStyle"

function App() {
  return (
    <>
      <div className='buttons-wrap'>
        <ButtonStyle icon="leftIcon" content="Button" size="large" checked={true} />
        <ButtonStyle icon="noIcon" content="Button" size="large" />
        <ButtonStyle icon="rightIcon" content="Button" size="large" />
        <ButtonStyle icon="onlyIcon" content="Button" size="large" />
      </div>
      <div className='buttons-wrap'>
        <ButtonStyle icon="leftIcon" content="Button" size="medium" checked={true} />
        <ButtonStyle icon="noIcon" content="Button" size="medium" />
        <ButtonStyle icon="rightIcon" content="Button" size="medium" />
        <ButtonStyle icon="onlyIcon" content="Button" size="medium" />
      </div>
      <div className='buttons-wrap'>
        <ButtonStyle icon="leftIcon" content="Button" size="small" checked={true} />
        <ButtonStyle icon="noIcon" content="Button" size="small" />
        <ButtonStyle icon="rightIcon" content="Button" size="small" />
        <ButtonStyle icon="onlyIcon" content="Button" size="small" />
      </div>
    </>
  );
}

export default App;

