import accountModel from './account.model.js'

/**
 * Creates a new account.
 * @param {Object} req - The request object.
 * @param {Object} req.body - The request body containing the account details.
 * @param {Object} res - The response object.
 * @returns {Object} The response object with the created account details.
 */
export const createAccount = async (data) => {
  try {
    const account = new accountModel(data)
    await account.save()
    return {message: 'Account created successfully!', success: true, account}
  } catch (error) {
    return {message: 'Account creation failed!', success: false, error}
  }
}

/**
 * Retrieves all accounts.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} The response object with the fetched accounts.
 */
export const getAccounts = async (req, res) => {
  try {
    const accounts = await accountModel.find({})
    return res.status(200).send({message: 'Accounts fetched successfully!', accounts})
  } catch (error) {
    return res.status(500).send({message: 'Error fetching accounts!', error})
  }
}

/**
 * Retrieves an account by its ID.
 * @param {Object} req - The request object.
 * @param {string} req.params.id - The ID of the account to fetch.
 * @param {Object} res - The response object.
 * @returns {Object} The response object with the fetched account.
 */
export const getAccount = async (req, res) => {
  try {
    const account = await accountModel.findById(req.params.id)
    return res.status(200).send({message: 'Account fetched successfully!', account})
  } catch (error) {
    return res.status(500).send({message: 'Error fetching account!', error})
  }
}

/**
 * Updates an account by its ID.
 * @param {Object} req - The request object.
 * @param {string} req.params.id - The ID of the account to update.
 * @param {Object} req.body - The request body containing the updated account details.
 * @param {Object} res - The response object.
 * @returns {Object} The response object with the updated account details.
 */
export const updateAccount = async (req, res) => {
  try {
    const account = await accountModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    return res.status(200).send({message: 'Account updated successfully!', account})
  }catch(error){
    return res.status(500).send({message: 'Error updating account!', error})
  }
}

/**
 * Deletes an account by its ID.
 * @param {Object} req - The request object.
 * @param {string} req.params.id - The ID of the account to delete.
 * @param {Object} res - The response object.
 * @returns {Object} The response object with the deleted account details.
 */
export const deleteAccount = async (req, res) => {
  try {
    const account = await accountModel.findByIdAndDelete(req.params.id)
    return res.status(200).send({message: 'Account deleted successfully!', account})
  } catch (error) {
    return res.status(500).send({message: 'Error deleting account!', error})
  }
}
