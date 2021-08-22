import {
  Heading,
  Paragraph,
  Anchor,
  CardBody
} from 'grommet'
import colors from '../../config/colors';

const CardContent = () => (
  <CardBody pad="medium" background={colors.alternateBackground}>
    <Heading level="2" margin="none" color={colors.primary}>J H KERSUL</Heading>
    <Paragraph color={colors.secondary}>
      Hello! I'm a brazilian Specialist Software Engineer :)
    </Paragraph>
    <Paragraph margin={{ bottom: "none" }} color={colors.secondary}>
      Currently working at <Anchor color={colors.secondary} href="https://www.creditas.com/" target="_blank">Creditas Tech</Anchor>.
    </Paragraph>
  </CardBody>
)

export default CardContent;
