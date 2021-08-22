import { useContext } from 'react';
import {
  Card,
  CardHeader,
  Image,
  CardFooter,
  ResponsiveContext,
} from 'grommet'
import CardContent from '../CardContent/CardContent';
import LinksNav from '../LinksNav/LinksNav'
import ProfilePic from '../../images/profile-pic.jpg'
import colors from '../../config/colors';

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
      <CardHeader>
        <Image
          fit="cover"
          src={ProfilePic}
          a11yTitle="profile pic"
        />
      </CardHeader>
      <CardContent />
      <CardFooter>
        <LinksNav />
      </CardFooter>
    </Card>
  )
}

export default PersonalCard;
