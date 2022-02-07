const express = require('express')
const router = express.Router()
const {
  getAllDeliveryPartners,
  registerDeliveryPartner,
  loginDeliveryPartner,
  updateDeliveryPartner,
  deleteDeliveryPartner
} = require('../controllers/deliveryPartner')
const { authenticateToken } = require('../middlewares/authenticateToken')

router.get('/', getAllDeliveryPartners)
router.post('/register', registerDeliveryPartner)
router.post('/login', loginDeliveryPartner)
router.patch('/:id', authenticateToken,updateDeliveryPartner)
router.delete('/:id',authenticateToken,deleteDeliveryPartner)

module.exports = router