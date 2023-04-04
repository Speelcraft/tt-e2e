# Requirement 1 - Users can have multiple Lists
# Requirement 3 - Newly added Lists have no List Items
# Requirement 4 - List names are unique

describe 'CREATE /lists' do
    request = TodoRequests.new

    before :context do
        @create_response = request.create_list(DATABASE[:listName][:listName_1])
        @todo_list = request.get_list
    end  

    context 'when creating a new list' do
        it 'responds with status code 200' do  # Warning - As a good practice it should return 201
            expect(@create_response.code).to eql 200
        end

        it 'returns the list name correctly' do
            expect(@create_response["name"]).to eql (@todo_list[((@todo_list.size)-1)]["name"])
        end

        it 'returns an array object for the items' do
            expect(@create_response["items"].class).to eql Array
        end

        it 'have no items' do
            expect(@create_response["items"].size).to eql 0
        end
    end

    context 'when creating multiples lists' do
        before :context do
            request.create_list(DATABASE[:listName][:listName_4])
        end

        it 'should create the new list' do
            expect(@todo_list.size).to be < request.get_list.size
        end

        it 'allows multiples lists' do
            expect(request.get_list.size).to be > 1
        end
    end

    context 'when creating list with a name that already exists' do
        it 'should not create the new list' do
            expect(request.create_list(@create_response["name"]).code).to eql 400
        end
    end

    context 'when creating list with empty name' do
        it 'should not create the new list' do
            expect(request.create_list("")).to eql 400
        end
    end
end