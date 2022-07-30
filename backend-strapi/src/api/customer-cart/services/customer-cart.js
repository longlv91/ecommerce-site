'use strict';

/**
 * customer-cart service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customer-cart.customer-cart');
