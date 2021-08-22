import {
  Box,
  Button,
} from 'grommet'
import { Github, Instagram, Twitter, Linkedin } from 'grommet-icons';
import colors from '../../config/colors';

const LinksNav = () => (
  <Box direction="row" justify="center" background={colors.alternateBackground} width="full">
    <Button icon={<Github color={colors.primary} />} hoverIndicator href="https://github.com/jhkersul" target="_blank" />
    <Button icon={<Linkedin color={colors.primary} />} hoverIndicator href="https://www.linkedin.com/in/kersul/" target="_blank" />
    <Button icon={<Instagram color={colors.primary} />} hoverIndicator href="https://www.instagram.com/jhkersul/" target="_blank" />
    <Button icon={<Twitter color={colors.primary} />} hoverIndicator href="https://twitter.com/JHKersul" target="_blank" />
  </Box>
)

export default LinksNav;
