'use strict';

/**
 * customer-address service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customer-address.customer-address');
