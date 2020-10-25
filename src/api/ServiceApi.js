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
import InlineResponse2001 from '../model/InlineResponse2001';
import Service from '../model/Service';

/**
* Service service.
* @module api/ServiceApi
* @version 1.2.1
*/
export default class ServiceApi {

    /**
    * Constructs a new ServiceApi. 
    * @alias module:api/ServiceApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the clientClientServiceGet operation.
     * @callback module:api/ServiceApi~clientClientServiceGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение списка Услуг, которые оказывает салон
     * Store *Service* entity
     * @param {Number} clientID ID салона
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Как много элементов должно возвращаться за один запрос (default to 25)
     * @param {Number} opts.offset Смещение от первого (default to 0)
     * @param {module:api/ServiceApi~clientClientServiceGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    clientClientServiceGet(clientID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientServiceGet");
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
      let returnType = InlineResponse2001;
      return this.apiClient.callApi(
        '/client/{client}/service', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientServicePost operation.
     * @callback module:api/ServiceApi~clientClientServicePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {String} name Название Услуги
     * @param {File} imageUpload Загружаемое изображение услуги
     * @param {Array.<module:model/Number>} serviceType Тип услуги - для кошек, для собак, для других
     * @param {module:api/ServiceApi~clientClientServicePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clientClientServicePost(name, imageUpload, serviceType, callback) {
      let postBody = null;
      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling clientClientServicePost");
      }
      // verify the required parameter 'imageUpload' is set
      if (imageUpload === undefined || imageUpload === null) {
        throw new Error("Missing the required parameter 'imageUpload' when calling clientClientServicePost");
      }
      // verify the required parameter 'serviceType' is set
      if (serviceType === undefined || serviceType === null) {
        throw new Error("Missing the required parameter 'serviceType' when calling clientClientServicePost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': name,
        'image_upload': imageUpload,
        'service_type': this.apiClient.buildCollectionParam(serviceType, 'csv')
      };

      let authNames = ['bearerAuth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = null;
      return this.apiClient.callApi(
        '/client/{client}/service', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientServiceServiceDelete operation.
     * @callback module:api/ServiceApi~clientClientServiceServiceDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {Number} clientID ID салона
     * @param {Number} serviceID ID услуги
     * @param {module:api/ServiceApi~clientClientServiceServiceDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clientClientServiceServiceDelete(clientID, serviceID, callback) {
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientServiceServiceDelete");
      }
      // verify the required parameter 'serviceID' is set
      if (serviceID === undefined || serviceID === null) {
        throw new Error("Missing the required parameter 'serviceID' when calling clientClientServiceServiceDelete");
      }

      let pathParams = {
        'clientID': clientID,
        'serviceID': serviceID
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
        '/client/{client}/service/{service}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientServiceServiceGet operation.
     * @callback module:api/ServiceApi~clientClientServiceServiceGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение детальной информации услуги
     * 
     * @param {Number} clientID ID салона
     * @param {Number} serviceID ID услуги
     * @param {module:api/ServiceApi~clientClientServiceServiceGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    clientClientServiceServiceGet(clientID, serviceID, callback) {
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientServiceServiceGet");
      }
      // verify the required parameter 'serviceID' is set
      if (serviceID === undefined || serviceID === null) {
        throw new Error("Missing the required parameter 'serviceID' when calling clientClientServiceServiceGet");
      }

      let pathParams = {
        'clientID': clientID,
        'serviceID': serviceID
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
        '/client/{client}/service/{service}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientServiceServicePatch operation.
     * @callback module:api/ServiceApi~clientClientServiceServicePatchCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * 
     * 
     * @param {Number} clientID ID салона
     * @param {Number} serviceID ID услуги
     * @param {module:model/Service} service Optional description in *Markdown*
     * @param {module:api/ServiceApi~clientClientServiceServicePatchCallback} callback The callback function, accepting three arguments: error, data, response
     */
    clientClientServiceServicePatch(clientID, serviceID, service, callback) {
      let postBody = service;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientServiceServicePatch");
      }
      // verify the required parameter 'serviceID' is set
      if (serviceID === undefined || serviceID === null) {
        throw new Error("Missing the required parameter 'serviceID' when calling clientClientServiceServicePatch");
      }
      // verify the required parameter 'service' is set
      if (service === undefined || service === null) {
        throw new Error("Missing the required parameter 'service' when calling clientClientServiceServicePatch");
      }

      let pathParams = {
        'clientID': clientID,
        'serviceID': serviceID
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
        '/client/{client}/service/{service}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
