import {
  Card,
  CardBody,
  Image,
  CardFooter,
} from 'grommet'
import CardContent from '../CardContent/CardContent';
import LinksNav from '../LinksNav/LinksNav'
import ProfilePic from '../../images/profile-pic.jpg'
import colors from '../../config/colors';

const PersonalCard = () => (
  <Card background={colors.alternateBackground} width="medium" elevation="none">
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
  </Card>
);

export default PersonalCard;
