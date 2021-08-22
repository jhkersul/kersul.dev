import {
  Grommet,
  Main,
} from 'grommet'
import PersonalCard from '../PersonalCard/PersonalCard';
import colors from '../../config/colors'

const customTheme = {
  global: {
    font: {
      family: 'Roboto Condensed'
    }
  },
};

function App() {
  return (
    <Grommet full theme={customTheme}>
      <Main pad="small" background={colors.background} align="center" justify="center">
        <PersonalCard />
      </Main>
    </Grommet>
  );
}

export default App;
