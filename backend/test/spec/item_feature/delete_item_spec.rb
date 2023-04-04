# Requirement 12 - Only complete List Items can be removed

describe 'DELETE /items' do
    request = TodoRequests.new

    before :context do
        request.create_list(DATABASE[:listName][:listName_4])
        @listId = (request.get_list.size)-1
        request.create_item(@listId, DATABASE[:itemName][:itemName_1])
        request.create_item(@listId, DATABASE[:itemName][:itemName_3])
        @todo_list = request.get_list
        itemId = (@todo_list[((@todo_list.size)-1)]["items"].size) -1
        request.change_completition(@listId, itemId, true)
        @delete_item_response = request.delete_item(@listId, itemId)
    end

    context 'when deleting an existent item' do
        it 'responds with status code 200' do
            expect(@delete_item_response.code).to eql 200
        end

        it 'is correctly removed from the list' do
            expect(request.get_list[@listId]["items"].size).to be < @todo_list[@listId]["items"].size
        end

        it 'returns all remaining items' do
            expect(@delete_item_response.parsed_response.class).to eql Array
            expect(@todo_list[@listId]["items"].size).to eql (@delete_item_response.size + 1)
        end
    end

    context 'when deleting an inexistent item ID' do
        it 'should not delete any item' do
            expect(@delete_item_response.size).to eql request.delete_item(@listId, 5321).size
        end
    end

    context 'when deleting a non completed item' do
        before :context do
            @todo_list = request.get_list
        end

        it 'has completed status false', :focus do
            expect(@todo_list[@listId]["items"][0]["completed"]).to be false
        end

        it 'should not be deleted', :focus do
            expect(request.delete_item(@listId, 0).size).to eql @todo_list[@listId]["items"].size
        end
        
    end
end