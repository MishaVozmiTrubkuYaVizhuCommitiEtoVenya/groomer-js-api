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

import ApiClient from '../ApiClient';

/**
 * The OneOfMasterClient model module.
 * @module model/OneOfMasterClient
 * @version 1.2.1
 */
class OneOfMasterClient {
    /**
     * Constructs a new <code>OneOfMasterClient</code>.
     * @alias module:model/OneOfMasterClient
     */
    constructor() { 
        
        OneOfMasterClient.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OneOfMasterClient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OneOfMasterClient} obj Optional instance to populate.
     * @return {module:model/OneOfMasterClient} The populated <code>OneOfMasterClient</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OneOfMasterClient();

            if (data.hasOwnProperty('response')) {
                obj['response'] = ApiClient.convertToType(data['response'], OneOfMasterClient);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/OneOfMasterClient} response
 */
OneOfMasterClient.prototype['response'] = undefined;






export default OneOfMasterClient;

