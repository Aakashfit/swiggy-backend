const express = require('express')
const router = express.Router()

const {
  getAllCustomers,
  registerCustomer,
  loginCustomer,
  updateCustomer,
  deleteCustomer,
  getAllOrders,
  addOrder
} = require('../controllers/customer')
const { authenticateToken } = require('../middlewares/authenticateToken')

router.get('/', getAllCustomers)
router.post('/register', registerCustomer)
router.post('/login', loginCustomer)
router.patch('/:id/update', authenticateToken,updateCustomer)
router.delete('/:id/delete', authenticateToken,deleteCustomer)

router.get('/:id/orders', authenticateToken,getAllOrders)
router.post('/:id/orders', authenticateToken,addOrder)

module.exports = router