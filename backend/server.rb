# frozen_string_literal: true

require 'sinatra'
require 'sinatra/json'

set :bind, '0.0.0.0'

before do
  @data = JSON.parse(File.read('data.json'))
end

get '/' do
  File.read('./public/index.html')
end

get '/lists' do
  json @data
end

post '/lists/add' do
  new_list = { 'name' => JSON.parse(request.body.read)['name'], 'items' => [] }
  @data << new_list
  File.open('data.json', 'w') { |f| f.write(@data.to_json) }
  json new_list
end

delete '/lists/:list_id' do
  @data.delete_at(params['list_id'].to_i)
  File.open('data.json', 'w') { |f| f.write(@data.to_json) }
  json @data
end

post '/list/:list_id/item/:item_id/complete/:completed' do
  sleep rand(2..5)
  @data[params['list_id'].to_i]['items'][params['item_id'].to_i]['completed'] = params['completed'] == 'true'
  File.open('data.json', 'w') { |f| f.write(@data.to_json) }
  json @data[params['list_id'].to_i]['items'][params['item_id'].to_i]
end

post '/list/:list_id/add' do
  new_item = { 'label' => JSON.parse(request.body.read)['label'], 'completed' => false }
  @data[params['list_id'].to_i]['items'] << new_item
  File.open('data.json', 'w') { |f| f.write(@data.to_json) }
  json new_item
end

delete '/list/:list_id/item/:item_id' do
  @data[params['list_id'].to_i]['items'].delete_at(params['item_id'].to_i)
  File.open('data.json', 'w') { |f| f.write(@data.to_json) }
  json @data[params['list_id'].to_i]['items']
end

post '/overwrite_database' do
  new_data = JSON.parse(request.body.read)
  File.open('data.json', 'w') { |f| f.write(new_data.to_json) }
  json new_data
end
