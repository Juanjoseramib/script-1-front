import React, { useState } from 'react'
import "./mymangacards2.css"
import { Link as Anchor } from 'react-router-dom'
import { useSelector } from 'react-redux'
import H2 from '../../components/H2/H2'
import Image from '../../components/Image/Image'
import DeleteMyManga from "../../components/DeleteMyManga/DeleteMyManga"
import addIcon from "../../images/addIcon.png"
import editIcon from "../../images/editIcon.png"




export default function MyMangaCards2() {
    
    let [showDelete, setshowDelete] = useState(false)
    const handleDelete = () => setshowDelete(!showDelete)
    let mangas = useSelector(store => store.myMangas.myMangas)


  return (
    <div className='mangas-cards'>
      
      {
        mangas.length ? mangas.map((manga, i) => {
            let card =
        <section className='card' key={i}>
                    <div className='card-text'>
                        <div className={'card-color-'+manga.category_id.name}></div>
                        <div className='text'>
                            <div className='createAndEdit-icons'>
                                <Anchor to={'/chapter-form/' + manga._id}><Image src={addIcon} /></Anchor>
                                <Anchor to={'/edit/' + manga._id}><Image src={editIcon} /></Anchor>
                            </div>
                            <div>
                                <H2 text={manga.title} />
                                <span className={'span-'+manga.category_id.name}>{manga.category_id.name}</span>
                            </div>
                            <div className='actions-btns'>
                                <Anchor className='myMangas-card-anchor' to={'/mangas/' + manga._id + "/1"}>Read</Anchor>
                                <Anchor id={manga._id} className='myMangas-card-anchor editBtn' >Edit</Anchor>
                                <Anchor id={manga._id} className='myMangas-card-anchor deleteBtn' onClick={handleDelete} > { (showDelete) ? (<DeleteMyManga/>) : (null) } Delete</Anchor>
                            </div>
                        </div>
                    </div>
                    <div className='card-img'>
                        <Image  src={manga.cover_photo} alt='manga-image' />
                    </div>
                </section>
                return card
            }) : <H2 text='No mangas founded' />
  
        }

    </div>
  )
}
