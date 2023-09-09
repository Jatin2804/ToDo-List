import React from 'react'

const Footer = () => {
 let footerstyle={
    position:"relative",
    top:"0vh",
    width:"100%",
    border:"2px solid red",
 }

  return (
    <footer className="bg-dark text-light" style={footerstyle}>
     <p className="text-center">
      Copyright &copy; MyTodosList.com
    </p>
    </footer>
  )
}

export default Footer
