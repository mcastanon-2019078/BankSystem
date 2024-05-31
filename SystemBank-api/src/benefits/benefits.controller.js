import Benefits from "./benefits.model.js";
 
export const test=(req, res) => {
  console.log('running test')
  return res.send({message: 'running test'})
}
 
// add Benefits
export const addBenefits = async(req, res) => {
  try {
    let data = req.body
    data.status = true
    let benefit = new Benefits(data)
    await benefit.save()
    return res.status(500).send({message: 'error al agregar el beneficio'})
  } catch (err) {
    console.error(err);
    return res.status(500).send({message: 'error al agregar un beneficio'})
  }
}
 
// show benefit 
export const getBenefits = async(req, res) => {
  let benefit = await Benefits.find()
  return res.status
}

//