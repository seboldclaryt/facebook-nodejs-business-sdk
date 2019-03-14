/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';

/**
 * TargetingGeoLocation
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class TargetingGeoLocation extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      cities: 'cities',
      countries: 'countries',
      country_groups: 'country_groups',
      custom_locations: 'custom_locations',
      electoral_districts: 'electoral_districts',
      geo_markets: 'geo_markets',
      large_geo_areas: 'large_geo_areas',
      location_cluster_ids: 'location_cluster_ids',
      location_set_ids: 'location_set_ids',
      location_types: 'location_types',
      medium_geo_areas: 'medium_geo_areas',
      metro_areas: 'metro_areas',
      neighborhoods: 'neighborhoods',
      places: 'places',
      political_districts: 'political_districts',
      regions: 'regions',
      small_geo_areas: 'small_geo_areas',
      subcities: 'subcities',
      subneighborhoods: 'subneighborhoods',
      zips: 'zips'
    });
  }
}
