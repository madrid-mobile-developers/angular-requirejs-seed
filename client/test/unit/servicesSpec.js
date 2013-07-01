define([
	'angularMocks', 'app', 'services/version'
], function(mocks) {
	'use strict';

	describe('service', function() {
		beforeEach(mocks.module('app.services'));
		describe('version', function() {
			it('should return current version', mocks.inject(function(version) {
				expect(version).toEqual('0,1');
			}));
		});
	});
});