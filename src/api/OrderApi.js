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
import Order from '../model/Order';

/**
* Order service.
* @module api/OrderApi
* @version 1.2.1
*/
export default class OrderApi {

    /**
    * Constructs a new OrderApi. 
    * @alias module:api/OrderApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the clientClientOrderGet operation.
     * @callback module:api/OrderApi~clientClientOrderGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * Store *Order* entity
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Как много элементов должно возвращаться за один запрос (default to 25)
     * @param {Number} opts.offset Смещение от первого (default to 0)
     * @param {module:api/OrderApi~clientClientOrderGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clientClientOrderGet(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset']
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
        '/client/{client}/order', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientOrderOrderDelete operation.
     * @callback module:api/OrderApi~clientClientOrderOrderDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {Number} orderID Id requested Order
     * @param {module:api/OrderApi~clientClientOrderOrderDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clientClientOrderOrderDelete(orderID, callback) {
      let postBody = null;
      // verify the required parameter 'orderID' is set
      if (orderID === undefined || orderID === null) {
        throw new Error("Missing the required parameter 'orderID' when calling clientClientOrderOrderDelete");
      }

      let pathParams = {
        'orderID': orderID
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
        '/client/{client}/order/{order}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientOrderOrderGet operation.
     * @callback module:api/OrderApi~clientClientOrderOrderGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Order} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {Number} orderID Id requested Order
     * @param {module:api/OrderApi~clientClientOrderOrderGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Order}
     */
    clientClientOrderOrderGet(orderID, callback) {
      let postBody = null;
      // verify the required parameter 'orderID' is set
      if (orderID === undefined || orderID === null) {
        throw new Error("Missing the required parameter 'orderID' when calling clientClientOrderOrderGet");
      }

      let pathParams = {
        'orderID': orderID
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
      let returnType = Order;
      return this.apiClient.callApi(
        '/client/{client}/order/{order}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientOrderOrderPatch operation.
     * @callback module:api/OrderApi~clientClientOrderOrderPatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {Number} orderID Id requested Order
     * @param {module:model/Order} order Optional description in *Markdown*
     * @param {module:api/OrderApi~clientClientOrderOrderPatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clientClientOrderOrderPatch(orderID, order, callback) {
      let postBody = order;
      // verify the required parameter 'orderID' is set
      if (orderID === undefined || orderID === null) {
        throw new Error("Missing the required parameter 'orderID' when calling clientClientOrderOrderPatch");
      }
      // verify the required parameter 'order' is set
      if (order === undefined || order === null) {
        throw new Error("Missing the required parameter 'order' when calling clientClientOrderOrderPatch");
      }

      let pathParams = {
        'orderID': orderID
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/client/{client}/order/{order}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientOrderPost operation.
     * @callback module:api/OrderApi~clientClientOrderPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Создание заявки на оказание услуг
     * 
     * @param {module:model/Order} order Store *Order* entity
     * @param {module:api/OrderApi~clientClientOrderPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clientClientOrderPost(order, callback) {
      let postBody = order;
      // verify the required parameter 'order' is set
      if (order === undefined || order === null) {
        throw new Error("Missing the required parameter 'order' when calling clientClientOrderPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/client/{client}/order', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
