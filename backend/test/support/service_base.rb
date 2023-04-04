module ToDoWeblist
    include HTTParty
    base_uri 'http://localhost:4567'
    format :json
    headers 'Content-Type': 'application/json'
end