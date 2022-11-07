import Grid from '@mui/material/Grid'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'

interface IListItem {
  title: string
  listUrl: string
  detailUrl?: string
  material?: string
}

const imageList: IListItem[] = [
  {
    title: 'Pink cozie with white frills',
    listUrl: 'https://cupocheers.s3.us-west-2.amazonaws.com/CupOCheers_pink_white_frills_medium.jpeg',
    detailUrl: 'https://cupocheers.s3.us-west-2.amazonaws.com/CupOCheers_pink_white_frills.jpeg',
  },
  {
    title: 'Red yarn cozie',
    listUrl: 'https://cupocheers.s3.us-west-2.amazonaws.com/CupOCheers_red_yarn_medium.jpeg',
    detailUrl: 'https://cupocheers.s3.us-west-2.amazonaws.com/CupOCheers_red_yarn.jpeg',
  },
  {
    title: 'Aqua cozie',
    listUrl: 'https://cupocheers.s3.us-west-2.amazonaws.com/CupOCheers_aqua.jpeg',
  },
  {
    title: 'Blue cozie with gold frills',
    listUrl: 'https://cupocheers.s3.us-west-2.amazonaws.com/CupOCheers_blue_gold_frills.jpeg',
  },
  {
    title: 'Brown cozie',
    listUrl: 'https://cupocheers.s3.us-west-2.amazonaws.com/CupOCheers_brown.jpeg',
  },
  {
    title: 'Christmas red cozie with gold flecks',
    listUrl: 'https://cupocheers.s3.us-west-2.amazonaws.com/CupOCheers_christmas_red.jpeg',
  },
  {
    title: 'Light orange cozie',
    listUrl: 'https://cupocheers.s3.us-west-2.amazonaws.com/CupOCheers_light_orange.jpeg',
  },
  {
    title: 'Light violet cozie',
    listUrl: 'https://cupocheers.s3.us-west-2.amazonaws.com/CupOCheers_light_violet.jpeg',
  },
]

const Gallery = () => {
  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {imageList.map(item => (
        <ImageListItem key={item.listUrl}>
          <img src={item.listUrl} alt={item.title} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default Gallery
