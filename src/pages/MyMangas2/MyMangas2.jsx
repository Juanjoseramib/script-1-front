import mangasActions from '../../store/MyMangas/actions'
import React, { useEffect } from 'react'
import "./mymangas2.css"
import { useDispatch, useSelector } from 'react-redux'
import MyMangaCards2 from "../../components/Mymangacards2/MyMangaCards2"
import MangasCards from '../../components/MangasCards/MangasCards'
import mymangas_bg from "../../images/mymangas_bg.png"




export default function MyMangas2() {
let {read_myMangas} = mangasActions
let dispatch = useDispatch()

let token = localStorage.getItem('token')
let headers = { headers: { 'Authorization': `Bearer ${token}` } }

useEffect(
    () => {
        dispatch(read_myMangas({headers}))
    }, []
    )

  let mangas = useSelector(store => store.myMangas.myMangas)

  let name = ""
  if(mangas[0]?.author_id.name || mangas[0]?.author_id.last_name) {
    name = mangas[0]?.author_id.name
       if(mangas[0]?.author_id.last_name) {
        name += " "+mangas[0]?.author_id.last_name
     }
    }

    function handleEdit(e) {

    }


  return (
    <div className='mangas-cards'>
              <section className='title'>
            {name ? <h2>{name}</h2>: " "}
        </section>
            <MyMangaCards2/>
    </div>

  )
}
