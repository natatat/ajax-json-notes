require 'json'
require 'sinatra'

get '/' do
  erb :index
end

post '/form' do
  # params[:words] => {"one"=>"input", "two"=>"input"}
  content_type :json
  return params[:words].to_json
end