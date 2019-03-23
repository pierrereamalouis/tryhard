<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* Admin Routes */
Route::get('/', 'AdminPagesController@index');

Route::get('/leagues', 'AdminPagesController@showLeagues');
Route::get('/league/create-new', 'AdminPagesController@newLeague');
Route::get('/league/edit/{$id}', 'AdminPagesController@editLeague');

Route::get('/poolers', 'AdminPagesController@showPoolers');
Route::get('/pooler/create-new', 'AdminPagesController@newPooler');
Route::get('/pooler/edit/{$id}', 'AdminPagesController@editPooler');

Route::get('/pooler-teams', 'AdminPagesController@showPoolerTeams');
Route::get('/pooler-team/create-new', 'AdminPagesController@newPoolerTeam');
Route::get('/pooler-team/edit/{$id}', 'AdminPagesController@editPoolerTeam');

Route::get('/keepers', 'AdminPagesController@showKeepers');
Route::get('/keeper/create-new', 'AdminPagesController@newKeeper');
Route::get('/keeper/edit/{$id}', 'AdminPagesController@editKeeper');







/* User Routes */
