describe 'GET /lists' do
    request = TodoRequests.new

    before :context do
        @todo_list = request.get_list
    end  

    context 'when requesting the list' do
        it 'responds with status code 200' do
            expect(@todo_list.code).to eql 200
        end

        it 'returns an array object' do
            expect(@todo_list.parsed_response.class).to eql Array
        end
    end
end

