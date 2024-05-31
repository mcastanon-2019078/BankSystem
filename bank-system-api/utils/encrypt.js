// Encriptar, Validar... diferentes datos
import { compare, hash } from 'bcrypt'

export const encryptPassword = async (password) => {
  try {
    return await hash(password, 5)
  } catch (error) {
    console.error(error)
    return error
  }
}

export const comparePassword = async (password, hash) => {
  try {
    return await compare(password, hash)
  } catch (error) {
    console.error(error)
    return error
  }
}
