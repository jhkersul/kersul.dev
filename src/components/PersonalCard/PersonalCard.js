import { useContext } from 'react';
import {
  Card,
  CardBody,
  Image,
  CardFooter,
  ResponsiveContext,
} from 'grommet'
import CardContent from '../CardContent/CardContent';
import LinksNav from '../LinksNav/LinksNav'
import ProfilePic from '../../images/profile-pic.jpg'
import colors from '../../config/colors';

const Content = () => (
  <>
    <CardBody height="small">
      <Image
        fit="cover"
        src={ProfilePic}
        a11yTitle="profile pic"
      />
    </CardBody>
    <CardContent />
    <CardFooter>
      <LinksNav />
    </CardFooter>
  </>
)

const PersonalCard = () => {
  const size = useContext(ResponsiveContext)
  const isSmallSize = size === 'small'
  const smallProps = { round: 'none', height: 'full', width: 'full' }

  return (
    <Card
      background={colors.alternateBackground}
      width="medium"
      elevation="none"
      {...(isSmallSize && smallProps)}
    >
      <Content />
    </Card>
  )
}

export default PersonalCard;
