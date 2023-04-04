describe 'DELETE /lists' do
    request = TodoRequests.new

    before :context do
        @create_response = request.create_list(DATABASE[:listName][:listName_3])
        @todo_list = request.get_list
        listId = ((@todo_list.size)-1)
        @delete_response = request.delete_list(listId)
    end  

    context 'when deleting an existent list' do
        it 'responds with status code 200' do
            expect(@delete_response.code).to eql 200
        end

        it 'is correctly removed from the toDo list' do
            expect(@create_response["name"]).not_to eql (request.get_list[((@delete_response.size)-1)]["name"])
        end

        it 'returns all remaining toDo lists' do
            expect(@delete_response.parsed_response.class).to eql Array
            expect(@todo_list.size).to eql (@delete_response.size + 1)
        end
    end

    context 'when deleting an inexistent list ID' do 
        it 'should not delete any list' do
            expect(@delete_response.size).to eql request.delete_list(1952).size
        end
    end
end