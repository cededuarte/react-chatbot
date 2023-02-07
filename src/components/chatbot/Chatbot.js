import React, { useState } from 'react'
import ChatBot from 'react-simple-chatbot'
import { ThemeProvider } from 'styled-components'
import Post from './Post'
import Link from './Link'
import '../../App.css'
const theme = {
  background: '#f5f8fb',
  fontFamily: '',
  headerBgColor: '#02397b',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#02397b',
  botFontColor: '#fff',
  userBubbleColor: '#f7b650',
  userFontColor: '#4a4a4a',
}

// all available config props
const config = {
  width: '300px',
  height: '400px',
  hideUserAvatar: true,
  placeholder: 'Type your response.',
  headerTitle: 'LMChatBot',
}

const Chatbot = (props) => {
  let [showChat, setShowChat] = useState(false)

  const startChat = () => {
    setShowChat(true)
  }
  const hideChat = () => {
    setShowChat(false)
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: showChat ? 'none' : '' }}>
        <ChatBot
          speechSynthesis={{ enable: true, lang: 'en-US' }}
          recognitionEnable={true}
          steps={[
            {
              id: 'welcome',
              message: 'Hello! I am LMChatBot. Your virtual assistant',
              trigger: 'q-firstname',
            },
            /* Paste */
            {
              id: 'q-firstname',
              message: 'Please enter your name before we proceed...',
              trigger: 'firstname',
            },
            {
              id: 'firstname',
              user: true,
              validator: (value) => {
                if (/^[A-Za-z]+$/.test(value)) {
                  return true
                } else {
                  return 'Please input alphabet characters only.'
                }
              },
              trigger: 'lmbot',
            },
            {
              id: 'lmbot',
              message:
                'Hi, {previousValue}! What can I do for you?',
              trigger: 'qtype',
            },
            {
              id: 'qtype',
              options: [
                { value: 2, label: 'Find a lawyer', trigger: '3' },
                { value: 3, label: 'I am a lawyer', trigger: 'lawyerhelp' },
                { value: 4, label: 'More Information', trigger: '6' },
              ],
            },
            {
              id: '3',
              message:
              'Please choose your category',
              trigger: 'categories',
            },
           {
              id: 'categories',
              options: [
                { value: 1, label: 'Family', trigger: 'help' },
                { value: 2, label: 'Employment', trigger: 'help' },
                { value: 3, label: 'Criminal Defense', trigger: 'help' },
                { value: 4, label: 'Real Estate', trigger: 'help' },
                { value: 5, label: 'Business', trigger: 'help' },
                { value: 6, label: 'Immigration', trigger: 'help' },
              ],
            },
            {
              id: 'help',
              message:
                'LegalMatch can help you find the right lawyer to resolve your legal issues',
              trigger: 'help1',
            },
            {
                id: 'help1',
              message:
                'Would you like to post your case?',
              trigger: 'postcase',
          },
             {
            id: 'postcase',
              options: [
                { value: 1, label: 'Yes', trigger: 'yescase' },
                { value: 3, label: 'More Info', trigger: 'more' },
                { value: 2, label: 'Go back', trigger: 'categories' },
                
              ],
            },
            {
              id: 'yescase',
              component:(
              <a
                href="https://www.legalmatch.com/find-lawyers.html"
                target="_blank">
                Click on this link to post your case 
              </a>),
              asMessage: true,
              trigger: 'isthishelpful',
            },    
            {
              id: 'more',
              component:(
                <a
                  href="https://www.legalmatch.com/law-library/"
                  target="_blank">
                  You may check on our Online Law Library
                </a>),
                asMessage: true,
                trigger: 'isthishelpful',
              },                 
            {
              id: 'lawyerhelp',
              message:
                'LegalMatch can help you get leads and land clients ',
              trigger: 'lawyerhelp1',
            },
            {
              id: 'lawyerhelp1',
                options: [
                  { value: 1, label: 'Register', trigger: 'register' },
                  { value: 3, label: 'Request a Demo', trigger: 'requestademo' },
                  { value: 4, label: 'More Information', trigger: '6' },
                  
                ],
              },
              {
                id: 'register',
                component:(
                  <a
                    href="https://www.legalmatch.com/home/info/infoLP3.do"
                    target="_blank">
                    Register Here
                  </a>),
                  asMessage: true,
                  trigger: 'isthishelpful',
                },     
                {
                  id: 'requestademo',
                  message:
                    'Our representative will get back to you in few hours.',
                  trigger: 'isthishelpful',
                },
            {
              id: '6',
              message: 'Not yet configured...',
              trigger: 'isthishelpful',
            },
            {
              id: 'isthishelpful',
              message: 'Do you have any other concerns?',
              trigger: 'submit',
            },
            {
              id: 'submit',
              options: [
                { value: 'y', label: 'Yes', trigger: 'qtype' },
                { value: 'n', label: 'No', trigger: 'end-message' },
              ],
            },
            {
              id: 'end-message',
              component: <Post />,
              asMessage: true,
              end: true,
            },
          ]}
          {...config}
        />
      </div>
      <div>
        {!showChat ? (
          <button className="btn" onClick={() => startChat()}>
            <i className="fa fa-minus"></i>
          </button>
        ) : (
          <button className="btn" onClick={() => hideChat()}>
            <i className="fa fa-plus"></i>
          </button>
        )}
      </div>
    </ThemeProvider>
  )
}

export default Chatbot
