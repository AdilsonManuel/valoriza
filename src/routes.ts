import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { CreateTagController } from './controllers/CreateTagController'
import { CreateUserController } from './controllers/CreateUserController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController'
import { ListUsersController } from './controllers/ListUsersController'
import { ListUserSenderComplimentsController } from './controllers/ListUserSenderComplimentsController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

const router = Router()
const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const complimentController = new CreateComplimentController()
const listUserSendComplimentsController =
  new ListUserSenderComplimentsController()
const listUserReceiverComplimentsController =
  new ListUserReceiveComplimentsController()
const listTagsController = new ListTagsController()
const listUserController = new ListUsersController()

router.post('/users', createUserController.handle)
router.post(
  '/tags',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
)
router.post('/login', authenticateUserController.handle)
router.post('/compliment', ensureAuthenticated, complimentController.handle)

router.get(
  '/users/compliments/send',
  ensureAuthenticated,
  listUserSendComplimentsController.handle
)
router.get(
  '/users/compliments/receive',
  ensureAuthenticated,
  listUserReceiverComplimentsController.handle
)
router.get('/tags', ensureAuthenticated, listTagsController.handle)
router.get('/users', ensureAuthenticated, listUserController.handle)

export { router }
