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
]

const Gallery = () => {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {imageList.map(item => (
        <ImageListItem key={item.listUrl}>
          <img
            src={item.listUrl}
            srcSet={item.detailUrl ? item.detailUrl : item.listUrl}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default Gallery
