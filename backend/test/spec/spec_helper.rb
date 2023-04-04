require 'httparty'
require 'faker'
require_relative '../support/service_base.rb'
require_relative '../support/test_data.rb'
require_relative '../requests/todo_requests.rb'

RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  config.shared_context_metadata_behavior = :apply_to_host_groups
  config.color = true
  config.formatter = :documentation
end
