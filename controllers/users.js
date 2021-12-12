const { response, query } = require("express");

const usuariosGet = (req=query, res = response) => {

    const {q,nombre='no name',apikey}=req.query

  res.json({
    q,nombre,apikey,
    msg: "get Api-controlador",
  });
};

const usuariosPost=(req,res=response)=>{
    const {nombre,edad}=req.body
    // console.log(nombre,edad);
    res.json({
        nombre,
        edad,
        msg:'post Api-usuariosPost'
    })
}
const usuariosPut=(req,res=response)=>{

    const id=req.params.id

    res.json({
        id,
        msg:'put Api-usuariosPut'
    })
}
const usuariosDelete=(req,res=response)=>{
    res.json({
        msg:'delete Api-usuariosDelete'
    })
}


module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete
};
