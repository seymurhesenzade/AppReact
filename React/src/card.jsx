import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Azerbaijani Dolma"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://media-cdn.tripadvisor.com/media/photo-s/0e/41/0b/98/veggie-dolam.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
       Azerbaycan Metbexi: <br />
       Resept:
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Resept:</Typography>
       
          <Typography paragraph>
          Bu gün menyumuzda Azərbaycan süfrəsinin ən sevilən yeməklərindən biri olan yarpaq dolması var. Azərbaycan dolmasının özünəməxsus ləzzəti və ğörünüşü var. İçindəki bol-bol göyərti dolmaya gözəl dad və ətir qatır.
Yarpaq dolması Türkiyə, İran, Yunanıstan, Livan və bir sıra başqa ölkələrin mətbəxlərində də mövcuddur. Bu ölkələrdə yarpaq dolması adətən uzunsov şəkildə bükülür, bəzən incə, bəzən də çox qalın olur. Azərbaycan dolması isə kiçik və yumru şəkildə olur (Gəncədə yarpaq dolmasının daha uzunsov şəkildə hazırlandığını eşitmişəm).

Yarpaq dolmasını həm təzə tənək yarpağından, həm də duza qoyulmuş yarpaqdan hazırlamaq olar. Eyni zamanda buzluqda saxlanılmış təzə yarpaqdan da istifadə etmək olar. Təzə yarpaqdan bişirilən yarpaq dolmasının  dadına doymaq olmur – o qədər ləzzətli olur ki!

Aşağıdakı video və yazılı reseptə əsaslanaraq, siz də evinizdə bu ləziz yeməyi bişirə bilərsiniz. Hamınıza nuş olsun!
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
