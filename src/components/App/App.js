import {
  Grommet,
} from 'grommet'
import MainContent from '../MainContent/MainContent';

const customTheme = {
  global: {
    font: {
      family: 'Roboto Condensed'
    }
  },
};

const App = () => (
  <Grommet full theme={customTheme}>
    <MainContent />
  </Grommet>
);

export default App;
