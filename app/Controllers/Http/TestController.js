'use strict'

class TestController {

  /**
  * @swagger
  * /api/hello:
  *   get:
  *     tags:
  *       - Test
  *     summary: GET hello
  *     parameters:
  *       - name: name
  *         description: Name of the user
  *         in: query
  *         required: false
  *         type: string
  *     responses:
  *       200:
  *         description: Send hello message
  *         example:
  *           message: Hello Guess
  *           method: GET
  */
  async getHello({ request, response }) {
    const name = request.input('name', 'Guess')
    response.send({ message: 'Hello ' + name, method: 'GET' })
  }

  /**
  * @swagger
  * /api/hello:
  *   post:
  *     tags:
  *       - Test
  *     summary: POST hello
  *     parameters:
  *       - name: name
  *         description: Name of the user
  *         in: formData
  *         required: false
  *         type: string
  *     responses:
  *       200:
  *         description: Send hello message
  *         example:
  *           message: Hello Guess
  *           method: POST
  */
  async postHello({ request, response }) {
    const name = request.input('name', 'Guess')
    response.send({ message: 'Hello ' + name, method: 'POST' })
  }

  async getTime({ response }) {
    response.send({ message: `Time: ${new Date()}` })
  }
}

module.exports = TestController