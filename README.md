# update-collection

This repository contains a GitHub Action that help automate publishing Postman Collections to the Public API Network. You can use these actions to update a Postman collection.
Check out the full repository of Github Actions here: [https://github.com/stcalica/postman-publish-action](https://github.com/stcalica/postman-publish-action)

## Update Postman Collection
This action updates a Postman collection using the collection's UID via the Postman API. 
You can use this action when you need to update the latest version of a collection as part of your build or deployment process.

Inputs:
postman_api_key: Your Postman API key for authentication.
collection_id: The unique identifier of the Postman collection you want to retrieve.
Example Usage:
- name: Update Postman Collection
  uses: stcalica/update-collection@main
  
  with:
    postman_api_key: ${{ secrets.POSTMAN_API_KEY }}
    collection_id: 'your-collection-id'
    collection_data: {"info":{"_postman_id":"beaa7f72-356e-4ca8-95cd-333cd4be4563","name":"Test Update Collection","schema":"https://schema.getpostman.com/json/collection/v2.1.0/collection.json","updatedAt":"2024-10-10T06:21:41.000Z","createdAt":"2024-10-08T08:13:58.000Z","lastUpdatedBy":"37385351","uid":"37385351-beaa7f72-356e-4ca8-95cd-333cd4be4563"},"item":[{"name":"update this request","id":"7a845396-1e78-44c8-b356-510019b279c1","request":{"method":"GET","header":[],"url":{"raw":""}},"response":[],"uid":"37385351-7a845396-1e78-44c8-b356-510019b279c1"}]}
