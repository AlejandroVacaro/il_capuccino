import React from "react"

const NotFoundPage = () => {
  return (
    <div style={style.divNotFoundPage}>
      <h1 style={style.sitioNotFoundPage}>Sitio no encontrado.</h1>
      <img style={style.imgNotFoundPage} src="https://static.vecteezy.com/system/resources/previews/006/796/852/non_2x/sad-coffee-character-in-flat-style-illustration-coffee-cup-cartoon-character-with-funny-expression-free-vector.jpg" />
    </div>
  )
};

export default NotFoundPage;

const style = {
  divNotFoundPage: {
    display:"flex",
    flexDirection:"column",
    alignItems: "center"
  },
  sitioNotFoundPage: {
    marginTop: "60px",
  },
  imgNotFoundPage: {
    width:"40%",
    height: "auto"
  }
}