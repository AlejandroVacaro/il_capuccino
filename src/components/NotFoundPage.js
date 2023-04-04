import React from "react"

const NotFoundPage = () => {
  return (
    <div style={style.divNotFoundPage}>
      <p style={style.sitioNotFoundPage}>Sitio no encontrado.</p>
      <img style={style.imgNotFoundPage} src="https://static.vecteezy.com/system/resources/previews/006/796/852/non_2x/sad-coffee-character-in-flat-style-illustration-coffee-cup-cartoon-character-with-funny-expression-free-vector.jpg" />
    </div>
  )
};

export default NotFoundPage;

const style = {
  divNotFoundPage: {
    fontSize: "45px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#039be5",
  },
  sitioNotFoundPage: {
    marginTop: "60px",
  },
  imgNotFoundPage: {
    marginTop: "25px",
    width: "20%",
    height: "auto",
    borderRadius: "100%"
  }
}