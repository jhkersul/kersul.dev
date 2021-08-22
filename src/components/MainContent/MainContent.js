import { useContext } from 'react';
import {
  Main,
  ResponsiveContext
} from 'grommet'
import PersonalCard from '../PersonalCard/PersonalCard';
import colors from '../../config/colors'

const MainContent = () => {
  const size = useContext(ResponsiveContext)
  const isSmallSize = size === 'small'

  return (
    <Main pad={isSmallSize ? undefined : 'small' } background={colors.background} align="center" justify="center">
      <PersonalCard />
    </Main>
  )
}

export default MainContent
