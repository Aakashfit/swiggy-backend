const express = require('express')
const router = express.Router()
const { authenticateToken } = require('../middlewares/authenticateToken')

const {
  getAllRestaurants,
  getRestaurant,
  deleteRestaurant,
  registerRestaurant,
  loginRestaurant,
  getAllItems,
  addItem,
  updateItem,
  deleteItem,
  getAllOrders,
} = require('../controllers/restaurant')

router.get('/', getAllRestaurants)
router.get('/:id', getRestaurant)
router.delete('/:id', authenticateToken, deleteRestaurant)
router.post('/register', registerRestaurant)
router.post('/login', loginRestaurant)


router.get('/:id/items', getAllItems)
router.post('/:id/items', addItem)
router.patch('/:id/items/:itemId', updateItem)
router.delete('/:id/items/:itemId', deleteItem)

router.get('/:id/orders', getAllOrders)


module.exports = router