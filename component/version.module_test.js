'use strict';

describe('myComponent.version module', function () {
  beforeEach(module('myComponent.version'));

  describe('version service', function () {
    it('should return current version', inject(function (version) {
      expect(version).toEqual('0.1');
    }));
  });
});
