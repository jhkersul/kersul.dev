import {
  Box,
  Heading,
  Paragraph,
  Anchor
} from 'grommet'
import colors from '../../config/colors';

const CardContent = () => (
  <Box pad="medium" style={{ color: colors.secondary }}>
    <Heading level="2" margin="none" color={colors.primary}>J H KERSUL</Heading>
    <Paragraph>
      Hello! I'm a brazilian Specialist Software Engineer :)
    </Paragraph>
    <Paragraph margin={{ bottom: "none" }}>
      Currently working at <Anchor style={{ color: colors.secondary }} href="https://www.creditas.com/" target="_blank">Creditas Tech</Anchor>.
    </Paragraph>
  </Box>
)

export default CardContent;
