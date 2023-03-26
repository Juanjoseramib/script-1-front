import React from 'react'
import "./deletemymanga.css"
import { Toaster } from 'react-hot-toast'


export default function DeleteMyManga() {
  return (
    <div className='delete-modal'>
    <h2>Delete this manga?</h2>
    <div className='modal-btns'>
        <p >Delete</p>
        <p >Cancel</p>
    </div>
    <Toaster />
    </div>
  )
}
