import React from "react"

const Cart = () => {
  return (
    <div style={style.divContruccion}>
      <h1 style={style.sitioConstruccion}>Sitio en construcción.</h1>
      <img style={style.imgConstruccion} src="https://static.vecteezy.com/system/resources/previews/006/796/852/non_2x/sad-coffee-character-in-flat-style-illustration-coffee-cup-cartoon-character-with-funny-expression-free-vector.jpg" />
    </div>
  )
};

export default Cart

const style = {
  divContruccion: {
    display:"flex",
    flexDirection:"column",
    alignItems: "center"
  },
  sitioConstruccion: {
    marginTop: "60px",
  },
  imgConstruccion: {
    width:"40%",
    height: "auto"
  }
}