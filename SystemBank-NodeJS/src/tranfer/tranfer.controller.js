import Tranfers from "./tranfer.model.js";

export const test=(req, res) => {
  console.log('running test')
  return res.send({message: 'running test'})
}

// new Tranfers
export const newTranfers = async(req, res) => {
  try {
    let data = req.body
    data.status = true
    let tranfer = new Tranfers(data)
    await tranfer.save()
    return res.status(500).send({message: 'error when making a transfer'})
  } catch (err) {
    console.error(err);
    return res.status(500).send({message: 'error when making a transfer'})
  }
}

// mostrar la transeferencia realizada 
export const getTranfer = async(req, res) => {
  try {
    let tranfer = await Tranfers.find()
    return res.send({tranfer})
  } catch (error) {
    console.error(error)
    return res.status(500).send({message: 'error getting transfer'})
  }
}
