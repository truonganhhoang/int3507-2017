'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.group('api', () => {
  //  auth
  Route.get('login', 'UserController.login')

  // user
  Route.get('account', 'UserController.getAccountList').middleware('auth')

  // account
  Route.post('account', 'AccountController.create').middleware('auth')
  // Route.delete('account/:id', 'AccountController.delete').middleware('auth')
  Route.get('account/:id/balance', 'AccountController.getBalance').middleware('auth')

  // voting
  Route.post('voting/candidate', 'VotingController.getCandidateList').middleware('auth')
  Route.post('voting/unlock', 'AccountController.unlock').middleware('auth')
  Route.post('voting/get-vote', 'VotingController.totalVotesFor').middleware('auth')
  Route.post('voting/vote', 'VotingController.voteForCandidate').middleware('auth')
})
  .prefix('api/v1')
  .formats(['json'])
