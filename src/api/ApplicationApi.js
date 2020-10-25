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
import InlineResponse200 from '../model/InlineResponse200';
import InlineResponse2001 from '../model/InlineResponse2001';
import InlineResponse2002 from '../model/InlineResponse2002';
import Order from '../model/Order';

/**
* Application service.
* @module api/ApplicationApi
* @version 1.2.1
*/
export default class ApplicationApi {

    /**
    * Constructs a new ApplicationApi. 
    * @alias module:api/ApplicationApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the clientClientGet operation.
     * @callback module:api/ApplicationApi~clientClientGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение данных салона - адреса, телефоны, социалки и т.п.
     * Получение данных для салона
     * @param {Number} clientID ID салона
     * @param {module:api/ApplicationApi~clientClientGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    clientClientGet(clientID, callback) {
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientGet");
      }

      let pathParams = {
        'clientID': clientID
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
        '/client/{client}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientMasterGet operation.
     * @callback module:api/ApplicationApi~clientClientMasterGetCallback
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
     * @param {module:api/ApplicationApi~clientClientMasterGetCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the clientClientMasterMasterGet operation.
     * @callback module:api/ApplicationApi~clientClientMasterMasterGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение информации по конкретному мастеру
     * 
     * @param {Number} clientID ID салона
     * @param {Number} masterID Id мастера
     * @param {module:api/ApplicationApi~clientClientMasterMasterGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    clientClientMasterMasterGet(clientID, masterID, callback) {
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientMasterMasterGet");
      }
      // verify the required parameter 'masterID' is set
      if (masterID === undefined || masterID === null) {
        throw new Error("Missing the required parameter 'masterID' when calling clientClientMasterMasterGet");
      }

      let pathParams = {
        'clientID': clientID,
        'masterID': masterID
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
     * Callback function to receive the result of the clientClientMasterMasterWorkingDiapasonGet operation.
     * @callback module:api/ApplicationApi~clientClientMasterMasterWorkingDiapasonGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение расписания мастера
     * Store *WorkingDiapason* entity
     * @param {Number} masterID Id мастера
     * @param {Number} clientID ID салона
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Как много элементов должно возвращаться за один запрос (default to 25)
     * @param {Number} opts.offset Смещение от первого (default to 0)
     * @param {String} opts.dateStart Начало периода
     * @param {String} opts.dateEnd Конец периода
     * @param {module:api/ApplicationApi~clientClientMasterMasterWorkingDiapasonGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */
    clientClientMasterMasterWorkingDiapasonGet(masterID, clientID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'masterID' is set
      if (masterID === undefined || masterID === null) {
        throw new Error("Missing the required parameter 'masterID' when calling clientClientMasterMasterWorkingDiapasonGet");
      }
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientMasterMasterWorkingDiapasonGet");
      }

      let pathParams = {
        'masterID': masterID,
        'clientID': clientID
      };
      let queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'date_start': opts['dateStart'],
        'date_end': opts['dateEnd']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;
      return this.apiClient.callApi(
        '/client/{client}/master/{master}/working-diapason', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientMasterMasterWorkingDiapasonWorkingDiapasonGet operation.
     * @callback module:api/ApplicationApi~clientClientMasterMasterWorkingDiapasonWorkingDiapasonGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение деталей временного отрезка
     * 
     * @param {Number} masterID Id мастера
     * @param {Number} clientID ID салона
     * @param {Number} workingDiapasonID Id requested WorkingDiapason
     * @param {module:api/ApplicationApi~clientClientMasterMasterWorkingDiapasonWorkingDiapasonGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    clientClientMasterMasterWorkingDiapasonWorkingDiapasonGet(masterID, clientID, workingDiapasonID, callback) {
      let postBody = null;
      // verify the required parameter 'masterID' is set
      if (masterID === undefined || masterID === null) {
        throw new Error("Missing the required parameter 'masterID' when calling clientClientMasterMasterWorkingDiapasonWorkingDiapasonGet");
      }
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientMasterMasterWorkingDiapasonWorkingDiapasonGet");
      }
      // verify the required parameter 'workingDiapasonID' is set
      if (workingDiapasonID === undefined || workingDiapasonID === null) {
        throw new Error("Missing the required parameter 'workingDiapasonID' when calling clientClientMasterMasterWorkingDiapasonWorkingDiapasonGet");
      }

      let pathParams = {
        'masterID': masterID,
        'clientID': clientID,
        'workingDiapasonID': workingDiapasonID
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
        '/client/{client}/master/{master}/working-diapason/{working-diapason}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientOrderPost operation.
     * @callback module:api/ApplicationApi~clientClientOrderPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Создание заявки на оказание услуг
     * 
     * @param {module:model/Order} order Store *Order* entity
     * @param {module:api/ApplicationApi~clientClientOrderPostCallback} callback The callback function, accepting three arguments: error, data, response
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

    /**
     * Callback function to receive the result of the clientClientPromotionGet operation.
     * @callback module:api/ApplicationApi~clientClientPromotionGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение списка акций для салона
     * 
     * @param {Number} clientID ID салона
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Как много элементов должно возвращаться за один запрос (default to 25)
     * @param {Number} opts.offset Смещение от первого (default to 0)
     * @param {module:api/ApplicationApi~clientClientPromotionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    clientClientPromotionGet(clientID, opts, callback) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientPromotionGet");
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
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/client/{client}/promotion', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientPromotionPromotionGet operation.
     * @callback module:api/ApplicationApi~clientClientPromotionPromotionGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение детальной информации по акции
     * 
     * @param {Number} clientID ID салона
     * @param {Number} promotionID Id requested Promotion
     * @param {module:api/ApplicationApi~clientClientPromotionPromotionGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    clientClientPromotionPromotionGet(clientID, promotionID, callback) {
      let postBody = null;
      // verify the required parameter 'clientID' is set
      if (clientID === undefined || clientID === null) {
        throw new Error("Missing the required parameter 'clientID' when calling clientClientPromotionPromotionGet");
      }
      // verify the required parameter 'promotionID' is set
      if (promotionID === undefined || promotionID === null) {
        throw new Error("Missing the required parameter 'promotionID' when calling clientClientPromotionPromotionGet");
      }

      let pathParams = {
        'clientID': clientID,
        'promotionID': promotionID
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
        '/client/{client}/promotion/{promotion}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the clientClientServiceGet operation.
     * @callback module:api/ApplicationApi~clientClientServiceGetCallback
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
     * @param {module:api/ApplicationApi~clientClientServiceGetCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the clientClientServiceServiceGet operation.
     * @callback module:api/ApplicationApi~clientClientServiceServiceGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Получение детальной информации услуги
     * 
     * @param {Number} clientID ID салона
     * @param {Number} serviceID ID услуги
     * @param {module:api/ApplicationApi~clientClientServiceServiceGetCallback} callback The callback function, accepting three arguments: error, data, response
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


}
