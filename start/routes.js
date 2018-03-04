'use strict'

const Route = use('Route')

Route.on('/').render('welcome')

Route.group(() => {
  /**
   * @swagger
   * /api:
   *   get:
   *     summary: Welcome
   *     responses:
   *       200:
   *         description: Welcome
   *         example:
   *           message: Welcome to Adonis
   */
  Route.get('/', async ({ response }) => {
    return response.send({ message: 'Welcome to Adonis' })
  })

  Route.get('hello', 'TestController.getHello')
  Route.post('hello', 'TestController.postHello')

  Route.get('time', 'TestController.getTime')
}).prefix('api')
