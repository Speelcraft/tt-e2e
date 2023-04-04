describe 'GET /Server', :focus do
	request = TodoRequests.new

	before :context do
		@server_response = request.server_check
	end

	context 'when server is up' do
		it 'responds with status code 200' do
			expect(@server_response.code).to eql 200
    	end

		it 'resets the data' do
			expect(request.reset_data.code).to eql 200
		end
  	end

end