# Requirement 7 - A List can contain multiple List Items
# Requirement 9 - List Item labels are unique in scope of a List

describe 'CREATE /items' do
    request = TodoRequests.new

    before :context do
        @create_response = request.create_list(DATABASE[:listName][:listName_4])
        @todo_list = request.get_list
        @listId = ((@todo_list.size)-1)
        @create_item_response = request.create_item(@listId, DATABASE[:itemName][:itemName_1])
    end  

    context 'when creating a new item' do
        it 'responds with status code 200' do  # Warning - As a good practice it should return 201
            expect(@create_item_response.code).to eql 200
        end

        it 'returns the item name correctly' do
            expect(@create_item_response["label"]).to eql (request.get_list[((@todo_list.size)-1)]["items"][0]["label"])
        end

        it 'returns the completition status as false' do
            expect(@create_item_response["completed"]).to eql false
        end
    end

    context 'when creating multiples items' do
        before :context do
            @todo_list = request.get_list
            request.create_item(@listId, DATABASE[:itemName][:itemName_2])
        end

        it 'should create the new item' do
            expect(@todo_list[((@todo_list.size)-1)]["items"].size).to be < request.get_list[((@todo_list.size)-1)]["items"].size
        end

        it 'allows multiples items' do
            expect(request.get_list[((@todo_list.size)-1)]["items"].size).to be > 1
        end
    end

    context 'when creating items with a name that already exists' do
        it 'should not create the new item' do
            expect(request.create_item(@listId, DATABASE[:itemName][:itemName_1]).code).to eql 400
        end
    end

    context 'when creating items with empty name' do
        it 'should not create the new item' do
            expect(request.create_item(@listId, "").code).to eql 400
        end
    end
end