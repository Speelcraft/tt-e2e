#require_relative '../support/service_base.rb'
class TodoRequests
    def server_check
        ToDoWeblist.get('')
    end

    def reset_data
        ToDoWeblist.post('/overwrite_database', body: [].to_json)
    end

    def get_list
        ToDoWeblist.get("/lists")
    end

    def create_list(listName)
        ToDoWeblist.post("/lists/add", body: {
            "name": listName
        }.to_json) 
    end

    def delete_list(listId)
        ToDoWeblist.delete("/lists/" + listId.to_s)
    end

    def create_item(listId, itemName)
        ToDoWeblist.post("/list/" + listId.to_s + "/add", body: {
            "label": itemName
        }.to_json) 
    end

    def delete_item(listId, itemId)
        ToDoWeblist.delete("/list/" + listId.to_s + "/item/" + itemId.to_s) 
    end

    def change_completition(listId, itemId, status)
        ToDoWeblist.post("/list/" + listId.to_s + "/item/" + itemId.to_s + "/complete/" + status.to_s)
    end
end