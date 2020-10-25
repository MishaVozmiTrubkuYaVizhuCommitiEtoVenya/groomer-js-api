/**
 * Groomer Service
 * API для будущей GroomCRM или назовите ее уже как-нибудь. На этой странице расписаны основные эндпоинты, по которым можно получить данные из базы данных (или положить их туда, если будет такая возможность). Также здесь можно будет протестировать эти самые эндпоинты, посмотреть ответы и всякое такое.  TODO: 1. Обновить структуру описания в соответствии со структурой БД 2. Подготовить возможность тестирования 3. Добавить тест-кейсы для всего API  ### Changelog  **v1.2.1**: Добавил эндпоинт для получения информации об авторизованном Клиенте/Мастере  **v1.2.0**: Обновлены пути, респонсы, эндпоинты для приложений вынесены в отдельный стек  **v1.1.4**: Обновил структуру WorkingDiapason  **v1.1.3**: Добавил описания возвращаемых кодов.  **v1.1.2**: Удалил упоминания Питомцев и Пушей из АПИ  **v1.1.1**: Добавил параметр \"платформа\" для заказа, заменил OneSignal на FCM + APNs  **v1.1.0**: Убрал пуши из API  **v1.0.4**: добавлены фильтры по датам, добавлено поле телефона для мастеров (для смс-оповещений), добавлено поле push_device_id для отправки пушей на телефон. 
 *
 * The version of the OpenAPI document: 1.2.1
 * Contact: kosolapus@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";

/**
* Master service.
* @module api/MasterApi
* @version 1.2.1
*/
export default class MasterApi {

    /**
    * Constructs a new MasterApi. 
    * @alias module:api/MasterApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the clientClientMasterGet operation.
     * @callback module:api/MasterApi~clientClientMasterGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение списка мастеров конкретного салона
     * 
     * @param {Number} clientID ID салона
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Как много элементов должно возвращаться за один запрос (default to 25)
     * @param {Number} opts.offset Смещение от первого (default to 0)
     * @param {module:api/MasterApi~clientClientMasterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    clientClientMasterGet(clientID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientMasterGet");
      }

      let pathParams = {
        'clientID': clientID
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/client/{client}/master', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientMasterMasterDelete operation.
     * @callback module:api/MasterApi~clientClientMasterMasterDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {Number} clientID ID салона
     * @param {Number} master Id мастера
     * @param {module:api/MasterApi~clientClientMasterMasterDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clientClientMasterMasterDelete(clientID, master, callback) {
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientMasterMasterDelete");
      }
      // verify the required parameter 'master' is set
      if (master === undefined || master === null) {
        throw new Error("Missing the required parameter 'master' when calling clientClientMasterMasterDelete");
      }

      let pathParams = {
        'clientID': clientID,
        'master': master
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/client/{client}/master/{master}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientMasterMasterGet operation.
     * @callback module:api/MasterApi~clientClientMasterMasterGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение информации по конкретному мастеру
     * 
     * @param {Number} clientID ID салона
     * @param {Number} master Id мастера
     * @param {module:api/MasterApi~clientClientMasterMasterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    clientClientMasterMasterGet(clientID, master, callback) {
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientMasterMasterGet");
      }
      // verify the required parameter 'master' is set
      if (master === undefined || master === null) {
        throw new Error("Missing the required parameter 'master' when calling clientClientMasterMasterGet");
      }

      let pathParams = {
        'clientID': clientID,
        'master': master
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/client/{client}/master/{master}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientMasterMasterPatch operation.
     * @callback module:api/MasterApi~clientClientMasterMasterPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {Number} clientID ID салона
     * @param {Number} master Id мастера
     * @param {Object} opts Optional parameters
     * @param {Number} opts.id 
     * @param {String} opts.image 
     * @param {File} opts.imageUpload 
     * @param {String} opts.name 
     * @param {String} opts.phone 
     * @param {String} opts.description 
     * @param {String} opts.email 
     * @param {String} opts.password 
     * @param {module:api/MasterApi~clientClientMasterMasterPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clientClientMasterMasterPatch(clientID, master, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientMasterMasterPatch");
      }
      // verify the required parameter 'master' is set
      if (master === undefined || master === null) {
        throw new Error("Missing the required parameter 'master' when calling clientClientMasterMasterPatch");
      }

      let pathParams = {
        'clientID': clientID,
        'master': master
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'id': opts['id'],
        'image': opts['image'],
        'image_upload': opts['imageUpload'],
        'name': opts['name'],
        'phone': opts['phone'],
        'description': opts['description'],
        'email': opts['email'],
        'password': opts['password']
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/client/{client}/master/{master}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientMasterPost operation.
     * @callback module:api/MasterApi~clientClientMasterPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {Number} clientID ID салона
     * @param {Object} opts Optional parameters
     * @param {Number} opts.id 
     * @param {String} opts.image 
     * @param {File} opts.imageUpload 
     * @param {String} opts.name 
     * @param {String} opts.phone 
     * @param {String} opts.description 
     * @param {String} opts.email 
     * @param {String} opts.password 
     * @param {module:api/MasterApi~clientClientMasterPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    clientClientMasterPost(clientID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientMasterPost");
      }

      let pathParams = {
        'clientID': clientID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'id': opts['id'],
        'image': opts['image'],
        'image_upload': opts['imageUpload'],
        'name': opts['name'],
        'phone': opts['phone'],
        'description': opts['description'],
        'email': opts['email'],
        'password': opts['password']
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/client/{client}/master', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}