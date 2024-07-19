'use strict'

import depositH from '../depositH/depositH.controller.js'
import transferH from '../transferH/transferH.controller.js'
import productsH from '../productsH/productsH.controller.js'
import servicesShopH from '../servicesShopH/servicesShopH.controller.js'

export const getHistory = async (req, res) => {
    try {
        const { id } = req.params;
        const deposit = await depositH.getDepositHs(id, true);
        const transfer = await transferH.getTransferHs(id, true);
        const products = await productsH.getProductsHs(id, true);
        const services = await servicesShopH.getServicesShopHs(id, true);
        const newArray = deposit.concat(transfer, products, services);
        return res.status(200).send({ newArray });
    } catch (e) {
        console.error(e);
        return res.status(500).send({ message: 'Error getting' })
    }
}

