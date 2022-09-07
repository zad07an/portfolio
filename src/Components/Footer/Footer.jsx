import React, { useState, useCallback, useContext } from 'react'
import SubmitModal from '../SubmitModal/SubmitModal';
import './Footer.css'
import './FooterResponsive.css'


export default function Footer({contact, switcher}) {

  // TODO: Here is a logic for open modal, lock scroll while modal is open, and message sent pop up for 1.5 secondes

  const [submitModal, setSubmitModal] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [nameInp, setNameInp] = useState('')
  const [mailInp, setMailInp] = useState('')
  const [messageInp, setMessageInp] = useState('')

  const closeModal = useCallback(() => {
    setSubmitModal(submitModal)
    setNameInp('')
    setMailInp('')
    setMessageInp('')
  }, [submitModal, setSubmitModal]) 

  const openModal = useCallback(() => {
    setSubmitModal(!submitModal)
    setModalActive(!modalActive);
    setTimeout(() => {
      setSubmitModal(closeModal);
      setModalActive(modalActive)
    }, 1500)
  }, [submitModal, setSubmitModal])

  modalActive ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto'

  const disabledButtonStyle = nameInp.length === 0 ? {background: 'gray', cursor: 'default'} : mailInp.length === 0 ? {background: 'gray', cursor: 'default'} : !mailInp.includes('@') ? {background: 'gray', cursor: 'default'} : messageInp.length === 0 ? {background: 'gray', cursor: 'default'} : null;

  const disabledButton = nameInp.length === 0 ? true : mailInp.length === 0 ? true : !mailInp.includes('@') ? true : messageInp.length === 0 ? true : false;

  return (
    <div ref={contact} className='footer-container'>
      {
        submitModal ? <SubmitModal switcher={switcher}/> : null
      }
      <div className="footer-title-box">
        <h3>Contact</h3>
        <span>Get In Touch</span>
      </div>
      <div className="footer-main-boxes">
        <div className="footer-right-box">
          <form className='footer-form' onSubmit={(e) => {
            e.preventDefault()
            openModal
          }
          }>
            <div className="name-input-box inp-box">
              <input type="text"
              value={nameInp}
              style={nameInp.length !== 0 ? {boxShadow: '0 0 10px green, 0 0 15px green', background: 'rgb(201, 255, 201)'} : null}
              onChange={(e) => setNameInp(e.target.value)}
              className='footer-contact-name-input input'
              placeholder='Username' 
              required
              />
              <div className='input-message-box'>
                {nameInp.length === 0 ? null : <span className='done-span'>Done!</span>}
              </div>
            </div>
            <div className="mail-input-box inp-box">
              <input type="email"
              value={mailInp}
              onChange={(e) => setMailInp(e.target.value)}
              className="footer-contact-mail-input input"
              style={mailInp.length === 0 ? {border: 'none'} : !mailInp.includes('@') ? {border: '1px solid red', boxShadow: '0 0 10px red, 0 0 15px red', background: 'rgb(255, 196, 196)'} : {border: '1px solid green', boxShadow: '0 0 10px green, 0 0 15px green', background: 'rgb(201, 255, 201)'}} 
              placeholder='E-mail'
              required
              />
              <div className='input-message-box'>
                {mailInp.length === 0 ? null : !mailInp.includes('@') ? <span className='error-span'>Missed '@'</span>  : <span className='done-span'>Done!</span>}
              </div>
            </div>
            <div className="message-input-box inp-box">
              <textarea value={messageInp}
              style={messageInp.length !== 0 ? {boxShadow: '0 0 10px green, 0 0 15px green', background: 'rgb(201, 255, 201)'} : null}
              onChange={(e) => setMessageInp(e.target.value)} className="footer-contact-message-input input"
              placeholder='Message'
              required
              />
              <div className='input-message-box'>
                {messageInp.length === 0 ? null : <span className='done-span'>Done!</span>}
              </div>
            </div>
            <div className="footer-button-box">
              <button className="footer-contact-submit-button" onClick={openModal} style={disabledButtonStyle} disabled={disabledButton}>Send Message</button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer-copyright-box">
        <span className='footer-copyright'>&copy; Copyright 2022 by Aram Zadoyan</span>
      </div>
    </div>
  )
}
