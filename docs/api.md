# REST API Documentation
The Back-End exposes a REST API to manipulate the **Lists** and their **List Items**.

## GET /lists
Get all Lists with their List Items.

**params**: n/a

**payload**: n/a

**returns**: all Lists following the format as in [data.json](../backend/data.json)

```sh
# Request example:
$ curl http://localhost:4567/lists

# Response example:
[{"name":"Groceries","items":[{"label":"Bread","completed":false},{"label":"Chese","completed":true},{"label":"Tomatoes","completed":false}]},{"name":"Work","items":[{"label":"Code reviews","completed":false},{"label":"DB migration","completed":true},{"label":"Documentation writing","completed":false}]}]
```

## POST /lists/add
Add a List.

**params**: n/a

**payload**: JSON object with `name` field, denoting the name of the new List

**returns**: JSON object with the newly added List

```sh
# Request example:
$ curl -X POST -H "Content-Type: application/json" \
-d '{"name":"School"}' \
http://localhost:4567/lists/add

# Response:
{"name":"School","items":[]}
```

## DELETE /lists/:list_id
Delete a List.

**params**:

 * `list_id`: zero-based index of the List to be removed

**payload**: n/a

**returns**: all remaining Lists following the format as in [data.json](../backend/data.json)

```sh
# Request example:
$ curl -X DELETE http://localhost:4567/lists/2

# Response:
[{"name":"Groceries","items":[{"label":"Bread","completed":false},{"label":"Chese","completed":true},{"label":"Tomatoes","completed":false}]},{"name":"Work","items":[{"label":"Code reviews","completed":false},{"label":"DB migration","completed":true},{"label":"Documentation writing","completed":false}]}]
```

## POST /list/:list_id/item/:item_id/complete/:completed
Mark List Item as completed/not completed.

**params**:

 * `list_id`: zero-based index of the List
 * `item_id`: zero-based index of the List Item
 * `completed`: boolean status

**payload**: n/a

**returns**: JSON object of the modified List Item

```sh
# Request example:
$ curl -X POST http://localhost:4567/list/0/item/0/complete/true

# Response:
{"label":"Bread","completed":true}
```

## POST /list/:list_id/add
Add List Item.

**params**:

 * `list_id`: zero-based index of the List

**payload**: JSON object with `label` field, denoting the label of the new List Item

**returns**: JSON object of the newly added List Item

```sh
 # Request example:
$ curl -X POST -H "Content-Type: application/json" \
-d '{"label":"butter"}' \
http://localhost:4567/list/0/add

# Response:
{"label":"butter","completed":false}
```

## DELETE /list/:list_id/item/:item_id
Delete a List Item.

**params**:

 * `list_id`: zero-based index of List
 * `item_id`: zero-based index of List Item

**payload**: n/a

**returns**: JSON array of the remaining List Items of the List changed

```sh
# Request example:
$ curl -X DELETE http://localhost:4567/list/0/item/0

# returned:
[{"label":"tomatoes","completed":false},{"label":"bread","completed":false}]
```

## POST /overwrite_database
Overwrites the database (`data.json` file) with the content provided in the request.

**params**: n/a

**payload**: JSON array, formatted as in `data.json`

**returns**: all Lists following the format as in [data.json](../backend/data.json)

```sh
# Request example:
$ curl -X POST -H "Content-Type: application/json" \
-d '[{"name":"L1","items":[{"label":"L11","completed":false},{"label":"L12","completed":true}]}]' \
http://localhost:4567/overwrite_database

# Response:
[{"name":"L1","items":[{"label":"L11","completed":false},{"label":"L12","completed":true}]}]
```
